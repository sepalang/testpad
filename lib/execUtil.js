const runner = require('@sepalang/runner')
const opn  = require('opn');

module.exports.esTest = function(testOption){
  const { files, verbose, open } = testOption
  
  return runner(async ({ run, cd, pathJoin, pathRelative })=>{
  
    const testCommands = []
    const testBasepath = cd('../preset');
    
    
    //input
    testCommands.push(files.join(' '))

    //config
    testCommands.push('--config')
    testCommands.push(cd('../preset/jest.config.js',__dirname))
    
    //verbose
    if(verbose){
      testCommands.push('--verbose')
    }
    
    //coverage
    testCommands.push('--collectCoverage')
    testCommands.push('true')
    //
    testCommands.push('--coverageReporters')
    testCommands.push('lcov')
    //
    testCommands.push('--coverageDirectory')
    testCommands.push('coverage')
    //
    
    const coverageIgnores = [`!**/node_modules/**`, `!**/coverage/**`, `!**/*.spec.js`, `!**/*.test.js`]
    const coverageFroms = files.map(testPath=>`${pathJoin(pathRelative(testBasepath,testPath),"**","*.js")}`).concat(coverageIgnores)
    
    coverageFroms.forEach((testPath)=>testCommands.push(`--collectCoverageFrom=${testPath}`))
    
    //execute
    // console.log('testCommands',testCommands)
    const executeCommands = ['jest'].concat(testCommands)
    await run(executeCommands)
    
    //coverage open
    if(open === true){
      opn(cd("../preset/coverage/lcov-report/index.html"), {
        wait:false
      })
    }
  })
}
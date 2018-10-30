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
    
    const coverageIgnores = [`**/node_modules/**`, `**/*.spec.js`, `**/*.test.js`]
    const coverageFroms = []
    
    files.forEach(testPath=>{
      const coverageRelativePath = pathRelative(testBasepath,testPath);
      coverageFroms.push(`${pathJoin(coverageRelativePath,"**","*.js")}`)
      coverageIgnores.forEach(ignorePattern=>coverageFroms.push(`!${pathJoin(coverageRelativePath,ignorePattern)}`))
    })
    
    coverageFroms.forEach((testPath)=>testCommands.push(`--collectCoverageFrom=${testPath}`))
    
    //execute
    const executeCommands = ['jest'].concat(testCommands)
    //console.log('executeCommands', executeCommands)
    
    await run(executeCommands)
    
    //coverage open
    if(open === true){
      opn(cd("../preset/coverage/lcov-report/index.html"), {
        wait:false
      })
    }
  })
}
const runner = require('@sepalang/runner')
const opn  = require('opn');
const path = require('path')

module.exports.esTest = function(testOption){
  const { files, verbose, open } = testOption
  
  return runner(async ({ run, find })=>{
  
    const testCommands = []
    
    //input
    testCommands.push(files.join(' '))

    //config
    testCommands.push('--config')
    testCommands.push(find('../preset/jest.config.js',__dirname))
    
    //verbose
    if(verbose){
      testCommands.push('--verbose')
    }
    
    //coverage
    const coverageFroms = files.map((testPath)=>`${path.join(testPath,'**/*.js')}`).concat([`!**/node_modules/**`])
    testCommands.push('--collectCoverage')
    coverageFroms.forEach((testPath)=>testCommands.push(`--collectCoverageFrom=${testPath}`))
    testCommands.push('--coverageReporters=lcov')
    
    //execute
    const executeCommands = ['jest'].concat(testCommands)
    await run(executeCommands)
    
    //coverage open
    if(open === true){
      opn(find("../preset/coverage/lcov-report/index.html"))
    }
  })
}
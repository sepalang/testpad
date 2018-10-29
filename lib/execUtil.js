const runner = require('@sepalang/runner')
const path = require('path')

module.exports.esTest = function(testOption){
  const { files, verbose } = testOption
  
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
    
    //execute
    const executeCommands = ['jest'].concat(testCommands)
    await run(executeCommands)
  })
}
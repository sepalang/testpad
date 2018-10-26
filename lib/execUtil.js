const runner = require('@sepalang/runner')

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
    
    //execute
    const executeCommands = ['jest'].concat(testCommands)
    await run(executeCommands)
  })
}
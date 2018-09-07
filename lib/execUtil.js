const runner = require('@sepalang/runner')



module.exports.esTest = function(testOption){
  const { input, verbose } = testOption
  
  return runner(async ({ run, find })=>{
  
    const testCommands = []
    
    //input
    testCommands.push(input)

    //config
    testCommands.push('--config')
    testCommands.push(find('../preset/jest.config.js',__dirname))
    
    //verbose
    if(verbose){
      testCommands.push('--verbose')
    }
    
    console.log('testCommands',testCommands)
    
    //execute
    const executeCommands = ['jest'].concat(testCommands)
    await run(executeCommands)
  })
}
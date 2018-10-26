#!/usr/bin/env node
const { args:argv } = require('@sepalang/myself')
const { esTest } = require('../lib/execUtil')
const path = require('path')
const cwd  = process.cwd()

const testOptions = {
  verbose : !!argv.verbose,
  files   : undefined
}

if(argv._ && argv._ instanceof Array && argv._.length){
  testOptions.files = argv._[0].trim().split(/[\,\s]+/)
}

testOptions.files = testOptions.files.map(input=>{
  return input.indexOf("/") === 0 ? input : path.resolve(cwd, input)
})

esTest(testOptions)
.catch(e=>{
  console.log(`Padoc --test fail!`,e)
  process.exit(1)
})
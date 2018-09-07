#!/usr/bin/env node
const { args:argvProps } = require('@sepalang/myself')
const { esTest } = require('../lib/execUtil')

const argv = {
  input     : argvProps['_'][0],
  verbose   : !!argvProps.verbose
}

esTest(argv)
.catch(e=>{
  console.log(`Padoc --test fail!`,e)
  process.exit(1)
})
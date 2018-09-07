const fs            = require('fs')
const path          = require('path')
const { getPadocBabelConfig } = require('@sepalang/padoc')

module.exports = require('babel-jest').createTransformer(getPadocBabelConfig());
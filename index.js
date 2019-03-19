module.exports = (key = Buffer.from('2acf43d2dac518de039249ad1a89972b64f5437024f7e138021df3e1f341b2ca', 'hex')) => require('node-gyp-build')(__dirname).initialize(key)

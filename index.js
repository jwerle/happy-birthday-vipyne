module.exports = (key = Buffer.from('40e6146bc2a268f72167c3a3b615db8b9f96f6462117b993b81918af08e8c97e', 'hex')) => require('node-gyp-build')(__dirname).initialize(key)

const { bold, green, blue } = require('chalk')
const { clearScreen } = require('ansi-escapes')
const emoji = require('node-emoji')

const repeat = (v, n) => Array(n).fill(v).join(' ')

const pre = `${emoji.get('palm_tree')} ${emoji.get('palm_tree')} ${emoji.get('palm_tree')} ${emoji.get('japanese_ogre')} ${emoji.get('football')}`
const post = `${emoji.get('football')} ${emoji.get('japanese_ogre')} ${emoji.get('palm_tree')} ${emoji.get('palm_tree')} ${emoji.get('palm_tree')}`

process.stdout.write(clearScreen)
console.log(`


                 ${repeat(emoji.get('star'), 16)}

  ${pre} Happy Birthay ${bold(green('@vipyne'))} (${blue('https://github.com/vipyne')}) ${post}

                 ${repeat(emoji.get('nerd_face'), 16)}


`)


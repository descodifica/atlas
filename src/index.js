//TODO: DiscordBot - https://trello.com/c/iK7f9pRi/31-discordbot

const cliHeader = require('@desco/cli-header')

require('./functions')
require('./globals')

class Atlas {
  constructor () {
    global.Atlas = this

    this.Mail = require('./modules/Mail')
    this.Orm = require('./modules/Orm')
    this.Server = require('./modules/Server')
  }

  async init () {
    cliHeader({
      title: 'AtlasJS v' + require('../package.json').version,
      size: 25,
      align: 'center',
    })

    require('./env.js')()

    await this.Orm.init()
    await this.Mail.init()
    await this.Server.init()

    return this
  }
}

module.exports = async () => {
  return new Atlas().init()
}
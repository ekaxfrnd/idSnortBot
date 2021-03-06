const { Telegraf } = require('telegraf')
const fs = require('fs')
const readline = require('linebyline')

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const messages = require('./messages')
const snort = require('./commands/snort')
const watch = require('./commands/watch')

bot.start(ctx => {
    ctx.reply(messages.start)
})

bot.help(ctx => {
    ctx.reply(messages.help)
})

bot.command('snortstart', async ctx => {
    try {
        await snort.snortStart()
        ctx. reply('snort run successfully.')
    } catch (err) {
        ctx.reply('snort failed to start.')
    }
})

bot.command('snortstop', async ctx => {
    try {
        await snort.snortStop()
        ctx.reply('snort quit successfully.')
    } catch (err) {
        ctx.reply('snort failed to stop.')
    }
})

bot.command('snortrestart', async ctx => {
    try {
        await snort.snortRestart()
        ctx.reply('snort has restarted successfully.')
    } catch (err) {
        ctx.reply('snort failed to restart.')
    }
})

bot.command('logstart', async ctx => {
    try {
        await watch.watchStart()
        ctx.reply('log has started successfully.')
    } catch (err) {
        ctx.reply('watch failed to start.')
    }
})

bot.command('logstop', async ctx => {
    try {
        await watch.watchStop()
        ctx.reply('log has been stopped.')
    } catch (err) {
        ctx.reply('failed to stop.')
    }
})

bot.launch()
const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    snortStart: async () => {
        const { stdout, stderr } = await exec('sudo systemctl start snort')
        if(stdout) {
            console.log(`stdout: ${stdout}`)
        }
        if(stderr) {
            console.log(`stderr: ${stderr}`)
        }
    },
    snortStop: async () => {
        const { stdout, stderr } = await exec('sudo systemctl stop snort')
        if(stdout) {
            console.log(`stdout: ${stdout}`)
        }
        if(stderr) {
            console.log(`stderr: ${stderr}`)
        }
    },
    snortRestart: async () => {
        const { stdout, stderr } = await exec('sudo systemctl restart snort')
        if(stdout) {
            console.log(`stdout: ${stdout}`)
        }
        if(stderr) {
            console.log(`stderr: ${stderr}`)
        }
    }
}
const util = require('util')
const exec = util.promisify(require('child_process').exec)

module.exports = {
    watchStart: async () => {
        const { stdout, stderr } = await exec('sudo systemctl start watch')
        if(stdout) {
            console.log(`stdout: ${stdout}`)
        }
        if(stderr) {
            console.log(`stderr: ${stderr}`)
        }
    },
    watchStop: async () => {
        const { stdout, stderr } = await exec('sudo systemctl stop watch')
        if(stdout) {
            console.log(`stdout: ${stdout}`)
        }
        if(stderr) {
            console.log(`stderr: ${stderr}`)
        }
    }
}
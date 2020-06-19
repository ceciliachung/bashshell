module.exports.pwd = pwd

function pwd() {
  process.stdout.write(process.cwd())
  process.stdout.write('\nprompt > ')
}
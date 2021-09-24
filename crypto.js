// working with hashing

const crypto = require('crypto')
//md5 algorithm not really reliable
const hash = crypto.createHash('md5')
.update('password')
.digest('hex')

console.log(hash);

const hash2 = crypto.createHmac('sha256', 'secret')
.update('password')
.digest('hex')

console.log(hash2);
const errMsg = require('./errorKeys.js')

module.exports = function weaveErrorMsg (errCode) {
    if(errCode && errMsg[errCode]) {
        return {
                code: errCode,
                message: errMsg[errCode]
            }
    } else {
        return {
                code: 500,
                message: 'unkonwn error'
            }
    }
}
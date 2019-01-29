var errorMsgs = require('./errorCode');

function formatData(errMsg, data) {
    return {
        status: {
            code: errorMsgs[errMsg],
            msg: errMsg
        },
        data: data || {}
    }
}

module.exports = formatData;
// js生成随机hash序列， 默认长度24

function createHash (hashLength) {

    return Array.from(Array(Number(hashLength) || 24), () => Math.floor(Math.random() * 36).toString(36)).join('');
}

module.exports = createHash;
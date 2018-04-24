function getSafe(fn, defaultVal) {
    try {
        return fn();
    } catch (e) {
        return defaultVal;
    }
}

module.exports = getSafe;
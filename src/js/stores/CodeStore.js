class CodeStore {

    constructor(key) {
        this.key = key;
    }

    getCode() {
        return localStorage.getItem(this.key);
    }

    setCode(code) {
        return localStorage.setItem(this.key, code);
    }

}
module.exports = CodeStore;
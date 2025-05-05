export default {
    getStorage() {
        return JSON.parse(localStorage.getItem(process.env.VUE_APP_STORAGE_STORAGE) || "{}");
    },
    setStorage(key, value) {
        let storage = this.getStorage();
        storage[key] = value;
        window.localStorage.setItem(process.env.VUE_APP_NAME_SPACE, JSON.stringify(storage));
    },
    getItem(key) {
        let storage = this.getStorage();
        return storage[key];
    },
    clearItem(key) {
        let storage = this.getStorage();
        delete storage[key];
        window.localStorage.setItem(process.env.VUE_APP_NAME_SPACE, JSON.stringify(storage));
    },
    clearAll() {
        window.localStorage.clear();
    }
}

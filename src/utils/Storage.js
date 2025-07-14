class Storage {
    save(key, data) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }

    get(key) {
        if (typeof window !== 'undefined') {
            const json = localStorage.getItem(key);
            return JSON.parse(json);
        }
        return null;
    }
}

const storage = new Storage();
export default storage;

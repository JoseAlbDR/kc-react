const storage = {
  get(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  set(key: string, value: string) {
    localStorage.setItem(key, JSON.stringlify(value));
  },

  remove(key: string) {
    localStorage.remoteItem(key);
  },

  clear() {
    localStorage.clear();
  },
};

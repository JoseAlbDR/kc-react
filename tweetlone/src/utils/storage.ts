const storage = {
  get(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },

  set(key: string, value: string) {
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};

export default storage;

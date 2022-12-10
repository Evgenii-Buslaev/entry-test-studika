class List {
  constructor() {
    this.list = null;
    this.added = [];
  }

  defineList(list) {
    this.list = list;
    return this.list;
  }

  filterList(query) {
    const result = list.filter((title) => title.includes(query));
    return result;
  }

  addItem(item) {
    this.added.push(item);
  }

  deleteItem(item) {
    this.added = this.added.filter((elem) => elem !== item);
  }
}

export default new List();

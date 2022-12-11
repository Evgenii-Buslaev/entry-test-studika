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

  addItem(id) {
    const element = this.added.find((elem) => +elem.id === +id);
    console.log(this.list);
    console.log(element);
    if (element) {
      this.added = this.added.filter((elem) => +elem.id !== +id);
    } else {
      this.added.push(this.list.find((elem) => +elem.id === +id));
    }
    return this.added;
  }

  deleteItem(item) {
    this.added = this.added.filter((elem) => elem !== item);
  }
}

export default new List();

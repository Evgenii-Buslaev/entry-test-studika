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
    if (id === "all") {
      const russia = this.added.find((elem) => elem.id === "all");
      if (russia) {
        this.added = this.added.filter((region) => region.id !== "all");
      } else {
        this.added.push(this.list.find((region) => region.id === "all"));
      }
      return this.added;
    }

    const element = this.added.find((elem) => +elem.id === +id);
    if (element) {
      this.added = this.added.filter((elem) => +elem.id !== +id);
    } else {
      this.added.push(this.list.find((elem) => +elem.id === +id));
    }

    console.log(this.added);
    return this.added;
  }

  deleteItem(id) {
    this.added = this.added.filter((elem) => elem.id !== id);
    return this.added;
  }
}

export default new List();

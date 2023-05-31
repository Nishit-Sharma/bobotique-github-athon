class Item {
    constructor(name, price) {
        this.itemName = name;
        this.itemPrice = price;
    }

    getName() {
        return this.itemName;
    }

    getPrice() {
        return this.itemPrice;
    }
}

class Mall {
    constructor(mallName) {
        this.mallName = mallName;
        this.itemList = [];
    }

    getMallName() {
        return this.mallName;
    }

    displayItems() {
        for (const item of this.itemList) {
            console.log(item.getName() + ": $" + item.getPrice());
        }
    }

    addItem(item) {
        this.itemList.push(item);
    }

    addItemAtIndex(item, index) {
        this.itemList.splice(index, 0, item);
    }

    removeItem(index) {
        this.itemList.splice(index, 1);
    }

    getItemName(index) {
        return this.itemList[index].getName();
    }

    getItemPrice(index) {
        return this.itemList[index].getPrice();
    }

    getItem(index) {
        return this.itemList[index];
    }

    setItem(name, price, index) {
        this.itemList[index] = new Item(name, price);
    }
}

class Store {
    constructor(name) {
        this.name = name;
        this.malls = [];
    }

    addMall(mall) {
        this.malls.push(mall);
    }
}

const store = new Store("My Store");

const Mall1 = new Mall("Mall 1");
const Mall2 = new Mall("Mall 2");
const Mall3 = new Mall("Mall 3");
const Mall4 = new Mall("Mall 4");

store.addMall(Mall1);
store.addMall(Mall2);
store.addMall(Mall3);
store.addMall(Mall4);

export { Store, Mall, Item, store, Mall1, Mall2, Mall3, Mall4 };
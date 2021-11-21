module.exports = function Wish(oldWish) {
    this.items = oldWish.items || {};
    //atribut dengan nama items
    
    this.add = function(item, id) {
        var storedItem = this.items[id];
        // storedItem 
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0};
        }
    };
};
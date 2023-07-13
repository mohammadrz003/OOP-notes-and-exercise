function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    if (!item) {
      throw new Error("Invalid item");
    }
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items = this.items.filter((value) => value !== item);
  };
}

const e = new HtmlElement();

HtmlSelectElement.prototype = e;

const se = new HtmlSelectElement([1, 2, 3]);

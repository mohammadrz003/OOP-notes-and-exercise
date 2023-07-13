function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

const e = new HtmlElement();

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

  this.render = function () {
    const selectElement = document.createElement("select");
    for (let i = 0; i < this.items.length; i++) {
      const option = document.createElement("option");
      option.value = this.items[i];
      option.text = this.items[i];
      selectElement.appendChild(option);
    }
    return selectElement;
  };
}

HtmlSelectElement.prototype = e;

function HtmlImageElement(source) {
  let src = source;

  this.render = function () {
    const imageElement = document.createElement("img");
    imageElement.src = src;
    return imageElement;
  };

  Object.defineProperty(this, "src", {
    get: function () {
      return src;
    },
    set: function (value) {
      if (typeof value !== "string") {
        throw new Error("Value must be string");
      }
      src = value;
    },
  });
}

HtmlImageElement.prototype = e;
HtmlImageElement.prototype.constructor = HtmlImageElement;

// create instances
const se = new HtmlSelectElement([1, 2, 3]);
const img = new HtmlImageElement();

const elements = [
  new HtmlSelectElement([1, 3, 5]),
  new HtmlImageElement("http://example.com/img.jpg"),
];

for (let element of elements) {
  console.log(element.render());
}

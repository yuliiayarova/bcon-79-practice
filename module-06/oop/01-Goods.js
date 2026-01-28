class Goods {
  constructor(name, price, image, count) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.count = count;
  }
  draw() {
    const div = document.createElement("div");
    div.setAttribute("class", "goods");
    const h1 = document.createElement("h1");
    h1.textContent = this.name;
    const p = document.createElement("p");
    p.setAttribute("class", "price");
    p.textContent = this.price;
    const img = document.createElement("img");
    img.src = this.image;
    img.alt = this.name;
    img.width = 300;
    div.append(h1, p, img);
    return div;

    //   const goods = document.createElement("div");
    //   goods.classList.add("goods");

    //   const title = document.createElement("h1");
    //   title.textContent = this.name;

    //   const price = document.createElement("p");
    //   price.classList.add("price");
    //   price.textContent = this.price;

    //   const img = document.createElement("img");
    //   img.src = this.image;
    //   img.alt = this.name;
    //   img.width = 300;

    //   goods.append(title, price, img);

    //   return goods;
  }
}

class InheriteGoods extends Goods {
  constructor(name, price, image, count, sale) {
    super(name, price, image, count);
    this.sale = sale;
  }
  draw() {
    const div = super.draw();
    if (this.sale) {
      const saleEl = document.createElement("h2");
      saleEl.textContent = "Розпродаж";
      div.append(saleEl);
    }
    return div;
  }
}

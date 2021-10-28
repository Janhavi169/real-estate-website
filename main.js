$(document).ready(() => {
    $(".mdb-select").materialSelect();
    getProducts();
  })
  
  function getProducts() {
  $.get("products.json", (products) => {
    renderProducts(products);
  })
  .fail(() => { console.log("error"); }); }
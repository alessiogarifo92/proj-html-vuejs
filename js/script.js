// impostazioni collegamento vue a html

var app = new Vue({
  el : '#app',
  data : {
    logo : "img/avada-bakery-logo.png",
    navBar : [ "Home", "Shop", "About", "Gallery", "Locations", "Journal", "Contact", "My account"],
    shop : "fas fa-shopping-cart",
    demosFolder : "fas fa-folder-open",
    demosText : "Demos",
    dollar: "$",
    price: "39",
    sale: "on sale",
    headerInfo: {
      intest : "FRESH AND TASTY BAKERY EVERY DAY",
      titolo : "The Perfect Fresh Bread",
      info : "Cras Consequat lectus vestibulum tortor pulvinar, quis euismad nisl. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.",
      button : "Explore our products"
    },
    footerInfo : ["Shop", "About", "Gallery", "Locations", "Journal", "Contact", "Orders"],
    copyright: "@ Copyright 2012-2020 | Avada Theme by ThemeFusion | All Rigths Reserved | Powered by WordPress",
    newsLetter : "Subscribe to our Newsletter",
    socials : [ 'fa-instagram' , 'fa-twitter', 'fa-facebook-f', 'fa-pinterest-p']
  }
})

// impostazioni collegamento vue a html

var app = new Vue({
  el : '#app',
  data : {
    logo : "img/avada-bakery-logo.png",
    navBar : [ "Home", "Shop", "About", "Gallery", "Locations", "Journal", "Contact", "My account"],
    headerInfo: {
      intest : "FRESH AND TASTY BAKERY EVERY DAY",
      titolo : "The Perfect Fresh Bread",
      info : "Cras Consequat lectus vestibulum tortor pulvinar, quis euismad nisl. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.",
      button : "Explore our products"
    },
    footerInfo : ["Shop", "About", "Gallery", "Locations", "Journal", "Contact", "Orders"],
    copyright: "@ Copyright 2012-2020 | Avada Theme by ThemeFusion | All Rigths Reserved | Powered by WordPress"
  }
})

IntlMessageFormat.__addLocaleData({
  locale: "cs",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = n[0],
      a = !n[1];
    return t ? "other" : 1 == e && a ? "one" : r >= 2 && r <= 4 && a ? "few" : a ? "other" : "many"
  }
})
            IntlMessageFormat.__addLocaleData({
                locale: "pl",
                pluralRuleFunction: function(e, t) {
                    var n = String(e).split("."),
                        r = n[0],
                        a = !n[1],
                        o = r.slice(-1),
                        i = r.slice(-2);
                    return t ? "other" : 1 == e && a ? "one" : a && o >= 2 && o <= 4 && (i < 12 || i > 14) ? "few" : a && 1 != r && (0 == o || 1 == o) || a && o >= 5 && o <= 9 || a && i >= 12 && i <= 14 ? "many" : "other"
                }
            })
            IntlMessageFormat.__addLocaleData({
                locale: "lt",
                pluralRuleFunction: function(e, t) {
                    var n = String(e).split("."),
                        r = n[1] || "",
                        a = Number(n[0]) == e,
                        o = a && n[0].slice(-1),
                        i = a && n[0].slice(-2);
                    return t ? "other" : 1 == o && (i < 11 || i > 19) ? "one" : o >= 2 && o <= 9 && (i < 11 || i > 19) ? "few" : 0 != r ? "many" : "other"
                }
            })
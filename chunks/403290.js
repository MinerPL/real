            IntlMessageFormat.__addLocaleData({
                locale: "uk",
                pluralRuleFunction: function(e, t) {
                    var n = String(e).split("."),
                        r = n[0],
                        a = !n[1],
                        o = Number(n[0]) == e,
                        i = o && n[0].slice(-1),
                        s = o && n[0].slice(-2),
                        u = r.slice(-1),
                        l = r.slice(-2);
                    return t ? 3 == i && 13 != s ? "few" : "other" : a && 1 == u && 11 != l ? "one" : a && u >= 2 && u <= 4 && (l < 12 || l > 14) ? "few" : a && 0 == u || a && u >= 5 && u <= 9 || a && l >= 11 && l <= 14 ? "many" : "other"
                }
            })
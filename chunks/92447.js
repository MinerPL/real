            "use strict";
            s.r(t), s.d(t, {
                TabBarSection: function() {
                    return a
                },
                useTabBarState: function() {
                    return o
                },
                TabBarContextProvider: function() {
                    return d
                }
            }), s("70102"), s("222007");
            var a, n, l = s("37983"),
                i = s("884691");
            (n = a || (a = {}))[n.BASIC_INFO = 0] = "BASIC_INFO", n[n.TIERS = 1] = "TIERS", n[n.PAYMENT = 2] = "PAYMENT", n[n.EMOJIS = 3] = "EMOJIS";
            let r = i.createContext({
                currentTab: 0,
                setCurrentTab: () => {
                    throw Error("useTabBarState must be used within TabBarContextProvider")
                }
            });

            function o() {
                return i.useContext(r)
            }

            function d(e) {
                let {
                    initialTab: t,
                    children: s
                } = e, [a, n] = i.useState(t);
                return (0, l.jsx)(r.Provider, {
                    value: {
                        currentTab: a,
                        setCurrentTab: n
                    },
                    children: s
                })
            }
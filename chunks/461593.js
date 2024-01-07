            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("835906");

            function s(e) {
                let {
                    attributes: t,
                    children: n,
                    leaf: i,
                    text: s
                } = e;
                if (i.commandName) {
                    let e = r(o.commandName, {
                        [o.emptyText]: "" === s.text
                    });
                    return (0, l.jsx)("span", {
                        ...t,
                        className: e,
                        spellCheck: !1,
                        children: n
                    })
                }
                return null
            }
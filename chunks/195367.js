            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("222007"), s("881410");
            var a = s("971150");

            function n(e) {
                let t = (0, a.useEditStateStore)(t => t.editStateIdsForGroup[e]),
                    s = (0, a.useEditStateStore)(e => e.listings);
                if (null == t) return !1;
                let n = Object.keys(s),
                    l = t.every(e => n.includes(e)),
                    i = Object.entries(s).filter(e => {
                        let [s] = e;
                        return null == t ? void 0 : t.includes(s)
                    }),
                    r = i.flatMap(e => null == e[1] || Object.values(e[1]).every(e => null == e || "" === e));
                return !l || r.includes(!0)
            }
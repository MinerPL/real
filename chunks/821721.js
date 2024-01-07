            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("702976");
            var a = s("37983");
            s("884691");
            var l = s("446674"),
                r = s("2760"),
                i = s("713135"),
                o = s("568719");

            function n(e) {
                var t;
                let {
                    user: s
                } = e, n = null === (t = (0, l.useStateFromStores)([i.default], () => i.default.getUserProfile(s.id))) || void 0 === t ? void 0 : t.application;
                return (0, a.jsx)(r.default, {
                    flags: null == n ? void 0 : n.flags,
                    listScrollerStyle: o.listScroller
                })
            }
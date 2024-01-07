            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("222007");
            var a = s("884691");

            function n(e) {
                let [t, s] = a.useState(e), n = a.useRef(null);
                return a.useEffect(() => {
                    var t, a;
                    s(null !== (a = null === (t = n.current) || void 0 === t ? void 0 : t.offsetHeight) && void 0 !== a ? a : e)
                }), {
                    headerHeight: t,
                    headerRef: n
                }
            }
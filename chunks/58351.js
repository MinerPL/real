            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var a = n("884691");

            function l() {
                var e;
                let [t, n] = a.useState((e = window.innerWidth < 1132, e));
                return a.useEffect(() => {
                    function e() {
                        n(window.innerWidth < 1132)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [n]), t
            }
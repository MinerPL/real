            "use strict";
            l.r(t), l.d(t, {
                useScreenDimensions: function() {
                    return a
                }
            }), l("222007");
            var i = l("884691");

            function a() {
                var e, t;
                let [l, a] = i.useState({
                    width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
                    height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
                });
                return i.useLayoutEffect(() => {
                    function e() {
                        let e = window.innerWidth,
                            t = window.innerHeight;
                        a({
                            width: e,
                            height: t
                        })
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), l
            }
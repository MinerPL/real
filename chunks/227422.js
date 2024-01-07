            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            }), l("222007");
            var a = l("884691"),
                s = l("760850");

            function n(e, t) {
                let [l, n] = a.useState();
                return a.useEffect(() => {
                    if (null == e || null != t) {
                        n(void 0);
                        return
                    }(0, s.default)().then(t => {
                        null != t && t.identifyGame(e, (e, t) => {
                            0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && n("data:image/png;base64,".concat(t.icon))
                        })
                    })
                }, [e, t]), null != t ? t : l
            }
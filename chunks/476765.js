            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return u
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return d
                }
            });
            var s = n("995008"),
                i = n.n(s),
                a = n("775560");
            let u = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                o = () => (0, a.useLazyValue)(() => u()),
                d = e => {
                    let {
                        children: t
                    } = e;
                    return t(o())
                }
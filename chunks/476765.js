            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return a
                }
            });
            var r = n("995008"),
                i = n.n(r),
                l = n("775560");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return i(e)
                },
                s = () => (0, l.useLazyValue)(() => o()),
                a = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
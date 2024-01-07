            "use strict";
            let n;
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            }), s("424973"), s("781738");
            var l = s("413886"),
                a = s.n(l),
                i = s("736671"),
                r = s.n(i);
            n = a();
            var o = {
                transitionTo(e) {
                    n.push(e)
                },
                replaceWith(e) {
                    n.replace(e)
                },
                getHistory: () => n,
                isActiveCreator: e => t => {
                    if (null != e) return null != r(t, {
                        end: !1
                    }).exec(e.history.location.pathname)
                }
            }
            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return o
                },
                useName: function() {
                    return c
                },
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                a = n("42203"),
                l = n("26989"),
                s = n("27618"),
                r = n("158998"),
                u = n("782340");

            function o(e, t, n) {
                if (null == n) return null;
                if (null != e) return l.default.getNick(e, n.id);
                if (null != t) {
                    let e = a.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return s.default.getNickname(n.id)
                }
                return null
            }

            function d(e, t, n) {
                var i;
                return null == n ? u.default.Messages.UNKNOWN_USER : null !== (i = o(e, t, n)) && void 0 !== i ? i : r.default.getName(n)
            }

            function c(e, t, n) {
                return (0, i.useStateFromStores)([l.default, a.default, s.default], () => d(e, t, n))
            }
            var _ = {
                getNickname: o,
                getName: d,
                useName: c
            }
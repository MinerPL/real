            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return i
                },
                useName: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var u = n("446674"),
                r = n("42203"),
                a = n("26989"),
                l = n("27618"),
                o = n("158998"),
                s = n("782340");

            function i(e, t, n) {
                if (null == n) return null;
                if (null != e) return a.default.getNick(e, n.id);
                if (null != t) {
                    let e = r.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return l.default.getNickname(n.id)
                }
                return null
            }

            function c(e, t, n) {
                var u;
                return null == n ? s.default.Messages.UNKNOWN_USER : null !== (u = i(e, t, n)) && void 0 !== u ? u : o.default.getName(n)
            }

            function d(e, t, n) {
                return (0, u.useStateFromStores)([a.default, r.default, l.default], () => c(e, t, n))
            }
            var f = {
                getNickname: i,
                getName: c,
                useName: d
            }
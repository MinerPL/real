            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return d
                },
                useName: function() {
                    return E
                },
                default: function() {
                    return _
                }
            });
            var r = n("446674"),
                i = n("42203"),
                l = n("26989"),
                u = n("27618"),
                a = n("158998"),
                o = n("782340");

            function d(e, t, n) {
                if (null == n) return null;
                if (null != e) return l.default.getNick(e, n.id);
                if (null != t) {
                    let e = i.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return u.default.getNickname(n.id)
                }
                return null
            }

            function s(e, t, n) {
                var r;
                return null == n ? o.default.Messages.UNKNOWN_USER : null !== (r = d(e, t, n)) && void 0 !== r ? r : a.default.getName(n)
            }

            function E(e, t, n) {
                return (0, r.useStateFromStores)([l.default, i.default, u.default], () => s(e, t, n))
            }
            var _ = {
                getNickname: d,
                getName: s,
                useName: E
            }
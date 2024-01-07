            "use strict";
            n.r(t), n.d(t, {
                isFavoritesGuildVisible: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var i = n("917351"),
                r = n.n(i),
                s = n("446674"),
                a = n("42203"),
                o = n("957255"),
                l = n("379881"),
                u = n("498139"),
                c = n("843455");

            function d(e, t, n) {
                let {
                    canShow: i,
                    isFavoritesPerk: s
                } = u.default.getCurrentConfig({
                    location: "7993a7_1"
                }, {
                    autoTrackExposure: !1
                });
                if (s) return !0;
                if (!i) return !1;
                let a = e.getFavoriteChannels();
                if (r.isEmpty(a)) return !1;
                let o = Object.keys(a).filter(e => {
                    let i = t.getChannel(e);
                    return null != i && (!!i.isPrivate() || n.can(c.Permissions.VIEW_CHANNEL, i))
                });
                return !r.isEmpty(o) && !0
            }

            function f() {
                let {
                    canShow: e,
                    isFavoritesPerk: t
                } = (0, u.useFavoritesServerExperiment)("7993a7_2"), n = (0, s.useStateFromStores)([l.default, a.default, o.default], () => e && d(l.default, a.default, o.default));
                return !!t || n
            }
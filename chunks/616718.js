            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                l = n("582415"),
                s = n("824563"),
                i = n("387111"),
                r = n("782340");

            function u(e, t, n) {
                let u = (0, a.useStateFromStores)([s.default], () => null != n ? (0, l.getStreamerApplication)(n, s.default) : null, [n]),
                    o = i.default.getName(e.getGuildId(), e.id, t);
                return null == n ? o : (null == u ? void 0 : u.name) != null ? r.default.Messages.GO_LIVE_USER_PLAYING.format({
                    applicationName: null == u ? void 0 : u.name,
                    username: o
                }) : r.default.Messages.GO_LIVE_TILE_SCREEN.format({
                    username: o
                })
            }
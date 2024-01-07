            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("917351"),
                n = s.n(a),
                l = s("446674"),
                i = s("913144"),
                r = s("271938"),
                o = s("449008"),
                d = s("501208");
            let u = {},
                c = 0;
            class E extends l.default.Store {
                initialize() {
                    this.waitFor(r.default)
                }
                isFetching() {
                    return c > 0
                }
                getGuild(e) {
                    return u[e]
                }
                getGuilds(e) {
                    return e.map(e => u[e]).filter(o.isNotNullish)
                }
            }
            E.displayName = "DiscoverGuildsStore";
            var _ = new E(i.default, {
                DISCOVER_GUILDS_FETCH_START: function(e) {
                    c += 1
                },
                DISCOVER_GUILDS_FETCH_SUCCESS: function(e) {
                    let {
                        guilds: t
                    } = e;
                    c -= 1;
                    let s = n.map(t, d.default);
                    s.forEach(e => u[e.id] = e)
                },
                DISCOVER_GUILDS_FETCH_FAILURE: function(e) {
                    c -= 1
                }
            })
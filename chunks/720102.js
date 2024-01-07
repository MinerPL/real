            "use strict";
            n.r(t);
            var a = n("446674"),
                s = n("913144"),
                i = n("162771"),
                l = n("599110"),
                r = n("49111");
            let o = {};

            function u(e) {
                var t;
                if (null == e || e === r.ME || e === r.FAVORITES) return !1;
                let n = null !== (t = o[e]) && void 0 !== t ? t : 0;
                if (Date.now() <= n + 288e5) return !1;
                o[e] = Date.now(), l.default.track(r.AnalyticEvents.HIGHLIGHTS_TEST_LOADED, {
                    guild_id: e
                })
            }
            class d extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(i.default), null != e && (o = e.lastHighlightsLoadMillis)
                }
                getState() {
                    return {
                        lastHighlightsLoadMillis: o
                    }
                }
            }
            d.displayName = "HighlightsTestStore", d.persistKey = "HighlightsTestStore", new d(s.default, {
                CONNECTION_OPEN: function() {
                    let e = i.default.getGuildId();
                    return u(e)
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return u(t)
                }
            })
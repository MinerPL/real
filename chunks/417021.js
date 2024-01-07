            "use strict";
            n.r(t), n.d(t, {
                getSystemAnalyticsInfo: function() {
                    return f
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                l = n("599110"),
                s = n("773336"),
                r = n("50885"),
                u = n("760190");
            let o = {
                hashes: {}
            };
            async function d() {
                if (!s.isPlatformEmbedded || !(0, s.isWindows)()) return [];
                await r.default.ensureModule("discord_media");
                let e = r.default.requireModule("discord_media"),
                    t = await e.getSystemAnalyticsBlob();
                return t || []
            }
            async function c() {
                try {
                    let e = await d(),
                        t = e.filter(e => o.hashes[e.name] !== e.hash);
                    for (let {
                            name: e,
                            hash: n,
                            data: i
                        }
                        of t) l.default.track(e, i), (o = {
                        hashes: {
                            ...o.hashes
                        }
                    }).hashes[e] = n;
                    t.length > 0 && E.emitChange()
                } catch (e) {}
            }
            class _ extends i.default.PersistedStore {
                initialize(e) {
                    o = null != e && "object" == typeof e.hashes ? e : {
                        hashes: {}
                    }, this.waitFor(u.default)
                }
                getState() {
                    return o
                }
                async info() {
                    try {
                        let e = await d(),
                            t = e.find(e => "hardware_detected" === e.name);
                        if (null == t) return null;
                        return t.data
                    } catch (e) {}
                }
            }
            _.displayName = "SystemAnalyticsStore", _.persistKey = "SystemAnalyticsStore";
            let E = new _(a.default, {
                START_SESSION: function() {
                    return c(), !1
                }
            });

            function f() {
                return E.info()
            }
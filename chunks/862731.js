            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("843762");
            var s = n("693566"),
                a = n.n(s),
                l = n("446674"),
                i = n("913144");
            let r = {
                channelVisits: new a({
                    max: 1e3
                }),
                bannerRenders: []
            };

            function o(e, t) {
                return e + t
            }
            class u extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.bannerRenders) && (r.bannerRenders = e.bannerRenders), null != e.channelVisitsDump && r.channelVisits.load(e.channelVisitsDump))
                }
                getState() {
                    return {
                        bannerRenders: r.bannerRenders,
                        channelVisitsDump: r.channelVisits.dump()
                    }
                }
                getNumberOfRenders() {
                    var e, t;
                    return null !== (t = null === (e = r.bannerRenders) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0
                }
                getNumberOfRendersSince(e) {
                    var t;
                    let n = null !== (t = r.bannerRenders) && void 0 !== t ? t : [];
                    return n.filter(t => t >= Date.now() - 1e3 * e).length
                }
                getNumberOfChannelVisitsSince(e, t, n) {
                    var s;
                    let a = null !== (s = r.channelVisits.get(e + t)) && void 0 !== s ? s : [];
                    return a.filter(e => e >= Date.now() - 1e3 * n).length
                }
            }
            u.displayName = "UnreadSettingNoticeStore", u.persistKey = "UnreadSettingNoticeStore";
            var d = new u(i.default, {
                UNREAD_SETTING_NOTICE_RENDERED: function() {
                    r.bannerRenders.length > 100 && r.bannerRenders.pop(), r.bannerRenders.unshift(Date.now())
                },
                UNREAD_SETTING_NOTICE_CHANNEL_VISIT: function(e) {
                    var t;
                    let {
                        guildId: n,
                        channelId: s
                    } = e, a = n + s, l = null !== (t = r.channelVisits.get(a)) && void 0 !== t ? t : [];
                    l.length > 100 && l.pop(), l.unshift(Date.now()), r.channelVisits.set(a, l)
                }
            })
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("913144"),
                s = n("316272"),
                i = n("271938"),
                l = n("356702"),
                r = n("429464"),
                o = n("106413"),
                u = n("880731"),
                d = n("943551");
            let c = new Set;
            class E extends s.default {
                _initialize() {
                    a.default.subscribe("MESSAGE_CREATE", this.handleMessageCreate), a.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
                }
                _terminate() {
                    a.default.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate), a.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate)
                }
                constructor(...e) {
                    super(...e), this.handleSettingsUpdate = e => {
                        let {
                            settings: t
                        } = e;
                        t.enabled ? (0, l.unlockAchievement)(o.PoggermodeAchievementId.ENABLE_POGGERMODE) : !1 === t.enabled && (0, l.unlockAchievement)(o.PoggermodeAchievementId.DISABLE_POGGERMODE);
                        let n = Object.keys(t).some(e => e.startsWith("confetti"));
                        n && (0, l.unlockAchievement)(o.PoggermodeAchievementId.CUSTOMIZE_CONFETTI)
                    }, this.handleMessageCreate = e => {
                        var t;
                        let {
                            channelId: n,
                            message: {
                                author: a,
                                nonce: s,
                                mentions: E
                            }
                        } = e;
                        if (!u.default.isEnabled()) return !1;
                        let f = i.default.getId();
                        if ((null == E ? void 0 : E.find(e => e.id === f)) != null ? (0, l.unlockAchievement)(o.PoggermodeAchievementId.PING_ME) : (null !== (t = null == E ? void 0 : E.length) && void 0 !== t ? t : 0) > 0 && (null == a ? void 0 : a.id) === f && (0, l.unlockAchievement)(o.PoggermodeAchievementId.PING_SOMEONE), !(0, d.shouldTrackMessage)(null == a ? void 0 : a.id, f, s, c)) return !1;
                        let _ = d.default.getMostRecentMessageCombo(n),
                            {
                                combo: h
                            } = null != _ ? _ : {};
                        if (null == h) return !1;
                        Object.values(o.PoggermodeAchievementId).forEach(e => {
                            if (null != r.default.getUnlocked(e)) return;
                            let t = (0, o.getPoggermodeAchievementData)(e),
                                n = null == t ? void 0 : t.checkUnlock;
                            if (null != n) !1 !== n(h) && (0, l.unlockAchievement)(e)
                        })
                    }
                }
            }
            var f = new E
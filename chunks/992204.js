            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var a = n("446674"),
                s = n("913144"),
                i = n("954016");
            let l = new Set,
                r = new Set([i.WhatsNewSection.DISCORD_TURNS_8]);
            class o extends a.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.acknowledged) && (l = new Set(e.acknowledged)), Array.isArray(e.opened) && (r = new Set(e.opened)))
                }
                getState() {
                    return {
                        acknowledged: l,
                        opened: r
                    }
                }
                getOpened() {
                    return r
                }
                getAcknowledged() {
                    return l
                }
                isOpened(e) {
                    return r.has(e)
                }
                isAcknowledged(e) {
                    return l.has(e)
                }
            }
            o.displayName = "ActivitiesWhatsNewStore", o.persistKey = "ActivitiesWhatsNewStore";
            var u = new o(s.default, {
                ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION: function(e) {
                    let {
                        section: t
                    } = e;
                    l.add(t)
                },
                ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION: function(e) {
                    let {
                        section: t
                    } = e;
                    r.add(t)
                }
            })
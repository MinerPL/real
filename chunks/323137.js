            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                s = n("913144");
            let l = {};

            function a(e) {
                let {
                    guildId: t,
                    expand: n
                } = e;
                n ? l[t] = !0 : delete l[t]
            }
            class r extends i.default.PersistedStore {
                initialize(e) {
                    l = null != e ? e : {}
                }
                isVoiceCategoryExpanded(e) {
                    var t;
                    return null !== (t = null != e && l[e]) && void 0 !== t && t
                }
                isVoiceCategoryCollapsed(e) {
                    return !this.isVoiceCategoryExpanded(e)
                }
                getState() {
                    return l
                }
            }
            r.displayName = "ChannelListVoiceCategoryStore", r.persistKey = "ChannelListVoiceCategoryStore";
            var d = new r(s.default, {
                VOICE_CATEGORY_COLLAPSE: a,
                VOICE_CATEGORY_EXPAND: a
            })
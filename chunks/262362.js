            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("65597"),
                i = n("305961"),
                r = n("354023"),
                s = n("659404"),
                a = n("49111");

            function u(e) {
                let {
                    guildId: t
                } = e, n = s.CommunityEndlessInvitesExperiment.useExperiment({
                    guildId: null != t ? t : "",
                    location: "6798be_2"
                }), u = (0, l.default)([i.default], () => i.default.getGuild(t));
                return null != t && function(e) {
                    var t;
                    let {
                        guild: n,
                        experimentConfig: l
                    } = e, {
                        defaultInvitesToNeverExpire: i
                    } = null != l ? l : s.CommunityEndlessInvitesExperiment.getCurrentConfig({
                        guildId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : "",
                        location: "6798be_1"
                    });
                    if ((null == n ? void 0 : n.hasFeature(a.GuildFeatures.HUB)) === !0 || (null == n ? void 0 : n.hasFeature(a.GuildFeatures.COMMUNITY)) === !0 && i) return r.default.INVITE_OPTIONS_FOREVER.value
                }({
                    guild: u,
                    experimentConfig: n
                })
            }
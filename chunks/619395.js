            "use strict";
            n.r(t), n.d(t, {
                removeModeratorOverwrite: function() {
                    return E
                },
                isEmptyOverwrite: function() {
                    return f
                },
                useCanUpdateStageChannelModerators: function() {
                    return h
                },
                useCanModerateRequestToSpeak: function() {
                    return p
                },
                canLurkerListen: function() {
                    return T
                }
            });
            var i = n("316693"),
                a = n("446674"),
                l = n("267567");
            n("271938");
            var s = n("42203"),
                r = n("305961"),
                u = n("957255"),
                o = n("991170"),
                d = n("923510"),
                c = n("834052"),
                _ = n("49111");

            function E(e, t, n) {
                var a, l;
                let s = null == n ? void 0 : n.permissionOverwrites[e];
                return {
                    id: e,
                    type: t,
                    deny: null !== (a = null == s ? void 0 : s.deny) && void 0 !== a ? a : o.default.NONE,
                    allow: i.default.remove(null !== (l = null == s ? void 0 : s.allow) && void 0 !== l ? l : o.default.NONE, d.MODERATE_STAGE_CHANNEL_PERMISSIONS)
                }
            }

            function f(e) {
                let {
                    allow: t,
                    deny: n
                } = e;
                return i.default.equals(t, o.default.NONE) && i.default.equals(n, o.default.NONE)
            }

            function h(e) {
                return (0, a.useStateFromStores)([u.default, r.default, s.default], () => {
                    let t = s.default.getChannel(e),
                        n = r.default.getGuild(null == t ? void 0 : t.getGuildId());
                    return !!(u.default.can(_.Permissions.ADMINISTRATOR, n) || u.default.can(_.Permissions.MANAGE_ROLES, t, void 0, void 0, !0) || u.default.can(d.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, t)) || !1
                }, [e])
            }

            function p(e) {
                return (0, a.useStateFromStores)([s.default, u.default], () => null != e && u.default.can(_.Permissions.MUTE_MEMBERS, s.default.getChannel(e)), [e])
            }

            function T(e) {
                return !!(null != e && e.isGuildStageVoice() && l.default.isLurking(e.guild_id) && c.default.isPublic(e.id)) && u.default.can(d.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)
            }
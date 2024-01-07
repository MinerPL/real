            "use strict";
            n.r(e), n.d(e, {
                useCurrentUserHasAutomodQuarantinedProfile: function() {
                    return S
                },
                useGuildAutomodProfileQuarantineErrors: function() {
                    return T
                },
                useOpenFixQuarantinedProfileModal: function() {
                    return g
                }
            }), n("702976");
            var r = n("884691"),
                l = n("65597"),
                i = n("79112"),
                o = n("685665"),
                s = n("929423"),
                u = n("271938"),
                a = n("26989"),
                d = n("305961"),
                c = n("957255"),
                h = n("162771"),
                f = n("681937"),
                _ = n("49111"),
                p = n("657944"),
                E = n("397336"),
                I = n("782340");

            function S(t) {
                return (0, l.default)([u.default, a.default], () => {
                    if (null == t) return !1;
                    let e = u.default.getId();
                    return (0, f.hasAutomodQuarantinedProfile)(a.default.getMember(t, e))
                }, [t])
            }

            function T(t) {
                return (0, l.useStateFromStoresObject)([u.default, a.default, h.default, d.default], () => {
                    let e = {
                            nick: void 0,
                            bio: void 0
                        },
                        n = h.default.getGuildId(),
                        r = null != t ? t : n,
                        l = d.default.getGuild(r);
                    if (null == l || null == r) return e;
                    let i = u.default.getId(),
                        o = a.default.getMember(r, i),
                        s = (0, f.getAutomodQuarantinedProfileFlags)(null == o ? void 0 : o.flags);
                    if (0 === s.size) return e;
                    if (s.has(p.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                        if (null == t) {
                            var c;
                            e.nick = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                                guildName: null !== (c = l.name) && void 0 !== c ? c : ""
                            })]
                        } else e.nick = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
                    }
                    return s.has(p.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (e.bio = [I.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), e
                }, [t])
            }

            function g(t) {
                let {
                    guildId: e,
                    scrollPosition: n,
                    analyticsLocation: u,
                    analyticsLocations: a,
                    openWithoutBackstack: h
                } = t, {
                    analyticsLocations: f
                } = (0, o.default)(), p = (0, l.default)([d.default], () => d.default.getGuild(e), [e]), I = (0, l.default)([c.default], () => null != p && c.default.can(_.Permissions.CHANGE_NICKNAME, p), [p]), S = r.useCallback(() => {
                    if (null == p) return;
                    let t = _.UserSettingsSections.PROFILE_CUSTOMIZATION,
                        e = E.ProfileCustomizationSubsection.GUILD;
                    I ? (0, s.initGuildIdentitySettings)(p, null != a ? a : f) : e = E.ProfileCustomizationSubsection.USER_PROFILE, i.default.open(t, e, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: a,
                        openWithoutBackstack: h
                    })
                }, [I, n, u, a, h, p, f]);
                return [S, I]
            }
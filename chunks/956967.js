            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserHasAutomodQuarantinedProfile: function() {
                    return g
                },
                useGuildAutomodProfileQuarantineErrors: function() {
                    return S
                },
                useOpenFixQuarantinedProfileModal: function() {
                    return _
                }
            }), n("702976");
            var s = n("884691"),
                a = n("65597"),
                l = n("79112"),
                i = n("685665"),
                r = n("929423"),
                o = n("271938"),
                u = n("26989"),
                d = n("305961"),
                c = n("957255"),
                f = n("162771"),
                h = n("681937"),
                C = n("49111"),
                p = n("657944"),
                m = n("397336"),
                E = n("782340");

            function g(e) {
                return (0, a.default)([o.default, u.default], () => {
                    if (null == e) return !1;
                    let t = o.default.getId();
                    return (0, h.hasAutomodQuarantinedProfile)(u.default.getMember(e, t))
                }, [e])
            }

            function S(e) {
                return (0, a.useStateFromStoresObject)([o.default, u.default, f.default, d.default], () => {
                    let t = {
                            nick: void 0,
                            bio: void 0
                        },
                        n = f.default.getGuildId(),
                        s = null != e ? e : n,
                        a = d.default.getGuild(s);
                    if (null == a || null == s) return t;
                    let l = o.default.getId(),
                        i = u.default.getMember(s, l),
                        r = (0, h.getAutomodQuarantinedProfileFlags)(null == i ? void 0 : i.flags);
                    if (0 === r.size) return t;
                    if (r.has(p.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
                        if (null == e) {
                            var c;
                            t.nick = [E.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
                                guildName: null !== (c = a.name) && void 0 !== c ? c : ""
                            })]
                        } else t.nick = [E.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
                    }
                    return r.has(p.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (t.bio = [E.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), t
                }, [e])
            }

            function _(e) {
                let {
                    guildId: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: u,
                    openWithoutBackstack: f
                } = e, {
                    analyticsLocations: h
                } = (0, i.default)(), p = (0, a.default)([d.default], () => d.default.getGuild(t), [t]), E = (0, a.default)([c.default], () => null != p && c.default.can(C.Permissions.CHANGE_NICKNAME, p), [p]), g = s.useCallback(() => {
                    if (null == p) return;
                    let e = C.UserSettingsSections.PROFILE_CUSTOMIZATION,
                        t = m.ProfileCustomizationSubsection.GUILD;
                    E ? (0, r.initGuildIdentitySettings)(p, null != u ? u : h) : t = m.ProfileCustomizationSubsection.USER_PROFILE, l.default.open(e, t, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: u,
                        openWithoutBackstack: f
                    })
                }, [E, n, o, u, f, p, h]);
                return [g, E]
            }
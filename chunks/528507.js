            "use strict";
            s.r(t), s.d(t, {
                useIsPhoneVerificationLevel: function() {
                    return u
                },
                useCurrentUserVerificationStatus: function() {
                    return d
                }
            });
            var l = s("446674"),
                n = s("305961"),
                i = s("697218"),
                r = s("526253"),
                a = s("49111");

            function u(e) {
                let {
                    guildId: t
                } = e, s = (0, l.useStateFromStores)([r.default], () => r.default.get(t)), i = null == s ? void 0 : s.guild, u = (0, l.useStateFromStores)([n.default], () => {
                    var e;
                    let s = null === (e = n.default.getGuild(t)) || void 0 === e ? void 0 : e.verificationLevel,
                        l = null == i ? void 0 : i.verification_level;
                    return (null != s ? s : l) === a.VerificationLevels.VERY_HIGH
                }, [t, i]);
                return u
            }

            function d(e) {
                let {
                    guildId: t
                } = e, s = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser()), n = u({
                    guildId: t
                }), r = (null == s ? void 0 : s.isPhoneVerified()) || (null == s ? void 0 : s.isStaff()), a = (null == s ? void 0 : s.verified) || r;
                return {
                    isPhoneVerificationLevel: n,
                    isCurrentUserVerified: !!(n ? r : a)
                }
            }
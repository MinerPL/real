            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("702976"), n("424973");
            var i = n("446674"),
                a = n("913144"),
                l = n("568734"),
                s = n("26989"),
                r = n("305961"),
                u = n("697218"),
                o = n("49111"),
                d = n("657944");
            let c = {
                    notClaimed: !1,
                    notEmailVerified: !1,
                    notPhoneVerified: !1,
                    newAccount: !1,
                    newMember: !1,
                    canChat: !0
                },
                _ = new Set,
                E = {};

            function f(e) {
                let t;
                h(e), _.add(e);
                let n = r.default.getGuild(e),
                    i = u.default.getCurrentUser();
                if (null == n || n.verificationLevel === o.VerificationLevels.NONE || null == i || n.isOwner(i) || i.isPhoneVerified()) return;
                let c = s.default.getMember(n.id, i.id);
                if (null != c) {
                    var f;
                    if ((0, l.hasFlag)(null !== (f = c.flags) && void 0 !== f ? f : 0, d.GuildMemberFlags.BYPASSES_VERIFICATION)) return;
                    let e = new Set;
                    for (let t of c.roles) {
                        let i = n.getRole(t);
                        null != i && !i.managed && e.add(t)
                    }
                    let t = new Date("2022-12-02 00:00:00"),
                        i = null == c.joinedAt || new Date(c.joinedAt) < t,
                        a = n.hasFeature(o.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i;
                    if (!a && e.size > 0) return
                }
                let p = +i.createdAt + 6e4 * o.VerificationCriteria.ACCOUNT_AGE - Date.now(),
                    T = +n.joinedAt + 6e4 * o.VerificationCriteria.MEMBER_AGE - Date.now(),
                    C = n.verificationLevel >= o.VerificationLevels.LOW && !i.isClaimed(),
                    m = !1,
                    S = !1,
                    I = !1,
                    g = !1;
                !i.isPhoneVerified() && !i.isStaff() && (m = n.verificationLevel >= o.VerificationLevels.LOW && !i.verified, S = n.verificationLevel >= o.VerificationLevels.VERY_HIGH, I = n.verificationLevel >= o.VerificationLevels.MEDIUM && p > 0, g = n.verificationLevel >= o.VerificationLevels.HIGH && T > 0);
                let A = [];
                g && A.push(T), I && A.push(p), A.length > 0 && (t = setTimeout(() => a.default.dispatch({
                    type: "GUILD_VERIFICATION_CHECK",
                    guildId: e
                }), Math.max(...A))), E[e] = {
                    notClaimed: C,
                    notEmailVerified: m,
                    notPhoneVerified: S,
                    newAccount: I,
                    newMember: g,
                    canChat: !(C || m || S || I || g),
                    accountDeadline: new Date(Date.now() + p),
                    memberDeadline: new Date(Date.now() + T),
                    timeoutRef: t
                }
            }

            function h(e) {
                let t = E[e];
                null != t && clearTimeout(t.timeoutRef), delete E[e]
            }

            function p(e) {
                _.delete(e.guild.id), f(e.guild.id)
            }
            class T extends i.default.Store {
                initialize() {
                    this.waitFor(r.default, u.default)
                }
                getCheck(e) {
                    var t;
                    return !_.has(e) && f(e), null !== (t = E[e]) && void 0 !== t ? t : c
                }
                canChatInGuild(e) {
                    return this.getCheck(e).canChat
                }
            }
            T.displayName = "GuildVerificationStore";
            var C = new T(a.default, {
                CONNECTION_OPEN: function() {
                    for (let e in _.clear(), E) h(e)
                },
                CONNECTION_CLOSED: function() {
                    Object.keys(E).forEach(h)
                },
                CURRENT_USER_UPDATE: function() {
                    _.clear()
                },
                GUILD_CREATE: p,
                GUILD_UPDATE: p,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    h(t.id)
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t;
                    let {
                        guildId: n,
                        user: i
                    } = e;
                    if (i.id !== (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    _.delete(n)
                },
                GUILD_VERIFICATION_CHECK: function(e) {
                    let {
                        guildId: t
                    } = e;
                    f(t)
                }
            })
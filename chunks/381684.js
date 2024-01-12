            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("866227");
            var l, a, s = n("316693"),
                i = n("446674");
            n("95410");
            var r = n("913144"),
                o = n("518888"),
                u = n("525065"),
                d = n("305961"),
                c = n("957255"),
                f = n("162771"),
                E = n("697218"),
                h = n("49111");
            let _ = {
                    hiddenSurveys: {},
                    surveyOverride: null,
                    lastFetched: null
                },
                S = _,
                T = {},
                p = null;
            (a = l || (l = {})).IS_OWNER = "is_owner", a.IS_ADMIN = "is_admin", a.IS_COMMUNITY = "is_community", a.GUILD_SIZE = "guild_size", a.IS_HUB = "is_hub", a.IS_VIEWING = "is_viewing", a.GUILD_PERMISSIONS = "guild_permissions", a.GUILD_SIZE_ALL = "guild_size_all";
            let N = new Set(Object.values(l));

            function I(e) {
                let {
                    guild_requirements: t = [],
                    guild_size: n = [null, null],
                    guild_permissions: l = []
                } = e;
                if (0 === t.length) return !0;
                for (let e of t)
                    if (!N.has(e)) return !1;
                let a = t.includes("guild_size_all"),
                    i = !0,
                    r = Object.values(d.default.getGuilds());
                for (let o of r) {
                    if (a || t.includes("guild_size")) {
                        let e = u.default.getMemberCount(o.id);
                        if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
                            i = !1;
                            continue
                        }
                    }
                    if (t.includes("is_community") && !o.hasFeature(h.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !o.hasFeature(h.GuildFeatures.HUB)) continue;
                    if (t.includes("guild_permissions")) {
                        if (0 === l.length) continue;
                        let e = !1;
                        for (let t of l) try {
                            let n = s.default.deserialize(t);
                            if (c.default.can(n, o)) {
                                e = !0;
                                break
                            }
                        } catch (e) {}
                        if (!e) continue
                    }
                    let r = E.default.getCurrentUser(),
                        d = (null == r ? void 0 : r.id) === o.ownerId,
                        _ = c.default.can(h.Permissions.ADMINISTRATOR, o);
                    if (t.includes("is_owner") && !d || t.includes("is_admin") && !_) continue;
                    null == (T = null != T ? T : {})[e.key] && (T[e.key] = e);
                    let S = f.default.getGuildId(),
                        p = null != S && S === o.id;
                    if ((!t.includes("is_viewing") || p) && !a) return !0
                }
                return !!a && !!i || !1
            }

            function m(e) {
                let {
                    survey: t
                } = e;
                if (S.lastFetched = Date.now(), null != t && null == S.hiddenSurveys[t.key]) {
                    if (!I(t)) return;
                    p = t
                }
            }

            function g() {
                if (null != p && (I(p) || (p = null, 0))) return !1;
                ! function() {
                    T = null != T ? T : {};
                    let e = Object.values(T)[0];
                    if (null != e && I(e)) {
                        m({
                            type: "SURVEY_FETCHED",
                            survey: e
                        });
                        return
                    }
                    if (null == p) return;
                    p = null
                }()
            }
            class A extends i.default.PersistedStore {
                initialize(e) {
                    S = null != e ? e : _, this.syncWith([f.default], g)
                }
                getState() {
                    return S
                }
                getCurrentSurvey() {
                    return p
                }
                getSurveyOverride() {
                    return S.surveyOverride
                }
            }
            A.displayName = "SurveyStore", A.persistKey = "SurveyStore", A.migrations = [e => {
                let t = {
                    ...e
                };
                return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
            }];
            var C = new A(r.default, {
                CONNECTION_OPEN: function() {
                    var e;
                    if (!(null != S.lastFetched && Date.now() - (null !== (e = S.lastFetched) && void 0 !== e ? e : 0) < 864e5) || null != S.surveyOverride)(0, o.surveyFetch)(S.surveyOverride)
                },
                SURVEY_FETCHED: m,
                SURVEY_HIDE: function(e) {
                    let {
                        key: t
                    } = e;
                    S.hiddenSurveys[t] = !0, p = null, T = null != T ? T : {}, delete T[t]
                },
                SURVEY_OVERRIDE: function(e) {
                    let {
                        id: t
                    } = e;
                    S.surveyOverride = t, null != t && delete S.hiddenSurveys[t], (0, o.surveyFetch)(S.surveyOverride)
                },
                PUSH_NOTIFICATION_CLICK: function() {},
                DISPLAYED_INVITE_SHOW: function() {},
                LOGOUT: function() {
                    S.hiddenSurveys = {}
                }
            })
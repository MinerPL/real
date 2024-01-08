            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return S
                }
            });
            var n = i("651057"),
                l = i("299285"),
                a = i("653047"),
                u = i("42203"),
                r = i("18494"),
                d = i("697218"),
                o = i("427953"),
                s = i("550766"),
                c = i("544805"),
                f = i("370507"),
                _ = i("420444"),
                E = i("541473"),
                I = i("407908"),
                A = i("578708"),
                T = i("954016"),
                C = i("49111");
            async function v(e, t, i, n, l) {
                let a = u.default.getChannel(t),
                    r = null == a ? void 0 : a.getGuildId(),
                    c = d.default.getCurrentUser();
                if (null == a || null == t || null == r && !a.isPrivate() || null == c) return !1;
                let f = (0, _.default)(a.id),
                    v = T.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(a.type);
                if (f) {
                    let e = await (0, E.default)({
                        channelId: a.id,
                        bypassChangeModal: l
                    });
                    if (!e) return !1
                } else if (!(0, o.isActivitiesInTextEnabled)(a, "joinEmbeddedActivity") || !v) return !1;
                return (0, A.default)(r, t), (0, s.startEmbeddedActivity)(t, e, n), (0, I.default)({
                    type: C.AnalyticsGameOpenTypes.JOIN,
                    userId: c.id,
                    applicationId: e,
                    locationObject: i,
                    analyticsLocations: n
                }), !0
            }

            function S(e) {
                let {
                    applicationId: t,
                    currentEmbeddedApplication: i,
                    activityChannelId: o,
                    locationObject: s,
                    embeddedActivitiesManager: _,
                    analyticsLocations: E
                } = e, I = u.default.getChannel(o), T = null == I ? void 0 : I.getGuildId(), C = null == T || "" === T, S = d.default.getCurrentUser();
                if (null == I || C && !I.isPrivate() || null == o) return Promise.resolve(!1);
                if (r.default.getVoiceChannelId() === o && (null == i ? void 0 : i.id) === t) return (0, A.default)(T, o), Promise.resolve(!0);
                let N = async function() {
                    let {
                        bypassChangeVcModal: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        bypassChangeVcModal: !1
                    }, i = (null == S ? void 0 : S.nsfwAllowed) == null;
                    if (i) {
                        var u, r;
                        let i = null !== (r = l.default.getApplication(t)) && void 0 !== r ? r : a.default.createFromServer(await n.default.fetchApplication(t));
                        if ((null === (u = i.embeddedActivityConfig) || void 0 === u ? void 0 : u.requires_age_gate) === !0) return new Promise(n => {
                            (0, c.confirmActivityAgeGate)({
                                application: i,
                                onAgree: () => {
                                    n(v(t, o, s, E, e))
                                },
                                onDisagree: () => n(!1)
                            })
                        })
                    }
                    return v(t, o, s, E, e)
                };
                return null != i ? new Promise((e, t) => {
                    (0, f.default)(i, I, () => {
                        _.leaveActivity({
                            channelId: o,
                            applicationId: i.id
                        }), N({
                            bypassChangeVcModal: !0
                        }).then(e).catch(t)
                    }, () => e(!0))
                }) : N()
            }
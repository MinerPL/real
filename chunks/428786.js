            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("866227"),
                o = n.n(r),
                u = n("394846"),
                d = n("446674"),
                c = n("77078"),
                f = n("4919"),
                m = n("812204"),
                E = n("685665"),
                _ = n("649844"),
                h = n("697218"),
                p = n("521012"),
                I = n("888400"),
                T = n("719923"),
                g = n("158998"),
                C = n("540692"),
                S = n("166960"),
                A = n("833516"),
                N = n("646718"),
                M = n("782340"),
                v = n("668524");
            class x extends s.Component {
                renderTitle(e, t) {
                    let {
                        trialOffer: n
                    } = this.props, a = h.default.getUser(n.user_id), s = null != a ? a.username : "???";
                    return e && void 0 === n.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_HEADER.format({
                        username: s
                    }) : t ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_HEADER : M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_HEADER.format({
                        username: s
                    })
                }
                renderBody(e, t, n) {
                    let {
                        trialOffer: a
                    } = this.props, s = h.default.getUser(a.referrer_id);
                    return (e || t) && n && void 0 === a.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_EXPIRED_BODY : e && !n && void 0 === a.redeemed_at ? M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_DISABLED_BODY : M.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY.format({
                        username: null != s ? g.default.getName(s) : "???"
                    })
                }
                renderActions(e, t, n) {
                    let {
                        trialOffer: s,
                        currentUser: l,
                        analyticsLocations: i
                    } = this.props, r = {
                        onClick: () => {
                            this.handleStartTrial(s, i)
                        },
                        color: c.Button.Colors.BRAND
                    }, o = l.id !== s.user_id || (0, T.isPremium)(l) || !l.verified || (0, A.hasUserTrialOfferExpired)(s), u = this.renderExpirationDate(e, t, n);
                    return r.disabled = o, (0, a.jsxs)("div", {
                        className: v.buttonContainer,
                        children: [(0, a.jsx)("div", {
                            children: (0, a.jsx)(c.Button, {
                                ...r,
                                size: c.Button.Sizes.SMALL,
                                onClick: () => {
                                    (0, _.default)({
                                        initialPlanId: null,
                                        subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                                        analyticsLocations: i,
                                        trialId: s.trial_id,
                                        referralTrialOfferId: s.id
                                    })
                                },
                                children: M.default.Messages.START_TRIAL
                            })
                        }), (0, a.jsx)("div", {
                            className: v.metadata,
                            children: u
                        })]
                    })
                }
                renderExpirationDate(e, t, n) {
                    let {
                        trialOffer: a,
                        trialEndsAt: s
                    } = this.props;
                    if (void 0 !== a.redeemed_at && !n && null !== s) return M.default.Messages.TRIAL_EXPIRES.format({
                        date: (0, I.dateFormat)(o(s), "LL")
                    });
                    if (e || void 0 === a.expires_at) return null;
                    let l = o(a.expires_at);
                    if (t) return M.default.Messages.EXPIRED_DATE.format({
                        date: (0, I.dateFormat)(o(l), "LL")
                    });
                    let i = l.diff(o(), "h");
                    if (i > 48) {
                        let e = l.diff(o(), "d");
                        return M.default.Messages.EXPIRES_DAYS.format({
                            numDays: e
                        })
                    }
                    if (i > 1) return M.default.Messages.EXPIRES_HOURS.format({
                        numHours: i
                    });
                    let r = l.diff(o(), "minutes");
                    return M.default.Messages.EXPIRES_MINUTES.format({
                        numMinutes: r
                    })
                }
                renderMedia(e) {
                    return (0, a.jsx)("div", {
                        className: i({
                            [v.referral]: !e,
                            [v.birthdayReferral]: e
                        })
                    })
                }
                render() {
                    let {
                        trialOffer: e,
                        currentUser: t,
                        recipientHasNitro: n,
                        shouldShowBirthdayUX: s
                    } = this.props, l = (0, A.hasUserTrialOfferExpired)(e), r = t.id === e.referrer_id;
                    return (0, a.jsxs)("div", {
                        className: i(v.tile, v.container),
                        children: [(0, a.jsx)("div", {
                            className: v.media,
                            children: this.renderMedia(s)
                        }), (0, a.jsxs)("div", {
                            className: v.description,
                            children: [(0, a.jsx)(c.H, {
                                className: v.title,
                                children: this.renderTitle(n, l)
                            }), (0, a.jsx)("div", {
                                className: v.tagline,
                                children: this.renderBody(n, l, r)
                            }), (0, a.jsx)("div", {
                                className: v.actions,
                                children: this.renderActions(n, l, r)
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleStartTrial = (e, t) => {
                        (0, _.default)({
                            initialPlanId: null,
                            subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
                            analyticsLocations: t,
                            trialId: e.trial_id
                        })
                    }
                }
            }

            function O(e) {
                let {
                    userTrialOfferId: t,
                    canRenderReferralEmbed: n
                } = e, {
                    trialOffer: s,
                    isResolving: l
                } = (0, d.useStateFromStoresObject)([C.default], () => ({
                    trialOffer: n ? C.default.getRelevantUserTrialOffer(t) : null,
                    isResolving: !!n && C.default.isResolving(t)
                }), [n, t]), i = h.default.getCurrentUser(), r = (0, d.useStateFromStores)([h.default], () => null != s && (0, T.isPremium)(void 0 !== i && s.user_id === i.id ? i : h.default.getUser(s.user_id))), o = (0, d.useStateFromStores)([p.default], () => {
                    var e;
                    return r ? null === (e = p.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt : null
                }), {
                    analyticsLocations: c
                } = (0, E.default)(m.default.SHARE_NITRO_EMBED), {
                    enabled: _
                } = S.default.useExperiment({
                    location: "f4ff1d_1"
                }, {
                    autoTrackExposure: !0
                });
                return l ? (0, a.jsx)(f.ResponsiveLoadingEmbedTile, {
                    isHorizontal: !u.isMobile
                }) : n && null != s && void 0 !== i ? (0, a.jsx)(x, {
                    trialOffer: s,
                    currentUser: i,
                    recipientHasNitro: r,
                    trialEndsAt: o,
                    analyticsLocations: c,
                    shouldShowBirthdayUX: _,
                    ...e
                }) : (0, a.jsx)("div", {
                    className: v.invalidWrapper,
                    children: (0, a.jsx)("div", {
                        className: v.invalid
                    })
                })
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return x
                }
            }), l("424973"), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("446674"),
                o = l("77078"),
                d = l("716241"),
                u = l("186211"),
                c = l("952943"),
                f = l("5667"),
                m = l("766274"),
                I = l("145131"),
                N = l("83910"),
                T = l("772280"),
                E = l("71216"),
                h = l("741919"),
                g = l("599110"),
                p = l("674916"),
                S = l("702411"),
                O = l("49111"),
                _ = l("843455"),
                A = l("782340"),
                C = l("946197");

            function x(e) {
                var t, l, s, x;
                let {
                    name: R,
                    icon: M,
                    imageSrc: v,
                    iconBackgroundColor: L,
                    iconClassName: j,
                    details: b,
                    integration: P,
                    buttonText: D,
                    buttonDisabled: y,
                    hasNextSection: G,
                    onButtonClick: B,
                    guildId: H,
                    isScrolling: k,
                    canShowMigrationTooltip: U
                } = e, [F, w] = a.useState(!1), [W, V] = a.useState(!1), Y = null == P ? void 0 : P.integration.id;
                let K = (t = D, l = y, s = G, x = B, null == t || null == x ? null : s ? (0, n.jsxs)(I.default, {
                        align: I.default.Align.CENTER,
                        children: [(0, n.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children: t
                        }), s ? (0, n.jsx)(T.default, {
                            width: 10,
                            height: 10,
                            className: C.caret
                        }) : null]
                    }) : (0, n.jsx)(o.Button, {
                        size: o.Button.Sizes.SMALL,
                        look: s ? o.Button.Looks.LINK : o.Button.Looks.FILLED,
                        color: s ? o.Button.Colors.PRIMARY : o.Button.Colors.BRAND,
                        disabled: l,
                        onClick: x,
                        children: t
                    })),
                    z = U && !k && !W && void 0 !== H && null != P;
                a.useEffect(() => {
                    z && g.default.track(O.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                        ...(0, d.collectGuildAnalyticsMetadata)(H),
                        application_id: null == P ? void 0 : P.application.id,
                        location: "overview"
                    })
                }, [H, null == P ? void 0 : P.application.id, z]);
                let Z = z ? (0, n.jsx)(o.Popout, {
                        renderPopout: () => (0, n.jsx)(o.Clickable, {
                            onClick: e => {
                                e.stopPropagation(), V(!0), S.default.dismissOverviewTooltip(H, P.integration)
                            },
                            children: (0, n.jsx)(f.default, {
                                content: A.default.Messages.COMMANDS_SCOPE_MIGRATION_OVERVIEW_TOOLTIP,
                                onClick: () => {}
                            })
                        }),
                        position: "bottom",
                        align: "center",
                        animation: o.Popout.Animation.TRANSLATE,
                        shouldShow: !0,
                        children: () => K
                    }) : K,
                    q = (0, r.useStateFromStoresArray)([u.default], () => {
                        var e;
                        return null != P && null != H && null !== (e = u.default.getApplicationEntitlementsForGuild(P.application.id, H)) && void 0 !== e ? e : []
                    }),
                    J = (0, r.useStateFromStores)([c.default], () => c.default.integrationIdsWithCommands),
                    X = null != Y && J.has(Y),
                    Q = (0, n.jsxs)(I.default, {
                        children: [(0, n.jsx)(p.default, {
                            name: R,
                            icon: M,
                            imageSrc: v,
                            iconBackgroundColor: L,
                            iconClassName: j,
                            details: b,
                            isPremium: q.length > 0
                        }), (0, n.jsx)(I.default.Child, {
                            shrink: 0,
                            grow: 0,
                            children: (0, n.jsxs)(I.default, {
                                align: I.default.Align.CENTER,
                                justify: I.default.Justify.END,
                                children: [function(e, t, l) {
                                    var a;
                                    if (null == e) return null;
                                    let s = [],
                                        {
                                            application: i,
                                            integration: r,
                                            webhooks: d
                                        } = e;
                                    return null != i.bot && s.push((0, n.jsx)(o.TooltipContainer, {
                                        forceOpen: t,
                                        text: new(0, m.default)(i.bot).isVerifiedBot() ? A.default.Messages.INTEGRATIONS_APPLICATION_VERIFIED_BOT : A.default.Messages.INTEGRATIONS_APPLICATION_BOT,
                                        className: C.feature,
                                        children: (0, n.jsx)(E.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "bot")), d.length > 0 && s.push((0, n.jsx)(o.TooltipContainer, {
                                        forceOpen: t,
                                        text: A.default.Messages.INTEGRATIONS_WEBHOOKS_SUMMARY.format({
                                            count: d.length
                                        }),
                                        className: C.feature,
                                        children: (0, n.jsx)(h.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "webhooks")), (null == r ? void 0 : null === (a = r.scopes) || void 0 === a ? void 0 : a.includes(_.OAuth2Scopes.APPLICATIONS_COMMANDS)) === !0 && l && s.push((0, n.jsx)("div", {
                                        className: C.feature,
                                        children: (0, n.jsx)(N.default, {
                                            width: 24,
                                            height: 24,
                                            className: C.featureIcon
                                        })
                                    }, "commands")), s
                                }(P, F, X), Z]
                            })
                        })]
                    });
                return G ? (0, n.jsx)(o.Clickable, {
                    onClick: () => {
                        U && null != H && null != P && S.default.dismissOverviewTooltip(H, P.integration), null == B || B()
                    },
                    onFocus: () => w(!0),
                    onBlur: () => w(!1),
                    children: (0, n.jsx)(o.Card, {
                        editable: !0,
                        className: i(C.card, C.clickable),
                        children: Q
                    })
                }) : (0, n.jsx)(o.Card, {
                    editable: !0,
                    className: C.card,
                    children: Q
                })
            }
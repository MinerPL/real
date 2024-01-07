            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("70102");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("65597"),
                o = n("77078"),
                u = n("719451"),
                d = n("812204"),
                c = n("685665"),
                f = n("534438"),
                h = n("141254"),
                C = n("116616"),
                p = n("653047"),
                m = n("697218"),
                E = n("145131"),
                g = n("791106"),
                I = n("476765"),
                S = n("124969"),
                _ = n("83900"),
                N = n("216422"),
                T = n("128295"),
                A = n("414868"),
                L = n("599110"),
                v = n("315102"),
                x = n("773336"),
                R = n("50885"),
                M = n("52114"),
                O = n("218484"),
                y = n("49111"),
                D = n("646718"),
                b = n("782340"),
                j = n("672067"),
                G = n("926622");

            function U() {
                let {
                    analyticsLocations: e,
                    sourceAnalyticsLocations: t
                } = (0, c.default)(d.default.PREMIUM_UPSELL_TOOLTIP);
                return a.useEffect(() => {
                    L.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: D.PremiumUpsellTypes.GUILD_CAP_INLINE_INVITE_MODAL,
                        location: {
                            page: y.AnalyticsPages.NATIVE_INVITE_MODAL
                        },
                        location_stack: t
                    })
                }, [t]), (0, l.jsxs)(o.Clickable, {
                    onClick: () => (0, C.default)({
                        analyticsSource: {
                            page: y.AnalyticsLocations.EXTERNAL_INVITE_LINK_MODAL
                        },
                        analyticsLocation: {
                            page: y.AnalyticsLocations.EXTERNAL_INVITE_LINK_MODAL,
                            section: y.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
                        },
                        analyticsLocations: e
                    }),
                    className: j.experimentUpsellError,
                    children: [(0, l.jsx)(N.default, {
                        width: 24,
                        height: 24,
                        className: j.experimentUpsellIcon,
                        color: g.GradientCssUrls.PREMIUM_TIER_2
                    }), (0, l.jsx)("span", {
                        className: j.experimentUpsellText,
                        children: b.default.Messages.GUILD_CAP_UPSELL_TOOLTIP
                    }), (0, l.jsx)("span", {
                        className: j.experimentGetNitro,
                        children: b.default.Messages.GUILD_CAP_UPSELL_GET_NITRO
                    })]
                })
            }

            function P(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsxs)("div", {
                    "aria-hidden": "true",
                    className: i(j.iconContainer, t),
                    children: [(0, l.jsx)(T.default, {
                        className: j.iconSparklePlus
                    }), (0, l.jsx)(_.default, {
                        className: j.iconLink,
                        width: 40,
                        height: 40
                    }), (0, l.jsx)(A.default, {
                        className: j.iconSparkleStar
                    })]
                })
            }

            function w(e) {
                let {
                    transitionState: t
                } = e, n = (0, I.useUID)(), {
                    AnalyticsLocationProvider: a
                } = (0, c.default)(d.default.INVITE_MODAL);
                return (0, l.jsx)(a, {
                    children: (0, l.jsx)(o.ModalRoot, {
                        size: o.ModalSize.DYNAMIC,
                        "aria-labelledby": n,
                        transitionState: t,
                        children: (0, l.jsxs)(o.ModalContent, {
                            className: j.errorContent,
                            children: [(0, l.jsx)(P, {
                                className: j.errorImage
                            }), (0, l.jsx)(o.Heading, {
                                id: n,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: b.default.Messages.INVITE_MODAL_ERROR_INVALID_TITLE
                            }), (0, l.jsx)("div", {
                                className: j.errorBody,
                                children: b.default.Messages.INVITE_MODAL_ERROR_INVALID_BODY
                            }), (0, l.jsx)(S.Button, {
                                size: S.Button.Sizes.LARGE,
                                onClick: () => M.default.close(),
                                color: S.Button.Colors.BRAND,
                                children: b.default.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT
                            })]
                        })
                    })
                })
            }

            function F(e) {
                let t, n, {
                    transitionState: s
                } = e;
                (0, r.default)([m.default], () => {
                    var e;
                    return null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType
                });
                let {
                    invite: C,
                    error: g,
                    submitting: _
                } = (0, r.useStateFromStoresObject)([O.default], () => O.default.getProps());
                a.useEffect(() => {
                    !__OVERLAY__ && x.isPlatformEmbedded && ((0, x.isWindows)() ? R.default.minimize() : R.default.restore(), R.default.focus())
                }, []);
                let N = (0, I.useUID)(),
                    {
                        AnalyticsLocationProvider: T
                    } = (0, c.default)(d.default.INVITE_MODAL);
                if (null == C) return null;
                if (C.state === y.InviteStates.EXPIRED || C.state === y.InviteStates.BANNED || C.state === y.InviteStates.ERROR) return (0, l.jsx)(w, {
                    transitionState: s
                });
                if (null == C.channel) return null;

                function A() {
                    null != C && M.default.acceptInvite(C)
                }
                let {
                    guild: L,
                    channel: D,
                    inviter: P,
                    target_application: F
                } = C, B = null != C.stage_instance, V = null == C.guild && null == C.channel && null != C.inviter;
                if (null != F) {
                    t = null == L ? void 0 : L.name;
                    let e = p.default.createFromServer(F);
                    n = e.getCoverImageURL(1024)
                } else if (null != L) t = L.name, n = v.default.getGuildSplashURL({
                    id: L.id,
                    splash: L.splash
                });
                else if ((null == (t = D.name) || "" === t) && null != P && (t = P.username), null == t) throw Error("no name for group DM invite");
                let H = (0, h.isAtGuildCapAndNonPremium)(),
                    k = B ? b.default.Messages.INSTANT_INVITE_ACCEPT_STAGE : b.default.Messages.INVITE_MODAL_BUTTON.format({
                        guildName: t
                    });
                return V && (k = b.default.Messages.ACCEPT_INVITE_MODAL_BUTTON), (0, l.jsx)(T, {
                    children: (0, l.jsxs)(o.ModalRoot, {
                        size: o.ModalSize.DYNAMIC,
                        "aria-labelledby": N,
                        transitionState: s,
                        className: j.container,
                        children: [(0, l.jsx)("div", {
                            className: j.contentWrapper,
                            children: (0, l.jsx)(o.Scroller, {
                                className: j.scroller,
                                children: (0, l.jsxs)(E.default, {
                                    className: j.inviteContent,
                                    direction: E.default.Direction.VERTICAL,
                                    justify: E.default.Justify.BETWEEN,
                                    children: [(0, l.jsx)("div", {
                                        id: N,
                                        className: G.marginBottom20,
                                        children: (0, l.jsx)(u.default, {
                                            invite: C,
                                            disableUser: null != L,
                                            error: g
                                        })
                                    }), B && null != L ? (0, l.jsx)("div", {
                                        className: i(G.marginBottom20, j.stage),
                                        children: (0, l.jsx)(f.default, {
                                            isCard: !0,
                                            stageInstance: C.stage_instance,
                                            guild: L
                                        })
                                    }) : null, (0, l.jsxs)("div", {
                                        children: [H ? (0, l.jsx)(U, {}) : null, null == F ? (0, l.jsx)(o.Tooltip, {
                                            text: H ? b.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION : null,
                                            position: "bottom",
                                            children: e => {
                                                let {
                                                    onMouseEnter: t,
                                                    onMouseLeave: n
                                                } = e;
                                                return (0, l.jsx)(S.Button, {
                                                    size: S.Button.Sizes.LARGE,
                                                    onClick: A,
                                                    submitting: _,
                                                    disabled: H,
                                                    color: B ? S.Button.Colors.GREEN : S.Button.Colors.BRAND,
                                                    onMouseEnter: t,
                                                    onMouseLeave: n,
                                                    children: H ? b.default.Messages.GUILD_CAP_INVITE_MODAL_BUTTON : k
                                                })
                                            }
                                        }) : (0, l.jsxs)("div", {
                                            className: j.buttonGroup,
                                            children: [(0, l.jsx)(S.Button, {
                                                size: S.Button.Sizes.LARGE,
                                                onClick: A,
                                                submitting: _,
                                                children: b.default.Messages.PLAY
                                            }), (0, l.jsx)(S.Button, {
                                                color: S.Button.Colors.PRIMARY,
                                                size: S.Button.Sizes.LARGE,
                                                onClick: A,
                                                submitting: _,
                                                children: b.default.Messages.SPECTATE
                                            })]
                                        }), (0, l.jsx)(E.default, {
                                            justify: E.default.Justify.CENTER,
                                            className: G.marginTop8,
                                            children: (0, l.jsx)(S.Button, {
                                                look: S.Button.Looks.LINK,
                                                className: j.noThanksButton,
                                                onClick: function() {
                                                    M.default.close()
                                                },
                                                color: S.Button.Colors.TRANSPARENT,
                                                children: b.default.Messages.INIVTE_MODAL_NO_THANKS
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), null != n && (0, l.jsx)("div", {
                            className: j.inviteSplash,
                            style: {
                                backgroundImage: "url(".concat(n, ")")
                            }
                        })]
                    })
                })
            }
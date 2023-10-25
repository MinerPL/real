(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82061"], {
        814831: function(e, t, a) {
            "use strict";
            e.exports = a.p + "a2e6c7df5d20d1aeaacb.svg"
        },
        903800: function(e, t, a) {
            "use strict";
            e.exports = a.p + "86e12f1a8f38a302c543.svg"
        },
        87657: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var n = a("920040"),
                r = a("773670"),
                s = a("77078"),
                i = a("390236"),
                l = r.memo(function(e) {
                    var t, a, l, o;
                    let {
                        user: u,
                        size: d = s.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...R
                    } = e, E = r.useContext(i.default);
                    return (0, n.jsx)(s.Avatar, {
                        src: (t = u, a = (0, s.getAvatarSize)(d), l = c, o = E, t.getAvatarURL(o, a, l)),
                        size: d,
                        "aria-label": f ? void 0 : u.username,
                        "aria-hidden": f,
                        ...R
                    })
                })
        },
        878551: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var n = a("920040"),
                r = a("773670"),
                s = a("64379"),
                i = a("77078"),
                l = a("54239"),
                o = a("87657"),
                u = a("915568"),
                d = a("428958"),
                c = a("592407"),
                f = a("915639"),
                R = a("145131"),
                E = a("956089"),
                T = a("315102"),
                _ = a("387111"),
                N = a("158998"),
                m = a("49111"),
                I = a("474695"),
                S = a("782340"),
                A = a("566420");
            let h = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.default.locale;
                return "https://".concat(m.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
            };

            function p(e) {
                let {
                    guild: t,
                    toUser: f,
                    fromUser: p,
                    onClose: g,
                    transitionState: O
                } = e, x = (0, u.useIsGuildTransferOwnershipVerificationEnabled)(), [v, C] = r.useState(!1), F = t.hasFeature(m.GuildFeatures.VERIFIED) || t.hasFeature(m.GuildFeatures.PARTNERED), M = F ? S.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null, b = F ? S.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({
                    ticketUrl: h()
                }) : null, D = t.hasFeature(m.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(m.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
                async function L(e) {
                    await c.default.transferOwnership(t.id, f.id, I.TransferOwnershipVerificationTypes.EMAIL, e)
                }
                async function y() {
                    await c.default.sendTransferOwnershipPincode(t.id, !0)
                }
                async function P(e) {
                    e.preventDefault(), g();
                    try {
                        x && !p.mfaEnabled && null != p.email ? (await c.default.sendTransferOwnershipPincode(t.id), (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("644512").then(a.bind(a, "644512"));
                            return t => (0, n.jsx)(e, {
                                ...t,
                                onFormSubmit: L,
                                onResend: y,
                                onSuccess: l.popLayer,
                                headerText: S.default.Messages.TRANSFER_OWNERSHIP,
                                confirmButtonText: S.default.Messages.TRANSFER_OWNERSHIP,
                                confirmButtonColor: i.Button.Colors.RED,
                                impressionName: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
                            })
                        })) : (await c.default.transferOwnership(t.id, f.id, p.mfaEnabled ? I.TransferOwnershipVerificationTypes.MFA : null), (0, l.popLayer)())
                    } catch (e) {
                        e.body.code === m.AbortCodes.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, i.openModal)(e => (0, n.jsx)(i.ConfirmModal, {
                            ...e,
                            header: S.default.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
                            confirmText: S.default.Messages.GOT_IT,
                            confirmButtonColor: i.Button.Colors.BRAND,
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: S.default.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
                                    server_subscription_owner_transfer_article: m.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
                                })
                            })
                        }))
                    }
                }(0, d.default)({
                    type: s.ImpressionTypes.MODAL,
                    name: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
                });
                let j = _.default.getNickname(t.id, void 0, f),
                    U = f.hasAvatarForGuild(t.id),
                    B = () => (0, n.jsxs)("span", {
                        className: A.guildTransfer,
                        children: [null != t.icon ? (0, n.jsx)(i.Avatar, {
                            src: T.default.getGuildIconURL({
                                id: t.id,
                                icon: t.icon,
                                size: 16
                            }),
                            size: i.AvatarSizes.SIZE_16,
                            className: A.miniGuildIcon,
                            "aria-hidden": !0
                        }) : null, (0, n.jsx)(i.Text, {
                            className: A.guildName,
                            variant: "text-sm/bold",
                            children: t.toString()
                        })]
                    });
                return (0, n.jsx)(i.ModalRoot, {
                    transitionState: O,
                    children: (0, n.jsxs)("form", {
                        onSubmit: P,
                        children: [(0, n.jsx)(i.ModalHeader, {
                            separator: !1,
                            children: (0, n.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                className: A.header,
                                children: S.default.Messages.TRANSFER_OWNERSHIP
                            })
                        }), (0, n.jsxs)(i.ModalContent, {
                            children: [(0, n.jsx)(i.FormText, {
                                type: i.FormText.Types.DESCRIPTION,
                                className: A.subHeader,
                                children: null != j || U ? S.default.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
                                    GuildHook: B,
                                    user: (0, N.getUserTag)(f),
                                    AKAHook: function() {
                                        return (0, n.jsxs)("span", {
                                            className: A.akaTransfer,
                                            children: [(0, n.jsx)(E.TextBadge, {
                                                text: S.default.Messages.AKA,
                                                disableColor: !0,
                                                className: A.akaBadge
                                            }), U ? (0, n.jsx)(i.Avatar, {
                                                src: f.getAvatarURL(t.id, 16, !0),
                                                size: i.AvatarSizes.SIZE_16,
                                                className: A.miniAvatar,
                                                "aria-hidden": !0
                                            }) : null, (0, n.jsx)(i.Text, {
                                                className: A.nickname,
                                                variant: "text-sm/normal",
                                                children: null != j ? j : N.default.getName(f)
                                            })]
                                        })
                                    }
                                }) : S.default.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
                                    GuildHook: B,
                                    user: (0, N.getUserTag)(f)
                                })
                            }), (0, n.jsxs)(R.default, {
                                className: A.fromToWrapper,
                                justify: R.default.Justify.CENTER,
                                children: [(0, n.jsx)("div", {
                                    className: A.from,
                                    children: (0, n.jsx)(o.default, {
                                        user: p,
                                        size: i.AvatarSizes.SIZE_80
                                    })
                                }), (0, n.jsx)("div", {
                                    className: A.to,
                                    children: (0, n.jsx)(o.default, {
                                        user: f,
                                        size: i.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), D && (0, n.jsx)(i.FormText, {
                                type: i.FormText.Types.DESCRIPTION,
                                className: A.roleSubscriptionText,
                                children: S.default.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
                                    server_subscription_owner_transfer_article: m.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
                                })
                            }), (0, n.jsx)(i.FormSwitch, {
                                disabled: F,
                                tooltipNote: M,
                                hideBorder: !0,
                                value: v,
                                onChange: function(e) {
                                    C(e)
                                },
                                children: (0, n.jsx)(i.FormText, {
                                    type: i.FormText.Types.DESCRIPTION,
                                    children: S.default.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({
                                        username: (0, N.getUserTag)(f)
                                    })
                                })
                            }), (0, n.jsx)(i.FormText, {
                                className: A.protectedText,
                                type: i.FormText.Types.DEFAULT,
                                children: b
                            })]
                        }), (0, n.jsxs)(i.ModalFooter, {
                            children: [(0, n.jsx)(i.Button, {
                                type: "submit",
                                disabled: !v,
                                color: i.Button.Colors.RED,
                                children: S.default.Messages.TRANSFER_OWNERSHIP
                            }), (0, n.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: g,
                                children: S.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        },
        915568: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useIsGuildTransferOwnershipVerificationEnabled: function() {
                    return s
                }
            });
            var n = a("862205");
            let r = (0, n.createExperiment)({
                kind: "user",
                id: "2023-02_guild_transfer_ownership_verification",
                label: "Safety Experience Guild Transfer Ownership Verification",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function s() {
                return r.useExperiment({
                    location: "4f43f7_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        428958: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var n = a("773670"),
                r = a("376929"),
                s = a.n(r),
                i = a("552473"),
                l = a.n(i),
                o = a("64379"),
                u = a("913144"),
                d = a("42203"),
                c = a("18494"),
                f = a("162771"),
                R = a("599110"),
                E = a("716241"),
                T = a("939011");
            let _ = (0, o.trackMaker)({
                analyticEventConfigs: R.AnalyticEventConfigs,
                dispatcher: u.default,
                TRACK_ACTION_NAME: "TRACK"
            });

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    a = arguments.length > 2 ? arguments[2] : void 0,
                    r = n.useRef(),
                    i = n.useRef();
                n.useEffect(() => {
                    let n = !s(r.current, e);
                    n && (r.current = e);
                    let u = !s(i.current, a);
                    if (u && (i.current = a), !n && !u) return;
                    let N = {
                        ...e,
                        sequenceId: l("impression_")
                    };
                    return ! function(e) {
                        var t, a;
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                name: r,
                                type: s,
                                properties: i
                            } = e;
                        if (e.type === o.ImpressionTypes.MODAL && null == e.name && (0, T.getImpressionStack)().some(e => {
                                var t;
                                return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                            })) return;
                        (0, T.setCurrentImpression)(e);
                        let l = null !== (t = null == i ? void 0 : i.guild_id) && void 0 !== t ? t : f.default.getGuildId(),
                            u = null !== (a = null == i ? void 0 : i.channel_id) && void 0 !== a ? a : c.default.getChannelId(l),
                            N = (0, R.expandEventProperties)({
                                impression_type: s,
                                location: (0, T.getLocation)(),
                                ...(0, E.collectGuildAnalyticsMetadata)(l),
                                ...(0, E.collectChannelAnalyticsMetadata)(d.default.getChannel(u)),
                                ...i
                            });
                        if (n) {
                            (0, T.setDebugTrackedData)(null, null);
                            return
                        }
                        null != r && null != s && ((0, R.debugLogEvent)(r, N), _(r, N)), (0, T.setDebugTrackedData)(r, N)
                    }(N, t.disableTrack), () => {
                        null != N && (0, T.cleanupImpression)(N)
                    }
                }, t.trackOnInitialLoad ? [] : void 0)
            }
        },
        20606: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var n = a("710984").default
        },
        390236: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("773670");
            let r = n.createContext(void 0);
            var s = r
        },
        474695: function(e, t, a) {
            "use strict";
            var n, r, s, i;
            a.r(t), a.d(t, {
                TransferOwnershipVerificationTypes: function() {
                    return r
                }
            }), (s = n || (n = {})).TRANFSER_OWNERSHIP = "TRANFSER_OWNERSHIP", s.CONFIRM_EMAIL_CODE = "CONFIRM_EMAIL_CODE", (i = r || (r = {})).MFA = "mfa", i.SMS = "sms", i.EMAIL = "email"
        },
        956089: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BadgeShapes: function() {
                    return o
                },
                getBadgeWidthForValue: function() {
                    return u
                },
                getBadgeCountString: function() {
                    return d
                },
                NumberBadge: function() {
                    return c
                },
                TextBadge: function() {
                    return f
                },
                PremiumBadge: function() {
                    return R
                },
                IconBadge: function() {
                    return E
                },
                CircleBadge: function() {
                    return T
                }
            });
            var n = a("920040");
            a("773670");
            var r = a("575482"),
                s = a.n(r);
            a("77078");
            var i = a("20606");
            a("782340");
            var l = a("460671");
            let o = {
                ROUND: l.baseShapeRound,
                ROUND_LEFT: l.baseShapeRoundLeft,
                ROUND_RIGHT: l.baseShapeRoundRight,
                SQUARE: ""
            };

            function u(e) {
                return e < 10 ? 16 : e < 100 ? 22 : 30
            }

            function d(e) {
                return e < 1e3 ? "".concat(e) : "".concat(Math.min(Math.floor(e / 1e3), 9), "k+")
            }
            let c = e => {
                    let {
                        count: t,
                        color: a = i.default.STATUS_DANGER,
                        disableColor: r = !1,
                        shape: c = o.ROUND,
                        className: f,
                        style: R,
                        ...E
                    } = e;
                    return (0, n.jsx)("div", {
                        className: s(f, l.numberBadge, c),
                        style: {
                            backgroundColor: r ? void 0 : a,
                            width: u(t),
                            paddingRight: function(e) {
                                switch (e) {
                                    case 1:
                                    case 4:
                                    case 6:
                                        return 1;
                                    default:
                                        return
                                }
                            }(t),
                            ...R
                        },
                        ...E,
                        children: d(t)
                    })
                },
                f = e => {
                    let {
                        text: t,
                        className: a,
                        color: r = i.default.STATUS_DANGER,
                        shape: u = o.ROUND,
                        disableColor: d = !1,
                        style: c,
                        ...f
                    } = e;
                    return (0, n.jsx)("div", {
                        className: s(a, l.textBadge, u),
                        style: {
                            backgroundColor: d ? void 0 : r,
                            ...c
                        },
                        ...f,
                        children: t
                    })
                },
                R = e => {
                    let {
                        text: t,
                        className: a,
                        ...r
                    } = e;
                    return (0, n.jsx)(f, {
                        className: s(l.premiumBadge, a),
                        text: t,
                        ...r
                    })
                },
                E = e => {
                    let {
                        icon: t,
                        className: a,
                        color: r = i.default.STATUS_DANGER,
                        shape: u = o.ROUND,
                        disableColor: d = !1,
                        style: c
                    } = e;
                    return (0, n.jsx)("div", {
                        className: s(a, l.iconBadge, u),
                        style: {
                            backgroundColor: d ? void 0 : r,
                            ...c
                        },
                        children: (0, n.jsx)(t, {
                            className: l.icon
                        })
                    })
                },
                T = e => {
                    let {
                        className: t,
                        color: a = i.default.INTERACTIVE_ACTIVE,
                        shape: r = o.ROUND,
                        disableColor: u = !1,
                        style: d,
                        ...c
                    } = e;
                    return (0, n.jsx)("div", {
                        className: s(t, l.circleBadge, r),
                        style: {
                            backgroundColor: u ? void 0 : a,
                            ...d
                        },
                        ...c
                    })
                }
        }
    }
]);
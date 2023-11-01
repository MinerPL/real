(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["35618"], {
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
            var s = a("37983"),
                n = a("884691"),
                r = a("77078"),
                i = a("390236"),
                l = n.memo(function(e) {
                    var t, a, l, o;
                    let {
                        user: d,
                        size: u = r.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": f = !1,
                        ...E
                    } = e, R = n.useContext(i.default);
                    return (0, s.jsx)(r.Avatar, {
                        src: (t = d, a = (0, r.getAvatarSize)(u), l = c, o = R, t.getAvatarURL(o, a, l)),
                        size: u,
                        "aria-label": f ? void 0 : d.username,
                        "aria-hidden": f,
                        ...E
                    })
                })
        },
        878551: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            });
            var s = a("37983"),
                n = a("884691"),
                r = a("759843"),
                i = a("77078"),
                l = a("54239"),
                o = a("87657"),
                d = a("915568"),
                u = a("428958"),
                c = a("592407"),
                f = a("915639"),
                E = a("145131"),
                R = a("956089"),
                _ = a("315102"),
                T = a("387111"),
                I = a("158998"),
                N = a("49111"),
                m = a("474695"),
                S = a("782340"),
                p = a("132852");
            let A = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.default.locale;
                return "https://".concat(N.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
            };

            function O(e) {
                let {
                    guild: t,
                    toUser: f,
                    fromUser: O,
                    onClose: h,
                    transitionState: x
                } = e, g = (0, d.useIsGuildTransferOwnershipVerificationEnabled)(), [v, C] = n.useState(!1), F = t.hasFeature(N.GuildFeatures.VERIFIED) || t.hasFeature(N.GuildFeatures.PARTNERED), M = F ? S.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null, L = F ? S.default.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({
                    ticketUrl: A()
                }) : null, b = t.hasFeature(N.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(N.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
                async function P(e) {
                    await c.default.transferOwnership(t.id, f.id, m.TransferOwnershipVerificationTypes.EMAIL, e)
                }
                async function y() {
                    await c.default.sendTransferOwnershipPincode(t.id, !0)
                }
                async function D(e) {
                    e.preventDefault(), h();
                    try {
                        g && !O.mfaEnabled && null != O.email ? (await c.default.sendTransferOwnershipPincode(t.id), (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("644512").then(a.bind(a, "644512"));
                            return t => (0, s.jsx)(e, {
                                ...t,
                                onFormSubmit: P,
                                onResend: y,
                                onSuccess: l.popLayer,
                                headerText: S.default.Messages.TRANSFER_OWNERSHIP,
                                confirmButtonText: S.default.Messages.TRANSFER_OWNERSHIP,
                                confirmButtonColor: i.Button.Colors.RED,
                                impressionName: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
                            })
                        })) : (await c.default.transferOwnership(t.id, f.id, O.mfaEnabled ? m.TransferOwnershipVerificationTypes.MFA : null), (0, l.popLayer)())
                    } catch (e) {
                        e.body.code === N.AbortCodes.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, i.openModal)(e => (0, s.jsx)(i.ConfirmModal, {
                            ...e,
                            header: S.default.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
                            confirmText: S.default.Messages.GOT_IT,
                            confirmButtonColor: i.Button.Colors.BRAND,
                            children: (0, s.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: S.default.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
                                    server_subscription_owner_transfer_article: N.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
                                })
                            })
                        }))
                    }
                }(0, u.default)({
                    type: r.ImpressionTypes.MODAL,
                    name: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
                });
                let j = T.default.getNickname(t.id, void 0, f),
                    k = f.hasAvatarForGuild(t.id),
                    H = () => (0, s.jsxs)("span", {
                        className: p.guildTransfer,
                        children: [null != t.icon ? (0, s.jsx)(i.Avatar, {
                            src: _.default.getGuildIconURL({
                                id: t.id,
                                icon: t.icon,
                                size: 16
                            }),
                            size: i.AvatarSizes.SIZE_16,
                            className: p.miniGuildIcon,
                            "aria-hidden": !0
                        }) : null, (0, s.jsx)(i.Text, {
                            className: p.guildName,
                            variant: "text-sm/bold",
                            children: t.toString()
                        })]
                    });
                return (0, s.jsx)(i.ModalRoot, {
                    transitionState: x,
                    children: (0, s.jsxs)("form", {
                        onSubmit: D,
                        children: [(0, s.jsx)(i.ModalHeader, {
                            separator: !1,
                            children: (0, s.jsx)(i.Heading, {
                                variant: "heading-lg/semibold",
                                className: p.header,
                                children: S.default.Messages.TRANSFER_OWNERSHIP
                            })
                        }), (0, s.jsxs)(i.ModalContent, {
                            children: [(0, s.jsx)(i.FormText, {
                                type: i.FormText.Types.DESCRIPTION,
                                className: p.subHeader,
                                children: null != j || k ? S.default.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
                                    GuildHook: H,
                                    user: (0, I.getUserTag)(f),
                                    AKAHook: function() {
                                        return (0, s.jsxs)("span", {
                                            className: p.akaTransfer,
                                            children: [(0, s.jsx)(R.TextBadge, {
                                                text: S.default.Messages.AKA,
                                                disableColor: !0,
                                                className: p.akaBadge
                                            }), k ? (0, s.jsx)(i.Avatar, {
                                                src: f.getAvatarURL(t.id, 16, !0),
                                                size: i.AvatarSizes.SIZE_16,
                                                className: p.miniAvatar,
                                                "aria-hidden": !0
                                            }) : null, (0, s.jsx)(i.Text, {
                                                className: p.nickname,
                                                variant: "text-sm/normal",
                                                children: null != j ? j : I.default.getName(f)
                                            })]
                                        })
                                    }
                                }) : S.default.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
                                    GuildHook: H,
                                    user: (0, I.getUserTag)(f)
                                })
                            }), (0, s.jsxs)(E.default, {
                                className: p.fromToWrapper,
                                justify: E.default.Justify.CENTER,
                                children: [(0, s.jsx)("div", {
                                    className: p.from,
                                    children: (0, s.jsx)(o.default, {
                                        user: O,
                                        size: i.AvatarSizes.SIZE_80
                                    })
                                }), (0, s.jsx)("div", {
                                    className: p.to,
                                    children: (0, s.jsx)(o.default, {
                                        user: f,
                                        size: i.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), b && (0, s.jsx)(i.FormText, {
                                type: i.FormText.Types.DESCRIPTION,
                                className: p.roleSubscriptionText,
                                children: S.default.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
                                    server_subscription_owner_transfer_article: N.SERVER_MONETIZATION_OWNERSHIP_TRANSFER_URL
                                })
                            }), (0, s.jsx)(i.FormSwitch, {
                                disabled: F,
                                tooltipNote: M,
                                hideBorder: !0,
                                value: v,
                                onChange: function(e) {
                                    C(e)
                                },
                                children: (0, s.jsx)(i.FormText, {
                                    type: i.FormText.Types.DESCRIPTION,
                                    children: S.default.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({
                                        username: (0, I.getUserTag)(f)
                                    })
                                })
                            }), (0, s.jsx)(i.FormText, {
                                className: p.protectedText,
                                type: i.FormText.Types.DEFAULT,
                                children: L
                            })]
                        }), (0, s.jsxs)(i.ModalFooter, {
                            children: [(0, s.jsx)(i.Button, {
                                type: "submit",
                                disabled: !v,
                                color: i.Button.Colors.RED,
                                children: S.default.Messages.TRANSFER_OWNERSHIP
                            }), (0, s.jsx)(i.Button, {
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: h,
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
                    return r
                }
            });
            var s = a("862205");
            let n = (0, s.createExperiment)({
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

            function r() {
                return n.useExperiment({
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
                    return I
                }
            });
            var s = a("884691"),
                n = a("714617"),
                r = a.n(n),
                i = a("995008"),
                l = a.n(i),
                o = a("759843"),
                d = a("913144"),
                u = a("42203"),
                c = a("18494"),
                f = a("162771"),
                E = a("599110"),
                R = a("716241"),
                _ = a("939011");
            let T = (0, o.trackMaker)({
                analyticEventConfigs: E.AnalyticEventConfigs,
                dispatcher: d.default,
                TRACK_ACTION_NAME: "TRACK"
            });

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    a = arguments.length > 2 ? arguments[2] : void 0,
                    n = s.useRef(),
                    i = s.useRef();
                s.useEffect(() => {
                    let s = !r(n.current, e);
                    s && (n.current = e);
                    let d = !r(i.current, a);
                    if (d && (i.current = a), !s && !d) return;
                    let I = {
                        ...e,
                        sequenceId: l("impression_")
                    };
                    return ! function(e) {
                        var t, a;
                        let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                name: n,
                                type: r,
                                properties: i
                            } = e;
                        if (e.type === o.ImpressionTypes.MODAL && null == e.name && (0, _.getImpressionStack)().some(e => {
                                var t;
                                return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                            })) return;
                        (0, _.setCurrentImpression)(e);
                        let l = null !== (t = null == i ? void 0 : i.guild_id) && void 0 !== t ? t : f.default.getGuildId(),
                            d = null !== (a = null == i ? void 0 : i.channel_id) && void 0 !== a ? a : c.default.getChannelId(l),
                            I = (0, E.expandEventProperties)({
                                impression_type: r,
                                location: (0, _.getLocation)(),
                                ...(0, R.collectGuildAnalyticsMetadata)(l),
                                ...(0, R.collectChannelAnalyticsMetadata)(u.default.getChannel(d)),
                                ...i
                            });
                        if (s) {
                            (0, _.setDebugTrackedData)(null, null);
                            return
                        }
                        null != n && null != r && ((0, E.debugLogEvent)(n, I), T(n, I)), (0, _.setDebugTrackedData)(n, I)
                    }(I, t.disableTrack), () => {
                        null != I && (0, _.cleanupImpression)(I)
                    }
                }, t.trackOnInitialLoad ? [] : void 0)
            }
        },
        20606: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var s = a("171210").default
        },
        390236: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a("884691");
            let n = s.createContext(void 0);
            var r = n
        },
        474695: function(e, t, a) {
            "use strict";
            var s, n, r, i;
            a.r(t), a.d(t, {
                TransferOwnershipVerificationTypes: function() {
                    return n
                }
            }), (r = s || (s = {})).TRANFSER_OWNERSHIP = "TRANFSER_OWNERSHIP", r.CONFIRM_EMAIL_CODE = "CONFIRM_EMAIL_CODE", (i = n || (n = {})).MFA = "mfa", i.SMS = "sms", i.EMAIL = "email"
        }
    }
]);
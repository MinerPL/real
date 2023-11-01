(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40738"], {
        969176: function(e, t, n) {
            var i = n("354069");
            e.exports = function(e, t) {
                return i(e, t)
            }
        },
        101017: function(e, t, n) {
            "use strict";
            e.exports = n.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, n) {
            "use strict";
            e.exports = n.p + "829f8ef7dcf355fbe141.svg"
        },
        251472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserEntitlementsForApplication: function() {
                    return a
                },
                fetchUserEntitlements: function() {
                    return o
                },
                fetchGiftableEntitlements: function() {
                    return u
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("271560"),
                l = n("49111");

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: l.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
                    oldFormErrors: !0,
                    query: {
                        exclude_consumed: t
                    }
                }).then(t => (r.default.dispatch({
                    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
                    applicationId: e,
                    entitlements: t.body
                }), t.body)).catch(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
                        applicationId: e
                    })
                })
            }
            async function o(e) {
                let {
                    withSku: t = !1,
                    withApplication: n = !1,
                    entitlementType: s
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: l.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: s
                        }
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
                    })
                }
            }
            async function u() {
                r.default.dispatch({
                    type: "ENTITLEMENTS_GIFTABLE_FETCH"
                });
                try {
                    let e = await (0, s.httpGetWithCountryCodeQuery)({
                        url: l.Endpoints.ENTITLEMENTS_GIFTABLE
                    });
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
                        entitlements: e.body
                    })
                } catch (e) {
                    r.default.dispatch({
                        type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
                    })
                }
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return s
                },
                clearCardInfo: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function s(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("599110");
            let s = () => i.useContext(r.AnalyticsContext)
        },
        248559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691"),
                r = () => {
                    let [e, t] = (0, i.useState)(null);
                    return (0, i.useEffect)(() => {
                        var e;
                        (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
                    }, []), e
                }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var s = r
        },
        871388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e, t) {
                return t !== i.ActivityFlags.INSTANCE && null != e && null != e.flags && !!(e.flags & t)
            }
        },
        152311: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("871388"),
                r = n("49111");

            function s(e) {
                return (0, i.default)(e, r.ActivityFlags.EMBEDDED)
            }
        },
        485261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalContent: function() {
                    return I
                },
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("446674"),
                l = n("77078"),
                a = n("305961"),
                o = n("145131"),
                u = n("599110"),
                d = n("335189"),
                c = n("473591"),
                f = n("980215"),
                E = n("879253"),
                _ = n("709594"),
                p = n("49111"),
                h = n("782340"),
                m = n("947399");

            function I(e) {
                let {
                    onClose: t,
                    guildId: n
                } = e, {
                    settings: I,
                    isFetchingSettings: S,
                    isSavingSettings: T,
                    hasPendingChanges: g,
                    errors: C
                } = (0, s.useStateFromStoresObject)([c.default], () => ({
                    settings: c.default.getSettings(n),
                    isFetchingSettings: c.default.isFetchingSettings(n),
                    isSavingSettings: c.default.isSavingSettings(),
                    hasPendingChanges: c.default.hasPendingChanges(),
                    errors: c.default.getErrors()
                })), M = (0, s.useStateFromStores)([a.default], () => a.default.getGuild(n)), R = (0, f.useClydeProfilesEnabled)(M), [N, A] = r.useState(!1);
                r.useEffect(() => ((0, d.startEditingClydeProfile)(), () => {
                    (0, d.doneEditingClydeProfile)(), (0, d.resetPendingChanges)()
                }), []), r.useEffect(() => {
                    (0, d.fetchClydeSettings)(n, !0)
                }, [n]), r.useEffect(() => {
                    (g || null != C) && A(!1)
                }, [g, C]);
                let v = async () => {
                    if (null == n || !c.default.hasPendingChanges()) return;
                    let e = c.default.getPendingUpdates();
                    await (0, d.saveClydeProfile)(n, function(e) {
                        let t = {};
                        return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
                    }(e)), A(!0)
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(l.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsx)("div", {
                            className: m.heading,
                            children: (0, i.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                children: h.default.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, i.jsx)(l.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, i.jsx)(l.ScrollerAuto, {
                        className: m.content,
                        children: S || null == I ? (0, i.jsx)(l.Spinner, {
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [R && (0, i.jsx)(_.default, {
                                guildId: n
                            }), null != I && (0, i.jsx)("div", {
                                className: m.section,
                                children: (0, i.jsx)(E.ClydeEditProfileModalPersonalitySection, {
                                    settings: I
                                })
                            })]
                        })
                    }), (0, i.jsxs)(l.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: m.footer,
                        children: [(0, i.jsx)("div", {
                            className: m.resetButtonContainer,
                            children: (0, i.jsx)(l.Button, {
                                onClick: () => {
                                    (0, d.resetPendingChanges)(), u.default.track(p.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
                                        guild_id: n
                                    })
                                },
                                color: l.ButtonColors.PRIMARY,
                                size: l.ButtonSizes.SMALL,
                                disabled: !g,
                                children: h.default.Messages.RESET
                            })
                        }), g && null == C && (0, i.jsx)("div", {
                            className: m.pendingChangesMessage,
                            children: h.default.Messages.SETTINGS_NOTICE_MESSAGE
                        }), N && (0, i.jsx)("div", {
                            className: m.successfullSaveMessage,
                            children: h.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != C && (0, i.jsx)("div", {
                            className: m.errorMessage,
                            children: h.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)(l.Button, {
                                onClick: v,
                                color: l.ButtonColors.GREEN,
                                size: l.ButtonSizes.SMALL,
                                submitting: T,
                                disabled: !g,
                                children: h.default.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function S(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    guildId: r
                } = e;
                return (0, i.jsx)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.LARGE,
                    children: (0, i.jsx)(I, {
                        onClose: n,
                        guildId: r
                    })
                })
            }
        },
        879253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalPersonalitySection: function() {
                    return m
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("65597"),
                l = n("77078"),
                a = n("570697"),
                o = n("826432"),
                u = n("204203"),
                d = n("599110"),
                c = n("335189"),
                f = n("473591"),
                E = n("680894"),
                _ = n("49111"),
                p = n("782340"),
                h = n("192731");

            function m(e) {
                var t;
                let {
                    settings: n
                } = e, [m, I] = r.useState(!1), [S, T] = r.useState(), {
                    pendingPersonality: g,
                    errors: C
                } = (0, s.useStateFromStoresObject)([f.default], () => ({
                    pendingPersonality: f.default.getPendingPersonality(),
                    errors: f.default.getErrors()
                })), [M, R] = r.useState(), N = null != g && S === g, A = null != C && Number(C.code) === _.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? C.message : void 0, v = N ? p.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : p.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, i.jsxs)(a.default, {
                    title: p.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, i.jsxs)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: h.description,
                        children: [p.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, i.jsx)(l.Anchor, {
                            href: E.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: p.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, i.jsx)(l.TextArea, {
                        value: null !== (t = null != g ? g : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, c.setPendingPersonality)(e)
                        },
                        placeholder: p.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: E.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: m,
                        autosize: !0
                    }), null != A ? (0, i.jsx)(l.FormErrorBlock, {
                        className: h.errorBlock,
                        children: A
                    }) : null, (0, i.jsxs)("div", {
                        className: h.generateButtonContainer,
                        children: [(0, i.jsx)(l.Button, {
                            color: N ? l.ButtonColors.PRIMARY : l.ButtonColors.BRAND,
                            innerClassName: h.generateButton,
                            onClick: () => {
                                if (N && null != M) {
                                    (0, c.setPendingPersonality)(M), R(void 0);
                                    return
                                }
                                null != g && "" !== g.trim() && (d.default.track(_.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), I(!0), (0, c.generatePersonality)(g).then(e => {
                                    null != e && (R(g), T(e), (0, c.setPendingPersonality)(e, !0)), I(!1)
                                }))
                            },
                            disabled: null == g || "" === g.trim(),
                            submitting: m,
                            children: N ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(u.default, {
                                    className: h.buttonIcon
                                }), p.default.Messages.UNDO]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o.default, {
                                    className: h.buttonIcon
                                }), p.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, i.jsx)(l.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: v
                        })]
                    })]
                }, "personality")
            }
        },
        709594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                s = n.n(r),
                l = n("446674"),
                a = n("184900"),
                o = n("11899"),
                u = n("447645"),
                d = n("569460"),
                c = n("52704"),
                f = n("121370"),
                E = n("26989"),
                _ = n("305961"),
                p = n("697218"),
                h = n("335189"),
                m = n("473591"),
                I = n("680894"),
                S = n("782340"),
                T = n("618641");

            function g(e) {
                let {
                    guildId: t,
                    clydeUser: n
                } = e, {
                    pendingNick: r,
                    pendingThemeColors: s
                } = (0, l.useStateFromStoresObject)([m.default], () => m.default.getPendingUpdates()), a = (0, l.useStateFromStores)([E.default], () => E.default.getMember(t, I.CLYDE_AI_USER_ID));
                return (0, i.jsxs)("div", {
                    className: T.editProfileSections,
                    children: [(0, i.jsx)(d.default, {
                        placeholder: S.default.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: r,
                        onGlobalNameChange: h.setPendingNick
                    }), (0, i.jsx)(u.default, {
                        guildId: t,
                        onAvatarChange: h.setPendingAvatar,
                        showRemoveAvatarButton: !0,
                        sectionTitle: S.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, i.jsx)(c.default, {
                        guildId: t,
                        onBannerChange: h.setPendingBanner,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, i.jsx)(f.default, {
                        user: n,
                        guildId: t,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != s ? s : void 0,
                        onThemeColorsChange: h.setPendingThemeColors
                    })]
                })
            }

            function C(e) {
                let {
                    guildId: t
                } = e, {
                    pendingNick: n,
                    pendingAvatar: r,
                    pendingBanner: u,
                    pendingThemeColors: d
                } = (0, l.useStateFromStoresObject)([m.default], () => m.default.getPendingUpdates()), c = (0, l.useStateFromStores)([p.default], () => p.default.getUser(I.CLYDE_AI_USER_ID));
                s(null != c, "Clyde User must exist");
                let f = (0, l.useStateFromStores)([_.default], () => _.default.getGuild(t));
                return (0, i.jsx)(o.default, {
                    className: T.profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, i.jsx)(a.default, {
                        user: c,
                        guild: f,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: h.setPendingAvatar,
                        onBannerChange: h.setPendingBanner,
                        pendingNickname: null != n ? n : void 0,
                        pendingAvatar: r,
                        pendingBanner: u,
                        pendingThemeColors: null != d ? d : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, i.jsx)(g, {
                        guildId: t,
                        clydeUser: c
                    })
                })
            }
        },
        441413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StretchedSparkleStar: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("75196"),
                a = n("956089"),
                o = n("125835"),
                u = n("782340"),
                d = n("159163");

            function c(e) {
                return (0, i.jsx)("svg", {
                    ...(0, l.default)({
                        ...e
                    }),
                    width: "25",
                    height: "48",
                    viewBox: "0 0 25 48",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                        d: "M22.6014 22.1003C20.4432 20.6855 18.6067 18.8326 17.2112 16.6618C15.8157 14.4911 14.8925 12.0511 14.5014 9.50028L13.2014 0.700277C13.1553 0.497624 13.0404 0.317179 12.8764 0.189581C12.7123 0.0619821 12.5092 -0.00490199 12.3014 0.000279992C12.1055 -0.00125605 11.9158 0.0691675 11.7683 0.198194C11.6209 0.327221 11.5259 0.505874 11.5014 0.700277L10.1014 9.50028C9.74796 12.0629 8.8402 14.5177 7.44131 16.6938C6.04242 18.8698 4.18605 20.7148 2.00143 22.1003L0.901394 22.8003C0.770775 22.8872 0.665162 23.0067 0.594998 23.1471C0.524833 23.2874 0.49259 23.4436 0.501431 23.6003C0.49259 23.7569 0.524833 23.9132 0.594998 24.0535C0.665162 24.1938 0.770775 24.3134 0.901394 24.4003L2.00143 25.1003C4.18605 26.4857 6.04242 28.3307 7.44131 30.5068C8.8402 32.6828 9.74796 35.1376 10.1014 37.7003L11.5014 46.4003C11.5014 46.6125 11.5857 46.8159 11.7357 46.966C11.8858 47.116 12.0892 47.2003 12.3014 47.2003C12.5238 47.2017 12.7388 47.1207 12.9049 46.973C13.0711 46.8252 13.1767 46.6212 13.2014 46.4003L14.5014 37.7003C14.8925 35.1495 15.8157 32.7095 17.2112 30.5387C18.6067 28.368 20.4432 26.5151 22.6014 25.1003L23.8014 24.4003C24.0329 24.1951 24.1761 23.9085 24.2014 23.6003C24.1761 23.292 24.0329 23.0054 23.8014 22.8003L22.6014 22.1003Z",
                        fill: "currentColor"
                    })
                })
            }

            function f(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: n = !1,
                    shouldInheritTextColor: r = !1,
                    shouldInheritBackgroundColor: l = !1
                } = e;
                return (0, i.jsx)(o.default, {
                    className: t,
                    forceUseColor: n,
                    children: (0, i.jsx)(a.TextBadge, {
                        disableColor: !0,
                        className: s(d.tag, {
                            [d.inheritTextColor]: r,
                            [d.inheritBackgroundColor]: l
                        }),
                        text: u.default.Messages.NEW
                    })
                })
            }
        },
        125835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("642032"),
                a = n("767964");

            function o(e) {
                let {
                    className: t,
                    children: n,
                    forceUseColor: r = !1,
                    hideStars: o
                } = e;
                return (0, i.jsxs)("span", {
                    className: s(a.container, t, {
                        [a.containerColored]: r
                    }),
                    children: [n, o ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(l.default, {
                            foreground: a.sparkleStarTopRight
                        }), (0, i.jsx)(l.default, {
                            foreground: a.sparkleStarRight
                        }), (0, i.jsx)(l.default, {
                            foreground: a.sparkleStarBottomLeft
                        })]
                    })]
                })
            }
        },
        617917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("77078"),
                o = n("244201"),
                u = n("685665"),
                d = n("181114"),
                c = n("427459"),
                f = n("954296"),
                E = n("49111"),
                _ = n("782340"),
                p = n("500924"),
                h = e => {
                    let {
                        analyticsLocation: t,
                        analyticsSourceLocation: n,
                        guild: s,
                        buttonText: h,
                        targetBoostedGuildTier: m,
                        onClose: I = () => {},
                        closeLayer: S = () => {},
                        pauseAnimation: T = !1,
                        applicationId: g,
                        handleSubscribeModalClose: C,
                        withHighlight: M = !1,
                        ...R
                    } = e, {
                        analyticsLocations: N
                    } = (0, u.default)(), A = (0, o.useAppContext)(), v = A === E.AppContext.POPOUT, [L, P] = r.useState(!1), O = null != m ? Math.max((0, c.getNumberOfAppliedBoostsNeededForTier)(s, m), 1) : 1, y = (0, c.generateBlockGuildSubscriptionPurchasesNode)(), U = async () => {
                        P(!0), await (0, f.addAppliedGuildBoosts)({
                            analyticsLocations: N,
                            analyticsLocation: t,
                            analyticsSourceLocation: n,
                            guild: s,
                            numberOfBoostsToAdd: O,
                            onClose: I,
                            closeLayer: S,
                            inPopout: v,
                            applicationId: g,
                            handleSubscribeModalClose: C
                        }), P(!1)
                    };
                    return null != y ? (0, i.jsx)(a.Tooltip, {
                        text: y,
                        "aria-label": !1,
                        children: e => (0, i.jsx)(d.default, {
                            ...e,
                            disabled: !0,
                            size: a.Button.Sizes.SMALL,
                            pauseAnimation: T,
                            ...R,
                            children: null != h ? h : _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                        })
                    }) : (0, i.jsx)(d.default, {
                        size: a.Button.Sizes.SMALL,
                        ...R,
                        className: l(R.className, {
                            [p.buttonHighlighted]: M
                        }),
                        submitting: L,
                        onClick: U,
                        pauseAnimation: T,
                        children: null != h ? h : _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                    })
                }
        },
        954296: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addAppliedGuildBoosts: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("850068"),
                l = n("583367"),
                a = n("775433"),
                o = n("697218"),
                u = n("625634"),
                d = n("10514"),
                c = n("599110"),
                f = n("427459"),
                E = n("163732"),
                _ = n("49111");
            async function p(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: p,
                    analyticsSourceLocation: h,
                    numberOfBoostsToAdd: m,
                    onClose: I,
                    closeLayer: S,
                    onSubscriptionConfirmation: T,
                    guild: g,
                    handleSubscribeModalClose: C,
                    disablePremiumUpsell: M,
                    inPopout: R,
                    applicationId: N
                } = e, A = R ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, v = o.default.getCurrentUser();
                if (null == v) return;
                if (!v.verified) {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("899917").then(n.bind(n, "899917"));
                        return t => {
                            let {
                                onClose: n,
                                ...r
                            } = t;
                            return (0, i.jsx)(e, {
                                ...r,
                                onClose: n
                            })
                        }
                    }, {
                        contextKey: A
                    });
                    return
                }
                let L = [];
                !d.default.isLoadedForPremiumSKUs() && L.push((0, a.fetchPremiumSubscriptionPlans)()), !u.default.hasFetched && (L.push(s.fetchSubscriptions()), L.push((0, l.fetchGuildBoostSlots)())), L.length > 0 && await Promise.allSettled(L);
                let P = (0, f.getAvailableGuildBoostSlots)(u.default.boostSlots),
                    O = P.length,
                    y = e => {
                        null == I || I(), null == C || C(e)
                    };
                if (O > 0 && (null == m || O >= m)) {
                    let e;
                    1 === O ? e = P.slice(0, 1) : null != m && (e = P.slice(0, m));
                    let t = await (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("247760").then(n.bind(n, "247760"));
                        return n => {
                            let {
                                onClose: r,
                                ...s
                            } = n;
                            return (0, i.jsx)(t, {
                                ...s,
                                onClose: e => {
                                    r(), y(e)
                                },
                                selectedGuild: g,
                                locationSection: _.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: e
                            })
                        }
                    }, {
                        onCloseRequest: () => {
                            null != t && (0, r.closeModal)(t), y(!1)
                        },
                        contextKey: A
                    })
                } else(0, E.default)({
                    analyticsLocations: t,
                    analyticsLocation: p,
                    analyticsSourceLocation: h,
                    guildId: g.id,
                    closeLayer: () => {
                        null == I || I(), null == S || S(), c.default.track(_.AnalyticEvents.MODAL_DISMISSED, {
                            type: _.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_section: p.section
                        })
                    },
                    totalNumberOfSlotsToAssign: null != m ? m : 1,
                    onCloseModal: y,
                    disablePremiumUpsell: M,
                    onSubscriptionConfirmation: T,
                    inPopout: R,
                    applicationId: N
                })
            }
        },
        163732: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("404118"),
                l = n("850068"),
                a = n("775433"),
                o = n("521012"),
                u = n("599110"),
                d = n("719923"),
                c = n("49111"),
                f = n("782340");
            async function E(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: E,
                    analyticsSourceLocation: _,
                    guildId: p,
                    closeLayer: h,
                    onCloseModal: m,
                    totalNumberOfSlotsToAssign: I = 1,
                    disablePremiumUpsell: S,
                    onSubscriptionConfirmation: T,
                    inPopout: g,
                    applicationId: C
                } = e, M = g ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, R = o.default.getPremiumTypeSubscription();
                if (null != R && R.isPurchasedExternally && null != R.paymentGateway) {
                    null != h && h(), s.default.show({
                        title: f.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[R.paymentGateway]
                        }),
                        body: f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[R.paymentGateway],
                            subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(R.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        })
                    });
                    return
                }
                Promise.all([(0, l.fetchPaymentSources)(), (0, a.fetchPremiumSubscriptionPlans)()]);
                let N = await (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("860634").then(n.bind(n, "860634"));
                    return n => {
                        let {
                            transitionState: r,
                            onClose: s
                        } = n;
                        return (0, i.jsx)(e, {
                            transitionState: r,
                            onClose: e => {
                                s(), null == m || m(e)
                            },
                            analyticsLocations: t,
                            analyticsLocation: E,
                            analyticsSourceLocation: null != _ ? _ : E,
                            guildId: p,
                            totalNumberOfSlotsToAssign: I,
                            closeGuildPerksModal: h,
                            disablePremiumUpsell: S,
                            onSubscriptionConfirmation: T,
                            applicationId: C
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        u.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
                            type: c.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                            location: E
                        })
                    },
                    onCloseRequest: () => {
                        null != N && (0, r.closeModal)(N), null == m || m(!1)
                    },
                    contextKey: M
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("479756"),
                l = n("38654"),
                a = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    s = d.default.getCurrentUser(),
                    l = !o.default.isMember(e, null == s ? void 0 : s.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: s
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: s.version,
                            description: s.description,
                            formFields: s.form_fields,
                            guild: s.guild
                        }
                    }), s
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, p = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, h = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, s.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: s
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: s
                    }), s
                } catch (e) {
                    throw e
                }
            };
            var m = {
                fetchVerificationForm: f,
                updateVerificationForm: E,
                updateVerificationFormDescription: _,
                enableVerificationForm: p,
                submitVerificationForm: h
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return p
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return h
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return m
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let s = new Set([r.VerificationFormFieldTypes.TERMS]),
                l = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                f = 150,
                E = 150,
                _ = 1e3,
                p = 300,
                h = "Membership Gating",
                m = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                s = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, i.default)(e => l),
                o = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(s.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                s = n("599110"),
                l = n("50926"),
                a = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    s.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let s = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: s,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        608684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ImageUploaderIcon: function() {
                    return p
                },
                default: function() {
                    return m
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("627445"),
                o = n.n(a),
                u = n("77078"),
                d = n("159885"),
                c = n("694187"),
                f = n("49111"),
                E = n("782340"),
                _ = n("911686");

            function p(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, i.jsx)("div", {
                    className: l(_.imageUploaderIcon, t),
                    children: n
                })
            }
            class h extends r.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, r, s;
                    let {
                        image: a,
                        hint: o,
                        name: h,
                        makeURL: m,
                        disabled: I,
                        onChange: S,
                        showIcon: T,
                        showIconDisabled: g,
                        className: C,
                        imageClassName: M,
                        iconClassName: R,
                        iconWrapperClassName: N,
                        icon: A,
                        hideSize: v,
                        imageStyle: L,
                        showRemoveButton: P,
                        maxFileSizeBytes: O,
                        onFileSizeError: y,
                        onOpenImageSelectModal: U,
                        "aria-label": b
                    } = this.props;
                    if (null != (t = null != a && /^data:/.test(a) ? a : m(a)) ? n = 'url("'.concat(t, '")') : null != h && (r = (0, i.jsx)("div", {
                            className: _.imageUploaderAcronym,
                            children: (0, d.getAcronym)(h)
                        })), I) return (0, i.jsx)("div", {
                        className: l(_.imageUploader, _.disabled, C),
                        children: (0, i.jsxs)("div", {
                            className: l(_.imageUploaderInner, M),
                            style: {
                                ...L,
                                backgroundImage: n
                            },
                            children: [r, g && (0, i.jsx)("div", {
                                className: l(_.imageUploaderIcon, _.imageUploaderIconDisabled, R),
                                children: A
                            })]
                        })
                    });
                    null != a ? s = (0, i.jsx)(u.Anchor, {
                        className: _.removeButton,
                        onClick: this.handleRemove,
                        children: E.default.Messages.REMOVE
                    }) : !v && (s = (0, i.jsx)("small", {
                        className: _.sizeInfo,
                        children: E.default.Messages.MINIMUM_SIZE.format({
                            size: f.AVATAR_SIZE
                        })
                    }));
                    let x = null !== (e = null != b ? b : o) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
                    return (0, i.jsxs)("div", {
                        className: l(_.imageUploader, C),
                        children: [(0, i.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, i.jsxs)("div", {
                                className: T ? l(_.imageUploaderIconWrapper, N) : void 0,
                                children: [(0, i.jsxs)("div", {
                                    className: l(_.imageUploaderInner, M),
                                    style: {
                                        ...L,
                                        backgroundImage: n
                                    },
                                    children: [(0, i.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: r
                                    }), null != U ? (0, i.jsx)(u.Clickable, {
                                        className: _.imageUploaderFileInput,
                                        "aria-label": x,
                                        onClick: U
                                    }) : (0, i.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: S,
                                        className: _.imageUploaderFileInput,
                                        "aria-label": x,
                                        tabIndex: 0,
                                        maxFileSizeBytes: O,
                                        onFileSizeError: y
                                    })]
                                }), null != o && (0, i.jsx)("div", {
                                    className: _.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), T && (0, i.jsx)(p, {
                                    className: R,
                                    icon: A
                                })]
                            })
                        }), P ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            h.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var m = h
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return I
                },
                updateImpersonating: function() {
                    return S
                },
                stopImpersonating: function() {
                    return T
                },
                updateImpersonatedChannels: function() {
                    return C
                },
                updateImpersonatedRoles: function() {
                    return M
                },
                updateImpersonatedData: function() {
                    return R
                }
            });
            var i = n("913144"),
                r = n("716241"),
                s = n("393414"),
                l = n("42203"),
                a = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                f = n("282109"),
                E = n("599110"),
                _ = n("38654"),
                p = n("507950"),
                h = n("49111"),
                m = n("724210");

            function I(e, t) {
                E.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === p.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), g(e)
            }

            function S(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (E.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === p.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), g(e))
            }

            function T(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function g(e) {
                let t = c.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    i = null != t && (0, m.isStaticChannelRoute)(t);
                if (!i && !d.default.can(h.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(h.Routes.CHANNEL(e, t.id))
                }
            }

            function C(e, t, n) {
                let i = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), S(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function M(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            s = r.filter(e => !n.includes(e));
                        return s.length > 0 && C(e, s, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), S(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function R(e, t) {
                S(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                s = n("77078"),
                l = n("112679"),
                a = n("55689"),
                o = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                f = n("646718");

            function E(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: _,
                    onComplete: p,
                    onSubscriptionConfirmation: h,
                    analyticsLocations: m,
                    analyticsObject: I,
                    analyticsLocation: S,
                    analyticsSourceLocation: T,
                    isGift: g = !1,
                    giftMessage: C,
                    subscriptionTier: M,
                    trialId: R,
                    postSuccessGuild: N,
                    openInvoiceId: A,
                    applicationId: v,
                    referralTrialOfferId: L,
                    giftRecipient: P,
                    returnRef: O
                } = null != e ? e : {}, y = !1, U = (0, r.v4)();
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...s
                        } = n;
                        return (0, i.jsx)(e, {
                            ...s,
                            loadId: U,
                            subscriptionTier: M,
                            skuId: M,
                            isGift: g,
                            giftMessage: C,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: E,
                            onClose: e => {
                                r(), null == _ || _(e), e && (null == h || h())
                            },
                            onComplete: () => {
                                y = !0, null == p || p(), !g && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: h,
                            analyticsLocations: m,
                            analyticsObject: I,
                            analyticsLocation: S,
                            analyticsSourceLocation: T,
                            trialId: R,
                            postSuccessGuild: N,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: A,
                            applicationId: v,
                            referralTrialOfferId: L,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: U,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : I,
                            source: T,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: g,
                            eligible_for_trial: null != R,
                            application_id: v,
                            location_stack: m
                        }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == _ || _(y), y && (!g && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == h || h())
                    },
                    onCloseRequest: c.NOOP
                })
            }
        },
        324878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHasActiveTrial: function() {
                    return a
                },
                hasActiveTrial: function() {
                    return o
                },
                isEligibleTrialSub: function() {
                    return u
                },
                useCurrentPremiumTrialTier: function() {
                    return d
                }
            });
            var i = n("446674"),
                r = n("697218"),
                s = n("521012"),
                l = n("646718");
            let a = () => {
                    let e = (0, i.useStateFromStores)([s.default], () => s.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                o = () => {
                    var e;
                    return (null === (e = s.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                u = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === l.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === l.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === l.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === l.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function d() {
                let e = (0, i.useStateFromStores)([s.default], () => s.default.getPremiumTypeSubscription()),
                    t = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
                return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
            }
        },
        855133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                togglePersistentHelper: function() {
                    return r
                },
                setHasCompletedStep: function() {
                    return s
                },
                resetPremiumTutorialStore: function() {
                    return l
                },
                setCanPlayWowMoment: function() {
                    return a
                },
                setIsPersistentHelperHidden: function() {
                    return o
                },
                setNavigatedFromHelper: function() {
                    return u
                }
            });
            var i = n("913144");
            let r = () => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_ONBOARDING_TOGGLE_COLLAPSE"
                    })
                },
                s = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                l = () => {
                    i.default.dispatch({
                        type: "RESET_PREMIUM_TUTORIAL_STORE"
                    })
                },
                a = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_CAN_PLAY_WOW_MOMENT",
                        value: e
                    })
                },
                o = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_PERSISTENT_SET_IS_HIDDEN",
                        value: e
                    })
                },
                u = e => {
                    i.default.dispatch({
                        type: "PREMIUM_TUTORIAL_SET_NAVIGATED_FROM_HELPER",
                        value: e
                    })
                }
        },
        70723: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("446674"),
                l = n("913144");

            function a() {
                i = !1, r = null
            }
            a();
            class o extends s.default.Store {
                get hasCompletedStepDuringSession() {
                    return i
                }
                get activeSubstep() {
                    return r
                }
            }
            o.displayName = "PremiumTutorialSessionStore";
            var u = new o(l.default, {
                SET_HAS_COMPLETED_STEP: function() {
                    i = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    i = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    let {
                        substep: t
                    } = e;
                    r = t
                },
                LOGOUT: function() {
                    a()
                }
            })
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return h
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return m
                }
            });
            var i = n("884691"),
                r = n("65597"),
                s = n("872717"),
                l = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function p() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await s.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                I(r, i, t, n)
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), s = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), l = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    I(l, s, t, n)
                }, [l, s, t, n])
            }

            function I(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && p(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("913144");
            let s = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = s;
            class a extends i.default.Store {
                initialize() {
                    l = s
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var s = r
        },
        409214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                l = n.n(s),
                a = n("748820"),
                o = n("509043"),
                u = n("669491"),
                d = n("77078"),
                c = n("634634"),
                f = n("449918"),
                E = n("973262"),
                _ = n("832132"),
                p = n("771325"),
                h = n("49111"),
                m = n("782340"),
                I = n("727125");

            function S(e) {
                let {
                    onChange: t,
                    onClose: n,
                    color: s,
                    suggestedColors: S,
                    disabled: T,
                    label: g,
                    colorPickerMiddle: C,
                    colorPickerFooter: M,
                    showEyeDropper: R
                } = e, N = r.useRef(null), A = (0, d.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), v = u.default.colors.BACKGROUND_ACCENT.css, L = (0, p.isColorDark)(s), P = (0, o.int2hex)(s), O = P === A ? v : P, y = (0, f.getColor)(L ? h.Color.WHITE_500 : h.Color.PRIMARY_530), U = (0, c.default)(C), b = (0, c.default)(M), [x, F] = r.useState((0, a.v4)());
                return r.useEffect(() => {
                    (U !== C || b !== M) && F((0, a.v4)())
                }, [M, C, b, U]), (0, i.jsx)(d.Popout, {
                    positionKey: x,
                    renderPopout: e => (0, i.jsx)(E.CustomColorPicker, {
                        ...e,
                        value: s,
                        onChange: t,
                        suggestedColors: S,
                        middle: C,
                        footer: M,
                        showEyeDropper: R
                    }),
                    onRequestClose: n,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, i.jsxs)("div", {
                            ref: N,
                            className: l(I.colorSwatch, {
                                [I.disabled]: T
                            }),
                            children: [(0, i.jsx)(d.Clickable, {
                                ...n,
                                tabIndex: T ? -1 : 0,
                                onClick: T ? h.NOOP : t,
                                style: {
                                    backgroundColor: P,
                                    borderColor: O
                                },
                                className: I.swatch,
                                "aria-label": m.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: N
                                },
                                children: (0, i.jsx)(_.default, {
                                    className: I.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: y
                                })
                            }), g]
                        })
                    }
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("77078"),
                a = n("216422"),
                o = n("782340"),
                u = n("881609");

            function d(e) {
                let {
                    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, i.jsx)(l.Tooltip, {
                    text: t,
                    children: e => (0, i.jsx)(l.Clickable, {
                        ...e,
                        children: (0, i.jsx)(a.default, {
                            className: s(u.nitroWheel, n)
                        })
                    })
                })
            }
        },
        11899: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("394846"),
                a = n("77078"),
                o = n("570697"),
                u = n("782340"),
                d = n("56438");

            function c(e) {
                let {
                    children: t,
                    className: n,
                    layoutClassName: r,
                    profilePreview: c,
                    previewTitle: f
                } = e, E = () => (0, i.jsx)(o.default, {
                    title: null != f ? f : u.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                    className: d.preview,
                    children: c
                });
                return (0, i.jsx)("div", {
                    className: n,
                    children: (0, i.jsxs)(a.FormSection, {
                        className: d.profileCustomizationSection,
                        children: [l.isMobile && E(), (0, i.jsxs)("div", {
                            className: s(d.baseLayout, r),
                            children: [t, !l.isMobile && E()]
                        })]
                    })
                })
            }
        },
        447645: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                d = n("75015"),
                c = n("782340"),
                f = n("359223");
            let E = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function _(e) {
                let {
                    showRemoveAvatarButton: t,
                    errors: n,
                    onAvatarChange: r,
                    sectionTitle: _,
                    changeAvatarButtonText: p,
                    guildId: h,
                    className: m,
                    disabled: I = !1,
                    isTryItOutFlow: S = !1,
                    forcedDivider: T,
                    withHighlight: g = !1
                } = e, C = g ? a.default : l.Button;
                return (0, i.jsx)(u.default, {
                    className: m,
                    title: _,
                    errors: n,
                    disabled: I,
                    forcedDivider: T,
                    children: (0, i.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, i.jsx)(C, {
                            className: s({
                                [f.buttonHighlighted]: g
                            }),
                            size: l.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(d.UploadTypes.AVATAR, h, S, S ? E : void 0),
                            children: null != p ? p : c.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, i.jsx)(l.Button, {
                            className: f.removeButton,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            size: l.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != h ? c.default.Messages.USER_SETTINGS_RESET_AVATAR : c.default.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("65597"),
                a = n("77078"),
                o = n("70723"),
                u = n("254490"),
                d = n("891653"),
                c = n("632892"),
                f = n("646718"),
                E = n("326908");

            function _(e) {
                let {
                    errors: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: t.map((e, t) => (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: E.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, u.sizeString)(t)
                        })
                    }, t))
                })
            }

            function p(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: r,
                    description: u,
                    children: p,
                    className: h,
                    errors: m,
                    disabled: I = !1,
                    hideDivider: S = !1,
                    showBorder: T = !1,
                    borderType: g,
                    hasBackground: C = !1,
                    forcedDivider: M = !1,
                    showPremiumIcon: R = !1
                } = e, N = (0, l.default)([o.default], () => {
                    let e = o.default.activeSubstep;
                    return null != e && f.PremiumTutorialSubstepsToStepMap[e] === f.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, i.jsx)("div", {
                    className: s(E.customizationSection, h, {
                        [E.disabled]: I,
                        [E.hideDivider]: S,
                        [E.showBorder]: T,
                        [E.withDivider]: M
                    }),
                    children: (0, i.jsxs)(c.default, {
                        className: E.customizationSectionBorder,
                        backgroundClassName: E.customizationSectionBackground,
                        isShown: T && !N,
                        type: g,
                        hasBackground: C,
                        children: [(0, i.jsxs)(a.FormTitle, {
                            className: E.title,
                            id: r,
                            children: [t, R && (0, i.jsx)(d.default, {}), n]
                        }), null != u ? (0, i.jsx)(a.FormText, {
                            type: a.FormText.Types.DESCRIPTION,
                            className: E.sectionDescription,
                            children: u
                        }) : null, p, null != m && (0, i.jsx)(_, {
                            errors: m
                        })]
                    })
                })
            }
        },
        569460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("570697"),
                l = n("49111"),
                a = n("782340");

            function o(e) {
                var t, n;
                return (0, i.jsx)(s.default, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: a.default.Messages.DISPLAY_NAME,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(r.TextInput, {
                            placeholder: e.placeholder,
                            maxLength: l.DISPLAY_NAME_MAX_LENGTH,
                            onChange: e.onGlobalNameChange,
                            value: null !== (n = null !== (t = e.pendingGlobalName) && void 0 !== t ? t : e.currentGlobalName) && void 0 !== n ? n : ""
                        })
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return r
                },
                default: function() {
                    return c
                }
            });
            var i, r, s = n("37983"),
                l = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("623682");
            (i = r || (r = {})).PREMIUM = "premium", i.LIMITED = "limited";
            let d = {
                [r.PREMIUM]: {
                    border: u.premiumFeatureBorder,
                    background: u.premiumBackground
                },
                [r.LIMITED]: {
                    border: u.limitedFeatureBorder,
                    background: u.limitedBackground
                }
            };
            var c = l.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: i = r.PREMIUM,
                    isShown: l,
                    hasBackground: a = !1,
                    className: c,
                    backgroundClassName: f
                } = e;
                if (!l) return (0, s.jsx)(s.Fragment, {
                    children: n
                });
                let {
                    border: E,
                    background: _
                } = d[i];
                return (0, s.jsx)("div", {
                    ref: t,
                    className: o(E, c),
                    children: (0, s.jsx)("div", {
                        className: o(a ? _ : u.background, f),
                        children: n
                    })
                })
            })
        },
        52704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                d = n("75015"),
                c = n("782340"),
                f = n("650130");

            function E(e) {
                let {
                    showRemoveBannerButton: t,
                    errors: n,
                    onBannerChange: r,
                    guildId: E,
                    className: _,
                    disabled: p = !1,
                    showPremiumIcon: h = !0,
                    isTryItOutFlow: m = !1,
                    forcedDivider: I,
                    withHighlight: S = !1
                } = e, T = S ? a.default : l.Button;
                return (0, i.jsx)(u.default, {
                    className: _,
                    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: h,
                    errors: n,
                    disabled: p,
                    forcedDivider: I,
                    children: (0, i.jsxs)("div", {
                        className: f.buttonsContainer,
                        children: [(0, i.jsx)(T, {
                            className: s({
                                [f.buttonHighlighted]: S
                            }),
                            size: l.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(d.UploadTypes.BANNER, E, m, void 0),
                            children: c.default.Messages.CHANGE_BANNER
                        }), t && (0, i.jsx)(l.Button, {
                            className: f.removeButton,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            size: l.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != E ? c.default.Messages.USER_SETTINGS_RESET_BANNER : c.default.Messages.USER_SETTINGS_REMOVE_BANNER
                        })]
                    })
                })
            }
        },
        121370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("969176"),
                a = n.n(l),
                o = n("669491"),
                u = n("77078"),
                d = n("462274"),
                c = n("217513"),
                f = n("528438"),
                E = n("719923"),
                _ = n("409214"),
                p = n("570697"),
                h = n("782340"),
                m = n("431416");

            function I(e) {
                let {
                    user: t,
                    pendingAvatar: n,
                    pendingColors: r,
                    onThemeColorsChange: l,
                    preventDisabled: I,
                    guildId: S,
                    className: T,
                    showPremiumIcon: g = !0,
                    showResetThemeButton: C = !1,
                    forcedDivider: M
                } = e, R = (0, c.default)(t.id, S), [N, A] = (0, f.default)(t, R, {
                    pendingThemeColors: r,
                    isPreview: !0
                }), v = E.default.canUsePremiumProfileCustomization(t), L = null != n ? n : t.getAvatarURL(S, 80), P = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), O = (0, d.useAvatarColors)(L, P, !1);
                if (null == N || null == A) return null;
                let y = e => {
                    let t = a(e, null == R ? void 0 : R.themeColors);
                    l(t ? void 0 : e)
                };
                return (0, i.jsx)(p.default, {
                    title: h.default.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !v && !I,
                    className: s(m.profileThemesSection, T),
                    showPremiumIcon: g,
                    forcedDivider: M,
                    children: (0, i.jsxs)("div", {
                        className: m.sectionContainer,
                        children: [(0, i.jsx)("div", {
                            className: m.sparkleContainer,
                            children: (0, i.jsx)(_.default, {
                                onChange: e => y([e, A]),
                                color: N,
                                suggestedColors: O,
                                showEyeDropper: !0,
                                label: (0, i.jsx)(u.Text, {
                                    className: m.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: h.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: m.sparkleContainer,
                            children: (0, i.jsx)(_.default, {
                                onChange: e => y([N, e]),
                                color: A,
                                suggestedColors: O,
                                showEyeDropper: !0,
                                label: (0, i.jsx)(u.Text, {
                                    className: m.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: h.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), C && null != S && (0, i.jsx)(u.Button, {
                            className: m.resetButton,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => y([null, null]),
                            children: h.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
                        })]
                    })
                })
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return o
                },
                closeUserProfileModal: function() {
                    return u
                }
            });
            var i = n("913144"),
                r = n("327037"),
                s = n("697218"),
                l = n("506885"),
                a = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = a.ME,
                    channelId: u,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: f
                } = e, E = s.default.getUser(t), _ = o !== a.ME ? o : void 0;
                if (null == E) return (0, r.fetchProfile)(t, {
                    friendToken: d,
                    guildId: _
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: o,
                        channelId: u,
                        friendToken: d,
                        autoFocusNote: c,
                        analyticsLocation: f
                    })
                });
                (0, l.default)(t, E.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: d,
                    guildId: _
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: o,
                    channelId: u,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: f
                })
            }

            function u() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("866227"),
                r = n.n(i),
                s = n("666038");
            class l extends s.default {
                static createFromServer(e) {
                    var t;
                    return new l({
                        ...e,
                        maxUses: e.max_uses,
                        maxAge: e.max_age,
                        createdAt: r(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                        targetType: e.target_type,
                        targetUser: e.target_user,
                        targetApplication: e.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = r(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = r(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                r = n("446674"),
                s = n("244201"),
                l = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(s.default);
                return (0, r.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("817736"),
                r = n("118810");
            let s = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class l {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, i.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = s) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("884691"),
                r = n("748820"),
                s = n("157590");
            let l = (0, r.v4)(),
                a = new Map,
                o = new Map;
            class u extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = o.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = l;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new s.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var d = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        }
    }
]);
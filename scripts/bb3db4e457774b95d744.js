(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17584"], {
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
                l = n("271560"),
                s = n("49111");

            function a(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return r.default.wait(() => {
                    r.default.dispatch({
                        type: "ENTITLEMENT_FETCH_APPLICATION_START",
                        applicationId: e
                    })
                }), i.default.get({
                    url: s.Endpoints.ENTITLEMENTS_FOR_APPLICATION(e),
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
                    entitlementType: l
                } = e;
                r.default.dispatch({
                    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
                });
                try {
                    let e = await i.default.get({
                        url: s.Endpoints.ENTITLEMENTS_FOR_USER,
                        query: {
                            with_sku: t,
                            with_application: n,
                            entitlement_type: l
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
                    let e = await (0, l.httpGetWithCountryCodeQuery)({
                        url: s.Endpoints.ENTITLEMENTS_GIFTABLE
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
                    return l
                },
                clearCardInfo: function() {
                    return s
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

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
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
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
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
                    return l
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var l = r
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
                    return l
                }
            });
            var i = n("871388"),
                r = n("49111");

            function l(e) {
                return (0, i.default)(e, r.ActivityFlags.EMBEDDED)
            }
        },
        485261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ClydeEditProfileModalContent: function() {
                    return R
                },
                default: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                s = n("77078"),
                a = n("305961"),
                o = n("145131"),
                u = n("599110"),
                d = n("335189"),
                c = n("473591"),
                E = n("980215"),
                f = n("879253"),
                _ = n("709594"),
                I = n("49111"),
                p = n("782340"),
                h = n("947399");

            function R(e) {
                let {
                    onClose: t,
                    guildId: n
                } = e, {
                    settings: R,
                    isFetchingSettings: S,
                    isSavingSettings: T,
                    hasPendingChanges: m,
                    errors: A
                } = (0, l.useStateFromStoresObject)([c.default], () => ({
                    settings: c.default.getSettings(n),
                    isFetchingSettings: c.default.isFetchingSettings(n),
                    isSavingSettings: c.default.isSavingSettings(),
                    hasPendingChanges: c.default.hasPendingChanges(),
                    errors: c.default.getErrors()
                })), g = (0, l.useStateFromStores)([a.default], () => a.default.getGuild(n)), C = (0, E.useClydeProfilesEnabled)(g), [L, N] = r.useState(!1);
                r.useEffect(() => ((0, d.startEditingClydeProfile)(), () => {
                    (0, d.doneEditingClydeProfile)(), (0, d.resetPendingChanges)()
                }), []), r.useEffect(() => {
                    (0, d.fetchClydeSettings)(n, !0)
                }, [n]), r.useEffect(() => {
                    (m || null != A) && N(!1)
                }, [m, A]);
                let M = async () => {
                    if (null == n || !c.default.hasPendingChanges()) return;
                    let e = c.default.getPendingUpdates();
                    await (0, d.saveClydeProfile)(n, function(e) {
                        let t = {};
                        return void 0 !== e.pendingPersonality && (t.personality = e.pendingPersonality), void 0 !== e.pendingNick && (t.nick = e.pendingNick), void 0 !== e.pendingAvatar && (t.avatar = e.pendingAvatar), void 0 !== e.pendingBanner && (t.banner = e.pendingBanner), void 0 !== e.pendingAccentColor && (t.accent_color = e.pendingAccentColor), void 0 !== e.pendingThemeColors && (t.theme_colors = e.pendingThemeColors), t
                    }(e)), N(!0)
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(s.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsx)("div", {
                            className: h.heading,
                            children: (0, i.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                children: p.default.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, i.jsx)(s.ModalCloseButton, {
                            onClick: t
                        })]
                    }), (0, i.jsx)(s.ScrollerAuto, {
                        className: h.content,
                        children: S || null == R ? (0, i.jsx)(s.Spinner, {
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [C && (0, i.jsx)(_.default, {
                                guildId: n
                            }), null != R && (0, i.jsx)("div", {
                                className: h.section,
                                children: (0, i.jsx)(f.ClydeEditProfileModalPersonalitySection, {
                                    settings: R
                                })
                            })]
                        })
                    }), (0, i.jsxs)(s.ModalFooter, {
                        direction: o.default.Direction.HORIZONTAL,
                        className: h.footer,
                        children: [(0, i.jsx)("div", {
                            className: h.resetButtonContainer,
                            children: (0, i.jsx)(s.Button, {
                                onClick: () => {
                                    (0, d.resetPendingChanges)(), u.default.track(I.AnalyticEvents.CLYDE_AI_PROFILE_MODAL_RESET_BUTTON_CLICKED, {
                                        guild_id: n
                                    })
                                },
                                color: s.ButtonColors.PRIMARY,
                                size: s.ButtonSizes.SMALL,
                                disabled: !m,
                                children: p.default.Messages.RESET
                            })
                        }), m && null == A && (0, i.jsx)("div", {
                            className: h.pendingChangesMessage,
                            children: p.default.Messages.SETTINGS_NOTICE_MESSAGE
                        }), L && (0, i.jsx)("div", {
                            className: h.successfullSaveMessage,
                            children: p.default.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != A && (0, i.jsx)("div", {
                            className: h.errorMessage,
                            children: p.default.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)(s.Button, {
                                onClick: M,
                                color: s.ButtonColors.GREEN,
                                size: s.ButtonSizes.SMALL,
                                submitting: T,
                                disabled: !m,
                                children: p.default.Messages.SAVE_CHANGES
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
                return (0, i.jsx)(s.ModalRoot, {
                    transitionState: t,
                    size: s.ModalSize.LARGE,
                    children: (0, i.jsx)(R, {
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
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("65597"),
                s = n("77078"),
                a = n("570697"),
                o = n("826432"),
                u = n("204203"),
                d = n("599110"),
                c = n("335189"),
                E = n("473591"),
                f = n("680894"),
                _ = n("49111"),
                I = n("782340"),
                p = n("192731");

            function h(e) {
                var t;
                let {
                    settings: n
                } = e, [h, R] = r.useState(!1), [S, T] = r.useState(), {
                    pendingPersonality: m,
                    errors: A
                } = (0, l.useStateFromStoresObject)([E.default], () => ({
                    pendingPersonality: E.default.getPendingPersonality(),
                    errors: E.default.getErrors()
                })), [g, C] = r.useState(), L = null != m && S === m, N = null != A && Number(A.code) === _.AbortCodes.CLYDE_UNSAFE_PERSONALITY ? A.message : void 0, M = L ? I.default.Messages.CLYDE_GENERATE_PERSONALITY_UNDO : I.default.Messages.CLYDE_GENERATE_PERSONALITY_HINT;
                return (0, i.jsxs)(a.default, {
                    title: I.default.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, i.jsxs)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: p.description,
                        children: [I.default.Messages.PERSONALITY_DESCRIPTION, " ", (0, i.jsx)(s.Anchor, {
                            href: f.CLYDE_PERSONALITY_FEEDBACK_URL,
                            children: I.default.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, i.jsx)(s.TextArea, {
                        value: null !== (t = null != m ? m : n.personality) && void 0 !== t ? t : "",
                        onChange: e => {
                            (0, c.setPendingPersonality)(e)
                        },
                        placeholder: I.default.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: f.CLYDE_PERSONALITY_MAX_LENGTH,
                        disabled: h,
                        autosize: !0
                    }), null != N ? (0, i.jsx)(s.FormErrorBlock, {
                        className: p.errorBlock,
                        children: N
                    }) : null, (0, i.jsxs)("div", {
                        className: p.generateButtonContainer,
                        children: [(0, i.jsx)(s.Button, {
                            color: L ? s.ButtonColors.PRIMARY : s.ButtonColors.BRAND,
                            innerClassName: p.generateButton,
                            onClick: () => {
                                if (L && null != g) {
                                    (0, c.setPendingPersonality)(g), C(void 0);
                                    return
                                }
                                null != m && "" !== m.trim() && (d.default.track(_.AnalyticEvents.CLYDE_AI_GENERATE_PERSONALITY_CLICKED, {
                                    guild_id: n.guild_id
                                }), R(!0), (0, c.generatePersonality)(m).then(e => {
                                    null != e && (C(m), T(e), (0, c.setPendingPersonality)(e, !0)), R(!1)
                                }))
                            },
                            disabled: null == m || "" === m.trim(),
                            submitting: h,
                            children: L ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(u.default, {
                                    className: p.buttonIcon
                                }), I.default.Messages.UNDO]
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o.default, {
                                    className: p.buttonIcon
                                }), I.default.Messages.CLYDE_GENERATE_PERSONALITY]
                            })
                        }), (0, i.jsx)(s.Text, {
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: M
                        })]
                    })]
                }, "personality")
            }
        },
        709594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                l = n.n(r),
                s = n("446674"),
                a = n("184900"),
                o = n("11899"),
                u = n("447645"),
                d = n("569460"),
                c = n("52704"),
                E = n("121370"),
                f = n("26989"),
                _ = n("305961"),
                I = n("697218"),
                p = n("335189"),
                h = n("473591"),
                R = n("680894"),
                S = n("782340"),
                T = n("618641");

            function m(e) {
                let {
                    guildId: t,
                    clydeUser: n
                } = e, {
                    pendingNick: r,
                    pendingThemeColors: l
                } = (0, s.useStateFromStoresObject)([h.default], () => h.default.getPendingUpdates()), a = (0, s.useStateFromStores)([f.default], () => f.default.getMember(t, R.CLYDE_AI_USER_ID));
                return (0, i.jsxs)("div", {
                    className: T.editProfileSections,
                    children: [(0, i.jsx)(d.default, {
                        placeholder: S.default.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: r,
                        onGlobalNameChange: p.setPendingNick
                    }), (0, i.jsx)(u.default, {
                        guildId: t,
                        onAvatarChange: p.setPendingAvatar,
                        showRemoveAvatarButton: !0,
                        sectionTitle: S.default.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, i.jsx)(c.default, {
                        guildId: t,
                        onBannerChange: p.setPendingBanner,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, i.jsx)(E.default, {
                        user: n,
                        guildId: t,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != l ? l : void 0,
                        onThemeColorsChange: p.setPendingThemeColors
                    })]
                })
            }

            function A(e) {
                let {
                    guildId: t
                } = e, {
                    pendingNick: n,
                    pendingAvatar: r,
                    pendingBanner: u,
                    pendingThemeColors: d
                } = (0, s.useStateFromStoresObject)([h.default], () => h.default.getPendingUpdates()), c = (0, s.useStateFromStores)([I.default], () => I.default.getUser(R.CLYDE_AI_USER_ID));
                l(null != c, "Clyde User must exist");
                let E = (0, s.useStateFromStores)([_.default], () => _.default.getGuild(t));
                return (0, i.jsx)(o.default, {
                    className: T.profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, i.jsx)(a.default, {
                        user: c,
                        guild: E,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: p.setPendingAvatar,
                        onBannerChange: p.setPendingBanner,
                        pendingNickname: null != n ? n : void 0,
                        pendingAvatar: r,
                        pendingBanner: u,
                        pendingThemeColors: null != d ? d : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, i.jsx)(m, {
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
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("75196"),
                a = n("956089"),
                o = n("125835"),
                u = n("782340"),
                d = n("159163");

            function c(e) {
                return (0, i.jsx)("svg", {
                    ...(0, s.default)({
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

            function E(e) {
                let {
                    className: t,
                    forceUseColorForSparkles: n = !1,
                    shouldInheritTextColor: r = !1,
                    shouldInheritBackgroundColor: s = !1
                } = e;
                return (0, i.jsx)(o.default, {
                    className: t,
                    forceUseColor: n,
                    children: (0, i.jsx)(a.TextBadge, {
                        disableColor: !0,
                        className: l(d.tag, {
                            [d.inheritTextColor]: r,
                            [d.inheritBackgroundColor]: s
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
                l = n.n(r),
                s = n("642032"),
                a = n("767964");

            function o(e) {
                let {
                    className: t,
                    children: n,
                    forceUseColor: r = !1,
                    hideStars: o
                } = e;
                return (0, i.jsxs)("span", {
                    className: l(a.container, t, {
                        [a.containerColored]: r
                    }),
                    children: [n, o ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.default, {
                            foreground: a.sparkleStarTopRight
                        }), (0, i.jsx)(s.default, {
                            foreground: a.sparkleStarRight
                        }), (0, i.jsx)(s.default, {
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
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("244201"),
                u = n("685665"),
                d = n("181114"),
                c = n("427459"),
                E = n("954296"),
                f = n("49111"),
                _ = n("782340"),
                I = n("500924"),
                p = e => {
                    let {
                        analyticsLocation: t,
                        analyticsSourceLocation: n,
                        guild: l,
                        buttonText: p,
                        targetBoostedGuildTier: h,
                        onClose: R = () => {},
                        closeLayer: S = () => {},
                        pauseAnimation: T = !1,
                        applicationId: m,
                        handleSubscribeModalClose: A,
                        withHighlight: g = !1,
                        ...C
                    } = e, {
                        analyticsLocations: L
                    } = (0, u.default)(), N = (0, o.useAppContext)(), M = N === f.AppContext.POPOUT, [v, P] = r.useState(!1), O = null != h ? Math.max((0, c.getNumberOfAppliedBoostsNeededForTier)(l, h), 1) : 1, y = (0, c.generateBlockGuildSubscriptionPurchasesNode)(), U = async () => {
                        P(!0), await (0, E.addAppliedGuildBoosts)({
                            analyticsLocations: L,
                            analyticsLocation: t,
                            analyticsSourceLocation: n,
                            guild: l,
                            numberOfBoostsToAdd: O,
                            onClose: R,
                            closeLayer: S,
                            inPopout: M,
                            applicationId: m,
                            handleSubscribeModalClose: A
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
                            ...C,
                            children: null != p ? p : _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                        })
                    }) : (0, i.jsx)(d.default, {
                        size: a.Button.Sizes.SMALL,
                        ...C,
                        className: s(C.className, {
                            [I.buttonHighlighted]: g
                        }),
                        submitting: v,
                        onClick: U,
                        pauseAnimation: T,
                        children: null != p ? p : _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_SUBSCRIBE_THIS_SERVER
                    })
                }
        },
        954296: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addAppliedGuildBoosts: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("850068"),
                s = n("583367"),
                a = n("775433"),
                o = n("697218"),
                u = n("625634"),
                d = n("10514"),
                c = n("599110"),
                E = n("427459"),
                f = n("163732"),
                _ = n("49111");
            async function I(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: I,
                    analyticsSourceLocation: p,
                    numberOfBoostsToAdd: h,
                    onClose: R,
                    closeLayer: S,
                    onSubscriptionConfirmation: T,
                    guild: m,
                    handleSubscribeModalClose: A,
                    disablePremiumUpsell: g,
                    inPopout: C,
                    applicationId: L
                } = e, N = C ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, M = o.default.getCurrentUser();
                if (null == M) return;
                if (!M.verified) {
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
                        contextKey: N
                    });
                    return
                }
                let v = [];
                !d.default.isLoadedForPremiumSKUs() && v.push((0, a.fetchPremiumSubscriptionPlans)()), !u.default.hasFetched && (v.push(l.fetchSubscriptions()), v.push((0, s.fetchGuildBoostSlots)())), v.length > 0 && await Promise.allSettled(v);
                let P = (0, E.getAvailableGuildBoostSlots)(u.default.boostSlots),
                    O = P.length,
                    y = e => {
                        null == R || R(), null == A || A(e)
                    };
                if (O > 0 && (null == h || O >= h)) {
                    let e;
                    1 === O ? e = P.slice(0, 1) : null != h && (e = P.slice(0, h));
                    let t = await (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("247760").then(n.bind(n, "247760"));
                        return n => {
                            let {
                                onClose: r,
                                ...l
                            } = n;
                            return (0, i.jsx)(t, {
                                ...l,
                                onClose: e => {
                                    r(), y(e)
                                },
                                selectedGuild: m,
                                locationSection: _.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: e
                            })
                        }
                    }, {
                        onCloseRequest: () => {
                            null != t && (0, r.closeModal)(t), y(!1)
                        },
                        contextKey: N
                    })
                } else(0, f.default)({
                    analyticsLocations: t,
                    analyticsLocation: I,
                    analyticsSourceLocation: p,
                    guildId: m.id,
                    closeLayer: () => {
                        null == R || R(), null == S || S(), c.default.track(_.AnalyticEvents.MODAL_DISMISSED, {
                            type: _.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_section: I.section
                        })
                    },
                    totalNumberOfSlotsToAssign: null != h ? h : 1,
                    onCloseModal: y,
                    disablePremiumUpsell: g,
                    onSubscriptionConfirmation: T,
                    inPopout: C,
                    applicationId: L
                })
            }
        },
        163732: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("404118"),
                s = n("850068"),
                a = n("775433"),
                o = n("521012"),
                u = n("599110"),
                d = n("719923"),
                c = n("49111"),
                E = n("782340");
            async function f(e) {
                let {
                    analyticsLocations: t,
                    analyticsLocation: f,
                    analyticsSourceLocation: _,
                    guildId: I,
                    closeLayer: p,
                    onCloseModal: h,
                    totalNumberOfSlotsToAssign: R = 1,
                    disablePremiumUpsell: S,
                    onSubscriptionConfirmation: T,
                    inPopout: m,
                    applicationId: A
                } = e, g = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, C = o.default.getPremiumTypeSubscription();
                if (null != C && C.isPurchasedExternally && null != C.paymentGateway) {
                    null != p && p(), l.default.show({
                        title: E.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[C.paymentGateway]
                        }),
                        body: E.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                            paymentGatewayName: c.PaymentGatewayToFriendlyName[C.paymentGateway],
                            subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(C.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        })
                    });
                    return
                }
                Promise.all([(0, s.fetchPaymentSources)(), (0, a.fetchPremiumSubscriptionPlans)()]);
                let L = await (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("860634").then(n.bind(n, "860634"));
                    return n => {
                        let {
                            transitionState: r,
                            onClose: l
                        } = n;
                        return (0, i.jsx)(e, {
                            transitionState: r,
                            onClose: e => {
                                l(), null == h || h(e)
                            },
                            analyticsLocations: t,
                            analyticsLocation: f,
                            analyticsSourceLocation: null != _ ? _ : f,
                            guildId: I,
                            totalNumberOfSlotsToAssign: R,
                            closeGuildPerksModal: p,
                            disablePremiumUpsell: S,
                            onSubscriptionConfirmation: T,
                            applicationId: A
                        })
                    }
                }, {
                    onCloseCallback: () => {
                        u.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
                            type: c.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                            location: f
                        })
                    },
                    onCloseRequest: () => {
                        null != L && (0, r.closeModal)(L), null == h || h(!1)
                    },
                    contextKey: g
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                s = n("38654"),
                a = n("9294"),
                o = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    s = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, f = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
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
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, I = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
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
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var h = {
                fetchVerificationForm: E,
                updateVerificationForm: f,
                updateVerificationFormDescription: _,
                enableVerificationForm: I,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
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
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return h
                }
            });
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                s = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                o = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                f = 150,
                _ = 1e3,
                I = 300,
                p = "Membership Gating",
                h = "in-app-member-verification";
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
                l = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, i.default)(e => s),
                o = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                s = n("50926"),
                a = n("347977"),
                o = n("394294"),
                u = n("49111");
            let d = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
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
                    return I
                },
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("627445"),
                o = n.n(a),
                u = n("77078"),
                d = n("159885"),
                c = n("694187"),
                E = n("49111"),
                f = n("782340"),
                _ = n("911686");

            function I(e) {
                let {
                    className: t,
                    icon: n = null
                } = e;
                return (0, i.jsx)("div", {
                    className: s(_.imageUploaderIcon, t),
                    children: n
                })
            }
            class p extends r.PureComponent {
                handleExternalFileChange(e) {
                    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, n, r, l;
                    let {
                        image: a,
                        hint: o,
                        name: p,
                        makeURL: h,
                        disabled: R,
                        onChange: S,
                        showIcon: T,
                        showIconDisabled: m,
                        className: A,
                        imageClassName: g,
                        iconClassName: C,
                        iconWrapperClassName: L,
                        icon: N,
                        hideSize: M,
                        imageStyle: v,
                        showRemoveButton: P,
                        maxFileSizeBytes: O,
                        onFileSizeError: y,
                        onOpenImageSelectModal: U,
                        "aria-label": F
                    } = this.props;
                    if (null != (t = null != a && /^data:/.test(a) ? a : h(a)) ? n = 'url("'.concat(t, '")') : null != p && (r = (0, i.jsx)("div", {
                            className: _.imageUploaderAcronym,
                            children: (0, d.getAcronym)(p)
                        })), R) return (0, i.jsx)("div", {
                        className: s(_.imageUploader, _.disabled, A),
                        children: (0, i.jsxs)("div", {
                            className: s(_.imageUploaderInner, g),
                            style: {
                                ...v,
                                backgroundImage: n
                            },
                            children: [r, m && (0, i.jsx)("div", {
                                className: s(_.imageUploaderIcon, _.imageUploaderIconDisabled, C),
                                children: N
                            })]
                        })
                    });
                    null != a ? l = (0, i.jsx)(u.Anchor, {
                        className: _.removeButton,
                        onClick: this.handleRemove,
                        children: f.default.Messages.REMOVE
                    }) : !M && (l = (0, i.jsx)("small", {
                        className: _.sizeInfo,
                        children: f.default.Messages.MINIMUM_SIZE.format({
                            size: E.AVATAR_SIZE
                        })
                    }));
                    let b = null !== (e = null != F ? F : o) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
                    return (0, i.jsxs)("div", {
                        className: s(_.imageUploader, A),
                        children: [(0, i.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, i.jsxs)("div", {
                                className: T ? s(_.imageUploaderIconWrapper, L) : void 0,
                                children: [(0, i.jsxs)("div", {
                                    className: s(_.imageUploaderInner, g),
                                    style: {
                                        ...v,
                                        backgroundImage: n
                                    },
                                    children: [(0, i.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: r
                                    }), null != U ? (0, i.jsx)(u.Clickable, {
                                        className: _.imageUploaderFileInput,
                                        "aria-label": b,
                                        onClick: U
                                    }) : (0, i.jsx)(c.default, {
                                        ref: this.inputRef,
                                        onChange: S,
                                        className: _.imageUploaderFileInput,
                                        "aria-label": b,
                                        tabIndex: 0,
                                        maxFileSizeBytes: O,
                                        onFileSizeError: y
                                    })]
                                }), null != o && (0, i.jsx)("div", {
                                    className: _.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: o
                                }), T && (0, i.jsx)(I, {
                                    className: C,
                                    icon: N
                                })]
                            })
                        }), P ? l : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = r.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            p.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var h = p
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return R
                },
                updateImpersonating: function() {
                    return S
                },
                stopImpersonating: function() {
                    return T
                },
                updateImpersonatedChannels: function() {
                    return A
                },
                updateImpersonatedRoles: function() {
                    return g
                },
                updateImpersonatedData: function() {
                    return C
                }
            });
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                s = n("42203"),
                a = n("923959"),
                o = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                E = n("282109"),
                f = n("599110"),
                _ = n("38654"),
                I = n("507950"),
                p = n("49111"),
                h = n("724210");

            function R(e, t) {
                f.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), m(e)
            }

            function S(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (f.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), m(e))
            }

            function T(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function m(e) {
                let t = c.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    i = null != t && (0, h.isStaticChannelRoute)(t);
                if (!i && !d.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function A(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function g(e, t) {
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
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && A(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function C(e, t) {
                S(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                s = n("112679"),
                a = n("55689"),
                o = n("855133"),
                u = n("599110"),
                d = n("659500"),
                c = n("49111"),
                E = n("646718");

            function f(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: f,
                    onClose: _,
                    onComplete: I,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: h,
                    analyticsObject: R,
                    analyticsLocation: S,
                    analyticsSourceLocation: T,
                    isGift: m = !1,
                    giftMessage: A,
                    subscriptionTier: g,
                    trialId: C,
                    postSuccessGuild: L,
                    openInvoiceId: N,
                    applicationId: M,
                    referralTrialOfferId: v,
                    giftRecipient: P,
                    returnRef: O
                } = null != e ? e : {}, y = !1, U = (0, r.v4)();
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: U,
                            subscriptionTier: g,
                            skuId: g,
                            isGift: m,
                            giftMessage: A,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: f,
                            onClose: e => {
                                r(), null == _ || _(e), e && (null == p || p())
                            },
                            onComplete: () => {
                                y = !0, null == I || I(), !m && ((0, o.setIsPersistentHelperHidden)(!0), (0, o.setCanPlayWowMoment)(!0))
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: h,
                            analyticsObject: R,
                            analyticsLocation: S,
                            analyticsSourceLocation: T,
                            trialId: C,
                            postSuccessGuild: L,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: N,
                            applicationId: M,
                            referralTrialOfferId: v,
                            returnRef: O
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !y && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: U,
                            payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.SUBSCRIPTION],
                            location: null != S ? S : R,
                            source: T,
                            subscription_type: c.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != C,
                            application_id: M,
                            location_stack: h
                        }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == _ || _(y), y && (!m && d.ComponentDispatch.dispatch(c.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED), null == p || p())
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
                l = n("521012"),
                s = n("646718");
            let a = () => {
                    let e = (0, i.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
                    return (null == e ? void 0 : e.trialId) != null
                },
                o = () => {
                    var e;
                    return (null === (e = l.default.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) != null
                },
                u = e => (null == e ? void 0 : e.trialId) != null && (e.trialId === s.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_3P_ONE_MONTH_TRIAL_ID || e.trialId === s.PREMIUM_TIER_2_REFERRAL_TRIAL_ID);

            function d() {
                let e = (0, i.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
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
                    return l
                },
                resetPremiumTutorialStore: function() {
                    return s
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
                l = () => {
                    i.default.dispatch({
                        type: "SET_HAS_COMPLETED_STEP"
                    })
                },
                s = () => {
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
            var l = n("446674"),
                s = n("913144");

            function a() {
                i = !1, r = null
            }
            a();
            class o extends l.default.Store {
                get hasCompletedStepDuringSession() {
                    return i
                }
                get activeSubstep() {
                    return r
                }
            }
            o.displayName = "PremiumTutorialSessionStore";
            var u = new o(s.default, {
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
        179935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchReferralsRemaining: function() {
                    return o
                },
                checkRecipientEligibility: function() {
                    return u
                },
                createReferralTrial: function() {
                    return d
                },
                resolveReferralTrialOffer: function() {
                    return c
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("819689"),
                s = n("18494"),
                a = n("49111");
            let o = () => (r.default.dispatch({
                    type: "BILLING_REFERRALS_REMAINING_FETCH_START"
                }), i.default.get({
                    url: a.Endpoints.GET_REFERRALS_REMAINING,
                    oldFormErrors: !0
                }).then(e => {
                    r.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                        referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                        sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
                    })
                }, () => {
                    r.default.dispatch({
                        type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
                    })
                })),
                u = e => (r.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
                    recipientId: e
                }), i.default.post({
                    url: a.Endpoints.CREATE_REFERRAL_PREVIEW(e),
                    oldFormErrors: !0
                }).then(t => {
                    r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                        recipientId: e,
                        is_eligible: null != t.body && t.body.is_eligible
                    })
                }, () => {
                    r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                        recipientId: e
                    })
                }));
            async function d(e) {
                try {
                    var t;
                    let n = await i.default.post({
                            url: a.Endpoints.CREATE_REFERRAL(e),
                            oldFormErrors: !0
                        }),
                        l = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_CREATE_REFERRAL_SUCCESS",
                        userTrialOffer: l
                    }), {
                        userTrialOffer: l
                    }
                } catch (e) {
                    if (r.default.dispatch({
                            type: "BILLING_CREATE_REFERRAL_FAIL"
                        }), e.body.code === a.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                        let t = s.default.getCurrentlySelectedChannelId();
                        null != t && l.default.sendClydeError(t, e.body.code)
                    }
                }
            }
            async function c(e) {
                try {
                    var t;
                    let n = await i.default.get({
                            url: a.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                            oldFormErrors: !0
                        }),
                        l = null !== (t = n.body) && void 0 !== t ? t : null;
                    return r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                        userTrialOffer: l
                    }), {
                        userTrialOffer: l
                    }
                } catch (t) {
                    r.default.dispatch({
                        type: "BILLING_REFERRAL_RESOLVE_FAIL",
                        userTrialOfferId: e
                    })
                }
            }
        },
        540692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("637612"),
                r = n("446674"),
                l = n("913144"),
                s = n("697218"),
                a = n("179935"),
                o = n("49111");
            let u = null,
                d = {},
                c = [],
                E = new Set,
                f = !1,
                _ = new Set,
                I = new Set,
                p = {},
                h = 0,
                R = null,
                S = () => !0;

            function T(e) {
                _.add(e)
            }

            function m(e) {
                let {
                    messages: t
                } = e;
                t.forEach(e => A(e))
            }

            function A(e) {
                let t = e.type === i.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
                if (null == t) return !1;
                if (!I.has(t) && !_.has(t)) {
                    var n;
                    n = t, _.add(n), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                }
            }
            class g extends r.default.Store {
                initialize() {
                    this.waitFor(s.default), this.syncWith([s.default], S)
                }
                checkAndFetchReferralsRemaining() {
                    null == u && !f && h < 5 && (null == R || R < Date.now()) && (0, a.fetchReferralsRemaining)()
                }
                getReferralsRemaining() {
                    return this.checkAndFetchReferralsRemaining(), u
                }
                getSentUserIds() {
                    return this.checkAndFetchReferralsRemaining(), null == c ? [] : c
                }
                isFetchingReferralsRemaining() {
                    return f
                }
                isFetchingRecipientEligibility(e) {
                    return E.has(e)
                }
                getRecipientEligibility(e) {
                    return void 0 === d[e] && !E.has(e) && (0, a.checkRecipientEligibility)(e), d[e]
                }
                getRelevantUserTrialOffer(e) {
                    return p[e]
                }
                isResolving(e) {
                    return _.has(e)
                }
            }
            g.displayName = "ReferralTrialStore";
            var C = new g(l.default, {
                BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
                    let {
                        userTrialOfferId: t,
                        recipientId: n
                    } = e;
                    if (!f && (0, a.fetchReferralsRemaining)(), !E.has(n) && (0, a.checkRecipientEligibility)(n), !_.has(t)) {
                        var i;
                        i = t, _.add(i), l.default.wait(() => (0, a.resolveReferralTrialOffer)(t).catch(o.NOOP_NULL))
                    }
                },
                BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
                    let {} = e;
                    f = !0
                },
                BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
                    let {
                        referrals_remaining: t,
                        sent_user_ids: n
                    } = e;
                    f = !1, u = t, c = n
                },
                BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
                    let {} = e;
                    f = !1, h += 1, R = Date.now() + 1e3 * Math.pow(2, h)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    E.add(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
                    let {
                        recipientId: t,
                        is_eligible: n
                    } = e;
                    d[t] = n, E.delete(t)
                },
                BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
                    let {
                        recipientId: t
                    } = e;
                    d[t] = !1, E.delete(t)
                },
                BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    (0, a.fetchReferralsRemaining)(), p[t.id] = t, c = [...c, t.user_id]
                },
                BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
                    let {
                        userTrialOffer: t
                    } = e;
                    null != t && (_.delete(t.id), I.add(t.id), p[t.id] = t)
                },
                BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
                    let {
                        userTrialOfferId: t
                    } = e;
                    _.delete(t), I.add(t)
                },
                LOAD_MESSAGES_SUCCESS: m,
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    A(t)
                },
                LOAD_MESSAGES_AROUND_SUCCESS: m,
                LOGOUT: function() {
                    u = null, d = {}, c = [], E = new Set, f = !1, _ = new Set, I = new Set, p = {}, h = 0, R = null
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
                    return p
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return h
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                s = n("913144"),
                a = n("775433"),
                o = n("697218"),
                u = n("10514"),
                d = n("764364"),
                c = n("676572"),
                E = n("646718"),
                f = n("49111");
            let _ = "nonSubscriber";
            async function I() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: f.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
                R(r, i, t, n)
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    R(s, l, t, n)
                }, [s, l, t, n])
            }

            function R(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && I(), i && (!u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
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
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = l;
            class a extends i.default.Store {
                initialize() {
                    s = l
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var o = new a(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
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
            var l = r
        },
        917247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePremiumTrialOffer: function() {
                    return o
                }
            });
            var i = n("65597"),
                r = n("340412"),
                l = n("540692"),
                s = n("833516"),
                a = n("646718");

            function o(e) {
                var t, n, o, u;
                let d = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID),
                    c = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
                    E = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
                    f = (0, s.useTrialOffer)(r.default.getAnyOfUserTrialOfferId([a.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, a.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
                    _ = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
                    I = (0, i.default)([l.default], () => void 0 === e ? null : l.default.getRelevantUserTrialOffer(e));
                return null !== (u = null !== (o = null !== (n = null !== (t = null != d ? d : I) && void 0 !== t ? t : c) && void 0 !== n ? n : E) && void 0 !== o ? o : f) && void 0 !== u ? u : _
            }
        },
        833516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasUserTrialOfferExpired: function() {
                    return u
                },
                useTrialOffer: function() {
                    return d
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("862337"),
                s = n("697218"),
                a = n("340412"),
                o = n("719923");

            function u(e) {
                return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
            }

            function d(e) {
                let t = (0, r.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
                    [n, d] = i.useState(u(t)),
                    c = (0, r.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
                return i.useEffect(() => {
                    if (null != t && null != t.expires_at) {
                        let e = new l.Timeout,
                            i = () => {
                                let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                                null == e || e.start(r, () => {
                                    !n && u(t) ? d(!0) : i()
                                })
                            };
                        return i(), () => e.stop()
                    }
                }, [n, t]), n || c ? null : t
            }
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
                l = n("414456"),
                s = n.n(l),
                a = n("748820"),
                o = n("509043"),
                u = n("669491"),
                d = n("77078"),
                c = n("634634"),
                E = n("449918"),
                f = n("973262"),
                _ = n("832132"),
                I = n("771325"),
                p = n("49111"),
                h = n("782340"),
                R = n("727125");

            function S(e) {
                let {
                    onChange: t,
                    onClose: n,
                    color: l,
                    suggestedColors: S,
                    disabled: T,
                    label: m,
                    colorPickerMiddle: A,
                    colorPickerFooter: g,
                    showEyeDropper: C
                } = e, L = r.useRef(null), N = (0, d.useToken)(u.default.colors.BACKGROUND_PRIMARY).hex(), M = u.default.colors.BACKGROUND_ACCENT.css, v = (0, I.isColorDark)(l), P = (0, o.int2hex)(l), O = P === N ? M : P, y = (0, E.getColor)(v ? p.Color.WHITE_500 : p.Color.PRIMARY_530), U = (0, c.default)(A), F = (0, c.default)(g), [b, x] = r.useState((0, a.v4)());
                return r.useEffect(() => {
                    (U !== A || F !== g) && x((0, a.v4)())
                }, [g, A, F, U]), (0, i.jsx)(d.Popout, {
                    positionKey: b,
                    renderPopout: e => (0, i.jsx)(f.CustomColorPicker, {
                        ...e,
                        value: l,
                        onChange: t,
                        suggestedColors: S,
                        middle: A,
                        footer: g,
                        showEyeDropper: C
                    }),
                    onRequestClose: n,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, i.jsxs)("div", {
                            ref: L,
                            className: s(R.colorSwatch, {
                                [R.disabled]: T
                            }),
                            children: [(0, i.jsx)(d.Clickable, {
                                ...n,
                                tabIndex: T ? -1 : 0,
                                onClick: T ? p.NOOP : t,
                                style: {
                                    backgroundColor: P,
                                    borderColor: O
                                },
                                className: R.swatch,
                                "aria-label": h.default.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: L
                                },
                                children: (0, i.jsx)(_.default, {
                                    className: R.editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: y
                                })
                            }), m]
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
                l = n.n(r),
                s = n("77078"),
                a = n("216422"),
                o = n("782340"),
                u = n("881609");

            function d(e) {
                let {
                    text: t = o.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, i.jsx)(s.Tooltip, {
                    text: t,
                    children: e => (0, i.jsx)(s.Clickable, {
                        ...e,
                        children: (0, i.jsx)(a.default, {
                            className: l(u.nitroWheel, n)
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
                l = n.n(r),
                s = n("394846"),
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
                    previewTitle: E
                } = e, f = () => (0, i.jsx)(o.default, {
                    title: null != E ? E : u.default.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                    className: d.preview,
                    children: c
                });
                return (0, i.jsx)("div", {
                    className: n,
                    children: (0, i.jsxs)(a.FormSection, {
                        className: d.profileCustomizationSection,
                        children: [s.isMobile && f(), (0, i.jsxs)("div", {
                            className: l(d.baseLayout, r),
                            children: [t, !s.isMobile && f()]
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
                l = n.n(r),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                d = n("75015"),
                c = n("782340"),
                E = n("359223");
            let f = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function _(e) {
                let {
                    showRemoveAvatarButton: t,
                    errors: n,
                    onAvatarChange: r,
                    sectionTitle: _,
                    changeAvatarButtonText: I,
                    guildId: p,
                    className: h,
                    disabled: R = !1,
                    isTryItOutFlow: S = !1,
                    forcedDivider: T,
                    withHighlight: m = !1
                } = e, A = m ? a.default : s.Button;
                return (0, i.jsx)(u.default, {
                    className: h,
                    title: _,
                    errors: n,
                    disabled: R,
                    forcedDivider: T,
                    children: (0, i.jsxs)("div", {
                        className: E.buttonsContainer,
                        children: [(0, i.jsx)(A, {
                            className: l({
                                [E.buttonHighlighted]: m
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(d.UploadTypes.AVATAR, p, S, S ? f : void 0),
                            children: null != I ? I : c.default.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), t && (0, i.jsx)(s.Button, {
                            className: E.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != p ? c.default.Messages.USER_SETTINGS_RESET_AVATAR : c.default.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("65597"),
                a = n("77078"),
                o = n("70723"),
                u = n("254490"),
                d = n("891653"),
                c = n("632892"),
                E = n("646718"),
                f = n("326908");

            function _(e) {
                let {
                    errors: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: t.map((e, t) => (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: f.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, u.sizeString)(t)
                        })
                    }, t))
                })
            }

            function I(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: r,
                    description: u,
                    children: I,
                    className: p,
                    errors: h,
                    disabled: R = !1,
                    hideDivider: S = !1,
                    showBorder: T = !1,
                    borderType: m,
                    hasBackground: A = !1,
                    forcedDivider: g = !1,
                    showPremiumIcon: C = !1
                } = e, L = (0, s.default)([o.default], () => {
                    let e = o.default.activeSubstep;
                    return null != e && E.PremiumTutorialSubstepsToStepMap[e] === E.PremiumTutorialSteps.PROFILE_CUSTOMIZATION
                });
                return (0, i.jsx)("div", {
                    className: l(f.customizationSection, p, {
                        [f.disabled]: R,
                        [f.hideDivider]: S,
                        [f.showBorder]: T,
                        [f.withDivider]: g
                    }),
                    children: (0, i.jsxs)(c.default, {
                        className: f.customizationSectionBorder,
                        backgroundClassName: f.customizationSectionBackground,
                        isShown: T && !L,
                        type: m,
                        hasBackground: A,
                        children: [(0, i.jsxs)(a.FormTitle, {
                            className: f.title,
                            id: r,
                            children: [t, C && (0, i.jsx)(d.default, {}), n]
                        }), null != u ? (0, i.jsx)(a.FormText, {
                            type: a.FormText.Types.DESCRIPTION,
                            className: f.sectionDescription,
                            children: u
                        }) : null, I, null != h && (0, i.jsx)(_, {
                            errors: h
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
                l = n("570697"),
                s = n("49111"),
                a = n("782340");

            function o(e) {
                var t, n;
                return (0, i.jsx)(l.default, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: a.default.Messages.DISPLAY_NAME,
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsx)(r.TextInput, {
                            placeholder: e.placeholder,
                            maxLength: s.DISPLAY_NAME_MAX_LENGTH,
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
            var i, r, l = n("37983"),
                s = n("884691"),
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
            var c = s.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: i = r.PREMIUM,
                    isShown: s,
                    hasBackground: a = !1,
                    className: c,
                    backgroundClassName: E
                } = e;
                if (!s) return (0, l.jsx)(l.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: _
                } = d[i];
                return (0, l.jsx)("div", {
                    ref: t,
                    className: o(f, c),
                    children: (0, l.jsx)("div", {
                        className: o(a ? _ : u.background, E),
                        children: n
                    })
                })
            })
        },
        52704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("77078"),
                a = n("181114"),
                o = n("771325"),
                u = n("570697"),
                d = n("75015"),
                c = n("782340"),
                E = n("650130");

            function f(e) {
                let {
                    showRemoveBannerButton: t,
                    errors: n,
                    onBannerChange: r,
                    guildId: f,
                    className: _,
                    disabled: I = !1,
                    showPremiumIcon: p = !0,
                    isTryItOutFlow: h = !1,
                    forcedDivider: R,
                    withHighlight: S = !1
                } = e, T = S ? a.default : s.Button;
                return (0, i.jsx)(u.default, {
                    className: _,
                    title: c.default.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: p,
                    errors: n,
                    disabled: I,
                    forcedDivider: R,
                    children: (0, i.jsxs)("div", {
                        className: E.buttonsContainer,
                        children: [(0, i.jsx)(T, {
                            className: l({
                                [E.buttonHighlighted]: S
                            }),
                            size: s.Button.Sizes.SMALL,
                            onClick: () => (0, o.handleOpenSelectImageModal)(d.UploadTypes.BANNER, f, h, void 0),
                            children: c.default.Messages.CHANGE_BANNER
                        }), t && (0, i.jsx)(s.Button, {
                            className: E.removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: () => r(null),
                            children: null != f ? c.default.Messages.USER_SETTINGS_RESET_BANNER : c.default.Messages.USER_SETTINGS_REMOVE_BANNER
                        })]
                    })
                })
            }
        },
        121370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                s = n("969176"),
                a = n.n(s),
                o = n("669491"),
                u = n("77078"),
                d = n("462274"),
                c = n("217513"),
                E = n("528438"),
                f = n("719923"),
                _ = n("409214"),
                I = n("570697"),
                p = n("782340"),
                h = n("431416");

            function R(e) {
                let {
                    user: t,
                    pendingAvatar: n,
                    pendingColors: r,
                    onThemeColorsChange: s,
                    preventDisabled: R,
                    guildId: S,
                    className: T,
                    showPremiumIcon: m = !0,
                    showResetThemeButton: A = !1,
                    forcedDivider: g
                } = e, C = (0, c.default)(t.id, S), [L, N] = (0, E.default)(t, C, {
                    pendingThemeColors: r,
                    isPreview: !0
                }), M = f.default.canUsePremiumProfileCustomization(t), v = null != n ? n : t.getAvatarURL(S, 80), P = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_530).hex(), O = (0, d.useAvatarColors)(v, P, !1);
                if (null == L || null == N) return null;
                let y = e => {
                    let t = a(e, null == C ? void 0 : C.themeColors);
                    s(t ? void 0 : e)
                };
                return (0, i.jsx)(I.default, {
                    title: p.default.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !M && !R,
                    className: l(h.profileThemesSection, T),
                    showPremiumIcon: m,
                    forcedDivider: g,
                    children: (0, i.jsxs)("div", {
                        className: h.sectionContainer,
                        children: [(0, i.jsx)("div", {
                            className: h.sparkleContainer,
                            children: (0, i.jsx)(_.default, {
                                onChange: e => y([e, N]),
                                color: L,
                                suggestedColors: O,
                                showEyeDropper: !0,
                                label: (0, i.jsx)(u.Text, {
                                    className: h.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: p.default.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: h.sparkleContainer,
                            children: (0, i.jsx)(_.default, {
                                onChange: e => y([L, e]),
                                color: N,
                                suggestedColors: O,
                                showEyeDropper: !0,
                                label: (0, i.jsx)(u.Text, {
                                    className: h.colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: p.default.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), A && null != S && (0, i.jsx)(u.Button, {
                            className: h.resetButton,
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            size: u.Button.Sizes.SMALL,
                            onClick: () => y([null, null]),
                            children: p.default.Messages.USER_SETTINGS_RESET_PROFILE_THEME
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
                l = n("697218"),
                s = n("506885"),
                a = n("49111");

            function o(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: o = a.ME,
                    channelId: u,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: E
                } = e, f = l.default.getUser(t), _ = o !== a.ME ? o : void 0;
                if (null == f) return (0, r.fetchProfile)(t, {
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
                        analyticsLocation: E
                    })
                });
                (0, s.default)(t, f.getAvatarURL(void 0, 80), {
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
                    analyticsLocation: E
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
                    return s
                }
            });
            var i = n("866227"),
                r = n.n(i),
                l = n("666038");
            class s extends l.default {
                static createFromServer(e) {
                    var t;
                    return new s({
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
                l = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("817736"),
                r = n("118810");
            let l = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            class s {
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
                constructor(e = l) {
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
                l = n("157590");
            let s = (0, r.v4)(),
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
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, r.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new l.default({
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
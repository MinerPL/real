(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6105"], {
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("920040");
            n("773670");
            var r = n("77078"),
                i = n("974889"),
                l = n("954016"),
                o = n("49111");

            function s(e) {
                let {
                    channel: t,
                    guildId: s,
                    locationObject: d,
                    openInPopout: u,
                    initialSelectedApplicationId: c,
                    initialSlide: f = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: h = !1,
                    analyticsLocations: m
                } = e;
                u && (0, i.default)(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let p = u ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: s,
                        locationObject: d,
                        initialSlide: f,
                        initialSelectedApplicationId: c,
                        enableSelectedTextChannelInvite: h,
                        analyticsLocations: m
                    })
                }, {
                    modalKey: l.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: p
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function a() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function r(e) {
                return {
                    textValue: e,
                    richValue: l(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return a
                },
                createState: function() {
                    return r
                },
                toRichValue: function() {
                    return l
                },
                voidToOptionValue: function() {
                    return o
                }
            });
            let i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function l(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : i
            }

            function o(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        931164: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("427964"),
                r = n.n(a),
                i = n("270926"),
                l = n("888198"),
                o = n("367376");
            let s = r.omit(l.default.RULES, ["codeBlock", "heading"]),
                d = {
                    ...i.default,
                    parse: function(e, t, n) {
                        var a;
                        let r = i.default.parse(e, t, n),
                            l = null !== (a = n.initialHeaderLevel) && void 0 !== a ? a : 3,
                            o = Math.min(6, l + r.level);
                        return {
                            ...r,
                            level: o
                        }
                    }
                },
                u = o.default.combineAndInjectMentionRule(s, [o.default.createReactRules(o.default.defaultReactRuleOptions), {
                    header: d
                }]),
                c = o.default.reactParserFor(u);
            var f = c
        },
        17692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("920040"),
                r = n("773670"),
                i = n("575482"),
                l = n.n(i),
                o = n("77078"),
                s = n("931164"),
                d = n("234513"),
                u = n("422137");

            function c(e) {
                let {
                    color: t,
                    className: n,
                    variant: i,
                    text: c,
                    lineClamp: f
                } = e, h = (0, o.usePrivateHeadingLevel)(), m = r.useMemo(() => null == c ? null : (0, s.default)(c, !0, {
                    allowHeading: null == f,
                    allowList: null == f,
                    initialHeaderLevel: h
                }), [c, f, h]);
                return (0, a.jsx)(o.Text, {
                    className: l(n, {
                        [u.markup]: null == f,
                        [d.lineClamp2Plus]: null != f && f > 1,
                        [d.lineClamp1]: 1 === f
                    }),
                    color: t,
                    variant: i,
                    lineClamp: f,
                    children: m
                })
            }
        },
        492724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("920040");
            n("773670");
            var r = n("575482"),
                i = n.n(r),
                l = n("77078"),
                o = n("17692"),
                s = n("191814"),
                d = n("476765"),
                u = n("538137"),
                c = n("600785"),
                f = n("246421"),
                h = n("782340"),
                m = n("780245");

            function p(e) {
                let {
                    hidePurchaseToUnlockBadge: t,
                    className: n,
                    children: r
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(m.productThumbnailContainer, n),
                    children: [r, !t && (0, a.jsxs)("div", {
                        className: m.purchaseToUnlockBadge,
                        children: [(0, a.jsx)(c.default, {
                            className: m.lockIcon,
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: m.unlockText,
                            children: h.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
                        })]
                    })]
                })
            }

            function C(e) {
                let {
                    onShowFullDescription: t,
                    variant: n
                } = e, r = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.Text, {
                        variant: n,
                        color: null != t ? "text-link" : "interactive-hover",
                        children: h.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
                    }), (0, a.jsx)(u.default, {
                        className: m.arrowIcon,
                        backgroundColor: "currentColor",
                        width: 16,
                        height: 16
                    })]
                });
                return null == t ? (0, a.jsx)("div", {
                    className: m.showMoreButton,
                    children: r
                }) : (0, a.jsx)(l.Clickable, {
                    className: i(m.showMoreButton, m.hasAction),
                    onClick: e => {
                        e.stopPropagation(), null != t && t()
                    },
                    children: r
                })
            }

            function T(e) {
                let {
                    imageUrl: t,
                    name: n,
                    description: r,
                    formattedPrice: u,
                    role: c,
                    ctaComponent: T,
                    shouldShowFullDescriptionButton: _ = !0,
                    onShowFullDescription: x,
                    productType: g,
                    onTapCard: v,
                    actionMenu: E,
                    showOpaqueBackground: j = !1,
                    hideRoleTag: D = !1,
                    lineClamp: R = 1,
                    cardWidth: y = 332,
                    cardHeight: A,
                    thumbnailHeight: I = 187,
                    descriptionTextVariant: L = "text-sm/normal"
                } = e, b = (0, d.uid)(), O = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(p, {
                        hidePurchaseToUnlockBadge: !0,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            src: t,
                            className: m.productThumbnail,
                            style: {
                                height: I
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: m.productDetails,
                        children: [(0, a.jsxs)("div", {
                            className: m.productDetailContent,
                            children: [(0, a.jsx)(l.Heading, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                className: m.productName,
                                id: b,
                                children: n
                            }), (0, a.jsx)(l.FocusBlock, {
                                children: (0, a.jsx)(o.default, {
                                    variant: L,
                                    color: "text-muted",
                                    lineClamp: R,
                                    text: r
                                })
                            }), _ && (0, a.jsx)(C, {
                                onShowFullDescription: x,
                                variant: L
                            }), D || null == c || "" === c.name ? null : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(s.default, {
                                    size: 16
                                }), (0, a.jsx)(f.default, {
                                    role: c
                                })]
                            })]
                        }), E]
                    }), (0, a.jsxs)("div", {
                        className: m.purchaseDetails,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "interactive-active",
                            className: m.productPrice,
                            children: null != u ? u : h.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-normal",
                            className: m.productType,
                            children: g
                        }), (0, a.jsx)("div", {
                            className: m.productActionButton,
                            onClick: e => {
                                e.stopPropagation()
                            },
                            children: T
                        })]
                    })]
                });
                return null == v ? (0, a.jsx)("article", {
                    className: i(m.productCard, j ? m.opaqueBackground : m.solidBackground),
                    "aria-labelledby": b,
                    children: O
                }) : (0, a.jsx)("div", {
                    style: {
                        width: y,
                        height: A
                    },
                    children: (0, a.jsx)(l.ClickableContainer, {
                        tag: "article",
                        "aria-label": h.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
                            productName: n
                        }),
                        className: i(m.productCard, j ? m.opaqueBackground : m.solidBackground, m.cardClickableContainer),
                        onClick: v,
                        children: O
                    })
                })
            }
        },
        246421: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("920040");
            n("773670");
            var r = n("253824"),
                i = n("77078"),
                l = n("191814"),
                o = n("45029"),
                s = n("782340"),
                d = n("215450");

            function u(e) {
                let {
                    locked: t,
                    role: n,
                    textVariant: u = "text-xs/medium"
                } = e, c = (0, i.useToken)(i.tokens.colors.INTERACTIVE_NORMAL).hex();
                return (0, a.jsx)("div", {
                    className: d.roleTagContainer,
                    children: (0, a.jsxs)("div", {
                        className: d.roleTag,
                        children: [(0, a.jsx)("div", {
                            className: d.roleColor,
                            style: {
                                backgroundColor: (0, r.int2hex)(n.color)
                            }
                        }), (0, a.jsx)(l.default, {
                            size: 8,
                            horizontal: !0
                        }), (0, a.jsxs)(i.Text, {
                            variant: u,
                            color: "text-normal",
                            children: [(0, a.jsx)(i.HiddenVisually, {
                                children: s.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
                            }), n.name]
                        }), !0 === t && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(l.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, a.jsx)(o.default, {
                                color: c
                            })]
                        })]
                    })
                })
            }
        },
        53253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSeasonalGiftingActive: function() {
                    return c
                },
                default: function() {
                    return f
                }
            });
            var a = n("773670"),
                r = n("377849"),
                i = n.n(r),
                l = n("638800"),
                o = n("296892");
            let s = new Date("2023-01-01T07:59:59.000Z"),
                d = i(s),
                u = (0, o.default)({
                    id: "2022-12_seasonal_gifting",
                    label: "Seasonal Gifting",
                    kind: "user",
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

            function c() {
                let [e, t] = a.useState(() => d.isAfter(Date.now()));
                return a.useEffect(() => {
                    let n = new l.Timeout,
                        a = () => {
                            let e = d.diff(Date.now(), "millisecond");
                            null == n || n.start(e, () => {
                                d.isBefore(Date.now()) ? t(!1) : a()
                            })
                        };
                    return e && a(), () => n.stop()
                }), e
            }
            var f = u
        },
        166960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = r
        },
        1607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("862205");
            let r = (0, a.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = r
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return E
                },
                openThreadSidebarForCreating: function() {
                    return j
                },
                closeThreadSidebar: function() {
                    return D
                },
                closeAndClearThreadSidebar: function() {
                    return R
                }
            });
            var a = n("161179"),
                r = n.n(a),
                i = n("427964"),
                l = n.n(i),
                o = n("913144"),
                s = n("295426"),
                d = n("244201"),
                u = n("716241"),
                c = n("565298"),
                f = n("393414"),
                h = n("144491"),
                m = n("845579"),
                p = n("474643"),
                C = n("18494"),
                T = n("800762"),
                _ = n("659500"),
                x = n("648564"),
                g = n("49111"),
                v = n("724210");

            function E(e, t, n) {
                d.MainWindowDispatch.dispatch(g.ComponentActions.POPOUT_CLOSE);
                let a = !l.isEmpty(T.default.getVoiceStatesForChannel(e.id));
                if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    o.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let i = C.default.getChannelId();
                e.parent_id !== i && !(0, v.isGuildHomeChannel)(i) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(g.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, v.isGuildHomeChannel)(i) ? v.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? x.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    _.ComponentDispatch.dispatch(g.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function j(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, u.trackWithMetadata)(g.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), d.MainWindowDispatch.dispatch(g.ComponentActions.POPOUT_CLOSE), C.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
                let a = p.default.getDraft(e.id, p.DraftType.FirstThreadMessage);
                if ("" === a) {
                    let t = p.default.getDraft(e.id, p.DraftType.ChannelMessage);
                    s.default.saveDraft(e.id, "", p.DraftType.ChannelMessage), s.default.saveDraft(e.id, t, p.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    o.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function D(e, t) {
                (0, f.transitionTo)(g.Routes.CHANNEL(e, (0, v.isGuildHomeChannel)(t) ? v.StaticChannelRoute.GUILD_HOME : t)), o.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function R(e) {
                o.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), o.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.FirstThreadMessage
                }), o.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.ThreadSettings
                })
            }
        },
        659186: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatLayerContainer: function() {
                    return o
                },
                ChatLayerProvider: function() {
                    return s
                },
                default: function() {
                    return d
                }
            });
            var a = n("228256");
            let {
                Layer: r,
                LayerContainer: i,
                LayerProvider: l
            } = (0, a.createLayer)("Chat"), o = i, s = l;
            var d = r
        }
    }
]);
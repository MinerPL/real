(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62412"], {
        478272: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("974889"),
                l = n("954016"),
                o = n("49111");

            function s(e) {
                let {
                    channel: t,
                    guildId: s,
                    locationObject: d,
                    openInPopout: c,
                    initialSelectedApplicationId: u,
                    initialSlide: h = l.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: f = !1,
                    analyticsLocations: m
                } = e;
                c && (0, i.default)(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let p = c ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
                return (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("605455").then(n.bind(n, "605455"));
                    return n => (0, a.jsx)(e, {
                        ...n,
                        channel: t,
                        guildId: s,
                        locationObject: d,
                        initialSlide: h,
                        initialSelectedApplicationId: u,
                        enableSelectedTextChannelInvite: f,
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
            }), n("70102");
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
                    return h
                }
            });
            var a = n("917351"),
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
                c = o.default.combineAndInjectMentionRule(s, [o.default.createReactRules(o.default.defaultReactRuleOptions), {
                    header: d
                }]),
                u = o.default.reactParserFor(c);
            var h = u
        },
        17692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                o = n("77078"),
                s = n("931164"),
                d = n("289162"),
                c = n("632215");

            function u(e) {
                let {
                    color: t,
                    className: n,
                    variant: i,
                    text: u,
                    lineClamp: h
                } = e, f = (0, o.usePrivateHeadingLevel)(), m = r.useMemo(() => null == u ? null : (0, s.default)(u, !0, {
                    allowHeading: null == h,
                    allowList: null == h,
                    initialHeaderLevel: f
                }), [u, h, f]);
                return (0, a.jsx)(o.Text, {
                    className: l(n, {
                        [c.markup]: null == h,
                        [d.lineClamp2Plus]: null != h && h > 1,
                        [d.lineClamp1]: 1 === h
                    }),
                    color: t,
                    variant: i,
                    lineClamp: h,
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
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                l = n("77078"),
                o = n("17692"),
                s = n("191814"),
                d = n("476765"),
                c = n("538137"),
                u = n("600785"),
                h = n("246421"),
                f = n("782340"),
                m = n("767165");

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
                        children: [(0, a.jsx)(u.default, {
                            className: m.lockIcon,
                            width: 16,
                            height: 16,
                            color: "currentColor",
                            "aria-hidden": !0
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "always-white",
                            className: m.unlockText,
                            children: f.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_TO_UNLOCK
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
                        children: f.default.Messages.GUILD_PRODUCT_CARD_SEE_FULL_DESCRIPTION
                    }), (0, a.jsx)(c.default, {
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
                    formattedPrice: c,
                    role: u,
                    ctaComponent: T,
                    shouldShowFullDescriptionButton: _ = !0,
                    onShowFullDescription: x,
                    productType: E,
                    onTapCard: v,
                    actionMenu: g,
                    showOpaqueBackground: j = !1,
                    hideRoleTag: R = !1,
                    lineClamp: y = 1,
                    cardWidth: D = 332,
                    cardHeight: I,
                    thumbnailHeight: A = 187,
                    descriptionTextVariant: L = "text-sm/normal"
                } = e, O = (0, d.uid)(), N = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(p, {
                        hidePurchaseToUnlockBadge: !0,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            src: t,
                            className: m.productThumbnail,
                            style: {
                                height: A
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
                                id: O,
                                children: n
                            }), (0, a.jsx)(l.FocusBlock, {
                                children: (0, a.jsx)(o.default, {
                                    variant: L,
                                    color: "text-muted",
                                    lineClamp: y,
                                    text: r
                                })
                            }), _ && (0, a.jsx)(C, {
                                onShowFullDescription: x,
                                variant: L
                            }), R || null == u || "" === u.name ? null : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(s.default, {
                                    size: 16
                                }), (0, a.jsx)(h.default, {
                                    role: u
                                })]
                            })]
                        }), g]
                    }), (0, a.jsxs)("div", {
                        className: m.purchaseDetails,
                        children: [(0, a.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "interactive-active",
                            className: m.productPrice,
                            children: null != c ? c : f.default.Messages.GUILD_PRODUCT_CARD_EMPTY_PRICE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-xxs/normal",
                            color: "text-normal",
                            className: m.productType,
                            children: E
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
                    "aria-labelledby": O,
                    children: N
                }) : (0, a.jsx)("div", {
                    style: {
                        width: D,
                        height: I
                    },
                    children: (0, a.jsx)(l.ClickableContainer, {
                        tag: "article",
                        "aria-label": f.default.Messages.GUILD_SHOP_LISTING_CARD_A11Y_LABEL.format({
                            productName: n
                        }),
                        className: i(m.productCard, j ? m.opaqueBackground : m.solidBackground, m.cardClickableContainer),
                        onClick: v,
                        children: N
                    })
                })
            }
        },
        246421: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("509043"),
                i = n("77078"),
                l = n("191814"),
                o = n("45029"),
                s = n("782340"),
                d = n("411531");

            function c(e) {
                let {
                    locked: t,
                    role: n,
                    textVariant: c = "text-xs/medium"
                } = e, u = (0, i.useToken)(i.tokens.colors.INTERACTIVE_NORMAL).hex();
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
                            variant: c,
                            color: "text-normal",
                            children: [(0, a.jsx)(i.HiddenVisually, {
                                children: s.default.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER
                            }), n.name]
                        }), !0 === t && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(l.default, {
                                size: 8,
                                horizontal: !0
                            }), (0, a.jsx)(o.default, {
                                color: u
                            })]
                        })]
                    })
                })
            }
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
                    return g
                },
                openThreadSidebarForCreating: function() {
                    return j
                },
                closeThreadSidebar: function() {
                    return R
                },
                closeAndClearThreadSidebar: function() {
                    return y
                }
            });
            var a = n("627445"),
                r = n.n(a),
                i = n("917351"),
                l = n.n(i),
                o = n("913144"),
                s = n("295426"),
                d = n("244201"),
                c = n("716241"),
                u = n("565298"),
                h = n("393414"),
                f = n("144491"),
                m = n("845579"),
                p = n("474643"),
                C = n("18494"),
                T = n("800762"),
                _ = n("659500"),
                x = n("648564"),
                E = n("49111"),
                v = n("724210");

            function g(e, t, n) {
                d.MainWindowDispatch.dispatch(E.ComponentActions.POPOUT_CLOSE);
                let a = !l.isEmpty(T.default.getVoiceStatesForChannel(e.id));
                if (t || !m.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    o.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, f.transitionToThread)(e, n) : (0, f.transitionToChannel)(e.id);
                    return
                }
                r(null != e.parent_id, "all threads must have parents");
                let i = C.default.getChannelId();
                e.parent_id !== i && !(0, v.isGuildHomeChannel)(i) && (0, f.transitionToChannel)(e.parent_id), (0, h.transitionTo)(E.Routes.CHANNEL_THREAD_VIEW((0, u.getGuildIdForGenericRedirect)(e), (0, v.isGuildHomeChannel)(i) ? v.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? x.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    _.ComponentDispatch.dispatch(E.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function j(e, t, n) {
                r(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), r(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.trackWithMetadata)(E.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), d.MainWindowDispatch.dispatch(E.ComponentActions.POPOUT_CLOSE), C.default.getChannelId() !== e.id && (0, f.transitionToChannel)(e.id);
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

            function R(e, t) {
                (0, h.transitionTo)(E.Routes.CHANNEL(e, (0, v.isGuildHomeChannel)(t) ? v.StaticChannelRoute.GUILD_HOME : t)), o.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function y(e) {
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
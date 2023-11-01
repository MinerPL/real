(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91708"], {
        68422: function(e, t, n) {
            "use strict";
            e.exports = n.p + "467602d632b5f9c1ce4b.svg"
        },
        578817: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d4d9f2bff23beec65b1f.svg"
        },
        926607: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return i
                }
            })
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                a = {
                    toggleMembersSection() {
                        i.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        i.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        i.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        549825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                s = n("77078"),
                l = n("978970"),
                u = n("36694"),
                o = n("945330"),
                c = n("705179");

            function d(e) {
                let {
                    grantedPermissions: t,
                    disabledPermissions: n,
                    grantedPermissionsHeader: a,
                    disabledPermissionsHeader: d,
                    className: f
                } = e;
                return (0, i.jsxs)("div", {
                    className: r(c.list, f),
                    children: [null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != a ? (0, i.jsx)(s.FormTitle, {
                            className: c.permissionHeader,
                            children: a
                        }) : null, (0, i.jsx)("div", {
                            className: c.container,
                            children: t.map(e => (0, i.jsxs)("div", {
                                className: c.permission,
                                children: [(0, i.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.check
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, l.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null, null != n && n.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != d ? (0, i.jsx)(s.FormTitle, {
                            className: c.permissionHeader,
                            children: d
                        }) : null, (0, i.jsx)("div", {
                            className: c.container,
                            children: n.map(e => (0, i.jsxs)("div", {
                                className: c.permission,
                                children: [(0, i.jsx)(o.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.cross
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, l.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null]
                })
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                a = n("775560"),
                r = n("862337");

            function s(e, t) {
                let [n, s] = (0, i.useState)(e), l = (0, a.useLazyValue)(() => new r.Timeout);
                (0, i.useEffect)(() => () => l.stop(), [l]);
                let u = (0, i.useCallback)(n => {
                    s(n), n !== e && l.start(t, () => s(e))
                }, [t, e, l]);
                return [n, u]
            }
        },
        722525: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                transitionToChannel: function() {
                    return u
                },
                transitionToPage: function() {
                    return o
                }
            });
            var i = n("77078"),
                a = n("255397"),
                r = n("406189"),
                s = n("393027"),
                l = n("49111");

            function u(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !(0, i.hasAnyModalOpen)() && (n && r.default.channelListScrollTo(e, t), u && null != t && a.default.updateChatOpen(t, !0), s.default.getState().updatePath(l.Routes.CHANNEL(e, t)))
            }

            function o(e) {
                !(0, i.hasAnyModalOpen)() && s.default.getState().updatePath(e)
            }
        },
        302437: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("974667"),
                a = n("446674"),
                r = n("206230");

            function s() {
                return Promise.resolve()
            }

            function l(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, a.useStateFromStores)([r.default], () => r.default.keyboardModeEnabled);
                return (0, i.default)({
                    id: e,
                    isEnabled: n,
                    orientation: t,
                    setFocus: l,
                    scrollToStart: s,
                    scrollToEnd: s
                })
            }
        },
        682777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ALL_CATEGORY_ID: function() {
                    return S
                },
                isAllCategory: function() {
                    return h
                },
                getAllCategory: function() {
                    return g
                },
                getCategoryIcon: function() {
                    return C
                },
                getCollectionItemAssetUrl: function() {
                    return m
                },
                redirectToLogin: function() {
                    return R
                }
            });
            var i = n("447669"),
                a = n("769846"),
                r = n("407063"),
                s = n("393414"),
                l = n("316887"),
                u = n("675918"),
                o = n("564875"),
                c = n("863022"),
                d = n("794352"),
                f = n("855670"),
                E = n("356884"),
                I = n("315102"),
                p = n("49111"),
                _ = n("782340");
            let S = 0,
                {
                    API_ENDPOINT: T,
                    CDN_HOST: A
                } = window.GLOBAL_ENV;

            function h(e) {
                return e.id === S
            }

            function g() {
                return {
                    id: S,
                    name: _.default.Messages.APP_DIRECTORY_ALL_CATEGORY
                }
            }

            function C(e) {
                switch (e.id) {
                    case 0:
                        return d.default;
                    case 4:
                        return f.default;
                    case 5:
                        return c.default;
                    case 6:
                        return l.default;
                    case 8:
                        break;
                    case 9:
                        return o.default;
                    case 10:
                        return E.default
                }
                return u.default
            }

            function m(e) {
                let {
                    itemId: t,
                    hash: n
                } = e, i = (0, r.getBestMediaProxySize)(parseFloat(a.default.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, r.getDevicePixelRatio)()).toString(), s = new URLSearchParams({
                    size: i
                }).toString(), l = I.SUPPORTS_WEBP ? "webp" : "png";
                return null != A ? "".concat(location.protocol, "//").concat(A, "/app-assets/application-directory/collection-items/").concat(t, "/").concat(n, ".").concat(l, "?").concat(s) : "".concat(location.protocol).concat(T).concat(p.Endpoints.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, l), "?").concat(s)
            }

            function R() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = new URL(location.href);
                for (let n in e) {
                    let i = e[n];
                    t.searchParams.set(n, i)
                }
                let n = t.pathname + t.search,
                    a = (0, i.getLoginPath)(n, !1);
                (0, s.transitionTo)(a)
            }
        },
        765105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("90915"),
                r = n("73749"),
                s = n("468560"),
                l = n("271081"),
                u = n("298557"),
                o = n("176162"),
                c = n("750947"),
                d = n("49111");
            let f = function(e) {
                let {
                    match: t
                } = e, {
                    applicationId: n,
                    section: a
                } = t.params, r = (0, s.default)(c.ApplicationDirectoryProfileSections, a);
                return (0, i.jsx)(u.default, {
                    applicationId: n,
                    initialSection: r
                })
            };

            function E() {
                return (0, i.jsxs)(a.Switch, {
                    children: [(0, i.jsx)(r.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                        component: o.default
                    }), (0, i.jsx)(r.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
                        render: f
                    }), (0, i.jsx)(r.default, {
                        path: d.Routes.APPLICATION_DIRECTORY,
                        component: l.default
                    })]
                })
            }
        },
        838093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                goToAppDirectory: function() {
                    return u
                },
                goHome: function() {
                    return o
                },
                goToApplication: function() {
                    return c
                },
                goSearch: function() {
                    return d
                },
                goToCategory: function() {
                    return f
                },
                replaceAppDirectoryURLWith: function() {
                    return E
                }
            });
            var i = n("393414"),
                a = n("599110"),
                r = n("682777"),
                s = n("412707"),
                l = n("49111");
            let u = e => {
                    let {
                        view: t = s.ApplicationDirectoryViews.HOME,
                        guildId: n,
                        applicationId: i,
                        applicationSection: r,
                        entrypoint: u
                    } = e, f = {
                        ...u,
                        pathname: window.location.pathname
                    };
                    switch (a.default.track(l.AnalyticEvents.APP_DIRECTORY_OPENED, {
                            source: null == f ? void 0 : f.name
                        }), (0, s.resetApplicationDirectoryHistory)(), (0, s.setEntrypoint)(f), null != n && (0, s.setGuildId)(n), t === s.ApplicationDirectoryViews.APPLICATION && null == i && (t = s.ApplicationDirectoryViews.HOME), t) {
                        case s.ApplicationDirectoryViews.HOME:
                            o();
                            break;
                        case s.ApplicationDirectoryViews.SEARCH:
                            d();
                            break;
                        case s.ApplicationDirectoryViews.APPLICATION:
                            null != i && c({
                                applicationId: i,
                                section: r
                            })
                    }
                },
                o = () => {
                    let e = {
                        previousView: (0, s.getCurrentView)()
                    };
                    (0, i.transitionTo)(l.Routes.APPLICATION_DIRECTORY, {
                        state: e
                    })
                },
                c = e => {
                    let {
                        applicationId: t,
                        section: n
                    } = e, a = {
                        previousView: (0, s.getCurrentView)()
                    };
                    (0, i.transitionTo)(l.Routes.APPLICATION_DIRECTORY_PROFILE(t, null == n ? void 0 : n.toLowerCase()), {
                        state: a
                    })
                },
                d = function() {
                    let {
                        query: e,
                        categoryId: t,
                        page: n
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = new URLSearchParams, r = {
                        previousView: (0, s.getCurrentView)()
                    };
                    null != e && a.set("q", e), null != t && a.set("category_id", t.toString()), null != n && a.set("page", n.toString()), (0, i.transitionTo)(l.Routes.APPLICATION_DIRECTORY_SEARCH, {
                        search: a.toString(),
                        state: r
                    })
                },
                f = e => {
                    let {
                        categoryId: t
                    } = e;
                    d({
                        categoryId: null != t ? t : r.ALL_CATEGORY_ID
                    })
                },
                E = e => {
                    let {
                        location: {
                            state: t
                        }
                    } = (0, i.getHistory)();
                    (0, i.replaceWith)(e, t)
                }
        },
        94973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("37983"),
                a = n("884691"),
                r = n("617258"),
                s = n("446674"),
                l = n("769846"),
                u = n("77078"),
                o = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                E = n("160299"),
                I = n("153160"),
                p = n("271560"),
                _ = n("650509"),
                S = n("910861"),
                T = n("899604"),
                A = n("153335"),
                h = n("49111"),
                g = n("782340"),
                C = n("208961");
            let m = (0, r.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                R = "start_application_subscription",
                v = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let a = (0, p.getAssetURL)(t.application_id, n, m);
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)("img", {
                            src: a,
                            alt: "",
                            className: C.listingImage
                        })
                    })
                },
                y = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(u.Button, {
                        look: u.Button.Looks.OUTLINED,
                        color: u.Button.Colors.PRIMARY,
                        disabled: !0,
                        size: u.Button.Sizes.SMALL,
                        children: t
                    })
                };

            function N(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: r,
                    analyticsLocation: l,
                    onComplete: p,
                    forcesTransitionToGuild: m
                } = e, N = (0, s.useStateFromStores)([E.default], () => E.default.isSyncing), {
                    activeSubscription: P,
                    activeSubscriptionListing: L
                } = (0, _.useActiveSubscriptionListingForApplication)(t.application_id, r), {
                    openModal: O,
                    canOpenModal: M,
                    cannotOpenReason: D
                } = (0, A.default)({
                    listing: t,
                    guildId: r,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: l,
                    onComplete: p,
                    forcesTransitionToGuild: m
                }), b = t.subscription_plans[0], U = 0 === b.price, w = (null == L ? void 0 : L.id) === t.id, V = (0, o.default)(), x = V && !M || N, j = () => {
                    V ? O() : (0, c.redirectToLogin)({
                        [R]: "true"
                    })
                };
                return a.useEffect(() => {
                    let e = new URL(location.href);
                    if (V && !x && "true" === e.searchParams.get(R)) {
                        e.searchParams.delete(R);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), O()
                    }
                }, [V, O, t, x]), (0, i.jsxs)("div", {
                    className: C.container,
                    children: [(0, i.jsxs)("div", {
                        className: C.cardHeader,
                        children: [(0, i.jsx)(v, {
                            listing: t
                        }), (0, i.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, i.jsxs)("div", {
                            className: C.priceAndButtonContainer,
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: U ? g.default.Messages.APPLICATION_SUBSCRIPTION_FREE : g.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, I.formatPrice)(b.price, b.currency),
                                    period: (0, d.formatPlanInterval)(b)
                                })
                            }), (() => {
                                var e;
                                if (w) return (0, i.jsx)(y, {
                                    children: (null == P ? void 0 : P.status) === h.SubscriptionStatusTypes.CANCELED ? g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (U) return null == L ? (0, i.jsx)(y, {
                                    children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, i.jsx)(u.Tooltip, {
                                    tooltipClassName: C.subscribeButtonTooltip,
                                    text: M || !V ? null : D,
                                    "aria-label": null !== (e = !M && D) && void 0 !== e && e,
                                    children: e => (0, i.jsx)(S.default, {
                                        ...e,
                                        disabled: x,
                                        submitting: !1,
                                        onClick: j,
                                        children: g.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, i.jsx)("div", {
                        className: C.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, i.jsx)(T.default, {
                            benefit: e,
                            className: C.benefit
                        }, t))
                    }) : null]
                })
            }
        },
        913678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983"),
                a = n("884691"),
                r = n("77078"),
                s = n("850068"),
                l = n("598981"),
                u = n("650509"),
                o = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("358261");

            function E(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), a = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return a || n ? (0, i.jsxs)("div", {
                    className: f.cta,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, i.jsx)(r.Heading, {
                        color: "interactive-normal",
                        variant: "heading-md/normal",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                            applicationName: t.name
                        })
                    })]
                }) : null
            }

            function I(e) {
                var t;
                let {
                    guildId: n,
                    applicationId: o,
                    applicationPrimarySkuId: d,
                    analyticsLocation: I,
                    onComplete: p,
                    forcesTransitionToGuild: _
                } = e, {
                    listingsLoaded: S
                } = (0, u.useFetchListingsForApplication)(o, d), {
                    entitlementsLoaded: T
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: A
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), h = (0, l.default)();
                a.useEffect(() => {
                    h && s.fetchSubscriptions()
                }, [h]);
                let g = null == A ? void 0 : A.id,
                    C = null == A ? void 0 : null === (t = A.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return S && (null == n || T) ? null == g || null == C || 0 === C.length ? null : (0, i.jsx)("div", {
                    className: f.container,
                    children: C.map(e => (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(E, {
                            listing: e
                        }, e.id), (0, i.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: g,
                            analyticsLocation: I,
                            onComplete: p,
                            forcesTransitionToGuild: _
                        }, e.id)]
                    }, e.id))
                }) : (0, i.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, i.jsx)(r.Spinner, {})
                })
            }
        },
        149022: function(e, t, n) {
            "use strict";

            function i() {
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

            function a(e) {
                return {
                    textValue: e,
                    richValue: s(e)
                }
            }
            n.r(t), n.d(t, {
                createEmptyState: function() {
                    return i
                },
                createState: function() {
                    return a
                },
                toRichValue: function() {
                    return s
                },
                voidToOptionValue: function() {
                    return l
                }
            });
            let r = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function s(e) {
                return "" !== e ? e.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })) : r
            }

            function l(e) {
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
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("845579"),
                s = n("662255"),
                l = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !l.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(a.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != o && e.shiftKey ? o : t;
                        (0, l.copy)(n), null == u || u()
                    },
                    icon: s.default,
                    showIconFirst: c
                }, f)
            }
        },
        577357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitKey: function() {
                    return s
                },
                formatPlanInterval: function() {
                    return l
                },
                formatPlanIntervalDuration: function() {
                    return u
                },
                isChannelBenefit: function() {
                    return o
                },
                isIntangibleBenefit: function() {
                    return c
                }
            });
            var i = n("677795"),
                a = n("646718"),
                r = n("782340");

            function s(e) {
                return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
            }

            function l(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                return (function(e) {
                    switch (e) {
                        case a.SubscriptionIntervalTypes.DAY:
                            return r.default.Messages.DAY;
                        case a.SubscriptionIntervalTypes.MONTH:
                            return r.default.Messages.MONTH;
                        case a.SubscriptionIntervalTypes.YEAR:
                            return r.default.Messages.YEAR
                    }
                })(t).format({
                    count: n
                })
            }

            function u(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                switch (t) {
                    case a.SubscriptionIntervalTypes.DAY:
                        if (n > 0 && n % 7 == 0) return r.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return r.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case a.SubscriptionIntervalTypes.MONTH:
                        return r.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case a.SubscriptionIntervalTypes.YEAR:
                        return r.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                            years: n
                        })
                }
            }

            function o(e) {
                return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.CHANNEL
            }

            function c(e) {
                return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
            }
        },
        327467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startMediaViewerSession: function() {
                    return u
                },
                endMediaViewerSession: function() {
                    return o
                },
                incrementSelectedItemChanges: function() {
                    return c
                }
            });
            var i = n("308503"),
                a = n("599110"),
                r = n("49111");
            let s = {
                    guildId: void 0,
                    channelId: void 0,
                    channelType: void 0,
                    viewerSwipes: 0,
                    thumbnailSwipes: 0,
                    selectedItemChanges: 0,
                    numMediaItems: 0
                },
                l = (0, i.default)(() => s);

            function u(e, t, n, i) {
                l.setState({
                    ...s,
                    guildId: e,
                    channelId: t,
                    channelType: n,
                    numMediaItems: i
                })
            }

            function o() {
                let e = l.getState();
                a.default.track(r.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
                    guild_id: e.guildId,
                    channel_id: e.channelId,
                    channel_type: e.channelType,
                    number_viewer_swipes: e.viewerSwipes,
                    number_thumbnail_swipes: e.thumbnailSwipes,
                    number_selected_item_changes: e.selectedItemChanges,
                    number_media_items: e.numMediaItems
                }), l.setState({
                    ...s
                })
            }

            function c() {
                l.setState(e => ({
                    selectedItemChanges: e.selectedItemChanges + 1
                }))
            }
        },
        208021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("913144"),
                a = n("819689"),
                r = n("115718"),
                s = n("347895"),
                l = n("341329"),
                u = n("582713"),
                o = n("724210"),
                c = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: r,
                            hasSingleMessageRequest: s
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: r,
                            channelId: t,
                            details: {
                                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: s
                            }
                        }), null != n ? a.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : l.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: s,
                            flash: o = !0,
                            details: c
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: s,
                            channelId: n,
                            details: c
                        });
                        let d = null == c ? void 0 : c.initialMessageId;
                        null != d ? a.default.jumpToMessage({
                            channelId: n,
                            messageId: d,
                            flash: o,
                            jumpType: r.JumpTypes.INSTANT
                        }) : l.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, s.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: o.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: s,
                            flash: o = !0,
                            details: c
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: s,
                            details: c
                        }), (null == c ? void 0 : c.initialMessageId) != null ? a.default.jumpToMessage({
                            channelId: s,
                            messageId: c.initialMessageId,
                            flash: o,
                            jumpType: r.JumpTypes.INSTANT
                        }) : l.default.fetchMessages({
                            guildId: t,
                            channelId: s
                        })
                    },
                    closeChannelSidebar(e) {
                        i.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: a,
                            details: r
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: a,
                            baseChannelId: n,
                            guildId: t,
                            details: r
                        })
                    },
                    closeGuildSidebar(e) {
                        i.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
        },
        467094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchStickerPack: function() {
                    return A
                },
                fetchStickerPacks: function() {
                    return h
                },
                fetchSticker: function() {
                    return g
                },
                fetchGuildStickers: function() {
                    return C
                },
                deleteGuildSticker: function() {
                    return m
                },
                createGuildSticker: function() {
                    return R
                },
                updateGuildSticker: function() {
                    return v
                },
                addStickerPreview: function() {
                    return y
                },
                clearStickerPreview: function() {
                    return N
                },
                favoriteSticker: function() {
                    return L
                },
                unfavoriteSticker: function() {
                    return O
                }
            });
            var i = n("917351"),
                a = n.n(i),
                r = n("872717"),
                s = n("913144"),
                l = n("404118"),
                u = n("619443"),
                o = n("915639"),
                c = n("872173"),
                d = n("766274"),
                f = n("341542"),
                E = n("697218"),
                I = n("271560"),
                p = n("364685"),
                _ = n("49111"),
                S = n("397336"),
                T = n("782340");
            let A = async (e, t) => {
                let {
                    body: n
                } = await (0, I.httpGetWithCountryCodeQuery)(_.Endpoints.STICKER_PACK(e));
                return s.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, h = async function() {
                let {
                    locale: e = o.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (p.default.isFetchingStickerPacks || p.default.hasLoadedStickerPacks) return;
                s.default.wait(() => {
                    s.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await (0, I.httpGetWithCountryCodeQuery)({
                    url: _.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                s.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, g = async e => {
                let {
                    body: t
                } = await r.default.get({
                    url: _.Endpoints.STICKER(e)
                });
                s.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, C = async e => {
                let {
                    body: t
                } = await r.default.get({
                    url: _.Endpoints.GUILD_STICKER_PACKS(e)
                });
                s.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new d.default(e.user)
                    } : e)
                })
            }, m = async e => {
                await r.default.delete({
                    url: _.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, R = async (e, t) => {
                let n = await r.default.post({
                    url: _.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return s.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: E.default.getCurrentUser()
                    }
                }), n.body
            }, v = async (e, t, n) => {
                let i = await r.default.patch({
                    url: _.Endpoints.GUILD_STICKER(e, t),
                    body: n
                });
                return i.body
            };

            function y(e, t, n) {
                s.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: n
                })
            }

            function N(e, t) {
                s.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function P(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != p.default.getStickerById(e))
            }

            function L(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = P(t.stickerIds), a.size(t.stickerIds) >= S.MAX_FAVORITES) ? (l.default.show({
                    title: T.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: T.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: S.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function O(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = P(t.stickerIds)
                }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return u
                },
                trackProfilePanelToggled: function() {
                    return o
                }
            });
            var i = n("373469"),
                a = n("824563"),
                r = n("27618"),
                s = n("599110"),
                l = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: a,
                        customStatusActivity: r,
                        status: u
                    } = e;
                    s.default.track(l.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != a && (null == a ? void 0 : a.type) !== l.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == a ? void 0 : a.type) === l.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != r,
                        has_profile_effect: null != t.profileEffectID,
                        ...c(t)
                    })
                },
                o = (e, t) => {
                    s.default.track(l.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...c(e)
                    })
                },
                c = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        s = null != i.default.getAnyStreamForUser(n),
                        u = a.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return s ? t === l.ActivityTypes.PLAYING : t !== l.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        c = r.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == o ? void 0 : o.large_image) && void 0 !== t ? t : null == o ? void 0 : o.small_image),
                        is_friend: c,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                a = n("95410"),
                r = n("913144"),
                s = n("49111");
            let l = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = l,
                o = "LAST_VIEWED_PATH";
            class c extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                    u = null != e ? e : l
                }
                get defaultRoute() {
                    return s.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : s.Routes.ME
                }
                get fallbackRoute() {
                    return s.Routes.ME
                }
                getState() {
                    return u
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = a.default.get(o, null);
                return a.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(r.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedNonVoicePath = t, !0
                }
            })
        },
        836417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                a = n("913144"),
                r = n("149022"),
                s = n("884351"),
                l = n("845579"),
                u = n("377253");
            let o = {};
            class c extends i.default.Store {
                isEditing(e, t) {
                    var n;
                    return (null === (n = o[e]) || void 0 === n ? void 0 : n.messageId) === t
                }
                isEditingAny(e) {
                    return null != o[e]
                }
                getEditingTextValue(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.textValue
                }
                getEditingRichValue(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.richValue
                }
                getEditingMessageId(e) {
                    var t;
                    return null === (t = o[e]) || void 0 === t ? void 0 : t.messageId
                }
                getEditingMessage(e) {
                    let t = o[e];
                    return null != t && null != t.messageId ? u.default.getMessage(e, t.messageId) : null
                }
            }
            c.displayName = "EditMessageStore";
            var d = new c(a.default, {
                MESSAGE_START_EDIT: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        content: i
                    } = e, a = l.UseLegacyChatInput.getSetting(), u = s.default.unparse(i, t);
                    o[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: u,
                        richValue: (0, r.toRichValue)(a ? u : i)
                    }
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    let {
                        channelId: t,
                        textValue: n,
                        richValue: i
                    } = e, a = o[t];
                    if (null == a) return !1;
                    o[t] = {
                        ...a,
                        textValue: n,
                        richValue: i
                    }
                },
                MESSAGE_END_EDIT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || null == o[t]) return !1;
                    delete o[t]
                }
            })
        },
        287850: function(e, t, n) {
            "use strict";
            let i, a, r;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var s, l, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                E = n("21121"),
                I = n("934306"),
                p = n("288518"),
                _ = n("486503"),
                S = n("233069"),
                T = n("42203"),
                A = n("305961"),
                h = n("660478"),
                g = n("282109"),
                C = n("697218"),
                m = n("299039"),
                R = n("724210");
            (s = l || (l = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let v = new d.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? l.FAVORITE : l.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let i = null !== (n = null !== (t = h.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        a = e.isMessageRequestTimestamp;
                    if (null != a) {
                        let e = o(a).valueOf(),
                            t = m.default.fromTimestamp(e);
                        return m.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: g.default.isMessagesFavorite(e.id) && (0, E.isInMainTabsExperiment)(),
                    isRequest: p.default.isMessageRequest(e.id) || _.default.isSpam(e.id)
                }
            }

            function N() {
                v.clear(), Object.values(T.default.getMutablePrivateChannels()).forEach(e => {
                    v.set(e.id, y(e))
                }), (0, E.isInMainTabsExperiment)() && (0, I.isSplitMessagesTab)() && g.default.getAddedToMessages().forEach(e => {
                    let t = T.default.getChannel(e);
                    null != t && (0, S.isGuildTextChannelType)(t.type) && v.set(t.id, y(t))
                })
            }

            function P() {
                let e = T.default.getMutablePrivateChannels();
                for (let t in e) v.set(t, y(e[t]))
            }
            let L = (i = [], a = [], r = [], () => {
                let e = v.values(l.FAVORITE),
                    t = v.values(l.DEFAULT);
                return (i !== e || a !== t) && (r = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return r.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return r.push(t)
                }), a = t), r
            });
            class O extends c.default.Store {
                initialize() {
                    this.waitFor(T.default, A.default, C.default, p.default, g.default), this.syncWith([g.default, p.default], N)
                }
                getPrivateChannelIds() {
                    return L()
                }
                getSortedChannels() {
                    return [v.values(l.FAVORITE), v.values(l.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return v.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: i
                        } = t;
                        e[n] = i
                    }), e
                }
            }
            O.displayName = "PrivateChannelSortStore";
            var M = new O(f.default, {
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED: P,
                CACHE_LOADED_LAZY: P,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, S.isPrivate)(e.type) || v.has(e.id)) && v.set(e.id, y(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, S.isPrivate)(t.type) || t.id === R.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    v.set(t.id, y(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return v.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!v.has(t)) return !1;
                    let i = T.default.getChannel(t);
                    return null != i && v.set(t, y(i, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return v.delete(t)
                }
            })
        }
    }
]);
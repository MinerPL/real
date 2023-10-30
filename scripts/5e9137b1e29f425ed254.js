(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60185"], {
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
                s = n.n(a),
                l = n("77078"),
                r = n("978970"),
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
                    className: s(c.list, f),
                    children: [null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != a ? (0, i.jsx)(l.FormTitle, {
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
                                }), (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, r.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null, null != n && n.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != d ? (0, i.jsx)(l.FormTitle, {
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
                                }), (0, i.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, r.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null]
                })
            }
        },
        308472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm17 5.414V11a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.586L13.5 11.086l-1.793-1.793a1 1 0 0 0-1.414 0l-4.5 4.5a1 1 0 1 0 1.414 1.414L11 11.414l1.793 1.793a1 1 0 0 0 1.414 0L20 7.414Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM7.739 9.307A2 2 0 0 1 9.307 7.74l7.222-1.445a1 1 0 0 1 1.177 1.177l-1.444 7.222a2 2 0 0 1-1.57 1.569l-7.221 1.444a1 1 0 0 1-1.177-1.177L7.74 9.307ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        823527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GameControllerIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M20.968 4.063c0 .177.083.35.241.43.554.28.894.812 1.038 1.416C22.543 7.152 23 9.62 23 13v4.912a3.089 3.089 0 0 1-5.854 1.38l-1.758-3.515c-.223-.445-.74-.661-1.225-.549-.572.132-1.367.273-2.163.273-.796 0-1.591-.14-2.163-.273-.485-.112-1.002.104-1.225.549l-1.758 3.516A3.09 3.09 0 0 1 1 17.912V13c0-3.381.457-5.848.753-7.09.144-.605.484-1.137 1.038-1.417a.472.472 0 0 0 .241-.43 1.5 1.5 0 0 1 1.189-1.468l2.934-.624a1.499 1.499 0 0 1 1.36.394c.356.346.784.716 1.28.69A42.392 42.392 0 0 1 12 3c.793 0 1.526.02 2.205.055.496.026.924-.344 1.28-.69.347-.338.85-.502 1.36-.394l2.934.624a1.5 1.5 0 0 1 1.189 1.468ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        392646: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserCircleStatusIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12.376 21.27A.4.4 0 0 0 12 21a8.958 8.958 0 0 1-4.547-1.232.484.484 0 0 1-.233-.467l.196-1.96c.025-.248-.27-.362-.406-.153-.191.295-.394.641-.588 1.021-.153.3-.55.392-.788.153a9.038 9.038 0 0 1-1.281-1.614.47.47 0 0 1 0-.496A8.994 8.994 0 0 1 12 12c1.244 0 2.43.252 3.507.709.143.06.305.055.445-.012A6.972 6.972 0 0 1 19 12a6.97 6.97 0 0 1 3.22.783c.335.174.76-.026.774-.403.004-.127.006-.253.006-.38 0-6.075-4.925-11-11-11S1 5.925 1 12a10.949 10.949 0 0 0 2.291 6.72 11.067 11.067 0 0 0 3.701 3.077L7 21.8a10.954 10.954 0 0 0 5.38 1.193c.377-.013.577-.439.403-.774a6.963 6.963 0 0 1-.407-.95ZM15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, i.jsx)("circle", {
                        cx: "19",
                        cy: "19",
                        r: "5",
                        fill: "string" == typeof l ? l : l.css,
                        className: r
                    })]
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.467 1A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h11.695a.5.5 0 0 0 .498-.55l-.26-2.609c-.026-.248.27-.362.405-.153.479.74 1.034 1.796 1.319 2.909.06.232.264.403.504.403h.22c.81 0 1.467-.657 1.467-1.467A9.533 9.533 0 0 0 12.467 11h-.934Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        612039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                a = n("775560"),
                s = n("862337");

            function l(e, t) {
                let [n, l] = (0, i.useState)(e), r = (0, a.useLazyValue)(() => new s.Timeout);
                (0, i.useEffect)(() => () => r.stop(), [r]);
                let u = (0, i.useCallback)(n => {
                    l(n), n !== e && r.start(t, () => l(e))
                }, [t, e, r]);
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
                s = n("406189"),
                l = n("393027"),
                r = n("49111");

            function u(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !(0, i.hasAnyModalOpen)() && (n && s.default.channelListScrollTo(e, t), u && null != t && a.default.updateChatOpen(t, !0), l.default.getState().updatePath(r.Routes.CHANNEL(e, t)))
            }

            function o(e) {
                !(0, i.hasAnyModalOpen)() && l.default.getState().updatePath(e)
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
                s = n("206230");

            function l() {
                return Promise.resolve()
            }

            function r(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, a.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled);
                return (0, i.default)({
                    id: e,
                    isEnabled: n,
                    orientation: t,
                    setFocus: r,
                    scrollToStart: l,
                    scrollToEnd: l
                })
            }
        },
        765105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("90915"),
                s = n("73749"),
                l = n("468560"),
                r = n("271081"),
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
                } = t.params, s = (0, l.default)(c.ApplicationDirectoryProfileSections, a);
                return (0, i.jsx)(u.default, {
                    applicationId: n,
                    initialSection: s
                })
            };

            function h() {
                return (0, i.jsxs)(a.Switch, {
                    children: [(0, i.jsx)(s.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                        component: o.default
                    }), (0, i.jsx)(s.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
                        render: f
                    }), (0, i.jsx)(s.default, {
                        path: d.Routes.APPLICATION_DIRECTORY,
                        component: r.default
                    })]
                })
            }
        },
        94973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("617258"),
                l = n("446674"),
                r = n("769846"),
                u = n("77078"),
                o = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                h = n("160299"),
                p = n("153160"),
                I = n("271560"),
                E = n("650509"),
                v = n("910861"),
                _ = n("899604"),
                C = n("153335"),
                T = n("49111"),
                S = n("782340"),
                m = n("208961");
            let A = (0, s.cssValueToNumber)(r.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                g = "start_application_subscription",
                R = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let a = (0, I.getAssetURL)(t.application_id, n, A);
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)("img", {
                            src: a,
                            alt: "",
                            className: m.listingImage
                        })
                    })
                },
                N = e => {
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

            function y(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: s,
                    analyticsLocation: r,
                    onComplete: I,
                    forcesTransitionToGuild: A
                } = e, y = (0, l.useStateFromStores)([h.default], () => h.default.isSyncing), {
                    activeSubscription: x,
                    activeSubscriptionListing: L
                } = (0, E.useActiveSubscriptionListingForApplication)(t.application_id, s), {
                    openModal: M,
                    canOpenModal: P,
                    cannotOpenReason: O
                } = (0, C.default)({
                    listing: t,
                    guildId: s,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: r,
                    onComplete: I,
                    forcesTransitionToGuild: A
                }), j = t.subscription_plans[0], b = 0 === j.price, w = (null == L ? void 0 : L.id) === t.id, V = (0, o.default)(), D = V && !P || y, U = () => {
                    V ? M() : (0, c.redirectToLogin)({
                        [g]: "true"
                    })
                };
                return a.useEffect(() => {
                    let e = new URL(location.href);
                    if (V && !D && "true" === e.searchParams.get(g)) {
                        e.searchParams.delete(g);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), M()
                    }
                }, [V, M, t, D]), (0, i.jsxs)("div", {
                    className: m.container,
                    children: [(0, i.jsxs)("div", {
                        className: m.cardHeader,
                        children: [(0, i.jsx)(R, {
                            listing: t
                        }), (0, i.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, i.jsxs)("div", {
                            className: m.priceAndButtonContainer,
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: b ? S.default.Messages.APPLICATION_SUBSCRIPTION_FREE : S.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, p.formatPrice)(j.price, j.currency),
                                    period: (0, d.formatPlanInterval)(j)
                                })
                            }), (() => {
                                var e;
                                if (w) return (0, i.jsx)(N, {
                                    children: (null == x ? void 0 : x.status) === T.SubscriptionStatusTypes.CANCELED ? S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (b) return null == L ? (0, i.jsx)(N, {
                                    children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, i.jsx)(u.Tooltip, {
                                    tooltipClassName: m.subscribeButtonTooltip,
                                    text: P || !V ? null : O,
                                    "aria-label": null !== (e = !P && O) && void 0 !== e && e,
                                    children: e => (0, i.jsx)(v.default, {
                                        ...e,
                                        disabled: D,
                                        submitting: !1,
                                        onClick: U,
                                        children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                    })
                                })
                            })()]
                        })]
                    }), t.sku_benefits.benefits.length > 0 ? (0, i.jsx)("div", {
                        className: m.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, i.jsx)(_.default, {
                            benefit: e,
                            className: m.benefit
                        }, t))
                    }) : null]
                })
            }
        },
        913678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                l = n("850068"),
                r = n("598981"),
                u = n("650509"),
                o = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("358261");

            function h(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), a = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return a || n ? (0, i.jsxs)("div", {
                    className: f.cta,
                    children: [(0, i.jsx)(s.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, i.jsx)(s.Heading, {
                        color: "interactive-normal",
                        variant: "heading-md/normal",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                            applicationName: t.name
                        })
                    })]
                }) : null
            }

            function p(e) {
                var t;
                let {
                    guildId: n,
                    applicationId: o,
                    applicationPrimarySkuId: d,
                    analyticsLocation: p,
                    onComplete: I,
                    forcesTransitionToGuild: E
                } = e, {
                    listingsLoaded: v
                } = (0, u.useFetchListingsForApplication)(o, d), {
                    entitlementsLoaded: _
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: C
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), T = (0, r.default)();
                a.useEffect(() => {
                    T && l.fetchSubscriptions()
                }, [T]);
                let S = null == C ? void 0 : C.id,
                    m = null == C ? void 0 : null === (t = C.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return v && (null == n || _) ? null == S || null == m || 0 === m.length ? null : (0, i.jsx)("div", {
                    className: f.container,
                    children: m.map(e => (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(h, {
                            listing: e
                        }, e.id), (0, i.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: S,
                            analyticsLocation: p,
                            onComplete: I,
                            forcesTransitionToGuild: E
                        }, e.id)]
                    }, e.id))
                }) : (0, i.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, i.jsx)(s.Spinner, {})
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
                    richValue: l(e)
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
                    return l
                },
                voidToOptionValue: function() {
                    return r
                }
            });
            let s = Object.freeze([Object.freeze({
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
                })) : s
            }

            function r(e) {
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
                s = n("845579"),
                l = n("662255"),
                r = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = s.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !r.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(a.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != o && e.shiftKey ? o : t;
                        (0, r.copy)(n), null == u || u()
                    },
                    icon: l.default,
                    showIconFirst: c
                }, f)
            }
        },
        577357: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBenefitKey: function() {
                    return l
                },
                formatPlanInterval: function() {
                    return r
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
                s = n("782340");

            function l(e) {
                return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
            }

            function r(e) {
                let {
                    interval: t,
                    interval_count: n
                } = e;
                return (function(e) {
                    switch (e) {
                        case a.SubscriptionIntervalTypes.DAY:
                            return s.default.Messages.DAY;
                        case a.SubscriptionIntervalTypes.MONTH:
                            return s.default.Messages.MONTH;
                        case a.SubscriptionIntervalTypes.YEAR:
                            return s.default.Messages.YEAR
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
                        if (n > 0 && n % 7 == 0) return s.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return s.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case a.SubscriptionIntervalTypes.MONTH:
                        return s.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case a.SubscriptionIntervalTypes.YEAR:
                        return s.default.Messages.DURATION_YEARS_CAPITALIZE.format({
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
        208021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("913144"),
                a = n("819689"),
                s = n("115718"),
                l = n("347895"),
                r = n("341329"),
                u = n("582713"),
                o = n("724210"),
                c = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: s,
                            hasSingleMessageRequest: l
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: s,
                            channelId: t,
                            details: {
                                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: l
                            }
                        }), null != n ? a.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : r.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: l,
                            flash: o = !0,
                            details: c
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: l,
                            channelId: n,
                            details: c
                        });
                        let d = null == c ? void 0 : c.initialMessageId;
                        null != d ? a.default.jumpToMessage({
                            channelId: n,
                            messageId: d,
                            flash: o,
                            jumpType: s.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, l.selectHomeResourceChannel)(t, n, !1), i.default.dispatch({
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
                            channelId: l,
                            flash: o = !0,
                            details: c
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: l,
                            details: c
                        }), (null == c ? void 0 : c.initialMessageId) != null ? a.default.jumpToMessage({
                            channelId: l,
                            messageId: c.initialMessageId,
                            flash: o,
                            jumpType: s.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: l
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
                            details: s
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: a,
                            baseChannelId: n,
                            guildId: t,
                            details: s
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
                    return C
                },
                fetchStickerPacks: function() {
                    return T
                },
                fetchSticker: function() {
                    return S
                },
                fetchGuildStickers: function() {
                    return m
                },
                deleteGuildSticker: function() {
                    return A
                },
                createGuildSticker: function() {
                    return g
                },
                updateGuildSticker: function() {
                    return R
                },
                addStickerPreview: function() {
                    return N
                },
                clearStickerPreview: function() {
                    return y
                },
                favoriteSticker: function() {
                    return L
                },
                unfavoriteSticker: function() {
                    return M
                }
            });
            var i = n("917351"),
                a = n.n(i),
                s = n("872717"),
                l = n("913144"),
                r = n("404118"),
                u = n("619443"),
                o = n("915639"),
                c = n("872173"),
                d = n("766274"),
                f = n("341542"),
                h = n("697218"),
                p = n("271560"),
                I = n("364685"),
                E = n("49111"),
                v = n("397336"),
                _ = n("782340");
            let C = async (e, t) => {
                let {
                    body: n
                } = await (0, p.httpGetWithCountryCodeQuery)(E.Endpoints.STICKER_PACK(e));
                return l.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, T = async function() {
                let {
                    locale: e = o.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (I.default.isFetchingStickerPacks || I.default.hasLoadedStickerPacks) return;
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await (0, p.httpGetWithCountryCodeQuery)({
                    url: E.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                l.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, S = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: E.Endpoints.STICKER(e)
                });
                l.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, m = async e => {
                let {
                    body: t
                } = await s.default.get({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e)
                });
                l.default.dispatch({
                    type: "GUILD_STICKERS_FETCH_SUCCESS",
                    guildId: e,
                    stickers: t.map(e => null != e.user ? {
                        ...e,
                        user: new d.default(e.user)
                    } : e)
                })
            }, A = async e => {
                await s.default.delete({
                    url: E.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, g = async (e, t) => {
                let n = await s.default.post({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return l.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: h.default.getCurrentUser()
                    }
                }), n.body
            }, R = async (e, t, n) => {
                let i = await s.default.patch({
                    url: E.Endpoints.GUILD_STICKER(e, t),
                    body: n
                });
                return i.body
            };

            function N(e, t, n) {
                l.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: n
                })
            }

            function y(e, t) {
                l.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function x(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
            }

            function L(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = x(t.stickerIds), a.size(t.stickerIds) >= v.MAX_FAVORITES) ? (r.default.show({
                    title: _.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: _.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: v.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), v.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function M(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = x(t.stickerIds)
                }, v.UserSettingsDelay.INFREQUENT_USER_ACTION)
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
                s = n("27618"),
                l = n("599110"),
                r = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: a,
                        customStatusActivity: s,
                        status: u
                    } = e;
                    l.default.track(r.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != a && (null == a ? void 0 : a.type) !== r.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == a ? void 0 : a.type) === r.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != s,
                        has_profile_effect: null != t.profileEffectID,
                        ...c(t)
                    })
                },
                o = (e, t) => {
                    l.default.track(r.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...c(e)
                    })
                },
                c = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        l = null != i.default.getAnyStreamForUser(n),
                        u = a.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return l ? t === r.ActivityTypes.PLAYING : t !== r.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        c = s.default.isFriend(n);
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
                s = n("913144"),
                l = n("49111");
            let r = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = r,
                o = "LAST_VIEWED_PATH";
            class c extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                    u = null != e ? e : r
                }
                get defaultRoute() {
                    return l.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
                }
                get fallbackRoute() {
                    return l.Routes.ME
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
            var d = new c(s.default, {
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
                s = n("149022"),
                l = n("884351"),
                r = n("845579"),
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
                    } = e, a = r.UseLegacyChatInput.getSetting(), u = l.default.unparse(i, t);
                    o[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: u,
                        richValue: (0, s.toRichValue)(a ? u : i)
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
            let i, a, s;
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var l, r, u = n("866227"),
                o = n.n(u),
                c = n("446674"),
                d = n("407846"),
                f = n("913144"),
                h = n("21121"),
                p = n("934306"),
                I = n("288518"),
                E = n("486503"),
                v = n("233069"),
                _ = n("42203"),
                C = n("305961"),
                T = n("660478"),
                S = n("282109"),
                m = n("697218"),
                A = n("299039"),
                g = n("724210");
            (l = r || (r = {})).DEFAULT = "DEFAULT", l.FAVORITE = "FAVORITE";
            let R = new d.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? r.FAVORITE : r.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let i = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        a = e.isMessageRequestTimestamp;
                    if (null != a) {
                        let e = o(a).valueOf(),
                            t = A.default.fromTimestamp(e);
                        return A.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: S.default.isMessagesFavorite(e.id) && (0, h.isInMainTabsExperiment)(),
                    isRequest: I.default.isMessageRequest(e.id) || E.default.isSpam(e.id)
                }
            }

            function y() {
                R.clear(), Object.values(_.default.getMutablePrivateChannels()).forEach(e => {
                    R.set(e.id, N(e))
                }), (0, h.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && S.default.getAddedToMessages().forEach(e => {
                    let t = _.default.getChannel(e);
                    null != t && (0, v.isGuildTextChannelType)(t.type) && R.set(t.id, N(t))
                })
            }

            function x() {
                let e = _.default.getMutablePrivateChannels();
                for (let t in e) R.set(t, N(e[t]))
            }
            let L = (i = [], a = [], s = [], () => {
                let e = R.values(r.FAVORITE),
                    t = R.values(r.DEFAULT);
                return (i !== e || a !== t) && (s = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), a = t), s
            });
            class M extends c.default.Store {
                initialize() {
                    this.waitFor(_.default, C.default, m.default, I.default, S.default), this.syncWith([S.default, I.default], y)
                }
                getPrivateChannelIds() {
                    return L()
                }
                getSortedChannels() {
                    return [R.values(r.FAVORITE), R.values(r.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return R.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: i
                        } = t;
                        e[n] = i
                    }), e
                }
            }
            M.displayName = "PrivateChannelSortStore";
            var P = new M(f.default, {
                CONNECTION_OPEN: y,
                CONNECTION_OPEN_SUPPLEMENTAL: y,
                OVERLAY_INITIALIZE: y,
                CACHE_LOADED: x,
                CACHE_LOADED_LAZY: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, v.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, N(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, v.isPrivate)(t.type) || t.id === g.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    R.set(t.id, N(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return R.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!R.has(t)) return !1;
                    let i = _.default.getChannel(t);
                    return null != i && R.set(t, N(i, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return R.delete(t)
                }
            })
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                l = n("561445"),
                r = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: a,
                        children: r
                    } = e;
                    return (0, i.jsx)("div", {
                        className: s(l.outer, a),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
                            className: l.inner,
                            children: r
                        })
                    })
                }
        },
        265836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("862337");
            class l extends a.Component {
                static getDerivedStateFromProps(e) {
                    return e.disable ? {
                        hovered: !1
                    } : null
                }
                componentDidMount() {
                    let {
                        pauseOnHover: e,
                        disable: t
                    } = this.props, n = this.state.hovered && e;
                    !t && !n && this.startTimer()
                }
                componentWillUnmount() {
                    this.stopTimer()
                }
                componentDidUpdate(e, t) {
                    var n, i, a, s;
                    let {
                        props: l
                    } = this;
                    let r = (n = l, i = this.state, !n.disable && !(i.hovered && n.pauseOnHover));
                    let u = (a = e, s = t, !a.disable && !(s.hovered && a.pauseOnHover));
                    r && !u || e.interval !== l.interval ? this.startTimer() : !r && u && this.stopTimer()
                }
                startTimer() {
                    let {
                        interval: e,
                        onInterval: t,
                        disable: n
                    } = this.props;
                    !n && this.timer.start(e, () => {
                        t()
                    })
                }
                stopTimer() {
                    this.timer.stop()
                }
                render() {
                    let {
                        children: e,
                        className: t,
                        disable: n
                    } = this.props, a = n ? null : {
                        onMouseEnter: this.handlePause,
                        onFocus: this.handlePause,
                        onMouseLeave: this.handleResume,
                        onBlur: this.handleResume
                    };
                    return (0, i.jsx)("div", {
                        ...a,
                        className: t,
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.timer = new s.Interval, this.state = {
                        hovered: !1
                    }, this.handlePause = () => {
                        !this.state.hovered && this.setState({
                            hovered: !0
                        })
                    }, this.handleResume = () => {
                        this.setState({
                            hovered: !1
                        })
                    }
                }
            }
            l.defaultProps = {
                disable: !1,
                pauseOnHover: !1
            };
            var r = l
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                l = n.n(s),
                r = n("77078"),
                u = n("381546"),
                o = n("229915"),
                c = n("782340"),
                d = n("913893");
            class f extends a.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: a,
                        inputClassName: s,
                        className: f,
                        onChange: h,
                        onFocus: p,
                        onBlur: I,
                        onKeyPress: E,
                        autoComplete: v,
                        forwardedRef: _,
                        closeIconClassName: C,
                        searchIconClassName: T,
                        cta: S
                    } = this.props, m = null != a && a.length > 0, A = null != _ ? _ : this._textInputRef;
                    return (0, i.jsx)(r.FocusRing, {
                        focusTarget: A,
                        ringTarget: this._containerRef,
                        children: (0, i.jsxs)("div", {
                            className: l(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, i.jsx)(r.TextInput, {
                                inputRef: A,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: l(d.searchBoxInput, s),
                                onChange: h,
                                onFocus: p,
                                onBlur: I,
                                onKeyPress: E,
                                value: m ? a : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: v ? "on" : "off"
                            }), null != S ? (0, i.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: S
                            }) : null, m ? (0, i.jsx)(r.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, i.jsx)(u.default, {
                                    className: l(d.clearIcon, C)
                                })
                            }) : (0, i.jsx)(o.default, {
                                className: l(d.searchIcon, T),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = a.createRef(), this._containerRef = a.createRef(), this.handleClear = () => {
                        let {
                            onClear: e,
                            forwardedRef: t
                        } = this.props, {
                            current: n
                        } = null != t ? t : this._textInputRef;
                        null != n && n.focus(), null != e && e()
                    }
                }
            }
            f.defaultProps = {
                autoComplete: !1
            };
            var h = a.forwardRef((e, t) => (0, i.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("35647"),
                l = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, s.IdIcon)
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("772279"),
                l = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: s,
                        foreground: r,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        className: s,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, s.CompassIcon)
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("533806"),
                l = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: s,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: a
                        })
                    })
                }, s.UserIcon)
        },
        849483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("392646"),
                l = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            className: s,
                            children: [(0, i.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z",
                                fill: a
                            }), (0, i.jsx)("path", {
                                d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
                                fill: a
                            })]
                        })
                    })
                }, s.UserCircleStatusIcon)
        }
    }
]);
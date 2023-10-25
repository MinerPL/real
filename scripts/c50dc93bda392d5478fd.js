(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["42594"], {
        68422: function(e, t, n) {
            "use strict";
            e.exports = n.p + "467602d632b5f9c1ce4b.svg"
        },
        578817: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d4d9f2bff23beec65b1f.svg"
        },
        129858: function(e, t, n) {
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
                    return r
                }
            });
            var i = n("913144"),
                r = {
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
            var i = n("920040");
            n("773670");
            var r = n("575482"),
                a = n.n(r),
                s = n("77078"),
                l = n("978970"),
                u = n("36694"),
                o = n("945330"),
                c = n("778780");

            function d(e) {
                let {
                    grantedPermissions: t,
                    disabledPermissions: n,
                    grantedPermissionsHeader: r,
                    disabledPermissionsHeader: d,
                    className: f
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(c.list, f),
                    children: [null != t && t.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [null != r ? (0, i.jsx)(s.FormTitle, {
                            className: c.permissionHeader,
                            children: r
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
        308472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm17 5.414V11a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.586L13.5 11.086l-1.793-1.793a1 1 0 0 0-1.414 0l-4.5 4.5a1 1 0 1 0 1.414 1.414L11 11.414l1.793 1.793a1 1 0 0 0 1.414 0L20 7.414Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM7.739 9.307A2 2 0 0 1 9.307 7.74l7.222-1.445a1 1 0 0 1 1.177 1.177l-1.444 7.222a2 2 0 0 1-1.57 1.569l-7.221 1.444a1 1 0 0 1-1.177-1.177L7.74 9.307ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        823527: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GameControllerIcon: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M20.968 4.063c0 .177.083.35.241.43.554.28.894.812 1.038 1.416C22.543 7.152 23 9.62 23 13v4.912a3.089 3.089 0 0 1-5.854 1.38l-1.758-3.515c-.223-.445-.74-.661-1.225-.549-.572.132-1.367.273-2.163.273-.796 0-1.591-.14-2.163-.273-.485-.112-1.002.104-1.225.549l-1.758 3.516A3.09 3.09 0 0 1 1 17.912V13c0-3.381.457-5.848.753-7.09.144-.605.484-1.137 1.038-1.417a.472.472 0 0 0 .241-.43 1.5 1.5 0 0 1 1.189-1.468l2.934-.624a1.499 1.499 0 0 1 1.36.394c.356.346.784.716 1.28.69A42.392 42.392 0 0 1 12 3c.793 0 1.526.02 2.205.055.496.026.924-.344 1.28-.69.347-.338.85-.502 1.36-.394l2.934.624a1.5 1.5 0 0 1 1.189 1.468ZM20 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1V7Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        392646: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserCircleStatusIcon: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12.376 21.27A.4.4 0 0 0 12 21a8.958 8.958 0 0 1-4.547-1.232.484.484 0 0 1-.233-.467l.196-1.96c.025-.248-.27-.362-.406-.153-.191.295-.394.641-.588 1.021-.153.3-.55.392-.788.153a9.038 9.038 0 0 1-1.281-1.614.47.47 0 0 1 0-.496A8.994 8.994 0 0 1 12 12c1.244 0 2.43.252 3.507.709.143.06.305.055.445-.012A6.972 6.972 0 0 1 19 12a6.97 6.97 0 0 1 3.22.783c.335.174.76-.026.774-.403.004-.127.006-.253.006-.38 0-6.075-4.925-11-11-11S1 5.925 1 12a10.949 10.949 0 0 0 2.291 6.72 11.067 11.067 0 0 0 3.701 3.077L7 21.8a10.954 10.954 0 0 0 5.38 1.193c.377-.013.577-.439.403-.774a6.963 6.963 0 0 1-.407-.95ZM15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, i.jsx)("circle", {
                        cx: "19",
                        cy: "19",
                        r: "5",
                        fill: "string" == typeof s ? s : s.css,
                        className: l
                    })]
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("912557"),
                a = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.467 1A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h11.695a.5.5 0 0 0 .498-.55l-.26-2.609c-.026-.248.27-.362.405-.153.479.74 1.034 1.796 1.319 2.909.06.232.264.403.504.403h.22c.81 0 1.467-.657 1.467-1.467A9.533 9.533 0 0 0 12.467 11h-.934Z",
                        clipRule: "evenodd",
                        className: l
                    })
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
            var i = n("773670"),
                r = n("365444"),
                a = n("638800");

            function s(e, t) {
                let [n, s] = (0, i.useState)(e), l = (0, r.useLazyValue)(() => new a.Timeout);
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
                r = n("255397"),
                a = n("406189"),
                s = n("393027"),
                l = n("49111");

            function u(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                !(0, i.hasAnyModalOpen)() && (n && a.default.channelListScrollTo(e, t), u && null != t && r.default.updateChatOpen(t, !0), s.default.getState().updatePath(l.Routes.CHANNEL(e, t)))
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
            var i = n("947980"),
                r = n("498225"),
                a = n("206230");

            function s() {
                return Promise.resolve()
            }

            function l(e) {
                let t = document.querySelector(e);
                null != t && t.focus()
            }

            function u(e, t) {
                let n = (0, r.useStateFromStores)([a.default], () => a.default.keyboardModeEnabled);
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
        765105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("716984"),
                a = n("73749"),
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
                    section: r
                } = t.params, a = (0, s.default)(c.ApplicationDirectoryProfileSections, r);
                return (0, i.jsx)(u.default, {
                    applicationId: n,
                    initialSection: a
                })
            };

            function p() {
                return (0, i.jsxs)(r.Switch, {
                    children: [(0, i.jsx)(a.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                        component: o.default
                    }), (0, i.jsx)(a.default, {
                        path: d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?"),
                        render: f
                    }), (0, i.jsx)(a.default, {
                        path: d.Routes.APPLICATION_DIRECTORY,
                        component: l.default
                    })]
                })
            }
        },
        94973: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("800090"),
                s = n("498225"),
                l = n("769846"),
                u = n("77078"),
                o = n("598981"),
                c = n("682777"),
                d = n("577357"),
                f = n("393414"),
                p = n("160299"),
                h = n("153160"),
                I = n("271560"),
                E = n("650509"),
                C = n("910861"),
                T = n("899604"),
                _ = n("153335"),
                v = n("49111"),
                S = n("782340"),
                A = n("305189");
            let m = (0, a.cssValueToNumber)(l.default.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
                g = "start_application_subscription",
                R = e => {
                    let {
                        listing: t
                    } = e, n = t.image_asset;
                    if (null == n) return null;
                    let r = (0, I.getAssetURL)(t.application_id, n, m);
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)("img", {
                            src: r,
                            alt: "",
                            className: A.listingImage
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

            function L(e) {
                let {
                    listing: t,
                    groupListingId: n,
                    guildId: a,
                    analyticsLocation: l,
                    onComplete: I,
                    forcesTransitionToGuild: m
                } = e, L = (0, s.useStateFromStores)([p.default], () => p.default.isSyncing), {
                    activeSubscription: y,
                    activeSubscriptionListing: P
                } = (0, E.useActiveSubscriptionListingForApplication)(t.application_id, a), {
                    openModal: x,
                    canOpenModal: M,
                    cannotOpenReason: O
                } = (0, _.default)({
                    listing: t,
                    guildId: a,
                    groupListingId: n,
                    showBenefitsFirst: !1,
                    analyticsLocation: l,
                    onComplete: I,
                    forcesTransitionToGuild: m
                }), j = t.subscription_plans[0], b = 0 === j.price, w = (null == P ? void 0 : P.id) === t.id, V = (0, o.default)(), D = V && !M || L, U = () => {
                    V ? x() : (0, c.redirectToLogin)({
                        [g]: "true"
                    })
                };
                return r.useEffect(() => {
                    let e = new URL(location.href);
                    if (V && !D && "true" === e.searchParams.get(g)) {
                        e.searchParams.delete(g);
                        let t = e.pathname + e.search;
                        (0, f.replaceWith)(t), x()
                    }
                }, [V, x, t, D]), (0, i.jsxs)("div", {
                    className: A.container,
                    children: [(0, i.jsxs)("div", {
                        className: A.cardHeader,
                        children: [(0, i.jsx)(R, {
                            listing: t
                        }), (0, i.jsx)(u.Text, {
                            variant: "text-lg/medium",
                            color: "interactive-active",
                            children: t.name
                        }), (0, i.jsxs)("div", {
                            className: A.priceAndButtonContainer,
                            children: [(0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "interactive-normal",
                                children: b ? S.default.Messages.APPLICATION_SUBSCRIPTION_FREE : S.default.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
                                    amount: (0, h.formatPrice)(j.price, j.currency),
                                    period: (0, d.formatPlanInterval)(j)
                                })
                            }), (() => {
                                var e;
                                if (w) return (0, i.jsx)(N, {
                                    children: (null == y ? void 0 : y.status) === v.SubscriptionStatusTypes.CANCELED ? S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                });
                                if (b) return null == P ? (0, i.jsx)(N, {
                                    children: S.default.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
                                }) : null;
                                return (0, i.jsx)(u.Tooltip, {
                                    tooltipClassName: A.subscribeButtonTooltip,
                                    text: M || !V ? null : O,
                                    "aria-label": null !== (e = !M && O) && void 0 !== e && e,
                                    children: e => (0, i.jsx)(C.default, {
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
                        className: A.benefitsContainer,
                        children: t.sku_benefits.benefits.map((e, t) => (0, i.jsx)(T.default, {
                            benefit: e,
                            className: A.benefit
                        }, t))
                    }) : null]
                })
            }
        },
        913678: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("77078"),
                s = n("850068"),
                l = n("598981"),
                u = n("650509"),
                o = n("90592"),
                c = n("94973"),
                d = n("782340"),
                f = n("336782");

            function p(e) {
                let {
                    listing: t
                } = e, n = (0, o.isApplicationGuildSubscription)(t.sku_flags), r = (0, o.isApplicationUserSubscription)(t.sku_flags);
                return r || n ? (0, i.jsxs)("div", {
                    className: f.cta,
                    children: [(0, i.jsx)(a.Heading, {
                        variant: "heading-lg/bold",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
                    }), (0, i.jsx)(a.Heading, {
                        color: "interactive-normal",
                        variant: "heading-md/normal",
                        children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                            applicationName: t.name
                        })
                    })]
                }) : null
            }

            function h(e) {
                var t;
                let {
                    guildId: n,
                    applicationId: o,
                    applicationPrimarySkuId: d,
                    analyticsLocation: h,
                    onComplete: I,
                    forcesTransitionToGuild: E
                } = e, {
                    listingsLoaded: C
                } = (0, u.useFetchListingsForApplication)(o, d), {
                    entitlementsLoaded: T
                } = (0, u.useFetchEntitlementsForGuild)({
                    guildId: n
                }), {
                    subscriptionGroupListing: _
                } = (0, u.useActiveSubscriptionListingForApplication)(o, n), v = (0, l.default)();
                r.useEffect(() => {
                    v && s.fetchSubscriptions()
                }, [v]);
                let S = null == _ ? void 0 : _.id,
                    A = null == _ ? void 0 : null === (t = _.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
                return C && (null == n || T) ? null == S || null == A || 0 === A.length ? null : (0, i.jsx)("div", {
                    className: f.container,
                    children: A.map(e => (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(p, {
                            listing: e
                        }, e.id), (0, i.jsx)(c.default, {
                            listing: e,
                            guildId: n,
                            groupListingId: S,
                            analyticsLocation: h,
                            onComplete: I,
                            forcesTransitionToGuild: E
                        }, e.id)]
                    }, e.id))
                }) : (0, i.jsx)("div", {
                    className: f.loadingContainer,
                    children: (0, i.jsx)(a.Spinner, {})
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

            function r(e) {
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
                    return r
                },
                toRichValue: function() {
                    return s
                },
                voidToOptionValue: function() {
                    return l
                }
            });
            let a = Object.freeze([Object.freeze({
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
                })) : a
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
            var i = n("920040");
            n("773670");
            var r = n("77078"),
                a = n("845579"),
                s = n("662255"),
                l = n("306160");

            function u(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: u,
                    shiftId: o,
                    showIconFirst: c
                } = e, d = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !d || !l.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(r.MenuItem, {
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
                r = n("646718"),
                a = n("782340");

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
                        case r.SubscriptionIntervalTypes.DAY:
                            return a.default.Messages.DAY;
                        case r.SubscriptionIntervalTypes.MONTH:
                            return a.default.Messages.MONTH;
                        case r.SubscriptionIntervalTypes.YEAR:
                            return a.default.Messages.YEAR
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
                    case r.SubscriptionIntervalTypes.DAY:
                        if (n > 0 && n % 7 == 0) return a.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                            weeks: n / 7
                        });
                        return a.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                            days: n
                        });
                    case r.SubscriptionIntervalTypes.MONTH:
                        return a.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                            months: n
                        });
                    case r.SubscriptionIntervalTypes.YEAR:
                        return a.default.Messages.DURATION_YEARS_CAPITALIZE.format({
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
                r = n("819689"),
                a = n("115718"),
                s = n("347895"),
                l = n("341329"),
                u = n("582713"),
                o = n("724210"),
                c = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: a,
                            hasSingleMessageRequest: s
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: u.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: a,
                            channelId: t,
                            details: {
                                type: u.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: s
                            }
                        }), null != n ? r.default.jumpToMessage({
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
                        null != d ? r.default.jumpToMessage({
                            channelId: n,
                            messageId: d,
                            flash: o,
                            jumpType: a.JumpTypes.INSTANT
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
                        }), (null == c ? void 0 : c.initialMessageId) != null ? r.default.jumpToMessage({
                            channelId: s,
                            messageId: c.initialMessageId,
                            flash: o,
                            jumpType: a.JumpTypes.INSTANT
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
                            sidebarType: r,
                            details: a
                        } = e;
                        i.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: r,
                            baseChannelId: n,
                            guildId: t,
                            details: a
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
                    return _
                },
                fetchStickerPacks: function() {
                    return v
                },
                fetchSticker: function() {
                    return S
                },
                fetchGuildStickers: function() {
                    return A
                },
                deleteGuildSticker: function() {
                    return m
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
                    return L
                },
                favoriteSticker: function() {
                    return P
                },
                unfavoriteSticker: function() {
                    return x
                }
            });
            var i = n("427964"),
                r = n.n(i),
                a = n("990746"),
                s = n("913144"),
                l = n("404118"),
                u = n("619443"),
                o = n("915639"),
                c = n("872173"),
                d = n("766274"),
                f = n("341542"),
                p = n("697218"),
                h = n("271560"),
                I = n("364685"),
                E = n("49111"),
                C = n("397336"),
                T = n("782340");
            let _ = async (e, t) => {
                let {
                    body: n
                } = await (0, h.httpGetWithCountryCodeQuery)(E.Endpoints.STICKER_PACK(e));
                return s.default.dispatch({
                    type: "STICKER_PACK_FETCH_SUCCESS",
                    packId: e,
                    pack: n,
                    ingestStickers: t
                }), n
            }, v = async function() {
                let {
                    locale: e = o.default.locale
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (I.default.isFetchingStickerPacks || I.default.hasLoadedStickerPacks) return;
                s.default.wait(() => {
                    s.default.dispatch({
                        type: "STICKER_PACKS_FETCH_START"
                    })
                });
                let {
                    body: {
                        sticker_packs: t
                    }
                } = await (0, h.httpGetWithCountryCodeQuery)({
                    url: E.Endpoints.STICKER_PACKS,
                    query: {
                        locale: e
                    }
                });
                s.default.dispatch({
                    type: "STICKER_PACKS_FETCH_SUCCESS",
                    packs: t
                })
            }, S = async e => {
                let {
                    body: t
                } = await a.default.get({
                    url: E.Endpoints.STICKER(e)
                });
                s.default.dispatch({
                    type: "STICKER_FETCH_SUCCESS",
                    sticker: t
                })
            }, A = async e => {
                let {
                    body: t
                } = await a.default.get({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e)
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
                await a.default.delete({
                    url: E.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                })
            }, g = async (e, t) => {
                let n = await a.default.post({
                    url: E.Endpoints.GUILD_STICKER_PACKS(e),
                    body: t
                });
                return s.default.dispatch({
                    type: "GUILD_STICKERS_CREATE_SUCCESS",
                    guildId: e,
                    sticker: {
                        ...n.body,
                        user: p.default.getCurrentUser()
                    }
                }), n.body
            }, R = async (e, t, n) => {
                let i = await a.default.patch({
                    url: E.Endpoints.GUILD_STICKER(e, t),
                    body: n
                });
                return i.body
            };

            function N(e, t, n) {
                s.default.dispatch({
                    type: "ADD_STICKER_PREVIEW",
                    channelId: e,
                    sticker: t,
                    draftType: n
                })
            }

            function L(e, t) {
                s.default.dispatch({
                    type: "CLEAR_STICKER_PREVIEW",
                    channelId: e,
                    draftType: t
                })
            }

            function y(e) {
                return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
            }

            function P(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = y(t.stickerIds), r.size(t.stickerIds) >= C.MAX_FAVORITES) ? (l.default.show({
                    title: T.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: T.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: C.MAX_FAVORITES
                    })
                }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), C.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function x(e) {
                c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
                    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = y(t.stickerIds)
                }, C.UserSettingsDelay.INFREQUENT_USER_ACTION)
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
                r = n("824563"),
                a = n("27618"),
                s = n("599110"),
                l = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: r,
                        customStatusActivity: a,
                        status: u
                    } = e;
                    s.default.track(l.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != r && (null == r ? void 0 : r.type) !== l.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == r ? void 0 : r.type) === l.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != a,
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
                        u = r.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return s ? t === l.ActivityTypes.PLAYING : t !== l.ActivityTypes.CUSTOM_STATUS
                        }),
                        o = null == u ? void 0 : u.assets,
                        c = a.default.isFriend(n);
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
        405784: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                ApplicationDirectoryCollectionItemType: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.APPLICATION = 1] = "APPLICATION", r[r.LINK = 2] = "LINK"
        },
        595486: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                ApplicationDirectoryCollectionType: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.LIST = 1] = "LIST", r[r.LIST_WITH_IMAGE = 2] = "LIST_WITH_IMAGE", r[r.GALLERY = 3] = "GALLERY"
        },
        86666: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                ApplicationDirectorySearchResultType: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.APPLICATION = 1] = "APPLICATION", r[r.ACTIVITY_APPLICATION = 2] = "ACTIVITY_APPLICATION", r[r.CONNECTION = 3] = "CONNECTION"
        },
        372242: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                ApplicationDirectorySearchType: function() {
                    return i
                }
            }), (r = i || (i = {}))[r.SEARCH_RESULTS = 1] = "SEARCH_RESULTS", r[r.MUSIC = 2] = "MUSIC"
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("498225"),
                r = n("173333"),
                a = n("913144"),
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
                let e = r.default.get(o, null);
                return r.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(a.default, {
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
            var i = n("498225"),
                r = n("913144"),
                a = n("149022"),
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
            var d = new c(r.default, {
                MESSAGE_START_EDIT: function(e) {
                    let {
                        channelId: t,
                        messageId: n,
                        content: i
                    } = e, r = l.UseLegacyChatInput.getSetting(), u = s.default.unparse(i, t);
                    o[t] = {
                        channelId: t,
                        messageId: n,
                        textValue: u,
                        richValue: (0, a.toRichValue)(r ? u : i)
                    }
                },
                MESSAGE_UPDATE_EDIT: function(e) {
                    let {
                        channelId: t,
                        textValue: n,
                        richValue: i
                    } = e, r = o[t];
                    if (null == r) return !1;
                    o[t] = {
                        ...r,
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
            let i, r, a;
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var s, l, u = n("377849"),
                o = n.n(u),
                c = n("498225"),
                d = n("810479"),
                f = n("913144"),
                p = n("21121"),
                h = n("934306"),
                I = n("288518"),
                E = n("486503"),
                C = n("233069"),
                T = n("42203"),
                _ = n("305961"),
                v = n("660478"),
                S = n("282109"),
                A = n("697218"),
                m = n("299039"),
                g = n("724210");
            (s = l || (l = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let R = new d.default(e => {
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

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let i = null !== (n = null !== (t = v.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = o(r).valueOf(),
                            t = m.default.fromTimestamp(e);
                        return m.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: S.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: I.default.isMessageRequest(e.id) || E.default.isSpam(e.id)
                }
            }

            function L() {
                R.clear(), Object.values(T.default.getMutablePrivateChannels()).forEach(e => {
                    R.set(e.id, N(e))
                }), (0, p.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && S.default.getAddedToMessages().forEach(e => {
                    let t = T.default.getChannel(e);
                    null != t && (0, C.isGuildTextChannelType)(t.type) && R.set(t.id, N(t))
                })
            }

            function y() {
                let e = T.default.getMutablePrivateChannels();
                for (let t in e) R.set(t, N(e[t]))
            }
            let P = (i = [], r = [], a = [], () => {
                let e = R.values(l.FAVORITE),
                    t = R.values(l.DEFAULT);
                return (i !== e || r !== t) && (a = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return a.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return a.push(t)
                }), r = t), a
            });
            class x extends c.default.Store {
                initialize() {
                    this.waitFor(T.default, _.default, A.default, I.default, S.default), this.syncWith([S.default, I.default], L)
                }
                getPrivateChannelIds() {
                    return P()
                }
                getSortedChannels() {
                    return [R.values(l.FAVORITE), R.values(l.DEFAULT)]
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
            x.displayName = "PrivateChannelSortStore";
            var M = new x(f.default, {
                CONNECTION_OPEN: L,
                CONNECTION_OPEN_SUPPLEMENTAL: L,
                OVERLAY_INITIALIZE: L,
                CACHE_LOADED: y,
                CACHE_LOADED_LAZY: y,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, C.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, N(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, C.isPrivate)(t.type) || t.id === g.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
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
                    let i = T.default.getChannel(t);
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
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("575482"),
                a = n.n(r),
                s = n("907925"),
                l = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: r,
                        children: l
                    } = e;
                    return (0, i.jsx)("div", {
                        className: a(s.outer, r),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
                            className: s.inner,
                            children: l
                        })
                    })
                }
        },
        265836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("638800");
            class s extends r.Component {
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
                    var n, i, r, a;
                    let {
                        props: s
                    } = this;
                    let l = (n = s, i = this.state, !n.disable && !(i.hovered && n.pauseOnHover));
                    let u = (r = e, a = t, !r.disable && !(a.hovered && r.pauseOnHover));
                    l && !u || e.interval !== s.interval ? this.startTimer() : !l && u && this.stopTimer()
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
                    } = this.props, r = n ? null : {
                        onMouseEnter: this.handlePause,
                        onFocus: this.handlePause,
                        onMouseLeave: this.handleResume,
                        onBlur: this.handleResume
                    };
                    return (0, i.jsx)("div", {
                        ...r,
                        className: t,
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.timer = new a.Interval, this.state = {
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
            s.defaultProps = {
                disable: !1,
                pauseOnHover: !1
            };
            var l = s
        },
        646240: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("920040"),
                r = n("773670"),
                a = n("575482"),
                s = n.n(a),
                l = n("77078"),
                u = n("381546"),
                o = n("229915"),
                c = n("782340"),
                d = n("816094");
            class f extends r.Component {
                render() {
                    let {
                        autoFocus: e,
                        label: t,
                        placeholder: n,
                        searchTerm: r,
                        inputClassName: a,
                        className: f,
                        onChange: p,
                        onFocus: h,
                        onBlur: I,
                        onKeyPress: E,
                        autoComplete: C,
                        forwardedRef: T,
                        closeIconClassName: _,
                        searchIconClassName: v,
                        cta: S
                    } = this.props, A = null != r && r.length > 0, m = null != T ? T : this._textInputRef;
                    return (0, i.jsx)(l.FocusRing, {
                        focusTarget: m,
                        ringTarget: this._containerRef,
                        children: (0, i.jsxs)("div", {
                            className: s(d.searchBox, f),
                            ref: this._containerRef,
                            children: [(0, i.jsx)(l.TextInput, {
                                inputRef: m,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: d.searchBoxInputWrapper,
                                inputClassName: s(d.searchBoxInput, a),
                                onChange: p,
                                onFocus: h,
                                onBlur: I,
                                onKeyPress: E,
                                value: A ? r : "",
                                placeholder: n,
                                autoFocus: e,
                                "aria-label": t,
                                autoComplete: C ? "on" : "off"
                            }), null != S ? (0, i.jsx)(l.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: d.cta,
                                children: S
                            }) : null, A ? (0, i.jsx)(l.Clickable, {
                                onClick: this.handleClear,
                                className: d.clear,
                                "aria-label": c.default.Messages.SEARCH_CLEAR,
                                children: (0, i.jsx)(u.default, {
                                    className: s(d.clearIcon, _)
                                })
                            }) : (0, i.jsx)(o.default, {
                                className: s(d.searchIcon, v),
                                "aria-label": c.default.Messages.SEARCH
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._textInputRef = r.createRef(), this._containerRef = r.createRef(), this.handleClear = () => {
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
            var p = r.forwardRef((e, t) => (0, i.jsx)(f, {
                forwardedRef: t,
                ...e
            }))
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("469563"),
                a = n("35647"),
                s = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon)
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("469563"),
                a = n("772279"),
                s = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: a,
                        foreground: l,
                        ...u
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(u),
                        className: a,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, a.CompassIcon)
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("469563"),
                a = n("533806"),
                s = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: r
                        })
                    })
                }, a.UserIcon)
        },
        849483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("469563"),
                a = n("392646"),
                s = n("75196"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: a,
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsxs)("g", {
                            fill: "none",
                            className: a,
                            children: [(0, i.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 22C12.4883 22 12.9684 21.965 13.438 21.8974C12.5414 20.8489 12 19.4877 12 18C12 17.6593 12.0284 17.3252 12.083 17H6V16.0244C6 14.0732 10 13 12 13C12.6215 13 13.436 13.1036 14.2637 13.305C15.2888 12.4882 16.5874 12 18 12C19.4877 12 20.8489 12.5414 21.8974 13.438C21.965 12.9684 22 12.4883 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12Z",
                                fill: r
                            }), (0, i.jsx)("path", {
                                d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
                                fill: r
                            })]
                        })
                    })
                }, a.UserCircleStatusIcon)
        }
    }
]);
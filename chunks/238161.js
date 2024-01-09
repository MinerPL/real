            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("872717"),
                s = r("151426"),
                c = r("77078"),
                d = r("456015"),
                u = r("872173"),
                h = r("340412"),
                p = r("413709"),
                f = r("830031"),
                m = r("228220"),
                g = r("306160"),
                y = r("719923"),
                b = r("811199"),
                x = r("49111"),
                k = r("646718"),
                v = r("694735"),
                C = r("186720");
            let S = async () => {
                try {
                    let {
                        body: e
                    } = await o.default.get({
                        url: x.Endpoints.USER_OFFER_IDS
                    });
                    return e
                } catch (e) {
                    return []
                }
            }, j = async (e, t) => {
                try {
                    await o.default.post({
                        url: x.Endpoints.CREATE_USER_OFFER(e, t)
                    })
                } catch {} finally {
                    await (0, d.fetchUserOffer)()
                }
            }, T = async (e, t) => {
                try {
                    await o.default.delete({
                        url: x.Endpoints.DELETE_USER_OFFER(e, t)
                    })
                } catch {} finally {
                    await (0, d.fetchUserOffer)()
                }
            }, w = async (e, t) => {
                try {
                    await o.default.post({
                        url: x.Endpoints.UNACK_USER_OFFER(e, t)
                    })
                } catch {} finally {
                    await (0, d.fetchUserOffer)()
                }
            }, N = async () => {
                try {
                    let {
                        body: e
                    } = await o.default.get({
                        url: x.Endpoints.USER_OFFERS
                    });
                    return e
                } catch (e) {
                    return {
                        trial: [],
                        discount: []
                    }
                }
            }, E = async () => {
                try {
                    await o.default.delete({
                        url: x.Endpoints.USER_OFFERS
                    })
                } catch {} finally {
                    await h.default.forceReset(), await (0, d.fetchUserOffer)()
                }
            };

            function L(e) {
                var t, r, i, o;
                let {
                    offer: s,
                    offerOptions: u,
                    forceRefetch: h
                } = e, [b, x] = n.useState(!1), [v, S] = n.useState(!1), [j, N] = n.useState(!1), [E, L] = n.useState(!1);
                n.useEffect(() => {
                    j && L(!0);
                    let e = setTimeout(() => {
                        L(!1)
                    }, 500);
                    return () => {
                        clearTimeout(e)
                    }
                }, [j]);
                let {
                    id: _,
                    expires_at: A,
                    redeemed_at: R,
                    trial_id: P,
                    subscription_trial: O
                } = s, I = null !== (r = null === (t = u.find(e => {
                    let {
                        value: t
                    } = e;
                    return t === P
                })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", M = null != A, B = null != A && new Date(A).getTime() < Date.now(), D = (null == O ? void 0 : O.sku_id) === k.PremiumSubscriptionSKUs.TIER_0, H = async () => {
                    N(!0), M ? await w(_, "trial") : await (0, d.acknowledgeUserOffer)(s), h(), N(!1)
                };
                n.useEffect(() => {
                    if (b) {
                        let e = setTimeout(() => {
                            x(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                    if (v) {
                        let e = setTimeout(() => {
                            S(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [b, v]);
                let G = "Active";
                return M && (G = "Acknowledged"), B && (G = "Expired"), (0, a.jsxs)("div", {
                    className: l(C.card, D ? C.gradientWrapperTier0 : C.gradientWrapperTier2),
                    children: [(0, a.jsxs)("div", {
                        className: l(C.row, C.nameRow),
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            color: "always-white",
                            children: I
                        }), (0, a.jsx)(c.Clickable, {
                            onClick: async () => {
                                N(!0), await T(_, "trial"), h(), N(!1)
                            },
                            children: (0, a.jsx)(m.default, {
                                className: l(C.icon, C.trashIcon)
                            })
                        })]
                    }), (0, a.jsxs)(c.Clickable, {
                        className: l(C.row, C.idRow),
                        onClick: () => {
                            (0, g.copy)(_), x(!0)
                        },
                        children: [(0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Offer: ", _]
                        }), b ? (0, a.jsx)(f.default, {
                            className: l(C.icon, C.noMargin)
                        }) : (0, a.jsx)(p.default, {
                            className: C.icon
                        })]
                    }), (0, a.jsxs)(c.Clickable, {
                        className: l(C.row, C.idRow),
                        onClick: () => {
                            (0, g.copy)(P), S(!0)
                        },
                        children: [(0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial: ", P]
                        }), v ? (0, a.jsx)(f.default, {
                            className: l(C.icon, C.noMargin)
                        }) : (0, a.jsx)(p.default, {
                            className: C.icon
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Trial Length:", " ", (0, y.formatIntervalDuration)({
                                intervalType: null !== (i = null == O ? void 0 : O.interval) && void 0 !== i ? i : k.SubscriptionIntervalTypes.MONTH,
                                intervalCount: null !== (o = null == O ? void 0 : O.interval_count) && void 0 !== o ? o : 1,
                                capitalize: !1
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: C.badgeContainer,
                        children: [(0, a.jsx)(c.Clickable, {
                            onClick: H,
                            className: l(C.badge, C.clickable, {
                                [C.acked]: M,
                                [C.expired]: B
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acknowledged" === G ? void 0 : "always-white",
                                children: G
                            })
                        }), null != R && (0, a.jsx)("div", {
                            className: l(C.badge, C.badgeBottom, C.redeemed),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "always-white",
                                children: "Redeemed"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: l(C.loadingContainer, {
                            [C.isLoading]: j || E
                        }),
                        children: (0, a.jsx)(c.Spinner, {})
                    })]
                })
            }

            function _(e) {
                var t, r;
                let {
                    offer: i,
                    offerOptions: o,
                    forceRefetch: s
                } = e, [u, h] = n.useState(!1), [y, b] = n.useState(!1), [x, k] = n.useState(!1), [v, S] = n.useState(!1);
                n.useEffect(() => {
                    x && S(!0);
                    let e = setTimeout(() => {
                        S(!1)
                    }, 500);
                    return () => {
                        clearTimeout(e)
                    }
                }, [x]);
                let {
                    id: j,
                    expires_at: N,
                    applied_at: E,
                    discount_id: L,
                    discount: _
                } = i, A = null !== (r = null === (t = o.find(e => {
                    let {
                        value: t
                    } = e;
                    return t === L
                })) || void 0 === t ? void 0 : t.label) && void 0 !== r ? r : "Unknown", R = null != N, P = null != N && new Date(N).getTime() < Date.now(), O = async () => {
                    k(!0), R ? await w(j, "discount") : await (0, d.acknowledgeUserOffer)(void 0, i), s(), k(!1)
                };
                n.useEffect(() => {
                    if (u) {
                        let e = setTimeout(() => {
                            h(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                    if (y) {
                        let e = setTimeout(() => {
                            b(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(e)
                        }
                    }
                }, [u, y]);
                let I = "Active";
                return P && (I = "Expired"), R && (I = "Acknowledged"), (0, a.jsxs)("div", {
                    className: l(C.card, C.discount),
                    children: [(0, a.jsxs)("div", {
                        className: l(C.row, C.nameRow),
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-normal",
                            children: A
                        }), (0, a.jsx)(c.Clickable, {
                            onClick: async () => {
                                k(!0), await T(j, "discount"), s(), k(!1)
                            },
                            children: (0, a.jsx)(m.default, {
                                className: l(C.icon, C.trashIcon)
                            })
                        })]
                    }), (0, a.jsxs)(c.Clickable, {
                        className: l(C.row, C.idRow),
                        onClick: () => {
                            (0, g.copy)(j), h(!0)
                        },
                        children: [(0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-normal",
                            children: ["Offer: ", j]
                        }), u ? (0, a.jsx)(f.default, {
                            className: l(C.icon, C.noMargin)
                        }) : (0, a.jsx)(p.default, {
                            className: C.icon
                        })]
                    }), (0, a.jsxs)(c.Clickable, {
                        className: l(C.row, C.idRow),
                        onClick: () => {
                            (0, g.copy)(L), b(!0)
                        },
                        children: [(0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-normal",
                            children: ["Discount: ", L]
                        }), y ? (0, a.jsx)(f.default, {
                            className: l(C.icon, C.noMargin)
                        }) : (0, a.jsx)(p.default, {
                            className: C.icon
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsxs)(c.Text, {
                            variant: "eyebrow",
                            color: "text-normal",
                            children: [_.amount, "% off"]
                        })
                    }), (0, a.jsxs)("div", {
                        className: C.badgeContainer,
                        children: [(0, a.jsx)(c.Clickable, {
                            onClick: O,
                            className: l(C.badge, C.clickable, {
                                [C.acked]: R,
                                [C.expired]: P
                            }),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "Acknowledged" === I ? void 0 : "always-white",
                                children: I
                            })
                        }), null != E && (0, a.jsx)("div", {
                            className: l(C.badge, C.badgeBottom, C.redeemed),
                            children: (0, a.jsx)(c.Text, {
                                variant: "eyebrow",
                                color: "always-white",
                                children: "Applied"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: l(C.loadingContainer, {
                            [C.isLoading]: x || v
                        }),
                        children: (0, a.jsx)(c.Spinner, {})
                    })]
                })
            }

            function A() {
                let [e, t] = n.useState([]), [r, i] = n.useState([]), [o, p] = n.useState(), [f, m] = n.useState(), [g, y] = n.useState([]), [x, k] = n.useState([]), [T, w] = n.useState(!0);
                n.useEffect(() => {
                    (0 === e.length || 0 === r.length || T) && S().then(e => {
                        let r = Object.keys(e.trial).map(t => ({
                                label: t,
                                value: e.trial[t]
                            })),
                            a = Object.keys(e.discount).map(t => ({
                                label: t,
                                value: e.discount[t]
                            }));
                        t(r), i(a), null == o && p(r[0].value), null == f && m(a[0].value)
                    })
                }, [e, r, o, f, T]), n.useEffect(() => {
                    T && (w(!1), h.default.forceReset(), (0, d.fetchUserOffer)(), N().then(e => {
                        let t = e.trial.sort((e, t) => e.id.localeCompare(t.id));
                        y(t);
                        let r = e.discount.sort((e, t) => e.id.localeCompare(t.id));
                        k(r)
                    }))
                }, [T]);
                let A = async () => {
                    null != o && (await j(o, "trial"), w(!0))
                }, R = async () => {
                    null != f && (await j(f, "discount"), w(!0))
                }, P = async () => {
                    await E(), w(!0)
                };
                return (0, a.jsx)(c.ScrollerThin, {
                    className: l(v.panel),
                    children: (0, a.jsxs)("div", {
                        className: C.panelInner,
                        children: [(0, a.jsxs)("section", {
                            className: C.section,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Utils"
                            }), (0, a.jsxs)("div", {
                                className: C.buttons,
                                children: [(0, a.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: P,
                                    children: "Clear all User Offers"
                                }), (0, a.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: () => (0, u.removeDismissedContent)(s.DismissibleContent.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    children: "Clear Mobile Trials DismissibleContent"
                                }), (0, a.jsx)(c.Button, {
                                    size: c.Button.Sizes.SMALL,
                                    onClick: () => w(!0),
                                    children: "Refresh DevTools"
                                })]
                            })]
                        }), (0, a.jsxs)("section", {
                            className: C.section,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Create a Trial Offer"
                            }), (0, a.jsxs)("div", {
                                className: C.inputRow,
                                children: [(0, a.jsx)(c.Select, {
                                    className: C.input,
                                    options: e,
                                    isSelected: e => o === e,
                                    placeholder: "Trial Type",
                                    serialize: e => String(e),
                                    select: e => p(e),
                                    popoutLayerContext: b.devToolsLayerContext
                                }), (0, a.jsx)(c.Button, {
                                    onClick: A,
                                    children: "Create"
                                })]
                            })]
                        }), (0, a.jsxs)("section", {
                            className: C.section,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Create a Discount Offer"
                            }), (0, a.jsxs)("div", {
                                className: C.inputRow,
                                children: [(0, a.jsx)(c.Select, {
                                    className: C.input,
                                    options: r,
                                    isSelected: e => f === e,
                                    placeholder: "Discount Type",
                                    serialize: e => String(e),
                                    select: e => m(e),
                                    popoutLayerContext: b.devToolsLayerContext
                                }), (0, a.jsx)(c.Button, {
                                    onClick: R,
                                    children: "Create"
                                })]
                            })]
                        }), g.length > 0 && (0, a.jsxs)("section", {
                            className: C.section,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Trial Offers"
                            }), g.map(t => (0, a.jsx)(L, {
                                offer: t,
                                offerOptions: e,
                                forceRefetch: () => w(!0)
                            }, t.id))]
                        }), x.length > 0 && (0, a.jsxs)("section", {
                            className: C.section,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                children: "Existing Discount Offers"
                            }), x.map(e => (0, a.jsx)(_, {
                                offer: e,
                                offerOptions: r,
                                forceRefetch: () => w(!0)
                            }, e.id))]
                        })]
                    })
                })
            }
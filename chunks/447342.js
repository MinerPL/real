            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("627445"),
                l = n.n(i),
                r = n("65597"),
                o = n("77078"),
                u = n("462579"),
                d = n("266926"),
                c = n("599110"),
                E = n("299039"),
                f = n("822825"),
                _ = n("117933"),
                h = n("368874"),
                C = n("648750"),
                T = n("710514"),
                I = n("339853"),
                S = n("775032"),
                N = n("25132"),
                A = n("453479"),
                p = n("975344"),
                m = n("57"),
                g = n("863972"),
                R = n("884706"),
                O = n("424373"),
                L = n("922832"),
                v = n("49111"),
                M = n("782340"),
                P = n("354591");

            function D() {
                let e = s.useCallback(() => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("538969").then(n.bind(n, "538969"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                }, []);
                return (0, a.jsx)(o.Clickable, {
                    className: P.tooltip,
                    onClick: e,
                    children: (0, a.jsx)(d.default, {
                        className: P.icon,
                        width: 15,
                        height: 15
                    })
                })
            }

            function y(e) {
                let {
                    displayType: t
                } = e, n = s.useCallback(() => {
                    (0, o.showToast)((0, o.createToast)(M.default.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, o.ToastType.FAILURE))
                }, []), i = (0, S.default)(), r = (0, T.useActionsForDisplayType)(t), u = (0, T.useActionTotalsForDisplayType)(t), {
                    loadMore: d,
                    isMoreLoading: c
                } = (0, C.useFamilyCenterActions)({
                    onError: n
                }), f = L.ACTION_TO_TEXT.get(t), [h, I] = s.useState(L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), N = s.useCallback(() => {
                    I(e => e + L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS), d(t)
                }, [t, d]);
                l(f, "No text for action type");
                let A = f.sectionHeader(u),
                    g = s.useCallback(e => {
                        let {
                            row: t
                        } = e, n = r[t];
                        return (0, _.isUserAction)(n) ? (0, a.jsx)(m.default, {
                            userId: n.entity_id,
                            timestamp: E.default.extractTimestamp(n.event_id),
                            timestampFormatter: f.timestampFormatter
                        }, n.event_id) : (0, _.isGuildAction)(n) ? (0, a.jsx)(p.default, {
                            guildId: n.entity_id
                        }, n.event_id) : void 0
                    }, [r, f.timestampFormatter]),
                    R = s.useCallback(() => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o.Text, {
                            className: P.sectionHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: A
                        }), void 0 !== f.sectionDescription ? (0, a.jsx)(o.Text, {
                            className: P.sectionDescription,
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: f.sectionDescription(null != i && i)
                        }) : null]
                    }), [A, f, i]);
                if (0 === r.length) return null;
                let O = r.slice(0, h);
                return (0, a.jsxs)("div", {
                    className: P.actionSection,
                    children: [R(), (0, a.jsx)("div", {
                        className: P.actions,
                        style: {
                            maxHeight: 65 * O.length
                        },
                        children: O.map((e, t) => g({
                            row: t
                        }))
                    }), O.length !== u ? (0, a.jsx)(o.Clickable, {
                        className: P.loadMoreBar,
                        onClick: N,
                        role: "button",
                        children: c ? (0, a.jsx)(o.Spinner, {
                            type: o.Spinner.Type.PULSING_ELLIPSIS,
                            className: P.spinner
                        }) : (0, a.jsx)(o.Text, {
                            className: P.loadMore,
                            variant: "text-sm/bold",
                            children: M.default.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({
                                pageSize: Math.min(u - O.length, L.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS)
                            })
                        })
                    }) : null]
                })
            }
            let x = () => {
                    let e = (0, S.default)(),
                        t = (0, N.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE),
                        n = (0, h.useAgeSpecificText)(M.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({
                            activeLinks: t.length
                        }), M.default.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
                        s = (0, _.getActivityWindowTimestampFormatter)(!!e),
                        i = (0, N.useActivityWindowTimeStamp)(s);
                    return e && t.length > 1 ? (0, a.jsx)(o.Text, {
                        variant: "eyebrow",
                        children: i
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [e ? null : (0, a.jsx)(u.default, {
                            className: P.icon
                        }), (0, a.jsx)(o.Text, {
                            variant: "eyebrow",
                            children: n
                        })]
                    })
                },
                b = e => {
                    let {
                        userId: t,
                        subText: n,
                        avatarSize: s = o.AvatarSizes.SIZE_40
                    } = e, i = (0, I.useTeenUserForId)(t);
                    return void 0 === i ? null : (0, a.jsxs)("div", {
                        className: P.accountRow,
                        children: [(0, a.jsx)(g.FamilyCenterAvatar, {
                            user: i,
                            avatarSize: s
                        }), (0, a.jsxs)("div", {
                            className: P.headerText,
                            children: [(0, a.jsx)(R.default, {
                                user: i
                            }), void 0 !== n ? (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: n
                            }) : null]
                        })]
                    })
                },
                U = () => {
                    let e = (0, N.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE),
                        t = (0, r.default)([f.default], () => f.default.getSelectedTeenId()),
                        {
                            selectTeenUser: n
                        } = (0, C.useFamilyCenterActions)({}),
                        i = e.map(e => ({
                            label: e.id,
                            value: e.id
                        })),
                        l = s.useCallback(e => (0, a.jsx)(b, {
                            userId: e.value,
                            avatarSize: o.AvatarSizes.SIZE_24
                        }), []);
                    return (0, a.jsx)(o.Select, {
                        className: P.select,
                        renderOptionLabel: l,
                        renderOptionValue: e => {
                            let [t] = e;
                            return l(t)
                        },
                        serialize: e => e,
                        select: e => {
                            n(e), c.default.track(v.AnalyticEvents.FAMILY_CENTER_ACTION, {
                                action: L.FamilyCenterAction.SelectTeen
                            })
                        },
                        isSelected: e => e === t,
                        options: i
                    })
                },
                G = e => {
                    let {
                        userId: t
                    } = e, n = (0, S.default)(), s = (0, N.useUserForLinkStatus)(L.UserLinkStatus.ACTIVE), i = (0, _.getActivityWindowTimestampFormatter)(!!n), l = (0, N.useActivityWindowTimeStamp)(i);
                    return n && 1 !== s.length ? (0, a.jsx)(U, {}) : (0, a.jsx)(b, {
                        userId: t,
                        subText: l
                    })
                };
            var j = e => {
                let {
                    user: t
                } = e, n = Array.from(L.ACTION_TO_TEXT.entries()), s = (0, T.useHasActionForAnyDisplayType)(), i = (0, _.getEmptyActivityFormatter)(), l = (0, N.useActivityWindowTimeStamp)(i);
                return (0, a.jsxs)("div", {
                    className: P.container,
                    children: [(0, a.jsxs)("div", {
                        className: P.connectedCounter,
                        children: [(0, a.jsx)(x, {}), (0, a.jsx)(D, {})]
                    }), (0, a.jsxs)("div", {
                        className: P.card,
                        children: [(0, a.jsx)("div", {
                            className: P.header,
                            children: (0, a.jsx)(G, {
                                userId: t.id
                            })
                        }), (0, a.jsxs)("div", {
                            className: P.content,
                            children: [(0, a.jsx)("div", {
                                className: P.activityCounterRow,
                                children: n.map(e => {
                                    let [t, n] = e;
                                    return (0, a.jsx)(A.default, {
                                        displayType: t,
                                        header: n.tooltipHeader()
                                    }, "counter-".concat(t))
                                })
                            }), (0, a.jsx)("div", {
                                className: P.activityOverview,
                                children: s ? n.map(e => {
                                    let [t] = e;
                                    return (0, a.jsx)(y, {
                                        displayType: t
                                    }, "".concat(t, "-list"))
                                }) : (0, a.jsx)(O.default, {
                                    className: P.emptyActivity,
                                    text: null != l ? l : ""
                                })
                            })]
                        })]
                    })]
                })
            }
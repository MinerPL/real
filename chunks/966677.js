            "use strict";
            a.r(e), a.d(e, {
                ConnectedSafetyHubViolationsContainer: function() {
                    return U
                }
            }), a("222007");
            var n = a("37983"),
                i = a("884691"),
                s = a("414456"),
                l = a.n(s),
                r = a("779807"),
                c = a("77078"),
                u = a("461380"),
                o = a("543289"),
                d = a("300113"),
                _ = a("599110"),
                S = a("299039"),
                f = a("667963"),
                T = a("736393"),
                E = a("310888"),
                A = a("132206"),
                I = a("698609"),
                g = a("170213"),
                N = a("49111"),
                m = a("782340"),
                C = a("231180");
            let h = t => {
                    let {
                        status: e,
                        onClick: a,
                        opened: i,
                        count: s
                    } = t;
                    return (0, n.jsxs)(c.Clickable, {
                        className: C.header,
                        onClick: a,
                        children: [(0, n.jsx)("div", {
                            className: C.headerIconWrapper,
                            children: (0, n.jsx)(r.WarningIcon, {
                                color: "active" === e ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_MUTED,
                                width: 24,
                                height: 24
                            })
                        }), (0, n.jsxs)("div", {
                            className: C.title,
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-normal",
                                children: "active" === e ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE.format({
                                    count: s.toString()
                                }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED.format({
                                    count: s.toString()
                                })
                            }), (0, n.jsx)(c.Heading, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "active" === e ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED
                            })]
                        }), (0, n.jsx)("div", {
                            className: C.caret,
                            children: (0, n.jsx)(u.default, {
                                width: 18,
                                height: 18,
                                direction: i ? u.default.Directions.UP : u.default.Directions.DOWN
                            })
                        })]
                    })
                },
                x = () => (0, n.jsxs)("div", {
                    className: C.emptyState,
                    children: [(0, n.jsxs)("div", {
                        className: C.iconContainer,
                        children: [(0, n.jsx)("div", {
                            className: C.iconBackground,
                            children: (0, n.jsx)(d.default, {
                                className: C.icon
                            })
                        }), (0, n.jsx)(o.default, {
                            className: C.stars
                        })]
                    }), (0, n.jsx)(c.Heading, {
                        variant: "heading-md/bold",
                        className: C.emptyStateText,
                        children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
                    }), (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: C.emptyStateSubtext,
                        children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
                    })]
                }),
                p = () => (0, n.jsx)("div", {
                    className: C.emptyState,
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: C.emptyStateSubtext,
                        children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
                    })
                }),
                H = t => {
                    let {
                        timestamp: e
                    } = t;
                    return (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: C.timestamp,
                        children: (0, T.getClassificationRelativeIncidentTime)(e)
                    })
                },
                D = () => (0, n.jsx)(c.Text, {
                    variant: "text-xs/bold",
                    className: C.newBadge,
                    children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
                }),
                O = t => {
                    var e;
                    let {
                        classification: i
                    } = t, {
                        id: s,
                        description: r,
                        max_expiration_time: u
                    } = i, o = S.default.extractTimestamp(s), d = (0, E.useIsNewClassification)(i), _ = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("violations_container"), T = new Date(u), A = T.toDateString();
                    return (0, n.jsx)(c.Clickable, {
                        onClick: () => {
                            (0, c.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("825138").then(a.bind(a, "825138"));
                                return e => (0, n.jsx)(t, {
                                    classificationId: s,
                                    source: g.SafetyHubAnalyticsActionSource.StandingTab,
                                    ...e
                                })
                            })
                        },
                        className: l(C.itemDetail, {
                            [C.itemDetailNew]: d
                        }),
                        children: (0, n.jsxs)("div", {
                            className: C.descriptionContainer,
                            children: [d ? (0, n.jsx)(D, {}) : (0, n.jsx)(H, {
                                timestamp: o
                            }), (0, n.jsx)(c.Heading, {
                                variant: "heading-lg/normal",
                                children: _ && null != i.guild_metadata ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
                                    guildName: null == i ? void 0 : null === (e = i.guild_metadata) || void 0 === e ? void 0 : e.guild_name,
                                    description: r,
                                    descriptionHook: t => (0, n.jsx)(c.Text, {
                                        tag: "span",
                                        variant: "heading-lg/bold",
                                        children: t
                                    })
                                }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
                                    description: r,
                                    descriptionHook: t => (0, n.jsx)(c.Text, {
                                        tag: "span",
                                        variant: "heading-lg/bold",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: C.expirationDate,
                                children: T > new Date ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
                                    expirationDate: A
                                }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
                                    expirationDate: A
                                })
                            })]
                        })
                    }, s)
                },
                v = t => {
                    let {
                        status: e,
                        classifications: a
                    } = t, [s, l] = i.useState(!1), [r, u] = i.useState(3), o = (0, A.useSafetyHubAccountStanding)(), d = i.useMemo(() => a.slice(0, r), [a, r]);
                    i.useEffect(() => {
                        s && _.default.track(N.AnalyticEvents.SAFETY_HUB_ACTION, {
                            action: g.SafetyHubAnalyticsActions.ViewViolationsDropdown,
                            account_standing: o.state,
                            classification_ids: d.map(t => Number(t.id)),
                            source: g.SafetyHubAnalyticsActionSource.StandingTab,
                            is_violative_content_shown: !1
                        })
                    }, [s, o.state, d]);
                    let S = a.length - d.length > 3 ? 3 : a.length - d.length;
                    return (0, n.jsxs)("div", {
                        className: C.dropdown,
                        children: [(0, n.jsx)(h, {
                            status: e,
                            onClick: () => l(t => !t),
                            opened: s,
                            count: a.length
                        }), s && (0, n.jsxs)("div", {
                            className: C.items,
                            children: [(0, n.jsx)(c.TabBar.Separator, {
                                style: {
                                    height: "1px",
                                    width: "100%"
                                }
                            }), d.length > 0 && d.map(t => (0, n.jsx)(O, {
                                classification: t
                            }, t.id)), d.length < a.length && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(c.TabBar.Separator, {
                                    style: {
                                        height: "1px",
                                        width: "100%"
                                    }
                                }), (0, n.jsx)("button", {
                                    className: C.paginationButton,
                                    onClick: () => u(t => t + S),
                                    children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
                                        nextPageSize: S
                                    })
                                })]
                            }), 0 === d.length && "active" === e && (0, n.jsx)(x, {}), 0 === d.length && "expired" === e && (0, n.jsx)(p, {})]
                        })]
                    })
                },
                U = () => {
                    let t = (0, I.useActiveSafetyHubClassifications)(),
                        e = (0, I.useExpiredSafetyHubClassifications)();
                    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(v, {
                            status: "active",
                            classifications: t
                        }), (0, n.jsx)(v, {
                            status: "expired",
                            classifications: e
                        })]
                    })
                }
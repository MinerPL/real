            "use strict";
            a.r(e), a.d(e, {
                ConnectedSafetyHubViolationsContainer: function() {
                    return U
                }
            }), a("222007");
            var n = a("37983"),
                s = a("884691"),
                i = a("414456"),
                l = a.n(i),
                r = a("779807"),
                c = a("77078"),
                u = a("461380"),
                o = a("543289"),
                d = a("300113"),
                _ = a("599110"),
                S = a("299039"),
                f = a("736393"),
                T = a("310888"),
                A = a("132206"),
                E = a("698609"),
                I = a("170213"),
                g = a("49111"),
                N = a("782340"),
                m = a("231180");
            let C = t => {
                    let {
                        status: e,
                        onClick: a,
                        opened: s,
                        count: i
                    } = t;
                    return (0, n.jsxs)(c.Clickable, {
                        className: m.header,
                        onClick: a,
                        children: [(0, n.jsx)("div", {
                            className: m.headerIconWrapper,
                            children: (0, n.jsx)(r.WarningIcon, {
                                color: "active" === e ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_MUTED,
                                width: 24,
                                height: 24
                            })
                        }), (0, n.jsxs)("div", {
                            className: m.title,
                            children: [(0, n.jsx)(c.Heading, {
                                variant: "heading-md/semibold",
                                color: "text-normal",
                                children: "active" === e ? N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE.format({
                                    count: i.toString()
                                }) : N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED.format({
                                    count: i.toString()
                                })
                            }), (0, n.jsx)(c.Heading, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "active" === e ? N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE : N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED
                            })]
                        }), (0, n.jsx)("div", {
                            className: m.caret,
                            children: (0, n.jsx)(u.default, {
                                width: 18,
                                height: 18,
                                direction: s ? u.default.Directions.UP : u.default.Directions.DOWN
                            })
                        })]
                    })
                },
                h = () => (0, n.jsxs)("div", {
                    className: m.emptyState,
                    children: [(0, n.jsxs)("div", {
                        className: m.iconContainer,
                        children: [(0, n.jsx)("div", {
                            className: m.iconBackground,
                            children: (0, n.jsx)(d.default, {
                                className: m.icon
                            })
                        }), (0, n.jsx)(o.default, {
                            className: m.stars
                        })]
                    }), (0, n.jsx)(c.Heading, {
                        variant: "heading-md/bold",
                        className: m.emptyStateText,
                        children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
                    }), (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: m.emptyStateSubtext,
                        children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
                    })]
                }),
                x = () => (0, n.jsx)("div", {
                    className: m.emptyState,
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: m.emptyStateSubtext,
                        children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
                    })
                }),
                H = t => {
                    let {
                        timestamp: e
                    } = t;
                    return (0, n.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: m.timestamp,
                        children: (0, f.getClassificationRelativeIncidentTime)(e)
                    })
                },
                O = () => (0, n.jsx)(c.Text, {
                    variant: "text-xs/bold",
                    className: m.newBadge,
                    children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
                }),
                p = t => {
                    var e;
                    let {
                        classification: s
                    } = t, {
                        id: i,
                        description: r,
                        max_expiration_time: u
                    } = s, o = S.default.extractTimestamp(i), d = (0, T.useIsNewClassification)(s), _ = new Date(u), f = _.toDateString();
                    return (0, n.jsx)(c.Clickable, {
                        onClick: () => {
                            (0, c.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("825138").then(a.bind(a, "825138"));
                                return e => (0, n.jsx)(t, {
                                    classificationId: i,
                                    source: I.SafetyHubAnalyticsActionSource.StandingTab,
                                    ...e
                                })
                            })
                        },
                        className: l(m.itemDetail, {
                            [m.itemDetailNew]: d
                        }),
                        children: (0, n.jsxs)("div", {
                            className: m.descriptionContainer,
                            children: [d ? (0, n.jsx)(O, {}) : (0, n.jsx)(H, {
                                timestamp: o
                            }), (0, n.jsx)(c.Heading, {
                                variant: "heading-lg/normal",
                                children: null != s.guild_metadata ? N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
                                    guildName: null == s ? void 0 : null === (e = s.guild_metadata) || void 0 === e ? void 0 : e.guild_name,
                                    description: r,
                                    descriptionHook: t => (0, n.jsx)(c.Text, {
                                        tag: "span",
                                        variant: "heading-lg/bold",
                                        children: t
                                    })
                                }) : N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
                                    description: r,
                                    descriptionHook: t => (0, n.jsx)(c.Text, {
                                        tag: "span",
                                        variant: "heading-lg/bold",
                                        children: t
                                    })
                                })
                            }), (0, n.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: m.expirationDate,
                                children: _ > new Date ? N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
                                    expirationDate: f
                                }) : N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
                                    expirationDate: f
                                })
                            })]
                        })
                    }, i)
                },
                D = t => {
                    let {
                        status: e,
                        classifications: a
                    } = t, [i, l] = s.useState(!1), [r, u] = s.useState(3), o = (0, A.useSafetyHubAccountStanding)(), d = s.useMemo(() => a.slice(0, r), [a, r]);
                    s.useEffect(() => {
                        i && _.default.track(g.AnalyticEvents.SAFETY_HUB_ACTION, {
                            action: I.SafetyHubAnalyticsActions.ViewViolationsDropdown,
                            account_standing: o.state,
                            classification_ids: d.map(t => Number(t.id)),
                            source: I.SafetyHubAnalyticsActionSource.StandingTab,
                            is_violative_content_shown: !1
                        })
                    }, [i, o.state, d]);
                    let S = a.length - d.length > 3 ? 3 : a.length - d.length;
                    return (0, n.jsxs)("div", {
                        className: m.dropdown,
                        children: [(0, n.jsx)(C, {
                            status: e,
                            onClick: () => l(t => !t),
                            opened: i,
                            count: a.length
                        }), i && (0, n.jsxs)("div", {
                            className: m.items,
                            children: [(0, n.jsx)(c.TabBar.Separator, {
                                style: {
                                    height: "1px",
                                    width: "100%"
                                }
                            }), d.length > 0 && d.map(t => (0, n.jsx)(p, {
                                classification: t
                            }, t.id)), d.length < a.length && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(c.TabBar.Separator, {
                                    style: {
                                        height: "1px",
                                        width: "100%"
                                    }
                                }), (0, n.jsx)("button", {
                                    className: m.paginationButton,
                                    onClick: () => u(t => t + S),
                                    children: N.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
                                        nextPageSize: S
                                    })
                                })]
                            }), 0 === d.length && "active" === e && (0, n.jsx)(h, {}), 0 === d.length && "expired" === e && (0, n.jsx)(x, {})]
                        })]
                    })
                },
                U = () => {
                    let t = (0, E.useActiveSafetyHubClassifications)(),
                        e = (0, E.useExpiredSafetyHubClassifications)();
                    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(D, {
                            status: "active",
                            classifications: t
                        }), (0, n.jsx)(D, {
                            status: "expired",
                            classifications: e
                        })]
                    })
                }
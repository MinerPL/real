            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("355262"),
                o = n("77078"),
                u = n("302437"),
                d = n("826684"),
                c = n("368874"),
                E = n("652126"),
                f = n("775032"),
                _ = n("25132"),
                h = n("424373"),
                C = n("806468"),
                I = n("863023"),
                T = n("299387"),
                S = n("154640"),
                N = n("922832"),
                A = n("782340"),
                m = n("563662"),
                p = n("926622"),
                g = n("371997");

            function R(e) {
                let {
                    header: t,
                    description: n,
                    stepNumber: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: m.step,
                    children: [(0, a.jsx)("div", {
                        className: m.stepNumber,
                        children: (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-brand",
                            children: (0, a.jsx)(o.HeadingLevel, {
                                children: s
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(o.Heading, {
                            variant: "heading-sm/bold",
                            children: (0, a.jsx)(o.HeadingLevel, {
                                children: t
                            })
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: n
                        })]
                    })]
                })
            }

            function O() {
                return (0, a.jsxs)("div", {
                    className: l(m.box, m.linkingBanner, m.linkingBannerParent),
                    children: [(0, a.jsxs)("div", {
                        className: l(m.linkingBannerUpper),
                        children: [(0, a.jsxs)("div", {
                            className: m.header,
                            children: [(0, a.jsx)(o.Heading, {
                                className: p.marginBottom8,
                                variant: "heading-xl/medium",
                                children: (0, a.jsx)(o.HeadingLevel, {
                                    children: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_PARENT
                                })
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: p.marginBottom20,
                                children: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_PARENT
                            })]
                        }), (0, a.jsx)("img", {
                            className: m.bannerArt,
                            src: g,
                            alt: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
                        })]
                    }), (0, a.jsxs)("div", {
                        className: m.steps,
                        children: [(0, a.jsx)(R, {
                            header: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_HEADER,
                            description: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_1_DESCRIPTION,
                            stepNumber: 1
                        }), (0, a.jsx)(R, {
                            header: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_HEADER,
                            description: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_2_DESCRIPTION,
                            stepNumber: 2
                        }), (0, a.jsx)(R, {
                            header: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_HEADER,
                            description: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_PARENT_STEP_3_DESCRIPTION,
                            stepNumber: 3
                        })]
                    })]
                })
            }

            function L() {
                let e = (0, _.useHasMaxConnections)();
                return (0, a.jsxs)("div", {
                    className: l(m.box, m.linkingBanner),
                    children: [(0, a.jsxs)("div", {
                        children: [(0, a.jsx)(o.Heading, {
                            className: p.marginBottom8,
                            variant: "heading-xl/medium",
                            children: (0, a.jsx)(o.HeadingLevel, {
                                children: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_HEADER_TEEN
                            })
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            className: p.marginBottom20,
                            children: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_DESCRIPTION_TEEN.format({
                                link: "https://support.discord.com/hc/articles/14155060633623"
                            })
                        }), e ? null : (0, a.jsx)(C.default, {})]
                    }), (0, a.jsx)("img", {
                        className: m.bannerArt,
                        src: g,
                        alt: A.default.Messages.FAMILY_CENTER_REQUESTS_LINKING_BANNER_TEEN_ASSET_ALT
                    })]
                })
            }

            function v(e) {
                let {
                    sectionType: t,
                    sectionTitle: n,
                    requests: i
                } = e, l = s.useRef(null), c = "".concat(t, "-list"), E = (0, u.default)(c), f = s.useCallback(e => {
                    let {
                        row: n,
                        listIndex: s
                    } = e, l = i[n], r = s === i.length;
                    return null == l ? null : (0, a.jsx)(S.default, {
                        userId: l.id,
                        isLast: r,
                        children: () => t === N.UserLinkStatus.ACTIVE ? (0, a.jsx)(I.UserLinkAcceptedRequestRow, {
                            user: l
                        }) : (0, a.jsx)(T.UserLinkPendingRequestRow, {
                            user: l
                        })
                    }, l.id)
                }, [i, t]), _ = s.useCallback(() => (0, a.jsx)(d.default, {
                    className: m.sectionTitle,
                    children: (0, a.jsx)(o.Text, {
                        className: p.marginBottom8,
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: n
                    })
                }, "title"), [n]);
                return (0, a.jsx)("div", {
                    className: m.section,
                    children: (0, a.jsx)(r.ListNavigatorProvider, {
                        navigator: E,
                        children: (0, a.jsx)(r.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    role: s,
                                    ...r
                                } = e;
                                return (0, a.jsx)(o.List, {
                                    className: m.list,
                                    innerRole: s,
                                    innerAriaLabel: n,
                                    ref: e => {
                                        var n;
                                        l.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    },
                                    sectionHeight: N.FAMILY_CENTER_REQUEST_SECTION_HEIGHT,
                                    rowHeight: N.FAMILY_CENTER_REQUEST_ROW_HEIGHT,
                                    renderSection: _,
                                    renderRow: f,
                                    sections: [i.length],
                                    chunkSize: 30,
                                    fade: !0,
                                    ...r
                                }, c)
                            }
                        })
                    })
                })
            }
            let M = () => {
                    let e = (0, f.default)(),
                        t = (0, _.useUserForLinkStatus)(N.UserLinkStatus.ACTIVE),
                        n = e ? N.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : N.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
                        s = {
                            count: t.length,
                            max: n
                        },
                        i = (0, c.useAgeSpecificText)(A.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_TEEN.format(s), A.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_TITLE_PARENT.format(s));
                    return (0, a.jsx)(a.Fragment, {
                        children: t.length > 0 ? (0, a.jsx)(v, {
                            sectionType: N.UserLinkStatus.ACTIVE,
                            sectionTitle: i,
                            requests: t
                        }) : (0, a.jsxs)("div", {
                            className: m.section,
                            children: [(0, a.jsx)(o.Text, {
                                className: p.marginBottom8,
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: i
                            }), (0, a.jsx)("div", {
                                className: m.box,
                                children: (0, a.jsx)(h.default, {
                                    text: A.default.Messages.FAMILY_CENTER_ACCEPTED_REQUESTS_EMPTY_DESCRIPTION
                                })
                            })]
                        })
                    })
                },
                P = () => {
                    let e = (0, _.useHasMaxConnections)(),
                        t = (0, f.default)(),
                        n = t ? N.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS : N.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS,
                        s = (0, c.useAgeSpecificText)(A.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_TEEN.format({
                            maxConnections: n
                        }), A.default.Messages.FAMILY_CENTER_REQUESTS_LIMIT_INFO_PARENT.format({
                            maxConnections: n
                        }));
                    return e ? (0, a.jsx)("div", {
                        className: m.maxConnectionInfo,
                        children: (0, a.jsx)(o.Text, {
                            variant: "text-xxs/medium",
                            color: "text-muted",
                            children: s
                        })
                    }) : null
                },
                D = () => {
                    let e = (0, E.useShouldShowHelplineLink)();
                    return e ? (0, a.jsxs)("div", {
                        className: l(m.helpLineInfo, p.marginTop20),
                        children: [(0, a.jsx)(o.Heading, {
                            className: m.supportHeader,
                            variant: "heading-sm/semibold",
                            children: (0, a.jsx)(o.HeadingLevel, {
                                children: A.default.Messages.FAMILY_CENTER_HELP_LINE_HEADER
                            })
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: A.default.Messages.FAMILY_CENTER_HELP_LINE_CONTENT.format({
                                helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
                            })
                        })]
                    }) : null
                },
                y = () => {
                    let e = (0, _.useUserForLinkStatus)(N.UserLinkStatus.PENDING),
                        t = (0, c.useAgeSpecificText)(A.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_TEEN.format({
                            count: e.length
                        }), A.default.Messages.FAMILY_CENTER_PENDING_REQUESTS_TITLE_PARENT.format({
                            count: e.length
                        }));
                    return 0 === e.length ? null : (0, a.jsx)(v, {
                        sectionType: N.UserLinkStatus.PENDING,
                        sectionTitle: t,
                        requests: e
                    })
                };
            var x = () => {
                let e = (0, f.default)();
                return (0, a.jsxs)("div", {
                    className: m.container,
                    children: [e ? (0, a.jsx)(O, {}) : (0, a.jsx)(L, {}), (0, a.jsx)(M, {}), (0, a.jsx)(y, {}), (0, a.jsx)(P, {}), (0, a.jsx)(D, {})]
                })
            }
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                r = l("753809"),
                o = l("77078"),
                u = l("545158"),
                d = l("368639"),
                c = l("37785"),
                f = l("62843"),
                m = l("837899"),
                p = l("425190"),
                E = l("701909"),
                T = l("49111"),
                h = l("782340"),
                _ = l("474963"),
                S = l("632215");

            function I(e) {
                let {
                    className: t,
                    lineClamp: l = 6,
                    isExpanded: s = !1
                } = e, [I, g] = a.useState(s), A = a.useMemo(() => (0, d.parseBioReact)(h.default.Messages.MORE_INFO_CLYDE_LEGAL), []);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o.Collapsible, {
                        isExpanded: I,
                        collapsibleContent: (0, n.jsx)("div", {
                            className: i(t, S.markup),
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                lineClamp: l,
                                children: (0, n.jsx)(f.MessagesInteractionContext.Provider, {
                                    value: {
                                        disableAnimations: !0,
                                        disableInteractions: !1
                                    },
                                    children: A
                                })
                            })
                        }),
                        className: _.collapseable,
                        children: e => {
                            let {
                                onClick: t
                            } = e;
                            return (0, n.jsx)(o.Clickable, {
                                onClick: e => {
                                    g(!I), t(e)
                                },
                                children: (0, n.jsxs)("div", {
                                    className: _.header,
                                    children: [(0, n.jsx)(o.Heading, {
                                        variant: "eyebrow",
                                        className: _.userInfoSectionHeader,
                                        children: h.default.Messages.MORE_INFO
                                    }), I ? (0, n.jsx)(p.default, {
                                        className: _.arrow
                                    }) : (0, n.jsx)(m.default, {
                                        className: _.arrow
                                    })]
                                })
                            })
                        }
                    }), (0, n.jsxs)(o.Text, {
                        className: _.helpCenterCta,
                        variant: "text-sm/medium",
                        children: [(0, n.jsx)(r.LinkIcon, {
                            color: "var(--text-link)",
                            className: _.linkIcon
                        }), (0, n.jsx)(c.default, {
                            onClick: () => (0, u.default)(E.default.getArticleURL(T.HelpdeskArticles.CLYDE_AI), !0),
                            children: h.default.Messages.MORE_INFO_HELP_CENTER
                        })]
                    })]
                })
            }
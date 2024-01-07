            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            }), a("222007");
            var s = a("37983"),
                l = a("884691"),
                i = a("907002"),
                n = a("77078"),
                r = a("79112"),
                o = a("217513"),
                d = a("701909"),
                u = a("158998"),
                c = a("303270"),
                E = a("935583"),
                f = a("49111"),
                m = a("782340"),
                S = a("341923");

            function _(e) {
                let {
                    userRef: t,
                    usernameSuggestionLoading: a = !1,
                    oneClickFlow: _ = !1,
                    ...I
                } = e, {
                    user: h,
                    editState: N,
                    onClose: M
                } = I, T = (0, o.default)(h.id), g = function(e, t, a) {
                    switch (e) {
                        case E.EditState.EDIT_USERNAME:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                            };
                        case E.EditState.EDIT_DISPLAY_NAME:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
                            };
                        case E.EditState.PREVIEW:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
                                    displayName: t
                                }), subtitle: m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                                    onClick: () => {
                                        a(), r.default.open(f.UserSettingsSections.ACCOUNT)
                                    }
                                })
                            };
                        case E.EditState.SUGGESTION:
                            return {
                                header: m.default.Messages.POMELO_ACTION_LABEL_OCF, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(), link: m.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                                    helpdeskArticle: d.default.getArticleURL(f.HelpdeskArticles.POMELO_FAQ)
                                })
                            };
                        default:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                            }
                    }
                }(N, u.default.getName(h), M), [O, L] = (0, i.useSpring)(() => ({
                    opacity: 0,
                    y: 10
                }));
                return l.useEffect(() => {
                    L({
                        y: 0,
                        opacity: 1,
                        from: {
                            y: 10,
                            opacity: 0
                        }
                    })
                }, [L, N]), (0, s.jsxs)("div", {
                    className: S.displayNameContainer,
                    children: [(0, s.jsxs)(i.animated.div, {
                        style: {
                            opacity: O.opacity,
                            y: O.y
                        },
                        children: [(0, s.jsx)(n.Heading, {
                            className: S.title,
                            color: "header-primary",
                            variant: "heading-xl/extrabold",
                            children: g.header
                        }), (0, s.jsxs)("div", {
                            className: S.subtitle,
                            children: [(0, s.jsx)(n.Heading, {
                                color: "header-secondary",
                                variant: "heading-sm/medium",
                                children: g.subtitle
                            }), null != g.link && (0, s.jsx)(n.Text, {
                                className: S.link,
                                color: "header-secondary",
                                variant: "text-sm/medium",
                                children: g.link
                            })]
                        })]
                    }), (0, s.jsx)(c.default, {
                        ...I,
                        displayProfile: T,
                        ref: t,
                        usernameSuggestionLoading: a,
                        oneClickFlow: _
                    })]
                })
            }
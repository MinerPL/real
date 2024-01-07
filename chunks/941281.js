            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                },
                OAuth2Success: function() {
                    return N
                },
                OAuth2AuthorizedSuccess: function() {
                    return O
                },
                OAuth2Error: function() {
                    return R
                },
                OAuth2AuthorizedPage: function() {
                    return y
                },
                OAuth2ErrorPage: function() {
                    return v
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                s = n.n(l),
                r = n("730290"),
                u = n("90915"),
                o = n("746379"),
                d = n.n(o),
                c = n("516256"),
                _ = n("242670"),
                E = n("577776"),
                f = n("77078"),
                h = n("69927"),
                p = n("393414"),
                T = n("239380"),
                C = n("599110"),
                m = n("267570"),
                S = n("49111"),
                I = n("782340"),
                g = n("223003");

            function A(e) {
                let {
                    message: t,
                    footer: n,
                    headerClassName: a,
                    showsCloseWindowText: l,
                    spinner: r,
                    onClose: u
                } = e;
                return (0, h.usePageTitle)({
                    location: I.default.Messages.OAUTH2_TITLE
                }), (0, i.jsxs)(i.Fragment, {
                    children: [null != u ? (0, i.jsx)(c.ModalCloseButton, {
                        onClick: u,
                        className: g.closeButton
                    }) : null, (0, i.jsxs)("div", {
                        className: g.wrapper,
                        children: [r ? (0, i.jsx)(_.Spinner, {}) : null, (0, i.jsx)("div", {
                            className: s(g.header, a)
                        }), (0, i.jsx)(E.Text, {
                            variant: "text-md/normal",
                            className: g.text,
                            children: t
                        }), null != n ? n : null, l ? (0, i.jsx)(E.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: g.cta,
                            children: I.default.Messages.OAUTH2_MESSAGE_CTA
                        }) : null]
                    })]
                })
            }

            function N(e) {
                return (0, i.jsx)(A, {
                    ...e,
                    headerClassName: g.headerSuccess
                })
            }

            function O(e) {
                let {
                    guild: t,
                    application: n,
                    ...l
                } = e, {
                    onClose: s
                } = l, r = I.default.Messages.AUTHORIZED_SUCCESS, u = a.useCallback(() => {
                    (null == t ? void 0 : t.id) != null && ((0, T.transitionToGuild)(null == t ? void 0 : t.id), null == s || s(), C.default.track(S.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    }))
                }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]), o = a.useCallback(() => {
                    null == s || s(), C.default.track(S.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                        application_id: null == n ? void 0 : n.id
                    })
                }, [s, null == n ? void 0 : n.id]), d = a.useMemo(() => {
                    if (null != n) return null != t ? I.default.Messages.AUTHORIZED_APP_TO_SERVER.format({
                        installedApplicationName: null == n ? void 0 : n.name,
                        guildName: null == t ? void 0 : t.name
                    }) : I.default.Messages.AUTHORIZED_APP.format({
                        installedApplicationName: null == n ? void 0 : n.name
                    });
                    return I.default.Messages.AUTHORIZED_GENERIC
                }, [n, t]), c = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(E.Text, {
                        variant: "text-sm/normal",
                        className: g.authorizedSuccessSubtext,
                        children: d
                    }), (null != t || null != s) && (0, i.jsxs)("div", {
                        className: g.buttonsContainer,
                        children: [null != t && (0, i.jsx)(f.Button, {
                            fullWidth: !0,
                            color: f.Button.Colors.BRAND,
                            onClick: u,
                            className: g.button,
                            children: (null == t ? void 0 : t.name.length) > 30 ? I.default.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : I.default.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
                                guildName: null == t ? void 0 : t.name
                            })
                        }), null != s && (0, i.jsx)(f.Button, {
                            fullWidth: !0,
                            color: f.Button.Colors.PRIMARY,
                            onClick: o,
                            className: g.button,
                            children: I.default.Messages.CLOSE
                        })]
                    })]
                });
                return a.useEffect(() => {
                    C.default.track(S.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
                        application_id: null == n ? void 0 : n.id
                    })
                }, [null == n ? void 0 : n.id]), (0, i.jsx)("div", {
                    className: g.authorizedSuccessWrapper,
                    children: (0, i.jsx)(N, {
                        message: r,
                        footer: c,
                        ...l
                    })
                })
            }

            function R(e) {
                return (0, i.jsx)(A, {
                    ...e,
                    headerClassName: g.headerFailure
                })
            }

            function y() {
                var e, t;
                let n = (0, u.useLocation)();
                return (0, i.jsx)(m.OAuth2Page, {
                    children: (0, i.jsx)(O, {
                        guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
                        application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
                        showsCloseWindowText: !0
                    })
                })
            }

            function v(e) {
                var t, n;
                let {
                    location: l
                } = e;
                a.useEffect(() => {
                    if (null == l) return;
                    let e = null != document.referrer && "" !== document.referrer ? d.parse(document.referrer) : null;
                    (null == e || e.host !== window.location.host || e.pathname !== S.Routes.OAUTH2_AUTHORIZE) && (0, p.transitionTo)(S.Routes.INDEX)
                }, [l]);
                let s = null != l ? (0, r.parse)(l.search) : {},
                    u = null !== (n = null !== (t = s.error_description) && void 0 !== t ? t : s.error) && void 0 !== n ? n : I.default.Messages.OAUTH2_UNKNOWN_ERROR;
                return (0, i.jsx)(m.OAuth2Page, {
                    children: (0, i.jsx)(R, {
                        message: u,
                        showsCloseWindowText: !0
                    })
                })
            }
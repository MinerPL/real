            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("872717"),
                d = s("151426"),
                u = s("77078"),
                c = s("79112"),
                S = s("642950"),
                E = s("158645"),
                f = s("917454"),
                T = s("10641"),
                m = s("102985"),
                _ = s("697218"),
                g = s("104359"),
                h = s("945330"),
                I = s("216947"),
                N = s("267675"),
                p = s("449008"),
                C = s("49111"),
                A = s("994428"),
                O = s("782340"),
                x = s("738318");

            function R() {
                let e;
                let {
                    currentSession: t,
                    otherSessions: s
                } = (0, f.useAuthSessions)(), l = (0, r.useStateFromStores)([m.default], () => m.default.hidePersonalInformation), i = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), [c, g] = n.useState(!1);
                n.useEffect(() => {
                    (0, T.markDismissibleContentAsDismissed)(d.DismissibleContent.AUTH_SESSIONS_NEW, {
                        dismissAction: A.ContentDismissActionType.AUTO
                    }), (0, E.fetchAuthSessions)();
                    let e = setTimeout(() => g(!0), 500);
                    return () => {
                        clearTimeout(e), (0, E.clearAuthSessions)()
                    }
                }, []);
                let h = () => {
                        o.default.post({
                            url: C.Endpoints.AUTH_SESSION_NOTIFICATIONS_DEBUG
                        })
                    },
                    [I, N] = n.useState(new Set);
                return l ? (0, a.jsx)(S.default, {}) : (e = null == t && 0 === s.length ? c ? (0, a.jsx)("div", {
                    className: x.loading,
                    children: (0, a.jsx)(u.Spinner, {})
                }) : null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: x.sessions,
                        children: [(0, a.jsx)(u.FormSection, {
                            tag: u.FormTitleTags.H5,
                            title: O.default.Messages.AUTH_SESSIONS_CURRENT,
                            titleClassName: x.groupTitle,
                            children: null != t ? (0, a.jsx)(M, {
                                session: t,
                                current: !0
                            }) : null
                        }), !(s.length > 0) && (null == i ? void 0 : i.mfaEnabled) ? null : (0, a.jsxs)(u.FormSection, {
                            tag: u.FormTitleTags.H5,
                            title: O.default.Messages.AUTH_SESSIONS_OTHERS,
                            titleClassName: x.groupTitle,
                            className: x.otherSessions,
                            children: [s.map(e => (0, a.jsx)(M, {
                                session: e,
                                useChecks: I.size > 0,
                                checked: I.has(e.id_hash),
                                setChecked: t => {
                                    let s = new Set(I);
                                    t ? s.add(e.id_hash) : s.delete(e.id_hash), N(s)
                                }
                            }, e.id_hash)), (null == i ? void 0 : i.mfaEnabled) ? null : (0, a.jsx)(v, {})]
                        })]
                    }), s.length > 0 ? (0, a.jsxs)(u.FormSection, {
                        tag: u.FormTitleTags.H5,
                        title: I.size > 0 ? O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_TITLE : O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_TITLE,
                        children: [(0, a.jsx)(u.FormText, {
                            type: u.FormTextTypes.DESCRIPTION,
                            children: O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_DESCRIPTION
                        }), (0, a.jsx)(u.Button, {
                            look: u.Button.Looks.OUTLINED,
                            color: u.Button.Colors.RED,
                            size: u.Button.Sizes.SMALL,
                            className: x.logOutAllButton,
                            onClick: () => {
                                I.size > 0 ? (0, E.logOutSessions)(Array.from(I)) : (0, E.logOutSessions)(s.map(e => e.id_hash))
                            },
                            children: I.size > 0 ? O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_SELECTED_ACTION.format({
                                count: I.size
                            }) : O.default.Messages.AUTH_SESSIONS_OTHERS_LOG_OUT_ACTION
                        })]
                    }) : null]
                }), (0, a.jsxs)(u.FormSection, {
                    tag: u.FormTitleTags.H1,
                    title: O.default.Messages.AUTH_SESSIONS,
                    children: [(0, a.jsx)(u.FormText, {
                        type: u.FormTextTypes.DESCRIPTION,
                        className: x.description,
                        children: O.default.Messages.AUTH_SESSIONS_DESCRIPTION
                    }), (null == i ? void 0 : i.isStaff()) ? (0, a.jsxs)("div", {
                        className: x.tools,
                        children: [(0, a.jsx)(u.Text, {
                            className: x.toolsTitle,
                            variant: "text-md/bold",
                            children: "DEV TOOLS"
                        }), (0, a.jsx)(u.Text, {
                            className: x.toolsTitle,
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: "These tools are only shown to staff users."
                        }), (0, a.jsx)(u.Tooltip, {
                            text: "Triggers mobile and email suspicious session notifications for the current user",
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: s
                                } = e;
                                return (0, a.jsx)(u.Button, {
                                    size: u.Button.Sizes.SMALL,
                                    color: u.Button.Colors.PRIMARY,
                                    onClick: h,
                                    onMouseEnter: t,
                                    onMouseLeave: s,
                                    children: "Trigger Suspicious Sessions Notification"
                                })
                            }
                        })]
                    }) : null, e]
                }))
            }

            function M(e) {
                var t, s, n, l, r;
                let {
                    session: o,
                    current: d,
                    setChecked: c,
                    checked: S,
                    useChecks: T
                } = e, m = null !== (r = null === (t = o.client_info) || void 0 === t ? void 0 : t.location) && void 0 !== r ? r : null === (s = o.client_info) || void 0 === s ? void 0 : s.ip, _ = null === (n = o.client_info) || void 0 === n ? void 0 : n.platform, {
                    text: g,
                    icon: C
                } = function(e) {
                    switch (null == e ? void 0 : e.toLowerCase().trim()) {
                        case null:
                        case void 0:
                        case "":
                            return {
                                text: O.default.Messages.AUTH_SESSIONS_OS_UNKNOWN, icon: N.default
                            };
                        case "ios":
                        case "android":
                            return {
                                text: e, icon: I.default
                            };
                        default:
                            return {
                                text: e, icon: N.default
                            }
                    }
                }(null === (l = o.client_info) || void 0 === l ? void 0 : l.os), A = d ? null : (0, f.formatDate)(o.approx_last_used_time), R = [g, _].filter(p.isNotNullish), M = [m, A].filter(p.isNotNullish), v = (0, u.useRedesignIconContext)().enabled, D = v ? 24 : 32;
                return (0, a.jsxs)("div", {
                    className: i(x.session, d ? x.currentSession : null),
                    children: [(0, a.jsx)("div", {
                        className: x.sessionIcon,
                        children: (0, a.jsx)(C, {
                            width: D,
                            height: D
                        })
                    }), (0, a.jsxs)("div", {
                        className: x.sessionInfo,
                        children: [(0, a.jsxs)(u.Text, {
                            variant: "eyebrow",
                            className: x.sessionInfoRow,
                            children: [(0, a.jsx)("span", {
                                children: R[0]
                            }), R.length > 1 && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("span", {
                                    children: "\xb7"
                                }), (0, a.jsx)("span", {
                                    children: R[1]
                                })]
                            })]
                        }), (0, a.jsxs)(u.Text, {
                            variant: "text-sm/medium",
                            className: x.sessionInfoRow,
                            children: [(0, a.jsx)("span", {
                                children: M[0]
                            }), M.length > 1 && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("span", {
                                    children: "\xb7"
                                }), (0, a.jsx)("span", {
                                    children: M[1]
                                })]
                            })]
                        })]
                    }), d ? null : T ? (0, a.jsx)("div", {
                        className: x.sessionCheckbox,
                        children: (0, a.jsx)(u.Checkbox, {
                            onChange: (e, t) => {
                                null == c || c(t)
                            },
                            value: S
                        })
                    }) : (0, a.jsx)(u.Clickable, {
                        className: x.sessionMoreButton,
                        onClick: e => {
                            e.shiftKey ? null == c || c(!0) : (0, E.logOutSessions)(o.id_hash)
                        },
                        "aria-label": O.default.Messages.AUTH_SESSIONS_SESSION_LOG_OUT,
                        children: (0, a.jsx)(h.default, {})
                    })]
                }, o.id_hash)
            }

            function v() {
                return (0, a.jsxs)("div", {
                    className: i(x.session, x.legacySession),
                    children: [(0, a.jsx)("div", {
                        className: x.sessionIcon,
                        children: (0, a.jsx)(g.default, {
                            width: "32",
                            height: "32"
                        })
                    }), (0, a.jsxs)("div", {
                        className: x.sessionInfo,
                        children: [(0, a.jsx)(u.Text, {
                            variant: "eyebrow",
                            className: x.sessionInfoRow,
                            color: "text-muted",
                            children: (0, a.jsx)("span", {
                                children: O.default.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY
                            })
                        }), (0, a.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: x.sessionInfoRow,
                            color: "text-muted",
                            children: (0, a.jsx)("span", {
                                children: O.default.Messages.AUTH_SESSIONS_UNKNOWN_LEGACY_LOG_OUT.format({
                                    onClick: () => c.default.setSection(C.UserSettingsSections.ACCOUNT)
                                })
                            })
                        })]
                    })]
                })
            }
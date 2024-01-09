            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("746379"),
                i = n.n(s),
                r = n("77078"),
                u = n("716241"),
                o = n("368639"),
                d = n("33942"),
                c = n("506885"),
                f = n("401642"),
                h = n("315102"),
                p = n("701909"),
                m = n("253981"),
                E = n("252063"),
                C = n("49111"),
                S = n("782340"),
                g = n("402739"),
                _ = n("271861");
            let I = new Set(["Spacebar", " ", "Enter"]);

            function T(e) {
                let {
                    channelId: t,
                    transitionState: n,
                    onClose: s
                } = e, {
                    fetched: T,
                    applicationsShelf: v,
                    installedIntegrations: x
                } = (0, E.usePrivateChannelIntegrationState)({
                    channelId: t
                });
                l.useEffect(() => {
                    (0, u.trackWithMetadata)(C.AnalyticEvents.GDM_STARTER_APPS_VIEWED)
                }, []);
                let N = e => {
                        var t;
                        (0, c.default)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", null == e ? void 0 : e.getAvatarURL(void 0, 80), {
                            dispatchWait: !0
                        })
                    },
                    A = (e, t) => {
                        I.has(e.key) && N(t)
                    },
                    M = l.useCallback(e => {
                        let {
                            application: t,
                            location: n
                        } = e;
                        if (null == n) return !1;
                        let {
                            host: a,
                            path: l
                        } = i.parse(n, !0), r = m.default.isDiscordHostname(a) || window.location.host === a;
                        return !!r && l === C.Routes.OAUTH2_AUTHORIZED && (null != t && s(), !0)
                    }, [s]);
                return (0, a.jsxs)(r.ModalRoot, {
                    transitionState: n,
                    size: r.ModalSize.DYNAMIC,
                    className: g.modal,
                    children: [(0, a.jsx)(r.ModalContent, {
                        className: g.modalContent,
                        children: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("img", {
                                src: _,
                                alt: "",
                                className: g.image
                            }), (0, a.jsxs)("div", {
                                className: g.headingContainer,
                                children: [(0, a.jsx)(r.Heading, {
                                    variant: "heading-xl/bold",
                                    className: g.modalHeader,
                                    children: S.default.Messages.PRIVATE_CHANNEL_AVAILABLE_APPS
                                }), (0, a.jsx)(r.Text, {
                                    variant: "text-md/medium",
                                    className: g.modalHeader,
                                    children: S.default.Messages.PRIVATE_CHANNEL_INTEGRATION_MORE_APPS_INFO_LINKED.format({
                                        helpCenterLink: p.default.getArticleURL(C.HelpdeskArticles.PRIVATE_CHANNEL_INTEGRATIONS)
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: g.applicationRowContainer,
                                children: T ? v.map(e => {
                                    if (null != x.find(t => t.application.id === e.id)) return null;
                                    let n = null != e.description ? (0, o.parseBioReact)(e.description) : null,
                                        l = h.default.getApplicationIconURL({
                                            id: e.id,
                                            icon: e.icon,
                                            size: 40
                                        }),
                                        s = (0, a.jsxs)(a.Fragment, {
                                            children: [null != l && (0, a.jsx)("img", {
                                                className: g.applicationIcon,
                                                alt: "",
                                                "aria-hidden": !0,
                                                src: l,
                                                width: 40,
                                                height: 40
                                            }), (0, a.jsxs)("div", {
                                                className: g.applicationRowContent,
                                                children: [(0, a.jsxs)("div", {
                                                    className: g.applicationText,
                                                    children: [(0, a.jsx)(r.Heading, {
                                                        variant: "heading-md/medium",
                                                        children: e.name
                                                    }), null != e.description && (0, a.jsx)(r.Text, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: n
                                                    })]
                                                }), (0, a.jsx)(r.Button, {
                                                    type: "button",
                                                    innerClassName: g.applicationButtonHack,
                                                    onClick: n => {
                                                        n.stopPropagation(), (0, d.openOAuth2Modal)({
                                                            clientId: e.id,
                                                            scopes: [C.OAuth2Scopes.APPLICATIONS_COMMANDS],
                                                            channelId: t,
                                                            disableGuildSelect: !0,
                                                            callback: M
                                                        })
                                                    },
                                                    size: r.Button.Sizes.SMALL,
                                                    color: r.Button.Colors.PRIMARY,
                                                    children: S.default.Messages.ADD
                                                })]
                                            })]
                                        }),
                                        {
                                            bot: i
                                        } = e;
                                    return null != i ? (0, a.jsx)(r.ClickableContainer, {
                                        onMouseDown: () => N(i),
                                        onKeyDown: e => A(e, i),
                                        className: g.applicationRow,
                                        onClick: () => {
                                            (0, f.openUserProfileModal)({
                                                userId: i.id,
                                                channelId: t,
                                                analyticsLocation: {
                                                    section: C.AnalyticsSections.ADD_PRIVATE_CHANNEL_INTEGRATION_MODAL
                                                }
                                            })
                                        },
                                        "aria-label": S.default.Messages.PRIVATE_CHANNEL_INTEGRATION_ADD_MODAL_ROW_INFO.format({
                                            appName: e.name
                                        }),
                                        children: s
                                    }, e.id) : (0, a.jsx)("div", {
                                        className: g.applicationRow,
                                        children: s
                                    }, e.id)
                                }) : (0, a.jsx)(r.Spinner, {
                                    className: g.spinner,
                                    type: r.Spinner.Type.SPINNING_CIRCLE
                                })
                            })]
                        })
                    }), (0, a.jsxs)(r.ModalFooter, {
                        className: g.modalFooter,
                        children: [(0, a.jsx)(r.Button, {
                            onClick: s,
                            children: S.default.Messages.DONE
                        }), (0, a.jsx)(r.Button, {
                            look: r.Button.Looks.LINK,
                            onClick: s,
                            color: r.Button.Colors.PRIMARY,
                            children: S.default.Messages.CANCEL
                        })]
                    })]
                })
            }
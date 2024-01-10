            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("171210"),
                i = n("77078"),
                r = n("811475"),
                o = n("685665"),
                u = n("716849"),
                d = n("552917"),
                c = n("967241"),
                f = n("351825"),
                h = n("956089"),
                C = n("599110"),
                p = n("659500"),
                m = n("254490"),
                E = n("412861"),
                g = n("149022"),
                S = n("64096"),
                _ = n("49111"),
                A = n("186859"),
                T = n("782340"),
                M = n("648198");

            function N(e, t, s, l) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("811475").then(n.bind(n, "811475"));
                    return n => (0, a.jsx)(i, {
                        ...n,
                        activity: e,
                        channel: t,
                        activityActionType: s,
                        analyticsLocations: l
                    })
                }, {
                    modalKey: r.activityInviteKey
                })
            }
            let I = /(.*)```(\w+)\n(.*)```(.*)/s;

            function v(e) {
                let {
                    channel: t,
                    options: r,
                    onFileUpload: v,
                    onClose: L,
                    onSelect: R,
                    draftType: x,
                    editorTextContent: y,
                    setValue: O,
                    openClips: D
                } = e;
                (0, u.useMaybeFetchPremiumLikelihood)(d.default);
                let {
                    analyticsLocations: j
                } = (0, o.default)();
                s.useEffect(() => {
                    C.default.track(_.AnalyticEvents.OPEN_POPOUT, {
                        type: "Send Attachment",
                        channel_id: t.id,
                        guild_id: t.guild_id
                    })
                }, [t.guild_id, t.id]);

                function b() {
                    (0, c.openThreadSidebarForCreating)(t, void 0, "Plus Button")
                }

                function P() {
                    C.default.track(_.AnalyticEvents.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), O("/", (0, g.toRichValue)("/"))
                }

                function F() {
                    D()
                }

                function U() {
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("487757").then(n.bind(n, "487757"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            channel: t
                        })
                    }, {
                        modalKey: A.POLL_CREATION_MODAL_KEY
                    })
                }

                function H() {
                    let e = y,
                        n = "txt",
                        a = "",
                        s = y.match(I);
                    null != s && (a = s[1], n = s[2], e = s[3], a += s[4]), (0, E.promptToUpload)([(0, m.makeFile)(new Blob([e], {
                        type: "text/plain"
                    }), "message.".concat(n))], t, x), p.ComponentDispatch.dispatchToLastSubscribed(_.ComponentActions.CLEAR_TEXT), "" !== a && p.ComponentDispatch.dispatchToLastSubscribed(_.ComponentActions.INSERT_TEXT, {
                        plainText: a
                    })
                }
                return (0, a.jsx)(i.Menu, {
                    onSelect: R,
                    navId: "channel-attach",
                    onClose: L,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    className: M.menu,
                    children: r.map(function(e) {
                        var n;
                        let s = (0, a.jsxs)("div", {
                            className: M.optionLabel,
                            children: [(0, a.jsx)(e.icon, {
                                className: M.optionIcon
                            }), (0, a.jsx)("div", {
                                className: M.optionName,
                                children: e.display
                            }), null != e.badgeVal && e.badgeVal > 0 && (0, a.jsx)(h.NumberBadge, {
                                className: M.badge,
                                color: null !== (n = e.badgeColor) && void 0 !== n ? n : l.default.STATUS_DANGER,
                                count: e.badgeVal
                            })]
                        });
                        switch (e.type) {
                            case S.AttachmentTypes.UPLOAD_A_FILE:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "upload-file",
                                    label: s,
                                    subtext: (0, a.jsx)("span", {
                                        className: M.tipSubtext,
                                        children: T.default.Messages.UPLOAD_FILE_SUBTEXT.format({
                                            icon: (e, t) => (0, a.jsx)(f.default, {
                                                className: M.tipIcon,
                                                width: 16,
                                                height: 16
                                            }, t)
                                        })
                                    }),
                                    action: v
                                }, "upload-file");
                            case S.AttachmentTypes.UPLOAD_TEXT_AS_FILE:
                                if ("" === y) return null;
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "upload-text-as-file",
                                    label: s,
                                    action: H
                                }, "upload-text-as-file");
                            case S.AttachmentTypes.CLIPS:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "clips",
                                    label: s,
                                    action: F
                                }, "clips");
                            case S.AttachmentTypes.POLL:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "poll",
                                    label: s,
                                    action: U
                                }, "poll");
                            case S.AttachmentTypes.INVITE_TO_PLAY_GAME:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "play",
                                    label: s,
                                    action: () => {
                                        var n;
                                        return n = e.activity, void(C.default.track(_.AnalyticEvents.OPEN_MODAL, {
                                            type: "Send Join Invite",
                                            application_id: n.application_id,
                                            location: _.AnalyticsSections.CHANNEL_TEXT_AREA
                                        }), N(n, t, _.ActivityActionTypes.JOIN, j))
                                    }
                                }, "play");
                            case S.AttachmentTypes.INVITE_TO_LISTEN:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "listen",
                                    label: s,
                                    action: () => {
                                        var n;
                                        return n = e.activity, void(C.default.track(_.AnalyticEvents.OPEN_MODAL, {
                                            type: "Send Listen Invite",
                                            location: _.AnalyticsSections.CHANNEL_TEXT_AREA
                                        }), N(n, t, _.ActivityActionTypes.LISTEN, j))
                                    }
                                }, "listen");
                            case S.AttachmentTypes.INVITE_TO_WATCH:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "watch",
                                    label: s,
                                    action: () => {
                                        var n;
                                        return n = e.activity, void(C.default.track(_.AnalyticEvents.OPEN_MODAL, {
                                            type: "Send Watch Invite",
                                            location: _.AnalyticsSections.CHANNEL_TEXT_AREA
                                        }), N(n, t, _.ActivityActionTypes.WATCH, j))
                                    }
                                }, "watch");
                            case S.AttachmentTypes.CREATE_THREAD:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "THREAD",
                                    label: s,
                                    action: b
                                }, "THREAD");
                            case S.AttachmentTypes.SLASH_COMMAND:
                                return (0, a.jsx)(i.MenuItem, {
                                    id: "SLASH_COMMAND",
                                    label: s,
                                    action: P
                                }, "SLASH_COMMAND");
                            default:
                                return null
                        }
                    })
                })
            }
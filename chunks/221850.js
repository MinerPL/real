            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007"), n("702976");
            var a = n("37983");
            n("884691");
            var s = n("524297"),
                i = n("77078"),
                l = n("260365"),
                r = n("636974"),
                o = n("823411"),
                u = n("267363"),
                d = n("599417"),
                c = n("244201"),
                E = n("550766"),
                f = n("299803"),
                _ = n("587984"),
                h = n("292687"),
                C = n("42203"),
                T = n("52028"),
                I = n("101125"),
                S = n("471671"),
                N = n("568734"),
                A = n("449008"),
                p = n("253981"),
                m = n("563680"),
                g = n("861309"),
                R = n("578287"),
                O = n("716724"),
                L = n("613652"),
                v = n("207873"),
                M = n("56245"),
                P = n("492249"),
                D = n("49111");
            async function y(e, t, n, a) {
                let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                    i = T.default.getApplicationActivity(t);
                if (null == i || null == i.secrets || !(0, R.validateActivityInvite)(a, i.party, i.secrets)) throw new g.default(P.RPCErrors.NO_ELIGIBLE_ACTIVITY, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
                let o = (0, f.default)(i, I.default);
                if (o) {
                    let {
                        lock: t
                    } = (0, M.unlockOverlay)(e);
                    return (0, r.openModal)(i, o).then(() => {
                        throw t(), new g.default(P.RPCErrors.NO_ELIGIBLE_ACTIVITY, "No eligible activity for application. Ensure user does have have privacy enabled.")
                    })
                }
                await l.default.sendActivityInviteUser({
                    userId: n,
                    type: a,
                    activity: i,
                    content: s,
                    location: "In-Game Invite"
                })
            }
            var x = {
                [D.RPCCommands.SEND_ACTIVITY_JOIN_INVITE]: {
                    scope: {
                        [P.RPC_SCOPE_CONFIG.ANY]: [D.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
                    },
                    handler(e) {
                        let {
                            socket: t,
                            args: {
                                user_id: n,
                                pid: a
                            }
                        } = e, s = t.application.id;
                        if (null == s) throw new g.default(P.RPCErrors.INVALID_COMMAND, "No application.");
                        return y(a, s, n, D.ActivityActionTypes.JOIN)
                    }
                },
                [D.RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST]: {
                    scope: {
                        [P.RPC_SCOPE_CONFIG.ANY]: [D.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
                    },
                    handler(e) {
                        let {
                            args: {
                                user_id: t
                            }
                        } = e, n = C.default.getDMFromUserId(t);
                        null != n && (0, u.ack)(n, !0, !0)
                    }
                },
                [D.RPCCommands.ACTIVITY_INVITE_USER]: {
                    scope: {
                        [P.RPC_SCOPE_CONFIG.ANY]: [D.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
                    },
                    validation: e => (0, O.default)(e).required().keys({
                        user_id: e.string().required(),
                        type: e.number().required().valid([D.ActivityActionTypes.JOIN]),
                        content: e.string().min(0).max(1024),
                        pid: e.number().min(0).required()
                    }),
                    handler(e) {
                        let {
                            socket: t,
                            args: {
                                type: n,
                                user_id: a,
                                content: s,
                                pid: i
                            }
                        } = e, l = t.application.id;
                        if (null == l) throw new g.default(P.RPCErrors.INVALID_COMMAND, "No application.");
                        return y(i, l, a, n, s)
                    }
                },
                [D.RPCCommands.ACCEPT_ACTIVITY_INVITE]: {
                    scope: {
                        [P.RPC_SCOPE_CONFIG.ANY]: [D.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE]
                    },
                    validation: e => (0, O.default)(e).required().keys({
                        type: e.number().required().valid([D.ActivityActionTypes.JOIN]),
                        user_id: e.string().required(),
                        session_id: e.string().required(),
                        channel_id: e.string().required(),
                        message_id: e.string().required()
                    }),
                    handler(e) {
                        let {
                            socket: t,
                            args: {
                                type: n,
                                user_id: a,
                                session_id: s,
                                channel_id: i,
                                message_id: l
                            }
                        } = e, r = t.application.id;
                        if (null == r) throw new g.default(P.RPCErrors.INVALID_COMMAND, "No application.");
                        let u = Promise.resolve(!1);
                        if (n === D.ActivityActionTypes.JOIN) u = o.default.join({
                            userId: a,
                            sessionId: s,
                            applicationId: r,
                            channelId: i,
                            messageId: l
                        });
                        return u.then(e => {
                            if (!e) throw new g.default(P.RPCErrors.INVALID_INVITE, "Invite is expired or invalid.")
                        })
                    }
                },
                [D.RPCCommands.OPEN_INVITE_DIALOG]: {
                    scope: {
                        [P.RPC_SCOPE_CONFIG.ANY]: [D.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE, P.RPC_AUTHENTICATED_SCOPE]
                    },
                    handler(e) {
                        let {
                            socket: t
                        } = e, {
                            channel: s,
                            guild: l
                        } = (0, v.validateOpenInviteDialog)(), r = h.default.getWindow(D.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                        (null == r ? void 0 : r.closed) && (r = null);
                        let o = null != r ? D.AppContext.POPOUT : D.AppContext.APP;
                        (0, m.exitFullScreen)({}, null == r ? void 0 : r.document), (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("310688").then(n.bind(n, "310688"));
                            return n => (0, a.jsx)(e, {
                                ...n,
                                guild: l,
                                channel: s,
                                applicationId: t.application.id,
                                analyticsLocation: D.AnalyticsLocations.ACTIVITY_RPC,
                                source: D.InstantInviteSources.ACTIVITY_INVITE
                            })
                        }, {
                            contextKey: o === D.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
                        })
                    }
                },
                [D.RPCCommands.INITIATE_IMAGE_UPLOAD]: (0, s.createRPCCommand)(D.RPCCommands.INITIATE_IMAGE_UPLOAD, {
                    scope: {
                        [P.RPC_SCOPE_CONFIG.ANY]: [D.OAuth2Scopes.RPC, P.RPC_LOCAL_SCOPE, P.RPC_AUTHENTICATED_SCOPE]
                    },
                    handler(e) {
                        var t;
                        let {
                            socket: n
                        } = e, a = n.application.id;
                        if (null == a) throw new g.default(P.RPCErrors.INVALID_COMMAND, "No application.");
                        let s = null === (t = (0, L.default)()) || void 0 === t ? void 0 : t.id;
                        if (null == s) throw new g.default(P.RPCErrors.UNKNOWN_ERROR, "Unable to find selected channel");
                        return new Promise((e, t) => {
                            ! function(e, t) {
                                var n;
                                let a = S.default.getFocusedWindowId(),
                                    s = null == a ? null : null === (n = (0, c.getAppWindowContextValue)(a)) || void 0 === n ? void 0 : n.renderWindow;
                                if (null == s) throw new g.default(P.RPCErrors.UNKNOWN_ERROR, "No valid window found");
                                let i = s.document.createElement("input");
                                i.style.display = "none", i.type = "file", i.accept = "image/jpeg, image/jpg, image/png, image/gif";
                                let l = () => {
                                    (null == i.files || 0 === i.files.length) && t(), s.document.body.removeEventListener("focus", l, !0), setTimeout(() => {
                                        s.document.body.removeChild(i)
                                    }, 1e3)
                                };
                                i.addEventListener("change", () => {
                                    (0, A.isNotNullish)(i.files) && e(i.files[0]), l()
                                }), i.addEventListener("cancel", () => {
                                    l()
                                }), s.document.body.addEventListener("focus", l, !0), s.document.body.appendChild(i), i.click()
                            }(async n => {
                                let i = await (0, E.uploadImageAttachment)(a, s, n);
                                (0, A.isNotNullish)(i) && (0, A.isNotNullish)(i.url) && !(i instanceof d.default) ? e({
                                    image_url: i.url
                                }): t(i)
                            }, () => t())
                        }).catch(e => {
                            throw new g.default(P.RPCErrors.UNKNOWN_ERROR, "Failed to upload image")
                        })
                    }
                }),
                [D.RPCCommands.OPEN_SHARE_MOMENT_DIALOG]: (0, s.createRPCCommand)(D.RPCCommands.OPEN_SHARE_MOMENT_DIALOG, {
                    scope: {
                        [P.RPC_SCOPE_CONFIG.ANY]: [P.RPC_AUTHENTICATED_SCOPE]
                    },
                    handler(e) {
                        var t;
                        let {
                            socket: n,
                            args: {
                                mediaUrl: a
                            }
                        } = e;
                        (0, R.validatePostMessageTransport)(n.transport);
                        let s = n.application.id;
                        if (null == s) throw new g.default(P.RPCErrors.INVALID_COMMAND, "No application.");
                        let i = (0, N.hasFlag)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, D.ApplicationFlags.EMBEDDED);
                        if (!i) throw new g.default(P.RPCErrors.INVALID_COMMAND, "This application cannot access this API");
                        let l = (0, L.default)();
                        if (null == l) throw new g.default(P.RPCErrors.INVALID_COMMAND, "No channel found");
                        if (!p.default.isDiscordCdnUrl(a)) throw new g.default(P.RPCErrors.INVALID_PAYLOAD, "mediaUrl must be a Discord CDN url");
                        (0, _.openActivityShareMomentModal)({
                            applicationId: s,
                            channelId: l.id,
                            mediaUrl: a
                        })
                    }
                })
            }
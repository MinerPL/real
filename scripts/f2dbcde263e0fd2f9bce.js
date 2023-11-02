(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["2377"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    a = e.length;
                if (a > n) return !1;
                if (a === n) return e === t;
                e: for (var r = 0, u = 0; r < a; r++) {
                    for (var s = e.charCodeAt(r); u < n;)
                        if (t.charCodeAt(u++) === s) continue e;
                    return !1
                }
                return !0
            }
        },
        352674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("913144"),
                r = {
                    startTyping(e) {
                        a.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: e
                        })
                    },
                    stopTyping(e) {
                        a.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: e
                        })
                    }
                }
        },
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a.default
                }
            });
            var a = n("870346")
        },
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("845579"),
                r = n("42887"),
                u = n("829536");

            function s(e) {
                let t = function() {
                        var e;
                        let t = a.SoundboardSettings.getSetting();
                        return (0, u.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    n = Math.min(r.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * n, 1)
            }
        },
        166452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                u = n("272030"),
                s = n("838446"),
                l = n("158534"),
                d = n("846883"),
                i = n("812204"),
                o = n("243288"),
                f = n("321135"),
                c = n("873254"),
                m = n("861370"),
                h = n("726750"),
                p = n("170990"),
                g = n("304582"),
                v = n("72057"),
                M = n("489836"),
                x = n("406703"),
                S = n("343856"),
                j = n("502533"),
                C = n("314838"),
                _ = n("383161"),
                N = n("421602"),
                E = n("432487"),
                T = n("151200"),
                O = n("692986"),
                I = n("806179"),
                R = n("816106"),
                A = n("623879"),
                P = n("49111"),
                U = n("782340"),
                G = (0, l.default)((0, s.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        channel: s,
                        context: l,
                        showChatItems: i = !0,
                        showMediaItems: P = !1,
                        showChannelCallItems: G = !1,
                        showModalItems: b = !0,
                        onSelect: w
                    } = e, y = (0, I.default)(n.id, null), L = (0, _.default)(n, null, l), F = (0, T.default)(n.id, s.id), k = (0, N.default)(n.id, l), D = (0, x.default)(n, l), z = (0, v.default)({
                        user: n,
                        context: l
                    }), W = (0, g.default)(n), B = (0, R.default)(n.id), H = (0, E.default)(n.id, s.id), Y = (0, O.default)(n.id), X = (0, j.default)(n.id, s.id), Z = (0, C.default)(n), V = (0, d.default)(null, n), q = (0, p.default)(n), J = (0, M.default)(n), K = (0, m.default)({
                        id: n.id,
                        label: U.default.Messages.COPY_ID_USER
                    }), Q = (0, A.default)(n.id), $ = (0, f.default)(n.id), ee = (0, o.default)(s.id), et = (0, h.default)(n), en = (0, c.default)(n.id), ea = (0, S.default)(n, s), er = n.isNonUserBot(), eu = s.isManaged(), es = null === (t = s.recipients) || void 0 === t ? void 0 : t.includes(n.id);
                    return (0, a.jsxs)(r.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: w,
                        children: [!er && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(r.MenuGroup, {
                                children: et
                            }), (0, a.jsxs)(r.MenuGroup, {
                                children: [b && y, i && L, k, D, !eu && F, b && z, b && W, Q]
                            }), P && (0, a.jsx)(r.MenuGroup, {
                                children: B
                            }), es && (0, a.jsxs)(r.MenuGroup, {
                                children: [!eu && H, ea]
                            }), (0, a.jsx)(r.MenuGroup, {
                                children: b && V
                            }), (0, a.jsxs)(r.MenuGroup, {
                                children: [P && Y, P && X, b && Z, q, b && J, P && en]
                            }), G && (0, a.jsxs)(r.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, a.jsx)(r.MenuGroup, {
                            children: K
                        })]
                    })
                }, {
                    object: P.AnalyticsObjects.CONTEXT_MENU
                }), [i.default.CONTEXT_MENU, i.default.GROUP_DM_USER_MENU])
        },
        343856: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                u = n("669491"),
                s = n("77078"),
                l = n("450911"),
                d = n("145079"),
                i = n("87657"),
                o = n("697218"),
                f = n("782340"),
                c = n("839938");

            function m(e) {
                let {
                    color: t,
                    className: n
                } = e;
                return (0, a.jsx)("svg", {
                    className: n,
                    height: "16",
                    width: "80",
                    viewBox: "0 0 80 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        opacity: ".6",
                        children: [(0, a.jsx)("path", {
                            d: "m0 0h80v16h-80z"
                        }), (0, a.jsxs)("g", {
                            stroke: t,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            children: [(0, a.jsx)("path", {
                                d: "m71 1h4v4.16"
                            }), (0, a.jsx)("path", {
                                d: "m2 1h4v4.16",
                                transform: "matrix(-1 0 0 1 8 0)"
                            }), (0, a.jsx)("path", {
                                d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
                            }), (0, a.jsx)("path", {
                                d: "m72.13 10.474 2.869 3.12 2.631-3.12"
                            })]
                        })]
                    })
                })
            }

            function h(e, t) {
                let n = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, a.jsx)(s.MenuItem, {
                    id: "make-dm-owner",
                    color: "danger",
                    label: f.default.Messages.CHANGE_DM_OWNER,
                    action: () => {
                        var r;
                        return r = n, void(0, s.openModal)(n => (0, a.jsxs)(s.ConfirmModal, {
                            bodyClassName: c.confirmModal,
                            header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                            confirmText: f.default.Messages.CONFIRM,
                            cancelText: f.default.Messages.CANCEL,
                            onConfirm: () => l.default.setDMOwner(t.id, e.id),
                            ...n,
                            children: [(0, a.jsx)(m, {
                                color: u.default.unsafe_rawColors.PRIMARY_300.css
                            }), (0, a.jsxs)("div", {
                                className: c.fromToWrapper,
                                children: [(0, a.jsx)("div", {
                                    className: c.from,
                                    children: (0, a.jsx)(i.default, {
                                        user: r,
                                        size: s.AvatarSizes.SIZE_80
                                    })
                                }), (0, a.jsx)("div", {
                                    className: c.to,
                                    children: (0, a.jsx)(i.default, {
                                        user: e,
                                        size: s.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), (0, a.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                    usernameHook: (t, n) => (0, a.jsx)(d.default, {
                                        usernameIcon: (0, a.jsx)(s.Avatar, {
                                            className: c.avatarIcon,
                                            src: e.getAvatarURL(void 0, 16),
                                            size: s.AvatarSizes.SIZE_16,
                                            "aria-hidden": !0
                                        }),
                                        className: c.discordTag,
                                        usernameClass: c.username,
                                        discriminatorClass: c.discriminator,
                                        user: e
                                    }, n)
                                })
                            })]
                        }))
                    }
                })
            }
        },
        383161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                mentionUser: function() {
                    return h
                },
                default: function() {
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                u = n("77078"),
                s = n("352674"),
                l = n("42203"),
                d = n("957255"),
                i = n("18494"),
                o = n("659500"),
                f = n("158998"),
                c = n("49111"),
                m = n("782340");

            function h(e, t) {
                let {
                    id: n
                } = e, a = "@".concat(f.default.getUserTag(e, {
                    decoration: "never"
                })), r = "<@".concat(n, ">");
                o.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
                    plainText: a,
                    rawText: r
                }), null != t && s.default.startTyping(t)
            }

            function p(e, t, n) {
                let [s, o] = (0, r.useStateFromStoresArray)([i.default, l.default, d.default], () => {
                    let e = i.default.getChannelId(t),
                        n = l.default.getChannel(e),
                        a = null != n && (n.isMultiUserDM() || d.default.can(c.Permissions.SEND_MESSAGES, n));
                    return [e, a]
                }, [t]), f = n === c.AppContext.POPOUT;
                return !o || f ? null : (0, a.jsx)(u.MenuItem, {
                    id: "mention",
                    label: m.default.Messages.MENTION,
                    action: function() {
                        h(e, s)
                    }
                })
            }
        },
        421602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                u = n("450911"),
                s = n("54239"),
                l = n("271938"),
                d = n("49111"),
                i = n("782340");

            function o(e, t) {
                let n = l.default.getId(),
                    o = t === d.AppContext.POPOUT;
                return n === e || o ? null : (0, a.jsx)(r.MenuItem, {
                    id: "message-user",
                    label: i.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        u.default.openPrivateChannel(e), (0, s.popLayer)()
                    }
                })
            }
        },
        432487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                u = n("77078"),
                s = n("450911"),
                l = n("42203"),
                d = n("697218"),
                i = n("782340");

            function o(e, t) {
                let n = (0, r.useStateFromStores)([d.default], () => d.default.getCurrentUser(), []),
                    o = (0, r.useStateFromStores)([l.default], () => l.default.getChannel(t), [t]);
                return null == o || o.isOwner(e) || null == n || !o.isOwner(n.id) ? null : (0, a.jsx)(u.MenuItem, {
                    id: "remove",
                    label: i.default.Messages.REMOVE_FROM_GROUP,
                    action: () => s.default.removeRecipient(t, e),
                    color: "danger"
                })
            }
        },
        151200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("446674"),
                u = n("77078"),
                s = n("561288"),
                l = n("191145"),
                d = n("271938"),
                i = n("99795"),
                o = n("782340");

            function f(e, t) {
                let n = (0, r.useStateFromStores)([d.default], () => d.default.getId() === e, [e]),
                    [f, c] = (0, r.useStateFromStoresArray)([l.default], () => [l.default.getParticipants(t), l.default.getParticipant(t, e)], [t, e]);
                return n || 0 === f.length ? null : null == c ? (0, a.jsx)(u.MenuItem, {
                    id: "ring",
                    label: o.default.Messages.RING,
                    action: () => s.default.ring(t, [e])
                }) : c.type === i.ParticipantTypes.USER && c.ringing ? (0, a.jsx)(u.MenuItem, {
                    id: "stop-ringing",
                    label: o.default.Messages.STOP_RINGING,
                    action: () => s.default.stopRinging(t, [e])
                }) : null
            }
        }
    }
]);
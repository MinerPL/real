(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["95863"], {
        238455: function(e, t, n) {
            var r = n("63533"),
                a = n("651558"),
                u = n("349046"),
                o = n("153997"),
                s = n("820458"),
                i = n("663652"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = u(e),
                    d = !n && a(e),
                    c = !n && !d && o(e),
                    f = !n && !d && !c && i(e),
                    p = n || d || c || f,
                    m = p ? r(e.length, String) : [],
                    j = m.length;
                for (var h in e)(t || l.call(e, h)) && !(p && ("length" == h || c && ("offset" == h || "parent" == h) || f && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || s(h, j))) && m.push(h);
                return m
            }
        },
        85722: function(e, t, n) {
            var r = n("616691"),
                a = n("960052"),
                u = n("509492"),
                o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return u(e) && a(e.length) && !!o[r(e)]
            }
        },
        891183: function(e, t, n) {
            var r = n("356827"),
                a = n("57100"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return a(e);
                var t = [];
                for (var n in Object(e)) u.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        63533: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        870686: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        356827: function(e, t, n) {
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        57100: function(e, t, n) {
            var r = n("676315")(Object.keys, Object);
            e.exports = r
        },
        961077: function(e, t, n) {
            e = n.nmd(e);
            var r = n("71890"),
                a = "object" == typeof t && t && !t.nodeType && t,
                u = a && "object" == typeof e && e && !e.nodeType && e,
                o = u && u.exports === a && r.process,
                s = function() {
                    try {
                        var e = u && u.require && u.require("util").types;
                        if (e) return e;
                        return o && o.binding && o.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        },
        676315: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        153997: function(e, t, n) {
            e = n.nmd(e);
            var r = n("619146"),
                a = n("108028"),
                u = "object" == typeof t && t && !t.nodeType && t,
                o = u && "object" == typeof e && e && !e.nodeType && e,
                s = o && o.exports === u ? r.Buffer : void 0,
                i = s ? s.isBuffer : void 0;
            e.exports = i || a
        },
        663652: function(e, t, n) {
            var r = n("85722"),
                a = n("870686"),
                u = n("961077"),
                o = u && u.isTypedArray,
                s = o ? a(o) : r;
            e.exports = s
        },
        905269: function(e, t, n) {
            var r = n("238455"),
                a = n("891183"),
                u = n("355653");
            e.exports = function(e) {
                return u(e) ? r(e) : a(e)
            }
        },
        108028: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        352674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("913144"),
                a = {
                    startTyping(e) {
                        r.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: e
                        })
                    },
                    stopTyping(e) {
                        r.default.dispatch({
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
                    return r.default
                }
            });
            var r = n("870346")
        },
        166452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("77078"),
                u = n("272030"),
                o = n("838446"),
                s = n("158534"),
                i = n("846883"),
                l = n("812204"),
                d = n("243288"),
                c = n("321135"),
                f = n("873254"),
                p = n("861370"),
                m = n("726750"),
                j = n("170990"),
                h = n("304582"),
                v = n("72057"),
                g = n("489836"),
                x = n("406703"),
                b = n("343856"),
                y = n("502533"),
                M = n("314838"),
                S = n("383161"),
                C = n("421602"),
                O = n("432487"),
                A = n("151200"),
                E = n("692986"),
                N = n("806179"),
                T = n("816106"),
                _ = n("623879"),
                I = n("49111"),
                R = n("782340"),
                U = (0, s.default)((0, o.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        channel: o,
                        context: s,
                        showChatItems: l = !0,
                        showMediaItems: I = !1,
                        showChannelCallItems: U = !1,
                        showModalItems: P = !0,
                        onSelect: w
                    } = e, G = (0, N.default)(n.id, null), F = (0, S.default)(n, null, s), L = (0, A.default)(n.id, o.id), k = (0, C.default)(n.id, s), D = (0, x.default)(n, s), B = (0, v.default)({
                        user: n,
                        context: s
                    }), z = (0, h.default)(n), W = (0, T.default)(n.id), H = (0, O.default)(n.id, o.id), Y = (0, E.default)(n.id), X = (0, y.default)(n.id, o.id), Z = (0, M.default)(n), q = (0, i.default)(null, n), V = (0, j.default)(n), J = (0, g.default)(n), K = (0, p.default)({
                        id: n.id,
                        label: R.default.Messages.COPY_ID_USER
                    }), Q = (0, _.default)(n.id), $ = (0, c.default)(n.id), ee = (0, d.default)(o.id), et = (0, m.default)(n), en = (0, f.default)(n.id), er = (0, b.default)(n, o), ea = n.isNonUserBot(), eu = o.isManaged(), eo = null === (t = o.recipients) || void 0 === t ? void 0 : t.includes(n.id);
                    return (0, r.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": R.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: w,
                        children: [!ea && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.MenuGroup, {
                                children: et
                            }), (0, r.jsxs)(a.MenuGroup, {
                                children: [P && G, l && F, k, D, !eu && L, P && B, P && z, Q]
                            }), I && (0, r.jsx)(a.MenuGroup, {
                                children: W
                            }), eo && (0, r.jsxs)(a.MenuGroup, {
                                children: [!eu && H, er]
                            }), (0, r.jsx)(a.MenuGroup, {
                                children: P && q
                            }), (0, r.jsxs)(a.MenuGroup, {
                                children: [I && Y, I && X, P && Z, V, P && J, I && en]
                            }), U && (0, r.jsxs)(a.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, r.jsx)(a.MenuGroup, {
                            children: K
                        })]
                    })
                }, {
                    object: I.AnalyticsObjects.CONTEXT_MENU
                }), [l.default.CONTEXT_MENU, l.default.GROUP_DM_USER_MENU])
        },
        343856: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("498225"),
                u = n("912557"),
                o = n("77078"),
                s = n("450911"),
                i = n("145079"),
                l = n("87657"),
                d = n("697218"),
                c = n("782340"),
                f = n("690807");

            function p(e) {
                let {
                    color: t,
                    className: n
                } = e;
                return (0, r.jsx)("svg", {
                    className: n,
                    height: "16",
                    width: "80",
                    viewBox: "0 0 80 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        opacity: ".6",
                        children: [(0, r.jsx)("path", {
                            d: "m0 0h80v16h-80z"
                        }), (0, r.jsxs)("g", {
                            stroke: t,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            children: [(0, r.jsx)("path", {
                                d: "m71 1h4v4.16"
                            }), (0, r.jsx)("path", {
                                d: "m2 1h4v4.16",
                                transform: "matrix(-1 0 0 1 8 0)"
                            }), (0, r.jsx)("path", {
                                d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
                            }), (0, r.jsx)("path", {
                                d: "m72.13 10.474 2.869 3.12 2.631-3.12"
                            })]
                        })]
                    })
                })
            }

            function m(e, t) {
                let n = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser());
                return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, r.jsx)(o.MenuItem, {
                    id: "make-dm-owner",
                    color: "danger",
                    label: c.default.Messages.CHANGE_DM_OWNER,
                    action: () => {
                        var a;
                        return a = n, void(0, o.openModal)(n => (0, r.jsxs)(o.ConfirmModal, {
                            bodyClassName: f.confirmModal,
                            header: c.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                            confirmText: c.default.Messages.CONFIRM,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: () => s.default.setDMOwner(t.id, e.id),
                            ...n,
                            children: [(0, r.jsx)(p, {
                                color: u.default.unsafe_rawColors.PRIMARY_300.css
                            }), (0, r.jsxs)("div", {
                                className: f.fromToWrapper,
                                children: [(0, r.jsx)("div", {
                                    className: f.from,
                                    children: (0, r.jsx)(l.default, {
                                        user: a,
                                        size: o.AvatarSizes.SIZE_80
                                    })
                                }), (0, r.jsx)("div", {
                                    className: f.to,
                                    children: (0, r.jsx)(l.default, {
                                        user: e,
                                        size: o.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                    usernameHook: (t, n) => (0, r.jsx)(i.default, {
                                        usernameIcon: (0, r.jsx)(o.Avatar, {
                                            className: f.avatarIcon,
                                            src: e.getAvatarURL(void 0, 16),
                                            size: o.AvatarSizes.SIZE_16,
                                            "aria-hidden": !0
                                        }),
                                        className: f.discordTag,
                                        usernameClass: f.username,
                                        discriminatorClass: f.discriminator,
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
                    return m
                },
                default: function() {
                    return j
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("498225"),
                u = n("77078"),
                o = n("352674"),
                s = n("42203"),
                i = n("957255"),
                l = n("18494"),
                d = n("659500"),
                c = n("158998"),
                f = n("49111"),
                p = n("782340");

            function m(e, t) {
                let {
                    id: n
                } = e, r = "@".concat(c.default.getUserTag(e, {
                    decoration: "never"
                })), a = "<@".concat(n, ">");
                d.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.INSERT_TEXT, {
                    plainText: r,
                    rawText: a
                }), null != t && o.default.startTyping(t)
            }

            function j(e, t, n) {
                let [o, d] = (0, a.useStateFromStoresArray)([l.default, s.default, i.default], () => {
                    let e = l.default.getChannelId(t),
                        n = s.default.getChannel(e),
                        r = null != n && (n.isMultiUserDM() || i.default.can(f.Permissions.SEND_MESSAGES, n));
                    return [e, r]
                }, [t]), c = n === f.AppContext.POPOUT;
                return !d || c ? null : (0, r.jsx)(u.MenuItem, {
                    id: "mention",
                    label: p.default.Messages.MENTION,
                    action: function() {
                        m(e, o)
                    }
                })
            }
        },
        421602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("77078"),
                u = n("450911"),
                o = n("54239"),
                s = n("271938"),
                i = n("49111"),
                l = n("782340");

            function d(e, t) {
                let n = s.default.getId(),
                    d = t === i.AppContext.POPOUT;
                return n === e || d ? null : (0, r.jsx)(a.MenuItem, {
                    id: "message-user",
                    label: l.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        u.default.openPrivateChannel(e), (0, o.popLayer)()
                    }
                })
            }
        },
        432487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("498225"),
                u = n("77078"),
                o = n("450911"),
                s = n("42203"),
                i = n("697218"),
                l = n("782340");

            function d(e, t) {
                let n = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUser(), []),
                    d = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(t), [t]);
                return null == d || d.isOwner(e) || null == n || !d.isOwner(n.id) ? null : (0, r.jsx)(u.MenuItem, {
                    id: "remove",
                    label: l.default.Messages.REMOVE_FROM_GROUP,
                    action: () => o.default.removeRecipient(t, e),
                    color: "danger"
                })
            }
        },
        151200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("920040");
            n("773670");
            var a = n("498225"),
                u = n("77078"),
                o = n("561288"),
                s = n("191145"),
                i = n("271938"),
                l = n("99795"),
                d = n("782340");

            function c(e, t) {
                let n = (0, a.useStateFromStores)([i.default], () => i.default.getId() === e, [e]),
                    [c, f] = (0, a.useStateFromStoresArray)([s.default], () => [s.default.getParticipants(t), s.default.getParticipant(t, e)], [t, e]);
                return n || 0 === c.length ? null : null == f ? (0, r.jsx)(u.MenuItem, {
                    id: "ring",
                    label: d.default.Messages.RING,
                    action: () => o.default.ring(t, [e])
                }) : f.type === l.ParticipantTypes.USER && f.ringing ? (0, r.jsx)(u.MenuItem, {
                    id: "stop-ringing",
                    label: d.default.Messages.STOP_RINGING,
                    action: () => o.default.stopRinging(t, [e])
                }) : null
            }
        },
        895393: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), n.selectNodeContents(a), null == r || r.removeAllRanges(), null == r || r.addRange(n), a.focus(), a.setSelectionRange(0, e.length);
                let u = document.execCommand("copy");
                return t.removeChild(a), u
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            })
        }
    }
]);
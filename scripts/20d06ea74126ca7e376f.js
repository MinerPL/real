(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["42106"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var a = 0, i = 0; a < r; a++) {
                    for (var u = e.charCodeAt(a); i < n;)
                        if (t.charCodeAt(i++) === u) continue e;
                    return !1
                }
                return !0
            }
        },
        458389: function(e, t, n) {
            var r = n("594140"),
                a = n("564414"),
                i = n("725502"),
                u = n("591350"),
                o = n("476540"),
                s = n("381178"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = i(e),
                    c = !n && a(e),
                    d = !n && !c && u(e),
                    f = !n && !c && !d && s(e),
                    p = n || c || d || f,
                    h = p ? r(e.length, String) : [],
                    g = h.length;
                for (var m in e)(t || l.call(e, m)) && !(p && ("length" == m || d && ("offset" == m || "parent" == m) || f && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || o(m, g))) && h.push(m);
                return h
            }
        },
        562132: function(e, t, n) {
            var r = n("33426"),
                a = n("136047"),
                i = n("270879"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return i(e) && a(e.length) && !!u[r(e)]
            }
        },
        205873: function(e, t, n) {
            var r = n("733228"),
                a = n("541349"),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return a(e);
                var t = [];
                for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        733228: function(e, t, n) {
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        541349: function(e, t, n) {
            var r = n("761197")(Object.keys, Object);
            e.exports = r
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var r = n("447414"),
                a = "object" == typeof t && t && !t.nodeType && t,
                i = a && "object" == typeof e && e && !e.nodeType && e,
                u = i && i.exports === a && r.process,
                o = function() {
                    try {
                        var e = i && i.require && i.require("util").types;
                        if (e) return e;
                        return u && u.binding && u.binding("util")
                    } catch (e) {}
                }();
            e.exports = o
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var r = n("690516"),
                a = n("221386"),
                i = "object" == typeof t && t && !t.nodeType && t,
                u = i && "object" == typeof e && e && !e.nodeType && e,
                o = u && u.exports === i ? r.Buffer : void 0,
                s = o ? o.isBuffer : void 0;
            e.exports = s || a
        },
        381178: function(e, t, n) {
            var r = n("562132"),
                a = n("492692"),
                i = n("276440"),
                u = i && i.isTypedArray,
                o = u ? a(u) : r;
            e.exports = o
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                a = n("205873"),
                i = n("603108");
            e.exports = function(e) {
                return i(e) ? r(e) : a(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        376507: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    a = new ArrayBuffer(r.length),
                    i = new Uint8Array(a);
                for (let e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
                return a
            }

            function a(e) {
                let t = new Uint8Array(e),
                    n = "";
                for (let e of t) n += String.fromCharCode(e);
                let r = btoa(n),
                    a = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return a
            }
            n.r(t), n.d(t, {
                create: function() {
                    return v
                },
                get: function() {
                    return x
                }
            });
            var i = "copy",
                u = "convert";

            function o(e, t, n) {
                if (t === i) return n;
                if (t === u) return e(n);
                if (t instanceof Array) return n.map(n => o(e, t[0], n));
                if (t instanceof Object) {
                    let r = {};
                    for (let [a, i] of Object.entries(t)) {
                        if (i.derive) {
                            let e = i.derive(n);
                            void 0 !== e && (n[a] = e)
                        }
                        if (!(a in n)) {
                            if (i.required) throw Error("Missing key: ".concat(a));
                            continue
                        }
                        if (null == n[a]) {
                            r[a] = null;
                            continue
                        }
                        r[a] = o(e, i.schema, n[a])
                    }
                    return r
                }
            }

            function s(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function l(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function c(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var d = {
                    type: l(i),
                    id: l(u),
                    transports: c(i)
                },
                f = {
                    appid: c(i),
                    appidExclude: c(i),
                    credProps: c(i)
                },
                p = {
                    appid: c(i),
                    appidExclude: c(i),
                    credProps: c(i)
                },
                h = {
                    publicKey: l({
                        rp: l(i),
                        user: l({
                            id: l(u),
                            name: l(i),
                            displayName: l(i)
                        }),
                        challenge: l(u),
                        pubKeyCredParams: l(i),
                        timeout: c(i),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(i),
                        attestation: c(i),
                        extensions: c(f)
                    }),
                    signal: c(i)
                },
                g = {
                    type: l(i),
                    id: l(i),
                    rawId: l(u),
                    authenticatorAttachment: c(i),
                    response: l({
                        clientDataJSON: l(u),
                        attestationObject: l(u),
                        transports: s(i, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: s(p, e => e.getClientExtensionResults())
                },
                m = {
                    mediation: c(i),
                    publicKey: l({
                        challenge: l(u),
                        timeout: c(i),
                        rpId: c(i),
                        allowCredentials: c([d]),
                        userVerification: c(i),
                        extensions: c(f)
                    }),
                    signal: c(i)
                },
                j = {
                    type: l(i),
                    id: l(i),
                    rawId: l(u),
                    authenticatorAttachment: c(i),
                    response: l({
                        clientDataJSON: l(u),
                        authenticatorData: l(u),
                        signature: l(u),
                        userHandle: l(u)
                    }),
                    clientExtensionResults: s(p, e => e.getClientExtensionResults())
                };
            async function v(e) {
                let t = await navigator.credentials.create(o(r, h, e));
                return o(a, g, t)
            }
            async function x(e) {
                let t = await navigator.credentials.get(o(r, m, e));
                return o(a, j, t)
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
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("272030"),
                u = n("838446"),
                o = n("158534"),
                s = n("846883"),
                l = n("812204"),
                c = n("243288"),
                d = n("321135"),
                f = n("873254"),
                p = n("861370"),
                h = n("726750"),
                g = n("170990"),
                m = n("304582"),
                j = n("72057"),
                v = n("489836"),
                x = n("406703"),
                b = n("343856"),
                y = n("502533"),
                M = n("314838"),
                A = n("383161"),
                S = n("421602"),
                C = n("432487"),
                O = n("151200"),
                E = n("692986"),
                N = n("806179"),
                _ = n("816106"),
                T = n("623879"),
                I = n("49111"),
                R = n("782340"),
                U = (0, o.default)((0, u.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        channel: u,
                        context: o,
                        showChatItems: l = !0,
                        showMediaItems: I = !1,
                        showChannelCallItems: U = !1,
                        showModalItems: w = !0,
                        onSelect: P
                    } = e, G = (0, N.default)(n.id, null), F = (0, A.default)(n, null, o), k = (0, O.default)(n.id, u.id), D = (0, S.default)(n.id, o), L = (0, x.default)(n, o), B = (0, j.default)({
                        user: n,
                        context: o
                    }), z = (0, m.default)(n), q = (0, _.default)(n.id), W = (0, C.default)(n.id, u.id), H = (0, E.default)(n.id), Y = (0, y.default)(n.id, u.id), K = (0, M.default)(n), V = (0, s.default)(null, n), X = (0, g.default)(n), Z = (0, v.default)(n), J = (0, p.default)({
                        id: n.id,
                        label: R.default.Messages.COPY_ID_USER
                    }), Q = (0, T.default)(n.id), $ = (0, d.default)(n.id), ee = (0, c.default)(u.id), et = (0, h.default)(n), en = (0, f.default)(n.id), er = (0, b.default)(n, u), ea = n.isNonUserBot(), ei = u.isManaged(), eu = null === (t = u.recipients) || void 0 === t ? void 0 : t.includes(n.id);
                    return (0, r.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: i.closeContextMenu,
                        "aria-label": R.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: P,
                        children: [!ea && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a.MenuGroup, {
                                children: et
                            }), (0, r.jsxs)(a.MenuGroup, {
                                children: [w && G, l && F, D, L, !ei && k, w && B, w && z, Q]
                            }), I && (0, r.jsx)(a.MenuGroup, {
                                children: q
                            }), eu && (0, r.jsxs)(a.MenuGroup, {
                                children: [!ei && W, er]
                            }), (0, r.jsx)(a.MenuGroup, {
                                children: w && V
                            }), (0, r.jsxs)(a.MenuGroup, {
                                children: [I && H, I && Y, w && K, X, w && Z, I && en]
                            }), U && (0, r.jsxs)(a.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, r.jsx)(a.MenuGroup, {
                            children: J
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
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("669491"),
                u = n("77078"),
                o = n("450911"),
                s = n("145079"),
                l = n("87657"),
                c = n("697218"),
                d = n("782340"),
                f = n("839938");

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

            function h(e, t) {
                let n = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser());
                return null == n || t.ownerId !== n.id || e.id === n.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, r.jsx)(u.MenuItem, {
                    id: "make-dm-owner",
                    color: "danger",
                    label: d.default.Messages.CHANGE_DM_OWNER,
                    action: () => {
                        var a;
                        return a = n, void(0, u.openModal)(n => (0, r.jsxs)(u.ConfirmModal, {
                            bodyClassName: f.confirmModal,
                            header: d.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                            confirmText: d.default.Messages.CONFIRM,
                            cancelText: d.default.Messages.CANCEL,
                            onConfirm: () => o.default.setDMOwner(t.id, e.id),
                            ...n,
                            children: [(0, r.jsx)(p, {
                                color: i.default.unsafe_rawColors.PRIMARY_300.css
                            }), (0, r.jsxs)("div", {
                                className: f.fromToWrapper,
                                children: [(0, r.jsx)("div", {
                                    className: f.from,
                                    children: (0, r.jsx)(l.default, {
                                        user: a,
                                        size: u.AvatarSizes.SIZE_80
                                    })
                                }), (0, r.jsx)("div", {
                                    className: f.to,
                                    children: (0, r.jsx)(l.default, {
                                        user: e,
                                        size: u.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: d.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                    usernameHook: (t, n) => (0, r.jsx)(s.default, {
                                        usernameIcon: (0, r.jsx)(u.Avatar, {
                                            className: f.avatarIcon,
                                            src: e.getAvatarURL(void 0, 16),
                                            size: u.AvatarSizes.SIZE_16,
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
                    return h
                },
                default: function() {
                    return g
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("77078"),
                u = n("352674"),
                o = n("42203"),
                s = n("957255"),
                l = n("18494"),
                c = n("659500"),
                d = n("158998"),
                f = n("49111"),
                p = n("782340");

            function h(e, t) {
                let {
                    id: n
                } = e, r = "@".concat(d.default.getUserTag(e, {
                    decoration: "never"
                })), a = "<@".concat(n, ">");
                c.ComponentDispatch.dispatchToLastSubscribed(f.ComponentActions.INSERT_TEXT, {
                    plainText: r,
                    rawText: a
                }), null != t && u.default.startTyping(t)
            }

            function g(e, t, n) {
                let [u, c] = (0, a.useStateFromStoresArray)([l.default, o.default, s.default], () => {
                    let e = l.default.getChannelId(t),
                        n = o.default.getChannel(e),
                        r = null != n && (n.isMultiUserDM() || s.default.can(f.Permissions.SEND_MESSAGES, n));
                    return [e, r]
                }, [t]), d = n === f.AppContext.POPOUT;
                return !c || d ? null : (0, r.jsx)(i.MenuItem, {
                    id: "mention",
                    label: p.default.Messages.MENTION,
                    action: function() {
                        h(e, u)
                    }
                })
            }
        },
        421602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("450911"),
                u = n("54239"),
                o = n("271938"),
                s = n("49111"),
                l = n("782340");

            function c(e, t) {
                let n = o.default.getId(),
                    c = t === s.AppContext.POPOUT;
                return n === e || c ? null : (0, r.jsx)(a.MenuItem, {
                    id: "message-user",
                    label: l.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        i.default.openPrivateChannel(e), (0, u.popLayer)()
                    }
                })
            }
        },
        432487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("77078"),
                u = n("450911"),
                o = n("42203"),
                s = n("697218"),
                l = n("782340");

            function c(e, t) {
                let n = (0, a.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []),
                    c = (0, a.useStateFromStores)([o.default], () => o.default.getChannel(t), [t]);
                return null == c || c.isOwner(e) || null == n || !c.isOwner(n.id) ? null : (0, r.jsx)(i.MenuItem, {
                    id: "remove",
                    label: l.default.Messages.REMOVE_FROM_GROUP,
                    action: () => u.default.removeRecipient(t, e),
                    color: "danger"
                })
            }
        },
        151200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("446674"),
                i = n("77078"),
                u = n("561288"),
                o = n("191145"),
                s = n("271938"),
                l = n("99795"),
                c = n("782340");

            function d(e, t) {
                let n = (0, a.useStateFromStores)([s.default], () => s.default.getId() === e, [e]),
                    [d, f] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.getParticipants(t), o.default.getParticipant(t, e)], [t, e]);
                return n || 0 === d.length ? null : null == f ? (0, r.jsx)(i.MenuItem, {
                    id: "ring",
                    label: c.default.Messages.RING,
                    action: () => u.default.ring(t, [e])
                }) : f.type === l.ParticipantTypes.USER && f.ringing ? (0, r.jsx)(i.MenuItem, {
                    id: "stop-ringing",
                    label: c.default.Messages.STOP_RINGING,
                    action: () => u.default.stopRinging(t, [e])
                }) : null
            }
        }
    }
]);
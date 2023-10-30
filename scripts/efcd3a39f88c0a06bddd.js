(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87493"], {
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, a = 0; i < r; i++) {
                    for (var u = t.charCodeAt(i); a < n;)
                        if (e.charCodeAt(a++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        458389: function(t, e, n) {
            var r = n("594140"),
                i = n("564414"),
                a = n("725502"),
                u = n("591350"),
                l = n("476540"),
                o = n("381178"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var n = a(t),
                    c = !n && i(t),
                    d = !n && !c && u(t),
                    E = !n && !c && !d && o(t),
                    f = n || c || d || E,
                    I = f ? r(t.length, String) : [],
                    T = I.length;
                for (var _ in t)(e || s.call(t, _)) && !(f && ("length" == _ || d && ("offset" == _ || "parent" == _) || E && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || l(_, T))) && I.push(_);
                return I
            }
        },
        562132: function(t, e, n) {
            var r = n("33426"),
                i = n("136047"),
                a = n("270879"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return a(t) && i(t.length) && !!u[r(t)]
            }
        },
        205873: function(t, e, n) {
            var r = n("733228"),
                i = n("541349"),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return i(t);
                var e = [];
                for (var n in Object(t)) a.call(t, n) && "constructor" != n && e.push(n);
                return e
            }
        },
        594140: function(t, e, n) {
            t.exports = function(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }
        },
        492692: function(t, e, n) {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        733228: function(t, e, n) {
            var r = Object.prototype;
            t.exports = function(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r)
            }
        },
        541349: function(t, e, n) {
            var r = n("761197")(Object.keys, Object);
            t.exports = r
        },
        276440: function(t, e, n) {
            t = n.nmd(t);
            var r = n("447414"),
                i = "object" == typeof e && e && !e.nodeType && e,
                a = i && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === i && r.process,
                l = function() {
                    try {
                        var t = a && a.require && a.require("util").types;
                        if (t) return t;
                        return u && u.binding && u.binding("util")
                    } catch (t) {}
                }();
            t.exports = l
        },
        761197: function(t, e, n) {
            t.exports = function(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
        },
        591350: function(t, e, n) {
            t = n.nmd(t);
            var r = n("690516"),
                i = n("221386"),
                a = "object" == typeof e && e && !e.nodeType && e,
                u = a && "object" == typeof t && t && !t.nodeType && t,
                l = u && u.exports === a ? r.Buffer : void 0,
                o = l ? l.isBuffer : void 0;
            t.exports = o || i
        },
        381178: function(t, e, n) {
            var r = n("562132"),
                i = n("492692"),
                a = n("276440"),
                u = a && a.isTypedArray,
                l = u ? i(u) : r;
            t.exports = l
        },
        466731: function(t, e, n) {
            var r = n("458389"),
                i = n("205873"),
                a = n("603108");
            t.exports = function(t) {
                return a(t) ? r(t) : i(t)
            }
        },
        221386: function(t, e, n) {
            t.exports = function() {
                return !1
            }
        },
        376507: function(t, e, n) {
            "use strict";

            function r(t) {
                let e = "==".slice(0, (4 - t.length % 4) % 4),
                    n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    r = atob(n),
                    i = new ArrayBuffer(r.length),
                    a = new Uint8Array(i);
                for (let t = 0; t < r.length; t++) a[t] = r.charCodeAt(t);
                return i
            }

            function i(t) {
                let e = new Uint8Array(t),
                    n = "";
                for (let t of e) n += String.fromCharCode(t);
                let r = btoa(n),
                    i = r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
                return i
            }
            n.r(e), n.d(e, {
                create: function() {
                    return S
                },
                get: function() {
                    return N
                }
            });
            var a = "copy",
                u = "convert";

            function l(t, e, n) {
                if (e === a) return n;
                if (e === u) return t(n);
                if (e instanceof Array) return n.map(n => l(t, e[0], n));
                if (e instanceof Object) {
                    let r = {};
                    for (let [i, a] of Object.entries(e)) {
                        if (a.derive) {
                            let t = a.derive(n);
                            void 0 !== t && (n[i] = t)
                        }
                        if (!(i in n)) {
                            if (a.required) throw Error("Missing key: ".concat(i));
                            continue
                        }
                        if (null == n[i]) {
                            r[i] = null;
                            continue
                        }
                        r[i] = l(t, a.schema, n[i])
                    }
                    return r
                }
            }

            function o(t, e) {
                return {
                    required: !0,
                    schema: t,
                    derive: e
                }
            }

            function s(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function c(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            var d = {
                    type: s(a),
                    id: s(u),
                    transports: c(a)
                },
                E = {
                    appid: c(a),
                    appidExclude: c(a),
                    credProps: c(a)
                },
                f = {
                    appid: c(a),
                    appidExclude: c(a),
                    credProps: c(a)
                },
                I = {
                    publicKey: s({
                        rp: s(a),
                        user: s({
                            id: s(u),
                            name: s(a),
                            displayName: s(a)
                        }),
                        challenge: s(u),
                        pubKeyCredParams: s(a),
                        timeout: c(a),
                        excludeCredentials: c([d]),
                        authenticatorSelection: c(a),
                        attestation: c(a),
                        extensions: c(E)
                    }),
                    signal: c(a)
                },
                T = {
                    type: s(a),
                    id: s(a),
                    rawId: s(u),
                    authenticatorAttachment: c(a),
                    response: s({
                        clientDataJSON: s(u),
                        attestationObject: s(u),
                        transports: o(a, t => {
                            var e;
                            return (null == (e = t.getTransports) ? void 0 : e.call(t)) || []
                        })
                    }),
                    clientExtensionResults: o(f, t => t.getClientExtensionResults())
                },
                _ = {
                    mediation: c(a),
                    publicKey: s({
                        challenge: s(u),
                        timeout: c(a),
                        rpId: c(a),
                        allowCredentials: c([d]),
                        userVerification: c(a),
                        extensions: c(E)
                    }),
                    signal: c(a)
                },
                p = {
                    type: s(a),
                    id: s(a),
                    rawId: s(u),
                    authenticatorAttachment: c(a),
                    response: s({
                        clientDataJSON: s(u),
                        authenticatorData: s(u),
                        signature: s(u),
                        userHandle: s(u)
                    }),
                    clientExtensionResults: o(f, t => t.getClientExtensionResults())
                };
            async function S(t) {
                let e = await navigator.credentials.create(l(r, I, t));
                return l(i, T, e)
            }
            async function N(t) {
                let e = await navigator.credentials.get(l(r, _, t));
                return l(i, p, e)
            }
        },
        666020: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                subscribeMembers: function() {
                    return a
                },
                unsubscribeMembers: function() {
                    return u
                },
                subscribeChannel: function() {
                    return l
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            });
            var r = n("913144"),
                i = n("696605");

            function a(t, e) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: t,
                    userIds: e
                })
            }

            function u(t, e) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: t,
                    userIds: e
                })
            }

            function l(t, e, n) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: t,
                    channelId: e,
                    ranges: n
                })
            }

            function o(t) {
                let {
                    guildId: e,
                    channelId: n,
                    y: r,
                    height: a,
                    rowHeight: u
                } = t;

                function o(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(t / u)) + e)
                }
                let s = [];

                function c(t) {
                    let e = t + (i.MINIMUM_RANGE - 1);
                    return s.push([t, e]), e + 1
                }
                let d = o(.5 * a),
                    E = o(r, -d),
                    f = o(r + a, d);
                for (E > 0 && (E = Math.max(c(0), E)), E = Math.floor(E / i.MINIMUM_RANGE) * i.MINIMUM_RANGE; E <= f;) E = c(E);
                l(e, n, s)
            }
        },
        713841: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("913144"),
                i = n("592407"),
                a = n("482391"),
                u = n("611183"),
                l = {
                    init() {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: t,
                            sectionId: e
                        })
                    },
                    startEditingCommandPermissions(t) {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: t
                        })
                    },
                    stopEditingCommandPermissions(t) {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: t
                        })
                    },
                    startEditingIntegration(t) {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: t
                        })
                    },
                    stopEditingIntegration() {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(t) {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: t
                        })
                    },
                    startEditingWebhook(t) {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: t
                        })
                    },
                    stopEditingWebhook() {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(t) {
                        r.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: t
                        })
                    },
                    async saveApplicationPermissions(t, e, n) {
                        try {
                            r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.updateApplicationCommandPermissions({
                                applicationId: t,
                                commandId: t,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: e,
                                permissions: n
                            }), r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    },
                    async saveIntegration(t, e) {
                        try {
                            r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await i.default.updateIntegration(t, e.id, e.expire_behavior, e.expire_grace_period, e.enable_emoticons), r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    },
                    async saveWebhook(t, e) {
                        try {
                            r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await u.default.update(t, e.id, e), r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (t) {
                            r.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: t.body
                            })
                        }
                    }
                }
        },
        352674: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("913144"),
                i = {
                    startTyping(t) {
                        r.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: t
                        })
                    },
                    stopTyping(t) {
                        r.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: t
                        })
                    }
                }
        },
        611183: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("917351"),
                i = n.n(r),
                a = n("872717"),
                u = n("913144"),
                l = n("49111");
            let o = ["Spidey Bot", "Captain Hook"];
            var s = {
                fetchForGuild(t) {
                    u.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t
                    }), a.default.get({
                        url: l.Endpoints.GUILD_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(e => {
                        let {
                            body: n
                        } = e;
                        return u.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            webhooks: n
                        })
                    }).catch(e => {
                        let {
                            body: n
                        } = e;
                        u.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(t, e) {
                    u.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: t,
                        channelId: e
                    }), a.default.get({
                        url: l.Endpoints.CHANNEL_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: r
                        } = n;
                        return u.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: t,
                            channelId: e,
                            webhooks: r
                        })
                    })
                },
                create: (t, e, n) => (null == n && (n = o[i.random(0, o.length - 1)]), a.default.post({
                    url: l.Endpoints.CHANNEL_WEBHOOKS(e),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return u.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: t,
                        webhook: n
                    }), n
                })),
                delete: (t, e) => a.default.delete({
                    url: l.Endpoints.WEBHOOK(e),
                    oldFormErrors: !0
                }).then(() => {
                    u.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: t,
                        webhookId: e
                    })
                }),
                update: (t, e, n) => a.default.patch({
                    url: l.Endpoints.WEBHOOK(e),
                    body: n,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: n
                    } = e;
                    return u.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: t,
                        webhook: n
                    }), n
                })
            }
        },
        503420: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ClockIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm1-18a1 1 0 1 0-2 0v7a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V5Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        926001: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                SlashBoxIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        763898: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i() {
                let t = r.useRef(null);
                return null === t.current && (t.current = new AbortController), r.useEffect(() => () => {
                    var e;
                    null === (e = t.current) || void 0 === e || e.abort()
                }, []), t.current.signal
            }
        },
        750560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useSubscribeGuildMembers: function() {
                    return l
                }
            }), n("37983");
            var r = n("884691"),
                i = n("917351"),
                a = n.n(i);
            n("233736");
            var u = n("666020");

            function l(t) {
                r.useEffect(() => (a.forEach(t, (t, e) => (0, u.subscribeMembers)(e, t)), () => {
                    a.forEach(t, (t, e) => (0, u.unsubscribeMembers)(e, t))
                }), [t])
            }
        },
        970254: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                UserAppsTreatment: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var r, i, a = n("862205");
            (r = i || (i = {})).ALLOWED = "allowed", r.DEFAULT = "default";
            var u = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_user_apps",
                label: "Allow user app commands",
                defaultConfig: {
                    userAppsTreatment: i.DEFAULT
                },
                treatments: [{
                    id: 1,
                    label: "Allow user app commands",
                    config: {
                        userAppsTreatment: i.ALLOWED
                    }
                }]
            })
        },
        991630: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                u = n.n(a),
                l = n("587974"),
                o = n("315102"),
                s = n("524768"),
                c = n("616674"),
                d = n("363577");

            function E(t) {
                let {
                    section: e,
                    isSelected: n,
                    width: a,
                    height: E,
                    className: f,
                    selectable: I = !1,
                    onFocus: T,
                    onBlur: _,
                    onMouseOver: p,
                    onMouseLeave: S,
                    ...N
                } = t, [A, C] = i.useState(!1), h = i.useCallback(() => {
                    C(!0), null == T || T()
                }, [T]), m = i.useCallback(() => {
                    C(!1), null == _ || _()
                }, [_]), O = i.useCallback(() => {
                    C(!0), null == p || p()
                }, [p]), g = i.useCallback(() => {
                    C(!1), null == S || S()
                }, [S]), D = i.useMemo(() => {
                    if (e.type === s.ApplicationCommandSectionType.APPLICATION) {
                        var t;
                        return o.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            bot: null === (t = e.application) || void 0 === t ? void 0 : t.bot,
                            botIconFirst: !0,
                            size: a
                        })
                    }
                    return d
                }, [e, a]);
                return (0, r.jsx)("div", {
                    ...N,
                    className: u(c.wrapper, f, {
                        [c.selectable]: I,
                        [c.selected]: I && n
                    }),
                    onFocus: h,
                    onBlur: m,
                    onMouseOver: O,
                    onMouseLeave: g,
                    children: (0, r.jsx)(l.default, {
                        className: c.mask,
                        mask: I && (n || A) ? l.MaskIDs.SQUIRCLE : l.MaskIDs.AVATAR_DEFAULT,
                        width: a,
                        height: E,
                        children: (0, r.jsx)("img", {
                            alt: "",
                            className: c.icon,
                            style: {
                                width: a,
                                height: E
                            },
                            src: D
                        })
                    })
                })
            }
        },
        943161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                u = n("83910"),
                l = n("93393"),
                o = n("317041"),
                s = n("749296");
            let c = t => {
                switch (t.id) {
                    case o.BuiltInSectionId.BUILT_IN:
                        return u.default;
                    case o.BuiltInSectionId.FRECENCY:
                        return l.default;
                    default:
                        return
                }
            };

            function d(t) {
                let {
                    section: e,
                    className: n,
                    width: i,
                    height: u,
                    padding: l,
                    isSelected: o,
                    selectable: d = !1,
                    ...E
                } = t, f = c(e);
                return (0, r.jsx)("div", {
                    className: a(s.wrapper, n, {
                        [s.selectable]: d,
                        [s.selected]: d && o
                    }),
                    style: {
                        width: i,
                        height: u,
                        padding: null != l ? l : 0
                    },
                    children: null != f ? (0, r.jsx)(f, {
                        className: s.icon,
                        width: i,
                        height: u,
                        ...E
                    }) : null
                })
            }
        },
        355263: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getIconComponent: function() {
                    return l
                },
                pxToRem: function() {
                    return o
                },
                getCommandQuery: function() {
                    return s
                }
            });
            var r = n("524768"),
                i = n("991630"),
                a = n("943161"),
                u = n("317041");
            let l = t => t.type === r.ApplicationCommandSectionType.BUILT_IN ? a.default : i.default;

            function o(t) {
                return "".concat(t / 16, "rem")
            }

            function s(t, e) {
                let n = e,
                    r = !1,
                    i = e.indexOf(":");
                if (i >= 0) {
                    let t = e.lastIndexOf(" ", i);
                    t >= 0 ? (e = e.substring(0, t), r = !0) : e = e.substring(0, i)
                } else e = e.substring(0, e.length);
                let a = e.split(" ", u.MAX_SUBCOMMAND_LEVEL + 1);
                return a.length > u.MAX_SUBCOMMAND_LEVEL && (r = !0, a.pop()), e = a.join(" "), (n.length > e.length || e.endsWith(" ")) && (r = !0, e = e.trimEnd()), {
                    text: e,
                    parts: a,
                    hasSpaceTerminator: r
                }
            }
        },
        633043: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("850572"),
                u = () => (0, r.jsx)("div", {
                    className: a.loadingWrapper,
                    children: (0, r.jsx)(i.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        337026: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useShowApplicationInGDM: function() {
                    return u
                }
            });
            var r = n("65597"),
                i = n("42203"),
                a = n("337026");

            function u(t) {
                let e = (0, r.default)([i.default], () => i.default.getChannel(t)),
                    {
                        enabled: n
                    } = a.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(t) {
                    return null != t && (!!t.isMultiUserDM() || !!t.isDM() && !t.isSystemDM() && null == t.rawRecipients.find(t => t.bot))
                }(e)
            }
        },
        149022: function(t, e, n) {
            "use strict";

            function r() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function i(t) {
                return {
                    textValue: t,
                    richValue: u(t)
                }
            }
            n.r(e), n.d(e, {
                createEmptyState: function() {
                    return r
                },
                createState: function() {
                    return i
                },
                toRichValue: function() {
                    return u
                },
                voidToOptionValue: function() {
                    return l
                }
            });
            let a = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function u(t) {
                return "" !== t ? t.split("\n").map(t => ({
                    type: "line",
                    children: [{
                        text: t
                    }]
                })) : a
            }

            function l(t) {
                switch (t.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: t.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: t.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: t.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: t.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: t.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: t.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: t.emoji.name, surrogate: t.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: t.emoji.emojiId, name: t.emoji.name, animated: t.emoji.animated
                        };
                    case "testInlineVoid":
                        throw Error("Unable to convert test types")
                }
                return null
            }
        },
        235275: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useIsDMsToClydeEnabled: function() {
                    return o
                }
            });
            var r = n("446674"),
                i = n("862205"),
                a = n("305961"),
                u = n("980215");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-05_clyde_ai_dm",
                label: "DMs to Clyde",
                defaultConfig: {
                    isDMsToClydeEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable dms to clyde",
                    config: {
                        isDMsToClydeEnabled: !0
                    }
                }]
            });

            function o() {
                let {
                    isDMsToClydeEnabled: t
                } = l.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), e = (0, r.useStateFromStoresArray)([a.default], () => a.default.getGuildIds()), n = e.some(t => (0, u.getClydeExperimentEnabled)(a.default.getGuild(t)));
                return t && n
            }
        },
        497660: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("446674"),
                u = n("77078"),
                l = n("713841"),
                o = n("592407"),
                s = n("305961"),
                c = n("957255"),
                d = n("49111"),
                E = n("782340"),
                f = n("460856");

            function I(t, e, n) {
                let I = s.default.getGuild(e),
                    T = (0, a.useStateFromStores)([c.default], () => null != I ? c.default.can(d.Permissions.MANAGE_GUILD, I) : null),
                    _ = i.useCallback(() => {
                        o.default.open(e, d.GuildSettingsSections.INTEGRATIONS), l.default.setSection(d.IntegrationSettingsSections.APPLICATION, t.id)
                    }, [t.id, e]),
                    p = n === d.AppContext.POPOUT;
                return t.bot && T && !p ? (0, r.jsx)(u.MenuItem, {
                    id: "manage-integration",
                    label: (0, r.jsx)("div", {
                        className: f.labelWrapper,
                        children: (0, r.jsx)("span", {
                            className: f.label,
                            children: E.default.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: _
                }) : null
            }
        },
        406043: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useCurrentUserCommunicationDisabled: function() {
                    return l
                },
                default: function() {
                    return c
                },
                userCommunicationDisabled: function() {
                    return d
                }
            });
            var r = n("446674"),
                i = n("26989"),
                a = n("697218"),
                u = n("509");

            function l(t) {
                let e = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser());
                return c(null == e ? void 0 : e.id, t)
            }

            function o(t, e, n) {
                return null != e && null != t ? n.getMember(e, t) : null
            }

            function s(t) {
                var e;
                return [null !== (e = null == t ? void 0 : t.communicationDisabledUntil) && void 0 !== e ? e : null, (0, u.isMemberCommunicationDisabled)(t)]
            }

            function c(t, e) {
                let n = (0, r.useStateFromStores)([i.default], () => o(t, e, i.default), [e, t]);
                return s(n)
            }

            function d(t, e) {
                let n = o(t, e, i.default);
                return s(n)
            }
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return l
                },
                setCurrentGuild: function() {
                    return o
                },
                initGuildIdentitySettings: function() {
                    return s
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return f
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return _
                },
                setPendingThemeColors: function() {
                    return p
                },
                resetPendingMemberChanges: function() {
                    return S
                },
                resetPendingProfileChanges: function() {
                    return N
                },
                resetAllPending: function() {
                    return A
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return h
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("54239"),
                u = n("49111");
            async function l(t, e) {
                let {
                    nick: n,
                    avatar: a
                } = e;
                if (null == t) throw Error("Need guildId");
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await r.default.patch({
                        url: u.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: a
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function o(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function s(t, e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function c() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, a.popLayer)()
            }

            function d() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function f(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function I(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function T(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function _(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function p(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function S() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function N() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function A() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function h(t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let r, i, a, u, l, o, s, c, d;
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var E = n("446674"),
                f = n("913144"),
                I = n("49111");
            let T = I.FormStates.CLOSED,
                _ = {},
                p = !1;

            function S() {
                T = I.FormStates.CLOSED, _ = {}, s = null, c = void 0, d = []
            }

            function N() {
                A(), C(), _ = {}, T = I.FormStates.OPEN
            }

            function A() {
                r = void 0, l = void 0
            }

            function C() {
                i = void 0, a = void 0, u = void 0, o = void 0
            }
            class h extends E.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return _
                }
                showNotice() {
                    return void 0 !== r || void 0 !== i || void 0 !== a || void 0 !== u || void 0 !== l || void 0 !== o
                }
                getPendingAvatar() {
                    return r
                }
                getPendingBanner() {
                    return i
                }
                getPendingBio() {
                    return a
                }
                getPendingNickname() {
                    return l
                }
                getPendingPronouns() {
                    return u
                }
                getPendingAccentColor() {
                    return l
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: r,
                        pendingBanner: i,
                        pendingBio: a,
                        pendingPronouns: u,
                        pendingNickname: l,
                        pendingThemeColors: o
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return p
                }
            }
            h.displayName = "GuildIdentitySettingsStore";
            var m = new h(f.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    s = t.guild, T = I.FormStates.OPEN, _ = {}, c = t.source, d = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: S,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    N(), S()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    s = t.guild, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = I.FormStates.SUBMITTING, _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (T !== I.FormStates.SUBMITTING) return !1;
                    T = I.FormStates.OPEN, _ = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    T = I.FormStates.OPEN, _ = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    a = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    l = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    o = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    _ = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    p = e
                }
            })
        },
        130037: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useTrackMemberSearchUsed: function() {
                    return I
                },
                useTrackMemberFilterRolesUsed: function() {
                    return T
                },
                MemberSafetyFlagType: function() {
                    return a
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return _
                },
                ModerationActionType: function() {
                    return u
                },
                useTrackModerationAction: function() {
                    return p
                }
            });
            var r, i, a, u, l = n("884691"),
                o = n("812204"),
                s = n("716241"),
                c = n("271938"),
                d = n("599110"),
                E = n("49111");

            function f(t, e, n) {
                var r;
                let i = {
                    ...e,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (r = e.guild_id) && void 0 !== r ? r : n)
                };
                d.default.track(t, i)
            }

            function I(t) {
                let e = l.useCallback(e => {
                    ! function(t) {
                        let e = {
                            guild_id: t,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, e)
                    }(t)
                }, [t]);
                return e
            }

            function T(t) {
                let e = l.useCallback(e => {
                    ! function(t, e) {
                        let n = {
                            selected_role_count: e.size,
                            guild_id: t,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(t, e)
                }, [t]);
                return e
            }(r = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", r.COMMUNICATION_DISABLED = "communication_disabled";

            function _(t) {
                let e = l.useCallback(e => {
                    ! function(t, e) {
                        let n = {
                            flag_type: e,
                            guild_id: t,
                            location: o.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(t, e)
                }, [t]);
                return e
            }

            function p(t, e) {
                let {
                    location: n,
                    targetUserId: r,
                    targets: i
                } = e, a = l.useCallback(e => {
                    let a = {
                        action_type: e,
                        mod_user_id: c.default.getId(),
                        guild_id: t,
                        location: n,
                        target_user_id: null != r ? r : void 0,
                        targets: null != i ? i : void 0
                    };
                    f(E.AnalyticEvents.MODERATION_ACTION, a)
                }, [t, n, r, i]);
                return a
            }(i = u || (u = {})).BAN = "ban", i.KICK = "kick", i.MUTE = "mute", i.TIMEOUT = "timeout", i.ADD_ROLE = "add_role", i.REMOVE_ROLE = "remove_role", i.COPY_ID = "copy_id", i.CHANGE_NICKNAME = "change_nickname"
        },
        482391: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                clearIntegrationPermissions: function() {
                    return o
                },
                editPermissions: function() {
                    return s
                },
                getApplicationCommands: function() {
                    return c
                },
                getApplicationCommandPermissions: function() {
                    return d
                },
                initIntegrationPermissions: function() {
                    return E
                },
                resetPermissions: function() {
                    return f
                },
                updateApplicationCommandPermissions: function() {
                    return I
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("507217"),
                u = n("389153"),
                l = n("49111");

            function o() {
                i.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function s(t, e, n) {
                i.default.dispatch({
                    applicationId: t,
                    commandId: e,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function c(t, e) {
                r.default.get(l.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(t, e)).then(n => {
                    i.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: e,
                        commands: n.body.application_commands,
                        guildId: t,
                        permissions: n.body.permissions
                    })
                }, () => {
                    i.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: e
                    })
                })
            }
            async function d(t, e, n) {
                let a = [];
                try {
                    let i = await r.default.get(l.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(t, e, n));
                    i.ok && (a = i.body.permissions)
                } catch (r) {
                    if (404 !== r.status) {
                        i.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: t,
                            commandId: n,
                            guildId: e
                        });
                        return
                    }
                }
                i.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: e,
                    permissions: a
                })
            }

            function E(t) {
                i.default.dispatch({
                    applicationId: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function f(t) {
                i.default.dispatch({
                    commandId: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function I(t) {
                let {
                    applicationId: e,
                    commandId: n,
                    defaultEveryoneValue: r,
                    defaultEverywhereValue: l,
                    guildId: o,
                    permissions: s
                } = t, c = n === e ? function(t, e, n, r) {
                    if (!n || !r) return e;
                    let i = {
                        [t]: n,
                        [(0, u.allChannelsSentinel)(t)]: r
                    };
                    return e.filter(t => {
                        let e = i[t.id];
                        return null == e || t.permission !== e
                    })
                }(o, s, r, l) : s, d = await a.updateApplicationGuildCommandPermissions(e, o, n, c);
                d.ok && i.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: o,
                    permissions: d.body.permissions
                })
            }
        },
        274800: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                queueInteractionComponentState: function() {
                    return u
                },
                addQueued: function() {
                    return l
                },
                setFailed: function() {
                    return o
                },
                fetchMessageInteractionData: function() {
                    return s
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("49111");

            function u(t, e, n, r) {
                i.default.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: t,
                    nonce: e,
                    state: n,
                    indices: r
                })
            }

            function l(t, e) {
                let {
                    data: n,
                    messageId: r,
                    onCreate: a,
                    onSuccess: u,
                    onFailure: l
                } = e;
                i.default.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: t,
                    messageId: r,
                    onCreate: a,
                    onSuccess: u,
                    onFailure: l
                })
            }

            function o(t, e, n) {
                i.default.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: t,
                    errorMessage: n,
                    errorCode: e
                })
            }
            async function s(t, e) {
                let n = await r.default.get({
                    url: a.Endpoints.MESSAGE_INTERACTION_DATA(t, e),
                    oldFormErrors: !0
                });
                if (n.ok) {
                    let r = n.body;
                    i.default.dispatch({
                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                        channelId: t,
                        messageId: e,
                        interactionData: r
                    })
                }
            }
        },
        809810: function(t, e, n) {
            "use strict";
            let r, i;
            n.r(e), n.d(e, {
                default: function() {
                    return T
                }
            });
            var a = n("446674"),
                u = n("913144"),
                l = n("798609"),
                o = n("42203"),
                s = n("3765");
            let c = {},
                d = {},
                E = {};

            function f(t) {
                delete c[t];
                let e = E[t];
                null != e && delete d[e], delete E[t]
            }
            class I extends a.default.Store {
                getInteraction(t) {
                    let e = d[t.id];
                    return null != e ? c[e] : null
                }
                getMessageInteractionStates() {
                    let t = {};
                    for (let [e, n] of Object.entries(c)) {
                        let r = E[e];
                        null != r && (t[r] = n.state)
                    }
                    return t
                }
                canQueueInteraction(t, e) {
                    let n = d[t];
                    return (null == n || null == c[n] || c[n].state === s.InteractionState.FAILED) && (null == c[e] || c[e].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return i
                }
                getIFrameModalKey() {
                    return r
                }
            }
            I.displayName = "InteractionStore";
            var T = new I(u.default, {
                LOGOUT: function() {
                    c = {}, d = {}, E = {}
                },
                INTERACTION_QUEUE: function(t) {
                    let {
                        nonce: e,
                        messageId: n,
                        data: r,
                        onCreate: i,
                        onCancel: a,
                        onSuccess: u,
                        onFailure: l
                    } = t;
                    null != n && (d[n] = e, E[e] = n), c[e] = {
                        state: s.InteractionState.QUEUED,
                        data: r,
                        onCreate: i,
                        onCancel: a,
                        onSuccess: u,
                        onFailure: l
                    }
                },
                INTERACTION_CREATE: function(t) {
                    var e;
                    let {
                        nonce: n,
                        interactionId: r
                    } = t;
                    if (null == n) return !1;
                    let i = c[n];
                    if (null == i || i.state !== s.InteractionState.QUEUED) return !1;
                    i.state = s.InteractionState.CREATED, null === (e = i.onCreate) || void 0 === e || e.call(i, r)
                },
                INTERACTION_SUCCESS: function(t) {
                    var e;
                    let {
                        nonce: n
                    } = t;
                    if (null == n) return !1;
                    let r = c[n];
                    if (null == r) return !1;
                    null === (e = r.onSuccess) || void 0 === e || e.call(r), f(n)
                },
                INTERACTION_FAILURE: function(t) {
                    var e;
                    let {
                        nonce: n,
                        errorCode: r,
                        errorMessage: i
                    } = t;
                    if (null == n) return !1;
                    let a = c[n];
                    if (null == a) return !1;
                    null === (e = a.onFailure) || void 0 === e || e.call(a, r, i), a.data.interactionType === l.InteractionTypes.APPLICATION_COMMAND ? f(n) : c[n] = {
                        ...a,
                        state: s.InteractionState.FAILED,
                        errorCode: r,
                        errorMessage: i
                    }
                },
                MESSAGE_CREATE: function(t) {
                    let {
                        message: e
                    } = t;
                    if (null == e.nonce) return !1;
                    {
                        var n;
                        let t = c[e.nonce];
                        if (null == t) return !1;
                        null === (n = t.onSuccess) || void 0 === n || n.call(t), f(e.nonce)
                    }
                },
                CHANNEL_SELECT: function(t) {
                    let {
                        channelId: e
                    } = t, n = o.default.getChannel(e);
                    if (null == n) return !1;
                    for (let [t, e] of Object.entries(c)) e.state === s.InteractionState.FAILED && f(t)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(t) {
                    let {
                        application: e
                    } = t;
                    i = e.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    r = void 0, i = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(t) {
                    let {
                        modalKey: e
                    } = t;
                    r = e
                }
            })
        },
        3765: function(t, e, n) {
            "use strict";
            var r, i;
            n.r(e), n.d(e, {
                InteractionState: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.QUEUED = 0] = "QUEUED", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED"
        },
        752598: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getInteractionTimeoutTimestamp: function() {
                    return p
                },
                executeMessageComponentInteraction: function() {
                    return S
                },
                handleInteractionResponse: function() {
                    return A
                },
                InteractionStatusViewState: function() {
                    return i
                },
                getInteractionStatusViewState: function() {
                    return C
                },
                canRetryInteractionData: function() {
                    return h
                }
            });
            var r, i, a = n("249654"),
                u = n("872717"),
                l = n("913144"),
                o = n("819689"),
                s = n("798609"),
                c = n("263024"),
                d = n("271938"),
                E = n("274800"),
                f = n("809810"),
                I = n("3765"),
                T = n("606981"),
                _ = n("49111");

            function p(t) {
                return null == t || "" === t || Number.isNaN(t) ? Date.now() : a.default.extractTimestamp(t) + 9e5
            }
            let S = async t => {
                let {
                    componentType: e,
                    messageId: n,
                    messageFlags: r,
                    customId: i,
                    indices: l,
                    applicationId: o,
                    channelId: I,
                    guildId: T,
                    localState: p
                } = t, S = a.default.fromTimestamp(Date.now());
                if (!f.default.canQueueInteraction(n, S)) return;
                await c.default.unarchiveThreadIfNecessary(I), (0, E.addQueued)(S, {
                    messageId: n,
                    data: {
                        interactionType: s.InteractionTypes.MESSAGE_COMPONENT,
                        customId: i,
                        indices: l
                    },
                    onFailure: (t, e) => N(I, t, e)
                }), null != p && (0, E.queueInteractionComponentState)(n, S, p, l);
                let C = {
                    type: s.InteractionTypes.MESSAGE_COMPONENT,
                    nonce: S,
                    guild_id: T,
                    channel_id: I,
                    message_flags: r,
                    message_id: n,
                    application_id: o,
                    session_id: d.default.getSessionId(),
                    data: {
                        component_type: e,
                        custom_id: i,
                        ... function(t) {
                            if (null == t) return null;
                            if (t.type === s.ComponentType.STRING_SELECT || t.type === s.ComponentType.INPUT_TEXT) return t;
                            let e = t.selectedOptions.map(t => t.value);
                            return {
                                type: t.type,
                                values: e
                            }
                        }(p)
                    }
                };
                await u.default.post({
                    url: _.Endpoints.INTERACTIONS,
                    body: C,
                    timeout: 3e3
                }, t => {
                    A(S, I, T, t)
                })
            }, N = (t, e, n) => {
                null == n && null != e && o.default.sendClydeError(t, e)
            }, A = (t, e, n, r) => {
                if (!r.ok) {
                    if (!r.hasErr) {
                        var i;
                        if (r.status >= 400 && r.status < 500 && r.body) {
                            if (r.body.code === _.AbortCodes.INVALID_FORM_BODY && r.body.errors) {
                                let i = (0, T.getFirstSkemaError)(r.body.errors);
                                null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && l.default.dispatch({
                                    type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                    channelId: e,
                                    guildId: n
                                }), (0, E.setFailed)(t, void 0, null == i ? void 0 : i.message);
                                return
                            }(0, E.setFailed)(t, void 0, r.body.message);
                            return
                        }(0, E.setFailed)(t, null === (i = r.body) || void 0 === i ? void 0 : i.code);
                        return
                    }(0, E.setFailed)(t)
                }
            };
            (r = i || (i = {}))[r.SENDING = 0] = "SENDING", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED", r[r.TIMED_OUT = 3] = "TIMED_OUT";
            let C = (t, e) => {
                var n;
                let r = null == e ? void 0 : e.state,
                    u = t.state === _.MessageStates.SENT && p(t.id) < Date.now();
                let l = t.state === _.MessageStates.SEND_FAILED && (null == (n = t.id) || "" === n || Number.isNaN(n) ? Date.now() : a.default.extractTimestamp(n) + 3e3) < Date.now(),
                    o = (null == e ? void 0 : e.data.interactionType) === s.InteractionTypes.APPLICATION_COMMAND,
                    c = t.isCommandType();
                if (o && r === I.InteractionState.QUEUED || c && t.state === _.MessageStates.SENDING && null != e) return i.SENDING;
                if (o && r === I.InteractionState.CREATED || t.hasFlag(_.MessageFlags.LOADING) && !u) return i.CREATED;
                if (null != t.interaction && t.hasFlag(_.MessageFlags.LOADING) && u) return i.TIMED_OUT;
                else if (null != t.interaction && !t.hasFlag(_.MessageFlags.LOADING) && l) return i.TIMED_OUT;
                else if (c && t.state === _.MessageStates.SEND_FAILED) return i.FAILED
            };

            function h(t) {
                var e;
                let n = t.options;
                for (;
                    (null === (e = n) || void 0 === e ? void 0 : e.length) === 1 && (n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || n[0].type === s.ApplicationCommandOptionType.SUB_COMMAND);) n = n[0].options;
                for (let t of null != n ? n : [])
                    if (t.type === s.ApplicationCommandOptionType.ATTACHMENT) return !1;
                return !0
            }
        },
        606981: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getFirstSkemaError: function() {
                    return i
                }
            });
            let r = "_errors";

            function i(t) {
                return function t(e, n) {
                    let i = e[r];
                    if (null != i && Array.isArray(i)) return i[0];
                    for (let [i, a] of Object.entries(e))
                        if (i !== r && null != a && "object" == typeof a) return t(a, null != n ? n : i);
                    return null
                }(t, void 0)
            }
        },
        970755: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fetchApplicationsShelf: function() {
                    return o
                },
                fetchPrivateChannelIntegrations: function() {
                    return s
                },
                deletePrivateChannelIntegration: function() {
                    return c
                }
            }), n("746379");
            var r = n("981980"),
                i = n("872717"),
                a = n("913144");
            n("253981");
            var u = n("140596"),
                l = n("49111");
            n("843455"), n("782340");

            function o() {
                u.default.getApplicationsShelfFetchState() === u.FetchState.NOT_FETCHED && (a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), i.default.get(l.Endpoints.APPLICATIONS_SHELF).then(t => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: t.body.applications
                })).catch(t => a.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function s(t) {
                let e = new r.default(1e3, 5e3);
                a.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: t
                }), i.default.get({
                    url: l.Endpoints.CHANNEL_INTEGRATIONS(t),
                    backoff: e,
                    retries: 10
                }).then(e => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: t,
                        integrations: e.body
                    })
                }).catch(() => {
                    a.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: t
                    })
                })
            }

            function c(t, e) {
                return i.default.delete(l.Endpoints.CHANNEL_INTEGRATION(t, e)).then(t => {
                    var e;
                    if (null === (e = t.body) || void 0 === e ? void 0 : e.message) throw Error(t.body.message)
                })
            }
        },
        252063: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                usePrivateChannelIntegrationState: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("446674"),
                a = n("201155"),
                u = n("21121"),
                l = n("970755"),
                o = n("140596");

            function s(t) {
                let {
                    channelId: e
                } = t;
                (0, u.useInMainTabsExperiment)();
                let n = (0, a.useShowApplicationInGDM)(e),
                    {
                        installedIntegrations: s,
                        applicationsShelf: c,
                        integrationsFetchState: d,
                        applicationsShelfFetchState: E
                    } = (0, i.useStateFromStoresObject)([o.default], () => ({
                        installedIntegrations: o.default.getIntegrations(e),
                        applicationsShelf: o.default.getApplicationsShelf(),
                        integrationsFetchState: o.default.getIntegrationsFetchState(e),
                        applicationsShelfFetchState: o.default.getApplicationsShelfFetchState()
                    }));
                r.useEffect(() => {
                    n && ((d === o.FetchState.NOT_FETCHED || d === o.FetchState.FETCH_FAILED) && (0, l.fetchPrivateChannelIntegrations)(e), (E === o.FetchState.NOT_FETCHED || E === o.FetchState.FETCH_FAILED) && (0, l.fetchApplicationsShelf)())
                }, [n, e, d, E]);
                let f = new Set(s.map(t => t.application.id)),
                    I = c.filter(t => !f.has(t.id));
                return {
                    installedIntegrations: s,
                    availableApplications: I,
                    applicationsShelf: c,
                    fetched: d !== o.FetchState.NOT_FETCHED && d !== o.FetchState.FETCHING && E !== o.FetchState.NOT_FETCHED && E !== o.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        140596: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return p
                }
            });
            var r, i, a = n("446674"),
                u = n("913144"),
                l = n("653047"),
                o = n("946028");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FETCH_FAILED = 3] = "FETCH_FAILED";
            let s = new Map,
                c = new Map,
                d = [],
                E = i.NOT_FETCHED,
                f = [];
            class I extends a.default.Store {
                getIntegrations(t) {
                    var e;
                    return null !== (e = s.get(t)) && void 0 !== e ? e : f
                }
                getIntegration(t, e) {
                    var n;
                    return null === (n = s.get(t)) || void 0 === n ? void 0 : n.find(t => t.application.id === e)
                }
                getAllIntegrations() {
                    return s
                }
                getIntegrationsFetchState(t) {
                    var e;
                    return null !== (e = c.get(t)) && void 0 !== e ? e : i.NOT_FETCHED
                }
                getApplicationsShelfFetchState() {
                    return E
                }
                getApplicationsShelf() {
                    return d
                }
            }

            function T(t) {
                return t.sort((t, e) => t.application.name.localeCompare(e.application.name))
            }
            I.displayName = "PrivateChannelIntegrationStore";
            let _ = new I(u.default, {
                LOGOUT() {
                    s.clear()
                },
                CONNECTION_OPEN() {
                    s.clear(), c.clear()
                },
                CHANNEL_SELECT(t) {
                    let {
                        channelId: e
                    } = t;
                    if (null == e || c.get(e) !== i.FETCH_FAILED) return !1;
                    c.set(e, i.NOT_FETCHED)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    E = i.FETCHING
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(t) {
                    let {
                        applications: e
                    } = t;
                    d = e.map(l.default.createFromServer).sort((t, e) => t.name.localeCompare(e.name)), E = i.FETCHED
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    E = i.FETCH_FAILED
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(t) {
                    let {
                        channelId: e
                    } = t;
                    s.set(e, null), c.set(e, i.FETCHING)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(t) {
                    let {
                        channelId: e,
                        integrations: n
                    } = t;
                    s.set(e, T(n.map(o.createPrivateChannelIntegration))), c.set(e, i.FETCHED)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(t) {
                    let {
                        channelId: e
                    } = t;
                    c.set(e, i.FETCH_FAILED)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(t) {
                    let {
                        integration: e
                    } = t, n = s.get(e.channel_id);
                    if (null == n) return !1;
                    s.set(e.channel_id, T([...n, (0, o.createPrivateChannelIntegration)(e)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(t) {
                    let {
                        integration: e
                    } = t, n = s.get(e.channel_id);
                    if (null == n) return !1;
                    let r = (0, o.createPrivateChannelIntegration)(e),
                        i = n.findIndex(t => t.application.id === r.application.id),
                        a = [...n]; - 1 === i ? a.push(r) : a[i] = r, s.set(r.channel_id, T(a))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(t) {
                    let {
                        channelId: e,
                        applicationId: n
                    } = t, r = s.get(e);
                    if (null == r) return !1;
                    s.set(e, r.filter(t => t.application.id !== n))
                },
                CHANNEL_DELETE(t) {
                    let {
                        channel: e
                    } = t;
                    return s.delete(e.id)
                }
            });
            var p = _
        },
        38766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("79112"),
                a = n("685665"),
                u = n("929423");
            n("424562");
            var l = n("49111"),
                o = n("397336");

            function s(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = t, {
                    analyticsLocations: E
                } = (0, a.default)(), f = (0, r.useCallback)(() => {
                    null != e && (0, u.initGuildIdentitySettings)(e, null != c ? c : E), i.default.open(l.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [e, n, s, c, d, E]);
                return f
            }
        },
        85166: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("42203"),
                l = n("305961"),
                o = n("957255"),
                s = n("697218"),
                c = n("244480"),
                d = n("325861"),
                E = n("49111"),
                f = n("782340");

            function I(t, e, n) {
                var I;
                let T = u.default.getChannel(n),
                    _ = (0, i.useStateFromStores)([l.default], () => l.default.getGuild(e), [e]),
                    p = (0, i.useStateFromStores)([d.default], () => d.default.getPermissionsForUser(t.id, n), [n, t.id]),
                    S = (null === (I = s.default.getCurrentUser()) || void 0 === I ? void 0 : I.id) === t.id,
                    N = (0, i.useStateFromStores)([o.default], () => null != n && o.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != T && null != _ && (N || S) && p.speaker ? (0, r.jsx)(a.MenuItem, {
                    id: "audience",
                    label: S ? f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        S ? (0, c.moveSelfToAudience)(T) : (0, c.moveUserToAudience)(t, T)
                    }
                }) : null
            }
        },
        834247: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return j
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("272030"),
                u = n("838446"),
                l = n("158534"),
                o = n("798609"),
                s = n("846883"),
                c = n("812204"),
                d = n("243288"),
                E = n("321135"),
                f = n("873254"),
                I = n("235275"),
                T = n("861370"),
                _ = n("230947"),
                p = n("497660"),
                S = n("726750"),
                N = n("85166"),
                A = n("170990"),
                C = n("304582"),
                h = n("72057"),
                m = n("300925"),
                O = n("563816"),
                g = n("489836"),
                D = n("406703"),
                G = n("502533"),
                M = n("314838"),
                y = n("383161"),
                R = n("421602"),
                L = n("459870"),
                v = n("692986"),
                b = n("806179"),
                U = n("97508"),
                F = n("816106"),
                P = n("623879"),
                x = n("49111"),
                H = n("782340"),
                j = (0, l.default)((0, u.default)(function(t) {
                    let {
                        user: e,
                        guildId: n,
                        channel: u,
                        showMediaItems: l = !1,
                        showChatItems: c = !0,
                        showChannelCallItems: j = !1,
                        showModalItems: B = !0,
                        showStageChannelItems: w = !1,
                        context: k,
                        onSelect: V,
                        onHeightUpdate: Y
                    } = t, K = (0, b.default)(e.id, n, u.id), W = (0, y.default)(e, n, k), Q = (0, R.default)(e.id, k), X = (0, P.default)(e.id), Z = (0, D.default)(e, k), q = (0, h.default)({
                        user: e,
                        guildId: n,
                        context: k
                    }), z = (0, C.default)(e), J = (0, F.default)(e.id), $ = (0, v.default)(e.id), tt = (0, _.default)({
                        guildId: n,
                        userId: e.id,
                        analyticsLocation: {
                            page: x.AnalyticsPages.GUILD_CHANNEL,
                            section: x.AnalyticsSections.CHAT_USERNAME,
                            object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: k
                    }), te = (0, M.default)(e, n), tn = (0, s.default)(null, e), tr = (0, A.default)(e), ti = (0, g.default)(e), ta = (0, m.default)(e, n, u.id), tu = (0, U.default)(e.id, n), tl = (0, L.default)(e, n), to = (0, T.default)({
                        id: e.id,
                        label: H.default.Messages.COPY_ID_USER
                    }), ts = (0, G.default)(e.id, u.id), tc = (0, E.default)(e.id), td = (0, d.default)(u.id), tE = (0, S.default)(e), tf = (0, N.default)(e, n, u.id), tI = (0, O.default)({
                        commandType: o.ApplicationCommandType.USER,
                        commandTargetId: e.id,
                        channel: u,
                        guildId: n,
                        onShow: Y
                    }), tT = (0, f.default)(e.id), t_ = (0, p.default)(e, n, k), tp = e.isNonUserBot(), tS = e.isClyde(), tN = (0, I.useIsDMsToClydeEnabled)();
                    return (0, r.jsxs)(i.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: V,
                        children: [!tp && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)(i.MenuGroup, {
                                children: [tE, w && tf]
                            }), (0, r.jsxs)(i.MenuGroup, {
                                children: [B && K, c && W, Q, Z, B && q, B && z, X]
                            }), l && (0, r.jsx)(i.MenuGroup, {
                                children: J
                            }), (0, r.jsx)(i.MenuGroup, {
                                children: B && tn
                            }), (0, r.jsxs)(i.MenuGroup, {
                                children: [l && $, l && ts, B && tt, tI, t_, B && te, tr, B && ti, j && tT]
                            }), (0, r.jsx)(i.MenuGroup, {
                                children: ta
                            }), (0, r.jsxs)(i.MenuGroup, {
                                children: [tu, tl]
                            }), j && (0, r.jsxs)(i.MenuGroup, {
                                children: [td, tc]
                            })]
                        }), tS && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)(i.MenuGroup, {
                                children: [B && K, tN && Q]
                            }), (0, r.jsx)(i.MenuGroup, {
                                children: ta
                            })]
                        }), (0, r.jsx)(i.MenuGroup, {
                            children: to
                        })]
                    })
                }, {
                    object: x.AnalyticsObjects.CONTEXT_MENU
                }), [c.default.CONTEXT_MENU, c.default.GUILD_CHANNEL_USER_MENU])
        },
        563816: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return N
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("627445"),
                u = n.n(a),
                l = n("446674"),
                o = n("77078"),
                s = n("240249"),
                c = n("524768"),
                d = n("389153"),
                E = n("916565"),
                f = n("355263"),
                I = n("633043"),
                T = n("305961"),
                _ = n("317041"),
                p = n("782340"),
                S = n("205735"),
                N = t => {
                    let {
                        commandType: e,
                        commandTargetId: n,
                        channel: a,
                        guildId: N,
                        onShow: A
                    } = t, C = i.useRef(!1), h = i.useRef(0), m = (0, l.useStateFromStores)([T.default], () => T.default.getGuild(null != N ? N : a.guild_id)), {
                        hasMoreAfter: O,
                        scrollDown: g,
                        sectionDescriptors: D,
                        commands: G,
                        placeholders: M
                    } = s.useDiscovery(a, {
                        commandType: e
                    }, {
                        placeholderCount: _.CONTEXT_MENU_PLACEHOLDER_COUNT,
                        limit: _.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                    }), {
                        visibleCommands: y,
                        sections: R
                    } = i.useMemo(() => {
                        let t = G.concat(M),
                            e = {};
                        return D.forEach(t => {
                            e[t.id] = t
                        }), {
                            visibleCommands: t,
                            sections: e
                        }
                    }, [G, D, M]), L = i.useMemo(() => (0, d.canUseContextMenuCommands)(a, y.length, s.getCommandTypeCount(a, e, null == m ? void 0 : m.applicationCommandCounts)), [a, e, y.length, null == m ? void 0 : m.applicationCommandCounts]);
                    i.useEffect(() => {
                        if (L !== C.current) {
                            if (L) null == A || A();
                            C.current = L
                        }
                    }, [L, A]), i.useEffect(() => {
                        v(h.current)
                    }, [y]);
                    let v = i.useCallback(t => {
                            O && t + 500 > 34 * y.length - 40 && g(), h.current = t
                        }, [O, g, y]),
                        b = i.useCallback(t => {
                            if (t.inputType === c.ApplicationCommandInputType.PLACEHOLDER) return (0, r.jsx)(o.MenuItem, {
                                id: "menu-command-".concat(t.id),
                                render: () => (0, r.jsx)(I.default, {})
                            }, "menu-command-".concat(t.id));
                            u(null != a, "menu item should not show if channel is null");
                            let e = R[t.applicationId],
                                i = null != e ? (0, f.getIconComponent)(e) : void 0;
                            return (0, r.jsx)(o.MenuItem, {
                                id: t.id,
                                label: t.displayName,
                                showIconFirst: !0,
                                icon: () => null != i ? (0, r.jsx)(i, {
                                    channel: a,
                                    section: e,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null,
                                action: () => {
                                    (0, E.default)({
                                        command: t,
                                        optionValues: {},
                                        context: {
                                            channel: a,
                                            guild: m
                                        },
                                        commandTargetId: n
                                    })
                                }
                            }, t.id)
                        }, [a, m, n, R]);
                    return L && (0, r.jsx)(o.MenuItem, {
                        id: "apps",
                        label: p.default.Messages.APPS,
                        onChildrenScroll: v,
                        childRowHeight: 34,
                        listClassName: S.list,
                        disabled: 0 === y.length,
                        children: y.map(b)
                    })
                }
        },
        383161: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                mentionUser: function() {
                    return I
                },
                default: function() {
                    return T
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("352674"),
                l = n("42203"),
                o = n("957255"),
                s = n("18494"),
                c = n("659500"),
                d = n("158998"),
                E = n("49111"),
                f = n("782340");

            function I(t, e) {
                let {
                    id: n
                } = t, r = "@".concat(d.default.getUserTag(t, {
                    decoration: "never"
                })), i = "<@".concat(n, ">");
                c.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
                    plainText: r,
                    rawText: i
                }), null != e && u.default.startTyping(e)
            }

            function T(t, e, n) {
                let [u, c] = (0, i.useStateFromStoresArray)([s.default, l.default, o.default], () => {
                    let t = s.default.getChannelId(e),
                        n = l.default.getChannel(t),
                        r = null != n && (n.isMultiUserDM() || o.default.can(E.Permissions.SEND_MESSAGES, n));
                    return [t, r]
                }, [e]), d = n === E.AppContext.POPOUT;
                return !c || d ? null : (0, r.jsx)(a.MenuItem, {
                    id: "mention",
                    label: f.default.Messages.MENTION,
                    action: function() {
                        I(t, u)
                    }
                })
            }
        },
        421602: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("450911"),
                u = n("54239"),
                l = n("271938"),
                o = n("49111"),
                s = n("782340");

            function c(t, e) {
                let n = l.default.getId(),
                    c = e === o.AppContext.POPOUT;
                return n === t || c ? null : (0, r.jsx)(i.MenuItem, {
                    id: "message-user",
                    label: s.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        a.default.openPrivateChannel(t), (0, u.popLayer)()
                    }
                })
            }
        },
        459870: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("851387"),
                l = n("987317"),
                o = n("679653"),
                s = n("271938"),
                c = n("42203"),
                d = n("923959"),
                E = n("26989"),
                f = n("305961"),
                I = n("957255"),
                T = n("27618"),
                _ = n("697218"),
                p = n("800762"),
                S = n("404008"),
                N = n("991170"),
                A = n("49111"),
                C = n("782340");

            function h(t, e) {
                let n = (0, i.useStateFromStores)([d.default], () => d.default.getChannels(e)[d.GUILD_VOCAL_CHANNELS_KEY], [e]),
                    h = (0, i.useStateFromStores)([p.default, c.default], () => {
                        let n = p.default.getUserVoiceChannelId(e, t.id);
                        return c.default.getChannel(n)
                    }, [e, t.id]),
                    m = (0, i.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(e, t.id), [e, t.id]);
                if (m || null == h) return null;
                let O = t.id === s.default.getId();
                if (!O && !I.default.can(A.Permissions.MOVE_MEMBERS, h)) return null;
                let g = n.filter(e => {
                    let {
                        channel: n
                    } = e;
                    return n.id !== h.id && (O ? I.default.can(A.Permissions.CONNECT, n) && !(0, S.isChannelFull)(n, p.default, f.default) : I.default.can(A.Permissions.MOVE_MEMBERS, n) && (I.default.can(A.Permissions.CONNECT, n) || N.default.can({
                        permission: A.Permissions.CONNECT,
                        user: t,
                        context: n
                    })) && !(0, S.isChannelFull)(n, p.default, f.default))
                });
                return 0 === g.length ? null : (0, r.jsx)(a.MenuItem, {
                    id: "voice-move",
                    label: C.default.Messages.MOVE_TO,
                    children: g.map(n => {
                        let {
                            channel: i
                        } = n;
                        return (0, r.jsx)(a.MenuItem, {
                            id: i.id,
                            action: () => {
                                var n;
                                return n = i, void(t.id === s.default.getId() ? l.default.selectVoiceChannel(n.id) : u.default.setChannel(e, t.id, n.id))
                            },
                            label: (0, o.computeChannelName)(i, _.default, T.default)
                        }, i.id)
                    })
                })
            }
        },
        83910: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("926001"),
                u = n("75196"),
                l = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, a.SlashBoxIcon)
        },
        93393: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("503420"),
                u = n("75196"),
                l = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 20,
                        height: n = 20,
                        color: i = "currentColor",
                        foreground: a,
                        ...l
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, r.jsx)("path", {
                                className: a,
                                fill: i,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, a.ClockIcon)
        }
    }
]);
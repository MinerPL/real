(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61564"], {
        526504: function(e, t, n) {
            "use strict";
            var r = "%[a-f0-9]{2}",
                a = RegExp("(" + r + ")|([^%]+?)", "gi"),
                o = RegExp("(" + r + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = o.exec(e); n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch (e) {
                                var r = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (r) {
                                        for (var t = e.match(a) || [], n = 1; n < t.length; n++) t = (e = (function e(t, n) {
                                            try {
                                                return [decodeURIComponent(t.join(""))]
                                            } catch (e) {}
                                            if (1 === t.length) return t;
                                            n = n || 1;
                                            var r = t.slice(0, n),
                                                a = t.slice(n);
                                            return Array.prototype.concat.call([], e(r), e(a))
                                        })(t, n).join("")).match(a) || [];
                                        return e
                                    }
                                }(n[0]);
                                r !== n[0] && (t[n[0]] = r)
                            }
                            n = o.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var i = Object.keys(t), l = 0; l < i.length; l++) {
                            var c = i[l];
                            e = e.replace(RegExp(c, "g"), t[c])
                        }
                        return e
                    }(e)
                }
            }
        },
        766811: function(e, t, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;
            e.exports = ! function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    var r = Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    });
                    if ("0123456789" !== r.join("")) return !1;
                    var a = {};
                    if ("abcdefghijklmnopqrst".split("").forEach(function(e) {
                            a[e] = e
                        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, a)).join("")) return !1;
                    return !0
                } catch (e) {
                    return !1
                }
            }() ? function(e, t) {
                for (var n, i, l = function(e) {
                        if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), c = 1; c < arguments.length; c++) {
                    for (var s in n = Object(arguments[c]), n) a.call(n, s) && (l[s] = n[s]);
                    if (r) {
                        i = r(n);
                        for (var u = 0; u < i.length; u++) o.call(n, i[u]) && (l[i[u]] = n[i[u]])
                    }
                }
                return l
            } : Object.assign
        },
        730290: function(e, t, n) {
            "use strict";
            var r = n("272074"),
                a = n("766811"),
                o = n("526504");

            function i(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
            }
            t.extract = function(e) {
                return e.split("?")[1] || ""
            }, t.parse = function(e, t) {
                var n = function(e) {
                        var t;
                        switch (e.arrayFormat) {
                            case "index":
                                return function(e, n, r) {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        r[e] = n;
                                        return
                                    }
                                    void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n
                                };
                            case "bracket":
                                return function(e, n, r) {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t) {
                                        if (void 0 === r[e]) {
                                            r[e] = [n];
                                            return
                                        }
                                    } else {
                                        r[e] = n;
                                        return
                                    }
                                    r[e] = [].concat(r[e], n)
                                };
                            default:
                                return function(e, t, n) {
                                    if (void 0 === n[e]) {
                                        n[e] = t;
                                        return
                                    }
                                    n[e] = [].concat(n[e], t)
                                }
                        }
                    }(t = a({
                        arrayFormat: "none"
                    }, t)),
                    r = Object.create(null);
                return "string" == typeof e && (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
                    var t = e.replace(/\+/g, " ").split("="),
                        a = t.shift(),
                        i = t.length > 0 ? t.join("=") : void 0;
                    i = void 0 === i ? null : o(i), n(o(a), i, r)
                }), Object.keys(r).sort().reduce(function(e, t) {
                    var n = r[t];
                    return n && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) {
                            return Number(e) - Number(t)
                        }).map(function(e) {
                            return t[e]
                        }) : t
                    }(n) : e[t] = n, e
                }, Object.create(null))) : r
            }, t.stringify = function(e, t) {
                var n = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t, n, r) {
                                return null === n ? [i(t, e), "[", r, "]"].join("") : [i(t, e), "[", i(r, e), "]=", i(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? i(t, e) : [i(t, e), "[]=", i(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? i(t, e) : [i(t, e), "=", i(n, e)].join("")
                            }
                    }
                }(t = a({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none"
                }, t));
                return e ? Object.keys(e).sort().map(function(r) {
                    var a = e[r];
                    if (void 0 === a) return "";
                    if (null === a) return i(r, t);
                    if (Array.isArray(a)) {
                        var o = [];
                        return a.slice().forEach(function(e) {
                            void 0 !== e && o.push(n(r, e, o.length))
                        }), o.join("&")
                    }
                    return i(r, t) + "=" + i(a, t)
                }).filter(function(e) {
                    return e.length > 0
                }).join("&") : ""
            }
        },
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var r = n("14716"),
                a = n("745510"),
                o = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");

            function a() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691");
            let a = {};

            function o(e) {
                let t = (0, r.useRef)(a);
                return t.current === a && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691"),
                a = n("48174");
            let o = [];

            function i(e, t) {
                let n = (0, r.useRef)(),
                    i = (0, r.useRef)(o);
                return i.current === o ? (n.current = e(), i.current = t) : !(0, a.default)(t, i.current) && (n.current = e(), i.current = t), n.current
            }
        },
        272074: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
        },
        143453: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8da9ef44f0d6b8822df6.png"
        },
        376507: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    a = new ArrayBuffer(r.length),
                    o = new Uint8Array(a);
                for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
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
                    return g
                },
                get: function() {
                    return N
                }
            });
            var o = "copy",
                i = "convert";

            function l(e, t, n) {
                if (t === o) return n;
                if (t === i) return e(n);
                if (t instanceof Array) return n.map(n => l(e, t[0], n));
                if (t instanceof Object) {
                    let r = {};
                    for (let [a, o] of Object.entries(t)) {
                        if (o.derive) {
                            let e = o.derive(n);
                            void 0 !== e && (n[a] = e)
                        }
                        if (!(a in n)) {
                            if (o.required) throw Error("Missing key: ".concat(a));
                            continue
                        }
                        if (null == n[a]) {
                            r[a] = null;
                            continue
                        }
                        r[a] = l(e, o.schema, n[a])
                    }
                    return r
                }
            }

            function c(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function s(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function u(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var d = {
                    type: s(o),
                    id: s(i),
                    transports: u(o)
                },
                f = {
                    appid: u(o),
                    appidExclude: u(o),
                    credProps: u(o)
                },
                h = {
                    appid: u(o),
                    appidExclude: u(o),
                    credProps: u(o)
                },
                p = {
                    publicKey: s({
                        rp: s(o),
                        user: s({
                            id: s(i),
                            name: s(o),
                            displayName: s(o)
                        }),
                        challenge: s(i),
                        pubKeyCredParams: s(o),
                        timeout: u(o),
                        excludeCredentials: u([d]),
                        authenticatorSelection: u(o),
                        attestation: u(o),
                        extensions: u(f)
                    }),
                    signal: u(o)
                },
                y = {
                    type: s(o),
                    id: s(o),
                    rawId: s(i),
                    authenticatorAttachment: u(o),
                    response: s({
                        clientDataJSON: s(i),
                        attestationObject: s(i),
                        transports: c(o, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: c(h, e => e.getClientExtensionResults())
                },
                E = {
                    mediation: u(o),
                    publicKey: s({
                        challenge: s(i),
                        timeout: u(o),
                        rpId: u(o),
                        allowCredentials: u([d]),
                        userVerification: u(o),
                        extensions: u(f)
                    }),
                    signal: u(o)
                },
                m = {
                    type: s(o),
                    id: s(o),
                    rawId: s(i),
                    authenticatorAttachment: u(o),
                    response: s({
                        clientDataJSON: s(i),
                        authenticatorData: s(i),
                        signature: s(i),
                        userHandle: s(i)
                    }),
                    clientExtensionResults: c(h, e => e.getClientExtensionResults())
                };
            async function g(e) {
                let t = await navigator.credentials.create(l(r, p, e));
                return l(a, y, t)
            }
            async function N(e) {
                let t = await navigator.credentials.get(l(r, E, e));
                return l(a, m, t)
            }
        },
        327037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchCurrentUser: function() {
                    return f
                },
                acceptAgreements: function() {
                    return h
                },
                setFlag: function() {
                    return p
                },
                getUser: function() {
                    return y
                },
                fetchProfile: function() {
                    return E
                },
                fetchMutualFriends: function() {
                    return m
                }
            });
            var r = n("627445"),
                a = n.n(r),
                o = n("811022"),
                i = n("872717"),
                l = n("913144"),
                c = n("766274"),
                s = n("697218"),
                u = n("49111");
            let d = new o.default("UserProfileModalActionCreators");

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        withAnalyticsToken: t = !1
                    } = e;
                return i.default.get({
                    url: u.Endpoints.ME,
                    query: {
                        with_analytics_token: t
                    },
                    oldFormErrors: !0
                }).then(e => (l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }), new c.default(e.body)))
            }

            function h() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return i.default.patch({
                    url: u.Endpoints.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then(() => !0, () => !1)
            }

            function p(e, t) {
                let n = s.default.getCurrentUser();
                a(null != n, "setFlag: user cannot be undefined");
                let r = t ? n.flags | e : n.flags & ~e;
                return i.default.patch({
                    url: u.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: r
                    }
                })
            }

            function y(e) {
                let t = s.default.getUser(e);
                return null != t ? Promise.resolve(t) : i.default.get({
                    url: u.Endpoints.USER(e),
                    oldFormErrors: !0
                }).then(t => (l.default.dispatch({
                    type: "USER_UPDATE",
                    user: t.body
                }), s.default.getUser(e)))
            }
            async function E(e) {
                let {
                    friendToken: t,
                    withMutualGuilds: n,
                    withMutualFriendsCount: r,
                    guildId: a,
                    connectionsRoleId: o
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = arguments.length > 2 ? arguments[2] : void 0;
                l.default.dispatch({
                    type: "USER_PROFILE_FETCH_START",
                    userId: e
                });
                try {
                    let s = await i.default.get({
                        url: u.Endpoints.USER_PROFILE(e),
                        query: {
                            friend_token: t,
                            with_mutual_guilds: n,
                            with_mutual_friends_count: r,
                            guild_id: a,
                            connections_role_id: o
                        },
                        oldFormErrors: !0
                    });
                    return null == c || c(s.body, a), l.default.dispatch({
                        type: "USER_UPDATE",
                        user: s.body.user
                    }), l.default.dispatch({
                        type: "USER_PROFILE_FETCH_SUCCESS",
                        ...s.body
                    }), null != a && null != s.body.guild_member && l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildId: a,
                        guildMember: s.body.guild_member
                    }), s.body
                } catch (t) {
                    throw null != t && (null == t ? void 0 : t.body) != null && d.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                        type: "USER_PROFILE_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
            async function m(e) {
                l.default.dispatch({
                    type: "MUTUAL_FRIENDS_FETCH_START",
                    userId: e
                });
                try {
                    let t = await i.default.get({
                        url: u.Endpoints.USER_RELATIONSHIPS(e),
                        oldFormErrors: !0
                    });
                    l.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                        userId: e,
                        mutualFriends: t.body
                    })
                } catch (t) {
                    throw (null == t ? void 0 : t.body) != null && d.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), l.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, a, o, i;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return a
                }
            }), (o = r || (r = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (i = a || (a = {}))[i.BOT = 0] = "BOT", i[i.SERVER = 1] = "SERVER", i[i.SYSTEM_DM = 2] = "SYSTEM_DM", i[i.OFFICIAL = 3] = "OFFICIAL", i[i.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", i[i.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", i[i.AI = 6] = "AI", i[i.REMIX = 7] = "REMIX"
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function a(e, t) {
                return !1
            }

            function o(e) {
                return !1
            }

            function i() {
                return !1
            }

            function l() {
                return !1
            }

            function c(e) {
                let {} = e;
                return !1
            }

            function s(e, t) {
                return !1
            }

            function u() {
                return !1
            }

            function d(e) {}

            function f(e) {}

            function h(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return a
                },
                navigateToRootTab: function() {
                    return o
                },
                resetToAuthRoute: function() {
                    return i
                },
                resetToPanelsUI: function() {
                    return l
                },
                pushModal: function() {
                    return c
                },
                popModal: function() {
                    return s
                },
                popAllModals: function() {
                    return u
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceModalRoute: function() {
                    return f
                },
                useIsModalOpen: function() {
                    return h
                }
            })
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return i
                },
                getDevicePushProvider: function() {
                    return l
                }
            });
            var r, a, o = n("773336");
            let i = null;

            function l() {
                return (0, o.isAndroid)(), null
            }(r = a || (a = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        598347: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                TwoWayLinkModalSlideTypes: function() {
                    return r
                }
            }), (a = r || (r = {})).LANDING = "landing", a.PRE_CONNECT = "pre-connect", a.PRE_CONNECT_WAITING = "pre-connect-waiting", a.DISCORD_CONSENT = "discord-consent", a.SUCCESS = "success", a.ERROR = "error"
        },
        755993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkDiscordConsent: function() {
                    return y
                }
            });
            var r = n("37983"),
                a = n("884691"),
                o = n("627445"),
                i = n.n(o),
                l = n("77078"),
                c = n("619340"),
                s = n("605250"),
                u = n("33942"),
                d = n("145131"),
                f = n("782340"),
                h = n("429152");
            let p = new s.default("TwoWayLinkDiscordConsentWeb");

            function y(e) {
                let {
                    platformType: t,
                    clientId: n,
                    scopes: o,
                    authToken: s,
                    onContinue: y,
                    onError: E,
                    onClose: m,
                    redirectUri: g
                } = e, [N, T] = a.useState(!1), C = a.useCallback(async e => {
                    let n, {
                            location: r
                        } = e,
                        {
                            callbackCode: a,
                            callbackState: o
                        } = s;
                    try {
                        n = await c.default.completeTwoWayLink(t, r, a, o)
                    } catch (e) {
                        p.error("".concat(t, " link error:"), e)
                    }
                    null != n ? y() : E()
                }, [t, s, y, E]), {
                    header: v,
                    body: x,
                    appDetails: _,
                    sendAuthorize: R
                } = (0, u.useOAuth2AuthorizeForm)({
                    clientId: n,
                    scopes: o,
                    responseType: "code",
                    callback: C,
                    isTrustedName: !0,
                    isEmbeddedFlow: !0,
                    redirectUri: g
                }), b = a.useCallback(() => {
                    i(null != R, "sendAuthorize not available"), T(!0), R(!0)
                }, [R]);
                return (0, r.jsxs)("div", {
                    className: h.container,
                    children: [null != m && (0, r.jsx)(l.ModalCloseButton, {
                        className: h.closeButton,
                        onClick: m
                    }), (0, r.jsxs)(l.Scroller, {
                        children: [(0, r.jsx)(l.ModalHeader, {
                            direction: d.default.Direction.VERTICAL,
                            className: h.header,
                            separator: !1,
                            children: (0, r.jsx)(l.Text, {
                                className: h.stepHeader,
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                children: f.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                    number: 2,
                                    total: 2
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            className: h.discordConsentBody,
                            children: [v, x, _]
                        }), (0, r.jsx)(l.ModalFooter, {
                            className: h.footer,
                            children: (0, r.jsx)(l.Button, {
                                className: h.footerButton,
                                color: l.Button.Colors.BRAND,
                                submitting: N,
                                onClick: b,
                                children: f.default.Messages.AUTHORIZE_AND_CONTINUE
                            })
                        })]
                    })]
                })
            }
        },
        871988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkError: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("145131"),
                i = n("758710"),
                l = n("782340"),
                c = n("429152"),
                s = n("143453");

            function u(e) {
                let {
                    onContinue: t,
                    onClose: n,
                    title: u,
                    body: d
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        direction: o.default.Direction.VERTICAL,
                        className: c.header,
                        separator: !1,
                        children: [(0, r.jsx)("img", {
                            src: s,
                            className: c.illustration,
                            width: "254",
                            height: "127",
                            alt: ""
                        }), (0, r.jsx)(a.Heading, {
                            className: c.title,
                            variant: "heading-xl/extrabold",
                            children: u
                        }), null != n && (0, r.jsx)(a.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: n
                        })]
                    }), (0, r.jsx)(a.ModalContent, {
                        className: c.body,
                        paddingFix: !1,
                        children: (0, r.jsx)(a.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: d
                        })
                    }), (0, r.jsx)(a.ModalFooter, {
                        className: c.footer,
                        children: (0, r.jsxs)(a.Button, {
                            className: c.footerButton,
                            color: a.Button.Colors.BRAND,
                            onClick: t,
                            children: [l.default.Messages.TRY_AGAIN, (0, r.jsx)(i.default, {
                                className: c.launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        634644: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkLanding: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("446674"),
                o = n("77078"),
                i = n("47319"),
                l = n("145131"),
                c = n("782340"),
                s = n("429152");

            function u(e) {
                let {
                    platformType: t,
                    onContinue: n,
                    onClose: u,
                    img: d,
                    headerConnect: f,
                    headerReconnect: h,
                    body: p,
                    learnMoreLink: y,
                    valueProps: E
                } = e, m = (0, a.useStateFromStores)([i.default], () => {
                    let e = i.default.getAccount(null, t);
                    return (null == e ? void 0 : e.twoWayLink) === !1
                });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        direction: l.default.Direction.VERTICAL,
                        className: s.header,
                        separator: !1,
                        children: [(0, r.jsxs)("div", {
                            className: s.illustration,
                            children: [d, " "]
                        }), (0, r.jsx)(o.Heading, {
                            className: s.title,
                            variant: "heading-xl/extrabold",
                            children: m && null != h ? h : f
                        }), (0, r.jsx)(o.ModalCloseButton, {
                            className: s.closeButton,
                            onClick: u
                        })]
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: s.body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: p
                        }), (0, r.jsx)("div", {
                            className: s.valueProps,
                            children: E
                        }), null != y ? (0, r.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: c.default.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: y
                            })
                        }) : null]
                    }), (0, r.jsx)(o.ModalFooter, {
                        className: s.footer,
                        children: (0, r.jsx)(o.Button, {
                            className: s.footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: n,
                            children: c.default.Messages.CONTINUE
                        })
                    })]
                })
            }
        },
        79528: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkPreConnect: function() {
                    return g
                }
            });
            var r = n("37983"),
                a = n("884691"),
                o = n("627445"),
                i = n.n(o),
                l = n("382825"),
                c = n("77078"),
                s = n("913144"),
                u = n("535013"),
                d = n("926994"),
                f = n("605250"),
                h = n("145131"),
                p = n("758710"),
                y = n("782340"),
                E = n("429152");
            let m = new f.default("TwoWayLink");

            function g(e) {
                let {
                    platformType: t,
                    isWaitingForConnection: n,
                    onWaitingForConnection: o,
                    expectedCallbackState: f,
                    onAuthToken: g,
                    onError: N,
                    onClose: T,
                    img: C,
                    title: v,
                    body: x,
                    redirectDestination: _
                } = e, R = a.useCallback(async () => {
                    let e;
                    try {
                        if (e = await (0, d.openProviderAuthorize)(t, {
                                twoWayLinkType: l.TwoWayLinkType.DESKTOP
                            }), null == e) throw Error("missing authorizeURL")
                    } catch (e) {
                        m.error("Error opening provider authorize page", e), N();
                        return
                    }
                    let {
                        state: n
                    } = (0, u.getCallbackParamsFromURL)(e);
                    i(null != n, "Authorize URL state query parameter must be present"), null == o || o(n)
                }, [t, N, o]), b = a.useCallback(e => {
                    let {
                        callbackCode: n,
                        callbackState: r
                    } = e;
                    if (r !== f) {
                        m.warn("".concat(t, " link: received mismatching callback state!"));
                        return
                    }
                    g({
                        callbackCode: n,
                        callbackState: r
                    })
                }, [t, f, g]);
                return a.useEffect(() => (s.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", b), () => {
                    s.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", b)
                }), [b]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(c.ModalHeader, {
                        direction: h.default.Direction.VERTICAL,
                        className: E.header,
                        separator: !1,
                        children: [(0, r.jsx)(c.Text, {
                            className: E.stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: y.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, r.jsxs)("div", {
                            className: E.illustration,
                            children: [C, " "]
                        }), (0, r.jsx)(c.Heading, {
                            className: E.title,
                            variant: "heading-xl/extrabold",
                            children: v
                        }), null != T && (0, r.jsx)(c.ModalCloseButton, {
                            className: E.closeButton,
                            onClick: T
                        })]
                    }), (0, r.jsxs)(c.ModalContent, {
                        className: E.body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: x
                        }), !n && (0, r.jsx)(c.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: y.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: _
                            })
                        })]
                    }), (0, r.jsx)(c.ModalFooter, {
                        className: E.footer,
                        children: (0, r.jsxs)(c.Button, {
                            className: E.footerButton,
                            color: n ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                            onClick: R,
                            children: [n ? y.default.Messages.RETRY : y.default.Messages.CONTINUE, (0, r.jsx)(p.default, {
                                className: E.launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        451039: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkSuccess: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("145131"),
                i = n("782340"),
                l = n("429152");

            function c(e) {
                let {
                    onClose: t,
                    img: n,
                    title: c,
                    body: s,
                    content: u
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        direction: o.default.Direction.VERTICAL,
                        className: l.header,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: l.illustration,
                            children: n
                        }), (0, r.jsx)(a.Heading, {
                            className: l.title,
                            variant: "heading-xl/extrabold",
                            children: c
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            className: l.closeButton,
                            onClick: t
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: l.body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(a.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: s
                        }), u]
                    }), (0, r.jsx)(a.ModalFooter, {
                        className: l.footer,
                        children: (0, r.jsx)(a.Button, {
                            className: l.footerButton,
                            color: a.Button.Colors.BRAND,
                            onClick: t,
                            children: i.default.Messages.DONE
                        })
                    })]
                })
            }
        },
        106390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ValueProp: function() {
                    return i
                },
                BulletedValueProp: function() {
                    return l
                },
                ValuePropContainer: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("429152");

            function i(e) {
                let {
                    text: t,
                    children: n
                } = e;
                return (0, r.jsxs)("div", {
                    className: o.valueProp,
                    children: [(0, r.jsx)("div", {
                        className: o.valuePropIconContainer,
                        children: n
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: t
                    })]
                })
            }

            function l(e) {
                let {
                    title: t,
                    bulletPoints: n,
                    icon: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: o.bulletedValueProp,
                    children: [(0, r.jsx)("div", {
                        className: o.valuePropIconContainer,
                        children: i
                    }), (0, r.jsxs)("div", {
                        className: o.bulletPointsContainer,
                        children: [(0, r.jsx)(a.Text, {
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: t
                        }), (0, r.jsx)("div", {
                            className: o.bulletPoints,
                            children: n.map(e => (0, r.jsxs)("div", {
                                className: o.bulletPoint,
                                children: [(0, r.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: "•"
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    className: o.bulletPointText,
                                    children: e
                                })]
                            }, e))
                        })]
                    })]
                })
            }

            function c(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)("div", {
                    className: o.valuePropContainer,
                    children: t
                })
            }
        },
        997511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTwoWayLinkModalSlideManager: function() {
                    return c
                }
            });
            var r = n("884691"),
                a = n("84339"),
                o = n("599110"),
                i = n("598347"),
                l = n("49111");

            function c(e, t) {
                let [n, c] = r.useState(i.TwoWayLinkModalSlideTypes.LANDING), s = (0, a.default)(n), [u, d] = r.useState(null), [f, h] = r.useState(null), p = r.useCallback(() => {
                    switch (n) {
                        case i.TwoWayLinkModalSlideTypes.LANDING:
                            c(i.TwoWayLinkModalSlideTypes.PRE_CONNECT);
                            break;
                        case i.TwoWayLinkModalSlideTypes.DISCORD_CONSENT:
                            c(i.TwoWayLinkModalSlideTypes.SUCCESS);
                            break;
                        case i.TwoWayLinkModalSlideTypes.ERROR:
                            c(i.TwoWayLinkModalSlideTypes.PRE_CONNECT)
                    }
                }, [n]), y = r.useCallback(() => {
                    d(null), c(i.TwoWayLinkModalSlideTypes.ERROR)
                }, []), E = r.useCallback(e => {
                    d(e), c(i.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING)
                }, []), m = r.useCallback(e => {
                    d(null), h(e), c(i.TwoWayLinkModalSlideTypes.DISCORD_CONSENT)
                }, []);
                return r.useEffect(() => {
                    n !== s && o.default.track(l.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        location_stack: e,
                        previous_step: s,
                        current_step: n,
                        platform_type: t
                    })
                }, [n, s, e, t]), {
                    slide: n,
                    gotoNext: p,
                    gotoError: y,
                    handleWaitingForConnection: E,
                    handleAuthToken: m,
                    expectedCallbackState: u,
                    callbackData: f
                }
            }
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("666038");
            class a extends r.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("446674"),
                a = n("913144"),
                o = n("619340"),
                i = n("376556"),
                l = n("450205"),
                c = n("813006"),
                s = n("49111");
            let u = new Set([s.PlatformTypes.CONTACTS]),
                d = !0,
                f = [],
                h = [],
                p = {},
                y = {},
                E = e => {
                    f = e.filter(e => !u.has(e.type) && i.default.isSupported(e.type)), h = e.filter(e => u.has(e.type)), d = !1
                };
            class m extends r.default.Store {
                isJoining(e) {
                    return p[e] || !1
                }
                isFetching() {
                    return d
                }
                getAccounts() {
                    return f
                }
                getLocalAccounts() {
                    return h
                }
                getAccount(e, t) {
                    return f.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return h.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return y[e] || !1
                }
            }
            m.displayName = "ConnectedAccountsStore";
            var g = new m(a.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new l.default(e));
                    E(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new l.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new c.default(e.guild)
                            }))
                        }));
                        E(t)
                    } else o.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    p[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: r,
                        accessToken: a
                    } = e, o = f.find(e => e.id === n && e.type === t);
                    if (null == o) return !1;
                    null != r && (o.revoked = r), null != a && (o.accessToken = a)
                }
            })
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78579"], {
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
                        for (var l = Object.keys(t), i = 0; i < l.length; i++) {
                            var s = l[i];
                            e = e.replace(RegExp(s, "g"), t[s])
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
                for (var n, l, i = function(e) {
                        if (null == e) throw TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }(e), s = 1; s < arguments.length; s++) {
                    for (var c in n = Object(arguments[s]), n) a.call(n, c) && (i[c] = n[c]);
                    if (r) {
                        l = r(n);
                        for (var u = 0; u < l.length; u++) o.call(n, l[u]) && (i[l[u]] = n[l[u]])
                    }
                }
                return i
            } : Object.assign
        },
        730290: function(e, t, n) {
            "use strict";
            var r = n("272074"),
                a = n("766811"),
                o = n("526504");

            function l(e, t) {
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
                        l = t.length > 0 ? t.join("=") : void 0;
                    l = void 0 === l ? null : o(l), n(o(a), l, r)
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
                                return null === n ? [l(t, e), "[", r, "]"].join("") : [l(t, e), "[", l(r, e), "]=", l(n, e)].join("")
                            };
                        case "bracket":
                            return function(t, n) {
                                return null === n ? l(t, e) : [l(t, e), "[]=", l(n, e)].join("")
                            };
                        default:
                            return function(t, n) {
                                return null === n ? l(t, e) : [l(t, e), "=", l(n, e)].join("")
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
                    if (null === a) return l(r, t);
                    if (Array.isArray(a)) {
                        var o = [];
                        return a.slice().forEach(function(e) {
                            void 0 !== e && o.push(n(r, e, o.length))
                        }), o.join("&")
                    }
                    return l(r, t) + "=" + l(a, t)
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
                    return l
                }
            });
            var r = n("884691"),
                a = n("48174");
            let o = [];

            function l(e, t) {
                let n = (0, r.useRef)(),
                    l = (0, r.useRef)(o);
                return l.current === o ? (n.current = e(), l.current = t) : !(0, a.default)(t, l.current) && (n.current = e(), l.current = t), n.current
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
                    return E
                },
                get: function() {
                    return m
                }
            });
            var o = "copy",
                l = "convert";

            function i(e, t, n) {
                if (t === o) return n;
                if (t === l) return e(n);
                if (t instanceof Array) return n.map(n => i(e, t[0], n));
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
                        r[a] = i(e, o.schema, n[a])
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

            function c(e) {
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
                    type: c(o),
                    id: c(l),
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
                    publicKey: c({
                        rp: c(o),
                        user: c({
                            id: c(l),
                            name: c(o),
                            displayName: c(o)
                        }),
                        challenge: c(l),
                        pubKeyCredParams: c(o),
                        timeout: u(o),
                        excludeCredentials: u([d]),
                        authenticatorSelection: u(o),
                        attestation: u(o),
                        extensions: u(f)
                    }),
                    signal: u(o)
                },
                T = {
                    type: c(o),
                    id: c(o),
                    rawId: c(l),
                    authenticatorAttachment: u(o),
                    response: c({
                        clientDataJSON: c(l),
                        attestationObject: c(l),
                        transports: s(o, e => {
                            var t;
                            return (null == (t = e.getTransports) ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: s(h, e => e.getClientExtensionResults())
                },
                g = {
                    mediation: u(o),
                    publicKey: c({
                        challenge: c(l),
                        timeout: u(o),
                        rpId: u(o),
                        allowCredentials: u([d]),
                        userVerification: u(o),
                        extensions: u(f)
                    }),
                    signal: u(o)
                },
                v = {
                    type: c(o),
                    id: c(o),
                    rawId: c(l),
                    authenticatorAttachment: u(o),
                    response: c({
                        clientDataJSON: c(l),
                        authenticatorData: c(l),
                        signature: c(l),
                        userHandle: c(l)
                    }),
                    clientExtensionResults: s(h, e => e.getClientExtensionResults())
                };
            async function E(e) {
                let t = await navigator.credentials.create(i(r, p, e));
                return i(a, T, t)
            }
            async function m(e) {
                let t = await navigator.credentials.get(i(r, g, e));
                return i(a, v, t)
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
                    return T
                },
                fetchProfile: function() {
                    return g
                },
                fetchMutualFriends: function() {
                    return v
                }
            });
            var r = n("627445"),
                a = n.n(r),
                o = n("811022"),
                l = n("872717"),
                i = n("913144"),
                s = n("766274"),
                c = n("697218"),
                u = n("49111");
            let d = new o.default("UserProfileModalActionCreators");

            function f() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        withAnalyticsToken: t = !1
                    } = e;
                return l.default.get({
                    url: u.Endpoints.ME,
                    query: {
                        with_analytics_token: t
                    },
                    oldFormErrors: !0
                }).then(e => (i.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: e.body,
                    analyticsToken: t ? e.body.analytics_token : void 0
                }), new s.default(e.body)))
            }

            function h() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return l.default.patch({
                    url: u.Endpoints.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then(() => !0, () => !1)
            }

            function p(e, t) {
                let n = c.default.getCurrentUser();
                a(null != n, "setFlag: user cannot be undefined");
                let r = t ? n.flags | e : n.flags & ~e;
                return l.default.patch({
                    url: u.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: r
                    }
                })
            }

            function T(e) {
                let t = c.default.getUser(e);
                return null != t ? Promise.resolve(t) : l.default.get({
                    url: u.Endpoints.USER(e),
                    oldFormErrors: !0
                }).then(t => (i.default.dispatch({
                    type: "USER_UPDATE",
                    user: t.body
                }), c.default.getUser(e)))
            }
            async function g(e) {
                let {
                    friendToken: t,
                    withMutualGuilds: n,
                    withMutualFriendsCount: r,
                    guildId: a,
                    connectionsRoleId: o
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = arguments.length > 2 ? arguments[2] : void 0;
                i.default.dispatch({
                    type: "USER_PROFILE_FETCH_START",
                    userId: e
                });
                try {
                    let c = await l.default.get({
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
                    return null == s || s(c.body, a), i.default.dispatch({
                        type: "USER_UPDATE",
                        user: c.body.user
                    }), i.default.dispatch({
                        type: "USER_PROFILE_FETCH_SUCCESS",
                        ...c.body
                    }), null != a && null != c.body.guild_member && i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildId: a,
                        guildMember: c.body.guild_member
                    }), c.body
                } catch (t) {
                    throw null != t && (null == t ? void 0 : t.body) != null && d.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), i.default.dispatch({
                        type: "USER_PROFILE_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
            async function v(e) {
                i.default.dispatch({
                    type: "MUTUAL_FRIENDS_FETCH_START",
                    userId: e
                });
                try {
                    let t = await l.default.get({
                        url: u.Endpoints.USER_RELATIONSHIPS(e),
                        oldFormErrors: !0
                    });
                    i.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                        userId: e,
                        mutualFriends: t.body
                    })
                } catch (t) {
                    throw (null == t ? void 0 : t.body) != null && d.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), i.default.dispatch({
                        type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                        userId: e
                    }), t
                }
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        521590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GlobeEarthIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M18.843 17.847A9.004 9.004 0 0 0 15 3.513V4a3 3 0 0 1-3 3h-.77a.23.23 0 0 0-.23.23A2.77 2.77 0 0 1 8.23 10a.23.23 0 0 0-.23.23v1.52c0 .138.112.25.25.25H13a3 3 0 0 1 3 3v.77c0 .127.103.23.23.23a2.77 2.77 0 0 1 2.613 1.847Zm-15.66-7.664A9.001 9.001 0 0 0 11 20.945v-2.714a.23.23 0 0 0-.23-.231h-.649A2.121 2.121 0 0 1 8 15.879c0-.563-.223-1.102-.621-1.5l-4.196-4.196ZM23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        889196: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LaunchIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L19.586 3H16a1 1 0 0 1-1-1ZM5 2a3 3 0 0 0-3 3v14c0 1.655 1.34 3 2.998 3H19A2.999 2.999 0 0 0 22 19v-6a1 1 0 1 0-2 0v6c0 .553-.447 1-.999 1H4.998A.998.998 0 0 1 4 19V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        753809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LinkIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M16.293 14.707a1 1 0 0 1 0-1.414l2.5-2.5a3.95 3.95 0 1 0-5.586-5.586l-2.5 2.5a1 1 0 1 1-1.414-1.414l2.5-2.5a5.95 5.95 0 0 1 8.414 8.414l-2.5 2.5a1 1 0 0 1-1.414 0ZM7.707 9.293a1 1 0 0 1 0 1.414l-2.5 2.5a3.95 3.95 0 0 0 5.586 5.586l2.5-2.5a1 1 0 0 1 1.414 1.414l-2.5 2.5a5.95 5.95 0 1 1-8.414-8.414l2.5-2.5a1 1 0 0 1 1.414 0Zm7 1.414a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 1.414 1.414l4-4Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        173010: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RobotIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M12 21c5.523 0 10-1.858 10-6 0-5.587-2.803-10.07-4.26-11.673a1 1 0 1 0-1.48 1.346c.611.672 1.56 2.033 2.349 3.856C16.847 7.022 14.533 6 12 6 9.467 6 7.153 7.022 5.391 8.529 6.18 6.706 7.129 5.345 7.74 4.673a1 1 0 1 0-1.48-1.346C4.803 4.93 2 9.413 2 15c0 4.142 4.477 6 10 6Zm0-12c3.866 0 7 1.99 7 4.2S15.866 17 12 17s-7-1.59-7-3.8S8.134 9 12 9Zm-4.111 4.458a1 1 0 0 1-1.783-.905L7 13l-.894-.448.001-.002.002-.004.004-.007.01-.02a2.233 2.233 0 0 1 .139-.23c.09-.134.224-.314.406-.496.359-.36.973-.793 1.832-.793.859 0 1.473.434 1.832.793a3.275 3.275 0 0 1 .544.725l.011.02.004.008.002.004v.001l.001.001L10 13l.894-.447a1 1 0 0 1-1.783.905l-.003-.005a1.28 1.28 0 0 0-.19-.246C8.777 13.067 8.64 13 8.5 13c-.141 0-.277.066-.418.207a1.28 1.28 0 0 0-.19.246l-.003.005Zm5.664.436a1 1 0 0 0 1.336-.436l.003-.005a1.28 1.28 0 0 1 .19-.246c.141-.14.277-.207.418-.207.141 0 .277.066.418.207a1.28 1.28 0 0 1 .19.246l.003.005a1 1 0 0 0 1.783-.905L17 13l.894-.448-.001-.002-.002-.004-.004-.007-.01-.02a2.94 2.94 0 0 0-.138-.23 3.28 3.28 0 0 0-.407-.496c-.359-.36-.973-.793-1.832-.793-.859 0-1.473.434-1.832.793a3.275 3.275 0 0 0-.544.725l-.011.02-.004.008-.002.004v.001l-.001.001L14 13l-.894-.447a1 1 0 0 0 .447 1.341Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        877585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShieldIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "m6 7.683 6-3.667V12H6.222A11.187 11.187 0 0 1 6 9.782v-2.1Zm6 12.01V12h5.778A11.187 11.187 0 0 1 12 19.692ZM4.271 5.222A2.657 2.657 0 0 0 3 7.49v2.292a14.185 14.185 0 0 0 8.424 12.962c.367.163.785.163 1.152 0A14.185 14.185 0 0 0 21 9.782V7.49c0-.926-.482-1.784-1.271-2.267l-6.165-3.767a3 3 0 0 0-3.128 0L4.27 5.223Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, a, o, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return a
                }
            }), (o = r || (r = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = a || (a = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
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

            function l() {
                return !1
            }

            function i() {
                return !1
            }

            function s(e) {
                let {} = e;
                return !1
            }

            function c(e, t) {
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
                    return l
                },
                resetToPanelsUI: function() {
                    return i
                },
                pushModal: function() {
                    return s
                },
                popModal: function() {
                    return c
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
                    return l
                },
                getDevicePushProvider: function() {
                    return i
                }
            });
            var r, a, o = n("773336");
            let l = null;

            function i() {
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
                    return T
                }
            });
            var r = n("37983"),
                a = n("884691"),
                o = n("627445"),
                l = n.n(o),
                i = n("77078"),
                s = n("619340"),
                c = n("605250"),
                u = n("33942"),
                d = n("145131"),
                f = n("782340"),
                h = n("429152");
            let p = new c.default("TwoWayLinkDiscordConsentWeb");

            function T(e) {
                let {
                    platformType: t,
                    clientId: n,
                    scopes: o,
                    authToken: c,
                    onContinue: T,
                    onError: g,
                    onClose: v,
                    redirectUri: E
                } = e, [m, C] = a.useState(!1), y = a.useCallback(async e => {
                    let n, {
                            location: r
                        } = e,
                        {
                            callbackCode: a,
                            callbackState: o
                        } = c;
                    try {
                        n = await s.default.completeTwoWayLink(t, r, a, o)
                    } catch (e) {
                        p.error("".concat(t, " link error:"), e)
                    }
                    null != n ? T() : g()
                }, [t, c, T, g]), {
                    header: N,
                    body: x,
                    appDetails: R,
                    sendAuthorize: _
                } = (0, u.useOAuth2AuthorizeForm)({
                    clientId: n,
                    scopes: o,
                    responseType: "code",
                    callback: y,
                    isTrustedName: !0,
                    isEmbeddedFlow: !0,
                    redirectUri: E
                }), I = a.useCallback(() => {
                    l(null != _, "sendAuthorize not available"), C(!0), _(!0)
                }, [_]);
                return (0, r.jsxs)("div", {
                    className: h.container,
                    children: [null != v && (0, r.jsx)(i.ModalCloseButton, {
                        className: h.closeButton,
                        onClick: v
                    }), (0, r.jsxs)(i.Scroller, {
                        children: [(0, r.jsx)(i.ModalHeader, {
                            direction: d.default.Direction.VERTICAL,
                            className: h.header,
                            separator: !1,
                            children: (0, r.jsx)(i.Text, {
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
                            children: [N, x, R]
                        }), (0, r.jsx)(i.ModalFooter, {
                            className: h.footer,
                            children: (0, r.jsx)(i.Button, {
                                className: h.footerButton,
                                color: i.Button.Colors.BRAND,
                                submitting: m,
                                onClick: I,
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
                l = n("758710"),
                i = n("782340"),
                s = n("429152"),
                c = n("143453");

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
                        className: s.header,
                        separator: !1,
                        children: [(0, r.jsx)("img", {
                            src: c,
                            className: s.illustration,
                            width: "254",
                            height: "127",
                            alt: ""
                        }), (0, r.jsx)(a.Heading, {
                            className: s.title,
                            variant: "heading-xl/extrabold",
                            children: u
                        }), null != n && (0, r.jsx)(a.ModalCloseButton, {
                            className: s.closeButton,
                            onClick: n
                        })]
                    }), (0, r.jsx)(a.ModalContent, {
                        className: s.body,
                        paddingFix: !1,
                        children: (0, r.jsx)(a.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: d
                        })
                    }), (0, r.jsx)(a.ModalFooter, {
                        className: s.footer,
                        children: (0, r.jsxs)(a.Button, {
                            className: s.footerButton,
                            color: a.Button.Colors.BRAND,
                            onClick: t,
                            children: [i.default.Messages.TRY_AGAIN, (0, r.jsx)(l.default, {
                                className: s.launchIcon,
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
                l = n("47319"),
                i = n("145131"),
                s = n("782340"),
                c = n("429152");

            function u(e) {
                let {
                    platformType: t,
                    onContinue: n,
                    onClose: u,
                    img: d,
                    headerConnect: f,
                    headerReconnect: h,
                    body: p,
                    learnMoreLink: T,
                    valueProps: g
                } = e, v = (0, a.useStateFromStores)([l.default], () => {
                    let e = l.default.getAccount(null, t);
                    return (null == e ? void 0 : e.twoWayLink) === !1
                });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        direction: i.default.Direction.VERTICAL,
                        className: c.header,
                        separator: !1,
                        children: [(0, r.jsxs)("div", {
                            className: c.illustration,
                            children: [d, " "]
                        }), (0, r.jsx)(o.Heading, {
                            className: c.title,
                            variant: "heading-xl/extrabold",
                            children: v && null != h ? h : f
                        }), (0, r.jsx)(o.ModalCloseButton, {
                            className: c.closeButton,
                            onClick: u
                        })]
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: c.body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: p
                        }), (0, r.jsx)("div", {
                            className: c.valueProps,
                            children: g
                        }), null != T ? (0, r.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: s.default.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: T
                            })
                        }) : null]
                    }), (0, r.jsx)(o.ModalFooter, {
                        className: c.footer,
                        children: (0, r.jsx)(o.Button, {
                            className: c.footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: n,
                            children: s.default.Messages.CONTINUE
                        })
                    })]
                })
            }
        },
        79528: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TwoWayLinkPreConnect: function() {
                    return E
                }
            });
            var r = n("37983"),
                a = n("884691"),
                o = n("627445"),
                l = n.n(o),
                i = n("382825"),
                s = n("77078"),
                c = n("913144"),
                u = n("535013"),
                d = n("926994"),
                f = n("605250"),
                h = n("145131"),
                p = n("758710"),
                T = n("782340"),
                g = n("429152");
            let v = new f.default("TwoWayLink");

            function E(e) {
                let {
                    platformType: t,
                    isWaitingForConnection: n,
                    onWaitingForConnection: o,
                    expectedCallbackState: f,
                    onAuthToken: E,
                    onError: m,
                    onClose: C,
                    img: y,
                    title: N,
                    body: x,
                    redirectDestination: R
                } = e, _ = a.useCallback(async () => {
                    let e;
                    try {
                        if (e = await (0, d.openProviderAuthorize)(t, {
                                twoWayLinkType: i.TwoWayLinkType.DESKTOP
                            }), null == e) throw Error("missing authorizeURL")
                    } catch (e) {
                        v.error("Error opening provider authorize page", e), m();
                        return
                    }
                    let {
                        state: n
                    } = (0, u.getCallbackParamsFromURL)(e);
                    l(null != n, "Authorize URL state query parameter must be present"), null == o || o(n)
                }, [t, m, o]), I = a.useCallback(e => {
                    let {
                        callbackCode: n,
                        callbackState: r
                    } = e;
                    if (r !== f) {
                        v.warn("".concat(t, " link: received mismatching callback state!"));
                        return
                    }
                    E({
                        callbackCode: n,
                        callbackState: r
                    })
                }, [t, f, E]);
                return a.useEffect(() => (c.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", I), () => {
                    c.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", I)
                }), [I]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        direction: h.default.Direction.VERTICAL,
                        className: g.header,
                        separator: !1,
                        children: [(0, r.jsx)(s.Text, {
                            className: g.stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: T.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, r.jsxs)("div", {
                            className: g.illustration,
                            children: [y, " "]
                        }), (0, r.jsx)(s.Heading, {
                            className: g.title,
                            variant: "heading-xl/extrabold",
                            children: N
                        }), null != C && (0, r.jsx)(s.ModalCloseButton, {
                            className: g.closeButton,
                            onClick: C
                        })]
                    }), (0, r.jsxs)(s.ModalContent, {
                        className: g.body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(s.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: x
                        }), !n && (0, r.jsx)(s.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: T.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: R
                            })
                        })]
                    }), (0, r.jsx)(s.ModalFooter, {
                        className: g.footer,
                        children: (0, r.jsxs)(s.Button, {
                            className: g.footerButton,
                            color: n ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                            onClick: _,
                            children: [n ? T.default.Messages.RETRY : T.default.Messages.CONTINUE, (0, r.jsx)(p.default, {
                                className: g.launchIcon,
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
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("145131"),
                l = n("782340"),
                i = n("429152");

            function s(e) {
                let {
                    onClose: t,
                    img: n,
                    title: s,
                    body: c,
                    content: u
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(a.ModalHeader, {
                        direction: o.default.Direction.VERTICAL,
                        className: i.header,
                        separator: !1,
                        children: [(0, r.jsx)("div", {
                            className: i.illustration,
                            children: n
                        }), (0, r.jsx)(a.Heading, {
                            className: i.title,
                            variant: "heading-xl/extrabold",
                            children: s
                        }), (0, r.jsx)(a.ModalCloseButton, {
                            className: i.closeButton,
                            onClick: t
                        })]
                    }), (0, r.jsxs)(a.ModalContent, {
                        className: i.body,
                        paddingFix: !1,
                        children: [(0, r.jsx)(a.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: c
                        }), u]
                    }), (0, r.jsx)(a.ModalFooter, {
                        className: i.footer,
                        children: (0, r.jsx)(a.Button, {
                            className: i.footerButton,
                            color: a.Button.Colors.BRAND,
                            onClick: t,
                            children: l.default.Messages.DONE
                        })
                    })]
                })
            }
        },
        106390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ValueProp: function() {
                    return l
                },
                BulletedValueProp: function() {
                    return i
                },
                ValuePropContainer: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                o = n("429152");

            function l(e) {
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

            function i(e) {
                let {
                    title: t,
                    bulletPoints: n,
                    icon: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: o.bulletedValueProp,
                    children: [(0, r.jsx)("div", {
                        className: o.valuePropIconContainer,
                        children: l
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

            function s(e) {
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
                    return s
                }
            });
            var r = n("884691"),
                a = n("84339"),
                o = n("599110"),
                l = n("598347"),
                i = n("49111");

            function s(e, t) {
                let [n, s] = r.useState(l.TwoWayLinkModalSlideTypes.LANDING), c = (0, a.default)(n), [u, d] = r.useState(null), [f, h] = r.useState(null), p = r.useCallback(() => {
                    switch (n) {
                        case l.TwoWayLinkModalSlideTypes.LANDING:
                            s(l.TwoWayLinkModalSlideTypes.PRE_CONNECT);
                            break;
                        case l.TwoWayLinkModalSlideTypes.DISCORD_CONSENT:
                            s(l.TwoWayLinkModalSlideTypes.SUCCESS);
                            break;
                        case l.TwoWayLinkModalSlideTypes.ERROR:
                            s(l.TwoWayLinkModalSlideTypes.PRE_CONNECT)
                    }
                }, [n]), T = r.useCallback(() => {
                    d(null), s(l.TwoWayLinkModalSlideTypes.ERROR)
                }, []), g = r.useCallback(e => {
                    d(e), s(l.TwoWayLinkModalSlideTypes.PRE_CONNECT_WAITING)
                }, []), v = r.useCallback(e => {
                    d(null), h(e), s(l.TwoWayLinkModalSlideTypes.DISCORD_CONSENT)
                }, []);
                return r.useEffect(() => {
                    n !== c && o.default.track(i.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        location_stack: e,
                        previous_step: c,
                        current_step: n,
                        platform_type: t
                    })
                }, [n, c, e, t]), {
                    slide: n,
                    gotoNext: p,
                    gotoError: T,
                    handleWaitingForConnection: g,
                    handleAuthToken: v,
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
                    return E
                }
            });
            var r = n("446674"),
                a = n("913144"),
                o = n("619340"),
                l = n("376556"),
                i = n("450205"),
                s = n("813006"),
                c = n("49111");
            let u = new Set([c.PlatformTypes.CONTACTS]),
                d = !0,
                f = [],
                h = [],
                p = {},
                T = {},
                g = e => {
                    f = e.filter(e => !u.has(e.type) && l.default.isSupported(e.type)), h = e.filter(e => u.has(e.type)), d = !1
                };
            class v extends r.default.Store {
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
                    return T[e] || !1
                }
            }
            v.displayName = "ConnectedAccountsStore";
            var E = new v(a.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new i.default(e));
                    g(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new i.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new s.default(e.guild)
                            }))
                        }));
                        g(t)
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
        },
        79798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                o = n.n(a),
                l = n("414055"),
                i = n("12287"),
                s = n("988268"),
                c = n("782340"),
                u = n("647431");
            let d = e => {
                let t, {
                        invertColor: n = !1,
                        type: a = s.BotTagTypes.BOT,
                        className: d,
                        verified: f,
                        hideIcon: h = !1,
                        useRemSizes: p = !1,
                        children: T = []
                    } = e,
                    g = null,
                    v = c.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (a) {
                    case s.BotTagTypes.SYSTEM_DM:
                    case s.BotTagTypes.OFFICIAL:
                        f = !0, v = c.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, g = c.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case s.BotTagTypes.SERVER:
                        g = c.default.Messages.BOT_TAG_SERVER;
                        break;
                    case s.BotTagTypes.ORIGINAL_POSTER:
                        g = c.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case s.BotTagTypes.STAFF_ONLY_DM:
                        g = c.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case s.BotTagTypes.AI:
                        f = !0, v = c.default.Messages.AI_GENERATED_TOOLTIP, g = c.default.Messages.AI_TAG;
                        break;
                    case s.BotTagTypes.REMIX:
                        f = !1, g = c.default.Messages.REMIXING_TAG;
                        break;
                    case s.BotTagTypes.BOT:
                    default:
                        g = c.default.Messages.BOT_TAG_BOT
                }
                let E = a === s.BotTagTypes.ORIGINAL_POSTER,
                    m = a === s.BotTagTypes.REMIX,
                    C = null;
                f && (C = (0, r.jsx)(l.Tooltip, {
                    text: v,
                    align: "center",
                    position: "top",
                    children: e => (0, r.jsx)(i.default, {
                        ...e,
                        className: u.botTagVerified
                    })
                })), t = a === s.BotTagTypes.AI ? u.botTagAI : n ? u.botTagInvert : u.botTagRegular;
                let y = e => (0, r.jsxs)("span", {
                    ...e,
                    className: o(d, t, p ? u.rem : u.px, {
                        [u.botTagOP]: E,
                        [u.botTagRemix]: m
                    }),
                    children: [h ? null : C, T, (0, r.jsx)("span", {
                        className: u.botText,
                        children: g
                    })]
                });
                switch (a) {
                    case s.BotTagTypes.REMIX:
                        return (0, r.jsx)(l.Tooltip, {
                            text: c.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => y(e)
                        });
                    case s.BotTagTypes.ORIGINAL_POSTER:
                        return (0, r.jsx)(l.Tooltip, {
                            text: c.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => y(e)
                        });
                    default:
                        return y()
                }
            };
            d.Types = s.BotTagTypes;
            var f = d
        },
        758710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("889196"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: o,
                        ...i
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            className: o,
                            fill: a,
                            d: "M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                        }), (0, r.jsx)("path", {
                            className: o,
                            fill: a,
                            d: "M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                        })]
                    })
                }, o.LaunchIcon)
        },
        83900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("753809"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: o,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("path", {
                                className: o,
                                fill: a,
                                d: "M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z"
                            }), (0, r.jsx)("rect", {
                                width: "24",
                                height: "24"
                            })]
                        })
                    })
                }, o.LinkIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("434657"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: o,
                        foreground: i,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        className: o,
                        viewBox: "0 0 24 24",
                        ...(0, l.default)(s),
                        children: (0, r.jsx)("path", {
                            className: i,
                            fill: a,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, o.LockIcon)
        },
        71216: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("173010"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: o,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: o,
                            fill: a,
                            d: "M12 2C14.761 2 17 4.238 17 7V9H7V7C7 4.238 9.238 2 12 2ZM10.5 5.5C10.5 6.329 11.172 7 12 7C12.828 7 13.5 6.329 13.5 5.5C13.5 4.671 12.828 4 12 4C11.172 4 10.5 4.671 10.5 5.5ZM23 22H17L19 19V12H17V18C17 18.553 16.552 19 16 19H14L15 22H9L10 19H8C7.448 19 7 18.553 7 18V12H5V19L7 22H1L3 19V12C3 10.896 3.897 10 5 10H19C20.103 10 21 10.896 21 12V19L23 22ZM13 14C13 14.553 13.448 15 14 15C14.552 15 15 14.553 15 14C15 13.447 14.552 13 14 13C13.448 13 13 13.447 13 14Z"
                        })
                    })
                }, o.RobotIcon)
        },
        148337: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("877585"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: n = 18,
                        color: a = "currentColor",
                        foreground: o,
                        ...i
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: o,
                            fill: a,
                            d: "M19 6.00001C15.56 6.00001 12.826 2.43501 12.799 2.39801C12.421 1.89801 11.579 1.89801 11.201 2.39801C11.174 2.43501 8.44 6.00001 5 6.00001C4.447 6.00001 4 6.44801 4 7.00001V14C4 17.807 10.764 21.478 11.534 21.884C11.68 21.961 11.84 21.998 12 21.998C12.16 21.998 12.32 21.96 12.466 21.884C13.236 21.478 20 17.807 20 14V7.00001C20 6.44801 19.553 6.00001 19 6.00001ZM15 16L12 14L9 16L10 13L8 11H11L12 8.00001L13 11H16L14 13L15 16Z"
                        })
                    })
                }, o.ShieldIcon)
        },
        12287: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                o = n("276825"),
                l = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: a
                        })
                    })
                }, o.CheckmarkSmallIcon)
        }
    }
]);
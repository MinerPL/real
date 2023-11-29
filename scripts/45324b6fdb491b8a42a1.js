(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65549"], {
        78349: function(t, e, n) {
            "use strict";
            n("424973"), t.exports.parse = function(t) {
                var e = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!e) return null;
                e.shift();
                var n = null,
                    r = [];
                e[2] && (n = (u = e[2].split("-")).shift(), r = u);
                var i = [];
                e[5] && (i = e[5].split("-")).shift();
                var o = [];
                if (e[6]) {
                    (u = e[6].split("-")).shift();
                    for (var u, a, s = []; u.length;) {
                        var l = u.shift();
                        1 === l.length ? a ? (o.push({
                            singleton: a,
                            extension: s
                        }), a = l, s = []) : a = l : s.push(l)
                    }
                    o.push({
                        singleton: a,
                        extension: s
                    })
                }
                var c = [];
                e[7] && ((c = e[7].split("-")).shift(), c.shift());
                var d = [];
                return e[8] && (d = e[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: e[3] || null,
                        region: e[4] || null,
                        variant: i,
                        extension: o,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: e[0] || null,
                        regular: e[1] || null
                    }
                }
            }
        },
        717837: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return (t = String(t || ""), o.test(t)) ? "rtl" : u.test(t) ? "ltr" : "neutral"
            };
            var r = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                o = RegExp("^[^" + i + "]*[" + r + "]"),
                u = RegExp("^[^" + r + "]*[" + i + "]")
        },
        448105: function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                var n = e.length,
                    r = t.length;
                if (r > n) return !1;
                if (r === n) return t === e;
                t: for (var i = 0, o = 0; i < r; i++) {
                    for (var u = t.charCodeAt(i); o < n;)
                        if (e.charCodeAt(o++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        48648: function(t, e, n) {
            if (n("808653"), n("424973"), !r) var r = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, r) {
                        return n.index = r, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, r, i) {
                        return n.index = i, t + e.call(n, r)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? r.map(t, e) : t)
                }
            };
            var i = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function r() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && r(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && r(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && r(), e
                        }
                    }
                }

                function i(t, e, n, r, i, o, u) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = o, this.histo = u
                }

                function o() {
                    this.vboxes = new n(function(t, e) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var r, i, o, u = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (o = this.b1; o <= this.b2; o++) u += n[e(r, i, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var r, i, o, u, a = 0,
                                s = 8,
                                l = 0,
                                c = 0,
                                d = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += r = n[e(i, o, u)] || 0, l += r * (i + .5) * s, c += r * (o + .5) * s, d += r * (u + .5) * s;
                            a ? this._avg = [~~(l / a), ~~(c / a), ~~(d / a)] : this._avg = [~~(s * (this.r1 + this.r2 + 1) / 2), ~~(s * (this.g1 + this.g2 + 1) / 2), ~~(s * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, o.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var e = this.vboxes, n = 0; n < e.size(); n++)
                            if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var e, n, r, i = this.vboxes, o = 0; o < i.size(); o++)((n = Math.sqrt(Math.pow(t[0] - i.peek(o).color[0], 2) + Math.pow(t[1] - i.peek(o).color[1], 2) + Math.pow(t[2] - i.peek(o).color[2], 2))) < e || void 0 === e) && (e = n, r = i.peek(o).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return r.naturalOrder(r.sum(t.color), r.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            i = t[n].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var s, l, c, d, f, h, E, v, I, _, p, g, m, S, R, M, N = (s = u, f = Array(32768), s.forEach(function(n) {
                                c = n[0] >> t, d = n[1] >> t, f[l = e(c, d, n[2] >> t)] = (f[l] || 0) + 1
                            }), f),
                            O = 0;
                        N.forEach(function() {
                            O++
                        });
                        var w = (h = u, E = N, p = 1e6, g = 0, m = 1e6, S = 0, R = 1e6, M = 0, h.forEach(function(e) {
                                v = e[0] >> t, I = e[1] >> t, _ = e[2] >> t, v < p ? p = v : v > g && (g = v), I < m ? m = I : I > S && (S = I), _ < R ? R = _ : _ > M && (M = _)
                            }), new i(p, g, m, S, R, M, E)),
                            A = new n(function(t, e) {
                                return r.naturalOrder(t.count(), e.count())
                            });

                        function T(t, n) {
                            for (var i, o = 1, u = 0; u < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), u++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var i = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                a = r.max([i, o, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var s, l, c, d, f, h = 0,
                                                E = [],
                                                v = [];
                                            if (a == i)
                                                for (s = n.r1; s <= n.r2; s++) {
                                                    for (d = 0, l = n.g1; l <= n.g2; l++)
                                                        for (c = n.b1; c <= n.b2; c++) d += t[f = e(s, l, c)] || 0;
                                                    h += d, E[s] = h
                                                } else if (a == o)
                                                    for (s = n.g1; s <= n.g2; s++) {
                                                        for (d = 0, l = n.r1; l <= n.r2; l++)
                                                            for (c = n.b1; c <= n.b2; c++) d += t[f = e(l, s, c)] || 0;
                                                        h += d, E[s] = h
                                                    } else
                                                        for (s = n.b1; s <= n.b2; s++) {
                                                            for (d = 0, l = n.r1; l <= n.r2; l++)
                                                                for (c = n.g1; c <= n.g2; c++) d += t[f = e(l, c, s)] || 0;
                                                            h += d, E[s] = h
                                                        }
                                            return E.forEach(function(t, e) {
                                                v[e] = h - t
                                            }), I(a == i ? "r" : a == o ? "g" : "b")
                                        }

                                        function I(t) {
                                            var e, r, i, o, u, a = t + "1",
                                                l = t + "2",
                                                c = 0;
                                            for (s = n[a]; s <= n[l]; s++)
                                                if (E[s] > h / 2) {
                                                    for (i = n.copy(), o = n.copy(), e = s - n[a], u = e <= (r = n[l] - s) ? Math.min(n[l] - 1, ~~(s + r / 2)) : Math.max(n[a], ~~(s - 1 - e / 2)); !E[u];) u++;
                                                    for (c = v[u]; !c && E[u - 1];) c = v[--u];
                                                    return i[l] = u, o[a] = i[l] + 1, [i, o]
                                                }
                                        }
                                    }(N, i),
                                    s = a[0],
                                    l = a[1];
                                if (!s) return;
                                if (t.push(s), l && (t.push(l), o++), o >= n || u++ > 1e3) return
                            }
                        }
                        A.push(w), T(A, .75 * a);
                        for (var F = new n(function(t, e) {
                                return r.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); A.size();) F.push(A.pop());
                        T(F, a - F.size());
                        for (var C = new o; F.size();) C.push(F.pop());
                        return C
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (t.length !== e.length) return !1;
                for (let n = 0; n < e.length && n < t.length; n++)
                    if (!Object.is(t[n], e[n])) return !1;
                return !0
            }
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return o.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                o = n("315378")
        },
        14716: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            }), n("222007");
            var r = n("884691");

            function i() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var r = n("884691");
            let i = {};

            function o(t) {
                let e = (0, r.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("884691"),
                i = n("48174");
            let o = [];

            function u(t, e) {
                let n = (0, r.useRef)(),
                    u = (0, r.useRef)(o);
                return u.current === o ? (n.current = t(), u.current = e) : !(0, i.default)(e, u.current) && (n.current = t(), u.current = e), n.current
            }
        },
        69448: function(t, e, n) {
            "use strict";
            t.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        276825: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                CheckmarkSmallIcon: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                o = n("75196");
            let u = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = t;
                return (0, r.jsx)("svg", {
                    ...(0, o.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        599417: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                o = n("49111"),
                u = n("782340");
            r = class extends i.default.V8APIError {
                constructor(t, e) {
                    super(t, e, null != e ? u.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: o.Links.STATUS,
                        details: "".concat(e)
                    }) : u.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: o.Links.STATUS
                    }))
                }
            }
        },
        545158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(t, e) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), o = i(t, {
                    skipExtensionCheck: e,
                    analyticsLocations: []
                });
                if (null != o) o(null);
                else if (r.isPlatformEmbedded) window.open(t);
                else {
                    let e = document.createElement("a");
                    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
                }
            }
        },
        988268: function(t, e, n) {
            "use strict";
            var r, i, o, u;
            n.r(e), n.d(e, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (o = r || (r = {}))[o.GAME = 1] = "GAME", o[o.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", o[o.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = i || (i = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
        },
        689226: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return E
                },
                canGuildUseRoleIcons: function() {
                    return v
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                o = n("315102"),
                u = n("773336"),
                a = n("49111");
            let s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                l = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, u.isAndroid)(),
                d = (t, e) => {
                    if (null == t) return null;
                    let n = null != t.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(t, e),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()))),
                h = (t, e) => {
                    let {
                        id: n,
                        icon: r
                    } = t;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let u = o.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != e && (d = "size=" + (0, i.getBestMediaProxySize)(e * (0, i.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(r, ".").concat(u, "?").concat(d).concat(f) : "".concat(l).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(d)
                },
                E = t => t.startsWith(s) || t.startsWith("".concat(l, "/roles")) && t.includes("/icons/"),
                v = (t, e) => {
                    var n;
                    let r = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || t.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        50926: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return _
                }
            });
            var r = n("872717"),
                i = n("913144"),
                o = n("479756"),
                u = n("38654"),
                a = n("9294"),
                s = n("26989"),
                l = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (t, e) => {
                let n = null != e ? e : l.default.getInviteKeyForGuildId(t),
                    o = c.default.getCurrentUser(),
                    u = !s.default.isMember(t, null == o ? void 0 : o.id);
                try {
                    let e = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        query: {
                            with_guild: u,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == e.body) throw e;
                    let {
                        body: o
                    } = e;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: t,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
                } catch (e) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: t
                    })
                }
            }, h = async (t, e) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            form_fields: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, E = async (t, e) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                        body: {
                            description: e
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: t,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
                    }
                })
            }, v = async (t, e) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(t),
                    body: {
                        enabled: e
                    },
                    oldFormErrors: !0
                })
            }, I = async (t, e) => {
                if (u.default.isFullServerPreview(t)) {
                    (0, o.updateImpersonatedData)(t, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(t),
                            body: {
                                version: e.version,
                                form_fields: e.formFields
                            }
                        }),
                        {
                            body: o
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: t,
                        request: o
                    }), o
                } catch (t) {
                    throw t
                }
            };
            var _ = {
                fetchVerificationForm: f,
                updateVerificationForm: h,
                updateVerificationFormDescription: E,
                enableVerificationForm: v,
                submitVerificationForm: I
            }
        },
        394294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return u
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return s
                },
                MAX_RULE_LENGTH: function() {
                    return l
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return h
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return v
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return I
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return _
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([i.VerificationFormFieldTypes.TERMS]),
                u = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                s = 16,
                l = 300,
                c = 300,
                d = 8,
                f = 150,
                h = 150,
                E = 1e3,
                v = 300,
                I = "Membership Gating",
                _ = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(t, e, n) {
            "use strict";
            let r;
            n.r(e), n.d(e, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return s
                },
                setShowWarning: function() {
                    return l
                }
            });
            var r = n("308503"),
                i = n("659500"),
                o = n("49111");
            let u = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, r.default)(t => u),
                s = t => {
                    a.setState({
                        hasUnsubmittedChanges: t
                    })
                },
                l = t => {
                    a.setState({
                        shouldShowWarning: t
                    }), t && i.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                o = n("599110"),
                u = n("50926"),
                a = n("347977"),
                s = n("394294"),
                l = n("49111");
            let c = () => {
                    o.default.track(l.AnalyticEvents.MODAL_DISMISSED, {
                        type: s.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = t => {
                    o.default.track(l.AnalyticEvents.OPEN_MODAL, {
                        type: s.MEMBER_VERIFICATION_TYPE,
                        guild_id: t
                    })
                };
            var f = {
                openMemberVerificationModal(t, e) {
                    d(t);
                    let o = async e => {
                        await u.default.submitVerificationForm(t, e)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(e, {
                            ...n,
                            guildId: t,
                            onComplete: o,
                            onClose: function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!t) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, i.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: e
                    })
                },
                closeMemberVerificationModal() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !t && c(), (0, i.closeModal)(s.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        9294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                generateInviteKeyFromUrlParams: function() {
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return s
                },
                parseInviteCodeFromInviteKey: function() {
                    return l
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let o = "event";

            function u(t, e) {
                if (null == e) return t;
                let n = function(t) {
                    let e = "?" === t.charAt(0) ? t.substring(1) : t;
                    try {
                        let t = r.parse(e);
                        return (0, i.getFirstQueryStringValue)(t[o])
                    } catch (t) {
                        return
                    }
                }(e);
                return a({
                    baseCode: t,
                    guildScheduledEventId: n
                })
            }

            function a(t) {
                let {
                    baseCode: e,
                    guildScheduledEventId: n
                } = t;
                return null == n ? e : "".concat(e, "?").concat(o, "=").concat(n)
            }

            function s(t) {
                let [e, n] = t.split("?");
                if (null == n) return {
                    baseCode: e
                };
                let u = r.parse(n),
                    a = (0, i.getFirstQueryStringValue)(u[o]);
                return {
                    baseCode: e,
                    guildScheduledEventId: a
                }
            }

            function l(t) {
                let [e] = t.split("?");
                return e
            }
        },
        232268: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("65597"),
                o = n("880731");

            function u(t) {
                let {
                    children: e,
                    confettiLocation: n
                } = t, u = (0, i.default)([o.default], () => o.default.isEnabled({
                    confettiLocation: n
                }));
                return u ? (0, r.jsx)(r.Fragment, {
                    children: e
                }) : null
            }
        },
        798592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("65597"),
                o = n("526887"),
                u = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: t
                } = r.useContext(o.ConfettiCannonContext), e = (0, i.default)([u.default], () => u.default.getState()), n = r.useCallback(t => ({
                    size: {
                        type: "static-random",
                        minValue: t.confettiSize - 7,
                        maxValue: t.confettiSize + 7
                    }
                }), []), a = r.useMemo(() => ({
                    fire: (r, i, o) => {
                        var u, a;
                        let s = (null == o ? void 0 : o.settings) != null ? {
                                ...e,
                                ...o.settings
                            } : e,
                            l = n(s);
                        t(r, i, l, (null !== (u = null == o ? void 0 : o.count) && void 0 !== u ? u : s.confettiCount) * (null !== (a = null == o ? void 0 : o.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [t, n, e]);
                return a
            }
        },
        337543: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                o = n("9294"),
                u = n("49111");
            let a = {},
                s = {},
                l = {};

            function c(t, e) {
                var n;
                t = null != t ? t : "";
                let r = (0, o.parseExtraDataFromInviteKey)(t),
                    i = a[t],
                    s = null != i ? {
                        state: u.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                e(s), a = {
                    ...a,
                    [t]: s
                }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (l = {
                    ...l,
                    [s.guild.id]: t
                })
            }

            function d(t) {
                return c(t.code, e => {
                    e.state = "banned" in t && t.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(t) {
                    return a[t]
                }
                getInviteError(t) {
                    return s[t]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(t) {
                    return l[t]
                }
            }
            f.displayName = "InviteStore";
            var h = new f(i.default, {
                INVITE_RESOLVE: function(t) {
                    let {
                        code: e
                    } = t, n = (0, o.parseExtraDataFromInviteKey)(e);
                    a = {
                        ...a,
                        [e]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(t) {
                    return c(t.code, e => {
                        var n, r;
                        e.state = u.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (r = t.invite.approximate_presence_count) && void 0 !== r ? r : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.expires_at = t.invite.expires_at, e.stage_instance = t.invite.stage_instance, e.friends_count = t.invite.friends_count, e.is_contact = t.invite.is_contact, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type, e.flags = t.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        e.state = u.InviteStates.RESOLVED, e.inviter = t.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(t) {
                    t.invites.forEach(t => c(t.code, t => {
                        t.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        var n, r;
                        e.state = u.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (r = t.invite.approximate_presence_count) && void 0 !== r ? r : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.stage_instance = t.invite.stage_instance, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type
                    })
                },
                INVITE_ACCEPT: function(t) {
                    return c(t.code, t => {
                        t.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(t) {
                    return c(t.code, e => {
                        e.state = u.InviteStates.ACCEPTED, e.guild = t.invite.guild, e.new_member = t.invite.new_member, e.channel = {
                            ...e.channel,
                            ...t.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(t) {
                    return s[t.code] = t.error, c(t.code, t => {
                        t.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(t) {
                    return c(t.code, t => {
                        t.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("627445"),
                i = n.n(r),
                o = n("446674"),
                u = n("913144"),
                a = n("816454");
            let s = new Map;

            function l(t) {
                let e = s.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class c extends o.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return l(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return s.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return l(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return l(t).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(u.default, {
                WINDOW_INIT: function(t) {
                    i(!s.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: r,
                        focused: o
                    } = t;
                    return s.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: r,
                        focused: o
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = l(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (s.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = l(t.windowId);
                    return e.focused !== t.focused && (s.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = l(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (s.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return s.delete(t.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(t => {
                let {
                    addExtraAnalyticsDecorator: e
                } = t;
                e(t => {
                    t.client_app_state = d.isFocused() ? "focused" : "unfocused"
                })
            });
            var f = d
        },
        555158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                HelpMessageTypes: function() {
                    return i
                },
                default: function() {
                    return E
                }
            });
            var r, i, o = n("37983");
            n("884691");
            var u = n("414456"),
                a = n.n(u),
                s = n("77078"),
                l = n("36694"),
                c = n("381546"),
                d = n("68238"),
                f = n("423487"),
                h = n("557296");
            (r = i || (i = {}))[r.WARNING = 0] = "WARNING", r[r.INFO = 1] = "INFO", r[r.ERROR = 2] = "ERROR", r[r.POSITIVE = 3] = "POSITIVE";
            var E = function(t) {
                let {
                    children: e,
                    messageType: n,
                    className: r,
                    textColor: i = "text-normal",
                    textVariant: u = "text-sm/medium"
                } = t, E = function(t) {
                    switch (t) {
                        case 0:
                            return f.default;
                        case 1:
                            return d.default;
                        case 2:
                            return c.default;
                        case 3:
                            return l.default
                    }
                }(n), v = function(t) {
                    switch (t) {
                        case 0:
                            return h.warning;
                        case 1:
                            return h.info;
                        case 2:
                            return h.error;
                        case 3:
                            return h.positive
                    }
                }(n);
                return (0, o.jsxs)("div", {
                    className: a(h.container, v, r),
                    children: [(0, o.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, o.jsx)(E, {
                            className: h.icon
                        })
                    }), (0, o.jsx)(s.Text, {
                        className: h.text,
                        color: i,
                        variant: u,
                        children: e
                    })]
                })
            }
        },
        486952: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                o = n("276825"),
                u = n("75196"),
                a = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...o
                    } = t;
                    return (0, r.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: e,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, o.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return l
                },
                zoomFit: function() {
                    return c
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return f
                },
                makeCssUrlString: function() {
                    return h
                },
                getPalette: function() {
                    return v
                },
                getPaletteForAvatar: function() {
                    return I
                },
                readFileAsBase64: function() {
                    return p
                },
                dataUriFileSize: function() {
                    return g
                },
                dataUrlToFile: function() {
                    return m
                },
                isPNGAnimated: function() {
                    return S
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var r = n("627445"),
                i = n.n(r),
                o = n("917351"),
                u = n.n(o),
                a = n("48648"),
                s = n.n(a);

            function l(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i,
                    minWidth: o = 0,
                    minHeight: u = 0
                } = t;
                if (e !== r || n !== i) {
                    let t = e > r ? r / e : 1;
                    e = Math.max(Math.round(e * t), o), n = Math.max(Math.round(n * t), u);
                    let a = n > i ? i / n : 1;
                    e = Math.max(Math.round(e * a), o), n = Math.max(Math.round(n * a), u)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function c(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    r = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return l({
                    width: t,
                    height: e,
                    maxWidth: r,
                    maxHeight: n
                })
            }

            function d(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t, o = 1;
                e > r && (o = r / e), e = Math.round(e * o);
                let u = 1;
                return (n = Math.round(n * o)) > i && (u = i / n), Math.min(o * u, 1)
            }

            function f(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: r,
                    maxHeight: i
                } = t;
                return e === n ? 1 : Math.min(Math.max(r / e, i / n), 1)
            }

            function h(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let E = [
                [0, 0, 0]
            ];

            function v(t, e, n) {
                let r = document.createElement("canvas"),
                    i = r.getContext("2d");
                if (null == i) return E;
                let o = r.width = 0 === t.width ? 128 : t.width,
                    u = r.height = 0 === t.height ? 128 : t.height;
                i.drawImage(t, 0, 0, o, u);
                let a = i.getImageData(0, 0, o, u).data,
                    l = function(t, e, n) {
                        let r = [];
                        for (let i = 0, o, u, a, s, l; i < e; i += n) u = t[(o = 4 * i) + 0], a = t[o + 1], s = t[o + 2], (void 0 === (l = t[o + 3]) || l >= 125) && !(u > 250 && a > 250 && s > 250) && r.push([u, a, s]);
                        return r
                    }(a, o * u, n),
                    c = s(l, e);
                return "boolean" == typeof c ? E : c.palette()
            }
            let I = t => _(t),
                _ = u.memoize(t => new Promise((e, n) => {
                    let r = new Image;
                    r.crossOrigin = "Anonymous", r.onerror = t => {
                        n(t), r.onerror = r.onload = null, r = null
                    }, r.onload = () => {
                        e(v(r, 5, 10)), r.onerror = r.onload = null, r = null
                    }, r.src = t
                }));

            function p(t) {
                return new Promise((e, n) => {
                    let r = new FileReader;
                    r.readAsDataURL(t), r.onload = () => {
                        i("string" == typeof r.result, "Result must be a string"), e(r.result)
                    }, r.onerror = t => n(t)
                })
            }

            function g(t) {
                let e = t.split(";base64,");
                return i(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function m(t, e, n) {
                let r = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            r = new Uint8Array(e.length);
                        for (var i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                        return new Blob([r], {
                            type: n
                        })
                    }(t),
                    i = await r.arrayBuffer();
                return new File([i], e, {
                    type: n
                })
            }
            async function S(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let r = await t.text(),
                    i = r.indexOf("IDAT");
                return !!(i > 0) && -1 !== r.substring(0, i).indexOf("acTL") || !1
            }
        },
        833858: function(t, e, n) {
            "use strict";

            function r(t) {
                return Array.isArray(t) ? t[0] : t
            }
            n.r(e), n.d(e, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        655518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: t => t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        }
    }
]);
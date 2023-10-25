(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6439"], {
        873101: function(t, e, n) {
            if (!i) var i = {
                map: function(t, e) {
                    var n = {};
                    return e ? t.map(function(t, i) {
                        return n.index = i, e.call(n, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                },
                sum: function(t, e) {
                    var n = {};
                    return t.reduce(e ? function(t, i, r) {
                        return n.index = r, t + e.call(n, i)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? i.map(t, e) : t)
                }
            };
            var r = function() {
                var t = 3;

                function e(t, e, n) {
                    return (t << 10) + (e << 5) + n
                }

                function n(t) {
                    var e = [],
                        n = !1;

                    function i() {
                        e.sort(t), n = !0
                    }
                    return {
                        push: function(t) {
                            e.push(t), n = !1
                        },
                        peek: function(t) {
                            return !n && i(), void 0 === t && (t = e.length - 1), e[t]
                        },
                        pop: function() {
                            return !n && i(), e.pop()
                        },
                        size: function() {
                            return e.length
                        },
                        map: function(t) {
                            return e.map(t)
                        },
                        debug: function() {
                            return !n && i(), e
                        }
                    }
                }

                function r(t, e, n, i, r, a, o) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = a, this.histo = o
                }

                function a() {
                    this.vboxes = new n(function(t, e) {
                        return i.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return r.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var i, r, a, o = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (a = this.b1; a <= this.b2; a++) o += n[e(i, r, a)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var i, r, a, o, u = 0,
                                l = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (a = this.g1; a <= this.g2; a++)
                                    for (o = this.b1; o <= this.b2; o++) u += i = n[e(r, a, o)] || 0, s += i * (r + .5) * l, c += i * (a + .5) * l, d += i * (o + .5) * l;
                            u ? this._avg = [~~(s / u), ~~(c / u), ~~(d / u)] : this._avg = [~~(l * (this.r1 + this.r2 + 1) / 2), ~~(l * (this.g1 + this.g2 + 1) / 2), ~~(l * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, a.prototype = {
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
                        for (var e, n, i, r = this.vboxes, a = 0; a < r.size(); a++)((n = Math.sqrt(Math.pow(t[0] - r.peek(a).color[0], 2) + Math.pow(t[1] - r.peek(a).color[1], 2) + Math.pow(t[2] - r.peek(a).color[2], 2))) < e || void 0 === e) && (e = n, i = r.peek(a).color);
                        return i
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, e) {
                            return i.naturalOrder(i.sum(t.color), i.sum(e.color))
                        });
                        var e = t[0].color;
                        e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                        var n = t.length - 1,
                            r = t[n].color;
                        r[0] > 251 && r[1] > 251 && r[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, u) {
                        if (!o.length || u < 2 || u > 256) return !1;
                        var l, s, c, d, f, h, v, g, p, E, _, I, m, w, S, N, C = (l = o, f = Array(32768), l.forEach(function(n) {
                                c = n[0] >> t, d = n[1] >> t, f[s = e(c, d, n[2] >> t)] = (f[s] || 0) + 1
                            }), f),
                            M = 0;
                        C.forEach(function() {
                            M++
                        });
                        var A = (h = o, v = C, _ = 1e6, I = 0, m = 1e6, w = 0, S = 1e6, N = 0, h.forEach(function(e) {
                                g = e[0] >> t, p = e[1] >> t, E = e[2] >> t, g < _ ? _ = g : g > I && (I = g), p < m ? m = p : p > w && (w = p), E < S ? S = E : E > N && (N = E)
                            }), new r(_, I, m, w, S, N, v)),
                            b = new n(function(t, e) {
                                return i.naturalOrder(t.count(), e.count())
                            });

                        function O(t, n) {
                            for (var r, a = 1, o = 0; o < 1e3;) {
                                if (!(r = t.pop()).count()) {
                                    t.push(r), o++;
                                    continue
                                }
                                var u = function(t, n) {
                                        if (n.count()) {
                                            var r = n.r2 - n.r1 + 1,
                                                a = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                u = i.max([r, a, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var l, s, c, d, f, h = 0,
                                                v = [],
                                                g = [];
                                            if (u == r)
                                                for (l = n.r1; l <= n.r2; l++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += t[f = e(l, s, c)] || 0;
                                                    h += d, v[l] = h
                                                } else if (u == a)
                                                    for (l = n.g1; l <= n.g2; l++) {
                                                        for (d = 0, s = n.r1; s <= n.r2; s++)
                                                            for (c = n.b1; c <= n.b2; c++) d += t[f = e(s, l, c)] || 0;
                                                        h += d, v[l] = h
                                                    } else
                                                        for (l = n.b1; l <= n.b2; l++) {
                                                            for (d = 0, s = n.r1; s <= n.r2; s++)
                                                                for (c = n.g1; c <= n.g2; c++) d += t[f = e(s, c, l)] || 0;
                                                            h += d, v[l] = h
                                                        }
                                            return v.forEach(function(t, e) {
                                                g[e] = h - t
                                            }), p(u == r ? "r" : u == a ? "g" : "b")
                                        }

                                        function p(t) {
                                            var e, i, r, a, o, u = t + "1",
                                                s = t + "2",
                                                c = 0;
                                            for (l = n[u]; l <= n[s]; l++)
                                                if (v[l] > h / 2) {
                                                    for (r = n.copy(), a = n.copy(), e = l - n[u], o = e <= (i = n[s] - l) ? Math.min(n[s] - 1, ~~(l + i / 2)) : Math.max(n[u], ~~(l - 1 - e / 2)); !v[o];) o++;
                                                    for (c = g[o]; !c && v[o - 1];) c = g[--o];
                                                    return r[s] = o, a[u] = r[s] + 1, [r, a]
                                                }
                                        }
                                    }(C, r),
                                    l = u[0],
                                    s = u[1];
                                if (!l) return;
                                if (t.push(l), s && (t.push(s), a++), a >= n || o++ > 1e3) return
                            }
                        }
                        b.push(A), O(b, .75 * u);
                        for (var R = new n(function(t, e) {
                                return i.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); b.size();) R.push(b.pop());
                        O(R, u - R.size());
                        for (var y = new a; R.size();) y.push(R.pop());
                        return y
                    }
                }
            }();
            t.exports = r.quantize
        },
        599417: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("990746"),
                r = n("49111"),
                a = n("782340");
            class o extends i.default.V8APIError {
                constructor(t, e) {
                    super(t, e, null != e ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(e)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("990746"),
                r = n("49111"),
                a = n("782340");
            class o extends i.default.V6OrEarlierAPIError {
                constructor(t, e) {
                    super(t, e, null != e ? a.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(e)
                    }) : a.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        545158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(t, e) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), a = r(t, {
                    skipExtensionCheck: e,
                    analyticsLocations: []
                });
                if (null != a) a(null);
                else if (i.isPlatformEmbedded) window.open(t);
                else {
                    let e = document.createElement("a");
                    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
                }
            }
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
                    return v
                },
                canGuildUseRoleIcons: function() {
                    return g
                }
            });
            var i = n("867805"),
                r = n("407063"),
                a = n("315102"),
                o = n("773336"),
                u = n("49111");
            let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, o.isAndroid)(),
                d = (t, e) => {
                    if (null == t) return null;
                    let n = null != t.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(t, e),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (t, e) => t.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()))),
                h = (t, e) => {
                    let {
                        id: n,
                        icon: i
                    } = t;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let o = a.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != e && (d = "size=" + (0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(i, ".").concat(o, "?").concat(d).concat(f) : "".concat(s).concat(u.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                v = t => t.startsWith(l) || t.startsWith("".concat(s, "/roles")) && t.includes("/icons/"),
                g = (t, e) => {
                    var n;
                    let i = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || t.features.has(u.GuildFeatures.ROLE_ICONS)
                }
        },
        9294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                generateInviteKeyFromUrlParams: function() {
                    return o
                },
                generateInviteKeyFromExtraData: function() {
                    return u
                },
                parseExtraDataFromInviteKey: function() {
                    return l
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("126617"),
                r = n("833858");
            let a = "event";

            function o(t, e) {
                if (null == e) return t;
                let n = function(t) {
                    let e = "?" === t.charAt(0) ? t.substring(1) : t;
                    try {
                        let t = i.parse(e);
                        return (0, r.getFirstQueryStringValue)(t[a])
                    } catch (t) {
                        return
                    }
                }(e);
                return u({
                    baseCode: t,
                    guildScheduledEventId: n
                })
            }

            function u(t) {
                let {
                    baseCode: e,
                    guildScheduledEventId: n
                } = t;
                return null == n ? e : "".concat(e, "?").concat(a, "=").concat(n)
            }

            function l(t) {
                let [e, n] = t.split("?");
                if (null == n) return {
                    baseCode: e
                };
                let o = i.parse(n),
                    u = (0, r.getFirstQueryStringValue)(o[a]);
                return {
                    baseCode: e,
                    guildScheduledEventId: u
                }
            }

            function s(t) {
                let [e] = t.split("?");
                return e
            }
        },
        467475: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return o
                }
            });
            var i = n("744196"),
                r = n("42203"),
                a = n("724210");

            function o(t) {
                let e = (0, i.default)([r.default], () => {
                    let e = r.default.getChannel(t);
                    return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? r.default.getChannel(null == e ? void 0 : e.parent_id) : null
                });
                return (null == e ? void 0 : e.hasFlag(a.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }
        },
        146574: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getNativeContextMenuChannelAnalytics: function() {
                    return a
                }
            });
            var i = n("18494"),
                r = n("724210");

            function a() {
                var t;
                let e = null !== (t = i.default.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
                return null != e && (0, r.isStaticChannelRoute)(e) ? {
                    channel_static_route: e
                } : {
                    channel_id: e
                }
            }
        },
        467592: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("77078"),
                a = n("272030"),
                o = n("773336"),
                u = n("447651"),
                l = n("26051"),
                s = n("782340");

            function c(t) {
                let {
                    src: e,
                    onSelect: n
                } = t, c = (0, u.default)(e), d = (0, l.default)(e, null);
                return o.isPlatformEmbedded ? (0, i.jsxs)(r.Menu, {
                    navId: "image-context",
                    onClose: a.closeContextMenu,
                    "aria-label": s.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, i.jsx)(r.MenuGroup, {
                        children: c
                    }), (0, i.jsx)(r.MenuGroup, {
                        children: d
                    })]
                }) : null
            }
        },
        447651: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return N
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("77078"),
                a = n("404118"),
                o = n("689226"),
                u = n("467475"),
                l = n("599110"),
                s = n("773336"),
                c = n("286235"),
                d = n("50885"),
                f = n("146574"),
                h = n("49111"),
                v = n("782340");
            let g = "https://media.discordapp.net",
                p = /^.*\.discordapp\.net$/,
                E = "https://cdn.discordapp.com",
                _ = "".concat(g, "/stickers"),
                I = new Set(["jpg", "jpeg", "png", "webp", "gif", "tiff", "bmp"]),
                m = new Set(["jpg", "jpeg", "png"]),
                w = t => {
                    var e;
                    return null === (e = new URL(t).pathname.split(".").pop()) || void 0 === e ? void 0 : e.toLowerCase()
                };

            function S(t, e) {
                a.default.show({
                    title: v.default.Messages.ERROR,
                    body: t
                }), c.default.captureException(e)
            }

            function N(t, e, n) {
                let a = (0, u.default)(null == e ? void 0 : e.getChannelId());
                if (a || (null == n ? void 0 : n.shouldHideMediaOptions) === !0 || !s.isPlatformEmbedded || null == t || ! function(t) {
                        let e = new URL(t),
                            n = w(t);
                        return (p.test(e.hostname) || e.origin === E) && !t.startsWith(_) && !(0, o.isRoleIconAssetUrl)(t) && null != n && I.has(n)
                    }(t)) return null;
                let c = function(t) {
                        let e = new URL(t);
                        return e.origin === E ? t : e.origin === g ? E + e.pathname : (e.searchParams.delete("width"), e.searchParams.delete("height"), e.searchParams.set("quality", "lossless"), e.toString())
                    }(t),
                    N = async () => {
                        try {
                            await d.default.saveImage(c), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (t) {
                            l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_SAVE_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            }), S(v.default.Messages.ERROR_SAVING_IMAGE, t)
                        }
                    }, C = async () => {
                        try {
                            await d.default.copyImage(c), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_COPIED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        } catch (t) {
                            S(v.default.Messages.ERROR_COPYING_IMAGE, t), l.default.track(h.AnalyticEvents.CONTEXT_MENU_IMAGE_COPY_FAILED, {
                                ...(0, f.getNativeContextMenuChannelAnalytics)()
                            })
                        }
                    };
                return [d.default.canCopyImage() && function(t) {
                    let e = w(t);
                    return null != e && m.has(e)
                }(t) ? (0, i.jsx)(r.MenuItem, {
                    id: "copy-image",
                    label: v.default.Messages.COPY_IMAGE_MENU_ITEM,
                    action: C
                }, "copy-image") : null, (0, i.jsx)(r.MenuItem, {
                    id: "save-image",
                    label: v.default.Messages.SAVE_IMAGE_MENU_ITEM,
                    action: N
                }, "save-image")]
            }
        },
        26051: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("77078"),
                a = n("689226"),
                o = n("467475"),
                u = n("24373"),
                l = n("48703"),
                s = n("599110"),
                c = n("128259"),
                d = n("773336"),
                f = n("50885"),
                h = n("146574"),
                v = n("49111"),
                g = n("782340");

            function p(t, e, n, p) {
                let E = (0, o.default)(null == n ? void 0 : n.getChannelId());
                if (!d.isPlatformEmbedded || null == t || "" === t || E || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || null != t && null != (0, u.isStickerAssetUrl)(t) || null != t && (0, a.isRoleIconAssetUrl)(t)) return null;
                let _ = (0, l.getHostname)(t),
                    I = n => {
                        s.default.track(v.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: _,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), (0, c.handleClick)({
                            href: t,
                            trusted: (0, c.isLinkTrusted)(t, e),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, i.jsx)(r.MenuItem, {
                    id: "copy-native-link",
                    label: g.default.Messages.COPY_LINK,
                    action: () => {
                        s.default.track(v.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: _,
                            ...(0, h.getNativeContextMenuChannelAnalytics)()
                        }), f.default.copy(t)
                    }
                }, "copy-native-link"), (0, i.jsx)(r.MenuItem, {
                    id: "open-native-link",
                    label: g.default.Messages.OPEN_LINK,
                    action: t => I(t)
                }, "open-native-link")]
            }
        },
        337543: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return h
                }
            });
            var i = n("498225"),
                r = n("913144"),
                a = n("9294"),
                o = n("49111");
            let u = {},
                l = {},
                s = {};

            function c(t, e) {
                var n;
                t = null != t ? t : "";
                let i = (0, a.parseExtraDataFromInviteKey)(t),
                    r = u[t],
                    l = null != r ? {
                        state: o.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                e(l), u = {
                    ...u,
                    [t]: l
                }, (null === (n = l.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [l.guild.id]: t
                })
            }

            function d(t) {
                return c(t.code, e => {
                    e.state = "banned" in t && t.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class f extends i.default.Store {
                getInvite(t) {
                    return u[t]
                }
                getInviteError(t) {
                    return l[t]
                }
                getInvites() {
                    return u
                }
                getInviteKeyForGuildId(t) {
                    return s[t]
                }
            }
            f.displayName = "InviteStore";
            var h = new f(r.default, {
                INVITE_RESOLVE: function(t) {
                    let {
                        code: e
                    } = t, n = (0, a.parseExtraDataFromInviteKey)(e);
                    u = {
                        ...u,
                        [e]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(t) {
                    return c(t.code, e => {
                        var n, i;
                        e.state = o.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (i = t.invite.approximate_presence_count) && void 0 !== i ? i : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.expires_at = t.invite.expires_at, e.stage_instance = t.invite.stage_instance, e.friends_count = t.invite.friends_count, e.is_contact = t.invite.is_contact, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type, e.flags = t.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        e.state = o.InviteStates.RESOLVED, e.inviter = t.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(t) {
                    t.invites.forEach(t => c(t.code, t => {
                        t.state = o.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(t) {
                    return c(t.invite.code, e => {
                        var n, i;
                        e.state = o.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (i = t.invite.approximate_presence_count) && void 0 !== i ? i : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.stage_instance = t.invite.stage_instance, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type
                    })
                },
                INVITE_ACCEPT: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(t) {
                    return c(t.code, e => {
                        e.state = o.InviteStates.ACCEPTED, e.guild = t.invite.guild, e.new_member = t.invite.new_member, e.channel = {
                            ...e.channel,
                            ...t.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(t) {
                    return l[t.code] = t.error, c(t.code, t => {
                        t.state = o.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(t) {
                    return c(t.code, t => {
                        t.state = o.InviteStates.APP_NOT_OPENED
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
            });
            var i = n("161179"),
                r = n.n(i),
                a = n("498225"),
                o = n("913144"),
                u = n("816454");
            let l = new Map;

            function s(t) {
                let e = l.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class c extends a.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return l.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return s(t).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(o.default, {
                WINDOW_INIT: function(t) {
                    r(!l.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: i,
                        focused: a
                    } = t;
                    return l.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: a
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = s(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (l.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = s(t.windowId);
                    return e.focused !== t.focused && (l.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = s(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (l.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return l.delete(t.windowId), !0
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
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return s
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
                    return g
                },
                getPaletteForAvatar: function() {
                    return p
                },
                readFileAsBase64: function() {
                    return _
                },
                dataUriFileSize: function() {
                    return I
                },
                dataUrlToFile: function() {
                    return m
                },
                isPNGAnimated: function() {
                    return w
                }
            });
            var i = n("161179"),
                r = n.n(i),
                a = n("427964"),
                o = n.n(a),
                u = n("873101"),
                l = n.n(u);

            function s(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: a = 0,
                    minHeight: o = 0
                } = t;
                if (e !== i || n !== r) {
                    let t = e > i ? i / e : 1;
                    e = Math.max(Math.round(e * t), a), n = Math.max(Math.round(n * t), o);
                    let u = n > r ? r / n : 1;
                    e = Math.max(Math.round(e * u), a), n = Math.max(Math.round(n * u), o)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function c(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return s({
                    width: t,
                    height: e,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function d(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = t, a = 1;
                e > i && (a = i / e), e = Math.round(e * a);
                let o = 1;
                return (n = Math.round(n * a)) > r && (o = r / n), Math.min(a * o, 1)
            }

            function f(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = t;
                return e === n ? 1 : Math.min(Math.max(i / e, r / n), 1)
            }

            function h(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let v = [
                [0, 0, 0]
            ];

            function g(t, e, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return v;
                let a = i.width = 0 === t.width ? 128 : t.width,
                    o = i.height = 0 === t.height ? 128 : t.height;
                r.drawImage(t, 0, 0, a, o);
                let u = r.getImageData(0, 0, a, o).data,
                    s = function(t, e, n) {
                        let i = [];
                        for (let r = 0, a, o, u, l, s; r < e; r += n) o = t[(a = 4 * r) + 0], u = t[a + 1], l = t[a + 2], (void 0 === (s = t[a + 3]) || s >= 125) && !(o > 250 && u > 250 && l > 250) && i.push([o, u, l]);
                        return i
                    }(u, a * o, n),
                    c = l(s, e);
                return "boolean" == typeof c ? v : c.palette()
            }
            let p = t => E(t),
                E = o.memoize(t => new Promise((e, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = t => {
                        n(t), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        e(g(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = t
                }));

            function _(t) {
                return new Promise((e, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(t), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), e(i.result)
                    }, i.onerror = t => n(t)
                })
            }

            function I(t) {
                let e = t.split(";base64,");
                return r(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function m(t, e, n) {
                let i = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(e.length);
                        for (var r = 0; r < e.length; r++) i[r] = e.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(t),
                    r = await i.arrayBuffer();
                return new File([r], e, {
                    type: n
                })
            }
            async function w(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await t.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        833858: function(t, e, n) {
            "use strict";

            function i(t) {
                return Array.isArray(t) ? t[0] : t
            }
            n.r(e), n.d(e, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return i
                }
            });
            var i = {
                escape: t => t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        }
    }
]);
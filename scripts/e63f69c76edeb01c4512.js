(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28085"], {
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

                function r(t, e, n, i, r, o, u) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = o, this.histo = u
                }

                function o() {
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
                            var i, r, o, u = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (o = this.b1; o <= this.b2; o++) u += n[e(i, r, o)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var i, r, o, u, a = 0,
                                l = 8,
                                s = 0,
                                c = 0,
                                d = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (u = this.b1; u <= this.b2; u++) a += i = n[e(r, o, u)] || 0, s += i * (r + .5) * l, c += i * (o + .5) * l, d += i * (u + .5) * l;
                            a ? this._avg = [~~(s / a), ~~(c / a), ~~(d / a)] : this._avg = [~~(l * (this.r1 + this.r2 + 1) / 2), ~~(l * (this.g1 + this.g2 + 1) / 2), ~~(l * (this.b1 + this.b2 + 1) / 2)]
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
                        for (var e, n, i, r = this.vboxes, o = 0; o < r.size(); o++)((n = Math.sqrt(Math.pow(t[0] - r.peek(o).color[0], 2) + Math.pow(t[1] - r.peek(o).color[1], 2) + Math.pow(t[2] - r.peek(o).color[2], 2))) < e || void 0 === e) && (e = n, i = r.peek(o).color);
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
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var l, s, c, d, f, h, v, g, p, _, E, I, m, S, w, N, b = (l = u, f = Array(32768), l.forEach(function(n) {
                                c = n[0] >> t, d = n[1] >> t, f[s = e(c, d, n[2] >> t)] = (f[s] || 0) + 1
                            }), f),
                            O = 0;
                        b.forEach(function() {
                            O++
                        });
                        var C = (h = u, v = b, E = 1e6, I = 0, m = 1e6, S = 0, w = 1e6, N = 0, h.forEach(function(e) {
                                g = e[0] >> t, p = e[1] >> t, _ = e[2] >> t, g < E ? E = g : g > I && (I = g), p < m ? m = p : p > S && (S = p), _ < w ? w = _ : _ > N && (N = _)
                            }), new r(E, I, m, S, w, N, v)),
                            x = new n(function(t, e) {
                                return i.naturalOrder(t.count(), e.count())
                            });

                        function R(t, n) {
                            for (var r, o = 1, u = 0; u < 1e3;) {
                                if (!(r = t.pop()).count()) {
                                    t.push(r), u++;
                                    continue
                                }
                                var a = function(t, n) {
                                        if (n.count()) {
                                            var r = n.r2 - n.r1 + 1,
                                                o = n.g2 - n.g1 + 1,
                                                u = n.b2 - n.b1 + 1,
                                                a = i.max([r, o, u]);
                                            if (1 == n.count()) return [n.copy()];
                                            var l, s, c, d, f, h = 0,
                                                v = [],
                                                g = [];
                                            if (a == r)
                                                for (l = n.r1; l <= n.r2; l++) {
                                                    for (d = 0, s = n.g1; s <= n.g2; s++)
                                                        for (c = n.b1; c <= n.b2; c++) d += t[f = e(l, s, c)] || 0;
                                                    h += d, v[l] = h
                                                } else if (a == o)
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
                                            }), p(a == r ? "r" : a == o ? "g" : "b")
                                        }

                                        function p(t) {
                                            var e, i, r, o, u, a = t + "1",
                                                s = t + "2",
                                                c = 0;
                                            for (l = n[a]; l <= n[s]; l++)
                                                if (v[l] > h / 2) {
                                                    for (r = n.copy(), o = n.copy(), e = l - n[a], u = e <= (i = n[s] - l) ? Math.min(n[s] - 1, ~~(l + i / 2)) : Math.max(n[a], ~~(l - 1 - e / 2)); !v[u];) u++;
                                                    for (c = g[u]; !c && v[u - 1];) c = g[--u];
                                                    return r[s] = u, o[a] = r[s] + 1, [r, o]
                                                }
                                        }
                                    }(b, r),
                                    l = a[0],
                                    s = a[1];
                                if (!l) return;
                                if (t.push(l), s && (t.push(s), o++), o >= n || u++ > 1e3) return
                            }
                        }
                        x.push(C), R(x, .75 * a);
                        for (var A = new n(function(t, e) {
                                return i.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); x.size();) A.push(x.pop());
                        R(A, a - A.size());
                        for (var y = new o; A.size();) y.push(A.pop());
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
                    return u
                }
            });
            var i = n("990746"),
                r = n("49111"),
                o = n("782340");
            class u extends i.default.V8APIError {
                constructor(t, e) {
                    super(t, e, null != e ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(e)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: r.Links.STATUS
                    }))
                }
            }
        },
        333805: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("990746"),
                r = n("49111"),
                o = n("782340");
            class u extends i.default.V6OrEarlierAPIError {
                constructor(t, e) {
                    super(t, e, null != e ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: r.Links.STATUS,
                        details: "".concat(e)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
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
                } = await n.el("572544").then(n.bind(n, "572544")), o = r(t, {
                    skipExtensionCheck: e,
                    analyticsLocations: []
                });
                if (null != o) o(null);
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
                o = n("315102"),
                u = n("773336"),
                a = n("49111");
            let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, u.isAndroid)(),
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
                    let u = o.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != e && (d = "size=" + (0, r.getBestMediaProxySize)(e * (0, r.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(i, ".").concat(u, "?").concat(d).concat(f) : "".concat(s).concat(a.Endpoints.ROLE_ICON(n, i), "?").concat(d)
                },
                v = t => t.startsWith(l) || t.startsWith("".concat(s, "/roles")) && t.includes("/icons/"),
                g = (t, e) => {
                    var n;
                    let i = (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || t.features.has(a.GuildFeatures.ROLE_ICONS)
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
                    return l
                },
                parseInviteCodeFromInviteKey: function() {
                    return s
                }
            });
            var i = n("126617"),
                r = n("833858");
            let o = "event";

            function u(t, e) {
                if (null == e) return t;
                let n = function(t) {
                    let e = "?" === t.charAt(0) ? t.substring(1) : t;
                    try {
                        let t = i.parse(e);
                        return (0, r.getFirstQueryStringValue)(t[o])
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

            function l(t) {
                let [e, n] = t.split("?");
                if (null == n) return {
                    baseCode: e
                };
                let u = i.parse(n),
                    a = (0, r.getFirstQueryStringValue)(u[o]);
                return {
                    baseCode: e,
                    guildScheduledEventId: a
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
                    return u
                }
            });
            var i = n("744196"),
                r = n("42203"),
                o = n("724210");

            function u(t) {
                let e = (0, i.default)([r.default], () => {
                    let e = r.default.getChannel(t);
                    return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? r.default.getChannel(null == e ? void 0 : e.parent_id) : null
                });
                return (null == e ? void 0 : e.hasFlag(o.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
            }
        },
        146574: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                getNativeContextMenuChannelAnalytics: function() {
                    return o
                }
            });
            var i = n("18494"),
                r = n("724210");

            function o() {
                var t;
                let e = null !== (t = i.default.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
                return null != e && (0, r.isStaticChannelRoute)(e) ? {
                    channel_static_route: e
                } : {
                    channel_id: e
                }
            }
        },
        399758: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return s
                }
            });
            var i = n("920040");
            n("773670");
            var r = n("77078"),
                o = n("272030"),
                u = n("773336"),
                a = n("26051"),
                l = n("782340");

            function s(t) {
                let {
                    href: e,
                    textContent: n,
                    onSelect: s
                } = t, c = (0, a.default)(e, n);
                return u.isPlatformEmbedded && null != c ? (0, i.jsx)(r.Menu, {
                    navId: "image-context",
                    onClose: o.closeContextMenu,
                    "aria-label": l.default.Messages.IMAGE_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: (0, i.jsx)(r.MenuGroup, {
                        children: c
                    })
                }) : null
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
                o = n("689226"),
                u = n("467475"),
                a = n("24373"),
                l = n("48703"),
                s = n("599110"),
                c = n("128259"),
                d = n("773336"),
                f = n("50885"),
                h = n("146574"),
                v = n("49111"),
                g = n("782340");

            function p(t, e, n, p) {
                let _ = (0, u.default)(null == n ? void 0 : n.getChannelId());
                if (!d.isPlatformEmbedded || null == t || "" === t || _ || (null == p ? void 0 : p.shouldHideMediaOptions) === !0 || null != t && null != (0, a.isStickerAssetUrl)(t) || null != t && (0, o.isRoleIconAssetUrl)(t)) return null;
                let E = (0, l.getHostname)(t),
                    I = n => {
                        s.default.track(v.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: E,
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
                            hostname: E,
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
                o = n("9294"),
                u = n("49111");
            let a = {},
                l = {},
                s = {};

            function c(t, e) {
                var n;
                t = null != t ? t : "";
                let i = (0, o.parseExtraDataFromInviteKey)(t),
                    r = a[t],
                    l = null != r ? {
                        state: u.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                e(l), a = {
                    ...a,
                    [t]: l
                }, (null === (n = l.guild) || void 0 === n ? void 0 : n.id) != null && (s = {
                    ...s,
                    [l.guild.id]: t
                })
            }

            function d(t) {
                return c(t.code, e => {
                    e.state = "banned" in t && t.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class f extends i.default.Store {
                getInvite(t) {
                    return a[t]
                }
                getInviteError(t) {
                    return l[t]
                }
                getInvites() {
                    return a
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
                        var n, i;
                        e.state = u.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (i = t.invite.approximate_presence_count) && void 0 !== i ? i : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.expires_at = t.invite.expires_at, e.stage_instance = t.invite.stage_instance, e.friends_count = t.invite.friends_count, e.is_contact = t.invite.is_contact, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type, e.flags = t.invite.flags
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
                        var n, i;
                        e.state = u.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (i = t.invite.approximate_presence_count) && void 0 !== i ? i : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.stage_instance = t.invite.stage_instance, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type
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
                    return l[t.code] = t.error, c(t.code, t => {
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
            });
            var i = n("161179"),
                r = n.n(i),
                o = n("498225"),
                u = n("913144"),
                a = n("816454");
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
            class c extends o.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return l.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return s(t).windowSize
                }
            }
            c.displayName = "WindowStore";
            let d = new c(u.default, {
                WINDOW_INIT: function(t) {
                    r(!l.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: i,
                        focused: o
                    } = t;
                    return l.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: o
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
                    return E
                },
                dataUriFileSize: function() {
                    return I
                },
                dataUrlToFile: function() {
                    return m
                },
                isPNGAnimated: function() {
                    return S
                }
            });
            var i = n("161179"),
                r = n.n(i),
                o = n("427964"),
                u = n.n(o),
                a = n("873101"),
                l = n.n(a);

            function s(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: o = 0,
                    minHeight: u = 0
                } = t;
                if (e !== i || n !== r) {
                    let t = e > i ? i / e : 1;
                    e = Math.max(Math.round(e * t), o), n = Math.max(Math.round(n * t), u);
                    let a = n > r ? r / n : 1;
                    e = Math.max(Math.round(e * a), o), n = Math.max(Math.round(n * a), u)
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
                } = t, o = 1;
                e > i && (o = i / e), e = Math.round(e * o);
                let u = 1;
                return (n = Math.round(n * o)) > r && (u = r / n), Math.min(o * u, 1)
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
                let o = i.width = 0 === t.width ? 128 : t.width,
                    u = i.height = 0 === t.height ? 128 : t.height;
                r.drawImage(t, 0, 0, o, u);
                let a = r.getImageData(0, 0, o, u).data,
                    s = function(t, e, n) {
                        let i = [];
                        for (let r = 0, o, u, a, l, s; r < e; r += n) u = t[(o = 4 * r) + 0], a = t[o + 1], l = t[o + 2], (void 0 === (s = t[o + 3]) || s >= 125) && !(u > 250 && a > 250 && l > 250) && i.push([u, a, l]);
                        return i
                    }(a, o * u, n),
                    c = l(s, e);
                return "boolean" == typeof c ? v : c.palette()
            }
            let p = t => _(t),
                _ = u.memoize(t => new Promise((e, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = t => {
                        n(t), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        e(g(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = t
                }));

            function E(t) {
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
            async function S(t) {
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
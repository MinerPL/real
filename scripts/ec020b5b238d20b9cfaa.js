(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51307"], {
        48648: function(t, e, n) {
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
                    return t.reduce(e ? function(t, i, u) {
                        return n.index = u, t + e.call(n, i)
                    } : function(t, e) {
                        return t + e
                    }, 0)
                },
                max: function(t, e) {
                    return Math.max.apply(null, e ? i.map(t, e) : t)
                }
            };
            var u = function() {
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

                function u(t, e, n, i, u, r, l) {
                    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = i, this.b1 = u, this.b2 = r, this.histo = l
                }

                function r() {
                    this.vboxes = new n(function(t, e) {
                        return i.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
                    })
                }
                return u.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var n = this.histo;
                        if (!this._count_set || t) {
                            var i, u, r, l = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (r = this.b1; r <= this.b2; r++) l += n[e(i, u, r)] || 0;
                            this._count = l, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new u(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var n = this.histo;
                        if (!this._avg || t) {
                            var i, u, r, l, o = 0,
                                a = 8,
                                _ = 0,
                                s = 0,
                                d = 0;
                            for (u = this.r1; u <= this.r2; u++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (l = this.b1; l <= this.b2; l++) o += i = n[e(u, r, l)] || 0, _ += i * (u + .5) * a, s += i * (r + .5) * a, d += i * (l + .5) * a;
                            o ? this._avg = [~~(_ / o), ~~(s / o), ~~(d / o)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(e) {
                        var n = e[0] >> t;
                        return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, r.prototype = {
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
                        for (var e, n, i, u = this.vboxes, r = 0; r < u.size(); r++)((n = Math.sqrt(Math.pow(t[0] - u.peek(r).color[0], 2) + Math.pow(t[1] - u.peek(r).color[1], 2) + Math.pow(t[2] - u.peek(r).color[2], 2))) < e || void 0 === e) && (e = n, i = u.peek(r).color);
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
                            u = t[n].color;
                        u[0] > 251 && u[1] > 251 && u[2] > 251 && (t[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(l, o) {
                        if (!l.length || o < 2 || o > 256) return !1;
                        var a, _, s, d, c, E, f, I, N, g, T, h, O, A, S, D, C = (a = l, c = Array(32768), a.forEach(function(n) {
                                s = n[0] >> t, d = n[1] >> t, c[_ = e(s, d, n[2] >> t)] = (c[_] || 0) + 1
                            }), c),
                            v = 0;
                        C.forEach(function() {
                            v++
                        });
                        var p = (E = l, f = C, T = 1e6, h = 0, O = 1e6, A = 0, S = 1e6, D = 0, E.forEach(function(e) {
                                I = e[0] >> t, N = e[1] >> t, g = e[2] >> t, I < T ? T = I : I > h && (h = I), N < O ? O = N : N > A && (A = N), g < S ? S = g : g > D && (D = g)
                            }), new u(T, h, O, A, S, D, f)),
                            L = new n(function(t, e) {
                                return i.naturalOrder(t.count(), e.count())
                            });

                        function U(t, n) {
                            for (var u, r = 1, l = 0; l < 1e3;) {
                                if (!(u = t.pop()).count()) {
                                    t.push(u), l++;
                                    continue
                                }
                                var o = function(t, n) {
                                        if (n.count()) {
                                            var u = n.r2 - n.r1 + 1,
                                                r = n.g2 - n.g1 + 1,
                                                l = n.b2 - n.b1 + 1,
                                                o = i.max([u, r, l]);
                                            if (1 == n.count()) return [n.copy()];
                                            var a, _, s, d, c, E = 0,
                                                f = [],
                                                I = [];
                                            if (o == u)
                                                for (a = n.r1; a <= n.r2; a++) {
                                                    for (d = 0, _ = n.g1; _ <= n.g2; _++)
                                                        for (s = n.b1; s <= n.b2; s++) d += t[c = e(a, _, s)] || 0;
                                                    E += d, f[a] = E
                                                } else if (o == r)
                                                    for (a = n.g1; a <= n.g2; a++) {
                                                        for (d = 0, _ = n.r1; _ <= n.r2; _++)
                                                            for (s = n.b1; s <= n.b2; s++) d += t[c = e(_, a, s)] || 0;
                                                        E += d, f[a] = E
                                                    } else
                                                        for (a = n.b1; a <= n.b2; a++) {
                                                            for (d = 0, _ = n.r1; _ <= n.r2; _++)
                                                                for (s = n.g1; s <= n.g2; s++) d += t[c = e(_, s, a)] || 0;
                                                            E += d, f[a] = E
                                                        }
                                            return f.forEach(function(t, e) {
                                                I[e] = E - t
                                            }), N(o == u ? "r" : o == r ? "g" : "b")
                                        }

                                        function N(t) {
                                            var e, i, u, r, l, o = t + "1",
                                                _ = t + "2",
                                                s = 0;
                                            for (a = n[o]; a <= n[_]; a++)
                                                if (f[a] > E / 2) {
                                                    for (u = n.copy(), r = n.copy(), e = a - n[o], l = e <= (i = n[_] - a) ? Math.min(n[_] - 1, ~~(a + i / 2)) : Math.max(n[o], ~~(a - 1 - e / 2)); !f[l];) l++;
                                                    for (s = I[l]; !s && f[l - 1];) s = I[--l];
                                                    return u[_] = l, r[o] = u[_] + 1, [u, r]
                                                }
                                        }
                                    }(C, u),
                                    a = o[0],
                                    _ = o[1];
                                if (!a) return;
                                if (t.push(a), _ && (t.push(_), r++), r >= n || l++ > 1e3) return
                            }
                        }
                        L.push(p), U(L, .75 * o);
                        for (var m = new n(function(t, e) {
                                return i.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
                            }); L.size();) m.push(L.pop());
                        U(m, o - m.size());
                        for (var R = new r; m.size();) R.push(m.pop());
                        return R
                    }
                }
            }();
            t.exports = u.quantize
        },
        267363: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                ack: function() {
                    return d
                },
                ackChannel: function() {
                    return c
                },
                bulkAck: function() {
                    return E
                },
                localAck: function() {
                    return f
                },
                enableAutomaticAck: function() {
                    return I
                },
                disableAutomaticAck: function() {
                    return N
                },
                ackGuildFeature: function() {
                    return g
                },
                ackUserFeature: function() {
                    return T
                }
            });
            var i = n("249654"),
                u = n("913144"),
                r = n("401690"),
                l = n("233069"),
                o = n("42203"),
                a = n("245997"),
                _ = n("697218"),
                s = n("49111");

            function d(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0;
                u.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: t,
                    messageId: i,
                    immediate: e,
                    force: n,
                    context: s.CURRENT_APP_CONTEXT,
                    location: r
                })
            }

            function c(t) {
                t.isCategory() ? ! function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = o.default.getChannel(t);
                    if (null == i || null == i.guild_id) return;
                    let u = a.default.getCategories(i.guild_id);
                    if (null == u[t]) return;
                    let _ = u[t].filter(t => {
                            let {
                                channel: e
                            } = t;
                            return (0, l.isGuildReadableType)(e.type)
                        }).map(t => {
                            let {
                                channel: e
                            } = t;
                            return e.id
                        }),
                        s = [..._];
                    for (let t of (_.forEach(t => {
                            let e = r.default.getActiveJoinedThreadsForParent(i.guild_id, t);
                            for (let t in e) s.push(t)
                        }), s)) d(t, e, n)
                }(t.id, !0, !0) : t.isForumLikeChannel() ? d(t.id, !0, !0, i.default.fromTimestamp(Date.now())) : d(t.id, !0, !0)
            }

            function E(t) {
                u.default.dispatch({
                    type: "BULK_ACK",
                    channels: t,
                    context: s.CURRENT_APP_CONTEXT
                })
            }

            function f(t) {
                u.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: t
                })
            }

            function I(t, e) {
                u.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: t,
                    windowId: e
                })
            }

            function N(t, e) {
                u.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: t,
                    windowId: e
                })
            }

            function g(t, e, n) {
                u.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: t,
                    ackType: e,
                    ackedId: n,
                    local: !1
                })
            }

            function T(t, e) {
                var n;
                let i = null === (n = _.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != i && u.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: t,
                    ackedId: e,
                    local: !1
                })
            }
        },
        599417: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var i = n("872717"),
                u = n("49111"),
                r = n("782340");
            class l extends i.default.V8APIError {
                constructor(t, e) {
                    super(t, e, null != e ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: u.Links.STATUS,
                        details: "".concat(e)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: u.Links.STATUS
                    }))
                }
            }
        },
        689988: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            }), n("704744");
            var i = n("913144");
            class u {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        i.default.subscribe(e, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((t, e) => {
                        e.addChangeListener(t), t()
                    }))
                }
                terminate(t) {
                    !(this.initializedCount <= 0) && (t ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(t => {
                        let [e, n] = t;
                        i.default.unsubscribe(e, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        545158: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var i = n("773336");
            async function u(t, e) {
                let {
                    default: u
                } = await n.el("572544").then(n.bind(n, "572544")), r = u(t, {
                    skipExtensionCheck: e,
                    analyticsLocations: []
                });
                if (null != r) r(null);
                else if (i.isPlatformEmbedded) window.open(t);
                else {
                    let e = document.createElement("a");
                    e.href = t, e.target = "_blank", e.rel = "noreferrer noopener", e.click()
                }
            }
        },
        320954: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var i = n("917351"),
                u = n.n(i);

            function r(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return u(t).map(t => "null" === t.channel.id ? e[t.channel.id] : [t, e[t.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        533613: function(t, e, n) {
            "use strict";
            var i, u;
            n.r(e), n.d(e, {
                HotspotLocations: function() {
                    return i
                }
            }), (u = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", u.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", u.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", u.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", u.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", u.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", u.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", u.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", u.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", u.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", u.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", u.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", u.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", u.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", u.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", u.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", u.HUB_NEW = "HUB_NEW", u.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", u.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", u.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", u.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", u.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", u.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", u.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", u.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", u.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", u.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", u.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", u.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", u.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", u.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", u.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", u.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", u.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", u.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", u.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", u.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", u.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", u.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", u.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        479756: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                startImpersonating: function() {
                    return T
                },
                updateImpersonating: function() {
                    return h
                },
                stopImpersonating: function() {
                    return O
                },
                updateImpersonatedChannels: function() {
                    return S
                },
                updateImpersonatedRoles: function() {
                    return D
                },
                updateImpersonatedData: function() {
                    return C
                }
            });
            var i = n("913144"),
                u = n("716241"),
                r = n("393414"),
                l = n("42203"),
                o = n("923959"),
                a = n("26989"),
                _ = n("305961"),
                s = n("957255"),
                d = n("18494"),
                c = n("282109"),
                E = n("599110"),
                f = n("38654"),
                I = n("507950"),
                N = n("49111"),
                g = n("724210");

            function T(t, e) {
                E.default.track(N.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(e.roles).length,
                    ...(0, u.collectGuildAnalyticsMetadata)(t),
                    is_viewing_as_member: e.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: e
                }), A(t)
            }

            function h(t, e) {
                let n = f.default.getData(t);
                null != n && n.type === e.type && (E.default.track(N.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, u.collectGuildAnalyticsMetadata)(t),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: t,
                    data: {
                        ...n,
                        ...e
                    }
                }), A(t))
            }

            function O(t) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: t
                })
            }

            function A(t) {
                let e = d.default.getChannelId(t),
                    n = l.default.getChannel(e),
                    i = null != e && (0, g.isStaticChannelRoute)(e);
                if (!i && !s.default.can(N.Permissions.VIEW_CHANNEL, n)) {
                    let e = o.default.getDefaultChannel(t);
                    null != e && (0, r.transitionTo)(N.Routes.CHANNEL(t, e.id))
                }
            }

            function S(t, e, n) {
                let i = new Set(c.default.getOptedInChannels(t));
                e.forEach(t => i.add(t)), n.forEach(t => i.delete(t)), h(t, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function D(t, e) {
                let n = _.default.getGuild(t);
                if (null == n) return;
                ! function(t, e) {
                    let n = [...o.default.getSelectableChannelIds(t), ...o.default.getVocalChannelIds(t)],
                        i = Array.from(e);
                    o.default.addConditionalChangeListener(() => {
                        let e = a.default.getSelfMember(t);
                        if (null == e) return !1;
                        if (i.some(t => !e.roles.includes(t))) return !0;
                        let u = [...o.default.getSelectableChannelIds(t), ...o.default.getVocalChannelIds(t)],
                            r = u.filter(t => !n.includes(t));
                        return r.length > 0 && S(t, r, []), !1
                    })
                }(t, e);
                let i = {};
                e.forEach(t => i[t] = n.roles[t]), h(t, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function C(t, e) {
                h(t, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...e
                })
            }
        },
        9294: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return o
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return _
                }
            });
            var i = n("522632"),
                u = n("833858");
            let r = "event";

            function l(t, e) {
                if (null == e) return t;
                let n = function(t) {
                    let e = "?" === t.charAt(0) ? t.substring(1) : t;
                    try {
                        let t = i.parse(e);
                        return (0, u.getFirstQueryStringValue)(t[r])
                    } catch (t) {
                        return
                    }
                }(e);
                return o({
                    baseCode: t,
                    guildScheduledEventId: n
                })
            }

            function o(t) {
                let {
                    baseCode: e,
                    guildScheduledEventId: n
                } = t;
                return null == n ? e : "".concat(e, "?").concat(r, "=").concat(n)
            }

            function a(t) {
                let [e, n] = t.split("?");
                if (null == n) return {
                    baseCode: e
                };
                let l = i.parse(n),
                    o = (0, u.getFirstQueryStringValue)(l[r]);
                return {
                    baseCode: e,
                    guildScheduledEventId: o
                }
            }

            function _(t) {
                let [e] = t.split("?");
                return e
            }
        },
        846325: function(t, e, n) {
            "use strict";
            var i, u;
            n.r(e), n.d(e, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return r
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return l
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return o
                },
                SoundboardWheelSize: function() {
                    return a
                },
                DEFAULT_KEYBIND: function() {
                    return _
                },
                EMPTY_SOUND_LIST: function() {
                    return s
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return d
                }
            });
            let r = 32,
                l = 5,
                o = "DEFAULT";
            (u = i || (i = {}))[u.SUCCESS = 0] = "SUCCESS", u[u.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let a = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                _ = "ctrl+`",
                s = [],
                d = "0"
        },
        235004: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            });
            var i, u, r = n("917351"),
                l = n.n(r),
                o = n("446674"),
                a = n("913144"),
                _ = n("845579"),
                s = n("374363"),
                d = n("697218"),
                c = n("599110"),
                E = n("829536"),
                f = n("846325"),
                I = n("49111"),
                N = n("397336");
            (i = u || (u = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let g = new Map,
                T = new Map,
                h = new Set,
                O = u.NOT_FETCHED,
                A = u.NOT_FETCHED,
                S = new Set,
                D = new Map,
                C = !1;

            function v(t) {
                let {
                    sound: e
                } = t, n = g.get(e.guildId), i = null == n ? void 0 : n.findIndex(t => t.soundId === e.soundId);
                null != n && null != i && -1 !== i ? (n[i] = e, g.set(e.guildId, [...n])) : null != n && (null == n || n.push(e), g.set(e.guildId, [...n]))
            }
            let p = l.debounce(t => {
                c.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, E.amplitudeToPerceptual)(t))
                }), _.SoundboardSettings.updateSetting({
                    volume: t
                })
            }, 1e3);

            function L(t) {
                var e, n;
                let i = null !== (n = null == t ? void 0 : null === (e = t.audioContextSettings) || void 0 === e ? void 0 : e.user) && void 0 !== n ? n : {};
                for (let [t, e] of Object.entries(i)) e.soundboardMuted ? h.add(t) : h.delete(t);
                for (let t of h.keys()) null == i[t] && h.delete(t)
            }
            class U extends o.default.Store {
                initialize() {
                    this.waitFor(s.default), L(s.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(g),
                        favoritedSoundIds: Array.from(S),
                        localSoundboardMutes: Array.from(h)
                    }
                }
                getSounds() {
                    return g
                }
                getSoundsForGuild(t) {
                    return g.get(t)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(f.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(t, e) {
                    var n;
                    let i = null !== (n = g.get(t)) && void 0 !== n ? n : [];
                    return i.find(t => t.soundId === e)
                }
                getSoundById(t) {
                    let e = Array.from(g.values()).flat();
                    return e.find(e => e.soundId === t)
                }
                isFetchingSounds() {
                    return A === u.FETCHING
                }
                isFetchingDefaultSounds() {
                    return O === u.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return O === u.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return O === u.FETCHED
                }
                isUserPlayingSounds(t) {
                    let e = D.get(t);
                    return null != e && e > 0
                }
                isPlayingSound(t) {
                    return null != T.get(t)
                }
                isFavoriteSound(t) {
                    return S.has(t)
                }
                getFavorites() {
                    return S
                }
                isLocalSoundboardMuted(t) {
                    return h.has(t)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return C
                }
                hasFetchedAllSounds() {
                    return A === u.FETCHED && O === u.FETCHED
                }
            }
            U.displayName = "SoundboardStore";
            var m = new U(a.default, {
                LOGOUT: function() {
                    g.clear(), T.clear(), D.clear(), C = !1, A = u.NOT_FETCHED, O = u.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    A = u.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: v,
                GUILD_SOUNDBOARD_SOUND_UPDATE: v,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(t) {
                    let {
                        soundId: e,
                        guildId: n
                    } = t;
                    g.delete(e);
                    let i = g.get(n),
                        u = null == i ? void 0 : i.findIndex(t => t.soundId === e);
                    null != i && null != u && !(u < 0) && (i.splice(u, 1), g.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(t) {
                    var e, n, i;
                    let {
                        soundId: u,
                        userId: r
                    } = t, l = (null !== (n = T.get(u)) && void 0 !== n ? n : 0) + 1, o = (null !== (i = D.get(r)) && void 0 !== i ? i : 0) + 1;
                    T.set(u, l), D.set(r, o), r !== (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && (C = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(t) {
                    var e, n;
                    let {
                        soundId: i,
                        userId: u
                    } = t, r = (null !== (e = T.get(i)) && void 0 !== e ? e : 0) - 1, l = (null !== (n = D.get(u)) && void 0 !== n ? n : 0) - 1;
                    r <= 0 ? T.delete(i) : T.set(i, r), l <= 0 ? D.delete(u) : D.set(u, l)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(t) {
                    let {
                        volume: e
                    } = t;
                    p(e)
                },
                VOICE_CHANNEL_SELECT: function() {
                    T.clear(), D.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(t) {
                    let {
                        settings: e
                    } = t, {
                        type: n,
                        proto: i
                    } = e;
                    if (n === N.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var u, r;
                        S = new Set(null !== (r = null == i ? void 0 : null === (u = i.favoriteSoundboardSounds) || void 0 === u ? void 0 : u.soundIds) && void 0 !== r ? r : [])
                    } else n === N.UserSettingsTypes.PRELOADED_USER_SETTINGS && L(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    O = u.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(t) {
                    let {
                        soundboardSounds: e
                    } = t;
                    g.set(f.DEFAULT_SOUND_GUILD_ID, e), O = u.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(t) {
                    let {
                        updates: e
                    } = t;
                    e.forEach(t => {
                        let {
                            guildId: e,
                            sounds: n
                        } = t;
                        g.set(e, n)
                    }), A = u.FETCHED
                },
                GUILD_DELETE: function(t) {
                    let {
                        guild: e
                    } = t;
                    g.delete(e.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(t) {
                    let {
                        userId: e
                    } = t;
                    h.has(e) ? h.delete(e) : h.add(e)
                },
                OVERLAY_INITIALIZE: function(t) {
                    let {
                        soundboardStoreState: e
                    } = t;
                    g = new Map(Object.entries(e.soundboardSounds)), S = new Set(e.favoritedSoundIds), h = new Set(e.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(t) {
                    let {
                        guildId: e,
                        soundboardSounds: n
                    } = t;
                    g.set(e, n)
                }
            })
        },
        917219: function(t, e, n) {
            "use strict";
            var i, u, r, l;
            n.r(e), n.d(e, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return u
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return o
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return a
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return _
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return s
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return d
                }
            }), (r = i || (i = {}))[r.BACKGROUND = 0] = "BACKGROUND", (l = u || (u = {}))[l.OPTION_1 = 0] = "OPTION_1", l[l.OPTION_2 = 1] = "OPTION_2", l[l.OPTION_3 = 2] = "OPTION_3", l[l.OPTION_4 = 3] = "OPTION_4", l[l.OPTION_7 = 7] = "OPTION_7", l[l.OPTION_8 = 8] = "OPTION_8", l[l.OPTION_9 = 9] = "OPTION_9", l[l.OPTION_10 = 10] = "OPTION_10";
            let o = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10],
                a = [u.OPTION_7, u.OPTION_8, u.OPTION_9, u.OPTION_10, u.OPTION_1, u.OPTION_2, u.OPTION_3, u.OPTION_4].reduce((t, e, n) => ({
                    ...t,
                    [e]: n
                }), {}),
                _ = "blur",
                s = {
                    width: 1280,
                    height: 720
                },
                d = 10485760
        },
        245997: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var i = n("446674"),
                u = n("913144"),
                r = n("320954"),
                l = n("379881"),
                o = n("271938"),
                a = n("42203"),
                _ = n("923959"),
                s = n("305961"),
                d = n("49111");
            let c = null,
                E = {},
                f = null;

            function I() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let N = I();

            function g(t, e) {
                t.index = e
            }

            function T(t) {
                let e = _.default.getChannels(t),
                    n = I(),
                    i = t => {
                        var e;
                        let {
                            channel: i
                        } = t, u = null !== (e = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== e ? e : n.null;
                        u.push({
                            channel: i,
                            index: -1
                        })
                    };
                return e[d.ChannelTypes.GUILD_CATEGORY].forEach(t => {
                    let {
                        channel: e
                    } = t;
                    n._categories.push({
                        channel: e,
                        index: -1
                    }), n[e.id] = []
                }), e[0, _.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), e[0, _.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, r.default)(n._categories, n).forEach(g), E[t] = n, n
            }

            function h() {
                E = {}, null != c && T(c)
            }

            function O(t) {
                let {
                    guild: {
                        id: e
                    }
                } = t;
                E[e] = void 0, c === e && T(e)
            }

            function A(t) {
                let {
                    channel: {
                        guild_id: e
                    }
                } = t;
                if (null == e) return !1;
                E[e] = void 0, c === e && T(e)
            }

            function S(t) {
                let {
                    guildId: e
                } = t;
                E[e] = void 0, e === c && T(e)
            }

            function D(t, e) {
                if (f = e, null == t || null == t.getGuildId()) return !1;
                let n = t.getGuildId();
                return null != n && (E[n] = void 0, n === c && T(n), !0)
            }

            function C() {
                T(d.FAVORITES)
            }
            class v extends i.default.Store {
                initialize() {
                    this.waitFor(_.default, s.default, o.default, a.default, l.default), this.syncWith([l.default], C)
                }
                getCategories(t) {
                    return null != t ? function(t) {
                        let e = E[t];
                        return null != e ? e : T(t)
                    }(t) : N
                }
            }
            v.displayName = "GuildCategoryStore";
            var p = new v(u.default, {
                CHANNEL_SELECT: function(t) {
                    let {
                        guildId: e
                    } = t;
                    if (c = null != e ? e : null, null == e || null != E[e]) return !1;
                    T(e)
                },
                CONNECTION_OPEN: h,
                OVERLAY_INITIALIZE: h,
                CACHE_LOADED_LAZY: h,
                GUILD_CREATE: O,
                GUILD_UPDATE: O,
                GUILD_DELETE: function(t) {
                    let {
                        guild: {
                            id: e
                        }
                    } = t;
                    delete E[e]
                },
                CHANNEL_CREATE: A,
                CHANNEL_DELETE: A,
                CHANNEL_UPDATES: function(t) {
                    let {
                        channels: e
                    } = t, n = !1;
                    for (let {
                            guild_id: t
                        }
                        of e) null != t && (E[t] = void 0, n = !0, c === t && T(t));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(t) {
                    let {
                        guildId: e,
                        user: n
                    } = t;
                    if (o.default.getId() !== n.id) return !1;
                    E[e] = void 0, e === c && T(e)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == c) return !1;
                    T(c)
                },
                GUILD_ROLE_CREATE: S,
                GUILD_ROLE_UPDATE: S,
                GUILD_ROLE_DELETE: S,
                IMPERSONATE_UPDATE: S,
                IMPERSONATE_STOP: S,
                VOICE_CHANNEL_SELECT: function(t) {
                    let {
                        channelId: e
                    } = t;
                    return null == e && null != f ? D(a.default.getChannel(f), null) : D(a.default.getChannel(e), e)
                },
                VOICE_STATE_UPDATES: function(t) {
                    let {
                        voiceStates: e
                    } = t;
                    return e.reduce((t, e) => {
                        let {
                            channelId: n,
                            sessionId: i
                        } = e;
                        return o.default.getSessionId() !== i ? t : D(a.default.getChannel(n), n) || t
                    }, !1)
                }
            })
        },
        337543: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return E
                }
            });
            var i = n("446674"),
                u = n("913144"),
                r = n("9294"),
                l = n("49111");
            let o = {},
                a = {},
                _ = {};

            function s(t, e) {
                var n;
                t = null != t ? t : "";
                let i = (0, r.parseExtraDataFromInviteKey)(t),
                    u = o[t],
                    a = null != u ? {
                        state: l.InviteStates.RESOLVING,
                        ...u
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                e(a), o = {
                    ...o,
                    [t]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (_ = {
                    ..._,
                    [a.guild.id]: t
                })
            }

            function d(t) {
                return s(t.code, e => {
                    e.state = "banned" in t && t.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class c extends i.default.Store {
                getInvite(t) {
                    return o[t]
                }
                getInviteError(t) {
                    return a[t]
                }
                getInvites() {
                    return o
                }
                getInviteKeyForGuildId(t) {
                    return _[t]
                }
            }
            c.displayName = "InviteStore";
            var E = new c(u.default, {
                INVITE_RESOLVE: function(t) {
                    let {
                        code: e
                    } = t, n = (0, r.parseExtraDataFromInviteKey)(e);
                    o = {
                        ...o,
                        [e]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(t) {
                    return s(t.code, e => {
                        var n, i;
                        e.state = l.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (i = t.invite.approximate_presence_count) && void 0 !== i ? i : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.expires_at = t.invite.expires_at, e.stage_instance = t.invite.stage_instance, e.friends_count = t.invite.friends_count, e.is_contact = t.invite.is_contact, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type, e.flags = t.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(t) {
                    return s(t.invite.code, e => {
                        e.state = l.InviteStates.RESOLVED, e.inviter = t.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(t) {
                    t.invites.forEach(t => s(t.code, t => {
                        t.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(t) {
                    return s(t.invite.code, e => {
                        var n, i;
                        e.state = l.InviteStates.RESOLVED, e.guild = t.invite.guild, e.channel = t.invite.channel, e.inviter = t.invite.inviter, e.approximate_member_count = null !== (n = t.invite.approximate_member_count) && void 0 !== n ? n : null, e.approximate_presence_count = null !== (i = t.invite.approximate_presence_count) && void 0 !== i ? i : null, e.target_type = t.invite.target_type, e.target_user = t.invite.target_user, e.target_application = t.invite.target_application, e.stage_instance = t.invite.stage_instance, e.guild_scheduled_event = t.invite.guild_scheduled_event, e.type = t.invite.type
                    })
                },
                INVITE_ACCEPT: function(t) {
                    return s(t.code, t => {
                        t.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(t) {
                    return s(t.code, e => {
                        e.state = l.InviteStates.ACCEPTED, e.guild = t.invite.guild, e.new_member = t.invite.new_member, e.channel = {
                            ...e.channel,
                            ...t.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(t) {
                    return a[t.code] = t.error, s(t.code, t => {
                        t.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(t) {
                    return s(t.code, t => {
                        t.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(t) {
                    return s(t.code, t => {
                        t.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(t) {
                    return s(t.code, t => {
                        t.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return c
                }
            });
            var i = n("627445"),
                u = n.n(i),
                r = n("446674"),
                l = n("913144"),
                o = n("816454");
            let a = new Map;

            function _(t) {
                let e = a.get(t);
                return null == e ? (console.warn("Window state not initialized", t), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : e
            }
            class s extends r.default.Store {
                isFocused() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return _(t).focused
                }
                getFocusedWindowId() {
                    let t = null;
                    return a.forEach((e, n) => {
                        e.focused && (t = n)
                    }), t
                }
                isElementFullScreen() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return _(t).isElementFullscreen
                }
                windowSize() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, o.getMainWindowId)();
                    return _(t).windowSize
                }
            }
            s.displayName = "WindowStore";
            let d = new s(l.default, {
                WINDOW_INIT: function(t) {
                    u(!a.has(t.windowId), "Window initialized multiple times");
                    let {
                        width: e,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = t;
                    return a.set(t.windowId, {
                        windowSize: {
                            width: e,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(t) {
                    let e = _(t.windowId);
                    return e.isElementFullscreen !== t.isElementFullscreen && (a.set(t.windowId, {
                        ...e,
                        isElementFullscreen: t.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(t) {
                    let e = _(t.windowId);
                    return e.focused !== t.focused && (a.set(t.windowId, {
                        ...e,
                        focused: t.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(t) {
                    let e = _(t.windowId);
                    return (e.windowSize.width !== t.width || e.windowSize.height !== t.height) && (a.set(t.windowId, {
                        ...e,
                        windowSize: {
                            width: t.width,
                            height: t.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(t) {
                    return a.delete(t.windowId), !0
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
            var c = d
        },
        103603: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                fit: function() {
                    return _
                },
                zoomFit: function() {
                    return s
                },
                getRatio: function() {
                    return d
                },
                getCoverRatio: function() {
                    return c
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return N
                },
                readFileAsBase64: function() {
                    return T
                },
                dataUriFileSize: function() {
                    return h
                },
                dataUrlToFile: function() {
                    return O
                },
                isPNGAnimated: function() {
                    return A
                }
            });
            var i = n("627445"),
                u = n.n(i),
                r = n("917351"),
                l = n.n(r),
                o = n("48648"),
                a = n.n(o);

            function _(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: u,
                    minWidth: r = 0,
                    minHeight: l = 0
                } = t;
                if (e !== i || n !== u) {
                    let t = e > i ? i / e : 1;
                    e = Math.max(Math.round(e * t), r), n = Math.max(Math.round(n * t), l);
                    let o = n > u ? u / n : 1;
                    e = Math.max(Math.round(e * o), r), n = Math.max(Math.round(n * o), l)
                }
                return {
                    width: e,
                    height: n
                }
            }

            function s(t, e) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return _({
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
                    maxHeight: u
                } = t, r = 1;
                e > i && (r = i / e), e = Math.round(e * r);
                let l = 1;
                return (n = Math.round(n * r)) > u && (l = u / n), Math.min(r * l, 1)
            }

            function c(t) {
                let {
                    width: e,
                    height: n,
                    maxWidth: i,
                    maxHeight: u
                } = t;
                return e === n ? 1 : Math.min(Math.max(i / e, u / n), 1)
            }

            function E(t) {
                return null == t || "" === t ? "none" : "url(".concat(t, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(t, e, n) {
                let i = document.createElement("canvas"),
                    u = i.getContext("2d");
                if (null == u) return f;
                let r = i.width = 0 === t.width ? 128 : t.width,
                    l = i.height = 0 === t.height ? 128 : t.height;
                u.drawImage(t, 0, 0, r, l);
                let o = u.getImageData(0, 0, r, l).data,
                    _ = function(t, e, n) {
                        let i = [];
                        for (let u = 0, r, l, o, a, _; u < e; u += n) l = t[(r = 4 * u) + 0], o = t[r + 1], a = t[r + 2], (void 0 === (_ = t[r + 3]) || _ >= 125) && !(l > 250 && o > 250 && a > 250) && i.push([l, o, a]);
                        return i
                    }(o, r * l, n),
                    s = a(_, e);
                return "boolean" == typeof s ? f : s.palette()
            }
            let N = t => g(t),
                g = l.memoize(t => new Promise((e, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = t => {
                        n(t), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        e(I(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = t
                }));

            function T(t) {
                return new Promise((e, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(t), i.onload = () => {
                        u("string" == typeof i.result, "Result must be a string"), e(i.result)
                    }, i.onerror = t => n(t)
                })
            }

            function h(t) {
                let e = t.split(";base64,");
                return u(2 === e.length, "Input data is not a valid image."), atob(e[1]).length
            }
            async function O(t, e, n) {
                let i = function(t) {
                        let e;
                        e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : btoa(t.split(",")[1]);
                        let n = t.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(e.length);
                        for (var u = 0; u < e.length; u++) i[u] = e.charCodeAt(u);
                        return new Blob([i], {
                            type: n
                        })
                    }(t),
                    u = await i.arrayBuffer();
                return new File([u], e, {
                    type: n
                })
            }
            async function A(t) {
                var e;
                let n = null === (e = t.type) || void 0 === e ? void 0 : e.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await t.text(),
                    u = i.indexOf("IDAT");
                return !!(u > 0) && -1 !== i.substring(0, u).indexOf("acTL") || !1
            }
        },
        34676: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                MessageNotificationSettings: function() {
                    return d
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return c
                },
                muteConfigToTimestamp: function() {
                    return f
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return I
                },
                getCurrentGuildSettings: function() {
                    return N
                },
                getManyCurrentGuildSettings: function() {
                    return g
                },
                getCurrentChannelSettings: function() {
                    return T
                },
                getManyCurrentChannelSettings: function() {
                    return h
                }
            });
            var i, u, r = n("716241"),
                l = n("42203"),
                o = n("282109"),
                a = n("568734"),
                _ = n("49111"),
                s = n("397336");
            (i = u || (u = {})).GUILD = "guild", i.CHANNEL = "channel";
            let d = Object.freeze({
                [_.UserNotificationSettings.ALL_MESSAGES]: "All",
                [_.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                [_.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                [_.UserNotificationSettings.NULL]: null
            });

            function c(t, e, n, i) {
                var l, o;
                let c = function(t) {
                        var e, n, i, u, r, l, o;
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            _ = null != a.mute_config && null != a.mute_config.end_time ? new Date(a.mute_config.end_time).getTime() : t.guild_muted_until,
                            s = null != a.message_notifications ? d[a.message_notifications] : t.guild_message_notification_settings;
                        return {
                            guild_muted_until: _,
                            guild_flags: null !== (e = a.flags) && void 0 !== e ? e : t.guild_flags,
                            guild_is_muted: null !== (n = a.muted) && void 0 !== n ? n : t.guild_is_muted,
                            guild_message_notification_settings: s,
                            guild_suppress_roles: null !== (i = a.suppress_roles) && void 0 !== i ? i : t.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (u = a.mobile_push) && void 0 !== u ? u : t.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (r = a.notify_highlights) && void 0 !== r ? r : t.guild_notify_highlights,
                            guild_suppress_everyone: null !== (l = a.suppress_everyone) && void 0 !== l ? l : t.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (o = a.mute_scheduled_events) && void 0 !== o ? o : t.guild_scheduled_events_muted
                        }
                    },
                    f = c(n),
                    I = c(N(t), e),
                    g = E(f, I, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    T = null !== (l = g("guild_flags")) && void 0 !== l ? l : 0,
                    h = (null !== (o = I.guild_flags) && void 0 !== o ? o : 0) ^ T,
                    O = 0 === (0, a.removeFlags)(h, s.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, s.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                r.default.trackWithMetadata(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...I,
                    location: i,
                    guild_id: t,
                    update_type: u.GUILD,
                    guild_flags_old: g("guild_flags"),
                    guild_is_muted_old: g("guild_is_muted"),
                    guild_suppress_roles_old: g("guild_suppress_roles"),
                    guild_notify_highlights_old: g("guild_notify_highlights"),
                    guild_suppress_everyone_old: g("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: g("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: g("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: g("guild_message_notification_settings"),
                    is_opt_in_only_change: O
                })
            }

            function E(t, e, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return t[i] !== e[i] ? t[i] : void 0
                }
            }

            function f(t) {
                return null != t && null != t.end_time ? new Date(t.end_time).getTime() : null
            }

            function I(t, e, n, i, o) {
                var c, I;
                let N = function(e) {
                        var n, i;
                        let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = null !== (n = u.muted) && void 0 !== n ? n : null == e ? void 0 : e.channel_is_muted,
                            l = null != u.message_notifications ? d[u.message_notifications] : null == e ? void 0 : e.channel_message_notification_settings,
                            o = null == t ? null : !0 === r || null != l;
                        return {
                            channel_is_muted: r,
                            channel_is_overridden: o,
                            channel_flags: null !== (i = u.flags) && void 0 !== i ? i : null == e ? void 0 : e.channel_flags,
                            channel_message_notification_settings: l,
                            channel_muted_until: f(u.mute_config)
                        }
                    },
                    g = N(i),
                    h = N(T(t, e), n),
                    O = E(g, h, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    A = l.default.getChannel(e),
                    S = null !== (c = O("channel_flags")) && void 0 !== c ? c : 0,
                    D = (null !== (I = h.channel_flags) && void 0 !== I ? I : 0) ^ S,
                    C = 0 === (0, a.removeFlags)(D, s.ChannelNotificationSettingsFlags.FAVORITED, s.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                r.default.trackWithMetadata(_.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...h,
                    location: o,
                    guild_id: t,
                    channel_id: e,
                    update_type: u.CHANNEL,
                    parent_id: null != A ? A.parent_id : null,
                    channel_flags_old: O("channel_flags"),
                    channel_is_muted_old: O("channel_is_muted"),
                    channel_muted_until_old: O("channel_muted_until"),
                    channel_is_overridden_old: O("channel_is_overridden"),
                    channel_message_notification_settings_old: O("channel_message_notification_settings"),
                    is_opt_in_only_change: C
                })
            }

            function N(t) {
                let e = o.default.isMuted(t),
                    n = o.default.getMuteConfig(t);
                return {
                    guild_suppress_everyone: o.default.isSuppressEveryoneEnabled(t),
                    guild_suppress_roles: o.default.isSuppressRolesEnabled(t),
                    guild_scheduled_events_muted: o.default.isMuteScheduledEventsEnabled(t),
                    guild_is_muted: e,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: o.default.isMobilePushEnabled(t),
                    guild_message_notification_settings: d[o.default.getMessageNotifications(t)],
                    guild_notify_highlights: o.default.getNotifyHighlights(t),
                    guild_flags: o.default.getGuildFlags(t)
                }
            }

            function g(t) {
                let e = new Map;
                return t.forEach(t => e.set(t, N(t))), e
            }

            function T(t, e) {
                let n = o.default.isChannelMuted(t, e),
                    i = o.default.getChannelMuteConfig(t, e);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: d[o.default.getChannelMessageNotifications(t, e)],
                    channel_flags: o.default.getGuildChannelFlags(t, e)
                }
            }

            function h(t, e) {
                let n = new Map;
                return e.forEach(e => n.set(e, T(t, e))), n
            }
        },
        829536: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return u
                }
            });

            function i(t) {
                let e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === t ? 0 : (e = t > n ? (t - n) / n * 6 : t / n * 50 - 50, n * Math.pow(10, e / 20))
            }

            function u(t) {
                let e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === t) return 0;
                let i = 20 * Math.log10(t / n);
                return n * (e = i > 0 ? i / 6 + 1 : (50 + i) / 50)
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
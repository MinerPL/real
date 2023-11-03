(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87236"], {
        60266: function(e, t, n) {
            e.exports = function(e, t, n, a) {
                for (var i = -1, l = null == e ? 0 : e.length; ++i < l;) {
                    var u = e[i];
                    t(a, u, n(u), e)
                }
                return a
            }
        },
        581628: function(e, t, n) {
            var a = n("978603");
            e.exports = function(e, t, n, i) {
                return a(e, function(e, a, l) {
                    t(i, e, n(e), l)
                }), i
            }
        },
        278296: function(e, t, n) {
            var a = n("60266"),
                i = n("581628"),
                l = n("698273"),
                u = n("725502");
            e.exports = function(e, t) {
                return function(n, r) {
                    var o = u(n) ? a : i,
                        s = t ? t() : {};
                    return o(n, e, l(r, 2), s)
                }
            }
        },
        767590: function(e, t, n) {
            var a = n("890022"),
                i = n("566040"),
                l = n("846165"),
                u = Math.ceil,
                r = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? i(e, t, n) : void 0 === t) ? 1 : r(l(t), 0);
                var o = null == e ? 0 : e.length;
                if (!o || t < 1) return [];
                for (var s = 0, d = 0, c = Array(u(o / t)); s < o;) c[d++] = a(e, s, s += t);
                return c
            }
        },
        852303: function(e, t, n) {
            var a = n("766665"),
                i = n("278296"),
                l = Object.prototype.hasOwnProperty,
                u = i(function(e, t, n) {
                    l.call(e, n) ? ++e[n] : a(e, n, 1)
                });
            e.exports = u
        },
        969176: function(e, t, n) {
            var a = n("354069");
            e.exports = function(e, t) {
                return a(e, t)
            }
        },
        846165: function(e, t, n) {
            var a = n("323033");
            e.exports = function(e) {
                var t = a(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), b.test(e) ? e = e.substr(0, e.length - 2) : C.test(e) && (e = e.substr(0, e.length - 1)), (n = E.exec(e)) ? o.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = m.exec(e)) && c.test(n[1]) && (e = n[1], v.test(e) ? e += "e" : I.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = x.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = S.exec(e)) && o.test(n[1]) && (e = n[1] + a[n[2]]), (n = O.exec(e)) && o.test(n[1]) && (e = n[1] + i[n[2]]), (n = _.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = g.exec(e)) && d.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (d.test(n[1]) || s.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var a = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                i = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                l = "[aeiouy]",
                u = "([^aeiou][^aeiouy]*)",
                r = "(" + l + "[aeiou]*)",
                o = RegExp("^" + u + "?" + r + u),
                s = RegExp("^" + u + "?" + r + u + r + "?$"),
                d = RegExp("^" + u + "?(" + r + u + "){2,}"),
                c = RegExp("^" + u + "?" + l),
                f = RegExp("^" + u + l + "[^aeiouwxy]$"),
                p = /ll$/,
                h = /^(.+?)e$/,
                x = /^(.+?)y$/,
                g = /^(.+?(s|t))(ion)$/,
                m = /^(.+?)(ed|ing)$/,
                v = /(at|bl|iz)$/,
                E = /^(.+?)eed$/,
                C = /^.+?[^s]s$/,
                b = /^.+?(ss|i)es$/,
                I = /([^aeiouylsz])\1$/,
                S = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                O = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                _ = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("884691");

            function i() {
                let e = (0, a.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: i,
                            children: l
                        } = t, u = (0, a.useRef)();
                        return !u.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !i && (i = () => n)), u.current = i()), (0, a.createElement)(e.Provider, {
                            value: u.current
                        }, l)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            i = (0, a.useContext)(e);
                        if (!i) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return i(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, a.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, a.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return l
                }
            });
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08-30_open-in-popout",
                label: "Open Channel in Popout",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l(e) {
                return i.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        327241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("272030"),
                u = n("838446"),
                r = n("158534"),
                o = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                p = n("390008"),
                h = n("41205"),
                x = n("715243"),
                g = n("458574"),
                m = n("963150"),
                v = n("308798"),
                E = n("47006"),
                C = n("878526"),
                b = n("44141"),
                I = n("531674"),
                S = n("619436"),
                O = n("731390"),
                _ = n("339876"),
                M = n("809937"),
                L = n("49111"),
                N = n("782340");

            function y(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, u = (0, b.default)(t), r = (0, g.default)(t), s = (0, f.default)(t), c = (0, p.default)(t), x = (0, h.default)(t), m = (0, I.default)(t), v = (0, S.default)(t), C = (0, E.default)(t), O = (0, d.default)({
                    id: t.id,
                    label: N.default.Messages.COPY_ID_CHANNEL
                }), _ = (0, o.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": N.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [x, c, s]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [m, v]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: C
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: _
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: r
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: O
                    })]
                })
            }

            function T(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: u
                } = e, r = (0, b.default)(t), o = (0, g.default)(t), s = (0, f.default)(t), c = (0, _.default)(t), p = (0, I.default)(t), h = (0, S.default)(t), L = (0, M.default)(t), y = (0, E.default)(t), T = (0, C.default)(t, n), A = (0, x.default)(t, n), w = (0, m.default)(t, n), G = (0, v.default)(t), U = (0, d.default)({
                    id: t.id,
                    label: N.default.Messages.COPY_ID_CHANNEL
                }), P = (0, O.default)(t, "list_text_channel_context_menu");
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": N.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: r
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [T, c, o, s, P]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [p, h, L]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [y, A, w, G]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: U
                    }, "developer-actions")]
                })
            }
            var A = (0, r.default)((0, u.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(y, {
                    ...e
                }) : (0, a.jsx)(T, {
                    ...e
                })
            }, {
                object: L.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                i = n("884691"),
                l = n("77078"),
                u = n("390236"),
                r = n("292508"),
                o = n("383294"),
                s = n("913452"),
                d = n("533466"),
                c = n("49111"),
                f = n("268333");

            function p(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, a.jsx)(r.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, a.jsx)(u.default.Provider, {
                        value: n.guild_id,
                        children: (0, a.jsx)(d.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function h(e, t) {
                let n = (0, s.useOpenInPopoutExperiment)(t),
                    u = i.useCallback(() => {
                        o.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(p, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, a.jsx)(l.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => u()
                }) : null
            }
        },
        542827: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("917351"),
                i = n.n(a),
                l = n("267363"),
                u = n("863636"),
                r = n("401690"),
                o = n("923959"),
                s = n("660478"),
                d = n("599110"),
                c = n("49111"),
                f = n("133335");

            function p(e, t) {
                let n = i.flatMap(e, e => {
                    let t = o.default.getSelectableChannelIds(e),
                        n = o.default.getVocalChannelIds(e),
                        a = [...t, ...n],
                        i = r.default.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        var l;
                        let t = null !== (l = i[e]) && void 0 !== l ? l : {};
                        for (let e in t) a.push(e)
                    }
                    return a
                }).map(e => ({
                    channelId: e,
                    readStateType: f.ReadStateTypes.CHANNEL,
                    messageId: s.default.lastMessageId(e)
                }));
                return e.forEach(e => {
                    n.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_EVENT,
                        messageId: s.default.lastMessageId(e, f.ReadStateTypes.GUILD_EVENT)
                    }), n.push({
                        channelId: e,
                        readStateType: f.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
                        messageId: u.default.ackIdForGuild(e)
                    })
                }), d.default.track(c.AnalyticEvents.MARK_AS_READ, {
                    source: t,
                    type: "guild"
                }), (0, l.bulkAck)(n)
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("803182"),
                i = n("308503"),
                l = n("49111");

            function u(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === l.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var r = (0, i.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = u(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: a
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = u(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: a,
                        basePath: t
                    })
                }
            }))
        },
        830210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                },
                getChannelVideoLimit: function() {
                    return o
                }
            });
            var a = n("446674"),
                i = n("305961"),
                l = n("316133"),
                u = n("49111");

            function r(e) {
                return (0, a.useStateFromStoresObject)([l.default, i.default], () => {
                    let t = l.default.countVoiceStatesForChannel(e.id),
                        n = i.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === u.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function o(e) {
                let t = l.default.countVoiceStatesForChannel(e.id),
                    n = i.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === u.ChannelTypes.GUILD_STAGE_VOICE ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers
                } : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers
                }
            }
        },
        727284: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("845579"),
                u = n("49111");

            function r(e, t) {
                if (l.AlwaysPreviewVideo.getSetting())(0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === u.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
                });
                else null == e || e()
            }
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return s
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return p
                }
            });
            var a = n("597755"),
                i = n.n(a),
                l = n("815157"),
                u = n("271938"),
                r = n("49111");
            let o = "linux";

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    a = null != n ? "&format=".concat(n) : "";
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(a)
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = i.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function f() {
                let e = d(),
                    t = e === o ? "tar.gz" : null;
                return s(e, !1, t)
            }

            function p(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        }
    }
]);
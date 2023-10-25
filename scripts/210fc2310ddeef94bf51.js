(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96084"], {
        493467: function(e, t, n) {
            e.exports = function(e, t, n, i) {
                for (var a = -1, u = null == e ? 0 : e.length; ++a < u;) {
                    var l = e[a];
                    t(i, l, n(l), e)
                }
                return i
            }
        },
        167030: function(e, t, n) {
            var i = n("800709");
            e.exports = function(e, t, n, a) {
                return i(e, function(e, i, u) {
                    t(a, e, n(e), u)
                }), a
            }
        },
        471346: function(e, t, n) {
            var i = n("493467"),
                a = n("167030"),
                u = n("931971"),
                l = n("349046");
            e.exports = function(e, t) {
                return function(n, r) {
                    var o = l(n) ? i : a,
                        s = t ? t() : {};
                    return o(n, e, u(r, 2), s)
                }
            }
        },
        780128: function(e, t, n) {
            var i = n("749064"),
                a = n("914677"),
                u = n("36971"),
                l = Math.ceil,
                r = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? a(e, t, n) : void 0 === t) ? 1 : r(u(t), 0);
                var o = null == e ? 0 : e.length;
                if (!o || t < 1) return [];
                for (var s = 0, d = 0, c = Array(l(o / t)); s < o;) c[d++] = i(e, s, s += t);
                return c
            }
        },
        977755: function(e, t, n) {
            var i = n("377235"),
                a = n("471346"),
                u = Object.prototype.hasOwnProperty,
                l = a(function(e, t, n) {
                    u.call(e, n) ? ++e[n] : i(e, n, 1)
                });
            e.exports = l
        },
        36971: function(e, t, n) {
            var i = n("292533");
            e.exports = function(e) {
                var t = i(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        712869: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), b.test(e) ? e = e.substr(0, e.length - 2) : C.test(e) && (e = e.substr(0, e.length - 1)), (n = E.exec(e)) ? o.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = g.exec(e)) && c.test(n[1]) && (e = n[1], v.test(e) ? e += "e" : N.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = x.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = O.exec(e)) && o.test(n[1]) && (e = n[1] + i[n[2]]), (n = _.exec(e)) && o.test(n[1]) && (e = n[1] + a[n[2]]), (n = L.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = m.exec(e)) && d.test(n[1]) && (e = n[1]), (n = p.exec(e)) && (d.test(n[1]) || s.test(n[1]) && !f.test(n[1])) && (e = n[1]), h.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var i = {
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
                a = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                u = "[aeiouy]",
                l = "([^aeiou][^aeiouy]*)",
                r = "(" + u + "[aeiou]*)",
                o = RegExp("^" + l + "?" + r + l),
                s = RegExp("^" + l + "?" + r + l + r + "?$"),
                d = RegExp("^" + l + "?(" + r + l + "){2,}"),
                c = RegExp("^" + l + "?" + u),
                f = RegExp("^" + l + u + "[^aeiouwxy]$"),
                h = /ll$/,
                p = /^(.+?)e$/,
                x = /^(.+?)y$/,
                m = /^(.+?(s|t))(ion)$/,
                g = /^(.+?)(ed|ing)$/,
                v = /(at|bl|iz)$/,
                E = /^(.+?)eed$/,
                C = /^.+?[^s]s$/,
                b = /^.+?(ss|i)es$/,
                N = /([^aeiouylsz])\1$/,
                O = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                _ = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                L = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        59744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("773670");

            function a() {
                let e = (0, i.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: a,
                            children: u
                        } = t, l = (0, i.useRef)();
                        return !l.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !a && (a = () => n)), l.current = a()), (0, i.createElement)(e.Provider, {
                            value: l.current
                        }, u)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            a = (0, i.useContext)(e);
                        if (!a) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return a(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, i.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, i.useMemo)(() => ({
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
                    return u
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
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

            function u(e) {
                return a.useExperiment({
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
                    return T
                }
            });
            var i = n("920040");
            n("773670");
            var a = n("77078"),
                u = n("272030"),
                l = n("838446"),
                r = n("158534"),
                o = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                h = n("390008"),
                p = n("41205"),
                x = n("715243"),
                m = n("458574"),
                g = n("963150"),
                v = n("308798"),
                E = n("47006"),
                C = n("878526"),
                b = n("333835"),
                N = n("531674"),
                O = n("619436"),
                _ = n("731390"),
                L = n("339876"),
                I = n("809937"),
                S = n("49111"),
                A = n("782340");

            function M(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, b.default)(t), r = (0, m.default)(t), s = (0, f.default)(t), c = (0, h.default)(t), x = (0, p.default)(t), g = (0, N.default)(t), v = (0, O.default)(t), C = (0, E.default)(t), _ = (0, d.default)({
                    id: t.id,
                    label: A.default.Messages.COPY_ID_CHANNEL
                }), L = (0, o.default)(t);
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": A.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: l
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [x, c, s]
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [g, v]
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: C
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: L
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: r
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: _
                    })]
                })
            }

            function w(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, r = (0, b.default)(t), o = (0, m.default)(t), s = (0, f.default)(t), c = (0, L.default)(t), h = (0, N.default)(t), p = (0, O.default)(t), S = (0, I.default)(t), M = (0, E.default)(t), w = (0, C.default)(t, n), T = (0, x.default)(t, n), U = (0, g.default)(t, n), P = (0, v.default)(t), y = (0, d.default)({
                    id: t.id,
                    label: A.default.Messages.COPY_ID_CHANNEL
                }), R = (0, _.default)(t, "list_text_channel_context_menu");
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: u.closeContextMenu,
                    "aria-label": A.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: r
                    }, "mark-as-read"), (0, i.jsxs)(a.MenuGroup, {
                        children: [w, c, o, s, R]
                    }, "channel-actions"), (0, i.jsxs)(a.MenuGroup, {
                        children: [h, p, S]
                    }, "notifications"), (0, i.jsxs)(a.MenuGroup, {
                        children: [M, T, U, P]
                    }, "admin-actions"), (0, i.jsx)(a.MenuGroup, {
                        children: y
                    }, "developer-actions")]
                })
            }
            var T = (0, r.default)((0, l.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, i.jsx)(M, {
                    ...e
                }) : (0, i.jsx)(w, {
                    ...e
                })
            }, {
                object: S.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("920040"),
                a = n("773670"),
                u = n("77078"),
                l = n("390236"),
                r = n("292508"),
                o = n("383294"),
                s = n("913452"),
                d = n("533466"),
                c = n("49111"),
                f = n("341669");

            function h(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, i.jsx)(r.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, i.jsx)(l.default.Provider, {
                        value: n.guild_id,
                        children: (0, i.jsx)(d.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function p(e, t) {
                let n = (0, s.useOpenInPopoutExperiment)(t),
                    l = a.useCallback(() => {
                        o.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, i.jsx)(h, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, i.jsx)(u.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => l()
                }) : null
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("830841"),
                a = n("710835"),
                u = n("49111");

            function l(e) {
                let t = (0, i.matchPath)(null != e ? e : "", {
                    path: u.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === u.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, i.matchPath)(null != e ? e : "", {
                    path: u.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var r = (0, a.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = l(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: i
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = l(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: i,
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
            var i = n("498225"),
                a = n("305961"),
                u = n("316133"),
                l = n("49111");

            function r(e) {
                return (0, i.useStateFromStoresObject)([u.default, a.default], () => {
                    let t = u.default.countVoiceStatesForChannel(e.id),
                        n = a.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function o(e) {
                let t = u.default.countVoiceStatesForChannel(e.id),
                    n = a.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === l.ChannelTypes.GUILD_STAGE_VOICE ? {
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
            var i = n("920040");
            n("773670");
            var a = n("77078"),
                u = n("845579"),
                l = n("49111");

            function r(e, t) {
                if (u.AlwaysPreviewVideo.getSetting())(0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === l.AppContext.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
                });
                else null == e || e()
            }
        },
        735420: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                AppCrashedReasons: function() {
                    return i
                }
            }), (a = i || (i = {})).UNHANDLED_NATIVE_ERROR = "unhandled_native_error", a.UNHANDLED_JS_ERROR = "unhandled_js_error", a.SOCKET_CRASHED = "socket_crashed"
        },
        8987: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                ErrorLevels: function() {
                    return i
                }
            }), (a = i || (i = {})).FATAL = "fatal", a.ERROR = "error", a.WARNING = "warning", a.LOG = "log", a.INFO = "info", a.DEBUG = "debug"
        },
        799271: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                PollLayoutTypes: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.UNKNOWN = 0] = "UNKNOWN", a[a.DEFAULT = 1] = "DEFAULT", a[a.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
        },
        391845: function(e, t, n) {
            "use strict";

            function i() {
                let e = Promise.resolve(null);
                return t => new Promise((n, i) => {
                    e = e.then(t).then(n, i)
                })
            }
            n.r(t), n.d(t, {
                createLock: function() {
                    return i
                }
            })
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
                    return h
                }
            });
            var i = n("892445"),
                a = n.n(i),
                u = n("568235"),
                l = n("271938"),
                r = n("49111");
            let o = "linux";

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = null != n ? "&format=".concat(n) : "";
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(i)
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a.os) || void 0 === e ? void 0 : e.family;
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

            function h(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, u.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, u.generateAttemptId)()
                        });
                    case "Android":
                        return (0, u.default)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: l.default.getFingerprint(),
                            attemptId: (0, u.generateAttemptId)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57939"], {
        60266: function(e, t, n) {
            e.exports = function(e, t, n, i) {
                for (var a = -1, l = null == e ? 0 : e.length; ++a < l;) {
                    var u = e[a];
                    t(i, u, n(u), e)
                }
                return i
            }
        },
        581628: function(e, t, n) {
            var i = n("978603");
            e.exports = function(e, t, n, a) {
                return i(e, function(e, i, l) {
                    t(a, e, n(e), l)
                }), a
            }
        },
        278296: function(e, t, n) {
            var i = n("60266"),
                a = n("581628"),
                l = n("698273"),
                u = n("725502");
            e.exports = function(e, t) {
                return function(n, r) {
                    var o = u(n) ? i : a,
                        s = t ? t() : {};
                    return o(n, e, l(r, 2), s)
                }
            }
        },
        767590: function(e, t, n) {
            var i = n("890022"),
                a = n("566040"),
                l = n("846165"),
                u = Math.ceil,
                r = Math.max;
            e.exports = function(e, t, n) {
                t = (n ? a(e, t, n) : void 0 === t) ? 1 : r(l(t), 0);
                var o = null == e ? 0 : e.length;
                if (!o || t < 1) return [];
                for (var s = 0, d = 0, c = Array(u(o / t)); s < o;) c[d++] = i(e, s, s += t);
                return c
            }
        },
        852303: function(e, t, n) {
            var i = n("766665"),
                a = n("278296"),
                l = Object.prototype.hasOwnProperty,
                u = a(function(e, t, n) {
                    l.call(e, n) ? ++e[n] : i(e, n, 1)
                });
            e.exports = u
        },
        846165: function(e, t, n) {
            var i = n("323033");
            e.exports = function(e) {
                var t = i(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), E.test(e) ? e = e.substr(0, e.length - 2) : b.test(e) && (e = e.substr(0, e.length - 1)), (n = C.exec(e)) ? o.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = g.exec(e)) && c.test(n[1]) && (e = n[1], v.test(e) ? e += "e" : O.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = x.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = I.exec(e)) && o.test(n[1]) && (e = n[1] + i[n[2]]), (n = M.exec(e)) && o.test(n[1]) && (e = n[1] + a[n[2]]), (n = S.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = m.exec(e)) && d.test(n[1]) && (e = n[1]), (n = h.exec(e)) && (d.test(n[1]) || s.test(n[1]) && !f.test(n[1])) && (e = n[1]), p.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                m = /^(.+?(s|t))(ion)$/,
                g = /^(.+?)(ed|ing)$/,
                v = /(at|bl|iz)$/,
                C = /^(.+?)eed$/,
                b = /^.+?[^s]s$/,
                E = /^.+?(ss|i)es$/,
                O = /([^aeiouylsz])\1$/,
                I = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                M = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                S = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("884691");

            function a() {
                let e = (0, i.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: a,
                            children: l
                        } = t, u = (0, i.useRef)();
                        return !u.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !a && (a = () => n)), u.current = a()), (0, i.createElement)(e.Provider, {
                            value: u.current
                        }, l)
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
                    return l
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

            function l(e) {
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
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
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
                m = n("458574"),
                g = n("963150"),
                v = n("308798"),
                C = n("47006"),
                b = n("878526"),
                E = n("44141"),
                O = n("531674"),
                I = n("619436"),
                M = n("731390"),
                S = n("339876"),
                _ = n("809937"),
                L = n("49111"),
                w = n("782340");

            function N(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, u = (0, E.default)(t), r = (0, m.default)(t), s = (0, f.default)(t), c = (0, p.default)(t), x = (0, h.default)(t), g = (0, O.default)(t), v = (0, I.default)(t), b = (0, C.default)(t), M = (0, d.default)({
                    id: t.id,
                    label: w.default.Messages.COPY_ID_CHANNEL
                }), S = (0, o.default)(t);
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: u
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [x, c, s]
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [g, v]
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: b
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: S
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: r
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: M
                    })]
                })
            }

            function y(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: u
                } = e, r = (0, E.default)(t), o = (0, m.default)(t), s = (0, f.default)(t), c = (0, S.default)(t), p = (0, O.default)(t), h = (0, I.default)(t), L = (0, _.default)(t), N = (0, C.default)(t), y = (0, b.default)(t, n), P = (0, x.default)(t, n), j = (0, g.default)(t, n), A = (0, v.default)(t), T = (0, d.default)({
                    id: t.id,
                    label: w.default.Messages.COPY_ID_CHANNEL
                }), U = (0, M.default)(t, "list_text_channel_context_menu");
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": w.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: r
                    }, "mark-as-read"), (0, i.jsxs)(a.MenuGroup, {
                        children: [y, c, o, s, U]
                    }, "channel-actions"), (0, i.jsxs)(a.MenuGroup, {
                        children: [p, h, L]
                    }, "notifications"), (0, i.jsxs)(a.MenuGroup, {
                        children: [N, P, j, A]
                    }, "admin-actions"), (0, i.jsx)(a.MenuGroup, {
                        children: T
                    }, "developer-actions")]
                })
            }
            var P = (0, r.default)((0, u.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, i.jsx)(N, {
                    ...e
                }) : (0, i.jsx)(y, {
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
            var i = n("37983"),
                a = n("884691"),
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
                return (0, i.jsx)(r.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, i.jsx)(u.default.Provider, {
                        value: n.guild_id,
                        children: (0, i.jsx)(d.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function h(e, t) {
                let n = (0, s.useOpenInPopoutExperiment)(t),
                    u = a.useCallback(() => {
                        o.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, i.jsx)(p, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, i.jsx)(l.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => u()
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
            var i = n("803182"),
                a = n("308503"),
                l = n("49111");

            function u(e) {
                let t = (0, i.matchPath)(null != e ? e : "", {
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
                let n = (0, i.matchPath)(null != e ? e : "", {
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
            var r = (0, a.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: i
                    } = u(t);
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
                    } = u(t);
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
            var i = n("446674"),
                a = n("305961"),
                l = n("316133"),
                u = n("49111");

            function r(e) {
                return (0, i.useStateFromStoresObject)([l.default, a.default], () => {
                    let t = l.default.countVoiceStatesForChannel(e.id),
                        n = a.default.getGuild(e.getGuildId());
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
                    n = a.default.getGuild(e.getGuildId());
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
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("845579"),
                u = n("49111");

            function r(e, t) {
                if (l.AlwaysPreviewVideo.getSetting())(0, a.openModalLazy)(async () => {
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
                    contextKey: t === u.AppContext.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
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
            var i = n("597755"),
                a = n.n(i),
                l = n("815157"),
                u = n("271938"),
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

            function p(e, t, n) {
                let i = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != i ? i : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != i ? i : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != i ? i : "https://www.discord.com"
                }
            }
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27047"], {
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        743087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShareIcon: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var u = n("912557"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return i
                }
            });
            var l = n("773670"),
                u = n("599110");
            let i = () => l.useContext(u.AnalyticsContext)
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("773670");
            let u = l.createContext(void 0);
            var i = u
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return _
                },
                canGuildUseRoleIcons: function() {
                    return h
                }
            });
            var l = n("867805"),
                u = n("407063"),
                i = n("315102"),
                s = n("773336"),
                o = n("49111");
            let r = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                a = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, s.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? l.default.getByName(l.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, u.getBestMediaProxySize)(t * (0, u.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: l
                    } = e;
                    if (null == l) return;
                    if (l.startsWith("data:")) return l;
                    let s = i.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != t && (d = "size=" + (0, u.getBestMediaProxySize)(t * (0, u.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(r, "/").concat(n, "/").concat(l, ".").concat(s, "?").concat(d).concat(f) : "".concat(a).concat(o.Endpoints.ROLE_ICON(n, l), "?").concat(d)
                },
                _ = e => e.startsWith(r) || e.startsWith("".concat(a, "/roles")) && e.includes("/icons/"),
                h = (e, t) => {
                    var n;
                    let l = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return l || e.features.has(o.GuildFeatures.ROLE_ICONS)
                }
        },
        152475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEveryoneRoleViewEvent: function() {
                    return _
                },
                isGuildEventInvitable: function() {
                    return h
                },
                default: function() {
                    return I
                }
            });
            var l = n("498225"),
                u = n("242757"),
                i = n("834052"),
                s = n("42203"),
                o = n("923959"),
                r = n("305961"),
                a = n("957255"),
                c = n("991170"),
                d = n("398604"),
                f = n("745049"),
                E = n("49111");

            function _(e) {
                var t;
                let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default];
                let {
                    entityType: l,
                    channelId: u
                } = "entity_type" in (t = e) ? {
                    entityType: t.entity_type,
                    channelId: t.channel_id
                } : t, i = l === f.GuildScheduledEventEntityTypes.EXTERNAL;
                if (i) return !0;
                let o = n.getChannel(u);
                return null != o && c.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, o)
            }

            function h(e) {
                let [t, n, l, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, s.default, r.default, i.default];
                if ((0, d.isGuildEventEnded)(e)) return !1;
                let {
                    guild_id: E,
                    channel_id: h
                } = e, I = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, L = I ? t.getDefaultChannel(e.guild_id) : n.getChannel(h), C = l.getGuild(E), R = c.getStageInstanceByChannel(h);
                return !!(0, u.canViewInviteModal)(a.default, C, L, R) && null != L && _(e, [n])
            }

            function I(e) {
                return (0, l.useStateFromStores)([o.default, s.default, r.default, i.default], () => h(e, [o.default, s.default, r.default, i.default]), [e])
            }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("773670"),
                u = n("498225"),
                i = n("398604");

            function s(e, t) {
                let n = (0, u.useStateFromStoresArray)([i.default], () => {
                        var e, n;
                        return null !== (n = null === (e = i.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                    }),
                    s = l.useMemo(() => null == n ? void 0 : n.find(t => t.event_exception_id === e), [n, e]);
                return s
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("498225"),
                u = n("299039"),
                i = n("398604"),
                s = n("397680"),
                o = n("822516");

            function r(e, t) {
                let n, r;
                let a = (0, l.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e)),
                    c = (0, s.default)(t, e);
                if (null == a) return {};
                if (null == t) return n = new Date(a.scheduled_start_time), {
                    startTime: n,
                    endTime: r = null != a.scheduled_end_time ? new Date(a.scheduled_end_time) : null
                };
                let d = null != a.recurrence_rule ? (0, o.getRRule)(a.recurrence_rule) : null;
                return null == d ? {} : (n = new Date((null == c ? void 0 : c.scheduled_start_time) == null ? u.default.extractTimestamp(t) : c.scheduled_start_time), {
                    startTime: n,
                    endTime: r = (null == c ? void 0 : c.scheduled_end_time) == null ? null : new Date(c.scheduled_end_time)
                })
            }
        },
        613767: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isChannelPublic: function() {
                    return a
                },
                useIsChannelPublic: function() {
                    return c
                }
            });
            var l = n("498225"),
                u = n("42203"),
                i = n("991170"),
                s = n("398604"),
                o = n("745049"),
                r = n("49111");

            function a(e, t) {
                return i.default.canEveryoneRole(r.Permissions.VIEW_CHANNEL, e) || t === o.GuildScheduledEventEntityTypes.EXTERNAL
            }

            function c(e, t) {
                return (0, l.useStateFromStores)([u.default, s.default], () => {
                    let n = u.default.getChannel(e),
                        l = s.default.getGuildScheduledEvent(t);
                    return a(n, null == l ? void 0 : l.entity_type)
                }, [e, t])
            }
        },
        707916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventShareButton: function() {
                    return I
                },
                GuildEventInterestedButton: function() {
                    return L
                },
                GuildEventLurkerInterestedButton: function() {
                    return C
                },
                default: function() {
                    return v
                }
            });
            var l = n("920040"),
                u = n("773670"),
                i = n("638800"),
                s = n("77078"),
                o = n("660279"),
                r = n("36694"),
                a = n("83900"),
                c = n("433487"),
                d = n("491920"),
                f = n("745049"),
                E = n("782340"),
                _ = n("842771");

            function h(e) {
                let {
                    text: t,
                    disabled: n,
                    onJoinClick: u
                } = e;
                return (0, l.jsx)(s.Button, {
                    className: _.button,
                    size: s.Button.Sizes.SMALL,
                    onClick: u,
                    color: s.Button.Colors.GREEN,
                    disabled: n,
                    children: t
                })
            }

            function I(e) {
                let {
                    onInviteClick: t,
                    canInvite: n,
                    isChannelPublic: o
                } = e, c = new i.Timeout, [f, h] = u.useState(!1);
                u.useEffect(() => () => {
                    c.stop()
                }, []);
                let I = e => {
                    null != t && t(e), h(!0), c.start(1e3, () => h(!1))
                };
                return null == t ? null : (0, l.jsx)(s.Tooltip, {
                    text: m(n, o),
                    position: "top",
                    tooltipClassName: _.tooltips,
                    "aria-label": E.default.Messages.SHARE_LINK,
                    children: e => n && o ? (0, l.jsxs)(s.Button, {
                        ...e,
                        className: _.button,
                        innerClassName: _.innerButton,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, l.jsx)(d.default, {
                            width: 16,
                            height: 16
                        }), E.default.Messages.SHARE]
                    }) : (0, l.jsxs)(s.Button, {
                        ...e,
                        className: _.button,
                        innerClassName: _.innerButton,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        disabled: f,
                        look: f ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                        onClick: I,
                        children: [f ? (0, l.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }) : (0, l.jsx)(a.default, {
                            width: 16,
                            height: 16
                        }), f ? E.default.Messages.COPIED : E.default.Messages.SHARE]
                    })
                })
            }

            function L(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: n,
                    onRsvpClick: u,
                    ...i
                } = e, a = t && !n;
                return (0, l.jsxs)(s.Button, {
                    ...i,
                    className: _.button,
                    innerClassName: _.innerButton,
                    size: s.Button.Sizes.SMALL,
                    onClick: u,
                    color: s.Button.Colors.PRIMARY,
                    look: a ? s.Button.Looks.OUTLINED : s.Button.Looks.FILLED,
                    disabled: n,
                    children: [a ? (0, l.jsx)(r.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(o.default, {
                        width: 16,
                        height: 16
                    }), E.default.Messages.INDICATE_RSVP]
                })
            }

            function C(e) {
                return (0, l.jsx)(s.Tooltip, {
                    text: E.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: _.tooltips,
                    "aria-label": E.default.Messages.SHARE_LINK,
                    children: t => (0, l.jsx)(L, {
                        ...t,
                        ...e
                    })
                })
            }
            let R = e => null == e || e,
                m = (e, t) => R(e) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : R(t) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

            function v(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: u,
                    canInvite: i,
                    isChannelPublic: o = !0,
                    entityType: r,
                    onContextMenu: a,
                    onJoinClick: d,
                    onRsvpClick: R,
                    onStartClick: m,
                    onInviteClick: v,
                    onEndClick: S,
                    isJoined: p = !1
                } = e, N = void 0 !== d;
                return (0, l.jsxs)("div", {
                    className: _.container,
                    children: [null != a ? (0, l.jsx)(s.Tooltip, {
                        text: E.default.Messages.MORE,
                        position: "top",
                        "aria-label": E.default.Messages.EDIT,
                        children: e => (0, l.jsx)(s.Clickable, {
                            ...e,
                            onClick: a,
                            className: _.iconButton,
                            children: (0, l.jsx)(c.default, {
                                width: 20,
                                height: 20,
                                className: _.icon
                            })
                        })
                    }) : null, (0, l.jsx)(I, {
                        onInviteClick: v,
                        canInvite: i,
                        isChannelPublic: o
                    }), t && r !== f.GuildScheduledEventEntityTypes.EXTERNAL ? (0, l.jsx)(h, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: n,
                                isVoiceChannel: l
                            } = e;
                            return n ? t ? E.default.Messages.GO_TO_CHANNEL : l ? E.default.Messages.GUILD_EVENT_JOIN : E.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: p,
                            canJoin: N,
                            isVoiceChannel: r === f.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !N,
                        onJoinClick: d
                    }) : null, n && !t && (0, l.jsx)(C, {
                        isUserRsvped: u,
                        isUserLurking: n
                    }), !n && !t && null != R && (0, l.jsx)(L, {
                        isUserRsvped: u,
                        isUserLurking: n,
                        onRsvpClick: R
                    }), t || null == m ? null : (0, l.jsx)(s.Button, {
                        className: _.button,
                        innerClassName: _.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: m,
                        color: s.Button.Colors.GREEN,
                        children: E.default.Messages.START
                    }), t && null != S ? (0, l.jsx)(s.Button, {
                        className: _.button,
                        innerClassName: _.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: S,
                        color: s.Button.Colors.PRIMARY,
                        children: E.default.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        644189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("920040");
            n("773670");
            var u = n("77078"),
                i = n("433487"),
                s = n("707916"),
                o = n("782340"),
                r = n("589067");

            function a(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: a,
                    onContextMenu: c,
                    onRsvpClick: d,
                    onGoToGuildClick: f,
                    isDetailsView: E = !1,
                    isMember: _,
                    onJoinGuildClick: h,
                    guildName: I,
                    onInviteClick: L,
                    canInvite: C,
                    isChannelPublic: R
                } = e;
                return (0, l.jsxs)("div", {
                    className: r.container,
                    children: [null != c ? (0, l.jsx)(u.Tooltip, {
                        text: o.default.Messages.MORE,
                        position: "top",
                        "aria-label": o.default.Messages.EDIT,
                        children: e => (0, l.jsx)(u.Clickable, {
                            ...e,
                            onClick: c,
                            className: r.iconButton,
                            children: (0, l.jsx)(i.default, {
                                width: 20,
                                height: 20,
                                className: r.icon
                            })
                        })
                    }) : null, _ && (0, l.jsx)(s.GuildEventShareButton, {
                        onInviteClick: L,
                        canInvite: C,
                        isChannelPublic: R
                    }), n && !t && (0, l.jsx)(s.GuildEventLurkerInterestedButton, {
                        isUserRsvped: a,
                        isUserLurking: n
                    }), _ && !n && !t && null != d && (0, l.jsx)(s.GuildEventInterestedButton, {
                        isUserRsvped: a,
                        isUserLurking: n,
                        onRsvpClick: d
                    }), _ && !n && (!E || t) ? (0, l.jsx)(u.Button, {
                        className: r.button,
                        innerClassName: r.innerButton,
                        size: u.Button.Sizes.SMALL,
                        onClick: f,
                        color: u.Button.Colors.GREEN,
                        children: o.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, _ ? null : (0, l.jsx)(u.Button, {
                        className: r.button,
                        innerClassName: r.innerButton,
                        size: u.Button.Sizes.SMALL,
                        onClick: h,
                        color: u.Button.Colors.GREEN,
                        children: o.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: I
                        })
                    })]
                })
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return E
                }
            });
            var l = n("703275"),
                u = n.n(l),
                i = n("990746"),
                s = n("913144"),
                o = n("851387"),
                r = n("36402"),
                a = n("49111");
            async function c(e) {
                try {
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await i.default.get({
                            url: a.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    s.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                r.default.shouldFetch(e) && await c(e)
            }
            let f = new u({
                maxAge: 1e4
            });

            function E(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == f.get(l)) {
                    var u, s;
                    return f.set(l, !0), u = e, s = t, i.default.get({
                        url: a.Endpoints.GUILD_ROLE_MEMBER_IDS(u, s)
                    }).then(e => (o.default.requestMembersById(u, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("498225"),
                u = n("913144");
            let i = {},
                s = {};
            class o extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? i[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = s[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            o.displayName = "GuildRoleMemberCountStore";
            var r = new o(u.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    i[t] = n, s[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, u = i[t];
                    if (null == u) return !1;
                    u[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, u = i[t];
                    if (null == u || null == u[n]) return !1;
                    let s = Object.keys(l).length;
                    u[n] += s
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = i[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = i[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == i[t] && (i[t] = {}), i[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete i[t.id], delete s[t.id]
                }
            })
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return u
                }
            });
            var l = n("49111");

            function u(e, t, n, u) {
                let i = null != n ? n : t,
                    s = null != i && e.can(l.Permissions.CREATE_INSTANT_INVITE, i);
                return s || null != t && null != t.vanityURLCode || (null == u ? void 0 : u.invite_code) != null
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var u = n("744196"),
                i = n("719375");

            function s(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, s = (0, u.default)([i.default], () => i.default.isEnabled({
                    confettiLocation: n
                }));
                return s ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("773670"),
                u = n("744196"),
                i = n("526887"),
                s = n("719375");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(i.ConfettiCannonContext), t = (0, u.default)([s.default], () => s.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = l.useMemo(() => ({
                    fire: (l, u, i) => {
                        var s, o;
                        let r = (null == i ? void 0 : i.settings) != null ? {
                                ...t,
                                ...i.settings
                            } : t,
                            a = n(r);
                        e(l, u, a, (null !== (s = null == i ? void 0 : i.count) && void 0 !== s ? s : r.confettiCount) * (null !== (o = null == i ? void 0 : i.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == i ? void 0 : i.sprite
                        })
                    }
                }), [e, n, t]);
                return o
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return L
                }
            });
            var l = n("773670"),
                u = n("744196"),
                i = n("990746"),
                s = n("913144"),
                o = n("775433"),
                r = n("697218"),
                a = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                E = n("49111");
            let _ = "nonSubscriber";
            async function h() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await i.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), l = d.default.shouldFetchPremiumLikelihood(), u = r.default.getCurrentUser();
                C(u, l, t, n)
            }

            function L(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), i = (0, u.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, u.default)([r.default], () => r.default.getCurrentUser());
                l.useEffect(() => {
                    C(s, i, t, n)
                }, [s, i, t, n])
            }

            function C(e, t, n, l) {
                null != e && !(0, c.isPremium)(e) && n && (t && h(), l && (!a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("498225"),
                u = n("913144");
            let i = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = i;
            class o extends l.default.Store {
                initialize() {
                    s = i
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            o.displayName = "UserPremiumLikelihoodStore";
            var r = new o(u.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("862205");
            let u = (0, l.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var i = u
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040");
            n("773670");
            var u = n("575482"),
                i = n.n(u),
                s = n("782340"),
                o = n("153930"),
                r = n("284434"),
                a = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(o.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a,
                        className: i(o.sparkleIcon, o.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: s.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: r,
                        className: i(o.sparkleIcon, o.sparkleTop)
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040"),
                u = n("773670"),
                i = n("77078"),
                s = n("393414"),
                o = n("49111"),
                r = u.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: r,
                        onClick: a,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = e, E = u.useCallback(e => {
                        !e.repeat && ((e.charCode === o.KeyboardKeys.SPACE || e.charCode === o.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, s.transitionTo)(n), null == a || a()), null == c || c(e))
                    }, [n, c, a]), _ = u.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, s.transitionTo)(n), null == a || a())
                    }, [n, a]), h = (0, l.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: _,
                        onKeyPress: E,
                        ...f,
                        children: r
                    });
                    return (0, l.jsx)(i.FocusRing, {
                        ...d,
                        children: h
                    })
                })
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");

            function u(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, u = n ? t : 1, i = n ? 1 : t;
                return (0, l.jsx)("span", {
                    style: {
                        display: "block",
                        width: u,
                        minWidth: u,
                        height: i,
                        minHeight: i
                    }
                })
            }
            n("773670")
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var u = n("469563"),
                i = n("503420"),
                s = n("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: u = "currentColor",
                        foreground: i,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                className: i,
                                fill: u,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, i.ClockIcon)
        },
        491920: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var u = n("469563"),
                i = n("743087"),
                s = n("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: u = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                            fill: u
                        })
                    })
                }, i.ShareIcon)
        }
    }
]);
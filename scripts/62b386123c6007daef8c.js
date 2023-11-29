(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51077"], {
        524173: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BellIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.693 2.889a.623.623 0 0 0 .381-.43 2 2 0 0 1 3.852 0c.054.195.19.363.38.43A7.003 7.003 0 0 1 19 9.5v2.086a.5.5 0 0 0 .128.334l1.102 1.224a3 3 0 0 1 .77 2.007v.279c0 .668-.336 1.29-.946 1.564-1.315.593-4 1.506-8.054 1.506-4.055 0-6.74-.913-8.054-1.506C3.336 16.72 3 16.098 3 15.43v-.279a3 3 0 0 1 .77-2.007l1.102-1.224A.5.5 0 0 0 5 11.586V9.5a7.003 7.003 0 0 1 4.693-6.611ZM9.18 19.844A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        className: u
                    })
                })
            }
        },
        576044: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                LocationIcon: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("669491"),
                s = l("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        1339: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                guildEventDetailsParser: function() {
                    return i
                }
            });
            var n = l("367376"),
                a = l("180161"),
                s = l("47677");
            let r = {
                    ...n.default.guildEventRules.link,
                    react: (0, s.default)({
                        enableBuildOverrides: !1,
                        mustConfirmExternalLink: !0
                    }).react
                },
                u = {
                    ...n.default.guildEventRules.channelMention,
                    react: (0, a.default)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                },
                i = n.default.reactParserFor({
                    ...n.default.guildEventRules,
                    link: r,
                    channelMention: u
                })
        },
        93550: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("407063"),
                a = l("49111");

            function s(e, t) {
                let l;
                if (null == e.image) return null;
                null == t && (t = window.screen.width * (0, n.getDevicePixelRatio)()), t = (0, n.getBestMediaProxySize)(t);
                let s = window.GLOBAL_ENV.CDN_HOST;
                if (null != s) {
                    var r;
                    l = "".concat((r = "https:", "https:"), "//").concat(s, "/guild-events/").concat(e.id, "/").concat(e.image)
                } else l = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + a.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
                return l += "?size=".concat(t)
            }
        },
        909151: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                r = l.n(s),
                u = l("1339"),
                i = l("139225"),
                c = l("632215");

            function d(e) {
                let {
                    description: t,
                    className: l,
                    guildId: s,
                    truncate: d = !0
                } = e, o = a.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
                    guildId: s,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0
                }), [t, s]);
                return (0, n.jsx)("div", {
                    className: r(i.descriptionText, l, c.markup, {
                        [i.truncate]: d
                    }),
                    children: o
                })
            }
        },
        255050: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("900702");

            function u(e) {
                let {
                    source: t,
                    className: l
                } = e;
                return null == t ? null : (0, n.jsx)("div", {
                    className: s(r.container, l),
                    style: {
                        backgroundImage: "url(".concat(t, ")")
                    }
                })
            }
        },
        400271: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildEventStatus: function() {
                    return S
                },
                GuildEventDetails: function() {
                    return _
                },
                default: function() {
                    return D
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("446674"),
                u = l("77078"),
                i = l("26989"),
                c = l("155207"),
                d = l("158998"),
                o = l("398604"),
                E = l("397680"),
                f = l("466148"),
                v = l("189443"),
                h = l("822516"),
                T = l("909151"),
                m = l("255050"),
                N = l("393745"),
                g = l("745049"),
                x = l("782340"),
                C = l("629400");

            function S(e) {
                let {
                    className: t,
                    creator: l,
                    guildId: a,
                    isNew: T,
                    isHub: m = !1,
                    guildEventId: S,
                    eventPreview: _,
                    recurrenceId: D
                } = e, {
                    storedEvent: p,
                    userCount: A
                } = (0, r.useStateFromStoresObject)([o.default], () => ({
                    storedEvent: o.default.getGuildScheduledEvent(S),
                    userCount: o.default.getUserCount(S, D)
                })), R = null != p ? p : _, I = (0, r.useStateFromStores)([i.default], () => i.default.getNick(a, null == l ? void 0 : l.id), [a, l]);
                D = null == R || null != D ? D : (0, h.getNextRecurrenceIdInEvent)(R);
                let {
                    startTime: L
                } = (0, f.default)(S, D, _), j = (0, E.default)(D, S), w = null != j ? j.is_canceled ? g.GuildScheduledEventStatus.CANCELED : g.GuildScheduledEventStatus.SCHEDULED : null;
                if (null == R) return null;
                let {
                    entity_type: M,
                    status: G,
                    recurrence_rule: O
                } = R;
                return (0, n.jsxs)("div", {
                    className: s(C.statusContainer, t),
                    children: [(0, n.jsx)(N.GuildEventTimeStatus, {
                        startTime: L.toISOString(),
                        status: null != w ? w : G,
                        eventType: M,
                        isNew: T,
                        recurrenceRule: (0, v.recurrenceRuleFromServer)(O)
                    }), (0, n.jsx)("div", {
                        className: C.spacer
                    }), !m && null != l && (0, n.jsx)(u.Tooltip, {
                        text: x.default.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != I ? I : d.default.getName(l)
                        }),
                        children: e => (0, n.jsx)(u.Avatar, {
                            ...e,
                            src: l.getAvatarURL(a, 20),
                            size: u.AvatarSizes.SIZE_20,
                            "aria-label": null != I ? I : l.username,
                            className: C.creator
                        })
                    }), (0, n.jsx)(u.Tooltip, {
                        text: x.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: A
                        }),
                        children: e => (0, n.jsxs)("div", {
                            className: C.rsvpCount,
                            ...e,
                            children: [(0, n.jsx)(c.default, {
                                width: 12,
                                height: 12,
                                className: C.rsvpIcon
                            }), (0, n.jsx)(u.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: A
                            })]
                        })
                    })]
                })
            }

            function _(e) {
                let {
                    headerVariant: t = "heading-lg/medium",
                    descriptionClassName: l,
                    name: a,
                    description: r,
                    truncate: i,
                    guildId: c,
                    imageSource: d
                } = e;
                return (0, n.jsxs)("div", {
                    className: s({
                        [C.withThumbnail]: null != d
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: s({
                            [C.descriptionWithThumbnail]: null != d
                        }),
                        children: [(0, n.jsx)(u.Heading, {
                            variant: t,
                            selectable: !0,
                            className: C.eventName,
                            children: a
                        }), null != r && (0, n.jsx)(T.default, {
                            description: r,
                            className: s(l, C.description),
                            truncate: i,
                            guildId: c
                        })]
                    }), null != d && (0, n.jsx)("div", {
                        className: C.thumbnailContainer,
                        children: (0, n.jsx)(m.default, {
                            source: d,
                            className: C.thumbnail
                        })
                    })]
                })
            }

            function D(e) {
                let {
                    headerVariant: t,
                    descriptionClassName: l,
                    creator: a,
                    name: s,
                    description: r,
                    imageSource: u,
                    isHub: i = !1,
                    truncate: c,
                    guildId: d,
                    isNew: o,
                    guildEventId: E,
                    eventPreview: f,
                    recurrenceId: v
                } = e;
                return (0, n.jsxs)("div", {
                    className: C.container,
                    children: [(0, n.jsx)(S, {
                        className: C.eventInfoStatusContainer,
                        creator: a,
                        guildId: d,
                        isHub: i,
                        isNew: o,
                        guildEventId: E,
                        eventPreview: f,
                        recurrenceId: v
                    }), (0, n.jsx)(_, {
                        name: s,
                        description: r,
                        headerVariant: t,
                        descriptionClassName: l,
                        truncate: c,
                        guildId: d,
                        imageSource: u
                    })]
                })
            }
        },
        393745: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildEventTimeStatus: function() {
                    return p
                }
            }), l("222007");
            var n, a, s = l("37983"),
                r = l("884691"),
                u = l("414456"),
                i = l.n(u),
                c = l("866227"),
                d = l.n(c),
                o = l("669491"),
                E = l("77078"),
                f = l("449918"),
                v = l("943232"),
                h = l("93393"),
                T = l("956089"),
                m = l("822516"),
                N = l("757767"),
                g = l("745049"),
                x = l("843455"),
                C = l("782340"),
                S = l("675644");
            (a = n || (n = {}))[a.SCHEDULED = 0] = "SCHEDULED", a[a.STARTING_SOON = 1] = "STARTING_SOON", a[a.READY = 2] = "READY", a[a.STARTED = 3] = "STARTED", a[a.ENDED = 4] = "ENDED", a[a.CANCELED = 5] = "CANCELED";

            function _() {
                return (0, s.jsx)(T.TextBadge, {
                    className: S.newBadge,
                    color: o.default.unsafe_rawColors.BRAND_260.css,
                    text: (0, s.jsx)(E.Text, {
                        className: S.newBadgeText,
                        variant: "text-xs/bold",
                        children: C.default.Messages.NEW
                    })
                })
            }

            function D(e) {
                let {
                    children: t,
                    className: l,
                    tooltipText: n
                } = e;
                return (0, s.jsx)("div", {
                    className: i(S.eventStatusContainer, l),
                    children: (0, s.jsx)(E.Tooltip, {
                        position: "right",
                        text: n,
                        shouldShow: null != n,
                        children: e => (0, s.jsx)("div", {
                            ...e,
                            className: i(S.eventStatusContainer, l),
                            children: t
                        })
                    })
                })
            }

            function p(e) {
                let {
                    startTime: t,
                    status: l,
                    eventType: n,
                    className: a,
                    endTime: u,
                    liveText: c,
                    textVariant: o = "text-sm/semibold",
                    isNew: T,
                    recurrenceRule: p
                } = e, A = (0, f.useThemedColorValue)(x.ThemeColor.TEXT_BRAND), R = (0, f.useThemedColorValue)(x.ThemeColor.TEXT_POSITIVE), I = (0, f.useThemedColorValue)(x.ThemeColor.TEXT_DANGER);
                null == c && (c = n === g.GuildScheduledEventEntityTypes.EXTERNAL ? C.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : C.default.Messages.STAGE_CHANNEL_LIVE_NOW);
                let [{
                    startDateTimeString: L,
                    endDateTimeString: j,
                    currentOrPastEvent: w,
                    upcomingEvent: M,
                    diffMinutes: G
                }, O] = r.useState((0, m.getEventTimeData)(t, u));
                r.useEffect(() => {
                    O((0, m.getEventTimeData)(t, u));
                    let e = setInterval(() => O((0, m.getEventTimeData)(t, u)), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [t, u]);
                let V = L;
                null != j && "" !== j && (V = C.default.Messages.START_DATE_TO_END_DATE.format({
                    start: L,
                    end: j
                }));
                let b = r.useMemo(() => l === g.GuildScheduledEventStatus.CANCELED ? 5 : l === g.GuildScheduledEventStatus.ACTIVE ? 3 : g.GuildScheduledEventStatusDone.has(l) ? 4 : w ? 2 : M ? 1 : 0, [l, w, M]),
                    U = function(e, t, l, n, a) {
                        switch (e) {
                            case 1:
                                return a > 0 ? C.default.Messages.STARTING_IN_MINUTES.format({
                                    minutes: a
                                }) : C.default.Messages.STARTING_SOON;
                            case 2:
                                return C.default.Messages.STARTING_SOON;
                            case 3:
                                return null != n && "" !== n ? C.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                                    start: l,
                                    startHook: e => (0, s.jsx)(E.Text, {
                                        color: "text-positive",
                                        variant: "text-sm/semibold",
                                        className: S.liveEventEndTime,
                                        children: e
                                    }),
                                    end: n
                                }) : null != l ? l : "";
                            default:
                                return t
                        }
                    }(b, V, c, j, G),
                    {
                        Icon: H,
                        iconColor: B,
                        textColor: k,
                        tooltipText: P
                    } = r.useMemo(() => (function(e) {
                        let t, {
                                timeStatus: l,
                                textBrand: n,
                                textPositive: a,
                                textDanger: s,
                                endDateTimeString: r,
                                startDateTimeString: u
                            } = e,
                            i = v.default,
                            c = n,
                            d = "header-secondary";
                        switch (l) {
                            case 3:
                                c = a, d = null != r ? void 0 : "text-positive";
                                break;
                            case 4:
                                i = h.default;
                                break;
                            case 2:
                            case 1:
                                d = "text-brand", t = u;
                                break;
                            case 5:
                                c = s
                        }
                        return {
                            Icon: i,
                            iconColor: c.hex,
                            textColor: d,
                            tooltipText: t
                        }
                    })({
                        timeStatus: b,
                        textBrand: A,
                        textPositive: R,
                        textDanger: I,
                        endDateTimeString: j,
                        startDateTimeString: L
                    }), [b, A, R, I, j, L]),
                    y = null;
                if (null != p) {
                    let e = (0, m.getRRule)(p);
                    y = C.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                        recurrenceRule: e.toText()
                    });
                    let l = d(t),
                        n = (0, m.recurrenceRuleToOption)(l, p);
                    y = function(e, t) {
                        let l = t.toDate(),
                            n = l.toLocaleString(C.default.getLocale(), {
                                weekday: "long"
                            });
                        switch (e) {
                            case N.RecurrenceOptions.WEEKLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                                    weekday: n
                                });
                            case N.RecurrenceOptions.YEARLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                                    date: l.toLocaleString(C.default.getLocale(), {
                                        month: "short",
                                        day: "2-digit"
                                    })
                                });
                            case N.RecurrenceOptions.WEEKDAY_ONLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                            default:
                                return null
                        }
                    }(n, l)
                }
                return (0, s.jsxs)(D, {
                    className: i(a, {
                        [S.isRecurring]: null != y
                    }),
                    tooltipText: P,
                    children: [T && l === g.GuildScheduledEventStatus.SCHEDULED ? (0, s.jsx)(_, {}) : (0, s.jsx)(H, {
                        color: B,
                        width: 20,
                        height: 20
                    }), (0, s.jsxs)("div", {
                        className: S.eventStatusLabel,
                        children: [(0, s.jsx)(E.Text, {
                            color: k,
                            variant: o,
                            children: U
                        }), null != y && (0, s.jsx)(E.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: y
                        })]
                    })]
                })
            }
        },
        660279: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("524173"),
                r = l("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...u
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            className: s,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                        })
                    })
                }, s.BellIcon, void 0, {
                    size: 24
                })
        },
        718550: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("469563"),
                s = l("576044"),
                r = l("75196"),
                u = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            d: "M17 15.54V17.44C18.828 17.807 20 18.368 20 19C20 20.106 16.419 21 12 21C7.581 21 4 20.106 4 19C4 18.368 5.173 17.807 7 17.44V15.54C4.014 16.231 2 17.52 2 19C2 21.21 6.477 23 12 23C17.523 23 22 21.21 22 19C22 17.52 19.986 16.231 17 15.54Z",
                            fill: a
                        }), (0, n.jsx)("path", {
                            d: "M18 9C18 5.687 15.314 3 12 3C8.686 3 6 5.687 6 9C6 13 12 20 12 20C12 20 18 13 18 9ZM10 9C10 7.896 10.896 7 12 7C13.104 7 14 7.896 14 9C14 10.104 13.104 11 12 11C10.896 11 10 10.104 10 9Z",
                            fill: a
                        })]
                    })
                }, s.LocationIcon, void 0, {
                    size: 24
                })
        }
    }
]);
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51077"], {
        524173: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                BellIcon: function() {
                    return r
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("912557"),
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
                        d: "M9.693 2.889a.623.623 0 0 0 .381-.43 2 2 0 0 1 3.852 0c.054.195.19.363.38.43A7.003 7.003 0 0 1 19 9.5v2.086a.5.5 0 0 0 .128.334l1.102 1.224a3 3 0 0 1 .77 2.007v.279c0 .668-.336 1.29-.946 1.564-1.315.593-4 1.506-8.054 1.506-4.055 0-6.74-.913-8.054-1.506C3.336 16.72 3 16.098 3 15.43v-.279a3 3 0 0 1 .77-2.007l1.102-1.224A.5.5 0 0 0 5 11.586V9.5a7.003 7.003 0 0 1 4.693-6.611Zm-.512 16.955A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        clipRule: "evenodd",
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
            var n = l("920040");
            l("773670");
            var a = l("912557"),
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
            var n = l("920040"),
                a = l("773670"),
                s = l("575482"),
                r = l.n(s),
                u = l("1339"),
                i = l("616348"),
                c = l("422137");

            function d(e) {
                let {
                    description: t,
                    className: l,
                    guildId: s,
                    truncate: d = !0
                } = e, o = a.useMemo(() => (0, u.guildEventDetailsParser)(t, !0, {
                    guildId: s
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
            var n = l("920040");
            l("773670");
            var a = l("575482"),
                s = l.n(a),
                r = l("879634");

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
                    return g
                },
                default: function() {
                    return D
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("575482"),
                s = l.n(a),
                r = l("498225"),
                u = l("77078"),
                i = l("26989"),
                c = l("155207"),
                d = l("158998"),
                o = l("398604"),
                E = l("397680"),
                f = l("466148"),
                T = l("189443"),
                v = l("909151"),
                h = l("255050"),
                N = l("393745"),
                m = l("745049"),
                x = l("782340"),
                C = l("468217");

            function S(e) {
                let {
                    className: t,
                    creator: l,
                    guildId: a,
                    isNew: v,
                    isHub: h = !1,
                    guildEventId: S,
                    eventPreview: g,
                    recurrenceId: D
                } = e, _ = (0, r.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(S)), A = null != _ ? _ : g, R = (0, r.useStateFromStores)([i.default], () => i.default.getNick(a, null == l ? void 0 : l.id), [a, l]), {
                    startTime: p
                } = (0, f.default)(S, D), I = (0, E.default)(D, S), L = null != D && null != p, j = null != I ? I.is_canceled ? m.GuildScheduledEventStatus.CANCELED : m.GuildScheduledEventStatus.SCHEDULED : null;
                if (null == A) return null;
                let {
                    entity_type: w,
                    status: O,
                    scheduled_start_time: G,
                    user_count: M = 1,
                    recurrence_rule: V
                } = A;
                return (0, n.jsxs)("div", {
                    className: s(C.statusContainer, t),
                    children: [(0, n.jsx)(N.GuildEventTimeStatus, {
                        startTime: L ? p.toISOString() : G,
                        status: null != j ? j : O,
                        eventType: w,
                        isNew: v,
                        recurrenceRule: (0, T.recurrenceRuleFromServer)(V)
                    }), (0, n.jsx)("div", {
                        className: C.spacer
                    }), !h && null != l && (0, n.jsx)(u.Tooltip, {
                        text: x.default.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != R ? R : d.default.getName(l)
                        }),
                        children: e => (0, n.jsx)(u.Avatar, {
                            ...e,
                            src: l.getAvatarURL(a, 20),
                            size: u.AvatarSizes.SIZE_20,
                            "aria-label": null != R ? R : l.username,
                            className: C.creator
                        })
                    }), null != M && (0, n.jsx)(u.Tooltip, {
                        text: x.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: M
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
                                children: M
                            })]
                        })
                    })]
                })
            }

            function g(e) {
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
                        }), null != r && (0, n.jsx)(v.default, {
                            description: r,
                            className: s(l, C.description),
                            truncate: i,
                            guildId: c
                        })]
                    }), null != d && (0, n.jsx)("div", {
                        className: C.thumbnailContainer,
                        children: (0, n.jsx)(h.default, {
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
                    recurrenceId: T
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
                        recurrenceId: T
                    }), (0, n.jsx)(g, {
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
                    return A
                }
            });
            var n, a, s = l("920040"),
                r = l("773670"),
                u = l("575482"),
                i = l.n(u),
                c = l("377849"),
                d = l.n(c),
                o = l("912557"),
                E = l("77078"),
                f = l("449918"),
                T = l("943232"),
                v = l("93393"),
                h = l("956089"),
                N = l("822516"),
                m = l("757767"),
                x = l("745049"),
                C = l("809924"),
                S = l("782340"),
                g = l("644501");
            (n = a || (a = {}))[n.SCHEDULED = 0] = "SCHEDULED", n[n.STARTING_SOON = 1] = "STARTING_SOON", n[n.READY = 2] = "READY", n[n.STARTED = 3] = "STARTED", n[n.ENDED = 4] = "ENDED", n[n.CANCELED = 5] = "CANCELED";

            function D() {
                return (0, s.jsx)(h.TextBadge, {
                    className: g.newBadge,
                    color: o.default.unsafe_rawColors.BRAND_260.css,
                    text: (0, s.jsx)(E.Text, {
                        className: g.newBadgeText,
                        variant: "text-xs/bold",
                        children: S.default.Messages.NEW
                    })
                })
            }

            function _(e) {
                let {
                    children: t,
                    className: l,
                    tooltipText: n
                } = e;
                return (0, s.jsx)("div", {
                    className: i(g.eventStatusContainer, l),
                    children: (0, s.jsx)(E.Tooltip, {
                        position: "right",
                        text: n,
                        shouldShow: null != n,
                        children: e => (0, s.jsx)("div", {
                            ...e,
                            className: i(g.eventStatusContainer, l),
                            children: t
                        })
                    })
                })
            }

            function A(e) {
                let {
                    startTime: t,
                    status: l,
                    eventType: n,
                    className: u,
                    endTime: c,
                    liveText: o,
                    textVariant: h = "text-sm/semibold",
                    isNew: A,
                    recurrenceRule: R
                } = e, p = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_BRAND), I = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_POSITIVE), L = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_DANGER);
                null == o && (o = n === x.GuildScheduledEventEntityTypes.EXTERNAL ? S.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : S.default.Messages.STAGE_CHANNEL_LIVE_NOW);
                let [{
                    startDateTimeString: j,
                    endDateTimeString: w,
                    currentOrPastEvent: O,
                    upcomingEvent: G,
                    diffMinutes: M
                }, V] = r.useState((0, N.getEventTimeData)(t, c));
                r.useEffect(() => {
                    V((0, N.getEventTimeData)(t, c));
                    let e = setInterval(() => V((0, N.getEventTimeData)(t, c)), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [t, c]);
                let b = j;
                null != w && "" !== w && (b = S.default.Messages.START_DATE_TO_END_DATE.format({
                    start: j,
                    end: w
                }));
                let U = r.useMemo(() => l === x.GuildScheduledEventStatus.CANCELED ? a.CANCELED : l === x.GuildScheduledEventStatus.ACTIVE ? a.STARTED : x.GuildScheduledEventStatusDone.has(l) ? a.ENDED : O ? a.READY : G ? a.STARTING_SOON : a.SCHEDULED, [l, O, G]),
                    H = function(e, t, l, n, r) {
                        switch (e) {
                            case a.STARTING_SOON:
                                return r > 0 ? S.default.Messages.STARTING_IN_MINUTES.format({
                                    minutes: r
                                }) : S.default.Messages.STARTING_SOON;
                            case a.READY:
                                return S.default.Messages.STARTING_SOON;
                            case a.STARTED:
                                return null != n && "" !== n ? S.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                                    start: l,
                                    startHook: e => (0, s.jsx)(E.Text, {
                                        color: "text-positive",
                                        variant: "text-sm/semibold",
                                        className: g.liveEventEndTime,
                                        children: e
                                    }),
                                    end: n
                                }) : null != l ? l : "";
                            default:
                                return t
                        }
                    }(U, b, o, w, M),
                    {
                        Icon: B,
                        iconColor: P,
                        textColor: Y,
                        tooltipText: k
                    } = r.useMemo(() => (function(e) {
                        let t, {
                                timeStatus: l,
                                textBrand: n,
                                textPositive: s,
                                textDanger: r,
                                endDateTimeString: u,
                                startDateTimeString: i
                            } = e,
                            c = T.default,
                            d = n,
                            o = "header-secondary";
                        switch (l) {
                            case a.STARTED:
                                d = s, o = null != u ? void 0 : "text-positive";
                                break;
                            case a.ENDED:
                                c = v.default;
                                break;
                            case a.READY:
                            case a.STARTING_SOON:
                                o = "text-brand", t = i;
                                break;
                            case a.CANCELED:
                                d = r
                        }
                        return {
                            Icon: c,
                            iconColor: d.hex,
                            textColor: o,
                            tooltipText: t
                        }
                    })({
                        timeStatus: U,
                        textBrand: p,
                        textPositive: I,
                        textDanger: L,
                        endDateTimeString: w,
                        startDateTimeString: j
                    }), [U, p, I, L, w, j]),
                    y = null;
                if (null != R) {
                    let e = (0, N.getRRule)(R);
                    y = S.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                        recurrenceRule: e.toText()
                    });
                    let l = d(t),
                        n = (0, N.recurrenceRuleToOption)(l, R);
                    y = function(e, t) {
                        let l = t.toDate(),
                            n = l.toLocaleString(S.default.getLocale(), {
                                weekday: "long"
                            });
                        switch (e) {
                            case m.RecurrenceOptions.WEEKLY:
                                return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                                    weekday: n
                                });
                            case m.RecurrenceOptions.YEARLY:
                                return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                                    date: l.toLocaleString(S.default.getLocale(), {
                                        month: "short",
                                        day: "2-digit"
                                    })
                                });
                            case m.RecurrenceOptions.WEEKDAY_ONLY:
                                return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                            default:
                                return null
                        }
                    }(n, l)
                }
                return (0, s.jsxs)(_, {
                    className: i(u, {
                        [g.isRecurring]: null != y
                    }),
                    tooltipText: k,
                    children: [A ? (0, s.jsx)(D, {}) : (0, s.jsx)(B, {
                        color: P,
                        width: 20,
                        height: 20
                    }), (0, s.jsxs)("div", {
                        className: g.eventStatusLabel,
                        children: [(0, s.jsx)(E.Text, {
                            color: Y,
                            variant: h,
                            children: H
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
            var n = l("920040");
            l("773670");
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
                }, s.BellIcon)
        },
        718550: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("920040");
            l("773670");
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
                }, s.LocationIcon)
        }
    }
]);
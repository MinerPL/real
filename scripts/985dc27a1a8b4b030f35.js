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
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(u),
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
                        className: i
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
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(u),
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
                        className: i
                    })
                })
            }
        },
        1339: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                guildEventDetailsParser: function() {
                    return u
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
                i = {
                    ...n.default.guildEventRules.channelMention,
                    react: (0, a.default)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                },
                u = n.default.reactParserFor({
                    ...n.default.guildEventRules,
                    link: r,
                    channelMention: i
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
                i = l("1339"),
                u = l("616348"),
                c = l("422137");

            function d(e) {
                let {
                    description: t,
                    className: l,
                    guildId: s,
                    truncate: d = !0
                } = e, o = a.useMemo(() => (0, i.guildEventDetailsParser)(t, !0, {
                    guildId: s
                }), [t, s]);
                return (0, n.jsx)("div", {
                    className: r(u.descriptionText, l, c.markup, {
                        [u.truncate]: d
                    }),
                    children: o
                })
            }
        },
        255050: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("575482"),
                s = l.n(a),
                r = l("879634");

            function i(e) {
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
                    return N
                },
                GuildEventDetails: function() {
                    return m
                },
                default: function() {
                    return x
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("575482"),
                s = l.n(a),
                r = l("498225"),
                i = l("77078"),
                u = l("26989"),
                c = l("155207"),
                d = l("158998"),
                o = l("398604"),
                E = l("909151"),
                f = l("255050"),
                v = l("393745"),
                T = l("782340"),
                h = l("468217");

            function N(e) {
                let {
                    className: t,
                    creator: l,
                    guildId: a,
                    isNew: E,
                    isHub: f = !1,
                    guildEventId: N,
                    eventPreview: m
                } = e, x = (0, r.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(N)), C = null != x ? x : m, g = (0, r.useStateFromStores)([u.default], () => u.default.getNick(a, null == l ? void 0 : l.id), [a, l]);
                if (null == C) return null;
                let {
                    entity_type: S,
                    status: D,
                    scheduled_start_time: _,
                    user_count: A = 1,
                    recurrence_rule: R
                } = C;
                return (0, n.jsxs)("div", {
                    className: s(h.statusContainer, t),
                    children: [(0, n.jsx)(v.GuildEventTimeStatus, {
                        startTime: _,
                        status: D,
                        eventType: S,
                        isNew: E,
                        recurrenceRule: R
                    }), (0, n.jsx)("div", {
                        className: h.spacer
                    }), !f && null != l && (0, n.jsx)(i.Tooltip, {
                        text: T.default.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != g ? g : d.default.getName(l)
                        }),
                        children: e => (0, n.jsx)(i.Avatar, {
                            ...e,
                            src: l.getAvatarURL(a, 20),
                            size: i.AvatarSizes.SIZE_20,
                            "aria-label": null != g ? g : l.username,
                            className: h.creator
                        })
                    }), null != A && (0, n.jsx)(i.Tooltip, {
                        text: T.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: A
                        }),
                        children: e => (0, n.jsxs)("div", {
                            className: h.rsvpCount,
                            ...e,
                            children: [(0, n.jsx)(c.default, {
                                width: 12,
                                height: 12,
                                className: h.rsvpIcon
                            }), (0, n.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: A
                            })]
                        })
                    })]
                })
            }

            function m(e) {
                let {
                    headerVariant: t = "heading-lg/medium",
                    descriptionClassName: l,
                    name: a,
                    description: r,
                    truncate: u,
                    guildId: c,
                    imageSource: d
                } = e;
                return (0, n.jsxs)("div", {
                    className: s({
                        [h.withThumbnail]: null != d
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: s({
                            [h.descriptionWithThumbnail]: null != d
                        }),
                        children: [(0, n.jsx)(i.Heading, {
                            variant: t,
                            selectable: !0,
                            className: h.eventName,
                            children: a
                        }), null != r && (0, n.jsx)(E.default, {
                            description: r,
                            className: s(l, h.description),
                            truncate: u,
                            guildId: c
                        })]
                    }), null != d && (0, n.jsx)("div", {
                        className: h.thumbnailContainer,
                        children: (0, n.jsx)(f.default, {
                            source: d,
                            className: h.thumbnail
                        })
                    })]
                })
            }

            function x(e) {
                let {
                    headerVariant: t,
                    descriptionClassName: l,
                    creator: a,
                    name: s,
                    description: r,
                    imageSource: i,
                    isHub: u = !1,
                    truncate: c,
                    guildId: d,
                    isNew: o,
                    guildEventId: E,
                    eventPreview: f
                } = e;
                return (0, n.jsxs)("div", {
                    className: h.container,
                    children: [(0, n.jsx)(N, {
                        className: h.eventInfoStatusContainer,
                        creator: a,
                        guildId: d,
                        isHub: u,
                        isNew: o,
                        guildEventId: E,
                        eventPreview: f
                    }), (0, n.jsx)(m, {
                        name: s,
                        description: r,
                        headerVariant: t,
                        descriptionClassName: l,
                        truncate: c,
                        guildId: d,
                        imageSource: i
                    })]
                })
            }
        },
        393745: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildEventTimeStatus: function() {
                    return S
                }
            });
            var n, a, s = l("920040"),
                r = l("773670"),
                i = l("575482"),
                u = l.n(i),
                c = l("912557"),
                d = l("77078"),
                o = l("449918"),
                E = l("943232"),
                f = l("93393"),
                v = l("956089"),
                T = l("822516"),
                h = l("745049"),
                N = l("809924"),
                m = l("782340"),
                x = l("644501");
            (n = a || (a = {}))[n.SCHEDULED = 0] = "SCHEDULED", n[n.STARTING_SOON = 1] = "STARTING_SOON", n[n.READY = 2] = "READY", n[n.STARTED = 3] = "STARTED", n[n.ENDED = 4] = "ENDED", n[n.CANCELED = 5] = "CANCELED";

            function C() {
                return (0, s.jsx)(v.TextBadge, {
                    className: x.newBadge,
                    color: c.default.unsafe_rawColors.BRAND_260.css,
                    text: (0, s.jsx)(d.Text, {
                        className: x.newBadgeText,
                        variant: "text-xs/bold",
                        children: m.default.Messages.NEW
                    })
                })
            }

            function g(e) {
                let {
                    children: t,
                    className: l,
                    tooltipText: n
                } = e;
                return (0, s.jsx)("div", {
                    className: u(x.eventStatusContainer, l),
                    children: (0, s.jsx)(d.Tooltip, {
                        position: "right",
                        text: n,
                        shouldShow: null != n,
                        children: e => (0, s.jsx)("div", {
                            ...e,
                            className: u(x.eventStatusContainer, l),
                            children: t
                        })
                    })
                })
            }

            function S(e) {
                let {
                    startTime: t,
                    status: l,
                    eventType: n,
                    className: i,
                    endTime: c,
                    liveText: v,
                    textVariant: S = "text-sm/semibold",
                    isNew: D,
                    recurrenceRule: _
                } = e, A = (0, o.useThemedColorValue)(N.ThemeColor.TEXT_BRAND), R = (0, o.useThemedColorValue)(N.ThemeColor.TEXT_POSITIVE), p = (0, o.useThemedColorValue)(N.ThemeColor.TEXT_DANGER);
                null == v && (v = n === h.GuildScheduledEventEntityTypes.EXTERNAL ? m.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : m.default.Messages.STAGE_CHANNEL_LIVE_NOW);
                let [{
                    startDateTimeString: I,
                    endDateTimeString: j,
                    currentOrPastEvent: w,
                    upcomingEvent: L,
                    diffMinutes: O
                }, G] = r.useState((0, T.getEventTimeData)(t, c));
                r.useEffect(() => {
                    G((0, T.getEventTimeData)(t, c));
                    let e = setInterval(() => G((0, T.getEventTimeData)(t, c)), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [t, c]);
                let M = I;
                null != j && "" !== j && (M = m.default.Messages.START_DATE_TO_END_DATE.format({
                    start: I,
                    end: j
                }));
                let V = r.useMemo(() => l === h.GuildScheduledEventStatus.CANCELED ? a.CANCELED : l === h.GuildScheduledEventStatus.ACTIVE ? a.STARTED : h.GuildScheduledEventStatusDone.has(l) ? a.ENDED : w ? a.READY : L ? a.STARTING_SOON : a.SCHEDULED, [l, w, L]),
                    b = function(e, t, l, n, r) {
                        switch (e) {
                            case a.STARTING_SOON:
                                return r > 0 ? m.default.Messages.STARTING_IN_MINUTES.format({
                                    minutes: r
                                }) : m.default.Messages.STARTING_SOON;
                            case a.READY:
                                return m.default.Messages.STARTING_SOON;
                            case a.STARTED:
                                return null != n && "" !== n ? m.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                                    start: l,
                                    startHook: e => (0, s.jsx)(d.Text, {
                                        color: "text-positive",
                                        variant: "text-sm/semibold",
                                        className: x.liveEventEndTime,
                                        children: e
                                    }),
                                    end: n
                                }) : null != l ? l : "";
                            default:
                                return t
                        }
                    }(V, M, v, j, O),
                    {
                        Icon: B,
                        iconColor: H,
                        textColor: k,
                        tooltipText: U
                    } = r.useMemo(() => (function(e) {
                        let t, {
                                timeStatus: l,
                                textBrand: n,
                                textPositive: s,
                                textDanger: r,
                                endDateTimeString: i,
                                startDateTimeString: u
                            } = e,
                            c = E.default,
                            d = n,
                            o = "header-secondary";
                        switch (l) {
                            case a.STARTED:
                                d = s, o = null != i ? void 0 : "text-positive";
                                break;
                            case a.ENDED:
                                c = f.default;
                                break;
                            case a.READY:
                            case a.STARTING_SOON:
                                o = "text-brand", t = u;
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
                        timeStatus: V,
                        textBrand: A,
                        textPositive: R,
                        textDanger: p,
                        endDateTimeString: j,
                        startDateTimeString: I
                    }), [V, A, R, p, j, I]),
                    y = null;
                if (null != _) {
                    let e = (0, T.getRRule)(_);
                    y = m.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                        recurrenceRule: e.toText()
                    })
                }
                return (0, s.jsxs)(g, {
                    className: u(i, {
                        [x.isRecurring]: null != y
                    }),
                    tooltipText: U,
                    children: [D ? (0, s.jsx)(C, {}) : (0, s.jsx)(B, {
                        color: H,
                        width: 20,
                        height: 20
                    }), (0, s.jsxs)("div", {
                        className: x.eventStatusLabel,
                        children: [(0, s.jsx)(d.Text, {
                            color: k,
                            variant: S,
                            children: b
                        }), null != y && (0, s.jsx)(d.Text, {
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
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("469563"),
                s = l("524173"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(i),
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
                    return i
                }
            });
            var n = l("920040");
            l("773670");
            var a = l("469563"),
                s = l("576044"),
                r = l("75196"),
                i = (0, a.replaceIcon)(function(e) {
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
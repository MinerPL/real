            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("398351"),
                a = n.n(u),
                d = n("866227"),
                i = n.n(d),
                s = n("730290"),
                r = n("446674"),
                o = n("77078"),
                c = n("49671"),
                E = n("884351"),
                f = n("305961"),
                _ = n("773336"),
                S = n("398604"),
                T = n("466148"),
                v = n("189443"),
                I = n("822516"),
                N = n("745049"),
                g = n("782340");
            let m = "YYYYMMDDTHHmmss",
                h = "YYYY-MM-DDTHH:mm:ss",
                R = /RRULE:.*/;

            function p(e, t, n, u) {
                var d, p, M;
                let C;
                let D = (0, r.useStateFromStores)([S.default], () => S.default.isActive(e)),
                    {
                        startTime: O,
                        endTime: A
                    } = (0, T.default)(null != e ? e : "", u),
                    L = (0, r.useStateFromStores)([S.default], () => S.default.getGuildScheduledEvent(e), [e]),
                    x = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
                if (D || null == L) return null;
                C = L.entity_type === N.GuildScheduledEventEntityTypes.EXTERNAL ? L.entity_metadata.location : null != n && null != x ? g.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
                    channelName: n.name,
                    guildName: x.name
                }) : g.default.Messages.NOTIFICATION_TITLE_DISCORD;
                let y = i(L.scheduled_start_time),
                    G = null != L.scheduled_end_time ? i(L.scheduled_end_time) : y,
                    V = null != L.description && "" !== L.description ? E.default.unparse(L.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : "", !0) : "",
                    U = (0, v.recurrenceRuleFromServer)(L.recurrence_rule),
                    P = null != U ? (0, I.getRRule)(U) : null,
                    b = null !== (p = i(O)) && void 0 !== p ? p : y,
                    w = null !== (M = i(null != A ? A : O)) && void 0 !== M ? M : y,
                    j = () => {
                        let e = a();
                        e.createEvent({
                            start: y,
                            end: G,
                            summary: L.name,
                            description: V,
                            location: C,
                            repeating: P
                        }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
                    };
                return (0, l.jsxs)(o.MenuItem, {
                    id: g.default.Messages.ADD_TO_CALENDAR,
                    label: g.default.Messages.ADD_TO_CALENDAR,
                    action: j,
                    children: [(0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        label: g.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        action: () => {
                            var e;
                            let t = null == P ? void 0 : P.toString(),
                                n = {
                                    text: L.name,
                                    dates: "".concat(y.format(m), "/").concat(G.format(m)),
                                    details: V,
                                    action: "TEMPLATE",
                                    location: C,
                                    recur: null != t ? null === (e = R.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
                                },
                                l = "https://calendar.google.com/calendar/render?".concat((0, s.stringify)(n));
                            window.open(l, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.DOWNLOAD_ICS,
                        label: g.default.Messages.DOWNLOAD_ICS,
                        action: j
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_YAHOO,
                        label: g.default.Messages.ADD_TO_YAHOO,
                        action: () => {
                            let e = {
                                    v: 60,
                                    title: L.name,
                                    st: b.format(m),
                                    et: w.format(m),
                                    desc: V,
                                    in_loc: C
                                },
                                t = "https://calendar.yahoo.com/?".concat((0, s.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_OUTLOOK,
                        label: g.default.Messages.ADD_TO_OUTLOOK,
                        action: () => {
                            let e = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: b.format(h),
                                    enddt: w.format(h),
                                    subject: L.name,
                                    body: V,
                                    location: C,
                                    allday: !1
                                },
                                t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, s.stringify)(e));
                            window.open(t, "_blank")
                        }
                    })]
                })
            }
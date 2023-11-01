(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52330"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        588715: function(e, t, n) {},
        690445: function(e, t, n) {},
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("845579"),
                s = n("662255"),
                d = n("306160");

            function i(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: i,
                    shiftId: r,
                    showIconFirst: o
                } = e, c = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !d.SUPPORTS_COPY) return null;
                let E = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(a.MenuItem, {
                    id: E,
                    label: n,
                    action: function(e) {
                        let n = null != r && e.shiftKey ? r : t;
                        (0, d.copy)(n), null == i || i()
                    },
                    icon: s.default,
                    showIconFirst: o
                }, E)
            }
        },
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("446674"),
                a = n("962199"),
                u = n("305961");

            function s(e, t) {
                return (0, l.useStateFromStoresObject)([u.default, a.default], () => {
                    let n = u.default.getGuild(e),
                        l = null != n;
                    return null == n && null != t && (n = a.default.getCachedGuildByEventId(t)), {
                        isMember: l,
                        guild: n
                    }
                }, [e, t])
            }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return a
                }
            });
            var l = n("308503");
            let a = (0, l.default)(e => ({
                canCloseModal: !0,
                onUpdateCanCloseModal(t) {
                    e({
                        canCloseModal: t
                    })
                }
            }))
        },
        110374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("272030"),
                s = n("901582"),
                d = n("861370"),
                i = n("455933"),
                r = n("248900"),
                o = n("385752"),
                c = n("222971"),
                E = n("601131"),
                f = n("876725"),
                _ = n("367989"),
                T = n("510692"),
                S = n("49111"),
                g = n("782340");

            function M(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    channel: M,
                    guild: I,
                    analyticsContext: v,
                    onSelect: m
                } = e, p = (0, _.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: I,
                    channel: M
                }), N = (0, o.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: I,
                    channel: M
                }), O = (0, c.default)(t, I, M, n), A = (0, E.default)(t, I, M), h = (0, T.default)(t, I, M), D = (0, r.default)(t, I.id, n), R = (0, f.default)(t), L = (0, d.default)({
                    id: null != n ? n : t,
                    label: g.default.Messages.COPY_ID_EVENT
                }), C = (0, i.default)(t, I.id, M);
                return (0, l.jsx)(s.default, {
                    context: v,
                    object: S.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": g.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: m,
                        children: [(0, l.jsxs)(a.MenuGroup, {
                            children: [null == n && C, null == n && h, O, null == n && A, N, p, D]
                        }), null == n && (0, l.jsx)(a.MenuGroup, {
                            children: R
                        }), (0, l.jsx)(a.MenuGroup, {
                            children: L
                        })]
                    })
                })
            }
        },
        455933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("398351"),
                u = n.n(a),
                s = n("866227"),
                d = n.n(s),
                i = n("730290"),
                r = n("446674"),
                o = n("77078"),
                c = n("49671"),
                E = n("884351"),
                f = n("305961"),
                _ = n("773336"),
                T = n("398604"),
                S = n("745049"),
                g = n("782340");
            let M = "YYYYMMDDTHHmmss",
                I = "YYYY-MM-DDTHH:mm:ss";

            function v(e, t, n) {
                var a;
                let s;
                let v = (0, r.useStateFromStores)([T.default], () => T.default.isActive(e)),
                    m = (0, r.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
                    p = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
                if (v || null == m) return null;
                s = m.entity_type === S.GuildScheduledEventEntityTypes.EXTERNAL ? m.entity_metadata.location : null != n && null != p ? g.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
                    channelName: n.name,
                    guildName: p.name
                }) : g.default.Messages.NOTIFICATION_TITLE_DISCORD;
                let N = d(m.scheduled_start_time),
                    O = null != m.scheduled_end_time ? d(m.scheduled_end_time) : N,
                    A = null != m.description && "" !== m.description ? E.default.unparse(m.description, null !== (a = null == n ? void 0 : n.id) && void 0 !== a ? a : "", !0) : "",
                    h = () => {
                        let e = u();
                        e.createEvent({
                            start: N,
                            end: O,
                            summary: m.name,
                            description: A,
                            location: s
                        }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
                    };
                return (0, l.jsxs)(o.MenuItem, {
                    id: g.default.Messages.ADD_TO_CALENDAR,
                    label: g.default.Messages.ADD_TO_CALENDAR,
                    action: h,
                    children: [(0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        label: g.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        action: () => {
                            let e = {
                                    text: m.name,
                                    dates: "".concat(N.format(M), "/").concat(O.format(M)),
                                    details: A,
                                    action: "TEMPLATE",
                                    location: s
                                },
                                t = "https://calendar.google.com/calendar/render?".concat((0, i.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.DOWNLOAD_ICS,
                        label: g.default.Messages.DOWNLOAD_ICS,
                        action: h
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_YAHOO,
                        label: g.default.Messages.ADD_TO_YAHOO,
                        action: () => {
                            let e = {
                                    v: 60,
                                    title: m.name,
                                    st: N.format(M),
                                    et: O.format(M),
                                    desc: A,
                                    in_loc: s
                                },
                                t = "https://calendar.yahoo.com/?".concat((0, i.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: g.default.Messages.ADD_TO_OUTLOOK,
                        label: g.default.Messages.ADD_TO_OUTLOOK,
                        action: () => {
                            let e = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: N.format(I),
                                    enddt: O.format(I),
                                    subject: m.name,
                                    body: A,
                                    location: s,
                                    allday: !1
                                },
                                t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, i.stringify)(e));
                            window.open(t, "_blank")
                        }
                    })]
                })
            }
        },
        248900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("306160"),
                s = n("598639"),
                d = n("49111"),
                i = n("782340");

            function r(e, t, n) {
                let {
                    isMember: r
                } = (0, s.default)(t, e);
                return r ? (0, l.jsx)(a.MenuItem, {
                    id: i.default.Messages.COPY_EVENT_LINK,
                    label: i.default.Messages.COPY_EVENT_LINK,
                    action: function() {
                        (0, u.copy)("".concat(location.protocol, "//").concat(location.host).concat(d.Routes.GUILD_EVENT_DETAILS(t, e, n))), (0, a.showToast)((0, a.createToast)(i.default.Messages.COPIED_LINK, a.ToastType.SUCCESS))
                    }
                }) : null
            }
        },
        385752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                s = n("817963"),
                d = n("299039"),
                i = n("398604"),
                r = n("322224"),
                o = n("397680"),
                c = n("466148"),
                E = n("782340");

            function f(e) {
                var t;
                let {
                    guildEventId: n,
                    recurrenceId: f,
                    guild: _,
                    channel: T
                } = e, S = null != f, {
                    canManageGuildEvent: g
                } = (0, s.useManageResourcePermissions)(null != T ? T : _), [M, I] = (0, a.useStateFromStoresArray)([i.default], () => [i.default.isActive(n), i.default.getGuildScheduledEvent(n)]), v = (0, o.default)(f, null == I ? void 0 : I.id), m = null != I && g(I), p = (null == I ? void 0 : I.recurrence_rule) != null && !S, N = S && (null == v || !v.is_canceled), {
                    startTime: O
                } = (0, c.default)(n, f);
                if (!m || M && !p || S && !N || null == I) return null;
                if (M && S) {
                    if (null == O) return null;
                    let e = new Date(null !== (t = null == v ? void 0 : v.scheduled_start_time) && void 0 !== t ? t : O);
                    if (new Date > e) return null
                }
                let A = () => {
                        if (null != f) {
                            if (null != v) {
                                let {
                                    scheduled_start_time: e,
                                    scheduled_end_time: t
                                } = v;
                                r.default.updateGuildEventException({
                                    scheduled_start_time: e,
                                    scheduled_end_time: t,
                                    is_canceled: !0
                                }, _.id, n, f)
                            } else {
                                let e = d.default.extractTimestamp(f);
                                r.default.createGuildEventException({
                                    original_scheduled_start_time: new Date(e).toISOString(),
                                    is_canceled: !0
                                }, _.id, n)
                            }
                        }
                    },
                    h = e => {
                        (0, u.openModal)(t => (0, l.jsxs)(u.ConfirmModal, {
                            ...t,
                            header: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: p || e ? E.default.Messages.DELETE_ALL_EVENTS : E.default.Messages.DELETE_EVENT,
                            cancelText: E.default.Messages.NEVERMIND,
                            onConfirm: () => S && !e ? A() : r.default.deleteGuildEvent(n, _.id),
                            children: [(0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            }), (0, l.jsx)("br", {}), (p || e) && (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
                            })]
                        }))
                    };
                return (0, l.jsx)(u.MenuItem, {
                    id: E.default.Messages.DELETE_EVENT,
                    label: E.default.Messages.DELETE_EVENT,
                    action: S ? void 0 : () => h(),
                    color: "danger",
                    children: S && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.MenuItem, {
                            id: E.default.Messages.DELETE_THIS_EVENT,
                            label: E.default.Messages.DELETE_THIS_EVENT,
                            action: () => h(),
                            color: "danger"
                        }), (0, l.jsx)(u.MenuItem, {
                            id: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            label: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            action: () => h(!0),
                            color: "danger"
                        })]
                    })
                })
            }
        },
        222971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                s = n("817963"),
                d = n("398604"),
                i = n("397680"),
                r = n("842672"),
                o = n("782340");

            function c(e, t, c, E) {
                let {
                    canManageGuildEvent: f
                } = (0, s.useManageResourcePermissions)(null != c ? c : t), _ = (0, a.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(e)), T = f(_), S = (0, r.default)(), g = (0, i.default)(E, null == _ ? void 0 : _.id);
                if (!T || null == _ || (null == g ? void 0 : g.is_canceled)) return null;
                let M = a => {
                    null == E || a ? (0, u.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await n.el("590942").then(n.bind(n, "590942"));
                        return n => (0, l.jsx)(a, {
                            ...n,
                            guildScheduledEventId: e,
                            guildId: t.id
                        })
                    }, S) : (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("229798").then(n.bind(n, "229798"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            guildEvent: _,
                            recurrenceId: E
                        })
                    }, S)
                };
                return (0, l.jsx)(u.MenuItem, {
                    id: o.default.Messages.EDIT_EVENT,
                    label: o.default.Messages.EDIT_EVENT,
                    action: null == _.recurrence_rule ? () => M(!0) : void 0,
                    children: null != E && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.MenuItem, {
                            id: o.default.Messages.EDIT_THIS_EVENT,
                            label: o.default.Messages.EDIT_THIS_EVENT,
                            action: () => M(!1)
                        }), (0, l.jsx)(u.MenuItem, {
                            id: o.default.Messages.EDIT_ALL_EVENTS,
                            label: o.default.Messages.EDIT_ALL_EVENTS,
                            action: () => M(!0)
                        })]
                    })
                })
            }
        },
        601131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                s = n("817963"),
                d = n("244480"),
                i = n("398604"),
                r = n("322224"),
                o = n("745049"),
                c = n("782340");

            function E(e, t, n) {
                let {
                    canManageGuildEvent: E
                } = (0, s.useManageResourcePermissions)(null != n ? n : t), f = (0, a.useStateFromStores)([i.default], () => i.default.isActive(e)), _ = (0, a.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]), T = E(_);
                if (null == e || !T || !f || (null == _ ? void 0 : _.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
                let S = () => {
                    if (null == n ? void 0 : n.isGuildStageVoice()) {
                        (0, d.endStage)(n);
                        return
                    }
                    null != e && r.default.endEvent(e, t.id), (0, u.closeAllModals)()
                };
                return (0, l.jsx)(u.MenuItem, {
                    id: c.default.Messages.END_EVENT,
                    label: c.default.Messages.END_EVENT,
                    action: function() {
                        (0, u.openModal)(e => (0, l.jsx)(u.ConfirmModal, {
                            ...e,
                            header: c.default.Messages.END_EVENT,
                            confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: S,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    },
                    color: "danger"
                })
            }
        },
        876725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                s = n("377114"),
                d = n("907566"),
                i = n("398604"),
                r = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]);
                return null == e || null == t ? null : (0, l.jsx)(u.MenuItem, {
                    id: "report-event",
                    label: r.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
                    action: () => (0, s.showReportModalForGuildScheduledEvent)(t),
                    icon: d.default,
                    color: "danger"
                })
            }
        },
        367989: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                s = n("817963"),
                d = n("398604"),
                i = n("322224"),
                r = n("397680"),
                o = n("782340");

            function c(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: c,
                    channel: E
                } = e, f = null != n, {
                    canManageGuildEvent: _
                } = (0, s.useManageResourcePermissions)(null != E ? E : c), [T, S] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.isActive(t), d.default.getGuildScheduledEvent(t)]), g = (0, r.default)(n, null == S ? void 0 : S.id), M = null != S && _(S), I = f && (null == g ? void 0 : g.is_canceled) && M;
                return I && (!T || f) ? (0, l.jsx)(u.MenuItem, {
                    id: o.default.Messages.RESTORE_EVENT,
                    label: o.default.Messages.RESTORE_EVENT,
                    action: () => {
                        if (null == n || null == g) return;
                        let {
                            scheduled_start_time: e,
                            scheduled_end_time: l
                        } = g;
                        null == e && null == l ? i.default.deleteGuildEventException(c.id, t, n) : i.default.updateGuildEventException({
                            scheduled_start_time: e,
                            scheduled_end_time: l,
                            is_canceled: !1
                        }, c.id, t, n)
                    }
                }) : null
            }
        },
        510692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                s = n("817963"),
                d = n("398604"),
                i = n("534222"),
                r = n("782340");

            function o(e, t, o) {
                var c;
                let {
                    canManageGuildEvent: E
                } = (0, s.useManageResourcePermissions)(null != o ? o : t), f = (0, a.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(e), [e]), _ = E(f), T = null != (0, i.useActiveEvent)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""), S = null != f && (0, d.isGuildScheduledEventActive)(f);
                return _ && !S && !T ? (0, l.jsx)(u.MenuItem, {
                    id: r.default.Messages.START_EVENT,
                    label: r.default.Messages.START_EVENT,
                    action: function() {
                        null != f && (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                event: f
                            })
                        })
                    }
                }) : null
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("77078"),
                a = n("244201"),
                u = n("558286"),
                s = n("49111");
            let d = "guild-event-modal";
            var i = () => {
                let e = (0, a.useAppContext)(),
                    t = e === s.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: d,
                    contextKey: t,
                    onCloseRequest: () => {
                        u.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(d, t)
                    }
                }
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return M
                },
                inviteUserToStage: function() {
                    return I
                },
                audienceAckRequestToSpeak: function() {
                    return v
                },
                moveSelfToAudience: function() {
                    return m
                },
                setUserSuppress: function() {
                    return p
                },
                moveUserToAudience: function() {
                    return N
                },
                setEveryoneRolePermissionAllowed: function() {
                    return O
                },
                startStage: function() {
                    return A
                },
                editStage: function() {
                    return h
                },
                endStage: function() {
                    return D
                }
            });
            var l = n("627445"),
                a = n.n(l),
                u = n("316693"),
                s = n("872717"),
                d = n("450911");
            n("851387");
            var i = n("798609"),
                r = n("716241"),
                o = n("18494"),
                c = n("800762"),
                E = n("991170"),
                f = n("716214"),
                _ = n("230324"),
                T = n("738983"),
                S = n("808422"),
                g = n("49111");

            function M(e, t) {
                let n = e.getGuildId();
                return a(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function I(e, t) {
                let n = e.getGuildId();
                return a(null != n, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function v(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                a(null != l, "This channel cannot be guildless.");
                let u = c.default.getVoiceStateForChannel(e.id),
                    d = (0, S.getAudienceRequestToSpeakState)(u);
                return d === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(l),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function m(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return a(null != t, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function p(e, t, n) {
                let l = e.getGuildId();
                return a(null != l, "This channel cannot be guildless."), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return a(null != n, "This channel cannot be guildless."), p(t, e.id, !0), s.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function O(e, t, n) {
                let l = e.getGuildId();
                a(null != l, "Channel cannot be guildless");
                let s = e.permissionOverwrites[l],
                    r = {
                        id: l,
                        type: i.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...s
                    };
                n ? (r.allow = u.default.add(r.allow, t), r.deny = u.default.remove(r.deny, t)) : (r.allow = u.default.remove(r.allow, t), r.deny = u.default.add(r.deny, t)), d.default.updatePermissionOverwrite(e.id, r)
            }
            async function A(e, t, n, l) {
                if ("" === t) return;
                let a = o.default.getVoiceChannelId() === e.id;
                !a && (0, f.connectToStage)(e);
                let u = await (0, T.startStageInstance)(e.id, t, n, l);
                return v(e, !1, !0), u
            }
            async function h(e, t, n) {
                if ("" === t) return;
                let l = await (0, T.updateStageInstance)(e.id, t, n);
                return l
            }
            async function D(e) {
                await (0, T.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return E
                },
                getStageChannelMetadata: function() {
                    return f
                }
            }), n("917351");
            var l = n("945956"),
                a = n("387111"),
                u = n("991170"),
                s = n("834052"),
                d = n("837979"),
                i = n("49111"),
                r = n("606762"),
                o = n("782340");

            function c(e, t, n, l) {
                let u = t[0],
                    s = a.default.getName(e, n, u),
                    d = null != l ? l : t.length;
                return 1 === d && null != u ? s : null == u ? o.default.Messages.SPEAKING_COUNT.format({
                    count: d
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: s,
                    count: d - 1
                })
            }

            function E(e, t) {
                switch (e) {
                    case r.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case r.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case r.RowType.MEMBER:
                    case r.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case r.RowType.EMPTY_STATE:
                }
                return null
            }

            function f(e) {
                let t = s.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: u.default.canEveryoneRole(i.Permissions.REQUEST_TO_SPEAK, e) ? d.RequestToSpeakPermissionStates.EVERYONE : d.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return u
                },
                updateStageInstance: function() {
                    return s
                },
                endStageInstance: function() {
                    return d
                }
            });
            var l = n("872717"),
                a = n("49111");
            async function u(e, t, n, u, s) {
                let d = await l.default.post({
                    url: a.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: s,
                        send_start_notification: u
                    }
                });
                return d.body
            }
            async function s(e, t, n) {
                let u = await l.default.patch({
                    url: a.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return u.body
            }

            function d(e) {
                return l.default.delete(a.Endpoints.STAGE_INSTANCE(e))
            }
        }
    }
]);
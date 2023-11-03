(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94106"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        588715: function(e, t, n) {},
        690445: function(e, t, n) {},
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: r
                    })]
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("845579"),
                i = n("662255"),
                r = n("306160");

            function s(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: s,
                    shiftId: d,
                    showIconFirst: o
                } = e, c = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !r.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(a.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != d && e.shiftKey ? d : t;
                        (0, r.copy)(n), null == s || s()
                    },
                    icon: i.default,
                    showIconFirst: o
                }, f)
            }
        },
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("962199"),
                u = n("305961");

            function i(e, t) {
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
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("272030"),
                i = n("901582"),
                r = n("861370"),
                s = n("455933"),
                d = n("248900"),
                o = n("385752"),
                c = n("222971"),
                f = n("601131"),
                E = n("876725"),
                _ = n("367989"),
                T = n("510692"),
                I = n("49111"),
                S = n("782340");

            function g(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    channel: g,
                    guild: M,
                    analyticsContext: v,
                    onSelect: N
                } = e, m = (0, _.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: M,
                    channel: g
                }), A = (0, o.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: M,
                    channel: g
                }), O = (0, c.default)(t, M, g, n), p = (0, f.default)(t, M, g), R = (0, T.default)(t, M, g), h = (0, d.default)(t, M.id, n), C = (0, E.default)(t), D = (0, r.default)({
                    id: null != n ? n : t,
                    label: S.default.Messages.COPY_ID_EVENT
                }), L = (0, s.default)(t, M.id, g);
                return (0, l.jsx)(i.default, {
                    context: v,
                    object: I.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": S.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: N,
                        children: [(0, l.jsxs)(a.MenuGroup, {
                            children: [null == n && L, null == n && R, O, null == n && p, A, m, h]
                        }), null == n && (0, l.jsx)(a.MenuGroup, {
                            children: C
                        }), (0, l.jsx)(a.MenuGroup, {
                            children: D
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
                i = n("866227"),
                r = n.n(i),
                s = n("730290"),
                d = n("446674"),
                o = n("77078"),
                c = n("49671"),
                f = n("884351"),
                E = n("305961"),
                _ = n("773336"),
                T = n("398604"),
                I = n("745049"),
                S = n("782340");
            let g = "YYYYMMDDTHHmmss",
                M = "YYYY-MM-DDTHH:mm:ss";

            function v(e, t, n) {
                var a;
                let i;
                let v = (0, d.useStateFromStores)([T.default], () => T.default.isActive(e)),
                    N = (0, d.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
                    m = (0, d.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]);
                if (v || null == N) return null;
                i = N.entity_type === I.GuildScheduledEventEntityTypes.EXTERNAL ? N.entity_metadata.location : null != n && null != m ? S.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
                    channelName: n.name,
                    guildName: m.name
                }) : S.default.Messages.NOTIFICATION_TITLE_DISCORD;
                let A = r(N.scheduled_start_time),
                    O = null != N.scheduled_end_time ? r(N.scheduled_end_time) : A,
                    p = null != N.description && "" !== N.description ? f.default.unparse(N.description, null !== (a = null == n ? void 0 : n.id) && void 0 !== a ? a : "", !0) : "",
                    R = () => {
                        let e = u();
                        e.createEvent({
                            start: A,
                            end: O,
                            summary: N.name,
                            description: p,
                            location: i
                        }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
                    };
                return (0, l.jsxs)(o.MenuItem, {
                    id: S.default.Messages.ADD_TO_CALENDAR,
                    label: S.default.Messages.ADD_TO_CALENDAR,
                    action: R,
                    children: [(0, l.jsx)(o.MenuItem, {
                        id: S.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        label: S.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        action: () => {
                            let e = {
                                    text: N.name,
                                    dates: "".concat(A.format(g), "/").concat(O.format(g)),
                                    details: p,
                                    action: "TEMPLATE",
                                    location: i
                                },
                                t = "https://calendar.google.com/calendar/render?".concat((0, s.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: S.default.Messages.DOWNLOAD_ICS,
                        label: S.default.Messages.DOWNLOAD_ICS,
                        action: R
                    }), (0, l.jsx)(o.MenuItem, {
                        id: S.default.Messages.ADD_TO_YAHOO,
                        label: S.default.Messages.ADD_TO_YAHOO,
                        action: () => {
                            let e = {
                                    v: 60,
                                    title: N.name,
                                    st: A.format(g),
                                    et: O.format(g),
                                    desc: p,
                                    in_loc: i
                                },
                                t = "https://calendar.yahoo.com/?".concat((0, s.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: S.default.Messages.ADD_TO_OUTLOOK,
                        label: S.default.Messages.ADD_TO_OUTLOOK,
                        action: () => {
                            let e = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: A.format(M),
                                    enddt: O.format(M),
                                    subject: N.name,
                                    body: p,
                                    location: i,
                                    allday: !1
                                },
                                t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, s.stringify)(e));
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
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("306160"),
                i = n("598639"),
                r = n("49111"),
                s = n("782340");

            function d(e, t, n) {
                let {
                    isMember: d
                } = (0, i.default)(t, e);
                return d ? (0, l.jsx)(a.MenuItem, {
                    id: s.default.Messages.COPY_EVENT_LINK,
                    label: s.default.Messages.COPY_EVENT_LINK,
                    action: function() {
                        (0, u.copy)("".concat(location.protocol, "//").concat(location.host).concat(r.Routes.GUILD_EVENT_DETAILS(t, e, n))), (0, a.showToast)((0, a.createToast)(s.default.Messages.COPIED_LINK, a.ToastType.SUCCESS))
                    }
                }) : null
            }
        },
        385752: function(e, t, n) {
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
                i = n("817963"),
                r = n("299039"),
                s = n("398604"),
                d = n("322224"),
                o = n("397680"),
                c = n("466148"),
                f = n("782340");

            function E(e) {
                var t;
                let {
                    guildEventId: n,
                    recurrenceId: E,
                    guild: _,
                    channel: T
                } = e, I = null != E, {
                    canManageGuildEvent: S
                } = (0, i.useManageResourcePermissions)(null != T ? T : _), [g, M] = (0, a.useStateFromStoresArray)([s.default], () => [s.default.isActive(n), s.default.getGuildScheduledEvent(n)]), v = (0, o.default)(E, null == M ? void 0 : M.id), N = null != M && S(M), m = (null == M ? void 0 : M.recurrence_rule) != null && !I, A = I && (null == v || !v.is_canceled), {
                    startTime: O
                } = (0, c.default)(n, E);
                if (!N || g && !m || I && !A || null == M) return null;
                if (g && I) {
                    if (null == O) return null;
                    let e = new Date(null !== (t = null == v ? void 0 : v.scheduled_start_time) && void 0 !== t ? t : O);
                    if (new Date > e) return null
                }
                let p = () => {
                        if (null != E) {
                            if (null != v) {
                                let {
                                    scheduled_start_time: e,
                                    scheduled_end_time: t
                                } = v;
                                d.default.updateGuildEventException({
                                    scheduled_start_time: e,
                                    scheduled_end_time: t,
                                    is_canceled: !0
                                }, _.id, n, E)
                            } else {
                                let e = r.default.extractTimestamp(E);
                                d.default.createGuildEventException({
                                    original_scheduled_start_time: new Date(e).toISOString(),
                                    is_canceled: !0
                                }, _.id, n)
                            }
                        }
                    },
                    R = e => {
                        (0, u.openModal)(t => (0, l.jsxs)(u.ConfirmModal, {
                            ...t,
                            header: f.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: m || e ? f.default.Messages.DELETE_ALL_EVENTS : f.default.Messages.DELETE_EVENT,
                            cancelText: f.default.Messages.NEVERMIND,
                            onConfirm: () => I && !e ? p() : d.default.deleteGuildEvent(n, _.id),
                            children: [(0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            }), (0, l.jsx)("br", {}), (m || e) && (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
                            })]
                        }))
                    };
                return (0, l.jsx)(u.MenuItem, {
                    id: f.default.Messages.DELETE_EVENT,
                    label: f.default.Messages.DELETE_EVENT,
                    action: I ? void 0 : () => R(),
                    color: "danger",
                    children: I && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.MenuItem, {
                            id: f.default.Messages.DELETE_THIS_EVENT,
                            label: f.default.Messages.DELETE_THIS_EVENT,
                            action: () => R(),
                            color: "danger"
                        }), (0, l.jsx)(u.MenuItem, {
                            id: f.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            label: f.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            action: () => R(!0),
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
                i = n("817963"),
                r = n("398604"),
                s = n("397680"),
                d = n("842672"),
                o = n("782340");

            function c(e, t, c, f) {
                let {
                    canManageGuildEvent: E
                } = (0, i.useManageResourcePermissions)(null != c ? c : t), _ = (0, a.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e)), T = E(_), I = (0, d.default)(), S = (0, s.default)(f, null == _ ? void 0 : _.id);
                if (!T || null == _ || (null == S ? void 0 : S.is_canceled)) return null;
                let g = a => {
                    null == f || a ? (0, u.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await n.el("590942").then(n.bind(n, "590942"));
                        return n => (0, l.jsx)(a, {
                            ...n,
                            guildScheduledEventId: e,
                            guildId: t.id
                        })
                    }, I) : (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("229798").then(n.bind(n, "229798"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            guildEvent: _,
                            recurrenceId: f
                        })
                    }, I)
                };
                return (0, l.jsx)(u.MenuItem, {
                    id: o.default.Messages.EDIT_EVENT,
                    label: o.default.Messages.EDIT_EVENT,
                    action: null == _.recurrence_rule ? () => g(!0) : void 0,
                    children: null != f && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.MenuItem, {
                            id: o.default.Messages.EDIT_THIS_EVENT,
                            label: o.default.Messages.EDIT_THIS_EVENT,
                            action: () => g(!1)
                        }), (0, l.jsx)(u.MenuItem, {
                            id: o.default.Messages.EDIT_ALL_EVENTS,
                            label: o.default.Messages.EDIT_ALL_EVENTS,
                            action: () => g(!0)
                        })]
                    })
                })
            }
        },
        601131: function(e, t, n) {
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
                i = n("817963"),
                r = n("244480"),
                s = n("398604"),
                d = n("322224"),
                o = n("745049"),
                c = n("782340");

            function f(e, t, n) {
                let {
                    canManageGuildEvent: f
                } = (0, i.useManageResourcePermissions)(null != n ? n : t), E = (0, a.useStateFromStores)([s.default], () => s.default.isActive(e)), _ = (0, a.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e), [e]), T = f(_);
                if (null == e || !T || !E || (null == _ ? void 0 : _.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
                let I = () => {
                    if (null == n ? void 0 : n.isGuildStageVoice()) {
                        (0, r.endStage)(n);
                        return
                    }
                    null != e && d.default.endEvent(e, t.id), (0, u.closeAllModals)()
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
                            onConfirm: I,
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
                i = n("377114"),
                r = n("907566"),
                s = n("398604"),
                d = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e), [e]);
                return null == e || null == t ? null : (0, l.jsx)(u.MenuItem, {
                    id: "report-event",
                    label: d.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
                    action: () => (0, i.showReportModalForGuildScheduledEvent)(t),
                    icon: r.default,
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
                i = n("817963"),
                r = n("398604"),
                s = n("322224"),
                d = n("397680"),
                o = n("782340");

            function c(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: c,
                    channel: f
                } = e, E = null != n, {
                    canManageGuildEvent: _
                } = (0, i.useManageResourcePermissions)(null != f ? f : c), [T, I] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.isActive(t), r.default.getGuildScheduledEvent(t)]), S = (0, d.default)(n, null == I ? void 0 : I.id), g = null != I && _(I), M = E && (null == S ? void 0 : S.is_canceled) && g;
                return M && (!T || E) ? (0, l.jsx)(u.MenuItem, {
                    id: o.default.Messages.RESTORE_EVENT,
                    label: o.default.Messages.RESTORE_EVENT,
                    action: () => {
                        if (null == n || null == S) return;
                        let {
                            scheduled_start_time: e,
                            scheduled_end_time: l
                        } = S;
                        null == e && null == l ? s.default.deleteGuildEventException(c.id, t, n) : s.default.updateGuildEventException({
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
                i = n("817963"),
                r = n("398604"),
                s = n("534222"),
                d = n("782340");

            function o(e, t, o) {
                var c;
                let {
                    canManageGuildEvent: f
                } = (0, i.useManageResourcePermissions)(null != o ? o : t), E = (0, a.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e), [e]), _ = f(E), T = null != (0, s.useActiveEvent)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""), I = null != E && (0, r.isGuildScheduledEventActive)(E);
                return _ && !I && !T ? (0, l.jsx)(u.MenuItem, {
                    id: d.default.Messages.START_EVENT,
                    label: d.default.Messages.START_EVENT,
                    action: function() {
                        null != E && (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                event: E
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
                    return s
                }
            });
            var l = n("77078"),
                a = n("244201"),
                u = n("558286"),
                i = n("49111");
            let r = "guild-event-modal";
            var s = () => {
                let e = (0, a.useAppContext)(),
                    t = e === i.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: r,
                    contextKey: t,
                    onCloseRequest: () => {
                        u.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(r, t)
                    }
                }
            }
        },
        217145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalUserEnabled: function() {
                    return u
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-07_iframe_modal",
                label: "iFrame Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrameModal",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function u() {
                return a.getCurrentConfig({
                    location: "5c0a70_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        429682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalForGuildEnabled: function() {
                    return u
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-08_iframe_modal_guild",
                label: "iFrame Modal guild experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrame Modal Guild",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function u(e) {
                return a.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        988878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("217145"),
                a = n("429682");

            function u(e) {
                return (0, l.isIFrameModalUserEnabled)() || (0, a.isIFrameModalForGuildEnabled)(e)
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var u = n("446674"),
                i = n("913144"),
                r = n("798609"),
                s = n("42203"),
                d = n("3765");
            let o = {},
                c = {},
                f = {};

            function E(e) {
                delete o[e];
                let t = f[e];
                null != t && delete c[t], delete f[e]
            }
            class _ extends u.default.Store {
                getInteraction(e) {
                    let t = c[e.id];
                    return null != t ? o[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(o)) {
                        let l = f[t];
                        null != l && (e[l] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = c[e];
                    return (null == n || null == o[n] || o[n].state === d.InteractionState.FAILED) && (null == o[t] || o[t].state === d.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return a
                }
                getIFrameModalKey() {
                    return l
                }
            }
            _.displayName = "InteractionStore";
            var T = new _(i.default, {
                LOGOUT: function() {
                    o = {}, c = {}, f = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: l,
                        onCreate: a,
                        onCancel: u,
                        onSuccess: i,
                        onFailure: r
                    } = e;
                    null != n && (c[n] = t, f[t] = n), o[t] = {
                        state: d.InteractionState.QUEUED,
                        data: l,
                        onCreate: a,
                        onCancel: u,
                        onSuccess: i,
                        onFailure: r
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: l
                    } = e;
                    if (null == n) return !1;
                    let a = o[n];
                    if (null == a || a.state !== d.InteractionState.QUEUED) return !1;
                    a.state = d.InteractionState.CREATED, null === (t = a.onCreate) || void 0 === t || t.call(a, l)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let l = o[n];
                    if (null == l) return !1;
                    null === (t = l.onSuccess) || void 0 === t || t.call(l), E(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: l,
                        errorMessage: a
                    } = e;
                    if (null == n) return !1;
                    let u = o[n];
                    if (null == u) return !1;
                    null === (t = u.onFailure) || void 0 === t || t.call(u, l, a), u.data.interactionType === r.InteractionTypes.APPLICATION_COMMAND ? E(n) : o[n] = {
                        ...u,
                        state: d.InteractionState.FAILED,
                        errorCode: l,
                        errorMessage: a
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = o[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), E(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = s.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(o)) t.state === d.InteractionState.FAILED && E(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    a = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    l = void 0, a = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    l = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return l
                }
            }), (a = l || (l = {}))[a.QUEUED = 0] = "QUEUED", a[a.CREATED = 1] = "CREATED", a[a.FAILED = 2] = "FAILED"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return g
                },
                inviteUserToStage: function() {
                    return M
                },
                audienceAckRequestToSpeak: function() {
                    return v
                },
                moveSelfToAudience: function() {
                    return N
                },
                setUserSuppress: function() {
                    return m
                },
                moveUserToAudience: function() {
                    return A
                },
                setEveryoneRolePermissionAllowed: function() {
                    return O
                },
                startStage: function() {
                    return p
                },
                editStage: function() {
                    return R
                },
                endStage: function() {
                    return h
                }
            });
            var l = n("627445"),
                a = n.n(l),
                u = n("316693"),
                i = n("872717"),
                r = n("450911");
            n("851387");
            var s = n("798609"),
                d = n("716241"),
                o = n("18494"),
                c = n("800762"),
                f = n("991170"),
                E = n("716214"),
                _ = n("230324"),
                T = n("738983"),
                I = n("808422"),
                S = n("49111");

            function g(e, t) {
                let n = e.getGuildId();
                return a(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(S.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function M(e, t) {
                let n = e.getGuildId();
                return a(null != n, "This channel cannot be guildless."), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n, t),
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
                    r = (0, I.getAudienceRequestToSpeakState)(u);
                return r === I.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(S.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(l),
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

            function N(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return a(null != t, "This channel cannot be guildless."), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function m(e, t, n) {
                let l = e.getGuildId();
                return a(null != l, "This channel cannot be guildless."), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return a(null != n, "This channel cannot be guildless."), m(t, e.id, !0), i.default.patch({
                    url: S.Endpoints.UPDATE_VOICE_STATE(n, e.id),
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
                let i = e.permissionOverwrites[l],
                    d = {
                        id: l,
                        type: s.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...i
                    };
                n ? (d.allow = u.default.add(d.allow, t), d.deny = u.default.remove(d.deny, t)) : (d.allow = u.default.remove(d.allow, t), d.deny = u.default.add(d.deny, t)), r.default.updatePermissionOverwrite(e.id, d)
            }
            async function p(e, t, n, l) {
                if ("" === t) return;
                let a = o.default.getVoiceChannelId() === e.id;
                !a && (0, E.connectToStage)(e);
                let u = await (0, T.startStageInstance)(e.id, t, n, l);
                return v(e, !1, !0), u
            }
            async function R(e, t, n) {
                if ("" === t) return;
                let l = await (0, T.updateStageInstance)(e.id, t, n);
                return l
            }
            async function h(e) {
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
                    return f
                },
                getStageChannelMetadata: function() {
                    return E
                }
            }), n("917351");
            var l = n("945956"),
                a = n("387111"),
                u = n("991170"),
                i = n("834052"),
                r = n("837979"),
                s = n("49111"),
                d = n("606762"),
                o = n("782340");

            function c(e, t, n, l) {
                let u = t[0],
                    i = a.default.getName(e, n, u),
                    r = null != l ? l : t.length;
                return 1 === r && null != u ? i : null == u ? o.default.Messages.SPEAKING_COUNT.format({
                    count: r
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: i,
                    count: r - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case d.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case d.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case d.RowType.MEMBER:
                    case d.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case d.RowType.EMPTY_STATE:
                }
                return null
            }

            function E(e) {
                let t = i.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: u.default.canEveryoneRole(s.Permissions.REQUEST_TO_SPEAK, e) ? r.RequestToSpeakPermissionStates.EVERYONE : r.RequestToSpeakPermissionStates.NO_ONE,
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
                    return i
                },
                endStageInstance: function() {
                    return r
                }
            });
            var l = n("872717"),
                a = n("49111");
            async function u(e, t, n, u, i) {
                let r = await l.default.post({
                    url: a.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: i,
                        send_start_notification: u
                    }
                });
                return r.body
            }
            async function i(e, t, n) {
                let u = await l.default.patch({
                    url: a.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return u.body
            }

            function r(e) {
                return l.default.delete(a.Endpoints.STAGE_INSTANCE(e))
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return _
                }
            });
            var l, a, u = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                s = n("77078"),
                d = n("36694"),
                o = n("381546"),
                c = n("68238"),
                f = n("423487"),
                E = n("557296");
            (l = a || (a = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: i = "text-normal",
                    textVariant: _ = "text-sm/medium"
                } = e, T = function(e) {
                    switch (e) {
                        case a.WARNING:
                            return f.default;
                        case a.INFO:
                            return c.default;
                        case a.ERROR:
                            return o.default;
                        case a.POSITIVE:
                            return d.default
                    }
                }(n), I = function(e) {
                    switch (e) {
                        case a.WARNING:
                            return E.warning;
                        case a.INFO:
                            return E.info;
                        case a.ERROR:
                            return E.error;
                        case a.POSITIVE:
                            return E.positive
                    }
                }(n);
                return (0, u.jsxs)("div", {
                    className: r(E.container, I, l),
                    children: [(0, u.jsx)("div", {
                        className: E.iconDiv,
                        children: (0, u.jsx)(T, {
                            className: E.icon
                        })
                    }), (0, u.jsx)(s.Text, {
                        className: E.text,
                        color: i,
                        variant: _,
                        children: t
                    })]
                })
            }
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                u = n("35647"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: u,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, u.IdIcon)
        }
    }
]);
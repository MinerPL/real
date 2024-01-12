            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("866227"),
                d = n.n(u),
                c = n("446674"),
                f = n("151426"),
                E = n("77078"),
                h = n("272030"),
                _ = n("819689"),
                S = n("843962"),
                T = n("679653"),
                p = n("931318"),
                N = n("520899"),
                I = n("988864"),
                m = n("960808"),
                A = n("45835"),
                g = n("699473"),
                C = n("393414"),
                R = n("845579"),
                M = n("42203"),
                O = n("305961"),
                L = n("377253"),
                v = n("476263"),
                D = n("93393"),
                y = n("11539"),
                x = n("672571"),
                P = n("805614"),
                U = n("64318"),
                F = n("49111"),
                b = n("782340"),
                j = n("533370"),
                G = n("228146");
            let k = {
                offset: {
                    left: 4,
                    right: -12
                }
            };

            function w(e) {
                let {
                    setTab: t,
                    closePopout: n
                } = e, s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders());
                a.useEffect(() => () => {
                    (0, p.cleanupMessageReminders)()
                }, []);
                let [i, r] = a.useState(!1), o = a.useMemo(() => s.filter(e => null == e.dueAt || e.dueAt < new Date), [s]), u = i ? s : o, d = u.filter(e => !(0, I.savedMessageHasMetadata)(e));
                return (0, m.useMessageRemindersLoader)(d), (0, l.jsxs)("div", {
                    className: j.container,
                    children: [(0, l.jsx)(U.default, {
                        tab: f.InboxTab.TODOS,
                        setTab: t,
                        closePopout: n
                    }), (0, l.jsxs)("div", {
                        className: j.headerText,
                        children: [(0, l.jsx)(E.Heading, {
                            variant: "heading-lg/bold",
                            children: i ? b.default.Messages.MESSAGE_REMINDERS_HEADER_ALL : b.default.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                        }), (0, l.jsx)(E.Anchor, {
                            onClick: () => r(!i),
                            children: (0, l.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: i ? b.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
                                    count: o.length
                                }) : b.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
                                    count: s.length
                                })
                            })
                        })]
                    }), 0 === u.length ? (0, l.jsx)(H, {}) : null, (0, l.jsx)(E.AdvancedScrollerThin, {
                        children: u.map(e => (function(e) {
                            return [(0, l.jsx)(B, {
                                messageId: e.messageId
                            }, e.messageId)]
                        })(e))
                    })]
                })
            }

            function B(e) {
                let t, {
                        messageId: a
                    } = e,
                    s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().find(e => e.messageId === a));
                o(null != s, "should not be rendering a to-do message without a to-do message");
                let r = s.complete,
                    u = (0, c.useStateFromStores)([L.default], () => L.default.getMessage(s.channelId, s.messageId)),
                    {
                        message: f,
                        channel: I
                    } = (0, A.getSavedMessageAndChannel)(s),
                    m = M.default.getChannel(I.id),
                    y = (0, T.default)(m, !0),
                    P = null != y ? y : I.name,
                    U = (0, c.useStateFromStores)([O.default], () => O.default.getGuild(null == I ? void 0 : I.guild_id)),
                    w = null != I ? (0, S.getChannelIconURL)(I) : null,
                    B = null;
                return null != s.dueAt && (s.dueAt > new Date ? (t = "text-muted", B = b.default.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                    duration: d.duration(s.dueAt.getTime() - Date.now(), "millisecond").humanize()
                })) : (t = "text-danger", B = b.default.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                    duration: d.duration(Date.now() - s.dueAt.getTime(), "millisecond").humanize()
                }))), (0, l.jsxs)("div", {
                    className: G.container,
                    children: [(0, l.jsxs)("div", {
                        className: j.messageHeader,
                        children: [(0, l.jsxs)("div", {
                            children: [(0, l.jsxs)("div", {
                                className: j.messageInfo,
                                children: [null != U ? (0, l.jsx)(v.default, {
                                    className: j.guildIcon,
                                    guild: U,
                                    size: v.default.Sizes.SMALL,
                                    active: !0
                                }) : (0, l.jsx)(E.Avatar, {
                                    "aria-hidden": !0,
                                    src: null != w ? w : n("518533"),
                                    size: E.AvatarSizes.SIZE_32
                                }), (0, l.jsx)(E.Text, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    selectable: !0,
                                    children: P
                                })]
                            }), null != s.notes && s.notes.length > 0 ? (0, l.jsxs)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: j.notes,
                                selectable: !0,
                                children: [(0, l.jsx)(x.default, {
                                    width: 12,
                                    height: 12
                                }), s.notes]
                            }) : null, null != B ? (0, l.jsx)(E.Text, {
                                variant: "text-sm/medium",
                                color: t,
                                style: {
                                    marginTop: 4
                                },
                                children: B
                            }) : null]
                        }), (0, l.jsxs)("div", {
                            className: j.reminderActions,
                            children: [(0, l.jsx)(E.TooltipContainer, {
                                text: b.default.Messages.MESSAGE_REMINDERS_SNOOZE,
                                children: (0, l.jsx)(E.Clickable, {
                                    onClick: e => (0, h.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await n.el("763582").then(n.bind(n, "763582"));
                                        return t => (0, l.jsx)(e, {
                                            ...t,
                                            message: f
                                        })
                                    }),
                                    className: j.clock,
                                    children: (0, l.jsx)(D.default, {})
                                })
                            }), (0, l.jsx)(E.Checkbox, {
                                type: E.Checkbox.Types.INVERTED,
                                value: r,
                                onChange: (e, t) => {
                                    (0, p.toggleMessageReminders)(s.messageId, t)
                                }
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: i(G.messageContainer, j.unloadedMessage, {
                            [j.disabledMessage]: r
                        }),
                        children: [(0, l.jsx)(g.default, {
                            message: f,
                            channel: I,
                            className: G.message,
                            compact: R.MessageDisplayCompact.getSetting(),
                            animateAvatar: !1,
                            focusProps: k,
                            trackAnnouncementViews: !0
                        }, f.id), (0, l.jsxs)("div", {
                            className: j.actions,
                            children: [null == u ? (0, l.jsx)(E.Button, {
                                onClick: () => {
                                    _.default.fetchMessages({
                                        channelId: s.channelId,
                                        limit: 1,
                                        jump: {
                                            messageId: s.messageId,
                                            flash: !1,
                                            offset: 1
                                        }
                                    })
                                },
                                size: E.Button.Sizes.MIN,
                                color: E.Button.Colors.TRANSPARENT,
                                className: j.loadButton,
                                children: (0, l.jsx)(E.Text, {
                                    variant: "text-xs/normal",
                                    children: "Load"
                                })
                            }) : null, (0, l.jsx)(E.Button, {
                                onClick: () => {
                                    (0, C.transitionTo)(F.Routes.CHANNEL(null == I ? void 0 : I.getGuildId(), s.channelId, s.messageId))
                                },
                                size: E.Button.Sizes.MIN,
                                color: E.Button.Colors.TRANSPARENT,
                                className: j.loadButton,
                                children: (0, l.jsx)(E.Text, {
                                    variant: "text-xs/normal",
                                    children: b.default.Messages.JUMP
                                })
                            })]
                        })]
                    })]
                })
            }

            function H() {
                let e = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().length > 0);
                return e ? null : (0, l.jsx)(P.default, {
                    Icon: y.default,
                    header: b.default.Messages.MESSAGE_REMINDERS_EMPTY,
                    tip: b.default.Messages.MESSAGE_REMINDERS_EMPTY_TIP
                })
            }
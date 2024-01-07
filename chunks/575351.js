            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var l = n("37983"),
                u = n("884691"),
                r = n("446674"),
                i = n("77078"),
                a = n("679653"),
                d = n("929278"),
                o = n("347895"),
                s = n("848848"),
                c = n("735251"),
                E = n("534222"),
                f = n("592407"),
                _ = n("610730"),
                N = n("271938"),
                h = n("305961"),
                T = n("957255"),
                S = n("49111"),
                m = n("782340"),
                v = n("413075"),
                C = e => {
                    let {
                        channel: t,
                        onClose: n,
                        onConfirm: C,
                        transitionState: g
                    } = e, R = (0, a.default)(t, !0), D = t.id, I = t.isForumPost(), M = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(t.getGuildId())), A = (0, E.useGuildChannelScheduledEvents)(D), {
                        isSubscriptionGated: y
                    } = (0, s.default)(t.id), L = (0, c.default)(M, t), [O, p] = u.useState(null), G = (0, r.useStateFromStores)([N.default], () => t.isOwner(N.default.getId()), [t]), U = (0, r.useStateFromStores)([T.default], () => T.default.can(t.isThread() ? S.Permissions.MANAGE_THREADS : S.Permissions.MANAGE_CHANNELS, t), [t]), w = (0, r.useStateFromStores)([_.default], () => {
                        var e;
                        return null !== (e = _.default.getCount(t.id)) && void 0 !== e ? e : 0
                    }, [t.id]), H = I && (U || G && w < 1), F = A.length > 0 && (t.type === S.ChannelTypes.GUILD_VOICE || t.type === S.ChannelTypes.GUILD_STAGE_VOICE);
                    if (u.useEffect(() => {
                            (async () => {
                                let e = await (0, d.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), D);
                                if (!e) {
                                    p("default");
                                    return
                                }
                                let n = await (0, o.getBlockForChannelDeletion)(t.getGuildId(), D);
                                if (!1 !== n) {
                                    p(n);
                                    return
                                }
                            })()
                        }, [t, D]), null != O) {
                        let e;
                        let t = m.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
                        return e = "todo" === O ? m.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === O ? m.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : m.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": m.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: m.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                className: v.modalContent,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: e.format({
                                        onClick: () => {
                                            null != M && (f.default.open(M.id, S.GuildSettingsSections.ONBOARDING), null == n || n())
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(i.ModalFooter, {
                                children: (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    children: m.default.Messages.OKAY
                                })
                            })]
                        })
                    }
                    if (null == M) return null;
                    if (M.hasFeature(S.GuildFeatures.COMMUNITY) && (M.rulesChannelId === D || M.publicUpdatesChannelId === D)) {
                        let e = M.rulesChannelId === D,
                            t = e ? m.default.Messages.DELETE_RULES_CHANNEL_BODY : m.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
                        return (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": m.default.Messages.CANNOT_DELETE_CHANNEL,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: m.default.Messages.CANNOT_DELETE_CHANNEL
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: v.modalText,
                                    children: t
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    className: v.modalText,
                                    children: m.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                        onClick: () => {
                                            f.default.open(M.id, S.GuildSettingsSections.COMMUNITY), null == n || n()
                                        }
                                    })
                                })]
                            }), (0, l.jsx)(i.ModalFooter, {
                                children: (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    children: m.default.Messages.OKAY
                                })
                            })]
                        })
                    } {
                        let {
                            deleteText: e,
                            deleteBody: u
                        } = (() => {
                            if (t.type === S.ChannelTypes.GUILD_CATEGORY) return {
                                deleteText: m.default.Messages.DELETE_CATEGORY,
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: R
                                })
                            };
                            if (t.isForumPost()) return {
                                deleteText: H ? m.default.Messages.DELETE_FORUM_POST : m.default.Messages.DELETE_MESSAGE,
                                deleteBody: H && G && !U ? m.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
                                    postName: R
                                }) : H ? m.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
                                    postName: R
                                }) : m.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                            };
                            if (t.isThread()) return {
                                deleteText: m.default.Messages.DELETE_THREAD,
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: R
                                })
                            };
                            else if (y && L > 0) return {
                                deleteText: m.default.Messages.DELETE_CHANNEL,
                                deleteBody: m.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                                    channelName: R,
                                    numGuildRoleSubscriptionMembers: L
                                })
                            };
                            return {
                                deleteText: m.default.Messages.DELETE_CHANNEL,
                                deleteBody: m.default.Messages.DELETE_CHANNEL_BODY.format({
                                    channelName: R
                                })
                            }
                        })();
                        return (0, l.jsxs)(i.ModalRoot, {
                            transitionState: g,
                            "aria-label": e,
                            children: [(0, l.jsx)(i.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, l.jsxs)(i.ModalContent, {
                                className: v.modalContent,
                                children: [(0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-primary",
                                    children: u
                                }), F ? (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "header-secondary",
                                    className: v.warningText,
                                    children: m.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
                                        count: A.length
                                    })
                                }) : null]
                            }), (0, l.jsxs)(i.ModalFooter, {
                                children: [(0, l.jsx)(i.Button, {
                                    onClick: C,
                                    color: i.Button.Colors.RED,
                                    children: e
                                }), (0, l.jsx)(i.Button, {
                                    onClick: n,
                                    look: i.Button.Looks.LINK,
                                    color: i.Button.Colors.PRIMARY,
                                    children: m.default.Messages.CANCEL
                                })]
                            })]
                        })
                    }
                }
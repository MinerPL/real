            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("446674"),
                l = n("151426"),
                r = n("95410"),
                o = n("489560"),
                u = n("343885"),
                d = n("570319"),
                c = n("475405"),
                E = n("55058"),
                f = n("384997"),
                _ = n("48821"),
                h = n("388437"),
                C = n("667048"),
                I = n("580362"),
                T = n("153014"),
                S = n("79176"),
                N = n("986321"),
                A = n("519440"),
                m = n("947337"),
                p = n("197881"),
                g = n("401774"),
                R = n("607894"),
                O = n("746504"),
                L = n("107153"),
                v = n("32505"),
                M = n("731681"),
                P = n("427474"),
                D = n("994428");

            function y(e) {
                e.stopPropagation()
            }

            function x(e) {
                var t;
                let {
                    guild: n
                } = e, [o, _] = s.useState(null !== (t = r.default.get(P.LAST_HIDDEN_CHANNEL_NOTICE)) && void 0 !== t ? t : 0), T = e => {
                    r.default.set(P.LAST_HIDDEN_CHANNEL_NOTICE, e), _(e)
                }, N = (0, i.useStateFromStoresArray)(P.CHANNEL_NOTICE_STORES, () => P.CHANNEL_NOTICES.filter(e => {
                    let {
                        store: t
                    } = e;
                    return null == t ? void 0 : t.channelNoticePredicate(n, o)
                }).map(e => e.dismissibleContentType)), A = (0, d.default)(n.id, "channel_notice");
                return u.default.useExperiment({
                    guildId: n.id,
                    location: "channel_notice"
                }), (0, a.jsx)(f.default, {
                    contentTypes: N,
                    groupName: D.DismissibleContentGroupName.CHANNEL_NOTICES,
                    children: e => {
                        let {
                            visibleContent: t,
                            markAsDismissed: s
                        } = e, i = () => {
                            T(Date.now()), s(D.ContentDismissActionType.UNKNOWN)
                        }, r = (() => {
                            switch (t) {
                                case l.DismissibleContent.CHANNEL_NOTICE_HUBLINK:
                                    return (0, a.jsx)(S.default, {
                                        guild: n,
                                        markAsDismissed: i
                                    });
                                case l.DismissibleContent.CHANNEL_NOTICE_INVITE:
                                    return (0, a.jsx)(O.default, {
                                        guild: n,
                                        markAsDismissed: i
                                    });
                                case l.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                                    return (0, a.jsx)(C.default, {
                                        guild: n,
                                        markAsDismissed: i
                                    });
                                case l.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER:
                                    return (0, a.jsx)(v.default, {
                                        guild: n,
                                        markAsDismissed: i
                                    });
                                case l.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER:
                                    return (0, a.jsx)(h.default, {
                                        guild: n,
                                        markAsDismissed: i
                                    });
                                case l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE:
                                    return (0, a.jsx)(R.default, {
                                        guild: n,
                                        markAsDismissed: i
                                    });
                                case l.DismissibleContent.LINKED_ROLE_ADMIN_GUILD:
                                    return (0, a.jsx)(E.default, {
                                        guild: n,
                                        markAsDismissed: () => s(D.ContentDismissActionType.UNKNOWN)
                                    });
                                default:
                                    return null
                            }
                        })();
                        if (null == r) {
                            if (!A || (0, I.isContentDismissed)(l.DismissibleGuildContent.CLYDE_GUILD_NOTICE_NUX, n.id)) return null;
                            r = (0, a.jsx)(c.default, {
                                guild: n,
                                markAsDismissed: () => {
                                    (0, I.markContentAsDismissed)(l.DismissibleGuildContent.CLYDE_GUILD_NOTICE_NUX, n.id, !0)
                                }
                            })
                        }
                        return (0, a.jsx)("div", {
                            onContextMenu: y,
                            children: r
                        })
                    }
                })
            }
            var b = e => {
                let {
                    guild: t
                } = e, n = (0, M.default)(t);
                switch (n) {
                    case M.ConnectedChannelNotices.ENABLE_PUBLIC_GUILD:
                        return (0, a.jsx)(m.default, {
                            guild: t
                        });
                    case M.ConnectedChannelNotices.APPLIED_GUILD_BOOST_GRACE_PERIOD:
                        return (0, a.jsx)(_.default, {
                            guild: t
                        });
                    case M.ConnectedChannelNotices.MAX_MEMBER_COUNT:
                        return (0, a.jsx)(L.default, {
                            guild: t
                        });
                    case M.ConnectedChannelNotices.GUILD_LIVE_CHANNEL:
                        return (0, a.jsx)(T.default, {
                            guild: t
                        });
                    case M.ConnectedChannelNotices.GUILD_MFA_WARNING:
                        return (0, a.jsx)(g.default, {
                            guild: t
                        });
                    case M.ConnectedChannelNotices.COMMANDS_MIGRATION:
                        return (0, a.jsx)(A.default, {
                            guild: t
                        });
                    case M.ConnectedChannelNotices.APPLICATION_SUBSCRIPTION_EXPIRATION:
                        return (0, a.jsx)(o.default, {
                            guild: t
                        });
                    case M.ConnectedChannelNotices.HUB_STUDY_ROOM:
                        return (0, a.jsx)(N.default, {
                            guild: t
                        })
                }
                return p.ProcessArgs.isDisallowPopupsSet() ? null : (0, a.jsx)(x, {
                    guild: e.guild
                })
            }
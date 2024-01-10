            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("446674"),
                i = n("77078"),
                r = n("913144"),
                o = n("679653"),
                u = n("454273"),
                d = n("934288"),
                c = n("262973"),
                f = n("713135"),
                h = n("506885"),
                C = n("233069"),
                p = n("923959"),
                m = n("957255"),
                E = n("697218"),
                g = n("158998"),
                S = n("19846"),
                _ = n("172554"),
                A = n("172643"),
                T = n("710357"),
                M = n("931922"),
                I = n("582724"),
                N = n("834744"),
                L = n("372912"),
                v = n("952999"),
                R = n("49111"),
                x = n("782340"),
                y = n("926622");

            function O(e) {
                let {
                    canManageRoles: t,
                    channel: n
                } = e, a = t && (0, u.isPrivateGuildChannel)(n), i = (0, l.useStateFromStores)([p.default], () => null != n.guild_id && n === p.default.getDefaultChannel(n.guild_id), [n]), r = (0, d.default)(n.id);
                if (r) return null;
                if (n.isForumPost()) return (0, s.jsx)(A.default, {
                    channel: n
                });
                if (C.THREAD_CHANNEL_TYPES.has(n.type)) return (0, s.jsx)(L.default, {
                    channel: n
                });
                else if (i) return (0, s.jsx)(v.default, {
                    channel: n
                });
                else if (a) return (0, s.jsx)(M.default, {
                    channel: n
                });
                return (0, s.jsx)(N.default, {
                    channel: n
                })
            }

            function D(e) {
                var t;
                let {
                    channel: n,
                    showingBanner: u
                } = e, d = (0, o.default)(n), {
                    type: C
                } = n, p = (0, l.useStateFromStores)([E.default], () => n.isPrivate() ? E.default.getUser(n.getRecipientId()) : null), A = g.default.useUserTag(p), {
                    canManageRoles: M,
                    canReadMessageHistory: N
                } = (0, l.useStateFromStoresObject)([m.default], () => ({
                    canManageRoles: m.default.can(R.Permissions.MANAGE_ROLES, n),
                    canReadMessageHistory: m.default.can(R.Permissions.READ_MESSAGE_HISTORY, n)
                })), L = (0, l.useStateFromStores)([f.default], () => C === R.ChannelTypes.DM ? f.default.getMutualGuilds(n.getRecipientId()) : null, [n, C]), {
                    systemDMRedesignEnabled: v
                } = c.default.useExperiment({
                    location: "bf1a4f_1"
                }, {
                    autoTrackExposure: null !== (t = n.isSystemDM()) && void 0 !== t && t
                });
                if (a.useEffect(() => {
                        C === R.ChannelTypes.DM && null == L && null != p && r.default.wait(() => (0, h.default)(n.getRecipientId(), p.getAvatarURL(null, 80), {
                            withMutualGuilds: !0
                        }))
                    }, [L, C, n, p]), n.isSystemDM()) return v ? (0, s.jsx)(I.default, {
                    channel: n
                }) : (0, s.jsx)(T.default, {
                    channel: n,
                    children: x.default.Messages.SYSTEM_DM_EMPTY_MESSAGE
                });
                if (C === R.ChannelTypes.DM) return (0, s.jsxs)(T.default, {
                    channel: n,
                    user: p,
                    children: [null != p && (0, s.jsx)(i.Heading, {
                        variant: "heading-xl/medium",
                        className: y.marginBottom20,
                        children: A
                    }), x.default.Messages.BEGINNING_DM.format({
                        username: d
                    }), (0, s.jsx)(S.default, {
                        userId: n.getRecipientId(),
                        channel: n,
                        showingBanner: u
                    })]
                });
                if (n.isMultiUserDM()) return n.isManaged() ? (0, s.jsxs)(_.default, {
                    channelId: n.id,
                    children: [(0, s.jsx)(_.EmptyMessageHeader, {
                        children: x.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                            channelName: d
                        })
                    }), (0, s.jsx)(_.EmptyMessageBody, {
                        children: x.default.Messages.BEGINNING_GROUP_DM_MANAGED
                    })]
                }) : (0, s.jsx)(T.default, {
                    channel: n,
                    children: x.default.Messages.BEGINNING_GROUP_DM.format({
                        name: d
                    })
                });
                return N ? (0, s.jsx)(O, {
                    channel: n,
                    canManageRoles: M
                }) : (0, s.jsx)(_.default, {
                    channelId: n.id,
                    children: (0, s.jsx)(_.EmptyMessageBody, {
                        children: x.default.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({
                            channelName: d
                        })
                    })
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("37983"),
                s = n("884691"),
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
                A = n("172554"),
                _ = n("172643"),
                T = n("710357"),
                M = n("931922"),
                I = n("582724"),
                N = n("834744"),
                v = n("372912"),
                L = n("952999"),
                x = n("49111"),
                R = n("782340"),
                y = n("926622");

            function D(e) {
                let {
                    canManageRoles: t,
                    channel: n
                } = e, s = t && (0, u.isPrivateGuildChannel)(n), i = (0, l.useStateFromStores)([p.default], () => null != n.guild_id && n === p.default.getDefaultChannel(n.guild_id), [n]), r = (0, d.default)(n.id);
                if (r) return null;
                if (n.isForumPost()) return (0, a.jsx)(_.default, {
                    channel: n
                });
                if (C.THREAD_CHANNEL_TYPES.has(n.type)) return (0, a.jsx)(v.default, {
                    channel: n
                });
                else if (i) return (0, a.jsx)(L.default, {
                    channel: n
                });
                else if (s) return (0, a.jsx)(M.default, {
                    channel: n
                });
                return (0, a.jsx)(N.default, {
                    channel: n
                })
            }

            function O(e) {
                var t;
                let {
                    channel: n,
                    showingBanner: u
                } = e, d = (0, o.default)(n), {
                    type: C
                } = n, p = (0, l.useStateFromStores)([E.default], () => n.isPrivate() ? E.default.getUser(n.getRecipientId()) : null), _ = g.default.useUserTag(p), {
                    canManageRoles: M,
                    canReadMessageHistory: N
                } = (0, l.useStateFromStoresObject)([m.default], () => ({
                    canManageRoles: m.default.can(x.Permissions.MANAGE_ROLES, n),
                    canReadMessageHistory: m.default.can(x.Permissions.READ_MESSAGE_HISTORY, n)
                })), v = (0, l.useStateFromStores)([f.default], () => C === x.ChannelTypes.DM ? f.default.getMutualGuilds(n.getRecipientId()) : null, [n, C]), {
                    systemDMRedesignEnabled: L
                } = c.default.useExperiment({
                    location: "bf1a4f_1"
                }, {
                    autoTrackExposure: null !== (t = n.isSystemDM()) && void 0 !== t && t
                });
                if (s.useEffect(() => {
                        C === x.ChannelTypes.DM && null == v && null != p && r.default.wait(() => (0, h.default)(n.getRecipientId(), p.getAvatarURL(null, 80), {
                            withMutualGuilds: !0
                        }))
                    }, [v, C, n, p]), n.isSystemDM()) return L ? (0, a.jsx)(I.default, {
                    channel: n
                }) : (0, a.jsx)(T.default, {
                    channel: n,
                    children: R.default.Messages.SYSTEM_DM_EMPTY_MESSAGE
                });
                if (C === x.ChannelTypes.DM) return (0, a.jsxs)(T.default, {
                    channel: n,
                    user: p,
                    children: [null != p && (0, a.jsx)(i.Heading, {
                        variant: "heading-xl/medium",
                        className: y.marginBottom20,
                        children: _
                    }), R.default.Messages.BEGINNING_DM.format({
                        username: d
                    }), (0, a.jsx)(S.default, {
                        userId: n.getRecipientId(),
                        channel: n,
                        showingBanner: u
                    })]
                });
                if (n.isMultiUserDM()) return n.isManaged() ? (0, a.jsxs)(A.default, {
                    channelId: n.id,
                    children: [(0, a.jsx)(A.EmptyMessageHeader, {
                        children: R.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
                            channelName: d
                        })
                    }), (0, a.jsx)(A.EmptyMessageBody, {
                        children: R.default.Messages.BEGINNING_GROUP_DM_MANAGED
                    })]
                }) : (0, a.jsx)(T.default, {
                    channel: n,
                    children: R.default.Messages.BEGINNING_GROUP_DM.format({
                        name: d
                    })
                });
                return N ? (0, a.jsx)(D, {
                    channel: n,
                    canManageRoles: M
                }) : (0, a.jsx)(A.default, {
                    channelId: n.id,
                    children: (0, a.jsx)(A.EmptyMessageBody, {
                        children: R.default.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({
                            channelName: d
                        })
                    })
                })
            }
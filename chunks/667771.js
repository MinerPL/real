            "use strict";
            n.r(t), n.d(t, {
                makeChannelSortable: function() {
                    return A
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("476042"),
                s = n("95410"),
                i = n("77078"),
                r = n("851387"),
                o = n("57005"),
                u = n("320954"),
                d = n("200008"),
                c = n("512395"),
                f = n("870691"),
                h = n("42203"),
                C = n("245997"),
                p = n("923959"),
                m = n("305961"),
                E = n("957255"),
                g = n("162771"),
                I = n("230674"),
                S = n("991170"),
                _ = n("49111");
            let N = "DRAGGABLE_GUILD_CHANNEL";

            function T(e, t) {
                var n, l;
                if (null == e || null == t) return null;
                if (e !== _.FAVORITES) return h.default.getChannel(t);
                let a = p.default.getChannels(e),
                    s = null !== (l = null !== (n = a[0, p.GUILD_SELECTABLE_CHANNELS_KEY].find(e => e.channel.id === t)) && void 0 !== n ? n : a[0, p.GUILD_VOCAL_CHANNELS_KEY].find(e => e.channel.id === t)) && void 0 !== l ? l : a[_.ChannelTypes.GUILD_CATEGORY].find(e => e.channel.id === t);
                return null == s ? void 0 : s.channel
            }

            function A(e) {
                return (0, a.DropTarget)(N, {
                    drop(e, t) {
                        let n;
                        let a = g.default.getGuildId(),
                            s = t.getItem(),
                            u = (0, I.getDropData)(T(a, s.id), s.position, e.channel, e.position, s.channelList);
                        if (null == u) return;
                        let c = T(a, s.id);
                        if (null == c) return;
                        let f = C.default.getCategories(a),
                            p = m.default.getGuild(a);
                        if (null == p) return;
                        let N = (0, I.getDnDUpdates)(c, T(a, u.referenceId), u.parentId, f);
                        if (0 !== N.length) {
                            if (a === _.FAVORITES) {
                                (0, d.updateFavoriteChannels)(N);
                                return
                            }
                            if (N = N.filter(e => {
                                    let {
                                        id: t
                                    } = e, n = h.default.getChannel(t);
                                    if (null == n) return !1;
                                    let l = h.default.getChannel(n.parent_id);
                                    return n.type === _.ChannelTypes.GUILD_CATEGORY || null == l ? E.default.can(_.Permissions.MANAGE_CHANNELS, p) : E.default.can(_.Permissions.MANAGE_CHANNELS, l)
                                }), c.parent_id !== u.parentId && N.find(e => {
                                    if (e.id !== c.id) return !1;
                                    let t = h.default.getChannel(e.parent_id),
                                        l = null != t && E.default.can(_.Permissions.MANAGE_ROLES, c) && E.default.can(_.Permissions.MANAGE_ROLES, t);
                                    if (!l) return !0;
                                    let a = S.default.areChannelsLocked(c, t),
                                        s = S.default.areChannelsLocked(c, h.default.getChannel(c.parent_id));
                                    return (null == c.parent_id && !a || s && !a) && (n = e), !0
                                }), null != n) {
                                let e = h.default.getChannel(n.parent_id);
                                null != e && (0, i.openModal)(t => (0, l.jsx)(o.default, {
                                    ...t,
                                    channel: c,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && (n.lock_permissions = !0, r.default.batchChannelUpdate(a, N))
                                    },
                                    onCancel: () => {
                                        null != n && r.default.batchChannelUpdate(a, N)
                                    }
                                }))
                            } else r.default.batchChannelUpdate(a, N)
                        }
                    },
                    canDrop(e, t) {
                        let n = t.getItem(),
                            l = h.default.getChannel(n.id);
                        if (null == l) return !1;
                        let a = (0, I.getDropData)(h.default.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                        if (null == a) return !1;
                        if (g.default.getGuildId() === _.FAVORITES) return !0;
                        let s = m.default.getGuild(n.guildId);
                        if (null == s) return !1;
                        let i = h.default.getChannel(a.parentId),
                            r = h.default.getChannel(l.parent_id),
                            o = E.default.can(_.Permissions.MANAGE_CHANNELS, s),
                            u = null != r ? E.default.can(_.Permissions.MANAGE_CHANNELS, r) : o,
                            d = null != i ? E.default.can(_.Permissions.MANAGE_CHANNELS, i) : o;
                        return u && d
                    }
                }, (e, t) => {
                    let n = t.getItem();
                    return null == n || null == n.isChannelDrag ? {
                        connectChannelDropTarget: e.dropTarget(),
                        sorting: !1,
                        sortingType: null,
                        sortingPosition: null,
                        sortingParent: null
                    } : {
                        connectChannelDropTarget: e.dropTarget(),
                        sorting: !0,
                        sortingType: n.type,
                        sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                        sortingParent: t.isOver() && t.canDrop() ? n.parentId : null
                    }
                })((0, a.DragSource)(N, {
                    canDrag(e) {
                        let {
                            channel: t
                        } = e;
                        if (g.default.getGuildId() === _.FAVORITES) return !0;
                        let a = m.default.getGuild(t.getGuildId());
                        if (null == a) return !1;
                        if ((0, c.isOptInEnabledForGuild)(a.id) && E.default.can(_.Permissions.MANAGE_CHANNELS, a)) {
                            let e = "true" === s.default.get("doNotShowReorderModal");
                            return !e && (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("468749").then(n.bind(n, "468749"));
                                return t => (0, l.jsx)(e, {
                                    ...t
                                })
                            }), !1
                        }
                        if (t.type === _.ChannelTypes.GUILD_CATEGORY) return E.default.can(_.Permissions.MANAGE_CHANNELS, a) && !(0, c.isOptInEnabledForGuild)(a.id);
                        let r = h.default.getChannel(t.parent_id);
                        return null != r && E.default.can(_.Permissions.MANAGE_CHANNELS, r) || null == r && E.default.can(_.Permissions.MANAGE_CHANNELS, a)
                    },
                    beginDrag(e) {
                        let {
                            channel: {
                                id: t,
                                parent_id: n,
                                guild_id: l,
                                type: a
                            },
                            position: s
                        } = e, i = g.default.getGuildId(), r = C.default.getCategories(i), o = (0, u.default)(r._categories, r, e => {
                            let {
                                channel: t
                            } = e;
                            if (t.type === _.ChannelTypes.GUILD_CATEGORY && null != r[t.id] && 0 === r[t.id].length) return i === _.FAVORITES || E.default.can(_.Permissions.MANAGE_CHANNELS, t) && E.default.can(_.Permissions.VIEW_CHANNEL, t);
                            return !f.default.isCollapsed(t.parent_id)
                        });
                        return {
                            isChannelDrag: !0,
                            id: t,
                            position: s,
                            parentId: n,
                            type: a,
                            channelList: o,
                            guildId: l
                        }
                    }
                }, e => ({
                    connectChannelDragSource: e.dragSource(),
                    connectDragPreview: e.dragPreview()
                }))(e))
            }
            "use strict";
            n.r(t), n.d(t, {
                makeVoiceUserDroppable: function() {
                    return c
                },
                makeVoiceUserDraggable: function() {
                    return f
                }
            });
            var a = n("476042"),
                l = n("851387"),
                s = n("305961"),
                i = n("957255"),
                r = n("800762"),
                o = n("316133"),
                u = n("49111");
            let d = "DRAGGABLE_USER";

            function c(e) {
                return (0, a.DropTarget)(d, {
                    canDrop(e) {
                        var t, n;
                        let {
                            channel: a
                        } = e, l = a.getGuildId(), d = null !== (n = null === (t = s.default.getGuild(l)) || void 0 === t ? void 0 : t.maxVideoChannelUsers) && void 0 !== n ? n : -1, c = o.default.countVoiceStatesForChannel(a.id), f = null != l && r.default.hasVideo(a.id) && d > 0 && c >= d + 1;
                        return i.default.can(u.Permissions.MOVE_MEMBERS, a) && i.default.can(u.Permissions.CONNECT, a) && !f
                    },
                    drop(e, t) {
                        let {
                            channel: n
                        } = e, a = r.default.getVoiceStateForUser(t.getItem().user.id);
                        (null == a ? void 0 : a.channelId) !== n.id && l.default.setChannel(n.getGuildId(), t.getItem().user.id, n.id)
                    }
                }, (e, t) => ({
                    connectUserDropTarget: e.dropTarget(),
                    isUserOver: t.isOver() && t.canDrop()
                }))(e)
            }

            function f(e) {
                return (0, a.DragSource)(d, {
                    canDrag(e) {
                        let {
                            user: t,
                            canDrag: n
                        } = e;
                        return null != n && n
                    },
                    beginDrag(e) {
                        let {
                            user: t
                        } = e;
                        return {
                            user: t
                        }
                    }
                }, e => ({
                    connectUserDragSource: e.dragSource()
                }))(e)
            }
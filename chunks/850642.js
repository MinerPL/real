            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("702976");
            var a = n("446674"),
                s = n("95410"),
                l = n("913144"),
                i = n("271938"),
                r = n("42203"),
                o = n("957255"),
                u = n("697218"),
                d = n("568734"),
                c = n("49111");
            let f = "ChannelFollowingBumpChannels",
                m = new Set,
                E = new Set;
            class _ extends a.default.Store {
                initialize() {
                    this.waitFor(i.default), m = new Set(s.default.get(f))
                }
                shouldShowBump(e) {
                    return E.has(e)
                }
            }
            _.displayName = "ChannelFollowingPublishBumpStore";
            var h = new _(l.default, {
                MESSAGE_CREATE: function(e) {
                    var t;
                    let {
                        channelId: n,
                        message: a,
                        optimistic: s
                    } = e;
                    if (s || m.has(n)) return !1;
                    let l = r.default.getChannel(n),
                        i = u.default.getCurrentUser(),
                        f = null != l && l.type === c.ChannelTypes.GUILD_ANNOUNCEMENT && a.type === c.MessageTypes.DEFAULT && (null != i && (null === (t = a.author) || void 0 === t ? void 0 : t.id) === i.id ? o.default.can(c.Permissions.SEND_MESSAGES, l) : o.default.can(c.Permissions.MANAGE_MESSAGES, l)) && !d.hasFlag(Number(a.flags), c.MessageFlags.CROSSPOSTED);
                    if (!f) return !1;
                    E.add(a.id)
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e, n = E.has(t.id);
                    n && d.hasFlag(Number(t.flags), c.MessageFlags.CROSSPOSTED) && E.delete(t.id)
                },
                CHANNEL_SELECT: function(e) {
                    E.clear()
                },
                CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    E.delete(t)
                },
                CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
                    let {
                        channelId: t
                    } = e;
                    m.add(t), s.default.set(f, m), E.clear()
                }
            })
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("35092"),
                s = n("913144"),
                l = n("203288"),
                i = n("271938"),
                r = n("42203"),
                o = n("911162");
            let u = new Set;
            class d extends a.default.Store {
                shouldDisplayPrompt(e) {
                    return u.has(e)
                }
            }
            d.displayName = "MediaPostSharePromptStore";
            var c = new d(s.default, {
                CONNECTION_OPEN: function() {
                    u = new Set
                },
                MESSAGE_CREATE: function(e) {
                    var t;
                    if (e.isPushNotification) return;
                    let n = e.message;
                    if (i.default.getId() !== (null === (t = n.author) || void 0 === t ? void 0 : t.id) || !(0, o.isFirstMessageIdInMediaPost)(n.id, n.channel_id)) return;
                    let a = r.default.getChannel(n.channel_id);
                    if (null == a || null == a.parent_id) return;
                    let s = l.default.isChannelGated(a.guild_id, a.parent_id);
                    s && u.add(e.message.id)
                },
                DISMISS_MEDIA_POST_SHARE_PROMPT: function(e) {
                    let {
                        threadId: t
                    } = e;
                    u.delete(t)
                },
                LOGOUT: function(e) {
                    u.clear()
                }
            })
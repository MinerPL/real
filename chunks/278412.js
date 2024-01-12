            "use strict";
            n.r(t), n.d(t, {
                MARK_SERVER_READ: function() {
                    return r
                }
            });
            var i = n("819689"),
                o = n("542827"),
                l = n("952451"),
                a = n("377253"),
                d = n("18494"),
                u = n("162771"),
                s = n("659500"),
                E = n("49111");
            let r = {
                binds: ["shift+esc"],
                comboKeysBindGlobal: !0,
                action() {
                    let e = u.default.getGuildId();
                    if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
                    (0, o.default)([e]);
                    let t = d.default.getChannelId(e);
                    if (null == t) return;
                    let n = a.default.getMessages(t);
                    n.hasMoreAfter ? i.default.jumpToPresent(t, E.MAX_MESSAGES_PER_CHANNEL) : s.ComponentDispatch.dispatch(E.ComponentActions.SCROLLTO_PRESENT)
                }
            }
            "use strict";
            n.r(t), n.d(t, {
                MARK_SERVER_READ: function() {
                    return E
                }
            });
            var i = n("819689"),
                o = n("542827"),
                l = n("952451"),
                a = n("377253"),
                u = n("18494"),
                d = n("162771"),
                s = n("659500"),
                r = n("49111");
            let E = {
                binds: ["shift+esc"],
                comboKeysBindGlobal: !0,
                action() {
                    let e = d.default.getGuildId();
                    if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
                    (0, o.default)([e]);
                    let t = u.default.getChannelId(e);
                    if (null == t) return;
                    let n = a.default.getMessages(t);
                    n.hasMoreAfter ? i.default.jumpToPresent(t, r.MAX_MESSAGES_PER_CHANNEL) : s.ComponentDispatch.dispatch(r.ComponentActions.SCROLLTO_PRESENT)
                }
            }
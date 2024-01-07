            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("551042"),
                l = n("565298"),
                s = n("393414"),
                r = n("239380"),
                u = n("42203"),
                o = n("361572"),
                d = n("232054"),
                c = n("49111");
            async function _(e, t, _) {
                let E = (0, o.tryParseChannelPath)(e);
                if (null != E && !await (0, d.default)(E)) {
                    (0, a.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("657233").then(n.bind(n, "657233"));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    });
                    return
                }
                if (null == E) {
                    (0, s.transitionTo)(e);
                    return
                }
                let f = function(e) {
                    if (null == e.channelId) return e;
                    let t = u.default.getChannel(e.channelId);
                    if (null == t) return e;
                    let n = (0, l.getGuildIdForGenericRedirect)(t);
                    return {
                        ...e,
                        guildId: null != n ? n : c.ME
                    }
                }(E);
                if (null == f.channelId) {
                    (0, r.transitionToGuild)(f.guildId);
                    return
                }
                null != f.threadId ? (0, s.transitionTo)(c.Routes.CHANNEL_THREAD_VIEW(f.guildId, f.channelId, f.threadId, f.messageId), t, _) : (0, s.transitionTo)(c.Routes.CHANNEL(f.guildId, f.channelId, f.messageId), t, _)
            }
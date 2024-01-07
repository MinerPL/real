            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("574073"),
                i = n("42203"),
                r = n("959097"),
                o = n("304198"),
                u = n("782340"),
                d = n("829583");

            function c(e) {
                var t;
                let {
                    message: n,
                    compact: c,
                    usernameHook: f,
                    onClickThread: m,
                    onClickViewThreads: E,
                    onContextMenuThread: _
                } = e, h = (0, l.default)(n), p = f(h), I = (0, s.useStateFromStores)([i.default], () => {
                    var e;
                    return i.default.getChannel(null === (e = n.messageReference) || void 0 === e ? void 0 : e.channel_id)
                }), T = u.default.Messages.SYSTEM_MESSAGE_THREAD_CREATED.format({
                    actorName: h.nick,
                    actorHook: p,
                    threadName: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : n.content,
                    threadOnClick: {
                        onClick: m,
                        onContextMenu: _
                    },
                    viewThreadsOnClick: E
                });
                return (0, a.jsx)(o.default, {
                    iconNode: (0, a.jsx)(r.default, {
                        className: d.icon
                    }),
                    timestamp: n.timestamp,
                    compact: c,
                    children: T
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                transitionToChannel: function() {
                    return l
                },
                transitionToThread: function() {
                    return f
                },
                transitionToThreadMessage: function() {
                    return _
                },
                transitionToMessage: function() {
                    return c
                }
            });
            var s = n("627445"),
                i = n.n(s),
                r = n("450911"),
                a = n("565298"),
                o = n("42203"),
                d = n("393414"),
                u = n("49111");

            function l(e, t, n) {
                let s = o.default.getChannel(e);
                if (null == s) return;
                let i = (0, a.getGuildIdForGenericRedirect)(s);
                r.default.preload(s.guild_id, s.id), (0, d.transitionTo)(u.Routes.CHANNEL(i, s.id), t, n)
            }

            function f(e, t, n) {
                i(null != e.parent_id, "Thread must have a parent ID.");
                let s = (0, a.getGuildIdForGenericRedirect)(e);
                (0, d.transitionTo)(u.Routes.CHANNEL(s, e.id), n, t)
            }

            function _(e, t, n, s) {
                i(null != e.parent_id, "Thread must have a parent ID.");
                let r = (0, a.getGuildIdForGenericRedirect)(e);
                (0, d.transitionTo)(u.Routes.CHANNEL(r, e.id, t), s, n)
            }

            function c(e, t, n, s) {
                let i = o.default.getChannel(e);
                if (null == i) return;
                let r = (0, a.getGuildIdForGenericRedirect)(i);
                (0, d.transitionTo)(u.Routes.CHANNEL(r, i.id, t), n, s)
            }
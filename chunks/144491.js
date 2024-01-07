            "use strict";
            n.r(t), n.d(t, {
                transitionToChannel: function() {
                    return d
                },
                transitionToThread: function() {
                    return c
                },
                transitionToThreadMessage: function() {
                    return _
                },
                transitionToMessage: function() {
                    return E
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("450911"),
                s = n("565298"),
                r = n("42203"),
                u = n("393414"),
                o = n("49111");

            function d(e, t, n) {
                let i = r.default.getChannel(e);
                if (null == i) return;
                let a = (0, s.getGuildIdForGenericRedirect)(i);
                l.default.preload(i.guild_id, i.id), (0, u.transitionTo)(o.Routes.CHANNEL(a, i.id), t, n)
            }

            function c(e, t, n) {
                a(null != e.parent_id, "Thread must have a parent ID.");
                let i = (0, s.getGuildIdForGenericRedirect)(e);
                (0, u.transitionTo)(o.Routes.CHANNEL(i, e.id), n, t)
            }

            function _(e, t, n, i) {
                a(null != e.parent_id, "Thread must have a parent ID.");
                let l = (0, s.getGuildIdForGenericRedirect)(e);
                (0, u.transitionTo)(o.Routes.CHANNEL(l, e.id, t), i, n)
            }

            function E(e, t, n, i) {
                let a = r.default.getChannel(e);
                if (null == a) return;
                let l = (0, s.getGuildIdForGenericRedirect)(a);
                (0, u.transitionTo)(o.Routes.CHANNEL(l, a.id, t), n, i)
            }
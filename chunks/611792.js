            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("27618"),
                i = n("341716");

            function r(e) {
                let {
                    message: t,
                    channel: n,
                    compact: r
                } = e, o = (0, s.useStateFromStores)([l.default], () => null != t.interaction && l.default.isBlocked(t.interaction.user.id), [t.interaction]);
                return (0, a.jsx)(i.default, {
                    message: t,
                    channel: n,
                    compact: r,
                    isInteractionUserBlocked: o
                })
            }

            function o(e, t, n) {
                return null != e.interaction && "" !== e.interaction.displayName ? (0, a.jsx)(r, {
                    message: e,
                    channel: t,
                    compact: n
                }) : null
            }
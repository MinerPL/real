            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("627445"),
                i = n.n(r),
                l = n("446674"),
                a = n("385976"),
                o = n("867805");

            function u(e) {
                let {
                    emojiId: t,
                    emojiName: n
                } = e, r = (0, l.useStateFromStores)([a.default], () => null != t ? a.default.getCustomEmojiById(t) : null);
                if (null != r || null != n) {
                    if (null == t) return i(null != n, "emojiName must be defined if emojiId is not defined"), o.default.convertSurrogateToName(n, !1);
                    else return null == r ? void 0 : r.name
                }
            }
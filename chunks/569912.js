            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("65597"),
                i = n("385976"),
                s = n("867805");

            function l(e, t) {
                let n = (0, r.default)([i.default], () => null != e ? i.default.getCustomEmojiById(e) : null, [e]),
                    l = null != t ? s.default.getByName(s.default.convertSurrogateToName(t, !1)) : null;
                return {
                    customEmoji: n,
                    unicodeEmoji: l
                }
            }
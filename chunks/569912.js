            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("65597"),
                a = n("385976"),
                l = n("867805");

            function s(e, t) {
                let n = (0, i.default)([a.default], () => null != e ? a.default.getCustomEmojiById(e) : null, [e]),
                    s = null != t ? l.default.getByName(l.default.convertSurrogateToName(t, !1)) : null;
                return {
                    customEmoji: n,
                    unicodeEmoji: s
                }
            }
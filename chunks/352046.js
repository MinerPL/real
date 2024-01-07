            "use strict";
            i.r(t), i.d(t, {
                getTopAndNewlyAddedEmojis: function() {
                    return s
                },
                default: function() {
                    return u
                }
            });
            var n = i("65597"),
                r = i("385976"),
                a = i("958706");
            let o = [];

            function s(e) {
                let {
                    emojiStoreInstance: t = r.default,
                    guildId: i,
                    pickerIntention: n
                } = e;
                return {
                    topEmojis: n !== a.EmojiIntention.REACTION ? t.getTopEmoji(i) : o,
                    newlyAddedEmojis: n !== a.EmojiIntention.REACTION ? t.getNewlyAddedEmoji(i) : o
                }
            }

            function u(e, t) {
                return (0, n.useStateFromStoresObject)([r.default], () => s({
                    emojiStoreInstance: r.default,
                    guildId: e,
                    pickerIntention: t
                }), [e, t])
            }
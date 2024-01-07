            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return u
                }
            }), n("222007"), n("781738");
            var i = n("895547"),
                r = n("315102"),
                o = n("284679"),
                t = n("103603"),
                a = n("261742");
            let f = new Set(["™", "™️", "\xa9", "\xa9️", "\xae", "\xae️"]);

            function _(e) {
                if (f.has(e)) return "";
                try {
                    let s = 0 > e.indexOf("‍") ? e.replace("️", "") : e;
                    return n("331246")("@discordapp/twemoji/dist/svg/".concat(i.default.convert.toCodePoint(s), ".svg").replace("@discordapp/twemoji/dist/svg/", "./"))
                } catch (s) {
                    return console.warn(s, "no emoji for", e), ""
                }
            }
            async function d(e) {
                let s;
                let {
                    id: n,
                    name: i
                } = e;
                s = null != n ? r.default.getEmojiURL({
                    id: n,
                    size: 32,
                    animated: !1
                }) : _(i);
                let a = await (0, t.getPaletteForAvatar)(s);
                return null == a ? void 0 : a.map(e => {
                    let [s, n, i] = e;
                    return (0, o.rgbToHex)(s, n, i)
                })
            }
            var u = {
                getURL: a.default.makeMemoizer(_),
                filterUnsupportedEmojis: function(e) {
                    return e
                },
                applyPlatformToThemedEmojiColorPalette: function(e) {
                    let {
                        palette: s,
                        shouldProcessMobileColors: n = !1
                    } = e;
                    return s
                },
                getEmojiColors: d,
                triggerFullscreenAnimation: function(e) {
                    let {
                        channelId: s,
                        messageId: n,
                        emoji: i
                    } = e
                }
            }
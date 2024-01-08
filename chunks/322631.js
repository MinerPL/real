            "use strict";
            r.r(t), r.d(t, {
                TWITCH_APPLICATION_ID_PREFIX: function() {
                    return a
                },
                default: function() {
                    return n
                }
            });
            var n, i = r("376556"),
                s = r("653047"),
                l = r("782340");
            let a = "twitch:";
            n = class extends s.default {
                getIconURL() {
                    return i.default.get("twitch").icon.lightPNG
                }
                constructor(e) {
                    super(e), this.id = "".concat(a).concat(e.url), this.name = l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
                }
            }
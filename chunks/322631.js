            "use strict";
            n.r(t), n.d(t, {
                TWITCH_APPLICATION_ID_PREFIX: function() {
                    return a
                },
                default: function() {
                    return i
                }
            });
            var i, r = n("376556"),
                s = n("653047"),
                l = n("782340");
            let a = "twitch:";
            i = class extends s.default {
                getIconURL() {
                    return r.default.get("twitch").icon.lightPNG
                }
                constructor(e) {
                    super(e), this.id = "".concat(a).concat(e.url), this.name = l.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
                }
            }
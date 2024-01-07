            "use strict";
            n.r(t), n.d(t, {
                SPOTIFY_APP_PROTOCOL: function() {
                    return d
                },
                SPOTIFY_PARTY_PREFIX: function() {
                    return c
                },
                SPOTIFY_PLATFORM_NAME: function() {
                    return _
                },
                isSpotifyParty: function() {
                    return E
                },
                SpotifyResourceTypes: function() {
                    return l
                },
                SpotifyActionTypes: function() {
                    return s
                },
                SPOTIFY_HOSTNAMES: function() {
                    return f
                },
                SpotifyEndpoints: function() {
                    return T
                }
            });
            var i, a, l, s, r = n("376556"),
                u = n("773336"),
                o = n("49111");
            let d = "spotify",
                c = "spotify:",
                _ = r.default.get(o.PlatformTypes.SPOTIFY).name;

            function E(e) {
                return null != e && e.startsWith(c)
            }(i = l || (l = {})).TRACK = "track", i.ARTIST = "artist", i.ALBUM = "album", i.PLAYLIST = "playlist", (a = s || (s = {})).USER_ACTIVITY_PLAY = "user_activity_play", a.USER_ACTIVITY_SYNC = "user_activity_sync", a.EMBED_SYNC = "embed_sync";
            let f = ["open.spotify.com", "www.spotify.com"],
                h = "https://api.spotify.com/v1",
                p = e => "?utm_source=discord&utm_medium=".concat(e),
                T = Object.freeze({
                    PROFILE: "".concat(h, "/me"),
                    NOTIFICATIONS_PLAYER: "".concat(h, "/me/notifications/player"),
                    PLAYER: "".concat(h, "/me/player"),
                    PLAYER_DEVICES: "".concat(h, "/me/player/devices"),
                    PLAYER_PLAY: "".concat(h, "/me/player/play"),
                    PLAYER_PAUSE: "".concat(h, "/me/player/pause"),
                    PLAYER_REPEAT: "".concat(h, "/me/player/repeat"),
                    WEB_OPEN: function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "desktop";
                        return "https://open.spotify.com/".concat(encodeURIComponent(e), "/").concat(encodeURIComponent(t)).concat(p(n))
                    },
                    EMBED: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desktop";
                        return "https://open.spotify.com/embed".concat(e).concat(p(t))
                    },
                    PLAYER_OPEN: function(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "desktop";
                        return "".concat(d, ":").concat(encodeURIComponent(e), ":").concat(encodeURIComponent(t)).concat(n ? p(i) : "")
                    },
                    PREMIUM_SITE: "https://www.spotify.com/premium/".concat(p("desktop")),
                    INSTALL_ATTRIBUTION: e => "https://app.adjust.com/bdyga9?campaign=".concat(e),
                    APP_STORE: (0, u.isAndroid)() ? "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US" : "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8",
                    IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
                })
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var n = i("158998"),
                l = i("450484"),
                a = i("782340");

            function u(e, t, i) {
                switch (t) {
                    case l.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                        if (e.playingSameTrack) return a.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                        if (e.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: l.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    case l.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (e.syncingWithUser || e.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        return a.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                            name: null != i ? i : n.default.getName(e.user)
                        });
                    case l.SpotifyActionTypes.EMBED_SYNC:
                        if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                        if (e.syncingWithUser || e.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                        if (e.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                            name: l.SPOTIFY_PLATFORM_NAME
                        });
                        return;
                    default:
                        return
                }
            }
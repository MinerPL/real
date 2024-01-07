            "use strict";
            n.r(t), n.d(t, {
                validateDiscordTag: function() {
                    return d
                },
                humanizeAbortCode: function() {
                    return c
                }
            }), n("222007");
            var i = n("599110"),
                a = n("340454"),
                l = n("49111"),
                s = n("782340");
            let r = /^\d+$/,
                u = /^(.+?@.+?\..+?|.+?#\d{4})$/,
                o = /^[a-zA-Z0-9_\\.]+$/;

            function d(e) {
                return o.test(e) || e.includes("#") && u.test(e) ? null : (function(e) {
                    let [t, n] = e.split("#");
                    i.default.track(l.AnalyticEvents.FRIEND_REQUEST_FAILED, {
                        reason: "Invalid Username",
                        query: e,
                        discrim_len: (null != n ? n : "").length,
                        username_len: t.length,
                        is_email_like: a.default.isEmail(e),
                        is_invite_like: a.default.isInvite(e),
                        is_num_only: r.test(e)
                    })
                }(e), s.default.Messages.POMELO_ADD_FRIEND_ERROR)
            }

            function c(e, t) {
                switch (e) {
                    case l.AbortCodes.RELATIONSHIP_INCOMING_DISABLED:
                        return s.default.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                            discordTag: t
                        });
                    case l.AbortCodes.TOO_MANY_FRIENDS:
                        return s.default.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
                    case l.AbortCodes.RELATIONSHIP_ALREADY_FRIENDS:
                        return s.default.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
                    case l.AbortCodes.USER_QUARANTINED:
                    case l.AbortCodes.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                        return s.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
                    case l.AbortCodes.TOO_MANY_BLOCKED_USERS:
                        return s.default.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
                    case l.AbortCodes.RELATIONSHIP_INCOMING_BLOCKED:
                    case l.AbortCodes.RELATIONSHIP_INVALID_SELF:
                    case l.AbortCodes.RELATIONSHIP_INVALUD_USER_BOT:
                    case l.AbortCodes.RELATIONSHIP_INVALID_DISCORD_TAG:
                    default:
                        return s.default.Messages.POMELO_ADD_FRIEND_ERROR
                }
            }
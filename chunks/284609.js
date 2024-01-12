            "use strict";
            n.r(t), n.d(t, {
                validateDiscordTag: function() {
                    return l
                },
                humanizeAbortCode: function() {
                    return f
                }
            }), n("222007");
            var s = n("599110"),
                i = n("340454"),
                r = n("49111"),
                a = n("782340");
            let o = /^\d+$/,
                d = /^(.+?@.+?\..+?|.+?#\d{4})$/,
                u = /^[a-zA-Z0-9_\\.]+$/;

            function l(e) {
                return u.test(e) || e.includes("#") && d.test(e) ? null : (function(e) {
                    let [t, n] = e.split("#");
                    s.default.track(r.AnalyticEvents.FRIEND_REQUEST_FAILED, {
                        reason: "Invalid Username",
                        query: e,
                        discrim_len: (null != n ? n : "").length,
                        username_len: t.length,
                        is_email_like: i.default.isEmail(e),
                        is_invite_like: i.default.isInvite(e),
                        is_num_only: o.test(e)
                    })
                }(e), a.default.Messages.POMELO_ADD_FRIEND_ERROR)
            }

            function f(e, t) {
                switch (e) {
                    case r.AbortCodes.RELATIONSHIP_INCOMING_DISABLED:
                        return a.default.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({
                            discordTag: t
                        });
                    case r.AbortCodes.TOO_MANY_FRIENDS:
                        return a.default.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
                    case r.AbortCodes.RELATIONSHIP_ALREADY_FRIENDS:
                        return a.default.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
                    case r.AbortCodes.USER_QUARANTINED:
                    case r.AbortCodes.USER_FRIEND_REQUEST_LIMITED_ACCESS:
                        return a.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
                    case r.AbortCodes.TOO_MANY_BLOCKED_USERS:
                        return a.default.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
                    case r.AbortCodes.RELATIONSHIP_INCOMING_BLOCKED:
                    case r.AbortCodes.RELATIONSHIP_INVALID_SELF:
                    case r.AbortCodes.RELATIONSHIP_INVALUD_USER_BOT:
                    case r.AbortCodes.RELATIONSHIP_INVALID_DISCORD_TAG:
                    default:
                        return a.default.Messages.POMELO_ADD_FRIEND_ERROR
                }
            }
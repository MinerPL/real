            "use strict";
            n.r(t), n.d(t, {
                getHeaderTextForInvite: function() {
                    return s
                }
            });
            var a = n("782340");

            function s(e) {
                let {
                    isVoiceChannel: t,
                    isHubGuild: n,
                    isOwnInvite: s,
                    isGuest: l,
                    isStage: i,
                    isStream: r
                } = e;
                if (t) {
                    if (s) {
                        if (r) return a.default.Messages.INVITE_BUTTON_TITLE_INVITER_STREAM;
                        if (i) return a.default.Messages.INVITE_BUTTON_TITLE_INVITER_STAGE_CHANNEL;
                        else if (l) return a.default.Messages.GUEST_INVITE_EMBED_TITLE_SENDER;
                        else return a.default.Messages.INVITE_BUTTON_TITLE_INVITER_VOICE_CHANNEL
                    }
                    if (r) return a.default.Messages.INVITE_BUTTON_TITLE_INVITED_STREAM;
                    if (i) return a.default.Messages.INVITE_BUTTON_TITLE_INVITED_STAGE_CHANNEL;
                    else if (l) return a.default.Messages.GUEST_INVITE_EMBED_TITLE_RECEIVER;
                    else return a.default.Messages.INVITE_BUTTON_TITLE_INVITED_VOICE_CHANNEL
                }
                return n ? s ? a.default.Messages.INVITE_BUTTON_TITLE_INVITER_HUB : a.default.Messages.INVITE_BUTTON_TITLE_INVITED_HUB : s ? a.default.Messages.INVITE_BUTTON_TITLE_INVITER : a.default.Messages.INVITE_BUTTON_TITLE_INVITED
            }
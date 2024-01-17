"use strict";
n.r(t), n.d(t, {
  getHeaderTextForInvite: function() {
    return l
  }
});
var s = n("782340");

function l(e) {
  let {
    isVoiceChannel: t,
    isHubGuild: n,
    isOwnInvite: l,
    isGuest: a,
    isStage: i,
    isStream: r
  } = e;
  if (t) {
    if (l) {
      if (r) return s.default.Messages.INVITE_BUTTON_TITLE_INVITER_STREAM;
      if (i) return s.default.Messages.INVITE_BUTTON_TITLE_INVITER_STAGE_CHANNEL;
      else if (a) return s.default.Messages.GUEST_INVITE_EMBED_TITLE_SENDER;
      else return s.default.Messages.INVITE_BUTTON_TITLE_INVITER_VOICE_CHANNEL
    }
    if (r) return s.default.Messages.INVITE_BUTTON_TITLE_INVITED_STREAM;
    if (i) return s.default.Messages.INVITE_BUTTON_TITLE_INVITED_STAGE_CHANNEL;
    else if (a) return s.default.Messages.GUEST_INVITE_EMBED_TITLE_RECEIVER;
    else return s.default.Messages.INVITE_BUTTON_TITLE_INVITED_VOICE_CHANNEL
  }
  return n ? l ? s.default.Messages.INVITE_BUTTON_TITLE_INVITER_HUB : s.default.Messages.INVITE_BUTTON_TITLE_INVITED_HUB : l ? s.default.Messages.INVITE_BUTTON_TITLE_INVITER : s.default.Messages.INVITE_BUTTON_TITLE_INVITED
}
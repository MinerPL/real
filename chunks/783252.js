"use strict";
E.r(_), E.d(_, {
  default: function() {
    return A
  }
}), E("222007");
var t = E("913144"),
  o = E("689988"),
  n = E("271938"),
  r = E("366679"),
  i = E("42203"),
  a = E("18494"),
  I = E("123647"),
  s = E("49111");

function T() {
  ! function() {
    let e = a.default.getVoiceChannelId(),
      _ = r.default.bitrate;
    if (null == e) return;
    let E = i.default.getChannel(e);
    if (null != E) _ !== E.bitrate && t.default.dispatch({
      type: "SET_CHANNEL_BITRATE",
      bitrate: E.bitrate
    })
  }(), ! function() {
    var e;
    let _ = a.default.getVoiceChannelId(),
      E = I.default.mode;
    if (null == _) return;
    let o = i.default.getChannel(_);
    if (null == o) return;
    let n = null !== (e = o.videoQualityMode) && void 0 !== e ? e : s.VideoQualityMode.AUTO;
    E !== n && t.default.dispatch({
      type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
      mode: n
    })
  }()
}

function S(e) {
  let {
    channels: _
  } = e;
  for (let e of _) a.default.getVoiceChannelId() === e.id && T()
}

function N(e) {
  let {
    voiceStates: _
  } = e;
  _.forEach(e => {
    n.default.getSessionId() === e.sessionId && T()
  })
}
class O extends o.default {
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_UPDATES: S,
      VOICE_STATE_UPDATES: N
    }
  }
}
var A = new O
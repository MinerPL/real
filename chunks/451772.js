"use strict";
E.r(_), E.d(_, {
  default: function() {
    return c
  }
}), E("222007");
var t = E("862337"),
  o = E("913144"),
  n = E("990766"),
  r = E("373469"),
  i = E("271938"),
  a = E("42203"),
  I = E("590401"),
  s = E("18494"),
  T = E("205817"),
  S = E("718517"),
  N = E("374014"),
  O = E("49111");
let A = new t.Timeout,
  R = new t.Timeout,
  l = 5 * S.default.Millis.SECOND,
  L = 12 * S.default.Millis.SECOND,
  u = null;

function C(e, _) {
  if (s.default.getVoiceChannelId() !== e) return !1;
  let E = a.default.getChannel(e);
  if (null == E || !E.isDM() && !E.isGuildStageVoice()) return !1;
  let t = r.default.getActiveStreamForUser(_, E.getGuildId());
  if (null != t) return !1;
  let o = r.default.getStreamForUser(_, E.getGuildId());
  if (null == o) return !1;
  let i = (0, N.encodeStreamKey)(o);
  return i !== u && (u = i, (0, n.watchStream)(o, {
    noFocus: !0
  }), !0)
}

function D(e, _) {
  let E = null != _ ? _ : I.default.getPreferredRegion();
  null != E && E !== I.default.getRegion(T.default.getHostname(T.default.getActiveStreamKey())) && (0, n.changeStreamRegion)(e, E)
}
var c = {
  init() {
    let e = (e, _) => {
      !T.default.getAllActiveStreamKeys().includes(e) && R.start(_ ? L : l, () => {
        o.default.dispatch({
          type: "STREAM_TIMED_OUT",
          streamKey: e
        })
      })
    };
    o.default.subscribe("STREAM_WATCH", _ => {
      let {
        streamKey: E
      } = _, {
        channelId: t
      } = (0, N.decodeStreamKey)(E), o = a.default.getChannel(t);
      e(E, null == o ? void 0 : o.isGuildStageVoice())
    }), o.default.subscribe("STREAM_START", _ => {
      let {
        streamType: E,
        guildId: t,
        channelId: o
      } = _, n = a.default.getChannel(o);
      e((0, N.encodeStreamKey)({
        streamType: E,
        guildId: t,
        channelId: o,
        ownerId: i.default.getId()
      }), null == n ? void 0 : n.isGuildStageVoice())
    }), o.default.subscribe("STREAM_CREATE", () => {
      R.stop()
    }), o.default.subscribe("STREAM_UPDATE", () => {
      R.stop()
    }), o.default.subscribe("STREAM_DELETE", () => {
      R.stop()
    }), o.default.subscribe("STREAM_CLOSE", () => {
      A.stop(), R.stop()
    }), o.default.subscribe("VOICE_CHANNEL_SELECT", e => {
      let {
        channelId: _
      } = e;
      if (null == _) return;
      u = null;
      let E = r.default.getAllApplicationStreamsForChannel(_).filter(e => {
        let {
          ownerId: _
        } = e;
        return _ !== i.default.getId()
      })[0];
      null != E && C(_, E.ownerId)
    }), o.default.subscribe("VOICE_STATE_UPDATES", e => {
      let {
        voiceStates: _
      } = e;
      _.forEach(e => {
        let {
          userId: _,
          channelId: E,
          guildId: t,
          selfStream: o
        } = e;
        if (_ !== i.default.getId() && null != E) {
          if (o && C(E, _)) return;
          let e = r.default.getActiveStreamForUser(_, t);
          if (null != e && e.channelId === E && (!o && e.state !== O.ApplicationStreamStates.ENDED && A.start(18e4, () => (0, n.closeStream)((0, N.encodeStreamKey)(e), !1)), o && e.state === O.ApplicationStreamStates.ENDED)) {
            A.stop();
            let e = r.default.getStreamForUser(_, t);
            if (null == e) return;
            (0, n.watchStream)(e)
          }
        }
      })
    }), o.default.subscribe("CALL_UPDATE", e => {
      let {
        channelId: _,
        region: E
      } = e, t = r.default.getCurrentUserActiveStream();
      (null == t ? void 0 : t.channelId) === _ && D((0, N.encodeStreamKey)(t), E)
    }), o.default.subscribe("CHANNEL_UPDATES", e => {
      let {
        channels: _
      } = e, E = r.default.getCurrentUserActiveStream();
      if (null != E)
        for (let e of _) E.channelId === e.id && D((0, N.encodeStreamKey)(E), e.rtcRegion)
    })
  }
}
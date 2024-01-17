"use strict";
let t, o, n;
E.r(_), E.d(_, {
  default: function() {
    return M
  }
}), E("222007");
var r = E("450911"),
  i = E("267363"),
  a = E("990766"),
  I = E("689988"),
  s = E("374014"),
  T = E("845579"),
  S = E("271938"),
  N = E("42203"),
  O = E("546463"),
  A = E("568307"),
  R = E("18494"),
  l = E("101125"),
  L = E("713726"),
  u = E("9759"),
  C = E("705565"),
  D = E("754493"),
  c = E("49111");
let d = [];
class U extends I.default {
  handleRunningGamesChange() {
    let e = A.default.getVisibleGame();
    if (null == e) return;
    let {
      canBroadcast: _
    } = u.default.getCurrentConfig({
      location: "handle_running_games_change"
    }, {
      autoTrackExposure: !1
    }), E = l.default.getBroadcast(), t = (0, L.getGameName)(e), o = null != O.default.getGameByName(t), n = (0, D.getIsBroadcastingToAnyone)();
    if (!_ || null != E || !T.BroadcastAutoBroadcast.getSetting() || !o || !n) return;
    let r = null != d.find(_ => _.pid === e.pid);
    if (r) return;
    d = A.default.getRunningGames();
    let i = (0, C.getCanStartBroadcast)();
    if (!i) return;
    let I = R.default.getVoiceChannelId();
    (0, a.createBroadcastChannelOrStartStream)({
      pid: e.pid,
      channelId: I
    })
  }
  handleStreamCreate(e) {
    let {
      streamKey: _
    } = e;
    (0, L.startBroadcastForStream)(_, t)
  }
  handleStreamStop(e) {
    let {
      streamKey: _
    } = e;
    if (null == t) return;
    let E = (0, s.decodeStreamKey)(_),
      {
        ownerId: r,
        channelId: i
      } = E;
    if (null == r || null == i) return;
    let a = S.default.getId();
    if (r !== a) return;
    let I = N.default.getChannel(i),
      T = null != I && I.isBroadcastChannel();
    null != I && r === I.ownerId && T && (t = null, o = null, n = null, (0, L.stopBroadcast)())
  }
  handleStartBroadcastStream(e) {
    let {
      options: _
    } = e;
    t = _.pid, o = _.sourceId, n = _.sourceName
  }
  handleCallCreate(e) {
    let {
      channelId: _
    } = e;
    if (null == _ || null == t && null == o && null == n) return;
    let E = S.default.getId(),
      r = N.default.getChannel(_);
    null != r && E === r.ownerId && r.isBroadcastChannel() && (0, a.startStream)(null, _, {
      pid: t,
      sourceId: o,
      sourceName: n
    })
  }
  handleRTCConnectionState(e) {
    let {
      channelId: _,
      state: E
    } = e;
    if (E !== c.RTCConnectionStates.DISCONNECTED) return;
    let t = R.default.getChannelId(),
      o = N.default.getChannel(_);
    if (null == o || !o.isBroadcastChannel()) return;
    r.default.closePrivateChannel(_, t === _, !0);
    let n = l.default.getBroadcast();
    null != n && o.id === n.channelId && (0, L.stopBroadcast)()
  }
  handleChannelDelete(e) {
    let {
      channel: _
    } = e, E = l.default.getBroadcast();
    null != E && _.id === E.channelId && (0, L.stopBroadcast)()
  }
  handleMessageCreate(e) {
    let {
      channelId: _,
      guildId: E
    } = e;
    if (null != E) return;
    let t = N.default.getChannel(_);
    if (null == t || !t.isBroadcastChannel()) return;
    let o = R.default.getVoiceChannelId(),
      n = o !== t.id;
    n && (0, i.localAck)(_)
  }
  constructor(...e) {
    super(...e), this.actions = {
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_CREATE: this.handleStreamCreate,
      STREAM_STOP: this.handleStreamStop,
      START_BROADCAST_STREAM: this.handleStartBroadcastStream,
      CALL_CREATE: this.handleCallCreate,
      RTC_CONNECTION_STATE: this.handleRTCConnectionState,
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate
    }
  }
}
var M = new U
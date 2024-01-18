"use strict";
n.r(t), n.d(t, {
  disconnectRemote: function() {
    return p
  },
  connectToRemote: function() {
    return y
  },
  remoteVoiceStateUpdate: function() {
    return C
  },
  remoteDisconnect: function() {
    return T
  },
  remoteAudioSettingsUpdate: function() {
    return S
  },
  fetchDevices: function() {
    return A
  },
  persistSelectedDeviceId: function() {
    return D
  },
  transferToPlayStation: function() {
    return b
  }
}), n("424973"), n("222007");
var s = n("30945"),
  i = n("363747"),
  r = n("872717"),
  a = n("913144"),
  o = n("404118"),
  d = n("504385"),
  u = n("945956"),
  l = n("235660"),
  f = n("599110"),
  _ = n("286235"),
  c = n("893243"),
  g = n("76393"),
  m = n("780338"),
  h = n("49111"),
  v = n("782340");

function E(e, t) {
  var n, s;
  f.default.track(h.AnalyticEvents.REMOTE_COMMAND_SENT, {
    command_type: e,
    remote_platform: null === (s = l.default.getSessionById(t)) || void 0 === s ? void 0 : null === (n = s.clientInfo) || void 0 === n ? void 0 : n.os
  })
}
async function p() {
  let e = g.default.getAwaitingRemoteSessionInfo(),
    t = null == e ? void 0 : e.nonce;
  a.default.dispatch({
    type: "REMOTE_SESSION_DISCONNECT"
  });
  let n = [];
  ((null == e ? void 0 : e.type) === h.PlatformTypes.PLAYSTATION || (null == e ? void 0 : e.type) === h.PlatformTypes.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(O(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
    return r.default.delete({
      url: h.Endpoints.CONNECT_REQUEST(e)
    })
  }(t));
  try {
    await Promise.all(n)
  } catch (e) {
    o.default.show({
      title: v.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
      body: v.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
    })
  }
}

function y(e) {
  a.default.dispatch({
    type: "REMOTE_SESSION_CONNECT",
    sessionId: e
  })
}

function C(e, t) {
  let {
    selfMute: n,
    selfDeaf: s
  } = t;
  a.default.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: {
      type: "VOICE_STATE_UPDATE",
      self_mute: n,
      self_deaf: s
    }
  }), E("VOICE_STATE_UPDATE", e)
}

function T(e) {
  a.default.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: {
      type: "DISCONNECT"
    }
  }), E("DISCONNECT", e), p()
}

function S(e, t, n, s) {
  let i = (0, d.coerceAudioContextForProto)(n);
  null != i && (a.default.dispatch({
    type: "REMOTE_COMMAND",
    sessionId: e,
    payload: {
      type: "AUDIO_SETTINGS_UPDATE",
      context: i,
      id: t,
      ...s
    }
  }), E("AUDIO_SETTINGS_UPDATE", e))
}
async function I() {
  let e;
  try {
    let t = null != u.default.getRTCConnectionId() ? i.ConsoleHandoffType.TRANSFER_EXISTING_CALL : i.ConsoleHandoffType.CREATE_NEW_CALL,
      n = await r.default.post({
        url: h.Endpoints.CONNECT_REQUEST_CREATE,
        body: {
          analytics_properties: {
            handoff_type: t
          }
        }
      });
    e = n.body.nonce
  } catch (e) {
    _.default.captureException(e)
  }
  return e
}
async function A(e) {
  let t;
  a.default.dispatch({
    type: "GAME_CONSOLE_FETCH_DEVICES_START",
    platform: e
  });
  try {
    t = await r.default.get({
      url: h.Endpoints.CONSOLES_DEVICES(e)
    })
  } catch (t) {
    throw a.default.dispatch({
      type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
      platform: e,
      error: t
    }), t
  }
  let n = t.body.devices;
  return a.default.dispatch({
    type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
    platform: e,
    devices: n
  }), n
}

function D(e, t) {
  a.default.dispatch({
    type: "GAME_CONSOLE_SELECT_DEVICE",
    platform: e,
    deviceId: t
  })
}
async function N(e, t, n, i) {
  let o;
  a.default.dispatch({
    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
    platform: e
  });
  try {
    o = await r.default.post({
      url: h.Endpoints.CONSOLES_DEVICES_COMMANDS(e, t),
      body: {
        command: s.ConsoleCommands.CONNECT_VOICE,
        channel_id: n.id,
        guild_id: n.guild_id,
        nonce: i
      }
    })
  } catch (t) {
    throw a.default.dispatch({
      type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
      platform: e,
      error: t
    }), t
  }
  let d = o.body.id;
  return a.default.dispatch({
    type: "WAIT_FOR_REMOTE_SESSION",
    sessionType: e,
    nonce: i,
    channelId: n.id,
    deviceId: t,
    commandId: d
  }), d
}
async function O(e, t, n) {
  a.default.dispatch({
    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
    platform: e,
    deviceId: t,
    commandId: n
  });
  try {
    await r.default.delete({
      url: h.Endpoints.CONSOLES_DEVICES_COMMAND(e, t, n)
    })
  } catch (s) {
    throw a.default.dispatch({
      type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
      platform: e,
      deviceId: t,
      commandId: n,
      error: s
    }), s
  }
  a.default.dispatch({
    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
    platform: e,
    deviceId: t,
    commandId: n
  })
}
async function b(e, t, n) {
  await c.default.maybeShowPTTAlert(e), await p();
  let s = await I();
  await N(e, t, n, s), (0, m.default)(n.id, e)
}
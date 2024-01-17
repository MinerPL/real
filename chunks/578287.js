"use strict";
n.r(t), n.d(t, {
  getRemoteIconURL: function() {
    return G
  },
  transformChannel: function() {
    return w
  },
  transformInternalTextMessage: function() {
    return k
  },
  transformVoiceState: function() {
    return F
  },
  transformRelationship: function() {
    return H
  },
  isMatchingOrigin: function() {
    return B
  },
  hasMessageReadPermission: function() {
    return V
  },
  getVoiceConnectionState: function() {
    return Y
  },
  computeActivityFlags: function() {
    return W
  },
  validateActivityInvite: function() {
    return K
  },
  fetchApplicationsRPC: function() {
    return z
  },
  processSocketThrottlers: function() {
    return q
  },
  validateOriginAndUpdateSocket: function() {
    return Q
  },
  getDeprecatedVoiceSettingsWithShortcut: function() {
    return Z
  },
  getVoiceSettingsWithShortcut: function() {
    return X
  },
  validatePostMessageTransport: function() {
    return J
  },
  validateApplication: function() {
    return $
  }
}), n("222007"), n("424973"), n("70102"), n("781738"), n("917351");
var a, s = n("746379"),
  i = n.n(s),
  l = n("872717"),
  r = n("497"),
  o = n("95410"),
  u = n("819689"),
  d = n("711562"),
  c = n("367376"),
  f = n("574073"),
  E = n("845579"),
  _ = n("233069"),
  h = n("766274"),
  C = n("42203"),
  I = n("305961"),
  T = n("42887"),
  S = n("377253"),
  m = n("824563"),
  p = n("697218"),
  A = n("800762"),
  g = n("718517"),
  N = n("387111"),
  R = n("655518"),
  O = n("861309"),
  L = n("694352"),
  v = n("492249"),
  M = n("49111");
let P = null !== (a = i.parse(window.GLOBAL_ENV.API_ENDPOINT, !1, !0).host) && void 0 !== a ? a : "localhost",
  D = function() {
    let e = P.split(":")[0];
    if (!e.includes(".")) return e;
    let t = e.split("."),
      n = t[t.length - 1];
    return /^\d+$/.test(n) ? e : t.slice(-2).join(".")
  }(),
  y = new RegExp("^".concat(R.default.escape("https://"), "(?:[a-z]+\\.)?(").concat(R.default.escape(D), "|discordapp.com|discord.com)$")),
  x = 1 * g.default.Millis.MINUTE,
  b = {};

function U(e) {
  return "customEmoji" === e.type && (e.type = "emoji"), "emoji" === e.type && e.src && (e.src = G(e.src)), Array.isArray(e.content) && (e.content = e.content.map(U)), e
}

function G(e) {
  return /^http/.test(e) ? e : "".concat(location.protocol, "//").concat(location.host).concat("/" === e.charAt(0) ? "" : "/").concat(e)
}

function j(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  return t.indexOf(e) > -1
}

function w(e, t) {
  let n = [],
    a = e.getGuildId();
  return ![M.ChannelTypes.GUILD_CATEGORY, ...(0, _.GUILD_VOCAL_CHANNEL_TYPES)].includes(e.type) && n.push(new Promise(t => {
    S.default.whenReady(e.id, () => t()), u.default.fetchMessages({
      channelId: e.id,
      limit: M.MAX_MESSAGES_PER_CHANNEL
    })
  })), Promise.all(n).then(() => {
    var n;
    let s = !e.isNSFW() || (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) === !0,
      i = s && t ? S.default.getMessages(e.id).toArray().map(k) : [],
      l = Object.values(A.default.getVoiceStatesForChannel(e.id)).map(t => F(a, e.id, t));
    return {
      id: e.id,
      name: e.name,
      type: e.type,
      topic: e.topic,
      bitrate: e.bitrate,
      user_limit: e.userLimit,
      guild_id: a,
      position: e.position,
      messages: i,
      voice_states: l
    }
  })
}

function k(e) {
  let t = c.default.parseToAST(e.content, !0, {
      channelId: e.channel_id
    }).map(U),
    n = C.default.getChannel(e.channel_id),
    a = null != e.author ? (0, f.getUserAuthor)(new h.default(e.author), n) : void 0;
  return {
    id: e.id,
    blocked: e.blocked,
    bot: e.bot,
    content: e.content,
    content_parsed: t.length ? t : void 0,
    nick: null == a ? void 0 : a.nick,
    author_color: null == a ? void 0 : a.colorString,
    edited_timestamp: e.edited_timestamp || e.editedTimestamp,
    timestamp: e.timestamp,
    tts: e.tts,
    mentions: e.mentions,
    mention_everyone: e.mention_everyone || e.mentionEveryone,
    mention_roles: e.mention_roles || e.mentionRoles,
    embeds: e.embeds,
    attachments: e.attachments,
    author: e.author,
    pinned: e.pinned,
    type: e.type
  }
}

function F(e, t, n) {
  let {
    mute: a,
    deaf: s,
    selfMute: i,
    selfDeaf: l,
    suppress: r,
    userId: o
  } = n, u = p.default.getUser(o);
  if (null == u) throw Error("Invalid user id: ".concat(o));
  return {
    nick: N.default.getName(e, t, u),
    mute: T.default.isLocalMute(u.id),
    volume: T.default.getLocalVolume(u.id),
    pan: T.default.getLocalPan(u.id),
    voice_state: {
      mute: a,
      deaf: s,
      self_mute: i,
      self_deaf: l,
      suppress: r
    },
    user: (0, L.default)(u)
  }
}

function H(e, t, n) {
  let a = p.default.getUser(t);
  return {
    type: e,
    user: null != a ? (0, L.default)(a) : null,
    presence: {
      status: m.default.getStatus(t),
      activity: null != n ? m.default.getApplicationActivity(t, n) : m.default.getPrimaryActivity(t)
    }
  }
}

function B(e) {
  let t;
  if (null == e) return !1;
  let n = window.location.origin;
  if (e === n) return !0;
  try {
    t = i.parse(e).hostname
  } catch (e) {
    return !1
  }
  return window.location.hostname === t && "localhost" === t || null == e.match("staging") && (!!(y.test(e) && y.test(n)) || !1)
}

function V(e, t, n) {
  let a = I.default.getGuild(e.getGuildId()),
    s = null != a ? a.getApplicationId() : e.getApplicationId();
  return s === t || n.indexOf(M.OAuth2Scopes.MESSAGES_READ) > -1
}

function Y(e) {
  switch (e) {
    case M.RTCConnectionStates.RTC_CONNECTED:
    case M.RTCConnectionStates.RTC_CONNECTING:
    case M.RTCConnectionStates.RTC_DISCONNECTED:
      return e.replace(/^RTC_/, "VOICE_");
    default:
      return e
  }
}

function W(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      instance: n,
      secrets: a,
      party: s
    } = e,
    i = 0;
  return (n && (i |= M.ActivityFlags.INSTANCE), (null == a ? void 0 : a.join) != null && (i |= M.ActivityFlags.JOIN), t) ? (i |= M.ActivityFlags.EMBEDDED, i |= M.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL) : (((null == s ? void 0 : s.privacy) === M.ActivityPartyPrivacy.PUBLIC || o.default.get("ACTIVITIES_FORCE_PUBLIC")) && (E.AllowActivityPartyPrivacyFriends.getSetting() && (i |= M.ActivityFlags.PARTY_PRIVACY_FRIENDS), E.AllowActivityPartyPrivacyVoiceChannel.getSetting() && (i |= M.ActivityFlags.PARTY_PRIVACY_VOICE_CHANNEL)), i)
}

function K(e, t, n) {
  if (e === M.ActivityActionTypes.JOIN) return null != t && null != t.id && null != n.join;
  return !1
}

function z(e, t, n) {
  return l.default.get({
    url: M.Endpoints.APPLICATION_RPC(t),
    oldFormErrors: !0,
    retries: 3
  }).then(a => {
    let {
      body: {
        rpc_origins: s,
        id: i,
        name: l,
        icon: r,
        cover_image: o,
        flags: u
      }
    } = a;
    if ("string" == typeof n) {
      if (e.transport === v.TransportTypes.POST_MESSAGE) {
        let e = (0, d.default)(t);
        if (null == e || !j(n, [e])) throw new O.default(M.RPCCloseCodes.INVALID_ORIGIN, "Invalid Origin")
      } else if (!j(n, s)) throw new O.default(M.RPCCloseCodes.INVALID_ORIGIN, "Invalid Origin")
    }
    e.application = {
      id: i,
      name: l,
      icon: r,
      coverImage: o,
      flags: u
    }
  }, () => {
    throw new O.default(M.RPCCloseCodes.INVALID_CLIENTID, "Invalid Client ID")
  })
}
async function q(e, t) {
  let n = b[e];
  null == n && (n = new r.default(t ? 2 : 60, x), b[e] = n), await n.process()
}

function Q(e, t) {
  null == t && (e.authorization.scopes = [v.RPC_LOCAL_SCOPE])
}

function Z(e) {
  let t = T.default.getSettings(),
    n = e => Object.values(e).sort((e, t) => e.index - t.index).map(e => ({
      id: e.id,
      name: e.name
    })),
    a = e(t);
  return {
    input: {
      available_devices: n(T.default.getInputDevices()),
      device_id: t.inputDeviceId,
      volume: t.inputVolume
    },
    output: {
      available_devices: n(T.default.getOutputDevices()),
      device_id: t.outputDeviceId,
      volume: t.outputVolume
    },
    mode: {
      type: t.mode,
      auto_threshold: t.modeOptions.autoThreshold,
      threshold: t.modeOptions.threshold,
      shortcut: a,
      delay: t.modeOptions.delay
    },
    automatic_gain_control: t.automaticGainControl,
    echo_cancellation: t.echoCancellation,
    noise_suppression: t.noiseSuppression,
    qos: t.qos,
    silence_warning: t.silenceWarning,
    deaf: t.deaf,
    mute: t.mute
  }
}

function X(e, t) {
  let n = T.default.getSettings(e),
    a = t(n);
  return {
    input_mode: {
      type: n.mode,
      shortcut: a
    },
    local_mutes: Object.keys(n.localMutes),
    local_volumes: n.localVolumes,
    self_mute: n.mute,
    self_deaf: n.deaf
  }
}

function J(e) {
  if (e !== v.TransportTypes.POST_MESSAGE) throw new O.default(v.RPCErrors.INVALID_COMMAND, 'command not available from "'.concat(e, " transport"))
}

function $(e) {
  if (null == e.id) throw new O.default(v.RPCErrors.INVALID_COMMAND, "Invalid application")
}
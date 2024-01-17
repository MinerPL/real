"use strict";
t.r(n), t.d(n, {
  VoiceChannelEffectSentLocation: function() {
    return u
  },
  sendVoiceChannelCustomCallSoundEffect: function() {
    return L
  },
  sendVoiceChannelSoundboardEffect: function() {
    return T
  },
  sendVoiceChannelEffect: function() {
    return N
  }
});
var l, u, i = t("917351"),
  o = t("872717"),
  a = t("913144"),
  d = t("812204"),
  r = t("716241"),
  s = t("385976"),
  c = t("389480"),
  f = t("454614"),
  _ = t("18494"),
  E = t("718517"),
  S = t("402671"),
  C = t("82230"),
  y = t("568088"),
  m = t("397485"),
  A = t("626334"),
  g = t("49111"),
  I = t("846325");

function U(e) {
  let n = new AbortController,
    t = (0, i.throttle)(t => {
      _.default.getVoiceChannelId() !== e && n.abort()
    }, 1e3);
  return {
    abortController: n,
    onRequestProgress: t
  }
}

function L(e, n, t) {
  var l;
  let {
    abortController: u,
    onRequestProgress: i
  } = U(e), a = null !== (l = C.default.getState().animationType) && void 0 !== l ? l : A.VoiceChannelEffectAnimationType.BASIC, r = {
    animation_type: a,
    animation_id: (0, m.sampleAnimationId)(a, m.CUSTOM_CALL_SOUND_ANIMATION_RANGE)
  };
  o.default.post({
    url: g.Endpoints.CUSTOM_CALL_SOUNDS(e),
    body: r,
    signal: u.signal,
    onRequestProgress: i
  }).then(g.NOOP_NULL, () => {
    if (u.signal.aborted) return
  }), (0, f.default)([d.default.CHANNEL_CALL], t, n, c.AnalyticsSoundType.ENTRY)
}

function T(e, n, t, l) {
  var u, i;
  let a = s.default.getCustomEmojiById(null !== (u = n.emojiId) && void 0 !== u ? u : ""),
    {
      abortController: d,
      onRequestProgress: r
    } = U(e),
    _ = {
      sound_id: n.soundId,
      emoji_id: n.emojiId,
      emoji_name: null !== (i = n.emojiName) && void 0 !== i ? i : null == a ? void 0 : a.name
    };
  n.guildId !== I.DEFAULT_SOUND_GUILD_ID && (_.source_guild_id = n.guildId), o.default.post({
    url: g.Endpoints.SEND_SOUNDBOARD_SOUND(e),
    body: _,
    signal: d.signal,
    onRequestProgress: r
  }).then(g.NOOP_NULL, () => {
    if (d.signal.aborted) return
  }), (0, f.default)(null != l ? l : [], t, n, c.AnalyticsSoundType.DEFAULT)
}(l = u || (u = {})).EMOJI_PICKER = "emoji_picker", l.EFFECT_BAR = "effect_bar";
let N = async e => {
  let {
    channel: n,
    emoji: t,
    location: l,
    animationType: u,
    animationId: i,
    isPremium: d
  } = e;
  if (null == t || y.default.isOnCooldown) return;
  let r = d && null != u ? u : A.VoiceChannelEffectAnimationType.BASIC;
  try {
    let e = null != t.id ? {
      emoji_id: t.id,
      emoji_name: t.name,
      animation_type: r,
      animation_id: i
    } : {
      emoji_id: null,
      emoji_name: t.optionallyDiverseSequence,
      animation_type: r,
      animation_id: i
    };
    await o.default.post({
      url: g.Endpoints.VOICE_CHANNEL_EFFECTS(n.id),
      body: e
    }), p(n, t, l, r), a.default.dispatch({
      type: "VOICE_CHANNEL_EFFECT_SENT_LOCAL"
    })
  } catch (e) {
    if (429 === e.status && null != e.body.retry_after) {
      let n = e.body.retry_after * E.default.Millis.SECOND;
      a.default.dispatch({
        type: "VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP",
        cooldownEndsAtMs: n
      })
    }
  }
}, D = {
  [A.VoiceChannelEffectAnimationType.BASIC]: "Basic",
  [A.VoiceChannelEffectAnimationType.PREMIUM]: "Premium"
}, p = (e, n, t, l) => {
  let {
    unicode: u,
    custom: i,
    customExternal: o,
    managed: a,
    managedExternal: d,
    animated: s
  } = (0, S.countEmoji)([n], e.getGuildId()), c = D[l];
  r.default.trackWithMetadata(g.AnalyticEvents.VOICE_CHANNEL_EFFECT_SENT, {
    channel_id: e.id,
    guild_id: e.getGuildId(),
    location: t,
    emoji_unicode: u,
    emoji_custom: i,
    emoji_custom_external: o,
    emoji_managed: a,
    emoji_managed_external: d,
    emoji_animated: s,
    animation_type: c,
    is_broadcast: e.isBroadcastChannel()
  })
}
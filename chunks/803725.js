"use strict";
n.r(t), n.d(t, {
  updateAllowVoiceRecording: function() {
    return M
  },
  updateClipsEnabled: function() {
    return L
  },
  updateDecoupledClipsEnabled: function() {
    return b
  },
  updateRemindersEnabled: function() {
    return R
  },
  updateClipsStorageLocation: function() {
    return O
  },
  updateClipsQuality: function() {
    return P
  },
  updateClipsLength: function() {
    return w
  },
  updateViewerClipsEnabled: function() {
    return U
  },
  saveClip: function() {
    return F
  },
  updateClipMetadata: function() {
    return V
  },
  clearClipsSession: function() {
    return x
  },
  clearNewClipIds: function() {
    return H
  },
  loadClipsDirectory: function() {
    return q
  },
  deleteClip: function() {
    return W
  },
  exportClip: function() {
    return B
  }
}), n("222007"), n("424973");
var a = n("750028"),
  i = n("913144"),
  l = n("49671"),
  d = n("44642"),
  u = n("374014"),
  s = n("584687"),
  r = n("103979"),
  o = n("872173"),
  c = n("268491"),
  f = n("373469"),
  g = n("271938"),
  p = n("42887"),
  _ = n("568307"),
  m = n("205817"),
  E = n("599110"),
  h = n("773336"),
  S = n("709681"),
  v = n("386045"),
  C = n("13136"),
  I = n("881095"),
  A = n("997942"),
  T = n("310238"),
  y = n("99366"),
  N = n("80028"),
  D = n("49111");

function M(e) {
  let {
    allowVoiceRecording: t
  } = e;
  o.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
    e.allowVoiceRecording = a.BoolValue.create({
      value: t
    })
  }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), E.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
    allow_voice_recording: t
  })
}
async function L(e) {
  let {
    clipsEnabled: t,
    guildId: n,
    trackAnalytics: a = !1
  } = e;
  await i.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsEnabled: t,
      ...!t && {
        decoupledClipsEnabled: !1
      }
    }
  }), a && E.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
    clips_enabled: t,
    guild_id: n,
    ...!t && {
      decoupled_clips_enabled: !1
    }
  })
}

function b(e) {
  let {
    enabled: t,
    trackAnalytics: n = !1
  } = e;
  i.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      ...t && {
        clipsEnabled: !0
      },
      decoupledClipsEnabled: t
    }
  }), n && E.default.track(D.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
    ...t && {
      clips_enabled: !0
    },
    decoupled_clips_enabled: t
  })
}

function R(e) {
  i.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      remindersEnabled: e
    }
  })
}

function O(e) {
  i.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      storageLocation: e
    }
  })
}

function P(e) {
  i.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsQuality: e
    }
  })
}

function w(e) {
  i.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      clipsLength: e
    }
  })
}

function U(e) {
  i.default.dispatch({
    type: "CLIPS_SETTINGS_UPDATE",
    settings: {
      viewerClipsEnabled: e
    }
  })
}

function G(e, t) {
  var n, a, i, l, u, s, r, o, f, g;
  let p = new Map;
  for (let e in t.framesEncodedByEncoder) {
    let a = t.framesEncodedByEncoder[e],
      i = (0, d.parseEncoder)(e),
      l = null !== (n = p.get(i)) && void 0 !== n ? n : 0;
    p.set(i, l + a)
  }
  return {
    ...e,
    frames_encoded_nvidia_cuda: null !== (a = p.get(d.Encoders.NVIDIA_CUDA)) && void 0 !== a ? a : 0,
    frames_encoded_nvidia_direct3d: null !== (i = p.get(d.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
    frames_encoded_openh264: null !== (l = p.get(d.Encoders.OPENH264)) && void 0 !== l ? l : 0,
    frames_encoded_videotoolbox: null !== (u = p.get(d.Encoders.VIDEOTOOLBOX)) && void 0 !== u ? u : 0,
    frames_encoded_amd_direct3d: null !== (s = p.get(d.Encoders.AMD_DIRECT_3D)) && void 0 !== s ? s : 0,
    frames_encoded_intel: null !== (r = p.get(d.Encoders.INTEL)) && void 0 !== r ? r : 0,
    frames_encoded_intel_direct3d: null !== (o = p.get(d.Encoders.INTEL_DIRECT_3D)) && void 0 !== o ? o : 0,
    frames_encoded_uncategorized: null !== (f = p.get(d.Encoders.UNCATEGORIZED)) && void 0 !== f ? f : 0,
    frames_encoded_unknown: null !== (g = p.get(d.Encoders.UNKNOWN)) && void 0 !== g ? g : 0,
    frames_submitted: t.framesSubmitted,
    frames_submitted_during_clip: t.framesSubmittedDuringClip,
    frames_encoded: t.framesEncoded,
    frames_encoded_during_clip: t.framesEncodedDuringClip,
    frames_dropped: t.framesDropped,
    frames_dropped_during_clip: t.framesDroppedDuringClip,
    clip_duration_setting: v.default.getSettings().clipsLength,
    clip_duration: t.clipDuration,
    clip_resolution_width: t.clipResolutionWidth,
    clip_resolution_height: t.clipResolutionHeight,
    min_fps: t.minFps,
    max_fps: t.maxFps,
    submitted_fps: t.submittedFps,
    target_fps: c.default.getState().fps,
    audio_track_count: t.audioTrackCount,
    saved_at: t.savedAt
  }
}
async function k(e) {
  let t = v.default.getSettings(),
    n = t.storageLocation,
    a = (0, I.default)(e),
    d = "".concat((0, C.default)(a.applicationName.substring(0, 20)), "_").concat(a.id, ".mp4"),
    s = l.default.fileManager.join(n, d),
    r = p.default.getMediaEngine(),
    o = JSON.stringify(a),
    c = null != e ? (0, u.decodeStreamKey)(e).ownerId : void 0,
    _ = function(e) {
      var t;
      let n, a, i;
      if (null != e) {
        n = null != e ? m.default.getRTCConnection(e) : null;
        let t = (0, u.decodeStreamKey)(e);
        a = t.guildId, i = t.channelId
      } else {
        let e = g.default.getId(),
          t = f.default.getActiveStreamForUser(e, null);
        n = null != t ? m.default.getRTCConnection((0, u.encodeStreamKey)(t)) : null, a = null == t ? void 0 : t.guildId, i = null == t ? void 0 : t.channelId
      }
      let l = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
      return {
        rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
        media_session_id: null == n ? void 0 : n.getMediaSessionId(),
        parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
        guild_id: a,
        channel_id: i,
        application_id: null == l ? void 0 : l.id,
        application_name: null == l ? void 0 : l.name
      }
    }(e);
  null != e && i.default.dispatch({
    type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
    clip: {
      ...a,
      filepath: s
    }
  });
  try {
    var h;
    let {
      duration: e,
      thumbnail: t,
      clipStats: n
    } = await (null != c ? r.saveClipForUser(c, s, o) : r.saveClip(s, o)), i = G(_, n);
    i.clip_save_time_ms = n.clipSaveTimeMs, i.clip_size_bytes = n.clipSizeBytes, null != n.viewerDecodeFps && (i.decode_fps_during_clip = n.viewerDecodeFps, i.encode_fps_during_clip = n.viewerEncodeFps, i.target_fps = null), E.default.track(D.AnalyticEvents.CLIP_SAVED, i);
    let d = await (null != l.default.clips.getClipProtocolURLFromPath ? (0, y.createThumbnailFromVideo)(l.default.clips.getClipProtocolURLFromPath(s), 0) : (0, y.createThumbnail)(t));
    return a.thumbnail = d, a.length = e, N.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (h = null == d ? void 0 : d.length) && void 0 !== h ? h : 0, " bytes thumbnail.")), await r.updateClipMetadata(s, JSON.stringify(a)), {
      ...a,
      filepath: s
    }
  } catch (n) {
    if (null != e && i.default.dispatch({
        type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
        clipId: a.id
      }), !("errorMessage" in n)) throw E.default.track(D.AnalyticEvents.CLIP_SAVE_FAILURE, _), n;
    let t = G(_, n);
    throw t.error_at = n.errorAt, t.error_message = n.errorMessage, E.default.track(D.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
  }
}
async function F(e) {
  var t;
  let {
    enableDecoupledGameClipping: n
  } = s.default.getCurrentConfig({
    location: "8ac9d1_1"
  }, {
    autoTrackExposure: !1
  }), {
    enableViewerClipping: a
  } = r.default.getCurrentConfig({
    location: "SaveClip"
  }, {
    autoTrackExposure: !1
  });
  if (v.default.getIsAtMaxSaveClipOperations()) return;
  let l = v.default.getSettings().clipsEnabled && null != f.default.getCurrentUserActiveStream(),
    d = n && v.default.getSettings().decoupledClipsEnabled && (null === (t = _.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && p.default.hasClipsSource(),
    o = null != e && null != f.default.getActiveStreamForStreamKey(e) && a;
  if (!l && !d && !o) return;
  let c = f.default.getCurrentUserActiveStream(),
    g = null != c ? (0, u.encodeStreamKey)(c) : void 0;
  i.default.dispatch({
    type: "CLIPS_SAVE_CLIP_START"
  });
  let m = (0, S.playSound)("clip_save", .5),
    E = performance.now();
  try {
    let t = await k(null != e ? e : g);
    i.default.dispatch({
      type: "CLIPS_SAVE_CLIP",
      clip: t
    })
  } catch (e) {
    N.ClipsLogger.error("Clip Failed to Save", e), null == m || m.stop(), (0, S.playSound)("clip_error", .5), i.default.dispatch({
      type: "CLIPS_SAVE_CLIP_ERROR"
    })
  }
  N.ClipsLogger.info("".concat(v.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - E), "ms"))
}
async function V(e, t) {
  let n = v.default.getClips().find(t => t.id === e);
  if (null == n) return;
  let a = {
      ...n,
      ...t
    },
    l = await (0, A.validateClipMetadata)(a);
  null != l && (await p.default.getMediaEngine().updateClipMetadata(a.filepath, JSON.stringify(a)), E.default.track(D.AnalyticEvents.CLIP_EDITED, {
    clip_id: a.id
  }), i.default.dispatch({
    type: "CLIPS_UPDATE_METADATA",
    clip: a
  }))
}

function x() {
  i.default.dispatch({
    type: "CLIPS_CLEAR_CLIPS_SESSION"
  })
}

function H() {
  i.default.dispatch({
    type: "CLIPS_CLEAR_NEW_CLIP_IDS"
  })
}
async function q(e) {
  var t;
  if (!(0, h.isDesktop)() || (null === (t = l.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
  let n = await l.default.clips.loadClipsDirectory(e),
    a = [];
  for (let e of n) {
    let t = await (0, A.validateClipMetadata)({
      ...e.metadata,
      filepath: e.filepath
    });
    null != t && a.push(t)
  }
  i.default.dispatch({
    type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
    clips: a
  })
}
async function W(e) {
  var t;
  (0, h.isDesktop)() && (null === (t = l.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await l.default.clips.deleteClip(e), i.default.dispatch({
    type: "CLIPS_DELETE_CLIP",
    filepath: e
  }))
}
async function B(e, t) {
  let n = p.default.getMediaEngine(),
    a = await n.exportClip(e.filepath, t);
  return (0, T.default)(a)
}
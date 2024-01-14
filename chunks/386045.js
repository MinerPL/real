"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("702976");
var i = n("446674"),
  r = n("913144"),
  s = n("49671"),
  a = n("374014"),
  o = n("271938"),
  l = n("42887"),
  u = n("568307"),
  c = n("568734"),
  d = n("30591"),
  f = n("80028"),
  E = n("49111"),
  h = n("686298");
let p = "default",
  _ = [],
  S = [],
  m = 0,
  T = null,
  g = null,
  I = {},
  C = {
    clipsEnabled: !1,
    storageLocation: p,
    clipsQuality: {
      resolution: h.ApplicationStreamResolutions.RESOLUTION_1080,
      frameRate: h.ApplicationStreamFPS.FPS_30
    },
    clipsLength: f.ClipsLengthSettings.SECONDS_30,
    remindersEnabled: !0,
    decoupledClipsEnabled: !1,
    viewerClipsEnabled: !0,
    viewerConnectivity: f.ClipsViewerConnectivitySettings.ALL
  },
  v = {
    clipsSettings: C,
    hardwareClassification: null,
    hardwareClassificationForDecoupled: null,
    hardwareClassificationVersion: 0,
    newClipIds: [],
    hasClips: !1
  };
async function A() {
  if (v.clipsSettings.storageLocation !== p || null == s.default || null == s.default.remoteApp) return;
  let e = await s.default.remoteApp.getPath("documents");
  v.clipsSettings.storageLocation = e, N.emitChange()
}
class R extends i.default.DeviceSettingsStore {
  initialize(e) {
    null != e && (v = e), A(), this.waitFor(u.default)
  }
  getClips() {
    return _
  }
  getPendingClips() {
    return S
  }
  getUserAgnosticState() {
    return v
  }
  getSettings() {
    return v.clipsSettings
  }
  getLastClipsSession() {
    return g
  }
  getClipsWarningShown(e) {
    return T === e
  }
  getHardwareClassification() {
    return v.hardwareClassification
  }
  getHardwareClassificationForDecoupled() {
    return v.hardwareClassificationForDecoupled
  }
  getHardwareClassificationVersion() {
    return v.hardwareClassificationVersion
  }
  getIsAtMaxSaveClipOperations() {
    return m >= f.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS
  }
  isClipsEnabledForUser(e) {
    var t, n;
    return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
  }
  isVoiceRecordingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
  }
  isViewerClippingAllowedForUser(e) {
    var t, n;
    return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
  }
  hasClips() {
    return v.hasClips
  }
  getNewClipIds() {
    return v.newClipIds
  }
}
R.displayName = "ClipsStore", R.persistKey = "ClipsStore", R.migrations = [e => ({
  clipsSettings: null != e ? e : C,
  newClipsCount: 0
}), e => {
  let t = {
    ...C,
    ...e.clipsSettings
  };
  return {
    ...e,
    clipsSettings: t
  }
}, e => {
  var t;
  return {
    ...e,
    newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
  }
}, e => {
  var t, n;
  return {
    ...e,
    hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
    hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
  }
}, e => {
  var t;
  return {
    ...e,
    hasClips: null !== (t = e.hasClips) && void 0 !== t && t
  }
}, e => ({
  ...e,
  clipsSettings: {
    ...e.clipsSettings,
    decoupledClipsEnabled: C.decoupledClipsEnabled
  }
}), e => {
  var t;
  return {
    ...e,
    hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
  }
}, e => {
  let t = null != l.default && l.default.getHardwareH264();
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      clipsEnabled: !!t && e.clipsSettings.clipsEnabled,
      decoupledClipsEnabled: !!t && e.clipsSettings.decoupledClipsEnabled
    }
  }
}, e => {
  var t;
  return {
    ...e,
    newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
    newClipIDs: void 0
  }
}, e => ({
  ...e,
  clipsSettings: {
    ...e.clipsSettings,
    clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? C.clipsQuality : e.clipsSettings.clipsQuality
  }
}), e => {
  var t;
  return {
    ...e,
    clipsSettings: {
      ...e.clipsSettings,
      remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : C.remindersEnabled
    }
  }
}];
let N = new R(r.default, {
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    v = {
      ...v,
      clipsSettings: {
        ...v.clipsSettings,
        ...t
      }
    }
  },
  CLIPS_SAVE_CLIP: function(e) {
    var t, n;
    let {
      clip: i
    } = e;
    m = Math.max(m - 1, 0), g = {
      applicationName: i.applicationName,
      ended: !1,
      ...g,
      newClipIds: [...null !== (t = null == g ? void 0 : g.newClipIds) && void 0 !== t ? t : [], i.id]
    }, v = {
      ...v,
      newClipIds: [...null !== (n = v.newClipIds) && void 0 !== n ? n : [], i.id]
    }, S = S.filter(e => {
      let {
        id: t
      } = e;
      return t !== i.id
    }), _ = [i, ..._], v.hasClips = !0
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
    let {
      clip: t
    } = e;
    S = [t, ...S]
  },
  CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
    let {
      clipId: t
    } = e;
    S = S.filter(e => {
      let {
        id: n
      } = e;
      return n !== t
    })
  },
  CLIPS_SAVE_CLIP_START: function() {
    m += 1
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    m = Math.max(m - 1, 0)
  },
  STREAM_START: function(e) {
    let {
      sourceName: t,
      pid: n
    } = e;
    if (!v.clipsSettings.clipsEnabled) return !1;
    let i = t;
    if (null != n) {
      var r;
      let e = u.default.getGameForPID(n);
      i = null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : i
    }
    if (null == i || "" === i) return !1;
    g = {
      applicationName: i,
      newClipIds: [],
      ended: !1
    }
  },
  STREAM_STOP: function(e) {
    let {
      streamKey: t
    } = e;
    if (null == g || (0, a.decodeStreamKey)(t).ownerId !== o.default.getId()) return !1;
    g = 0 === g.newClipIds.length ? null : {
      ...g,
      ended: !0
    }
  },
  CLIPS_CLEAR_CLIPS_SESSION: function() {
    if (null == g) return !1;
    g = null
  },
  CLIPS_CLEAR_NEW_CLIP_IDS: function() {
    v.newClipIds = []
  },
  CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
    v.hasClips = e.clips.length > 0, _ = e.clips
  },
  CLIPS_DELETE_CLIP: function(e) {
    0 === (_ = _.filter(t => {
      let {
        filepath: n
      } = t;
      return n !== e.filepath
    })).length && (v.hasClips = !1)
  },
  CLIPS_UPDATE_METADATA: function(e) {
    let {
      clip: t
    } = e;
    for (let [e, n] of _.entries())
      if (n.id === t.id) {
        _[e] = t, _ = [..._];
        return
      }
  },
  RTC_CONNECTION_FLAGS: function(e) {
    I[e.userId] = {
      clipsEnabled: (0, c.hasFlag)(e.flags, E.VoiceFlags.CLIPS_ENABLED),
      allowVoiceRecording: (0, c.hasFlag)(e.flags, E.VoiceFlags.ALLOW_VOICE_RECORDING),
      allowAnyViewerClips: (0, c.hasFlag)(e.flags, E.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS)
    }
  },
  CLIPS_SHOW_CALL_WARNING: function(e) {
    let {
      channelId: t
    } = e;
    T = t
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    t !== T && (T = null)
  },
  CLIPS_CLASSIFY_HARDWARE: function(e) {
    let {
      classification: t
    } = e, n = v.hardwareClassification;
    v.hardwareClassificationVersion = f.CLIPS_HARDWARE_CLASSIFICATION_VERSION, v.hardwareClassification = t, v.hardwareClassification === d.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== d.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (v.clipsSettings.clipsEnabled = !0);
    let i = v.hardwareClassificationForDecoupled;
    v.hardwareClassificationForDecoupled = t, v.hardwareClassificationForDecoupled === d.ClipsHardwareClassification.MEETS_AUTO_ENABLE && i !== d.ClipsHardwareClassification.MEETS_AUTO_ENABLE && v.clipsSettings.clipsEnabled && (v.clipsSettings.decoupledClipsEnabled = !0)
  },
  CLIPS_INIT: function(e) {
    let {
      applicationName: t
    } = e;
    if (!v.clipsSettings.clipsEnabled) return !1;
    g = {
      applicationName: t,
      newClipIds: [],
      ended: !1
    }
  }
});
var O = N
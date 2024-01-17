"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var s = n("913144"),
  u = n("504385"),
  a = n("439141"),
  i = n("533222"),
  d = n("42887"),
  o = n("599110"),
  c = n("709681"),
  p = n("12307"),
  r = n("49111"),
  l = n("353927");

function f() {
  (0, c.playSound)("mention3")
}

function _(e, t, n, s, u) {
  if (t === n) return;
  let a = e[t],
    d = e[n];
  o.default.track(r.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
    device_from_name: i.default.getCertifiedDeviceName(t, null != a ? a.name : ""),
    device_to_name: i.default.getCertifiedDeviceName(n, null != d ? d.name : ""),
    device_type: s,
    device_is_certified: i.default.isCertified(n),
    location: u
  })
}
let m = {
  isNotSupported: () => !1,
  enable: e => Promise.resolve(!0),
  trackToggleSelfMute(e) {}
};
m = n("412905");
let {
  enable: E,
  isNotSupported: S,
  trackToggleSelfMute: g
} = m;
var A = {
  enable: E,
  toggleSelfMute() {
    let {
      context: e = l.MediaEngineContextTypes.DEFAULT,
      syncRemote: t = !0,
      usedKeybind: n = !1
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return S() ? Promise.resolve() : (g({
      usedKeybind: n
    }), d.default.isEnabled()) ? s.default.dispatch({
      type: "AUDIO_TOGGLE_SELF_MUTE",
      context: e,
      syncRemote: t
    }) : this.enable(!0)
  },
  setTemporarySelfMute(e) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
      mute: e
    })
  },
  toggleSelfDeaf() {
    let {
      context: e = l.MediaEngineContextTypes.DEFAULT,
      syncRemote: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    !S() && s.default.dispatch({
      type: "AUDIO_TOGGLE_SELF_DEAF",
      context: e,
      syncRemote: t
    })
  },
  toggleLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MediaEngineContextTypes.DEFAULT;
    !S() && s.default.dispatch({
      type: "AUDIO_TOGGLE_LOCAL_MUTE",
      context: t,
      userId: e
    })
  },
  toggleLocalSoundboardMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.MediaEngineContextTypes.DEFAULT;
    s.default.dispatch({
      type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
      context: t,
      userId: e
    })
  },
  setDisableLocalVideo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.MediaEngineContextTypes.DEFAULT,
      u = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !S() && s.default.dispatch({
      type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
      context: n,
      userId: e,
      videoToggleState: t,
      persist: u,
      isAutomatic: a
    })
  },
  setLocalVolume(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.MediaEngineContextTypes.DEFAULT;
    s.default.dispatch({
      type: "AUDIO_SET_LOCAL_VOLUME",
      context: n,
      userId: e,
      volume: (0, u.snapVolumeToDefault)(t, n)
    })
  },
  setLocalPan(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.MediaEngineContextTypes.DEFAULT;
    s.default.dispatch({
      type: "AUDIO_SET_LOCAL_PAN",
      context: u,
      userId: e,
      left: t,
      right: n
    })
  },
  setMode(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.MediaEngineContextTypes.DEFAULT;
    !S() && s.default.dispatch({
      type: "AUDIO_SET_MODE",
      context: n,
      mode: e,
      options: {
        ...d.default.getModeOptions(n),
        ...t
      }
    })
  },
  setInputVolume(e) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_INPUT_VOLUME",
      volume: e
    })
  },
  setOutputVolume(e) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_OUTPUT_VOLUME",
      volume: e
    })
  },
  setInputDevice(e, t) {
    if (!S()) {
      if (null != t) {
        let n = d.default.getInputDevices(),
          s = d.default.getInputDeviceId();
        _(n, s, e, "Audio Input", t)
      }
      s.default.dispatch({
        type: "AUDIO_SET_INPUT_DEVICE",
        id: e
      }), f()
    }
  },
  setOutputDevice(e, t) {
    if (!S()) {
      if (null != t) {
        let n = d.default.getOutputDevices(),
          s = d.default.getOutputDeviceId();
        _(n, s, e, "Audio Output", t)
      }
      s.default.dispatch({
        type: "AUDIO_SET_OUTPUT_DEVICE",
        id: e
      }), f()
    }
  },
  setVideoDevice(e, t) {
    if (!S()) {
      if (null != t) {
        let n = d.default.getVideoDevices(),
          s = d.default.getVideoDeviceId();
        _(n, s, e, "Video", t)
      }
      s.default.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
        id: e
      })
    }
  },
  setEchoCancellation(e, t) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_ECHO_CANCELLATION",
      enabled: e,
      location: t
    })
  },
  setLoopback(e) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_LOOPBACK",
      enabled: e
    })
  },
  setNoiseSuppression(e, t) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_NOISE_SUPPRESSION",
      enabled: e,
      location: t
    })
  },
  setNoiseCancellation(e, t) {
    !S() && (s.default.dispatch({
      type: "AUDIO_SET_NOISE_CANCELLATION",
      enabled: e,
      location: t
    }), s.default.dispatch({
      type: "AUDIO_SET_NOISE_SUPPRESSION",
      enabled: !e,
      location: t
    }))
  },
  setAutomaticGainControl(e, t) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
      enabled: e,
      location: t
    })
  },
  setExperimentalEncoders(e) {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
      enabled: e
    })
  },
  setHardwareH264(e) {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_HARDWARE_H264",
      enabled: e
    })
  },
  setAttenuation(e, t, n) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_ATTENUATION",
      attenuation: e,
      attenuateWhileSpeakingSelf: t,
      attenuateWhileSpeakingOthers: n
    })
  },
  setQoS(e) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_QOS",
      enabled: e
    })
  },
  reset() {
    !S() && s.default.dispatch({
      type: "AUDIO_RESET"
    })
  },
  setSilenceWarning(e) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
      enabled: e
    })
  },
  setDebugLogging(e) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_DEBUG_LOGGING",
      enabled: e
    })
  },
  setVideoHook(e) {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
      enabled: e
    })
  },
  setExperimentalSoundshare(e) {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
      enabled: e
    })
  },
  setAudioSubsystem(e) {
    !S() && s.default.dispatch({
      type: "AUDIO_SET_SUBSYSTEM",
      subsystem: e
    })
  },
  setVideoEnabled(e) {
    (0, a.applyInitialVideoBackgroundOption)(), s.default.dispatch({
      type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
      enabled: e
    })
  },
  setGoLiveSource(e) {
    (null == e ? void 0 : e.qualityOptions) != null && (0, p.trackStreamSettingsUpdate)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), s.default.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: e
    })
  },
  setOpenH264(e) {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_OPEN_H264",
      enabled: e
    })
  },
  setAV1Enabled(e) {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_AV1",
      enabled: e
    })
  },
  setH265Enabled(e) {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_H265",
      enabled: e
    })
  },
  setAecDump(e) {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_AEC_DUMP",
      enabled: e
    })
  },
  interact() {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
      required: !1
    })
  },
  enableSoundshare() {
    !S() && s.default.dispatch({
      type: "MEDIA_ENGINE_ENABLE_SOUNDSHARE"
    })
  }
}
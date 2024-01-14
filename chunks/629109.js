"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("913144"),
  i = n("504385"),
  a = n("439141"),
  u = n("533222"),
  o = n("42887"),
  d = n("599110"),
  r = n("709681"),
  l = n("12307"),
  c = n("49111"),
  p = n("353927");

function f() {
  (0, r.playSound)("mention3")
}

function _(e, t, n, s, i) {
  if (t === n) return;
  let a = e[t],
    o = e[n];
  d.default.track(c.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
    device_from_name: u.default.getCertifiedDeviceName(t, null != a ? a.name : ""),
    device_to_name: u.default.getCertifiedDeviceName(n, null != o ? o.name : ""),
    device_type: s,
    device_is_certified: u.default.isCertified(n),
    location: i
  })
}
let m = {
  isNotSupported: () => !1,
  enable: e => Promise.resolve(!0),
  trackToggleSelfMute(e) {}
};
m = n("412905");
let {
  enable: h,
  isNotSupported: E,
  trackToggleSelfMute: g
} = m;
var S = {
  enable: h,
  toggleSelfMute() {
    let {
      context: e = p.MediaEngineContextTypes.DEFAULT,
      syncRemote: t = !0,
      usedKeybind: n = !1
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return E() ? Promise.resolve() : (g({
      usedKeybind: n
    }), o.default.isEnabled()) ? s.default.dispatch({
      type: "AUDIO_TOGGLE_SELF_MUTE",
      context: e,
      syncRemote: t
    }) : this.enable(!0)
  },
  setTemporarySelfMute(e) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
      mute: e
    })
  },
  toggleSelfDeaf() {
    let {
      context: e = p.MediaEngineContextTypes.DEFAULT,
      syncRemote: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    !E() && s.default.dispatch({
      type: "AUDIO_TOGGLE_SELF_DEAF",
      context: e,
      syncRemote: t
    })
  },
  toggleLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MediaEngineContextTypes.DEFAULT;
    !E() && s.default.dispatch({
      type: "AUDIO_TOGGLE_LOCAL_MUTE",
      context: t,
      userId: e
    })
  },
  toggleLocalSoundboardMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MediaEngineContextTypes.DEFAULT;
    s.default.dispatch({
      type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
      context: t,
      userId: e
    })
  },
  setDisableLocalVideo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.MediaEngineContextTypes.DEFAULT,
      i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !E() && s.default.dispatch({
      type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
      context: n,
      userId: e,
      videoToggleState: t,
      persist: i,
      isAutomatic: a
    })
  },
  setLocalVolume(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.MediaEngineContextTypes.DEFAULT;
    s.default.dispatch({
      type: "AUDIO_SET_LOCAL_VOLUME",
      context: n,
      userId: e,
      volume: (0, i.snapVolumeToDefault)(t, n)
    })
  },
  setLocalPan(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : p.MediaEngineContextTypes.DEFAULT;
    s.default.dispatch({
      type: "AUDIO_SET_LOCAL_PAN",
      context: i,
      userId: e,
      left: t,
      right: n
    })
  },
  setMode(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.MediaEngineContextTypes.DEFAULT;
    !E() && s.default.dispatch({
      type: "AUDIO_SET_MODE",
      context: n,
      mode: e,
      options: {
        ...o.default.getModeOptions(n),
        ...t
      }
    })
  },
  setInputVolume(e) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_INPUT_VOLUME",
      volume: e
    })
  },
  setOutputVolume(e) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_OUTPUT_VOLUME",
      volume: e
    })
  },
  setInputDevice(e, t) {
    if (!E()) {
      if (null != t) {
        let n = o.default.getInputDevices(),
          s = o.default.getInputDeviceId();
        _(n, s, e, "Audio Input", t)
      }
      s.default.dispatch({
        type: "AUDIO_SET_INPUT_DEVICE",
        id: e
      }), f()
    }
  },
  setOutputDevice(e, t) {
    if (!E()) {
      if (null != t) {
        let n = o.default.getOutputDevices(),
          s = o.default.getOutputDeviceId();
        _(n, s, e, "Audio Output", t)
      }
      s.default.dispatch({
        type: "AUDIO_SET_OUTPUT_DEVICE",
        id: e
      }), f()
    }
  },
  setVideoDevice(e, t) {
    if (!E()) {
      if (null != t) {
        let n = o.default.getVideoDevices(),
          s = o.default.getVideoDeviceId();
        _(n, s, e, "Video", t)
      }
      s.default.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
        id: e
      })
    }
  },
  setEchoCancellation(e, t) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_ECHO_CANCELLATION",
      enabled: e,
      location: t
    })
  },
  setLoopback(e) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_LOOPBACK",
      enabled: e
    })
  },
  setNoiseSuppression(e, t) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_NOISE_SUPPRESSION",
      enabled: e,
      location: t
    })
  },
  setNoiseCancellation(e, t) {
    !E() && (s.default.dispatch({
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
    !E() && s.default.dispatch({
      type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
      enabled: e,
      location: t
    })
  },
  setExperimentalEncoders(e) {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
      enabled: e
    })
  },
  setHardwareH264(e) {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_HARDWARE_H264",
      enabled: e
    })
  },
  setAttenuation(e, t, n) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_ATTENUATION",
      attenuation: e,
      attenuateWhileSpeakingSelf: t,
      attenuateWhileSpeakingOthers: n
    })
  },
  setQoS(e) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_QOS",
      enabled: e
    })
  },
  reset() {
    !E() && s.default.dispatch({
      type: "AUDIO_RESET"
    })
  },
  setSilenceWarning(e) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
      enabled: e
    })
  },
  setDebugLogging(e) {
    !E() && s.default.dispatch({
      type: "AUDIO_SET_DEBUG_LOGGING",
      enabled: e
    })
  },
  setVideoHook(e) {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
      enabled: e
    })
  },
  setExperimentalSoundshare(e) {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
      enabled: e
    })
  },
  setAudioSubsystem(e) {
    !E() && s.default.dispatch({
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
    (null == e ? void 0 : e.qualityOptions) != null && (0, l.trackStreamSettingsUpdate)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), s.default.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: e
    })
  },
  setOpenH264(e) {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_OPEN_H264",
      enabled: e
    })
  },
  setAV1Enabled(e) {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_AV1",
      enabled: e
    })
  },
  setH265Enabled(e) {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_H265",
      enabled: e
    })
  },
  setAecDump(e) {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_SET_AEC_DUMP",
      enabled: e
    })
  },
  interact() {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
      required: !1
    })
  },
  enableSoundshare() {
    !E() && s.default.dispatch({
      type: "MEDIA_ENGINE_ENABLE_SOUNDSHARE"
    })
  }
}
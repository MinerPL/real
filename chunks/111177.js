"use strict";
E.r(_), E.d(_, {
  default: function() {
    return t
  }
}), E("222007");
var t, o = E("773364"),
  n = E("913144"),
  r = E("689988"),
  i = E("49671"),
  a = E("374014"),
  I = E("103979"),
  s = E("271938"),
  T = E("42887"),
  S = E("945956"),
  N = E("205817"),
  O = E("599110"),
  A = E("773336"),
  R = E("56947"),
  l = E("386045"),
  L = E("30591"),
  u = E("18346"),
  C = E("80028"),
  D = E("49111"),
  c = E("706530");
t = class extends r.default {
  handleRTCConnectionState(e) {
    let {
      context: _,
      state: E,
      streamKey: t
    } = e;
    if (!(0, R.areClipsEnabled)() || E !== D.RTCConnectionStates.RTC_CONNECTED) return;
    let n = s.default.getId();
    if (_ === o.MediaEngineContextTypes.DEFAULT) return this.applyUserVoiceRecording(n);
    if (_ === o.MediaEngineContextTypes.STREAM && null != t) {
      let {
        ownerId: e
      } = (0, a.decodeStreamKey)(t);
      if (e !== n) return;
      let _ = N.default.getRTCConnection(t);
      if (null == _) return;
      this.applyStreamRecording(n, _)
    }
  }
  handleRTCUserCreate(e) {
    let {
      userId: _,
      context: E
    } = e;
    E === o.MediaEngineContextTypes.DEFAULT && this.applyUserVoiceRecording(_)
  }
  handleRTCConnectionFlags(e) {
    let {
      userId: _,
      channelId: E,
      guildId: t
    } = e;
    this.maybeShowClipsWarning(_), this.applyUserVoiceRecording(_);
    let o = N.default.getRTCConnection(a.encodeStreamKey({
      streamType: null != t ? c.StreamTypes.GUILD : c.StreamTypes.CALL,
      ownerId: _,
      channelId: E,
      guildId: t
    }));
    null != o && this.applyStreamRecording(_, o)
  }
  handleClipsInitFailure(e) {
    let {
      applicationName: _,
      errMsg: E
    } = e;
    O.default.track(D.AnalyticEvents.CLIPS_INIT_FAILURE, {
      application_name: _,
      error_message: E
    })
  }
  maybeShowClipsWarning(e) {
    let _ = S.default.getChannelId();
    if (!(null == _ || l.default.getClipsWarningShown(_)) && e !== s.default.getId()) l.default.isClipsEnabledForUser(e) && (n.default.dispatch({
      type: "CLIPS_SHOW_CALL_WARNING",
      channelId: _
    }), this.showClipsToast())
  }
  handlePostConnectionOpen() {
    if (!(0, u.default)(T.default)) return;
    this.applyNativeClipsSettings();
    let e = (0, R.areClipsEnabled)();
    if (!e) {
      let e = l.default.getSettings();
      e.clipsEnabled && this.disableClips();
      return
    }(null == l.default.getHardwareClassification() || null == l.default.getHardwareClassificationForDecoupled() || l.default.getHardwareClassificationVersion() !== C.CLIPS_HARDWARE_CLASSIFICATION_VERSION) && this.classifyHardwareAndTrack().then(e => {
      n.default.dispatch({
        type: "CLIPS_CLASSIFY_HARDWARE",
        classification: e
      })
    })
  }
  handleRTCConnectionVideo(e) {
    let {
      userId: _,
      context: E,
      channelId: t,
      guildId: n
    } = e;
    if (E !== o.MediaEngineContextTypes.STREAM || !(0, u.default)(T.default)) return;
    let r = N.default.getRTCConnection(a.encodeStreamKey({
      streamType: null != n ? c.StreamTypes.GUILD : c.StreamTypes.CALL,
      ownerId: _,
      channelId: t,
      guildId: n
    }));
    null != r && this.applyStreamRecording(_, r)
  }
  async classifyHardwareAndTrack() {
    try {
      let e = await i.default.processUtils.getSystemInfo(),
        _ = this.classifyHardware(e);
      return O.default.track(D.AnalyticEvents.CLIPS_HARDWARE_CLASSIFICATION, {
        classification: _,
        version: C.CLIPS_HARDWARE_CLASSIFICATION_VERSION,
        gpu_models: e.gpus.map(e => {
          let {
            model: _
          } = e;
          return _
        })
      }), _
    } catch (e) {
      return L.ClipsHardwareClassification.UNKNOWN
    }
  }
  classifyHardware(e) {
    if ((0, A.isWindows)()) {
      let _ = e.gpus.some(e => {
          let {
            model: _
          } = e;
          return C.WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX.test(_)
        }),
        E = e.gpus.some(e => {
          let {
            model: _
          } = e;
          return C.WINDOWS_HARDWARE_MINIMUM_GPU_REGEX.test(_)
        });
      return _ ? L.ClipsHardwareClassification.MEETS_AUTO_ENABLE : E ? L.ClipsHardwareClassification.MEETS_MINIMUM : L.ClipsHardwareClassification.BELOW_MINIMUM
    }
    if ((0, A.isMac)()) {
      let _ = e.gpus.some(e => {
        let {
          model: _
        } = e;
        return C.OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX.test(_)
      });
      return _ ? L.ClipsHardwareClassification.MEETS_AUTO_ENABLE : L.ClipsHardwareClassification.MEETS_MINIMUM
    }
    return L.ClipsHardwareClassification.UNKNOWN
  }
  applyUserVoiceRecording(e) {
    if (!(0, u.default)(T.default)) return;
    let _ = S.default.getRTCConnection();
    if (null == _) return;
    if (e === s.default.getId()) {
      _.setClipRecordUser(e, "audio", l.default.getSettings().clipsEnabled);
      return
    }
    let E = l.default.isVoiceRecordingAllowedForUser(e);
    _.setClipRecordUser(e, "audio", E)
  }
  applyStreamRecording(e, _) {
    if (!(0, u.default)(T.default)) return;
    if (s.default.getId() === e) {
      let {
        clipsEnabled: E
      } = l.default.getSettings(), t = (0, R.areClipsEnabled)();
      _.setClipRecordUser(e, "audio", t && E), _.setClipRecordUser(e, "video", t && E);
      return
    }
    let {
      enableViewerClipping: E,
      ignoreSenderPreference: t
    } = I.default.getCurrentConfig({
      location: "ClipsManager:applyStreamRecording"
    });
    if (!E) return;
    let o = t || l.default.isViewerClippingAllowedForUser(e);
    this.applyNativeClipsSettings(), _.setClipRecordUser(e, "audio", o), _.setClipRecordUser(e, "video", o)
  }
  disableClips() {}
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: e => this.handlePostConnectionOpen(),
      RTC_CONNECTION_FLAGS: e => this.handleRTCConnectionFlags(e),
      RTC_CONNECTION_USER_CREATE: e => this.handleRTCUserCreate(e),
      CLIPS_INIT_FAILURE: e => this.handleClipsInitFailure(e),
      CLIPS_SETTINGS_UPDATE: e => this.applyNativeClipsSettings(e),
      STREAM_START: () => this.applyNativeClipsSettings(),
      RUNNING_GAMES_CHANGE: e => this.fireClipsInitEventHelper(e),
      CLIPS_RESTART: () => this.fireClipsInitEvent(),
      RTC_CONNECTION_VIDEO: e => this.handleRTCConnectionVideo(e),
      RTC_CONNECTION_STATE: e => this.handleRTCConnectionState(e),
      MEDIA_ENGINE_SET_HARDWARE_H264: e => this.handleMediaEngineSetHardwareH264(e)
    }
  }
}
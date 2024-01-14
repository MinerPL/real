"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("629109"),
  s = n("42887"),
  i = n("697218"),
  l = n("861309"),
  r = n("716724"),
  o = n("56245"),
  u = n("492249"),
  d = n("49111"),
  c = {
    [d.RPCCommands.SET_USER_VOICE_SETTINGS]: {
      scope: {
        [u.RPC_SCOPE_CONFIG.ANY]: [d.OAuth2Scopes.RPC, d.OAuth2Scopes.RPC_VOICE_WRITE]
      },
      validation: e => (0, r.default)(e).required().keys({
        user_id: e.string().required(),
        pan: (0, r.default)(e).keys({
          left: e.number().min(0).max(1).required(),
          right: e.number().min(0).max(1).required()
        }),
        volume: e.number().min(0).max(200),
        mute: e.boolean()
      }),
      handler(e) {
        let {
          args: {
            user_id: t,
            pan: n,
            volume: r,
            mute: o
          }
        } = e, d = i.default.getCurrentUser();
        if (null == i.default.getUser(t) || (null == d ? void 0 : d.id) === t) throw new l.default(u.RPCErrors.INVALID_USER, "Invalid user id: ".concat(t));
        if (null != n && a.default.setLocalPan(t, n.left, n.right), null != r && a.default.setLocalVolume(t, r), null != o) {
          let e = s.default.isLocalMute(t);
          (e && !o || !e && o) && a.default.toggleLocalMute(t)
        }
        return {
          user_id: t,
          pan: s.default.getLocalPan(t),
          volume: s.default.getLocalVolume(t),
          mute: s.default.isLocalMute(t)
        }
      }
    },
    [d.RPCCommands.GET_VOICE_SETTINGS]: {
      scope: {
        [u.RPC_SCOPE_CONFIG.ANY]: [d.OAuth2Scopes.RPC, d.OAuth2Scopes.RPC_VOICE_READ]
      },
      handler: () => (0, o.getDeprecatedVoiceSettings)()
    },
    [d.RPCCommands.SET_VOICE_SETTINGS]: {
      scope: {
        [u.RPC_SCOPE_CONFIG.ANY]: [d.OAuth2Scopes.RPC, d.OAuth2Scopes.RPC_VOICE_WRITE]
      },
      validation: e => (0, r.default)(e).required().keys({
        input: (0, r.default)(e).keys({
          device_id: e.string().valid(Object.keys(s.default.getInputDevices())),
          volume: e.number().min(0).max(100)
        }),
        output: (0, r.default)(e).keys({
          device_id: e.string().valid(Object.keys(s.default.getOutputDevices())),
          volume: e.number().min(0).max(200)
        }),
        mode: (0, r.default)(e).keys({
          type: e.string().valid(Object.keys(d.InputModes)),
          auto_threshold: e.boolean(),
          threshold: e.number().min(-100).max(0),
          shortcut: e.array().items((0, r.default)(e).keys({
            type: e.number().min(0).max(3).required(),
            code: e.number().required(),
            name: e.string()
          })),
          delay: e.number().min(0).max(2e3)
        }),
        automatic_gain_control: e.boolean(),
        echo_cancellation: e.boolean(),
        noise_suppression: e.boolean(),
        qos: e.boolean(),
        silence_warning: e.boolean(),
        deaf: e.boolean(),
        mute: e.boolean()
      }),
      handler(e) {
        let {
          args: {
            input: t,
            output: n,
            mode: i,
            automatic_gain_control: l,
            echo_cancellation: r,
            noise_suppression: u,
            qos: d,
            silence_warning: c,
            deaf: E,
            mute: f
          }
        } = e;
        if (t && (null != t.device_id && a.default.setInputDevice(t.device_id), null != t.volume && a.default.setInputVolume(t.volume)), n && (null != n.device_id && a.default.setOutputDevice(n.device_id), null != n.volume && a.default.setOutputVolume(n.volume)), i) {
          let e = s.default.getMode(),
            t = s.default.getModeOptions();
          null != i.type && (e = i.type), null != i.auto_threshold && (t.autoThreshold = i.auto_threshold), null != i.threshold && (t.threshold = i.threshold), null != i.shortcut && (t.shortcut = i.shortcut.map(e => [e.type, e.code])), null != i.delay && (t.delay = i.delay), a.default.setMode(e, t)
        }
        if (null != l && a.default.setAutomaticGainControl(l), null != r && a.default.setEchoCancellation(r), null != u && a.default.setNoiseSuppression(u), null != d && a.default.setQoS(d), null != c && a.default.setSilenceWarning(c), null != E) {
          let e = s.default.isSelfDeaf();
          (e && !E || !e && E) && a.default.toggleSelfDeaf()
        }
        if (null != f) {
          let e = s.default.isSelfMute();
          (e && !f || !e && f) && a.default.toggleSelfMute()
        }
        return (0, o.getDeprecatedVoiceSettings)()
      }
    }
  }
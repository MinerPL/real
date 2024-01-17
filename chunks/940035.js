"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var a = n("913144"),
  s = n("629109"),
  i = n("539405"),
  l = n("987317"),
  r = n("990766"),
  o = n("52289"),
  u = n("316272"),
  d = n("56947"),
  c = n("803725"),
  f = n("374014"),
  E = n("712258"),
  _ = n("393414"),
  h = n("245463"),
  C = n("570413"),
  I = n("373469"),
  T = n("42887"),
  S = n("102985"),
  m = n("860957"),
  p = n("901165"),
  A = n("599110"),
  g = n("360782"),
  N = n("49111"),
  R = n("353927");
let O = {
  [N.GlobalKeybindActions.TOGGLE_PRIORITY_SPEAKER]: {
    onTrigger() {},
    keyEvents: {}
  },
  [N.GlobalKeybindActions.UNASSIGNED]: {
    onTrigger() {},
    keyEvents: {}
  },
  [N.GlobalKeybindActions.PUSH_TO_TALK]: {
    onTrigger(e, t) {
      T.default.getMode(t.context) === N.InputModes.PUSH_TO_TALK && (O[N.GlobalKeybindActions.PUSH_TO_TALK].isPressed = e, T.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !1), t.context))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [N.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: {
    onTrigger(e) {
      T.default.getMode() === N.InputModes.PUSH_TO_TALK && (O[N.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY].isPressed = e, T.default.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !0), R.MediaEngineContextTypes.DEFAULT))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [N.GlobalKeybindActions.PUSH_TO_MUTE]: {
    onTrigger(e) {
      if (T.default.getMode() === N.InputModes.VOICE_ACTIVITY) !T.default.isSelfDeaf() && (O[N.GlobalKeybindActions.PUSH_TO_MUTE].isPressed = e, s.default.setTemporarySelfMute(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    },
    isPressed: !1
  },
  [N.GlobalKeybindActions.TOGGLE_MUTE]: {
    onTrigger: () => s.default.toggleSelfMute({
      usedKeybind: !0
    }),
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_DEAFEN]: {
    onTrigger() {
      s.default.toggleSelfDeaf()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_VOICE_MODE]: {
    onTrigger() {
      let e = T.default.getMode() === N.InputModes.PUSH_TO_TALK ? N.InputModes.VOICE_ACTIVITY : N.InputModes.PUSH_TO_TALK;
      s.default.setMode(e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_OVERLAY]: {
    onTrigger() {
      let e = m.default.enabled;
      i.default.setEnabled(!e)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK]: {
    onTrigger(e) {
      let t = (0, g.default)();
      null != t && (e ? i.default.setUILocked(!p.default.isUILocked(t), t) : i.default.setInputLocked(!m.default.isInputLocked(t), t))
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [N.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
    onTrigger() {
      let e = m.default.getFocusedPID(),
        t = null != e;
      null != e && t && p.default.isPinned(N.OverlayWidgets.TEXT) && m.default.isReady(e) && m.default.isInputLocked(e) && i.default.activateRegion(N.OverlayActiveRegions.TEXT_WIDGET)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING]: {
    onTrigger() {
      let e = I.default.getCurrentUserActiveStream();
      if (null != e) return (0, r.stopStream)((0, f.encodeStreamKey)(e));
      (0, E.default)()
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: {
    onTrigger() {
      o.default.setEnabled(!S.default.enabled)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.NAVIGATE_BACK]: {
    onTrigger: () => (0, _.back)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [N.GlobalKeybindActions.NAVIGATE_FORWARD]: {
    onTrigger: () => (0, _.forward)(),
    keyEvents: {
      keyup: !0,
      keydown: !1,
      focused: !0,
      blurred: !1
    }
  },
  [N.GlobalKeybindActions.SOUNDBOARD]: {
    onTrigger: () => {
      if (!(0, h.canSelectedVoiceChannelUseSoundboard)()) return;
      let e = (0, g.default)();
      null != e && (p.default.isUILocked(e) ? (0, C.openSoundboardInOverlay)(!0, e) : (0, C.closeSoundboardInOverlay)(e))
    },
    keyEvents: {
      keyup: !0,
      keydown: !1
    }
  },
  [N.GlobalKeybindActions.SOUNDBOARD_HOLD]: {
    onTrigger: e => {
      if (!(0, h.canSelectedVoiceChannelUseSoundboard)()) return;
      let t = (0, g.default)();
      if (null != t) {
        e ? (0, C.openSoundboardInOverlay)(!1, t) : (0, C.closeSoundboardInOverlay)(t);
        return
      }
    },
    keyEvents: {
      keyup: !0,
      keydown: !0
    }
  },
  [N.GlobalKeybindActions.SAVE_CLIP]: {
    onTrigger: () => {
      let e = (0, d.areClipsEnabled)();
      e && (A.default.track(N.AnalyticEvents.CLIP_SAVE_KEYBIND_PRESSED), (0, c.saveClip)())
    },
    keyEvents: {
      keyup: !1,
      keydown: !0
    }
  },
  [N.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL]: {
    onTrigger(e, t) {
      let {
        params: {
          channelId: n
        }
      } = t;
      null != n && l.default.selectVoiceChannel(n)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  },
  [N.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL]: {
    onTrigger() {
      l.default.selectVoiceChannel(null)
    },
    keyEvents: {
      keyup: !0,
      keydown: !1,
      blurred: !0,
      focused: !0
    }
  }
};
class L extends u.default {
  _initialize() {
    a.default.wait(() => a.default.dispatch({
      type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
      keybinds: O
    }))
  }
  _terminate() {}
}
var v = new L
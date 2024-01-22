    "use strict";
    t.r(a), t.d(a, {
      default: function() {
        return O
      }
    }), t("222007");
    var d = t("714617"),
      s = t.n(d),
      n = t("917351"),
      c = t.n(n),
      i = t("913144"),
      r = t("629109"),
      o = t("987317"),
      f = t("316272"),
      l = t("830210"),
      u = t("289180"),
      p = t("289656"),
      b = t("727284"),
      h = t("42203"),
      j = t("42887"),
      m = t("18494"),
      _ = t("773336"),
      E = t("50885"),
      g = t("49111"),
      I = t("782340");
    class T extends f.default {
      _initialize() {
        this.isSupported && (i.default.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), i.default.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), i.default.subscribe("START_SESSION", this.handleViewUpdate), i.default.subscribe("CONNECTION_OPEN", this.handleViewUpdate), i.default.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), i.default.subscribe("CALL_CREATE", this.handleViewUpdate), i.default.subscribe("CALL_UPDATE", this.handleViewUpdate), i.default.subscribe("CALL_DELETE", this.handleViewUpdate), i.default.subscribe("CHANNEL_DELETE", this.handleViewUpdate), i.default.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), i.default.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), i.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), i.default.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), i.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), E.default.on("THUMBAR_BUTTONS_CLICKED", (e, a) => this.buttonClicked(a)))
      }
      _terminate() {
        this.isSupported && (i.default.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), i.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), i.default.unsubscribe("START_SESSION", this.handleViewUpdate), i.default.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), i.default.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), i.default.unsubscribe("CALL_CREATE", this.handleViewUpdate), i.default.unsubscribe("CALL_UPDATE", this.handleViewUpdate), i.default.unsubscribe("CALL_DELETE", this.handleViewUpdate), i.default.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), i.default.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), i.default.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), i.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), i.default.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), i.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
      }
      setThumbarButtons(e) {
        !s(this.prevButtons, e) && (this.prevButtons = e, E.default.setThumbarButtons(e))
      }
      constructor(...e) {
        super(...e), this.callbackActions = {
          [E.ThumbarButtonName.VIDEO]: () => {
            j.default.isVideoEnabled() ? r.default.setVideoEnabled(!1) : (0, b.default)(() => r.default.setVideoEnabled(!0), g.AppContext.APP)
          },
          [E.ThumbarButtonName.MUTE]: () => r.default.toggleSelfMute(),
          [E.ThumbarButtonName.DEAFEN]: () => r.default.toggleSelfDeaf(),
          [E.ThumbarButtonName.DISCONNECT]: () => o.default.disconnect()
        }, this.isSupported = (0, _.isMac)() || (0, _.isWindows)(), this.prevButtons = [], this.buttonClicked = e => {
          if (!(e.buttonName in this.callbackActions)) {
            console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
            return
          }
          this.callbackActions[e.buttonName]()
        }, this.handleViewUpdate = c.debounce(() => {
          let e = m.default.getVoiceChannelId();
          if (null == e) {
            this.setThumbarButtons([]);
            return
          }
          let a = j.default.isSelfMute(),
            t = j.default.isSelfDeaf(),
            d = j.default.isVideoEnabled(),
            s = j.default.isVideoAvailable(),
            n = h.default.getChannel(e),
            c = null == n || (0, u.getVideoPermission)(n),
            {
              reachedLimit: i,
              limit: r
            } = null != n ? (0, l.getChannelVideoLimit)(n) : {
              reachedLimit: void 0,
              limit: void 0
            },
            o = (0, p.getVideoButtonLabel)({
              enabled: d,
              join: !1,
              channel: n,
              cameraUnavailable: !s,
              hasPermission: c,
              channelLimit: r,
              channelLimitReached: i
            });
          this.setThumbarButtons([{
            name: E.ThumbarButtonName.VIDEO,
            active: !d,
            tooltip: o,
            flags: s ? [] : ["disabled"]
          }, {
            name: E.ThumbarButtonName.MUTE,
            active: a,
            tooltip: a ? I.default.Messages.UNMUTE : I.default.Messages.MUTE
          }, {
            name: E.ThumbarButtonName.DEAFEN,
            active: t,
            tooltip: t ? I.default.Messages.UNDEAFEN : I.default.Messages.DEAFEN
          }, {
            name: E.ThumbarButtonName.DISCONNECT,
            active: !0,
            tooltip: I.default.Messages.DISCONNECT_SELF
          }])
        }, 100)
      }
    }
    var O = new T
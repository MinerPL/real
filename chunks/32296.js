"use strict";
n.r(t), n.d(t, {
  NotchBackground: function() {
    return _.NotchBackground
  },
  default: function() {
    return m
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  l = n.n(i),
  r = n("446674"),
  o = n("773364"),
  u = n("862337"),
  d = n("77078"),
  c = n("629109"),
  f = n("42887"),
  E = n("945956"),
  _ = n("230962"),
  h = n("599110"),
  C = n("49111"),
  I = n("782340"),
  T = n("626009");
class S extends s.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), f.default.getMediaEngine().removeListener(o.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: n,
      outputDeviceName: a,
      outputVolume: s,
      inputMode: i,
      vadAutoThreshold: l,
      vadThreshold: r,
      location: o,
      isDeafened: u
    } = this.props, d = !1;
    e && !u && (c.default.toggleSelfDeaf(), d = !0), c.default.setLoopback(!0), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: !0,
      isDetectingInput: !0,
      didDeafenUser: d
    }), h.default.track(C.AnalyticEvents.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: n,
      output_device_name: a,
      output_device_volume: s,
      input_mode: i,
      input_sensitivity_is_automatic: l,
      input_sensitivity_threshold: Math.round(r),
      location: o
    })
  }
  _micTestStop() {
    let {
      didDeafenUser: e,
      isMicTesting: t
    } = this.state, {
      isVoiceConnected: n,
      isDeafened: a
    } = this.props;
    if (!!t) n && a && e && c.default.toggleSelfDeaf(), c.default.setLoopback(!1), this.setState({
      isMicTesting: !1,
      didDeafenUser: !1
    }), null != this._micTestStartTime && h.default.track(C.AnalyticEvents.MIC_TESTING_STOPPED, {
      testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
    })
  }
  renderCaption() {
    let {
      captionVoice: e,
      captionNoVoice: t
    } = this.props, {
      isMicTesting: n,
      isDetectingInput: s
    } = this.state;
    return (0, a.jsx)(d.FormText, {
      className: T.micTestCaption,
      type: d.FormText.Types.DESCRIPTION,
      children: n ? s ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: s,
      buttonTest: i,
      buttonStop: l,
      buttonClassName: r,
      buttonColor: o,
      isDeafened: u
    } = this.props, {
      isMicTesting: c,
      volume: f
    } = this.state, E = e && !c ? I.default.Messages.MIC_TEST_VOICE_CHANNEL_WARNING : null;
    return c && e && !u && this._micTestStop(), (0, a.jsxs)("div", {
      className: T.container,
      children: [(0, a.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        className: T.title,
        children: t
      }), null != n && (0, a.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        className: T.description,
        children: n
      }), (0, a.jsxs)("div", {
        className: T.micTest,
        children: [(0, a.jsx)(d.Tooltip, {
          text: E,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, a.jsx)(d.Button, {
              grow: !1,
              onClick: this.handleToggleMicTest,
              onMouseEnter: t,
              onMouseLeave: n,
              size: d.Button.Sizes.SMALL,
              className: r,
              color: o,
              children: c ? l : i
            })
          }
        }), (0, a.jsx)(_.default, {
          progress: c ? f + 100 : 0,
          notchBackground: s
        }), this.renderCaption()]
      })]
    })
  }
  constructor(...e) {
    super(...e), this._initTimeout = new u.Timeout, this._silenceTimeout = new u.Timeout, this._messageTimeout = new u.Timeout, this.state = {
      volume: -100,
      isMicTesting: !1,
      isDetectingInput: !0,
      didDeafenUser: !1
    }, this.setupVoiceActivity = () => {
      f.default.getMediaEngine().on(o.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
    }, this.handleVoiceActivity = e => {
      let {
        isMicTesting: t
      } = this.state;
      if (t && e <= -100) {
        !this._silenceTimeout.isStarted() && this._silenceTimeout.start(2e3, () => {
          this.setState({
            isDetectingInput: !1
          })
        }), this.setState({
          volume: -100
        });
        return
      }
      this._silenceTimeout.stop(), this.setState({
        volume: e,
        isDetectingInput: !0
      })
    }, this.handleToggleMicTest = () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    }
  }
}
var m = r.default.connectStores([E.default, f.default], () => {
  let e = f.default.getInputDeviceId(),
    t = f.default.getInputDevices(),
    n = l.find(t, t => {
      let {
        id: n
      } = t;
      return n === e
    }),
    a = f.default.getOutputDeviceId(),
    s = f.default.getOutputDevices(),
    i = l.find(s, e => {
      let {
        id: t
      } = e;
      return t === a
    }),
    r = f.default.getModeOptions();
  return {
    isVoiceConnected: E.default.isConnected(),
    inputVolume: f.default.getInputVolume(),
    outputVolume: f.default.getOutputVolume(),
    inputMode: f.default.getMode(),
    vadThreshold: r.threshold,
    isDeafened: f.default.isSelfDeaf(),
    vadAutoThreshold: r.autoThreshold,
    inputDeviceName: null != n ? n.name : "",
    outputDeviceName: null != i ? i.name : ""
  }
})(S)
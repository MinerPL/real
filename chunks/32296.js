"use strict";
n.r(t), n.d(t, {
  NotchBackground: function() {
    return _.NotchBackground
  },
  default: function() {
    return N
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
  E = n("42887"),
  f = n("945956"),
  _ = n("230962"),
  h = n("599110"),
  C = n("49111"),
  T = n("782340"),
  I = n("626009");
class S extends s.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), E.default.getMediaEngine().removeListener(o.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
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
      className: I.micTestCaption,
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
      volume: E
    } = this.state, f = e && !c ? T.default.Messages.MIC_TEST_VOICE_CHANNEL_WARNING : null;
    return c && e && !u && this._micTestStop(), (0, a.jsxs)("div", {
      className: I.container,
      children: [(0, a.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        className: I.title,
        children: t
      }), null != n && (0, a.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        className: I.description,
        children: n
      }), (0, a.jsxs)("div", {
        className: I.micTest,
        children: [(0, a.jsx)(d.Tooltip, {
          text: f,
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
          progress: c ? E + 100 : 0,
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
      E.default.getMediaEngine().on(o.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
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
var N = r.default.connectStores([f.default, E.default], () => {
  let e = E.default.getInputDeviceId(),
    t = E.default.getInputDevices(),
    n = l.find(t, t => {
      let {
        id: n
      } = t;
      return n === e
    }),
    a = E.default.getOutputDeviceId(),
    s = E.default.getOutputDevices(),
    i = l.find(s, e => {
      let {
        id: t
      } = e;
      return t === a
    }),
    r = E.default.getModeOptions();
  return {
    isVoiceConnected: f.default.isConnected(),
    inputVolume: E.default.getInputVolume(),
    outputVolume: E.default.getOutputVolume(),
    inputMode: E.default.getMode(),
    vadThreshold: r.threshold,
    isDeafened: E.default.isSelfDeaf(),
    vadAutoThreshold: r.autoThreshold,
    inputDeviceName: null != n ? n.name : "",
    outputDeviceName: null != i ? i.name : ""
  }
})(S)
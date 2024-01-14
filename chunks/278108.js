"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007"), n("424973");
var s = n("37983"),
  i = n("884691"),
  a = n("499032"),
  u = n.n(a),
  o = n("312165"),
  d = n("3958"),
  r = n("773336"),
  l = n("50885"),
  c = n("49111");
let p = r.isPlatformEmbedded && null != l.default.getDiscordUtils().inputCaptureRegisterElement;
class f extends i.PureComponent {
  componentDidMount() {
    this._mounted = !0
  }
  componentWillUnmount() {
    this._mounted = !1, this.cleanUp()
  }
  componentDidUpdate(e) {
    this.props.defaultValue !== e.defaultValue && this.setState({
      codes: this.props.defaultValue
    })
  }
  cleanUp() {
    r.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
  }
  handleComboChange(e) {
    let {
      mode: t
    } = this.state, {
      onChange: n
    } = this.props;
    t === d.RecordModes.RECORDING && (null != n && n(e), this.setState({
      codes: e
    }))
  }
  render() {
    let e, t;
    let {
      codes: n,
      mode: i
    } = this.state, {
      disabled: a
    } = this.props;
    return p ? (t = l.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !r.isPlatformEmbedded && (e = this.handleComboKeys), (0, s.jsx)(d.default, {
      disabled: a,
      value: n,
      mode: i,
      onClick: this.toggleRecordMode,
      onChange: e,
      registerNativeRecorder: t,
      disableOnClickWhileRecording: p
    })
  }
  constructor(e) {
    super(e), this._mounted = !1, this.recordStart = () => {
      r.isPlatformEmbedded && !p && (this.gs = new o.default, this.gs.on("change", this.handleGSChange)), this.setState({
        mode: d.RecordModes.RECORDING
      })
    }, this.recordEnd = () => {
      this.cleanUp(), this.setState({
        mode: d.RecordModes.DEFAULT
      })
    }, this.toggleRecordMode = () => {
      this.state.mode === d.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
    }, this.handleComboKeys = (e, t, n) => {
      if (n.preventDefault(), "keydown" === n.type) {
        let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, u(e), c.KeyboardEnvs.BROWSER]),
          {
            keyCode: s
          } = n;
        null == e.find(e => {
          let [, t] = e;
          return s === t
        }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, s, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
      }
    }, this.handleGSChange = e => {
      if (!1 === this._mounted) return;
      let t = [...e.combo];
      this.handleComboChange(t)
    }, this.handleNativeChange = e => {
      e.length > 0 && this.handleComboChange(e), this.recordEnd()
    };
    let {
      defaultValue: t
    } = e;
    this.state = {
      codes: t,
      mode: d.RecordModes.DEFAULT
    }
  }
}
var _ = f
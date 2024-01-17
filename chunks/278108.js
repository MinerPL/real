"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007"), s("424973");
var n = s("37983"),
  l = s("884691"),
  i = s("499032"),
  a = s.n(i),
  o = s("312165"),
  r = s("3958"),
  d = s("773336"),
  u = s("50885"),
  c = s("49111");
let h = d.isPlatformEmbedded && null != u.default.getDiscordUtils().inputCaptureRegisterElement;
class m extends l.PureComponent {
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
    d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
  }
  handleComboChange(e) {
    let {
      mode: t
    } = this.state, {
      onChange: s
    } = this.props;
    t === r.RecordModes.RECORDING && (null != s && s(e), this.setState({
      codes: e
    }))
  }
  render() {
    let e, t;
    let {
      codes: s,
      mode: l
    } = this.state, {
      disabled: i
    } = this.props;
    return h ? (t = u.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !d.isPlatformEmbedded && (e = this.handleComboKeys), (0, n.jsx)(r.default, {
      disabled: i,
      value: s,
      mode: l,
      onClick: this.toggleRecordMode,
      onChange: e,
      registerNativeRecorder: t,
      disableOnClickWhileRecording: h
    })
  }
  constructor(e) {
    super(e), this._mounted = !1, this.recordStart = () => {
      d.isPlatformEmbedded && !h && (this.gs = new o.default, this.gs.on("change", this.handleGSChange)), this.setState({
        mode: r.RecordModes.RECORDING
      })
    }, this.recordEnd = () => {
      this.cleanUp(), this.setState({
        mode: r.RecordModes.DEFAULT
      })
    }, this.toggleRecordMode = () => {
      this.state.mode === r.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
    }, this.handleComboKeys = (e, t, s) => {
      if (s.preventDefault(), "keydown" === s.type) {
        let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, a(e), c.KeyboardEnvs.BROWSER]),
          {
            keyCode: n
          } = s;
        null == e.find(e => {
          let [, t] = e;
          return n === t
        }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, n, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
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
      mode: r.RecordModes.DEFAULT
    }
  }
}
var p = m
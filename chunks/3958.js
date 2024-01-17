"use strict";
s.r(t), s.d(t, {
  RecordModes: function() {
    return n
  },
  default: function() {
    return T
  }
}), s("222007");
var n, l, i = s("37983"),
  a = s("884691"),
  o = s("414456"),
  r = s.n(o),
  d = s("800648"),
  u = s.n(d),
  c = s("917351"),
  h = s.n(c),
  m = s("77078"),
  p = s("13798"),
  f = s("145131"),
  g = s("782340"),
  E = s("523192");
(l = n || (n = {})).DEFAULT = "DEFAULT", l.RECORDING = "RECORDING";
let _ = {
  DEFAULT: E.default,
  RECORDING: E.recording
};
class R extends a.PureComponent {
  componentWillUnmount() {
    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
  }
  componentDidUpdate(e) {
    let {
      mode: t
    } = this.props, {
      mode: s
    } = e;
    if (s === t) return;
    let {
      _inputRef: n
    } = this;
    if (null == n.current) return;
    let {
      activeElement: l
    } = document;
    "DEFAULT" === t && n.current === l && n.current.blur(), "RECORDING" === t && n.current !== l && n.current.focus()
  }
  render() {
    let e;
    let {
      mode: t,
      value: s,
      disabled: n
    } = this.props, l = (0, p.toString)(s, !0);
    e = "RECORDING" === t ? g.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === s.length ? g.default.Messages.SHORTCUT_RECORDER_BUTTON : g.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
    let a = "DEFAULT" === t && s.length > 0;
    return (0, i.jsx)(m.FocusRing, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, i.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: r(E.container, _[t], {
          [E.hasValue]: a,
          [E.disabled]: n
        }),
        children: (0, i.jsxs)(f.default, {
          className: E.layout,
          children: [(0, i.jsx)(f.default.Child, {
            className: E.input,
            children: (0, i.jsx)("input", {
              id: this._inputId,
              placeholder: g.default.Messages.SHORTCUT_RECORDER_NO_BIND,
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: l,
              disabled: "RECORDING" !== this.props.mode || n
            })
          }), (0, i.jsx)(f.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, i.jsxs)(m.Button, {
              className: E.button,
              disabled: n,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: m.Button.Sizes.MIN,
              color: m.ButtonColors.PRIMARY,
              children: [(0, i.jsx)("span", {
                className: E.text,
                children: e
              }), (0, i.jsx)("span", {
                className: E.editIcon
              })]
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this._inputId = h.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = a.createRef(), this._containerRef = a.createRef(), this.setInputRef = e => {
      var t;
      let {
        registerNativeRecorder: s,
        onChange: n
      } = this.props;
      if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
        if (null != s && null != n) this._unregisterNativeRecorder = s(e.id, n);
        else if (null != n) {
          let t = new u(e);
          t.handleKey = n
        }
      }
    }, this.handleClick = e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: s
      } = this.props;
      (!s || "RECORDING" !== this._mousedownMode) && t()
    }, this.handleMouseDown = () => {
      this._mousedownMode = this.props.mode
    }
  }
}
var T = R
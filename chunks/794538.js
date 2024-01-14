"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007"), s("424973");
var n = s("37983"),
  i = s("884691"),
  a = s("414456"),
  o = s.n(a),
  l = s("145131"),
  r = s("616389");
class u extends i.PureComponent {
  render() {
    let {
      className: e
    } = this.props;
    return (0, n.jsx)("input", {
      ref: this.setCodeBlockRef,
      className: o(r.input, e),
      maxLength: 1,
      value: null != this.props.code ? this.props.code : void 0,
      autoFocus: this.props.autoFocus,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleChange
    })
  }
  focus() {
    var e;
    null === (e = this._codeBlockRef) || void 0 === e || e.focus()
  }
  blur() {
    var e;
    null === (e = this._codeBlockRef) || void 0 === e || e.blur()
  }
  constructor(...e) {
    super(...e), this.setCodeBlockRef = e => {
      this._codeBlockRef = e
    }, this.handleKeyDown = e => {
      let t = 8 === e.which || 37 === e.which || 39 === e.which,
        s = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
      !t && !s && e.preventDefault();
      let {
        onKeyDown: n
      } = this.props;
      null == n || n(e)
    }, this.handleChange = e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e.currentTarget.value)
    }
  }
}
u.defaultProps = {
  autoFocus: !1
};
class d extends i.PureComponent {
  render() {
    let {
      className: e,
      inputClassName: t
    } = this.props, {
      codes: s
    } = this.state, i = [];
    for (let e = 0; e < s.length; e++) e === s.length / 2 && i.push((0, n.jsx)("div", {
      className: r.spacer
    }, "spacer")), i.push((0, n.jsx)(u, {
      ref: t => this.setCodeBlockRef(e, t),
      code: s[e],
      autoFocus: 0 === e,
      onChange: t => this.handleChange(e, t),
      onKeyDown: t => this.handleKeyDown(e, t),
      className: t
    }, e));
    return (0, n.jsx)(l.default, {
      align: l.default.Align.CENTER,
      justify: l.default.Justify.CENTER,
      className: e,
      children: i
    })
  }
  setCodeBlockRef(e, t) {
    this._codeBlockRefs[e] = t
  }
  handleChange(e, t) {
    this.state.codes[e] = t;
    let s = this.getCodeOrFirstEmptyIndex();
    if ("string" == typeof s) this.submit(s);
    else {
      let e = this._codeBlockRefs[s];
      null == e || e.focus()
    }
  }
  handleKeyDown(e, t) {
    let {
      codes: s
    } = this.state;
    if (8 === t.which && e > 0 && (null == s[e] || 0 === s[e].length)) {
      let t = e - 1;
      s[t] = "";
      let n = this._codeBlockRefs[t];
      null == n || n.focus()
    }
  }
  getCodeOrFirstEmptyIndex() {
    let {
      codes: e
    } = this.state, t = "";
    for (let s = 0; s < e.length; s++) {
      if (isNaN(parseInt(e[s]))) return s;
      t += e[s]
    }
    return t
  }
  submit(e) {
    let {
      onSubmit: t
    } = this.props;
    null == t || t(e)
  }
  constructor(e) {
    super(e), this._codeBlockRefs = Array(this.props.count), this.state = {
      codes: Array(e.count)
    }
  }
}
d.defaultProps = {
  count: 6
};
var h = d
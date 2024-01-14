"use strict";
s.r(t), s.d(t, {
  CopyInputModes: function() {
    return p
  },
  default: function() {
    return h
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  a = s("414456"),
  l = s.n(a),
  i = s("77078"),
  o = s("474293"),
  u = s("145131"),
  d = s("782340"),
  c = s("863448");
let p = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class S extends r.PureComponent {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: s,
      mode: r
    } = this.props, a = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
    return (0, n.jsx)("input", {
      className: l((0, o.getClass)(c, "input", r), {
        [c.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: s,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": a
    })
  }
  render() {
    let e;
    let {
      text: t = d.default.Messages.COPY,
      mode: s,
      hideMessage: r,
      className: a,
      buttonLook: S
    } = this.props, h = null != r;
    switch (s) {
      case p.SUCCESS:
        e = i.ButtonColors.GREEN;
        break;
      case p.ERROR:
        e = i.ButtonColors.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, n.jsx)(i.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, n.jsx)("div", {
        className: l((0, o.getClass)(c, "copyInput", s), a),
        ref: this.containerRef,
        children: (0, n.jsxs)(u.default, {
          className: c.layout,
          children: [(0, n.jsxs)(u.default, {
            className: c.inputWrapper,
            children: [this.renderInput(h), h ? (0, n.jsx)("div", {
              className: c.hiddenMessage,
              children: r
            }) : null]
          }), (0, n.jsx)(u.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, n.jsx)(i.Button, {
              className: c.button,
              onClick: this.handleButtonClick,
              size: i.ButtonSizes.MIN,
              color: e,
              look: S,
              children: t
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.inputRef = r.createRef(), this.containerRef = r.createRef(), this.handleButtonClick = () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }, this.handleInputClick = () => {
      this.select()
    }
  }
}
S.contextType = i.FormContext, S.defaultProps = {
  supportsCopy: !0,
  buttonColor: i.ButtonColors.PRIMARY,
  buttonLook: i.ButtonLooks.FILLED,
  mode: p.DEFAULT
}, S.Modes = p, S.ButtonColors = i.ButtonColors, S.ButtonLooks = i.ButtonLooks;
var h = S
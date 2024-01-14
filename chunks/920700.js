"use strict";
s.r(t), s.d(t, {
  CopyInputModes: function() {
    return f
  },
  default: function() {
    return _
  }
}), s("222007");
var l = s("37983"),
  n = s("884691"),
  r = s("414456"),
  o = s.n(r),
  a = s("77078"),
  i = s("474293"),
  u = s("145131"),
  c = s("782340"),
  d = s("863448");
let f = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class E extends n.PureComponent {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: s,
      mode: n
    } = this.props, r = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
    return (0, l.jsx)("input", {
      className: o((0, i.getClass)(d, "input", n), {
        [d.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: s,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": r
    })
  }
  render() {
    let e;
    let {
      text: t = c.default.Messages.COPY,
      mode: s,
      hideMessage: n,
      className: r,
      buttonLook: E
    } = this.props, _ = null != n;
    switch (s) {
      case f.SUCCESS:
        e = a.ButtonColors.GREEN;
        break;
      case f.ERROR:
        e = a.ButtonColors.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, l.jsx)(a.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, l.jsx)("div", {
        className: o((0, i.getClass)(d, "copyInput", s), r),
        ref: this.containerRef,
        children: (0, l.jsxs)(u.default, {
          className: d.layout,
          children: [(0, l.jsxs)(u.default, {
            className: d.inputWrapper,
            children: [this.renderInput(_), _ ? (0, l.jsx)("div", {
              className: d.hiddenMessage,
              children: n
            }) : null]
          }), (0, l.jsx)(u.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, l.jsx)(a.Button, {
              className: d.button,
              onClick: this.handleButtonClick,
              size: a.ButtonSizes.MIN,
              color: e,
              look: E,
              children: t
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.inputRef = n.createRef(), this.containerRef = n.createRef(), this.handleButtonClick = () => {
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
E.contextType = a.FormContext, E.defaultProps = {
  supportsCopy: !0,
  buttonColor: a.ButtonColors.PRIMARY,
  buttonLook: a.ButtonLooks.FILLED,
  mode: f.DEFAULT
}, E.Modes = f, E.ButtonColors = a.ButtonColors, E.ButtonLooks = a.ButtonLooks;
var _ = E
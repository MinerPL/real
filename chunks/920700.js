"use strict";
s.r(t), s.d(t, {
  CopyInputModes: function() {
    return f
  },
  default: function() {
    return I
  }
}), s("222007");
var n = s("37983"),
  l = s("884691"),
  o = s("414456"),
  r = s.n(o),
  a = s("77078"),
  i = s("474293"),
  c = s("145131"),
  u = s("782340"),
  d = s("863448");
let f = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class h extends l.PureComponent {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: s,
      mode: l
    } = this.props, o = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
    return (0, n.jsx)("input", {
      className: r((0, i.getClass)(d, "input", l), {
        [d.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: s,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": o
    })
  }
  render() {
    let e;
    let {
      text: t = u.default.Messages.COPY,
      mode: s,
      hideMessage: l,
      className: o,
      buttonLook: h
    } = this.props, I = null != l;
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
    return (0, n.jsx)(a.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, n.jsx)("div", {
        className: r((0, i.getClass)(d, "copyInput", s), o),
        ref: this.containerRef,
        children: (0, n.jsxs)(c.default, {
          className: d.layout,
          children: [(0, n.jsxs)(c.default, {
            className: d.inputWrapper,
            children: [this.renderInput(I), I ? (0, n.jsx)("div", {
              className: d.hiddenMessage,
              children: l
            }) : null]
          }), (0, n.jsx)(c.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, n.jsx)(a.Button, {
              className: d.button,
              onClick: this.handleButtonClick,
              size: a.ButtonSizes.MIN,
              color: e,
              look: h,
              children: t
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.inputRef = l.createRef(), this.containerRef = l.createRef(), this.handleButtonClick = () => {
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
h.contextType = a.FormContext, h.defaultProps = {
  supportsCopy: !0,
  buttonColor: a.ButtonColors.PRIMARY,
  buttonLook: a.ButtonLooks.FILLED,
  mode: f.DEFAULT
}, h.Modes = f, h.ButtonColors = a.ButtonColors, h.ButtonLooks = a.ButtonLooks;
var I = h
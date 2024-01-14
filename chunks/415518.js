"use strict";
n.r(t), n.d(t, {
  renderKeybindHint: function() {
    return S
  },
  renderSubtleHint: function() {
    return v
  },
  ColorSchemes: function() {
    return a
  },
  default: function() {
    return y
  }
});
var i, a, l = n("37983"),
  s = n("884691"),
  o = n("414456"),
  r = n.n(o),
  d = n("77078"),
  u = n("942699"),
  c = n("945330"),
  f = n("782340"),
  h = n("229804"),
  p = n("926622");
let g = e => e.stopPropagation(),
  m = () => (0, l.jsx)("div", {
    className: h.clickBlocker,
    onClick: g,
    onMouseEnter: g,
    onMouseOver: g
  }),
  E = () => (0, l.jsx)("div", {
    className: h.divider
  }),
  S = (e, t, n) => (0, l.jsx)("div", {
    className: h.keybindMessage,
    children: n.format({
      keybind: t,
      keybindHook: (e, n) => (0, l.jsx)(u.default, {
        keybind: t,
        className: h.keybind
      }, n)
    })
  }),
  v = (e, t) => (0, l.jsx)("div", {
    className: h.hintSubtleText,
    children: t
  });
(i = a || (a = {})).PRIMARY = "PRIMARY", i.BRAND = "BRAND", i.DANGER = "DANGER";
class Notification extends s.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      expand: n
    } = e, {
      expanded: i
    } = t;
    return !i && n ? {
      expanded: !0
    } : null
  }
  componentDidMount() {
    let {
      onNotificationShow: e
    } = this.props;
    null == e || e()
  }
  componentDidUpdate(e) {
    let {
      onNotificationShow: t
    } = this.props;
    null != t && null == e.onNotificationShow && t()
  }
  renderCloseButton() {
    return (0, l.jsx)(d.Button, {
      look: d.Button.Looks.BLANK,
      size: d.Button.Sizes.NONE,
      onClick: this.handleDismiss,
      className: h.dismissButton,
      "aria-label": f.default.Messages.NOTIFICATION_DISMISS,
      children: (0, l.jsx)(c.default, {
        width: 16,
        height: 16,
        className: h.dismissIcon
      })
    })
  }
  renderHint() {
    let {
      props: {
        hint: e,
        colorScheme: t
      },
      state: {
        expanded: n
      }
    } = this;
    if (null == e) return null;
    if ("function" == typeof e) {
      let i = e(n, t);
      return null != i ? (0, l.jsxs)(s.Fragment, {
        children: [(0, l.jsx)(E, {}), i]
      }, "hint-custom") : null
    }
    return (0, l.jsxs)(s.Fragment, {
      children: [(0, l.jsx)(E, {}), (0, l.jsx)("div", {
        className: "string" == typeof e ? h.hintText : void 0,
        children: e
      }, "hint-text")]
    }, "hint-text")
  }
  renderFooter() {
    let {
      props: {
        renderFooter: e,
        cancelText: t,
        confirmText: n,
        onConfirmClick: i,
        onCancelClick: a,
        hint: o,
        colorScheme: r
      },
      state: {
        expanded: u
      }
    } = this;
    if (!u) return null != o ? this.renderHint() : null;
    if (null != e) {
      let t = e(u, r);
      return null != t ? (0, l.jsxs)(s.Fragment, {
        children: [(0, l.jsx)(E, {}), t]
      }, "footer-custom-content") : null
    }
    if (null != i || null != a) {
      let e = d.Button.Colors.GREEN,
        o = d.Button.Colors.PRIMARY,
        u = d.Button.Looks.FILLED;
      switch (r) {
        case "DANGER":
        case "BRAND":
          e = o = d.Button.Colors.WHITE, u = d.Button.Looks.OUTLINED
      }
      return (0, l.jsxs)(s.Fragment, {
        children: [(0, l.jsx)(E, {}), (0, l.jsxs)("div", {
          className: h.buttonContainer,
          children: [null != i ? (0, l.jsx)(d.Button, {
            fullWidth: !0,
            size: d.Button.Sizes.SMALL,
            color: e,
            onClick: this.handleConfirmClick,
            className: h.button,
            innerClassName: h.innerText,
            children: null != n ? n : f.default.Messages.OKAY
          }) : null, null != a ? (0, l.jsx)(d.Button, {
            fullWidth: !0,
            size: d.Button.Sizes.SMALL,
            look: u,
            color: o,
            onClick: this.handleCancelClick,
            className: h.button,
            children: null != t ? t : f.default.Messages.CANCEL
          }) : null]
        })]
      }, "footer-button-content")
    }
    return this.renderHint()
  }
  renderIcon() {
    let {
      icon: e
    } = this.props;
    return null == e ? null : "string" == typeof e ? (0, l.jsx)(d.Avatar, {
      src: e,
      size: d.AvatarSizes.SIZE_40,
      className: h.avatar,
      "aria-hidden": !0
    }) : (0, l.jsx)("div", {
      className: h.avatar,
      children: e
    })
  }
  renderContent() {
    let {
      body: e,
      title: t,
      maxBodyLines: n
    } = this.props;
    return (0, l.jsxs)("div", {
      className: h.content,
      children: [this.renderIcon(), (0, l.jsxs)("div", {
        className: h.details,
        children: [(0, l.jsx)("div", {
          className: h.title,
          children: t
        }), null != e ? (0, l.jsx)("div", {
          className: r(h.body, p.marginTop4),
          style: {
            WebkitLineClamp: n,
            lineClamp: n
          },
          children: e
        }) : null]
      })]
    })
  }
  render() {
    let {
      props: {
        onNotificationClick: e,
        colorScheme: t,
        disabled: n
      },
      state: {
        expanded: i
      }
    } = this, a = null != e ? d.Clickable : "div";
    return (0, l.jsxs)(a, {
      onMouseOver: i ? null : this.handleMouseEnter,
      onFocus: i ? null : this.handleMouseEnter,
      onClick: e,
      className: r(h.container, {
        [h.themePrimary]: "PRIMARY" === t,
        [h.themeBrand]: "BRAND" === t,
        [h.themeDanger]: "DANGER" === t,
        [h.clickable]: null != e && !n
      }),
      children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), n ? (0, l.jsx)(m, {}) : null]
    })
  }
  constructor(e) {
    super(e), this.handleDismiss = e => {
      e.stopPropagation();
      let {
        onDismissClick: t
      } = this.props;
      null == t || t(e)
    }, this.handleConfirmClick = e => {
      e.stopPropagation();
      let {
        onConfirmClick: t
      } = this.props;
      null == t || t(e)
    }, this.handleCancelClick = e => {
      e.stopPropagation();
      let {
        onCancelClick: t
      } = this.props;
      null == t || t(e)
    }, this.handleMouseEnter = () => {
      !this.props.disabled && this.setState({
        expanded: !0
      })
    };
    let {
      expand: t
    } = e;
    this.state = {
      expanded: t
    }
  }
}
Notification.ColorSchemes = a, Notification.defaultProps = {
  maxBodyLines: void 0,
  colorScheme: "PRIMARY",
  expand: !1,
  disabled: !1
};
var y = Notification
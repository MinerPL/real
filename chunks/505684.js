"use strict";
n.r(t), n.d(t, {
  ObscuredDisplayContext: function() {
    return _
  },
  default: function() {
    return N
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("669491"),
  d = n("681187"),
  c = n("77078"),
  f = n("605160"),
  m = n("449008"),
  h = n("462579"),
  p = n("867544"),
  g = n("782340"),
  E = n("145719");
(a = l || (l = {})).TEXT = "text", a.ATTACHMENT = "attachment", a.EMBED = "embed";
let v = e => {
    let {
      className: t
    } = e;
    return (0, s.jsx)("div", {
      className: o(E.spoilerWarning, t),
      children: g.default.Messages.SPOILER
    })
  },
  C = e => {
    let {
      className: t,
      isSingleMosaicItem: n,
      obscureOnly: l
    } = e;
    return (0, s.jsx)("div", {
      className: o(E.explicitContentWarning, t),
      children: l ? null : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.ImageWarningIcon, {
          width: 32,
          height: 32,
          color: u.default.colors.WHITE
        }), n && (0, s.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: E.explicitContentWarningText,
          children: g.default.Messages.EXPLICIT_CONTENT_WARNING
        })]
      })
    })
  },
  I = e => {
    let {
      reason: t = f.ObscureReason.SPOILER,
      className: n,
      isSingleMosaicItem: l = !1
    } = e;
    switch (t) {
      case f.ObscureReason.SPOILER:
        return (0, s.jsx)(v, {
          className: n
        });
      case f.ObscureReason.EXPLICIT_CONTENT:
        return (0, s.jsx)(C, {
          isSingleMosaicItem: l,
          className: n
        });
      case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
        return (0, s.jsx)(C, {
          isSingleMosaicItem: l,
          className: n,
          obscureOnly: !0
        });
      default:
        return (0, m.assertNever)(t)
    }
  },
  x = e => {
    let {
      obscureReason: t,
      isVisible: n,
      handleToggleObscurity: l,
      obscurityControlClassName: a
    } = e;
    return t !== f.ObscureReason.EXPLICIT_CONTENT ? null : (0, s.jsx)("div", {
      className: o(E.obscureButtonContainer, a),
      children: (0, s.jsx)(c.Clickable, {
        className: o(E.obscureHoverButton),
        onClick: l,
        "aria-label": g.default.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
        children: n ? (0, s.jsx)(h.default, {
          width: 24,
          height: 24
        }) : (0, s.jsx)(p.default, {
          width: 24,
          height: 24
        })
      })
    })
  },
  _ = i.createContext(!1);
class S extends i.PureComponent {
  renderWithTooltip(e) {
    return (0, s.jsx)(c.Tooltip, {
      position: "left",
      text: this.state.visible ? null : this.tooltipText,
      children: t => {
        let {
          onMouseEnter: n,
          onMouseLeave: l
        } = t;
        return i.cloneElement(i.Children.only(e), {
          onMouseEnter: n,
          onMouseLeave: l
        })
      }
    })
  }
  renderObscuredAttachment() {
    let {
      children: e,
      inline: t,
      className: n,
      containerStyles: l,
      obscured: a = !0,
      reason: i = f.ObscureReason.SPOILER,
      isSingleMosaicItem: r = !1,
      obscurityControlClassName: u
    } = this.props, {
      visible: d
    } = this.state, m = (0, s.jsx)(_.Consumer, {
      children: m => {
        let h = m || d || !a;
        return [f.ObscureReason.EXPLICIT_CONTENT, f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(i) && !t ? (0, s.jsxs)("div", {
          "aria-label": h ? void 0 : this.ariaLabel,
          "aria-expanded": h,
          style: l,
          className: o(n, E.spoilerContent, E.spoilerContainer, {
            [E.hidden]: !h,
            [E.constrainedObscureContent]: r
          }),
          role: h ? "presentation" : "button",
          tabIndex: h ? -1 : 0,
          children: [h || t ? null : (0, s.jsx)(I, {
            reason: i,
            isSingleMosaicItem: r
          }), (0, s.jsx)("div", {
            "aria-hidden": !h,
            className: E.spoilerInnerContainer,
            children: e(!h)
          }), (0, s.jsx)(x, {
            obscureReason: i,
            isVisible: d,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: u
          })]
        }) : (0, s.jsxs)(c.Clickable, {
          onClick: h ? void 0 : this.removeObscurity,
          "aria-label": h ? void 0 : this.ariaLabel,
          "aria-expanded": h,
          style: l,
          className: o(n, E.spoilerContent, E.spoilerContainer, {
            [E.hidden]: !h,
            [E.hiddenSpoiler]: !h
          }),
          role: h ? "presentation" : "button",
          tabIndex: h ? -1 : 0,
          children: [h || t ? null : (0, s.jsx)(I, {
            reason: i,
            isSingleMosaicItem: r
          }), (0, s.jsx)("div", {
            "aria-hidden": !h,
            className: E.spoilerInnerContainer,
            children: e(!h)
          })]
        })
      }
    });
    return t ? this.renderWithTooltip(m) : m
  }
  renderObscuredEmbed() {
    let {
      children: e,
      className: t,
      containerStyles: n,
      isSingleMosaicItem: l,
      obscurityControlClassName: a,
      reason: i = f.ObscureReason.SPOILER
    } = this.props, {
      visible: r
    } = this.state;
    return (0, s.jsx)(_.Consumer, {
      children: u => {
        let d = u || r;
        return [f.ObscureReason.EXPLICIT_CONTENT, f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(i) ? (0, s.jsxs)("div", {
          "aria-label": r ? void 0 : this.ariaLabel,
          "aria-expanded": d,
          style: n,
          className: o(t, E.spoilerContent, E.spoilerContainer, {
            [E.hidden]: !d
          }),
          role: d ? "presentation" : "button",
          tabIndex: d ? -1 : 0,
          children: [d ? null : (0, s.jsx)(I, {
            reason: i,
            isSingleMosaicItem: l
          }), (0, s.jsx)("div", {
            "aria-hidden": !d,
            className: E.spoilerInnerContainer,
            children: e(!d)
          }), (0, s.jsx)(x, {
            obscureReason: i,
            isVisible: r,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: a
          })]
        }) : (0, s.jsxs)(c.Clickable, {
          "aria-label": this.ariaLabel,
          "aria-expanded": d,
          className: o(t, E.spoilerContent, E.spoilerContainer, {
            [E.hidden]: !d
          }),
          onClick: d ? void 0 : this.removeObscurity,
          style: n,
          role: d ? "presentation" : "button",
          tabIndex: d ? -1 : 0,
          children: [d ? null : (0, s.jsx)(I, {
            reason: i,
            className: E.embed
          }), (0, s.jsx)("div", {
            "aria-hidden": !d,
            children: e(!d)
          })]
        })
      }
    })
  }
  renderObscuredText() {
    let {
      children: e,
      renderTextElement: t,
      className: n
    } = this.props, {
      visible: l
    } = this.state, a = (0, s.jsx)(_.Consumer, {
      children: a => {
        let r = a || l,
          u = i.Children.toArray(e(r)),
          d = i.Children.map(u, e => {
            let n = i.isValidElement(e);
            return n && null != t ? t(e, r) : e
          });
        return (0, s.jsx)(c.Clickable, {
          tag: "span",
          onClick: r ? void 0 : this.removeObscurity,
          "aria-label": r ? void 0 : this.ariaLabel,
          "aria-expanded": r,
          tabIndex: r ? -1 : 0,
          role: r ? "presentation" : "button",
          className: o(n, E.spoilerContent, E.spoilerMarkdownContent, {
            [E.hidden]: !r
          }),
          children: (0, s.jsx)("span", {
            className: E.obscuredTextContent,
            children: (0, s.jsx)("span", {
              "aria-hidden": !r,
              className: E.obscuredTextContentInner,
              children: d
            })
          })
        })
      }
    });
    return this.renderWithTooltip(a)
  }
  render() {
    let {
      type: e = "text"
    } = this.props;
    switch (e) {
      case "text":
        return this.renderObscuredText();
      case "attachment":
        return this.renderObscuredAttachment();
      case "embed":
        return this.renderObscuredEmbed();
      default:
        return (0, m.assertNever)(e)
    }
  }
  get ariaLabel() {
    let {
      reason: e = f.ObscureReason.SPOILER
    } = this.props;
    switch (e) {
      case f.ObscureReason.SPOILER:
        return g.default.Messages.SPOILER;
      case f.ObscureReason.EXPLICIT_CONTENT:
        return g.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
      case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
        return g.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
      default:
        return (0, m.assertNever)(e)
    }
  }
  get tooltipText() {
    let {
      reason: e = f.ObscureReason.SPOILER
    } = this.props;
    switch (e) {
      case f.ObscureReason.SPOILER:
        return g.default.Messages.SPOILER;
      case f.ObscureReason.EXPLICIT_CONTENT:
        return g.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
      case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
        return g.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
      default:
        return (0, m.assertNever)(e)
    }
  }
  constructor(...e) {
    super(...e), this.state = {
      visible: !1
    }, this.removeObscurity = e => {
      let {
        visible: t
      } = this.state;
      if (t) return;
      !t && (e.preventDefault(), e.stopPropagation()), this.setState({
        visible: !0
      });
      let {
        onReveal: n
      } = this.props;
      null != n && n()
    }, this.handleToggleObscurity = e => {
      e.stopPropagation(), e.nativeEvent.stopPropagation();
      let {
        onToggleObscurity: t
      } = this.props;
      null != t && t(e), this.setState(e => ({
        visible: !e.visible
      }))
    }, this.obscure = () => {
      let {
        visible: e
      } = this.state;
      e && this.setState({
        visible: !1
      })
    }
  }
}
S.Types = l, S.Reasons = f.ObscureReason;
var N = S
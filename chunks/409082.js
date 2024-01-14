"use strict";
n.r(t), n.d(t, {
  Guild: function() {
    return L
  },
  Channel: function() {
    return v
  },
  GroupDM: function() {
    return x
  },
  User: function() {
    return R
  },
  Application: function() {
    return M
  },
  Header: function() {
    return O
  },
  Link: function() {
    return y
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("843962"),
  r = n("679653"),
  o = n("419830"),
  u = n("222481"),
  d = n("361572"),
  c = n("305961"),
  f = n("27618"),
  h = n("697218"),
  C = n("158998"),
  p = n("220677"),
  m = n("953109"),
  E = n("476263"),
  g = n("533403"),
  I = n("20837"),
  S = n("83900"),
  _ = n("45029"),
  N = n("782340"),
  T = n("956214");
class A extends a.PureComponent {
  componentDidMount() {
    let {
      focused: e,
      onFocus: t
    } = this.props, {
      node: n
    } = this;
    e && null != n && t(n)
  }
  componentDidUpdate(e) {
    let {
      focused: t,
      onFocus: n
    } = this.props, {
      node: l
    } = this;
    null != l && t && !e.focused && n(l)
  }
  render() {
    let {
      focused: e,
      children: t,
      score: n,
      onContextMenu: a,
      id: i,
      "aria-label": r
    } = this.props;
    return (0, l.jsxs)(s.Clickable, {
      role: "option",
      id: i,
      "aria-label": r,
      "aria-selected": e,
      focusProps: {
        enabled: !1
      },
      tabIndex: -1,
      innerRef: this.setRef,
      className: T.result,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onContextMenu: a,
      children: [t, null != n ? (0, l.jsx)("div", {
        className: T.score,
        children: n >> 0
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = e => {
      e.preventDefault();
      let {
        onClick: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }, this.handleMouseEnter = e => {
      let {
        onMouseEnter: t
      } = this.props, {
        node: n
      } = this;
      null != n && t(e, n)
    }, this.setRef = e => {
      this.node = e
    }
  }
}
class L extends a.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, l.jsx)("div", {
      className: T.guildIconContainer,
      children: (0, l.jsx)(E.default, {
        tabIndex: -1,
        guild: e,
        size: E.default.Sizes.MINI,
        className: T.guildIcon
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, l.jsx)("div", {
      className: T.name,
      children: (0, l.jsx)("span", {
        className: T.match,
        children: e.name
      })
    })
  }
  renderContent() {
    let {
      unread: e,
      children: t
    } = this.props;
    return (0, l.jsxs)("div", {
      className: e ? T.contentUnread : T.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, l.jsx)("div", {
        className: T.misc,
        children: t
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      guild: e
    } = this.props;
    return N.default.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
      name: e.name
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, l.jsx)(A, {
      id: r,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
class v extends a.Component {
  renderIcon() {
    var e;
    let {
      channel: t
    } = this.props, n = (0, o.getChannelIconComponent)(t);
    if (null == n) return null;
    let a = null !== (e = (0, u.default)(t)) && void 0 !== e ? e : "";
    return (0, l.jsx)("div", {
      className: T.iconContainer,
      role: "img",
      "aria-label": a,
      children: (0, l.jsx)(n, {
        className: T.icon,
        width: 16,
        height: 16
      })
    })
  }
  renderName() {
    let e, t;
    let {
      mentions: n,
      category: a,
      channel: s
    } = this.props;
    return null != n && n > 0 && (e = (0, l.jsx)(p.default, {
      className: T.badge,
      value: n
    })), null != a && (t = (0, l.jsx)("span", {
      className: T.note,
      children: (0, r.computeChannelName)(a, h.default, f.default)
    })), (0, l.jsxs)("div", {
      className: T.name,
      children: [(0, l.jsx)("span", {
        className: T.match,
        children: (0, r.computeChannelName)(s, h.default, f.default)
      }), e, this.renderVoiceStates(), t]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: t
    } = this.props;
    return null == e ? null : (0, l.jsx)(g.default, {
      className: T.voiceSummaryContainer,
      guildId: t.guild_id,
      users: e.map(e => {
        let {
          user: t
        } = e;
        return {
          user: t
        }
      }),
      max: 4
    })
  }
  renderContent() {
    let {
      unread: e,
      mentions: t,
      children: n
    } = this.props;
    return (0, l.jsxs)("div", {
      "aria-hidden": !0,
      className: e || null != t && t > 0 ? T.contentUnread : T.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, l.jsx)("div", {
        className: T.misc,
        children: n
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: t
    } = this.props, n = null === (e = c.default.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, l = (0, r.computeChannelName)(t, h.default, f.default), a = (0, u.default)(t);
    return N.default.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
      name: l,
      type: a,
      guild: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, l.jsx)(A, {
      id: r,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
v.defaultProps = {
  unread: !1
};
class x extends a.Component {
  renderIcon() {
    let {
      channel: e
    } = this.props;
    return (0, l.jsx)("div", {
      className: T.dmIconContainer,
      children: (0, l.jsx)(s.Avatar, {
        src: (0, i.getChannelIconURL)(e),
        size: s.AvatarSizes.SIZE_20,
        "aria-hidden": !0
      })
    })
  }
  renderName() {
    let e;
    let {
      mentions: t,
      channel: n
    } = this.props;
    return null != t && t > 0 && (e = (0, l.jsx)(p.default, {
      className: T.badge,
      value: t
    })), (0, l.jsxs)("div", {
      className: T.name,
      children: [(0, l.jsx)("span", {
        className: T.match,
        children: (0, r.computeChannelName)(n, h.default, f.default)
      }), e]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: t
    } = this.props;
    return (0, l.jsxs)("div", {
      className: null != e && e > 0 ? T.contentUnread : T.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, l.jsx)("div", {
        className: T.misc,
        children: t
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: t
    } = this.props, n = (0, r.computeChannelName)(e, h.default, f.default);
    return null != t && t > 0 ? N.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
      name: n,
      mentions: t
    }) : N.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
      name: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, l.jsx)(A, {
      id: r,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
class R extends a.Component {
  renderIcon() {
    let {
      user: e
    } = this.props;
    return (0, l.jsx)("div", {
      className: T.iconContainer,
      children: (0, l.jsx)(s.Avatar, {
        src: e.getAvatarURL(void 0, 20),
        "aria-hidden": !0,
        size: s.AvatarSizes.SIZE_20
      })
    })
  }
  getDisplayNickname() {
    let e;
    let {
      user: t,
      comparator: n
    } = this.props, l = f.default.getNickname(t.id);
    return ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) && (e = null != l ? l : C.default.getName(t)), e
  }
  renderName() {
    let e;
    let {
      user: t,
      mentions: n
    } = this.props, a = this.getDisplayNickname();
    return null != n && n > 0 && (e = (0, l.jsx)(p.default, {
      className: T.badge,
      value: n
    })), (0, l.jsxs)("div", {
      className: T.name,
      children: [(0, l.jsx)("span", {
        className: T.match,
        children: a
      }), e, (0, l.jsx)("span", {
        className: T.username,
        children: C.default.getUserTag(t)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: t
    } = this.props;
    return (0, l.jsxs)("div", {
      className: null != t && t > 0 ? T.contentUnread : T.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, l.jsx)("div", {
        className: T.misc,
        children: e
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: t
    } = this.props, n = this.getDisplayNickname(), l = C.default.getUserTag(t);
    return null != e && e > 0 ? N.default.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
      name: n,
      id: l,
      mentions: e
    }) : N.default.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
      name: n,
      id: l
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, l.jsx)(A, {
      id: r,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
class M extends a.Component {
  renderContent() {
    let {
      children: e,
      application: t
    } = this.props;
    return (0, l.jsxs)("div", {
      className: T.contentDefault,
      children: [(0, l.jsx)("div", {
        className: T.iconContainer,
        children: (0, l.jsx)(m.default, {
          tabIndex: -1,
          className: T.gameIcon,
          game: t,
          size: T.gameIconSize
        })
      }), t.name, (0, l.jsx)("div", {
        className: T.misc,
        children: e
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      focused: a,
      id: s
    } = this.props;
    return (0, l.jsx)(A, {
      id: s,
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      focused: a,
      children: this.renderContent()
    })
  }
}
class O extends a.Component {
  render() {
    return (0, l.jsx)("div", {
      className: T.resultDefault,
      children: (0, l.jsx)("div", {
        className: T.contentDefault,
        children: (0, l.jsx)("div", {
          className: T.header,
          children: this.props.children
        })
      })
    })
  }
}
class y extends a.Component {
  renderContent() {
    let e, t;
    let {
      link: n,
      children: a
    } = this.props, s = (0, d.tryParseChannelPath)(n.path);
    return null == s || void 0 === s.messageId ? (e = N.default.Messages.QUICKSWITCHER_LINK_UNKNOWN, t = (0, l.jsx)(S.default, {
      width: 16,
      height: 16
    })) : (0, d.isAccessibleChannelPath)(s) ? (e = N.default.Messages.QUICKSWITCHER_LINK_MESSAGE, t = (0, l.jsx)(I.default, {
      width: 16,
      height: 16
    })) : (e = N.default.Messages.QUICKSWITCHER_LINK_NO_ACCESS, t = (0, l.jsx)(_.default, {
      width: 16,
      height: 16
    })), (0, l.jsxs)("div", {
      className: T.contentDefault,
      children: [(0, l.jsx)("div", {
        className: T.iconContainer,
        children: t
      }), e, (0, l.jsx)("div", {
        className: T.misc,
        children: a
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      id: r
    } = this.props;
    return (0, l.jsx)(A, {
      id: r,
      onMouseEnter: e,
      onClick: t,
      onFocus: n,
      onContextMenu: a,
      focused: s,
      score: i,
      children: this.renderContent()
    })
  }
}
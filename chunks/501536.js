"use strict";
n.r(t), n.d(t, {
  getAutocompleteRowId: function() {
    return M
  },
  getAutocompleteTitleId: function() {
    return k
  },
  default: function() {
    return U
  }
}), n("70102"), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("917351"),
  a = n.n(s),
  u = n("974667"),
  d = n("77078"),
  c = n("206230"),
  f = n("524768"),
  p = n("596182"),
  m = n("41884"),
  h = n("679653"),
  E = n("419830"),
  S = n("404345"),
  g = n("364685"),
  C = n("24373"),
  T = n("305961"),
  v = n("27618"),
  y = n("697218"),
  x = n("158998"),
  I = n("563911"),
  N = n("346955"),
  _ = n("548775"),
  A = n("49111"),
  R = n("782340"),
  O = n("241970");

function M(e) {
  return null != e ? "autocomplete-".concat(e) : null
}

function k(e) {
  return "autocomplete-".concat(e, "-title")
}
let b = i.createContext(null);
class P extends i.PureComponent {
  isSelectable() {
    return this.selectable
  }
  renderContent() {
    throw Error("AutocompleteRow: renderContent must be extended")
  }
  renderClickable(e) {
    var t;
    let {
      layoutClass: n,
      props: {
        className: i,
        index: r,
        selected: s
      }
    } = this, a = this.isSelectable();
    return (0, l.jsx)(d.Clickable, {
      ...e,
      className: o(O.clickable, i, n),
      id: null !== (t = M(r)) && void 0 !== t ? t : void 0,
      onClick: a ? this.handleClick : void 0,
      onMouseMove: a ? () => {
        this.setState({
          hovered: !0
        }), this.handleMouseEnter()
      } : void 0,
      onMouseLeave: a ? () => this.setState({
        hovered: !1
      }) : void 0,
      role: "option",
      "aria-disabled": !a,
      "aria-selected": a && s,
      children: (0, l.jsx)("div", {
        className: O.base,
        children: this.renderContent()
      })
    })
  }
  render() {
    let {
      index: e
    } = this.props, t = this.isSelectable();
    return t ? (0, l.jsx)(u.ListNavigatorItem, {
      id: "".concat(e),
      children: e => this.renderClickable(e)
    }) : this.renderClickable()
  }
  constructor(e) {
    super(e), this.selectable = !0, this.layoutClass = O.autocompleteRowVertical, this.handleMouseEnter = () => {
      let {
        onHover: e,
        index: t,
        selected: n
      } = this.props;
      null == e || n || "number" != typeof t || e(t)
    }, this.handleClick = e => {
      let {
        onClick: t,
        index: n
      } = this.props;
      null != t && "number" == typeof n && t(n, e)
    }, this.state = {
      hovered: !1
    }
  }
}
class L extends i.PureComponent {
  render() {
    let {
      children: e,
      className: t,
      innerClassName: n,
      id: r,
      ...s
    } = this.props;
    return i.Children.count(e) > 0 ? (0, l.jsx)(b.Provider, {
      value: {
        id: null != r ? r : ""
      },
      children: (0, l.jsx)("div", {
        className: o(O.autocomplete, t),
        children: (0, l.jsx)("div", {
          className: o(O.autocompleteInner, n),
          ...s,
          children: e
        })
      })
    }) : null
  }
}
L.Generic = class e extends P {
  renderContent() {
    let {
      text: e,
      description: t
    } = this.props;
    return (0, l.jsxs)(I.AutocompleteRowContent, {
      children: [(0, l.jsx)(I.AutocompleteRowContentPrimary, {
        children: (0, l.jsx)(I.AutocompleteRowHeading, {
          children: e
        })
      }), null != t ? (0, l.jsx)(I.AutocompleteRowContentSecondary, {
        children: t
      }) : null]
    })
  }
}, L.Loading = function(e) {
  let t = i.useMemo(() => a.random(60, 120), []);
  return (0, l.jsx)("div", {
    className: O.base,
    "aria-busy": !0,
    children: (0, l.jsx)(I.AutocompleteRowContent, {
      children: (0, l.jsx)(I.AutocompleteRowContentPrimary, {
        children: (0, l.jsx)(I.AutocompleteRowHeading, {
          children: (0, l.jsx)("div", {
            className: O.autocompletePlaceholder,
            style: {
              width: t
            }
          })
        })
      })
    })
  })
}, L.Title = function(e) {
  let {
    title: t,
    className: n,
    children: r
  } = e, s = i.useContext(b);
  return (0, l.jsx)("div", {
    className: O.base,
    children: (0, l.jsxs)(d.Heading, {
      id: k(s.id),
      className: o(O.contentTitle, n),
      variant: "heading-deprecated-12/semibold",
      children: [t, r]
    })
  })
}, L.Divider = class e extends P {
  renderContent() {
    let {
      className: e
    } = this.props;
    return (0, l.jsx)("div", {
      className: o(e, O.divider)
    })
  }
  constructor(...e) {
    super(...e), this.layoutClass = O.dividerContainer, this.selectable = !1
  }
}, L.User = class e extends P {
  renderContent() {
    let {
      user: e,
      nick: t,
      status: n,
      hidePersonalInformation: i,
      guildId: r
    } = this.props;
    return (0, l.jsxs)(I.AutocompleteRowContent, {
      children: [(0, l.jsx)(I.AutocompleteRowIcon, {
        children: (0, l.jsx)(d.Avatar, {
          size: d.AvatarSizes.SIZE_24,
          src: e.getAvatarURL(r, 24),
          "aria-hidden": !0,
          status: n
        })
      }), (0, l.jsx)(I.AutocompleteRowContentPrimary, {
        children: (0, l.jsx)(I.AutocompleteRowHeading, {
          children: null != t ? t : x.default.getName(e)
        })
      }), (0, l.jsxs)(I.AutocompleteRowContentSecondary, {
        children: [(0, l.jsx)("span", {
          className: O.descriptionUsername,
          children: x.default.getUserTag(e, {
            mode: "username",
            identifiable: i ? "never" : "always"
          })
        }), i || e.isPomelo() ? null : (0, l.jsxs)("span", {
          className: O.descriptionDiscriminator,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
}, L.Role = class e extends P {
  renderContent() {
    let {
      role: e,
      hideDescription: t
    } = this.props, {
      colorString: n
    } = e, i = "dot" === c.default.roleStyle, r = "username" === c.default.roleStyle && null != n, o = r ? {
      color: n
    } : void 0;
    return (0, l.jsxs)(I.AutocompleteRowContent, {
      children: [(0, l.jsx)(I.AutocompleteRowContentPrimary, {
        children: (0, l.jsxs)(I.AutocompleteRowHeading, {
          children: [i && (0, l.jsx)(d.RoleDot, {
            className: O.roleDot,
            color: n,
            tooltip: !1
          }), (0, l.jsxs)("span", {
            style: o,
            children: ["@", e.name]
          })]
        })
      }), t ? null : (0, l.jsx)(I.AutocompleteRowContentSecondary, {
        children: R.default.Messages.MENTION_USERS_WITH_ROLE
      })]
    })
  }
}, L.Channel = class e extends P {
  renderContent() {
    let {
      channel: e,
      category: t
    } = this.props, n = e.type === A.ChannelTypes.GUILD_CATEGORY ? N.default : (0, E.getChannelIconComponent)(e);
    return (0, l.jsxs)(I.AutocompleteRowContent, {
      children: [null != n && (0, l.jsx)(I.AutocompleteRowIcon, {
        children: (0, l.jsx)(n, {
          className: O.icon
        })
      }), (0, l.jsx)(I.AutocompleteRowContentPrimary, {
        children: (0, l.jsx)(I.AutocompleteRowHeading, {
          children: (0, h.computeChannelName)(e, y.default, v.default)
        })
      }), null != t ? (0, l.jsx)(I.AutocompleteRowContentSecondary, {
        children: t.name
      }) : null]
    })
  }
}, L.Command = class e extends P {
  renderContent() {
    let {
      command: e
    } = this.props;
    return (0, l.jsxs)(I.AutocompleteRowContent, {
      children: [(0, l.jsx)(I.AutocompleteRowIcon, {
        children: (0, l.jsx)(_.default, {
          className: O.icon,
          foreground: O.iconForeground
        })
      }), (0, l.jsx)(I.AutocompleteRowContentPrimary, {
        children: (0, l.jsx)(I.AutocompleteRowHeading, {
          children: e.name
        })
      }), (0, l.jsx)(I.AutocompleteRowContentSecondary, {
        children: e.description
      })]
    })
  }
}, L.NewCommand = class e extends P {
  isSelectable() {
    return this.props.command.inputType !== f.ApplicationCommandInputType.PLACEHOLDER
  }
  renderContent() {
    let {
      command: e,
      channel: t,
      showImage: n,
      section: i,
      selected: r
    } = this.props, {
      hovered: o
    } = this.state, s = this.isSelectable();
    return e.inputType === f.ApplicationCommandInputType.PLACEHOLDER ? (0, l.jsx)(m.default, {}) : (0, l.jsx)(p.default, {
      command: e,
      channel: t,
      showImage: n,
      showOptions: o || s && r,
      section: i,
      isSelectable: s
    })
  }
}, L.Emoji = class e extends P {
  renderContent() {
    let {
      emoji: e,
      sentinel: t,
      guild: n,
      pack: i
    } = this.props, r = null != e.url && "" !== e.url ? (0, l.jsx)("img", {
      alt: "",
      className: O.emojiImage,
      src: e.url
    }) : (0, l.jsx)("span", {
      className: O.emojiRaw,
      children: e.surrogates
    }), o = null != i ? (0, l.jsx)(I.AutocompleteRowContentSecondary, {
      children: R.default.Messages.EMOJI_CATEGORY_PACK.format({
        packName: i.name
      })
    }) : null != n ? (0, l.jsx)(I.AutocompleteRowContentSecondary, {
      children: n.name
    }) : null;
    return (0, l.jsxs)(I.AutocompleteRowContent, {
      children: [(0, l.jsx)(I.AutocompleteRowIcon, {
        children: r
      }), (0, l.jsx)(I.AutocompleteRowContentPrimary, {
        children: (0, l.jsxs)(I.AutocompleteRowHeading, {
          children: [t, e.name, t]
        })
      }), o]
    })
  }
  constructor(...e) {
    super(...e), this.layoutClass = o(O.autocompleteRowVertical, O.autocompleteRowVerticalSmall)
  }
}, L.GIFIntegration = class e extends P {
  renderContent() {
    let {
      width: e,
      height: t,
      src: n
    } = this.props;
    return (0, l.jsx)("img", {
      alt: "",
      src: n,
      width: e,
      height: t
    })
  }
  constructor(...e) {
    super(...e), this.layoutClass = O.autocompleteRowHorizontal
  }
}, L.Sticker = class e extends P {
  renderContent() {
    var e, t;
    let n;
    let {
      queryMatch: i,
      renderSticker: r,
      selected: o,
      sticker: s
    } = this.props, {
      hovered: a
    } = this.state;
    return (0, C.isStandardSticker)(s) ? n = null === (e = g.default.getStickerPack(s.pack_id)) || void 0 === e ? void 0 : e.name : (0, C.isGuildSticker)(s) && (n = null === (t = T.default.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name), (0, l.jsxs)(I.AutocompleteRowContent, {
      children: [(0, l.jsx)(I.AutocompleteRowIcon, {
        children: r(s, a || !0 === o)
      }), (0, l.jsxs)(I.AutocompleteRowContentPrimary, {
        children: [(0, l.jsx)(I.AutocompleteRowHeading, {
          className: O.stickerName,
          children: s.name
        }), null != i && (0, l.jsx)(I.AutocompleteRowSubheading, {
          children: R.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
            queryMatch: i
          })
        })]
      }), null != n && (0, l.jsx)(I.AutocompleteRowContentSecondary, {
        children: n
      })]
    })
  }
  constructor(...e) {
    super(...e), this.layoutClass = o(O.autocompleteRowVertical, O.autocompleteRowVerticalSmall)
  }
}, L.EmojiUpsell = class e extends P {
  renderContent() {
    return (0, l.jsx)(S.default, {
      emojis: this.props.emojis
    })
  }
};
var U = L
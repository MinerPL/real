"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("222007"), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s("446674"),
  d = s("77078"),
  u = s("272030"),
  c = s("851387"),
  E = s("534291"),
  _ = s("599417"),
  T = s("161778"),
  I = s("102985"),
  S = s("697218"),
  N = s("941886"),
  g = s("810567"),
  f = s("258078"),
  A = s("117362"),
  L = s("655518"),
  m = s("158998"),
  C = s("592407"),
  O = s("468349"),
  h = s("900938"),
  R = s("431451"),
  D = s("772871"),
  M = s("318496"),
  G = s("49111"),
  x = s("782340"),
  p = s("383385"),
  U = s("405879");

function v(e) {
  let {
    transitionState: t,
    guild: s,
    user: l,
    ban: i,
    hideDiscriminator: r,
    onClose: o
  } = e, [u, E] = n.useState(!1), [T, I] = n.useState(null);
  async function S() {
    if (null != s) {
      I(null), E(!0);
      try {
        await c.default.unbanUser(s.id, l.id), o()
      } catch (e) {
        I(new _.default(e)), E(!1)
      }
    }
  }
  return (0, a.jsxs)(d.ModalRoot, {
    className: p.bannedUserModal,
    transitionState: t,
    children: [(0, a.jsxs)(d.ModalHeader, {
      className: p.header,
      separator: !1,
      children: [(0, a.jsx)(f.default, {
        size: f.default.Sizes.SIZE_24,
        className: p.userUsername,
        children: m.default.getUserTag(l, {
          mode: "username",
          identifiable: r ? "never" : "always"
        })
      }), r || l.isPomelo() ? null : (0, a.jsxs)(f.default, {
        size: f.default.Sizes.SIZE_24,
        className: p.userDiscrim,
        children: ["#", l.discriminator]
      })]
    }), (0, a.jsxs)(d.ModalContent, {
      className: p.content,
      children: [(0, a.jsx)(d.Text, {
        className: p.reasonHeader,
        variant: "text-xs/normal",
        children: x.default.Messages.BAN_REASON
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: null != i.reason && "" !== i.reason ? i.reason : x.default.Messages.NO_BAN_REASON
      }), null != T ? (0, a.jsx)(d.Text, {
        className: p.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: T.getAnyErrorMessage()
      }) : null]
    }), (0, a.jsxs)(d.ModalFooter, {
      className: p.footer,
      children: [(0, a.jsx)(d.Button, {
        onClick: S,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.RED,
        submitting: u,
        children: x.default.Messages.REVOKE_BAN
      }), (0, a.jsx)(d.Button, {
        onClick: o,
        children: x.default.Messages.DONE
      })]
    })]
  })
}
class j extends n.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: s
    } = this.props;
    return (0, a.jsxs)(d.Clickable, {
      className: i(p.bannedUser, U.card),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, a.jsx)(d.Avatar, {
        src: e.getAvatarURL(null == s ? void 0 : s.id, 40),
        "aria-label": e.username,
        size: d.AvatarSizes.SIZE_40,
        className: p.bannedUserAvatar
      }), (0, a.jsxs)("div", {
        className: p.username,
        children: [m.default.getUserTag(e, {
          mode: "username",
          identifiable: t ? "never" : "always"
        }), !t && !e.isPomelo() && (0, a.jsxs)("span", {
          className: p.discrim,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleShowModal = () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: s,
        ban: n
      } = this.props;
      (0, d.openModal)(l => (0, a.jsx)(v, {
        ...l,
        guild: e,
        user: t,
        ban: n,
        hideDiscriminator: s
      }))
    }, this.handleContextMenu = e => {
      (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await s.el("590079").then(s.bind(s, "590079"));
        return t => (0, a.jsx)(e, {
          ...t,
          user: this.props.user
        })
      })
    }
  }
}
class P extends n.PureComponent {
  makeFilter(e) {
    if (null == e || 0 === e.length) return e => null != e;
    {
      let t = RegExp("^".concat(L.default.escape(e)), "i");
      return s => null != s && (s.id === e || t.test(s.username))
    }
  }
  render() {
    let {
      bans: e,
      guild: t,
      searchQuery: s
    } = this.props;
    if (null == t) return null;
    let n = this.getSortedBans(e, s);
    return (0, a.jsx)(E.ListContentScroller, {
      sections: [Math.max(1, n.length)],
      sectionHeight: this.getSectionHeight,
      renderSection: this.renderSection,
      rowHeight: this.getRowHeight,
      renderRow: this.renderRow
    })
  }
  handleModerationClick() {
    C.default.setSection(G.GuildSettingsSections.SAFETY), (0, R.setSafetyPage)(D.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION)
  }
  handleQueryChange(e) {
    C.default.setSearchQuery(e)
  }
  handleQueryClear() {
    C.default.setSearchQuery("")
  }
  constructor(...e) {
    super(...e), this.getSortedBans = (0, A.cachedFunction)((e, t) => {
      if (null == e) return [];
      let s = this.makeFilter(t),
        a = [];
      for (let t of e.keys()) {
        let e = S.default.getUser(t);
        null != e && s(e) && a.push(e)
      }
      return a.sort((e, t) => e.username.localeCompare(t.username))
    }), this.getRowHeight = (e, t) => {
      var s;
      if (e > 0) return 0;
      let {
        bans: a,
        searchQuery: n
      } = this.props, l = this.getSortedBans(a, n);
      if (0 === l.length && 1 === t) return 56;
      let i = l[t],
        r = null == a ? void 0 : a.get(null !== (s = null == i ? void 0 : i.id) && void 0 !== s ? s : "");
      return null == i || null == r ? 0 : 56
    }, this.renderRow = e => {
      var t;
      let {
        section: s,
        row: n
      } = e, {
        bans: l,
        streamerMode: i,
        guild: r,
        searchQuery: o
      } = this.props;
      if (s > 0) return null;
      if (null == l && 0 === n) return (0, a.jsx)(d.Spinner, {
        className: p.spinner,
        type: d.Spinner.Type.SPINNING_CIRCLE
      }, "spinner");
      let u = this.getSortedBans(l, o),
        c = u[n],
        E = null == l ? void 0 : l.get(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : "");
      if (null != c && null != E) return (0, a.jsx)(j, {
        user: c,
        ban: E,
        hideDiscriminator: i,
        guild: r
      }, c.id)
    }, this.getSectionHeight = e => {
      if (e > 0) return 0;
      let {
        bans: t
      } = this.props;
      return null == t ? 462 : 120
    }, this.renderSection = () => {
      var e;
      let t;
      let {
        bans: n,
        theme: l,
        searchQuery: i
      } = this.props;
      null == n ? t = null : (null == n ? void 0 : n.size) === 0 && (t = (0, a.jsxs)(N.default, {
        theme: l,
        className: p.emptyState,
        children: [(0, a.jsx)(N.EmptyStateImage, {
          darkSrc: s("325911"),
          lightSrc: s("138147"),
          width: 256,
          height: 212
        }), (0, a.jsx)(N.EmptyStateText, {
          note: x.default.Messages.BANS_NO_USERS_BANNED,
          style: {
            maxWidth: 300
          },
          children: x.default.Messages.NO_BANS
        })]
      }));
      let r = null !== (e = null == n ? void 0 : n.size) && void 0 !== e ? e : 0;
      return (0, a.jsxs)(d.FormSection, {
        tag: d.FormTitleTags.H1,
        title: x.default.Messages.BANS_HEADER.format({
          bans: r
        }),
        children: [(0, a.jsxs)("div", {
          className: p.settingsHeader,
          children: [(0, a.jsx)(d.FormText, {
            type: d.FormTextTypes.DESCRIPTION,
            className: p.description,
            children: x.default.Messages.BANS_HINT.format({
              onModerationClick: this.handleModerationClick
            })
          }), null == t && (0, a.jsx)(g.default, {
            className: p.searchBar,
            query: null != i ? i : "",
            placeholder: x.default.Messages.BANS_SEARCH_PLACEHOLDER,
            "aria-label": x.default.Messages.BANS_SEARCH_PLACEHOLDER,
            onChange: this.handleQueryChange,
            onClear: this.handleQueryClear
          })]
        }), (0, a.jsx)(d.FormDivider, {
          style: {
            marginBottom: -1
          }
        }), t]
      }, "bans-header")
    }
  }
}
let y = o.default.connectStores([h.default, T.default, I.default], () => {
  let {
    bans: e,
    guild: t,
    searchQuery: s
  } = h.default.getProps();
  return {
    searchQuery: null != s ? s : "",
    bans: e,
    guild: t,
    theme: T.default.theme,
    streamerMode: I.default.hidePersonalInformation
  }
})(P);

function b() {
  var e;
  let {
    guild: t
  } = (0, o.useStateFromStores)([h.default], () => h.default.getProps(), [], r.isEqual), {
    enabled: s
  } = O.GuildSettingsBansNewExperiment.useExperiment({
    guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "",
    location: "4d6318_1"
  }, {
    autoTrackExposure: !0
  });
  return s ? (0, a.jsx)(M.default, {}) : (0, a.jsx)(y, {})
}
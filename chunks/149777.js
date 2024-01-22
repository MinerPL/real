"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("483366"),
  d = l.n(o),
  r = l("969176"),
  u = l.n(r),
  C = l("65597"),
  c = l("77078"),
  f = l("305961"),
  m = l("627490"),
  E = l("745633"),
  M = l("980428"),
  h = l("83900"),
  T = l("875436"),
  x = l("772280"),
  _ = l("71216"),
  H = l("741919"),
  g = l("178406"),
  A = l("645266"),
  p = l("835257"),
  S = l("49111"),
  L = l("782340"),
  N = l("579550"),
  I = l("946032");
let v = [p.JoinSourceType.DISCOVERY, p.JoinSourceType.VANITY_URL, p.JoinSourceType.BOT, p.JoinSourceType.HUB];

function b(e) {
  let {
    type: t,
    vanityUrl: l,
    size: n,
    isFocused: s
  } = e, o = null != n ? n : 16, d = (0, p.getJoinSourceTypeLabel)(t, l), r = function(e, t) {
    switch (e) {
      case p.JoinSourceType.BOT:
        return (0, a.jsx)(_.default, {
          className: N.icon,
          height: t,
          width: t
        });
      case p.JoinSourceType.INTEGRATION:
        return (0, a.jsx)(H.default, {
          className: N.icon,
          height: t,
          width: t
        });
      case p.JoinSourceType.DISCOVERY:
        return (0, a.jsx)(m.default, {
          className: N.icon,
          height: t,
          width: t
        });
      case p.JoinSourceType.HUB:
        return (0, a.jsx)(E.default, {
          className: N.icon,
          height: t,
          width: t
        });
      case p.JoinSourceType.INVITE:
        return null;
      case p.JoinSourceType.VANITY_URL:
        return (0, a.jsx)(h.default, {
          className: N.icon,
          height: t,
          width: t
        });
      default:
        return null
    }
  }(t, o);
  return (0, a.jsxs)("div", {
    className: i(N.labelWithIconContainer),
    "aria-label": d,
    children: [null != r ? r : null, (0, a.jsx)(c.Text, {
      variant: 12 === o ? "text-xs/medium" : "text-sm/medium",
      className: i(N.labelText, {
        [N.focused]: s
      }),
      children: d
    })]
  })
}

function j(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, C.default)([g.default], () => g.default.getSearchStateByGuildId(t), [t], u), o = (0, C.default)([f.default], () => f.default.getGuild(t)), r = null == o ? void 0 : o.vanityURLCode, [m, E] = n.useState(!1), {
    selectedSourceInviteCode: h,
    selectedJoinSourceType: _
  } = s, H = null != _ && _ !== p.JoinSourceType.UNSPECIFIED, j = n.useCallback(e => {
    let l = e.trim();
    (0, A.updateSearchState)(t, {
      ...s,
      selectedSourceInviteCode: "" !== l ? l : void 0,
      selectedJoinSourceType: void 0
    })
  }, [t, s]), R = n.useCallback(e => {
    e === _ ? (0, A.updateSearchState)(t, {
      ...s,
      selectedJoinSourceType: void 0
    }) : (0, A.updateSearchState)(t, {
      ...s,
      selectedSourceInviteCode: void 0,
      selectedJoinSourceType: e
    }), E(!1)
  }, [t, s, _]), D = n.useCallback(d(j, 300), [j]), O = n.useCallback(e => {
    D(e)
  }, [D]);
  return (0, a.jsx)(c.Menu, {
    navId: "members-table-join-method-menu",
    onClose: () => {
      l()
    },
    "aria-label": L.default.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
    onSelect: S.NOOP,
    children: m ? (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuItem, {
        id: "back",
        action: () => E(!1),
        render: e => (0, a.jsxs)("span", {
          ...e,
          className: N.customLabelContainer,
          children: [(0, a.jsx)(M.default, {
            width: 16,
            height: 16,
            className: N.caret
          }), (0, a.jsx)(c.Text, {
            variant: "eyebrow",
            color: "header-primary",
            children: L.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
          })]
        })
      }), (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-all",
        label: L.default.Messages.GUILD_SETTINGS_FILTER_ALL,
        checked: null == _,
        disabled: !1,
        action: () => R(void 0),
        group: "join-source-type-options"
      }, "join-source-type-option-all"), v.map(e => (0, a.jsx)(c.MenuRadioItem, {
        id: "join-source-type-option-".concat(e),
        label: t => (0, a.jsx)(b, {
          ...t,
          type: e,
          vanityUrl: r
        }),
        checked: _ === e,
        disabled: !1,
        action: () => R(e),
        group: "join-source-type-options"
      }, "join-source-type-option-".concat(e)))]
    }) : (0, a.jsxs)(c.MenuGroup, {
      children: [(0, a.jsx)(c.MenuControlItem, {
        id: "members-table-invite-code-search",
        control: (e, t) => (0, a.jsx)(c.MenuSearchControl, {
          ...e,
          query: null != h ? h : "",
          onChange: O,
          ref: t,
          placeholder: L.default.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
        })
      }, "invite-code-filter-search"), (0, a.jsx)(c.MenuSeparator, {}), (0, a.jsx)(c.MenuItem, {
        id: "other-join-methods",
        action: () => E(!0),
        render: e => (0, a.jsxs)("div", {
          className: i(N.containerWithRightCaret, N.customLabelContainer),
          children: [(0, a.jsxs)("div", {
            className: i(I.label),
            children: [(0, a.jsx)(c.Text, {
              variant: "text-sm/medium",
              className: i(N.selectedRadio, N.labelText, {
                [N.focused]: e.isFocused
              }),
              children: L.default.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
            }), H ? (0, a.jsx)("div", {
              className: N.selectedOption,
              children: (0, a.jsx)(b, {
                ...e,
                size: 12,
                type: _,
                vanityUrl: r
              })
            }) : null]
          }), H ? (0, a.jsx)(T.default, {
            className: N.icon,
            background: N.radio,
            foreground: N.radioSelection
          }) : (0, a.jsx)(x.default, {
            width: 16,
            height: 16,
            className: N.caret
          })]
        })
      }, "other-join-methods")]
    })
  })
}
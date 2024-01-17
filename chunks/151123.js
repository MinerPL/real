"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("969176"),
  d = l.n(o),
  C = l("65597"),
  r = l("95410"),
  u = l("77078"),
  c = l("685665"),
  f = l("305961"),
  m = l("957255"),
  E = l("118530"),
  M = l("536999"),
  h = l("466818"),
  T = l("178406"),
  x = l("624663"),
  H = l("463200"),
  _ = l("868967"),
  A = l("512882"),
  L = l("413989"),
  g = l("49111"),
  N = l("782340"),
  S = l("368715"),
  p = l("236807");

function v(e) {
  let {
    label: t,
    onFilter: l,
    selected: n,
    className: s,
    ...o
  } = e;
  return (0, a.jsx)("th", {
    className: i(S.tableHeaderCellContainer, s),
    children: (0, a.jsxs)(u.Clickable, {
      ...o,
      onClick: l,
      className: i(S.tableHeaderCell, {
        [S.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, a.jsx)(u.Text, {
        variant: "eyebrow",
        color: n ? "text-brand" : "header-secondary",
        children: t
      }), null != l && (0, a.jsx)("div", {
        className: S.filterIconButton,
        children: (0, a.jsx)(E.default, {
          className: S.filterIcon,
          color: n ? u.tokens.colors.CONTROL_BRAND_FOREGROUND.css : u.tokens.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    })
  })
}
let R = "member-safety-force-show-signals-tooltip";

function I(e) {
  var t;
  let {
    guildId: l,
    currentPagedMembers: s
  } = e, o = (0, C.default)([T.default], () => T.default.getSearchStateByGuildId(l), [l], d), E = (0, C.default)([m.default, f.default], () => m.default.can(g.Permissions.MANAGE_GUILD, f.default.getGuild(l)), [l]), {
    selectedUserIds: I,
    addUsers: j,
    clearSelection: b
  } = (0, x.default)(l), D = o.requireUnusualDmActivity || o.requireCommunicationDisabled || o.requireUnusualAccountActivity || o.requireUsernameQuarantined, O = o.selectedRoleIds.size > 0, V = null != o.selectedJoinDateOption.afterDate, B = null != o.selectedAccountAgeOption.afterDate, [F, U] = n.useState(null == r.default.get(R, null)), w = n.useCallback(() => {
    r.default.set(R, Date.now()), U(!1)
  }, []), {
    analyticsLocations: Z
  } = (0, c.default)(), k = null !== (t = null == Z ? void 0 : Z[0]) && void 0 !== t ? t : null, y = (0, h.useCanAccessBulkBanningFeature)(l, k, !0), P = (0, M.isInMembersTablesAdditionalFilteringExperiment)(l), Y = n.useMemo(() => s.filter(e => (0, h.canBulkBanUser)(l, y, e)), [y, s, l]), G = Y.length > 0, q = Y.filter(e => !I.has(e)), K = 0 === q.length, z = n.useCallback(() => {
    G && (K ? b() : j(Y))
  }, [G, K, b, j, Y]);
  return (0, a.jsx)("thead", {
    children: (0, a.jsxs)("tr", {
      className: S.tableHeaderRow,
      children: [y && (0, a.jsx)("th", {
        className: i(S.tableHeaderCellContainer, p.xsmallCol),
        children: (0, a.jsx)(u.Tooltip, {
          shouldShow: !G,
          text: N.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, a.jsx)(u.Clickable, {
            ...e,
            onClick: z,
            className: S.tableHeaderCell,
            children: (0, a.jsx)(u.Checkbox, {
              type: u.Checkbox.Types.INVERTED,
              value: K,
              disabled: !G
            })
          })
        })
      }), (0, a.jsx)(v, {
        label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), P ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Popout, {
          animation: u.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(A.default, {
            guildId: l,
            onClose: g.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(v, {
              label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              selected: V,
              className: p.smallCol,
              ...l
            })
          }
        }), (0, a.jsx)(u.Popout, {
          animation: u.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(H.default, {
            guildId: l,
            onClose: g.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(v, {
              label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              selected: B,
              className: p.smallCol,
              ...l
            })
          }
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(v, {
          label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: p.smallCol
        }), (0, a.jsx)(v, {
          label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: p.smallCol
        })]
      }), E && (0, a.jsx)(v, {
        label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
        className: p.smallCol
      }), (0, a.jsx)(u.Popout, {
        animation: u.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(L.default, {
            guildId: l,
            onClose: t
          })
        },
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(v, {
            label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: t,
            selected: O,
            className: i(p.mediumCol),
            ...l
          })
        }
      }), (0, a.jsx)(u.Tooltip, {
        text: N.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
        position: "top",
        align: "left",
        forceOpen: F,
        shouldShow: !0,
        color: u.Tooltip.Colors.BRAND,
        children: e => (0, a.jsx)(u.Popout, {
          animation: u.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return (0, a.jsx)(_.default, {
              guildId: l,
              onClose: t
            })
          },
          children: t => (0, a.jsx)(v, {
            label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": N.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: l => {
              var a, n;
              w(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (n = e.onClick) || void 0 === n || n.call(e)
            },
            selected: D,
            className: i(p.smallCol),
            onMouseEnter: () => {
              var l, a;
              w(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
            },
            onMouseDown: t.onMouseDown,
            onMouseLeave: e.onMouseLeave,
            onBlur: e.onBlur,
            onFocus: e.onFocus,
            onKeyDown: t.onKeyDown,
            "aria-controls": t["aria-controls"],
            "aria-expanded": t["aria-expanded"]
          })
        })
      }), (0, a.jsx)(v, {
        label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: p.smallCol
      })]
    })
  })
}
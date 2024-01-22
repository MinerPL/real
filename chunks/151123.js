"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("969176"),
  d = l.n(o),
  r = l("65597"),
  u = l("95410"),
  C = l("77078"),
  c = l("305961"),
  f = l("957255"),
  m = l("118530"),
  E = l("536999"),
  M = l("466818"),
  h = l("178406"),
  T = l("624663"),
  x = l("463200"),
  _ = l("868967"),
  H = l("512882"),
  g = l("149777"),
  A = l("413989"),
  p = l("49111"),
  S = l("782340"),
  L = l("368715"),
  N = l("236807");

function I(e) {
  let {
    label: t,
    onFilter: l,
    selected: n,
    className: s,
    ...o
  } = e;
  return (0, a.jsx)("th", {
    className: i(L.tableHeaderCellContainer, s),
    children: (0, a.jsxs)(C.Clickable, {
      ...o,
      onClick: l,
      className: i(L.tableHeaderCell, {
        [L.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, a.jsx)(C.Text, {
        variant: "eyebrow",
        color: n ? "text-brand" : "header-secondary",
        children: t
      }), null != l && (0, a.jsx)("div", {
        className: L.filterIconButton,
        children: (0, a.jsx)(m.default, {
          className: L.filterIcon,
          color: n ? C.tokens.colors.CONTROL_BRAND_FOREGROUND.css : C.tokens.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    })
  })
}
let v = "member-safety-force-show-signals-tooltip";

function b(e) {
  let {
    guildId: t,
    currentPagedMembers: l
  } = e, s = (0, r.default)([h.default], () => h.default.getSearchStateByGuildId(t), [t], d), o = (0, r.default)([f.default, c.default], () => f.default.can(p.Permissions.MANAGE_GUILD, c.default.getGuild(t)), [t]), {
    selectedUserIds: m,
    addUsers: b,
    clearSelection: j
  } = (0, T.default)(t), R = s.requireUnusualDmActivity || s.requireCommunicationDisabled || s.requireUnusualAccountActivity || s.requireUsernameQuarantined, D = s.selectedRoleIds.size > 0, O = null != s.selectedJoinDateOption.afterDate, V = null != s.selectedAccountAgeOption.afterDate, B = null != s.selectedSourceInviteCode && "" !== s.selectedSourceInviteCode, y = null != s.selectedJoinSourceType, F = B || y, [U, w] = n.useState(null == u.default.get(v, null)), k = n.useCallback(() => {
    u.default.set(v, Date.now()), w(!1)
  }, []), Z = (0, M.useCanAccessBulkBanningFeature)(t), P = (0, E.isInMembersTablesAdditionalFilteringExperiment)(t), Y = n.useMemo(() => l.filter(e => (0, M.canBulkBanUser)(t, Z, e)), [Z, l, t]), G = Y.length > 0, q = Y.filter(e => !m.has(e)), J = 0 === q.length, K = n.useCallback(() => {
    G && (J ? j() : b(Y))
  }, [G, J, j, b, Y]);
  return (0, a.jsx)("thead", {
    children: (0, a.jsxs)("tr", {
      className: L.tableHeaderRow,
      children: [Z && (0, a.jsx)("th", {
        className: i(L.tableHeaderCellContainer, N.xsmallCol),
        children: (0, a.jsx)(C.Tooltip, {
          shouldShow: !G,
          text: S.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, a.jsx)(C.Clickable, {
            ...e,
            onClick: K,
            className: L.tableHeaderCell,
            children: (0, a.jsx)(C.Checkbox, {
              type: C.Checkbox.Types.INVERTED,
              value: J,
              disabled: !G
            })
          })
        })
      }), (0, a.jsx)(I, {
        label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), P ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(H.default, {
            guildId: t,
            onClose: p.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(I, {
              label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              selected: O,
              className: N.smallCol,
              ...l
            })
          }
        }), (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(x.default, {
            guildId: t,
            onClose: p.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(I, {
              label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              selected: V,
              className: N.smallCol,
              ...l
            })
          }
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(I, {
          label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: N.smallCol
        }), (0, a.jsx)(I, {
          label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: N.smallCol
        })]
      }), o && P ? (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(g.default, {
          guildId: t,
          onClose: p.NOOP
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(I, {
            label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
            onFilter: t,
            selected: F,
            className: N.smallCol,
            ...l
          })
        }
      }) : null, (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, a.jsx)(A.default, {
            guildId: t,
            onClose: l
          })
        },
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(I, {
            label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: t,
            selected: D,
            className: i(N.mediumCol),
            ...l
          })
        }
      }), (0, a.jsx)(C.Tooltip, {
        text: S.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
        position: "top",
        align: "left",
        forceOpen: U,
        shouldShow: !0,
        color: C.Tooltip.Colors.BRAND,
        children: e => (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: l
            } = e;
            return (0, a.jsx)(_.default, {
              guildId: t,
              onClose: l
            })
          },
          children: t => (0, a.jsx)(I, {
            label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": S.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: l => {
              var a, n;
              k(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (n = e.onClick) || void 0 === n || n.call(e)
            },
            selected: R,
            className: i(N.smallCol),
            onMouseEnter: () => {
              var l, a;
              k(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
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
      }), (0, a.jsx)(I, {
        label: S.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: N.smallCol
      })]
    })
  })
}
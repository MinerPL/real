"use strict";
l.r(t), l.d(t, {
  default: function() {
    return el
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("917351"),
  d = l("969176"),
  C = l.n(d),
  r = l("249654"),
  u = l("65597"),
  c = l("669491"),
  f = l("77078"),
  m = l("87657"),
  E = l("149638"),
  M = l("685665"),
  h = l("681937"),
  T = l("509"),
  x = l("654017"),
  H = l("982108"),
  _ = l("305961"),
  A = l("957255"),
  L = l("697218"),
  g = l("91551"),
  N = l("4845"),
  S = l("635731"),
  p = l("491401"),
  v = l("663745"),
  R = l("781896"),
  I = l("864982"),
  j = l("151185"),
  b = l("387111"),
  D = l("158998"),
  O = l("536999"),
  V = l("466818"),
  B = l("178406"),
  F = l("150162"),
  U = l("998940"),
  w = l("290491"),
  Z = l("624663"),
  k = l("553275"),
  y = l("412013"),
  P = l("49111"),
  Y = l("782340"),
  G = l("236807");
let q = n.memo(function(e) {
  let {
    member: t
  } = e, l = n.useMemo(() => (0, T.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = n.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = (0, O.isInMembersTableSafetySignalsExperiment)(t.guildId);
  return (0, a.jsxs)("div", {
    className: i(G.flagContainer),
    children: [t.hasUnusualDmActivity && (0, a.jsx)(f.Tooltip, {
      text: Y.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(N.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    }), l && (0, a.jsx)(f.Tooltip, {
      "aria-label": Y.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
      allowOverflow: !0,
      text: (0, a.jsxs)("div", {
        className: G.communicationDisabledTooltip,
        children: [(0, a.jsx)("div", {
          children: Y.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
        }), (0, a.jsx)(g.default, {
          deadline: s,
          showUnits: !0,
          stopAtOneSec: !0
        })]
      }),
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(p.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), o && (0, x.isSpammer)(t.userId) && (0, a.jsx)(f.Tooltip, {
      text: Y.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(I.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), o && (0, h.hasAutomodQuarantinedProfile)(t) && (0, a.jsx)(f.Tooltip, {
      text: Y.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(S.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    })]
  })
});

function K(e) {
  let {
    member: t
  } = e, l = (0, u.default)([_.default], () => _.default.getGuild(t.guildId), [t.guildId]), s = n.useMemo(() => {
    var e;
    if (null == l) return [];
    let a = null !== (e = null == l ? void 0 : l.roles) && void 0 !== e ? e : {};
    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
      var l, n, s, i;
      return null !== (i = null !== (s = null === (l = a[t]) || void 0 === l ? void 0 : l.position) && void 0 !== s ? s : 0 - (null === (n = a[e]) || void 0 === n ? void 0 : n.position)) && void 0 !== i ? i : 0
    })
  }, [t.roles, t.highestRoleId, l]);
  return null == l || 0 === s.length ? null : (0, a.jsx)("div", {
    className: G.roleTooltipItemContainer,
    children: s.map(e => (0, a.jsx)(y.default, {
      className: i(G.roleTooltipItem),
      role: l.roles[e],
      guildId: t.guildId
    }, e))
  })
}
let z = n.memo(function(e) {
    let {
      member: t,
      highestRole: l
    } = e, s = (0, u.default)([_.default], () => _.default.getGuild(t.guildId), [t.guildId]), [o, d] = n.useState(!1), C = t.roles.length - 1, r = n.useMemo(() => new Intl.NumberFormat(Y.default.getLocale()).format(C), [C]), c = (0, k.useContextMenuModerateRoles)(t), m = (0, u.default)([A.default], () => A.default.can(P.Permissions.MANAGE_ROLES, s), [s]), E = n.useCallback(e => () => {
      d(!0), null == e || e()
    }, []), M = n.useCallback(e => () => {
      d(!1), null == e || e()
    }, []);
    return null == s ? null : (0, a.jsxs)("div", {
      className: i(G.roleContainer),
      children: [null != l && (0, a.jsx)(y.default, {
        className: i(G.roleTooltipItem, G.highestRole),
        role: l,
        guildId: t.guildId
      }), C > 0 && (0, a.jsx)(f.Tooltip, {
        "aria-label": Y.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
        tooltipContentClassName: G.roleTooltip,
        allowOverflow: !0,
        text: (0, a.jsx)("div", {
          className: G.roleTooltipSafetyContainer,
          children: o ? (0, a.jsx)(K, {
            member: t
          }) : Y.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
        }),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(G.otherRoles),
            onMouseEnter: E(t),
            onMouseLeave: M(l),
            children: (0, a.jsxs)(f.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: ["+", r]
            })
          })
        }
      }), m && (0, a.jsx)(f.Tooltip, {
        text: Y.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(G.otherRoles, G.addRoleContainer),
            onClick: c,
            onMouseEnter: t,
            onMouseLeave: l,
            children: (0, a.jsx)(j.default, {
              className: i(G.addRoleIcon),
              width: 16,
              height: 16
            })
          })
        }
      })]
    })
  }),
  W = n.memo(function(e) {
    var t;
    let {
      member: l,
      user: n
    } = e;
    return null == n || null == l ? null : (0, a.jsxs)("div", {
      className: i(G.memberNameContainer),
      children: [(0, a.jsx)("div", {
        className: i(G.memberAvatar),
        children: (0, a.jsx)(m.default, {
          user: n
        })
      }), (0, a.jsx)("div", {
        className: i(G.memberName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-sm/medium",
          children: (0, a.jsx)(f.NameWithRole, {
            name: b.default.getName(l.guildId, null, n),
            color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
            className: i(G.memberNameText)
          })
        })
      }), (0, a.jsx)("div", {
        className: i(G.memberGlobalName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: D.default.getUserTag(n)
        })
      })]
    })
  });

function J(e) {
  let t = null == e ? null : (0, U.formatDateRelativeTime)(e, U.MembersTableDateFormats.JOINED_AT),
    l = new Date(null != e ? e : 0).toLocaleDateString(Y.default.getLocale(), U.MEMBER_JOIN_DATE_TOOLTIP_CONFIG);
  return {
    short: t,
    long: l
  }
}

function Q(e) {
  let {
    member: t,
    showLongDate: l
  } = e, [s, o] = n.useState(null);
  return (n.useEffect(() => {
    o(J(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, E.default)(() => {
    o(J(t.joinedAtTimestamp))
  }, 1e4), (null == s ? void 0 : s.short) == null) ? null : l ? (0, a.jsx)("div", {
    className: i(G.joinedAtContainer),
    children: (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: s.long
    })
  }) : (0, a.jsx)("div", {
    className: i(G.joinedAtContainer),
    children: (0, a.jsx)(f.Tooltip, {
      align: "left",
      text: s.long,
      children: e => (0, a.jsx)(f.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-normal",
        children: s.short
      })
    })
  })
}
let X = n.memo(function(e) {
    let {
      member: t,
      showLongDate: l
    } = e, {
      accountCreationDateShort: s,
      accountCreationDateLong: i
    } = n.useMemo(() => {
      let e = r.default.extractTimestamp(t.userId),
        l = (0, U.formatDateRelativeTime)(e, U.MembersTableDateFormats.ACCOUNT_AGE),
        a = new Date(e).toLocaleDateString(Y.default.getLocale(), U.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG);
      return {
        accountCreationDateShort: l,
        accountCreationDateLong: a
      }
    }, [t.userId]);
    return l ? (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: i
    }) : (0, a.jsx)(f.Tooltip, {
      align: "left",
      text: i,
      children: e => (0, a.jsx)(f.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-normal",
        children: s
      })
    })
  }),
  $ = n.memo(function(e) {
    var t;
    let {
      member: l,
      user: s,
      highestRole: o,
      isHoldingAdvancedInfoKey: d,
      onOpenModerationMenu: C,
      onOpenProfileMenu: r,
      compact: c
    } = e, m = (0, u.default)([A.default, _.default], () => A.default.can(P.Permissions.MANAGE_GUILD, _.default.getGuild(l.guildId)), [l.guildId]), {
      selectedUserIds: E,
      addUsers: h,
      removeUser: T
    } = (0, Z.default)(l.guildId), {
      analyticsLocations: x
    } = (0, M.default)(), H = null !== (t = null == x ? void 0 : x[0]) && void 0 !== t ? t : null, L = (0, V.useCanAccessBulkBanningFeature)(l.guildId, H, !0), g = (0, V.useCanBulkBanUser)(l.guildId, L, l.userId), N = n.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != l && g && (E.has(l.userId) ? T(l.userId) : h([l.userId]))
    }, [h, g, l, T, E]);
    return (0, a.jsxs)(a.Fragment, {
      children: [L && (0, a.jsx)(f.Tooltip, {
        tooltipClassName: G.disabledActionTooltip,
        shouldShow: !g,
        text: Y.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
        children: e => (0, a.jsx)("td", {
          ...e,
          children: (0, a.jsx)("div", {
            className: i(G.checkbox, G.xsmallCol),
            children: (0, a.jsx)(f.Clickable, {
              onClick: N,
              children: (0, a.jsx)(f.Checkbox, {
                type: f.Checkbox.Types.INVERTED,
                value: E.has(l.userId),
                disabled: !g
              })
            })
          })
        })
      }), (0, a.jsx)("td", {
        className: i({
          [G.compact]: c
        }),
        children: (0, a.jsx)(W, {
          member: l,
          user: s
        })
      }), (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: c
        }),
        children: (0, a.jsx)(Q, {
          showLongDate: d,
          member: l
        })
      }), (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: c
        }),
        children: (0, a.jsx)(X, {
          showLongDate: d,
          member: l
        })
      }), m && (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: c
        }),
        children: (0, a.jsx)(w.default, {
          userId: l.userId,
          guildId: l.guildId
        })
      }), (0, a.jsx)("td", {
        className: i(G.mediumCol, {
          [G.compact]: c
        }),
        children: (0, a.jsx)(z, {
          member: l,
          highestRole: o
        })
      }), (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: c
        }),
        children: (0, a.jsx)(q, {
          member: l
        })
      }), (0, a.jsx)("td", {
        className: i(G.smallCol, {
          [G.compact]: c
        }),
        children: (0, a.jsxs)("div", {
          className: i(G.actionCell),
          children: [(0, a.jsx)(f.Tooltip, {
            text: Y.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: r,
                className: i(G.button),
                children: (0, a.jsx)(R.default, {
                  width: ee,
                  height: ee
                })
              })
            }
          }), (0, a.jsx)(f.Tooltip, {
            text: Y.default.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: C,
                className: i(G.button),
                children: (0, a.jsx)(v.default, {
                  width: ee,
                  height: ee
                })
              })
            }
          })]
        })
      })]
    })
  }),
  ee = 18,
  et = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"];
var el = n.memo(function(e) {
  let {
    userId: t,
    guildId: l,
    style: s,
    onSelect: d,
    rowSelected: r,
    isHoldingAdvancedInfoKey: c = !1,
    compact: f = !1
  } = e, m = (0, u.default)([H.default], () => H.default.getGuildSidebarState(l), [l]), E = (null == m ? void 0 : m.details.userId) === t, M = (0, u.default)([B.default], () => B.default.getEnhancedMember(l, t), [l, t]), h = (0, k.useHighestRole)(M), T = (0, u.default)([L.default], () => L.default.getUser(t), [t]), x = (0, k.useContextMenuModerateUser)(null != M ? M : void 0), _ = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), x(e)
  }, [x]), A = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != M && (null == d || d(M))
  }, [d, M]), g = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != M && (0, k.openMemberProfile)(M)
  }, [M]), N = n.useCallback((e, t) => C((0, o.omit)(e, et), (0, o.omit)(t, et)), []);
  return null == M ? null : (0, a.jsx)(F.default, {
    role: "row",
    value: M,
    style: s,
    className: i(G.roundedRow, G.memberRowContainer, r && G.selected, E && G.memberSelected),
    equalityFn: N,
    onClick: A,
    onContextMenu: _,
    children: (0, a.jsx)($, {
      member: M,
      user: T,
      highestRole: h,
      isHoldingAdvancedInfoKey: c,
      onOpenModerationMenu: _,
      onOpenProfileMenu: g,
      compact: f
    })
  })
})
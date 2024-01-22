"use strict";
l.r(t), l.d(t, {
  default: function() {
    return et
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("917351"),
  d = l("969176"),
  r = l.n(d),
  u = l("249654"),
  C = l("65597"),
  c = l("669491"),
  f = l("77078"),
  m = l("87657"),
  E = l("149638"),
  M = l("681937"),
  h = l("509"),
  T = l("654017"),
  x = l("982108"),
  _ = l("305961"),
  H = l("957255"),
  g = l("697218"),
  A = l("91551"),
  p = l("4845"),
  S = l("635731"),
  L = l("491401"),
  N = l("663745"),
  I = l("781896"),
  v = l("864982"),
  b = l("151185"),
  j = l("387111"),
  R = l("158998"),
  D = l("536999"),
  O = l("466818"),
  V = l("178406"),
  B = l("150162"),
  y = l("998940"),
  F = l("290491"),
  U = l("624663"),
  w = l("553275"),
  k = l("412013"),
  Z = l("49111"),
  P = l("782340"),
  Y = l("236807");
let G = n.memo(function(e) {
  let {
    member: t
  } = e, l = n.useMemo(() => (0, h.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = n.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = (0, D.isInMembersTableSafetySignalsExperiment)(t.guildId);
  return (0, a.jsxs)("div", {
    className: i(Y.flagContainer),
    children: [t.hasUnusualDmActivity && (0, a.jsx)(f.Tooltip, {
      text: P.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
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
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    }), l && (0, a.jsx)(f.Tooltip, {
      "aria-label": P.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
      allowOverflow: !0,
      text: (0, a.jsxs)("div", {
        className: Y.communicationDisabledTooltip,
        children: [(0, a.jsx)("div", {
          children: P.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
        }), (0, a.jsx)(A.default, {
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
        return (0, a.jsx)(L.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), o && (0, T.isSpammer)(t.userId) && (0, a.jsx)(f.Tooltip, {
      text: P.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(v.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), o && (0, M.hasAutomodQuarantinedProfile)(t) && (0, a.jsx)(f.Tooltip, {
      text: P.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
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

function q(e) {
  let {
    member: t
  } = e, l = (0, C.default)([_.default], () => _.default.getGuild(t.guildId), [t.guildId]), s = n.useMemo(() => {
    var e;
    if (null == l) return [];
    let a = null !== (e = null == l ? void 0 : l.roles) && void 0 !== e ? e : {};
    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
      var l, n, s, i;
      return null !== (i = null !== (s = null === (l = a[t]) || void 0 === l ? void 0 : l.position) && void 0 !== s ? s : 0 - (null === (n = a[e]) || void 0 === n ? void 0 : n.position)) && void 0 !== i ? i : 0
    })
  }, [t.roles, t.highestRoleId, l]);
  return null == l || 0 === s.length ? null : (0, a.jsx)("div", {
    className: Y.roleTooltipItemContainer,
    children: s.map(e => (0, a.jsx)(k.default, {
      className: i(Y.roleTooltipItem),
      role: l.roles[e],
      guildId: t.guildId
    }, e))
  })
}
let J = n.memo(function(e) {
    let {
      member: t,
      highestRole: l
    } = e, s = (0, C.default)([_.default], () => _.default.getGuild(t.guildId), [t.guildId]), [o, d] = n.useState(!1), r = t.roles.length - 1, u = n.useMemo(() => new Intl.NumberFormat(P.default.getLocale()).format(r), [r]), c = (0, w.useContextMenuModerateRoles)(t), m = (0, C.default)([H.default], () => H.default.can(Z.Permissions.MANAGE_ROLES, s), [s]), E = n.useCallback(e => () => {
      d(!0), null == e || e()
    }, []), M = n.useCallback(e => () => {
      d(!1), null == e || e()
    }, []);
    return null == s ? null : (0, a.jsxs)("div", {
      className: i(Y.roleContainer),
      children: [null != l && (0, a.jsx)(k.default, {
        className: i(Y.roleTooltipItem, Y.highestRole),
        role: l,
        guildId: t.guildId
      }), r > 0 && (0, a.jsx)(f.Tooltip, {
        "aria-label": P.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
        tooltipContentClassName: Y.roleTooltip,
        allowOverflow: !0,
        text: (0, a.jsx)("div", {
          className: Y.roleTooltipSafetyContainer,
          children: o ? (0, a.jsx)(q, {
            member: t
          }) : P.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
        }),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(Y.otherRoles),
            onMouseEnter: E(t),
            onMouseLeave: M(l),
            children: (0, a.jsxs)(f.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: ["+", u]
            })
          })
        }
      }), m && (0, a.jsx)(f.Tooltip, {
        text: P.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(Y.otherRoles, Y.addRoleContainer),
            onClick: c,
            onMouseEnter: t,
            onMouseLeave: l,
            children: (0, a.jsx)(b.default, {
              className: i(Y.addRoleIcon),
              width: 16,
              height: 16
            })
          })
        }
      })]
    })
  }),
  K = n.memo(function(e) {
    var t;
    let {
      member: l,
      user: n
    } = e;
    return null == n || null == l ? null : (0, a.jsxs)("div", {
      className: i(Y.memberNameContainer),
      children: [(0, a.jsx)("div", {
        className: i(Y.memberAvatar),
        children: (0, a.jsx)(m.default, {
          user: n
        })
      }), (0, a.jsx)("div", {
        className: i(Y.memberName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-sm/medium",
          children: (0, a.jsx)(f.NameWithRole, {
            name: j.default.getName(l.guildId, null, n),
            color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
            className: i(Y.memberNameText)
          })
        })
      }), (0, a.jsx)("div", {
        className: i(Y.memberGlobalName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: R.default.getUserTag(n)
        })
      })]
    })
  });

function z(e) {
  let t = null == e ? null : (0, y.formatDateRelativeTime)(e, y.MembersTableDateFormats.JOINED_AT),
    l = new Date(null != e ? e : 0).toLocaleDateString(P.default.getLocale(), y.MEMBER_JOIN_DATE_TOOLTIP_CONFIG);
  return {
    short: t,
    long: l
  }
}

function W(e) {
  let {
    member: t,
    showLongDate: l
  } = e, [s, o] = n.useState(null);
  return (n.useEffect(() => {
    o(z(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, E.default)(() => {
    o(z(t.joinedAtTimestamp))
  }, 1e4), (null == s ? void 0 : s.short) == null) ? null : l ? (0, a.jsx)("div", {
    className: i(Y.joinedAtContainer),
    children: (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: s.long
    })
  }) : (0, a.jsx)("div", {
    className: i(Y.joinedAtContainer),
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
let Q = n.memo(function(e) {
    let {
      member: t,
      showLongDate: l
    } = e, {
      accountCreationDateShort: s,
      accountCreationDateLong: i
    } = n.useMemo(() => {
      let e = u.default.extractTimestamp(t.userId),
        l = (0, y.formatDateRelativeTime)(e, y.MembersTableDateFormats.ACCOUNT_AGE),
        a = new Date(e).toLocaleDateString(P.default.getLocale(), y.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG);
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
  X = n.memo(function(e) {
    let {
      member: t,
      user: l,
      highestRole: s,
      isHoldingAdvancedInfoKey: o,
      onOpenModerationMenu: d,
      onOpenProfileMenu: r,
      compact: u
    } = e, c = (0, C.default)([H.default, _.default], () => H.default.can(Z.Permissions.MANAGE_GUILD, _.default.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: m,
      addUsers: E,
      removeUser: M
    } = (0, U.default)(t.guildId), h = (0, O.useCanAccessBulkBanningFeature)(t.guildId), T = (0, O.useCanBulkBanUser)(t.guildId, h, t.userId), x = n.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && T && (m.has(t.userId) ? M(t.userId) : E([t.userId]))
    }, [E, T, t, M, m]);
    return (0, a.jsxs)(a.Fragment, {
      children: [h && (0, a.jsx)(f.Tooltip, {
        tooltipClassName: Y.disabledActionTooltip,
        shouldShow: !T,
        text: P.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
        children: e => (0, a.jsx)("td", {
          ...e,
          children: (0, a.jsx)("div", {
            className: i(Y.checkbox, Y.xsmallCol),
            children: (0, a.jsx)(f.Clickable, {
              onClick: x,
              children: (0, a.jsx)(f.Checkbox, {
                type: f.Checkbox.Types.INVERTED,
                value: m.has(t.userId),
                disabled: !T
              })
            })
          })
        })
      }), (0, a.jsx)("td", {
        className: i({
          [Y.compact]: u
        }),
        children: (0, a.jsx)(K, {
          member: t,
          user: l
        })
      }), (0, a.jsx)("td", {
        className: i(Y.smallCol, {
          [Y.compact]: u
        }),
        children: (0, a.jsx)(W, {
          showLongDate: o,
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(Y.smallCol, {
          [Y.compact]: u
        }),
        children: (0, a.jsx)(Q, {
          showLongDate: o,
          member: t
        })
      }), c && (0, a.jsx)("td", {
        className: i(Y.smallCol, {
          [Y.compact]: u
        }),
        children: (0, a.jsx)(F.default, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, a.jsx)("td", {
        className: i(Y.mediumCol, {
          [Y.compact]: u
        }),
        children: (0, a.jsx)(J, {
          member: t,
          highestRole: s
        })
      }), (0, a.jsx)("td", {
        className: i(Y.smallCol, {
          [Y.compact]: u
        }),
        children: (0, a.jsx)(G, {
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(Y.smallCol, {
          [Y.compact]: u
        }),
        children: (0, a.jsxs)("div", {
          className: i(Y.actionCell),
          children: [(0, a.jsx)(f.Tooltip, {
            text: P.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: r,
                className: i(Y.button),
                children: (0, a.jsx)(I.default, {
                  width: $,
                  height: $
                })
              })
            }
          }), (0, a.jsx)(f.Tooltip, {
            text: P.default.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: d,
                className: i(Y.button),
                children: (0, a.jsx)(N.default, {
                  width: $,
                  height: $
                })
              })
            }
          })]
        })
      })]
    })
  }),
  $ = 18,
  ee = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"];
var et = n.memo(function(e) {
  let {
    userId: t,
    guildId: l,
    style: s,
    onSelect: d,
    rowSelected: u,
    isHoldingAdvancedInfoKey: c = !1,
    compact: f = !1
  } = e, m = (0, C.default)([x.default], () => x.default.getGuildSidebarState(l), [l]), E = (null == m ? void 0 : m.details.userId) === t, M = (0, C.default)([V.default], () => V.default.getEnhancedMember(l, t), [l, t]), h = (0, w.useHighestRole)(M), T = (0, C.default)([g.default], () => g.default.getUser(t), [t]), _ = (0, w.useContextMenuModerateUser)(null != M ? M : void 0), H = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), _(e)
  }, [_]), A = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != M && (null == d || d(M))
  }, [d, M]), p = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != M && (0, w.openMemberProfile)(M)
  }, [M]), S = n.useCallback((e, t) => r((0, o.omit)(e, ee), (0, o.omit)(t, ee)), []);
  return null == M ? null : (0, a.jsx)(B.default, {
    role: "row",
    value: M,
    style: s,
    className: i(Y.roundedRow, Y.memberRowContainer, u && Y.selected, E && Y.memberSelected),
    equalityFn: S,
    onClick: A,
    onContextMenu: H,
    children: (0, a.jsx)(X, {
      member: M,
      user: T,
      highestRole: h,
      isHoldingAdvancedInfoKey: c,
      onOpenModerationMenu: H,
      onOpenProfileMenu: p,
      compact: f
    })
  })
})
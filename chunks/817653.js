"use strict";
s.r(t), s.d(t, {
  default: function() {
    return K
  }
}), s("222007"), s("808653");
var l = s("37983"),
  a = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("404118"),
  u = s("450911"),
  c = s("18054"),
  h = s("318738"),
  E = s("798609"),
  f = s("339023"),
  m = s("929278"),
  g = s("619395"),
  T = s("923510"),
  S = s("230324"),
  N = s("901998"),
  C = s("26989"),
  _ = s("305961"),
  p = s("957255"),
  M = s("697218"),
  x = s("79798"),
  R = s("145131"),
  I = s("555158"),
  A = s("381546"),
  O = s("45029"),
  L = s("682344"),
  v = s("228427"),
  j = s("31225"),
  D = s("447089"),
  y = s("991170"),
  F = s("454273"),
  b = s("443202"),
  P = s("165161"),
  H = s("460812"),
  w = s("606762"),
  U = s("49111"),
  B = s("843455"),
  G = s("782340"),
  V = s("674310");

function k(e) {
  let {
    channel: t,
    roles: s,
    members: a,
    disabledReason: n,
    getRemoveTooltipHint: r
  } = e;
  return (0, l.jsx)(o.List, {
    className: V.roleMemberList,
    sections: [s.length, a.length],
    renderRow: function(e) {
      let c, m, T, {
          section: S,
          row: N
        } = e,
        C = !1;
      switch (S) {
        case w.AudienceSelectorSections.ROLES:
          var _;
          T = (m = s[N]).rowType === w.RowType.ROLE && (null === (_ = m.tags) || void 0 === _ ? void 0 : _.guild_connections) === null ? (0, l.jsx)(f.default, {
            className: V.shield,
            color: m.colorString,
            size: 20
          }) : (0, l.jsx)(L.default, {
            className: V.shield,
            color: m.colorString,
            height: 20
          }), c = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: V.rowHeight,
              children: T
            }), (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: V.rowLabel,
              color: m.disabled ? "text-muted" : "text-normal",
              children: m.name
            })]
          }), C = m.disabled;
          break;
        case w.AudienceSelectorSections.MEMBERS:
          m = a[N], c = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Avatar, {
              src: m.avatarURL,
              size: o.AvatarSizes.SIZE_24,
              "aria-hidden": !0
            }), (0, l.jsx)(o.Text, {
              className: V.rowLabel,
              variant: "text-sm/normal",
              children: m.name
            }), m.bot && (0, l.jsx)(x.default, {
              verified: m.verifiedBot,
              className: V.rowBotTag
            }), null != m.nickname && (0, l.jsx)(o.Text, {
              color: "text-muted",
              className: V.rowLabelSubText,
              variant: "text-sm/normal",
              children: m.username
            })]
          }), C = m.disabled;
          break;
        default:
          m = null
      }
      if (null == m) return null;
      let p = !C && null == n && null != m.id;
      return (0, l.jsxs)(R.default, {
        justify: R.default.Justify.BETWEEN,
        align: R.default.Align.CENTER,
        className: V.memberRow,
        children: [(0, l.jsx)(R.default, {
          justify: R.default.Justify.START,
          align: R.default.Align.CENTER,
          className: V.memberRowBody,
          children: c
        }), (0, l.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: F.getRowTypeLabel(m.rowType)
        }), m.rowType !== w.RowType.EMPTY_STATE && (0, l.jsx)(o.TooltipContainer, {
          className: V.removeIconContainer,
          text: null != n ? n : r(m.rowType, m.disabled),
          children: (0, l.jsx)(o.Clickable, {
            onClick: () => {
              var e, s, l;
              return p && null != m && (e = m.id, s = m.name, l = m.rowType, void d.default.show({
                title: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                body: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                  name: s
                }),
                cancelText: G.default.Messages.CANCEL,
                onConfirm: () => (function(e, s) {
                  if (t.isGuildStageVoice()) {
                    let l = (0, g.removeModeratorOverwrite)(e, s === w.RowType.ROLE ? E.PermissionOverwriteType.ROLE : E.PermissionOverwriteType.MEMBER, t);
                    (0, g.isEmptyOverwrite)(l) ? u.default.clearPermissionOverwrite(t.id, l.id): (0, h.savePermissionUpdates)(t.id, [l])
                  } else u.default.clearPermissionOverwrite(t.id, e)
                })(e, l)
              }))
            },
            "aria-disabled": !p,
            "aria-label": G.default.Messages.REMOVE,
            children: (0, l.jsx)(A.default, {
              className: i(V.removeIcon, {
                [V.disabledRemoveIcon]: C || n
              })
            })
          })
        })]
      }, m.id)
    },
    rowHeight: 40,
    renderSection: function(e) {
      let {
        section: t
      } = e;
      switch (t) {
        case w.AudienceSelectorSections.ROLES:
          return (0, l.jsx)(z, {
            title: G.default.Messages.ROLES
          }, "roles-title");
        case w.AudienceSelectorSections.MEMBERS:
          return (0, l.jsx)(z, {
            title: G.default.Messages.MEMBERS
          }, "members-title")
      }
    },
    sectionHeight: 49
  })
}

function W(e) {
  let {
    guild: t,
    channel: a,
    permissionUpdates: n
  } = e, d = F.getExistingRolesRowWithPermissionDisabled(t, a, T.MODERATE_STAGE_CHANNEL_PERMISSIONS, n), u = (0, r.useStateFromStores)([C.default], () => F.getExistingMembersRows(C.default.getMemberIds(t.id), a, t, T.MODERATE_STAGE_CHANNEL_PERMISSIONS, n)), c = (0, g.useCanUpdateStageChannelModerators)(a.id);

  function h() {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("286470").then(s.bind(s, "286470"));
      return t => (0, l.jsx)(e, {
        ...t,
        channelId: a.id
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: i(V.settingCard, V.active),
    children: [(0, l.jsx)(P.default, {
      label: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
      description: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
      icon: (0, l.jsx)(v.default, {
        className: V.cardIcon,
        height: 20,
        width: 20
      }),
      id: "StageModeratorSettingCard"
    }), (0, l.jsxs)("div", {
      className: V.cardFolder,
      children: [(0, l.jsxs)(R.default, {
        justify: R.default.Justify.BETWEEN,
        align: R.default.Align.CENTER,
        className: V.folderHeader,
        children: [(0, l.jsx)(o.FormTitle, {
          tag: "h5",
          className: V.folderTitle,
          children: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL
        }), (0, l.jsx)(o.Tooltip, {
          text: G.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
          shouldShow: !c,
          children: e => (0, l.jsx)(o.Button, {
            ...e,
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: h,
            disabled: !c,
            children: G.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          })
        })]
      }), (0, l.jsx)(k, {
        channel: a,
        roles: d,
        members: u,
        disabledReason: c ? null : G.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
        getRemoveTooltipHint: S.getRemoveModeratorTooltipHint
      })]
    })]
  })
}

function Y(e) {
  let {
    guild: t,
    channel: a,
    isPrivateGuildChannel: n,
    roles: d,
    members: u
  } = e, c = (0, r.useStateFromStores)([p.default], () => p.default.can(B.Permissions.ADMINISTRATOR, t)), h = y.default.canEveryoneRole(B.Permissions.VIEW_CHANNEL, t), E = y.default.canEveryoneRole(B.Permissions.ADMINISTRATOR, t), f = {
    title: G.default.Messages.PRIVATE_CHANNEL,
    subtitle: G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
    formLabel: G.default.Messages.FORM_LABEL_CHANNEL_PERMISSIONS
  };
  return a.isCategory() ? (f.title = G.default.Messages.PRIVATE_CATEGORY, f.subtitle = G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION, f.formLabel = G.default.Messages.FORM_LABEL_CATEGORY_PERMISSIONS) : a.type === U.ChannelTypes.GUILD_VOICE && (f.subtitle = G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE), (0, l.jsxs)("div", {
    className: i(V.settingCard, {
      [V.active]: n
    }),
    children: [(0, l.jsx)(P.default, {
      description: f.subtitle,
      icon: (0, l.jsx)(O.default, {
        className: V.cardIcon,
        height: 20,
        width: 20
      }),
      id: "PrivateChannelSettingCard",
      label: f.title,
      onChange: function() {
        let e = a.accessPermissions,
          s = M.default.getCurrentUser();
        F.toggleChannelEveryonePermission(a, e, n), !n && null != s && !(null == t ? void 0 : t.isOwner(s)) && !c && F.grantUserChannelAccess(a, e)
      },
      value: n
    }), (0, l.jsxs)("div", {
      className: V.cardFolder,
      children: [E && (0, l.jsx)("div", {
        className: V.adminWarning,
        children: (0, l.jsx)(I.default, {
          messageType: I.HelpMessageTypes.WARNING,
          children: G.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
        })
      }), !h && !E && !n && (0, l.jsx)("div", {
        className: V.adminWarning,
        children: (0, l.jsx)(I.default, {
          messageType: I.HelpMessageTypes.WARNING,
          children: G.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
        })
      }), n && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(R.default, {
          justify: R.default.Justify.BETWEEN,
          align: R.default.Align.CENTER,
          className: V.folderHeader,
          children: [(0, l.jsx)(o.FormTitle, {
            tag: "h5",
            className: V.folderTitle,
            children: f.formLabel
          }), (0, l.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: function() {
              (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await s.el("462430").then(s.bind(s, "462430"));
                return t => (0, l.jsx)(e, {
                  ...t,
                  channelId: a.id,
                  inSettings: !0
                })
              })
            },
            children: G.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          })]
        }), (0, l.jsx)(k, {
          channel: a,
          roles: d,
          members: u,
          getRemoveTooltipHint: F.getRemoveTooltipHint
        })]
      })]
    })]
  })
}

function z(e) {
  let {
    title: t
  } = e;
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(o.FormDivider, {
      className: V.divider
    }), (0, l.jsx)(o.FormTitle, {
      className: i(V.folderTitle, V.sectionTitle),
      tag: "h5",
      children: t
    })]
  })
}
var K = r.default.connectStores([N.default, p.default, C.default, _.default], () => {
  let e;
  let t = N.default.channel,
    s = N.default.category,
    l = [],
    a = [],
    n = {},
    i = !1;
  if (null != t) {
    e = _.default.getGuild(t.getGuildId());
    let s = C.default.getMemberIds(null == e ? void 0 : e.id);
    null != e && (n = N.default.editedPermissionIds.reduce((e, t) => {
      let s = N.default.getPermissionOverwrite(t);
      return null != s && (e[t] = s), e
    }, {}), l = F.getExistingRolesRows(e, t, t.accessPermissions, n), a = F.getExistingMembersRows(s, t, e, t.accessPermissions, n), i = F.isPrivateGuildChannel(t, n))
  }
  return {
    canSyncChannel: null != s && p.default.can(B.Permissions.MANAGE_ROLES, s),
    category: s,
    channel: t,
    filteredMembers: a,
    filteredRoles: l,
    guild: e,
    isPrivateGuildChannel: i,
    locked: N.default.locked,
    permissionUpdates: n
  }
})(function(e) {
  let {
    canSyncChannel: t,
    category: n,
    channel: i,
    filteredMembers: r,
    filteredRoles: d,
    guild: u,
    isPrivateGuildChannel: h,
    locked: E,
    permissionUpdates: f
  } = e, [g, T] = a.useState(!y.default.canEveryoneRole(B.Permissions.SEND_MESSAGES, i));
  if (null == i || null == u) return null;

  function S() {
    F.toggleChannelEveryonePermission(i, B.Permissions.SEND_MESSAGES, g), T(!g)
  }

  function N() {
    null != n && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("57005").then(s.bind(s, "57005"));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: i,
        category: n,
        onConfirm: async () => {
          let {
            guild_id: e
          } = n, t = {
            ...n.permissionOverwrites
          };
          null != e && null == t[e] && (t[e] = y.default.makeEveryoneOverwrite(e));
          let s = await (0, m.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(i, t[e].deny, t[e].allow);
          s && (0, c.saveChannel)(i.id, {
            permissionOverwrites: Object.values(t)
          })
        }
      })
    })
  }
  let C = {
    title: G.default.Messages.CHANNEL_PERMISSIONS,
    subtitle: G.default.Messages.CHANNEL_PERMISSIONS_SUBTITLE
  };
  return i.isCategory() && (C.title = G.default.Messages.CATEGORY_SETTINGS, C.subtitle = G.default.Messages.CATEGORY_PERMISSIONS_SUBTITLE), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.FormTitle, {
      tag: "h1",
      children: C.title
    }), (0, l.jsx)(o.FormText, {
      children: C.subtitle
    }), null != n && t ? E ? (0, l.jsx)(H.default, {
      canSync: !1,
      icon: j.default,
      noticeText: G.default.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
        categoryName: n.name
      })
    }) : (0, l.jsx)(H.default, {
      buttonText: G.default.Messages.SYNC_NOW,
      canSync: !0,
      icon: D.default,
      noticeText: G.default.Messages.PERMISSIONS_UNSYNCED.format({
        categoryName: n.name
      }),
      onClick: N
    }) : null, i.isGuildStageVoice() ? (0, l.jsx)(W, {
      guild: u,
      channel: i,
      permissionUpdates: f
    }) : null, (0, l.jsx)(Y, {
      channel: i,
      guild: u,
      isPrivateGuildChannel: h,
      roles: d,
      members: r
    }), !1, (0, l.jsx)(b.default, {})]
  })
})
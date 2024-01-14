"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("686130"), s("781738");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("866227"),
  o = s.n(r),
  d = s("974667"),
  u = s("77078"),
  c = s("679653"),
  E = s("506885"),
  _ = s("981601"),
  T = s("242020"),
  I = s("27618"),
  S = s("697218"),
  N = s("461380"),
  g = s("258078"),
  f = s("404008"),
  A = s("158998"),
  L = s("309021"),
  m = s("49111"),
  C = s("491070");

function O(e, t) {
  let s = L.NotRenderedChanges[e.targetType];
  return null != s && !0 === s[t.key]
}
class h extends n.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      onContextMenu: s,
      guildId: n
    } = this.props;
    return (0, a.jsx)(u.Popout, {
      preload: () => (0, E.default)(e.id, e.getAvatarURL(n, 80), {
        guildId: n
      }),
      renderPopout: t => (0, a.jsx)(_.default, {
        ...t,
        userId: e.id,
        guildId: n
      }),
      children: n => (0, a.jsx)(u.Clickable, {
        ...n,
        onClick: e => {
          e.stopPropagation(), n.onClick(e)
        },
        onContextMenu: s,
        className: C.userHook,
        children: (0, a.jsxs)("div", {
          className: C.username,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: A.default.getUserTag(e, {
              mode: "username",
              identifiable: t ? "never" : "always"
            })
          }), !t && !e.isPomelo() && (0, a.jsxs)(u.Text, {
            variant: "text-sm/normal",
            children: ["#", e.discriminator]
          })]
        })
      })
    })
  }
}
class R extends n.PureComponent {
  hasChangesToRender() {
    let {
      log: e
    } = this.props, {
      changes: t
    } = e;
    return (e.actionType !== m.AuditLogActionTypes.DELETE || e.action === m.AuditLogActions.MEMBER_BAN_ADD || e.action === m.AuditLogActions.MEMBER_KICK || e.action === m.AuditLogActions.MEMBER_PRUNE) && null != t && t.some(t => !O(e, t))
  }
  getActionTypeColor(e) {
    switch (e) {
      case m.AuditLogActionTypes.CREATE:
        return g.default.Colors.STATUS_GREEN;
      case m.AuditLogActionTypes.DELETE:
        return g.default.Colors.STATUS_RED;
      default:
        return g.default.Colors.STATUS_YELLOW
    }
  }
  getRowAccentColor() {
    let {
      log: e
    } = this.props;
    if (e.action === m.AuditLogActions.MEMBER_BAN_ADD) return C.accentRed
  }
  renderTitle() {
    let {
      log: e,
      guildId: t,
      onUserContextMenu: s,
      onTargetContextMenu: n,
      onChannelContextMenu: l
    } = this.props, {
      user: i,
      target: r,
      options: o
    } = e, d = L.getChangeTitle(e), E = L.getStringForBanReason(e);
    return null != d ? (0, a.jsx)(u.Text, {
      className: C.overflowEllipsis,
      variant: "text-sm/normal",
      children: d.format({
        user: i,
        target: r,
        reason: E,
        userHook: (n, l) => (0, a.jsx)(h, {
          guildId: t,
          user: e.user,
          onContextMenu: s,
          hideDiscriminator: !0
        }, l),
        targetHook: (s, l) => e.targetType === m.AuditLogTargetTypes.USER ? (0, a.jsx)(h, {
          guildId: t,
          user: e.target,
          onContextMenu: n,
          hideDiscriminator: !1
        }, l) : (0, a.jsx)("span", {
          onContextMenu: n,
          children: s
        }, l),
        count: o.count,
        channel: o.channel ? "string" == typeof o.channel ? o.channel : (0, c.computeChannelName)(o.channel, S.default, I.default, !0) : null,
        channelHook: (e, t) => (0, a.jsx)("span", {
          onContextMenu: l,
          children: e
        }, t)
      })
    }) : null
  }
  renderRoleUpdate(e) {
    let {
      newValue: t
    } = e;
    return Array.isArray(t) ? t.map(e => (0, a.jsxs)("div", {
      className: C.subListItem,
      children: [(0, a.jsx)(u.Text, {
        className: C.bullet,
        color: "text-muted",
        variant: "text-sm/normal",
        children: "•"
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        children: e.name
      })]
    }, e.id)) : null
  }
  renderPermissionUpdate(e) {
    let {
      newValue: t
    } = e;
    return Array.isArray(t) ? t.map(e => {
      if (null != L.getStringForPermission(e, this.props.log)) return (0, a.jsxs)("div", {
        className: C.subListItem,
        children: [(0, a.jsx)(u.Text, {
          className: C.bullet,
          color: "text-muted",
          variant: "text-sm/normal",
          children: "•"
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: L.getStringForPermission(e, this.props.log)
        })]
      }, e)
    }) : null
  }
  renderChangeDetails(e) {
    let {
      log: t,
      onContentClick: s
    } = this.props;
    if (null == t.changes) return null;
    let n = 0,
      l = t.changes.map((s, l) => {
        let {
          oldValue: i,
          newValue: r
        } = s, d = null;
        if (t.action === m.AuditLogActions.MEMBER_ROLE_UPDATE ? d = this.renderRoleUpdate(s) : (t.targetType === m.AuditLogTargetTypes.ROLE || t.action === m.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === m.AuditLogActions.CHANNEL_OVERWRITE_UPDATE) && (d = this.renderPermissionUpdate(s)), (t.action === m.AuditLogActions.CHANNEL_UPDATE || t.action === m.AuditLogActions.CHANNEL_CREATE) && s.key === m.AuditLogChangeKeys.TYPE && (null != i && (i = (0, f.channelTypeString)({
            type: i
          })), null != r && (r = (0, f.channelTypeString)({
            type: r
          }))), t.action === m.AuditLogActions.MEMBER_UPDATE && s.key === m.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (r = o(r)) || !r.isValid()) return null;
          r = r.calendar()
        }
        let c = e[s.key];
        if (O(t, s)) return null;
        if ("function" == typeof c && (c = c(s)), null != c && "object" == typeof c) {
          if (null == c.format) {
            let e = c[s.newValue];
            null == e && null != c[L.DEFAULT_FOR_STRINGS_KEY] ? c = c[L.DEFAULT_FOR_STRINGS_KEY] : null != e && (c = e)
          }
          if (null != c && null != c.format) {
            var E, _;
            c = c.format({
              user: t.user,
              target: t.target,
              oldValue: i,
              newValue: r,
              count: Array.isArray(r) ? r.length : null,
              subtarget: null !== (_ = null !== (E = t.options.subtarget) && void 0 !== E ? E : s.subtarget) && void 0 !== _ ? _ : null,
              newColorHook: (e, t) => (0, a.jsx)("div", {
                className: C.colorHook,
                style: {
                  backgroundColor: s.newValue
                }
              }, t),
              oldColorHook: (e, t) => (0, a.jsx)("div", {
                className: C.colorHook,
                style: {
                  backgroundColor: s.oldValue
                }
              }, t)
            })
          }
        }
        return c ? (n++, (0, a.jsxs)("div", {
          className: C.detail,
          children: [(0, a.jsxs)("div", {
            className: C.prefix,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: n < 10 ? "0".concat(n) : n
            }), (0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              className: C.dash,
              children: "—"
            })]
          }), (0, a.jsxs)("div", {
            className: C.change,
            children: [null != d ? (0, a.jsx)(u.Text, {
              className: C.changeStr,
              variant: "text-xs/normal",
              children: c.concat(":")
            }) : (0, a.jsx)(u.Text, {
              className: C.changeStr,
              variant: "text-xs/normal",
              children: c
            }), null != d ? (0, a.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: d
            }) : null]
          })]
        }, l)) : (console.warn("No change string for", s), null)
      });
    return (0, a.jsx)(u.Clickable, {
      onClick: s,
      className: C.changeDetails,
      children: l
    })
  }
  renderChangeSummary() {
    let {
      expanded: e,
      log: t
    } = this.props;
    if (e) switch (t.targetType) {
      case m.AuditLogTargetTypes.GUILD:
        return this.renderChangeDetails(L.GuildChangeStrings());
      case m.AuditLogTargetTypes.CHANNEL:
      case m.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return this.renderChangeDetails(L.ChannelChangeStrings());
      case m.AuditLogTargetTypes.USER:
        return this.renderChangeDetails(L.UserChangeStrings());
      case m.AuditLogTargetTypes.ROLE:
        return this.renderChangeDetails(L.RoleChangeStrings());
      case m.AuditLogTargetTypes.INVITE:
        return this.renderChangeDetails(L.InviteChangeStrings());
      case m.AuditLogTargetTypes.WEBHOOK:
        return this.renderChangeDetails(L.WebhookChangeStrings());
      case m.AuditLogTargetTypes.EMOJI:
        return this.renderChangeDetails(L.EmojiChangeStrings());
      case m.AuditLogTargetTypes.STICKER:
        return this.renderChangeDetails(L.StickerChangeStrings());
      case m.AuditLogTargetTypes.INTEGRATION:
        return this.renderChangeDetails(L.IntegrationChangeStrings());
      case m.AuditLogTargetTypes.STAGE_INSTANCE:
        return this.renderChangeDetails(L.StageInstanceChangeStrings());
      case m.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return this.renderChangeDetails(L.GuildScheduledEventChangeStrings());
      case m.AuditLogTargetTypes.THREAD:
        return this.renderChangeDetails(L.ThreadChangeStrings());
      case m.AuditLogTargetTypes.APPLICATION_COMMAND:
        return this.renderChangeDetails(L.CommandPermissionChangeStrings(t.changes))
    }
    return null
  }
  formatActionTagName(e) {
    return e.replaceAll("_", " ").toLocaleLowerCase()
  }
  renderActionTag() {
    let {
      log: e
    } = this.props, t = (0, T.getTargetType)(e.action);
    if (null != t) return (0, a.jsx)("div", {
      className: C.tag,
      children: (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        className: C.tagString,
        children: this.formatActionTagName(t)
      })
    })
  }
  render() {
    let e;
    let {
      log: t,
      className: s,
      expanded: n,
      onHeaderClick: l,
      guildId: r
    } = this.props, o = t.user;
    if (null == o) return null;
    let c = this.hasChangesToRender(),
      T = C.headerDefault;
    n ? T = C.headerExpanded : c && (T = C.headerClickable);
    let I = t.timestampStart.calendar(),
      S = t.timestampEnd.calendar();
    e = I === S ? (0, a.jsx)(u.Text, {
      className: C.timestamp,
      variant: "text-xs/normal",
      children: "• ".concat(I)
    }) : (0, a.jsx)(u.Text, {
      className: C.timestamp,
      variant: "text-xs/normal",
      children: "• ".concat(I, "—").concat(S)
    });
    let g = c ? l : m.NOOP;
    return (0, a.jsx)(d.ListNavigatorItem, {
      id: t.id,
      children: l => (0, a.jsxs)("div", {
        className: i(this.getRowAccentColor(), C.auditLog, s),
        children: [(0, a.jsxs)(u.Clickable, {
          className: T,
          "aria-expanded": n,
          onClick: g,
          ...l,
          children: [(0, a.jsx)(u.Popout, {
            preload: () => (0, E.default)(t.userId, o.getAvatarURL(r, 80), {
              guildId: r
            }),
            renderPopout: e => (0, a.jsx)(_.default, {
              ...e,
              userId: t.userId,
              guildId: r
            }),
            children: e => (0, a.jsx)(u.Avatar, {
              ...e,
              onClick: t => {
                t.stopPropagation(), e.onClick(t)
              },
              src: o.getAvatarURL(r, 40),
              "aria-hidden": !0,
              size: u.AvatarSizes.SIZE_40
            })
          }), (0, a.jsxs)("div", {
            className: C.timeWrap,
            children: [(0, a.jsx)("div", {
              className: C.title,
              children: this.renderTitle()
            }), (0, a.jsxs)("div", {
              className: C.meta,
              children: [this.renderActionTag(), e]
            })]
          }), c ? (0, a.jsx)(N.default, {
            className: C.expand,
            foreground: C.expandForeground,
            expanded: n,
            "aria-hidden": !0
          }) : null]
        }), this.renderChangeSummary()]
      })
    })
  }
}
var D = R
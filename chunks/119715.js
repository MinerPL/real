"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("866227"),
  o = n.n(r),
  u = n("733724"),
  d = n("6938"),
  c = n("446674"),
  f = n("669491"),
  m = n("167338"),
  E = n("582601"),
  _ = n("77078"),
  h = n("417796"),
  p = n("398654"),
  I = n("712125"),
  T = n("311161"),
  g = n("201131"),
  C = n("928098"),
  S = n("380986"),
  A = n("981601"),
  N = n("106435"),
  M = n("42203"),
  v = n("26989"),
  x = n("697218"),
  O = n("79798"),
  L = n("45029"),
  R = n("561359"),
  P = n("423487"),
  y = n("93332"),
  D = n("304198"),
  j = n("250375"),
  U = n("988268"),
  b = n("782340"),
  G = n("413362");

function B() {
  return (0, a.jsx)("div", {
    className: G.dot
  })
}

function k(e) {
  let {
    message: t,
    compact: n
  } = e, {
    notificationType: s
  } = (0, g.extractAutomodNotificationFields)(t);
  switch (s) {
    case g.IS_BACKWARDS_COMPAT_RAID_TYPE:
    case d.AutomodNotificationEmbedTypeKeys.RAID:
      return (0, a.jsx)(F, {
        message: t,
        compact: n
      });
    case d.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED:
      return (0, a.jsx)(H, {
        message: t,
        compact: n
      });
    default:
      return (0, a.jsx)(w, {
        compact: n
      })
  }
}

function w(e) {
  let {
    compact: t
  } = e;
  return (0, a.jsx)(V, {
    compact: t,
    header: (0, a.jsxs)(s.Fragment, {
      children: [(0, a.jsx)(P.default, {
        width: 16,
        height: 16,
        color: f.default.colors.HEADER_SECONDARY.css
      }), (0, a.jsx)(_.Text, {
        variant: "text-md/semibold",
        color: "header-secondary",
        children: b.default.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_TITLE
      })]
    }),
    content: (0, a.jsx)(_.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: b.default.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_DESCRIPTION
    })
  })
}

function H(e) {
  var t;
  let {
    message: n,
    compact: l
  } = e, i = x.default.getUser((0, g.getUserIdOfAutomodAction)(n)), r = null === (t = M.default.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, o = null != r && null != i, u = o ? v.default.getMember(r, i.id) : null, {
    avatarSrc: d,
    avatarDecorationSrc: c,
    eventHandlers: m
  } = (0, N.default)({
    user: i,
    guildId: r,
    size: 12
  });
  return (0, a.jsx)(V, {
    compact: l,
    header: (0, a.jsxs)(s.Fragment, {
      children: [(0, a.jsx)(E.SettingsInfoIcon, {
        width: 16,
        height: 16,
        color: f.default.colors.TEXT_POSITIVE.css
      }), (0, a.jsx)(_.Text, {
        variant: "text-md/semibold",
        color: "text-positive",
        children: b.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_TITLE
      })]
    }),
    subheader: (0, a.jsxs)("div", {
      className: G.dotSeparatedRow,
      children: [(0, a.jsx)("div", {
        className: G.alertsEnabledSubHeader,
        children: null != u && null != i && (0, a.jsxs)(s.Fragment, {
          children: [(0, a.jsx)(_.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: b.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_BY_PREFIX
          }), (0, a.jsx)(_.Popout, {
            renderPopout: function(e) {
              return null == i ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsx)(A.default, {
                ...e,
                userId: i.id,
                user: i,
                guildId: r,
                channelId: n.channel_id
              })
            },
            children: e => (0, a.jsxs)(_.Clickable, {
              className: G.alertsEnabledSubHeaderAvatarUsername,
              ...e,
              children: [(0, a.jsx)("div", {
                ...m,
                children: (0, a.jsx)(_.Avatar, {
                  src: d,
                  avatarDecoration: c,
                  size: _.AvatarSizes.SIZE_16,
                  "aria-label": "TODO"
                })
              }), (0, a.jsxs)(_.Text, {
                variant: "text-xs/medium",
                style: {
                  color: null != u.colorString ? u.colorString : f.default.colors.TEXT_NORMAL.css
                },
                children: [" ", "@", i.username]
              })]
            })
          })]
        })
      }), (0, a.jsx)(B, {}), (0, a.jsx)(_.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: n.timestamp.fromNow()
      })]
    }),
    content: (0, a.jsx)(_.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: b.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_DESCRIPTION
    })
  })
}

function F(e) {
  var t;
  let {
    message: l,
    compact: i
  } = e, {
    joinAttempts: r,
    raidDatetime: d,
    dmsSent: E,
    raidType: A,
    resolvedReason: N
  } = (0, g.extractAutomodNotificationFields)(l), v = (0, c.useStateFromStores)([M.default], () => M.default.getChannel(l.channel_id), [l.channel_id]), x = null !== (t = null == v ? void 0 : v.guild_id) && void 0 !== t ? t : null, {
    incidentData: O,
    shouldShowIncidentActions: y
  } = (0, p.useGuildIncidentsState)(x), D = (0, S.useContextMenuRaidAlert)(l.author.id, l.channel_id), j = s.useCallback(() => {
    let e = null == v ? void 0 : v.guild_id;
    null != e && (0, C.openRaidResolveModal)(l.id, e)
  }, [l.id, v]), U = A === h.AutomodRaidAlertTypes.DM_RAID, k = U ? P.default : m.ChatAlertIcon;
  return (0, a.jsx)(V, {
    compact: i,
    header: (0, a.jsxs)(s.Fragment, {
      children: [(0, a.jsx)(k, {
        width: 16,
        height: 16,
        color: f.default.colors.TEXT_DANGER.css
      }), (0, a.jsx)(_.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: U ? b.default.Messages.GUILD_AUTOMOD_NOTIFICATION_DM_RAID_TITLE : b.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_TITLE
      })]
    }),
    subheader: (0, a.jsxs)("div", {
      className: G.dotSeparatedRow,
      children: [null != r && (0, a.jsx)(_.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: b.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_JOINS.format({
          joinCount: r
        })
      }), null != E && (0, a.jsx)(_.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: b.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_DMS.format({
          dmsSent: E
        })
      }), null != d && (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsx)(B, {}), (0, a.jsx)(_.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: o(d).fromNow()
        })]
      })]
    }),
    content: null != d ? (0, a.jsx)(_.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: b.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
        dateTime: d.toLocaleString(b.default.getLocale(), T.DATE_CONFIG)
      })
    }) : null,
    footerButtons: (0, a.jsxs)("div", {
      className: G.dotSeparatedRow,
      children: [(0, a.jsx)(_.Button, {
        onClick: e => {
          if (null != x && y) {
            let e = {
              source: I.GuildIncidentActionSources.MESSAGE,
              messageId: l.id,
              alertType: (0, T.getIncidentAlertType)(O)
            };
            (0, _.openModalLazy)(async () => {
              let {
                default: t
              } = await n.el("186638").then(n.bind(n, "186638"));
              return n => (0, a.jsx)(t, {
                ...n,
                guildId: x,
                analyticsData: e
              })
            })
          } else D(e)
        },
        color: _.Button.Colors.LINK,
        look: _.Button.Looks.LINK,
        size: _.Button.Sizes.SMALL,
        className: G.buttonStyle,
        children: (0, a.jsx)("div", {
          className: G.footerAction,
          children: y ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(L.default, {
              width: 16,
              height: 16,
              color: u.default.BLUE_345,
              className: G.footerIcon
            }), (0, a.jsx)(_.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: b.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
            })]
          }) : (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(R.default, {
              width: 16,
              height: 16,
              color: u.default.BLUE_345,
              className: G.footerIcon
            }), (0, a.jsx)(_.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: b.default.Messages.ACTIONS
            })]
          })
        })
      }), (0, a.jsx)(_.Button, {
        onClick: j,
        color: _.Button.Colors.LINK,
        look: _.Button.Looks.LINK,
        size: _.Button.Sizes.SMALL,
        className: G.buttonStyle,
        children: (0, a.jsx)("div", {
          className: G.footerAction,
          children: (0, a.jsx)(_.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: (0, g.getRaidAlertResolveCTAText)(N)
          })
        })
      })]
    })
  })
}

function V(e) {
  let {
    compact: t,
    header: n,
    subheader: s,
    content: l,
    footerButtons: r
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: G.embedCard,
      children: [(0, a.jsxs)("div", {
        className: G.cardContent,
        children: [(0, a.jsxs)("div", {
          className: G.cardHeaderContianer,
          children: [(0, a.jsx)("div", {
            className: G.cardHeader,
            children: n
          }), null != s && (0, a.jsx)("div", {
            className: G.subheader,
            children: s
          })]
        }), l]
      }), null != r && (0, a.jsx)("div", {
        className: i(G.centeredRowContainer, G.cardFooter, {
          [G.compact]: t
        }),
        children: r
      })]
    })
  })
}

function Y(e) {
  let {
    id: t,
    compact: n,
    message: s,
    channel: l
  } = e, {
    avatarSrc: r,
    eventHandlers: {
      onMouseEnter: o,
      onMouseLeave: u
    }
  } = (0, j.useAutomodAvatar)(!0), {
    notificationType: c
  } = (0, g.extractAutomodNotificationFields)(s), f = null == c || c === d.AutomodNotificationEmbedTypeKeys.RAID;
  return (0, a.jsx)("div", {
    onMouseEnter: o,
    onMouseLeave: u,
    children: (0, a.jsx)(D.default, {
      className: i(G.mainContainer, {
        [G.compact]: n
      }),
      iconNode: n ? null : (0, a.jsx)(j.AutomodAvatar, {
        src: r
      }),
      iconContainerClassName: G.iconContainer,
      compact: n,
      children: (0, a.jsxs)("div", {
        className: i(G.content, {
          [G.compact]: n
        }),
        children: [(0, a.jsx)(y.BaseMessageHeader, {
          message: s,
          messageClassname: G.spanCorrection,
          className: i(G.usernameContainer, G.spanCorrection, {
            [G.compact]: n
          }),
          username: (0, a.jsxs)("div", {
            className: G.spanCorrection,
            children: [(0, a.jsx)(_.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: G.username,
              children: b.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, a.jsx)(O.default, {
              type: U.BotTagTypes.SYSTEM_DM,
              className: G.systemTag
            }), f && (0, a.jsx)(_.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: G.spanCorrection,
              children: b.default.Messages.GUILD_AUTOMOD_NOTFICATION_ALERT_TITLE
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, a.jsx)("div", {
          className: i(G.messageContent, {
            [G.compact]: n
          }),
          children: (0, a.jsx)(k, {
            message: s,
            compact: n
          })
        })]
      })
    })
  })
}
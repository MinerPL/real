"use strict";
n.r(t), n.d(t, {
  default: function() {
    return J
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("866227"),
  o = n.n(r),
  u = n("733724"),
  d = n("6938"),
  c = n("446674"),
  f = n("669491"),
  E = n("167338"),
  _ = n("582601"),
  T = n("77078"),
  I = n("417796"),
  m = n("455555"),
  N = n("398654"),
  p = n("712125"),
  S = n("311161"),
  A = n("201131"),
  C = n("928098"),
  h = n("702873"),
  g = n("592407"),
  M = n("380986"),
  O = n("981601"),
  R = n("106435"),
  L = n("42203"),
  v = n("26989"),
  P = n("697218"),
  D = n("79798"),
  x = n("45029"),
  y = n("561359"),
  U = n("423487"),
  j = n("93332"),
  b = n("304198"),
  G = n("250375"),
  B = n("49111"),
  F = n("988268"),
  k = n("782340"),
  w = n("413362");

function H() {
  return (0, s.jsx)("div", {
    className: w.dot
  })
}

function V(e) {
  let {
    message: t,
    compact: n
  } = e, {
    notificationType: l
  } = (0, A.extractAutomodNotificationFields)(t);
  switch (l) {
    case A.IS_BACKWARDS_COMPAT_RAID_TYPE:
    case d.AutomodNotificationEmbedTypeKeys.RAID:
      return (0, s.jsx)(W, {
        message: t,
        compact: n
      });
    case d.AutomodNotificationEmbedTypeKeys.MENTION_RAID:
      return (0, s.jsx)(z, {
        message: t,
        compact: n
      });
    case d.AutomodNotificationEmbedTypeKeys.ACTIVITY_ALERTS_ENABLED:
      return (0, s.jsx)(K, {
        message: t,
        compact: n
      });
    default:
      return (0, s.jsx)(Y, {
        compact: n
      })
  }
}

function Y(e) {
  let {
    compact: t
  } = e;
  return (0, s.jsx)(Z, {
    compact: t,
    header: (0, s.jsxs)(l.Fragment, {
      children: [(0, s.jsx)(U.default, {
        width: 16,
        height: 16,
        color: f.default.colors.HEADER_SECONDARY.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "header-secondary",
        children: k.default.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_TITLE
      })]
    }),
    content: (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTFICATION_UNSUPPORTED_DESCRIPTION
    })
  })
}

function K(e) {
  var t;
  let {
    message: n,
    compact: a
  } = e, i = P.default.getUser((0, A.getUserIdOfAutomodAction)(n)), r = null === (t = L.default.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, o = null != r && null != i, u = o ? v.default.getMember(r, i.id) : null, {
    avatarSrc: d,
    avatarDecorationSrc: c,
    eventHandlers: E
  } = (0, R.default)({
    user: i,
    guildId: r,
    size: 12
  });
  return (0, s.jsx)(Z, {
    compact: a,
    header: (0, s.jsxs)(l.Fragment, {
      children: [(0, s.jsx)(_.SettingsInfoIcon, {
        width: 16,
        height: 16,
        color: f.default.colors.TEXT_POSITIVE.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "text-positive",
        children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_TITLE
      })]
    }),
    subheader: (0, s.jsxs)("div", {
      className: w.dotSeparatedRow,
      children: [(0, s.jsx)("div", {
        className: w.alertsEnabledSubHeader,
        children: null != u && null != i && (0, s.jsxs)(l.Fragment, {
          children: [(0, s.jsx)(T.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_BY_PREFIX
          }), (0, s.jsx)(T.Popout, {
            renderPopout: function(e) {
              return null == i ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsx)(O.default, {
                ...e,
                userId: i.id,
                user: i,
                guildId: r,
                channelId: n.channel_id
              })
            },
            children: e => (0, s.jsxs)(T.Clickable, {
              className: w.alertsEnabledSubHeaderAvatarUsername,
              ...e,
              children: [(0, s.jsx)("div", {
                ...E,
                children: (0, s.jsx)(T.Avatar, {
                  src: d,
                  avatarDecoration: c,
                  size: T.AvatarSizes.SIZE_16,
                  "aria-label": "TODO"
                })
              }), (0, s.jsxs)(T.Text, {
                variant: "text-xs/medium",
                style: {
                  color: null != u.colorString ? u.colorString : f.default.colors.TEXT_NORMAL.css
                },
                children: [" ", "@", i.username]
              })]
            })
          })]
        })
      }), (0, s.jsx)(H, {}), (0, s.jsx)(T.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: n.timestamp.fromNow()
      })]
    }),
    content: (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_ACTIVITY_ALERTS_ENABLED_DESCRIPTION
    })
  })
}

function W(e) {
  var t;
  let {
    message: a,
    compact: i
  } = e, {
    joinAttempts: r,
    raidDatetime: d,
    dmsSent: _,
    raidType: m,
    resolvedReason: h
  } = (0, A.extractAutomodNotificationFields)(a), g = (0, c.useStateFromStores)([L.default], () => L.default.getChannel(a.channel_id), [a.channel_id]), O = null !== (t = null == g ? void 0 : g.guild_id) && void 0 !== t ? t : null, {
    incidentData: R,
    shouldShowIncidentActions: v
  } = (0, N.useGuildIncidentsState)(O), P = (0, M.useContextMenuRaidAlert)(a.author.id, a.channel_id), D = l.useCallback(() => {
    let e = null == g ? void 0 : g.guild_id;
    null != e && (0, C.openRaidResolveModal)(a.id, e)
  }, [a.id, g]), j = m === I.AutomodRaidAlertTypes.DM_RAID, b = j ? U.default : E.ChatAlertIcon;
  return (0, s.jsx)(Z, {
    compact: i,
    header: (0, s.jsxs)(l.Fragment, {
      children: [(0, s.jsx)(b, {
        width: 16,
        height: 16,
        color: f.default.colors.TEXT_DANGER.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: j ? k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_DM_RAID_TITLE : k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_TITLE
      })]
    }),
    subheader: (0, s.jsxs)("div", {
      className: w.dotSeparatedRow,
      children: [null != r && (0, s.jsx)(T.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_JOINS.format({
          joinCount: r
        })
      }), null != _ && (0, s.jsx)(T.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_DMS.format({
          dmsSent: _
        })
      }), null != d && (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)(H, {}), (0, s.jsx)(T.Text, {
          variant: "text-xs/medium",
          color: "text-normal",
          children: o(d).fromNow()
        })]
      })]
    }),
    content: null != d ? (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({
        dateTime: d.toLocaleString(k.default.getLocale(), S.DATE_CONFIG)
      })
    }) : null,
    footerButtons: (0, s.jsxs)("div", {
      className: w.dotSeparatedRow,
      children: [(0, s.jsx)(T.Button, {
        onClick: e => {
          if (null != O && v) {
            let e = {
              source: p.GuildIncidentActionSources.MESSAGE,
              messageId: a.id,
              alertType: (0, S.getIncidentAlertType)(R)
            };
            (0, T.openModalLazy)(async () => {
              let {
                default: t
              } = await n.el("186638").then(n.bind(n, "186638"));
              return n => (0, s.jsx)(t, {
                ...n,
                guildId: O,
                analyticsData: e
              })
            })
          } else P(e)
        },
        color: T.Button.Colors.LINK,
        look: T.Button.Looks.LINK,
        size: T.Button.Sizes.SMALL,
        className: w.buttonStyle,
        children: (0, s.jsx)("div", {
          className: w.footerAction,
          children: v ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(x.default, {
              width: 16,
              height: 16,
              color: u.default.BLUE_345,
              className: w.footerIcon
            }), (0, s.jsx)(T.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: k.default.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
            })]
          }) : (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(y.default, {
              width: 16,
              height: 16,
              color: u.default.BLUE_345,
              className: w.footerIcon
            }), (0, s.jsx)(T.Text, {
              variant: "text-xs/medium",
              color: "text-link",
              children: k.default.Messages.ACTIONS
            })]
          })
        })
      }), (0, s.jsx)(H, {}), (0, s.jsx)(T.Button, {
        onClick: D,
        color: T.Button.Colors.LINK,
        look: T.Button.Looks.LINK,
        size: T.Button.Sizes.SMALL,
        className: w.buttonStyle,
        children: (0, s.jsx)("div", {
          className: w.footerAction,
          children: (0, s.jsx)(T.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: (0, A.getRaidAlertResolveCTAText)(h)
          })
        })
      })]
    })
  })
}

function z(e) {
  var t;
  let {
    message: n,
    compact: a
  } = e, i = null === (t = L.default.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id, {
    raidDatetime: r,
    decisionId: u,
    suspiciousMentionActivityUntil: d
  } = (0, A.extractAutomodNotificationFields)(n);
  return (0, s.jsx)(Z, {
    compact: a,
    header: (0, s.jsxs)(l.Fragment, {
      children: [(0, s.jsx)(U.default, {
        width: 16,
        height: 16,
        color: f.default.colors.TEXT_DANGER.css
      }), (0, s.jsx)(T.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_TITLE
      })]
    }),
    subheader: (0, s.jsx)("div", {
      className: w.dotSeparatedRow,
      children: null != r && (0, s.jsx)(T.Text, {
        variant: "text-xs/medium",
        color: "text-normal",
        children: o(r).fromNow()
      })
    }),
    content: (0, s.jsx)(T.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: k.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MENTION_RAID_DESCRIPTION
    }),
    footerButtons: (0, s.jsxs)("div", {
      className: w.dotSeparatedRow,
      children: [(0, s.jsx)(T.Button, {
        onClick: function() {
          null != i && null != u && (0, h.removeMentionRaidRestrictionWithFeedback)(i, u, () => {
            (0, m.dismissCurrentNotice)(d), (0, h.clearMentionRaidDetected)(i)
          })
        },
        color: T.Button.Colors.LINK,
        look: T.Button.Looks.LINK,
        size: T.Button.Sizes.SMALL,
        className: w.buttonStyle,
        children: (0, s.jsx)("div", {
          className: w.footerAction,
          children: (0, s.jsx)(T.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: k.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
          })
        })
      }), (0, s.jsx)(H, {}), (0, s.jsx)(T.Button, {
        onClick: function() {
          null != i && g.default.open(i, B.GuildSettingsSections.GUILD_AUTOMOD, void 0, B.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM)
        },
        color: T.Button.Colors.LINK,
        look: T.Button.Looks.LINK,
        size: T.Button.Sizes.SMALL,
        className: w.buttonStyle,
        children: (0, s.jsx)("div", {
          className: w.footerAction,
          children: (0, s.jsx)(T.Text, {
            variant: "text-xs/medium",
            color: "text-link",
            children: k.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
          })
        })
      })]
    })
  })
}

function Z(e) {
  let {
    compact: t,
    header: n,
    subheader: l,
    content: a,
    footerButtons: r
  } = e;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: w.embedCard,
      children: [(0, s.jsxs)("div", {
        className: w.cardContent,
        children: [(0, s.jsxs)("div", {
          className: w.cardHeaderContianer,
          children: [(0, s.jsx)("div", {
            className: w.cardHeader,
            children: n
          }), null != l && (0, s.jsx)("div", {
            className: w.subheader,
            children: l
          })]
        }), a]
      }), null != r && (0, s.jsx)("div", {
        className: i(w.centeredRowContainer, w.cardFooter, {
          [w.compact]: t
        }),
        children: r
      })]
    })
  })
}

function J(e) {
  let {
    id: t,
    compact: n,
    message: l,
    channel: a
  } = e, {
    avatarSrc: r,
    eventHandlers: {
      onMouseEnter: o,
      onMouseLeave: u
    }
  } = (0, G.useAutomodAvatar)(!0), {
    notificationType: c
  } = (0, A.extractAutomodNotificationFields)(l), f = null == c || c === d.AutomodNotificationEmbedTypeKeys.RAID;
  return (0, s.jsx)("div", {
    onMouseEnter: o,
    onMouseLeave: u,
    children: (0, s.jsx)(b.default, {
      className: i(w.mainContainer, {
        [w.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(G.AutomodAvatar, {
        src: r
      }),
      iconContainerClassName: w.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: i(w.content, {
          [w.compact]: n
        }),
        children: [(0, s.jsx)(j.BaseMessageHeader, {
          message: l,
          messageClassname: w.spanCorrection,
          className: i(w.usernameContainer, w.spanCorrection, {
            [w.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: w.spanCorrection,
            children: [(0, s.jsx)(T.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: w.username,
              children: k.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(D.default, {
              type: F.BotTagTypes.SYSTEM_DM,
              className: w.systemTag
            }), f && (0, s.jsx)(T.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: w.spanCorrection,
              children: k.default.Messages.GUILD_AUTOMOD_NOTFICATION_ALERT_TITLE
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: i(w.messageContent, {
            [w.compact]: n
          }),
          children: (0, s.jsx)(V, {
            message: l,
            compact: n
          })
        })]
      })
    })
  })
}
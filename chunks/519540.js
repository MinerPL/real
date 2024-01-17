"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("866227"),
  d = n.n(u),
  c = n("446674"),
  f = n("151426"),
  h = n("77078"),
  E = n("272030"),
  m = n("819689"),
  p = n("843962"),
  g = n("679653"),
  S = n("931318"),
  N = n("520899"),
  _ = n("988864"),
  I = n("960808"),
  T = n("45835"),
  C = n("699473"),
  A = n("393414"),
  x = n("845579"),
  v = n("42203"),
  M = n("305961"),
  R = n("377253"),
  L = n("476263"),
  O = n("93393"),
  b = n("11539"),
  y = n("672571"),
  j = n("805614"),
  F = n("64318"),
  D = n("49111"),
  U = n("782340"),
  k = n("533370"),
  P = n("228146");
let w = {
  offset: {
    left: 4,
    right: -12
  }
};

function G(e) {
  let {
    setTab: t,
    closePopout: n
  } = e, s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders());
  l.useEffect(() => () => {
    (0, S.cleanupMessageReminders)()
  }, []);
  let [i, r] = l.useState(!1), o = l.useMemo(() => s.filter(e => null == e.dueAt || e.dueAt < new Date), [s]), u = i ? s : o, d = u.filter(e => !(0, _.savedMessageHasMetadata)(e));
  return (0, I.useMessageRemindersLoader)(d), (0, a.jsxs)("div", {
    className: k.container,
    children: [(0, a.jsx)(F.default, {
      tab: f.InboxTab.TODOS,
      setTab: t,
      closePopout: n
    }), (0, a.jsxs)("div", {
      className: k.headerText,
      children: [(0, a.jsx)(h.Heading, {
        variant: "heading-lg/bold",
        children: i ? U.default.Messages.MESSAGE_REMINDERS_HEADER_ALL : U.default.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
      }), (0, a.jsx)(h.Anchor, {
        onClick: () => r(!i),
        children: (0, a.jsx)(h.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: i ? U.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
            count: o.length
          }) : U.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
            count: s.length
          })
        })
      })]
    }), 0 === u.length ? (0, a.jsx)(H, {}) : null, (0, a.jsx)(h.AdvancedScrollerThin, {
      children: u.map(e => (function(e) {
        return [(0, a.jsx)(B, {
          messageId: e.messageId
        }, e.messageId)]
      })(e))
    })]
  })
}

function B(e) {
  let t, {
      messageId: l
    } = e,
    s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().find(e => e.messageId === l));
  o(null != s, "should not be rendering a to-do message without a to-do message");
  let r = s.complete,
    u = (0, c.useStateFromStores)([R.default], () => R.default.getMessage(s.channelId, s.messageId)),
    {
      message: f,
      channel: _
    } = (0, T.getSavedMessageAndChannel)(s),
    I = v.default.getChannel(_.id),
    b = (0, g.default)(I, !0),
    j = null != b ? b : _.name,
    F = (0, c.useStateFromStores)([M.default], () => M.default.getGuild(null == _ ? void 0 : _.guild_id)),
    G = null != _ ? (0, p.getChannelIconURL)(_) : null,
    B = null;
  return null != s.dueAt && (s.dueAt > new Date ? (t = "text-muted", B = U.default.Messages.MESSAGE_REMINDERS_DUE_IN.format({
    duration: d.duration(s.dueAt.getTime() - Date.now(), "millisecond").humanize()
  })) : (t = "text-danger", B = U.default.Messages.MESSAGE_REMINDERS_OVERDUE.format({
    duration: d.duration(Date.now() - s.dueAt.getTime(), "millisecond").humanize()
  }))), (0, a.jsxs)("div", {
    className: P.container,
    children: [(0, a.jsxs)("div", {
      className: k.messageHeader,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: k.messageInfo,
          children: [null != F ? (0, a.jsx)(L.default, {
            className: k.guildIcon,
            guild: F,
            size: L.default.Sizes.SMALL,
            active: !0
          }) : (0, a.jsx)(h.Avatar, {
            "aria-hidden": !0,
            src: null != G ? G : n("518533"),
            size: h.AvatarSizes.SIZE_32
          }), (0, a.jsx)(h.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            selectable: !0,
            children: j
          })]
        }), null != s.notes && s.notes.length > 0 ? (0, a.jsxs)(h.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: k.notes,
          selectable: !0,
          children: [(0, a.jsx)(y.default, {
            width: 12,
            height: 12
          }), s.notes]
        }) : null, null != B ? (0, a.jsx)(h.Text, {
          variant: "text-sm/medium",
          color: t,
          style: {
            marginTop: 4
          },
          children: B
        }) : null]
      }), (0, a.jsxs)("div", {
        className: k.reminderActions,
        children: [(0, a.jsx)(h.TooltipContainer, {
          text: U.default.Messages.MESSAGE_REMINDERS_SNOOZE,
          children: (0, a.jsx)(h.Clickable, {
            onClick: e => (0, E.openContextMenuLazy)(e, async () => {
              let {
                default: e
              } = await n.el("763582").then(n.bind(n, "763582"));
              return t => (0, a.jsx)(e, {
                ...t,
                message: f
              })
            }),
            className: k.clock,
            children: (0, a.jsx)(O.default, {})
          })
        }), (0, a.jsx)(h.Checkbox, {
          type: h.Checkbox.Types.INVERTED,
          value: r,
          onChange: (e, t) => {
            (0, S.toggleMessageReminders)(s.messageId, t)
          }
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: i(P.messageContainer, k.unloadedMessage, {
        [k.disabledMessage]: r
      }),
      children: [(0, a.jsx)(C.default, {
        message: f,
        channel: _,
        className: P.message,
        compact: x.MessageDisplayCompact.getSetting(),
        animateAvatar: !1,
        focusProps: w,
        trackAnnouncementViews: !0
      }, f.id), (0, a.jsxs)("div", {
        className: k.actions,
        children: [null == u ? (0, a.jsx)(h.Button, {
          onClick: () => {
            m.default.fetchMessages({
              channelId: s.channelId,
              limit: 1,
              jump: {
                messageId: s.messageId,
                flash: !1,
                offset: 1
              }
            })
          },
          size: h.Button.Sizes.MIN,
          color: h.Button.Colors.TRANSPARENT,
          className: k.loadButton,
          children: (0, a.jsx)(h.Text, {
            variant: "text-xs/normal",
            children: "Load"
          })
        }) : null, (0, a.jsx)(h.Button, {
          onClick: () => {
            (0, A.transitionTo)(D.Routes.CHANNEL(null == _ ? void 0 : _.getGuildId(), s.channelId, s.messageId))
          },
          size: h.Button.Sizes.MIN,
          color: h.Button.Colors.TRANSPARENT,
          className: k.loadButton,
          children: (0, a.jsx)(h.Text, {
            variant: "text-xs/normal",
            children: U.default.Messages.JUMP
          })
        })]
      })]
    })]
  })
}

function H() {
  let e = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().length > 0);
  return e ? null : (0, a.jsx)(j.default, {
    Icon: b.default,
    header: U.default.Messages.MESSAGE_REMINDERS_EMPTY,
    tip: U.default.Messages.MESSAGE_REMINDERS_EMPTY_TIP
  })
}
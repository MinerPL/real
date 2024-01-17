"use strict";
a.r(s), a.d(s, {
  default: function() {
    return f
  }
}), a("222007");
var t = a("37983"),
  l = a("884691"),
  i = a("77078"),
  n = a("531470"),
  d = a("538137"),
  c = a("36694"),
  r = a("599110"),
  o = a("699668"),
  h = a("203657"),
  x = a("397516"),
  u = a("71941"),
  m = a("276345"),
  N = a("380353"),
  I = a("49111"),
  T = a("782340"),
  v = a("650287");

function f(e) {
  let {
    onClose: s,
    transitionState: a,
    dismissable: h,
    guildPain: f,
    myUsage: _
  } = e, [g, O] = l.useState(u.Tab.Intro), {
    submitted: M,
    submitting: C,
    saveSettings: R
  } = (0, o.useSaveSettings)(s), {
    guildPlans: A,
    overrideGuild: p,
    getDebug: E
  } = (0, o.useGuildMigrationSteps)(f, _);
  return l.useEffect(() => {
    r.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []), (0, t.jsxs)(i.ModalRoot, {
    className: v.modal,
    transitionState: a,
    "aria-label": T.default.Messages.NOTIFICATIONS,
    size: i.ModalSize.DYNAMIC,
    children: [(0, t.jsx)(u.default, {
      selectedTab: g,
      onClick: O,
      submitted: M
    }), g === u.Tab.Intro ? (0, t.jsx)(x.default, {}) : g === u.Tab.Customize ? (0, t.jsx)(j, {
      guildPlans: A,
      overrideGuild: p,
      getDebug: E
    }) : (0, t.jsx)(m.default, {
      count: Object.values(A).filter(e => {
        var s;
        return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === N.Mode.UseGreyDot
      }).length
    }), (0, t.jsxs)(i.ModalFooter, {
      className: v.buttons,
      children: [(0, t.jsxs)("div", {
        className: v.left,
        children: [h && g === u.Tab.Intro ? (0, t.jsx)(i.Clickable, {
          className: v.dismiss,
          onClick: s,
          children: (0, t.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: T.default.Messages.DISMISS
          })
        }) : null, h && g === u.Tab.Customize ? (0, t.jsx)(i.Clickable, {
          className: v.dismiss,
          onClick: s,
          children: (0, t.jsx)(i.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: T.default.Messages.CANCEL
          })
        }) : null]
      }), (0, t.jsxs)("div", {
        className: v.right,
        children: [g === u.Tab.Customize ? (0, t.jsx)(i.Text, {
          className: v.warning,
          variant: "text-xs/medium",
          color: "text-muted",
          children: T.default.Messages.NOTIF_MIGRATION_BACKUP
        }) : null, g !== u.Tab.Customize || M ? null : (0, t.jsxs)(i.Button, {
          onClick: () => O(u.Tab.Intro),
          color: i.Button.Colors.TRANSPARENT,
          children: [(0, t.jsx)(n.default, {
            width: 16,
            height: 16
          }), " ", T.default.Messages.BACK]
        }), g === u.Tab.Intro ? (0, t.jsxs)(i.Button, {
          onClick: () => O(u.Tab.Customize),
          children: [T.default.Messages.TRY_IT_OUT, " ", (0, t.jsx)(d.default, {
            width: 16,
            height: 16
          })]
        }) : g === u.Tab.Customize ? (0, t.jsxs)(i.Button, {
          onClick: () => {
            O(u.Tab.Tips), R(A)
          },
          children: [T.default.Messages.APPLY, " ", (0, t.jsx)(c.default, {
            width: 16,
            height: 16
          })]
        }) : (0, t.jsx)(i.Button, {
          submitting: C,
          onClick: s,
          children: T.default.Messages.CLOSE
        })]
      })]
    })]
  })
}

function j(e) {
  let {
    guildPlans: s,
    overrideGuild: a
  } = e;
  return (0, t.jsxs)("div", {
    className: v.content,
    children: [(0, t.jsxs)("div", {
      className: v.header,
      children: [(0, t.jsx)(i.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: T.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
      }), (0, t.jsx)(i.Text, {
        className: v.subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: T.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
      })]
    }), (0, t.jsx)(h.default, {
      guildPlans: s,
      overrideGuild: a
    })]
  })
}
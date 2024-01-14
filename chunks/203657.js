"use strict";
a.r(s), a.d(s, {
  default: function() {
    return C
  }
}), a("222007");
var t = a("37983"),
  l = a("884691"),
  i = a("414456"),
  n = a.n(i),
  d = a("917351"),
  c = a.n(d),
  r = a("77078"),
  o = a("446674"),
  h = a("716241"),
  x = a("305961"),
  u = a("677099"),
  m = a("282109"),
  N = a("476263"),
  I = a("660279"),
  T = a("109264"),
  v = a("578706"),
  f = a("564875"),
  j = a("599110"),
  _ = a("380353"),
  g = a("49111"),
  O = a("782340"),
  M = a("327461");

function C(e) {
  let {
    guildPlans: s,
    overrideGuild: a
  } = e, i = (0, o.useStateFromStores)([u.default], () => u.default.getFlattenedGuildIds()), [n, d] = l.useMemo(() => c(s).values().sortBy(e => {
    let s = i.indexOf(e.guildId);
    return -1 === s ? i.length : s
  }).partition(e => e.mode === _.Mode.UseGreyDot).value(), [s, i]), h = l.useCallback(e => {
    var t;
    return a(e, (null !== (t = s[e].overrideMode) && void 0 !== t ? t : s[e].mode) === _.Mode.UseGreyDot ? _.Mode.KeepAsIs : _.Mode.UseGreyDot)
  }, [a, s]);
  return (0, t.jsx)("div", {
    className: M.container,
    children: (0, t.jsxs)(r.Scroller, {
      className: M.scroller,
      children: [(0, t.jsx)(R, {
        header: O.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_TITLE,
        subheader: O.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_SUBTITLE,
        guildPlans: n,
        onClick: h
      }), d.length > 0 ? (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
          className: M.divider
        }), (0, t.jsx)(R, {
          header: O.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_TITLE,
          guildPlans: d,
          onClick: h
        })]
      }) : null]
    })
  })
}

function R(e) {
  let {
    header: s,
    subheader: a,
    guildPlans: l,
    onClick: i
  } = e;
  return (0, t.jsxs)("div", {
    className: M.guildsContainer,
    children: [(0, t.jsxs)("div", {
      className: M.header,
      children: [(0, t.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-primary",
        children: s
      }), (0, t.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: a
      })]
    }), (0, t.jsx)("div", {
      className: M.guilds,
      children: l.map(e => (0, t.jsx)(A, {
        plan: e,
        onClick: i
      }, e.guildId))
    })]
  })
}

function A(e) {
  var s;
  let {
    plan: a,
    onClick: l
  } = e, i = (0, o.useStateFromStores)([x.default], () => x.default.getGuild(a.guildId));
  if (null == i) return null;
  let d = (null !== (s = a.overrideMode) && void 0 !== s ? s : a.mode) === _.Mode.UseGreyDot;

  function c() {
    j.default.track(g.AnalyticEvents.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
      ...(0, h.collectGuildAnalyticsMetadata)(a.guildId),
      is_selected: !d,
      is_muted: m.default.isMuted(a.guildId),
      notification_setting: m.default.getMessageNotifications(a.guildId)
    }), l(a.guildId)
  }
  return (0, t.jsx)(r.Tooltip, {
    text: (0, t.jsxs)("div", {
      children: [(0, t.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: i.name
      }), (0, t.jsxs)("div", {
        className: M.tooltipRow,
        children: [(0, t.jsx)(T.default, {
          width: 12,
          height: 12
        }), (0, t.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.messagePain ? O.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_BUSY : O.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_QUIET
        })]
      }), (0, t.jsxs)("div", {
        className: M.tooltipRow,
        children: [(0, t.jsx)(f.default, {
          width: 12,
          height: 12
        }), (0, t.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.visitsALot ? O.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALOT : O.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALITTLE
        })]
      }), (0, t.jsxs)("div", {
        className: M.tooltipRow,
        children: [(0, t.jsx)(I.default, {
          width: 12,
          height: 12
        }), (0, t.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: a.muted ? O.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_MUTED : O.default.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_NOT_MUTED
        })]
      })]
    }),
    "aria-label": a.debugReason,
    tooltipClassName: M.tooltip,
    children: e => (0, t.jsxs)(r.Clickable, {
      ...e,
      className: n(M.guild, d ? M.selected : void 0),
      onClick: c,
      children: [(0, t.jsx)(v.default, {
        className: M.checkmark,
        width: 16,
        height: 16,
        backgroundColor: "white"
      }), (0, t.jsx)(N.default, {
        "aria-hidden": !0,
        className: M.guildIcon,
        guild: i,
        size: N.default.Sizes.MEDIUM,
        active: !0,
        tabIndex: -1
      })]
    })
  })
}
"use strict";
l.r(t), l.d(t, {
  GuildEventTimeStatus: function() {
    return R
  }
}), l("222007");
var n, a, s = l("37983"),
  r = l("884691"),
  u = l("414456"),
  i = l.n(u),
  c = l("866227"),
  d = l.n(c),
  o = l("669491"),
  E = l("77078"),
  f = l("449918"),
  v = l("943232"),
  h = l("93393"),
  T = l("956089"),
  N = l("397680"),
  m = l("822516"),
  g = l("757767"),
  x = l("745049"),
  C = l("843455"),
  _ = l("782340"),
  S = l("675644");
(a = n || (n = {}))[a.SCHEDULED = 0] = "SCHEDULED", a[a.STARTING_SOON = 1] = "STARTING_SOON", a[a.READY = 2] = "READY", a[a.STARTED = 3] = "STARTED", a[a.ENDED = 4] = "ENDED", a[a.CANCELED = 5] = "CANCELED";

function D() {
  return (0, s.jsx)(T.TextBadge, {
    className: S.newBadge,
    color: o.default.unsafe_rawColors.BRAND_260.css,
    text: (0, s.jsx)(E.Text, {
      className: S.newBadgeText,
      variant: "text-xs/bold",
      children: _.default.Messages.NEW
    })
  })
}

function L(e) {
  let {
    children: t,
    className: l,
    tooltipText: n
  } = e;
  return (0, s.jsx)("div", {
    className: i(S.eventStatusContainer, l),
    children: (0, s.jsx)(E.Tooltip, {
      position: "right",
      text: n,
      shouldShow: null != n,
      children: e => (0, s.jsx)("div", {
        ...e,
        className: i(S.eventStatusContainer, l),
        children: t
      })
    })
  })
}

function R(e) {
  let {
    startTime: t,
    status: l,
    eventType: n,
    className: a,
    endTime: u,
    liveText: c,
    textVariant: o = "text-sm/semibold",
    isNew: T,
    recurrenceRule: R,
    guildEventId: I,
    recurrenceId: p
  } = e, A = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_BRAND), j = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_POSITIVE), w = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_DANGER);
  null == c && (c = n === x.GuildScheduledEventEntityTypes.EXTERNAL ? _.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : _.default.Messages.STAGE_CHANNEL_LIVE_NOW);
  let M = (0, N.default)(p, I),
    [{
      startDateTimeString: O,
      endDateTimeString: G,
      currentOrPastEvent: V,
      upcomingEvent: U,
      diffMinutes: H
    }, b] = r.useState((0, m.getEventTimeData)(t, u));
  r.useEffect(() => {
    b((0, m.getEventTimeData)(t, u));
    let e = setInterval(() => b((0, m.getEventTimeData)(t, u)), 1e3);
    return () => {
      clearInterval(e)
    }
  }, [t, u]);
  let B = O;
  null != G && "" !== G && (B = _.default.Messages.START_DATE_TO_END_DATE.format({
    start: O,
    end: G
  }));
  let P = r.useMemo(() => l === x.GuildScheduledEventStatus.CANCELED || (null == M ? void 0 : M.is_canceled) ? 5 : l === x.GuildScheduledEventStatus.ACTIVE ? 3 : x.GuildScheduledEventStatusDone.has(l) ? 4 : V ? 2 : U ? 1 : 0, [l, null == M ? void 0 : M.is_canceled, V, U]),
    Y = function(e, t, l, n, a) {
      switch (e) {
        case 1:
          return a > 0 ? _.default.Messages.STARTING_IN_MINUTES.format({
            minutes: a
          }) : _.default.Messages.STARTING_SOON;
        case 2:
          return _.default.Messages.STARTING_SOON;
        case 3:
          return null != n && "" !== n ? _.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
            start: l,
            startHook: e => (0, s.jsx)(E.Text, {
              color: "text-positive",
              variant: "text-sm/semibold",
              className: S.liveEventEndTime,
              children: e
            }),
            end: n
          }) : null != l ? l : "";
        default:
          return t
      }
    }(P, B, c, G, H),
    {
      Icon: k,
      iconColor: y,
      textColor: W,
      tooltipText: Z
    } = r.useMemo(() => (function(e) {
      let t, {
          timeStatus: l,
          textBrand: n,
          textPositive: a,
          textDanger: s,
          endDateTimeString: r,
          startDateTimeString: u
        } = e,
        i = v.default,
        c = n,
        d = "header-secondary";
      switch (l) {
        case 3:
          c = a, d = null != r ? void 0 : "text-positive";
          break;
        case 4:
          i = h.default;
          break;
        case 2:
        case 1:
          d = "text-brand", t = u;
          break;
        case 5:
          c = s
      }
      return {
        Icon: i,
        iconColor: c.hex,
        textColor: d,
        tooltipText: t
      }
    })({
      timeStatus: P,
      textBrand: A,
      textPositive: j,
      textDanger: w,
      endDateTimeString: G,
      startDateTimeString: O
    }), [P, A, j, w, G, O]),
    z = null;
  if (null != R) {
    let e = (0, m.getRRule)(R);
    z = _.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
      recurrenceRule: e.toText()
    });
    let l = d(t),
      n = (0, m.recurrenceRuleToOption)(l, R);
    z = function(e, t) {
      let l = t.toDate(),
        n = l.toLocaleString(_.default.getLocale(), {
          weekday: "long"
        });
      switch (e) {
        case g.RecurrenceOptions.WEEKLY:
          return _.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
            weekday: n
          });
        case g.RecurrenceOptions.BIWEEKLY:
          return _.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
            weekday: n
          });
        case g.RecurrenceOptions.MONTHLY:
          let a = Math.ceil(l.getDate() / 7);
          return _.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
            weekday: n,
            nth: a
          });
        case g.RecurrenceOptions.YEARLY:
          return _.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
            date: l.toLocaleString(_.default.getLocale(), {
              month: "short",
              day: "2-digit"
            })
          });
        case g.RecurrenceOptions.WEEKDAY_ONLY:
          return _.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
        default:
          return null
      }
    }(n, l)
  }
  return (0, s.jsxs)(L, {
    className: i(a, {
      [S.isRecurring]: null != z
    }),
    tooltipText: Z,
    children: [T && l === x.GuildScheduledEventStatus.SCHEDULED ? (0, s.jsx)(D, {}) : (0, s.jsx)(k, {
      color: y,
      width: 20,
      height: 20
    }), (0, s.jsxs)("div", {
      className: S.eventStatusLabel,
      children: [(0, s.jsx)(E.Text, {
        color: W,
        variant: o,
        children: Y
      }), null != z && (0, s.jsx)(E.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        children: z
      })]
    })]
  })
}
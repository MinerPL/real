"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  },
  useCanShowRecurringEventUpsell: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("5667"),
  i = n("651072"),
  r = n("334683"),
  o = n("994428"),
  u = n("782340"),
  d = n("928936"),
  c = n("713827");

function f(e) {
  let {
    guildId: t,
    markAsDismissed: i
  } = e;
  return (0, l.jsx)(s.default, {
    caretPosition: s.CaretPosition.LEFT_TOP,
    className: d.coachmark,
    asset: (0, l.jsx)("img", {
      src: c,
      alt: "",
      className: d.image
    }),
    header: u.default.Messages.GUILD_EVENT_RECURRING_COACHMARK_TITLE,
    content: (0, l.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      children: u.default.Messages.GUILD_EVENT_RECURRING_COACHMARK_BODY
    }),
    buttonCTA: u.default.Messages.GUILD_EVENT_RECURRING_COACHMARK_CTA,
    onClick: () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("659707").then(n.bind(n, "659707"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildId: t
        })
      }), i(o.ContentDismissActionType.TAKE_ACTION)
    },
    secondaryButtonCTA: u.default.Messages.DISMISS,
    onSecondaryClick: () => i(o.ContentDismissActionType.USER_DISMISS),
    markAsDismissed: () => i(o.ContentDismissActionType.USER_DISMISS)
  })
}

function h(e) {
  let t = (0, r.default)(e),
    {
      enabled: n
    } = i.default.useExperiment({
      guildId: e,
      location: "guild_sidebar"
    }, {
      autoTrackExposure: !1
    });
  return t && i.default.trackExposure({
    guildId: e,
    location: "guild_sidebar"
  }), t && n
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  i = n("77078"),
  a = n("592407"),
  r = n("27978"),
  s = n("119184"),
  d = n("305961"),
  o = n("957255"),
  c = n("943232"),
  f = n("49111"),
  E = n("782340"),
  v = n("909199");

function S(e) {
  let {
    guildId: t,
    onClose: n
  } = e, {
    showHubEventsList: S
  } = r.default.useExperiment({
    guildId: t,
    location: "6597ca_1"
  }, {
    autoTrackExposure: !1
  }), g = (0, u.useStateFromStores)([d.default, o.default], () => {
    let e = d.default.getGuild(t);
    return o.default.can(f.Permissions.MANAGE_ROLES, e)
  }, [t]), h = (0, u.useStateFromStores)([d.default], () => {
    let e = d.default.getGuild(t);
    return S && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
  }, [t, S]);
  return (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(s.default, {
      children: (0, l.jsx)("div", {
        className: v.circle,
        children: (0, l.jsx)(c.default, {
          height: 40,
          width: 40,
          className: v.icon
        })
      })
    }), (0, l.jsx)(i.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: v.title,
      children: h ? E.default.Messages.HUB_EVENTS_HEADER_TITLE : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: v.subtitle,
      children: h ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
    }), g && (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: v.roleTip,
      children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
        onClick: () => {
          a.default.open(t, f.GuildSettingsSections.ROLES), n()
        }
      })
    })]
  })
}
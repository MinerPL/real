"use strict";
n.r(t), n.d(t, {
  GuildSelector: function() {
    return c
  },
  WebhookGuildChannelSelector: function() {
    return g
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("316693"),
  a = n("605451"),
  o = n("774811"),
  d = n("577776"),
  u = n("8222"),
  l = n("49111"),
  f = n("782340"),
  _ = n("246097");

function c(e) {
  let {
    error: t,
    selectedGuildId: n,
    onGuildChange: i,
    guilds: u,
    disabled: c = !1
  } = e, g = u.filter(e => r.default.has(e.permissions, l.Permissions.MANAGE_GUILD)).map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, s.jsxs)("div", {
    className: _.selectorGroup,
    children: [(0, s.jsx)(a.Heading, {
      variant: "heading-deprecated-12/semibold",
      className: _.sectionLabel,
      children: f.default.Messages.OAUTH2_ADD_TO_GUILD
    }), null != t && "" !== t ? (0, s.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: t
    }) : null, (0, s.jsx)(o.SearchableSelect, {
      wrapperClassName: _.wrapper,
      className: _.select,
      maxVisibleItems: 5,
      value: n,
      placeholder: f.default.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
      options: g,
      onChange: e => {
        i(e)
      },
      isDisabled: c
    }), (0, s.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "header-secondary",
      className: _.label,
      children: f.default.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
    })]
  })
}

function g(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: n,
    onChannelChange: r,
    error: l
  } = e, [c, g] = i.useState(null);
  i.useEffect(() => {
    (async function e() {
      if (null != t) {
        let e = await (0, u.fetchChannels)(t);
        g(e)
      }
    })()
  }, [t]), i.useEffect(() => {
    null != c && null != n && null == c.find(e => e.id === n) && r(null)
  }, [c, r, n]);
  let m = (null != c ? c : []).map(e => ({
    value: e.id,
    label: e.name
  }));
  return null == t ? null : (0, s.jsxs)("div", {
    className: _.selectorGroup,
    children: [(0, s.jsx)(a.Heading, {
      variant: "heading-deprecated-12/semibold",
      className: _.sectionLabel,
      children: f.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING
    }), null != l && "" !== l ? (0, s.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      children: l
    }) : null, (0, s.jsx)(o.SearchableSelect, {
      wrapperClassName: _.wrapper,
      className: _.select,
      maxVisibleItems: 5,
      onChange: e => {
        r(e)
      },
      placeholder: f.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
      value: n,
      options: m
    }), (0, s.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      className: _.label,
      children: f.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION
    })]
  })
}
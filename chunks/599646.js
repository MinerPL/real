"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("592407"),
  r = s("42203"),
  o = s("305961"),
  d = s("759885"),
  u = s("185709"),
  c = s("260928"),
  E = s("67310"),
  _ = s("296416"),
  T = s("49111"),
  I = s("782340"),
  S = s("452938");

function N(e) {
  let {
    channel: t,
    beforeTransition: s
  } = e;
  return null != t ? (0, a.jsx)(d.default, {
    channel: t,
    className: S.channelName,
    beforeTransition: s,
    openChatWithoutConnecting: !0
  }) : null
}

function g(e) {
  let {
    guildId: t
  } = e, s = (0, n.useStateFromStores)([o.default], () => o.default.getGuild(t), [t]), d = (0, n.useStateFromStores)([r.default], () => null != s ? r.default.getChannel(s.rulesChannelId) : null, [s]), u = () => {
    i.default.close()
  }, c = () => {
    i.default.setSection(T.GuildSettingsSections.MEMBER_VERIFICATION)
  }, E = null != d ? I.default.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_TRIGGER_SUBHEADER_WITH_CHANNEL.format({
    onClick: c,
    channelName: d.name,
    channelHook: () => (0, a.jsx)(N, {
      channel: d,
      beforeTransition: u
    })
  }) : I.default.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_TRIGGER_SUBHEADER.format({
    onClick: c
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      children: I.default.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_TRIGGER_HEADER
    }), (0, a.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: S.subHeaderText,
      children: E
    })]
  })
}

function f(e) {
  let {
    rule: t,
    onChangeRule: s
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: S.cardContentsContainer,
      children: [(0, a.jsx)(E.default, {
        step: 1,
        header: (0, a.jsx)(g, {
          guildId: t.guildId
        })
      }), (0, a.jsx)(_.default, {
        type: _.default.Type.ARROW_DOWN
      }), (0, a.jsx)(E.default, {
        step: 2,
        header: I.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, a.jsx)(u.default, {
          rule: t,
          onChangeRule: s
        })
      }), (0, a.jsx)(_.default, {
        type: _.default.Type.CROSS
      }), (0, a.jsx)(E.default, {
        step: 3,
        header: I.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, a.jsx)(c.default, {
          rule: t,
          onChangeRule: s
        })
      })]
    })
  })
}
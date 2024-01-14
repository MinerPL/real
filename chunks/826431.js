"use strict";
n.r(t), n.d(t, {
  getTutorialPopoutText: function() {
    return f
  }
}), n("781738");
var s = n("37983");
n("884691");
var a = n("446674"),
  l = n("305961"),
  i = n("162771"),
  r = n("76539"),
  o = n("782340"),
  u = n("141987");
let d = () => (0, s.jsx)(s.Fragment, {
    children: o.default.Messages.TIP_INSTANT_INVITE_BODY3.format({
      shareIcon: o.default.Messages.INSTANT_INVITE,
      shareIconHook: () => (0, s.jsx)(r.default, {
        className: u.icon
      }, "icon")
    })
  }),
  c = () => {
    let e = (0, a.useStateFromStores)([l.default, i.default], () => l.default.getGuild(i.default.getGuildId()), []),
      t = null == e ? void 0 : e.name;
    return (0, s.jsx)(s.Fragment, {
      children: o.default.Messages.TIP_WRITING_MESSAGES_BODY3.format({
        serverName: t
      })
    })
  },
  f = e => {
    var t, n;
    let a = {
        VOICE_CONVERSATIONS: {
          title: (0, s.jsx)("div", {
            className: u.voiceChannelsTitle,
            children: o.default.Messages.NUF_VOICE_CHANNELS_TITLE
          }),
          body: o.default.Messages.NUF_VOICE_CHANNELS_DESCRIPTION
        },
        WRITING_MESSAGES: {
          title: (0, s.jsx)("div", {
            className: u.writingMessagesTitle,
            children: o.default.Messages.TIP_WRITING_MESSAGES_TITLE3
          }),
          body: (0, s.jsx)(c, {})
        },
        ORGANIZE_BY_TOPIC: {
          title: (0, s.jsx)("div", {
            className: u.channelsTitle,
            children: o.default.Messages.NUF_CHANNELS_TITLE
          }),
          body: o.default.Messages.NUF_CHANNELS_DESCRIPTION
        },
        WHOS_ONLINE: {
          title: o.default.Messages.TIP_WHOS_ONLINE_TITLE3,
          body: o.default.Messages.TIP_WHOS_ONLINE_BODY3.format()
        },
        INSTANT_INVITE: {
          title: o.default.Messages.TIP_INSTANT_INVITE_TITLE3,
          body: (0, s.jsx)(d, {})
        },
        SERVER_SETTINGS: {
          title: o.default.Messages.TIP_SERVER_SETTINGS_TITLE3,
          body: o.default.Messages.TIP_SERVER_SETTINGS_BODY3.format()
        },
        DIRECT_MESSAGES: {
          title: o.default.Messages.TIP_DIRECT_MESSAGES_TITLE3,
          body: o.default.Messages.TIP_DIRECT_MESSAGES_BODY3.format()
        },
        CREATE_MORE_SERVERS: {
          title: o.default.Messages.TIP_CREATE_MORE_SERVERS_TITLE3,
          body: o.default.Messages.TIP_CREATE_MORE_SERVERS_BODY3.format()
        },
        CREATE_FIRST_SERVER: {
          title: o.default.Messages.TIP_CREATE_FIRST_SERVER_TITLE3,
          body: o.default.Messages.TIP_CREATE_FIRST_SERVER_BODY3.format()
        },
        FRIENDS_LIST: {
          title: o.default.Messages.TIP_FRIENDS_LIST_TITLE3,
          body: o.default.Messages.TIP_FRIENDS_LIST_BODY3.format()
        }
      },
      l = e.replace(/-/g, "_").toUpperCase(),
      i = null !== (t = a[l]) && void 0 !== t ? t : {};
    return {
      title: i.title,
      body: i.body,
      isLongText: null !== (n = i.isLongText) && void 0 !== n && n
    }
  }
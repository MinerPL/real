"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("913144"),
  l = n("819689"),
  s = n("115718"),
  i = n("347895"),
  r = n("341329"),
  o = n("582713"),
  u = n("724210"),
  d = {
    openPrivateChannelAsSidebar(e) {
      let {
        channelId: t,
        messageId: n,
        baseChannelId: s,
        hasSingleMessageRequest: i
      } = e;
      a.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: o.SidebarType.VIEW_MESSAGE_REQUEST,
        baseChannelId: s,
        channelId: t,
        details: {
          type: o.SidebarOpenDetailsType.MESSAGE_REQUEST,
          hasSingleMessageRequest: i
        }
      }), null != n ? l.default.jumpToMessage({
        channelId: t,
        messageId: n,
        flash: !0
      }) : r.default.fetchMessages({
        channelId: t
      })
    },
    openChannelAsSidebar(e) {
      let {
        guildId: t,
        channelId: n,
        baseChannelId: i,
        flash: u = !0,
        details: d
      } = e;
      a.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: o.SidebarType.VIEW_CHANNEL,
        guildId: t,
        baseChannelId: i,
        channelId: n,
        details: d
      });
      let c = null == d ? void 0 : d.initialMessageId;
      null != c ? l.default.jumpToMessage({
        channelId: n,
        messageId: c,
        flash: u,
        jumpType: s.JumpTypes.INSTANT
      }) : r.default.fetchMessages({
        guildId: t,
        channelId: n
      })
    },
    openResourceChannelAsSidebar(e) {
      let {
        guildId: t,
        channelId: n
      } = e;
      null != t && ((0, i.selectHomeResourceChannel)(t, n, !1), a.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: o.SidebarType.VIEW_CHANNEL,
        guildId: t,
        baseChannelId: u.StaticChannelRoute.GUILD_HOME,
        channelId: n
      }))
    },
    openThreadAsSidebar(e) {
      let {
        guildId: t,
        baseChannelId: n,
        channelId: i,
        flash: u = !0,
        details: d
      } = e;
      a.default.dispatch({
        type: "SIDEBAR_VIEW_CHANNEL",
        sidebarType: o.SidebarType.VIEW_THREAD,
        baseChannelId: n,
        channelId: i,
        details: d
      }), (null == d ? void 0 : d.initialMessageId) != null ? l.default.jumpToMessage({
        channelId: i,
        messageId: d.initialMessageId,
        flash: u,
        jumpType: s.JumpTypes.INSTANT
      }) : r.default.fetchMessages({
        guildId: t,
        channelId: i
      })
    },
    closeChannelSidebar(e) {
      a.default.dispatch({
        type: "SIDEBAR_CLOSE",
        baseChannelId: e
      })
    },
    openGuildSidebar(e) {
      let {
        guildId: t,
        baseChannelId: n,
        sidebarType: l,
        details: s
      } = e;
      a.default.dispatch({
        type: "SIDEBAR_VIEW_GUILD",
        sidebarType: l,
        baseChannelId: n,
        guildId: t,
        details: s
      })
    },
    closeGuildSidebar(e) {
      a.default.dispatch({
        type: "SIDEBAR_CLOSE_GUILD",
        guildId: e
      })
    }
  }
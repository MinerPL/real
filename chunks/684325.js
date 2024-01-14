"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("90915"),
  s = n("851387"),
  o = n("987317"),
  r = n("73749"),
  d = n("838857"),
  u = n("393414"),
  c = n("49111");
class f extends a.Component {
  componentDidUpdate(e) {
    let {
      location: t
    } = this.props;
    t.pathname + t.search !== e.location.pathname + e.location.search && this.checkGuildAndChannel()
  }
  checkGuildAndChannel() {
    let {
      match: e
    } = this.props;
    if (null == e) return;
    let {
      guildId: t,
      channelId: n,
      messageId: i
    } = function(e) {
      let {
        guildId: t,
        channelId: n,
        messageId: i
      } = e.params;
      return {
        guildId: null != t && "" !== t ? t : c.ME,
        channelId: n,
        messageId: i
      }
    }(e);
    (0, d.isValidGuildId)(t) && (0, d.isValidChannelId)(n) ? (s.default.selectGuild(t), o.default.selectChannel({
      guildId: t,
      channelId: n,
      messageId: i
    })) : (0, u.replaceWith)(c.Routes.ME)
  }
  render() {
    return null
  }
}
var h = () => (0, i.jsxs)(l.Switch, {
  children: [(0, i.jsx)(r.default, {
    path: c.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"),
    component: f
  }), (0, i.jsx)(r.default, {
    component: f
  })]
})
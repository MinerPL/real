"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("450911"),
  l = n("272030"),
  r = n("86621"),
  o = n("305961");

function u(e) {
  return (0, r.default)(class extends s.Component {
    render() {
      return (0, a.jsx)(e, {
        ...this.props,
        onMessageUser: this.handleMessageUser,
        onUserContextMenu: this.handleUserContextMenu,
        onGuildContextMenu: this.handleGuildContextMenu,
        onChannelContextMenu: this.handleChannelContextMenu
      })
    }
    handleMessageUser(e, t) {
      return i.default.openPrivateChannel(t.id)
    }
    handleUserContextMenu(e, t, s) {
      (0, l.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("406784").then(n.bind(n, "406784"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      }, {
        onClose: s
      })
    }
    handleGuildContextMenu(e, t) {
      (0, l.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("374705").then(n.bind(n, "374705"));
        return n => (0, a.jsx)(e, {
          ...n,
          guild: t
        })
      })
    }
    handleChannelContextMenu(e, t) {
      let s = o.default.getGuild(t.getGuildId());
      if (null == s) return null;
      (0, l.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("754938").then(n.bind(n, "754938"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          guild: s
        })
      })
    }
  })
}
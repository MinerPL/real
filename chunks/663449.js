"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("627445"),
  o = n.n(r),
  u = n("77078"),
  d = n("506885"),
  c = n("145131"),
  f = n("533403"),
  E = n("945330"),
  _ = n("925877"),
  h = n("701909"),
  C = n("962541"),
  I = n("762489"),
  T = n("329858"),
  S = n("49111"),
  m = n("782340"),
  p = n("234837");
let A = {
  HOST: 5,
  LISTENER: 4
};
class g extends s.PureComponent {
  isHost() {
    let {
      currentUser: e,
      host: t
    } = this.props;
    return e.id === (null == t ? void 0 : t.id)
  }
  renderTitle() {
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(T.default, {
        children: this.isHost() ? m.default.Messages.SPOTIFY_LISTEN_ALONG_TITLE_HOST.format({
          count: this.props.party.length
        }) : m.default.Messages.SPOTIFY_LISTEN_ALONG_TITLE_LISTENER
      }), (0, a.jsx)(I.default, {
        children: m.default.Messages.SPOTIFY_LISTEN_ALONG_SUBTITLE_LISTENER
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, a.jsx)(C.default, {
      tooltipText: m.default.Messages.SPOTIFY_LISTEN_ALONG_STOP,
      onClick: e,
      icon: E.default
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, a.jsx)(C.default, {
      tooltipText: m.default.Messages.SPOTIFY_LISTEN_ALONG_INFO,
      onClick: () => {
        window.open(h.default.getArticleURL(S.HelpdeskArticles.SPOTIFY_CONNECTION), "_blank")
      },
      icon: _.default
    }) : null
  }
  render() {
    return (0, a.jsxs)("div", {
      className: p.listeningAlong,
      children: [this.renderTitle(), (0, a.jsx)(c.default, {
        justify: c.default.Justify.END,
        className: p.party,
        children: (0, a.jsx)(f.default, {
          users: this.props.party,
          max: this.isHost() ? A.HOST : A.LISTENER,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, a.jsxs)("div", {
        className: p.icons,
        children: [this.renderHelpIcon(), this.renderStopListeningButton()]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.renderPartyMember = (e, t) => {
      let n;
      if (null == e) return null;
      let {
        host: i,
        renderUserPopout: r,
        onUserContextMenu: c
      } = this.props;
      return n = (null == i ? void 0 : i.id) === e.id ? m.default.Messages.SPOTIFY_LISTEN_ALONG_HOST : m.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENER, (0, a.jsx)(u.Popout, {
        preload: () => (0, d.default)(e.id, e.getAvatarURL(void 0, 80)),
        renderPopout: t => (o(null != e, ""), r(t, e)),
        position: "top",
        align: "center",
        children: i => (0, a.jsx)(u.Tooltip, {
          text: n,
          children: n => {
            let {
              onMouseEnter: a,
              onMouseLeave: r
            } = n;
            return (0, s.createElement)(u.Avatar, {
              ...i,
              key: e.id,
              src: e.getAvatarURL(void 0, 24),
              size: u.AvatarSizes.SIZE_24,
              className: l(p.avatar, t),
              "aria-label": e.username,
              onMouseEnter: a,
              onMouseLeave: r,
              onContextMenu: t => void(null != e && (null == c || c(t, e)))
            })
          }
        })
      }, e.id)
    }, this.renderPartyMemberOverflow = (e, t, n) => {
      let {
        renderOverflowPopout: s
      } = this.props;
      return (0, a.jsx)(u.Popout, {
        renderPopout: s,
        children: n => (0, a.jsx)(u.Tooltip, {
          text: m.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENERS,
          children: s => (0, a.jsx)("div", {
            className: l(p.overflow, t),
            ...s,
            ...n,
            children: e
          })
        })
      }, n)
    }
  }
}
var N = g
"use strict";
n.r(t), n.d(t, {
  MoreVoiceUser: function() {
    return b
  },
  AudienceVoiceUser: function() {
    return D
  },
  default: function() {
    return w
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("316693"),
  o = n("77078"),
  u = n("255397"),
  d = n("272030"),
  c = n("987317"),
  f = n("990766"),
  h = n("650912"),
  p = n("76393"),
  m = n("845038"),
  E = n("374014"),
  C = n("223913"),
  g = n("709463"),
  S = n("264429"),
  _ = n("930291"),
  I = n("506885"),
  T = n("981601"),
  v = n("271938"),
  x = n("305961"),
  N = n("957255"),
  A = n("800762"),
  M = n("272339"),
  R = n("68148"),
  j = n("49111"),
  L = n("171644"),
  O = n("706530"),
  y = n("782340"),
  P = n("375674");

function b(e) {
  let {
    numUsers: t
  } = e;
  return (0, a.jsx)("div", {
    className: P.moreContainer,
    children: (0, a.jsxs)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: ["+", t]
    })
  })
}

function D(e) {
  let {
    numAudience: t,
    collapsed: n
  } = e, l = n ? t : y.default.Messages.LISTENING_COUNT.format({
    count: t
  });
  return (0, a.jsxs)("div", {
    className: i(P.audienceContainer, {
      [P.audienceContainerCollapsed]: n
    }),
    children: [(0, a.jsx)("div", {
      className: P.audienceIconContainer,
      children: (0, a.jsx)(M.default, {
        className: P.audienceIcon
      })
    }), (0, a.jsx)(o.Text, {
      color: "text-muted",
      variant: "text-sm/medium",
      children: l
    })]
  })
}
class U extends l.PureComponent {
  get canWatchStream() {
    let {
      channel: e,
      isStreaming: t
    } = this.props;
    return t && (0, C.canWatchStream)(e, A.default, x.default, N.default, p.default)[0]
  }
  render() {
    let {
      userPopoutOpen: e
    } = this.state, {
      connectUserDragSource: t,
      canDrag: n,
      isSelfOnOtherClient: l,
      user: s,
      channel: i
    } = this.props, r = (0, a.jsx)("div", {
      className: P.draggable,
      "data-dnd-name": i.name,
      onMouseEnter: l ? void 0 : this.handleMouseEnter,
      onMouseLeave: l ? void 0 : this.handleHidePreview,
      children: (0, a.jsx)(o.Popout, {
        preload: () => (0, I.default)(s.id, s.getAvatarURL(i.guild_id, 80), {
          guildId: i.guild_id,
          channelId: i.id
        }),
        position: "right",
        renderPopout: this.renderUserPopout,
        shouldShow: e,
        onRequestClose: this.handleCloseUserPopout,
        children: e => this.renderUser(e)
      })
    });
    return n ? t(r) : r
  }
  constructor(...e) {
    super(...e), this.domElementRef = l.createRef(), this.state = {
      userPopoutOpen: !1
    }, this.handleClickUser = () => {
      this.setState({
        userPopoutOpen: !this.state.userPopoutOpen
      })
    }, this.handleCloseUserPopout = () => {
      this.setState({
        userPopoutOpen: !1
      })
    }, this.handleHidePreview = () => {
      let {
        hidePreview: e,
        isStreaming: t,
        user: n,
        showHangStatus: a
      } = this.props;
      (t || a) && (null == e || e(n.id))
    }, this.handleMouseEnter = () => {
      let {
        user: e,
        showPreview: t,
        isStreaming: n,
        showHangStatus: a
      } = this.props;
      (n || a) && (null == t || t(e.id))
    }, this.handleWatchStream = () => {
      let {
        user: e,
        channel: t,
        isWatching: n,
        hidePreview: a
      } = this.props;
      if (!this.canWatchStream) return;
      let l = {
        streamType: O.StreamTypes.GUILD,
        ownerId: e.id,
        channelId: t.id,
        guildId: t.guild_id
      };
      v.default.getId() !== e.id && c.default.selectVoiceChannel(t.id), n ? ((0, g.default)(l), u.default.selectParticipant(l.channelId, (0, E.encodeStreamKey)(l))) : (0, f.watchStreamAndTransitionToStream)(l), null == a || a(e.id)
    }, this.handleJoinVoice = () => {
      let {
        user: e,
        channel: t,
        hidePreview: n
      } = this.props;
      N.default.can(r.default.combine(j.Permissions.CONNECT, j.Permissions.VIEW_CHANNEL), t) && (c.default.selectVoiceChannel(t.id), null == n || n(e.id))
    }, this.handleUserContextMenu = e => {
      let {
        channel: t,
        user: l
      } = this.props;
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("834247").then(n.bind(n, "834247"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: l,
          guildId: t.guild_id,
          channel: t,
          showMediaItems: !0,
          showStageChannelItems: t.isGuildStageVoice()
        })
      })
    }, this.renderUserPopout = e => {
      let {
        channel: t,
        user: n
      } = this.props, l = t.getGuildId();
      return (0, a.jsx)(T.default, {
        userId: n.id,
        guildId: null != l ? l : void 0,
        channelId: t.id,
        ...e
      })
    }, this.renderStreamPopout = () => {
      let {
        user: e,
        channel: t,
        previewIsOpen: n,
        location: l
      } = this.props;
      return (0, a.jsx)(S.default, {
        user: e,
        channel: t,
        onWatch: this.handleWatchStream,
        previewIsOpen: n,
        location: l
      })
    }, this.renderHangStatusPopout = () => {
      let {
        hangStatusActivity: e,
        previewIsOpen: t,
        user: n,
        channel: l
      } = this.props;
      return (0, a.jsx)(_.default, {
        userId: n.id,
        channel: l,
        hangStatusActivity: e,
        previewIsOpen: t
      })
    }, this.renderUser = e => {
      let {
        isSelfOnOtherClient: t,
        otherClientSessionType: n,
        voicePlatform: l,
        shouldShowPreview: s,
        mute: r,
        localMute: u,
        localVideoDisabled: d,
        speaking: c,
        user: f,
        deaf: h,
        priority: p,
        collapsed: E,
        isStreaming: C,
        isGuest: g,
        nick: S,
        video: _,
        serverMute: I,
        serverDeaf: T,
        tabIndex: v,
        embeddedApplication: x,
        channel: N,
        hangStatusActivity: A,
        showHangStatus: M,
        isSelf: j
      } = this.props, {
        userPopoutOpen: O
      } = this.state, b = L.GAME_CONSOLE_SESSIONS.has(null != n ? n : ""), D = {
        user: f,
        speaking: c,
        mute: r,
        localMute: u,
        localVideoDisabled: d,
        isStreaming: C,
        isGuest: g,
        video: _,
        priority: p,
        deaf: h,
        nick: S,
        collapsed: E,
        overlap: E,
        serverMute: I,
        serverDeaf: T,
        tabIndex: v,
        otherClientSessionType: n,
        voicePlatform: l,
        embeddedApplication: x,
        avatarContainerClass: i({
          [P.userAvatar]: !0
        }),
        disabled: t && !b,
        selected: O,
        onClick: b ? void 0 : this.handleClickUser,
        onDoubleClick: this.handleWatchStream,
        onContextMenu: this.handleUserContextMenu,
        guildId: N.guild_id,
        hangStatusActivity: A,
        showHangStatus: M,
        isSelf: j
      };
      if (t) {
        var U;
        return (0, a.jsx)(o.Tooltip, {
          text: null !== (U = (0, m.default)(n)) && void 0 !== U ? U : y.default.Messages.CONNECTED_ON_ANOTHER_CLIENT,
          children: e => {
            let {
              onClick: t,
              onContextMenu: n,
              ...l
            } = e;
            return (0, a.jsx)(R.default, {
              ...D,
              ...l
            })
          }
        })
      }
      return (0, a.jsx)(o.Popout, {
        position: "right",
        renderPopout: C ? this.renderStreamPopout : this.renderHangStatusPopout,
        shouldShow: s && !O,
        onRequestClose: this.handleHidePreview,
        spacing: 0,
        children: () => (0, a.jsx)(R.default, {
          ...D,
          onMouseDown: e.onMouseDown,
          onKeyDown: e.onKeyDown
        })
      })
    }
  }
}
U.defaultProps = {
  isSelfOnOtherClient: !1
};
var w = (0, h.makeVoiceUserDraggable)(U)
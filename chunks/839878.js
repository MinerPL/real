"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("446674"),
  r = n("77078"),
  d = n("539405"),
  u = n("987317"),
  c = n("679653"),
  f = n("539938"),
  h = n("557809"),
  p = n("233069"),
  g = n("950104"),
  m = n("42203"),
  E = n("305961"),
  S = n("27618"),
  v = n("18494"),
  y = n("887657"),
  C = n("293137"),
  N = n("945330"),
  O = n("673220"),
  T = n("960086"),
  I = n("519794"),
  _ = n("393900"),
  A = n("560995"),
  x = n("423741"),
  R = n("782340"),
  M = n("972607");
class L extends a.Component {
  componentDidUpdate() {
    this.props.locked && this.state.showOpacitySlider && this.setState({
      showOpacitySlider: !1
    })
  }
  renderCallButton() {
    let e, t;
    let {
      channel: n,
      channelHasActiveCall: a,
      userIsInChannelCall: l,
      isBlocked: s
    } = this.props;
    if (!(0, p.isPrivate)(n.type)) return null;
    let o = y.default,
      d = !1;
    return a ? l ? (e = R.default.Messages.LEAVE_CALL, o = C.default) : e = R.default.Messages.JOIN_CALL : s ? (e = R.default.Messages.CALL_UNAVAILABLE_BLOCKED_USERS, t = r.Tooltip.Colors.RED, d = !0) : e = R.default.Messages.START_VOICE_CALL, (0, i.jsx)(f.default.Icon, {
      icon: o,
      tooltip: e,
      onClick: this.handleClickCall,
      tooltipColor: t,
      disabled: d
    })
  }
  render() {
    let {
      className: e,
      draggableClassName: t,
      locked: n,
      channel: a,
      channelName: l,
      guild: o,
      onMouseDown: r,
      onContextMenu: d,
      isPreviewingInGame: u,
      disableDragIndicator: c
    } = this.props, {
      showOpacitySlider: p
    } = this.state;
    return p && !n ? (0, i.jsxs)(A.default.Bar, {
      className: M.opacityHeader,
      children: [(0, i.jsx)(x.default, {}), (0, i.jsx)(f.default.Icon, {
        icon: N.default,
        onClick: this.handleCloseOpacitySettings,
        tooltip: R.default.Messages.CLOSE
      })]
    }) : (0, i.jsx)(A.default.Background, {
      opacityOverride: n || u ? null : 1,
      children: (0, i.jsx)("div", {
        className: s(e, t, M.headerContainer),
        onMouseDown: r,
        onContextMenu: d,
        children: (0, i.jsxs)(f.default, {
          guildId: a.guild_id,
          channelId: a.id,
          toolbar: this.renderWidgetButtons(),
          transparent: !0,
          children: [u || n || c ? null : (0, i.jsx)(O.default, {
            className: s(M.dragIcon, t),
            width: 20,
            height: 20
          }), (0, h.renderTitle)({
            channel: a,
            channelName: l
          }), n ? null : (0, h.renderTopic)(a, o)]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showOpacitySlider: !1
    }, this.handleClickCall = e => {
      let {
        channel: t,
        userIsInChannelCall: n,
        channelHasActiveCall: i
      } = this.props;
      if (i) n ? u.default.selectVoiceChannel(null) : d.default.callPrivateChannel(t.id, !1);
      else {
        let n = !i && !e.shiftKey;
        d.default.callPrivateChannel(t.id, n)
      }
    }, this.handleOpenOpacitySettings = () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: !0
      }), e && d.default.setPreviewInGameMode(!0)
    }, this.handleCloseOpacitySettings = () => {
      let {
        pinned: e
      } = this.props;
      this.setState({
        showOpacitySlider: !1
      }), e && d.default.setPreviewInGameMode(!1)
    }, this.handleMouseDown = e => {
      let {
        onMouseDown: t
      } = this.props;
      null != t && t(e)
    }, this.renderWidgetButtons = () => {
      let {
        locked: e,
        handlePin: t,
        pinned: n
      } = this.props, l = n ? R.default.Messages.OVERLAY_WIDGET_HIDE_IN_GAME : R.default.Messages.OVERLAY_WIDGET_SHOW_IN_GAME;
      return e ? null : (0, i.jsxs)(a.Fragment, {
        children: [this.renderCallButton(), n ? (0, i.jsx)(f.default.Icon, {
          icon: T.default,
          tooltip: R.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY,
          onClick: this.handleOpenOpacitySettings
        }) : null, (0, i.jsx)(f.default.Icon, {
          icon: n ? _.default : I.default,
          tooltip: l,
          selected: n,
          onClick: t
        })]
      })
    }
  }
}

function D(e) {
  let {
    channel: t,
    ...n
  } = e, a = (0, o.useStateFromStores)([v.default, m.default], () => {
    let e = v.default.getVoiceChannelId();
    return m.default.getChannel(e)
  }), l = (0, o.useStateFromStores)([E.default], () => E.default.getGuild(t.guild_id)), s = (0, o.useStateFromStores)([g.default], () => g.default.isCallActive(t.id)), r = (0, c.default)(t), d = (0, o.useStateFromStores)([S.default], () => !!t.isDM() && null != t.getRecipientId() && S.default.isBlocked(t.getRecipientId()));
  return (0, i.jsx)(L, {
    channel: t,
    channelName: r,
    guild: l,
    channelHasActiveCall: s,
    userIsInChannelCall: null != a && a.id === t.id,
    isBlocked: d,
    ...n
  })
}
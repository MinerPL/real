"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("862337"),
  u = n("899633"),
  d = n("191225"),
  c = n("442939"),
  f = n("699209"),
  h = n("32346"),
  p = n("835040"),
  m = n("373469"),
  E = n("271938"),
  C = n("26989"),
  g = n("42887"),
  S = n("957255"),
  _ = n("824563"),
  I = n("235660"),
  T = n("280168"),
  v = n("800762"),
  x = n("68148"),
  N = n("158998"),
  A = n("201380"),
  M = n("49111"),
  R = n("39141"),
  j = n("707155");
let L = l.memo(e => {
  var t;
  let {
    mute: n,
    deaf: l,
    user: s,
    channel: i,
    sessionId: o,
    nick: S
  } = e, x = s.id, j = (0, r.useStateFromStores)([E.default], () => E.default.getId() === x, [x]), [L, O, y] = (0, r.useStateFromStoresArray)([g.default], () => j ? [!g.default.isSupported() || g.default.isSelfMute() || g.default.isSelfMutedTemporarily(), g.default.isSelfDeaf(), !1] : [!g.default.isSupported() || g.default.isLocalMute(x), !1, g.default.isLocalVideoDisabled(x)], [j, x]), P = (0, r.useStateFromStores)([T.default], () => T.default.isPrioritySpeaker(x)), b = (0, u.default)({
    userId: x,
    checkSoundSharing: !0
  }), D = (0, r.useStateFromStores)([C.default], () => C.default.isGuestOrLurker(i.guild_id, x)), U = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(x)
  }), [x, i.id]), w = (0, c.default)(null != U ? [U.applicationId] : []), [F, k] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.getStreamForUser(x, i.getGuildId()), m.default.getActiveStreamForUser(x, i.getGuildId())], [i, x]), V = (0, r.useStateFromStores)([I.default], () => I.default.getSessionById(o)), B = N.default.useName(s), H = (0, r.useStateFromStores)([v.default], () => v.default.getVoicePlatformForChannel(i.id, x), [i.id, x]), {
    enableHangStatus: G
  } = f.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), W = (0, r.useStateFromStores)([_.default, h.default], () => G ? j ? h.default.getHangStatusActivity() : _.default.findActivity(s.id, e => e.type === M.ActivityTypes.HANG_STATUS) : null);
  return (0, a.jsx)(p.default, {
    shakeLocation: R.ShakeLocation.VOICE_USER,
    isShaking: b,
    children: (0, a.jsx)(A.default, {
      ...e,
      nick: null != S ? S : B,
      canDrag: e.canDrag && !D,
      otherClientSessionType: null == V ? void 0 : null === (t = V.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: H,
      localMute: L && !j,
      localVideoDisabled: y,
      mute: n || L,
      deaf: l || O,
      speaking: b,
      priority: P,
      embeddedApplication: w[0],
      isStreaming: null != F && F.channelId === i.id,
      isWatching: null != k && k.state !== M.ApplicationStreamStates.ENDED,
      isGuest: D,
      showHangStatus: G && (E.default.getId() === s.id || null != W),
      hangStatusActivity: W,
      isSelf: E.default.getId() === s.id
    })
  })
});
L.displayName = "ConnectedVoiceUser";
class O extends l.Component {
  renderVoiceUsers() {
    let {
      channel: e,
      allowDragging: t,
      voiceStates: n,
      collapsed: l,
      collapsedMax: s = 6,
      tabIndex: i,
      location: r,
      numAudience: o
    } = this.props, {
      previewUserId: u,
      previewIsOpen: d
    } = this.state;
    if (null == n || 0 === n.length) return null;
    let c = l && n.length > s + 1 ? n.slice(0, s) : n,
      f = c.map(n => {
        var s;
        let {
          user: o,
          nick: c,
          voiceState: f
        } = n;
        return (0, a.jsx)(L, {
          user: o,
          nick: c,
          isSelfOnOtherClient: E.default.getId() === o.id && f.sessionId !== E.default.getSessionId(),
          mute: f.isVoiceMuted(),
          deaf: f.isVoiceDeafened(),
          video: f.selfVideo,
          serverMute: f.mute,
          serverDeaf: f.deaf,
          sessionId: null !== (s = f.sessionId) && void 0 !== s ? s : "",
          channel: e,
          collapsed: l,
          canDrag: t && S.default.can(M.Permissions.MOVE_MEMBERS, e),
          showPreview: this.handleShowPreview,
          hidePreview: this.handleHidePreview,
          previewIsOpen: d,
          shouldShowPreview: u === o.id,
          tabIndex: i,
          location: r
        }, o.id)
      });
    return null != o && o > 0 ? f.push((0, a.jsx)(A.AudienceVoiceUser, {
      collapsed: l,
      numAudience: o
    })) : l && n.length > s + 1 && f.push((0, a.jsx)(A.MoreVoiceUser, {
      numUsers: n.length - s
    })), f
  }
  render() {
    let e = this.renderVoiceUsers(),
      {
        collapsed: t,
        className: n,
        children: l
      } = this.props;
    return null == e && null == l ? null : (0, a.jsxs)(x.VoiceUserList, {
      className: i(n, j.list, {
        [j.collapsed]: t
      }),
      collapsed: t,
      children: [e, l]
    })
  }
  constructor(...e) {
    super(...e), this.showPreview = new o.DelayedCall(50, () => {
      this.setState({
        previewUserId: this.previewUserIdAfterDelay
      }), this.previewUserIdAfterDelay = null
    }), this.hidePreview = new o.DelayedCall(175, () => {
      this.setState({
        previewUserId: null
      })
    }), this.previewUserIdAfterDelay = null, this.state = {
      previewUserId: null,
      previewIsOpen: !1
    }, this.handleShowPreview = e => {
      this.props.allowPreviews && (this.setState({
        previewIsOpen: !0
      }), this.hidePreview.cancel(), this.previewUserIdAfterDelay = e, this.showPreview.delay())
    }, this.handleHidePreview = e => {
      if (!this.props.allowPreviews) return;
      let {
        previewUserId: t
      } = this.state;
      this.showPreview.cancel(), t === e && (this.setState({
        previewIsOpen: !1
      }), this.hidePreview.delay())
    }
  }
}
O.defaultProps = {
  allowPreviews: !0,
  allowDragging: !0
};
var y = O
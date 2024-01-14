"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("77078"),
  u = n("255397"),
  d = n("103723"),
  c = n("191145"),
  f = n("161306"),
  h = n("292687"),
  p = n("106435"),
  m = n("271938"),
  E = n("26989"),
  C = n("42887"),
  g = n("471671"),
  S = n("754775"),
  _ = n("512264"),
  I = n("387111"),
  T = n("830251"),
  v = n("49111"),
  x = n("353927"),
  N = n("782340"),
  A = n("146789");
let M = o.AvatarSizes.SIZE_80,
  R = o.AvatarSizes.SIZE_40;

function j(e) {
  let {
    participant: t,
    channel: n,
    inCall: s,
    width: o,
    paused: j,
    selected: L,
    fit: O,
    onVideoResize: y,
    blocked: P,
    noVideoRender: b = !1,
    pulseSpeakingIndicator: D = !1
  } = e, U = C.default.getVideoComponent(), w = (0, r.useStateFromStores)([m.default], () => m.default.getId()), {
    user: F,
    streamId: k,
    speaking: V
  } = t, B = F.id === w, H = (0, T.default)(t), G = (0, r.useStateFromStores)([g.default], () => g.default.isFocused()), W = (0, r.useStateFromStores)([h.default], () => h.default.getWindowFocused(v.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), Y = (0, r.useStateFromStores)([C.default], () => null != F.id && C.default.isLocalVideoDisabled(F.id, (0, f.default)(t.type)), [F.id, t.type]), z = (0, r.useStateFromStores)([E.default], () => E.default.isGuestOrLurker(n.guild_id, F.id)), K = I.default.getName(n.getGuildId(), n.id, F) + (z ? " ".concat(N.default.Messages.GUEST_NAME_SUFFIX) : ""), Z = V && (W || G), X = o < 124 ? R : M, {
    avatarSrc: J,
    avatarDecorationSrc: q
  } = (0, p.default)({
    user: F,
    guildId: n.guild_id,
    size: X,
    animateOnHover: !Z
  }), Q = (0, r.useStateFromStores)([c.default], () => c.default.getSelectedParticipant(n.id));
  return (l.useEffect(() => {
    n.isGuildStageVoice() && !H && (null == Q ? void 0 : Q.id) === F.id && u.default.selectParticipant(n.id, null)
  }, [H]), s && !Y && !b && H && !L && null != U && C.default.supports(x.Features.VIDEO)) ? (0, a.jsx)(_.default, {
    onResize: y,
    wrapperClassName: A.videoWrapper,
    className: A.content,
    mirror: B,
    streamId: k,
    videoComponent: U,
    fit: O,
    paused: j,
    videoSpinnerContext: F.id === w ? d.VideoSpinnerContext.SELF_VIDEO : d.VideoSpinnerContext.REMOTE_VIDEO,
    userId: F.id
  }, k) : (0, a.jsx)("div", {
    className: i(A.content, {
      [A.blockedAvatar]: P
    }),
    children: (0, a.jsx)(S.default, {
      "aria-label": K,
      src: J,
      avatarDecoration: q,
      backgroundSrc: F.getAvatarURL(n.guild_id, 80),
      size: X,
      pulseSpeakingIndicator: D,
      speaking: V,
      userId: F.id
    })
  })
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var s, a, l = n("37983"),
  i = n("884691"),
  r = n("907002"),
  u = n("446674"),
  o = n("77078"),
  d = n("970728"),
  c = n("724853"),
  f = n("731898"),
  E = n("984997"),
  I = n("970366"),
  _ = n("271938"),
  p = n("337543"),
  h = n("124969"),
  N = n("599110"),
  m = n("315102"),
  T = n("449008"),
  g = n("9294"),
  A = n("800118"),
  S = n("243961"),
  C = n("570683"),
  v = n("49111"),
  x = n("782340"),
  R = n("43730");

function L() {
  return (0, l.jsx)("div", {
    className: R.centerFlex,
    children: (0, l.jsx)(o.Spinner, {})
  })
}(a = s || (s = {}))[a.LOADING = 0] = "LOADING", a[a.DETAILS = 1] = "DETAILS", a[a.ERROR = 2] = "ERROR";
let O = e => {
  let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
  if (null == e || null == e.state || t) return 0;
  let n = e.state;
  switch (n) {
    case v.InviteStates.RESOLVED:
    case v.InviteStates.ACCEPTED:
    case v.InviteStates.APP_NOT_OPENED:
    case v.InviteStates.APP_OPENED:
    case v.InviteStates.ACCEPTING:
    case v.InviteStates.APP_OPENING:
      return 1;
    case v.InviteStates.EXPIRED:
    case v.InviteStates.BANNED:
    case v.InviteStates.ERROR:
      return 2;
    case v.InviteStates.RESOLVING:
      return 0;
    default:
      (0, T.assertNever)(n)
  }
};

function M(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e;
  if ((null == t ? void 0 : t.state) === v.InviteStates.BANNED) return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
    text: x.default.Messages.AUTH_BANNED_INVITE_BODY,
    buttonCta: x.default.Messages.INVITE_INVALID_CTA,
    onClick: n
  });
  return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
    text: x.default.Messages.INVITE_INVALID_ERROR,
    buttonCta: x.default.Messages.INVITE_INVALID_CTA,
    onClick: n
  })
}

function D(e) {
  let {
    children: t,
    cardChildren: n,
    startAnimHeightPx: s,
    innerStyle: a,
    ...u
  } = e, {
    invite: o
  } = u, [d, c] = i.useState(O(o)), {
    ref: E,
    height: I
  } = (0, f.default)(), _ = (0, r.useSpring)({
    height: null != I && 0 !== I ? "".concat(I, "px") : "".concat(s, "px"),
    config: r.config.stiff
  });
  return i.useEffect(() => {
    let e = O(o);
    e !== d && c(e)
  }, [o, d]), (0, l.jsxs)(r.animated.div, {
    className: R.inviteCard,
    style: _,
    children: [(0, l.jsx)(r.animated.div, {
      className: R.inviteChildContainer,
      style: _,
      children: (0, l.jsx)("section", {
        ref: E,
        className: null == a ? void 0 : a(d),
        children: t(d)
      })
    }), n]
  })
}

function P(e) {
  let {
    invite: t
  } = e;
  if (null == t || !(0, A.isEnhancedCommunityInvite)(t)) return null;
  let n = e => {
    if (null == t) return null;
    if (1 === e) return (0, l.jsx)(C.GuildInfoCard, {
      invite: t
    });
    return null
  };
  return (0, l.jsx)(D, {
    startAnimHeightPx: 0,
    innerStyle: () => R.guildInfoInner,
    cardChildren: (0, l.jsx)(E.default, {
      invite: t,
      className: R.expirationNotice
    }),
    ...e,
    children: e => n(e)
  })
}

function j(e) {
  let {
    invite: t
  } = e, n = null != t && (0, A.isEnhancedCommunityInvite)(t), s = n => {
    if (null == t) return (0, l.jsx)(L, {});
    switch (n) {
      case 1:
        return (0, l.jsx)(S.default, {
          ...e,
          invite: t
        });
      case 2:
        return (0, l.jsx)(M, {
          ...e,
          invite: t
        });
      default:
        return (0, l.jsx)(L, {})
    }
  }, a = {
    1: R.inviteCardInner,
    2: R.inviteCardInnerError,
    0: R.inviteCardInnerLoading
  };
  return (0, l.jsx)(D, {
    startAnimHeightPx: 200,
    innerStyle: e => a[e],
    cardChildren: n ? null : (0, l.jsx)(E.default, {
      invite: t,
      className: R.expirationNotice
    }),
    ...e,
    children: e => s(e)
  })
}

function U(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e, {
    guild: s
  } = null != t ? t : {}, a = {};
  if ((null == s ? void 0 : s.splash) != null) {
    let e = m.default.getGuildSplashURL({
      id: s.id,
      splash: s.splash
    });
    null != e && (a.backgroundImage = "url(".concat(e, ")"), a.backgroundSize = "cover")
  }
  return (0, l.jsxs)(h.default, {
    theme: v.ThemeTypes.DARK,
    className: R.splashBackground,
    style: a,
    contentClassName: R.centerAuthBoxContent,
    children: [(0, l.jsx)(j, {
      ...e,
      onAcceptInvite: n
    }), (0, l.jsx)(P, {
      ...e
    })]
  })
}

function G(e) {
  let {
    inviteKey: t,
    transitionTo: n
  } = e, s = (0, u.useStateFromStores)([p.default], () => p.default.getInvite(t));
  return i.useEffect(() => {
    (0, I.trackAppUIViewed)("invite_mobile")
  }, []), i.useEffect(() => {
    null != s && s.state === v.InviteStates.RESOLVED && N.default.track(v.AnalyticEvents.INVITE_VIEWED, {
      invite_code: t,
      friends_count: null == s ? void 0 : s.friends_count
    }, {
      flush: !0
    })
  }, [s, t]), (0, l.jsx)(U, {
    invite: s,
    onAcceptInvite: e => {
      ! function(e, t, n) {
        var s, a, l;
        null == e || e.preventDefault(), N.default.track(v.AnalyticEvents.INVITE_APP_OPENED, {
          invite_code: (0, g.parseInviteCodeFromInviteKey)(t),
          guild_id: null == n ? void 0 : null === (s = n.guild) || void 0 === s ? void 0 : s.id,
          channel_id: null == n ? void 0 : null === (a = n.channel) || void 0 === a ? void 0 : a.id,
          inviter_id: null == n ? void 0 : null === (l = n.inviter) || void 0 === l ? void 0 : l.id
        });
        let i = null != n && n.state !== v.InviteStates.EXPIRED && n.state !== v.InviteStates.BANNED ? t : void 0,
          r = _.default.getFingerprint(),
          u = null != r ? r : _.default.getId(),
          o = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
        d.default.openApp(i, void 0, u, void 0, o)
      }(e, t, s)
    },
    transitionTo: n
  })
}
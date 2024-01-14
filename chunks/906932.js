"use strict";
n.r(t), n.d(t, {
  useAvatarsWithGuilds: function() {
    return r
  },
  setNewPendingUserBio: function() {
    return d
  },
  setNewPendingAvatar: function() {
    return s
  },
  setNewPendingAvatarDecoration: function() {
    return c
  },
  setNewPendingProfileEffectId: function() {
    return f
  },
  getProfilePreviewField: function() {
    return E
  },
  showRemoveAvatar: function() {
    return _
  },
  showRemoveBanner: function() {
    return S
  }
}), n("424973");
var i = n("884691"),
  l = n("152584"),
  u = n("234251"),
  o = n("783142"),
  a = n("26989");

function r(e) {
  return i.useMemo(() => {
    let t = a.default.getMutableAllGuildsAndMembers(),
      n = {};
    for (let l in t) {
      var i;
      let u = t[l],
        o = null === (i = u[e]) || void 0 === i ? void 0 : i.avatar;
      null != o && (null == n[o] && (n[o] = []), n[o].push(l))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function d(e, t) {
  (0, o.setPendingBio)(e === t ? void 0 : e)
}

function s(e, t) {
  (0, l.setPendingAvatar)(e === t ? void 0 : e)
}

function c(e, t) {
  if ((0, u.isEqualAvatarDecoration)(e, null != t ? t : null)) {
    (0, l.setPendingAvatarDecoration)(void 0);
    return
  }(0, l.setPendingAvatarDecoration)(e)
}

function f(e, t) {
  if (e === t) {
    (0, l.setPendingProfileEffectId)(void 0);
    return
  }(0, l.setPendingProfileEffectId)(e)
}

function E(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e) return "" === e ? {
    value: i ? n : null,
    isUsingGuildValue: !1
  } : {
    value: e,
    isUsingGuildValue: i
  };
  return null != t && "" !== t ? {
    value: t,
    isUsingGuildValue: !0
  } : {
    value: n,
    isUsingGuildValue: !1
  }
}

function _(e, t) {
  return void 0 === e ? null != t : null != e
}

function S(e, t) {
  return void 0 === e ? null != t : null != e
}
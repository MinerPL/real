"use strict";
n.r(t), n.d(t, {
  useAvatarsWithGuilds: function() {
    return a
  },
  setNewPendingUserBio: function() {
    return u
  },
  setNewPendingAvatar: function() {
    return c
  },
  setNewPendingAvatarDecoration: function() {
    return d
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
    return p
  }
}), n("424973");
var r = n("884691"),
  i = n("152584"),
  l = n("234251"),
  o = n("783142"),
  s = n("26989");

function a(e) {
  return r.useMemo(() => {
    let t = s.default.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var r;
      let l = t[i],
        o = null === (r = l[e]) || void 0 === r ? void 0 : r.avatar;
      null != o && (null == n[o] && (n[o] = []), n[o].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function u(e, t) {
  (0, o.setPendingBio)(e === t ? void 0 : e)
}

function c(e, t) {
  (0, i.setPendingAvatar)(e === t ? void 0 : e)
}

function d(e, t) {
  if ((0, l.isEqualAvatarDecoration)(e, null != t ? t : null)) {
    (0, i.setPendingAvatarDecoration)(void 0);
    return
  }(0, i.setPendingAvatarDecoration)(e)
}

function f(e, t) {
  if (e === t) {
    (0, i.setPendingProfileEffectId)(void 0);
    return
  }(0, i.setPendingProfileEffectId)(e)
}

function E(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e) return "" === e ? {
    value: r ? n : null,
    isUsingGuildValue: !1
  } : {
    value: e,
    isUsingGuildValue: r
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

function p(e, t) {
  return void 0 === e ? null != t : null != e
}
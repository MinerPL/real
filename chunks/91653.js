"use strict";
r.r(e), r.d(e, {
  default: function() {
    return c
  }
});
var n = r("884691"),
  i = r("65597"),
  o = r("170313"),
  u = r("906932"),
  l = r("790618"),
  a = r("697218"),
  T = r("783142"),
  c = t => {
    let {
      isTryItOut: e,
      analyticsLocations: r
    } = t, c = (0, i.default)([a.default], () => a.default.getCurrentUser()), E = (0, o.default)(r), {
      pendingAvatar: s,
      pendingAvatarDecoration: _
    } = (0, i.useStateFromStoresObject)([l.default], () => ({
      pendingAvatar: e ? l.default.getTryItOutAvatar() : l.default.getPendingAvatar(),
      pendingAvatarDecoration: e ? l.default.getTryItOutAvatarDecoration() : l.default.getPendingAvatarDecoration()
    })), S = (0, n.useCallback)(t => (0, u.setNewPendingAvatar)(t, null == c ? void 0 : c.avatar), [null == c ? void 0 : c.avatar]), d = (0, n.useCallback)(t => {
      (0, u.setNewPendingAvatarDecoration)(t, null == c ? void 0 : c.avatarDecoration), null != t && E(t)
    }, [null == c ? void 0 : c.avatarDecoration, E]);
    return {
      pendingAvatar: s,
      pendingAvatarDecoration: _,
      setPendingAvatar: e ? T.setTryItOutAvatar : S,
      setPendingAvatarDecoration: e ? T.setTryItOutAvatarDecoration : d
    }
  }
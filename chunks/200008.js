"use strict";
n.r(t), n.d(t, {
  addFavoriteChannel: function() {
    return f
  },
  removeFavoriteChannel: function() {
    return C
  },
  setFavoriteChannelNickname: function() {
    return v
  },
  addFavoriteCategory: function() {
    return h
  },
  removeFavoriteCategory: function() {
    return p
  },
  updateFavoriteChannels: function() {
    return E
  },
  updateFavoriteChannelParent: function() {
    return A
  },
  toggleFavoriteServerMuted: function() {
    return g
  }
}), n("222007");
var r = n("249654"),
  a = n("151426"),
  i = n("872173"),
  o = n("42203"),
  u = n("957255"),
  s = n("379881"),
  l = n("843455");

function c() {
  let e = s.default.getFavoriteChannels(),
    t = 1;
  for (let n in e) t = Math.max(t, e[n].order);
  return t + 1
}

function d(e) {
  for (let t in e) {
    let n = e[t];
    if (null == n) {
      delete e[t];
      continue
    }
    if (n.type === a.FavoriteChannelType.CATEGORY) continue;
    let r = o.default.getChannel(t);
    if (null == r || !r.isPrivate() && !u.default.can(l.Permissions.VIEW_CHANNEL, r)) {
      delete e[t];
      continue
    }
  }
}

function f(e, t) {
  let n = s.default.isFavorite(e);
  !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e] = a.FavoriteChannel.create({
      nickname: "",
      type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
      position: c(),
      parentId: null != t ? t : "0"
    }), d(n.favoriteChannels)
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function C(e) {
  let t = s.default.getFavorite(e);
  null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
      for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
    d(n.favoriteChannels)
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function v(e, t) {
  let n = s.default.isFavorite(e);
  n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].nickname = null != t ? t : ""
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function h(e) {
  let t = r.default.fromTimestamp(Date.now());
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[t] = a.FavoriteChannel.create({
      nickname: e,
      type: a.FavoriteChannelType.CATEGORY,
      position: c(),
      parentId: "0"
    })
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function p(e) {
  C(e)
}

function E(e) {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
    for (let r of e)
      if (null != r.position && (t.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id) {
        var n;
        t.favoriteChannels[r.id].parentId = null !== (n = r.parent_id) && void 0 !== n ? n : "0"
      }
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function A(e, t) {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
    n.favoriteChannels[e].parentId = null != t ? t : "0"
  }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
}

function g() {
  i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
    e.muted = !e.muted
  }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
}
"use strict";
n.r(t), n.d(t, {
  openUserProfileModal: function() {
    return o
  },
  closeUserProfileModal: function() {
    return u
  }
});
var l = n("913144"),
  i = n("327037"),
  r = n("697218"),
  s = n("506885"),
  a = n("49111");

function o(e) {
  let {
    userId: t,
    section: n,
    guildId: o = a.ME,
    channelId: u,
    friendToken: c,
    autoFocusNote: d,
    analyticsLocation: f
  } = e, h = r.default.getUser(t), E = o !== a.ME ? o : void 0;
  if (null == h) return (0, i.fetchProfile)(t, {
    friendToken: c,
    guildId: E
  }).then(() => {
    l.default.dispatch({
      type: "USER_PROFILE_MODAL_OPEN",
      userId: t,
      section: n,
      guildId: o,
      channelId: u,
      friendToken: c,
      autoFocusNote: d,
      analyticsLocation: f
    })
  });
  (0, s.default)(t, h.getAvatarURL(void 0, 80), {
    withMutualGuilds: !0,
    friendToken: c,
    guildId: E
  }), l.default.dispatch({
    type: "USER_PROFILE_MODAL_OPEN",
    userId: t,
    section: n,
    guildId: o,
    channelId: u,
    friendToken: c,
    autoFocusNote: d,
    analyticsLocation: f
  })
}

function u() {
  l.default.dispatch({
    type: "USER_PROFILE_MODAL_CLOSE"
  })
}
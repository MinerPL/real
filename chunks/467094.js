"use strict";
n.r(t), n.d(t, {
  fetchStickerPack: function() {
    return _
  },
  fetchStickerPacks: function() {
    return T
  },
  fetchSticker: function() {
    return m
  },
  fetchGuildStickers: function() {
    return S
  },
  deleteGuildSticker: function() {
    return A
  },
  createGuildSticker: function() {
    return g
  },
  updateGuildSticker: function() {
    return R
  },
  addStickerPreview: function() {
    return N
  },
  clearStickerPreview: function() {
    return x
  },
  favoriteSticker: function() {
    return L
  },
  unfavoriteSticker: function() {
    return y
  }
}), n("424973");
var s = n("917351"),
  i = n.n(s),
  l = n("872717"),
  r = n("913144"),
  a = n("404118"),
  u = n("619443"),
  o = n("915639"),
  c = n("872173"),
  d = n("766274"),
  f = n("341542"),
  h = n("697218"),
  p = n("271560"),
  I = n("364685"),
  v = n("49111"),
  E = n("397336"),
  C = n("782340");
let _ = async (e, t) => {
  let {
    body: n
  } = await (0, p.httpGetWithCountryCodeQuery)(v.Endpoints.STICKER_PACK(e));
  return r.default.dispatch({
    type: "STICKER_PACK_FETCH_SUCCESS",
    packId: e,
    pack: n,
    ingestStickers: t
  }), n
}, T = async function() {
  let {
    locale: e = o.default.locale
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  if (I.default.isFetchingStickerPacks || I.default.hasLoadedStickerPacks) return;
  r.default.wait(() => {
    r.default.dispatch({
      type: "STICKER_PACKS_FETCH_START"
    })
  });
  let {
    body: {
      sticker_packs: t
    }
  } = await l.default.get({
    url: v.Endpoints.STICKER_PACKS,
    query: {
      locale: e
    }
  });
  r.default.dispatch({
    type: "STICKER_PACKS_FETCH_SUCCESS",
    packs: t
  })
}, m = async e => {
  let {
    body: t
  } = await l.default.get({
    url: v.Endpoints.STICKER(e)
  });
  r.default.dispatch({
    type: "STICKER_FETCH_SUCCESS",
    sticker: t
  })
}, S = async e => {
  let {
    body: t
  } = await l.default.get({
    url: v.Endpoints.GUILD_STICKER_PACKS(e)
  });
  r.default.dispatch({
    type: "GUILD_STICKERS_FETCH_SUCCESS",
    guildId: e,
    stickers: t.map(e => null != e.user ? {
      ...e,
      user: new d.default(e.user)
    } : e)
  })
}, A = async e => {
  await l.default.delete({
    url: v.Endpoints.GUILD_STICKER(e.guild_id, e.id)
  })
}, g = async (e, t) => {
  let n = await l.default.post({
    url: v.Endpoints.GUILD_STICKER_PACKS(e),
    body: t
  });
  return r.default.dispatch({
    type: "GUILD_STICKERS_CREATE_SUCCESS",
    guildId: e,
    sticker: {
      ...n.body,
      user: h.default.getCurrentUser()
    }
  }), n.body
}, R = async (e, t, n) => {
  let s = await l.default.patch({
    url: v.Endpoints.GUILD_STICKER(e, t),
    body: n
  });
  return s.body
};

function N(e, t, n) {
  r.default.dispatch({
    type: "ADD_STICKER_PREVIEW",
    channelId: e,
    sticker: t,
    draftType: n
  })
}

function x(e, t) {
  r.default.dispatch({
    type: "CLEAR_STICKER_PREVIEW",
    channelId: e,
    draftType: t
  })
}

function P(e) {
  return f.default.totalUnavailableGuilds > 0 || !u.default.isConnected() ? e : e.filter(e => null != I.default.getStickerById(e))
}

function L(e) {
  c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => (t.stickerIds = P(t.stickerIds), i.size(t.stickerIds) >= E.MAX_FAVORITES) ? (a.default.show({
    title: C.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
    body: C.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
      count: E.MAX_FAVORITES
    })
  }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), E.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function y(e) {
  c.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", t => {
    t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = P(t.stickerIds)
  }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
}
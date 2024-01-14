"use strict";
n.r(e), n.d(e, {
  getPacksForUser: function() {
    return o
  },
  collectPack: function() {
    return c
  },
  uncollectPack: function() {
    return l
  },
  updateInventorySettings: function() {
    return d
  },
  getPackMetadata: function() {
    return f
  },
  dismissPackAddedNotification: function() {
    return E
  }
});
var r = n("872717"),
  i = n("913144"),
  a = n("569883"),
  u = n("871336"),
  s = n("49111");
async function o() {
  i.default.dispatch({
    type: "INVENTORY_FETCH"
  });
  try {
    let t = await r.default.get({
      url: s.Endpoints.INVENTORY_GET
    });
    i.default.dispatch({
      type: "INVENTORY_FETCH_SUCCESS",
      packs: t.body.map(t => u.default.fromServer(t))
    })
  } catch (e) {
    var t;
    i.default.dispatch({
      type: "INVENTORY_FETCH_ERROR",
      is4XXError: (null == (t = e.body) ? void 0 : t.status) >= 400 && (null == t ? void 0 : t.status) <= 499
    })
  }
}
async function c(t) {
  let {
    authorId: e,
    packId: n,
    expressionName: a
  } = t;
  try {
    let t = await r.default.put({
      url: s.Endpoints.INVENTORY_ADD_PACK,
      body: {
        author_id: e,
        pack_id: n,
        name_override: a
      }
    });
    i.default.dispatch({
      type: "INVENTORY_COLLECT_PACK_SUCCESS",
      pack: u.default.fromServer(t.body)
    })
  } catch (t) {
    return
  }
}
async function l(t) {
  let {
    packId: e
  } = t;
  try {
    await r.default.put({
      url: s.Endpoints.INVENTORY_REMOVE_PACK,
      body: {
        pack_id: e
      }
    }), i.default.dispatch({
      type: "INVENTORY_REMOVE_PACK_SUCCESS",
      packId: e
    })
  } catch (t) {
    return
  }
}
async function d(t) {
  let {
    guildId: e,
    settings: n
  } = t;
  try {
    await r.default.patch({
      url: s.Endpoints.INVENTORY_UPDATE_SETTINGS(e),
      body: {
        is_emoji_pack_collectible: n.isEmojiPackCollectible
      }
    })
  } catch (t) {
    return
  }
}
async function f(t) {
  let {
    packId: e
  } = t;
  try {
    let t = await r.default.get({
      url: s.Endpoints.INVENTORY_PACK_METADATA(e)
    });
    return a.default.createFromServer(t.body)
  } catch (t) {
    return
  }
}

function E() {
  i.default.dispatch({
    type: "INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION"
  })
}
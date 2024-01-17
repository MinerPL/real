"use strict";
E.r(_), E.d(_, {
  getEmojiCaptionsForUser: function() {
    return r
  }
}), E("222007");
var t = E("872717"),
  o = E("913144"),
  n = E("49111");
async function r() {
  o.default.dispatch({
    type: "EMOJI_CAPTIONS_FETCH"
  });
  try {
    let {
      body: e
    } = await t.default.get({
      url: n.Endpoints.EMOJI_CAPTIONS_GET
    }), _ = {};
    for (let E of e.items) _[E.emoji_id] = E.emoji_captions;
    o.default.dispatch({
      type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
      emojiCaptions: _
    })
  } catch (_) {
    var e;
    o.default.dispatch({
      type: "EMOJI_CAPTIONS_FETCH_ERROR",
      is4XXError: (null == (e = _.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
    })
  }
}
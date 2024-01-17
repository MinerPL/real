"use strict";
n.r(t), n.d(t, {
  dismissMediaPostSharePrompt: function() {
    return r
  },
  fetchMediaPostEmbed: function() {
    return o
  },
  unfurlEmbedUrl: function() {
    return u
  }
});
var s = n("872717"),
  l = n("913144"),
  a = n("448993"),
  i = n("49111");

function r(e) {
  l.default.dispatch({
    type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
    threadId: e
  })
}
async function o(e) {
  l.default.dispatch({
    type: "MEDIA_POST_EMBED_FETCH",
    threadId: e
  });
  try {
    let t = await s.default.get({
        url: i.Endpoints.MEDIA_POST_RESHARE_GET_PREVIEW(e)
      }),
      n = t.body;
    l.default.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_SUCCESS",
      threadId: e,
      mediaPostEmbed: n
    })
  } catch (t) {
    l.default.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_FAILURE",
      threadId: e
    })
  }
}
async function u(e) {
  try {
    let t = await s.default.post({
      url: i.Endpoints.UNFURL_EMBED_URLS,
      body: {
        urls: e
      }
    });
    return t.body
  } catch (e) {
    throw new a.APIError(e)
  }
}
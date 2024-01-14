"use strict";
n.r(t), n.d(t, {
  reportFalsePositive: function() {
    return r
  },
  sendMessagesForScanning: function() {
    return a
  },
  sendMultiChannelMessagesForScanning: function() {
    return o
  }
});
var s = n("872717"),
  i = n("49111");

function r(e, t, n, r) {
  return s.default.post({
    url: i.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
    body: {
      channel_id: e,
      message_id: t,
      attachment_ids: n,
      embed_ids: r
    }
  })
}

function a(e, t) {
  return s.default.patch({
    url: i.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
    body: {
      message_ids: t
    }
  })
}

function o(e) {
  let t = e.map(e => ({
    channel_id: e.channel_id,
    message_id: e.id
  }));
  return s.default.patch({
    url: i.Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
    body: {
      messages: t
    }
  })
}
"use strict";
E.r(_), E.d(_, {
  populateChannelEmojis: function() {
    return i
  }
});
var t = E("872717"),
  o = E("605250"),
  n = E("49111");
let r = new o.default("ChannelEmojisActionCreators");
async function i(e) {
  try {
    await t.default.post({
      url: n.Endpoints.POPULATE_CHANNEL_EMOJIS(e)
    })
  } catch (e) {
    r.log("error populating channel emojis", e)
  }
}
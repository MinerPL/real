"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("484026");
let i = new s.default(function(e) {
  {
    let t = n("952110").emojiTermsImporter[e];
    return void 0 !== t ? t().then(e => e.default) : Promise.resolve({})
  }
});
var r = {
  setEmojiLocale: function(e) {
    i.setParams(e)
  },
  getTermsForEmoji: function(e) {
    let t = i.get();
    return void 0 !== t ? t[e] : []
  }
}
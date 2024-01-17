"use strict";
E.r(_), E.d(_, {
  default: function() {
    return T
  }
}), E("511434"), E("313619"), E("654714"), E("287168"), E("956660"), E("222007"), E("424973");
var t = E("689988"),
  o = E("385976"),
  n = E("42203"),
  r = E("315102"),
  i = E("402671"),
  a = E("115279");
let I = new Worker(new URL(E.p + E.u("68638"), E.b));
class s extends t.default {
  handleChannelPreload(e) {
    let {
      channelId: _
    } = e, E = n.default.getChannel(_);
    if (null != E && E.isForumLikeChannel()) {
      let e = function(e) {
        let _ = [],
          E = e.defaultReactionEmoji;
        if ((null == E ? void 0 : E.emojiId) != null) {
          var t, n;
          _.push(r.default.getEmojiURL({
            id: E.emojiId,
            animated: null !== (n = null === (t = o.default.getUsableCustomEmojiById(E.emojiId)) || void 0 === t ? void 0 : t.animated) && void 0 !== n && n,
            size: a.EMOJI_SIZE_MAP.reaction
          }))
        } else(null == E ? void 0 : E.emojiName) != null && _.push(i.default.getURL(E.emojiName));
        return e.availableTags.forEach(e => {
          null != e.emojiId ? _.push(r.default.getEmojiURL({
            id: e.emojiId,
            animated: !1,
            size: a.EMOJI_SIZE_MAP.reaction
          })) : null != e.emojiName && _.push(i.default.getURL(e.emojiName))
        }), _
      }(E);
      e.forEach(e => {
        if (null != e && 0 !== e.length) {
          var _;
          _ = e, new Promise(e => {
            let E = t => {
              let {
                data: {
                  url: o
                }
              } = t;
              null == I || I.removeEventListener("message", E), _ === o && e()
            };
            null == I || I.addEventListener("message", E), null == I || I.postMessage({
              url: _
            })
          })
        }
      })
    }
  }
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_PRELOAD: this.handleChannelPreload
    }
  }
}
var T = new s
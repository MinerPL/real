"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("385976"),
  i = n("867805"),
  r = n("49111");

function a(e) {
  let t = null;
  if (null != e.emojiId && "0" !== e.emojiId) {
    let n = s.default.getUsableCustomEmojiById(e.emojiId);
    t = null != n ? {
      id: n.id,
      name: n.name,
      animated: n.animated
    } : null
  } else if (null != e.emojiName && "" !== e.emojiName) {
    let n = i.default.getByName(i.default.convertSurrogateToName(e.emojiName, !1));
    t = null != n ? {
      id: null,
      name: n.surrogates,
      animated: !1
    } : null
  }
  let n = Number(e.expiresAtMs);
  return {
    name: "Custom Status",
    type: r.ActivityTypes.CUSTOM_STATUS,
    state: e.text.length > 0 ? e.text : void 0,
    timestamps: n > 0 ? {
      end: n
    } : void 0,
    emoji: t
  }
}
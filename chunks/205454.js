"use strict";
n.r(t), n.d(t, {
  CTAEmojiSize: function() {
    return o
  },
  default: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var a = n("430568"),
  l = n("569912"),
  s = n("286667");
let o = {
  SMALL: s.small,
  MEDIUM: s.medium,
  LARGE: s.large
};

function r(e) {
  let {
    emojiId: t,
    emojiName: n,
    defaultComponent: s,
    size: r = o.MEDIUM
  } = e, {
    customEmoji: d,
    unicodeEmoji: u
  } = (0, l.default)(t, n);
  return null == d && null == u ? (0, i.jsx)(i.Fragment, {
    children: s
  }) : (0, i.jsx)(a.default, {
    emojiName: null != d ? null == d ? void 0 : d.name : n,
    animated: null != d && d.animated,
    emojiId: null == d ? void 0 : d.id,
    autoplay: !0,
    className: r
  })
}
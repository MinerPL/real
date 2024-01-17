"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("884691"),
  i = n("69927"),
  r = n("773336"),
  a = n("782340");

function s() {
  return l.useEffect(() => {
    !r.isPlatformEmbedded && (0, i.flashPageTitle)({
      messages: [a.default.Messages.GO_LIVE_HEY, a.default.Messages.GO_LIVE_LOOK, a.default.Messages.GO_LIVE_LISTEN],
      interval: 600,
      count: 20,
      onlyWhenBlurred: !0
    })
  }, []), null
}
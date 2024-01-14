"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("446674"),
  i = n("385976"),
  r = function(e, t) {
    return (0, l.useStateFromStores)([i.default], () => {
      var n;
      if (null == t) return null;
      let l = i.default.getDisambiguatedEmojiContext(e);
      return null !== (n = l.getById(t)) && void 0 !== n ? n : l.getByName(t)
    }, [e, t])
  }
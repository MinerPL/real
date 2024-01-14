"use strict";
n.r(t), n.d(t, {
  useSelectedTeenUser: function() {
    return r
  },
  useTeenUserForId: function() {
    return o
  }
});
var a = n("65597"),
  s = n("697218"),
  i = n("822825"),
  l = n("775032");
let r = () => {
    let e = (0, l.default)();
    return (0, a.default)([i.default, s.default], () => {
      if (!e) return s.default.getCurrentUser();
      let t = i.default.getSelectedTeenId();
      if (null !== t) return s.default.getUser(t)
    })
  },
  o = e => (0, a.default)([s.default], () => {
    let t = s.default.getUser(e);
    if (null != t) return t
  })
"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("222007");
var n = l("627445"),
  a = l.n(n),
  s = l("884351"),
  i = l("19766"),
  r = l("957255"),
  o = l("49111");
let u = new RegExp(/@(:?everyone|here)/);

function d(e, t) {
  let l = 0;
  if (t.isThread()) {
    var n;
    return null !== (n = t.memberCount) && void 0 !== n ? n : 0
  }
  let a = i.default.getProps(t.getGuildId(), t.id);
  return a.groups.forEach(t => {
    ("@everyone" === e || t.id !== o.StatusTypes.OFFLINE) && (l += t.count)
  }), l
}
var c = {
  shouldShowEveryoneGuard: function(e, t) {
    let l = t.getGuildId();
    a(l, "isGuildChannel with null guildId");
    let n = d(e, t);
    return n > 30 && r.default.can(o.Permissions.MENTION_EVERYONE, t)
  },
  everyoneMemberCount: d,
  extractEveryoneRole: function(e, t) {
    let l = s.default.parsePreprocessor(t, e);
    for (let e of l) {
      let t = function e(t) {
        if ("string" == typeof t.content) {
          var l;
          if ("inlineCode" === t.type || "codeBlock" === t.type) return null;
          let e = null === (l = t.content) || void 0 === l ? void 0 : l.match(u);
          if (null != e) {
            let [t] = e;
            return t
          }
        } else if (Array.isArray(t.content))
          for (let l of t.content) {
            let t = e(l);
            if (null != t) return t
          }
        return null
      }(e);
      if (null != t) return t
    }
    return null
  }
}
"use strict";
i.r(t), i.d(t, {
  default: function() {
    return n
  }
}), i("222007"), i("424973");
var l = i("884691"),
  a = i("91761");

function n(e) {
  let {
    guildId: t,
    disableFilter: i = !1
  } = e, n = (0, a.default)({
    guildId: t,
    disableFilter: i
  });
  return l.useMemo(() => {
    let e = [];
    n.forEach(t => {
      let [, i] = t;
      e.push(...i)
    });
    let t = new Set;
    return e.filter(e => !t.has(e.application.id) && (t.add(e.application.id), !0))
  }, [n])
}
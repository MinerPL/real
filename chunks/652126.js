"use strict";
n.r(t), n.d(t, {
  useShouldShowHelplineLink: function() {
    return c
  }
}), n("222007");
var a = n("884691"),
  s = n("65597"),
  i = n("16108"),
  l = n("915639"),
  r = n("822825"),
  o = n("775032");
let u = new Set(["US"]),
  d = new Set(["en-US", "es-ES"]),
  c = () => {
    let e = (0, o.default)(),
      t = (0, s.default)([r.default], () => r.default.getUserCountry()),
      n = (0, s.default)([l.default], () => l.default.locale);
    return a.useEffect(() => {
      null == t && (0, i.fetchUserCountryCode)()
    }, [t]), !e && null != t && u.has(t.alpha2) && d.has(n)
  }
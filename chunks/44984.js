"use strict";
n.r(t), n.d(t, {
  useUsernameLiveCheck: function() {
    return d
  }
});
var i = n("884691"),
  a = n("917351"),
  s = n("65597"),
  r = n("255403"),
  o = n("947962"),
  u = n("2581"),
  l = n("415133");
let d = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    g = (0, s.default)([u.default], () => u.default.validate(e), [e]),
    c = (0, s.default)([u.default], () => u.default.isRateLimited()),
    m = (0, o.usePomeloDebounceDelay)(),
    E = i.useMemo(() => (0, a.debounce)(e => r.default.attemptPomelo(e, n ? "registration" : "modal", n, d), m), [m, n, d]);
  return i.useEffect(() => {
    t && !c && null == g && "" !== e && E(e)
  }, [t, c, g, e, E]), i.useMemo(() => null != g ? (0, l.formatUsernameLiveCheckValidation)(g) : void 0, [g])
}
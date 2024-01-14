"use strict";
n.r(t), n.d(t, {
  useUsernameStatus: function() {
    return o
  }
}), n("222007");
var a = n("884691"),
  s = n("44984");
let o = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
    i = (0, s.useUsernameLiveCheck)(e, t, n),
    [l, r] = a.useState(void 0);
  return a.useEffect(() => {
    "" === e || e === o ? r(void 0) : null != i && r(i)
  }, [i, e, o]), l
}
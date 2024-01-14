"use strict";
n.r(t), n.d(t, {
  useCanSeeSafetyEducationBlockMuteCoachmark: function() {
    return u
  },
  useSafetyEducationAATriggerPoint: function() {
    return d
  }
});
var a = n("65597"),
  s = n("607742"),
  i = n("415929"),
  l = n("697218"),
  r = n("158998"),
  o = n("332164");
let u = () => {
    let e = (0, i.useIsSafetyConsumerEducationBlockMuteEnabled)(),
      t = (0, a.default)([l.default], () => l.default.getCurrentUser()),
      n = (0, o.useUserIsInLargeGuilds)();
    return e && !(0, r.isNewUser)(t) && n
  },
  d = () => (0, s.useIsSafetyConsumerEducationAAEnabled)()
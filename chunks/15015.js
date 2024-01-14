"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
}), l("424973");
var n = l("884691"),
  a = l("65597"),
  s = l("863636");

function i(e) {
  let t = (0, a.useStateFromStoresArray)([s.default], () => s.default.getEnabledOnboardingPrompts(e));
  return n.useMemo(() => {
    let e = 0,
      l = [],
      n = [],
      a = [],
      s = [];
    for (var i = 0; i < t.length; i++) {
      let d = t[i];
      d.isNew ? l.push(d) : d.hasNewAnswers ? (n.push(d), e += d.options.filter(e => e.isUnseen).length) : d.inOnboarding ? s.push(d) : a.push(d)
    }
    return {
      onboardingPromptsRaw: t,
      newOnboardingPrompts: l,
      onboardingPromptsWithNewAnswers: n,
      newAnswersCount: e,
      onboardingPrompts: a.concat(s)
    }
  }, [t])
}
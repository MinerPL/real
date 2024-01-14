"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("658636"),
  i = n("469147"),
  r = n("181221"),
  o = n("393421"),
  c = n("930794"),
  d = n("238055"),
  u = e => {
    let {
      onClose: t,
      invite: n,
      forceGuildScrollHeight: u = !0,
      isNUXFlow: _
    } = e, [N, E] = s.useState([d.HubEmailConnectionSteps.VERIFY_EMAIL]), [m, f] = s.useState(""), [I, C] = s.useState(""), [T, S] = s.useState(void 0), [h, g] = s.useState([]), p = e => {
      let t = N.concat(e);
      E(t.slice(-4))
    }, x = N[N.length - 1];
    switch (x) {
      case d.HubEmailConnectionSteps.VERIFY_EMAIL:
        return (0, a.jsx)(l.default, {
          setGuildsInfo: g,
          setStep: p,
          email: m,
          setEmail: f,
          setGuildId: S,
          invite: n,
          onClose: t,
          isNUXFlow: _
        });
      case d.HubEmailConnectionSteps.SELECT_SCHOOL:
        return (0, a.jsx)(i.default, {
          guildsInfo: h,
          setStep: p,
          email: m,
          setGuildId: S,
          forceGuildScrollHeight: u
        });
      case d.HubEmailConnectionSteps.SUBMIT_SCHOOL:
        return (0, a.jsx)(r.default, {
          onBack: () => {
            if (N.length > 1) {
              let e = N.slice(0, -1);
              E(e.slice(-4))
            }
          },
          setStep: p,
          email: m,
          school: I,
          setSchool: C
        });
      case d.HubEmailConnectionSteps.VERIFY_PIN:
        return (0, a.jsx)(o.default, {
          email: m,
          onClose: t,
          guildId: T
        });
      case d.HubEmailConnectionSteps.EMAIL_WAITLIST:
        return (0, a.jsx)(c.default, {
          setStep: p,
          school: I
        });
      default:
        return null
    }
  }
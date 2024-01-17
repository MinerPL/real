"use strict";
s.r(t), s.d(t, {
  useShouldScrollToWhatsNew: function() {
    return E
  },
  useClearNewBadge: function() {
    return I
  },
  default: function() {
    return T
  }
}), s("222007");
var a = s("884691"),
  n = s("65597"),
  l = s("151426"),
  i = s("619935"),
  r = s("10641"),
  u = s("235145"),
  o = s("374363"),
  d = s("184684"),
  c = s("397336");
let _ = [
    [l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, d.WhatsNewAvatarDecoRollout, l.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP],
    [l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, d.WhatsNewProfileFXRollout, l.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  E = () => _.some(e => {
    let [t, s, a] = e, {
      flipped: n
    } = s.getCurrentConfig({
      location: "useShouldShowNewBadge"
    });
    return !!n && !(0, r.isDismissibleContentDismissed)(t)
  }),
  I = () => {
    let e = (0, i.useBlockedPaymentsConfig)(),
      t = _.map(e => {
        let [t, s] = e, {
          flipped: a
        } = s.getCurrentConfig({
          location: "useClearNewBadge"
        });
        return a ? t : null
      }).filter(e => null != e),
      [s] = (0, u.useGetDismissibleContent)(e ? [] : t),
      a = null != s && t.includes(s) && !e;
    a && (0, r.markDismissibleContentAsDismissed)(s)
  };
var T = () => {
  let e = (0, i.useBlockedPaymentsConfig)(),
    t = (0, n.default)([o.default], () => o.default.hasLoaded(c.UserSettingsTypes.PRELOADED_USER_SETTINGS)),
    s = _.map(e => {
      let [t, s, a] = e, {
        flipped: n
      } = s.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), l = null != a && (0, r.isDismissibleContentDismissed)(a);
      return n && !l ? t : null
    }).filter(e => null != e);
  a.useEffect(() => {
    t && _.forEach(e => {
      let [t, s, a] = e;
      if (null == a) return;
      let n = (0, r.isDismissibleContentDismissed)(a);
      n && (0, r.markDismissibleContentAsDismissed)(t)
    })
  }, [s, t]);
  let [l] = (0, u.useGetDismissibleContent)(e ? [] : s), d = null != l && s.includes(l);
  return d && !e
}
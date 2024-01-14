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
  r = s("151426"),
  l = s("619935"),
  i = s("10641"),
  u = s("235145"),
  o = s("374363"),
  d = s("184684"),
  c = s("397336");
let _ = [
    [r.DismissibleContent.WHATS_NEW_AVATAR_DECOS_NOTIF_BADGE, d.WhatsNewAvatarDecoRollout, r.DismissibleContent.WHATS_NEW_AVATAR_DECOS_FLIP],
    [r.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_NOTIF_BADGE, d.WhatsNewProfileFXRollout, r.DismissibleContent.WHATS_NEW_PROFILE_EFFECTS_FLIP]
  ],
  E = () => _.some(e => {
    let [t, s, a] = e, {
      flipped: n
    } = s.getCurrentConfig({
      location: "useShouldShowNewBadge"
    });
    return !!n && !(0, i.isDismissibleContentDismissed)(t)
  }),
  I = () => {
    let e = (0, l.useBlockedPaymentsConfig)(),
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
    a && (0, i.markDismissibleContentAsDismissed)(s)
  };
var T = () => {
  let e = (0, l.useBlockedPaymentsConfig)(),
    t = (0, n.default)([o.default], () => o.default.hasLoaded(c.UserSettingsTypes.PRELOADED_USER_SETTINGS)),
    s = _.map(e => {
      let [t, s, a] = e, {
        flipped: n
      } = s.getCurrentConfig({
        location: "useShouldShowNewBadge"
      }), r = null != a && (0, i.isDismissibleContentDismissed)(a);
      return n && !r ? t : null
    }).filter(e => null != e);
  a.useEffect(() => {
    t && _.forEach(e => {
      let [t, s, a] = e;
      if (null == a) return;
      let n = (0, i.isDismissibleContentDismissed)(a);
      n && (0, i.markDismissibleContentAsDismissed)(t)
    })
  }, [s, t]);
  let [r] = (0, u.useGetDismissibleContent)(e ? [] : s), d = null != r && s.includes(r);
  return d && !e
}
"use strict";
l.r(t), l.d(t, {
  useGetDismissibleContent: function() {
    return m
  }
});
var n = l("884691"),
  a = l("446674"),
  s = l("374363"),
  i = l("162771"),
  r = l("674268"),
  o = l("989691"),
  u = l("862853"),
  d = l("10641"),
  c = l("846614"),
  f = l("397336");

function m(e, t, l) {
  let m = (0, a.useStateFromStores)([s.default], () => {
      var e;
      return null === (e = s.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    }),
    p = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId()),
    E = (0, c.useNewUserDismissibleContent)(e),
    T = null;
  s.default.hasLoaded(f.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? T = E.find(e => null == m || !(0, r.hasBit)(m, e)) : null != m && (T = E.find(e => !(0, r.hasBit)(m, e)));
  let _ = (0, u.default)(e => null != T && e.currentlyShown.has(T)),
    S = (0, a.useStateFromStores)([o.default], () => null != T && o.default.hasUserHitDCCap(T));
  n.useEffect(() => {
    if (null != T) return (0, d.requestMarkDismissibleContentAsShown)(T, {
      groupName: t,
      guildId: p
    }, l), () => {
      if (null == T) return;
      let e = !o.default.hasUserHitDCCap();
      (0, u.removeCandidateContent)({
        content: T,
        groupName: t
      }, e)
    }
  }, [T, t, p, S, l]);
  let h = n.useCallback(e => {
    null != T && (0, d.markDismissibleContentAsDismissed)(T, {
      dismissAction: e,
      groupName: t,
      guildId: p
    })
  }, [T, t, p]);
  return [_ && null != T ? T : null, h]
}
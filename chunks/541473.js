"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
}), i("70102");
var n = i("203288"),
  l = i("242740"),
  a = i("848848"),
  u = i("42203"),
  r = i("957255"),
  d = i("18494"),
  o = i("800762");
class s extends Error {}
async function c(e) {
  let {
    channelId: t,
    timeoutMs: i = 1e4,
    bypassChangeModal: c = !1
  } = e, f = u.default.getChannel(t);
  if (null == f) return !1;
  let _ = await l.default.handleVoiceConnect({
    bypassGuildIdCheck: !0,
    bypassChangeModal: c,
    channel: f,
    connected: o.default.isInChannel(t),
    needSubscriptionToAccess: (0, a.getChannelRoleSubscriptionStatus)(t, u.default, n.default, r.default).needSubscriptionToAccess
  });
  if (!_) return !1;
  let E = new Promise((e, n) => {
    let l = setTimeout(() => {
      n(new s("Joining voice channel has timed out."))
    }, i);
    d.default.addConditionalChangeListener(() => {
      let i = d.default.getVoiceChannelId();
      return i !== t || (clearTimeout(l), e(), !1)
    })
  });
  try {
    await E
  } catch (e) {
    if (e instanceof s) return !1;
    throw e
  }
  return !0
}
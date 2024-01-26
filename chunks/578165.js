"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
}), E("222007");
var t = E("689988"),
  o = E("18494"),
  n = E("821240"),
  r = E("761771");

function a(e) {
  let {
    channelId: _
  } = e;
  return !!(null != _ && (0, r.isEligibleForInappropriateConversationWarning)({
    location: "channel_select"
  })) && (!!(0, n.shouldShowInappropriateConversationTakeoverForChannel)(_) || !1)
}

function i(e) {
  let {
    channels: _
  } = e;
  if (!(0, r.isEligibleForInappropriateConversationWarning)({
      location: "channel_updates"
    })) return !1;
  let E = o.default.getCurrentlySelectedChannelId();
  if (null == E) return !1;
  let t = _.find(e => e.id === E);
  return null != t && (!!(0, n.shouldShowInappropriateConversationTakeoverForChannelRecord)(t) || !1)
}
class I extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      CHANNEL_SELECT: a,
      CHANNEL_UPDATES: i
    }
  }
}
var s = new I
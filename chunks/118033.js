"use strict";
n.r(t), n.d(t, {
  packStageChannelPartyId: function() {
    return l
  },
  unpackStageChannelParty: function() {
    return f
  },
  isStageActivity: function() {
    return _
  },
  shouldShowActivity: function() {
    return c
  }
}), n("222007");
var s = n("271938"),
  i = n("42203"),
  r = n("305961"),
  a = n("325861"),
  o = n("837979"),
  d = n("49111");
let u = "stage:";

function l(e, t) {
  let n = 0,
    i = s.default.getId(),
    o = a.default.isSpeaker(i, e.id);
  o && (n |= 1);
  let l = r.default.getGuild(e.getGuildId());
  null != l && (l.hasFeature(d.GuildFeatures.PARTNERED) && (n |= 2), l.hasFeature(d.GuildFeatures.VERIFIED) && (n |= 4));
  let f = n.toString(16);
  return "".concat(u).concat(e.guild_id, ":").concat(e.id, ":").concat(f, ":").concat(t.id)
}

function f(e) {
  if (null == e || null == e.party) return;
  let {
    id: t,
    size: n
  } = e.party;
  try {
    if (null == t || !t.startsWith(u)) return;
    let [, e, s, i, r] = t.split(":"), a = parseInt(i, 16);
    return {
      guildId: e,
      channelId: s,
      size: n,
      userIsSpeaker: (1 & a) != 0,
      guildIsPartnered: (2 & a) != 0,
      guildIsVerified: (4 & a) != 0,
      stageInstanceId: r
    }
  } catch (e) {
    return null
  }
}

function _(e) {
  return (null == e ? void 0 : e.application_id) === o.STAGE_APPLICATION_ID
}

function c(e) {
  let t = f(e);
  if (null == t) return !1;
  let {
    channelId: n
  } = t, s = i.default.getChannel(n);
  return null != s
}
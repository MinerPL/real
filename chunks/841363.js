"use strict";
n.r(t), n.d(t, {
  getChannelFromEvent: function() {
    return r
  },
  getLocationFromEvent: function() {
    return i
  },
  getLocationFromEventData: function() {
    return a
  },
  getChannelTypeFromEntity: function() {
    return c
  }
});
var u = n("42203"),
  l = n("745049");

function r(e) {
  let t;
  let {
    entity_type: n,
    channel_id: r
  } = e;
  if (n in l.EntityChannelTypes && null != r) {
    var d;
    t = null !== (d = u.default.getChannel(e.channel_id)) && void 0 !== d ? d : void 0
  }
  return t
}

function d(e, t) {
  let n = null;
  return e === l.GuildScheduledEventEntityTypes.EXTERNAL && null != t && "location" in t && (n = t.location), n
}

function i(e) {
  let {
    entity_type: t,
    entity_metadata: n
  } = e;
  return d(t, n)
}

function a(e) {
  let {
    entityType: t,
    entityMetadata: n
  } = e;
  return d(t, n)
}

function c(e) {
  return e === l.GuildScheduledEventEntityTypes.VOICE || e === l.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? l.EntityChannelTypes[e] : void 0
}
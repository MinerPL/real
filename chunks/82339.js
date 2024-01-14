"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
});
var d = l("579033");

function a(e) {
  var t;
  return {
    code: e.code,
    state: d.GuildTemplateStates.RESOLVED,
    name: e.name,
    description: null !== (t = e.description) && void 0 !== t ? t : "",
    creatorId: e.creator_id,
    creator: e.creator,
    createdAt: e.created_at,
    updatedAt: e.updated_at,
    sourceGuildId: e.source_guild_id,
    serializedSourceGuild: e.serialized_source_guild,
    usageCount: e.usage_count,
    isDirty: e.is_dirty
  }
}
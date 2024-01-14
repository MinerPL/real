"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("347924"),
  a = s("701909"),
  l = s("49111"),
  i = s("782340");

function o(e) {
  let t = (0, n.useInServerBadgingExperiment)(null != e ? e : ""),
    s = i.default.Messages.COMMUNITY_GUIDELINES_AND_TYPES_OF_SPACES_POLICIES.format({
      communityGuidelines: a.default.getArticleURL(l.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES),
      typesOfGuilds: a.default.getArticleURL(l.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
    }),
    o = i.default.Messages.COMMUNITY_POLICY_HELP.format({
      helpdeskArticle: a.default.getArticleURL(l.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES)
    });
  return t && null != e ? s : o
}
"use strict";
n.r(t), n.d(t, {
  doGuildOnboardingForPostAuthInvite: function() {
    return l
  }
});
var a = n("970728"),
  s = n("487946"),
  i = n("305961");
async function l(e) {
  let {
    code: t
  } = e, l = await (0, s.default)(t), r = l.invite;
  if (null == r || null == r.guild) return;
  if (await
    function() {
      return new Promise(e => {
        i.default.addConditionalChangeListener(() => !i.default.isLoaded() || (e(), !1))
      })
    }(), null == i.default.getGuild(r.guild.id)) return;
  let {
    default: o
  } = await n.el("937692").then(n.bind(n, "937692"));
  await o({
    guildId: r.guild.id
  }), a.default.transitionToInvite(r)
}
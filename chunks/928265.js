"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("913144"),
  l = {
    viewPrompt: function(e, t) {
      a.default.wait(() => {
        a.default.dispatch({
          type: "GUILD_PROMPT_VIEWED",
          prompt: e,
          guildId: t
        })
      })
    }
  }
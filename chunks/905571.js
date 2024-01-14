"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var n = l("577427"),
  a = l("782340"),
  r = {
    MENTION_EVERYONE: () => ({
      test: "everyone",
      text: "@everyone",
      description: a.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
    }),
    MENTION_HERE: () => ({
      test: "here",
      text: "@here",
      description: a.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
    }),
    MENTION_CLYDE: () => ({
      test: "clyde",
      text: "@Clyde",
      description: a.default.Messages.CLYDE_MENTION_DESCRIPTION
    }),
    LAUNCHABLE_APPLICATIONS: () => n.default.launchableApplicationViewItems
  }
"use strict";
n.r(t), n.d(t, {
  PREFIX_COMMAND_REGEX: function() {
    return l
  },
  BOT_MENTION_COMMAND_REGEX: function() {
    return i
  }
});
let l = /^(?:(?:(?:[A-Za-z!$%?;+.=\-~]{1,2})[@#>]{1,3})|(?:(?:[A-Za-z]{1,2})?(?:~|[!$%?;+.=-]{1,3})))[A-Za-z]/u,
  i = /^<@!?(\d+)>/u
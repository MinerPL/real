"use strict";
n.r(t), n.d(t, {
  showVotesForAnswer: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("875978"),
  i = n("377253"),
  r = n("782340");

function o(e) {
  let {
    channelId: t,
    messageId: o,
    answerId: u
  } = e, d = i.default.getMessage(t, o);
  if (null == d) return;
  let c = {
    emoji: {
      id: u,
      name: u,
      animated: !1
    },
    reactionType: a.ReactionTypes.VOTE
  };
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("57155").then(n.bind(n, "57155"));
    return t => (0, s.jsx)(e, {
      ...t,
      message: d,
      selectedReaction: c,
      disableManage: !0,
      disableTabs: !0,
      "aria-label": r.default.Messages.POLL_ANSWER_VOTES_MODAL_TITLE
    })
  })
}
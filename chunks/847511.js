"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("70102"), n("222007"), n("881410");
var s = n("627445"),
  l = n.n(s),
  a = n("917351"),
  i = n.n(a),
  r = n("446674"),
  o = n("913144"),
  u = n("404118"),
  d = n("819689"),
  c = n("448993"),
  f = n("875978"),
  E = n("815297"),
  _ = n("256572"),
  T = n("271938"),
  I = n("474643"),
  m = n("377253"),
  N = n("585722"),
  p = n("239013"),
  S = n("914271"),
  A = n("690714"),
  C = n("641126"),
  h = n("905206"),
  g = n("782340");

function M(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = m.default.getMessage(t, n);
  if (null != s) return {
    message: s,
    channelId: t,
    messageId: n
  };
  let a = _.default.getMessage(t, n);
  if (null != a.message) return {
    channelId: t,
    messageId: n,
    message: a.message
  };
  throw l(null != s, "Tapped on a non-existent poll message"), Error()
}

function O(e) {
  let {
    isEditing: t,
    ...n
  } = e, {
    channelId: s,
    messageId: l
  } = M(n);
  (0, C.updatePollState)(s, l, () => ({
    channelId: s,
    selectedAnswerIds: new Set,
    submitting: !1,
    editing: t
  }))
}

function R(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = m.default.getMessage(t, n);
  return null == s ? [] : s.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
}
async function L(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: s
  } = e, l = R({
    channelId: t,
    messageId: n
  }), a = i.difference(l, s), u = i.difference(s, l), d = T.default.getId(), c = [...a.map(e => ({
    type: "MESSAGE_REACTION_REMOVE",
    id: e
  })), ...u.map(e => ({
    type: "MESSAGE_REACTION_ADD",
    id: e
  }))], E = r.default.Emitter.batched(() => {
    let e;
    for (let {
        id: s,
        type: l
      }
      of c) e = o.default.dispatch({
      type: l,
      channelId: t,
      messageId: n,
      emoji: {
        id: s,
        name: s
      },
      userId: d,
      optimistic: !0,
      reactionType: f.ReactionTypes.VOTE
    });
    return e
  });
  null != E && await E
}
async function v(e) {
  let {
    channelId: t,
    messageId: n
  } = M(e), s = (0, C.getPollState)(t, n);
  l(null != s, "Must not be able to vote without existing state!");
  let a = R({
    channelId: t,
    messageId: n
  });
  try {
    let e = [...s.selectedAnswerIds.values()];
    await L({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, C.updatePollState)(t, n, e => (l(null != e, "Must not be able to vote without existing state!"), {
      ...e,
      submitting: !0,
      editing: !1
    })), await A.submitPollVote({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, C.updatePollState)(t, n, () => void 0)
  } catch (e) {
    var i, r, o;
    u.default.show({
      title: g.default.Messages.GENERIC_ERROR_TITLE,
      body: null !== (o = null !== (r = null === (i = e.getAnyErrorMessage) || void 0 === i ? void 0 : i.call(e)) && void 0 !== r ? r : e.message) && void 0 !== o ? o : g.default.Messages.GENERIC_ERROR_BODY
    }), await L({
      channelId: t,
      messageId: n,
      answerIds: a
    }), (0, C.updatePollState)(t, n, e => {
      if (null != e) return {
        ...e,
        submitting: !1,
        editing: !1
      }
    })
  }
}
async function P(e) {
  let {
    channelId: t,
    messageId: n,
    type: s
  } = e;
  switch (s) {
    case "submit":
      await v({
        channelId: t,
        messageId: n
      });
      break;
    case "edit":
      O({
        channelId: t,
        messageId: n,
        isEditing: !0
      });
      break;
    case "cancel":
      O({
        channelId: t,
        messageId: n,
        isEditing: !1
      });
      break;
    default:
      l(!1, "Unknown poll action type: ".concat(s))
  }
}
var D = {
  handlePollAnswerTapped: function(e) {
    var t, n, s, l, a;
    let {
      answerId: i,
      ...r
    } = e, {
      channelId: o,
      messageId: d,
      message: c
    } = M(r), {
      tapShouldOpenVotersModal: f,
      reactions: E
    } = null !== (n = (0, h.computeBasicPollChatData)(c)) && void 0 !== n ? n : {};
    if (!0 === f) {
      let e = null !== (a = null === (l = (0, h.reactionForId)(null != E ? E : [], i)) || void 0 === l ? void 0 : null === (s = l.count_details) || void 0 === s ? void 0 : s.vote) && void 0 !== a ? a : 0;
      0 === e ? u.default.show({
        title: g.default.Messages.POLL_NO_VOTES_FOR_ANSWER_TITLE,
        body: g.default.Messages.POLL_NO_VOTES_FOR_ANSWER_BODY
      }) : p.showVotesForAnswer({
        channelId: o,
        messageId: d,
        answerId: i
      });
      return
    }
    let _ = null === (t = c.poll) || void 0 === t ? void 0 : t.allow_multiselect;
    (0, C.updatePollState)(o, d, e => {
      if (null == e) return {
        channelId: o,
        selectedAnswerIds: new Set([i]),
        submitting: !1,
        editing: !1
      };
      let t = {
          ...e
        },
        n = new Set(t.selectedAnswerIds);
      if (t.selectedAnswerIds = n, n.has(i)) n.delete(i);
      else {
        if (!_)
          for (let e of n) n.delete(e);
        n.add(i)
      }
      return t
    })
  },
  handlePollSubmitVote: v,
  handleUpdateVoteEditingState: O,
  handlePollActionTapped: P,
  createPoll: async function e(e) {
    let {
      channel: t,
      question: n,
      answers: s,
      allowMultiSelect: l,
      duration: a,
      layout: i,
      onClose: r
    } = e, o = N.default.getUploads(t.id, I.DraftType.Poll), u = s.map(e => {
      var t;
      let n = null == o ? void 0 : o.findIndex(t => t.id === e.localCreationAnswerId),
        s = {
          attachment_ids: -1 !== n ? ["".concat(n)] : []
        };
      s.text = e.text;
      let l = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
      return null != l && (null != l.id ? s.emoji = {
        id: l.id,
        name: ""
      } : null != l.optionallyDiverseSequence && (s.emoji = {
        name: l.optionallyDiverseSequence
      })), {
        poll_media: s
      }
    }), f = {
      question: {
        text: n,
        attachment_ids: []
      },
      answers: u,
      allow_multiselect: l,
      duration: a,
      layout_type: i
    };
    try {
      if (null != o && o.length > 0) {
        var _;
        let e = null !== (_ = T.default.getToken()) && void 0 !== _ ? _ : "";
        await S.sendPollMessageWithAttachments({
          channel: t,
          items: o,
          token: e,
          poll: f,
          nonce: (0, E.createNonce)(),
          maxSizeCallback: () => {}
        })
      } else await d.default.sendPollMessage(t.id, f);
      null == r || r()
    } catch (t) {
      let e = t instanceof c.APIError ? t : new c.APIError(t);
      if ("poll" === e.getAnyErrorMessage() && null != t.text) throw {
        ...t,
        body: JSON.parse(t.text)
      };
      throw t
    }
  }
}
"use strict";
n.r(t), n.d(t, {
  reactionForId: function() {
    return A
  },
  isPollMessageDirectlyInteractive: function() {
    return h
  },
  computeBasicPollChatData: function() {
    return g
  },
  default: function() {
    return M
  }
}), n("222007"), n("794252"), n("808653");
var s = n("506838"),
  l = n("418009"),
  a = n("385976"),
  i = n("867805"),
  r = n("42203"),
  o = n("377253"),
  u = n("697218"),
  d = n("315102"),
  c = n("402671"),
  f = n("773336"),
  E = n("641126"),
  _ = n("214400"),
  T = n("410328"),
  I = n("868586"),
  m = n("973799"),
  N = n("49111"),
  p = n("782340");
let S = {
  channelId: "",
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1
};

function A(e, t) {
  for (let n of e) {
    let e = "number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id;
    if (e === t) return n
  }
}
let C = e => (0, s.match)(e).with({
  isInteractive: !1
}, () => "normal").with({
  isVictor: !0
}, () => "victor").with({
  isExpired: !0
}, () => "loser").with({
  didSelfVote: !0,
  isExpired: !1
}, () => "voted").with({
  hasVoted: !0,
  isExpired: !1
}, () => "notVoted").with({
  isSelected: !0
}, () => "selected").otherwise(() => "normal");

function h(e) {
  let t = o.default.getMessage(e.channel_id, e.id);
  return t === e && !0
}

function g(e, t) {
  var n, s;
  let {
    formattedExpirationLabel: l
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: a
  } = e;
  if (null == a) return;
  let i = e.state === N.MessageStates.SENT,
    r = i ? null != l ? l : (0, m.formatExpirationLabel)(a.expiry) : "",
    u = null == r && i,
    {
      selectedAnswerIds: d,
      submitting: c,
      editing: f
    } = null !== (n = null != t ? t : (0, E.getPollState)(e.getChannelId(), e.id)) && void 0 !== n ? n : S,
    _ = e.reactions,
    T = !0;
  if (!h(e)) {
    let t = o.default.getMessage(e.channel_id, e.id);
    T = null != t, _ = null !== (s = null == t ? void 0 : t.reactions) && void 0 !== s ? s : _
  }
  let I = d.size > 0,
    p = _.some(e => !0 === e.me_vote),
    A = !f && p,
    C = T && (A || u);
  return {
    poll: a,
    canTapAnswers: i && (!p || f || C),
    canEditVote: !c && A && i && !u,
    canShowVoteCounts: C,
    canSubmitVote: !c && I && !A && i,
    expirationLabel: r,
    hasSelectedAnswer: I,
    hasVoted: A,
    hasVoteRecorded: p,
    isEditingVote: f,
    isExpired: u,
    isInteractive: T,
    isSent: i,
    reactions: _,
    selectedAnswerIds: d,
    submitting: c,
    tapShouldOpenVotersModal: C
  }
}

function M(e, t, n) {
  var o, E, m;
  let {
    animateEmoji: N = !1,
    theme: S = "dark",
    formattedExpirationLabel: h
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, {
    poll: M
  } = e;
  if (null == M || !t) return;
  let O = u.default.getCurrentUser();
  if (null == O) return;
  let R = null === (E = r.default.getChannel(e.getChannelId())) || void 0 === E ? void 0 : null === (o = E.getGuildId) || void 0 === o ? void 0 : o.call(E),
    L = (0, T.getAvatarUrl)(O, R),
    v = M.answers,
    P = M.layout_type,
    D = g(e, n, {
      formattedExpirationLabel: h
    });
  if (null == D) return;
  let {
    canTapAnswers: x,
    canEditVote: y,
    canShowVoteCounts: U,
    canSubmitVote: j,
    expirationLabel: b,
    hasSelectedAnswer: G,
    hasVoted: B,
    isEditingVote: F,
    isExpired: k,
    isInteractive: w,
    reactions: H,
    selectedAnswerIds: V,
    submitting: Y,
    tapShouldOpenVotersModal: K
  } = D, W = H.reduce((e, t) => {
    var n, s;
    return e + (null !== (s = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== s ? s : 0)
  }, 0), z = Math.max(...v.map(e => {
    var t, n;
    let s = A(H, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), Z = v.map(e => {
    var t, n, r;
    let o = "".concat(e.answer_id),
      u = A(H, o),
      f = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      E = V.has(o),
      _ = k ? f >= z && 0 !== f : void 0,
      T = B && null !== (r = null == u ? void 0 : u.me_vote) && void 0 !== r && r,
      I = C({
        didSelfVote: T,
        hasVoted: B,
        isExpired: k,
        isInteractive: w,
        isSelected: E,
        isVictor: _
      });
    return {
      answerId: o,
      pollMedia: {
        text: e.poll_media.text,
        emoji: function(e) {
          let {
            animateEmoji: t = !1,
            size: n = 48
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null == e) return;
          let s = !1;
          if (null != e.id) {
            var l, r;
            s = null !== (r = null === (l = a.default.getCustomEmojiById(e.id)) || void 0 === l ? void 0 : l.animated) && void 0 !== r && r
          }
          let o = s && t;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? i.default.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? c.default.getURL(e.name) : d.default.getEmojiURL({
              id: e.id,
              animated: o,
              size: n
            }),
            animated: o
          }
        }(e.poll_media.emoji, {
          animateEmoji: N
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: E,
      isVictor: _,
      didSelfVote: T,
      style: I,
      shouldAnimateTransition: Y,
      votesPercentage: Math.round(100 * (0 === W ? 0 : f / W)),
      votes: (0, s.match)(P).with(l.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(String(f), ")")).otherwise(() => p.default.Messages.POLL_VOTES_COUNT.format({
        count: String(f)
      }))
    }
  }), J = (0, s.match)({
    isExpired: k,
    canSubmitVote: j,
    hasVoted: B,
    isEditingVote: F,
    canEditVote: y,
    isInteractive: w
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: p.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: G,
    type: "submit"
  })).with({
    canEditVote: !0
  }, () => ({
    label: p.default.Messages.POLL_EDIT_VOTE,
    presentation: "textButton",
    enabled: !0,
    type: "edit"
  })).otherwise(() => ({
    label: p.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: j,
    type: "submit"
  })), Q = (0, s.match)({
    isInteractive: w,
    isEditingVote: F
  }).with({
    isInteractive: !1
  }, () => ({
    label: p.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: p.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: null != b ? b : p.default.Messages.POLL_EXPIRED,
    presentation: "text",
    enabled: !1
  })), X = "normal";
  k ? X = "victor" : B && (X = "voted");
  let q = M.allow_multiselect;
  return {
    question: M.question,
    answers: Z,
    answersInteraction: (0, s.match)({
      tapShouldOpenVotersModal: K,
      canTapAnswers: x,
      canSelectMultipleAnswers: q
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => _.PollChatAnswerInteractionType.LIST).with({
      canTapAnswers: !1
    }, () => _.PollChatAnswerInteractionType.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => _.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => _.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: (0, s.match)({
      tapShouldOpenVotersModal: K,
      platform: (0, f.getNativePlatform)()
    }).with({
      tapShouldOpenVotersModal: !0,
      platform: "android"
    }, () => p.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).with({
      tapShouldOpenVotersModal: !0,
      platform: "ios"
    }, () => p.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS).with({
      tapShouldOpenVotersModal: !0,
      platform: "web"
    }, () => p.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).otherwise(() => void 0),
    layoutType: P,
    resources: (0, I.default)({
      theme: S,
      layoutType: P
    }),
    containerStyle: X,
    primaryAction: J,
    submitVoteLabel: null !== (m = null == J ? void 0 : J.label) && void 0 !== m ? m : "",
    canSubmitVote: j,
    canTapAnswers: x,
    canSelectMultipleAnswers: q,
    hasSelectedAnswer: G,
    canShowVoteCounts: U,
    hasVoted: B,
    expirationLabel: null != b ? b : p.default.Messages.POLL_EXPIRED,
    isExpired: k,
    myAvatarUrl: L,
    secondaryAction: Q
  }
}
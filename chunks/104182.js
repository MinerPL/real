"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("884691"),
  n = a("418009"),
  s = a("162426"),
  r = a("314743"),
  i = a("172402"),
  o = a("914271"),
  u = a("847511"),
  c = a("562228"),
  d = a("186859");

function E(e, t) {
  let a = e.id,
    E = l.useRef();
  null == E.current && (E.current = [(0, c.generateEmptyPollAnswer)(), (0, c.generateEmptyPollAnswer)()]);
  let [A, m] = l.useState(E.current), [f, L] = l.useState(""), [T, C] = l.useState(n.PollLayoutTypes.DEFAULT), [p, R] = l.useState(!1), [P, x] = l.useState(d.PollDurations.ONE_DAY), O = A.filter(e => (0, c.isAnswerFilled)(e, T)), h = A.filter(e => (0, c.isIncompleteAnswer)(e, T)), N = f.length > 0 && O.length >= d.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === h.length, [I, {
    error: g,
    loading: M
  }] = (0, s.default)(u.default.createPoll), v = A.length < d.MAX_NUMBER_OF_ANSWERS_PER_POLL, S = l.useCallback(() => {
    v && m(e => [...e, (0, c.generateEmptyPollAnswer)()])
  }, [v]), D = l.useCallback((e, t) => {
    m(a => {
      let l = [...a];
      return l[t] = {
        ...l[t],
        text: e
      }, l
    })
  }, []), j = l.useCallback((e, t) => {
    m(a => {
      let l = [...a];
      return l[t] = {
        ...l[t],
        image: e
      }, l
    })
  }, []), b = l.useCallback((e, t, a) => {
    var l;
    let n = A[t],
      s = null === (l = n.image) || void 0 === l ? void 0 : l.mediaAttachmentState;
    null != s && s.mediaURL !== a && o.removePollUploadAttachment(e, n.localCreationAnswerId, (0, r.getFileNameFromGifUrl)(n.localCreationAnswerId, s.mediaURL))
  }, [A]), y = l.useCallback(async (e, t, a) => {
    let l = A[t].localCreationAnswerId;
    b(e, t), j(_(a, i.PollMediaUploadAttachmentStatus.PREPARING), t);
    let n = await o.handlePollGifAttachmentAdd(e, l, a);
    if (null == n) {
      j(_(a, i.PollMediaUploadAttachmentStatus.ERROR), t);
      return
    }
    j(_(a, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [A, j, b]), k = l.useCallback((e, t, a) => {
    let l = A[t].localCreationAnswerId,
      n = URL.createObjectURL(a);
    b(e, t), j(_(n, i.PollMediaUploadAttachmentStatus.PREPARING), t), o.handlePollMediaAttachmentAdd(e, l, a), j(_(n, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [A, j, b]), U = l.useCallback((e, t) => {
    b(a, t), j({
      emoji: e,
      stickerId: void 0,
      mediaAttachmentState: void 0
    }, t)
  }, [a, j, b]), w = l.useCallback(e => {
    b(a, e), m(t => {
      let a = [...t];
      return a.splice(e, 1), a
    })
  }, [a, b]);
  l.useEffect(() => () => {
    o.removeAllPollUploadAttachments(a)
  }, [a]);
  let B = l.useCallback(async () => {
    await I({
      channel: e,
      question: f,
      answers: O,
      allowMultiSelect: p,
      duration: P,
      layout: T,
      onClose: t
    })
  }, [f, O, p, P, I, e, T, t]);
  return {
    answers: A,
    question: f,
    setQuestion: L,
    selectedLayoutType: T,
    setSelectedLayoutType: C,
    allowMultiSelect: p,
    setAllowMultiSelect: R,
    duration: P,
    setDuration: x,
    canPost: N,
    canAddMoreAnswers: v,
    handleAddAnswer: S,
    handleAnswerTextChange: D,
    handleGifSelect: y,
    handleEmojiSelect: U,
    handleCustomUpload: k,
    handleRemoveAnswer: w,
    createPoll: B,
    submitting: M,
    createPollError: g
  }
}

function _(e, t) {
  return {
    mediaAttachmentState: {
      status: t,
      mediaURL: e
    },
    emoji: void 0,
    stickerId: void 0
  }
}
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            }), a("222007");
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
                let [_, A] = l.useState(E.current), [m, L] = l.useState(""), [p, T] = l.useState(n.PollLayoutTypes.DEFAULT), [C, x] = l.useState(!1), [O, R] = l.useState(d.PollDurations.ONE_DAY), h = _.filter(e => (0, c.isAnswerFilled)(e, p)), I = _.filter(e => (0, c.isIncompleteAnswer)(e, p)), N = m.length > 0 && h.length >= d.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === I.length, [P, {
                    error: g,
                    loading: v
                }] = (0, s.default)(u.default.createPoll), M = _.length < d.MAX_NUMBER_OF_ANSWERS_PER_POLL, j = l.useCallback(() => {
                    M && A(e => [...e, (0, c.generateEmptyPollAnswer)()])
                }, [M]), S = l.useCallback((e, t) => {
                    A(a => {
                        let l = [...a];
                        return l[t] = {
                            ...l[t],
                            text: e
                        }, l
                    })
                }, []), D = l.useCallback((e, t, a) => {
                    A(l => {
                        var n;
                        let s = [...l];
                        return s[t] = {
                            ...s[t],
                            image: e,
                            uploadId: null != a ? a : null === (n = s[t]) || void 0 === n ? void 0 : n.uploadId
                        }, s
                    })
                }, []), y = l.useCallback((e, t, a) => {
                    var l, n;
                    let s = _[t],
                        i = null === (n = _[t]) || void 0 === n ? void 0 : null === (l = n.image) || void 0 === l ? void 0 : l.gifAttachmentState;
                    null != s && null != i && i.gifUrl !== a && o.removePollUploadAttachment(e, s.uploadId, (0, r.getFileNameFromGifUrl)(s.uploadId, i.gifUrl))
                }, [_]), b = l.useCallback(async (e, t, a) => {
                    var l, n;
                    let s = null !== (n = null === (l = _[t]) || void 0 === l ? void 0 : l.uploadId) && void 0 !== n ? n : (0, c.generateUploadId)();
                    y(e, t), D(f(a, i.PollGifUploadAttachmentStatus.PREPARING), t, s);
                    let r = await o.handlePollGifAttachmentAdd(e, s, a);
                    if (null == r) {
                        D(f(a, i.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    D(f(a, i.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [_, D, y]), k = l.useCallback((e, t) => {
                    y(a, t), D({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [a, D, y]), w = l.useCallback(e => {
                    y(a, e), A(t => {
                        let a = [...t];
                        return a.splice(e, 1), a
                    })
                }, [a, y]);
                l.useEffect(() => () => {
                    o.removeAllPollUploadAttachments(a)
                }, [a]);
                let U = l.useCallback(async () => {
                    await P({
                        channel: e,
                        question: m,
                        answers: h,
                        allowMultiSelect: C,
                        duration: O,
                        layout: p,
                        onClose: t
                    })
                }, [m, h, C, O, P, e, p, t]);
                return {
                    answers: _,
                    question: m,
                    setQuestion: L,
                    selectedLayoutType: p,
                    setSelectedLayoutType: T,
                    allowMultiSelect: C,
                    setAllowMultiSelect: x,
                    duration: O,
                    setDuration: R,
                    canPost: N,
                    canAddMoreAnswers: M,
                    handleAddAnswer: j,
                    handleAnswerTextChange: S,
                    handleGifSelect: b,
                    handleEmojiSelect: k,
                    handleRemoveAnswer: w,
                    createPoll: U,
                    submitting: v,
                    createPollError: g
                }
            }

            function f(e, t) {
                return {
                    gifAttachmentState: {
                        status: t,
                        gifUrl: e
                    },
                    emoji: void 0,
                    stickerId: void 0
                }
            }
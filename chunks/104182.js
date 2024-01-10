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
                let [_, A] = l.useState(E.current), [m, L] = l.useState(""), [T, C] = l.useState(n.PollLayoutTypes.DEFAULT), [p, x] = l.useState(!1), [O, R] = l.useState(d.PollDurations.ONE_DAY), N = _.filter(e => (0, c.isAnswerFilled)(e, T)), P = _.filter(e => (0, c.isIncompleteAnswer)(e, T)), h = m.length > 0 && N.length >= d.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === P.length, [I, {
                    error: g,
                    loading: v
                }] = (0, s.default)(u.default.createPoll), M = _.length < d.MAX_NUMBER_OF_ANSWERS_PER_POLL, S = l.useCallback(() => {
                    M && A(e => [...e, (0, c.generateEmptyPollAnswer)()])
                }, [M]), j = l.useCallback((e, t) => {
                    A(a => {
                        let l = [...a];
                        return l[t] = {
                            ...l[t],
                            text: e
                        }, l
                    })
                }, []), D = l.useCallback((e, t) => {
                    A(a => {
                        let l = [...a];
                        return l[t] = {
                            ...l[t],
                            image: e
                        }, l
                    })
                }, []), y = l.useCallback((e, t, a) => {
                    var l;
                    let n = _[t],
                        s = null === (l = n.image) || void 0 === l ? void 0 : l.gifAttachmentState;
                    null != s && s.gifUrl !== a && o.removePollUploadAttachment(e, n.localCreationAnswerId, (0, r.getFileNameFromGifUrl)(n.localCreationAnswerId, s.gifUrl))
                }, [_]), b = l.useCallback(async (e, t, a) => {
                    let l = _[t].localCreationAnswerId;
                    y(e, t), D(f(a, i.PollGifUploadAttachmentStatus.PREPARING), t);
                    let n = await o.handlePollGifAttachmentAdd(e, l, a);
                    if (null == n) {
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
                    await I({
                        channel: e,
                        question: m,
                        answers: N,
                        allowMultiSelect: p,
                        duration: O,
                        layout: T,
                        onClose: t
                    })
                }, [m, N, p, O, I, e, T, t]);
                return {
                    answers: _,
                    question: m,
                    setQuestion: L,
                    selectedLayoutType: T,
                    setSelectedLayoutType: C,
                    allowMultiSelect: p,
                    setAllowMultiSelect: x,
                    duration: O,
                    setDuration: R,
                    canPost: h,
                    canAddMoreAnswers: M,
                    handleAddAnswer: S,
                    handleAnswerTextChange: j,
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
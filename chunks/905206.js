            "use strict";
            n.r(t), n.d(t, {
                reactionForId: function() {
                    return C
                },
                isPollMessageDirectlyInteractive: function() {
                    return A
                },
                computeBasicPollChatData: function() {
                    return N
                },
                default: function() {
                    return M
                }
            }), n("222007"), n("794252"), n("808653");
            var a = n("506838"),
                s = n("418009"),
                l = n("385976"),
                i = n("867805"),
                r = n("42203"),
                o = n("377253"),
                u = n("697218"),
                d = n("315102"),
                c = n("402671"),
                f = n("773336"),
                m = n("641126"),
                E = n("214400"),
                _ = n("410328"),
                h = n("868586"),
                p = n("973799"),
                I = n("49111"),
                T = n("782340");
            let g = {
                channelId: "",
                selectedAnswerIds: new Set,
                submitting: !1,
                editing: !1
            };

            function C(e, t) {
                for (let n of e) {
                    let e = "number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id;
                    if (e === t) return n
                }
            }
            let S = e => (0, a.match)(e).with({
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

            function A(e) {
                let t = o.default.getMessage(e.channel_id, e.id);
                return t === e && !0
            }

            function N(e, t) {
                var n, a;
                let {
                    formattedExpirationLabel: s
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    poll: l
                } = e;
                if (null == l) return;
                let i = e.state === I.MessageStates.SENT,
                    r = i ? null != s ? s : (0, p.formatExpirationLabel)(l.expiry) : "",
                    u = null == r && i,
                    {
                        selectedAnswerIds: d,
                        submitting: c,
                        editing: f
                    } = null !== (n = null != t ? t : (0, m.getPollState)(e.getChannelId(), e.id)) && void 0 !== n ? n : g,
                    E = e.reactions,
                    _ = !0;
                if (!A(e)) {
                    let t = o.default.getMessage(e.channel_id, e.id);
                    _ = null != t, E = null !== (a = null == t ? void 0 : t.reactions) && void 0 !== a ? a : E
                }
                let h = d.size > 0,
                    T = E.some(e => !0 === e.me_vote),
                    C = !f && T,
                    S = _ && (C || u);
                return {
                    poll: l,
                    canTapAnswers: i && (!T || f || S),
                    canEditVote: !c && C && i && !u,
                    canShowVoteCounts: S,
                    canSubmitVote: !c && h && !C && i,
                    expirationLabel: r,
                    hasSelectedAnswer: h,
                    hasVoted: C,
                    hasVoteRecorded: T,
                    isEditingVote: f,
                    isExpired: u,
                    isInteractive: _,
                    isSent: i,
                    reactions: E,
                    selectedAnswerIds: d,
                    submitting: c,
                    tapShouldOpenVotersModal: S
                }
            }

            function M(e, t, n) {
                var o, m, p;
                let {
                    animateEmoji: I = !1,
                    theme: g = "dark",
                    formattedExpirationLabel: A
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, {
                    poll: M
                } = e;
                if (null == M || !t) return;
                let v = u.default.getCurrentUser();
                if (null == v) return;
                let x = null === (m = r.default.getChannel(e.getChannelId())) || void 0 === m ? void 0 : null === (o = m.getGuildId) || void 0 === o ? void 0 : o.call(m),
                    O = (0, _.getAvatarUrl)(v, x),
                    L = M.answers,
                    R = M.layout_type,
                    y = N(e, n, {
                        formattedExpirationLabel: A
                    });
                if (null == y) return;
                let {
                    canTapAnswers: P,
                    canEditVote: D,
                    canShowVoteCounts: j,
                    canSubmitVote: U,
                    expirationLabel: b,
                    hasSelectedAnswer: G,
                    hasVoted: B,
                    isEditingVote: k,
                    isExpired: w,
                    isInteractive: H,
                    reactions: F,
                    selectedAnswerIds: V,
                    tapShouldOpenVotersModal: Y
                } = y, W = F.reduce((e, t) => {
                    var n, a;
                    return e + (null !== (a = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== a ? a : 0)
                }, 0), K = Math.max(...L.map(e => {
                    var t, n;
                    let a = C(F, "".concat(e.answer_id));
                    return null !== (n = null == a ? void 0 : null === (t = a.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
                })), z = L.map(e => {
                    var t, n, r;
                    let o = "".concat(e.answer_id),
                        u = C(F, o),
                        f = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
                        m = V.has(o),
                        E = w ? f >= K && 0 !== f : void 0,
                        _ = B && null !== (r = null == u ? void 0 : u.me_vote) && void 0 !== r && r,
                        h = S({
                            didSelfVote: _,
                            hasVoted: B,
                            isExpired: w,
                            isInteractive: H,
                            isSelected: m,
                            isVictor: E
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
                                let a = !1;
                                if (null != e.id) {
                                    var s, r;
                                    a = null !== (r = null === (s = l.default.getCustomEmojiById(e.id)) || void 0 === s ? void 0 : s.animated) && void 0 !== r && r
                                }
                                let o = a && t;
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
                                animateEmoji: I
                            }),
                            stickerId: e.poll_media.sticker_id,
                            attachmentIds: e.poll_media.attachment_ids
                        },
                        isSelected: m,
                        isVictor: E,
                        didSelfVote: _,
                        style: h,
                        votesPercentage: Math.round(100 * (0 === W ? 0 : f / W)),
                        votes: (0, a.match)(R).with(s.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(String(f), ")")).otherwise(() => T.default.Messages.POLL_VOTES_COUNT.format({
                            count: String(f)
                        }))
                    }
                }), J = (0, a.match)({
                    isExpired: w,
                    canSubmitVote: U,
                    hasVoted: B,
                    isEditingVote: k,
                    canEditVote: D,
                    isInteractive: H
                }).with({
                    isInteractive: !1
                }, () => void 0).with({
                    isExpired: !0
                }, () => void 0).with({
                    isEditingVote: !0
                }, () => ({
                    label: T.default.Messages.POLL_SUBMIT_VOTE,
                    presentation: "button",
                    enabled: G,
                    type: "submit"
                })).with({
                    canEditVote: !0
                }, () => ({
                    label: T.default.Messages.POLL_EDIT_VOTE,
                    presentation: "textButton",
                    enabled: !0,
                    type: "edit"
                })).otherwise(() => ({
                    label: T.default.Messages.POLL_SUBMIT_VOTE,
                    presentation: "button",
                    enabled: U,
                    type: "submit"
                })), Z = (0, a.match)({
                    isInteractive: H,
                    isEditingVote: k
                }).with({
                    isInteractive: !1
                }, () => ({
                    label: T.default.Messages.POLL_NOT_INTERACTIVE,
                    presentation: "text",
                    enabled: !1
                })).with({
                    isEditingVote: !0
                }, () => ({
                    label: T.default.Messages.CANCEL,
                    presentation: "textButton",
                    enabled: !0,
                    type: "cancel"
                })).otherwise(() => ({
                    label: null != b ? b : T.default.Messages.POLL_EXPIRED,
                    presentation: "text",
                    enabled: !1
                })), X = "normal";
                w ? X = "victor" : B && (X = "voted");
                let q = M.allow_multiselect;
                return {
                    question: M.question,
                    answers: z,
                    answersInteraction: (0, a.match)({
                        tapShouldOpenVotersModal: Y,
                        canTapAnswers: P,
                        canSelectMultipleAnswers: q
                    }).with({
                        tapShouldOpenVotersModal: !0
                    }, () => E.PollChatAnswerInteractionType.LIST).with({
                        canTapAnswers: !1
                    }, () => E.PollChatAnswerInteractionType.LIST).with({
                        canSelectMultipleAnswers: !1
                    }, () => E.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
                        canSelectMultipleAnswers: !0
                    }, () => E.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
                    answerTapAccessibilityLabel: (0, a.match)({
                        tapShouldOpenVotersModal: Y,
                        platform: (0, f.getNativePlatform)()
                    }).with({
                        tapShouldOpenVotersModal: !0,
                        platform: "android"
                    }, () => T.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).with({
                        tapShouldOpenVotersModal: !0,
                        platform: "ios"
                    }, () => T.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS).with({
                        tapShouldOpenVotersModal: !0,
                        platform: "web"
                    }, () => T.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).otherwise(() => void 0),
                    layoutType: R,
                    resources: (0, h.default)({
                        theme: g,
                        layoutType: R
                    }),
                    containerStyle: X,
                    primaryAction: J,
                    submitVoteLabel: null !== (p = null == J ? void 0 : J.label) && void 0 !== p ? p : "",
                    canSubmitVote: U,
                    canTapAnswers: P,
                    canSelectMultipleAnswers: q,
                    hasSelectedAnswer: G,
                    canShowVoteCounts: j,
                    hasVoted: B,
                    expirationLabel: null != b ? b : T.default.Messages.POLL_EXPIRED,
                    isExpired: w,
                    myAvatarUrl: O,
                    secondaryAction: Z
                }
            }
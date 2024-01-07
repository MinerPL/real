            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("70102"), n("222007"), n("881410");
            var a = n("627445"),
                s = n.n(a),
                l = n("917351"),
                i = n.n(l),
                r = n("913144"),
                o = n("404118"),
                u = n("819689"),
                d = n("448993"),
                c = n("875978"),
                f = n("815297"),
                m = n("256572"),
                E = n("271938"),
                _ = n("474643"),
                h = n("377253"),
                p = n("585722"),
                I = n("239013"),
                T = n("914271"),
                g = n("690714"),
                C = n("641126"),
                S = n("905206"),
                A = n("782340");

            function N(e) {
                let {
                    channelId: t,
                    messageId: n
                } = e, a = h.default.getMessage(t, n);
                if (null != a) return {
                    message: a,
                    channelId: t,
                    messageId: n
                };
                let l = m.default.getMessage(t, n);
                if (null != l.message) return {
                    channelId: t,
                    messageId: n,
                    message: l.message
                };
                throw s(null != a, "Tapped on a non-existent poll message"), Error()
            }

            function M(e) {
                let {
                    isEditing: t,
                    ...n
                } = e, {
                    channelId: a,
                    messageId: s
                } = N(n);
                (0, C.updatePollState)(a, s, () => ({
                    channelId: a,
                    selectedAnswerIds: new Set,
                    submitting: !1,
                    editing: t
                }))
            }

            function v(e) {
                let {
                    channelId: t,
                    messageId: n
                } = e, a = h.default.getMessage(t, n);
                return null == a ? [] : a.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
            }
            async function x(e) {
                let t, {
                        channelId: n,
                        messageId: a,
                        answerIds: s
                    } = e,
                    l = v({
                        channelId: n,
                        messageId: a
                    }),
                    o = i.difference(l, s),
                    u = i.difference(s, l),
                    d = E.default.getId(),
                    f = [...o.map(e => ({
                        type: "MESSAGE_REACTION_REMOVE",
                        id: e
                    })), ...u.map(e => ({
                        type: "MESSAGE_REACTION_ADD",
                        id: e
                    }))];
                for (let {
                        id: e,
                        type: s
                    }
                    of f) t = r.default.dispatch({
                    type: s,
                    channelId: n,
                    messageId: a,
                    emoji: {
                        id: e,
                        name: e
                    },
                    userId: d,
                    optimistic: !0,
                    reactionType: c.ReactionTypes.VOTE
                });
                null != t && await t
            }
            async function O(e) {
                let {
                    channelId: t,
                    messageId: n
                } = N(e), a = (0, C.getPollState)(t, n);
                s(null != a, "Must not be able to vote without existing state!"), (0, C.updatePollState)(t, n, e => (s(null != e, "Must not be able to vote without existing state!"), {
                    ...e,
                    submitting: !0,
                    editing: !1
                }));
                let l = v({
                    channelId: t,
                    messageId: n
                });
                try {
                    let e = [...a.selectedAnswerIds.values()];
                    await x({
                        channelId: t,
                        messageId: n,
                        answerIds: e
                    }), await g.submitPollVote({
                        channelId: t,
                        messageId: n,
                        answerIds: e
                    }), (0, C.updatePollState)(t, n, () => void 0)
                } catch (e) {
                    var i, r, u;
                    o.default.show({
                        title: A.default.Messages.GENERIC_ERROR_TITLE,
                        body: null !== (u = null !== (r = null === (i = e.getAnyErrorMessage) || void 0 === i ? void 0 : i.call(e)) && void 0 !== r ? r : e.message) && void 0 !== u ? u : A.default.Messages.GENERIC_ERROR_BODY
                    }), await x({
                        channelId: t,
                        messageId: n,
                        answerIds: l
                    }), (0, C.updatePollState)(t, n, e => {
                        if (null != e) return {
                            ...e,
                            submitting: !1,
                            editing: !1
                        }
                    })
                }
            }
            async function L(e) {
                let {
                    channelId: t,
                    messageId: n,
                    type: a
                } = e;
                switch (a) {
                    case "submit":
                        await O({
                            channelId: t,
                            messageId: n
                        });
                        break;
                    case "edit":
                        M({
                            channelId: t,
                            messageId: n,
                            isEditing: !0
                        });
                        break;
                    case "cancel":
                        M({
                            channelId: t,
                            messageId: n,
                            isEditing: !1
                        });
                        break;
                    default:
                        s(!1, "Unknown poll action type: ".concat(a))
                }
            }
            var R = {
                handlePollAnswerTapped: function(e) {
                    var t, n, a, s, l;
                    let {
                        answerId: i,
                        ...r
                    } = e, {
                        channelId: u,
                        messageId: d,
                        message: c
                    } = N(r), {
                        tapShouldOpenVotersModal: f,
                        reactions: m
                    } = null !== (n = (0, S.computeBasicPollChatData)(c)) && void 0 !== n ? n : {};
                    if (!0 === f) {
                        let e = null !== (l = null === (s = (0, S.reactionForId)(null != m ? m : [], i)) || void 0 === s ? void 0 : null === (a = s.count_details) || void 0 === a ? void 0 : a.vote) && void 0 !== l ? l : 0;
                        0 === e ? o.default.show({
                            title: A.default.Messages.POLL_NO_VOTES_FOR_ANSWER_TITLE,
                            body: A.default.Messages.POLL_NO_VOTES_FOR_ANSWER_BODY
                        }) : I.showVotesForAnswer({
                            channelId: u,
                            messageId: d,
                            answerId: i
                        });
                        return
                    }
                    let E = null === (t = c.poll) || void 0 === t ? void 0 : t.allow_multiselect;
                    (0, C.updatePollState)(u, d, e => {
                        if (null == e) return {
                            channelId: u,
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
                            if (!E)
                                for (let e of n) n.delete(e);
                            n.add(i)
                        }
                        return t
                    })
                },
                handlePollSubmitVote: O,
                handleUpdateVoteEditingState: M,
                handlePollActionTapped: L,
                createPoll: async function e(e) {
                    let {
                        channel: t,
                        question: n,
                        answers: a,
                        allowMultiSelect: s,
                        duration: l,
                        layout: i,
                        onClose: r
                    } = e, o = p.default.getUploads(t.id, _.DraftType.Poll), c = a.map(e => {
                        var t;
                        let n = null == o ? void 0 : o.findIndex(t => t.id === e.uploadId),
                            a = {
                                attachment_ids: -1 !== n ? ["".concat(n)] : []
                            };
                        a.text = e.text;
                        let s = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
                        return null != s && (null != s.id ? a.emoji = {
                            id: s.id,
                            name: ""
                        } : null != s.optionallyDiverseSequence && (a.emoji = {
                            name: s.optionallyDiverseSequence
                        })), {
                            poll_media: a
                        }
                    }), m = {
                        question: {
                            text: n,
                            attachment_ids: []
                        },
                        answers: c,
                        allow_multiselect: s,
                        duration: l,
                        layout_type: i
                    };
                    try {
                        if (null != o && o.length > 0) {
                            var h;
                            let e = null !== (h = E.default.getToken()) && void 0 !== h ? h : "";
                            await T.sendPollMessageWithAttachments({
                                channel: t,
                                items: o,
                                token: e,
                                poll: m,
                                nonce: (0, f.createNonce)(),
                                maxSizeCallback: () => {}
                            })
                        } else await u.default.sendPollMessage(t.id, m);
                        null == r || r()
                    } catch (t) {
                        let e = t instanceof d.APIError ? t : new d.APIError(t);
                        if ("poll" === e.getAnyErrorMessage() && null != t.text) throw {
                            ...t,
                            body: JSON.parse(t.text)
                        };
                        throw t
                    }
                }
            }
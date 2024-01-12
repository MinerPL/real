            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("70102"), n("222007"), n("881410");
            var a = n("627445"),
                s = n.n(a),
                l = n("917351"),
                i = n.n(l),
                r = n("446674"),
                o = n("913144"),
                u = n("404118"),
                d = n("819689"),
                c = n("448993"),
                f = n("875978"),
                m = n("815297"),
                E = n("256572"),
                _ = n("271938"),
                h = n("474643"),
                p = n("377253"),
                I = n("585722"),
                T = n("239013"),
                g = n("914271"),
                C = n("690714"),
                S = n("641126"),
                A = n("905206"),
                N = n("782340");

            function M(e) {
                let {
                    channelId: t,
                    messageId: n
                } = e, a = p.default.getMessage(t, n);
                if (null != a) return {
                    message: a,
                    channelId: t,
                    messageId: n
                };
                let l = E.default.getMessage(t, n);
                if (null != l.message) return {
                    channelId: t,
                    messageId: n,
                    message: l.message
                };
                throw s(null != a, "Tapped on a non-existent poll message"), Error()
            }

            function v(e) {
                let {
                    isEditing: t,
                    ...n
                } = e, {
                    channelId: a,
                    messageId: s
                } = M(n);
                (0, S.updatePollState)(a, s, () => ({
                    channelId: a,
                    selectedAnswerIds: new Set,
                    submitting: !1,
                    editing: t
                }))
            }

            function x(e) {
                let {
                    channelId: t,
                    messageId: n
                } = e, a = p.default.getMessage(t, n);
                return null == a ? [] : a.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
            }
            async function O(e) {
                let {
                    channelId: t,
                    messageId: n,
                    answerIds: a
                } = e, s = x({
                    channelId: t,
                    messageId: n
                }), l = i.difference(s, a), u = i.difference(a, s), d = _.default.getId(), c = [...l.map(e => ({
                    type: "MESSAGE_REACTION_REMOVE",
                    id: e
                })), ...u.map(e => ({
                    type: "MESSAGE_REACTION_ADD",
                    id: e
                }))], m = r.default.Emitter.batched(() => {
                    let e;
                    for (let {
                            id: a,
                            type: s
                        }
                        of c) e = o.default.dispatch({
                        type: s,
                        channelId: t,
                        messageId: n,
                        emoji: {
                            id: a,
                            name: a
                        },
                        userId: d,
                        optimistic: !0,
                        reactionType: f.ReactionTypes.VOTE
                    });
                    return e
                });
                null != m && await m
            }
            async function L(e) {
                let {
                    channelId: t,
                    messageId: n
                } = M(e), a = (0, S.getPollState)(t, n);
                s(null != a, "Must not be able to vote without existing state!");
                let l = x({
                    channelId: t,
                    messageId: n
                });
                try {
                    let e = [...a.selectedAnswerIds.values()];
                    await O({
                        channelId: t,
                        messageId: n,
                        answerIds: e
                    }), (0, S.updatePollState)(t, n, e => (s(null != e, "Must not be able to vote without existing state!"), {
                        ...e,
                        submitting: !0,
                        editing: !1
                    })), await C.submitPollVote({
                        channelId: t,
                        messageId: n,
                        answerIds: e
                    }), (0, S.updatePollState)(t, n, () => void 0)
                } catch (e) {
                    var i, r, o;
                    u.default.show({
                        title: N.default.Messages.GENERIC_ERROR_TITLE,
                        body: null !== (o = null !== (r = null === (i = e.getAnyErrorMessage) || void 0 === i ? void 0 : i.call(e)) && void 0 !== r ? r : e.message) && void 0 !== o ? o : N.default.Messages.GENERIC_ERROR_BODY
                    }), await O({
                        channelId: t,
                        messageId: n,
                        answerIds: l
                    }), (0, S.updatePollState)(t, n, e => {
                        if (null != e) return {
                            ...e,
                            submitting: !1,
                            editing: !1
                        }
                    })
                }
            }
            async function R(e) {
                let {
                    channelId: t,
                    messageId: n,
                    type: a
                } = e;
                switch (a) {
                    case "submit":
                        await L({
                            channelId: t,
                            messageId: n
                        });
                        break;
                    case "edit":
                        v({
                            channelId: t,
                            messageId: n,
                            isEditing: !0
                        });
                        break;
                    case "cancel":
                        v({
                            channelId: t,
                            messageId: n,
                            isEditing: !1
                        });
                        break;
                    default:
                        s(!1, "Unknown poll action type: ".concat(a))
                }
            }
            var y = {
                handlePollAnswerTapped: function(e) {
                    var t, n, a, s, l;
                    let {
                        answerId: i,
                        ...r
                    } = e, {
                        channelId: o,
                        messageId: d,
                        message: c
                    } = M(r), {
                        tapShouldOpenVotersModal: f,
                        reactions: m
                    } = null !== (n = (0, A.computeBasicPollChatData)(c)) && void 0 !== n ? n : {};
                    if (!0 === f) {
                        let e = null !== (l = null === (s = (0, A.reactionForId)(null != m ? m : [], i)) || void 0 === s ? void 0 : null === (a = s.count_details) || void 0 === a ? void 0 : a.vote) && void 0 !== l ? l : 0;
                        0 === e ? u.default.show({
                            title: N.default.Messages.POLL_NO_VOTES_FOR_ANSWER_TITLE,
                            body: N.default.Messages.POLL_NO_VOTES_FOR_ANSWER_BODY
                        }) : T.showVotesForAnswer({
                            channelId: o,
                            messageId: d,
                            answerId: i
                        });
                        return
                    }
                    let E = null === (t = c.poll) || void 0 === t ? void 0 : t.allow_multiselect;
                    (0, S.updatePollState)(o, d, e => {
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
                            if (!E)
                                for (let e of n) n.delete(e);
                            n.add(i)
                        }
                        return t
                    })
                },
                handlePollSubmitVote: L,
                handleUpdateVoteEditingState: v,
                handlePollActionTapped: R,
                createPoll: async function e(e) {
                    let {
                        channel: t,
                        question: n,
                        answers: a,
                        allowMultiSelect: s,
                        duration: l,
                        layout: i,
                        onClose: r
                    } = e, o = I.default.getUploads(t.id, h.DraftType.Poll), u = a.map(e => {
                        var t;
                        let n = null == o ? void 0 : o.findIndex(t => t.id === e.localCreationAnswerId),
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
                    }), f = {
                        question: {
                            text: n,
                            attachment_ids: []
                        },
                        answers: u,
                        allow_multiselect: s,
                        duration: l,
                        layout_type: i
                    };
                    try {
                        if (null != o && o.length > 0) {
                            var E;
                            let e = null !== (E = _.default.getToken()) && void 0 !== E ? E : "";
                            await g.sendPollMessageWithAttachments({
                                channel: t,
                                items: o,
                                token: e,
                                poll: f,
                                nonce: (0, m.createNonce)(),
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
            "use strict";
            n.r(t), n.d(t, {
                VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
                    return _
                },
                default: function() {
                    return N
                }
            }), n("222007"), n("781738");
            var l = n("37983"),
                u = n("884691"),
                a = n("65597"),
                i = n("77078"),
                d = n("18054"),
                r = n("207273"),
                s = n("850391"),
                o = n("149022"),
                c = n("681060"),
                f = n("945956"),
                E = n("145131"),
                C = n("599110"),
                S = n("49111"),
                h = n("782340"),
                v = n("447365");
            let _ = "VoiceChannelStatusModal";

            function N(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: N
                } = e, T = (0, a.default)([r.default], () => r.default.getChannelStatus(t)), I = (0, a.default)([f.default], () => f.default.getMediaSessionId()), [g, m] = u.useState(null != T ? T : ""), [A, p] = u.useState(!1), [L, O] = u.useState(null);
                u.useEffect(() => {
                    C.default.track(S.AnalyticEvents.OPEN_MODAL, {
                        type: "Voice Channel Topic Modal",
                        guild_id: t.guild_id
                    })
                }, [t.guild_id]);
                let y = async e => {
                    g === T && N(), null == e || e.preventDefault(), O(null), p(!0);
                    let n = g.length,
                        l = g.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
                    await d.default.updateVoiceChannelStatus(t.id, g).then(e => {
                        204 === e.status ? (C.default.track(S.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            media_session_id: I,
                            raw_length: n,
                            text_length: l
                        }), N()) : O(e.body.message)
                    }, e => {
                        O(e.body.message)
                    }), p(!1)
                }, [G, V] = u.useState((0, o.toRichValue)(g));
                return (0, l.jsx)("form", {
                    onSubmit: y,
                    className: v.form,
                    children: (0, l.jsxs)(i.ModalRoot, {
                        transitionState: n,
                        size: i.ModalSize.SMALL,
                        children: [(0, l.jsxs)(i.ModalContent, {
                            children: [(0, l.jsxs)(i.ModalHeader, {
                                direction: E.default.Direction.VERTICAL,
                                className: v.modalHeader,
                                separator: !1,
                                children: [(0, l.jsx)(i.ModalCloseButton, {
                                    className: v.closeButton,
                                    onClick: N
                                }), (0, l.jsx)("div", {
                                    className: v.headerImage
                                }), (0, l.jsx)(i.FormTitle, {
                                    tag: "h1",
                                    className: v.title,
                                    children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
                                }), (0, l.jsx)(i.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
                                })]
                            }), (0, l.jsxs)(i.FormSection, {
                                className: v.inputSection,
                                title: h.default.Messages.VOICE_CHANNEL_STATUS,
                                children: [(0, l.jsx)(c.default, {
                                    innerClassName: v.textArea,
                                    textValue: g,
                                    richValue: G,
                                    placeholder: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
                                        channelName: t.name
                                    }),
                                    focused: !0,
                                    channel: t,
                                    onChange: (e, t, n) => {
                                        m(t), V(n)
                                    },
                                    onSubmit: () => (y(), Promise.resolve({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })),
                                    type: s.ChatInputTypes.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: _,
                                    maxCharacterCount: 50,
                                    showRemainingCharsAfterCount: 25,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }), null != L ? (0, l.jsx)(i.FormErrorBlock, {
                                    className: v.error,
                                    children: L
                                }) : null]
                            })]
                        }), (0, l.jsxs)(i.ModalFooter, {
                            justify: E.default.Justify.BETWEEN,
                            direction: E.default.Direction.HORIZONTAL,
                            children: [(0, l.jsx)(i.Button, {
                                color: i.Button.Colors.PRIMARY,
                                onClick: N,
                                children: h.default.Messages.CANCEL
                            }), (0, l.jsx)(i.Button, {
                                onClick: y,
                                submitting: A,
                                className: v.button,
                                disabled: g.length > 50,
                                children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                            })]
                        })]
                    })
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
                    return h
                },
                default: function() {
                    return C
                }
            }), n("222007"), n("781738");
            var i = n("37983"),
                a = n("884691"),
                l = n("65597"),
                s = n("77078"),
                u = n("18054"),
                d = n("207273"),
                r = n("850391"),
                o = n("149022"),
                c = n("681060"),
                f = n("945956"),
                S = n("145131"),
                E = n("599110"),
                _ = n("49111"),
                N = n("782340"),
                g = n("447365");
            let h = "VoiceChannelStatusModal";

            function C(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: C
                } = e, T = (0, l.default)([d.default], () => d.default.getChannelStatus(t)), I = (0, l.default)([f.default], () => f.default.getMediaSessionId()), [O, A] = a.useState(null != T ? T : ""), [L, M] = a.useState(!1), [m, v] = a.useState(null);
                a.useEffect(() => {
                    E.default.track(_.AnalyticEvents.OPEN_MODAL, {
                        type: "Voice Channel Topic Modal",
                        guild_id: t.guild_id
                    })
                }, [t.guild_id]);
                let p = async e => {
                    O === T && C(), null == e || e.preventDefault(), v(null), M(!0);
                    let n = O.length,
                        i = O.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
                    await u.default.updateVoiceChannelStatus(t.id, O).then(e => {
                        204 === e.status ? (E.default.track(_.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            media_session_id: I,
                            raw_length: n,
                            text_length: i
                        }), C()) : v(e.body.message)
                    }, e => {
                        v(e.body.message)
                    }), M(!1)
                }, [G, U] = a.useState((0, o.toRichValue)(O));
                return (0, i.jsx)("form", {
                    onSubmit: p,
                    className: g.form,
                    children: (0, i.jsxs)(s.ModalRoot, {
                        transitionState: n,
                        size: s.ModalSize.SMALL,
                        children: [(0, i.jsxs)(s.ModalContent, {
                            children: [(0, i.jsxs)(s.ModalHeader, {
                                direction: S.default.Direction.VERTICAL,
                                className: g.modalHeader,
                                separator: !1,
                                children: [(0, i.jsx)(s.ModalCloseButton, {
                                    className: g.closeButton,
                                    onClick: C
                                }), (0, i.jsx)("div", {
                                    className: g.headerImage
                                }), (0, i.jsx)(s.FormTitle, {
                                    tag: "h1",
                                    className: g.title,
                                    children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
                                }), (0, i.jsx)(s.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
                                })]
                            }), (0, i.jsxs)(s.FormSection, {
                                className: g.inputSection,
                                title: N.default.Messages.VOICE_CHANNEL_STATUS,
                                children: [(0, i.jsx)(c.default, {
                                    innerClassName: g.textArea,
                                    textValue: O,
                                    richValue: G,
                                    placeholder: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
                                        channelName: t.name
                                    }),
                                    focused: !0,
                                    channel: t,
                                    onChange: (e, t, n) => {
                                        A(t), U(n)
                                    },
                                    onSubmit: () => (p(), Promise.resolve({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })),
                                    type: r.ChatInputTypes.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: h,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }), null != m ? (0, i.jsx)(s.FormErrorBlock, {
                                    className: g.error,
                                    children: m
                                }) : null]
                            })]
                        }), (0, i.jsxs)(s.ModalFooter, {
                            justify: S.default.Justify.BETWEEN,
                            direction: S.default.Direction.HORIZONTAL,
                            children: [(0, i.jsx)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                onClick: C,
                                children: N.default.Messages.CANCEL
                            }), (0, i.jsx)(s.Button, {
                                onClick: p,
                                submitting: L,
                                className: g.button,
                                disabled: O.length > 500,
                                children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
                            })]
                        })]
                    })
                })
            }
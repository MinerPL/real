            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("702976");
            var s = n("37983");
            n("884691");
            var a = n("568734"),
                l = n("913491"),
                i = n("823674"),
                r = n("49111"),
                o = n("877671");

            function u(e) {
                let {
                    setPopout: t,
                    messagePopouts: {
                        emojiPicker: n,
                        emojiBurstPicker: u,
                        moreUtilities: d
                    },
                    showClydeAiEmbeds: c,
                    setShowClydeAiEmbeds: f,
                    isFocused: h,
                    buttonProps: {
                        message: C,
                        channel: p,
                        groupId: m,
                        compact: E = !1
                    }
                } = e, g = C.state === r.MessageStates.SENDING, S = C.id === m, A = (0, a.hasFlag)(C.flags, r.MessageFlags.EPHEMERAL), _ = C.state === r.MessageStates.SEND_FAILED;
                return g || A && !_ ? null : (0, s.jsx)(i.default, {
                    className: o.buttons,
                    innerClassName: o.buttonsInner,
                    isHeader: !E && S && !(0, l.default)(C),
                    channel: p,
                    message: C,
                    setPopout: t,
                    showEmojiPicker: n,
                    showEmojiBurstPicker: u,
                    showMoreUtilities: d,
                    showClydeAiEmbeds: c,
                    setShowClydeAiEmbeds: f,
                    isFocused: h
                })
            }
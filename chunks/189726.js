            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("65597"),
                i = n("206230"),
                l = n("5667"),
                r = n("58608"),
                o = n("837944"),
                u = n("994428"),
                d = n("782340"),
                c = n("421294"),
                E = e => {
                    let {
                        markAsDismissed: t
                    } = e, n = (0, s.default)([i.default], () => i.default.useReducedMotion), E = (0, o.useCanSeeSafetyEducationBlockMuteCoachmark)();
                    return E ? (0, a.jsx)(l.default, {
                        asset: (0, a.jsx)(r.default, {
                            className: c.video,
                            src: "https://cdn.discordapp.com/attachments/1067194967979733053/1067195117439557712/Safety_BLOCK_Coachmark.mp4",
                            loop: !0,
                            autoPlay: !n,
                            width: "100%"
                        }),
                        header: d.default.Messages.SAFETY_CONSUMER_EDUCATION_BLOCK_HEADER,
                        content: d.default.Messages.SAFETY_CONSUMER_EDUCATION_BLOCK_CONTENT,
                        buttonCTA: d.default.Messages.GOT_IT,
                        className: c.coachmark,
                        onClick: e => {
                            e.stopPropagation(), t(u.ContentDismissActionType.UNKNOWN)
                        },
                        markAsDismissed: t,
                        caretPosition: l.CaretPosition.BOTTOM_CENTER,
                        headerClassName: c.header
                    }) : null
                }
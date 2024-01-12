            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                l = n("884691"),
                s = n("77078"),
                r = n("460029"),
                a = n("129722"),
                o = n("723961"),
                u = n("782340"),
                d = n("341479"),
                c = l.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: l = !1,
                        onChange: c
                    } = e, {
                        file: f
                    } = (0, a.useAudioTrimmerStore)();
                    return (0, i.jsx)(s.FormSection, {
                        className: d.section,
                        title: u.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
                        children: (0, i.jsxs)("div", {
                            className: d.fakeInput,
                            children: [null != t && (0, i.jsx)(o.default, {
                                sound: t,
                                volume: n,
                                disabled: l
                            }), null == t && null != f && (0, i.jsx)(r.default, {
                                className: d.audioTrimmer,
                                volume: n,
                                disabled: l,
                                onChange: c
                            })]
                        })
                    })
                })
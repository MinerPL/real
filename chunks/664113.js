            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                s = n("460029"),
                a = n("129722"),
                o = n("723961"),
                u = n("782340"),
                d = n("341479"),
                c = r.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: r = !1,
                        onChange: c
                    } = e, {
                        file: f
                    } = (0, a.useAudioTrimmerStore)();
                    return (0, i.jsx)(l.FormSection, {
                        className: d.section,
                        title: u.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
                        children: (0, i.jsxs)("div", {
                            className: d.fakeInput,
                            children: [null != t && (0, i.jsx)(o.default, {
                                sound: t,
                                volume: n,
                                disabled: r
                            }), null == t && null != f && (0, i.jsx)(s.default, {
                                className: d.audioTrimmer,
                                volume: n,
                                disabled: r,
                                onChange: c
                            })]
                        })
                    })
                })
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("447435"),
                s = n("721618"),
                u = n("782340");

            function r(e, t) {
                return null != t && (0, l.isMediaObscured)({
                    type: l.ObscuredMediaTypes.Attachment,
                    media: t
                }, (0, l.shouldRedactExplicitContent)(e)) ? (0, a.jsx)(i.MenuItem, {
                    id: "report-image-false-positive",
                    label: u.default.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE,
                    action: () => {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: i
                            } = await n("723653");
                            return n => (0, a.jsx)(i, {
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentId: t.id,
                                ...n
                            })
                        })
                    },
                    icon: s.default
                }, "report-image-false-positive") : null
            }
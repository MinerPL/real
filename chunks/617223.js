            "use strict";
            n.r(t), n.d(t, {
                SendGiftToUser: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("87657"),
                i = n("158998"),
                a = n("782340"),
                u = n("438269");
            let o = e => {
                let {
                    giftRecipient: t
                } = e;
                return null == t ? null : (0, s.jsxs)("div", {
                    className: u.content,
                    children: [(0, s.jsx)(r.FormTitle, {
                        children: a.default.Messages.FORM_LABEL_SEND_TO
                    }), (0, s.jsxs)("div", {
                        className: u.giftRecipientInfo,
                        children: [(0, s.jsx)(l.default, {
                            user: t,
                            className: u.giftRecipient,
                            size: r.AvatarSizes.SIZE_20
                        }), (0, s.jsx)(r.Heading, {
                            className: u.giftRecipientName,
                            variant: "text-md/normal",
                            children: i.default.getName(t)
                        }), (0, s.jsx)(r.Heading, {
                            className: u.giftRecipientTag,
                            variant: "text-md/normal",
                            children: i.default.getUserTag(t)
                        })]
                    })]
                })
            }
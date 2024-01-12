            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var n = s("37983");
            s("884691");
            var r = s("77078"),
                l = s("446674"),
                i = s("87657"),
                a = s("635357"),
                u = s("27618"),
                o = s("697218"),
                d = s("158998"),
                c = s("21526"),
                f = s("782340"),
                S = e => {
                    let {
                        selectedSkuId: t,
                        className: s
                    } = e, S = (0, l.useStateFromStoresArray)([u.default], () => u.default.getFriendIDs()), E = (0, l.useStateFromStoresArray)([o.default], () => o.default.filter(e => S.includes(e.id) && !e.bot), [S]), {
                        giftRecipient: I,
                        setGiftRecipient: p,
                        giftRecipientError: _,
                        setGiftRecipientError: T,
                        setValidatingGiftRecipient: h
                    } = (0, a.useGiftContext)();
                    if (null == t) return null;
                    let C = async e => {
                        h(!0), null != _ && T(), p(e);
                        let s = await (0, c.validateCollectiblesRecipient)(e.id, t);
                        !s && T(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), h(!1)
                    };
                    return (0, n.jsxs)("div", {
                        className: s,
                        children: [(0, n.jsx)(r.FormTitle, {
                            children: f.default.Messages.FORM_LABEL_SEND_TO
                        }), (0, n.jsx)(r.SearchableSelect, {
                            placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(i.default, {
                                user: e.value,
                                size: r.AvatarSizes.SIZE_20
                            }),
                            value: I,
                            onChange: C,
                            options: E.map(e => ({
                                value: e,
                                label: "".concat(d.default.getUserTag(e))
                            }))
                        })]
                    })
                }
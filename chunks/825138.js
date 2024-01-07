            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("79112"),
                a = n("792105"),
                o = n("573240"),
                s = n("170213"),
                u = n("49111"),
                c = n("782340"),
                d = n("581935"),
                f = n("49155"),
                E = e => {
                    let {
                        transitionState: t,
                        onClose: n,
                        classificationId: E,
                        source: _
                    } = e, p = (0, a.default)(), h = () => {
                        n(), l.default.open(u.UserSettingsSections.PRIVACY_AND_SAFETY, s.SafetyHubView.ACCOUNT_STANDING)
                    };
                    return (0, i.jsxs)(r.ModalRoot, {
                        className: d.modalRoot,
                        transitionState: t,
                        children: [(0, i.jsxs)("div", {
                            className: d.modalHeader,
                            children: [(0, i.jsx)("img", {
                                className: d.image,
                                src: f,
                                alt: ""
                            }), (0, i.jsx)(r.ModalCloseButton, {
                                className: d.modalClose,
                                onClick: n
                            })]
                        }), (0, i.jsx)(r.ModalContent, {
                            className: d.modalContent,
                            children: p ? (0, i.jsx)(r.Spinner, {}) : (0, i.jsx)(o.default, {
                                classificationId: E,
                                source: _,
                                onError: h
                            })
                        }), (0, i.jsx)(r.ModalFooter, {
                            children: (0, i.jsx)(r.Button, {
                                className: d.button,
                                type: "button",
                                color: r.Button.Colors.BRAND,
                                onClick: h,
                                children: c.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT
                            })
                        })]
                    })
                }
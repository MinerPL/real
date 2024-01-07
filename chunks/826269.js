            "use strict";
            e.r(r), e.d(r, {
                default: function() {
                    return a
                }
            });
            var n = e("37983");
            e("884691");
            var i = e("77078"),
                u = e("476765"),
                o = e("782340"),
                s = e("677029"),
                a = t => {
                    let {
                        onClose: r
                    } = t, e = (0, u.useUID)();
                    return (0, n.jsxs)(i.ModalRoot, {
                        ...t,
                        "aria-labelledby": e,
                        children: [(0, n.jsxs)(i.ModalHeader, {
                            separator: !1,
                            className: s.modalHeader,
                            children: [(0, n.jsx)(i.Heading, {
                                id: e,
                                variant: "heading-xl/extrabold",
                                children: o.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
                            }), (0, n.jsx)(i.ModalCloseButton, {
                                className: s.closeButton,
                                onClick: r
                            })]
                        }), (0, n.jsx)(i.ModalContent, {
                            className: s.modalContent,
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: s.contentText,
                                children: o.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2
                            })
                        }), (0, n.jsx)(i.ModalFooter, {
                            children: (0, n.jsx)(i.Button, {
                                className: s.button,
                                size: i.Button.Sizes.MIN,
                                onClick: r,
                                children: o.default.Messages.OKAY
                            })
                        })]
                    })
                }
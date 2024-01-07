            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var a = t("37983");
            t("884691");
            var d = t("77078"),
                l = t("145131"),
                i = t("782340"),
                n = t("716967");

            function o(e) {
                let {
                    onClose: s,
                    transitionState: t
                } = e;
                return (0, a.jsxs)(d.ModalRoot, {
                    size: d.ModalSize.SMALL,
                    transitionState: t,
                    children: [(0, a.jsxs)(d.ModalHeader, {
                        justify: l.default.Justify.BETWEEN,
                        children: [(0, a.jsx)(d.FormTitle, {
                            tag: "h2",
                            className: n.header,
                            children: i.default.Messages.STREAM_FULL_MODAL_HEADER
                        }), (0, a.jsx)(d.ModalCloseButton, {
                            onClick: s,
                            className: n.modalCloseButton
                        })]
                    }), (0, a.jsxs)(d.ModalContent, {
                        children: [(0, a.jsx)(d.Text, {
                            variant: "text-md/medium",
                            children: i.default.Messages.STREAM_FULL_MODAL_BODY
                        }), (0, a.jsx)("div", {
                            className: n.fullArt
                        })]
                    }), (0, a.jsx)(d.ModalFooter, {
                        children: (0, a.jsx)(d.Button, {
                            onClick: s,
                            children: i.default.Messages.OKAY
                        })
                    })]
                })
            }
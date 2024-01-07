            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("77078"),
                r = s("834897"),
                i = s("85336"),
                a = s("425480"),
                u = s("504898"),
                o = s("551290");

            function d(e) {
                let {
                    step: t,
                    onClose: s
                } = e, d = (0, r.default)(a.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === i.Step.BENEFITS || t === i.Step.CONFIRM ? null : (0, n.jsxs)("div", {
                    className: u.headerContainer,
                    children: [!d && (0, n.jsx)("div", {
                        className: u.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, n.jsx)("img", {
                            src: o,
                            alt: "",
                            className: u.headerImage
                        })
                    }), (0, n.jsx)(l.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: u.closeButton,
                        onClick: s
                    })]
                })
            }
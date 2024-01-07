            "use strict";
            e.r(E), e.d(E, {
                default: function() {
                    return o
                }
            }), e("424973"), e("222007");
            var i = e("37983");
            e("884691");
            var S = e("316693"),
                n = e("77078"),
                r = e("549825"),
                t = e("978970"),
                A = e("782340"),
                _ = e("871213");

            function o(s) {
                let {
                    defaultMemberPermissions: E,
                    onClose: e,
                    transitionState: o
                } = s, M = [];
                for (let s of t.OrderedPermissions) S.default.has(E, s) && M.push(s);
                return (0, i.jsxs)(n.ModalRoot, {
                    size: n.ModalSize.DYNAMIC,
                    "aria-label": A.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_ARIA_LABEL,
                    transitionState: o,
                    children: [(0, i.jsx)(n.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsx)(n.Heading, {
                            className: _.header,
                            variant: "heading-xl/semibold",
                            children: A.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_MODAL_HEADER
                        })
                    }), (0, i.jsx)(n.ModalContent, {
                        children: (0, i.jsx)(r.default, {
                            className: _.permissionList,
                            grantedPermissions: M
                        })
                    }), (0, i.jsx)(n.ModalFooter, {
                        className: _.footer,
                        children: (0, i.jsx)(n.Button, {
                            size: n.ButtonSizes.MEDIUM,
                            onClick: e,
                            color: n.ButtonColors.BRAND,
                            children: A.default.Messages.DONE
                        })
                    })]
                })
            }
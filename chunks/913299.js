            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("782340"),
                i = s("396986");

            function r(e) {
                let {
                    className: t,
                    currentUser: s,
                    handleDisableAccount: r,
                    handleDeleteAccount: o
                } = e, d = s.isClaimed();
                return (0, a.jsxs)(n.FormSection, {
                    className: t,
                    title: l.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
                    children: [(0, a.jsx)(n.FormText, {
                        className: i.description,
                        type: n.FormText.Types.DESCRIPTION,
                        children: d ? l.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_DESCRIPTION : l.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_DESCRIPTION_UNCLAIMED
                    }), (0, a.jsxs)("div", {
                        className: i.buttonContainer,
                        children: [d ? (0, a.jsx)(n.Button, {
                            className: i.disableButton,
                            look: n.ButtonLooks.FILLED,
                            color: n.ButtonColors.RED,
                            size: n.ButtonSizes.SMALL,
                            onClick: r,
                            children: l.default.Messages.DISABLE_ACCOUNT
                        }) : null, (0, a.jsx)(n.Button, {
                            look: n.ButtonLooks.OUTLINED,
                            color: n.ButtonColors.RED,
                            size: n.ButtonSizes.SMALL,
                            onClick: o,
                            children: l.default.Messages.DELETE_ACCOUNT
                        })]
                    })]
                })
            }
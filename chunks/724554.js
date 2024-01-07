            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("759843"),
                l = n("77078"),
                r = n("428958"),
                i = n("124969"),
                o = n("851460"),
                u = n("782340"),
                d = n("329314");

            function c(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, r.default)({
                    type: a.ImpressionTypes.MODAL,
                    name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                }), (0, s.jsxs)(i.default, {
                    className: d.chooseAccountAuthBox,
                    children: [(0, s.jsx)(i.Title, {
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT
                    }), (0, s.jsx)(l.Text, {
                        className: d.chooseAccountHelpText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER
                    }), (0, s.jsx)(o.default, {
                        actionText: u.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                        onAction: e => {
                            e === o.MultiAccountActionType.LOGIN_REQUIRED && t()
                        }
                    }), (0, s.jsx)("div", {
                        className: d.actions,
                        children: (0, s.jsx)(l.Button, {
                            className: d.chooseAccountButton,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: t,
                            size: l.Button.Sizes.MEDIUM,
                            children: (0, s.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: u.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                            })
                        })
                    })]
                })
            }
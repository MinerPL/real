            "use strict";
            n.r(t), n.d(t, {
                BenefitsConfirmationLite: function() {
                    return u
                },
                PurchaseConfirmationLite: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("724038"),
                s = n("782340"),
                a = n("22019");
            let u = e => {
                let {
                    onConfirm: t,
                    onCancel: n,
                    title: u,
                    subtitle: o,
                    confirmCta: c,
                    showOpenDiscord: d = !0
                } = e;
                return (0, r.jsxs)("div", {
                    className: a.confirmationContainer,
                    children: [(0, r.jsx)(i.Heading, {
                        className: a.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: u
                    }), null != o ? (0, r.jsx)(i.Text, {
                        className: a.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: o
                    }) : null, (0, r.jsxs)("div", {
                        className: a.buttonContainer,
                        children: [d && (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
                            children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: c
                        }), null != n && (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: n,
                            children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
                        })]
                    })]
                })
            };

            function o(e) {
                let {
                    onConfirm: t,
                    listing: n,
                    subscription: u
                } = e;
                return (0, r.jsxs)("div", {
                    className: a.confirmationContainer,
                    children: [(0, r.jsx)(i.Heading, {
                        className: a.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: n.name
                        })
                    }), (0, r.jsx)(i.Text, {
                        className: a.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == u ? void 0 : u.currentPeriodEnd
                        })
                    }), (0, r.jsxs)("div", {
                        className: a.buttonContainer,
                        children: [(0, r.jsx)(i.Button, {
                            className: a.openDiscordButton,
                            onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
                            children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            className: a.doneButton,
                            look: i.Button.Looks.BLANK,
                            onClick: t,
                            children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                        })]
                    })]
                })
            }
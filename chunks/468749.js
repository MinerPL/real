            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return c
                }
            }), o("222007");
            var r = o("37983"),
                s = o("884691"),
                a = o("95410"),
                n = o("77078"),
                u = o("145067"),
                d = o("782340"),
                i = o("994704");

            function c(e) {
                let [t, o] = s.useState(!1);
                return (0, r.jsxs)(n.ConfirmModal, {
                    ...e,
                    header: d.default.Messages.GUILD_SIDEBAR_REORDER_DIALOG_TITLE,
                    confirmText: d.default.Messages.GUILD_SIDEBAR_REORDER_CONFIRM,
                    cancelText: d.default.Messages.CANCEL,
                    onConfirm: () => {
                        (0, u.showGuildHeaderPopout)(!0)
                    },
                    confirmButtonColor: n.Button.Colors.BRAND,
                    children: [(0, r.jsx)(n.Text, {
                        variant: "text-md/normal",
                        children: d.default.Messages.GUILD_SIDEBAR_REORDER_DESCRIPTION.format()
                    }), (0, r.jsx)(n.Checkbox, {
                        className: i.checkboxMargin,
                        type: n.Checkbox.Types.INVERTED,
                        value: t,
                        onChange: () => {
                            a.default.set("doNotShowReorderModal", JSON.stringify(!0)), o(!0)
                        },
                        children: (0, r.jsx)(n.Text, {
                            variant: "text-md/normal",
                            children: d.default.Messages.GUILD_SIDEBAR_DO_NOT_SHOW_AGAIN
                        })
                    })]
                })
            }
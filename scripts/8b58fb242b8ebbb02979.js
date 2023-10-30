(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40261"], {
        756912: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var a = s("37983"),
                n = s("884691"),
                r = s("77078"),
                E = s("645266"),
                M = s("782340");

            function o(e) {
                let {
                    guildId: t,
                    onConfirm: s,
                    ...o
                } = e, u = n.useCallback(() => {
                    (0, E.refreshMemberSafetyTimestamp)(t), null == s || s()
                }, [s, t]);
                return (0, a.jsx)(r.ConfirmModal, {
                    header: M.default.Messages.MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_TITLE,
                    confirmText: M.default.Messages.OK,
                    cancelText: M.default.Messages.CANCEL,
                    confirmButtonColor: r.Button.Colors.BRAND,
                    onConfirm: u,
                    ...o,
                    children: (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: M.default.Messages.MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_DESCRIPTION
                    })
                })
            }
        }
    }
]);
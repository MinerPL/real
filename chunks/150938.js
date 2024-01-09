            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("913796"),
                r = n("211248"),
                o = n("11539"),
                u = n("599110"),
                d = n("440612"),
                c = n("49111"),
                f = n("782340");

            function E(e) {
                let {
                    type: t,
                    onClick: n
                } = e, [s, E] = a.useState(!1), h = (0, i.useInDesktopNotificationCenterExperiment)(), S = () => {
                    n(), u.default.track(c.AnalyticEvents.INBOX_CHANNEL_ACKED, {
                        marked_all_channels_as_read: !0,
                        num_unread_channels_remaining: 0
                    })
                }, T = e => {
                    e.shiftKey ? S() : E(!0)
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [s ? (0, l.jsx)(_, {
                        confirm: S,
                        cancel: () => E(!1)
                    }) : null, "bottom-floating" === t ? (0, l.jsx)(d.FloatingActionButton, {
                        text: f.default.Messages.MARK_ALL_AS_READ,
                        icon: o.default,
                        onClick: T
                    }) : (0, l.jsx)(r.default, {
                        tooltip: h ? f.default.Messages.MARK_ALL_AS_READ : f.default.Messages.UNREADS_MARK_READ,
                        color: r.CircleIconButtonColors.SECONDARY,
                        icon: (0, l.jsx)(o.default, {}),
                        onClick: T
                    })]
                })
            }

            function _(e) {
                let {
                    cancel: t,
                    confirm: n
                } = e;
                return (0, l.jsx)(s.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
                    confirmText: f.default.Messages.MARK_AS_READ,
                    cancelText: f.default.Messages.CANCEL,
                    confirmButtonColor: s.Button.Colors.BRAND,
                    onCancel: t,
                    onConfirm: n,
                    children: (0, l.jsx)(s.Text, {
                        color: "text-normal",
                        variant: "text-sm/normal",
                        children: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
                    })
                })
            }
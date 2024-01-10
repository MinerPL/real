            "use strict";
            n.r(t), n.d(t, {
                PendingMessageRequestRowItem: function() {
                    return _
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("77078"),
                l = n("144491"),
                r = n("208021"),
                o = n("982108"),
                u = n("803524"),
                d = n("7643"),
                c = n("98708"),
                E = n("782340"),
                f = n("727447");

            function _(e) {
                let {
                    active: t,
                    user: n,
                    channel: _
                } = e, h = (0, u.useListHasSingleMessageRequest)(), C = s.useCallback(() => {
                    (0, i.showToast)((0, i.createToast)(E.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, i.ToastType.FAILURE))
                }, []), T = s.useCallback(() => {
                    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
                }, []), I = s.useCallback(() => {
                    r.default.closeChannelSidebar(o.MESSAGE_REQUESTS_BASE_CHANNEL_ID), h && (0, l.transitionToChannel)(_.id)
                }, [_.id, h]), {
                    acceptMessageRequest: S,
                    rejectMessageRequest: N,
                    isAcceptLoading: A,
                    isRejectLoading: p,
                    isUserProfileLoading: m,
                    isOptimisticAccepted: g,
                    isOptimisticRejected: R
                } = (0, d.useMessageRequestActions)({
                    user: n,
                    onAcceptSuccess: I,
                    onRejectSuccess: T,
                    onError: C
                }), O = A || p || m || g || R;
                return (0, a.jsxs)("div", {
                    className: f.container,
                    children: [(0, a.jsx)(c.default, {
                        channel: _,
                        otherUser: n,
                        active: t
                    }), (0, a.jsxs)("div", {
                        className: f.actions,
                        children: [(0, a.jsx)(i.Button, {
                            className: f.button,
                            color: i.ButtonColors.PRIMARY,
                            size: i.Button.Sizes.SMALL,
                            onClick: e => {
                                e.stopPropagation(), N(_.id)
                            },
                            disabled: O,
                            submitting: p || R,
                            children: E.default.Messages.MESSAGE_REQUEST_IGNORE
                        }), (0, a.jsx)(i.Button, {
                            className: f.button,
                            color: i.ButtonColors.BRAND,
                            size: i.Button.Sizes.SMALL,
                            onClick: e => {
                                e.stopPropagation(), S(_.id)
                            },
                            disabled: O,
                            submitting: A || m || g,
                            children: E.default.Messages.MESSAGE_REQUEST_ACCEPT
                        })]
                    })]
                })
            }
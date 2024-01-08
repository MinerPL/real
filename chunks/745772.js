            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("432710"),
                l = n("77078"),
                r = n("155084"),
                o = n("144491"),
                u = n("208021"),
                d = n("982108"),
                c = n("803524"),
                E = n("7643"),
                f = n("98708"),
                _ = n("28424"),
                h = n("782340"),
                C = n("578484");

            function I(e) {
                let {
                    active: t,
                    user: n,
                    channel: I
                } = e, T = (0, c.useListHasSingleSpamMessageRequest)(), S = s.useCallback(() => {
                    (0, l.showToast)((0, l.createToast)(h.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, l.ToastType.FAILURE)), r.default.increment({
                        name: i.MetricEvents.SPAM_MESSAGE_REQUEST_ERROR_VIEW
                    })
                }, []), N = s.useCallback(() => {
                    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID)
                }, []), A = s.useCallback(() => {
                    u.default.closeChannelSidebar(d.MESSAGE_REQUESTS_BASE_CHANNEL_ID), T && (0, o.transitionToChannel)(I.id)
                }, [I.id, T]), {
                    acceptMessageRequest: m,
                    isAcceptLoading: p,
                    isUserProfileLoading: g,
                    isOptimisticAccepted: R
                } = (0, E.useMessageRequestActions)({
                    user: n,
                    onAcceptSuccess: A,
                    onRejectSuccess: N,
                    onError: S
                }), O = p || g, L = O || R;
                return (0, a.jsxs)("div", {
                    className: C.container,
                    children: [(0, a.jsx)(f.default, {
                        otherUser: n,
                        channel: I,
                        active: t
                    }), (0, a.jsxs)("div", {
                        className: C.actions,
                        children: [(0, a.jsx)(l.Button, {
                            className: C.button,
                            color: l.ButtonColors.PRIMARY,
                            size: l.Button.Sizes.SMALL,
                            onClick: e => {
                                m(I.id), e.stopPropagation()
                            },
                            disabled: L,
                            submitting: O,
                            children: h.default.Messages.MESSAGE_REQUESTS_SPAM_ACCEPT
                        }), (0, a.jsx)(_.default, {
                            className: C.button,
                            channel: I,
                            buttonSize: l.Button.Sizes.SMALL
                        })]
                    })]
                })
            }
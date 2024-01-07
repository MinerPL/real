            "use strict";
            n.r(t), n.d(t, {
                NoticeColors: function() {
                    return N
                },
                NoticeButton: function() {
                    return A
                },
                PrimaryCTANoticeButton: function() {
                    return u
                },
                NoticeButtonAnchor: function() {
                    return _
                },
                NoticeCloseButton: function() {
                    return T
                },
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var E = n("414456"),
                o = n.n(E),
                r = n("394846"),
                a = n("77078"),
                c = n("945330"),
                s = n("599110"),
                l = n("49111"),
                I = n("782340"),
                S = n("105029");
            let N = Object.freeze({
                DEFAULT: S.colorDefault,
                NEUTRAL: S.colorNeutral,
                BRAND: S.colorBrand,
                WARNING: S.colorWarning,
                DANGER: S.colorDanger,
                INFO: S.colorInfo,
                STREAMER_MODE: S.colorStreamerMode,
                CUSTOM: S.colorCustom,
                SPOTIFY: S.colorSpotify,
                PLAYSTATION: S.colorPlayStation,
                PREMIUM_TIER_0: S.colorPremiumTier0,
                PREMIUM_TIER_1: S.colorPremiumTier1,
                PREMIUM_TIER_2: S.colorPremiumTier2
            });

            function A(e) {
                let {
                    children: t,
                    className: n,
                    minor: E = !1,
                    ...r
                } = e;
                return (0, i.jsx)(a.FocusRing, {
                    children: (0, i.jsx)("button", {
                        className: o(S.button, n, {
                            [S.buttonMinor]: E
                        }),
                        ...r,
                        children: t
                    })
                })
            }

            function u(e) {
                let {
                    children: t,
                    noticeType: n,
                    additionalTrackingProps: E,
                    ...o
                } = e;
                return (0, i.jsx)(A, {
                    ...o,
                    onClick: e => {
                        var t, i;
                        null != o.onClick && o.onClick(e), t = n, i = E, null != t && s.default.track(l.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: t,
                            ...i
                        })
                    },
                    children: t
                })
            }

            function _(e) {
                let {
                    children: t,
                    href: n,
                    ...E
                } = e;
                return (0, i.jsx)(a.Anchor, {
                    ...E,
                    className: S.button,
                    href: n,
                    children: t
                })
            }

            function T(e) {
                let {
                    onClick: t,
                    noticeType: n
                } = e;
                return (0, i.jsx)(a.Clickable, {
                    focusProps: {
                        offset: 6
                    },
                    className: S.closeButton,
                    onClick: () => {
                        var e;
                        t(), null != (e = n) && s.default.track(l.AnalyticEvents.APP_NOTICE_CLOSED, {
                            notice_type: e
                        })
                    },
                    "aria-label": I.default.Messages.DISMISS,
                    children: (0, i.jsx)(c.default, {
                        className: S.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }

            function d(e) {
                let {
                    color: t = N.DEFAULT,
                    className: n,
                    style: E,
                    children: a
                } = e;
                return (0, i.jsx)("div", {
                    className: o(S.notice, {
                        [S.isMobile]: r.isMobile
                    }, n, t),
                    style: null != E ? E : void 0,
                    children: a
                })
            }
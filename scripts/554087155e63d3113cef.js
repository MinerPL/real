(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90387"], {
        527826: function(e, s, t) {
            "use strict";
            e.exports = t.p + "adf75861421c2a6a6269.png"
        },
        668170: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return A
                }
            });
            var a = t("37983"),
                o = t("884691"),
                n = t("414456"),
                l = t.n(n),
                r = t("627445"),
                i = t.n(r),
                c = t("77078"),
                d = t("671278"),
                _ = t("266926"),
                u = t("489622"),
                C = t("599110"),
                E = t("648750"),
                R = t("775032"),
                m = t("25132"),
                N = t("922832"),
                O = t("49111"),
                h = t("782340"),
                M = t("338020"),
                f = t("926622"),
                A = e => {
                    let {
                        transitionState: s,
                        onClose: t
                    } = e, n = (0, R.default)(), [r, A] = o.useState(!1), {
                        getLinkCode: x,
                        isGetLinkCodeLoading: T
                    } = (0, E.useFamilyCenterActions)({}), D = (0, m.useUserQRLinkUrl)(), I = (0, m.usePendingRequestCount)(), L = o.useRef(I);
                    i(!n, "FamilyCenterQRCodeModal should only be rendered for teens.");
                    let g = () => {
                        A(e => (C.default.track(O.AnalyticEvents.FAMILY_CENTER_ACTION, {
                            action: r ? N.FamilyCenterAction.HideQRCode : N.FamilyCenterAction.RevealQRCode
                        }), !e)), !r && setTimeout(() => {
                            t()
                        }, N.QR_CODE_AUTO_HIDE_TIMEOUT)
                    };
                    o.useEffect(() => {
                        x()
                    }, []), o.useEffect(() => {
                        I > L.current && t()
                    }, [L, I, t]);
                    let p = r && !T && null != D;
                    return (0, a.jsxs)(c.ModalRoot, {
                        className: M.modalRoot,
                        transitionState: s,
                        children: [(0, a.jsxs)(u.default, {
                            className: M.notice,
                            color: u.NoticeColors.WARNING,
                            children: [(0, a.jsx)(_.default, {
                                className: M.infoIcon,
                                width: 18,
                                height: 18
                            }), h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_NOTICE]
                        }), (0, a.jsxs)(c.ModalContent, {
                            className: M.content,
                            children: [(0, a.jsx)(c.Text, {
                                className: f.marginBottom8,
                                variant: "text-lg/bold",
                                color: "header-primary",
                                children: h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_HEADER
                            }), (0, a.jsx)(c.Text, {
                                className: f.marginBottom20,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_DESCRIPTION.format({
                                    link: "https://support.discord.com/hc/articles/14155060633623"
                                })
                            }), (0, a.jsx)("div", {
                                className: M.qrCode,
                                children: (0, a.jsx)(c.Clickable, {
                                    className: l(M.qrCodeObscure, {
                                        [M.visible]: p
                                    }),
                                    onClick: g,
                                    children: (0, a.jsx)(d.QRCodeWithOverlay, {
                                        size: 272,
                                        text: p ? D : N.PLACEHOLDER_QR_CODE_URL,
                                        overlaySize: d.QRCodeOverlaySizes.SIZE_60
                                    })
                                })
                            }), (0, a.jsx)(c.Text, {
                                className: M.reminder,
                                variant: "text-xs/semibold",
                                color: "header-secondary",
                                children: h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_REMINDER
                            }), (0, a.jsxs)("div", {
                                className: l(M.buttonContainer, f.marginTop20),
                                children: [(0, a.jsx)(c.Button, {
                                    className: f.marginBottom8,
                                    grow: !0,
                                    size: c.Button.Sizes.LARGE,
                                    onClick: g,
                                    submitting: r && T,
                                    children: r ? h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_HIDE : h.default.Messages.FAMILY_CENTER_QR_CODE_MODAL_BUTTON_SHOW
                                }), (0, a.jsx)(c.Button, {
                                    grow: !0,
                                    color: c.Button.Colors.PRIMARY,
                                    onClick: t,
                                    children: h.default.Messages.CLOSE
                                })]
                            })]
                        })]
                    })
                }
        }
    }
]);
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("446674"),
                l = n("266491"),
                s = n("77078"),
                a = n("45299"),
                u = n("965397"),
                c = n("476765"),
                d = n("526253"),
                f = n("347977"),
                E = n("267235"),
                _ = n("394294"),
                p = n("782340"),
                h = n("120825");
            let I = () => (0, i.jsx)(a.default, {
                submitting: !1,
                message: p.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
                onReset: () => {
                    (0, f.setShowWarning)(!1)
                },
                onResetText: p.default.Messages.CANCEL,
                onSave: () => {
                    (0, f.setShowWarning)(!1), (0, s.closeModal)(_.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                },
                onSaveText: p.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
                onSaveButtonColor: s.ButtonColors.RED
            });
            var T = e => {
                let {
                    guildId: t,
                    transitionState: n,
                    onClose: a,
                    onComplete: _,
                    isPreview: p = !1
                } = e, T = (0, f.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), N = (0, o.useStateFromStores)([d.default], () => d.default.get(t)), C = (0, c.useUID)();
                return (r.useEffect(() => {
                    N === d.NO_MEMBER_VERIFICATION_FORM && a()
                }, [a, N]), N === d.NO_MEMBER_VERIFICATION_FORM) ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(s.ModalRoot, {
                        size: s.ModalSize.MEDIUM,
                        className: h.container,
                        transitionState: n,
                        "aria-labelledby": C,
                        children: [(0, i.jsx)(s.ModalCloseButton, {
                            onClick: () => a(!1),
                            className: h.closeButton
                        }), (0, i.jsx)(E.default, {
                            headerId: C,
                            guildId: t,
                            onClose: a,
                            onComplete: _,
                            isPreview: p
                        })]
                    }), (0, i.jsx)(l.default, {
                        children: !0 === T && (0, i.jsx)(u.default, {
                            className: h.notice,
                            children: (0, i.jsx)(I, {})
                        })
                    })]
                })
            }
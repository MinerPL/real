            "use strict";
            n.r(t), n.d(t, {
                ACTIVITY_ENCOURAGES_HW_ACCELERATION: function() {
                    return _
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("77078"),
                l = n("452804"),
                r = n("442939"),
                o = n("145131"),
                u = n("599110"),
                d = n("50885"),
                c = n("49111"),
                E = n("782340"),
                f = n("646224");
            let _ = "Activity Encourages Hardware Acceleration";

            function h(e) {
                var t;
                let {
                    applicationId: n,
                    ...h
                } = e, [C, T] = s.useState(!1), [I] = (0, r.default)([n]), S = null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : "This Activity";
                s.useEffect(() => {
                    u.default.track(c.AnalyticEvents.OPEN_MODAL, {
                        type: _
                    })
                }, []);
                let N = () => {
                    let e = "temporary";
                    C && (e = "permanent", l.default.updatedUnsyncedSettings({
                        disableActivityHardwareAccelerationPrompt: !0
                    })), u.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
                        type: _,
                        dismiss_type: e
                    }), h.onClose()
                };
                return (0, a.jsxs)(i.ModalRoot, {
                    className: f.root,
                    "aria-label": E.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE,
                    ...h,
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        separator: !1,
                        children: [(0, a.jsx)(i.Text, {
                            className: f.header,
                            variant: "text-lg/normal",
                            children: E.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE
                        }), (0, a.jsx)(i.ModalCloseButton, {
                            onClick: N,
                            className: f.closeButton
                        })]
                    }), (0, a.jsx)(i.ModalContent, {
                        className: f.content,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: f.ratingBody,
                            children: E.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_BODY.format({
                                applicationName: S
                            })
                        })
                    }), (0, a.jsxs)(i.ModalFooter, {
                        className: f.footer,
                        direction: o.default.Direction.HORIZONTAL,
                        children: [(0, a.jsx)(i.Checkbox, {
                            type: i.Checkbox.Types.INVERTED,
                            size: 18,
                            value: C,
                            onChange: () => T(!C),
                            children: (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: E.default.Messages.DONT_SHOW_AGAIN
                            })
                        }), (0, a.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            onClick: N,
                            children: E.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_NO_THANKS
                        }), (0, a.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            onClick: () => {
                                u.default.track(c.AnalyticEvents.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
                                    application_id: n
                                }), d.default.setEnableHardwareAcceleration(!0)
                            },
                            children: E.default.Messages.ACTIVITY_HARDWARE_ACCELERATION_TURN_IT_ON
                        })]
                    })]
                })
            }
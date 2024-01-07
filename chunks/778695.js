            "use strict";
            s.r(t), s.d(t, {
                DropsCopyCodeModalContent: function() {
                    return m
                },
                DropsModalClaimErrorBody: function() {
                    return T
                },
                default: function() {
                    return _
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("913144"),
                o = s("545158"),
                d = s("476765"),
                u = s("376152"),
                c = s("180273"),
                S = s("579565"),
                E = s("782340"),
                f = s("519874");

            function m(e) {
                let {
                    onClose: t,
                    code: s,
                    copyInputTitle: n,
                    bodyText: l
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: f.headerContainer,
                        children: [(0, a.jsx)("div", {
                            className: f.dropArt
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: E.default.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: f.modalContent,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: f.codeBodyText,
                            children: l
                        }), (0, a.jsx)(i.FormDivider, {
                            className: f.formDivider
                        }), (0, a.jsx)(i.FormSection, {
                            title: n,
                            className: f.formSection,
                            children: (0, a.jsx)(i.Button, {
                                onClick: () => (0, o.default)(s),
                                color: i.Button.Colors.BRAND,
                                look: i.Button.Looks.FILLED,
                                children: E.default.Messages.GIFT_EMBED_BUTTON_CLAIM
                            })
                        })]
                    }), (0, a.jsx)(i.ModalFooter, {
                        className: f.modalFooter,
                        children: (0, a.jsx)(i.Button, {
                            className: f.closeButton,
                            onClick: t,
                            look: i.Button.Looks.LINK,
                            color: f.closeButton,
                            children: E.default.Messages.CLOSE
                        })
                    })]
                })
            }

            function T(e) {
                let {
                    onClose: t,
                    errorCode: s
                } = e, n = {
                    26e4: E.default.Messages.DROPS_USER_NOT_ENROLLED_ERROR,
                    260001: E.default.Messages.DROPS_QUEST_NOT_COMPLETED_ERROR,
                    260002: E.default.Messages.DROPS_NO_CODE_AVAILABLE_ERROR,
                    260003: E.default.Messages.DROPS_CODE_ALREADY_CLAIMED_ERROR
                }, l = E.default.Messages.GENERIC_ERROR_BODY;
                return null != n[s] && (l = n[s]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: f.errorHeader,
                        children: [(0, a.jsx)("div", {
                            className: f.errorArt
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: E.default.Messages.GENERIC_ERROR_TITLE
                        })]
                    }), (0, a.jsx)(i.ModalContent, {
                        className: f.errorBody,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: f.bodyText,
                            children: l
                        })
                    }), (0, a.jsx)(i.ModalFooter, {
                        children: (0, a.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            onClick: t,
                            children: E.default.Messages.CLOSE
                        })
                    })]
                })
            }
            var _ = function(e) {
                let {
                    onClose: t,
                    code: o,
                    drop: T,
                    platform: _,
                    transitionState: g
                } = e, h = (0, d.useUID)(), [I, N] = n.useState();
                n.useEffect(() => {
                    null == o && r.default.wait(async () => {
                        await (0, u.fetchCodePlatformAvailability)(T.dropsQuestId)
                    })
                }, [T.dropsQuestId, o]);
                let p = (0, l.useStateFromStores)([c.default], () => c.default.platformAvailability);
                return (0, a.jsx)(i.ModalRoot, {
                    transitionState: g,
                    "aria-labelledby": h,
                    children: (0, a.jsx)(a.Fragment, {
                        children: (() => {
                            if (null != o) return (0, a.jsx)(m, {
                                bodyText: T.messages.claimTip(),
                                onClose: t,
                                copyInputTitle: E.default.Messages.DROPS_REDEMPTION_CODE_PLATFORM_TITLE.format({
                                    platform: _
                                }),
                                code: o
                            });
                            {
                                if (null === p) return (0, a.jsx)("div", {
                                    className: f.spinnerContainer,
                                    children: (0, a.jsx)(i.Spinner, {})
                                });
                                let e = p.length > 0,
                                    n = 1 === p.length;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsxs)(i.ModalHeader, {
                                        separator: !1,
                                        className: f.headerContainer,
                                        children: [(0, a.jsx)("div", {
                                            className: f.dropArt
                                        }), (0, a.jsx)(i.Heading, {
                                            variant: "heading-lg/semibold",
                                            children: E.default.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
                                        })]
                                    }), (0, a.jsxs)(i.ModalContent, {
                                        children: [(0, a.jsx)(i.Text, {
                                            variant: "text-md/normal",
                                            className: f.dropBodyText,
                                            children: n ? E.default.Messages.DROPS_MODAL_CHOOSE_SINGLE_PLATFORM.format({
                                                platform: (0, S.getPlatformLabel)(p[0])
                                            }) : E.default.Messages.DROPS_MODAL_CHOOSE_PLATFORM.format({
                                                title: T.title
                                            })
                                        }), (0, a.jsx)(i.FormDivider, {
                                            className: f.formDivider
                                        }), (0, a.jsxs)(i.FormSection, {
                                            className: f.dropFormSection,
                                            children: [(0, a.jsx)(i.SingleSelect, {
                                                onChange: N,
                                                options: p.map(e => ({
                                                    value: e,
                                                    label: (0, S.getPlatformLabel)(e)
                                                })),
                                                value: n ? p[0] : I,
                                                isDisabled: !e,
                                                className: e ? "" : f.selectDangerBorder,
                                                look: e ? i.SelectLooks.FILLED : i.SelectLooks.CUSTOM
                                            }), !e && (0, a.jsx)(i.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-danger",
                                                className: f.errorCodesText,
                                                children: E.default.Messages.DROPS_CODES_RAN_OUT
                                            })]
                                        })]
                                    }), (0, a.jsxs)(i.ModalFooter, {
                                        children: [e && (0, a.jsx)(i.Button, {
                                            color: i.Button.Colors.BRAND,
                                            onClick: () => {
                                                (0, i.openModalLazy)(async () => {
                                                    let {
                                                        default: e
                                                    } = await s.el("343495").then(s.bind(s, "343495"));
                                                    return s => (void 0 !== I || n) && (0, a.jsx)(e, {
                                                        ...s,
                                                        platform: void 0 === I ? p[0] : I,
                                                        code: o,
                                                        dropsQuestId: T.dropsQuestId,
                                                        closeParentModal: t,
                                                        singlePlatformClaim: n
                                                    })
                                                })
                                            },
                                            disabled: void 0 === I && !n,
                                            children: E.default.Messages.UNLOCK_CODE
                                        }), e ? (0, a.jsx)(i.Button, {
                                            onClick: t,
                                            look: i.Button.Looks.LINK,
                                            color: f.maybeLaterButton,
                                            children: E.default.Messages.MAYBE_LATER
                                        }) : (0, a.jsx)(i.Button, {
                                            onClick: t,
                                            look: i.Button.Looks.LINK,
                                            color: f.closeButton,
                                            children: E.default.Messages.CLOSE
                                        })]
                                    })]
                                })
                            }
                        })()
                    })
                })
            }
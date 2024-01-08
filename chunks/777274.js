            "use strict";
            n.r(t), n.d(t, {
                CallscopeChannelCallIssueMarker: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("77078"),
                i = n("981913"),
                r = n("697218"),
                o = n("471654"),
                u = n("413709"),
                d = n("50885"),
                c = n("316194"),
                f = n("546206"),
                h = n("782340");
            let p = {
                    marginTop: "12px",
                    marginBottom: "12px"
                },
                m = {
                    marginTop: "12px",
                    marginBottom: "12px"
                },
                E = {
                    marginLeft: ".5em"
                };

            function C() {
                return (0, a.jsx)(o.default, {
                    width: "1em",
                    height: "1em"
                })
            }

            function g(e) {
                let [t, n] = l.useState(""), [i, o] = l.useState(null);
                l.useEffect(() => {
                    (async () => {
                        let e = (0, f.getCallscopeState)();
                        o(await e.getDescription())
                    })()
                }, []);
                let u = l.useCallback(() => {
                        console.log("[callscope] Issue marker closed ".concat(t, ".")), (0, f.setCallscopeIssue)(t), e.onClose()
                    }, [e, t]),
                    d = l.useCallback(() => {
                        e.onClose()
                    }, [e]),
                    c = ! function() {
                        let e = r.default.getCurrentUser();
                        return null != e && e.isStaff()
                    }() ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(s.FormItem, {
                            style: p,
                            children: [(0, a.jsx)(s.Text, {
                                variant: "text-md/normal",
                                style: m,
                                children: "Because all user and channel data is anonymized some additional information is needed for Discord to retrieve the logs. You may be asked to provide these IDs so we can associate the incident."
                            }), (0, a.jsx)(_, {
                                description: i
                            })]
                        }), (0, a.jsx)(s.FormItem, {
                            style: p,
                            children: (0, a.jsxs)(s.Text, {
                                variant: "text-md/normal",
                                style: m,
                                children: ["Shortly after the call, you can enter the blinded channel ID into the", " ", (0, a.jsx)(s.Anchor, {
                                    href: "https://callscope.discord.tools/",
                                    children: "callscope visualizer"
                                }), "."]
                            })
                        })]
                    });
                return (0, a.jsxs)(s.ModalRoot, {
                    transitionState: s.ModalTransitionState.ENTERING,
                    size: s.ModalSize.MEDIUM,
                    children: [(0, a.jsxs)(s.ModalContent, {
                        children: [(0, a.jsx)(s.Heading, {
                            variant: "heading-xl/semibold",
                            style: p,
                            children: h.default.Messages.NOTICE_CALLSCOPE_DIALOG_HEADER
                        }), (0, a.jsxs)(s.FormItem, {
                            style: p,
                            children: [(0, a.jsxs)(s.Text, {
                                variant: "text-md/normal",
                                style: m,
                                children: ["We marked the time of your ", (0, a.jsx)(C, {}), " ", h.default.Messages.NOTICE_CALLSCOPE_MARK_ISSUE, " button press in the analytics logs. It can be used multiple times during your call."]
                            }), (0, a.jsx)(s.TextArea, {
                                placeholder: h.default.Messages.NOTICE_CALLSCOPE_DIALOG_INPUT,
                                autoFocus: !0,
                                rows: 5,
                                value: t,
                                maxLength: 500,
                                onChange: n
                            })]
                        }), c]
                    }), (0, a.jsxs)(s.ModalFooter, {
                        children: [(0, a.jsx)(s.Button, {
                            onClick: u,
                            children: "Submit Issue"
                        }), (0, a.jsx)(s.Button, {
                            look: s.ButtonLooks.BLANK,
                            onClick: d,
                            children: (0, a.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: h.default.Messages.CANCEL
                            })
                        })]
                    })]
                })
            }

            function S(e) {
                let t = l.useCallback(() => {
                    d.default.copy(e.text)
                }, [e.text]);
                return (0, a.jsx)(s.Anchor, {
                    style: E,
                    onClick: t,
                    title: "Copy to clipboard",
                    children: (0, a.jsx)(u.default, {
                        width: "1em",
                        height: "1em"
                    })
                })
            }

            function _(e) {
                let t = l.useCallback(() => {
                    d.default.copy(JSON.stringify(e, void 0, 4))
                }, [e]);
                return null == e.description ? (0, a.jsx)(s.Text, {
                    variant: "text-md/medium",
                    children: "Unable to locate blind IDs."
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.Text, {
                        variant: "text-md/medium",
                        children: (0, a.jsx)("ul", {
                            children: e.description.blindIds.map(e => {
                                let {
                                    context: t,
                                    ids: n
                                } = e;
                                return (0, a.jsxs)("div", {
                                    children: [(0, a.jsxs)("li", {
                                        children: [(0, a.jsxs)("strong", {
                                            children: ["Blind channel ID (", t, "):"]
                                        }), " ", (0, a.jsx)("kbd", {
                                            style: {
                                                userSelect: "text"
                                            },
                                            children: n.blindChannelId
                                        }), (0, a.jsx)(S, {
                                            text: n.blindChannelId
                                        })]
                                    }), (0, a.jsxs)("li", {
                                        children: [(0, a.jsxs)("strong", {
                                            children: ["Blind user ID (", t, "):"]
                                        }), " ", (0, a.jsx)("kbd", {
                                            style: {
                                                userSelect: "text"
                                            },
                                            children: n.blindUserId
                                        }), (0, a.jsx)(S, {
                                            text: n.blindUserId
                                        })]
                                    })]
                                }, t)
                            })
                        })
                    }), (0, a.jsx)(s.Button, {
                        onClick: t,
                        children: "Copy All"
                    })]
                })
            }
            let I = "callscope-report-issue-dialog";

            function T(e) {
                let t = (0, s.useModalContext)(),
                    n = l.useCallback(() => {
                        (0, s.closeModal)(I)
                    }, []),
                    r = l.useCallback(() => {
                        (0, c.setRtcLogMarker)(), (0, s.openModalLazy)(() => Promise.resolve(e => (0, a.jsx)(g, {
                            onClose: n
                        })), {
                            contextKey: t,
                            modalKey: I
                        })
                    }, [t, n]);
                return (0, f.shouldShowCallscopeUI)() ? (0, a.jsx)(i.default, {
                    onClick: r,
                    iconComponent: o.default,
                    "aria-label": h.default.Messages.NOTICE_CALLSCOPE_MARK_ISSUE,
                    className: e.className,
                    label: h.default.Messages.NOTICE_CALLSCOPE_MARK_ISSUE
                }) : (0, a.jsx)(a.Fragment, {})
            }
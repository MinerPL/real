            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                u = n("884691"),
                o = n("77078"),
                r = n("545158"),
                i = n("37785"),
                a = n("709681"),
                c = n("782340"),
                d = n("865201");
            let p = [{
                preBold: "That's pretty...",
                bold: "fly!"
            }, {
                preBold: "On Point will make sure to",
                bold: " tick ",
                postBold: "a look at it!"
            }, {
                preBold: "You're...un",
                bold: "bee ",
                postBold: "lievable!"
            }];

            function l(e) {
                let {
                    punConfig: t
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [t.preBold, (0, s.jsx)("b", {
                        children: (0, s.jsx)("i", {
                            children: t.bold
                        })
                    }), t.postBold]
                })
            }

            function f(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    asanaTask: f
                } = e;
                u.useEffect(() => {
                    (0, a.playSound)("success", .1)
                }, []);
                let m = u.useRef(p[Math.floor(Math.random() * p.length)]).current;
                return (0, s.jsx)(o.ModalRoot, {
                    className: d.bugReporterSubmitModalRoot,
                    transitionState: t,
                    "aria-label": c.default.Messages.SUBMIT_BUG,
                    children: (0, s.jsxs)(o.ModalContent, {
                        style: {
                            overflow: "hidden",
                            paddingRight: "0px"
                        },
                        className: d.modalContent,
                        paddingFix: !1,
                        children: [(0, s.jsx)(o.ModalCloseButton, {
                            onClick: () => {
                                null == n || n()
                            },
                            className: d.closeButton
                        }), (0, s.jsxs)(o.Text, {
                            className: d.submitText,
                            variant: "text-sm/normal",
                            children: ["Thanks for submitting a ", (0, s.jsx)(i.default, {
                                onClick: () => (0, r.default)(f.permalink_url),
                                children: "bug"
                            }), "!", (0, s.jsx)("br", {}), (0, s.jsx)(l, {
                                punConfig: m
                            })]
                        })]
                    })
                })
            }
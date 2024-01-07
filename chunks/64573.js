            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983"),
                l = n("884691"),
                r = n("77078"),
                s = n("145131"),
                i = n("782340"),
                d = n("93604"),
                u = e => {
                    let t, {
                            button: n,
                            submitting: u,
                            disableNext: o,
                            onClick: c,
                            canNavigateBack: m,
                            onBackClicked: f
                        } = e,
                        _ = l.useRef(null),
                        E = null != n && "cancel" !== n.type,
                        h = m && (null == n ? void 0 : n.type) !== "done",
                        v = E || h;
                    if (l.useEffect(() => {
                            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                                var e;
                                null === (e = _.current) || void 0 === e || e.focus()
                            }
                        }, [null == n ? void 0 : n.type]), !v) return null;
                    let x = i.default.Messages.DONE;
                    return (null == n ? void 0 : n.type) === "submit" ? (x = i.default.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = r.Button.Colors.RED) : (null == n ? void 0 : n.type) === "next" ? x = i.default.Messages.NEXT : (null == n ? void 0 : n.type) === "cancel" && (x = i.default.Messages.CANCEL, t = r.Button.Colors.TRANSPARENT), (0, a.jsxs)(r.ModalFooter, {
                        direction: s.default.Direction.HORIZONTAL,
                        children: [h && (0, a.jsx)(r.Button, {
                            onClick: f,
                            color: r.Button.Colors.TRANSPARENT,
                            disabled: u,
                            children: i.default.Messages.BACK
                        }), E && (0, a.jsx)(r.Button, {
                            onClick: () => {
                                null != n && c(n)
                            },
                            color: t,
                            className: d.actionButton,
                            disabled: u || o,
                            buttonRef: _,
                            children: x
                        })]
                    })
                }
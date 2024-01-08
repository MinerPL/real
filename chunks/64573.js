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
                        h = null != n && "cancel" !== n.type,
                        E = m && (null == n ? void 0 : n.type) !== "done",
                        v = h || E;
                    if (l.useEffect(() => {
                            if ((null == n ? void 0 : n.type) === "submit" || (null == n ? void 0 : n.type) === "done") {
                                var e;
                                null === (e = _.current) || void 0 === e || e.focus()
                            }
                        }, [null == n ? void 0 : n.type]), !v) return null;
                    let R = i.default.Messages.DONE;
                    return (null == n ? void 0 : n.type) === "submit" ? (R = i.default.Messages.MOBILE_REPORTS_SUBMIT_REPORT, t = r.Button.Colors.RED) : (null == n ? void 0 : n.type) === "next" ? R = i.default.Messages.NEXT : (null == n ? void 0 : n.type) === "cancel" && (R = i.default.Messages.CANCEL, t = r.Button.Colors.TRANSPARENT), (0, a.jsxs)(r.ModalFooter, {
                        direction: s.default.Direction.HORIZONTAL,
                        children: [E && (0, a.jsx)(r.Button, {
                            onClick: f,
                            color: r.Button.Colors.TRANSPARENT,
                            disabled: u,
                            children: i.default.Messages.BACK
                        }), h && (0, a.jsx)(r.Button, {
                            onClick: () => {
                                null != n && c(n)
                            },
                            color: t,
                            className: d.actionButton,
                            disabled: u || o,
                            buttonRef: _,
                            children: R
                        })]
                    })
                }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("423487"),
                s = n("782340"),
                i = n("169075"),
                d = e => {
                    let {
                        hasError: t,
                        onClose: n
                    } = e;
                    return t ? (0, a.jsxs)("div", {
                        className: i.errorContainer,
                        children: [(0, a.jsx)(r.default, {
                            width: 20,
                            height: 20,
                            className: i.errorIcon
                        }), (0, a.jsx)(l.Text, {
                            className: i.errorText,
                            variant: "text-sm/normal",
                            children: s.default.Messages.MOBILE_REPORTS_SUBMIT_FAILED
                        }), (0, a.jsx)(l.Clickable, {
                            onClick: () => {
                                n()
                            },
                            "aria-label": s.default.Messages.DISMISS,
                            className: i.closeIcon
                        })]
                    }) : null
                }
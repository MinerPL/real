            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("705749");

            function i(e) {
                let {
                    step: t,
                    header: s,
                    children: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: l.triggerContainer,
                    children: [(0, a.jsx)("div", {
                        className: l.triggerCounterContainer,
                        children: (0, a.jsx)("div", {
                            className: l.stepCountIcon,
                            children: (0, a.jsx)(n.Text, {
                                className: l.stepCount,
                                variant: "text-sm/bold",
                                children: t
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: l.triggerMainContainer,
                        children: [(0, a.jsx)("div", {
                            className: l.triggerHeaderContainer,
                            children: (0, a.jsx)(n.Text, {
                                className: l.triggerHeader,
                                variant: "text-sm/normal",
                                children: s
                            })
                        }), null != i && (0, a.jsx)("div", {
                            className: l.triggerSettingsContainer,
                            children: i
                        })]
                    })]
                })
            }
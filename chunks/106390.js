            "use strict";
            t.r(a), t.d(a, {
                ValueProp: function() {
                    return r
                },
                BulletedValueProp: function() {
                    return o
                },
                ValuePropContainer: function() {
                    return i
                }
            });
            var s = t("37983");
            t("884691");
            var n = t("77078"),
                l = t("429152");

            function r(e) {
                let {
                    text: a,
                    children: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: l.valueProp,
                    children: [(0, s.jsx)("div", {
                        className: l.valuePropIconContainer,
                        children: t
                    }), (0, s.jsx)(n.Text, {
                        variant: "text-sm/medium",
                        children: a
                    })]
                })
            }

            function o(e) {
                let {
                    title: a,
                    bulletPoints: t,
                    icon: r
                } = e;
                return (0, s.jsxs)("div", {
                    className: l.bulletedValueProp,
                    children: [(0, s.jsx)("div", {
                        className: l.valuePropIconContainer,
                        children: r
                    }), (0, s.jsxs)("div", {
                        className: l.bulletPointsContainer,
                        children: [(0, s.jsx)(n.Text, {
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: a
                        }), (0, s.jsx)("div", {
                            className: l.bulletPoints,
                            children: t.map(e => (0, s.jsxs)("div", {
                                className: l.bulletPoint,
                                children: [(0, s.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    children: "•"
                                }), (0, s.jsx)(n.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-secondary",
                                    className: l.bulletPointText,
                                    children: e
                                })]
                            }, e))
                        })]
                    })]
                })
            }

            function i(e) {
                let {
                    children: a
                } = e;
                return (0, s.jsx)("div", {
                    className: l.valuePropContainer,
                    children: a
                })
            }
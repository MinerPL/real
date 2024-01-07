            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("917351"),
                r = n("77078"),
                s = n("782340"),
                i = n("106291"),
                d = e => {
                    let t = (0, l.flatMap)(e.history, e => {
                        var t;
                        let {
                            destination: [n],
                            multiSelect: a,
                            textInput: l
                        } = e, r = [null, null], s = Object.values(null !== (t = null == a ? void 0 : a.state) && void 0 !== t ? t : {});
                        s.length > 0 && (r[0] = s.join(", "));
                        let i = Object.entries(null != l ? l : {});
                        return i.length > 0 && (r[0] = i.map(e => {
                            let [t, n] = e;
                            return "".concat(t, "=").concat(n)
                        }).join(", ")), "" !== n && (r[1] = n), r
                    }).filter(e => null != e);
                    return 0 === t.length ? null : (0, a.jsxs)("div", {
                        className: i.container,
                        children: [(0, a.jsx)(r.Heading, {
                            className: i.breadcrumbsHeader,
                            color: "header-secondary",
                            variant: "heading-sm/semibold",
                            children: s.default.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE
                        }), t.map((e, t) => (0, a.jsxs)("div", {
                            className: i.breadcrumbContainer,
                            children: [(0, a.jsx)("div", {
                                className: i.breadcrumbDot
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: i.breadcrumbText,
                                children: e
                            })]
                        }, "".concat(e, "+").concat(t)))]
                    })
                }
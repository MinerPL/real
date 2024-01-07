            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("77078"),
                l = n("245489"),
                r = n("229929"),
                o = n("62899"),
                u = n("709410"),
                d = n("49111"),
                c = n("782340"),
                E = n("271755");

            function f() {
                return (0, a.jsxs)("header", {
                    className: E.header,
                    children: [(0, a.jsx)(i.FormTitle, {
                        tag: "h2",
                        className: E.title,
                        children: c.default.Messages.ADD_FRIEND
                    }), (0, a.jsx)(l.default, {})]
                })
            }
            var _ = function() {
                return (0, a.jsxs)(s.Fragment, {
                    children: [(0, a.jsx)(f, {}), (0, r.backToSchoolEnabled)() && (0, a.jsx)(o.default, {}), (0, a.jsx)("div", {
                        className: E.emptyState,
                        children: (0, a.jsx)(u.default, {
                            type: d.FriendsSections.ADD_FRIEND
                        })
                    })]
                })
            }
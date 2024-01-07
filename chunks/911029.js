            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("191814"),
                i = n("903635"),
                s = n("238953");

            function u(t) {
                var e;
                let {
                    attachment: n
                } = t, u = null !== (e = n.size) && void 0 !== e ? e : 0;
                return (0, a.jsxs)("div", {
                    className: s.container,
                    children: [(0, a.jsx)(i.default, {
                        width: 16,
                        height: 16,
                        className: s.fileIcon
                    }), (0, a.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-normal",
                        className: s.fileName,
                        children: n.filename
                    }), (0, a.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsx)("div", {
                        className: s.dot
                    }), (0, a.jsx)(l.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, a.jsxs)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [Math.round(u / 1024 / 1024 * 100) / 100, "MB"]
                    })]
                })
            }
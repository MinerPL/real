            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("587974"),
                s = n("315102"),
                i = n("782340"),
                d = n("187886"),
                u = e => {
                    var t;
                    let {
                        entry: n
                    } = e, {
                        id: u,
                        icon: o,
                        name: c
                    } = n, m = null !== (t = s.default.getGuildIconURL({
                        id: u,
                        icon: o,
                        size: 32
                    })) && void 0 !== t ? t : void 0;
                    return (0, a.jsxs)("div", {
                        className: d.container,
                        children: [(0, a.jsx)(l.Heading, {
                            className: d.header,
                            variant: "heading-sm/semibold",
                            children: i.default.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
                        }), (0, a.jsx)("div", {
                            className: d.guildContainer,
                            children: (0, a.jsxs)("div", {
                                className: d.guildInfo,
                                children: [(0, a.jsx)(r.default, {
                                    mask: r.default.Masks.SQUIRCLE,
                                    width: 32,
                                    height: 32,
                                    className: d.guildIconMask,
                                    children: (0, a.jsx)("img", {
                                        src: m,
                                        alt: "",
                                        className: d.guildIcon
                                    })
                                }), (0, a.jsx)(l.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: c
                                })]
                            })
                        })]
                    })
                }
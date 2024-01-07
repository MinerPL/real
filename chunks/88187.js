            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("782340"),
                i = n("404637"),
                r = e => {
                    let {
                        guild: t,
                        onClose: r
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: i.container,
                        children: [(0, s.jsx)("img", {
                            alt: "",
                            className: i.image,
                            src: n("984467")
                        }), (0, s.jsxs)("div", {
                            className: i.content,
                            children: [(0, s.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                children: l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_HEADER.format({
                                    guild: t.name
                                })
                            }), (0, s.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_BODY
                            }), (0, s.jsx)("div", {
                                className: i.buttonContainer,
                                children: (0, s.jsx)(a.Button, {
                                    onClick: r,
                                    children: l.default.Messages.LURKER_MODE_POPOUT_SUCCESS_BUTTON
                                })
                            })]
                        })]
                    })
                }
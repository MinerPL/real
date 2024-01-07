            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("782340"),
                c = l("11338");

            function o(e) {
                let {
                    className: t,
                    onClick: l,
                    imageSrc: a,
                    iconSrc: o,
                    header: d,
                    headerClassName: u,
                    subheaderVariant: p = "text-sm/normal",
                    subheader: m,
                    children: _,
                    animatesOnHover: f,
                    ...h
                } = e, C = null != a, g = (0, i.jsxs)(i.Fragment, {
                    children: [C && (0, i.jsx)("div", {
                        className: c.imageContainer,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: c.image,
                            src: a
                        })
                    }), (0, i.jsxs)("div", {
                        className: c.textContainer,
                        children: [(0, i.jsxs)("div", {
                            className: n(c.topRowContainer),
                            children: [null != o && (0, i.jsx)("img", {
                                className: c.icon,
                                alt: "",
                                "aria-hidden": !0,
                                src: o,
                                width: 48,
                                height: 48
                            }), (0, i.jsxs)("div", {
                                className: c.headerContainer,
                                children: [(0, i.jsx)(s.Heading, {
                                    variant: "heading-md/medium",
                                    className: u,
                                    children: d
                                }), null != m && (0, i.jsx)(s.Text, {
                                    className: c.subheader,
                                    color: "header-secondary",
                                    variant: p,
                                    children: m
                                })]
                            })]
                        }), _]
                    })]
                }), I = n(t, c.container, {
                    [c.hasImage]: C
                });
                return null != l ? (0, i.jsx)(s.ClickableContainer, {
                    tag: "article",
                    "aria-label": r.default.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({
                        name: d
                    }),
                    onClick: l,
                    className: n(I, c.clickable, {
                        [c.animatesOnHoverContainer]: f
                    }),
                    focusProps: {
                        offset: 4
                    },
                    children: g
                }) : (0, i.jsx)("article", {
                    className: I,
                    ...h,
                    children: g
                })
            }
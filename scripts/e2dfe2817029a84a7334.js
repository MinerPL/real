(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31475"], {
        56657: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return j
                }
            });
            var t = a("37983");
            a("884691");
            var l = a("414456"),
                d = a.n(l),
                i = a("669491"),
                r = a("77078"),
                o = a("476765"),
                c = a("79945"),
                n = a("256170"),
                m = a("867544"),
                x = a("399699"),
                E = a("566998"),
                u = a("701909"),
                h = a("49111"),
                _ = a("782340"),
                N = a("729819");

            function I() {
                return (0, t.jsx)("div", {
                    className: N.dummySwitch,
                    children: (0, t.jsxs)("svg", {
                        className: N.dummySlider,
                        viewBox: "0 0 28 20",
                        preserveAspectRatio: "xMinYMid meet",
                        style: {
                            left: 9
                        },
                        children: [(0, t.jsx)("rect", {
                            fill: "white",
                            x: 4,
                            y: 0,
                            height: 20,
                            width: 20,
                            rx: "10"
                        }), (0, t.jsxs)("svg", {
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: [(0, t.jsx)("path", {
                                fill: i.default.unsafe_rawColors.GREEN_360.css,
                                d: "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z"
                            }), (0, t.jsx)("path", {
                                fill: i.default.unsafe_rawColors.GREEN_360.css,
                                d: "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
                            })]
                        })]
                    })
                })
            }

            function j(e) {
                let {
                    transitionState: s,
                    onClose: a
                } = e, l = (0, o.useUID)();
                return (0, t.jsxs)(r.ModalRoot, {
                    transitionState: s,
                    "aria-labelledby": l,
                    size: r.ModalSize.LARGE,
                    children: [(0, t.jsx)(r.ModalCloseButton, {
                        className: N.closeButton,
                        onClick: a
                    }), (0, t.jsxs)(r.ModalContent, {
                        className: N.container,
                        children: [(0, t.jsx)(r.Heading, {
                            id: l,
                            color: "header-primary",
                            variant: "heading-xl/medium",
                            children: _.default.Messages.GUILD_FEED_NUX_CURATION_TITLE
                        }), (0, t.jsx)(r.Text, {
                            className: N.subtitle,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: _.default.Messages.GUILD_FEED_NUX_CURATION_SUBTITLE
                        }), (0, t.jsxs)("div", {
                            className: N.itemList,
                            children: [(0, t.jsx)("div", {
                                className: N.demoContainer,
                                children: (0, t.jsxs)("div", {
                                    className: N.demoList,
                                    children: [(0, t.jsxs)("div", {
                                        className: N.demoItem,
                                        children: [(0, t.jsx)(r.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: _.default.Messages.ADD_REACTION
                                        }), (0, t.jsx)(c.default, {
                                            className: N.demoIcon
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: d(N.demoItem, N.demoItemSelected),
                                        children: [(0, t.jsx)(r.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.GUILD_FEED_FEATURE_MESSAGE
                                        }), (0, t.jsx)(n.default, {
                                            className: d(N.demoIcon, N.demoIconActive, N.demoCaret)
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: N.demoItem,
                                        children: [(0, t.jsx)(r.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: _.default.Messages.PIN_MESSAGE
                                        }), (0, t.jsx)(E.default, {
                                            className: N.demoIcon
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: N.demoContainer,
                                children: (0, t.jsxs)("div", {
                                    className: N.demoList,
                                    children: [(0, t.jsxs)("div", {
                                        className: N.demoItem,
                                        children: [(0, t.jsx)(r.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-normal",
                                            children: _.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM
                                        }), (0, t.jsx)(m.default, {
                                            className: N.demoIcon,
                                            foregroundColor: "currentColor"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: d(N.demoItem, N.demoItemSelected),
                                        children: [(0, t.jsx)(r.Text, {
                                            variant: "text-md/medium",
                                            color: "interactive-active",
                                            children: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM
                                        }), (0, t.jsx)(x.default, {
                                            className: d(N.demoIcon, N.demoIconActive),
                                            foregroundColor: "currentColor"
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: N.demoContainer,
                                children: (0, t.jsx)("div", {
                                    className: N.demoList,
                                    children: (0, t.jsxs)("div", {
                                        className: N.demoItem,
                                        style: {
                                            padding: 0
                                        },
                                        children: [(0, t.jsx)(r.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: _.default.Messages.GUILD_FEED_DEMOTE_CHANNEL
                                        }), (0, t.jsx)(I, {})]
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: N.textContainer,
                                children: [(0, t.jsx)(r.Text, {
                                    className: N.itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: _.default.Messages.GUILD_FEED_NUX_CURATION_FEATURE_TITLE
                                }), (0, t.jsx)(r.Text, {
                                    className: N.itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: _.default.Messages.GUILD_FEED_NUX_CURATION_FEATURE_SUBTITLE
                                })]
                            }), (0, t.jsxs)("div", {
                                className: N.textContainer,
                                children: [(0, t.jsx)(r.Text, {
                                    className: N.itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: _.default.Messages.GUILD_FEED_NUX_CURATION_REMOVE_TITLE
                                }), (0, t.jsx)(r.Text, {
                                    className: N.itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: _.default.Messages.GUILD_FEED_NUX_CURATION_REMOVE_SUBTITLE
                                })]
                            }), (0, t.jsxs)("div", {
                                className: N.textContainer,
                                children: [(0, t.jsx)(r.Text, {
                                    className: N.itemTitle,
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    children: _.default.Messages.GUILD_FEED_NUX_CURATION_BLOCK_TITLE
                                }), (0, t.jsx)(r.Text, {
                                    className: N.itemSubtitle,
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: _.default.Messages.GUILD_FEED_NUX_CURATION_BLOCK_SUBTITLE
                                })]
                            })]
                        })]
                    }), (0, t.jsxs)(r.ModalFooter, {
                        children: [(0, t.jsx)(r.Button, {
                            onClick: a,
                            children: _.default.Messages.OKAY
                        }), (0, t.jsx)(r.Anchor, {
                            className: d(N.learnMore, (0, r.getButtonStyle)({
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY
                            })),
                            href: u.default.getArticleURL(h.HelpdeskArticles.GUILD_HOME),
                            children: _.default.Messages.LEARN_MORE
                        })]
                    })]
                })
            }
        }
    }
]);
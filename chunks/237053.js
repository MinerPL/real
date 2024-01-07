            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return m
                }
            }), s("222007");
            var t = s("37983"),
                n = s("884691"),
                r = s("77078"),
                l = s("660279"),
                i = s("109264"),
                o = s("660074"),
                _ = s("434111"),
                d = s("782340"),
                c = s("732198");

            function u(e) {
                let {
                    user: a,
                    tagId: s,
                    title: n,
                    messageCount: l,
                    reactionCount: o,
                    activeAgo: _,
                    tags: u,
                    attachment: M
                } = e, {
                    name: E,
                    avatarSrc: m
                } = a;
                return (0, t.jsxs)("div", {
                    className: c.post,
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            className: c.inline,
                            children: [(0, t.jsxs)(r.Text, {
                                color: "header-primary",
                                variant: "text-xs/medium",
                                className: c.inline,
                                children: [(0, t.jsx)("img", {
                                    src: m,
                                    alt: d.default.Messages.USER_SETTINGS_AVATAR,
                                    width: 16,
                                    height: 16
                                }), E]
                            }), null != s && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    className: c.bullet,
                                    children: "•"
                                }), (0, t.jsx)(r.Text, {
                                    color: "header-primary",
                                    variant: "text-xxs/medium",
                                    className: c.inlineTag,
                                    children: u[s]
                                })]
                            })]
                        }), (0, t.jsx)(r.Heading, {
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            className: c.title,
                            children: n
                        }), (0, t.jsxs)("div", {
                            className: c.inline,
                            children: [(0, t.jsxs)(r.Text, {
                                color: "header-secondary",
                                variant: "text-xs/medium",
                                className: c.alignCenter,
                                children: [(0, t.jsx)(i.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.icon
                                }), l]
                            }), o > 0 && (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("span", {
                                    className: c.bullet,
                                    children: "•"
                                }), (0, t.jsxs)(r.Text, {
                                    color: "header-secondary",
                                    variant: "text-xs/medium",
                                    className: c.alignCenter,
                                    children: [(0, t.jsx)("span", {
                                        role: "img",
                                        "aria-label": d.default.Messages.REACTIONS,
                                        className: c.icon,
                                        children: "❤️"
                                    }), o]
                                })]
                            }), (0, t.jsx)("span", {
                                className: c.bullet,
                                children: "•"
                            }), (0, t.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-xs/medium",
                                children: _
                            })]
                        })]
                    }), null != M && (0, t.jsx)("img", {
                        src: M,
                        alt: d.default.Messages.MESSAGE_ATTACHMENT_A11Y_LABEL.format({
                            name: n
                        }),
                        className: c.attachment
                    })]
                })
            }

            function M(e) {
                let {
                    author: a,
                    content: s
                } = e, {
                    name: n,
                    isOP: l,
                    avatarSrc: i
                } = a;
                return (0, t.jsxs)("div", {
                    className: c.message,
                    children: [(0, t.jsx)("img", {
                        src: i,
                        alt: d.default.Messages.USER_SETTINGS_AVATAR,
                        width: 40,
                        height: 40
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            className: c.inline,
                            children: [(0, t.jsx)(r.Text, {
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                children: n
                            }), l && (0, t.jsx)("span", {
                                className: c.opTag,
                                children: d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER
                            })]
                        }), (0, t.jsx)(r.Text, {
                            color: "text-normal",
                            variant: "text-sm/normal",
                            children: s
                        })]
                    })]
                })
            }

            function E(e) {
                let {
                    title: a,
                    messages: s,
                    maxHeight: n
                } = e;
                return (0, t.jsx)("div", {
                    className: c.previewContainer,
                    style: {
                        maxHeight: n
                    },
                    "aria-hidden": !0,
                    children: (0, t.jsxs)("div", {
                        className: c.preview,
                        children: [(0, t.jsx)(o.default, {
                            className: c.forumPostIcon
                        }), (0, t.jsx)(r.Heading, {
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: c.header,
                            children: a
                        }), (0, t.jsx)("div", {
                            className: c.messageContainer,
                            children: s.map((e, a) => (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(M, {
                                    ...e
                                }, a), 0 === a && (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("hr", {
                                        className: c.topSeparator
                                    }), (0, t.jsxs)("div", {
                                        className: c.actionBar,
                                        children: [(0, t.jsxs)(r.Text, {
                                            color: "text-brand",
                                            variant: "text-xs/medium",
                                            className: c.fakeReactions,
                                            children: [(0, t.jsx)("span", {
                                                role: "img",
                                                "aria-label": d.default.Messages.REACTIONS,
                                                className: c.icon,
                                                children: "❤️"
                                            }), "17"]
                                        }), (0, t.jsxs)(r.Text, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            className: c.following,
                                            children: [(0, t.jsx)(l.default, {
                                                width: 16,
                                                height: 16
                                            }), d.default.Messages.FOLLOW]
                                        })]
                                    }), (0, t.jsx)("hr", {
                                        className: c.bottomSeparator
                                    })]
                                })]
                            }))
                        }), (0, t.jsx)("div", {
                            className: c.chatInput,
                            children: (0, t.jsx)(r.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: d.default.Messages.SEND_A_MESSAGE
                            })
                        })]
                    })
                })
            }

            function m(e) {
                let {
                    id: a
                } = e, [s, l] = n.useState(0), i = n.useRef(null), {
                    tags: o,
                    posts: d,
                    postPreview: M,
                    ariaLabel: m
                } = (0, _.default)(a);
                return n.useEffect(() => {
                    l(0)
                }, [a]), n.useEffect(() => {
                    var e;
                    0 === s && (null == i ? void 0 : null === (e = i.current) || void 0 === e ? void 0 : e.clientHeight) != null && l(i.current.clientHeight - 40)
                }, [s]), (0, t.jsxs)("div", {
                    className: c.container,
                    role: "image",
                    "aria-label": m,
                    children: [(0, t.jsxs)("div", {
                        ref: i,
                        className: c.browser,
                        "aria-hidden": !0,
                        children: [(0, t.jsx)("div", {
                            className: c.tags,
                            children: o.map((e, a) => (0, t.jsx)(r.Text, {
                                color: "header-primary",
                                variant: "text-xs/medium",
                                className: c.tag,
                                children: e
                            }, a))
                        }), (0, t.jsx)("div", {
                            className: c.posts,
                            children: d.map((e, a) => (0, t.jsx)(u, {
                                ...e,
                                tags: o
                            }, a))
                        })]
                    }), (0, t.jsx)(E, {
                        ...M,
                        maxHeight: s
                    })]
                })
            }
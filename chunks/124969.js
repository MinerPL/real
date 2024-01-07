            "use strict";
            s.r(t), s.d(t, {
                Title: function() {
                    return p
                },
                SubTitle: function() {
                    return A
                },
                Image: function() {
                    return Image
                },
                Button: function() {
                    return C
                },
                Avatar: function() {
                    return m
                },
                GuildIcon: function() {
                    return M
                },
                ChannelIcon: function() {
                    return N
                },
                Input: function() {
                    return g
                },
                Block: function() {
                    return R
                },
                SubText: function() {
                    return O
                },
                AuthSpinner: function() {
                    return D
                },
                ActivityCount: function() {
                    return h
                },
                JoiningAs: function() {
                    return x
                },
                IncompatibleBrowser: function() {
                    return U
                },
                default: function() {
                    return b
                }
            }), s("834022");
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("843962"),
                u = s("145131"),
                d = s("476263"),
                o = s("476765"),
                c = s("637888"),
                E = s("98013"),
                T = s("701909"),
                _ = s("439932"),
                f = s("49111"),
                L = s("782340"),
                S = s("79902");
            let I = i.Avatar;
            null == I && (I = () => null);
            let p = e => {
                    let {
                        className: t,
                        id: s,
                        children: n
                    } = e;
                    return (0, a.jsx)(i.Heading, {
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: l(S.title, t),
                        id: s,
                        children: n
                    })
                },
                A = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, a.jsx)(i.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: t,
                        children: s
                    })
                },
                Image = e => {
                    let {
                        className: t,
                        src: s
                    } = e;
                    return (0, a.jsx)("img", {
                        alt: "",
                        src: s,
                        className: l(S.image, t)
                    })
                },
                C = e => {
                    let {
                        className: t,
                        ...s
                    } = e, n = s.look === i.Button.Looks.LINK;
                    return (0, a.jsx)(i.Button, {
                        size: n ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
                        fullWidth: !n,
                        className: l(t, {
                            [S.button]: !n,
                            [S.linkButton]: n
                        }),
                        ...s
                    })
                };
            C.Looks = i.Button.Looks, C.Colors = i.Button.Colors, C.Sizes = i.Button.Sizes;
            let m = e => {
                    let {
                        className: t,
                        src: s,
                        size: n
                    } = e;
                    return (0, a.jsx)(I, {
                        src: s,
                        size: n,
                        className: l(S.inviteLargeIcon, t),
                        "aria-hidden": !0
                    })
                },
                M = e => {
                    let {
                        guild: t,
                        size: s,
                        animate: n = !1,
                        className: l
                    } = e;
                    return (0, a.jsx)(d.default, {
                        active: !0,
                        guild: t,
                        size: s,
                        animate: n,
                        className: l
                    })
                };
            M.Sizes = d.default.Sizes;
            let N = e => {
                let {
                    className: t,
                    channel: s,
                    size: n
                } = e;
                return (0, a.jsx)(I, {
                    src: (0, r.getChannelIconURL)(s),
                    size: n,
                    className: l(S.inviteIcon, t),
                    "aria-hidden": !0
                })
            };
            N.Sizes = i.AvatarSizes;
            let g = e => {
                    let {
                        label: t,
                        error: s,
                        placeholder: n,
                        value: r,
                        className: u,
                        inputClassName: d,
                        setRef: c,
                        type: E = "text",
                        onChange: T,
                        autoComplete: _,
                        autoFocus: f,
                        maxLength: L,
                        spellCheck: I,
                        name: p,
                        description: A,
                        required: C,
                        onFocus: m,
                        onBlur: M
                    } = e, N = (0, o.useUID)();
                    return (0, a.jsxs)(i.FormItem, {
                        title: t,
                        error: s,
                        className: u,
                        required: C,
                        tag: "label",
                        htmlFor: N,
                        children: [(0, a.jsx)(i.TextInput, {
                            name: p,
                            type: E,
                            value: r,
                            inputRef: c,
                            placeholder: n,
                            inputClassName: l(d, {
                                [S.inputError]: null != s
                            }),
                            "aria-label": t,
                            onChange: T,
                            autoComplete: _,
                            autoFocus: f,
                            maxLength: L,
                            spellCheck: I,
                            id: N,
                            onFocus: m,
                            onBlur: M
                        }), null != A ? (0, a.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: S.description,
                            children: A
                        }) : null]
                    })
                },
                R = e => {
                    let {
                        className: t,
                        children: s
                    } = e;
                    return (0, a.jsx)("div", {
                        className: l(S.block, t),
                        children: s
                    })
                },
                O = e => {
                    let {
                        className: t,
                        children: s,
                        isProminent: n
                    } = e;
                    return (0, a.jsx)(i.Text, {
                        variant: n ? "text-sm/normal" : "text-xs/normal",
                        className: l(S.subText, t),
                        children: s
                    })
                },
                D = e => {
                    let {
                        className: t
                    } = e;
                    return (0, a.jsx)(u.default, {
                        direction: u.default.Direction.VERTICAL,
                        align: u.default.Align.CENTER,
                        className: t,
                        children: (0, a.jsx)(c.default, {
                            className: S.spinnerVideo
                        })
                    })
                },
                h = e => {
                    let t, {
                        online: s,
                        total: n,
                        className: r,
                        flat: d,
                        textClassName: o
                    } = e;
                    return null == n ? null : (null != s && s > 0 && (t = (0, a.jsxs)("div", {
                        className: l(S.pill, S.pillOnline, d && S.pillFlat),
                        children: [(0, a.jsx)("i", {
                            className: S.pillIconOnline
                        }), (0, a.jsx)(i.Text, {
                            tag: "span",
                            className: l(S.pillMessage, o),
                            variant: "text-sm/normal",
                            children: L.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: s
                            })
                        })]
                    })), (0, a.jsxs)(u.default, {
                        justify: u.default.Justify.CENTER,
                        className: r,
                        children: [t, (0, a.jsxs)("div", {
                            className: l(S.pill, d && S.pillFlat),
                            children: [(0, a.jsx)("i", {
                                className: S.pillIconTotal
                            }), (0, a.jsx)(i.Text, {
                                tag: "span",
                                className: l(S.pillMessage, o),
                                variant: "text-sm/normal",
                                children: L.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                    count: n
                                })
                            })]
                        })]
                    }))
                },
                x = e => {
                    let {
                        user: t
                    } = e;
                    return null == t ? null : (0, a.jsxs)("div", {
                        className: S.joiningAs,
                        children: [(0, a.jsx)(i.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: L.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                        }), (0, a.jsx)(m, {
                            className: S.joiningAsAvatar,
                            src: t.getAvatarURL(void 0, 24),
                            size: i.AvatarSizes.SIZE_24,
                            "aria-label": t.username
                        }), (0, a.jsx)(i.Text, {
                            className: S.joiningAsUsername,
                            tag: "span",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: t.username
                        })]
                    })
                },
                U = e => {
                    let {
                        className: t
                    } = e;
                    return (0, a.jsxs)(R, {
                        className: t,
                        children: [(0, a.jsx)(C, {
                            onClick: () => window.open((0, E.getCurrentPlatformDownloadURL)()),
                            children: L.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                                platform: (0, E.getPlatformReadableName)()
                            })
                        }), (0, a.jsx)(O, {
                            className: S.downloadButtonSubtext,
                            children: L.default.Messages.INCOMPATIBLE_BROWSER.format({
                                supportedBrowserURL: T.default.getArticleURL(f.HelpdeskArticles.SUPPORTED_BROWSERS)
                            })
                        })]
                    })
                };
            var b = e => {
                let {
                    className: t,
                    contentClassName: s,
                    tag: n = "section",
                    onSubmit: i,
                    children: r,
                    expanded: u = !1,
                    theme: d = f.ThemeTypes.DARK,
                    style: o
                } = e;
                return (0, a.jsxs)(n, {
                    "data-theme": d,
                    onSubmit: i,
                    style: o,
                    className: l(u ? S.authBoxExpanded : S.authBox, (0, _.getThemeClass)(d), t),
                    children: [(0, a.jsx)("div", {
                        className: S.discordLogo
                    }), (0, a.jsx)("div", {
                        className: l(S.centeringWrapper, s),
                        children: r
                    })]
                })
            }
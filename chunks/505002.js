            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return B
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("917351"),
                o = s.n(r),
                d = s("446674"),
                u = s("77078"),
                c = s("269936"),
                E = s("405645"),
                _ = s("692038"),
                T = s("815297"),
                I = s("291655"),
                S = s("766274"),
                N = s("957255"),
                g = s("439932"),
                f = s("766419"),
                A = s("50693"),
                L = s("243863"),
                m = s("91816"),
                C = s("902750"),
                O = s("449804"),
                h = s("53948"),
                R = s("49111"),
                D = s("782340"),
                M = s("131706"),
                G = s("219638"),
                x = s("452593"),
                p = s("572701");
            let U = (0, c.makeLazy)({
                    createPromise: () => s.el("282585").then(s.bind(s, "282585")),
                    webpackId: "282585"
                }),
                v = o.debounce((e, t) => (0, f.updateRoleName)(e, t), 200);

            function j(e) {
                let {
                    role: t,
                    disabled: s
                } = e, [l, i] = n.useState(t.name);
                return n.useEffect(() => {
                    i(t.name)
                }, [t.name]), (0, a.jsx)(u.FormItem, {
                    title: D.default.Messages.FORM_LABEL_ROLE_NAME,
                    required: !0,
                    children: (0, a.jsx)(u.TextInput, {
                        type: "text",
                        value: l,
                        maxLength: R.ROLE_NAME_MAX_LENGTH,
                        onChange: function(e) {
                            i(e), v(t.id, e)
                        },
                        disabled: s
                    })
                })
            }

            function P(e) {
                let {
                    role: t,
                    disabled: s
                } = e;
                return (0, a.jsxs)(u.FormItem, {
                    className: M.colorPicker,
                    title: D.default.Messages.FORM_LABEL_ROLE_COLOR,
                    required: !0,
                    children: [(0, a.jsx)(u.FormText, {
                        className: M.colorDescription,
                        children: D.default.Messages.ROLE_COLOR_HELP
                    }), (0, a.jsx)(U, {
                        defaultColor: R.DEFAULT_ROLE_COLOR,
                        colors: R.ROLE_COLORS,
                        value: t.color,
                        disabled: s,
                        onChange: e => {
                            var s, a;
                            return s = t, a = e, void(s.color !== a && (a !== R.DEFAULT_ROLE_COLOR || 0 !== s.color) && (a === R.DEFAULT_ROLE_COLOR && (a = 0), (0, f.updateRoleColor)(s.id, a)))
                        },
                        customPickerPosition: "right"
                    }, t.id)]
                })
            }

            function y(e) {
                var t, l;
                let {
                    role: i,
                    guildId: r
                } = e;
                let o = (l = D.default.Messages.ROLE_SAMPLE_MESSAGE, n.useMemo(() => {
                        let e = (0, _.createMessageRecord)({
                            ...(0, T.default)({
                                channelId: "1337",
                                content: l
                            }),
                            state: R.MessageStates.SENT,
                            id: "31337"
                        });
                        return e.author = new S.default({
                            id: "313337",
                            username: D.default.Messages.WUMPUS,
                            discriminator: "0000",
                            bot: !1
                        }), e.author.getAvatarURL = () => s("457737"), e
                    }, [l])),
                    d = {
                        nick: o.author.username,
                        colorString: null !== (t = i.colorString) && void 0 !== t ? t : void 0
                    },
                    c = {
                        src: x,
                        name: i.name
                    },
                    N = {
                        src: p,
                        name: i.name
                    },
                    f = (0, E.useRoleIconForPreview)(r, i);
                return (0, a.jsx)(u.FocusBlock, {
                    children: (0, a.jsxs)("div", {
                        className: M.previewContainer,
                        "aria-hidden": !0,
                        children: [(0, a.jsx)("div", {
                            className: (0, g.getThemeClass)(R.ThemeTypes.LIGHT),
                            children: (0, a.jsx)("div", {
                                className: M.messageContainer,
                                children: (0, a.jsx)(I.default, {
                                    author: d,
                                    message: o,
                                    roleIcon: null != f ? f : N,
                                    isGroupStart: !0
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: (0, g.getThemeClass)(R.ThemeTypes.DARK),
                            children: (0, a.jsx)("div", {
                                className: M.messageContainer,
                                children: (0, a.jsx)(I.default, {
                                    author: d,
                                    message: o,
                                    roleIcon: null != f ? f : c,
                                    isGroupStart: !0
                                })
                            })
                        })]
                    })
                })
            }

            function b(e) {
                let {
                    role: t,
                    disabled: s
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.FormSwitch, {
                        disabled: s,
                        value: t.hoist,
                        onChange: e => (0, f.toggleRoleSettings)(t.id, e, t.mentionable),
                        hideBorder: !0,
                        children: D.default.Messages.FORM_LABEL_HOIST_DESCRIPTION
                    }), (0, a.jsx)(u.FormDivider, {
                        className: M.divider
                    }), (0, a.jsx)(u.FormSwitch, {
                        disabled: s,
                        value: t.mentionable,
                        onChange: e => (0, f.toggleRoleSettings)(t.id, t.hoist, e),
                        note: D.default.Messages.FORM_LABEL_MENTIONABLE_DESCRIPTION,
                        hideBorder: !0,
                        children: D.default.Messages.FORM_LABEL_MENTIONABLE.format()
                    })]
                })
            }

            function B(e) {
                let {
                    guild: t,
                    role: s,
                    locked: n,
                    setSelectedSection: l
                } = e, r = s.id === (null == t ? void 0 : t.id), o = n || r, c = (0, d.useStateFromStores)([N.default], () => N.default.canImpersonateRole(t, s)), {
                    headerHeight: E,
                    headerRef: _
                } = (0, A.default)(0), {
                    scrolledToTop: T,
                    handleScroll: I
                } = (0, m.useScrolledToTop)();
                return (0, a.jsx)(u.AdvancedScrollerAuto, {
                    className: M.scroller,
                    style: {
                        scrollPaddingTop: E
                    },
                    onScroll: I,
                    children: (0, a.jsxs)("div", {
                        className: G.contentWidth,
                        children: [(0, a.jsx)("div", {
                            className: i(G.header, G.stickyHeader, {
                                [G.stickyHeaderElevated]: !T
                            }),
                            ref: _,
                            children: (0, a.jsx)(m.default, {
                                guild: t,
                                role: s,
                                selectedSection: h.GuildSettingsRoleEditSections.DISPLAY,
                                setSelectedSection: l
                            })
                        }), (0, a.jsx)(j, {
                            role: s,
                            disabled: o
                        }), (0, a.jsx)("div", {
                            className: M.noticeContainer,
                            children: (0, a.jsx)(O.default, {
                                role: s
                            })
                        }), (0, a.jsx)(u.FormDivider, {
                            className: M.divider
                        }), (0, a.jsx)(P, {
                            role: s,
                            disabled: o
                        }), (0, a.jsx)(L.default, {
                            guild: t,
                            disabled: o,
                            role: s
                        }), (0, a.jsx)(y, {
                            role: s,
                            guildId: t.id
                        }), (0, a.jsx)(u.FormDivider, {
                            className: M.divider
                        }), (0, a.jsx)(b, {
                            role: s,
                            disabled: o
                        }), c ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(u.FormDivider, {
                                className: M.divider
                            }), (0, a.jsx)(C.ImpersonateRoleDescription, {
                                guildId: t.id,
                                role: s
                            })]
                        }) : null]
                    })
                })
            }
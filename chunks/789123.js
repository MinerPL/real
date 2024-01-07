            "use strict";
            s.r(t), s.d(t, {
                GuildSettingsTemplateMetadataStore: function() {
                    return D
                },
                GuildSettingsTemplateNotice: function() {
                    return M
                },
                default: function() {
                    return G
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("446674"),
                u = s("669491"),
                c = s("77078"),
                E = s("913144"),
                _ = s("913801"),
                T = s("45299"),
                I = s("448993"),
                S = s("883069"),
                N = s("569808"),
                g = s("658329"),
                f = s("578706"),
                A = s("381546"),
                L = s("900938"),
                m = s("579033"),
                C = s("782340"),
                O = s("282567"),
                h = s("926622");
            class R extends d.default.Store {
                getTemplate() {
                    let e = L.default.getProps().guild;
                    if (null == e) return null;
                    let t = N.default.getForGuild(e.id);
                    return null != t && t.state !== m.GuildTemplateStates.RESOLVING ? t : null
                }
                showNotice() {
                    let e = this.getTemplate();
                    return null != e && null != this.name && "" !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description)
                }
                constructor(...e) {
                    super(...e), this.name = "", this.description = "", this.error = null, this.reset = () => {
                        let e = this.getTemplate();
                        if (null != e) {
                            var t, s;
                            this.name = null !== (t = e.name) && void 0 !== t ? t : this.name, this.description = null !== (s = e.description) && void 0 !== s ? s : this.description
                        } else this.name = "", this.description = "";
                        this.emitChange()
                    }, this.setName = e => {
                        this.name = e, this.emitChange()
                    }, this.setDescription = e => {
                        this.description = e, this.emitChange()
                    }, this.setError = e => {
                        this.error = e, this.emitChange()
                    }, this.save = async () => {
                        await S.default.updateGuildTemplate(L.default.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange()
                    }
                }
            }
            R.displayName = "GuildSettingsTemplateMetadataStore_";
            let D = new R(E.default);

            function M() {
                let [e, t] = n.useState(!1), s = async () => {
                    t(!0), await D.save(), t(!1)
                };
                return (0, a.jsx)(T.default, {
                    submitting: e,
                    onReset: D.reset,
                    onSave: s
                })
            }

            function G() {
                return (0, a.jsx)(c.FormSection, {
                    className: h.marginBottom4,
                    children: (0, a.jsxs)(c.HeadingLevel, {
                        component: (0, a.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H1,
                            children: C.default.Messages.GUILD_TEMPLATES
                        }),
                        children: [(0, a.jsx)(c.FormText, {
                            className: h.marginBottom20,
                            type: c.FormTextTypes.DESCRIPTION,
                            children: C.default.Messages.GUILD_TEMPLATE_SETTINGS_DESCRIPTION.format()
                        }), (0, a.jsx)(p, {}), (0, a.jsx)(c.FormDivider, {
                            className: O.divider
                        }), (0, a.jsx)(x, {})]
                    })
                })
            }

            function x() {
                let {
                    guild: e
                } = L.default.getProps();
                o(null != e, "guild cannot be null");
                let t = (0, d.useStateFromStores)([D], () => D.error),
                    [s, l] = n.useState(!0),
                    {
                        loading: i,
                        guildTemplate: r
                    } = function(e) {
                        let [t, s] = n.useState(!0);
                        n.useEffect(() => {
                            (async function t() {
                                s(!0);
                                try {
                                    await S.default.loadTemplatesForGuild(e), s(!1)
                                } catch (e) {
                                    D.setError(new I.APIError(e))
                                }
                            })()
                        }, [e]);
                        let a = (0, d.useStateFromStores)([N.default], () => N.default.getForGuild(e), [e]);
                        return {
                            loading: t,
                            guildTemplate: a
                        }
                    }(e.id);
                if (n.useEffect(() => {
                        if (s && !i) {
                            if (null != r) {
                                var e, t;
                                D.setName(null !== (e = r.name) && void 0 !== e ? e : ""), D.setDescription(null !== (t = r.description) && void 0 !== t ? t : "")
                            }
                            l(!1)
                        }
                    }, [s, r, i]), n.useEffect(() => () => {
                        D.reset(), D.setError(null)
                    }, []), s) return null != t ? (0, a.jsx)(c.Text, {
                    color: "text-danger",
                    variant: "text-sm/normal",
                    children: t.message
                }) : (0, a.jsx)(c.Spinner, {
                    className: h.marginTop40
                });
                let u = null != t && null == t.getFirstFieldErrorMessage("name") && null == t.getFirstFieldErrorMessage("description");
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(v, {}), (0, a.jsx)(j, {
                        guild: e,
                        guildTemplate: r
                    }), u ? (0, a.jsx)(c.Text, {
                        className: h.marginTop8,
                        color: "text-danger",
                        variant: "text-sm/normal",
                        children: t.getAnyErrorMessage()
                    }) : null]
                })
            }

            function p() {
                return (0, a.jsxs)("div", {
                    className: O.descriptionBox,
                    children: [(0, a.jsxs)("div", {
                        className: O.descriptionSection,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "eyebrow",
                            children: C.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WILL_COPY
                        }), (0, a.jsxs)("div", {
                            className: O.descriptionRow,
                            children: [(0, a.jsx)(f.default, {
                                className: O.descriptionIcon,
                                color: u.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                            }), C.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_CHANNELS]
                        }), (0, a.jsxs)("div", {
                            className: O.descriptionRow,
                            children: [(0, a.jsx)(f.default, {
                                className: O.descriptionIcon,
                                color: u.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                            }), C.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_ROLES]
                        }), (0, a.jsxs)("div", {
                            className: O.descriptionRow,
                            children: [(0, a.jsx)(f.default, {
                                className: O.descriptionIcon,
                                color: u.default.unsafe_rawColors.GREEN_360.css,
                                backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                            }), C.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_SETTINGS]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: O.descriptionSection,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "eyebrow",
                            children: C.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_WONT_COPY
                        }), (0, a.jsxs)("div", {
                            className: O.descriptionRow,
                            children: [(0, a.jsx)(A.default, {
                                className: O.descriptionIcon,
                                color: u.default.unsafe_rawColors.RED_400.css,
                                backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                            }), C.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MESSAGES]
                        }), (0, a.jsxs)("div", {
                            className: O.descriptionRow,
                            children: [(0, a.jsx)(A.default, {
                                className: O.descriptionIcon,
                                color: u.default.unsafe_rawColors.RED_400.css,
                                backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                            }), C.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_MEMBERS]
                        }), (0, a.jsxs)("div", {
                            className: O.descriptionRow,
                            children: [(0, a.jsx)(A.default, {
                                className: O.descriptionIcon,
                                color: u.default.unsafe_rawColors.RED_400.css,
                                backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                            }), C.default.Messages.GUILD_TEMPLATES_FORM_DESCRIPTION_PERKS]
                        })]
                    })]
                })
            }

            function U(e) {
                let {
                    cancel: t,
                    confirm: s
                } = e;
                return (0, a.jsx)(c.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: C.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
                    confirmText: C.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE,
                    cancelText: C.default.Messages.CANCEL,
                    onCancel: t,
                    onConfirm: s,
                    children: (0, a.jsx)(c.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        children: C.default.Messages.GUILD_TEMPLATES_DELETE_DESCRIPTION
                    })
                })
            }

            function v() {
                let e = (0, d.useStateFromStores)([D], () => D.name),
                    t = (0, d.useStateFromStores)([D], () => D.description),
                    s = (0, d.useStateFromStores)([D], () => D.error);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.FormItem, {
                        className: h.marginBottom20,
                        title: C.default.Messages.GUILD_TEMPLATES_FORM_LABEL_NAME,
                        error: null == s ? void 0 : s.getFirstFieldErrorMessage("name"),
                        children: (0, a.jsx)(c.TextInput, {
                            value: e,
                            onChange: e => D.setName(e),
                            placeholder: C.default.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_NAME,
                            maxLength: 100
                        })
                    }), (0, a.jsx)(c.FormItem, {
                        className: h.marginBottom20,
                        title: C.default.Messages.GUILD_TEMPLATES_FORM_LABEL_DESCRIPTION,
                        error: null == s ? void 0 : s.getFirstFieldErrorMessage("description"),
                        children: (0, a.jsx)(c.TextArea, {
                            value: t,
                            onChange: e => D.setDescription(e),
                            placeholder: C.default.Messages.GUILD_TEMPLATES_FORM_PLACEHOLDER_DESCRIPTION,
                            maxLength: 120
                        })
                    })]
                })
            }

            function j(e) {
                let {
                    guild: t,
                    guildTemplate: s
                } = e;
                return null == s ? (0, a.jsx)(P, {
                    guild: t
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.FormItem, {
                        title: C.default.Messages.GUILD_TEMPLATES_FORM_LABEL_LINK,
                        children: (0, a.jsx)(_.default, {
                            buttonLook: c.Button.Looks.FILLED,
                            buttonColor: c.Button.Colors.BRAND,
                            value: (0, g.default)(s.code)
                        })
                    }), s.isDirty && (0, a.jsx)(c.Text, {
                        color: "text-warning",
                        className: h.marginTop8,
                        variant: "text-sm/normal",
                        children: C.default.Messages.GUILD_TEMPLATES_UNSYNCED_WARNING
                    }), (0, a.jsxs)("div", {
                        className: i(h.marginTop20, O.buttonContainer),
                        children: [s.isDirty && (0, a.jsx)(y, {
                            guild: t,
                            guildTemplate: s
                        }), (0, a.jsxs)("div", {
                            className: O.rightButtonContainer,
                            children: [(0, a.jsx)(b, {
                                guild: t,
                                guildTemplate: s
                            }), (0, a.jsx)(B, {
                                guildTemplate: s
                            })]
                        })]
                    }), s.isDirty && (0, a.jsx)("div", {
                        className: O.lastSync,
                        children: C.default.Messages.GUILD_TEMPLATES_LAST_SYNC.format({
                            timestamp: new Date(s.updatedAt)
                        })
                    })]
                })
            }

            function P(e) {
                var t;
                let {
                    guild: s
                } = e, l = (0, d.useStateFromStores)([D], () => D.name), [i, r] = n.useState(!1), o = async () => {
                    D.setError(null), r(!0);
                    try {
                        await S.default.createGuildTemplate(s.id, D.name, D.description)
                    } catch (e) {
                        D.setError(new I.APIError(e))
                    }
                    r(!1)
                };
                return (0, a.jsx)(c.Button, {
                    submitting: i,
                    disabled: !(null != (t = l) && t.trim().length >= 2),
                    color: c.Button.Colors.BRAND,
                    onClick: o,
                    children: C.default.Messages.GUILD_TEMPLATES_CREATE_LINK
                })
            }

            function y(e) {
                let {
                    guild: t,
                    guildTemplate: s
                } = e, [l, i] = n.useState(!1), r = async () => {
                    D.setError(null), i(!0);
                    try {
                        await S.default.syncGuildTemplate(t.id, s.code)
                    } catch (e) {
                        D.setError(new I.APIError(e))
                    }
                    i(!1)
                };
                return (0, a.jsx)(c.Button, {
                    submitting: l,
                    className: O.button,
                    onClick: r,
                    children: C.default.Messages.GUILD_TEMPLATES_SYNC_TEMPLATE
                })
            }

            function b(e) {
                let {
                    guild: t,
                    guildTemplate: s
                } = e, [l, i] = n.useState(!1), r = async () => {
                    D.setError(null);
                    try {
                        await S.default.deleteGuildTemplate(t.id, s.code), D.setName(""), D.setDescription("")
                    } catch (e) {
                        D.setError(new I.APIError(e))
                    }
                    i(!1)
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.Button, {
                        look: c.Button.Looks.OUTLINED,
                        className: O.button,
                        color: c.Button.Colors.RED,
                        onClick: () => i(!0),
                        children: C.default.Messages.GUILD_TEMPLATES_DELETE_TEMPLATE
                    }), l ? (0, a.jsx)(U, {
                        confirm: r,
                        cancel: () => i(!1)
                    }) : null]
                })
            }

            function B(e) {
                let {
                    guildTemplate: t
                } = e;
                return (0, a.jsx)(c.Button, {
                    color: c.Button.Colors.PRIMARY,
                    className: O.button,
                    onClick: () => (0, c.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("843456").then(s.bind(s, "843456"));
                        return s => (0, a.jsx)(e, {
                            ...s,
                            guildTemplate: t
                        })
                    }),
                    children: C.default.Messages.GUILD_TEMPLATES_PREVIEW_TEMPLATE
                })
            }
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("446674"),
                r = s("77078"),
                o = s("629109"),
                d = s("79112"),
                u = s("278108"),
                c = s("42887"),
                S = s("145131"),
                E = s("476765"),
                f = s("773336"),
                m = s("597870"),
                T = s("49111"),
                _ = s("782340"),
                g = s("871940"),
                h = s("926622");
            let I = !f.isPlatformEmbedded,
                N = (0, E.uid)();

            function p(e) {
                let {
                    value: t
                } = e;
                t === T.InputModes.PUSH_TO_TALK && I && (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await s.el("135230").then(s.bind(s, "135230"));
                    return t => (0, a.jsx)(e, {
                        title: _.default.Messages.PTT_LIMITED_TITLE,
                        confirmText: _.default.Messages.DOWNLOAD,
                        cancelText: _.default.Messages.OKAY,
                        onConfirm: () => (0, m.openDownloadAppsModal)("PTT Limited Modal"),
                        body: _.default.Messages.PTT_LIMITED_BODY,
                        ...t
                    })
                }), o.default.setMode(t)
            }

            function C(e) {
                return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), " ms")
            }

            function A(e) {
                let t, {
                        inputMode: s
                    } = e,
                    {
                        shortcut: n,
                        delay: E
                    } = (0, i.useStateFromStoresObject)([c.default], () => c.default.getModeOptions());
                return t = f.isPlatformEmbedded || s !== T.InputModes.PUSH_TO_TALK ? (0, a.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: l(g.pttToolsMessage, h.marginBottom8),
                    children: _.default.Messages.USER_SETTINGS_VOICE_ADD_MULTIPLE.format({
                        onClick: () => d.default.setSection(T.UserSettingsSections.KEYBINDS)
                    })
                }) : (0, a.jsx)(r.FormText, {
                    type: r.FormText.Types.DESCRIPTION,
                    className: l(g.pttToolsMessage, g.pttToolsWarning, h.marginBottom8),
                    children: _.default.Messages.PTT_LIMITED_WARNING.format({
                        onDownloadClick: () => (0, m.openDownloadAppsModal)("Help Text PTT")
                    })
                }), (0, a.jsxs)("div", {
                    className: g.pttTools,
                    children: [(0, a.jsxs)(S.default, {
                        children: [(0, a.jsx)(S.default.Child, {
                            basis: "50%",
                            children: (0, a.jsx)(r.FormItem, {
                                title: _.default.Messages.FORM_LABEL_SHORTCUT,
                                children: (0, a.jsx)(u.default, {
                                    defaultValue: n,
                                    onChange: e => o.default.setMode(s, {
                                        shortcut: e
                                    })
                                })
                            })
                        }), (0, a.jsx)(S.default.Child, {
                            basis: "50%",
                            children: (0, a.jsxs)(r.FormItem, {
                                children: [(0, a.jsx)(r.FormTitle, {
                                    id: N,
                                    tag: r.FormTitleTags.H5,
                                    className: h.marginBottom8,
                                    children: _.default.Messages.INPUT_MODE_PTT_RELEASE_DELAY
                                }), (0, a.jsx)(r.Slider, {
                                    initialValue: E,
                                    onValueChange: e => o.default.setMode(s, {
                                        delay: e
                                    }),
                                    onValueRender: C,
                                    maxValue: T.MAX_PTT_RELEASE_DELAY,
                                    "aria-labelledby": N
                                })]
                            })
                        })]
                    }), t]
                })
            }

            function O() {
                let e = (0, i.useStateFromStores)([c.default], () => c.default.getMode()),
                    t = [{
                        value: T.InputModes.VOICE_ACTIVITY,
                        name: _.default.Messages.INPUT_MODE_VAD
                    }, {
                        value: T.InputModes.PUSH_TO_TALK,
                        name: I ? _.default.Messages.INPUT_MODE_PTT_LIMITED : _.default.Messages.INPUT_MODE_PTT
                    }];
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.FormItem, {
                        title: _.default.Messages.FORM_LABEL_INPUT_MODE,
                        className: h.marginBottom20,
                        children: (0, a.jsx)(r.RadioGroup, {
                            onChange: p,
                            options: t,
                            value: e
                        })
                    }), e === T.InputModes.PUSH_TO_TALK && (0, a.jsx)(A, {
                        inputMode: e
                    })]
                })
            }
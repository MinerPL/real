            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                s = n("151426"),
                i = n("77078"),
                r = n("272030"),
                o = n("369964"),
                u = n("778588"),
                d = n("227602"),
                c = n("522049"),
                f = n("962541"),
                h = n("13798"),
                C = n("56947"),
                p = n("386045"),
                m = n("803725"),
                E = n("49111"),
                g = n("782340"),
                I = n("508170");

            function S(e) {
                (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("630950").then(n.bind(n, "630950"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }

            function _() {
                (0, m.saveClip)()
            }
            let N = e => {
                let {
                    keybindString: t,
                    children: n
                } = e, a = (e, t) => {
                    e.stopPropagation(), e.preventDefault(), null == t || t()
                };
                return (0, l.jsx)(i.Popout, {
                    shouldShow: !1,
                    position: "top",
                    align: "center",
                    renderPopout: e => {
                        let {
                            closePopout: n
                        } = e;
                        return (0, l.jsx)(o.default, {
                            dismissibleContent: s.DismissibleContent.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
                            shouldUseHorizontalButtons: !0,
                            inlineArt: !0,
                            artClassName: I.clipsEducationArt,
                            position: "top",
                            header: (0, l.jsx)("div", {
                                className: I.header,
                                children: g.default.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_TITLE.format({
                                    keybind: t,
                                    keybindHook: () => (0, l.jsx)("span", {
                                        className: I.keybindHintKeys,
                                        children: (0, l.jsx)(i.KeyCombo, {
                                            className: I.keybindShortcut,
                                            shortcut: t
                                        })
                                    })
                                })
                            }),
                            headerClassName: I.clipsEducationHeader,
                            body: (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    className: I.bodyText,
                                    children: g.default.Messages.CLIPS_ONBOARDING_CLIP_BUTTON_ACTIVITY_PANEL_COACHMARK_BODY.format({
                                        keybindHook: () => (0, l.jsx)("div", {
                                            className: I.keyCombo,
                                            children: t
                                        }),
                                        keybind: t
                                    })
                                })
                            }),
                            onClose: e => {
                                a(e, n)
                            }
                        })
                    },
                    children: () => n
                })
            };
            var T = () => {
                let e = (0, a.default)([u.default], () => u.default.hasLayers()),
                    t = (0, C.useEnableClips)(),
                    {
                        clipsEnabled: n,
                        isAtMaxSavingClipsOperations: s
                    } = (0, a.useStateFromStoresObject)([p.default], () => ({
                        clipsEnabled: p.default.getSettings().clipsEnabled,
                        isAtMaxSavingClipsOperations: p.default.getIsAtMaxSaveClipOperations()
                    })),
                    i = (0, a.default)([d.default], () => d.default.getKeybindForAction(E.GlobalKeybindActions.SAVE_CLIP));
                if (!(t && n) || null == i || e) return null;
                let r = h.toString(i.shortcut, !0);
                return (0, l.jsx)(N, {
                    keybindString: r,
                    children: (0, l.jsx)(f.default, {
                        disabled: s,
                        tooltipText: null != i ? g.default.Messages.CLIPS_SAVE_CLIP_TOOLTIP.format({
                            hotkey: h.toString(null == i ? void 0 : i.shortcut, !0)
                        }) : g.default.Messages.CLIPS_EDIT_SAVE_CLIP,
                        onClick: _,
                        onContextMenu: S,
                        icon: c.default
                    })
                })
            }
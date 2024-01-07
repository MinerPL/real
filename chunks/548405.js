            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var a = l("37983"),
                n = l("884691"),
                i = l("414456"),
                s = l.n(i),
                r = l("65597"),
                o = l("77078"),
                d = l("79112"),
                u = l("227602"),
                c = l("13798"),
                f = l("386045"),
                p = l("49111"),
                m = l("782340"),
                h = l("518677");

            function E(e) {
                let {
                    isEmptyBecauseQuery: t,
                    closePopout: l
                } = e, i = (0, r.default)([u.default], () => u.default.getKeybindForAction(p.GlobalKeybindActions.SAVE_CLIP)), E = (0, r.default)([f.default], () => f.default.getSettings().clipsEnabled), v = t ? h.noSearchResultsImage : h.noClipsImage, _ = n.useCallback(() => {
                    l(), d.default.open(p.UserSettingsSections.CLIPS)
                }, [l]), C = (() => {
                    if (!E) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_CLIPS_NOT_ENABLED.format({
                        onClick: _
                    });
                    if (t) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_MATCH_QUERY;
                    if (null == i) return m.default.Messages.CLIPS_GALLERY_NO_CLIPS_NO_KEYBIND_SET.format({
                        onClick: _
                    });
                    {
                        let e = c.toString(i.shortcut, !0);
                        return m.default.Messages.CLIPS_GALLERY_NO_CLIPS.format({
                            keybind: e,
                            keybindHook: () => (0, a.jsx)("span", {
                                className: h.keybindHintKeys,
                                children: (0, a.jsx)(o.KeyCombo, {
                                    className: h.keybindShortcut,
                                    shortcut: e
                                })
                            })
                        })
                    }
                })();
                return (0, a.jsx)("div", {
                    className: h.container,
                    children: (0, a.jsxs)("div", {
                        className: h.content,
                        children: [(0, a.jsx)("div", {
                            className: v
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-md/medium",
                            className: s(h.noClipsText, {
                                [h.noSearchResultsText]: t
                            }),
                            children: C
                        })]
                    })
                })
            }
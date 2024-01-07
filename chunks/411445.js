            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("77078"),
                i = l("79112"),
                s = l("810567"),
                r = l("522049"),
                o = l("474571"),
                d = l("311207"),
                u = l("49111"),
                c = l("782340"),
                f = l("552986");

            function p(e) {
                let {
                    filterQuery: t,
                    setFilterQuery: l,
                    onClose: p,
                    sortOrder: m,
                    setSortOrder: h
                } = e;
                return (0, a.jsxs)(n.ModalHeader, {
                    className: f.root,
                    separator: !1,
                    children: [(0, a.jsx)(r.default, {
                        className: f.icon
                    }), (0, a.jsx)(n.Heading, {
                        className: f.title,
                        variant: "heading-xxl/bold",
                        children: c.default.Messages.CLIPS
                    }), (0, a.jsx)("div", {
                        className: f.betaTag,
                        children: (0, a.jsx)(d.default, {})
                    }), (0, a.jsx)(s.default, {
                        autoFocus: !0,
                        size: s.default.Sizes.MEDIUM,
                        placeholder: c.default.Messages.SEARCH,
                        className: f.queryInput,
                        query: t,
                        onChange: l,
                        onClear: () => l("")
                    }), (0, a.jsx)(n.Select, {
                        placeholder: c.default.Messages.CLIPS_SORT_PLACEHOLDER,
                        className: f.sortInput,
                        options: [{
                            value: "descending",
                            label: c.default.Messages.CLIPS_SORT_RECENT
                        }, {
                            value: "ascending",
                            label: c.default.Messages.CLIPS_SORT_OLDEST
                        }],
                        isSelected: e => e === m,
                        select: h,
                        serialize: e => e
                    }), (0, a.jsx)(n.Button, {
                        color: n.ButtonColors.TRANSPARENT,
                        size: n.Button.Sizes.NONE,
                        className: f.settingsButton,
                        look: n.Button.Looks.FILLED,
                        onClick: () => {
                            i.default.open(u.UserSettingsSections.CLIPS), p()
                        },
                        children: (0, a.jsx)(o.default, {})
                    }), (0, a.jsx)(n.ModalCloseButton, {
                        className: f.button,
                        onClick: p
                    })]
                })
            }
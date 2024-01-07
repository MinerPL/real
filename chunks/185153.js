            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            }), s("843762");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("570697"),
                u = s("305961"),
                c = s("677099"),
                S = s("476263"),
                E = s("449008"),
                f = s("424562"),
                m = s("782340"),
                T = s("764347");

            function _(e) {
                let {
                    guildId: t,
                    className: s,
                    globalOption: l,
                    hideDivider: _ = !1,
                    onChange: g,
                    renderOptionSuffix: h
                } = e, I = (0, r.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), N = (0, r.useStateFromStores)([u.default], () => u.default.getGuilds()), p = (0, r.useStateFromStores)([f.default], () => f.default.showNotice()), C = n.useMemo(() => {
                    let e = I.map(e => {
                        let t = N[e];
                        return null == t ? null : {
                            label: t.name,
                            value: t.id
                        }
                    }).filter(E.isNotNullish);
                    return null != l && e.unshift(l), e
                }, [I, N, l]), A = n.useCallback(e => {
                    let t = (null == e ? void 0 : e.label) === (null == l ? void 0 : l.label) && (null == e ? void 0 : e.value) === (null == l ? void 0 : l.value);
                    return null == e || "" === e.value || t ? null : (0, a.jsx)(S.default, {
                        className: T.guildSelectOptionIcon,
                        guild: N[e.value],
                        size: S.default.Sizes.SMOL,
                        active: !0
                    })
                }, [N, l]);
                return (0, a.jsx)(d.default, {
                    className: i(T.section, s),
                    title: m.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_TITLE,
                    hideDivider: _,
                    forcedDivider: !0,
                    children: (0, a.jsx)(o.SearchableSelect, {
                        isDisabled: p,
                        onChange: e => {
                            if ("" === e || e === (null == l ? void 0 : l.value)) {
                                g(null);
                                return
                            }
                            let t = N[e];
                            null != t && g(t)
                        },
                        value: t,
                        options: C,
                        renderOptionPrefix: A,
                        renderOptionSuffix: h,
                        placeholder: m.default.Messages.PROFILE_CUSTOMIZATION_GUILD_SELECT_PLACEHOLDER
                    })
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("446674"),
                o = n("77078"),
                u = n("817963"),
                d = n("305961"),
                c = n("957255"),
                f = n("677099"),
                E = n("697218"),
                _ = n("476263"),
                h = n("368121"),
                m = n("427459"),
                g = n("305122"),
                p = n("235004"),
                I = n("846325"),
                S = n("782340"),
                A = n("151355");

            function N(e) {
                let {
                    availableSlots: t,
                    className: n
                } = e;
                return (0, i.jsxs)(o.Text, {
                    className: s(A.suffixNode, n),
                    variant: "text-sm/medium",
                    color: "text-primary",
                    children: [(0, i.jsx)(h.default, {
                        className: A.speakerIcon
                    }), S.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
                        slots: t
                    })]
                })
            }

            function v(e) {
                let {
                    value: t,
                    className: n,
                    onChange: l
                } = e, h = (0, a.useStateFromStoresObject)([f.default, c.default, E.default, d.default], () => {
                    let e = {};
                    for (let t of f.default.getFlattenedGuildIds()) {
                        let n = d.default.getGuild(t);
                        if (null == n) continue;
                        let i = (0, u.getManageResourcePermissions)(n, c.default, E.default);
                        i.canCreateExpressions && (e[n.id] = n)
                    }
                    return e
                }), v = (0, a.useStateFromStoresObject)([p.default], () => {
                    let e = {};
                    for (let [n, i] of Object.entries(h)) {
                        var t;
                        let r = (0, m.getAvailableSoundboardSoundCount)(null !== (t = p.default.getSoundsForGuild(n)) && void 0 !== t ? t : I.EMPTY_SOUND_LIST, i.premiumTier);
                        e[n] = r
                    }
                    return e
                }, [h]);
                r.useEffect(() => {
                    (0, g.maybeFetchSoundboardSounds)()
                }, []);
                let R = r.useMemo(() => Object.values(h).map(e => {
                        let {
                            name: t,
                            id: n
                        } = e;
                        return {
                            label: t,
                            value: n,
                            disabled: v[n] <= 0
                        }
                    }), [h, v]),
                    C = r.useCallback(e => null == e || "" === e.value ? null : (0, i.jsx)(_.default, {
                        className: s(A.guildSelectOptionIcon, {
                            [A.disabledOption]: e.disabled
                        }),
                        guild: h[e.value],
                        size: _.default.Sizes.SMOL,
                        active: !0
                    }), [h]),
                    T = r.useCallback(e => {
                        let t = null == e ? void 0 : e.value;
                        return null == t || "" === t ? null : (0, i.jsx)(N, {
                            className: s({
                                [A.disabledOption]: null == e ? void 0 : e.disabled
                            }),
                            availableSlots: v[t]
                        })
                    }, [v]),
                    O = r.useCallback(e => (0, i.jsx)("div", {
                        className: s({
                            [A.disabledOption]: e.disabled
                        }),
                        children: e.label
                    }), []),
                    L = r.useCallback(e => {
                        !(v[e] <= 0) && l(e)
                    }, [v, l]),
                    D = (() => {
                        let e = v[null != t ? t : ""];
                        return null == e || e > 0 ? t : void 0
                    })();
                return (0, i.jsx)(o.SearchableSelect, {
                    className: n,
                    onChange: L,
                    value: D,
                    multi: !1,
                    options: R,
                    renderOptionPrefix: C,
                    renderOptionSuffix: T,
                    renderOptionLabel: O,
                    placeholder: 0 === R.length ? S.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : S.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
                })
            }
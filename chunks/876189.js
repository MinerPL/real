            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
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
                E = n("677099"),
                f = n("697218"),
                _ = n("476263"),
                I = n("368121"),
                h = n("427459"),
                m = n("305122"),
                A = n("235004"),
                N = n("846325"),
                S = n("782340"),
                g = n("151355");

            function p(e) {
                let {
                    availableSlots: t,
                    className: n
                } = e;
                return (0, i.jsxs)(o.Text, {
                    className: s(g.suffixNode, n),
                    variant: "text-sm/medium",
                    color: "text-primary",
                    children: [(0, i.jsx)(I.default, {
                        className: g.speakerIcon
                    }), S.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
                        slots: t
                    })]
                })
            }

            function T(e) {
                let {
                    value: t,
                    className: n,
                    onChange: l
                } = e, I = (0, a.useStateFromStoresObject)([E.default, c.default, f.default, d.default], () => {
                    let e = {};
                    for (let t of E.default.getFlattenedGuildIds()) {
                        let n = d.default.getGuild(t);
                        if (null == n) continue;
                        let i = (0, u.getManageResourcePermissions)(n, c.default, f.default);
                        i.canCreateExpressions && (e[n.id] = n)
                    }
                    return e
                }), T = (0, a.useStateFromStoresObject)([A.default], () => {
                    let e = {};
                    for (let [n, i] of Object.entries(I)) {
                        var t;
                        let r = (0, h.getAvailableSoundboardSoundCount)(null !== (t = A.default.getSoundsForGuild(n)) && void 0 !== t ? t : N.EMPTY_SOUND_LIST, i.premiumTier);
                        e[n] = r
                    }
                    return e
                }, [I]);
                r.useEffect(() => {
                    (0, m.maybeFetchSoundboardSounds)()
                }, []);
                let C = r.useMemo(() => Object.values(I).map(e => {
                        let {
                            name: t,
                            id: n
                        } = e;
                        return {
                            label: t,
                            value: n,
                            disabled: T[n] <= 0
                        }
                    }), [I, T]),
                    R = r.useCallback(e => null == e || "" === e.value ? null : (0, i.jsx)(_.default, {
                        className: s(g.guildSelectOptionIcon, {
                            [g.disabledOption]: e.disabled
                        }),
                        guild: I[e.value],
                        size: _.default.Sizes.SMOL,
                        active: !0
                    }), [I]),
                    O = r.useCallback(e => {
                        let t = null == e ? void 0 : e.value;
                        return null == t || "" === t ? null : (0, i.jsx)(p, {
                            className: s({
                                [g.disabledOption]: null == e ? void 0 : e.disabled
                            }),
                            availableSlots: T[t]
                        })
                    }, [T]),
                    v = r.useCallback(e => (0, i.jsx)("div", {
                        className: s({
                            [g.disabledOption]: e.disabled
                        }),
                        children: e.label
                    }), []),
                    L = r.useCallback(e => {
                        !(T[e] <= 0) && l(e)
                    }, [T, l]),
                    D = (() => {
                        let e = T[null != t ? t : ""];
                        return null == e || e > 0 ? t : void 0
                    })();
                return (0, i.jsx)(o.SearchableSelect, {
                    className: n,
                    onChange: L,
                    value: D,
                    multi: !1,
                    options: C,
                    renderOptionPrefix: R,
                    renderOptionSuffix: O,
                    renderOptionLabel: v,
                    placeholder: 0 === C.length ? S.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : S.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
                })
            }
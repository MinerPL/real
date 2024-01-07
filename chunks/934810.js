            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("430568"),
                o = s("685665"),
                d = s("185153"),
                u = s("570697"),
                c = s("305122"),
                S = s("235004"),
                E = s("78581"),
                f = s("675961"),
                m = s("561847"),
                T = s("555158"),
                _ = s("216422"),
                g = s("368121"),
                h = s("701909"),
                I = s("374363"),
                N = s("267823"),
                p = s("49111"),
                C = s("846325"),
                A = s("782340"),
                O = s("60351"),
                x = s("926622");

            function M(e) {
                return (0, l.useStateFromStores)([S.default], () => {
                    if (null == e) return null;
                    let {
                        guildId: t,
                        soundId: s
                    } = e;
                    return S.default.getSound(t === C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID ? C.DEFAULT_SOUND_GUILD_ID : t, s)
                })
            }

            function R() {
                let {
                    analyticsLocations: e
                } = (0, o.default)(), [t, s] = n.useState(C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID), r = (0, f.useCustomJoinSound)(t), g = M(r), I = (0, l.useStateFromStores)([S.default], () => S.default.hasFetchedAllSounds()), R = (null == r ? void 0 : r.type) === f.CustomSoundType.GLOBAL, L = I && null != r && null == g;
                n.useEffect(() => {
                    L && (0, E.trackCustomCallSoundExternallyDeleted)({
                        location: e
                    })
                }, [L, e]), n.useEffect(() => {
                    (0, c.maybeFetchSoundboardSounds)()
                }, []);
                let D = n.useCallback((e, t) => {
                    var s;
                    let {
                        inDropdown: n
                    } = t;
                    return n ? (0, a.jsx)(v, {
                        guildId: null !== (s = null == e ? void 0 : e.value) && void 0 !== s ? s : ""
                    }) : null
                }, []);
                return (0, a.jsxs)(i.FormSection, {
                    className: O.container,
                    tag: i.FormTitleTags.H1,
                    titleClassName: x.marginBottom16,
                    title: A.default.Messages.SOUNDBOARD,
                    children: [(0, a.jsx)(N.default, {}), (0, a.jsx)(i.FormDivider, {
                        className: O.callSoundsDivider
                    }), (0, a.jsx)(i.Heading, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        className: O.callSoundsTitle,
                        children: A.default.Messages.CALL_SOUNDS_SETTINGS
                    }), (0, a.jsx)(i.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: A.default.Messages.CALL_SOUNDS_SETTINGS_DESCRIPTION_2.format({
                            helpdeskArticle: h.default.getArticleURL(p.HelpdeskArticles.SOUNDBOARD)
                        })
                    }), (0, a.jsx)(d.default, {
                        guildId: t,
                        className: O.guildSelector,
                        globalOption: {
                            label: A.default.Messages.CALL_SOUNDS_SETTINGS_GLOBAL_GUILD_SEARCH,
                            value: C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID
                        },
                        onChange: e => s(null == e ? C.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID : e.id),
                        renderOptionSuffix: D,
                        hideDivider: !0
                    }), (0, a.jsxs)(u.default, {
                        className: x.marginTop20,
                        title: A.default.Messages.CALL_SOUNDS_SETTINGS_JOIN_SOUND.format({
                            nitroWheelHook: () => (0, a.jsx)(_.default, {
                                className: O.nitroWheel
                            })
                        }),
                        forcedDivider: !0,
                        children: [(0, a.jsx)(m.default, {
                            sound: g,
                            isGlobal: R,
                            onSelect: s => {
                                null == s ? (0, E.removeCustomJoinSound)(t, e) : (0, E.updateCustomJoinSound)(t, s, e)
                            }
                        }), L && (0, a.jsx)(T.default, {
                            className: O.notice,
                            messageType: T.HelpMessageTypes.WARNING,
                            children: A.default.Messages.CALL_SOUNDS_SETTINGS_SOUND_REMOVED
                        })]
                    })]
                })
            }

            function v(e) {
                let {
                    guildId: t
                } = e, s = (0, l.useStateFromStores)([I.default], () => {
                    var e, s, a;
                    return null === (a = I.default.settings.guilds) || void 0 === a ? void 0 : null === (s = a.guilds) || void 0 === s ? void 0 : null === (e = s[t]) || void 0 === e ? void 0 : e.joinSound
                }), n = M(s);
                if (null == s || null == n) return null;
                let {
                    emojiId: o,
                    emojiName: d
                } = n, u = null != o || null != d;
                return (0, a.jsxs)("div", {
                    className: O.pill,
                    children: [u ? (0, a.jsx)(r.default, {
                        emojiId: o,
                        emojiName: d,
                        className: O.pillIcon
                    }) : (0, a.jsx)(g.default, {
                        className: O.pillIcon
                    }), (0, a.jsx)(i.Text, {
                        className: O.pillText,
                        variant: "text-xs/medium",
                        children: n.name
                    })]
                })
            }
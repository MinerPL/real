            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return $
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                r = l.n(s),
                i = l("446674"),
                u = l("77078"),
                o = l("79112"),
                d = l("299285"),
                c = l("454273"),
                f = l("56947"),
                m = l("187001"),
                S = l("504219"),
                C = l("845579"),
                E = l("42203"),
                h = l("525065"),
                _ = l("305961"),
                p = l("42887"),
                g = l("568307"),
                N = l("18494"),
                I = l("697218"),
                x = l("703370"),
                v = l("145131"),
                A = l("953109"),
                R = l("476263"),
                T = l("267675"),
                L = l("423487"),
                M = l("233437"),
                O = l("599110"),
                j = l("449008"),
                D = l("701909"),
                P = l("773336"),
                b = l("767960"),
                U = l("375202"),
                y = l("916262"),
                G = l("75974"),
                H = l("359812"),
                V = l("273405"),
                w = l("326620"),
                F = l("985997"),
                k = l("16750"),
                B = l("706530"),
                W = l("49111"),
                z = l("782340"),
                K = l("183351"),
                Y = l("770420");

            function Z(e) {
                let {
                    selectedSource: t,
                    selectSource: l,
                    sourceChanged: a,
                    onChangeSource: s
                } = e, r = (0, i.useStateFromStores)([g.default, x.default], () => (0, P.isWindows)() ? (0, U.default)(g.default, x.default) : null), o = (0, i.useStateFromStores)([d.default], () => (null == r ? void 0 : r.id) != null ? d.default.getApplication(r.id) : null), c = (0, i.useStateFromStores)([g.default], () => g.default.getRunningGames()), f = (0, i.useStateFromStoresArray)([d.default], () => c.map(e => null != e.id ? d.default.getApplication(e.id) : null).filter(j.isNotNullish), [c]), m = null;
                if (null != t ? m = t.name : null != r && (m = r.name), null == m) return null;
                let S = (0, k.default)(r, t, c),
                    C = a ? f.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === (null == S ? void 0 : S.id)
                    }) : o,
                    E = null != t && t.id.startsWith("screen") ? T.default : M.default;
                return (0, n.jsx)(u.FormItem, {
                    title: z.default.Messages.GO_LIVE_MODAL_APPLICATION_FORM_TITLE,
                    className: Y.modalContent,
                    titleClassName: Y.formItemTitleVerySlim,
                    children: (0, n.jsxs)(w.default, {
                        children: [null != C ? (0, n.jsx)(A.default, {
                            game: C,
                            size: A.default.Sizes.XSMALL,
                            className: K.selectedIcon
                        }) : (0, n.jsx)(E, {
                            className: K.selectedIcon
                        }), (0, n.jsx)("span", {
                            className: K.ellipsisText,
                            children: m
                        }), l ? (0, n.jsx)(u.Button, {
                            className: K.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: s,
                            children: z.default.Messages.CHANGE
                        }) : null]
                    })
                })
            }

            function J(e) {
                let {
                    onChange: t,
                    guildId: l
                } = e, a = (0, i.useStateFromStores)([_.default], () => _.default.getGuild(l));
                return null == a ? (t(), null) : (0, n.jsx)(u.FormItem, {
                    title: z.default.Messages.GO_LIVE_MODAL_GUILD_FORM_TITLE,
                    className: Y.modalContent,
                    titleClassName: Y.formItemTitle,
                    children: (0, n.jsxs)(w.default, {
                        children: [(0, n.jsx)(R.default, {
                            guild: a,
                            size: R.default.Sizes.SMALLER,
                            className: K.selectedIcon
                        }), (0, n.jsx)("span", {
                            className: K.ellipsisText,
                            children: a.toString()
                        }), (0, n.jsx)(u.Button, {
                            className: K.changeButton,
                            color: u.Button.Colors.PRIMARY,
                            size: u.Button.Sizes.SMALL,
                            onClick: t,
                            children: z.default.Messages.CHANGE
                        })]
                    })
                })
            }

            function X(e) {
                let {
                    text: t
                } = e;
                return (0, n.jsxs)(v.default, {
                    align: v.default.Align.CENTER,
                    className: K.warning,
                    children: [(0, n.jsx)(L.default, {
                        className: K.warningIcon
                    }), (0, n.jsx)(u.Text, {
                        color: "none",
                        variant: "text-xs/normal",
                        children: t
                    })]
                })
            }

            function Q(e) {
                let {
                    guildId: t
                } = e, l = (0, i.useStateFromStores)([h.default], () => {
                    var e;
                    return null !== (e = h.default.getMemberCount(t)) && void 0 !== e ? e : 0
                }), s = C.NotifyFriendsOnGoLive.useSetting(), o = a.useCallback((e, t) => {
                    C.NotifyFriendsOnGoLive.updateSetting(t), O.default.track(W.AnalyticEvents.NOTIFY_STREAM_SETTING_UPDATE, {
                        value: t
                    })
                }, []), d = l >= 2 && l <= B.STREAM_NOTIFY_GUILD_MAX_SIZE;
                return d ? (0, n.jsx)(u.FormItem, {
                    className: r(Y.modalContent, K.checkboxRow),
                    children: (0, n.jsx)(u.Checkbox, {
                        value: !!s,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: o,
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: z.default.Messages.GO_LIVE_MODAL_NOTIFY_FRIENDS_CHECKBOX_LABEL
                        })
                    })
                }) : null
            }

            function q(e) {
                let {
                    enabled: t,
                    onChange: l
                } = e, s = a.useCallback((e, t) => {
                    l(t)
                }, [l]);
                return (0, n.jsx)(u.FormItem, {
                    className: r(Y.modalContent, K.checkboxRow),
                    children: (0, n.jsx)(u.Checkbox, {
                        value: t,
                        type: u.Checkbox.Types.INVERTED,
                        onChange: s,
                        children: (0, n.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: z.default.Messages.GO_LIVE_MODAL_ENABLE_SCREEN_SOUNDSHARE_LABEL
                        })
                    })
                })
            }

            function $(e) {
                let {
                    selectedSource: t,
                    selectedFPS: l,
                    selectedChannelId: s,
                    selectedPreset: r,
                    selectedResolution: u,
                    sourceChanged: d,
                    guildId: C,
                    selectSource: h,
                    selectGuild: _,
                    sound: g,
                    onClose: x,
                    onChangeSelectedFPS: v,
                    onChangeSelectedResolution: A,
                    onChangeSelectedPreset: R,
                    onChangeSelectedChannelId: T,
                    onChangeSource: L,
                    onChangeAudioDevice: M,
                    onChangeGuild: O,
                    onChangeSound: j,
                    isAnimationDone: U
                } = e, w = (0, i.useStateFromStores)([N.default, E.default], () => E.default.getChannel(N.default.getVoiceChannelId())), k = (0, i.useStateFromStores)([b.default], () => b.default.GPUDriversOutdated), B = (0, i.useStateFromStores)([b.default], () => b.default.problematicGPUDriver), K = (0, i.useStateFromStores)([p.default], () => p.default.getSoundshareEnabled()), Y = (0, i.useStateFromStores)([I.default], () => I.default.getCurrentUser()), $ = (0, f.useEnableClips)(), ee = (0, f.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
                    autoTrackExposure: !$
                }), et = (0, y.default)();
                null != t && t.id.startsWith("screen") && !p.default.supportsScreenSoundshare() ? et = z.default.Messages.GO_LIVE_SCREENSHARE_NO_SOUND : null == et && p.default.supportsEnableSoundshare() && K !== W.SoundshareEnableState.ENABLED && (et = z.default.Messages.GO_LIVE_SCREENSHARE_ENABLE_FOR_SOUNDSHARE.format({
                    onVoiceSettingsClick: () => {
                        x(), o.default.open(W.UserSettingsSections.VOICE)
                    }
                }));
                let el = $ ? (0, n.jsx)(S.default, {
                        guildId: C,
                        isAnimationDone: U
                    }) : ee ? (0, n.jsx)(m.default, {}) : void 0,
                    en = !!(null == t ? void 0 : t.id.startsWith("camera")),
                    ea = null != Y && Y.verified && !Y.bot,
                    es = null != w && !(0, c.isPrivateGuildChannel)(w);
                return (0, n.jsxs)(a.Fragment, {
                    children: [en ? (0, n.jsx)(G.default, {
                        selectedSource: t,
                        onChangeVideoDeviceSource: L,
                        onChangeAudioDevice: M
                    }) : (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(Z, {
                            selectSource: h,
                            sourceChanged: d,
                            onChangeSource: L,
                            selectedSource: t
                        }), null != et ? (0, n.jsx)(X, {
                            text: et
                        }) : null, (0, P.isWindows)() && null != t && t.id.startsWith("screen") && null == et ? (0, n.jsx)(q, {
                            enabled: g,
                            onChange: j
                        }) : null]
                    }), _ && null != C ? (0, n.jsx)(J, {
                        guildId: C,
                        onChange: O
                    }) : null, null != w ? (0, n.jsx)(V.default, {
                        channel: w
                    }) : (0, n.jsx)(H.default, {
                        guildId: C,
                        selectedChannelId: s,
                        onChangeSelectedChannelId: T
                    }), null != C && ea && es ? (0, n.jsx)(Q, {
                        guildId: C
                    }) : null, k ? (0, n.jsx)(X, {
                        text: z.default.Messages.GO_LIVE_VIDEO_DRIVERS_OUTDATED
                    }) : null, B ? (0, n.jsx)(X, {
                        text: z.default.Messages.PROBLEMATIC_GPU_DRIVER_DETECTED.format({
                            helpCenterLink: D.default.getArticleURL(W.HelpdeskArticles.NVIDIA_DRIVER_ISSUES)
                        })
                    }) : null, (0, n.jsx)(F.default, {
                        selectedPreset: r,
                        selectedFPS: l,
                        selectedResolution: u,
                        guildId: C,
                        onClose: x,
                        onFPSChange: v,
                        onResolutionChange: A,
                        onPresetChange: R,
                        captureDeviceSelected: en
                    }), el]
                })
            }
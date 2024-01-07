            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return W
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("151426"),
                d = s("819855"),
                u = s("77078"),
                c = s("452804"),
                S = s("79112"),
                E = s("485328"),
                f = s("180748"),
                m = s("206230"),
                T = s("951212"),
                _ = s("714657"),
                g = s("10641"),
                h = s("692038"),
                I = s("815297"),
                N = s("574073"),
                p = s("291655"),
                C = s("697218"),
                A = s("145131"),
                O = s("476765"),
                x = s("773336"),
                M = s("161778"),
                R = s("168973"),
                v = s("845579"),
                L = s("403338"),
                D = s("449550"),
                P = s("49111"),
                j = s("994428"),
                b = s("894488"),
                U = s("782340"),
                y = s("358237"),
                B = s("926622");
            let F = {
                    COZY: "cozy",
                    COMPACT: "compact"
                },
                G = (0, O.uid)(),
                k = (0, O.uid)(),
                w = (0, O.uid)(),
                H = "1337",
                V = e => {
                    let t = 0;
                    return [(0, h.createMessageRecord)({
                        ...(0, I.default)({
                            channelId: H,
                            content: U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_1
                        }),
                        state: P.MessageStates.SENT,
                        id: "".concat(t++)
                    }), (0, h.createMessageRecord)({
                        ...(0, I.default)({
                            channelId: H,
                            content: (0, d.isThemeDark)(e) ? U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_DARK : U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_2_LIGHT
                        }),
                        state: P.MessageStates.SENT,
                        id: "".concat(t++)
                    }), (0, h.createMessageRecord)({
                        ...(0, I.default)({
                            channelId: H,
                            content: U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_3
                        }),
                        state: P.MessageStates.SENT,
                        id: "".concat(t++)
                    }), (0, h.createMessageRecord)({
                        ...(0, I.default)({
                            channelId: H,
                            content: U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_4
                        }),
                        state: P.MessageStates.SENT,
                        id: "".concat(t++)
                    }), (0, h.createMessageRecord)({
                        ...(0, I.default)({
                            channelId: H,
                            content: U.default.Messages.USER_SETTINGS_APPEARANCE_PREVIEW_MESSAGE_5
                        }),
                        state: P.MessageStates.SENT,
                        id: "".concat(t)
                    })]
                };
            class Y extends n.Component {
                renderZoomSlider() {
                    return x.isPlatformEmbedded ? (0, a.jsxs)(u.FormItem, {
                        className: B.marginTop20,
                        children: [(0, a.jsx)(u.FormTitle, {
                            id: G,
                            tag: u.FormTitleTags.H5,
                            className: B.marginBottom8,
                            children: U.default.Messages.ACCESSIBILITY_ZOOM_LEVEL_LABEL
                        }), (0, a.jsx)(u.Slider, {
                            className: i(B.marginTop20, B.marginBottom4),
                            initialValue: this.props.zoom,
                            defaultValue: P.Accessibility.ZOOM_DEFAULT,
                            markers: P.Accessibility.ZOOM_SCALES,
                            stickToMarkers: !0,
                            onValueChange: this.handleZoomChange,
                            onValueRender: this.handleSliderRender,
                            "aria-labelledby": G
                        }), (0, a.jsx)(u.FormText, {
                            type: u.FormText.Types.DESCRIPTION,
                            children: U.default.Messages.USER_SETTINGS_APPEARANCE_ZOOM_TIP.format({
                                modKey: E.default.modKey
                            })
                        })]
                    }) : null
                }
                renderFontScaleSlider() {
                    return (0, a.jsxs)(u.FormItem, {
                        className: B.marginTop20,
                        children: [(0, a.jsx)(u.FormTitle, {
                            id: k,
                            tag: u.FormTitleTags.H5,
                            className: B.marginBottom8,
                            children: U.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL
                        }), (0, a.jsx)(A.default, {
                            align: A.default.Align.CENTER,
                            children: (0, a.jsx)(u.Slider, {
                                className: i(B.marginTop20, B.marginBottom4),
                                initialValue: this.props.fontSize,
                                defaultValue: P.Accessibility.FONT_SIZE_DEFAULT,
                                markers: P.Accessibility.FONT_SIZES,
                                stickToMarkers: !0,
                                onValueChange: this.handleFontSizeChange,
                                onValueRender: this.handleSliderRenderPX,
                                onMarkerRender: this.handleSliderRenderPX,
                                getAriaValueText: this.handleSliderValueText,
                                "aria-labelledby": k
                            })
                        })]
                    })
                }
                renderMessageGroupSpacingSlider() {
                    let {
                        messageDisplayCompact: e,
                        messageGroupSpacing: t
                    } = this.props;
                    return (0, a.jsxs)(u.FormItem, {
                        className: B.marginTop20,
                        children: [(0, a.jsx)(u.FormTitle, {
                            id: w,
                            tag: u.FormTitleTags.H5,
                            className: B.marginBottom8,
                            children: U.default.Messages.ACCESSIBILITY_MESSAGE_GROUP_SPACING
                        }), (0, a.jsx)(u.Slider, {
                            className: i(B.marginTop20, B.marginBottom4),
                            initialValue: t,
                            defaultValue: e ? b.DEFAULT_COMPACT_SPACING : b.DEFAULT_COZY_SPACING,
                            markers: b.MESSAGE_GROUP_SPACING,
                            stickToMarkers: !0,
                            onValueChange: this.handleMessageSpacingChange,
                            onValueRender: this.handleSliderRenderPX,
                            onMarkerRender: this.handleSliderRenderPX,
                            getAriaValueText: this.handleSliderValueText,
                            "aria-labelledby": w
                        })]
                    })
                }
                renderPreview() {
                    let {
                        messageDisplayCompact: e,
                        theme: t,
                        messageGroupSpacing: s,
                        hideSimpleEmbedContent: n
                    } = this.props, l = (0, d.isThemeDark)(t) ? this.darkMessages : this.lightMessages;
                    return (0, a.jsx)(u.FocusBlock, {
                        children: (0, a.jsx)(u.Card, {
                            className: i(y.preview, B.marginBottom40, e ? y.compactPreview : void 0, "group-spacing-".concat(null != s ? s : e ? b.DEFAULT_COMPACT_SPACING : b.DEFAULT_COZY_SPACING)),
                            outline: !0,
                            "aria-hidden": !0,
                            children: l.map((t, s) => (0, a.jsx)(p.default, {
                                author: (0, N.getMessageAuthor)(t),
                                message: t,
                                compact: e,
                                isGroupStart: s % 2 == 0,
                                className: 0 === s ? y.firstMessage : void 0,
                                hideSimpleEmbedContent: n
                            }, t.id))
                        })
                    })
                }
                renderTheme() {
                    let {
                        theme: e,
                        useForcedColors: t,
                        darkSidebar: s,
                        gradientPreset: n
                    } = this.props;
                    return t ? (0, a.jsx)(u.FormItem, {
                        className: i(B.marginTop8, B.marginBottom40),
                        title: (0, a.jsx)("div", {
                            className: y.themeTitle,
                            children: (0, a.jsx)("div", {
                                className: y.title,
                                children: U.default.Messages.THEME
                            })
                        }),
                        children: (0, a.jsx)(u.FormText, {
                            type: u.FormText.Types.DEFAULT,
                            className: y.forcedColorsWarning,
                            children: (0, T.canEnableForcedColors)() ? U.default.Messages.THEME_DISABLED_FOR_CONTRAST_SYNC.format({
                                onClick: () => {
                                    S.default.open(P.UserSettingsSections.ACCESSIBILITY)
                                }
                            }) : U.default.Messages.THEME_DISABLED_FOR_FORCED_COLORS
                        })
                    }) : (0, a.jsxs)(u.FormItem, {
                        className: B.marginTop8,
                        title: (0, a.jsxs)("div", {
                            className: y.themeTitle,
                            children: [(0, a.jsx)("div", {
                                className: y.title,
                                children: U.default.Messages.THEME
                            }), (0, a.jsx)(L.ClientThemesSidebarButton, {})]
                        }),
                        children: [(0, a.jsx)(L.UserSettingsAppearanceClientThemes, {}), (0, a.jsx)(D.UserSettingsAppearanceInAppIcon, {}), (0, a.jsx)(u.FormSwitch, {
                            value: s && (0, d.isThemeLight)(e) && !t,
                            disabled: e !== P.ThemeTypes.LIGHT || t || null != n,
                            onChange: this.handleDarkSidebarChecked,
                            className: B.marginTop20,
                            children: U.default.Messages.ACCESSIBILITY_DARK_SIDEBAR
                        })]
                    })
                }
                renderDisplayMode() {
                    return (0, a.jsxs)(u.FormItem, {
                        title: U.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
                        className: B.marginTop8,
                        children: [(0, a.jsx)(u.RadioGroup, {
                            options: [{
                                name: U.default.Messages.COZY_MODE,
                                value: F.COZY
                            }, {
                                name: U.default.Messages.COMPACT_MODE,
                                value: F.COMPACT
                            }],
                            onChange: this.handleMessageDisplayModeChange,
                            value: this.props.messageDisplayCompact ? F.COMPACT : F.COZY
                        }), (0, a.jsx)(u.FormSwitch, {
                            value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                            disabled: !this.props.messageDisplayCompact,
                            onChange: this.handleDisplayCompactAvatarsChanged,
                            className: B.marginTop20,
                            children: U.default.Messages.DISPLAY_COMPACT_AVATARS
                        })]
                    })
                }
                handleDarkSidebarChecked() {
                    (0, f.toggleDarkSidebar)()
                }
                renderScalingAndSpacing() {
                    return (0, a.jsxs)(a.Fragment, {
                        children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, a.jsx)(u.FormDivider, {
                            className: B.marginTop20
                        })]
                    })
                }
                render() {
                    return (0, a.jsxs)(u.FormSection, {
                        tag: u.FormTitleTags.H1,
                        title: U.default.Messages.APPEARANCE,
                        children: [this.renderPreview(), this.renderTheme(), this.renderDisplayMode(), this.renderScalingAndSpacing(), (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            className: B.marginTop20,
                            children: U.default.Messages.APPEARANCE_SETTINGS_ACCESSIBILITY_LINK.format({
                                onAccessibilityClick() {
                                    S.default.open(P.UserSettingsSections.ACCESSIBILITY)
                                }
                            })
                        })]
                    })
                }
                handleSliderRender(e) {
                    return "".concat(e.toFixed(0), "%")
                }
                handleSliderRenderPX(e) {
                    return "".concat(e.toFixed(0), "px")
                }
                handleSliderValueText(e) {
                    return U.default.Messages.PIXEL_VALUE_A11Y_TEXT.format({
                        value: e
                    })
                }
                handleFontSizeChange(e) {
                    (0, f.setFontSize)(e)
                }
                handleMessageSpacingChange(e) {
                    switch (e) {
                        case 0:
                        case 4:
                        case 8:
                        case 16:
                        case 24:
                            (0, f.setMessageGroupSpacing)(e)
                    }
                }
                handleZoomChange(e) {
                    (0, f.setZoom)(e)
                }
                constructor(...e) {
                    super(...e), this.darkMessages = V(P.ThemeTypes.DARK), this.lightMessages = V(P.ThemeTypes.LIGHT), this.handleDisplayCompactAvatarsChanged = e => {
                        c.default.updatedUnsyncedSettings({
                            displayCompactAvatars: e
                        })
                    }, this.handleMessageDisplayModeChange = e => {
                        let {
                            value: t
                        } = e;
                        v.MessageDisplayCompact.updateSetting(t === F.COMPACT), (0, f.setMessageGroupSpacing)()
                    }
                }
            }

            function W() {
                let e = v.MessageDisplayCompact.useSetting(),
                    t = v.InlineEmbedMedia.useSetting(),
                    s = v.RenderEmbeds.useSetting(),
                    l = v.ClientThemeSettings.useSetting();
                n.useEffect(() => {
                    (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, {
                        dismissAction: j.ContentDismissActionType.AUTO,
                        forceTrack: !0
                    }), (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE, {
                        dismissAction: j.ContentDismissActionType.AUTO,
                        forceTrack: !0
                    }), (0, g.markDismissibleContentAsDismissed)(o.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK, {
                        dismissAction: j.ContentDismissActionType.AUTO,
                        forceTrack: !0
                    })
                }, []);
                let i = (0, r.useStateFromStoresObject)([M.default, R.default, m.default, C.default, _.default], () => {
                    var e, t;
                    return {
                        theme: M.default.theme,
                        useForcedColors: m.default.useForcedColors,
                        useSystemTheme: R.default.useSystemTheme,
                        darkSidebar: M.default.darkSidebar,
                        fontSize: m.default.fontSize,
                        zoom: m.default.zoom,
                        messageGroupSpacing: m.default.messageGroupSpacing,
                        displayCompactAvatars: R.default.displayCompactAvatars,
                        isStaff: null !== (t = null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
                        gradientPreset: _.default.gradientPreset
                    }
                });
                return (0, a.jsx)(Y, {
                    messageDisplayCompact: e,
                    hideSimpleEmbedContent: t && s,
                    clientTheme: l,
                    ...i
                })
            }
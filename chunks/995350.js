            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("812204"),
                o = s("685665"),
                d = s("367376"),
                u = s("599110"),
                c = s("845579"),
                S = s("49111"),
                E = s("782340"),
                f = s("926622");

            function m() {
                let e = c.ExpressionSuggestionsEnabled.useSetting(),
                    t = c.IncludeStickersInAutocomplete.useSetting(),
                    s = c.UseRichChatInput.useSetting(),
                    n = c.RenderSpoilers.useSetting(),
                    m = c.UseThreadSidebar.useSetting(),
                    T = c.ViewImageDescriptions.useSetting(),
                    _ = c.ConvertEmoticons.useSetting(),
                    g = c.InlineAttachmentMedia.useSetting(),
                    h = c.InlineEmbedMedia.useSetting(),
                    I = c.RenderEmbeds.useSetting(),
                    N = c.RenderReactions.useSetting(),
                    {
                        analyticsLocations: p
                    } = (0, o.default)(r.default.TEXT_AND_IMAGES);
                return (0, a.jsxs)(i.FormSection, {
                    tag: i.FormTitleTags.H1,
                    title: E.default.Messages.TEXT_AND_IMAGES,
                    children: [(0, a.jsx)(i.FormTitle, {
                        className: f.marginBottom8,
                        children: E.default.Messages.INLINE_MEDIA_LABEL
                    }), (0, a.jsx)(i.FormSwitch, {
                        className: l(f.marginTop8, f.marginBottom20),
                        value: h,
                        onChange: c.InlineEmbedMedia.updateSetting,
                        children: E.default.Messages.INLINE_EMBED_MEDIA
                    }), (0, a.jsx)(i.FormSwitch, {
                        className: l(f.marginTop8, f.marginBottom20),
                        value: g,
                        note: E.default.Messages.INLINE_ATTACHMENT_MEDIA_HELP.format({
                            maxSize: 10
                        }),
                        onChange: c.InlineAttachmentMedia.updateSetting,
                        children: E.default.Messages.INLINE_ATTACHMENT_MEDIA
                    }), (0, a.jsx)(i.FormSwitch, {
                        className: l(f.marginTop8, f.marginBottom20),
                        value: T,
                        note: E.default.Messages.IMAGE_DESCRIPTION_HELP,
                        onChange: c.ViewImageDescriptions.updateSetting,
                        children: E.default.Messages.USER_SETTINGS_WITH_IMAGE_DESCRIPTIONS
                    }), (0, a.jsx)(i.FormTitle, {
                        className: f.marginBottom8,
                        children: E.default.Messages.RENDER_EMBEDS_LABEL
                    }), (0, a.jsx)(i.FormSwitch, {
                        className: l(f.marginTop8, f.marginBottom40),
                        value: I,
                        onChange: c.RenderEmbeds.updateSetting,
                        children: E.default.Messages.RENDER_EMBEDS
                    }), (0, a.jsx)(i.FormTitle, {
                        className: f.marginBottom8,
                        children: E.default.Messages.EMOJI
                    }), (0, a.jsx)(i.FormSwitch, {
                        className: l(f.marginTop8, f.marginBottom20),
                        value: N,
                        onChange: c.RenderReactions.updateSetting,
                        children: E.default.Messages.RENDER_REACTIONS
                    }), (0, a.jsx)(i.FormSwitch, {
                        className: f.marginBottom40,
                        value: _,
                        note: d.default.parse(E.default.Messages.CONVERT_EMOTICONS_HELP),
                        onChange: c.ConvertEmoticons.updateSetting,
                        children: E.default.Messages.CONVERT_EMOTICONS
                    }), (0, a.jsxs)(i.FormSection, {
                        className: f.marginBottom8,
                        children: [(0, a.jsx)(i.FormTitle, {
                            className: f.marginBottom8,
                            children: E.default.Messages.STICKERS_AUTO_PLAY_HEADING
                        }), (0, a.jsx)(i.FormSwitch, {
                            className: l(f.marginTop8, f.marginBottom20),
                            value: e,
                            note: E.default.Messages.AUTO_SUGGEST_STICKERS_DESCRIPTION,
                            onChange: t => {
                                u.default.track(S.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                    enabled: !e,
                                    location: {
                                        section: S.AnalyticsSections.SETTINGS_TEXT_AND_IMAGES
                                    },
                                    location_stack: p
                                }), c.ExpressionSuggestionsEnabled.updateSetting(!e)
                            },
                            children: E.default.Messages.AUTO_SUGGEST_STICKERS
                        }), (0, a.jsx)(i.FormSwitch, {
                            className: f.marginBottom40,
                            value: t,
                            note: E.default.Messages.INCLUDE_STICKER_RESULTS_IN_AUTOCOMPLETE,
                            onChange: e => {
                                u.default.track(S.AnalyticEvents.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                    enabled: e,
                                    location: {
                                        section: S.AnalyticsSections.SETTINGS_TEXT_AND_IMAGES
                                    },
                                    location_stack: p
                                }), c.IncludeStickersInAutocomplete.updateSetting(e)
                            },
                            children: E.default.Messages.STICKERS_IN_AUTOCOMPLETE
                        })]
                    }), (0, a.jsxs)(i.FormSection, {
                        className: f.marginBottom8,
                        children: [(0, a.jsx)(i.FormTitle, {
                            className: f.marginBottom8,
                            children: E.default.Messages.FORM_LABEL_USE_RICH_CHAT_BOX
                        }), (0, a.jsx)(i.FormSwitch, {
                            className: f.marginTop8,
                            value: s,
                            onChange: e => {
                                u.default.track(S.AnalyticEvents.PREVIEW_MARKDOWN_TOGGLED, {
                                    enabled: e,
                                    location: {
                                        section: S.AnalyticsSections.SETTINGS_TEXT_AND_IMAGES
                                    }
                                }), c.UseRichChatInput.updateSetting(e)
                            },
                            children: E.default.Messages.PREVIEW_MARKDOWN_DESCRIPTION
                        })]
                    }), (0, a.jsxs)(i.FormSection, {
                        className: f.marginBottom40,
                        children: [(0, a.jsx)(i.FormTitle, {
                            className: f.marginBottom8,
                            children: E.default.Messages.THREADS
                        }), (0, a.jsx)(i.FormSwitch, {
                            className: f.marginTop8,
                            value: m,
                            onChange: c.UseThreadSidebar.updateSetting,
                            children: E.default.Messages.USE_THREADS_SIDEBAR_DESCRIPTION
                        })]
                    }), (0, a.jsxs)(i.FormItem, {
                        title: E.default.Messages.SHOW_SPOILER_CONTENT,
                        children: [(0, a.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: f.marginBottom8,
                            children: E.default.Messages.SHOW_SPOILER_CONTENT_HELP
                        }), (0, a.jsx)(i.RadioGroup, {
                            options: [{
                                name: E.default.Messages.SHOW_SPOILER_ON_CLICK,
                                value: S.SpoilerRenderSetting.ON_CLICK
                            }, {
                                name: E.default.Messages.SHOW_SPOILER_ON_SERVERS_I_MOD,
                                value: S.SpoilerRenderSetting.IF_MODERATOR
                            }, {
                                name: E.default.Messages.SHOW_SPOILER_ALWAYS,
                                value: S.SpoilerRenderSetting.ALWAYS
                            }],
                            onChange: e => c.RenderSpoilers.updateSetting(e.value),
                            value: n
                        })]
                    })]
                })
            }
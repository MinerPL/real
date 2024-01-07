            "use strict";
            s.r(t), s.d(t, {
                ChannelSettingsOverviewNotice: function() {
                    return eT
                },
                default: function() {
                    return eN
                }
            }), s("702976"), s("843762");
            var l = s("37983"),
                a = s("884691"),
                n = s("414456"),
                i = s.n(n),
                r = s("482402"),
                o = s("335710"),
                d = s("446674"),
                u = s("669491"),
                c = s("819855"),
                h = s("77078"),
                E = s("18054"),
                f = s("363484"),
                m = s("901582"),
                g = s("45299"),
                T = s("734575"),
                S = s("679653"),
                N = s("850391"),
                C = s("149022"),
                _ = s("681060"),
                p = s("86678"),
                M = s("867805"),
                x = s("339792"),
                R = s("630473"),
                I = s("20105"),
                A = s("677315"),
                O = s("252862"),
                L = s("300322"),
                v = s("24337"),
                j = s("980480"),
                D = s("161778"),
                y = s("233069"),
                F = s("271938"),
                b = s("492114"),
                P = s("305961"),
                H = s("957255"),
                w = s("402904"),
                U = s("697218"),
                B = s("145131"),
                G = s("476765"),
                V = s("956089"),
                k = s("404008"),
                W = s("568734"),
                Y = s("701909"),
                z = s("686069"),
                K = s("792861"),
                Z = s("370216"),
                Q = s("49111"),
                X = s("724210"),
                J = s("958706"),
                q = s("953371"),
                $ = s("515631"),
                ee = s("648564"),
                et = s("782340"),
                es = s("979554"),
                el = s("926622");
            let ea = (0, G.uid)(),
                en = (0, G.uid)(),
                ei = (0, G.uid)(),
                er = (0, G.uid)(),
                eo = (0, G.uid)(),
                ed = (0, G.uid)(),
                eu = (0, G.uid)(),
                ec = (0, G.uid)(),
                eh = (0, G.uid)(),
                eE = (0, G.uid)(),
                ef = (0, G.uid)(),
                em = (0, y.createChannelRecord)({
                    id: "1",
                    type: Q.ChannelTypes.DM
                }),
                eg = "AUTOMATIC_RTC_REGION",
                eT = d.default.connectStores([b.default], () => {
                    let {
                        channel: e,
                        submitting: t
                    } = b.default.getProps();
                    return {
                        channel: e,
                        submitting: t,
                        onReset() {
                            null != e && (0, E.init)(e.id)
                        },
                        onSave() {
                            if (null == e) return;
                            let {
                                name: t,
                                type: s,
                                topic: l,
                                bitrate: a,
                                userLimit: n,
                                nsfw: i,
                                flags: r,
                                rateLimitPerUser: o,
                                defaultThreadRateLimitPerUser: d,
                                threadMetadata: u,
                                defaultAutoArchiveDuration: c,
                                template: h,
                                rtcRegion: f,
                                videoQualityMode: m,
                                defaultReactionEmoji: g,
                                availableTags: T,
                                defaultSortOrder: S,
                                defaultForumLayout: N
                            } = e;
                            e.isThread() && (t = (0, v.default)(t, !0)), (0, E.saveChannel)(e.id, {
                                name: t,
                                type: s,
                                topic: l,
                                bitrate: a,
                                userLimit: n,
                                nsfw: i,
                                flags: r,
                                rateLimitPerUser: o,
                                defaultThreadRateLimitPerUser: d,
                                autoArchiveDuration: null == u ? void 0 : u.autoArchiveDuration,
                                locked: null == u ? void 0 : u.locked,
                                invitable: null == u ? void 0 : u.invitable,
                                defaultAutoArchiveDuration: c,
                                template: h,
                                rtcRegion: f,
                                videoQualityMode: m,
                                defaultReactionEmoji: g,
                                availableTags: T,
                                defaultSortOrder: S,
                                defaultForumLayout: N
                            })
                        }
                    }
                })(g.default);
            class eS extends a.PureComponent {
                componentDidMount() {
                    null == this.props.regions && null != this.props.guild && f.default.fetchRegions(this.props.guild.id)
                }
                componentDidUpdate(e) {
                    var t, s, l, a;
                    let n = null !== (l = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== l ? l : "";
                    (null !== (a = null === (s = e.channel) || void 0 === s ? void 0 : s.topic) && void 0 !== a ? a : "") !== n && n !== this.state.textTopicValue && this.setState({
                        textTopicValue: n,
                        richTopicValue: (0, C.toRichValue)(n)
                    })
                }
                getError(e) {
                    let {
                        errors: t
                    } = this.props;
                    return null == t ? void 0 : t[e]
                }
                getCooldownSliderMarker(e) {
                    return (0, z.getSecondsSliderLabel)(e, !0)
                }
                getAutoArchiveDurationSliderMarker(e) {
                    return (0, z.getSecondsSliderLabel)(e * Q.Durations.MINUTE, !0)
                }
                renderChannelInfo(e, t) {
                    var s, a, n, d, c, E;
                    let f, g;
                    let {
                        canManageChannels: T,
                        canSendMessages: S,
                        isThreadModerator: C,
                        canManageThread: p,
                        guild: x,
                        isForumPost: A,
                        isOwner: L
                    } = this.props, v = y.THREAD_CHANNEL_TYPES.has(e.type), D = e.isForumLikeChannel(), F = D && (null === (s = e.availableTags) || void 0 === s ? void 0 : s.every(e => e.moderated)), b = (null === (a = U.default.getCurrentUser()) || void 0 === a ? void 0 : a.isStaff()) === !0, P = y.TOPIC_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            title: D ? et.default.Messages.FORM_LABEL_CHANNEL_GUIDELINES : et.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
                            className: el.marginTop20,
                            children: D ? (0, l.jsx)(_.default, {
                                innerClassName: es.forumGuidelines,
                                characterCountClassName: es.forumGuidelinesCharacterCount,
                                maxCharacterCount: X.MAX_FORUM_CHANNEL_TOPIC_LENGTH,
                                onChange: this.handleChangeRichTopic,
                                placeholder: et.default.Messages.CHANNEL_TOPIC_EMPTY,
                                channel: em,
                                textValue: this.state.textTopicValue,
                                richValue: this.state.richTopicValue,
                                type: N.ChatInputTypes.FORUM_CHANNEL_GUIDELINES,
                                onBlur: () => {
                                    this.setState({
                                        topicFocused: !1
                                    })
                                },
                                onFocus: () => {
                                    this.setState({
                                        topicFocused: !0
                                    })
                                },
                                focused: this.state.topicFocused,
                                onSubmit: this.handleSubmit,
                                disableThemedBackground: !0
                            }) : (0, l.jsx)(h.TextArea, {
                                autoFocus: this.props.subsection === Q.ChannelSettingsSubsections.TOPIC,
                                placeholder: et.default.Messages.CHANNEL_TOPIC_EMPTY,
                                value: M.default.translateSurrogatesToInlineEmoji(e.topic),
                                onChange: this.handleChangeTopic,
                                error: this.getError("topic"),
                                maxLength: X.MAX_CHANNEL_TOPIC_LENGTH,
                                disabled: !T,
                                autosize: !0
                            })
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, H = D && b ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            title: et.default.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
                            className: el.marginTop20,
                            children: (0, l.jsx)(h.TextArea, {
                                placeholder: et.default.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
                                value: M.default.translateSurrogatesToInlineEmoji(null !== (n = e.template) && void 0 !== n ? n : ""),
                                onChange: this.handleChangeTemplate,
                                error: this.getError("template"),
                                maxLength: q.MAX_FORUM_TEMPLATE_LENGTH,
                                disabled: !T,
                                autosize: !0
                            })
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, w = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)(h.FormItem, {
                            children: [(0, l.jsx)(h.FormTitle, {
                                id: ea,
                                className: es.formTitle,
                                children: et.default.Messages.FORUM_TAGS
                            }), (0, l.jsx)(h.FormText, {
                                id: en,
                                type: h.FormText.Types.DESCRIPTION,
                                className: es.description,
                                children: et.default.Messages.FORM_HELP_FORUM_TAGS
                            }), (0, l.jsx)(R.default, {
                                channel: e
                            })]
                        }), (0, l.jsx)(h.Checkbox, {
                            disabled: !T || F,
                            value: e.hasFlag(X.ChannelFlags.REQUIRE_TAG),
                            type: h.Checkbox.Types.INVERTED,
                            onChange: (e, t) => this.handleRequireTagChanged(t),
                            children: (0, l.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                children: et.default.Messages.FORUM_REQUIRE_TAG_NOTE
                            })
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, B = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: es.twoColumnSettings,
                            children: [(0, l.jsxs)(h.FormItem, {
                                className: i(es.settingsLeft, es.settingsDefaultReaction),
                                children: [(0, l.jsx)(h.FormTitle, {
                                    id: ei,
                                    className: es.formTitle,
                                    children: et.default.Messages.FORUM_DEFAULT_REACTION
                                }), (0, l.jsx)(h.FormText, {
                                    id: en,
                                    type: h.FormText.Types.DESCRIPTION,
                                    className: es.description,
                                    children: et.default.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
                                }), (0, l.jsxs)("div", {
                                    className: es.buttonRow,
                                    children: [(0, l.jsx)(h.Popout, {
                                        renderPopout: this.renderEmojiPicker,
                                        position: "right",
                                        animation: h.Popout.Animation.NONE,
                                        align: "center",
                                        children: e => (0, l.jsx)(h.Button, {
                                            ...e,
                                            disabled: !T,
                                            onClick: t => {
                                                var s;
                                                null === (s = e.onClick) || void 0 === s || s.call(e, t)
                                            },
                                            children: et.default.Messages.SELECT_EMOJI
                                        })
                                    }), null != e.defaultReactionEmoji ? (0, l.jsx)(h.Button, {
                                        className: es.removeButton,
                                        onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                        size: h.Button.Sizes.MIN,
                                        look: h.Button.Looks.LINK,
                                        color: h.Button.Colors.RED,
                                        children: et.default.Messages.REMOVE
                                    }) : null]
                                })]
                            }), (0, l.jsx)(I.default, {
                                reactionEmoji: e.defaultReactionEmoji
                            })]
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, G = e.isForumChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: es.twoColumnSettings,
                            children: [(0, l.jsxs)(h.FormItem, {
                                className: i(es.settingsLeft, es.settingsDefaultView),
                                children: [(0, l.jsx)(h.FormSection, {
                                    title: et.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
                                    children: (0, l.jsx)(h.SingleSelect, {
                                        options: [{
                                            label: et.default.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                                            value: r.ForumLayout.LIST
                                        }, {
                                            label: et.default.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                                            value: r.ForumLayout.GRID
                                        }],
                                        value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.ForumLayout.LIST,
                                        onChange: this.handleChangeDefaultForumLayout
                                    })
                                }), (0, l.jsx)(h.FormText, {
                                    className: el.marginTop8,
                                    type: h.FormText.Types.DESCRIPTION,
                                    children: et.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
                                })]
                            }), e.defaultForumLayout === r.ForumLayout.GRID ? (0, l.jsx)(K.default, {
                                className: es.defaultImageView
                            }) : (0, l.jsx)(Z.default, {
                                className: es.defaultImageView
                            })]
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, k = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            children: (0, l.jsx)(h.FormSection, {
                                title: et.default.Messages.FORUM_DEFAULT_SORT_ORDER,
                                children: (0, l.jsx)(h.SingleSelect, {
                                    options: [{
                                        label: et.default.Messages.FORUM_SORT_ACTIVITY,
                                        value: o.ThreadSortOrder.LATEST_ACTIVITY
                                    }, {
                                        label: et.default.Messages.FORUM_SORT_CREATION,
                                        value: o.ThreadSortOrder.CREATION_DATE
                                    }],
                                    value: e.getDefaultSortOrder(),
                                    onChange: this.handleChangeDefaultSortOrder
                                })
                            })
                        }), (0, l.jsx)(h.FormText, {
                            className: el.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: et.default.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, W = v ? C : T, z = y.SLOWMODE_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
                        children: [(0, l.jsxs)(h.FormItem, {
                            children: [(0, l.jsx)(h.FormTitle, {
                                id: er,
                                className: el.marginBottom8,
                                children: et.default.Messages.FORM_LABEL_SLOWMODE
                            }), D ? (0, l.jsx)(h.FormTitle, {
                                className: el.marginTop20,
                                children: et.default.Messages.FORUM_SETTING_SLOW_MODE_POSTS
                            }) : null, (0, l.jsx)(h.Slider, {
                                className: el.marginTop20,
                                initialValue: e.rateLimitPerUser,
                                markers: Q.SLOWMODE_VALUES,
                                stickToMarkers: !0,
                                onValueChange: this.handleChangeSlowmode,
                                onMarkerRender: this.getCooldownSliderMarker,
                                disabled: !W,
                                equidistant: !0,
                                "aria-labelledby": er,
                                "aria-describedby": eo
                            }), (0, l.jsx)(h.FormText, {
                                id: eo,
                                type: h.FormText.Types.DESCRIPTION,
                                children: D ? et.default.Messages.FORM_HELP_SLOWMODE_FORUM : v ? et.default.Messages.FORM_HELP_SLOWMODE_THREAD : et.default.Messages.FORM_HELP_SLOWMODE
                            }), D ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(h.FormTitle, {
                                    className: el.marginTop20,
                                    children: et.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
                                }), (0, l.jsx)(h.Slider, {
                                    className: el.marginTop20,
                                    initialValue: null !== (c = e.defaultThreadRateLimitPerUser) && void 0 !== c ? c : 0,
                                    markers: Q.SLOWMODE_VALUES,
                                    stickToMarkers: !0,
                                    onValueChange: this.handleChangeThreadMessageSlowmode,
                                    onMarkerRender: this.getCooldownSliderMarker,
                                    disabled: !W,
                                    equidistant: !0,
                                    "aria-labelledby": er,
                                    "aria-describedby": eo
                                }), (0, l.jsx)(h.FormText, {
                                    type: h.FormText.Types.DESCRIPTION,
                                    children: et.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
                                })]
                            }) : null]
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        })]
                    }) : null, J = v && null != e.threadMetadata ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            children: (0, l.jsx)(m.default, {
                                page: Q.AnalyticsPages.CHANNEL_SETTINGS,
                                children: (0, l.jsx)(j.default, {
                                    autoArchiveDuration: null !== (E = e.threadMetadata.autoArchiveDuration) && void 0 !== E ? E : ee.DEFAULT_AUTO_ARCHIVE_DURATION,
                                    guild: x,
                                    channel: e,
                                    onChange: this.handleAutoArchiveDurationChanged,
                                    isDisabled: !p
                                })
                            })
                        }), (0, l.jsx)(h.FormText, {
                            className: el.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: A ? et.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : et.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
                        })]
                    }) : null, $ = e.type === Q.ChannelTypes.PRIVATE_THREAD && null != e.threadMetadata ? (0, l.jsx)("div", {
                        children: (0, l.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_THREAD_INVITABLE,
                            onChange: this.handleInvitableChanged,
                            value: e.threadMetadata.invitable,
                            hideBorder: !0,
                            disabled: !p,
                            children: et.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL
                        })
                    }) : null, ed = y.NSFW_CHANNEL_TYPES.has(e.type) ? (0, l.jsx)("div", {
                        children: (0, l.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_NSFW,
                            onChange: this.handleNSFWChange,
                            value: e.isNSFW(),
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.FORM_LABEL_NSFW_CHANNEL
                        })
                    }) : null, eu = y.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES.has(e.type) && null != x && x.hasFeature(Q.GuildFeatures.NEWS) && e.id !== (null == x ? void 0 : x.rulesChannelId) && e.id !== (null == x ? void 0 : x.publicUpdatesChannelId) ? (0, l.jsx)("div", {
                        children: (0, l.jsx)(h.FormSwitch, {
                            note: et.default.Messages.FORM_HELP_NEWS.format({
                                documentationLink: Y.default.getArticleURL(Q.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            }),
                            onChange: this.handleNewsChange,
                            value: e.type === Q.ChannelTypes.GUILD_ANNOUNCEMENT,
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.FORM_LABEL_NEWS_CHANNEL
                        })
                    }) : null, ec = y.THREADED_CHANNEL_TYPES.has(e.type) ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }), (0, l.jsx)(m.default, {
                            page: Q.AnalyticsPages.CHANNEL_SETTINGS,
                            children: (0, l.jsx)(j.default, {
                                autoArchiveDuration: (0, O.getAutoArchiveDuration)(e, null),
                                guild: x,
                                channel: e,
                                onChange: this.handleChangeDefaultAutoArchiveDuration,
                                isDisabled: !T
                            })
                        }), (0, l.jsx)(h.FormText, {
                            className: el.marginTop8,
                            type: h.FormText.Types.DESCRIPTION,
                            children: e.isForumLikeChannel() ? et.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : et.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
                        })]
                    }) : null, eh = this.props.showChannelSummariesSettings ? (0, l.jsx)(h.FormSwitch, {
                        note: et.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
                            helpdeskArticle: Y.default.getArticleURL(Q.HelpdeskArticles.CONVERSATION_SUMMARIES)
                        }),
                        onChange: this.handleChannelSummariesToggled,
                        value: !e.hasFlag(X.ChannelFlags.SUMMARIES_DISABLED) && (null == x ? void 0 : x.hasFeature(Q.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                        hideBorder: !0,
                        disabled: !T || !(null == x ? void 0 : x.hasFeature(Q.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                        children: (0, l.jsxs)("div", {
                            className: es.badgedItem,
                            children: [et.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE, (0, l.jsx)(V.TextBadge, {
                                text: et.default.Messages.BETA,
                                color: u.default.unsafe_rawColors.BRAND_500.css,
                                className: es.betaTag
                            })]
                        })
                    }) : null, eE = e.isMediaChannel() ? (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }), (0, l.jsx)(h.FormSwitch, {
                            onChange: this.handleShowMediaOptionsToggled,
                            value: !e.hasFlag(X.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                            note: et.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
                            hideBorder: !0,
                            disabled: !T,
                            children: et.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
                        })]
                    }) : null;
                    return e.type === Q.ChannelTypes.GUILD_CATEGORY ? (g = et.default.Messages.CATEGORY_NAME, f = "category-name") : e.isForumPost() ? (g = et.default.Messages.FORUM_POST_TITLE, f = "post-title") : v ? (g = et.default.Messages.THREAD_NAME, f = "thread-name") : (g = et.default.Messages.FORM_LABEL_CHANNEL_NAME, f = "channel-name"), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(h.FormItem, {
                            title: g,
                            children: (0, l.jsx)(h.TextInput, {
                                value: t,
                                onChange: this.handleChangeName,
                                onBlur: this.handleBlurName,
                                error: this.getError("name"),
                                name: f,
                                autoFocus: !0,
                                disabled: L ? !S : !T,
                                maxLength: Q.MAX_CHANNEL_NAME_LENGTH
                            })
                        }), (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }), P, H, w, B, z, J, G, k, $, ed, eu, eh, ec, eE]
                    })
                }
                renderHomeFlags(e) {
                    let {
                        canManageChannels: t
                    } = this.props;
                    if (!(0, A.canSeeGuildHome)(e.guild_id)) return null;
                    let s = Q.ChannelTypesSets.GUILD_PARENTABLE.has(e.type) ? (0, l.jsx)("div", {
                            children: (0, l.jsx)(h.FormSwitch, {
                                note: et.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL_DESCRIPTION,
                                onChange: this.handleActiveChannelsRemovedChange,
                                value: !e.hasFlag(X.ChannelFlags.ACTIVE_CHANNELS_REMOVED),
                                hideBorder: !0,
                                disabled: !t,
                                children: (0, l.jsxs)("div", {
                                    className: es.badgedItem,
                                    children: [et.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL, (0, l.jsx)(V.TextBadge, {
                                        text: et.default.Messages.BETA,
                                        color: u.default.unsafe_rawColors.BRAND_500.css,
                                        className: es.betaTag
                                    })]
                                })
                            })
                        }) : null,
                        a = $.GUILD_FEED_CHANNEL_TYPES.has(e.type) ? (0, l.jsx)("div", {
                            children: (0, l.jsx)(h.FormSwitch, {
                                note: et.default.Messages.GUILD_FEED_DEMOTE_CHANNEL_DESCRIPTION.format({
                                    warningHook: (e, t) => (0, l.jsx)("span", {
                                        className: es.warningText,
                                        children: e
                                    }, t)
                                }),
                                onChange: this.handleGuildFeedRemovedChange,
                                value: e.hasFlag(X.ChannelFlags.GUILD_FEED_REMOVED),
                                hideBorder: !0,
                                disabled: !t,
                                children: (0, l.jsxs)("div", {
                                    className: es.badgedItem,
                                    children: [et.default.Messages.GUILD_FEED_DEMOTE_CHANNEL, (0, l.jsx)(V.TextBadge, {
                                        text: et.default.Messages.BETA,
                                        color: u.default.unsafe_rawColors.BRAND_500.css,
                                        className: es.betaTag
                                    })]
                                })
                            })
                        }) : null;
                    return null == s && null == a ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }), (0, l.jsxs)(h.FormItem, {
                            title: et.default.Messages.GUILD_HOME,
                            children: [(0, l.jsx)(h.Text, {
                                className: el.marginBottom20,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: et.default.Messages.GUILD_HOME_CHANNEL_SETTINGS_SUBTITLE.format({
                                    helpCenterLink: Y.default.getArticleURL(Q.HelpdeskArticles.GUILD_HOME)
                                })
                            }), s, a]
                        })]
                    })
                }
                renderBitrate(e) {
                    return "".concat(Math.round(e / 1e3), "kbps")
                }
                renderVoiceBitrate(e, t) {
                    let {
                        canManageChannels: s
                    } = this.props;
                    if (!this.showVoiceSettings()) return null;
                    let a = (0, k.getBitrateLimit)(t, e),
                        n = this.getError("bitrate");
                    return (0, l.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: el.marginBottom40,
                        children: [(0, l.jsx)(h.FormTitle, {
                            id: ed,
                            children: et.default.Messages.FORM_LABEL_BITRATE
                        }), "" !== n && (0, l.jsx)(h.FormText, {
                            id: eu,
                            type: h.FormTextTypes.DESCRIPTION,
                            style: {
                                color: u.default.unsafe_rawColors.RED_400.css
                            },
                            className: el.marginBottom8,
                            children: n
                        }), (0, l.jsx)(h.Slider, {
                            initialValue: Math.min(e.bitrate, a),
                            onValueChange: this.handleChangeBitrate,
                            onValueRender: this.renderBitrate,
                            onMarkerRender: this.renderBitrate,
                            markers: [Q.BITRATE_MIN, Q.BITRATE_DEFAULT, a],
                            minValue: Q.BITRATE_MIN,
                            maxValue: a,
                            keyboardStep: Q.BITRATE_STEP,
                            disabled: !s,
                            "aria-labelledby": ed,
                            "aria-describedby": null != n && "" !== n ? eu : ec
                        }), a > Q.BITRATE_DEFAULT ? (0, l.jsx)(h.FormText, {
                            id: ec,
                            type: h.FormTextTypes.DESCRIPTION,
                            children: et.default.Messages.FORM_HELP_BITRATE.format({
                                bitrate: Q.BITRATE_DEFAULT / 1e3
                            })
                        }) : null]
                    })
                }
                showVoiceSettings() {
                    let {
                        channel: e
                    } = this.props;
                    return null != e && null != e.guild_id && y.EDITABLE_VOICE_SETTINGS_TYPES.has(e.type) && (e.isGuildVocal() || L.VoiceInThreadsExperiment.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "9b50bd_1"
                    }).enabled)
                }
                renderVideoQualityMode(e) {
                    var t;
                    let {
                        canManageChannels: s
                    } = this.props;
                    if (!this.showVoiceSettings()) return null;
                    let a = [{
                        value: Q.VideoQualityMode.AUTO,
                        name: et.default.Messages.VIDEO_QUALITY_MODE_AUTO
                    }, {
                        value: Q.VideoQualityMode.FULL,
                        name: et.default.Messages.VIDEO_QUALITY_MODE_FULL
                    }];
                    return (0, l.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: el.marginBottom40,
                        children: [(0, l.jsx)(h.FormItem, {
                            title: et.default.Messages.FORM_LABEL_VIDEO_QUALITY,
                            children: (0, l.jsx)(h.RadioGroup, {
                                onChange: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return this.handleVideoQualityModeChange(t)
                                },
                                options: a,
                                value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : Q.VideoQualityMode.AUTO,
                                disabled: !s
                            })
                        }), (0, l.jsx)(h.FormText, {
                            type: h.FormTextTypes.DESCRIPTION,
                            children: et.default.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format()
                        })]
                    })
                }
                onRenderUserLimit(e) {
                    return 0 === (e = Math.round(e)) ? et.default.Messages.NO_USER_LIMIT : et.default.Messages.NUM_USERS.format({
                        num: e
                    })
                }
                renderUserLimit(e) {
                    let {
                        canManageChannels: t
                    } = this.props;
                    if (!this.showVoiceSettings()) return null;
                    let s = this.getError("user_limit"),
                        a = e.isGuildStageVoice() ? Q.MAX_STAGE_VOICE_USER_LIMIT : Q.MAX_VOICE_USER_LIMIT;
                    return (0, l.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        className: el.marginBottom40,
                        children: [(0, l.jsx)(h.FormTitle, {
                            id: eh,
                            children: et.default.Messages.FORM_LABEL_USER_LIMIT
                        }), "" !== s && (0, l.jsx)(h.FormText, {
                            id: eE,
                            type: h.FormTextTypes.DESCRIPTION,
                            style: {
                                color: u.default.unsafe_rawColors.RED_400.css
                            },
                            className: el.marginBottom8,
                            children: s
                        }), (0, l.jsx)(h.Slider, {
                            initialValue: Math.min(e.userLimit, a),
                            onValueChange: this.handleUserLimitChange,
                            onValueRender: this.onRenderUserLimit,
                            onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
                            markers: [0, a],
                            minValue: 0,
                            maxValue: a,
                            disabled: !t,
                            "aria-labelledby": eh,
                            "aria-describedby": null != s && "" !== s ? eE : ef
                        }), (0, l.jsx)(h.FormText, {
                            id: ef,
                            type: h.FormTextTypes.DESCRIPTION,
                            children: (e.isGuildStageVoice() ? et.default.Messages.FORM_HELP_USER_LIMIT_STAGE : et.default.Messages.FORM_HELP_USER_LIMIT).format()
                        })]
                    })
                }
                renderRegionOverride(e) {
                    var t;
                    let {
                        regions: s,
                        canManageChannels: a,
                        guild: n
                    } = this.props;
                    if (null == n || !this.showVoiceSettings()) return null;
                    let i = [];
                    if (null != s) {
                        let e = s.filter(e => !e.deprecated && !e.hidden);
                        (i = e.map(e => ({
                            label: e.name,
                            value: e.id
                        }))).unshift({
                            label: et.default.Messages.AUTOMATIC_REGION,
                            value: eg
                        })
                    }
                    let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eg;
                    return (0, l.jsxs)(B.default, {
                        direction: B.default.Direction.VERTICAL,
                        children: [(0, l.jsx)(h.FormTitle, {
                            children: et.default.Messages.FORM_LABEL_REGION_OVERRIDE
                        }), (0, l.jsx)(h.SingleSelect, {
                            options: i,
                            value: r,
                            onChange: this.handleRegionChange,
                            isDisabled: !a
                        }), (0, l.jsx)(h.FormText, {
                            type: h.FormTextTypes.DESCRIPTION,
                            children: et.default.Messages.FORM_HELP_REGION_OVERRIDE
                        })]
                    })
                }
                renderJuiceImage(e) {
                    let t;
                    let {
                        theme: a
                    } = this.props;
                    return t = e.type === Q.ChannelTypes.GUILD_CATEGORY ? (0, c.isThemeDark)(a) ? s("23141") : s("182418") : (0, c.isThemeDark)(a) ? s("34705") : s("164370"), (0, l.jsx)(B.default, {
                        justify: B.default.Justify.CENTER,
                        className: el.marginTop60,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            width: 280,
                            height: 165,
                            src: t
                        })
                    })
                }
                render() {
                    let {
                        channel: e,
                        channelName: t,
                        guild: s
                    } = this.props;
                    return null == e || null == t || null == s ? null : (0, l.jsxs)(h.FormSection, {
                        className: "channel-settings-overview",
                        tag: h.FormTitleTags.H1,
                        title: et.default.Messages.OVERVIEW,
                        children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, l.jsx)(h.FormDivider, {
                            className: i(el.marginTop40, el.marginBottom40)
                        }) : null, this.renderVoiceBitrate(e, s), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderHomeFlags(e), this.renderJuiceImage(e)]
                    })
                }
                handleSubmit() {
                    return new Promise(e => {
                        e({
                            shouldClear: !1,
                            shouldRefocus: !0
                        })
                    })
                }
                constructor(e) {
                    var t, a;
                    super(e), this.renderEmojiPicker = e => {
                        let {
                            closePopout: t
                        } = e, {
                            channel: s
                        } = this.props;
                        return (0, l.jsx)(p.default, {
                            guildId: null == s ? void 0 : s.guild_id,
                            closePopout: t,
                            onSelectEmoji: (e, s) => {
                                this.handleChangeDefaultReactionEmoji(e), s && t()
                            },
                            pickerIntention: J.EmojiIntention.COMMUNITY_CONTENT,
                            channel: s
                        })
                    }, this.handleRequireTagChanged = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let s = (0, W.setFlag)(t.flags, X.ChannelFlags.REQUIRE_TAG, e);
                        (0, E.updateChannel)({
                            flags: s
                        })
                    }, this.handleChangeName = e => {
                        let {
                            channel: t
                        } = this.props;
                        null != t && (t.isThread() ? e = (0, v.default)(e, !1) : (0, y.isGuildTextChannelType)(t.type) && (e = (0, k.sanitizeGuildTextChannelName)(e)), (0, E.updateChannel)({
                            name: e
                        }))
                    }, this.handleBlurName = () => {
                        let {
                            channel: e,
                            channelName: t
                        } = this.props;
                        if ((null == e ? void 0 : e.isThread()) && null != t) {
                            let e = (0, v.default)(t, !0);
                            e !== t && (0, E.updateChannel)({
                                name: e
                            })
                        }
                    }, this.handleChangeTopic = e => {
                        (0, E.updateChannel)({
                            topic: M.default.translateInlineEmojiToSurrogates(e)
                        })
                    }, this.handleChangeRichTopic = (e, t, s) => {
                        this.setState({
                            textTopicValue: t,
                            richTopicValue: s
                        }), this.handleChangeTopic(t)
                    }, this.handleChangeTemplate = e => {
                        (0, E.updateChannel)({
                            template: M.default.translateInlineEmojiToSurrogates(e)
                        })
                    }, this.handleChangeDefaultReactionEmoji = e => {
                        let t = null == e ? null : (null == e ? void 0 : e.id) != null ? {
                            emojiId: e.id,
                            emojiName: void 0
                        } : {
                            emojiId: void 0,
                            emojiName: e.optionallyDiverseSequence
                        };
                        (0, E.updateChannel)({
                            defaultReactionEmoji: t
                        })
                    }, this.handleChangeDefaultForumLayout = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        (0, E.updateChannel)({
                            defaultForumLayout: e
                        }), this.props.handleSetDefaultLayout(e)
                    }, this.handleChangeDefaultSortOrder = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        (0, E.updateChannel)({
                            defaultSortOrder: e
                        })
                    }, this.handleChangeBitrate = e => {
                        (0, E.updateChannel)({
                            bitrate: 1e3 * Math.round(e / 1e3)
                        })
                    }, this.handleUserLimitChange = e => {
                        (0, E.updateChannel)({
                            userLimit: Math.round(e)
                        })
                    }, this.handleNSFWChange = e => {
                        (0, E.updateChannel)({
                            nsfw: e
                        })
                    }, this.handleGuildFeedRemovedChange = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        if (!e) {
                            let e = (0, W.setFlag)(t.flags, X.ChannelFlags.GUILD_FEED_REMOVED, !1);
                            (0, E.updateChannel)({
                                flags: e
                            });
                            return
                        }(0, h.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("360476").then(s.bind(s, "360476"));
                            return s => (0, l.jsx)(e, {
                                ...s,
                                channelId: t.id,
                                onSubmit: () => {
                                    let e = (0, W.setFlag)(t.flags, X.ChannelFlags.GUILD_FEED_REMOVED, !0);
                                    (0, E.updateChannel)({
                                        flags: e
                                    })
                                }
                            })
                        })
                    }, this.handleActiveChannelsRemovedChange = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let s = (0, W.setFlag)(t.flags, X.ChannelFlags.ACTIVE_CHANNELS_REMOVED, !e);
                        (0, E.updateChannel)({
                            flags: s
                        })
                    }, this.handleNewsChange = e => {
                        (0, E.updateChannel)({
                            type: e ? Q.ChannelTypes.GUILD_ANNOUNCEMENT : Q.ChannelTypes.GUILD_TEXT
                        })
                    }, this.handleChangeSlowmode = e => {
                        (0, E.updateChannel)({
                            rateLimitPerUser: e
                        })
                    }, this.handleChangeThreadMessageSlowmode = e => {
                        (0, E.updateChannel)({
                            defaultThreadRateLimitPerUser: e
                        })
                    }, this.handleChangeDefaultAutoArchiveDuration = e => {
                        (0, E.updateChannel)({
                            defaultAutoArchiveDuration: e
                        })
                    }, this.handleRegionChange = e => {
                        (0, E.updateChannel)({
                            rtcRegion: e === eg ? null : e
                        })
                    }, this.handleVideoQualityModeChange = e => {
                        (0, E.updateChannel)({
                            videoQualityMode: e
                        })
                    }, this.handleAutoArchiveDurationChanged = e => {
                        (0, E.updateChannel)({
                            autoArchiveDuration: e
                        })
                    }, this.handleInvitableChanged = e => {
                        (0, E.updateChannel)({
                            invitable: e
                        })
                    }, this.handleChannelSummariesToggled = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let s = (0, W.setFlag)(t.flags, X.ChannelFlags.SUMMARIES_DISABLED, !e);
                        (0, E.updateChannel)({
                            flags: s
                        })
                    }, this.handleShowMediaOptionsToggled = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (null == t) return null;
                        let s = (0, W.setFlag)(t.flags, X.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                        (0, E.updateChannel)({
                            flags: s
                        })
                    };
                    let n = null !== (a = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== a ? a : "";
                    this.state = {
                        textTopicValue: n,
                        richTopicValue: (0, C.toRichValue)(n),
                        topicFocused: !1
                    }
                }
            }

            function eN() {
                let {
                    errors: e,
                    channel: t,
                    submitting: s,
                    subsection: n
                } = (0, d.useStateFromStoresObject)([b.default], () => b.default.getProps()), i = (0, d.useStateFromStores)([w.default], () => {
                    var e;
                    return w.default.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null)
                }), r = (0, d.useStateFromStores)([D.default], () => D.default.theme), o = (0, d.useStateFromStores)([P.default], () => P.default.getGuild(null == t ? void 0 : t.getGuildId())), u = (0, L.useCanManageThread)(t), c = (0, L.useIsThreadModerator)(t), {
                    canManageChannels: h,
                    canSendMessages: E
                } = (0, d.useStateFromStoresObject)([H.default], () => ({
                    canManageChannels: H.default.can(Q.Permissions.MANAGE_CHANNELS, t),
                    canSendMessages: H.default.can(Q.Permissions.SEND_MESSAGES, t)
                })), f = (0, S.default)(t), m = F.default.getId(), g = (0, x.useForumChannelStoreApi)(), N = null == t ? void 0 : t.id, C = (0, T.useChannelSummariesExperiment)(t, !1, !0), _ = a.useCallback(e => {
                    null != N && g.getState().setLayoutType(N, e)
                }, [N, g]);
                return (0, l.jsx)(eS, {
                    errors: e,
                    channel: t,
                    channelName: f,
                    submitting: s,
                    regions: i,
                    theme: r,
                    guild: o,
                    canManageChannels: (null == t ? void 0 : t.isThread()) ? u : h,
                    canSendMessages: E,
                    isThreadModerator: c,
                    canManageThread: u,
                    subsection: n,
                    isForumPost: null != t && t.isForumPost(),
                    isOwner: null == t ? void 0 : t.isOwner(m),
                    handleSetDefaultLayout: _,
                    showChannelSummariesSettings: C
                })
            }
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return z
                }
            }), s("843762"), s("506083");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("866227"),
                u = s.n(d),
                c = s("446674"),
                S = s("151426"),
                E = s("77078"),
                f = s("404118"),
                T = s("629803"),
                m = s("152584"),
                _ = s("79112"),
                g = s("457971"),
                h = s("447435"),
                I = s("10130"),
                N = s("298878"),
                p = s("916650"),
                C = s("775032"),
                A = s("36978"),
                O = s("646356"),
                x = s("861348"),
                R = s("350522"),
                M = s("305961"),
                v = s("26092"),
                D = s("697218"),
                L = s("145131"),
                P = s("476765"),
                j = s("599110"),
                b = s("701909"),
                U = s("62418"),
                B = s("241088"),
                y = s("845579"),
                F = s("568456"),
                G = s("49111"),
                k = s("170213"),
                H = s("782340"),
                w = s("863341"),
                V = s("926622");

            function Y(e) {
                let {
                    body: t,
                    ...s
                } = e;
                (0, E.openModal)(e => (0, a.jsx)(E.ConfirmModal, {
                    ...e,
                    ...s,
                    children: (0, a.jsx)(E.Text, {
                        variant: "text-md/normal",
                        children: t
                    })
                }))
            }

            function W(e) {
                let {
                    message: t
                } = e;
                Y({
                    header: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                    confirmText: H.default.Messages.OKAY,
                    body: t
                })
            }
            class K extends n.PureComponent {
                componentDidMount() {
                    (0, T.fetchConsents)(), (0, m.getHarvestStatus)().then(e => {
                        let t = {
                            requestingHarvest: !1,
                            currentHarvestRequest: e.body
                        };
                        this.setState(t)
                    }, () => {
                        this.setState({
                            requestingHarvest: !1
                        })
                    })
                }
                componentDidUpdate(e) {
                    e.defaultGuildsRestricted !== this.props.defaultGuildsRestricted && this.setState({
                        defaultGuildsRestricted: this.props.defaultGuildsRestricted
                    })
                }
                showGuildRestrictionModal(e) {
                    Y({
                        header: H.default.Messages.USER_DM_SETTINGS_TITLE,
                        body: H.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
                        confirmText: H.default.Messages.NO_TEXT,
                        cancelText: H.default.Messages.YES_TEXT,
                        confirmButtonColor: E.Button.Colors.BRAND,
                        onConfirm: () => {
                            y.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
                        },
                        onCancel: () => {
                            y.DefaultGuildsRestricted.updateSetting(e), y.RestrictedGuildIds.updateSetting(e ? Object.keys(M.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
                        }
                    })
                }
                trackDefaultDmsUpdated(e, t) {
                    j.default.track(G.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
                        default_guilds_restricted: e,
                        applied_to_existing_guilds: t
                    })
                }
                showMessageRequestRestrictionModal(e) {
                    Y({
                        header: H.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
                        body: H.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
                        confirmText: H.default.Messages.NO_TEXT,
                        cancelText: H.default.Messages.YES_TEXT,
                        confirmButtonColor: E.Button.Colors.BRAND,
                        onConfirm: () => {
                            y.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
                        },
                        onCancel: () => {
                            y.MessageRequestRestrictedDefault.updateSetting(e), y.MessageRequestRestrictedGuildIds.updateSetting(e ? Object.keys(M.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
                        }
                    })
                }
                trackDefaultMessageRequestUpdated(e, t) {
                    j.default.track(G.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
                        default_guilds_restricted: e,
                        applied_to_existing_guilds: t
                    })
                }
                renderLegacyExplicitContentFilter(e) {
                    return (0, a.jsxs)(E.FormItem, {
                        tag: E.FormTitleTags.H3,
                        className: V.marginBottom20,
                        title: H.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
                        children: [(0, a.jsx)(E.FormText, {
                            type: E.FormTextTypes.DESCRIPTION,
                            className: V.marginBottom8,
                            children: H.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
                                appealLink: b.default.getArticleURL(G.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
                            })
                        }), (0, a.jsx)(E.RadioGroup, {
                            value: this.props.explicitContentFilter,
                            options: (0, U.generateExplicitImageOptions)(),
                            onChange: t => {
                                let {
                                    value: s
                                } = t;
                                this.props.dmSpamFilter === S.DmSpamFilterV2.DEFAULT_UNSET ? y.DmSpamFilterV2.updateSetting(e).then(() => {
                                    y.ExplicitContentFilter.updateSetting(s)
                                }) : y.ExplicitContentFilter.updateSetting(s)
                            }
                        })]
                    })
                }
                renderSelfModExplicitContentSettings() {
                    let {
                        explicitContentSettingGuilds: e,
                        explicitContentSettingFriendDm: t,
                        explicitContentSettingNonFriendDm: s,
                        userIsConsideredAdult: n
                    } = this.props, l = [{
                        value: S.ExplicitContentRedaction.BLUR,
                        label: H.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
                    }, {
                        value: S.ExplicitContentRedaction.BLOCK,
                        label: H.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
                    }], r = [{
                        value: S.ExplicitContentRedaction.BLUR,
                        label: H.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
                    }], o = {
                        value: S.ExplicitContentRedaction.SHOW,
                        label: H.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
                    };
                    return n && (l.unshift(o), r.unshift(o)), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(E.FormTitle, {
                            tag: E.FormTitleTags.H5,
                            faded: !0,
                            className: V.marginBottom8,
                            children: (0, a.jsxs)("div", {
                                className: i(w.betaTagContainer),
                                children: [H.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, (0, a.jsx)(N.default, {
                                    className: w.betaTagIcon
                                })]
                            })
                        }), (0, a.jsx)(E.FormText, {
                            type: E.FormTextTypes.DESCRIPTION,
                            className: V.marginBottom8,
                            children: H.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
                                learnMoreLink: b.default.getArticleURL(G.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
                            })
                        }), (0, a.jsx)(E.FormItem, {
                            tag: E.FormTitleTags.H3,
                            className: V.marginBottom20,
                            title: H.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
                            children: (0, a.jsx)(E.SingleSelect, {
                                options: l,
                                value: t,
                                onChange: e => (0, h.updateExplicitContentSetting)({
                                    explicitContentFriendDm: e
                                })
                            })
                        }), (0, a.jsx)(E.FormItem, {
                            tag: E.FormTitleTags.H3,
                            className: V.marginBottom20,
                            title: H.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
                            children: (0, a.jsx)(E.SingleSelect, {
                                options: l,
                                value: s,
                                onChange: e => (0, h.updateExplicitContentSetting)({
                                    explicitContentNonFriendDm: e
                                })
                            })
                        }), n && (0, a.jsx)(E.FormItem, {
                            tag: E.FormTitleTags.H3,
                            className: V.marginBottom20,
                            title: H.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
                            children: (0, a.jsx)(E.SingleSelect, {
                                options: r,
                                value: e,
                                onChange: e => (0, h.updateExplicitContentSetting)({
                                    explicitContentGuilds: e
                                })
                            })
                        })]
                    })
                }
                renderDMSafety() {
                    var e;
                    let t = this.props.dmSpamFilter !== S.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = F.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.DmSpamFilterV2.NON_FRIENDS;
                    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(E.FormSection, {
                        tag: E.FormTitleTags.H3,
                        className: V.marginBottom20,
                        children: [this.renderSelfModExplicitContentSettings(), (0, a.jsxs)(E.FormItem, {
                            tag: E.FormTitleTags.H5,
                            className: V.marginBottom4,
                            title: H.default.Messages.USER_DM_SPAM_FILTER,
                            children: [(0, a.jsx)(E.FormText, {
                                type: E.FormTextTypes.DESCRIPTION,
                                className: V.marginBottom8,
                                children: H.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
                                    appealLink: b.default.getArticleURL(G.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
                                })
                            }), (0, a.jsx)(E.RadioGroup, {
                                value: t,
                                options: (0, U.generateDmSpamOptions)(),
                                onChange: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return y.DmSpamFilterV2.updateSetting(t)
                                }
                            })]
                        })]
                    }) : (0, a.jsxs)(E.FormSection, {
                        tag: E.FormTitleTags.H5,
                        className: V.marginBottom40,
                        title: H.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
                        children: [this.renderLegacyExplicitContentFilter(t), (0, a.jsxs)(E.FormItem, {
                            tag: E.FormTitleTags.H3,
                            className: V.marginBottom4,
                            title: H.default.Messages.USER_DM_SPAM_FILTER,
                            children: [(0, a.jsx)(E.FormText, {
                                type: E.FormTextTypes.DESCRIPTION,
                                className: V.marginBottom8,
                                children: H.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
                                    appealLink: b.default.getArticleURL(G.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
                                })
                            }), (0, a.jsx)(E.RadioGroup, {
                                value: t,
                                options: (0, U.generateDmSpamOptions)(),
                                onChange: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return y.DmSpamFilterV2.updateSetting(t)
                                }
                            })]
                        })]
                    })
                }
                renderServerPrivacy() {
                    let {
                        viewNsfwGuilds: e,
                        currentUser: t,
                        isStricterMessageRequests: s,
                        viewNsfwCommands: n
                    } = this.props, {
                        defaultGuildsRestricted: l,
                        defaultMessageRequestRestricted: i
                    } = this.state, r = !0 === t.nsfwAllowed;
                    return (0, a.jsxs)(E.FormSection, {
                        className: V.marginBottom40,
                        children: [(0, a.jsx)(E.FormTitle, {
                            tag: E.FormTitleTags.H5,
                            className: V.marginBottom8,
                            children: H.default.Messages.USER_DM_SETTINGS
                        }), (0, a.jsx)(E.FormSwitch, {
                            value: !l,
                            note: H.default.Messages.USER_DM_SETTINGS_HELP,
                            onChange: this.handleChangeDefaultGuildsRestricted,
                            children: H.default.Messages.NEW_GUILDS_DM_ALLOWED
                        }), (0, a.jsx)(E.FormSwitch, {
                            value: !!r && e,
                            note: H.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
                            disabled: !r,
                            onChange: y.ViewNsfwGuilds.updateSetting,
                            children: H.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
                        }), !s && (0, a.jsx)(E.FormSwitch, {
                            value: !i,
                            note: H.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
                                helpdeskArticle: b.default.getArticleURL(G.HelpdeskArticles.MESSAGE_REQUESTS)
                            }),
                            disabled: l,
                            onChange: this.handleChangeDefaultMessageRequestRestricted,
                            children: H.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
                        }), (0, a.jsx)(E.FormSwitch, {
                            value: !!r && n,
                            note: H.default.Messages.NSFW_DM_COMMANDS_CAPTION,
                            disabled: !r,
                            onChange: y.ViewNsfwCommands.updateSetting,
                            children: H.default.Messages.NSFW_DM_COMMANDS_HEADER
                        })]
                    })
                }
                renderDataPrivacy() {
                    let {
                        usageStatistics: e,
                        personalization: t,
                        dropsOptedOut: s
                    } = this.props;
                    return (0, a.jsxs)(E.FormSection, {
                        className: V.marginBottom40,
                        children: [(0, a.jsx)(E.FormTitle, {
                            tag: E.FormTitleTags.H5,
                            className: V.marginBottom8,
                            children: H.default.Messages.DATA_PRIVACY_CONTROLS
                        }), (0, a.jsx)(E.FormSwitch, {
                            value: e,
                            note: H.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
                                helpdeskArticle: b.default.getArticleURL(G.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
                            }),
                            onChange: this.handleUsageStatisticsChange,
                            children: H.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
                        }), (0, a.jsx)(E.FormSwitch, {
                            value: t,
                            note: H.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
                                helpdeskArticle: b.default.getArticleURL(G.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
                            }),
                            hideBorder: !0,
                            onChange: this.handlePersonalizationChange,
                            children: H.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
                        }), (0, a.jsx)(E.FormSwitch, {
                            value: !s && t,
                            note: (0, a.jsxs)("div", {
                                className: w.dependentSetting,
                                children: [H.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_NOTE, s ? (0, a.jsx)("div", {
                                    className: i(V.marginTop8, w.feedback),
                                    children: H.default.Messages.DROPS_REQUEST_FEEDBACK_OPT_OUT.format({
                                        feedbackURL: "https://survey.alchemer.com/s3/7043738/Discord-Drops-Opt-Out-Survey?user_id=".concat(this.props.currentUser.id)
                                    })
                                }) : null]
                            }),
                            disabled: !t,
                            onChange: this.handleChangeDropsOptedOut,
                            children: (0, a.jsxs)("div", {
                                className: i(w.betaTagContainer, w.dependentSetting),
                                children: [H.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT, (0, a.jsx)(N.default, {
                                    className: w.betaTagIcon
                                })]
                            })
                        }), (0, a.jsx)(E.FormTitle, {
                            tag: E.FormTitleTags.H3,
                            className: i(V.marginTop20, V.marginBottom8),
                            children: H.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
                        }), (0, a.jsx)(E.FormText, {
                            type: E.FormTextTypes.DESCRIPTION,
                            className: V.marginBottom20,
                            children: H.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
                                onClick: () => {
                                    _.default.setSection(G.UserSettingsSections.ACCOUNT)
                                }
                            })
                        }), this.renderHarvestRequest()]
                    })
                }
                renderHarvestRequest() {
                    let e;
                    let {
                        currentUser: t
                    } = this.props, {
                        requestingHarvest: s,
                        currentHarvestRequest: l
                    } = this.state, i = (0, B.harvestDisabled)(l, t), r = (0, a.jsx)(E.Tooltip, {
                        text: t.verified ? null : H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
                        children: e => {
                            let {
                                onMouseEnter: t,
                                onMouseLeave: n
                            } = e;
                            return (0, a.jsx)(E.Button, {
                                disabled: i,
                                onClick: this.handleDataDownloadRequest,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                look: E.Button.Looks.OUTLINED,
                                color: E.Button.Colors.BRAND,
                                submitting: s,
                                children: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
                            })
                        }
                    });
                    return i && null != l && (e = (0, a.jsx)(E.Card, {
                        className: w.card,
                        children: (0, a.jsx)(E.Text, {
                            variant: "text-md/normal",
                            children: H.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
                                date: u(l.created_at).add(G.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
                            })
                        })
                    }), r = null), null != r && (r = (0, a.jsx)(L.default, {
                        children: r
                    })), (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)(E.FormDivider, {
                            className: V.marginBottom20
                        }), (0, a.jsx)(E.FormTitle, {
                            tag: E.FormTitleTags.H3,
                            children: H.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
                        }), (0, a.jsx)(E.FormText, {
                            type: E.FormTextTypes.DESCRIPTION,
                            className: V.marginBottom20,
                            children: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
                                helpdeskArticle: b.default.getArticleURL(G.HelpdeskArticles.GDPR_REQUEST_DATA)
                            })
                        }), e, r]
                    })
                }
                renderPrivacyAndTermsNote() {
                    return (0, a.jsx)(E.FormSection, {
                        className: V.marginBottom40,
                        children: (0, a.jsx)(E.FormNotice, {
                            type: E.FormNotice.Types.PRIMARY,
                            body: H.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
                                termsLink: G.MarketingURLs.TERMS,
                                privacyLink: G.MarketingURLs.PRIVACY
                            })
                        })
                    })
                }
                renderStaffOnlySettings() {
                    let {
                        currentUser: e,
                        nonSpamRetrainingOptIn: t
                    } = this.props;
                    return e.isStaff() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(E.FormDivider, {
                            className: V.marginBottom20
                        }), (0, a.jsxs)(E.FormSection, {
                            className: V.marginBottom40,
                            children: [(0, a.jsx)(E.FormTitle, {
                                tag: E.FormTitleTags.H5,
                                className: V.marginBottom8,
                                children: H.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
                            }), (0, a.jsxs)(E.FormItem, {
                                tag: E.FormTitleTags.H5,
                                className: V.marginBottom4,
                                children: [(0, a.jsx)(E.FormText, {
                                    type: E.FormTextTypes.DESCRIPTION,
                                    className: V.marginBottom8,
                                    children: H.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
                                }), (0, a.jsx)(E.RadioGroup, {
                                    options: (0, B.generateNonSpamRetrainingOptInSettingOptions)(),
                                    value: null == t ? B.NonSpamRetrainingOptInOptions.UNDECIDED : t ? B.NonSpamRetrainingOptInOptions.OPTIN : B.NonSpamRetrainingOptInOptions.OPTOUT,
                                    onChange: e => {
                                        let {
                                            value: t
                                        } = e;
                                        return y.NonSpamRetrainingOptIn.updateSetting(B.NonSpamRetrainingOptInOptionsToValue[t])
                                    }
                                })]
                            })]
                        })]
                    }) : null
                }
                renderSettingsBody() {
                    let {
                        fetchedConsents: e
                    } = this.props;
                    return (0, a.jsxs)(E.FormSection, {
                        tag: E.FormTitleTags.H1,
                        title: H.default.Messages.PRIVACY_AND_SAFETY,
                        children: [this.renderDMSafety(), this.renderServerPrivacy(), e ? this.renderDataPrivacy() : null, this.renderPrivacyAndTermsNote(), this.renderStaffOnlySettings()]
                    })
                }
                render() {
                    let {
                        safetyHubIsEnabled: e,
                        safetyHubFetchError: t,
                        subsection: s
                    } = this.props, {
                        selectedTab: n
                    } = this.state;
                    if (e) {
                        null != s && this.setState({
                            selectedTab: s
                        });
                        let e = n === k.SafetyHubView.ACCOUNT_STANDING && null != t;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(E.TabBar, {
                                className: w.settingsTabBar,
                                "aria-label": H.default.Messages.SAFETY_HUB_PAGE_TITLE,
                                selectedItem: n,
                                type: "top",
                                look: "brand",
                                onItemSelect: this.handleTabSelect,
                                children: [(0, a.jsx)(E.TabBar.Item, {
                                    className: w.settingsTabBarItem,
                                    id: k.SafetyHubView.SETTINGS,
                                    "aria-label": H.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
                                    children: H.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
                                }), (0, a.jsx)(E.TabBar.Item, {
                                    className: w.settingsTabBarItem,
                                    id: k.SafetyHubView.ACCOUNT_STANDING,
                                    "aria-label": H.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT,
                                    children: H.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT
                                })]
                            }), (0, a.jsx)(E.TabBar.Panel, {
                                id: n,
                                "aria-labelledby": (0, P.uid)(),
                                className: [e ? w.contentPanelNagbar : "", w.contentPanel].join(" "),
                                children: (0, a.jsx)("div", {
                                    children: this.SETTINGS_TABS[n]()
                                })
                            })]
                        })
                    }
                    return this.renderSettingsBody()
                }
                constructor(e) {
                    super(e), this.SETTINGS_TABS = {
                        [k.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
                        [k.SafetyHubView.ACCOUNT_STANDING]: () => (0, a.jsx)(x.default, {})
                    }, this.handleChangeDefaultGuildsRestricted = e => {
                        this.setState({
                            defaultGuildsRestricted: !e
                        }, () => this.showGuildRestrictionModal(!e))
                    }, this.handleChangeDropsOptedOut = () => {
                        this.props.personalization && y.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
                    }, this.handleChangeDefaultMessageRequestRestricted = e => {
                        this.setState({
                            defaultMessageRequestRestricted: !e
                        }, () => this.showMessageRequestRestrictionModal(!e))
                    }, this.handleUsageStatisticsChange = () => {
                        let e = !this.props.usageStatistics;
                        e ? (0, T.setConsents)([G.Consents.USAGE_STATISTICS], []).catch(W) : Y({
                            header: H.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
                            body: H.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
                            confirmText: H.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
                            cancelText: H.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
                            onConfirm: () => (0, T.setConsents)([], [G.Consents.USAGE_STATISTICS]).catch(W)
                        })
                    }, this.handlePersonalizationChange = () => {
                        let e = !this.props.personalization;
                        e ? (0, T.setConsents)([G.Consents.PERSONALIZATION], []).catch(W) : Y({
                            header: H.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
                            confirmText: H.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
                            cancelText: H.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
                            onConfirm: () => {
                                (0, T.setConsents)([], [G.Consents.PERSONALIZATION]).catch(W), y.DropsOptedOut.updateSetting(!0)
                            },
                            body: H.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
                        })
                    }, this.handleDataDownloadRequest = () => {
                        Y({
                            header: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
                            body: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_NOTE,
                            confirmText: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
                            cancelText: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
                            onConfirm: () => {
                                this.setState({
                                    requestingHarvest: !0
                                }, () => {
                                    (0, m.requestHarvest)().then(e => {
                                        null != e && null != e.body ? (this.setState({
                                            currentHarvestRequest: e.body
                                        }), f.default.show({
                                            body: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
                                        })) : f.default.show({
                                            title: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                                            body: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
                                        })
                                    }, () => f.default.show({
                                        title: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                                        body: H.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
                                    })).finally(() => this.setState({
                                        requestingHarvest: !1
                                    }))
                                })
                            }
                        })
                    }, this.handleTabSelect = e => {
                        this.setState({
                            selectedTab: e
                        })
                    };
                    let {
                        defaultGuildsRestricted: t,
                        defaultMessageRequestRestricted: s
                    } = e;
                    this.state = {
                        defaultGuildsRestricted: t,
                        defaultMessageRequestRestricted: s,
                        currentHarvestRequest: null,
                        requestingHarvest: !0,
                        selectedTab: k.SafetyHubView.SETTINGS
                    }
                }
            }

            function z() {
                let e = (0, c.useStateFromStores)([D.default], () => {
                        let e = D.default.getCurrentUser();
                        return o(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
                    }),
                    t = (0, c.useStateFromStoresObject)([R.default], () => ({
                        fetchedConsents: R.default.fetchedConsents,
                        usageStatistics: R.default.hasConsented(G.Consents.USAGE_STATISTICS),
                        personalization: R.default.hasConsented(G.Consents.PERSONALIZATION)
                    })),
                    s = (0, A.useIsSafetyHubEnabled)(),
                    n = (0, c.useStateFromStores)([O.default], () => O.default.getFetchError()),
                    l = (0, c.useStateFromStores)([v.default], () => v.default.getSubsection()),
                    i = (0, g.useIsEligibleForExplicitMediaRedaction)(),
                    r = (0, I.useExplicitContentSettingOrDefault)(),
                    d = (0, C.default)();
                return (0, a.jsx)(K, {
                    currentUser: e,
                    defaultGuildsRestricted: y.DefaultGuildsRestricted.useSetting(),
                    defaultMessageRequestRestricted: y.MessageRequestRestrictedDefault.useSetting(),
                    nonSpamRetrainingOptIn: y.NonSpamRetrainingOptIn.useSetting(),
                    isStricterMessageRequests: (0, p.default)(),
                    viewNsfwGuilds: y.ViewNsfwGuilds.useSetting(),
                    viewNsfwCommands: y.ViewNsfwCommands.useSetting(),
                    explicitContentFilter: y.ExplicitContentFilter.useSetting(),
                    dmSpamFilter: y.DmSpamFilterV2.useSetting(),
                    showCurrentGame: y.ShowCurrentGame.useSetting(),
                    dropsOptedOut: y.DropsOptedOut.useSetting(),
                    safetyHubIsEnabled: s,
                    safetyHubFetchError: n,
                    mediaRedactionIsEnabled: i,
                    explicitContentSettingGuilds: r.explicitContentGuilds,
                    explicitContentSettingFriendDm: r.explicitContentFriendDm,
                    explicitContentSettingNonFriendDm: r.explicitContentNonFriendDm,
                    userIsConsideredAdult: null == d || d,
                    subsection: l,
                    ...t
                })
            }
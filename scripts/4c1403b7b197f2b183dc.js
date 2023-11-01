(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81141"], {
        243704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6418419524dd1e583beb.svg"
        },
        812952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i, r, l, a, u = n("37983"),
                s = n("884691"),
                o = n("414456"),
                E = n.n(o),
                _ = n("145131"),
                d = n("298754");
            (i = l || (l = {})).PRIMARY = "primary", i.SECONDARY = "secondary", i.WARNING = "warning", i.ERROR = "error", (r = a || (a = {})).SMALL = "small", r.LARGE = "large", r.NONE = "none";
            let c = {
                    [l.PRIMARY]: d.colorPrimary,
                    [l.SECONDARY]: d.colorSecondary,
                    [l.WARNING]: d.colorWarning,
                    [l.ERROR]: d.colorError
                },
                S = {
                    [a.SMALL]: d.small,
                    [a.LARGE]: d.large,
                    [a.NONE]: null
                };
            class I extends s.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: i,
                        className: r,
                        iconClassName: l
                    } = this.props;
                    return (0, u.jsxs)(_.default, {
                        className: E(d.note, c[t], r),
                        align: _.default.Align.CENTER,
                        children: [(0, u.jsx)(e, {
                            className: E(d.icon, S[i], l)
                        }), (0, u.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            I.Colors = l, I.Sizes = a;
            var T = I
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("605250"),
                r = n("802493");
            let l = new i.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = r.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return l.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    r.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    r.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    r.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let l = r.default.stickersTransaction(i);
                    for (let i of (l.putAll(e, t), n)) l.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = r || (r = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return a
                },
                getApplicationResolution: function() {
                    return d
                },
                ApplicationStreamFPS: function() {
                    return u
                },
                ApplicationStreamPresets: function() {
                    return s
                },
                getApplicationFramerate: function() {
                    return c
                },
                ApplicationStreamPresetValues: function() {
                    return S
                },
                ApplicationStreamSettingRequirements: function() {
                    return I
                },
                ApplicationStreamResolutionButtons: function() {
                    return N
                },
                GoLiveDeviceResolutionButtons: function() {
                    return O
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return L
                },
                ApplicationStreamFPSButtons: function() {
                    return f
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return R
                }
            });
            var i, r, l, a, u, s, o = n("49111"),
                E = n("646718"),
                _ = n("782340");

            function d(e) {
                switch (e) {
                    case a.RESOLUTION_480:
                        return a.RESOLUTION_480;
                    case a.RESOLUTION_720:
                        return a.RESOLUTION_720;
                    case a.RESOLUTION_1080:
                        return a.RESOLUTION_1080;
                    case a.RESOLUTION_SOURCE:
                        return a.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function c(e) {
                switch (e) {
                    case u.FPS_5:
                        return u.FPS_5;
                    case u.FPS_15:
                        return u.FPS_15;
                    case u.FPS_30:
                        return u.FPS_30;
                    case u.FPS_60:
                        return u.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = a || (a = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (r = u || (u = {}))[r.FPS_5 = 5] = "FPS_5", r[r.FPS_15 = 15] = "FPS_15", r[r.FPS_30 = 30] = "FPS_30", r[r.FPS_60 = 60] = "FPS_60", (l = s || (s = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let S = {
                    [s.PRESET_DOCUMENTS]: [{
                        resolution: a.RESOLUTION_SOURCE,
                        fps: u.FPS_15
                    }, {
                        resolution: a.RESOLUTION_SOURCE,
                        fps: u.FPS_5
                    }],
                    [s.PRESET_VIDEO]: [{
                        resolution: a.RESOLUTION_1440,
                        fps: u.FPS_60
                    }, {
                        resolution: a.RESOLUTION_1080,
                        fps: u.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: u.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: u.FPS_30
                    }],
                    [s.PRESET_CUSTOM]: []
                },
                I = [{
                    resolution: a.RESOLUTION_SOURCE,
                    fps: u.FPS_60,
                    quality: E.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: u.FPS_30,
                    quality: E.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: u.FPS_15,
                    quality: E.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: u.FPS_5,
                    preset: s.PRESET_DOCUMENTS
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: E.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: u.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: E.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: u.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: E.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: E.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: u.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: E.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: u.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: E.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: E.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: u.FPS_30
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: u.FPS_15
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: u.FPS_5
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: u.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: E.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: u.FPS_30
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: u.FPS_15
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: u.FPS_5
                }];

            function T(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let N = [T(a.RESOLUTION_720), T(a.RESOLUTION_1080), T(a.RESOLUTION_1440), T(a.RESOLUTION_SOURCE, () => _.default.Messages.SCREENSHARE_SOURCE)],
                O = [T(a.RESOLUTION_720), T(a.RESOLUTION_1080), T(a.RESOLUTION_1440)],
                A = e => "".concat(e, "p"),
                L = [T(a.RESOLUTION_480, () => A(a.RESOLUTION_480)), T(a.RESOLUTION_720, () => A(a.RESOLUTION_720)), T(a.RESOLUTION_1080, () => A(a.RESOLUTION_1080)), T(a.RESOLUTION_1440, () => A(a.RESOLUTION_1440)), T(a.RESOLUTION_SOURCE, () => _.default.Messages.SCREENSHARE_SOURCE)],
                f = [T(u.FPS_15), T(u.FPS_30), T(u.FPS_60)],
                R = [T(u.FPS_15, () => _.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_15
                })), T(u.FPS_30, () => _.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_30
                })), T(u.FPS_60, () => _.default.Messages.STREAM_FPS_OPTION.format({
                    value: u.FPS_60
                }))]
        },
        874642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                a = n("812204"),
                u = n("685665"),
                s = n("642906"),
                o = n("85336"),
                E = n("273619"),
                _ = n("674158"),
                d = n("427459"),
                c = n("617917"),
                S = n("49111"),
                I = n("782340"),
                T = n("315706"),
                N = n("926622");
            let O = "premium-guild-subscription-upsell-modal-header";

            function A(e) {
                let {
                    title: t,
                    subtitle: n,
                    image: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: T.header,
                    children: [(0, i.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        id: O,
                        color: "header-primary",
                        className: N.marginBottom8,
                        children: t
                    }), (0, i.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: T.subtitleText,
                        children: n
                    }), r]
                })
            }
            let L = e => {
                    let {
                        onClose: t,
                        perks: n,
                        perkIntro: r = I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
                        headerProps: a
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: T.wrapper,
                        children: [(0, i.jsx)(l.ModalCloseButton, {
                            className: T.closeButton,
                            onClick: () => {
                                t()
                            }
                        }), (0, i.jsx)(f, {
                            headerProps: a,
                            perkIntro: r
                        }), (0, i.jsx)("div", {
                            className: T.perks,
                            children: n.map((e, t) => {
                                let {
                                    icon: n,
                                    iconClassName: r,
                                    description: l,
                                    color: a
                                } = e;
                                return (0, i.jsx)(_.default, {
                                    icon: n,
                                    iconClassName: r,
                                    description: l,
                                    color: a
                                }, t)
                            })
                        })]
                    })
                },
                f = e => {
                    let {
                        headerProps: t,
                        perkIntro: a
                    } = e;
                    return (0, i.jsxs)(r.Fragment, {
                        children: [null != t ? (0, i.jsx)(A, {
                            ...t
                        }) : (0, i.jsx)("img", {
                            className: T.heroImage,
                            src: n("243704"),
                            alt: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: T.heading,
                            children: a
                        })]
                    })
                },
                R = e => {
                    let {
                        guild: t,
                        targetBoostedGuildTier: n,
                        onClose: r,
                        analyticsSourceLocation: a
                    } = e, u = {
                        section: S.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
                        object: S.AnalyticsObjects.BUTTON_CTA,
                        objectType: null != n ? (0, d.boostedGuildTierToAnalyticsObjectType)(n) : null
                    };
                    return (0, i.jsxs)(l.ModalFooter, {
                        className: T.footer,
                        children: [(0, i.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            onClick: () => {
                                r()
                            },
                            children: I.default.Messages.CLOSE
                        }), (0, i.jsx)(c.default, {
                            analyticsLocation: u,
                            analyticsSourceLocation: a,
                            guild: t,
                            targetBoostedGuildTier: n,
                            onClose: () => {
                                r()
                            }
                        })]
                    })
                };

            function U(e) {
                let {
                    analyticsSourceLocation: t,
                    guild: n,
                    targetBoostedGuildTier: r,
                    perks: _,
                    perkIntro: d,
                    headerProps: c,
                    onClose: S,
                    ...I
                } = e, {
                    AnalyticsLocationProvider: T
                } = (0, u.default)(a.default.ACTIVITY_DIRECTORY);
                return (0, i.jsx)(T, {
                    children: (0, i.jsx)(s.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, i.jsx)(l.ModalRoot, {
                            ...I,
                            "aria-labelledby": O,
                            children: (0, i.jsx)(E.default, {
                                hideBreadcrumbs: !0,
                                body: (0, i.jsx)(L, {
                                    onClose: S,
                                    perks: _,
                                    perkIntro: d,
                                    headerProps: c
                                }),
                                footer: (0, i.jsx)(R, {
                                    guild: n,
                                    targetBoostedGuildTier: r,
                                    onClose: S,
                                    analyticsSourceLocation: t
                                }),
                                steps: [o.Step.PREMIUM_GUILD_UPSELL],
                                currentStep: o.Step.PREMIUM_GUILD_UPSELL
                            })
                        })
                    })
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return u
                },
                parseExtraDataFromInviteKey: function() {
                    return s
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            });
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return u({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function u(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function s(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = i.parse(n),
                    u = (0, r.getFirstQueryStringValue)(a[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: u
                }
            }

            function o(e) {
                let [t] = e.split("?");
                return t
            }
        },
        273619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("685635"),
                a = n("414456"),
                u = n.n(a),
                s = n("862337"),
                o = n("77078"),
                E = n("812952"),
                _ = n("448993"),
                d = n("736978"),
                c = n("642906"),
                S = n("85336");
            n("153727"), n("650484");
            var I = n("454589"),
                T = n("978679"),
                N = n("745279"),
                O = n("49111"),
                A = n("782340"),
                L = n("129429");
            let f = new Set([S.Step.SKU_SELECT, S.Step.AWAITING_AUTHENTICATION, S.Step.AWAITING_PURCHASE_TOKEN_AUTH, S.Step.CONFIRM]);

            function R(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: a,
                    paymentError: R,
                    header: U,
                    footer: D,
                    isGift: C = !1,
                    giftMessage: p = A.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: P = !1,
                    hideBreadcrumbs: g = !1,
                    isLoading: v = !1,
                    purchaseError: h,
                    purchaseErrorBlockRef: M,
                    planError: G,
                    onScroll: m,
                    scrollerClassName: F,
                    hasCurrencies: y = !1
                } = e, B = null;
                null != R && null == (0, S.errorToStep)(R) ? B = R : null != h ? B = h : null != G && (B = G);
                let k = null != B ? B.message : "";
                null != B && B instanceof _.BillingError && (B.code === d.ErrorCodes.CARD_DECLINED && y && (k += " ".concat(A.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === d.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = A.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === O.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = A.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: H
                } = (0, c.usePaymentContext)();
                v = v || null == H;
                let V = r.useRef(new s.Timeout);
                r.useEffect(() => {
                    let e = V.current;
                    return null != H || e.isStarted() ? null != H && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, N.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [H]);
                let x = t.includes(S.Step.PAYMENT_TYPE) ? S.Step.PAYMENT_TYPE : S.Step.ADD_PAYMENT_STEPS;
                return (0, i.jsxs)(l.Elements, {
                    options: O.StripeElementsOptions,
                    stripe: H,
                    children: [U, (0, i.jsxs)("div", {
                        className: u("paymentModalContent", L.content),
                        children: [C && !P && n !== S.Step.CONFIRM ? (0, i.jsx)(E.default, {
                            className: L.paymentNote,
                            iconSize: E.default.Sizes.SMALL,
                            icon: T.default,
                            color: null == p ? E.default.Colors.PRIMARY : E.default.Colors.SECONDARY,
                            children: p
                        }) : null, g ? null : (0, i.jsx)("div", {
                            className: L.breadcrumbsWrapper,
                            children: (0, i.jsx)(I.default, {
                                activeId: S.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? x : n,
                                breadcrumbs: t.filter(e => !S.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !f.has(e)).map(e => ({
                                    id: e,
                                    label: (0, S.getLabelForStep)(e)
                                }))
                            })
                        }), (0, i.jsxs)("div", {
                            className: L.bodyWrapper,
                            children: [null == B ? null : (0, i.jsx)("div", {
                                className: L.errorBlockWrapper,
                                children: (0, i.jsx)(o.FormErrorBlock, {
                                    ref: M,
                                    children: k
                                })
                            }), v ? (0, i.jsx)(o.Spinner, {
                                className: L.loadingBlock
                            }) : (0, i.jsx)(o.Sequencer, {
                                className: L.sequencer,
                                staticClassName: L.sequencerStatic,
                                animatedNodeClassName: L.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, i.jsx)(o.AdvancedScrollerThin, {
                                    onScroll: m,
                                    className: u(L.scroller, F),
                                    children: a
                                })
                            })]
                        })]
                    }), D]
                })
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                a = n("288264");

            function u(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: r,
                    color: u
                } = e;
                return (0, i.jsxs)("div", {
                    className: a.perkRow,
                    children: [(0, i.jsx)("div", {
                        className: a.perkIconContainer,
                        children: (0, i.jsx)(t, {
                            color: u,
                            className: l(a.perkIcon, n)
                        })
                    }), (0, i.jsx)("div", {
                        className: a.perkDescription,
                        children: r
                    })]
                })
            }
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return u
                },
                SoundboardWheelSize: function() {
                    return s
                },
                DEFAULT_KEYBIND: function() {
                    return o
                },
                EMPTY_SOUND_LIST: function() {
                    return E
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return _
                }
            });
            let l = 32,
                a = 5,
                u = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED", i.SUCCESS, i.INTERRUPTED;
            let s = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                o = "ctrl+`",
                E = [],
                _ = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var i, r, l = n("917351"),
                a = n.n(l),
                u = n("446674"),
                s = n("913144"),
                o = n("845579"),
                E = n("374363"),
                _ = n("697218"),
                d = n("599110"),
                c = n("829536"),
                S = n("846325"),
                I = n("49111"),
                T = n("397336");
            (i = r || (r = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
            let N = new Map,
                O = new Map,
                A = new Set,
                L = r.NOT_FETCHED,
                f = r.NOT_FETCHED,
                R = new Set,
                U = new Map,
                D = !1;

            function C(e) {
                let {
                    sound: t
                } = e, n = N.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, N.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), N.set(t.guildId, [...n]))
            }
            let p = a.debounce(e => {
                d.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, c.amplitudeToPerceptual)(e))
                }), o.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function P(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? A.add(e) : A.delete(e);
                for (let e of A.keys()) null == i[e] && A.delete(e)
            }
            class g extends u.default.Store {
                initialize() {
                    this.waitFor(E.default), P(E.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(N),
                        favoritedSoundIds: Array.from(R),
                        localSoundboardMutes: Array.from(A)
                    }
                }
                getSounds() {
                    return N
                }
                getSoundsForGuild(e) {
                    return N.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(S.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = N.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(N.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return f === r.FETCHING
                }
                isFetchingDefaultSounds() {
                    return L === r.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return L === r.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return L === r.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = U.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != O.get(e)
                }
                isFavoriteSound(e) {
                    return R.has(e)
                }
                getFavorites() {
                    return R
                }
                isLocalSoundboardMuted(e) {
                    return A.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return D
                }
                hasFetchedAllSounds() {
                    return f === r.FETCHED && L === r.FETCHED
                }
            }
            g.displayName = "SoundboardStore";
            var v = new g(s.default, {
                LOGOUT: function() {
                    N.clear(), O.clear(), U.clear(), D = !1, f = r.NOT_FETCHED, L = r.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    f = r.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: C,
                GUILD_SOUNDBOARD_SOUND_UPDATE: C,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    N.delete(t);
                    let i = N.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), N.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: l
                    } = e, a = (null !== (n = O.get(r)) && void 0 !== n ? n : 0) + 1, u = (null !== (i = U.get(l)) && void 0 !== i ? i : 0) + 1;
                    O.set(r, a), U.set(l, u), l !== (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (D = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, l = (null !== (t = O.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = U.get(r)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? O.delete(i) : O.set(i, l), a <= 0 ? U.delete(r) : U.set(r, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    p(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    O.clear(), U.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, l;
                        R = new Set(null !== (l = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== l ? l : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && P(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    L = r.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    N.set(S.DEFAULT_SOUND_GUILD_ID, t), L = r.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        N.set(t, n)
                    }), f = r.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    N.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    A.has(t) ? A.delete(t) : A.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    N = new Map(Object.entries(t.soundboardSounds)), R = new Set(t.favoritedSoundIds), A = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    N.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var i, r, l = n("102053"),
                a = n("446674"),
                u = n("913144"),
                s = n("802493"),
                o = n("595525"),
                E = n("212084"),
                _ = n("867805"),
                d = n("267567"),
                c = n("813006"),
                S = n("778689"),
                I = n("305961"),
                T = n("161585"),
                N = n("24373"),
                O = n("49111");
            (i = r || (r = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let A = 2,
                L = new Map,
                f = new Map,
                R = null,
                U = [],
                D = null,
                C = !1,
                p = new Map,
                P = (e, t) => {
                    p = new Map(p.set(e, t))
                },
                g = 1e3 * O.Durations.HOUR,
                v = () => {
                    if (0 !== A) return;
                    let e = s.default.database();
                    if (null == e) return;
                    A = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => E.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (S.default.isMember(e) && !p.has(e)) {
                                for (let t of n) h(t, !0, I.default.getGuild(e));
                                P(e, n)
                            }
                    }
                },
                h = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    f.set(e.id, e), t && M(e, n)
                },
                M = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == R) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: T.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, N.isStandardSticker)(e)) {
                        let t = U.find(t => t.id === e.pack_id),
                            r = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: T.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && r.push({
                            type: T.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), R.set(e.id, r)
                    } else if ((0, N.isGuildSticker)(e) && null != n) {
                        let r = _.default.getByName(n),
                            l = {
                                type: T.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [i, l];
                        if (null != t) {
                            let e = (t instanceof(0, c.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: T.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == r) {
                            R.set(e.id, a);
                            return
                        }
                        a.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: r.surrogates
                        }), r.forEachDiversity(e => a.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), R.set(e.id, a)
                    }
                },
                G = (e, t, n) => {
                    L.set(e.id, e);
                    let i = [...U];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), U = i
                    }(t || n) && e.stickers.forEach(e => h(e))
                },
                m = () => {
                    p.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => M(e, n))
                    }), U.forEach(e => {
                        e.stickers.forEach(e => M(e))
                    })
                };

            function F(e) {
                null != e.stickers && (e.stickers.forEach(t => h(t, !0, e)), P(e.id, e.stickers))
            }
            class y extends a.default.Store {
                initialize() {
                    this.waitFor(s.default, S.default, I.default)
                }
                get isLoaded() {
                    return 0 !== A
                }
                get stickerMetadata() {
                    return v(), null == R && (R = new Map, m()), R
                }
                get hasLoadedStickerPacks() {
                    return null != D && D + g > Date.now()
                }
                get isFetchingStickerPacks() {
                    return C
                }
                getStickerById(e) {
                    return !f.has(e) && v(), f.get(e)
                }
                getStickerPack(e) {
                    return L.get(e)
                }
                getPremiumPacks() {
                    return U
                }
                isPremiumPack(e) {
                    return U.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return p
                }
                getAllStickersIterator() {
                    return v(), f.values()
                }
                getAllGuildStickers() {
                    return v(), p
                }
                getStickersByGuildId(e) {
                    return v(), p.get(e)
                }
            }
            y.displayName = "StickersStore";
            var B = new y(u.default, {
                BACKGROUND_SYNC: () => {
                    R = null, f = new Map, p = new Map, A = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    R = null, f = new Map, p = new Map, t.forEach(F), A = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !d.default.isLurking(t.id) && (F(t), 1 === A && null == t.stickers && null != t.stickerUpdates && (A = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = p.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != R && R.delete(e.id), f.delete(e.id)
                    }), p.delete(n.id), p = new Map(p)
                },
                LOGOUT: () => {
                    A = 0, U = [], f.clear(), L.clear(), R = null, p.clear(), p = new Map(p), C = !1, D = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    C = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => G(e, !0)), D = Date.now(), C = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    G(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => h(e)), P(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: r
                    } = e, l = null !== (t = p.get(i)) && void 0 !== t ? t : [];
                    P(i, [...null !== (n = l.filter(e => e.id !== r.id)) && void 0 !== n ? n : [], r]), h(r)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    h(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, r = e => {
                        let t;
                        let n = f.get(e.id);
                        return null != n && (0, N.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = p.get(n)) && void 0 !== t ? t : [], a = l.filter(e => null == i.find(t => t.id === e.id));
                    a.forEach(e => {
                        f.delete(e.id), null != R && R.delete(e.id)
                    });
                    let u = i.map(e => r(e));
                    u.forEach(e => h(e)), P(n, u)
                }
            })
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class r extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("619340"),
                a = n("376556"),
                u = n("450205"),
                s = n("813006"),
                o = n("49111");
            let E = new Set([o.PlatformTypes.CONTACTS]),
                _ = !0,
                d = [],
                c = [],
                S = {},
                I = {},
                T = e => {
                    d = e.filter(e => !E.has(e.type) && a.default.isSupported(e.type)), c = e.filter(e => E.has(e.type)), _ = !1
                };
            class N extends i.default.Store {
                isJoining(e) {
                    return S[e] || !1
                }
                isFetching() {
                    return _
                }
                getAccounts() {
                    return d
                }
                getLocalAccounts() {
                    return c
                }
                getAccount(e, t) {
                    return d.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return c.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return I[e] || !1
                }
            }
            N.displayName = "ConnectedAccountsStore";
            var O = new N(r.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new u.default(e));
                    T(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new u.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new s.default(e.guild)
                            }))
                        }));
                        T(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    S[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: r
                    } = e, l = d.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != i && (l.revoked = i), null != r && (l.accessToken = r)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                a = n("49111");
            let u = {},
                s = {},
                o = {};

            function E(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = u[e],
                    s = null != r ? {
                        state: a.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(s), u = {
                    ...u,
                    [e]: s
                }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [s.guild.id]: e
                })
            }

            function _(e) {
                return E(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class d extends i.default.Store {
                getInvite(e) {
                    return u[e]
                }
                getInviteError(e) {
                    return s[e]
                }
                getInvites() {
                    return u
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            d.displayName = "InviteStore";
            var c = new d(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    u = {
                        ...u,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return E(e.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: _,
                INSTANT_INVITE_REVOKE_SUCCESS: _,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return E(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => E(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return E(e.invite.code, t => {
                        var n, i;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return E(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return E(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return s[e.code] = e.error, E(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return E(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return E(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return E(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return r
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: i,
                    ...l
                } = t, a = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...a,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let u = i.properties;
                        "function" == typeof i.properties && (u = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...a,
                            ...u
                        }), n(e)
                    })
                })
            }
            var a = {
                get: function(e) {
                    return l(i.default.get, e, "get")
                },
                post: function(e) {
                    return l(i.default.post, e, "post")
                },
                put: function(e) {
                    return l(i.default.put, e, "put")
                },
                patch: function(e) {
                    return l(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(i.default.delete, e, "del")
                }
            }
        }
    }
]);
            "use strict";
            s.r(t), s.d(t, {
                mapOptionToHighlightedRowOptions: function() {
                    return u
                },
                generateVerificationLevelOptions: function() {
                    return c
                },
                generateContentFilterHighlightedOptions: function() {
                    return d
                },
                generateDmSpamOptions: function() {
                    return f
                },
                generateExplicitImageOptions: function() {
                    return E
                }
            });
            var l = s("151426");
            s("854588");
            var n = s("669491"),
                r = s("797944"),
                o = s("49111"),
                a = s("568456"),
                i = s("782340");

            function u(e) {
                return e.map(e => ({
                    title: e.name,
                    description: e.desc,
                    highlightColor: function(e) {
                        switch (e) {
                            case _("PRIMARY_400"):
                                return r.HighlightColors.ACCENT;
                            case _("GREEN_360"):
                                return r.HighlightColors.GREEN;
                            case _("YELLOW_360"):
                                return r.HighlightColors.YELLOW;
                            case _("ORANGE_345"):
                                return r.HighlightColors.ORANGE;
                            case _("RED_400"):
                                return r.HighlightColors.RED;
                            default:
                                return r.HighlightColors.NONE
                        }
                    }(e.color),
                    value: e.value,
                    disabled: e.disabled
                }))
            }

            function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return [{
                    name: i.default.Messages.VERIFICATION_LEVEL_NONE,
                    desc: i.default.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
                    value: o.VerificationLevels.NONE,
                    disabled: e,
                    tooltipText: e ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
                }, {
                    name: i.default.Messages.VERIFICATION_LEVEL_LOW,
                    desc: i.default.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
                    value: o.VerificationLevels.LOW,
                    color: t ? void 0 : _("GREEN_360")
                }, {
                    name: i.default.Messages.VERIFICATION_LEVEL_MEDIUM,
                    desc: i.default.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({
                        min: o.VerificationCriteria.ACCOUNT_AGE
                    }),
                    value: o.VerificationLevels.MEDIUM,
                    color: t ? void 0 : _("YELLOW_360")
                }, {
                    name: i.default.Messages.VERIFICATION_LEVEL_HIGH,
                    desc: i.default.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({
                        min: o.VerificationCriteria.MEMBER_AGE
                    }),
                    value: o.VerificationLevels.HIGH,
                    color: t ? void 0 : _("ORANGE_345")
                }, {
                    name: i.default.Messages.VERIFICATION_LEVEL_VERY_HIGH,
                    desc: i.default.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
                    value: o.VerificationLevels.VERY_HIGH,
                    color: t ? void 0 : _("RED_400")
                }]
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [{
                    name: i.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
                    desc: i.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.ALL_MEMBERS,
                    color: _("RED_400")
                }, {
                    name: i.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
                    desc: i.default.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES,
                    disabled: e,
                    tooltipText: e ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
                    color: _("YELLOW_360")
                }, {
                    name: i.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
                    desc: i.default.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
                    value: o.GuildExplicitContentFilterTypes.DISABLED,
                    disabled: e,
                    tooltipText: e ? i.default.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
                    color: _("PRIMARY_400")
                }]
            }

            function f() {
                return [{
                    name: i.default.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
                    desc: i.default.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
                    value: l.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS,
                    color: _("GREEN_360")
                }, {
                    name: i.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
                    desc: i.default.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
                    value: l.DmSpamFilterV2.NON_FRIENDS,
                    color: _("YELLOW_360")
                }, {
                    name: i.default.Messages.USER_DM_SPAM_FILTER_DISABLED,
                    desc: i.default.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
                    value: l.DmSpamFilterV2.DISABLED,
                    color: _("RED_400")
                }]
            }

            function E() {
                return [{
                    name: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
                    desc: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
                    value: a.ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS,
                    color: _("GREEN_360")
                }, {
                    name: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
                    desc: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
                    value: a.ExplicitContentFilterTypes.NON_FRIENDS,
                    color: _("YELLOW_360")
                }, {
                    name: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
                    desc: i.default.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
                    value: a.ExplicitContentFilterTypes.DISABLED,
                    color: _("RED_400")
                }]
            }

            function _(e) {
                return n.default.unsafe_rawColors[e].css
            }
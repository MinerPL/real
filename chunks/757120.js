            "use strict";
            s.r(t), s.d(t, {
                GuildSettingsVanityURLNotice: function() {
                    return x
                },
                default: function() {
                    return U
                }
            }), s("781738"), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("642950"),
                u = s("45299"),
                c = s("812204"),
                E = s("716241"),
                _ = s("685665"),
                T = s("634544"),
                I = s("379532"),
                S = s("52393"),
                N = s("102985"),
                g = s("409633"),
                f = s("181114"),
                A = s("118503"),
                L = s("427459"),
                m = s("900938"),
                C = s("610494"),
                O = s("914581"),
                h = s("11893"),
                R = s("49111"),
                D = s("944305"),
                M = s("782340"),
                G = s("311438");
            let x = r.default.connectStores([m.default, O.default], () => {
                let e = O.default.vanityURLCode,
                    t = m.default.getGuildId();
                return {
                    vanityURLCode: e,
                    guildId: t,
                    onReset() {
                        (0, C.resetCode)()
                    },
                    onSave() {
                        null != t && (0, C.saveCode)(t, e)
                    }
                }
            })(u.default);
            class p extends n.PureComponent {
                componentWillUnmount() {
                    (0, C.close)()
                }
                renderEditCard() {
                    let {
                        isRemoving: e
                    } = this.state, {
                        hasError: t,
                        originalVanityURLCode: s,
                        vanityURLCode: n,
                        vanityURLUses: l,
                        guild: i
                    } = this.props;
                    if (null == n) return (0, a.jsx)(o.Spinner, {});
                    let r = (null == i ? void 0 : i.hasFeature(R.GuildFeatures.VANITY_URL)) === !0;
                    return (0, a.jsxs)(o.Card, {
                        editable: !0,
                        className: G.editVanityUrlCard,
                        children: [(0, a.jsxs)(o.FormTitle, {
                            className: G.formTitle,
                            children: [(0, a.jsx)("div", {
                                className: G.formTitleField,
                                children: M.default.Messages.INVITE_URL
                            }), n.length > 0 ? (0, a.jsx)("div", {
                                children: M.default.Messages.VANITY_URL_USES.format({
                                    uses: l
                                })
                            }) : null]
                        }), (0, a.jsx)(g.default, {
                            prefix: "".concat("https://discord.gg", "/"),
                            value: n,
                            onChange: this.handleInviteCodeChange,
                            maxLength: 25,
                            autoFocus: !0,
                            error: t,
                            disabled: !r
                        }), null != s && s.length > 0 ? (0, a.jsx)(o.Button, {
                            className: G.removeVanityUrlButton,
                            onClick: this.handleRemoveVanityURL,
                            submitting: e,
                            look: o.Button.Looks.LINK,
                            size: o.Button.Sizes.MIN,
                            color: o.Button.Colors.RED,
                            children: M.default.Messages.REMOVE_VANITY_URL
                        }) : null]
                    })
                }
                renderUpsellButton() {
                    return (0, a.jsxs)(f.default, {
                        color: o.Button.Colors.GREEN,
                        className: i(G.marginTop16),
                        innerClassName: G.upsellButton,
                        onClick: this.handleVanityUrlUpsellButton,
                        children: [(0, a.jsx)(A.default, {
                            height: 16,
                            width: 16,
                            className: G.premiumUpsellBadge
                        }), " ", M.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
                    })
                }
                renderInfo() {
                    let {
                        hasError: e,
                        errorDetails: t,
                        originalVanityURLCode: s
                    } = this.props;
                    if (e) return (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-danger",
                        className: G.marginTop20,
                        children: (0, h.getErrorMessageFromErrorCode)(null == t ? void 0 : t.code)
                    });
                    if (null != s && s.length > 0) {
                        let e = (0, S.default)(s);
                        return (0, a.jsx)(o.FormText, {
                            className: G.marginTop20,
                            type: o.FormTextTypes.LABEL_DESCRIPTOR,
                            children: M.default.Messages.VANITY_URL_HELP_EXTENDED_LINK.format({
                                urlText: e,
                                urlValue: e
                            })
                        })
                    }
                }
                handleRemoveVanityURL() {
                    (0, C.setCode)("")
                }
                handleInviteCodeChange(e) {
                    (0, C.setCode)(e.replace(/ /g, "-"))
                }
                render() {
                    let {
                        hide: e,
                        guild: t
                    } = this.props;
                    return null == t ? null : e ? (0, a.jsx)(d.default, {}) : (0, a.jsxs)(o.FormSection, {
                        children: [(0, a.jsxs)(o.FormTitle, {
                            tag: o.FormTitleTags.H1,
                            className: G.flexFormTitle,
                            children: [(0, a.jsx)("div", {
                                children: M.default.Messages.VANITY_URL
                            }), (0, a.jsx)(T.default, {
                                guild: t,
                                guildFeature: R.GuildFeatures.VANITY_URL,
                                className: G.guildFeatureAvailabilityIndicator,
                                onClick: this.handleVanityUrlUpsellIndicator
                            })]
                        }), (0, a.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: G.marginBottom8,
                            children: M.default.Messages.VANITY_URL_HELP
                        }), (0, a.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: G.marginBottom20,
                            children: M.default.Messages.VANITY_URL_HELP_CONFLICT
                        }), (0, a.jsx)(o.FormText, {
                            type: o.FormTextTypes.DESCRIPTION,
                            className: G.marginBottom20,
                            children: M.default.Messages.VANITY_URL_DEFAULT_CHANNEL
                        }), (0, h.canSeeVanityUrlSettings)(t) ? this.renderEditCard() : this.renderUpsellButton(), this.renderInfo()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isRemoving: !1
                    }, this.handleShowModalUpsell = (e, t, s, a, n) => {
                        e.preventDefault(), e.stopPropagation();
                        let {
                            guild: l,
                            analyticsLocations: i
                        } = this.props;
                        null != l && ((0, E.trackWithMetadata)(R.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
                            location: {
                                section: s,
                                object: R.AnalyticsObjects.LEARN_MORE,
                                objectType: (0, L.boostedGuildTierToAnalyticsObjectType)(t),
                                location_stack: i
                            },
                            guild_id: null == l ? void 0 : l.id
                        }), (0, I.default)({
                            analyticsLocations: i,
                            analyticsSourceLocation: {
                                section: s,
                                object: a,
                                page: R.AnalyticsPages.GUILD_SETTINGS
                            },
                            guild: l,
                            perks: n
                        }))
                    }, this.handleVanityUrlUpsellIndicator = e => {
                        this.handleShowModalUpsell(e, R.BoostedGuildTiers.TIER_3, R.AnalyticsSections.GUILD_SETTINGS_VANITY_URL, R.AnalyticsObjects.BADGE, (0, D.vanityUrlUpsellPerks)())
                    }, this.handleVanityUrlUpsellButton = e => {
                        this.handleShowModalUpsell(e, R.BoostedGuildTiers.TIER_3, R.AnalyticsSections.GUILD_SETTINGS_VANITY_URL, R.AnalyticsObjects.BUTTON_CTA, (0, D.vanityUrlUpsellPerks)())
                    }
                }
            }

            function U() {
                let e = (0, r.useStateFromStores)([m.default], () => m.default.getGuild()),
                    t = (0, r.useStateFromStoresObject)([O.default], () => ({
                        vanityURLCode: O.default.vanityURLCode,
                        vanityURLUses: O.default.vanityURLUses,
                        originalVanityURLCode: O.default.originalVanityURLCode,
                        hasError: O.default.hasError(),
                        errorDetails: O.default.errorDetails
                    })),
                    s = (0, r.useStateFromStores)([N.default], () => N.default.hideInstantInvites),
                    {
                        analyticsLocations: n,
                        AnalyticsLocationProvider: l
                    } = (0, _.default)(c.default.VANITY_URL);
                return (0, a.jsx)(l, {
                    children: (0, a.jsx)(p, {
                        guild: e,
                        ...t,
                        hide: s,
                        analyticsLocations: n
                    })
                })
            }
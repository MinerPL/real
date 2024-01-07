            "use strict";
            s.r(t), s.d(t, {
                EmojiTableTitle: function() {
                    return K
                },
                EmojiTable: function() {
                    return W
                },
                default: function() {
                    return X
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("917351"),
                u = s.n(d),
                c = s("748820"),
                E = s("446674"),
                _ = s("77078"),
                T = s("404118"),
                I = s("150021"),
                S = s("133403"),
                N = s("349389"),
                g = s("84339"),
                f = s("250666"),
                A = s("341595"),
                L = s("345988"),
                m = s("153043"),
                C = s("426733"),
                O = s("817963"),
                h = s("161778"),
                R = s("941886"),
                D = s("987772"),
                M = s("599110"),
                G = s("315102"),
                x = s("402671"),
                p = s("427459"),
                U = s("592407"),
                v = s("466227"),
                j = s("900938"),
                P = s("802310"),
                y = s("49111"),
                b = s("958706"),
                B = s("782340"),
                F = s("341569"),
                H = s("405879");
            let V = u.throttle(I.fetchEmoji, 1e3),
                k = e => {
                    let {
                        currentTarget: t,
                        which: s
                    } = e;
                    13 === s && t.blur()
                },
                w = e => {
                    let {
                        guildId: t,
                        emoji: s,
                        onEdit: l,
                        editingDisabled: r = !1
                    } = e, [o, d] = n.useState(s.name), u = G.default.getEmojiURL({
                        id: s.id,
                        animated: s.animated,
                        size: 32
                    });
                    return (0, a.jsxs)("div", {
                        className: i(F.emojiRow, H.card),
                        children: [(0, a.jsx)("div", {
                            className: F.emojiColumn,
                            children: (0, a.jsx)(_.Tooltip, {
                                text: s.available ? null : B.default.Messages.EMOJI_DISABLED_PREMIUM_TIER_LOST,
                                children: e => (0, a.jsx)("div", {
                                    ...e,
                                    className: i(F.emojiImage, {
                                        [F.emojiDisabled]: !s.available
                                    }),
                                    style: {
                                        backgroundImage: "url(".concat(u, ")")
                                    }
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: F.column,
                            children: [(0, a.jsx)(_.TextInput, {
                                className: i(F.emojiAliasInput, {
                                    [F.emojiAliasInputDisabled]: r
                                }),
                                inputClassName: F.emojiInput,
                                placeholder: B.default.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER,
                                onKeyPress: k,
                                onChange: d,
                                onBlur: () => {
                                    o !== s.name && (0, I.updateEmoji)({
                                        guildId: t,
                                        emojiId: s.id,
                                        name: x.default.sanitizeEmojiName(o)
                                    })
                                },
                                size: _.TextInput.Sizes.MINI,
                                value: o,
                                maxLength: b.EMOJI_MAX_LENGTH,
                                disabled: r
                            }), (0, a.jsx)("div", {
                                className: F.emojiAliasPlaceholder,
                                children: (0, a.jsx)("div", {
                                    className: F.emojiAliasPlaceholderContent,
                                    children: o.length > 0 ? o : B.default.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: F.column,
                            children: [(0, a.jsx)(_.Avatar, {
                                src: s.user.getAvatarURL(t, 24),
                                "aria-label": s.user.username,
                                size: _.AvatarSizes.SIZE_24,
                                className: F.avatar
                            }), (0, a.jsx)(_.FormText, {
                                className: i(F.emojiRowText),
                                children: s.user.username
                            })]
                        }), null != l && !r && (0, a.jsx)(_.Clickable, {
                            "aria-label": B.default.Messages.EDIT,
                            className: F.editEmojiRolesButton,
                            onClick: () => l(s, t),
                            children: (0, a.jsx)(D.default, {
                                width: 24,
                                height: 24,
                                className: F.editEmojiRolesIcon
                            })
                        }), !r && (0, a.jsx)(S.default, {
                            className: F.emojiRemove,
                            onClick: () => {
                                (0, I.deleteEmoji)(t, s.id).catch(e => {
                                    let {
                                        status: t
                                    } = e;
                                    429 === t && T.default.show({
                                        title: B.default.Messages.GENERIC_ERROR_TITLE,
                                        body: B.default.Messages.RATE_LIMITED
                                    })
                                })
                            }
                        })]
                    })
                },
                Y = e => {
                    let {
                        isLoading: t,
                        staticEmojis: n,
                        animatedEmojis: l,
                        theme: i,
                        guild: r
                    } = e;
                    return t ? (0, a.jsx)(_.Spinner, {
                        className: F.spinner,
                        type: _.Spinner.Type.SPINNING_CIRCLE
                    }) : 0 === n.length && 0 === l.length ? (0, a.jsxs)(R.default, {
                        theme: i,
                        className: F.empty,
                        children: [(0, a.jsx)(R.EmptyStateImage, {
                            darkSrc: s("404807"),
                            lightSrc: s("124495"),
                            width: 272,
                            height: 212
                        }), (0, a.jsx)(R.EmptyStateText, {
                            note: B.default.Messages.NO_EMOJI,
                            children: B.default.Messages.NO_EMOJI_TITLE
                        })]
                    }) : (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(K, {
                            title: B.default.Messages.EMOJI,
                            maxSlots: r.getMaxEmojiSlots(),
                            emojiCount: n.length
                        }), (0, a.jsx)(W, {
                            emojis: n,
                            guild: r
                        }), (0, a.jsx)(K, {
                            title: B.default.Messages.ANIMATED_EMOJI,
                            maxSlots: r.getMaxEmojiSlots(),
                            emojiCount: l.length
                        }), (0, a.jsx)(W, {
                            emojis: l,
                            guild: r
                        })]
                    })
                },
                K = e => {
                    let {
                        title: t,
                        maxSlots: s,
                        emojiCount: n
                    } = e;
                    return (0, a.jsxs)(_.FormTitle, {
                        tag: _.FormTitleTags.H2,
                        className: F.title,
                        children: [t, (0, a.jsxs)("span", {
                            children: [" — ", B.default.Messages.EMOJI_SLOTS_AVAILABLE.format({
                                count: s - n
                            })]
                        })]
                    })
                },
                W = e => {
                    let {
                        emojis: t,
                        guild: s,
                        onEdit: l,
                        editingDisabled: i = !1
                    } = e, r = n.useMemo(() => [...t].reverse(), [t]), {
                        canManageGuildExpression: o
                    } = (0, O.getManageResourcePermissions)(s);
                    return 0 === t.length ? (0, a.jsx)(_.FormText, {
                        type: _.FormTextTypes.DESCRIPTION,
                        className: F.content,
                        children: B.default.Messages.NO_EMOJI_BODY
                    }) : (0, a.jsxs)(_.FormSection, {
                        className: F.content,
                        children: [(0, a.jsxs)("div", {
                            className: F.emojiTable,
                            children: [(0, a.jsx)(_.FormText, {
                                type: _.FormTextTypes.DESCRIPTION,
                                className: F.emojiColumn,
                                children: B.default.Messages.GUILD_SETTINGS_EMOJI_IMAGE
                            }), (0, a.jsx)(_.FormText, {
                                type: _.FormTextTypes.DESCRIPTION,
                                className: F.columnLabel,
                                children: B.default.Messages.GUILD_SETTINGS_EMOJI_NAME
                            }), (0, a.jsx)(_.FormText, {
                                type: _.FormTextTypes.DESCRIPTION,
                                className: F.columnLabel,
                                children: B.default.Messages.UPLOADED_BY
                            })]
                        }), r.map(e => (0, a.jsx)(w, {
                            guildId: s.id,
                            emoji: e,
                            onEdit: l,
                            editingDisabled: i || !o(e)
                        }, e.id))]
                    })
                },
                z = e => {
                    let t, s, n, {
                            staticEmojiCount: l,
                            animatedEmojiCount: i,
                            guild: r
                        } = e,
                        o = r.getMaxEmojiSlots(),
                        d = Math.min(o - l, o - i),
                        u = r.premiumTier,
                        c = (0, p.getNextTier)(u, r.id);
                    return null == c || u === y.BoostedGuildTiers.TIER_3 || d > 0 ? null : (d > o ? (t = B.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_HEADER.format({
                        level: c
                    }), s = B.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_TEXT.format({
                        level: c
                    }), n = y.AnalyticsObjects.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = B.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER, s = B.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TEXT.format({
                        level: c
                    }), n = y.AnalyticsObjects.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, a.jsx)(L.default, {
                        header: t,
                        text: s,
                        guild: r,
                        analyticsLocation: {
                            page: y.AnalyticsPages.GUILD_SETTINGS,
                            section: y.AnalyticsSections.GUILD_SETTINGS_STICKERS,
                            object: n,
                            objectType: (0, p.boostedGuildTierToAnalyticsObjectType)(c)
                        }
                    }))
                };
            var X = () => {
                let e = (0, E.useStateFromStores)([j.default], () => j.default.getGuild()),
                    [t, l] = n.useState("");
                o(null != e, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
                let i = (0, E.useStateFromStores)([h.default], () => h.default.theme),
                    {
                        canCreateExpressions: r
                    } = (0, O.useManageResourcePermissions)(e),
                    {
                        revision: d,
                        emojis: T
                    } = (0, E.useStateFromStoresObject)([v.default], () => ({
                        revision: v.default.getEmojiRevision(e.id),
                        emojis: v.default.getEmojis(e.id)
                    })),
                    I = (0, g.default)(d),
                    [S, L] = n.useState(!1),
                    [R, D] = n.useState(!1),
                    G = n.useRef(null);
                n.useEffect(() => {
                    S && W()
                }, [S]), n.useEffect(() => {
                    V(e.id)
                }, [e.id]), n.useEffect(() => {
                    null != I && I < d && V(e.id)
                }, [d, I, e.id]);
                let [x, p] = n.useMemo(() => {
                    let t = null == T ? void 0 : T.filter(t => !(0, m.isRoleSubscriptionEmoji)(t, e.id)),
                        [s, a] = u.partition(t, e => !e.animated);
                    return [s, a]
                }, [T, e.id]), H = e.getMaxEmojiSlots(), k = Math.max(H - x.length, H - p.length), w = (s, a, n) => (0, A.uploadEmojiFile)({
                    data: s,
                    file: a,
                    image: n,
                    guildId: e.id,
                    uploadId: t,
                    hideErrorModal: !0
                }), K = async s => {
                    let a = (0, c.v4)();
                    l(a), M.default.track(y.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
                        guild_id: e.id,
                        upload_id: t
                    }), await (0, C.processImages)(s, w), L(!0)
                }, W = () => {
                    null !== G.current && ((0, _.closeModal)(G.current), G.current = null)
                }, X = async e => {
                    G.current = await (0, _.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await s.el("7476").then(s.bind(s, "7476"));
                        return s => (0, a.jsx)(t, {
                            processFiles: () => K(e),
                            ...s
                        })
                    })
                }, Z = (0, f.isCreatorMonetizationEnabledGuild)(e);
                return (0, a.jsxs)("div", {
                    className: F.emojiSettings,
                    children: [0 === k ? null : (0, a.jsx)(N.default, {
                        className: F.emojiUploadContainer,
                        onDrop: X
                    }), (0, a.jsxs)(_.FormSection, {
                        tag: _.FormTitleTags.H1,
                        title: B.default.Messages.EMOJI,
                        children: [(0, a.jsx)(z, {
                            guild: e,
                            staticEmojiCount: x.length,
                            animatedEmojiCount: p.length
                        }), (0, a.jsxs)(_.FormSection, {
                            className: F.uploader,
                            children: [(0, a.jsx)(_.FormText, {
                                type: _.FormTextTypes.DESCRIPTION,
                                children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_TO_SERVER_DESCRIPTION.format({
                                    count: H
                                })
                            }), Z && (0, a.jsx)(_.FormText, {
                                type: _.FormTextTypes.DESCRIPTION,
                                children: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_SETTINGS_MANAGE_PREMIUM_TEXT.format({
                                    onClick: () => U.default.open(e.id, y.GuildSettingsSections.ROLE_SUBSCRIPTIONS, void 0, y.GuildSettingsSubsections.ROLE_SUBSCRIPTION_EMOJI)
                                })
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsx)(_.FormTitle, {
                                    tag: _.FormTitleTags.H2,
                                    className: F.emojiUploadUploadRequirementsHeading,
                                    children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_HEADING
                                }), (0, a.jsxs)("ul", {
                                    className: F.emojiUploadUploadRequirementsList,
                                    children: [(0, a.jsx)("li", {
                                        children: (0, a.jsx)(_.FormText, {
                                            type: _.FormTextTypes.DESCRIPTION,
                                            children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_1
                                        })
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsx)(_.FormText, {
                                            type: _.FormTextTypes.DESCRIPTION,
                                            children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_2.format({
                                                maxSize: b.EMOJI_MAX_FILESIZE_KB
                                            })
                                        })
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsx)(_.FormText, {
                                            type: _.FormTextTypes.DESCRIPTION,
                                            children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_3
                                        })
                                    }), (0, a.jsx)("li", {
                                        children: (0, a.jsx)(_.FormText, {
                                            type: _.FormTextTypes.DESCRIPTION,
                                            children: B.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_4
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)(_.Button, {
                                tabIndex: -1,
                                size: _.Button.Sizes.MEDIUM,
                                onClick: () => {
                                    let t = (0, c.v4)();
                                    l(t), M.default.track(y.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
                                        guild_id: e.id,
                                        upload_id: t
                                    })
                                },
                                disabled: R || 0 === k || !r,
                                submitting: R,
                                focusProps: {
                                    within: !0
                                },
                                children: [B.default.Messages.UPLOAD_EMOJI, k > 0 ? (0, a.jsx)(C.default, {
                                    disabled: R || 0 === k || !r,
                                    tabIndex: 0,
                                    onChange: w,
                                    setLoading: D,
                                    multiple: !0
                                }) : null]
                            })]
                        }), (0, a.jsx)(P.GuildSettingsEmojiInventory, {
                            guild: e
                        }), (0, a.jsx)(Y, {
                            isLoading: null == T,
                            staticEmojis: x,
                            animatedEmojis: p,
                            guild: e,
                            theme: i
                        })]
                    })]
                })
            }
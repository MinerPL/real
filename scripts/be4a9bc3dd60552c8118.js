(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81986"], {
        202712: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return d
                }
            });
            var t = l("884691"),
                a = l("446674"),
                i = l("305961"),
                n = l("980215");

            function d() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuilds()),
                    s = t.useMemo(() => Object.values(e).filter(e => (0, n.canUseCustomClydeProfiles)(e)), [e]);
                return s
            }
        },
        882317: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return A
                }
            });
            var t, a, i = l("37983"),
                n = l("884691"),
                d = l("446674"),
                r = l("77078"),
                o = l("239380"),
                c = l("305961"),
                u = l("79798"),
                x = l("145131"),
                m = l("476765"),
                _ = l("246053"),
                E = l("599110"),
                I = l("315102"),
                f = l("335189"),
                L = l("473591"),
                h = l("371348"),
                S = l("202712"),
                T = l("235767"),
                N = l("49111"),
                P = l("988268"),
                v = l("782340"),
                C = l("496463");

            function A(e) {
                let {
                    clydeProfile: s,
                    ...l
                } = e, {
                    onClose: t
                } = l, o = (0, m.useUID)(), [c, u] = n.useState(a.APPLY_PERSONALITY), [_, I] = n.useState(), h = (0, d.useStateFromStores)([L.default], L.default.isSavingSettings);
                return (0, i.jsxs)(r.ModalRoot, {
                    ...l,
                    size: r.ModalSize.DYNAMIC,
                    className: C.modal,
                    "aria-labelledby": o,
                    children: [(0, i.jsx)("div", {
                        className: C.slidesContainer,
                        children: (0, i.jsxs)(r.Slides, {
                            activeSlide: c,
                            centered: !1,
                            children: [(0, i.jsx)(r.Slide, {
                                id: a.APPLY_PERSONALITY,
                                children: (0, i.jsx)(j, {
                                    setSelectedGuildId: I,
                                    selectedGuildId: _,
                                    clydeProfile: s
                                })
                            }), (0, i.jsx)(r.Slide, {
                                id: a.CONFIRMATION,
                                children: null != _ ? (0, i.jsx)(R, {
                                    onClose: t,
                                    clydeProfile: s,
                                    guildId: _
                                }) : null
                            })]
                        })
                    }), c === a.APPLY_PERSONALITY ? (0, i.jsxs)(r.ModalFooter, {
                        justify: x.default.Justify.BETWEEN,
                        className: C.footer,
                        children: [(0, i.jsx)(r.Button, {
                            disabled: null == _,
                            submitting: h,
                            onClick: () => {
                                null != _ && (0, f.saveClydeProfile)(_, {
                                    clyde_profile_id: s.clyde_profile_id
                                }).then(e => {
                                    null != e ? (u(a.CONFIRMATION), E.default.track(N.AnalyticEvents.CLYDE_AI_SHARED_PROFILE_APPLIED, {
                                        clyde_profile_id: s.clyde_profile_id,
                                        guild_id: _
                                    })) : (0, r.showToast)((0, r.createToast)(v.default.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, r.ToastType.FAILURE))
                                })
                            },
                            children: v.default.Messages.CLYDE_PROFILE_APPLY
                        }), (0, i.jsx)(r.Button, {
                            look: r.ButtonLooks.BLANK,
                            color: r.ButtonColors.TRANSPARENT,
                            onClick: t,
                            children: (0, i.jsx)(r.Text, {
                                className: C.closeButton,
                                variant: "text-md/semibold",
                                children: v.default.Messages.CLOSE
                            })
                        })]
                    }) : null]
                })
            }

            function j(e) {
                var s;
                let {
                    clydeProfile: l,
                    selectedGuildId: t,
                    setSelectedGuildId: a
                } = e, n = (0, h.default)(l), d = (0, S.default)(), o = v.default.Messages.CLYDE_PROFILE_APPLY_PERSONALITY_SUBHEADING.format({
                    clydeHook: e => (0, i.jsx)(r.Text, {
                        className: C.clydeName,
                        tag: "span",
                        variant: "text-sm/medium",
                        children: e
                    })
                });
                return (0, i.jsxs)("div", {
                    className: C.applySlideContainer,
                    children: [(0, i.jsxs)("div", {
                        className: C.characterContainer,
                        children: [(0, i.jsx)(r.Avatar, {
                            src: n,
                            size: r.AvatarSizes.SIZE_80,
                            "aria-hidden": !0
                        }), (0, i.jsxs)("div", {
                            className: C.nameContainer,
                            children: [(0, i.jsx)(r.Text, {
                                variant: "text-lg/semibold",
                                children: l.name
                            }), (0, i.jsx)(u.default, {
                                type: P.BotTagTypes.AI
                            })]
                        }), (0, i.jsx)(T.default, {
                            className: C.lastEditedByContainer,
                            userId: l.author_id
                        }), (0, i.jsx)(r.FormItem, {
                            className: C.personalityItem,
                            title: v.default.Messages.PERSONALITY_CLYDE_SECTION,
                            children: (0, i.jsx)(r.TextArea, {
                                className: C.personalityTextArea,
                                value: null !== (s = l.personality) && void 0 !== s ? s : "",
                                spellCheck: !1
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: C.serverSelectContainer,
                        children: [(0, i.jsx)(r.Text, {
                            className: C.serverSelectTitle,
                            variant: "text-lg/semibold",
                            children: v.default.Messages.CLYDE_PROFILE_APPLY_PERSONALITY
                        }), (0, i.jsx)(r.Text, {
                            className: C.serverSelectDescription,
                            variant: "text-sm/medium",
                            children: o
                        }), (0, i.jsxs)(r.FormItem, {
                            className: C.serverSelectField,
                            title: v.default.Messages.CLYDE_PROFILE_APPLY_TO_GUILD,
                            children: [(0, i.jsx)(r.Text, {
                                className: C.applyToCaption,
                                variant: "text-xs/normal",
                                children: v.default.Messages.CLYDE_PROFILE_APPLY_TO_GUILD_CAPTION
                            }), (0, i.jsx)(r.SearchableSelect, {
                                isDisabled: 0 === d.length,
                                placeholder: v.default.Messages.CLYDE_PROFILE_SELECT_GUILD,
                                value: t,
                                options: d.map(e => ({
                                    label: e.name,
                                    value: e.id
                                })),
                                onChange: e => a(e)
                            }), 0 === d.length ? (0, i.jsx)(r.Text, {
                                className: C.selectGuildErrorLabel,
                                variant: "text-xs/normal",
                                children: v.default.Messages.CLYDE_PROFILE_SELECT_GUILD_ERROR
                            }) : null]
                        })]
                    })]
                })
            }

            function R(e) {
                var s;
                let {
                    clydeProfile: l,
                    guildId: t,
                    onClose: a
                } = e, n = (0, h.default)(l), x = (0, d.useStateFromStores)([c.default], () => c.default.getGuild(t)), m = null != x && null != x.icon ? I.default.getGuildIconURL({
                    id: t,
                    icon: x.icon,
                    size: 16
                }) : null;
                return (0, i.jsxs)("div", {
                    className: C.confirmationSlide,
                    children: [(0, i.jsx)(r.Avatar, {
                        src: n,
                        size: r.AvatarSizes.SIZE_80,
                        "aria-hidden": !0
                    }), (0, i.jsxs)("div", {
                        className: C.nameContainer,
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-lg/semibold",
                            children: l.name
                        }), (0, i.jsx)(u.default, {
                            type: P.BotTagTypes.AI
                        })]
                    }), (0, i.jsx)(r.Text, {
                        className: C.appliedToLabel,
                        variant: "text-sm/medium",
                        children: v.default.Messages.CLYDE_PROFILE_APPLIED_TO
                    }), (0, i.jsx)(r.Button, {
                        color: r.ButtonColors.PRIMARY,
                        onClick: () => {
                            (0, o.transitionToGuild)(t), a()
                        },
                        className: C.guildButton,
                        size: r.ButtonSizes.TINY,
                        children: (0, i.jsxs)("div", {
                            className: C.guildButtonContainer,
                            children: [(null == x ? void 0 : x.icon) != null ? (0, i.jsx)(r.Avatar, {
                                src: m,
                                size: r.AvatarSizes.SIZE_16,
                                "aria-hidden": !0
                            }) : null, (0, i.jsx)(r.Text, {
                                color: "always-white",
                                variant: "text-xs/medium",
                                children: null !== (s = null == x ? void 0 : x.name) && void 0 !== s ? s : ""
                            }), (0, i.jsx)(_.default, {
                                width: 16,
                                height: 16,
                                direction: _.Directions.RIGHT
                            })]
                        })
                    }), (0, i.jsx)(r.Button, {
                        onClick: a,
                        size: r.ButtonSizes.MEDIUM,
                        children: v.default.Messages.GOT_IT
                    })]
                })
            }(t = a || (a = {})).APPLY_PERSONALITY = "apply-personality", t.CONFIRMATION = "confirmation"
        }
    }
]);
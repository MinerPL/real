(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81986"], {
        202712: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return d
                }
            });
            var t = s("884691"),
                a = s("446674"),
                i = s("305961"),
                n = s("980215");

            function d() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuilds()),
                    l = t.useMemo(() => Object.values(e).filter(e => (0, n.canUseCustomClydeProfiles)(e)), [e]);
                return l
            }
        },
        882317: function(e, l, s) {
            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return N
                }
            }), s("222007");
            var t, a, i = s("37983"),
                n = s("884691"),
                d = s("446674"),
                r = s("77078"),
                o = s("239380"),
                c = s("305961"),
                u = s("79798"),
                m = s("145131"),
                x = s("476765"),
                f = s("246053"),
                _ = s("599110"),
                E = s("315102"),
                h = s("335189"),
                I = s("473591"),
                L = s("371348"),
                S = s("202712"),
                p = s("235767"),
                v = s("49111"),
                T = s("988268"),
                j = s("782340"),
                C = s("496463");

            function N(e) {
                let {
                    clydeProfile: l,
                    ...s
                } = e, {
                    onClose: t
                } = s, a = (0, x.useUID)(), [o, c] = n.useState("apply-personality"), [u, f] = n.useState(), E = (0, d.useStateFromStores)([I.default], I.default.isSavingSettings);
                return (0, i.jsxs)(r.ModalRoot, {
                    ...s,
                    size: r.ModalSize.DYNAMIC,
                    className: C.modal,
                    "aria-labelledby": a,
                    children: [(0, i.jsx)("div", {
                        className: C.slidesContainer,
                        children: (0, i.jsxs)(r.Slides, {
                            activeSlide: o,
                            centered: !1,
                            children: [(0, i.jsx)(r.Slide, {
                                id: "apply-personality",
                                children: (0, i.jsx)(P, {
                                    setSelectedGuildId: f,
                                    selectedGuildId: u,
                                    clydeProfile: l
                                })
                            }), (0, i.jsx)(r.Slide, {
                                id: "confirmation",
                                children: null != u ? (0, i.jsx)(A, {
                                    onClose: t,
                                    clydeProfile: l,
                                    guildId: u
                                }) : null
                            })]
                        })
                    }), "apply-personality" === o ? (0, i.jsxs)(r.ModalFooter, {
                        justify: m.default.Justify.BETWEEN,
                        className: C.footer,
                        children: [(0, i.jsx)(r.Button, {
                            disabled: null == u,
                            submitting: E,
                            onClick: () => {
                                null != u && (0, h.saveClydeProfile)(u, {
                                    clyde_profile_id: l.clyde_profile_id
                                }).then(e => {
                                    null != e ? (c("confirmation"), _.default.track(v.AnalyticEvents.CLYDE_AI_SHARED_PROFILE_APPLIED, {
                                        clyde_profile_id: l.clyde_profile_id,
                                        guild_id: u
                                    })) : (0, r.showToast)((0, r.createToast)(j.default.Messages.CLYDE_PROFILE_ERROR_MESSAGE_GENERIC, r.ToastType.FAILURE))
                                })
                            },
                            children: j.default.Messages.CLYDE_PROFILE_APPLY
                        }), (0, i.jsx)(r.Button, {
                            look: r.ButtonLooks.BLANK,
                            color: r.ButtonColors.TRANSPARENT,
                            onClick: t,
                            children: (0, i.jsx)(r.Text, {
                                className: C.closeButton,
                                variant: "text-md/semibold",
                                children: j.default.Messages.CLOSE
                            })
                        })]
                    }) : null]
                })
            }

            function P(e) {
                var l;
                let {
                    clydeProfile: s,
                    selectedGuildId: t,
                    setSelectedGuildId: a
                } = e, n = (0, L.default)(s), d = (0, S.default)(), o = j.default.Messages.CLYDE_PROFILE_APPLY_PERSONALITY_SUBHEADING.format({
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
                                children: s.name
                            }), (0, i.jsx)(u.default, {
                                type: T.BotTagTypes.AI
                            })]
                        }), (0, i.jsx)(p.default, {
                            className: C.lastEditedByContainer,
                            userId: s.author_id
                        }), (0, i.jsx)(r.FormItem, {
                            className: C.personalityItem,
                            title: j.default.Messages.PERSONALITY_CLYDE_SECTION,
                            children: (0, i.jsx)(r.TextArea, {
                                className: C.personalityTextArea,
                                value: null !== (l = s.personality) && void 0 !== l ? l : "",
                                spellCheck: !1
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: C.serverSelectContainer,
                        children: [(0, i.jsx)(r.Text, {
                            className: C.serverSelectTitle,
                            variant: "text-lg/semibold",
                            children: j.default.Messages.CLYDE_PROFILE_APPLY_PERSONALITY
                        }), (0, i.jsx)(r.Text, {
                            className: C.serverSelectDescription,
                            variant: "text-sm/medium",
                            children: o
                        }), (0, i.jsxs)(r.FormItem, {
                            className: C.serverSelectField,
                            title: j.default.Messages.CLYDE_PROFILE_APPLY_TO_GUILD,
                            children: [(0, i.jsx)(r.Text, {
                                className: C.applyToCaption,
                                variant: "text-xs/normal",
                                children: j.default.Messages.CLYDE_PROFILE_APPLY_TO_GUILD_CAPTION
                            }), (0, i.jsx)(r.SearchableSelect, {
                                isDisabled: 0 === d.length,
                                placeholder: j.default.Messages.CLYDE_PROFILE_SELECT_GUILD,
                                value: t,
                                options: d.map(e => ({
                                    label: e.name,
                                    value: e.id
                                })),
                                onChange: e => a(e)
                            }), 0 === d.length ? (0, i.jsx)(r.Text, {
                                className: C.selectGuildErrorLabel,
                                variant: "text-xs/normal",
                                children: j.default.Messages.CLYDE_PROFILE_SELECT_GUILD_ERROR
                            }) : null]
                        })]
                    })]
                })
            }

            function A(e) {
                var l;
                let {
                    clydeProfile: s,
                    guildId: t,
                    onClose: a
                } = e, n = (0, L.default)(s), m = (0, d.useStateFromStores)([c.default], () => c.default.getGuild(t)), x = null != m && null != m.icon ? E.default.getGuildIconURL({
                    id: t,
                    icon: m.icon,
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
                            children: s.name
                        }), (0, i.jsx)(u.default, {
                            type: T.BotTagTypes.AI
                        })]
                    }), (0, i.jsx)(r.Text, {
                        className: C.appliedToLabel,
                        variant: "text-sm/medium",
                        children: j.default.Messages.CLYDE_PROFILE_APPLIED_TO
                    }), (0, i.jsx)(r.Button, {
                        color: r.ButtonColors.PRIMARY,
                        onClick: () => {
                            (0, o.transitionToGuild)(t), a()
                        },
                        className: C.guildButton,
                        size: r.ButtonSizes.TINY,
                        children: (0, i.jsxs)("div", {
                            className: C.guildButtonContainer,
                            children: [(null == m ? void 0 : m.icon) != null ? (0, i.jsx)(r.Avatar, {
                                src: x,
                                size: r.AvatarSizes.SIZE_16,
                                "aria-hidden": !0
                            }) : null, (0, i.jsx)(r.Text, {
                                color: "always-white",
                                variant: "text-xs/medium",
                                children: null !== (l = null == m ? void 0 : m.name) && void 0 !== l ? l : ""
                            }), (0, i.jsx)(f.default, {
                                width: 16,
                                height: 16,
                                direction: f.Directions.RIGHT
                            })]
                        })
                    }), (0, i.jsx)(r.Button, {
                        onClick: a,
                        size: r.ButtonSizes.MEDIUM,
                        children: j.default.Messages.GOT_IT
                    })]
                })
            }(a = t || (t = {})).APPLY_PERSONALITY = "apply-personality", a.CONFIRMATION = "confirmation"
        }
    }
]);
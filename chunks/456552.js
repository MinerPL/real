            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return m
                }
            }), o("222007");
            var i = o("37983"),
                l = o("884691"),
                a = o("77078"),
                s = o("18054"),
                n = o("86678"),
                d = o("20105"),
                r = o("958706"),
                u = o("782340"),
                c = o("363236"),
                m = e => {
                    var t, o, m;
                    let {
                        channel: j,
                        onClose: N,
                        transitionState: x
                    } = e, [h, E] = l.useState(null !== (m = j.defaultReactionEmoji) && void 0 !== m ? m : null), [v, f] = l.useState(!1), [M, _] = l.useState(!1), I = (null === (t = j.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiId) !== (null == h ? void 0 : h.emojiId) || (null === (o = j.defaultReactionEmoji) || void 0 === o ? void 0 : o.emojiName) !== (null == h ? void 0 : h.emojiName), A = e => {
                        let t = null == e ? null : (null == e ? void 0 : e.id) != null ? {
                            emojiId: e.id,
                            emojiName: void 0
                        } : {
                            emojiId: void 0,
                            emojiName: e.optionallyDiverseSequence
                        };
                        E(t)
                    }, R = async () => {
                        if (I) {
                            f(!0), _(!1);
                            try {
                                await (0, s.saveChannel)(j.id, {
                                    defaultReactionEmoji: h
                                }), N()
                            } catch (e) {
                                _(!0)
                            } finally {
                                f(!1)
                            }
                        }
                    };
                    return (0, i.jsxs)(a.ModalRoot, {
                        transitionState: x,
                        "aria-label": u.default.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE,
                        children: [(0, i.jsx)(a.ModalHeader, {
                            separator: !1,
                            className: c.modalHeader,
                            children: (0, i.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                children: u.default.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE
                            })
                        }), (0, i.jsxs)(a.ModalContent, {
                            children: [(0, i.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                className: c.subtitle,
                                children: u.default.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_DESCRIPTION
                            }), (0, i.jsx)(d.default, {
                                reactionEmoji: h
                            }), (0, i.jsxs)("div", {
                                className: c.buttonRow,
                                children: [(0, i.jsx)(a.Popout, {
                                    renderPopout: e => {
                                        let {
                                            closePopout: t
                                        } = e;
                                        return (0, i.jsx)(n.default, {
                                            guildId: null == j ? void 0 : j.guild_id,
                                            closePopout: t,
                                            onSelectEmoji: (e, o) => {
                                                A(e), o && t()
                                            },
                                            pickerIntention: r.EmojiIntention.COMMUNITY_CONTENT,
                                            channel: j
                                        })
                                    },
                                    position: "right",
                                    animation: a.Popout.Animation.NONE,
                                    align: "center",
                                    children: e => (0, i.jsx)(a.Button, {
                                        ...e,
                                        size: a.Button.Sizes.SMALL,
                                        onClick: t => {
                                            var o;
                                            null === (o = e.onClick) || void 0 === o || o.call(e, t)
                                        },
                                        children: u.default.Messages.SELECT_EMOJI
                                    })
                                }), null != j.defaultReactionEmoji ? (0, i.jsx)(a.Button, {
                                    className: c.removeButton,
                                    onClick: () => A(null),
                                    size: a.Button.Sizes.MIN,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.RED,
                                    children: u.default.Messages.REMOVE
                                }) : null]
                            }), M ? (0, i.jsx)("div", {
                                className: c.row,
                                children: (0, i.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-danger",
                                    children: u.default.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_ERROR
                                })
                            }) : null]
                        }), (0, i.jsxs)(a.ModalFooter, {
                            className: c.footer,
                            children: [(0, i.jsx)(a.Button, {
                                type: "submit",
                                color: a.Button.Colors.BRAND_NEW,
                                size: a.Button.Sizes.SMALL,
                                className: c.button,
                                onClick: R,
                                disabled: !I,
                                submitting: v,
                                autoFocus: !0,
                                children: u.default.Messages.SAVE
                            }), (0, i.jsx)(a.Button, {
                                color: a.Button.Colors.PRIMARY,
                                size: a.Button.Sizes.SMALL,
                                className: c.button,
                                onClick: N,
                                children: u.default.Messages.CANCEL
                            })]
                        })]
                    })
                }
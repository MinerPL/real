            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("866227"),
                r = l.n(s),
                i = l("77078"),
                u = l("656913"),
                d = l("694187"),
                o = l("151642"),
                c = l("29846"),
                E = l("398604"),
                f = l("189443"),
                _ = l("822516"),
                I = l("93550"),
                T = l("953143"),
                N = l("745049"),
                h = l("75015"),
                v = l("837979"),
                m = l("782340"),
                S = l("505376");

            function g(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: l,
                    broadcastToDirectoryChannels: a,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: r
                } = t;
                return l.can_broadcast ? (0, n.jsxs)(i.FormItem, {
                    title: m.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: S.formItem,
                    children: [(0, n.jsx)(i.Tooltip, {
                        text: (0, n.jsx)(i.Text, {
                            className: S.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": m.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !r,
                        children: e => (0, n.jsx)("div", {
                            ...e,
                            children: (0, n.jsx)(i.Checkbox, {
                                type: i.Checkbox.Types.INVERTED,
                                disabled: !r,
                                value: a,
                                onChange: (e, t) => s(t),
                                children: (0, n.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-active",
                                    children: m.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, n.jsx)(i.Text, {
                        className: S.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: m.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function C(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: C,
                    editBroadcastInfoData: x,
                    error: p,
                    validationErrorMessage: A,
                    onChange: O,
                    canSetFocus: R = !1
                } = e, {
                    entityType: M,
                    channelId: L,
                    description: D,
                    name: y,
                    image: j,
                    scheduledEndTime: V,
                    scheduledStartTime: U,
                    recurrenceRule: G
                } = t, P = (0, o.useStageBlockedUsersCount)(L), H = null != t && (0, E.isGuildScheduledEventActive)(t), B = a.useMemo(() => {
                    let e = (0, _.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: r(U)
                    }
                }, [t, U]), [b, F] = a.useState(null), w = a.useRef(null);
                a.useEffect(() => {
                    if (R) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.focus()
                    }
                }, [R]);
                let k = e => {
                        O({
                            image: e
                        })
                    },
                    Y = (e, t) => {
                        if (null == e || void 0 === t) {
                            k(null);
                            return
                        }(0, i.openModalLazy)(async () => {
                            let {
                                default: a
                            } = await l.el("57015").then(l.bind(l, "57015"));
                            return l => (0, n.jsx)(a, {
                                imgURI: e,
                                file: t,
                                onCrop: k,
                                uploadType: h.UploadTypes.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0,
                                ...l
                            })
                        })
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: S.blockedUsersContainer,
                        children: null != L && !H && P > 0 && (0, n.jsx)(c.BlockedUsersNotice, {
                            channelId: L
                        })
                    }), (0, n.jsxs)("div", {
                        className: S.form,
                        children: [(0, n.jsxs)(i.FormItem, {
                            title: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: S.topicFormItem,
                            required: !0,
                            children: [(0, n.jsx)(i.TextInput, {
                                className: S.textInput,
                                onChange: e => {
                                    O({
                                        name: e
                                    })
                                },
                                placeholder: m.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: v.MAX_STAGE_TOPIC_LENGTH,
                                value: y,
                                autoComplete: "off",
                                inputRef: w
                            }), null != p ? (0, n.jsx)(i.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: S.warning,
                                children: p.getAnyErrorMessage()
                            }) : null]
                        }), (0, n.jsx)(T.default, {
                            className: S.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: l
                                } = e, n = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == l ? void 0 : l.toISOString()
                                };
                                null != t && null != V && (null == l ? void 0 : l.isBefore(t)) && (n.scheduledEndTime = t.add(1, "hour").toISOString()), null != t && null != b && (n.recurrenceRule = (0, _.recurrenceOptionToRecurrenceRule)(b, t)), O(n)
                            },
                            onRecurrenceChange: e => {
                                let t = B.startDate;
                                if (null == t) return;
                                let l = (0, _.recurrenceOptionToRecurrenceRule)(e, t);
                                O({
                                    recurrenceRule: l
                                }), F(e)
                            },
                            schedule: B,
                            recurrenceRule: G,
                            showEndDate: M === N.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: M === N.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: H,
                            guildId: C
                        }), null != A ? (0, n.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: S.warning,
                            children: A
                        }) : null, (0, n.jsx)(i.FormItem, {
                            title: m.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: S.formItem,
                            children: (0, n.jsx)(i.TextArea, {
                                className: S.descriptionInput,
                                placeholder: m.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: D,
                                onChange: e => {
                                    O({
                                        description: e
                                    })
                                },
                                maxLength: N.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, n.jsxs)(i.FormItem, {
                            title: m.default.Messages.GUILD_EVENT_IMAGE,
                            className: S.formItem,
                            children: [(0, n.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: S.addImageHint,
                                children: m.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != j ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(u.default, {
                                    className: S.imagePreview,
                                    iconWrapperClassName: S.imagePreviewInner,
                                    image: j,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != C) {
                                            var l;
                                            return null !== (l = (0, I.default)((0, f.convertToFakeGuildEvent)(t, C, s))) && void 0 !== l ? l : null
                                        }
                                    },
                                    onChange: Y,
                                    hint: m.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, n.jsx)(i.Button, {
                                    size: i.Button.Sizes.SMALL,
                                    onClick: () => k(null),
                                    children: m.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, n.jsxs)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                children: [m.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, n.jsx)(d.default, {
                                    onChange: Y
                                })]
                            })]
                        }), (0, n.jsx)(g, {
                            editBroadcastInfoData: x
                        })]
                    })]
                })
            }
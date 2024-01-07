            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                n = s("627445"),
                u = s.n(n),
                r = s("446674"),
                i = s("77078"),
                o = s("430568"),
                S = s("901582"),
                d = s("86678"),
                c = s("845579"),
                h = s("52028"),
                m = s("697218"),
                f = s("882641"),
                T = s("381546"),
                p = s("599110"),
                A = s("158998"),
                C = s("921917"),
                g = s("413524"),
                _ = s("49111"),
                M = s("958706"),
                N = s("782340"),
                O = s("711103");
            let j = Object.values(g.ClearAfterValues).filter(e => "number" == typeof e).sort((e, t) => e - t);

            function U(e) {
                return (0, a.jsxs)("div", {
                    className: O.statusOptionItem,
                    children: [(0, a.jsx)(i.Status, {
                        status: e.value,
                        size: 10,
                        className: O.statusIcon
                    }), e.label]
                })
            }
            let x = [{
                key: 1,
                value: i.StatusTypes.ONLINE,
                label: (0, A.humanizeStatus)(i.StatusTypes.ONLINE)
            }, {
                key: 2,
                value: i.StatusTypes.IDLE,
                label: (0, A.humanizeStatus)(i.StatusTypes.IDLE)
            }, {
                key: 3,
                value: i.StatusTypes.DND,
                label: (0, A.humanizeStatus)(i.StatusTypes.DND)
            }, {
                key: 4,
                value: i.StatusTypes.INVISIBLE,
                label: (0, A.humanizeStatus)(i.StatusTypes.INVISIBLE)
            }];
            class v extends l.PureComponent {
                componentDidMount() {
                    let {
                        sourceAnalyticsContext: e
                    } = this.props;
                    p.default.track(_.AnalyticEvents.OPEN_MODAL, {
                        source: e.location,
                        type: _.AnalyticsSections.CUSTOM_STATUS_MODAL,
                        load_id: e.loadId
                    })
                }
                get clearAfterOptions() {
                    return [{
                        key: 1,
                        value: g.ClearAfterValues.TODAY,
                        label: N.default.Messages.CUSTOM_STATUS_TODAY
                    }, {
                        key: 2,
                        value: g.ClearAfterValues.HOURS_4,
                        label: N.default.Messages.CUSTOM_STATUS_HOURS.format({
                            hours: 4
                        })
                    }, {
                        key: 3,
                        value: g.ClearAfterValues.HOURS_1,
                        label: N.default.Messages.CUSTOM_STATUS_HOURS.format({
                            hours: 1
                        })
                    }, {
                        key: 4,
                        value: g.ClearAfterValues.MINUTES_30,
                        label: N.default.Messages.CUSTOM_STATUS_MINUTES.format({
                            minutes: 30
                        })
                    }, {
                        key: 5,
                        value: null,
                        label: N.default.Messages.CUSTOM_STATUS_DONT_CLEAR
                    }]
                }
                get analyticsLocation() {
                    return {
                        page: _.AnalyticsPages.CUSTOM_STATUS_MODAL
                    }
                }
                getEmojiButtonRenderer() {
                    let {
                        emojiInfo: e
                    } = this.state;
                    return null == e ? null : () => (0, a.jsx)(o.default, {
                        className: O.emoji,
                        emojiId: e.id,
                        emojiName: e.name,
                        animated: !!e.animated
                    })
                }
                renderCustomStatusInput() {
                    let {
                        user: e
                    } = this.props, {
                        text: t,
                        emojiInfo: s
                    } = this.state;
                    return (0, a.jsx)(i.FormSection, {
                        className: O.formGroup,
                        title: N.default.Messages.CUSTOM_STATUS_MODAL_BODY.format({
                            username: e.username
                        }),
                        children: (0, a.jsxs)("div", {
                            className: O.inputContainer,
                            children: [(0, a.jsx)("div", {
                                className: O.emojiButtonContainer,
                                children: (0, a.jsx)(i.Popout, {
                                    renderPopout: this.renderEmojiPicker,
                                    position: "left",
                                    animation: i.Popout.Animation.NONE,
                                    align: "top",
                                    children: (e, t) => {
                                        let {
                                            isShown: s
                                        } = t;
                                        return (0, a.jsx)(f.default, {
                                            ...e,
                                            active: s,
                                            className: O.emojiButton,
                                            tabIndex: 0,
                                            renderButtonContents: this.getEmojiButtonRenderer()
                                        })
                                    }
                                })
                            }), (0, a.jsx)(i.TextInput, {
                                maxLength: g.STATUS_MAX_LENGTH,
                                value: t,
                                inputClassName: O.input,
                                placeholder: N.default.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,
                                onChange: this.handleStatusChange,
                                onKeyPress: this.handleKeyPress,
                                autoFocus: !0
                            }), t.length > 0 || null != s ? (0, a.jsx)(i.Button, {
                                focusProps: {
                                    offset: {
                                        top: 8,
                                        bottom: 8,
                                        left: -2,
                                        right: -2
                                    }
                                },
                                className: O.clearButton,
                                onClick: this.handleClearStatus,
                                look: i.Button.Looks.BLANK,
                                size: i.Button.Sizes.NONE,
                                children: (0, a.jsx)(T.default, {
                                    className: O.clearIcon
                                })
                            }) : null]
                        })
                    })
                }
                renderClearAfter() {
                    let {
                        clearAfter: e
                    } = this.state;
                    return (0, a.jsx)(i.FormSection, {
                        className: O.formGroup,
                        title: N.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
                        children: (0, a.jsx)(i.SingleSelect, {
                            placeholder: N.default.Messages.CUSTOM_STATUS_CLEAR_AFTER,
                            maxVisibleItems: 5,
                            value: e,
                            options: this.clearAfterOptions,
                            onChange: this.handleChangeClearAfter
                        })
                    })
                }
                renderStatusInput() {
                    let {
                        status: e
                    } = this.state;
                    return (0, a.jsx)(i.FormSection, {
                        className: O.formGroup,
                        title: N.default.Messages.CUSTOM_STATUS_STATUS_TITLE,
                        children: (0, a.jsx)(i.SingleSelect, {
                            maxVisibleItems: 4,
                            value: e,
                            options: x,
                            onChange: this.handleChangeStatus,
                            renderOptionLabel: U
                        })
                    })
                }
                render() {
                    let {
                        transitionState: e,
                        onClose: t
                    } = this.props;
                    return (0, a.jsx)(S.default, {
                        ...this.analyticsLocation,
                        children: (0, a.jsxs)(i.ModalRoot, {
                            transitionState: e,
                            className: O.modalRoot,
                            "aria-label": N.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,
                            children: [(0, a.jsxs)(i.ModalHeader, {
                                separator: !1,
                                className: O.headerContainer,
                                children: [(0, a.jsx)("div", {
                                    className: O.art
                                }), (0, a.jsx)("div", {
                                    className: O.header,
                                    children: (0, a.jsx)(i.H, {
                                        className: O.headerText,
                                        children: N.default.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS
                                    })
                                }), (0, a.jsx)(i.ModalCloseButton, {
                                    onClick: t,
                                    className: O.modalCloseButton
                                })]
                            }), (0, a.jsxs)(i.ModalContent, {
                                children: [this.renderCustomStatusInput(), this.renderClearAfter(), (0, a.jsx)(i.FormDivider, {
                                    className: O.formDivider
                                }), this.renderStatusInput()]
                            }), (0, a.jsxs)(i.ModalFooter, {
                                children: [(0, a.jsx)(i.Button, {
                                    onClick: this.handleSubmit,
                                    children: N.default.Messages.SAVE
                                }), (0, a.jsx)(i.Button, {
                                    onClick: t,
                                    look: i.Button.Looks.LINK,
                                    color: O.cancelButton,
                                    children: N.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        emojiInfo: null != this.props.customStatus ? this.props.customStatus.emoji : null,
                        text: null != this.props.customStatus && null != this.props.customStatus.state ? this.props.customStatus.state : "",
                        clearAfter: function() {
                            var e;
                            let t = c.CustomStatusSetting.getSetting();
                            if (null == t || "" === t.expiresAtMs) return g.ClearAfterValues.TODAY;
                            let s = Number(t.expiresAtMs);
                            if (isNaN(s)) return g.ClearAfterValues.TODAY;
                            if (0 === s) return null;
                            let a = Number(s) - Date.now();
                            return null !== (e = j.find(e => a <= e)) && void 0 !== e ? e : g.ClearAfterValues.TODAY
                        }(),
                        status: function() {
                            let e = c.StatusSetting.getSetting();
                            return x.some(t => t.value === e) ? e : i.StatusTypes.ONLINE
                        }()
                    }, this.handleClearStatus = () => {
                        this.setState({
                            emojiInfo: null,
                            text: ""
                        })
                    }, this.handleSubmit = e => {
                        e.preventDefault(), this.handleSaveStatus()
                    }, this.handleStatusChange = e => {
                        this.setState({
                            text: e
                        })
                    }, this.handleEmojiChange = e => {
                        if (null == e) return;
                        let t = null != e.id ? {
                            id: e.id,
                            name: e.name,
                            animated: e.animated
                        } : {
                            id: null,
                            name: e.optionallyDiverseSequence,
                            animated: !1
                        };
                        this.setState({
                            emojiInfo: t
                        })
                    }, this.handleChangeClearAfter = e => {
                        this.setState({
                            clearAfter: e
                        })
                    }, this.handleChangeStatus = e => {
                        this.setState({
                            status: e
                        })
                    }, this.handleSaveStatus = () => {
                        let {
                            sourceAnalyticsContext: e,
                            onClose: t
                        } = this.props, {
                            emojiInfo: s,
                            text: a,
                            clearAfter: l,
                            status: n
                        } = this.state;
                        c.StatusSetting.updateSetting(n), (0, C.default)(a, s, l, e), t()
                    }, this.handleKeyPress = e => {
                        e.which === _.KeyboardKeys.ENTER && this.handleSaveStatus()
                    }, this.renderEmojiPicker = e => {
                        let {
                            closePopout: t
                        } = e, {
                            onClose: s
                        } = this.props;
                        return (0, a.jsx)(d.default, {
                            closePopout: t,
                            onSelectEmoji: (e, s) => {
                                this.handleEmojiChange(e), s && t()
                            },
                            pickerIntention: M.EmojiIntention.STATUS,
                            onNavigateAway: s
                        })
                    }
                }
            }
            var E = r.default.connectStores([h.default, m.default], () => {
                let e = m.default.getCurrentUser();
                return u(null != e, "CustomStatusModal: user cannot be null"), {
                    customStatus: h.default.getCustomStatusActivity(),
                    user: e
                }
            }, {
                forwardRef: !0
            })(v)
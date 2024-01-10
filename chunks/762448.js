            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("446674"),
                l = n("77078"),
                r = n("641608"),
                o = n("98328"),
                u = n("149851"),
                d = n("145131"),
                c = n("398288"),
                E = n("993105"),
                f = n("773336"),
                _ = n("50885"),
                h = n("782340"),
                C = n("148738"),
                T = n("926622");
            class I extends s.PureComponent {
                renderDiskUsageCircle() {
                    let {
                        metadata: e
                    } = this.props;
                    return null != e && null != e.availableKB && null != e.totalKB ? (0, a.jsx)(u.default, {
                        total: e.totalKB,
                        used: e.totalKB - e.availableKB
                    }) : null
                }
                renderViewing() {
                    let e, t;
                    let {
                        path: n,
                        label: s,
                        editingPath: i,
                        isDefault: r,
                        metadata: u
                    } = this.props;
                    return null != u && (e = null != u.availableKB ? (0, E.formatSize)(u.availableKB, {
                        useKibibytes: !0
                    }) : null, t = null != u.totalKB ? (0, E.formatSize)(u.totalKB, {
                        useKibibytes: !0
                    }) : null), (0, a.jsxs)(d.default, {
                        className: C.installationPath,
                        align: d.default.Align.CENTER,
                        children: [this.renderDiskUsageCircle(), (0, a.jsxs)(d.default, {
                            direction: d.default.Direction.VERTICAL,
                            className: C.descriptionWrapper,
                            children: [(0, a.jsxs)(d.default, {
                                align: d.default.Align.CENTER,
                                children: [(0, a.jsx)(l.Heading, {
                                    className: C.rowTitle,
                                    variant: "heading-md/semibold",
                                    children: null != s ? s : o.default.getLabelFromPath(n)
                                }), r ? (0, a.jsx)("span", {
                                    className: C.defaultIndicator,
                                    children: h.default.Messages.DEFAULT
                                }) : null]
                            }), null != u && null != e && null != t ? (0, a.jsx)(c.default, {
                                className: C.rowBody,
                                hoverText: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_SPACE.format({
                                    available: e,
                                    total: t
                                }),
                                children: n
                            }) : (0, a.jsx)(l.Text, {
                                className: C.rowBody,
                                variant: "text-xs/normal",
                                children: n
                            })]
                        }), (0, a.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            disabled: null != i,
                            color: l.Button.Colors.PRIMARY,
                            onClick: this.handleStartEditing,
                            children: h.default.Messages.EDIT
                        })]
                    })
                }
                renderEditing() {
                    let {
                        path: e,
                        hasGamesInstalledInPath: t
                    } = this.props, {
                        label: n,
                        isDefault: s
                    } = this.state;
                    return (0, a.jsx)(l.Card, {
                        editable: !0,
                        className: C.installationPathEditing,
                        children: (0, a.jsxs)(d.default, {
                            children: [this.renderDiskUsageCircle(), (0, a.jsxs)(d.default.Child, {
                                children: [(0, a.jsx)(l.FormItem, {
                                    title: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_NAME,
                                    children: (0, a.jsx)(l.TextInput, {
                                        value: n,
                                        placeholder: o.default.getLabelFromPath(e),
                                        onChange: this.handleLabelChange
                                    })
                                }), (0, a.jsx)(l.FormItem, {
                                    title: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION,
                                    className: T.marginTop20,
                                    children: (0, a.jsx)(l.TextInput, {
                                        disabled: !0,
                                        value: e
                                    })
                                }), (0, a.jsx)(l.Checkbox, {
                                    type: l.Checkbox.Types.INVERTED,
                                    value: null != s ? s : this.props.isDefault,
                                    disabled: this.props.isDefault,
                                    className: C.defaultLocationCheckbox,
                                    onChange: this.handleToggleDefault,
                                    children: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_MAKE_DEFAULT
                                }), (0, a.jsx)(l.FormDivider, {
                                    className: C.separator
                                }), (0, a.jsxs)(d.default, {
                                    children: [(0, a.jsx)(l.Button, {
                                        disabled: t || this.props.isDefault,
                                        size: l.Button.Sizes.SMALL,
                                        color: l.Button.Colors.RED,
                                        look: l.Button.Looks.OUTLINED,
                                        onClick: this.handleRemoveLocation,
                                        children: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE
                                    }), (0, a.jsxs)(d.default, {
                                        justify: d.default.Justify.END,
                                        children: [(0, a.jsx)(l.Button, {
                                            size: l.Button.Sizes.SMALL,
                                            color: l.Button.Colors.PRIMARY,
                                            look: l.Button.Looks.LINK,
                                            onClick: this.handleStopEditing,
                                            children: h.default.Messages.CANCEL
                                        }), (0, a.jsx)(l.Button, {
                                            disabled: e === this.props.path && n === this.props.label && s === this.props.isDefault,
                                            size: l.Button.Sizes.SMALL,
                                            color: l.Button.Colors.GREEN,
                                            onClick: this.handleSaveChanges,
                                            children: h.default.Messages.SAVE
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                }
                render() {
                    return this.props.editingPath === this.props.path ? this.renderEditing() : this.renderViewing()
                }
                constructor(...e) {
                    super(...e), this.state = {
                        label: void 0,
                        isDefault: null
                    }, this.handleStartEditing = () => {
                        let {
                            path: e,
                            label: t,
                            isDefault: n,
                            onToggleEditing: a
                        } = this.props;
                        a(e), this.setState({
                            label: t,
                            isDefault: n
                        })
                    }, this.handleStopEditing = () => {
                        let {
                            onToggleEditing: e
                        } = this.props;
                        e(null), this.setState({
                            label: void 0,
                            isDefault: null
                        })
                    }, this.handleRemoveLocation = () => {
                        (0, l.openModal)(e => (0, a.jsx)(l.ConfirmModal, {
                            ...e,
                            header: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
                            confirmText: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_REMOVE,
                            cancelText: h.default.Messages.CANCEL,
                            onConfirm: () => {
                                this.handleStopEditing(), (0, r.removeInstallLocation)(this.props.path)
                            },
                            children: (0, a.jsx)(l.Text, {
                                variant: "text-md/normal",
                                children: h.default.Messages.USER_SETTINGS_GAMES_REMOVE_LOCATION_BODY
                            })
                        }))
                    }, this.handleSaveChanges = () => {
                        (0, r.updateInstallLocation)(this.props.path, {
                            label: null != this.state.label ? this.state.label : this.props.label,
                            isDefault: null != this.state.isDefault ? this.state.isDefault : this.props.isDefault
                        }), this.handleStopEditing()
                    }, this.handleLabelChange = e => {
                        this.setState({
                            label: e
                        })
                    }, this.handleToggleDefault = () => {
                        this.setState({
                            isDefault: !this.state.isDefault
                        })
                    }
                }
            }
            class S extends s.PureComponent {
                componentDidMount() {
                    (0, r.fetchMetadata)(this.props.installationPaths.map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    }))
                }
                render() {
                    let {
                        installationPaths: e,
                        installationPathsMetadata: t,
                        defaultInstallationPath: n
                    } = this.props, {
                        editingPath: s
                    } = this.state;
                    return (0, a.jsxs)(l.FormSection, {
                        className: C.wrapper,
                        title: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATIONS,
                        children: [e.map(e => {
                            let {
                                path: i,
                                label: l
                            } = e;
                            return (0, a.jsx)(I, {
                                path: i,
                                label: l,
                                metadata: t[i],
                                isDefault: n === i,
                                editingPath: s,
                                hasGamesInstalledInPath: o.default.hasGamesInstalledInPath(i),
                                onToggleEditing: this.handleToggleEditing
                            }, i)
                        }), (0, a.jsx)("div", {
                            className: C.buttonRowWrapper,
                            children: (0, a.jsx)(l.Button, {
                                disabled: !f.isPlatformEmbedded,
                                onClick: this.handleAddInstallationLocation,
                                size: l.Button.Sizes.SMALL,
                                children: h.default.Messages.USER_SETTINGS_GAMES_INSTALL_LOCATION_ADD
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        editingPath: null
                    }, this.handleAddInstallationLocation = () => {
                        _.default.showOpenDialog(["openDirectory"]).then(e => {
                            null != e && 0 !== e.length && null != e[0] && "undefined" !== e[0] && (0, r.addInstallLocation)(e[0])
                        })
                    }, this.handleToggleEditing = e => {
                        this.setState({
                            editingPath: e
                        })
                    }
                }
            }
            var N = i.default.connectStores([o.default], () => ({
                installationPaths: o.default.installationPaths,
                installationPathsMetadata: o.default.installationPathsMetadata,
                defaultInstallationPath: o.default.defaultInstallationPath
            }))(S)
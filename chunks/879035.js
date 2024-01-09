            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("404118"),
                o = n("649486"),
                u = n("236717"),
                d = n("945956"),
                c = n("195812"),
                f = n("733350"),
                E = n("664336"),
                _ = n("868308"),
                h = n("782340"),
                S = n("122693");
            class T extends a.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    return e.mode !== t.memoizedMode ? {
                        memoizedMode: e.mode,
                        clicked: !1
                    } : null
                }
                handleDownloadApps() {
                    (0, i.openModal)(e => (0, l.jsx)(o.default, {
                        source: "Links",
                        ...e
                    }))
                }
                render() {
                    switch (this.props.mode) {
                        case "UPDATE_AVAILABLE":
                            return (0, l.jsx)(E.Icon, {
                                hideOnClick: !1,
                                tooltip: h.default.Messages.UPDATE_AVAILABLE,
                                foreground: S.downloadArrow,
                                background: S.cloud,
                                icon: f.default
                            });
                        case "UPDATE_MANUALLY":
                        case "UPDATE_DOWNLOADED":
                            return (0, l.jsx)(E.Icon, {
                                tooltip: h.default.Messages.UPDATE_DOWNLOADED,
                                foreground: S.updateIconForeground,
                                onClick: this.handleInstallDownload,
                                icon: c.default
                            });
                        default:
                            return null
                    }
                }
                constructor(...e) {
                    super(...e), this.state = {
                        memoizedMode: this.props.mode,
                        clicked: !1
                    }, this.handleInstallDownload = () => {
                        d.default.isConnected() ? r.default.show({
                            title: h.default.Messages.UPDATE_DURING_CALL_TITLE,
                            body: h.default.Messages.UPDATE_DURING_CALL_BODY,
                            onConfirm: this.doUpdate,
                            cancelText: h.default.Messages.CANCEL,
                            confirmText: h.default.Messages.UPDATE_DURING_CALL_CONTINUE
                        }) : this.doUpdate()
                    }, this.doUpdate = () => {
                        !this.state.clicked && (this.setState({
                            clicked: !0
                        }), (0, _.quitAndInstall)())
                    }
                }
            }
            var p = s.default.connectStores([u.default], () => ({
                mode: u.default.getState()
            }))(T)
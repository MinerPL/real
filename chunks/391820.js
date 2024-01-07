            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            }), a("424973"), a("222007");
            var s = a("37983"),
                l = a("884691"),
                n = a("446674"),
                r = a("77078"),
                i = a("641608"),
                d = a("98328"),
                u = a("993105"),
                o = a("50885"),
                h = a("782340"),
                c = a("335420");
            let I = "select";
            class A extends l.PureComponent {
                fetchAllDirectoryMetadata() {
                    let {
                        installationPaths: e
                    } = this.props, t = e.map(e => {
                        let {
                            path: t
                        } = e;
                        return t
                    }), {
                        newInstallationPath: a
                    } = this.state;
                    for (let e of (null != a && t.push(a), t = t.filter(e => !this.fetchedMetadataPaths.has(e)), (0, i.fetchMetadata)(t), t)) this.fetchedMetadataPaths.add(e)
                }
                componentDidMount() {
                    this.fetchAllDirectoryMetadata()
                }
                componentDidUpdate(e) {
                    this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== e.requiredDiskKB || this.props.installationPathsMetadata !== e.installationPathsMetadata) && this.sendChange(this.props.value)
                }
                getOptions() {
                    let {
                        installationPaths: e
                    } = this.props, {
                        newInstallationPath: t
                    } = this.state, a = e.map(e => {
                        let {
                            path: t,
                            label: a
                        } = e;
                        return {
                            value: t,
                            label: this.renderLabel(t, a)
                        }
                    });
                    return null != t && a.push({
                        value: t,
                        label: this.renderLabel(t)
                    }), a.push({
                        value: I,
                        label: h.default.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
                    }), a
                }
                hasEnoughDiskSpace(e) {
                    let {
                        requiredDiskKB: t,
                        installationPathsMetadata: a
                    } = this.props, s = null != a[e] ? a[e].availableKB : null;
                    return null == t || null == s || t < s
                }
                sendChange(e) {
                    let {
                        installationPathsMetadata: t,
                        onChange: a
                    } = this.props, s = null != t[e] && !1 === t[e].hasPermission;
                    a(e, s || !this.hasEnoughDiskSpace(e))
                }
                renderError() {
                    let {
                        value: e,
                        installationPathsMetadata: t
                    } = this.props, a = null != t[e] && !1 === t[e].hasPermission;
                    return a ? (0, s.jsx)("div", {
                        className: c.error,
                        children: h.default.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
                    }) : this.hasEnoughDiskSpace(e) ? null : (0, s.jsx)("div", {
                        className: c.error,
                        children: h.default.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
                    })
                }
                renderLabel(e, t) {
                    let {
                        installationPathsMetadata: a
                    } = this.props, s = null != t ? t : e;
                    return null != a[e] && null != a[e].availableKB ? h.default.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
                        path: s,
                        size: (0, u.formatSize)(a[e].availableKB, {
                            useKibibytes: !0
                        })
                    }) : s
                }
                render() {
                    let {
                        value: e,
                        className: t,
                        autoFocus: a
                    } = this.props;
                    return (0, s.jsxs)("div", {
                        className: t,
                        children: [(0, s.jsx)(r.FormTitle, {
                            tag: "h5",
                            children: h.default.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
                        }), (0, s.jsx)(r.SingleSelect, {
                            autoFocus: a,
                            options: this.getOptions(),
                            value: e,
                            onChange: this.handleChange
                        }), this.renderError()]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        newInstallationPath: null
                    }, this.fetchedMetadataPaths = new Set, this.handleChange = e => {
                        e === I ? o.default.showOpenDialog(["openDirectory"]).then(e => {
                            if (null != e && e.length > 0) {
                                let t = e[0];
                                this.setState({
                                    newInstallationPath: null != this.props.installationPaths.find(e => {
                                        let {
                                            path: a
                                        } = e;
                                        return a === t
                                    }) ? null : t
                                }), this.sendChange(t)
                            }
                        }) : this.sendChange(e)
                    }
                }
            }
            var T = n.default.connectStores([d.default], () => ({
                installationPaths: d.default.installationPaths,
                installationPathsMetadata: d.default.installationPathsMetadata
            }))(A)
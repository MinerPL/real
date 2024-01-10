            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                l = s.n(r),
                i = s("77078"),
                u = s("895530"),
                o = s("145131"),
                d = s("993105"),
                c = s("449008"),
                _ = s("773336"),
                E = s("75576"),
                I = s("49111"),
                f = s("782340"),
                T = s("502604");
            let S = {
                [I.OperatingSystems.WINDOWS]: _.PlatformTypes.WINDOWS,
                [I.OperatingSystems.MACOS]: _.PlatformTypes.OSX,
                [I.OperatingSystems.LINUX]: _.PlatformTypes.LINUX
            };
            class R extends n.PureComponent {
                render() {
                    let {
                        active: e,
                        children: t,
                        pageSize: s,
                        onClick: n
                    } = this.props, r = s === E.PageSizes.LARGE;
                    return (0, a.jsx)(i.Button, {
                        size: r ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
                        fullWidth: !r,
                        color: e ? T.tabSelectedColor : T.tabNotSelectedColor,
                        className: l({
                            [T.tabPageLarge]: r,
                            [T.tabPageSmall]: !r,
                            [T.tabSelected]: e,
                            [T.tabNotSelected]: !e
                        }),
                        onClick: n,
                        children: t
                    })
                }
            }
            let p = e => [{
                key: f.default.Messages.APPLICATION_STORE_SPECS_OS,
                value: e.operating_system_version
            }, {
                key: f.default.Messages.APPLICATION_STORE_SPECS_CPU,
                value: e.cpu
            }, {
                key: f.default.Messages.APPLICATION_STORE_SPECS_MEMORY,
                value: null != e.ram ? f.default.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({
                    size: (0, d.formatSize)(1e3 * e.ram, {
                        showDecimalForGB: !1
                    })
                }) : null
            }, {
                key: f.default.Messages.APPLICATION_STORE_SPECS_VIDEO,
                value: e.gpu
            }, {
                key: f.default.Messages.APPLICATION_STORE_SPECS_STORAGE,
                value: null != e.disk ? (0, d.formatSize)(1e3 * e.disk, {
                    showDecimalForGB: !1
                }) : null
            }, {
                key: f.default.Messages.APPLICATION_STORE_SPECS_SOUND,
                value: e.sound_card
            }, {
                key: f.default.Messages.APPLICATION_STORE_SPECS_NETWORK,
                value: e.network
            }, {
                key: f.default.Messages.APPLICATION_STORE_SPECS_NOTES,
                value: e.notes
            }];
            class A extends n.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        systemRequirements: s
                    } = e, {
                        selectedOperatingSystem: a
                    } = t, n = Object.keys(s);
                    return n.includes(a) ? null : {
                        selectedOperatingSystem: n[0]
                    }
                }
                renderTabs() {
                    let {
                        pageSize: e,
                        systemRequirements: t
                    } = this.props, {
                        selectedOperatingSystem: s
                    } = this.state, n = Object.keys(t);
                    return 1 === n.length ? null : (0, a.jsxs)(o.default, {
                        className: T.tabs,
                        children: [(0, a.jsx)("div", {
                            className: T.separator
                        }), n.map(t => (0, a.jsx)(R, {
                            active: t === s,
                            onClick: () => this.handleSelectOperatingSystem(t),
                            pageSize: e,
                            children: function(e) {
                                switch (e) {
                                    case I.OperatingSystems.WINDOWS:
                                        return f.default.Messages.WINDOWS;
                                    case I.OperatingSystems.MACOS:
                                        return f.default.Messages.MACOS;
                                    case I.OperatingSystems.LINUX:
                                        return f.default.Messages.LINUX
                                }
                            }(t)
                        }, t))]
                    })
                }
                renderRequirementsSection(e, t) {
                    if (null == e) return null;
                    let s = p(e),
                        n = s.map((e, t) => {
                            let s = null != e.value ? e.value.trim() : null;
                            return null == s || 0 === s.length ? null : (0, a.jsxs)("div", {
                                className: T.requirement,
                                children: [(0, a.jsxs)("span", {
                                    className: T.requirementKey,
                                    children: [e.key, ":"]
                                }), s]
                            }, t)
                        }).filter(c.isNotNullish);
                    return (0, a.jsxs)("div", {
                        className: T.requirements,
                        children: [(0, a.jsx)(u.default, {
                            tag: "h4",
                            children: t
                        }), n]
                    })
                }
                renderBody() {
                    let {
                        minimum: e,
                        recommended: t
                    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
                    return (0, a.jsxs)("div", {
                        className: T.requirementsContainer,
                        children: [this.renderRequirementsSection(e, f.default.Messages.APPLICATION_STORE_SPECS_MINIMUM), this.renderRequirementsSection(t, f.default.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)]
                    })
                }
                render() {
                    return (0, a.jsxs)("div", {
                        className: this.props.className,
                        children: [(0, a.jsx)(u.default, {
                            children: f.default.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS
                        }), this.renderTabs(), this.renderBody()]
                    })
                }
                constructor(e) {
                    super(e), this.handleSelectOperatingSystem = e => {
                        this.setState({
                            selectedOperatingSystem: e
                        })
                    };
                    let t = (0, _.getPlatform)(),
                        s = Object.keys(e.systemRequirements),
                        a = s[0];
                    for (let e of s) S[e] === t && (a = e);
                    this.state = {
                        selectedOperatingSystem: a
                    }
                }
            }
            var N = A
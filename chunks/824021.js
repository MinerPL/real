            "use strict";
            s.r(t), s.d(t, {
                Rules: function() {
                    return C
                },
                default: function() {
                    return E
                }
            }), s("222007");
            var n = s("37983"),
                a = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("463928"),
                o = s.n(l),
                d = s("77078"),
                u = s("895530"),
                h = s("9074"),
                c = s("271560"),
                p = s("782340"),
                m = s("613743");
            let g = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
                C = {
                    ...h.default.rules,
                    heading: {
                        ...h.default.rules.heading,
                        react(e, t, s) {
                            let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
                            return (0, n.jsx)(u.default, {
                                tag: a,
                                children: t(e.content, s)
                            }, s.key)
                        }
                    },
                    assetImage: {
                        order: 5,
                        match(e, t) {
                            let s = e.match(g);
                            if (null != s) {
                                let e = s[2],
                                    n = t.assets.find(t => t.id === e);
                                return null != n && [...s, n, t.applicationId]
                            }
                            return !1
                        },
                        parse: e => ({
                            asset: e[3],
                            alt: e[1],
                            applicationId: e[4]
                        }),
                        react: (e, t, s) => (0, n.jsx)("div", {
                            className: m.assetWrapper,
                            children: (0, n.jsx)("img", {
                                alt: e.alt,
                                src: (0, c.getAssetURL)(e.applicationId, e.asset, 800),
                                className: m.asset
                            })
                        }, s.key)
                    }
                },
                f = o.parserFor(C),
                I = o.reactFor(o.ruleOutput(C, "react"));
            class x extends a.PureComponent {
                componentDidMount() {
                    if (null != this._container) {
                        let {
                            height: e
                        } = this._container.getBoundingClientRect();
                        this.setState({
                            collapsable: e > 400
                        })
                    }
                }
                render() {
                    let {
                        applicationId: e,
                        description: t,
                        blurb: s,
                        className: a,
                        assets: i
                    } = this.props, {
                        collapsed: l,
                        collapsable: o
                    } = this.state;
                    return (0, n.jsxs)("div", {
                        className: a,
                        children: [(0, n.jsx)("div", {
                            className: r({
                                [m.collapsed]: o && l
                            }),
                            children: (0, n.jsxs)("div", {
                                ref: this.setContentContainerRef,
                                children: [(0, n.jsx)("div", {
                                    className: m.blurb,
                                    children: s
                                }), (0, n.jsx)(h.default, {
                                    className: m.description,
                                    parser: f,
                                    output: I,
                                    state: {
                                        assets: i,
                                        applicationId: e
                                    },
                                    children: t
                                })]
                            })
                        }), o ? (0, n.jsx)(d.Button, {
                            className: m.toggleCollapseButton,
                            onClick: this.handleToggleCollapse,
                            color: d.Button.Colors.PRIMARY,
                            children: l ? p.default.Messages.APPLICATION_STORE_DESCRIPTION_READ_MORE : p.default.Messages.APPLICATION_STORE_DESCRIPTION_READ_LESS
                        }) : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        collapsed: !0,
                        collapsable: !0
                    }, this.handleToggleCollapse = () => {
                        this.setState({
                            collapsed: !this.state.collapsed
                        })
                    }, this.setContentContainerRef = e => {
                        this._container = e
                    }
                }
            }
            var E = x
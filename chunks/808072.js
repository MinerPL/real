            "use strict";
            n.r(t), n.d(t, {
                TextAlignments: function() {
                    return s
                },
                ArrowAlignments: function() {
                    return l
                },
                default: function() {
                    return i
                }
            }), n("222007");
            var a, s, l, i, r, o, u = n("37983"),
                d = n("884691"),
                c = n("414456"),
                f = n.n(c),
                h = n("819855"),
                C = n("77078"),
                p = n("599110"),
                m = n("439932"),
                E = n("145131"),
                g = n("49111"),
                S = n("782340"),
                _ = n("816456");
            (r = s || (s = {})).CENTER = "center", r.LEFT = "left", (o = l || (l = {})).TOP = "top", o.MIDDLE = "middle";
            class A extends d.PureComponent {
                componentDidMount() {
                    let {
                        uniqueId: e
                    } = this.props;
                    p.default.track(g.AnalyticEvents.SHOW_TUTORIAL, {
                        tutorial: e
                    })
                }
                componentWillUnmount() {
                    p.default.track(g.AnalyticEvents.CLOSE_TUTORIAL, {
                        tutorial: this.props.uniqueId,
                        acknowledged: this.state.confirmed
                    })
                }
                render() {
                    let {
                        renderMedia: e,
                        textAlign: t,
                        isLongText: n,
                        title: a,
                        body: s,
                        className: l,
                        forceTheme: i,
                        onClickSkipAll: r
                    } = this.props, o = "left" === t || n, d = "center" === t || !o;
                    return (0, u.jsxs)(C.Dialog, {
                        className: f(_.popoutRoot, l),
                        children: [null != e && (0, u.jsx)(E.default, {
                            className: _.mediaContainer,
                            justify: o ? E.default.Justify.START : E.default.Justify.CENTER,
                            children: e()
                        }), (0, u.jsx)(C.H, {
                            className: f({
                                [_.titleCenter]: d,
                                [_.titleLeft]: o
                            }),
                            children: a
                        }), (0, u.jsx)("string" == typeof s ? "p" : "div", {
                            className: f({
                                [_.bodyCenter]: d,
                                [_.bodyLeft]: o
                            }),
                            children: s
                        }), (0, u.jsxs)(E.default, {
                            className: _.buttonContainer,
                            justify: o ? E.default.Justify.BETWEEN : E.default.Justify.CENTER,
                            children: [(0, u.jsx)(C.Button, {
                                size: C.ButtonSizes.SMALL,
                                onClick: this.handleDismiss,
                                children: S.default.Messages.TUTORIAL_CLOSE
                            }), (0, u.jsx)(C.Button, {
                                size: C.ButtonSizes.SMALL,
                                look: C.Button.Looks.BLANK,
                                onClick: r,
                                color: (0, h.isThemeLight)(i) ? C.Button.Colors.PRIMARY : C.Button.Colors.WHITE,
                                className: o ? _.buttonSkipLeftAlign : _.buttonSkipCenterAlign,
                                children: S.default.Messages.SKIP_ALL_TIPS
                            })]
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        confirmed: !1
                    }, this.handleDismiss = () => {
                        let {
                            onClickComplete: e
                        } = this.props;
                        this.setState({
                            confirmed: !0
                        }, () => null == e ? void 0 : e())
                    }
                }
            }(a = class extends d.PureComponent {
                render() {
                    let {
                        renderMedia: e,
                        textAlign: t,
                        onComplete: n,
                        onSkipAll: a,
                        isLongText: s,
                        title: l,
                        body: i,
                        children: r,
                        spacing: o,
                        forceTheme: d,
                        ...c
                    } = this.props, f = "top" === c.position || "bottom" === c.position ? "center" : "top";
                    return (0, u.jsx)(C.Popout, {
                        ...c,
                        align: f,
                        spacing: null != o ? o : 0,
                        renderPopout: this.renderPopoutContent,
                        nudgeAlignIntoViewport: !0,
                        children: r
                    })
                }
                constructor(...e) {
                    super(...e), this.onClickComplete = e => {
                        e(), this.props.onComplete()
                    }, this.onClickSkipAll = e => {
                        let {
                            onSkipAll: t,
                            uniqueId: n
                        } = this.props;
                        e(), t(), p.default.track(g.AnalyticEvents.DISMISS_ALL_TUTORIALS, {
                            tutorial: n
                        })
                    }, this.renderPopoutContent = e => {
                        let {
                            closePopout: t,
                            position: n
                        } = e, {
                            forceTheme: a,
                            isLongText: s,
                            arrowAlignment: l,
                            renderMedia: i
                        } = this.props, r = null != i;
                        return (0, u.jsx)(A, {
                            ...this.props,
                            className: f({
                                [_.bottom]: "bottom" === n,
                                [_.contentNarrowNoMedia]: !s && !r,
                                [_.contentNarrowWithMedia]: !s && r,
                                [_.contentWideNoMedia]: s && !r,
                                [_.contentWideWithMedia]: s && r,
                                [_.right]: "right" === n,
                                [_.top]: "top" === n,
                                [_.left]: "left" === n,
                                [_.arrowAlignmentTop]: "top" === l,
                                [_.arrowAlignmentMiddle]: "middle" === l,
                                "force-theme": null != a
                            }, (0, m.getThemeClass)(a)),
                            onClickComplete: () => this.onClickComplete(t),
                            onClickSkipAll: () => this.onClickSkipAll(t)
                        })
                    }
                }
            }).TextAlignments = s, a.defaultProps = {
                textAlign: "left"
            }, i = a
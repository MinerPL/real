            "use strict";
            s.r(t), s.d(t, {
                CarouselPrevious: function() {
                    return c
                },
                CarouselNext: function() {
                    return p
                },
                default: function() {
                    return m
                }
            }), s("222007");
            var n = s("37983"),
                a = s("884691"),
                i = s("414456"),
                r = s.n(i),
                l = s("77078"),
                o = s("137215"),
                d = s("115184");
            let u = {
                CENTER: d.alignCenter,
                LEFT: d.alignLeft
            };
            class h extends a.PureComponent {
                componentDidUpdate(e) {
                    let {
                        selectedIndex: t
                    } = this.props;
                    e.selectedIndex !== t && this.handleSelectedIndexChange(t)
                }
                render() {
                    let {
                        renderItem: e,
                        items: t,
                        vertical: s,
                        paginationContainerClass: i,
                        align: o
                    } = this.props, u = s ? d.verticalPaginationItemContainer : d.horizontalPaginationItemContainer;
                    return (0, n.jsx)(l.AdvancedScrollerAuto, {
                        orientation: s ? "vertical" : "horizontal",
                        className: r(u, i, o),
                        ref: this.handleSetScrollerRef,
                        children: t.map((t, s) => a.cloneElement(e(t, s), {
                            onClick: () => this.handlePageClick(s),
                            key: s,
                            ref: e => {
                                this._paginationItemRefs[s] = e
                            }
                        }))
                    })
                }
                constructor(...e) {
                    super(...e), this._scrollerRef = null, this._paginationItemRefs = [], this.handleSetScrollerRef = e => {
                        this._scrollerRef = e
                    }, this.handleSelectedIndexChange = e => {
                        let t = this._scrollerRef;
                        if (null == t) return;
                        let s = this._paginationItemRefs[e];
                        null != s && t.scrollIntoViewNode({
                            node: s,
                            animate: !0,
                            padding: this.props.scrollToPadding
                        })
                    }, this.handlePageClick = e => {
                        let {
                            onSetItem: t
                        } = this.props;
                        t(e)
                    }
                }
            }
            h.Align = u, h.defaultProps = {
                scrollToPadding: {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                align: u.CENTER
            };
            class c extends a.PureComponent {
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, n.jsx)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.NONE,
                        className: r(d.prevButtonContainer, e),
                        onClick: this.handlePrevClick,
                        children: (0, n.jsx)(o.default, {
                            className: d.arrow,
                            direction: o.default.Directions.LEFT
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handlePrevClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t
                        } = this.props;
                        null == t || t(e)
                    }
                }
            }
            class p extends a.PureComponent {
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, n.jsx)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.NONE,
                        className: r(d.nextButtonContainer, e),
                        onClick: this.handleNextClick,
                        children: (0, n.jsx)(o.default, {
                            className: d.arrow,
                            direction: o.default.Directions.RIGHT
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handleNextClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t
                        } = this.props;
                        null == t || t(e)
                    }
                }
            }
            var m = h
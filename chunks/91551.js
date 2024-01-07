            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("917351"),
                s = n.n(l),
                o = n("888400"),
                r = n("782340");
            let d = () => [r.default.Messages.COUNTDOWN_UNITS_SECONDS, r.default.Messages.COUNTDOWN_UNITS_MINUTES, r.default.Messages.COUNTDOWN_UNITS_HOURS, r.default.Messages.COUNTDOWN_UNITS_DAYS];
            class u extends a.PureComponent {
                componentDidMount() {
                    let {
                        intervalDuration: e,
                        onInterval: t
                    } = this.props;
                    this._interval = setInterval(() => {
                        this.forceUpdate(), null == t || t()
                    }, e)
                }
                componentWillUnmount() {
                    null != this._interval && clearInterval(this._interval)
                }
                defaultRender(e) {
                    let {
                        showDays: t,
                        showUnits: n,
                        className: a
                    } = this.props, l = [e.days, e.hours, e.minutes, e.seconds], o = d();
                    if (0 === e.days) l.shift();
                    else if (!t) {
                        let e = l.shift();
                        l[0] += 24 * e
                    }
                    let r = s(l).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, i.jsxs)("span", {
                        children: [e, n ? o[l.length - t - 1] : null]
                    }, t)]).flatten().value();
                    return (0, i.jsx)("span", {
                        className: a,
                        children: r
                    })
                }
                render() {
                    let {
                        deadline: e,
                        children: t,
                        className: n,
                        stopAtOneSec: a
                    } = this.props;
                    if (e === 1 / 0) return (0, i.jsx)("span", {
                        className: n,
                        "aria-label": r.default.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    let l = (0, o.diffAsUnits)(Date.now(), e, a);
                    return null != t ? t(l, this.defaultRender.bind(this, l)) : this.defaultRender(l)
                }
            }
            u.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            var c = u
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983"),
                l = s("884691"),
                n = s("917351"),
                u = s.n(n),
                i = s("888400"),
                o = s("782340");
            let r = () => [o.default.Messages.COUNTDOWN_UNITS_SECONDS, o.default.Messages.COUNTDOWN_UNITS_MINUTES, o.default.Messages.COUNTDOWN_UNITS_HOURS, o.default.Messages.COUNTDOWN_UNITS_DAYS];
            class d extends l.PureComponent {
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
                        showUnits: s,
                        className: l
                    } = this.props, n = [e.days, e.hours, e.minutes, e.seconds], i = r();
                    if (0 === e.days) n.shift();
                    else if (!t) {
                        let e = n.shift();
                        n[0] += 24 * e
                    }
                    let o = u(n).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !s ? ":" : " ", (0, a.jsxs)("span", {
                        children: [e, s ? i[n.length - t - 1] : null]
                    }, t)]).flatten().value();
                    return (0, a.jsx)("span", {
                        className: l,
                        children: o
                    })
                }
                render() {
                    let {
                        deadline: e,
                        children: t,
                        className: s,
                        stopAtOneSec: l
                    } = this.props;
                    if (e === 1 / 0) return (0, a.jsx)("span", {
                        className: s,
                        "aria-label": o.default.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    let n = (0, i.diffAsUnits)(Date.now(), e, l);
                    return null != t ? t(n, this.defaultRender.bind(this, n)) : this.defaultRender(n)
                }
            }
            d.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            var c = d
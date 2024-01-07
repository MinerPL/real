            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            }), s("222007");
            var r, l = s("884691");

            function n(e, t, s) {
                return Math.min(Math.max(Math.floor(e / t), 1), s)
            }
            var a = (0, s("737960").default)(((r = class extends l.Component {
                static getDerivedStateFromProps(e, t) {
                    let {
                        width: s,
                        desiredItemWidth: r,
                        maxColumns: l
                    } = e, a = n(s, r, l);
                    return a !== t.columns ? {
                        columns: a
                    } : null
                }
                render() {
                    let {
                        width: e,
                        height: t,
                        children: s
                    } = this.props, {
                        columns: r
                    } = this.state;
                    return s(r, e, t)
                }
                constructor(...e) {
                    super(...e), this.state = {
                        columns: n(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
                    }
                }
            }).defaultProps = {
                desiredItemWidth: 200
            }, r))
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var n, l, a = s("37983"),
                i = s("884691");
            (n = class extends i.PureComponent {
                render() {
                    let {
                        tag: e,
                        children: t,
                        eventName: s,
                        data: n,
                        track: l,
                        trackOutboundLink: i,
                        ...r
                    } = this.props;
                    return null == e ? null : (0, a.jsx)(e, {
                        ...r,
                        onClick: this.handleClick,
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = e => {
                        let {
                            eventName: t,
                            data: s,
                            href: n,
                            onClick: l,
                            trackOutboundLink: a,
                            track: i
                        } = this.props;
                        if (s.googleAnalytics && a && (null != n ? a(n) : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")), l && l(e), !t) return !1;
                        i(t, s)
                    }
                }
            }).defaultProps = {
                tag: "a",
                data: {}
            }, l = n
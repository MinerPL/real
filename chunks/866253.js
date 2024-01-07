            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("996866");

            function i(e) {
                let {
                    activity: t,
                    user: n,
                    source: i,
                    ...r
                } = e, {
                    label: o,
                    tooltip: u,
                    loading: d,
                    disabled: c,
                    onClick: f
                } = (0, l.useSpotifyJoinAction)(t, n, i);
                return (0, a.jsx)(s.Tooltip, {
                    text: u,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: n
                        } = e;
                        return (0, a.jsx)(s.Button, {
                            ...r,
                            color: c ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                            onClick: f,
                            onMouseEnter: t,
                            onMouseLeave: n,
                            disabled: !d && c,
                            submitting: d,
                            children: o
                        })
                    }
                })
            }
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                u = n("54239"),
                o = n("79112"),
                c = n("49111"),
                d = n("782340"),
                f = n("519409");
            class p extends r.Component {
                render() {
                    return (0, s.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, s.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, s.jsx)(a.Clickable, {
                            className: l(f.streamerModeEnabledBtn, {
                                [f.disabled]: this.props.disableButton
                            }),
                            onClick: this.handleClick,
                            children: d.default.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        !this.props.disableButton && ((0, u.pushLayer)(c.Layers.USER_SETTINGS), o.default.setSection(c.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            p.defaultProps = {
                disableButton: !1
            };
            var h = p
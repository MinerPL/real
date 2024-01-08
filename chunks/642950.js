            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            }), r("222007");
            var n = r("37983"),
                i = r("884691"),
                s = r("414456"),
                l = r.n(s),
                a = r("77078"),
                o = r("54239"),
                u = r("79112"),
                c = r("49111"),
                d = r("782340"),
                f = r("519409");
            class p extends i.Component {
                render() {
                    return (0, n.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, n.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, n.jsx)(a.Clickable, {
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
                        !this.props.disableButton && ((0, o.pushLayer)(c.Layers.USER_SETTINGS), u.default.setSection(c.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            p.defaultProps = {
                disableButton: !1
            };
            var h = p
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            }), l("222007");
            var n, a = l("37983"),
                s = l("884691"),
                i = l("77078");
            class r extends s.PureComponent {
                render() {
                    let {
                        text: e,
                        lastItem: t,
                        className: l
                    } = this.props;
                    return (0, a.jsxs)("span", {
                        children: [(0, a.jsx)(i.Anchor, {
                            className: l,
                            onClick: this.handleClick,
                            children: e
                        }), t ? "" : ", "]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        let {
                            onClick: e,
                            index: t
                        } = this.props;
                        null == e || e(t)
                    }
                }
            }
            n = class extends s.PureComponent {
                render() {
                    let e = this.props.artists.split(";");
                    if (!this.props.canOpen) return e.join(", ");
                    let t = e.length - 1;
                    return e.map((e, l) => (0, a.jsx)(r, {
                        text: e,
                        index: l,
                        lastItem: l === t,
                        onClick: this.handleOpenSpotifyArtist,
                        className: this.props.linkClassName
                    }, "spotify-artist-".concat(l)))
                }
                constructor(...e) {
                    super(...e), this.handleOpenSpotifyArtist = e => {
                        let {
                            onOpenSpotifyArtist: t
                        } = this.props;
                        null == t || t(e)
                    }
                }
            }
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                a = s("742868");
            class i extends l.Component {
                componentDidUpdate(e) {
                    let {
                        props: {
                            location: t,
                            shouldScrollToTop: s
                        },
                        scrollRef: {
                            current: n
                        }
                    } = this;
                    null != n && t !== e.location && (null != s ? s(this.props) && (n.scrollTop = 0) : n.scrollTop = 0)
                }
                render() {
                    let {
                        className: e,
                        render: t
                    } = this.props;
                    return (0, n.jsx)("div", {
                        ref: this.scrollRef,
                        className: e,
                        children: t(this.scrollTo, this.getScrollTop)
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollRef = l.createRef(), this.scrollTo = e => {
                        null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e)
                    }, this.getScrollTop = () => null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop
                }
            }
            var r = (0, a.withRouter)(i)
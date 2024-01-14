"use strict";
n.r(t), n.d(t, {
  backgroundImagePreloader: function() {
    return c
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  r = n("310013"),
  s = n.n(r),
  i = n("407063");
let u = /url\(['"](.*)['"]\)/,
  o = e => {
    if (null == e || "" === e || "none" === e) return null;
    let t = e.match(u);
    return null != t ? t[1] : e
  };

function c(e) {
  class t extends a.Component {
    componentDidUpdate(e, t) {
      if (t === this.state) return;
      let {
        cached: n,
        loaded: l
      } = this.state, {
        style: a
      } = this.props, r = null != a ? o(a.backgroundImage) : null;
      null == r && r !== n ? this.setState({
        loaded: !0,
        cached: r
      }) : this.cachedURLs.indexOf(r) >= 0 ? this.setState({
        loaded: !0,
        cached: r
      }) : null != r && r !== n && !0 === l && this.setState({
        loaded: !1
      }, () => this.preloadURL(r))
    }
    preloadURL(e) {
      this.canceller && this.canceller(), this.canceller = (0, i.loadImage)(e, t => {
        this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
          cached: e,
          loaded: !0
        }));
        let {
          onBackgroundImageLoad: n
        } = this.props;
        n && n(t, e)
      })
    }
    componentWillUnmount() {
      this.canceller && this.canceller(), this.cachedURLs.length = 0
    }
    render() {
      let {
        style: t,
        onBackgroundImageLoad: n,
        ...a
      } = this.props, {
        loaded: r,
        cached: s
      } = this.state;
      if (!r && null != t) {
        var i;
        t = {
          ...t,
          backgroundImage: null == (i = s) || "" === i || "none" === i ? "none" : "url(".concat(i, ")")
        }
      }
      return (0, l.jsx)(e, {
        style: t,
        ...a
      })
    }
    constructor(e) {
      super(e), this.cachedURLs = [], this.canceller = null;
      let {
        style: t
      } = e, n = null != t ? o(t.backgroundImage) : null;
      this.cachedURLs = [n], this.state = {
        cached: n,
        loaded: !0
      }
    }
  }
  return s(t, e), t
}
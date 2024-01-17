"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("458960"),
  o = n("394846"),
  u = n("862337"),
  d = n("266491"),
  c = n("77078"),
  f = n("265836"),
  E = n("368121"),
  _ = n("570511"),
  T = n("58608"),
  I = n("581361");
class m extends l.Component {
  renderMedia() {
    let {
      src: e,
      className: t,
      title: n
    } = this.props, {
      imageLoading: l
    } = this.state;
    return (0, s.jsx)(r.default.img, {
      className: i({
        [I.imageLoading]: l
      }, t),
      src: e,
      alt: n,
      style: this.getImageStyle(),
      onError: this.handleImageError,
      onLoad: this.handleImageLoaded
    })
  }
  render() {
    let {
      className: e,
      title: t,
      src: n
    } = this.props, {
      imageLoadError: l,
      imageLoading: a
    } = this.state;
    return null == n || l ? (0, s.jsx)(r.default.div, {
      className: i(I.titleContainer, e),
      style: this.getImageStyle(),
      children: t
    }) : (0, s.jsxs)(r.default.div, {
      className: i(a ? I.loadingContainer : null, e),
      style: this.getImageStyle(),
      children: [a ? (0, s.jsx)(c.Spinner, {
        className: I.spinner,
        itemClassName: I.spinnerItem,
        type: c.Spinner.Type.PULSING_ELLIPSIS,
        animated: !0
      }) : null, this.renderMedia()]
    })
  }
  constructor(...e) {
    super(...e), this._animatedValue = new r.default.Value(1), this.state = {
      imageLoadError: !1,
      imageLoading: !0
    }, this.componentWillEnter = e => {
      this._animatedValue.setValue(0), r.default.timing(this._animatedValue, {
        toValue: 1,
        duration: 400
      }).start(e)
    }, this.componentWillLeave = e => {
      r.default.timing(this._animatedValue, {
        toValue: 0,
        duration: 400
      }).start(e)
    }, this.getImageStyle = () => ({
      opacity: this._animatedValue
    }), this.handleImageError = () => {
      this.setState({
        imageLoadError: !0,
        imageLoading: !1
      })
    }, this.handleImageLoaded = () => {
      this.setState({
        imageLoading: !1
      })
    }
  }
}
class N extends l.Component {
  componentWillUnmount() {
    this.videoTimeout.stop()
  }
  componentDidUpdate(e) {
    let {
      playing: t
    } = this.props, n = this._video.current;
    if (null != n) {
      if (t && !e.playing) {
        this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), n.volume = .3;
        let e = n.play();
        null != e && e.then(() => {
          this.videoPlaying = !0
        })
      } else e.playing && !t && this.videoTimeout.start(400, () => {
        this.videoPlaying && (n.pause(), this.videoPlaying = !1)
      })
    }
  }
  renderTypeImage() {
    let {
      playing: e,
      slideImages: t,
      image: n,
      title: l,
      splashClassName: a
    } = this.props;
    return null == t ? (0, s.jsx)(m, {
      className: i(I.splash, a),
      src: n,
      title: l
    }, "image") : (0, s.jsx)(f.default, {
      onInterval: this.nextItem,
      interval: 2e3,
      className: I.slideshowWrapper,
      disable: !e,
      children: (0, s.jsx)(d.default, {
        children: this.renderSlideItem(t)
      })
    })
  }
  render() {
    let {
      video: e,
      className: t,
      placeholder: n,
      renderMediaOverlay: l,
      playing: a
    } = this.props, {
      videoLoadError: r,
      videoLoaded: o
    } = this.state;
    return n ? (0, s.jsx)("div", {
      className: t
    }) : (0, s.jsxs)("figure", {
      className: i(I.tileMedia, t),
      children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != l && l(a && o)]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      currentIndex: 0,
      videoLoadError: !1,
      videoLoaded: !1
    }, this._video = l.createRef(), this.videoTimeout = new u.Timeout, this.videoPlaying = !1, this.handleToggleMute = e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onToggleMute: t
      } = this.props;
      null == t || t(e)
    }, this.handleVideoError = () => {
      this.setState({
        videoLoadError: !0
      })
    }, this.handleVideoLoaded = () => {
      this.setState({
        videoLoaded: !0
      })
    }, this.renderTypeVideo = () => {
      let {
        videoLoaded: e
      } = this.state, {
        video: t,
        image: n,
        title: a,
        playing: r,
        muted: u,
        splashClassName: f,
        splashPlaceholderClassName: N,
        renderMediaOverlay: p
      } = this.props, S = u ? _.default : E.default;
      return (0, s.jsxs)(l.Fragment, {
        children: [o.isMobile ? null : (0, s.jsx)(T.default, {
          className: i(I.splash, f),
          muted: u,
          loop: !0,
          preload: "none",
          ref: this._video,
          onLoadedMetadata: this.handleVideoLoaded,
          onError: this.handleVideoError,
          children: (0, s.jsx)("source", {
            src: t,
            type: "video/mp4"
          })
        }), (0, s.jsx)(d.default, {
          children: r && e ? null : (0, s.jsx)(m, {
            className: i(I.splashPlaceholder, N),
            src: n,
            title: a
          }, 0)
        }), (0, s.jsx)(c.Clickable, {
          className: i(I.muteContainer, {
            [I.muteContainerPlaying]: r && e,
            [I.muteContainerMediaOverlay]: null != p
          }),
          onClick: this.handleToggleMute,
          children: r && e ? (0, s.jsx)(S, {
            className: I.mute
          }) : null
        })]
      })
    }, this.nextItem = () => {
      let {
        slideImages: e
      } = this.props;
      null != e && this.setState({
        currentIndex: (this.state.currentIndex + 1) % e.length
      })
    }, this.renderSlideItem = e => {
      let {
        image: t,
        title: n,
        playing: l,
        splashClassName: a
      } = this.props, {
        currentIndex: r
      } = this.state;
      return l ? (0, s.jsx)(m, {
        className: i(I.splash, a),
        src: e[r],
        title: n
      }, r) : (0, s.jsx)(m, {
        className: i(I.splash, a),
        src: t,
        title: n
      }, "image")
    }
  }
}
var p = N
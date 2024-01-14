"use strict";
n.r(t), n.d(t, {
  convertSecondsToClockFormat: function() {
    return b
  },
  default: function() {
    return k
  }
}), n("424973"), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n.n(r),
  u = n("458960"),
  d = n("77078"),
  c = n("95032"),
  m = n("829536"),
  f = n("563680"),
  h = n("725962"),
  p = n("672724"),
  g = n("392284"),
  E = n("468482"),
  v = n("316680"),
  C = n("830837"),
  I = n("132755"),
  x = n("73034"),
  _ = n("58608"),
  S = n("719347"),
  N = n("49111"),
  M = n("782340"),
  T = n("167691"),
  A = n("173791");
let j = "-:--",
  y = {
    friction: 14,
    tension: 200
  },
  R = {
    VIDEO: "VIDEO",
    AUDIO: "AUDIO"
  },
  L = {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  };

function b(e) {
  let t = 0 | e,
    n = t % 60;
  return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
}
let O = e => {
  let {
    current: t,
    duration: n
  } = e, a = null != t ? b(t) : j, s = null != n ? b(n) : j;
  return a = a.padStart(s.length, "0"), (0, l.jsxs)("div", {
    className: T.durationTimeWrapper,
    children: [(0, l.jsx)("span", {
      className: T.durationTimeDisplay,
      children: a
    }), (0, l.jsx)("span", {
      className: T.durationTimeSeparator,
      children: "/"
    }), (0, l.jsx)("span", {
      className: T.durationTimeDisplay,
      children: s
    })]
  })
};
class D extends a.Component {
  componentDidMount() {
    this.state.translateY.setValue(this.props.autoPlay ? 1 : 0)
  }
  componentDidUpdate(e) {
    let {
      hide: t,
      playing: n
    } = this.props;
    if (t && !e.hide) {
      var l;
      this.animateControls(1, n), null === (l = this.volumeButton) || void 0 === l || l.blur()
    } else !t && e.hide && this.animateControls(0, n)
  }
  updateProgress(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      {
        durationBar: n
      } = this;
    null != n && n.setGrabber(e, t)
  }
  animateControls(e, t) {
    let {
      translateY: n
    } = this.state;
    t ? u.default.spring(n, {
      toValue: e,
      ...y
    }).start() : n.setValue(e)
  }
  getAnimatedStyle() {
    let {
      translateY: e
    } = this.state;
    return {
      transform: [{
        translateY: e.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "100%"]
        })
      }]
    }
  }
  renderPlayIcon() {
    let {
      playing: e,
      currentTime: t,
      duration: n,
      onPause: a,
      onPlay: s,
      disabled: i
    } = this.props;
    return e ? (0, l.jsx)(d.Clickable, {
      className: T.videoButton,
      onClick: a,
      tabIndex: i ? -1 : 0,
      "aria-label": M.default.Messages.PAUSE,
      children: (0, l.jsx)(C.default, {
        className: T.controlIcon
      }, "pause")
    }) : null != t && t === n ? (0, l.jsx)(d.Clickable, {
      className: T.videoButton,
      onClick: s,
      tabIndex: i ? -1 : 0,
      "aria-label": M.default.Messages.PLAY_AGAIN,
      children: (0, l.jsx)(x.default, {
        className: T.controlIcon
      }, "replay")
    }) : (0, l.jsx)(d.Clickable, {
      className: T.videoButton,
      onClick: s,
      tabIndex: i ? -1 : 0,
      "aria-label": M.default.Messages.PLAY,
      children: (0, l.jsx)(I.default, {
        className: T.controlIcon
      }, "play")
    })
  }
  render() {
    let {
      buffers: e,
      children: t,
      currentTime: n,
      duration: a,
      muted: s,
      onDrag: i,
      onDragEnd: r,
      onDragStart: o,
      onToggleMuted: d,
      onVolumeShow: c,
      onVolumeHide: m,
      width: f,
      volume: h,
      type: g
    } = this.props;
    return (0, l.jsxs)(u.default.div, {
      className: g === R.VIDEO ? T.videoControls : T.audioControls,
      onClick: e => e.stopPropagation(),
      onDoubleClick: e => e.stopPropagation(),
      style: this.getAnimatedStyle(),
      children: [this.renderPlayIcon(), "string" == typeof f || f > 250 ? (0, l.jsx)(O, {
        current: n,
        duration: a
      }) : null, (0, l.jsx)(p.default, {
        buffers: e,
        value: null != a ? a : 0,
        onDrag: i,
        onDragEnd: r,
        onDragStart: o,
        type: p.default.Types.DURATION,
        ref: this.setDurationRef
      }), (0, l.jsx)("div", {
        className: A.flex,
        children: (0, l.jsx)(v.default, {
          ref: this.setVolumeButtonRef,
          muted: s,
          value: h,
          minValue: 0,
          maxValue: 1,
          currentWindow: window,
          onValueChange: e => i(e, p.default.Types.VOLUME),
          onToggleMute: d,
          onVolumeShow: c,
          onVolumeHide: m,
          iconClassName: T.controlIcon,
          sliderWrapperClassName: T.volumeSliderWrapper
        })
      }), t]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      translateY: new u.default.Value(0)
    }, this.setDurationRef = e => {
      this.durationBar = e
    }, this.setVolumeButtonRef = e => {
      this.volumeButton = e
    }
  }
}

function P(e) {
  let {
    fileName: t,
    fileSize: n,
    src: a,
    disabled: s,
    mimeType: i,
    hideDownloadButton: r
  } = e;
  return (0, l.jsxs)("div", {
    className: T.audioMetadata,
    children: [(0, l.jsxs)("div", {
      className: T.metadataContent,
      children: [s ? t : (0, l.jsx)(h.default, {
        href: a,
        className: T.metadataDownload,
        iconClassName: T.metadataIcon,
        mimeType: i,
        fileName: t
      }), (0, l.jsx)("div", {
        className: T.metadataSize,
        children: n
      })]
    }), !r && (0, l.jsx)(h.default, {
      href: a,
      className: T.metadataDownload,
      iconClassName: T.metadataIcon,
      mimeType: i
    })]
  })
}
D.defaultProps = {
  disabled: !1
};
class w extends a.Component {
  pop() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    this.setState({
      play: e
    }, this.popAnimation)
  }
  getAnimatedStyle() {
    let {
      opacity: e,
      scale: t
    } = this.state;
    return u.default.accelerate({
      opacity: e.interpolate({
        inputRange: [0, 1],
        outputRange: [0, .8]
      }),
      transform: [{
        scale: t.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2]
        })
      }]
    })
  }
  render() {
    let {
      play: e
    } = this.state, t = e ? I.default : C.default;
    return (0, l.jsx)(u.default.div, {
      className: T.playPausePop,
      style: this.getAnimatedStyle(),
      children: (0, l.jsx)(t, {
        className: T.playPausePopIcon
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      play: !1,
      scale: new u.default.Value(0),
      opacity: new u.default.Value(0)
    }, this.popAnimation = () => {
      let {
        opacity: e,
        scale: t
      } = this.state;
      t.setValue(0), e.setValue(0), u.default.parallel([u.default.sequence([u.default.timing(e, {
        toValue: 1,
        duration: 200
      }), u.default.timing(e, {
        toValue: 0,
        duration: 200
      })]), u.default.spring(t, {
        toValue: 1.5,
        ...y,
        friction: 80
      })]).start()
    }
  }
}
class U extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
    return !e.playable && t.playing ? {
      playing: !1,
      hideControls: !1
    } : null
  }
  componentDidMount() {
    let {
      playing: e,
      muted: t,
      volume: n
    } = this.state, {
      current: l
    } = this.mediaRef;
    null != l && (t && (l.muted = t), e && (this.play(!0), this.handleUIUpdate()), l.volume = n)
  }
  componentDidUpdate(e, t) {
    let {
      props: {
        onPause: n,
        onVolumeChange: l,
        onMute: a
      },
      state: {
        playing: s,
        fullscreen: i,
        muted: r,
        dragging: o,
        volume: u
      }
    } = this, {
      current: d
    } = this.mediaRef, {
      current: c
    } = this.playPausePopRef;
    if (null == d) return;
    s && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == c || c.pop(s))) : !s && t.playing && (d.pause(), null == c || c.pop(s), null == n || n());
    let m = (0, f.getFullScreenNode)(d.parentNode, d);
    i && !t.fullscreen && null != m ? ((0, f.requestFullScreen)(m), m.addEventListener(f.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit)) : !i && t.fullscreen && null != m && (m.removeEventListener(f.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, f.exitFullScreen)(m)), o === p.default.Types.DURATION && t.dragging !== p.default.Types.DURATION && s ? d.pause() : o !== p.default.Types.DURATION && t.dragging === p.default.Types.DURATION && s && d.play(), r !== t.muted && (d.muted = r, null == a || a(r)), u !== t.volume && (d.volume = u, null == l || l(u))
  }
  componentWillUnmount() {
    this._unmounted = !0;
    let {
      current: e
    } = this.mediaRef;
    if (null == e) return;
    let t = (0, f.getFullScreenNode)(e.parentNode, e);
    null != t && (t.removeEventListener(f.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, f.exitFullScreen)(t))
  }
  play() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        onPlay: t,
        volume: n,
        autoMute: l
      } = this.props,
      {
        current: a
      } = this.mediaRef;
    if (null != a) {
      let s = {};
      if ("function" == typeof n) {
        let e = n();
        e !== this.state.volume && (a.volume = e, s.volume = e)
      }
      if ("function" == typeof l) {
        let e = l();
        e !== this.state.muted && (a.muted = e, s.muted = e)
      }
      this.setState(s), a.play(), null == t || t(e, 1e3 * a.currentTime, 1e3 * a.duration)
    }
  }
  getWidth() {
    let {
      width: e
    } = this.props;
    return "100%" === e ? e : Math.max(e, U.minWidth)
  }
  getHeight() {
    let {
      height: e
    } = this.props;
    return "100%" === e ? e : Math.max(e, U.minHeight)
  }
  updateValue(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      {
        current: n
      } = this.controlsRef;
    null != n && n.updateProgress(e, t)
  }
  updateTime(e, t) {
    let n = 0 | e,
      l = 0 | t;
    (this.state.currentTime !== n || this.state.duration !== l) && this.setState({
      currentTime: n,
      duration: l
    })
  }
  updateControlsVisibility() {
    let {
      dragging: e,
      fullscreen: t
    } = this.state, n = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
    n !== this.state.hideControls && null == e && this.setState({
      hideControls: n
    })
  }
  renderVideo() {
    let {
      src: e,
      poster: t,
      forceExternal: n,
      onError: a,
      responsive: s,
      mediaLayoutType: i
    } = this.props, {
      playing: r,
      fullscreen: o
    } = this.state, u = this.getWidth(), d = this.getHeight();
    return n ? (0, l.jsx)(_.default, {
      className: T.video,
      controls: !1,
      height: d,
      poster: t,
      width: u,
      responsive: s && !o,
      mediaLayoutType: i,
      playsInline: !0,
      autoPlay: r
    }) : (0, l.jsx)(_.default, {
      className: T.video,
      controls: !1,
      playsInline: !0,
      autoPlay: r,
      height: d,
      responsive: s && !o,
      mediaLayoutType: o ? S.MediaLayoutType.STATIC : i,
      onClick: this.handleVideoClick,
      onEnded: this.handleEnded,
      onError: a,
      onLoadedMetadata: this.handleLoaded,
      onProgress: this.handleBuffer,
      poster: t,
      preload: this.state.preload,
      ref: this.mediaRef,
      width: u,
      src: e
    })
  }
  renderAudio() {
    return (0, l.jsx)("audio", {
      className: T.audio,
      controls: !1,
      onClick: this.handleVideoClick,
      onEnded: this.handleEnded,
      onLoadedMetadata: this.handleLoaded,
      onProgress: this.handleBuffer,
      preload: this.state.preload,
      ref: this.mediaRef,
      children: (0, l.jsx)("source", {
        src: this.props.src
      })
    })
  }
  renderControls() {
    let {
      current: e
    } = this.mediaRef, {
      props: {
        type: t,
        autoPlay: n,
        playable: a = !0,
        onVolumeShow: s,
        onVolumeHide: i
      },
      state: {
        buffers: r,
        currentTime: o,
        duration: u,
        hasClickedPlay: d,
        hideControls: h,
        muted: p,
        playing: E,
        fullscreen: v,
        volume: C,
        dragging: I
      }
    } = this, x = this.getWidth();
    return d || n || t === R.AUDIO ? (0, l.jsx)(D, {
      buffers: r,
      currentTime: o,
      duration: u,
      volume: (0, m.amplitudeToPerceptual)(C, 1),
      hide: t === R.VIDEO && h,
      muted: p,
      autoPlay: n,
      onDrag: this.handleDrag,
      onDragEnd: this.handleDragEnd,
      onDragStart: this.handleDragStart,
      onPause: () => this.setPlay(!1),
      onPlay: () => this.setPlay(!0),
      onToggleMuted: this.toggleMuted,
      onVolumeShow: s,
      onVolumeHide: i,
      playing: E,
      dragging: I,
      type: t,
      ref: this.controlsRef,
      width: v ? window.screen.width : x,
      disabled: !a,
      children: t === R.VIDEO ? (0, l.jsx)(c.default, {
        "aria-label": M.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
        className: T.videoButton,
        guestWindow: window,
        onClick: this.toggleFullscreen,
        node: (0, f.getFullScreenNode)(null == e ? void 0 : e.parentNode, e)
      }) : null
    }) : (0, l.jsx)(g.default, {
      onPlay: this.handleVideoClick,
      inactive: !a
    })
  }
  renderMetadata() {
    let {
      fileName: e,
      fileSize: t,
      src: n,
      type: a,
      playable: s,
      mimeType: i
    } = this.props;
    return null == e || null == t ? null : a === R.AUDIO ? (0, l.jsx)(P, {
      fileName: e,
      fileSize: t,
      src: n,
      disabled: !s,
      mimeType: i,
      hideDownloadButton: !0
    }) : null
  }
  renderPlayPausePop() {
    return (0, l.jsx)(w, {
      ref: this.playPausePopRef
    })
  }
  getMediaStyle() {
    let {
      responsive: e,
      type: t,
      height: n
    } = this.props, {
      fullscreen: l
    } = this.state, a = this.getWidth();
    return l ? L : t === R.AUDIO ? {
      width: void 0,
      height: "auto"
    } : e ? void 0 : {
      width: a,
      height: n
    }
  }
  render() {
    let {
      height: e,
      type: t,
      src: n,
      forceExternal: a,
      className: s,
      renderLinkComponent: r,
      responsive: o,
      mediaLayoutType: u,
      renderOverlayContent: d
    } = this.props, {
      fullscreen: c,
      hideControls: m,
      playing: f
    } = this.state, h = T.wrapperPaused;
    if (t === R.AUDIO ? h = T.wrapperAudio : m ? h = T.wrapperControlsHidden : f && (h = T.wrapperPlaying), a && t === R.VIDEO) {
      let t = this.getWidth();
      return (0, l.jsxs)("div", {
        className: i(h, {
          [T.wrapperMediaMosaic]: u === S.MediaLayoutType.MOSAIC
        }),
        style: o ? void 0 : {
          width: t,
          height: e
        },
        children: [this.renderMetadata(), this.renderVideo(), (0, l.jsx)("div", {
          className: T.playCenter,
          children: (0, l.jsx)(E.default, {
            className: T.playButton,
            externalURL: n,
            renderLinkComponent: r
          })
        })]
      })
    }
    return (0, l.jsxs)("div", {
      className: i(h, T.newMosaicStyle, s, {
        [T.wrapperMediaMosaic]: u === S.MediaLayoutType.MOSAIC
      }),
      "data-fullscreen": c,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseMove: f ? this.handleMouseMove : void 0,
      onKeyDown: this.handleKeyDown,
      style: this.getMediaStyle(),
      children: [this.renderMetadata(), t === R.AUDIO ? this.renderAudio() : this.renderVideo(), this.renderControls(), t === R.VIDEO ? this.renderPlayPausePop() : null, null != d ? (0, l.jsx)("div", {
        className: i({
          [T.overlayContentHidden]: f || c
        }),
        children: d()
      }) : null]
    })
  }
  constructor(e) {
    var t;
    super(e), t = this, this._unmounted = !1, this._lastMove = 0, this.mediaRef = a.createRef(), this.controlsRef = a.createRef(), this.playPausePopRef = a.createRef(), this.handleFullScreenExit = () => {
      let {
        current: e
      } = this.mediaRef;
      if (null == e) return;
      let t = (0, f.getFullScreenNode)(e.parentNode, e);
      (null == t || !(0, f.isFullScreen)(t)) && this.setState({
        fullscreen: !1
      })
    }, this.toggleFullscreen = () => {
      let e = !this.state.fullscreen;
      this.setState({
        fullscreen: e
      })
    }, this.setMuted = e => {
      this.setState({
        muted: e
      })
    }, this.toggleMuted = () => {
      this.setMuted(!this.state.muted)
    }, this.setTime = function(e) {
      let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        {
          current: l
        } = t.mediaRef;
      null != l && isFinite(l.duration) && isFinite(l.currentTime) && (l.currentTime = e, t.updateValue(e / l.duration, n), t.updateTime(e, l.duration))
    }, this.handleUIUpdate = () => {
      if (!this.state.playing || this._unmounted) return;
      let {
        current: e
      } = this.mediaRef;
      null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate))
    }, this.handleDrag = (e, t) => {
      let {
        current: n
      } = this.mediaRef;
      if (t === p.default.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
      else if (t === p.default.Types.VOLUME) {
        let t = (0, m.perceptualToAmplitude)(e, 1);
        0 === t ? this.setState({
          muted: !0,
          volume: t
        }) : this.state.muted && t > 0 ? this.setState({
          muted: !1,
          volume: t
        }) : this.setState({
          volume: t
        })
      }
    }, this.handleLoaded = () => {
      let {
        current: e
      } = this.mediaRef;
      null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
        hasLoadedMetadata: !0,
        currentTime: e.currentTime,
        duration: e.duration
      }))
    }, this.handleDurationChange = () => {
      let {
        current: e
      } = this.mediaRef;
      null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
        duration: e.duration
      }))
    }, this.handleBuffer = o.debounce(() => {
      let {
        current: e
      } = this.mediaRef;
      if (null == e) {
        this.setState({
          buffers: []
        });
        return
      }
      this.setState({
        buffers: function(e) {
          let t = [],
            {
              duration: n
            } = e;
          for (let l = 0; l < e.buffered.length; l++) {
            let a = e.buffered.start(l),
              s = e.buffered.end(l);
            if (s - a < 1) continue;
            let i = (s - a) / n,
              r = a / n;
            t.push([r, i])
          }
          return t
        }(e)
      })
    }, 400), this.handleEnded = e => {
      let {
        onEnded: t
      } = this.props;
      this.setState({
        playing: !1,
        hideControls: !1
      }), null != t && t(e)
    }, this.handleMouseMove = () => {
      this._lastMove = Date.now()
    }, this.handleMouseLeave = () => {
      this.state.playing && (this._lastMove = 0), this.setState({
        hovering: !1
      })
    }, this.handleMouseEnter = () => {
      "none" === this.state.preload && this.setState({
        preload: "metadata"
      }), this.setState({
        hovering: !0
      })
    }, this.handleVideoClick = e => {
      let {
        state: {
          hasClickedPlay: t,
          playing: n
        },
        props: {
          onClick: l,
          autoPlay: a,
          autoMute: s
        }
      } = this;
      if (null != l) {
        l(e);
        return
      }
      e.stopPropagation(), a && !t && n && s ? this.setState({
        muted: !1,
        hasClickedPlay: !0
      }) : this.setPlay(!this.state.playing)
    }, this.setPlay = e => {
      let {
        props: {
          autoMute: t
        },
        state: {
          hasClickedPlay: n,
          muted: l
        }
      } = this;
      e !== this.state.playing && (e ? this.setState({
        playing: e,
        hasClickedPlay: !0,
        muted: (!!n || !t) && l
      }) : this.setState({
        playing: !1,
        hideControls: !1
      }))
    }, this.handleDragStart = e => {
      this.setState({
        dragging: e
      })
    }, this.handleDragEnd = () => {
      this.setState({
        dragging: null
      }), this._lastMove = Date.now()
    }, this.handleKeyDown = e => {
      let {
        current: t
      } = this.mediaRef;
      if (e.which === N.KeyboardKeys.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
      else if (e.which >= N.KeyboardKeys.DIGIT_0 && e.which <= N.KeyboardKeys.DIGIT_9 && null != t) {
        e.preventDefault();
        let n = (e.which - N.KeyboardKeys.DIGIT_0) / 10;
        t.currentTime = t.duration * n, this.setPlay(!0)
      }
    };
    let {
      autoPlay: n,
      autoMute: l,
      volume: s,
      playable: i
    } = this.props, r = "function" == typeof s ? s() : s, u = "function" == typeof l ? l() : l;
    this.state = {
      buffers: [],
      currentTime: null,
      dragging: null,
      duration: null,
      fullscreen: !1,
      hasClickedPlay: !1,
      hasLoadedMetadata: !1,
      hideControls: !i,
      muted: u,
      volume: r,
      playing: n,
      preload: "none",
      width: U.minWidth,
      height: U.minHeight,
      hovering: !1
    }
  }
}
U.Types = R, U.defaultProps = {
  width: 400,
  height: 300,
  forceExternal: !1,
  playable: !0,
  downloadable: !0,
  autoPlay: !1,
  autoMute: !1,
  volume: 1
}, U.minWidth = 150, U.minHeight = 110;
var k = U
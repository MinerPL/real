"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("672724"),
  u = n("368121"),
  d = n("570511"),
  c = n("974261"),
  m = n("782340"),
  f = n("906419");
class h extends a.PureComponent {
  componentDidMount() {
    this.updateMediaBar()
  }
  componentDidUpdate(e) {
    (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar()
  }
  updateMediaBar() {
    let {
      muted: e,
      value: t,
      maxValue: n
    } = this.props, l = this._mediaBar.current;
    null != l && (e ? l.setGrabber(0) : l.setGrabber(t / n))
  }
  render() {
    let {
      iconClassName: e,
      className: t,
      sliderWrapperClassName: n,
      sliderClassName: a,
      currentWindow: s,
      muted: h,
      minValue: p,
      maxValue: g,
      value: E,
      onVolumeShow: v,
      onVolumeHide: C
    } = this.props, {
      hovered: I,
      focused: x,
      dragging: _
    } = this.state, S = u.default;
    return h || E === p ? S = d.default : E < g / 2 && (S = c.default), (0, l.jsxs)("div", {
      className: i(t, f.container),
      onMouseEnter: () => {
        clearTimeout(this._hoverTimeout), this.setState({
          hovered: !0
        }), null == v || v()
      },
      onMouseLeave: () => {
        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
          this.setState({
            hovered: !1
          }), null == C || C()
        }, 150)
      },
      onFocus: () => this.setState({
        focused: !0
      }),
      onBlur: () => this.setState({
        focused: !1
      }),
      onKeyDown: this.handleKeyDown,
      children: [(0, l.jsx)("div", {
        className: i(f.volumeButtonSlider, n, {
          [f.sliderVisible]: I || x || _
        }),
        onMouseEnter: () => {
          clearTimeout(this._hoverTimeout), this.setState({
            hovered: !0
          })
        },
        onMouseLeave: () => {
          clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => this.setState({
            hovered: !1
          }), 150)
        },
        children: (0, l.jsx)(o.default, {
          sliderClassName: a,
          type: o.default.Types.VOLUME,
          value: E / g,
          onDrag: this.handleValueChange,
          onDragStart: this.handleDragStart,
          onDragEnd: this.handleDragEnd,
          currentWindow: s,
          ref: this._mediaBar
        })
      }), (0, l.jsx)(r.Button, {
        className: f.volumeButton,
        "aria-label": m.default.Messages.CONTROL_VOLUME,
        size: r.Button.Sizes.NONE,
        look: r.Button.Looks.BLANK,
        onClick: this.handleToggleMute,
        children: (0, l.jsx)(S, {
          className: e
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this._mediaBar = a.createRef(), this.state = {
      hovered: !1,
      focused: !1,
      dragging: !1
    }, this.handleValueChange = e => {
      let {
        maxValue: t,
        onValueChange: n
      } = this.props;
      null == n || n(e * t)
    }, this.handleToggleMute = () => {
      let {
        onToggleMute: e
      } = this.props;
      null == e || e()
    }, this.handleKeyDown = e => {
      let {
        minValue: t,
        value: n,
        maxValue: l,
        onValueChange: a
      } = this.props, s = .05 * (l - t);
      switch (e.key) {
        case "ArrowUp":
          e.stopPropagation(), e.preventDefault(), null == a || a(Math.min(l, n + s));
          break;
        case "ArrowDown":
          e.stopPropagation(), e.preventDefault(), null == a || a(Math.max(t, n - s))
      }
    }, this.handleDragStart = () => {
      this.setState({
        dragging: !0
      })
    }, this.handleDragEnd = () => {
      this.setState({
        dragging: !1
      })
    }, this.blur = () => {
      this.setState({
        focused: !1
      })
    }
  }
}
h.defaultProps = {
  minValue: 0,
  maxValue: 100,
  handleSize: 16
};
var p = h
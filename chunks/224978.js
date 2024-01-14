"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("458960"),
  o = n("974667"),
  u = n("77078"),
  d = n("272030"),
  c = n("59678"),
  E = n("890474");
class f extends s.PureComponent {
  componentWillLeave(e) {
    r.default.parallel([r.default.timing(this.state.opacity, {
      toValue: 0,
      duration: 200
    }), r.default.timing(this.state.height, {
      toValue: 0,
      duration: 200
    })]).start(e)
  }
  componentWillEnter(e) {
    this.state.opacity.setValue(0), this.state.height.setValue(0), r.default.parallel([r.default.timing(this.state.opacity, {
      toValue: 1,
      duration: 200
    }), r.default.timing(this.state.height, {
      toValue: c.PEOPLE_LIST_ITEM_HEIGHT,
      duration: 200
    })]).start(e)
  }
  render() {
    let {
      height: e,
      opacity: t,
      hovered: n,
      isContextMenuActive: s
    } = this.state, {
      children: i,
      user: d,
      onClick: c,
      isActive: f
    } = this.props;
    return (0, a.jsx)(o.ListNavigatorItem, {
      id: d.id,
      children: o => (0, a.jsx)(u.FocusRing, {
        offset: {
          left: -8,
          right: -8
        },
        children: (0, a.jsx)(r.default.div, {
          className: l(E.peopleListItem, {
            [E.active]: f || s
          }),
          onContextMenu: e => this.handleContextMenu(e, d),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: null != c ? c : void 0,
          style: {
            height: e,
            opacity: t
          },
          ...o,
          children: i(n || f || s)
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      height: new r.default.Value(c.PEOPLE_LIST_ITEM_HEIGHT),
      opacity: new r.default.Value(1),
      hovered: !1,
      isContextMenuActive: !1
    }, this.handleMouseEnter = () => {
      let {
        isFocused: e,
        isActive: t,
        onOtherHover: n
      } = this.props, {
        isContextMenuActive: a
      } = this.state;
      this.setState({
        hovered: e
      }), e && !t && !a && (null == n || n())
    }, this.handleMouseLeave = () => {
      this.setState({
        hovered: !1
      })
    }, this.handleContextMenu = (e, t) => {
      this.setState({
        isContextMenuActive: !0
      }), (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("406784").then(n.bind(n, "406784"));
        return n => (0, a.jsx)(e, {
          ...n,
          user: t
        })
      }, {
        onClose: () => {
          this.setState({
            isContextMenuActive: !1
          })
        }
      })
    }
  }
}
var _ = f
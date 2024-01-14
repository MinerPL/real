"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("70102"), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("907002"),
  i = n("974667"),
  r = n("446674"),
  o = n("77078"),
  u = n("272030"),
  d = n("191145"),
  c = n("843962"),
  f = n("679653"),
  h = n("373469"),
  C = n("945956"),
  p = n("660478"),
  m = n("18494"),
  E = n("697218"),
  g = n("471671"),
  I = n("15738"),
  S = n("956089"),
  _ = n("108189"),
  N = n("610898"),
  T = n("829562"),
  A = n("255991"),
  L = n("49111"),
  v = n("71576");
let x = {
  friction: 28,
  tension: 600
};

function R(e) {
  switch (e) {
    case "height":
    case "opacity":
      return {
        duration: 150, ...x
      };
    case "scale":
      return {
        ...x
      };
    default:
      throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
  }
}
class M extends a.PureComponent {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !g.default.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: R
    }).start().then(() => this.setState({
      animating: !1
    }))
  }
  componentWillAppear(e) {
    let {
      controller: t
    } = this.state;
    t.update({
      immediate: !0,
      scale: 1,
      opacity: 1,
      height: 1,
      config: R
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: !0
    }, () => t.update({
      immediate: !g.default.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: R
    }).start().then(e))
  }
  componentWillUnmount() {
    this.state.controller.dispose()
  }
  getAnimatedStyle() {
    let {
      controller: e
    } = this.state, {
      opacity: t,
      height: n,
      scale: l
    } = e.springs;
    return {
      opacity: t,
      height: n.to([0, 1], [0, 56]),
      transform: l.to([0, 1], [.5, 1]).to(e => "scale(".concat(e, ")"))
    }
  }
  getChannelIcon() {
    let {
      channel: e
    } = this.props, t = e.type === L.ChannelTypes.DM ? E.default.getUser(e.getRecipientId()) : null;
    return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, c.getChannelIconURL)(e)
  }
  render() {
    let {
      channel: e,
      channelName: t,
      selected: n,
      badge: a,
      audio: r,
      video: u,
      stream: d,
      isCurrentUserInThisDMCall: c,
      unread: f
    } = this.props, {
      hovered: h,
      animating: C
    } = this.state;
    return (0, l.jsx)(s.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, l.jsxs)(N.ListItem, {
        children: [(0, l.jsx)(I.default, {
          hovered: !C && h,
          selected: !C && n,
          unread: !C && f,
          className: v.pill
        }), (0, l.jsx)(T.default, {
          text: null != t ? t : "",
          selected: n,
          children: (0, l.jsx)(o.BlobMask, {
            selected: n || h,
            lowerBadge: a > 0 ? (0, A.renderMentionBadge)(a) : null,
            upperBadge: (0, A.renderMediaBadge)({
              audio: r,
              video: u,
              screenshare: d,
              isCurrentUserConnected: c
            }),
            lowerBadgeWidth: (0, S.getBadgeWidthForValue)(a),
            children: (0, l.jsx)(i.ListNavigatorItem, {
              id: e.id,
              children: a => (0, l.jsx)(_.default, {
                to: L.Routes.CHANNEL(L.ME, e.id),
                onMouseEnter: () => this.setState({
                  hovered: !0
                }),
                onMouseLeave: () => this.setState({
                  hovered: !1
                }),
                icon: this.getChannelIcon(),
                selected: n || h,
                ariaLabel: null != t ? t : "",
                onContextMenu: this.handleContextMenu,
                ...a
              })
            })
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      hovered: !1,
      animating: !0,
      controller: new s.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: R
      })
    }, this.handleContextMenu = e => {
      let {
        channel: t
      } = this.props, a = t.type === L.ChannelTypes.DM ? E.default.getUser(t.getRecipientId()) : null;
      null != a ? (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("130074").then(n.bind(n, "130074"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          user: a
        })
      }) : (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("493015").then(n.bind(n, "493015"));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          selected: !1
        })
      })
    }
  }
}
M.defaultProps = {
  badge: 0,
  audio: !1,
  video: !1,
  isCurrentUserInThisDMCall: !1
};
var O = a.forwardRef(function(e, t) {
  let n = e.channel.id,
    a = (0, f.default)(e.channel),
    s = (0, r.useStateFromStores)([C.default], () => C.default.getChannelId(), []),
    i = (0, r.useStateFromStores)([d.default], () => null != s ? d.default.getMode(s) : L.ChannelModes.VOICE, [s]),
    o = (0, r.useStateFromStores)([h.default], () => h.default.getAllApplicationStreamsForChannel(n).length > 0),
    u = (0, r.useStateFromStores)([m.default], () => m.default.getChannelId(), []),
    c = (0, r.useStateFromStores)([p.default], () => p.default.getMentionCount(n), [n]),
    E = s === n,
    g = !1,
    I = !1;
  return E && (g = i === L.ChannelModes.VOICE, I = i === L.ChannelModes.VIDEO), (0, l.jsx)(M, {
    ...e,
    ref: t,
    channelName: a,
    unread: c > 0,
    selected: u === n,
    badge: c,
    audio: g,
    video: I,
    stream: o,
    isCurrentUserInThisDMCall: E
  })
})
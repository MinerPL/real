"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var s, l, a, i, r = n("37983"),
  o = n("884691"),
  u = n("414456"),
  d = n.n(u),
  c = n("516555"),
  f = n("748820"),
  E = n("617258"),
  _ = n("769846"),
  T = n("77078"),
  I = n("79112"),
  m = n("526887"),
  N = n("574073"),
  p = n("28007"),
  S = n("367594"),
  A = n("273108"),
  C = n("118503"),
  h = n("659186"),
  g = n("304198"),
  M = n("427459"),
  O = n("49111"),
  R = n("782340"),
  L = n("673983");
(a = s || (s = {})).ENTER = "enter", a.CONFETTI = "confetti", a.LEAF_PEEL = "leaf_peel", a.LEAF_FALL = "leaf_fall", a.EXIT = "exit";
let v = {
  enter: {
    BEG: 0,
    END: 22
  },
  confetti: {
    BEG: 23,
    END: 119
  },
  leaf_peel: {
    BEG: 120,
    END: 160
  },
  leaf_fall: {
    BEG: 161,
    END: 163
  },
  exit: {
    BEG: 164,
    END: 200
  }
};
(i = l || (l = {})).TOP_LEFT = "TOP_LEFT", i.TOP_RIGHT = "TOP_RIGHT", i.BOTTOM_LEFT = "BOTTOM_LEFT", i.BOTTOM_RIGHT = "BOTTOM_RIGHT";
let P = ["TOP_LEFT", "TOP_RIGHT"],
  D = (0, E.cssValueToNumber)(_.default.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  x = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  y = Object.freeze({
    TOP_LEFT: {
      confettiPosition: {
        x: D - 11,
        y: D - 125
      },
      confettiVelocityDirection: {
        x: 1,
        y: 1
      },
      leafPosition: {
        x: 100,
        y: 144
      },
      leafRotationDirection: 1
    },
    TOP_RIGHT: {
      confettiPosition: {
        x: 11,
        y: D - 125
      },
      confettiVelocityDirection: {
        x: -1,
        y: 1
      },
      leafPosition: {
        x: 90,
        y: 144
      },
      leafRotationDirection: -1
    },
    BOTTOM_LEFT: {
      ...x,
      confettiPosition: {
        x: D - 11,
        y: 125
      },
      confettiVelocityDirection: {
        x: 1,
        y: -1
      }
    },
    BOTTOM_RIGHT: {
      ...x,
      confettiPosition: {
        x: 11,
        y: 125
      },
      confettiVelocityDirection: {
        x: -1,
        y: -1
      }
    }
  }),
  U = "falling-leaf",
  j = ["#61D5B2"],
  b = n("761545"),
  G = n("689888"),
  B = [b, G];

function F() {
  return n.el("510370").then(n.t.bind(n, "510370", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function k(e) {
  let {
    onAnimationComplete: t
  } = e, n = o.useRef(null), [s, a] = o.useState(null), [i] = o.useState(function() {
    let e = Math.floor(Math.random() * Object.keys(l).length);
    switch (e) {
      case 0:
        return "TOP_LEFT";
      case 2:
        return "TOP_RIGHT";
      case 3:
        return "BOTTOM_LEFT";
      default:
        return "BOTTOM_RIGHT"
    }
  }()), {
    createMultipleConfettiAt: u,
    confettiCanvas: E
  } = o.useContext(m.ConfettiCannonContext), [_, T] = o.useState(null), I = (0, c.useConfettiCannon)(E, _), N = function(e, t) {
    if (null == e) return "enter";
    switch (e) {
      case "enter":
        return "confetti";
      case "confetti":
        if (P.includes(t)) return "leaf_peel";
        return "exit";
      case "leaf_peel":
        return "leaf_fall";
      case "leaf_fall":
        return "exit";
      case "exit":
        return "enter"
    }
  }(s, i), p = P.includes(i), S = p && "exit" === s, C = o.useCallback(e => {
    a(e)
  }, []), h = o.useCallback(() => {
    "exit" === s && t()
  }, [t, s]), g = o.useCallback(e => {
    n.current = e
  }, []);
  return o.useEffect(() => {
    if ("confetti" === s) {
      let {
        confettiVelocityDirection: e
      } = y[i], t = function(e, t) {
        let n = null == e ? void 0 : e.getBoundingClientRect();
        if (null == n) return {
          x: 0,
          y: 0
        };
        let s = y[t];
        return {
          x: n.left + s.confettiPosition.x,
          y: n.top + s.confettiPosition.y
        }
      }(n.current, i);
      u(t.x, t.y, {
        velocity: {
          type: "static-random",
          minValue: {
            x: 10 * e.x,
            y: 80 * e.y
          },
          maxValue: {
            x: 80 * e.x,
            y: 180 * e.y
          }
        }
      })
    }
  }, [u, i, s]), o.useEffect(() => {
    if (p && "leaf_fall" === s) {
      let e = y[i].leafRotationDirection;
      I.createConfetti({
        id: "".concat(U, "-").concat((0, f.v4)()),
        position: {
          type: "static",
          value: function(e, t) {
            let n = null == e ? void 0 : e.getBoundingClientRect();
            if (null == n) return {
              x: 0,
              y: 0
            };
            let s = y[t];
            return {
              x: n.left + s.leafPosition.x,
              y: n.top + s.leafPosition.y
            }
          }(n.current, i)
        },
        size: {
          type: "static",
          value: 45
        },
        rotation: {
          type: "linear-random",
          minValue: {
            x: 0,
            y: 0,
            z: 0
          },
          maxValue: {
            x: 0,
            y: 0,
            z: 0
          },
          minAddValue: {
            x: 0,
            y: 0,
            z: 8 * e
          },
          maxAddValue: {
            x: 0,
            y: 0,
            z: 12 * e
          }
        }
      }, {
        sprite: "TOP_LEFT" === i ? b : G
      })
    }
  }, [p, I, i, s]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.SpriteCanvas, {
      ref: T,
      sprites: B,
      colors: j,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, r.jsx)(A.default, {
      animationRef: g,
      className: d(L.easterEggAnimation, {
        [L.easterEggAnimationTopLeft]: "TOP_LEFT" === i,
        [L.easterEggAnimationTopRight]: "TOP_RIGHT" === i,
        [L.easterEggAnimationBottomLeft]: "BOTTOM_LEFT" === i,
        [L.easterEggAnimationBottomRight]: "BOTTOM_RIGHT" === i,
        [L.easterEggAnimationHideLeaf]: S
      }),
      nextScene: N,
      sceneSegments: v,
      onScenePlay: C,
      onSceneComplete: h,
      importData: F,
      pauseWhileUnfocused: !1
    })]
  })
}

function w(e) {
  let t, {
      message: n,
      compact: s,
      guild: l,
      usernameHook: a,
      onClickMessage: i
    } = e,
    u = function(e) {
      switch (e.type) {
        case O.MessageTypes.GUILD_BOOST_TIER_1:
          return O.BoostedGuildTiers.TIER_1;
        case O.MessageTypes.GUILD_BOOST_TIER_2:
          return O.BoostedGuildTiers.TIER_2;
        case O.MessageTypes.GUILD_BOOST_TIER_3:
          return O.BoostedGuildTiers.TIER_3
      }
      return null
    }(n),
    d = (0, S.default)(n),
    {
      createMultipleConfettiAt: c,
      addClickListener: f
    } = o.useContext(m.ConfettiCannonContext),
    [E, _] = o.useState(!1),
    A = o.useRef(null),
    {
      reducedMotion: v
    } = o.useContext(T.AccessibilityPreferencesContext),
    P = (0, N.getMessageAuthor)(n),
    D = P.nick,
    x = a(P);
  t = null == u || null == l ? d > 1 ? R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
    username: D,
    usernameHook: x,
    numSubscriptions: d
  }) : R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
    username: D,
    usernameHook: x
  }) : d > 1 ? R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
    username: D,
    usernameHook: x,
    numSubscriptions: d,
    guildName: l.name,
    newTierName: (0, M.getTierName)(u)
  }) : R.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
    username: D,
    usernameHook: x,
    guildName: l.name,
    newTierName: (0, M.getTierName)(u)
  });
  let y = o.useCallback(() => {
      if (!v.enabled) {
        if (E || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null === (e = A.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
          if (null != t) c(t.left + t.width / 2, t.top + t.height / 2)
        } else _(!0)
      }
    }, [c, v, E]),
    j = o.useCallback(() => {
      _(!1)
    }, []),
    b = o.useCallback((e, t) => {
      (null == t ? void 0 : t.id.startsWith(U)) && ((0, p.updatePoggermodeSettings)({
        settingsVisible: !0
      }), I.default.open(O.UserSettingsSections.POGGERMODE))
    }, []);
  o.useEffect(() => {
    let e = f(b);
    return e
  });
  let G = (0, r.jsx)(T.Clickable, {
    className: L.iconWrapper,
    innerRef: A,
    onClick: i,
    children: (0, r.jsx)(C.default, {
      className: L.icon,
      onMouseEnter: y
    })
  });
  return (0, r.jsxs)(g.default, {
    iconNode: G,
    timestamp: n.timestamp,
    compact: s,
    children: [(0, r.jsx)("div", {
      onClick: i,
      className: L.message,
      children: t
    }), E ? (0, r.jsx)(h.default, {
      children: (0, r.jsx)("div", {
        className: L.cannonWrapper,
        children: (0, r.jsx)(k, {
          onAnimationComplete: j
        })
      })
    }) : null]
  })
}
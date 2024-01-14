"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var a, s, l, i, r = n("37983"),
  o = n("884691"),
  u = n("414456"),
  d = n.n(u),
  c = n("516555"),
  f = n("748820"),
  m = n("617258"),
  E = n("769846"),
  _ = n("77078"),
  h = n("79112"),
  p = n("526887"),
  I = n("574073"),
  T = n("28007"),
  g = n("367594"),
  C = n("273108"),
  S = n("118503"),
  A = n("659186"),
  N = n("304198"),
  M = n("427459"),
  v = n("49111"),
  x = n("782340"),
  O = n("673983");
(l = a || (a = {})).ENTER = "enter", l.CONFETTI = "confetti", l.LEAF_PEEL = "leaf_peel", l.LEAF_FALL = "leaf_fall", l.EXIT = "exit";
let L = {
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
(i = s || (s = {})).TOP_LEFT = "TOP_LEFT", i.TOP_RIGHT = "TOP_RIGHT", i.BOTTOM_LEFT = "BOTTOM_LEFT", i.BOTTOM_RIGHT = "BOTTOM_RIGHT";
let R = ["TOP_LEFT", "TOP_RIGHT"],
  y = (0, m.cssValueToNumber)(E.default.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  P = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  D = Object.freeze({
    TOP_LEFT: {
      confettiPosition: {
        x: y - 11,
        y: y - 125
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
        y: y - 125
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
      ...P,
      confettiPosition: {
        x: y - 11,
        y: 125
      },
      confettiVelocityDirection: {
        x: 1,
        y: -1
      }
    },
    BOTTOM_RIGHT: {
      ...P,
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
  j = "falling-leaf",
  U = ["#61D5B2"],
  b = n("761545"),
  G = n("689888"),
  B = [b, G];

function k() {
  return n.el("510370").then(n.t.bind(n, "510370", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function w(e) {
  let {
    onAnimationComplete: t
  } = e, n = o.useRef(null), [a, l] = o.useState(null), [i] = o.useState(function() {
    let e = Math.floor(Math.random() * Object.keys(s).length);
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
    confettiCanvas: m
  } = o.useContext(p.ConfettiCannonContext), [E, _] = o.useState(null), h = (0, c.useConfettiCannon)(m, E), I = function(e, t) {
    if (null == e) return "enter";
    switch (e) {
      case "enter":
        return "confetti";
      case "confetti":
        if (R.includes(t)) return "leaf_peel";
        return "exit";
      case "leaf_peel":
        return "leaf_fall";
      case "leaf_fall":
        return "exit";
      case "exit":
        return "enter"
    }
  }(a, i), T = R.includes(i), g = T && "exit" === a, S = o.useCallback(e => {
    l(e)
  }, []), A = o.useCallback(() => {
    "exit" === a && t()
  }, [t, a]), N = o.useCallback(e => {
    n.current = e
  }, []);
  return o.useEffect(() => {
    if ("confetti" === a) {
      let {
        confettiVelocityDirection: e
      } = D[i], t = function(e, t) {
        let n = null == e ? void 0 : e.getBoundingClientRect();
        if (null == n) return {
          x: 0,
          y: 0
        };
        let a = D[t];
        return {
          x: n.left + a.confettiPosition.x,
          y: n.top + a.confettiPosition.y
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
  }, [u, i, a]), o.useEffect(() => {
    if (T && "leaf_fall" === a) {
      let e = D[i].leafRotationDirection;
      h.createConfetti({
        id: "".concat(j, "-").concat((0, f.v4)()),
        position: {
          type: "static",
          value: function(e, t) {
            let n = null == e ? void 0 : e.getBoundingClientRect();
            if (null == n) return {
              x: 0,
              y: 0
            };
            let a = D[t];
            return {
              x: n.left + a.leafPosition.x,
              y: n.top + a.leafPosition.y
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
  }, [T, h, i, a]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.SpriteCanvas, {
      ref: _,
      sprites: B,
      colors: U,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, r.jsx)(C.default, {
      animationRef: N,
      className: d(O.easterEggAnimation, {
        [O.easterEggAnimationTopLeft]: "TOP_LEFT" === i,
        [O.easterEggAnimationTopRight]: "TOP_RIGHT" === i,
        [O.easterEggAnimationBottomLeft]: "BOTTOM_LEFT" === i,
        [O.easterEggAnimationBottomRight]: "BOTTOM_RIGHT" === i,
        [O.easterEggAnimationHideLeaf]: g
      }),
      nextScene: I,
      sceneSegments: L,
      onScenePlay: S,
      onSceneComplete: A,
      importData: k,
      pauseWhileUnfocused: !1
    })]
  })
}

function H(e) {
  let t, {
      message: n,
      compact: a,
      guild: s,
      usernameHook: l,
      onClickMessage: i
    } = e,
    u = function(e) {
      switch (e.type) {
        case v.MessageTypes.GUILD_BOOST_TIER_1:
          return v.BoostedGuildTiers.TIER_1;
        case v.MessageTypes.GUILD_BOOST_TIER_2:
          return v.BoostedGuildTiers.TIER_2;
        case v.MessageTypes.GUILD_BOOST_TIER_3:
          return v.BoostedGuildTiers.TIER_3
      }
      return null
    }(n),
    d = (0, g.default)(n),
    {
      createMultipleConfettiAt: c,
      addClickListener: f
    } = o.useContext(p.ConfettiCannonContext),
    [m, E] = o.useState(!1),
    C = o.useRef(null),
    {
      reducedMotion: L
    } = o.useContext(_.AccessibilityPreferencesContext),
    R = (0, I.getMessageAuthor)(n),
    y = R.nick,
    P = l(R);
  t = null == u || null == s ? d > 1 ? x.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
    username: y,
    usernameHook: P,
    numSubscriptions: d
  }) : x.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
    username: y,
    usernameHook: P
  }) : d > 1 ? x.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
    username: y,
    usernameHook: P,
    numSubscriptions: d,
    guildName: s.name,
    newTierName: (0, M.getTierName)(u)
  }) : x.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
    username: y,
    usernameHook: P,
    guildName: s.name,
    newTierName: (0, M.getTierName)(u)
  });
  let D = o.useCallback(() => {
      if (!L.enabled) {
        if (m || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
          if (null != t) c(t.left + t.width / 2, t.top + t.height / 2)
        } else E(!0)
      }
    }, [c, L, m]),
    U = o.useCallback(() => {
      E(!1)
    }, []),
    b = o.useCallback((e, t) => {
      (null == t ? void 0 : t.id.startsWith(j)) && ((0, T.updatePoggermodeSettings)({
        settingsVisible: !0
      }), h.default.open(v.UserSettingsSections.POGGERMODE))
    }, []);
  o.useEffect(() => {
    let e = f(b);
    return e
  });
  let G = (0, r.jsx)(_.Clickable, {
    className: O.iconWrapper,
    innerRef: C,
    onClick: i,
    children: (0, r.jsx)(S.default, {
      className: O.icon,
      onMouseEnter: D
    })
  });
  return (0, r.jsxs)(N.default, {
    iconNode: G,
    timestamp: n.timestamp,
    compact: a,
    children: [(0, r.jsx)("div", {
      onClick: i,
      className: O.message,
      children: t
    }), m ? (0, r.jsx)(A.default, {
      children: (0, r.jsx)("div", {
        className: O.cannonWrapper,
        children: (0, r.jsx)(w, {
          onAnimationComplete: U
        })
      })
    }) : null]
  })
}
"use strict";
E.r(_), E.d(_, {
  CommonConfettiCannonContextProvider: function() {
    return I
  }
}), E("222007");
var t = E("37983"),
  o = E("884691"),
  n = E("516555"),
  r = E("526887"),
  i = E("172858"),
  a = E("807181");

function I(e) {
  let {
    children: _
  } = e, [E, I] = o.useState(null), [s, T] = o.useState(null), S = o.useRef(new Set), [N, O] = o.useState(!1), A = o.useCallback(e => {
    S.current.delete(e), O(S.current.size > 0)
  }, []), R = o.useCallback(e => (S.current.add(e), O(!0), () => A(e)), [A]), l = o.useCallback((e, _) => {
    for (let E of S.current) E(e, _)
  }, []);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(r.ConfettiCannonContextProvider, {
      confettiCanvas: s,
      spriteCanvas: E,
      baseConfig: i.COMMON_CONFETTI_BASE_CONFIG,
      addClickListener: R,
      removeClickListener: A,
      children: _
    }), (0, t.jsx)(n.ConfettiCanvas, {
      ref: T,
      className: a.canvas,
      environment: i.COMMON_CONFETTI_ENVIRONMENT,
      onClick: N ? l : void 0
    }), (0, t.jsx)(n.SpriteCanvas, {
      ref: I,
      colors: i.COMMON_CONFETTI_COLORS,
      sprites: i.COMMON_CONFETTI_SPRITES,
      spriteWidth: i.COMMON_CONFETTI_MAX_SPRITE_SIZE,
      spriteHeight: i.COMMON_CONFETTI_MAX_SPRITE_SIZE
    })]
  })
}
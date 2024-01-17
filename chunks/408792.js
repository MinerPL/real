"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("819855"),
  i = n("77078"),
  l = n("841098"),
  r = n("449918"),
  o = n("451166"),
  u = n("45029"),
  d = n("300113"),
  c = n("106413"),
  f = n("843455"),
  E = n("406307");
let _ = {
    trophy: f.Color.PRIMARY_400,
    locked: f.Color.PRIMARY_400,
    unlocked: f.Color.GREEN_330
  },
  h = {
    trophy: f.Color.PRIMARY_400,
    locked: f.Color.PRIMARY_400,
    unlocked: f.Color.GREEN_330
  };

function C(e) {
  var t;
  let {
    achievementId: n,
    unlocked: f,
    size: C = i.AvatarSizes.SIZE_40
  } = e, I = (0, l.default)(), T = (0, c.getPoggermodeAchievementData)(n);
  if (null == T) return null;
  let S = (0, i.getAvatarSpecs)(C),
    {
      name: m,
      rarity: p
    } = T,
    {
      color: A
    } = (0, c.getAchievementStyles)(p),
    g = (0, s.isThemeDark)(I) ? _ : h,
    N = (S.size - S.offset - 2 * S.stroke) * .8,
    R = S.size - S.stroke,
    O = {
      width: .4 * N,
      height: .4 * N
    },
    L = {
      width: O.width + 1,
      height: O.height + 1,
      right: S.stroke + 1,
      bottom: S.stroke + 1,
      padding: 0
    };
  return (0, a.jsxs)("div", {
    className: E.container,
    style: {
      width: R,
      height: R,
      padding: S.stroke
    },
    "aria-label": "".concat(null !== (t = m()) && void 0 !== t ? t : ""),
    children: [(0, a.jsx)("div", {
      className: E.trophyIconContainer,
      children: (0, a.jsx)(d.default, {
        color: f ? A : (0, r.getColor)(g.trophy),
        width: N,
        height: N
      })
    }), !f && (0, a.jsx)("div", {
      className: E.lockContainer,
      style: L,
      children: (0, a.jsx)(u.default, {
        color: (0, r.getColor)(g.locked),
        ...O
      })
    }), f && p === c.PoggermodeAchievementRarity.LEGENDARY && (0, a.jsx)("div", {
      className: E.lockContainer,
      style: L,
      children: (0, a.jsx)(o.default, {
        className: E.confettiIcon,
        ...O
      })
    })]
  })
}
C.Sizes = i.AvatarSizes
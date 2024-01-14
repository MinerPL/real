"use strict";
s.r(t), s.d(t, {
  getPerkIcon: function() {
    return f
  }
}), s("70102");
var a = s("414456"),
  n = s.n(a),
  l = s("36694"),
  i = s("46829"),
  r = s("272339"),
  o = s("110006"),
  d = s("682344"),
  u = s("238521"),
  c = s("754576"),
  E = s("228427"),
  _ = s("290581"),
  T = s("595086"),
  I = s("619911"),
  S = s("698015"),
  N = s("427459"),
  g = s("392568");

function f(e, t) {
  if (t) return {
    icon: l.default,
    className: g.unlocked
  };
  switch (e) {
    case N.PerkIcons.EMOJI:
      return {
        icon: i.default, className: n(g.icon, g.emoji)
      };
    case N.PerkIcons.AUDIO:
      return {
        icon: r.default, className: n(g.icon, g.audio)
      };
    case N.PerkIcons.ANIMATED:
      return {
        icon: o.default, className: n(g.icon, g.animated)
      };
    case N.PerkIcons.CUSTOMIZATION:
      return {
        icon: u.default, className: n(g.icon, g.customization)
      };
    case N.PerkIcons.UPLOAD:
      return {
        icon: S.default, className: n(g.icon, g.upload)
      };
    case N.PerkIcons.VANITY:
      return {
        icon: _.default, className: n(g.icon, g.vanity)
      };
    case N.PerkIcons.STREAM:
      return {
        icon: I.default, className: n(g.icon, g.stream)
      };
    case N.PerkIcons.STICKER:
      return {
        icon: T.default, className: n(g.icon, g.sticker)
      };
    case N.PerkIcons.CUSTOM_ROLE_ICON:
      return {
        icon: d.default, className: n(g.icon, g.customRoleIcon)
      };
    case N.PerkIcons.STAGE_VIDEO:
      return {
        icon: E.default, className: n(g.icon, g.stage)
      };
    case N.PerkIcons.SOUNDBOARD:
      return {
        icon: c.default, className: n(g.icon, g.soundboard)
      }
  }
  throw Error("Unexpected perk icon ".concat(e))
}
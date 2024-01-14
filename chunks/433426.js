"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("290110"),
  r = s("294490"),
  o = s("782340"),
  d = s("317295");
let u = () => [{
  icon: d.perkNewsletter,
  title: o.default.Messages.HYPESQUAD_PERK_TITLE_NEWSLETTER,
  description: o.default.Messages.HYPESQUAD_PERK_DESCRIPTION_NEWSLETTER
}, {
  icon: d.perkBadge,
  title: o.default.Messages.HYPESQUAD_PERK_TITLE_PROFILE_BADGE,
  description: o.default.Messages.HYPESQUAD_PERK_DESCRIPTION_PROFILE_BADGE
}, {
  icon: d.perkChallenges,
  title: o.default.Messages.HYPESQUAD_PERK_TITLE_SQUAD_CHALLENGES,
  description: o.default.Messages.HYPESQUAD_PERK_DESCRIPTION_SQUAD_CHALLENGES
}];
class c extends n.Component {
  render() {
    return (0, a.jsxs)("div", {
      className: d.features,
      children: [(0, a.jsx)(r.default, {
        className: d.video,
        videoID: "SWzB1mx2o5k"
      }), (0, a.jsx)(l.Heading, {
        className: d.perksHeading,
        variant: "heading-sm/semibold",
        children: o.default.Messages.HYPESQUAD_PERKS_HEADING
      }), (0, a.jsx)(i.default, {
        features: u()
      })]
    })
  }
}
var S = c
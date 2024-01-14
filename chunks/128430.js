"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983"),
  n = s("884691"),
  r = s("895530"),
  l = s("18987"),
  i = s("145131"),
  u = s("49111"),
  o = s("782340"),
  d = s("654698");
class c extends n.PureComponent {
  renderContentRatingImage() {
    let {
      contentRating: e,
      contentRatingAgency: t
    } = this.props.sku;
    return null == e || null == t ? null : (0, a.jsx)(l.default, {
      className: d.rating,
      agency: t,
      rating: e.rating
    })
  }
  render() {
    let {
      sku: {
        contentRating: e,
        contentRatingAgency: t
      },
      className: s
    } = this.props;
    if (null == e || null == t) return null;
    let n = {
        [u.ContentRatingAgencies.ESRB]: {
          1: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ALCOHOL_REFERENCE,
          2: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ANIMATED_BLOOD,
          3: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_BLOOD,
          4: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_BLOOD_AND_GORE,
          5: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_CARTOON_VIOLENCE,
          6: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_COMIC_MISCHIEF,
          7: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_CRUDE_HUMOR,
          8: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_DRUG_REFERENCE,
          9: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_FANTASY_VIOLENCE,
          10: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_INTENSE_VIOLENCE,
          11: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_LANGUAGE,
          12: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_LYRICS,
          13: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MATURE_HUMOR,
          14: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_NUDITY,
          15: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_PARTUAL_NUDITY,
          16: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_REAL_GAMBLING,
          17: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_CONTENT,
          18: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_THEMES,
          19: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SEXUAL_VIOLENCE,
          20: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SIMULATED_GAMBLING,
          21: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_LANGUAGE,
          22: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_LYRICS,
          23: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_STRONG_SEXUAL_CONTENT,
          24: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SUGGESTIVE_THEMES,
          25: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_TOBACCO_REFERENCE,
          26: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_ALCOHOL,
          27: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_DRUGS,
          28: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USE_OF_TOBACCO,
          29: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_VIOLENCE,
          30: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_VIOLENT_REFERENCES,
          31: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_IN_GAME_PURCHASES,
          32: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_USERS_INTERACT,
          33: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_SHARES_LOCATION,
          34: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_UNRESTRICTED_INTERNET,
          35: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_BLOOD,
          36: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_CARTOON_VIOLENCE,
          37: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_FANTASY_VIOLENCE,
          38: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_LANGUAGE,
          39: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_LYRICS,
          40: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_SEXUAL_THEMES,
          41: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_SUGGESTIVE_THEMES,
          42: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_MILD_VIOLENCE,
          43: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_ESRB_ANIMATED_VIOLENCE
        },
        [u.ContentRatingAgencies.PEGI]: {
          1: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_VIOLENCE,
          2: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_BAD_LANGUAGE,
          3: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_FEAR,
          4: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_GAMBLING,
          5: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_SEX,
          6: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_DRUGS,
          7: o.default.Messages.APPLICATION_STORE_RATING_DESCRIPTORS_PEGI_DISCRIMINATION
        }
      },
      l = e.descriptors.map(e => n[t][e]).join(", ");
    return (0, a.jsxs)("div", {
      className: s,
      children: [(0, a.jsx)(r.default, {
        children: o.default.Messages.APPLICATION_STORE_SECTION_TITLE_RATINGS
      }), (0, a.jsxs)(i.default, {
        className: d.content,
        children: [this.renderContentRatingImage(), (0, a.jsx)("div", {
          className: d.info,
          children: l
        })]
      })]
    })
  }
}
var _ = c
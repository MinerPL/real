"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("49111"),
  r = s("462172");
let u = {
    ESRB: {
      EVERYONE: "1",
      EVERYONE_TEN_PLUS: "2",
      TEEN: "3",
      MATURE: "4",
      ADULT: "5",
      RATING_PENDING: "6"
    },
    PEGI: {
      THREE: "1",
      SEVEN: "2",
      TWELVE: "3",
      SIXTEEN: "4",
      EIGHTEEN: "5"
    }
  },
  o = {
    [i.ContentRatingAgencies.ESRB]: {
      [u.ESRB.EVERYONE]: r.esrbEveryone,
      [u.ESRB.EVERYONE_TEN_PLUS]: r.esrbEveryoneTenPlus,
      [u.ESRB.TEEN]: r.esrbTeen,
      [u.ESRB.MATURE]: r.esrbMature,
      [u.ESRB.ADULT]: r.esrbAdult,
      [u.ESRB.RATING_PENDING]: r.esrbRatingPending
    },
    [i.ContentRatingAgencies.PEGI]: {
      [u.PEGI.THREE]: r.pegiThree,
      [u.PEGI.SEVEN]: r.pegiSeven,
      [u.PEGI.TWELVE]: r.pegiTwelve,
      [u.PEGI.SIXTEEN]: r.pegiSixteen,
      [u.PEGI.EIGHTEEN]: r.pegiEighteen
    }
  };
var d = e => {
  let {
    agency: t,
    rating: s,
    className: n
  } = e, i = o[t][s];
  return null == i ? null : (0, a.jsx)("div", {
    className: l(r.contentRating, i, n)
  })
}
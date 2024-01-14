"use strict";
n.r(t), n.d(t, {
  CLYDE_AI_USER_ID: function() {
    return a
  },
  CLYDE_AI_MENTION_COLOR: function() {
    return o
  },
  CLYDE_PERSONALITY_MAX_LENGTH: function() {
    return l
  },
  CLYDE_PERSONALITY_FEEDBACK_URL: function() {
    return u
  },
  ClydeFeedbackReasons: function() {
    return r
  },
  getClydeFeedbackReasons: function() {
    return c
  },
  randomClydeThanks: function() {
    return d
  }
});
var i, r, s = n("782340");
let a = "1081004946872352958",
  o = 3000177,
  l = 1e3,
  u = "https://forms.gle/T12GPi33Pt5ocg89A";

function c() {
  return [{
    value: "INACCURATE",
    label: s.default.Messages.CLYDE_FEEDBACK_OPTION_INACCURATE
  }, {
    value: "HARMFUL",
    label: s.default.Messages.CLYDE_FEEDBACK_OPTION_HARMFUL
  }, {
    value: "NOT_HELPFUL",
    label: s.default.Messages.CLYDE_FEEDBACK_OPTION_NOT_HELPFUL
  }, {
    value: "INAPPROPRIATE",
    label: s.default.Messages.CLYDE_FEEDBACK_OPTION_INAPPROPRIATE
  }, {
    value: "OTHER",
    label: s.default.Messages.CLYDE_FEEDBACK_OPTION_OTHER
  }]
}

function d() {
  let e = [s.default.Messages.CLYDE_USER_RATING_THANKS_1, s.default.Messages.CLYDE_USER_RATING_THANKS_2, s.default.Messages.CLYDE_USER_RATING_THANKS_3, s.default.Messages.CLYDE_USER_RATING_THANKS_4, s.default.Messages.CLYDE_USER_RATING_THANKS_5, s.default.Messages.CLYDE_USER_RATING_THANKS_6, s.default.Messages.CLYDE_USER_RATING_THANKS_7, s.default.Messages.CLYDE_USER_RATING_THANKS_8, s.default.Messages.CLYDE_USER_RATING_THANKS_9, s.default.Messages.CLYDE_USER_RATING_THANKS_10];
  return e[Math.floor(Math.random() * e.length)]
}(i = r || (r = {})).INACCURATE = "INACCURATE", i.HARMFUL = "HARMFUL", i.NOT_HELPFUL = "NOT_HELPFUL", i.INAPPROPRIATE = "INAPPROPRIATE", i.OTHER = "OTHER"
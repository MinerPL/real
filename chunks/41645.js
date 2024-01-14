"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
}), a("424973");
var l, s, n = a("782340");

function o(e) {
  let t = [{
    label: n.default.Messages.CALL_FEEDBACK_OPTION_COULD_NOT_HEAR_AUDIO,
    code: 2,
    value: "I couldn't hear audio at all"
  }, {
    label: n.default.Messages.CALL_FEEDBACK_OPTION_NOBODY_COULD_HEAR_ME,
    code: 3,
    value: "Nobody could hear me"
  }, {
    label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_ECHOS,
    code: 4,
    value: "Audio had echos or feedback"
  }, {
    label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_ROBOTIC,
    code: 5,
    value: "Audio was robotic or distorted"
  }, {
    label: n.default.Messages.CALL_FEEDBACK_OPTION_AUDIO_CUT,
    code: 6,
    value: "Audio cut in and out"
  }, {
    label: n.default.Messages.CALL_FEEDBACK_OPTION_BAD_VOLUME,
    code: 7,
    value: "Volume was too low or high"
  }, {
    label: n.default.Messages.CALL_FEEDBACK_OPTION_BACKGROUND_NOISE,
    code: 8,
    value: "Background noise was too loud"
  }];
  return e && t.push({
    label: n.default.Messages.CALL_FEEDBACK_OPTION_SPEAKERPHONE,
    code: 9,
    value: "Issues with speakerphone"
  }), t.push({
    label: n.default.Messages.CALL_FEEDBACK_OPTION_HEADSET,
    code: 10,
    value: "Issues with headset/bluetooth"
  }, {
    label: n.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
    code: 1,
    value: "Other"
  }), t
}(s = l || (l = {})).COULD_NOT_HEAR_AUDIO = "I couldn't hear audio at all", s.NOBODY_COULD_HEAR_ME = "Nobody could hear me", s.AUDIO_ECHOS = "Audio had echos or feedback", s.AUDIO_ROBOTIC = "Audio was robotic or distorted", s.AUDIO_CUT = "Audio cut in and out", s.BAD_VOLUME = "Volume was too low or high", s.BACKGROUND_NOISE = "Background noise was too loud", s.SPEAKERPHONE = "Issues with speakerphone", s.HEADSET = "Issues with headset/bluetooth", s.OTHER = "Other"
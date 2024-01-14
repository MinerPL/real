"use strict";
t.r(s), t.d(s, {
  default: function() {
    return n
  }
});
var a = t("706530"),
  l = t("782340");

function n(e, s) {
  let t = [{
    value: a.StreamIssueReportReasons.BLACK_SCREEN,
    label: s ? l.default.Messages.STREAM_REPORT_ENDED_BLACK : l.default.Messages.STREAM_REPORT_BLACK
  }, {
    value: a.StreamIssueReportReasons.BLURRY,
    label: s ? l.default.Messages.STREAM_REPORT_ENDED_BLURRY : l.default.Messages.STREAM_REPORT_BLURRY
  }, {
    value: a.StreamIssueReportReasons.LAGGING,
    label: s ? l.default.Messages.STREAM_REPORT_ENDED_LAGGING : l.default.Messages.STREAM_REPORT_LAGGING
  }, {
    value: a.StreamIssueReportReasons.OUT_OF_SYNC,
    label: s ? l.default.Messages.STREAM_REPORT_ENDED_OUT_OF_SYNC : l.default.Messages.STREAM_REPORT_OUT_OF_SYNC
  }, {
    value: a.StreamIssueReportReasons.AUDIO_MISSING,
    label: s ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_MISSING : l.default.Messages.STREAM_REPORT_AUDIO_MISSING
  }, {
    value: a.StreamIssueReportReasons.AUDIO_POOR,
    label: s ? l.default.Messages.STREAM_REPORT_ENDED_AUDIO_POOR : l.default.Messages.STREAM_REPORT_AUDIO_POOR
  }, {
    value: a.StreamIssueReportReasons.STREAM_STOPPED,
    label: l.default.Messages.STREAM_REPORT_ENDED_STREAM_STOPPED_UNEXPECTEDLY
  }, {
    value: a.StreamIssueReportReasons.OTHER,
    label: l.default.Messages.CALL_FEEDBACK_OPTION_OTHER
  }];
  return t
}
"use strict";
n.r(t), n.d(t, {
  submitPollVote: function() {
    return i
  }
});
var a = n("872717"),
  s = n("448993"),
  l = n("49111");
async function i(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: i
  } = e;
  try {
    await a.default.put({
      url: l.Endpoints.POLL_ANSWERS(t, n),
      body: {
        answer_ids: i
      }
    })
  } catch (e) {
    throw new s.APIError(e)
  }
}
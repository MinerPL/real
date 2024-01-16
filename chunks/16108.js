"use strict";
n.r(t), n.d(t, {
  acceptMessageRequest: function() {
    return d
  },
  clearMessageRequestState: function() {
    return r
  },
  markAsMessageRequest: function() {
    return o
  },
  rejectMessageRequest: function() {
    return c
  },
  rejectMessageRequestBatch: function() {
    return E
  },
  fetchUserCountryCode: function() {
    return N
  }
});
var u = n("872717"),
  a = n("913144"),
  l = n("437822"),
  s = n("773163"),
  i = n("49111");
async function d(e) {
  await u.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.ACCEPTED
    }
  }), a.default.dispatch({
    type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
    channelId: e
  })
}

function r(e) {
  return u.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.UNSPECIFIED
    }
  })
}

function o(e) {
  return u.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e),
    body: {
      consent_status: s.MessageRequestConsentStatusTypes.PENDING
    }
  })
}

function c(e) {
  return u.default.delete({
    url: i.Endpoints.CHANNEL_RECIPIENT_CONSENT(e)
  })
}

function E(e) {
  return u.default.put({
    url: i.Endpoints.CHANNEL_RECIPIENT_REJECT_BATCH(),
    body: {
      channel_ids: e
    }
  })
}

function N() {
  l.default.getLocationMetadata()
}
"use strict";
n.r(t), n.d(t, {
  accountDetailsInit: function() {
    return p
  },
  accountDetailsClose: function() {
    return C
  },
  disableAccount: function() {
    return I
  },
  saveAccountRequest: function() {
    return A
  },
  saveAccountChanges: function() {
    return T
  },
  getHarvestStatus: function() {
    return R
  },
  requestHarvest: function() {
    return h
  },
  setPendingAvatar: function() {
    return S
  },
  setPendingGlobalNameName: function() {
    return N
  },
  setPendingAvatarDecoration: function() {
    return m
  },
  setPendingProfileEffectId: function() {
    return g
  },
  clearErrors: function() {
    return P
  },
  resetPendingAccountChanges: function() {
    return O
  },
  resetAllPending: function() {
    return v
  },
  resetAndCloseUserProfileForm: function() {
    return L
  },
  setDisableSubmit: function() {
    return U
  }
});
var r = n("872717"),
  i = n("95410"),
  l = n("819855"),
  o = n("913144"),
  s = n("393414"),
  a = n("599110"),
  u = n("315102"),
  c = n("730622"),
  d = n("437822"),
  f = n("49111"),
  E = n("191349"),
  _ = n("782340");

function p() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_INIT"
  })
}

function C() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_CLOSE"
  })
}

function I(e, t) {
  let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
    i = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
  return (0, c.default)(t => r.default.post({
    url: i,
    body: {
      password: e,
      ...t
    },
    oldFormErrors: !0
  }), {
    modalProps: {
      title: n
    },
    checkEnabled: !1
  }).then(() => {
    d.default.logoutInternal(), (0, s.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
  })
}
async function A(e) {
  let t = await r.default.patch({
      url: f.Endpoints.ME,
      oldFormErrors: !0,
      body: e
    }),
    n = t.body;
  if (n.token) {
    let t = n.token;
    delete n.token, o.default.dispatch({
      type: "UPDATE_TOKEN",
      token: t,
      userId: n.id
    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.default.dispatch({
      type: "PASSWORD_UPDATED",
      userId: n.id
    })
  }
  return o.default.dispatch({
    type: "CURRENT_USER_UPDATE",
    user: n
  }), t
}

function T(e) {
  let {
    username: t,
    discriminator: n,
    email: r,
    emailToken: l,
    password: s,
    avatar: d,
    avatarDecoration: p,
    newPassword: C,
    globalName: I
  } = e;
  return o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
  }), (0, c.default)(e => {
    let o = {
      username: t,
      email: r,
      email_token: l,
      password: s,
      avatar: d,
      discriminator: n,
      global_name: I,
      new_password: C,
      ...e
    };
    null === p && (o.avatar_decoration_id = null), null != p && (o.avatar_decoration_id = p.id, o.avatar_decoration_sku_id = p.skuId);
    let a = i.default.get(f.DEVICE_TOKEN),
      u = (0, E.getDevicePushProvider)();
    null != u && null != a && (o.push_provider = u, o.push_token = a);
    let c = i.default.get(f.DEVICE_VOIP_TOKEN);
    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (o.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = c), A(o)
  }, {
    checkEnabled: !1,
    modalProps: {
      title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
    },
    hooks: {
      onEarlyClose: () => o.default.dispatch({
        type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
        errors: {}
      })
    }
  }).then(e => {
    let t = e.body;
    return a.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
      animated: (0, u.isAnimatedIconHash)(t.avatar)
    }), o.default.dispatch({
      type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
    }), e
  }, e => (o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
    errors: e.body
  }), e))
}

function R() {
  return r.default.get({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function h() {
  return r.default.post({
    url: f.Endpoints.USER_HARVEST,
    oldFormErrors: !0
  })
}

function S(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
    avatar: e
  }), null == e ? l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
}

function N(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
    globalName: e
  })
}

function m(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
    avatarDecoration: e
  })
}

function g(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
    profileEffectId: e
  })
}

function P() {
  o.default.dispatch({
    type: "USER_SETTINGS_CLEAR_ERRORS"
  })
}

function O() {
  o.default.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
  })
}

function v() {
  o.default.dispatch({
    type: "USER_SETTINGS_RESET_ALL_PENDING"
  })
}

function L() {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
  })
}

function U(e) {
  o.default.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
    disable: e
  })
}
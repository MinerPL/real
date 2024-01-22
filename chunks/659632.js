"use strict";
n.r(t), n.d(t, {
  isCustomGiftEnabled: function() {
    return U
  },
  GiftExperience: function() {
    return i
  },
  GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING: function() {
    return k
  },
  GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD: function() {
    return w
  },
  getGiftExperience: function() {
    return V
  },
  shouldShowCustomGiftExperience: function() {
    return G
  },
  makeComboId: function() {
    return F
  },
  parseComboId: function() {
    return x
  },
  isGiftCodeEmbed: function() {
    return H
  },
  findGiftCodes: function() {
    return Y
  },
  getGiftCodeURL: function() {
    return j
  },
  resolveGiftCode: function() {
    return W
  },
  trackGiftCodeCopy: function() {
    return K
  },
  getStep: function() {
    return z
  },
  getHeaderText: function() {
    return q
  },
  getButtonText: function() {
    return X
  },
  getBodyText: function() {
    return Q
  },
  getErrorMessage: function() {
    return Z
  },
  firstLibraryApplicationForGiftCode: function() {
    return J
  },
  processGiftCodeInput: function() {
    return $
  },
  useGetGiftCode: function() {
    return ee
  }
}), n("222007"), n("781738"), n("794252");
var i, s, r = n("506838"),
  a = n("446674"),
  o = n("333805"),
  l = n("791160"),
  u = n("977591"),
  d = n("353365"),
  c = n("697218"),
  f = n("599110"),
  _ = n("449008"),
  h = n("773336"),
  g = n("719923"),
  m = n("655518"),
  E = n("271560"),
  p = n("49111"),
  v = n("646718"),
  S = n("782340");
let T = m.default.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
  I = ["discordapp.com/gifts", "discord.com/gifts"].map(e => m.default.escape(e)),
  C = [T, ...I].join("|"),
  A = RegExp("(?: |^|https?://)(?:".concat(C, ")/([a-z0-9-]+)"), "gi"),
  y = ["discord.com/billing/promotions", "promos.discord.gg"].map(e => m.default.escape(e)),
  N = [...y].join("|"),
  R = RegExp("(?: |^|https?://)(?:".concat(N, ")/([a-z0-9-]+)"), "gi"),
  O = (e, t) => Array(t).fill(void 0).map(() => "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")).join("-?"),
  D = O(4, 4),
  P = O(4, 6),
  b = O(5, 3),
  L = [D, P, b, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
  M = new RegExp("^(".concat("WUMP-?", ")?(").concat(L, ")$")),
  U = e => null != e && !0;
(s = i || (i = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.CUSTOM_STYLE = 1] = "CUSTOM_STYLE", s[s.CUSTOM_MESSAGE = 2] = "CUSTOM_MESSAGE", s[s.EMOJI_SOUNDBOARD = 3] = "EMOJI_SOUNDBOARD";
let k = new Set([2, 3]),
  w = new Set([3]),
  V = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "getGiftExperience";
    return null != e ? 3 : u.ExpandedGiftingRevampExperiment.getCurrentConfig({
      location: n
    }, {
      autoTrackExposure: t
    }).enabled ? 1 : 0
  },
  G = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "shouldShowCustomGiftExperience";
    return 0 !== V(e, t, n)
  };

function F(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : void 0;
  return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
}

function x(e) {
  let [t, n, i] = e.split(":");
  return {
    skuId: t,
    subscriptionPlanId: "" === n ? null : n,
    giftStyle: "" !== i && null != i ? Number.parseInt(i) : void 0
  }
}

function B(e) {
  return e.replace(/[^A-Za-z0-9]/g, "")
}
let H = e => (null == e ? void 0 : e.type) === p.MessageTypes.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === p.MessageEmbedTypes.GIFT,
  Y = e => {
    let t;
    if (null == e) return [];
    let n = new Set;
    for (; null != (t = A.exec(e)) && n.size < 3;) n.add(B(t[1]));
    for (; null != (t = R.exec(e)) && n.size < 3;) n.add(B(t[1]));
    return Array.from(n)
  };

function j() {
  let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    n = window.GLOBAL_ENV.GIFT_CODE_HOST;
  return null == n || (0, h.isAndroid)() ? (n = location.host, e = "/gifts/".concat(t)) : e = "/".concat(t), "".concat(location.protocol, "//").concat(n).concat(e)
}
async function W(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  try {
    let i = await (0, E.httpGetWithCountryCodeQuery)({
        url: p.Endpoints.GIFT_CODE_RESOLVE(e),
        query: {
          with_application: t,
          with_subscription_plan: n
        },
        oldFormErrors: !0
      }),
      s = i.body;
    return f.default.track(p.AnalyticEvents.GIFT_CODE_RESOLVED, {
      resolved: !0,
      gift_code: s.code,
      gift_code_max_uses: s.max_uses,
      sku_id: s.store_listing.sku.id,
      sku_type: s.store_listing.sku.type,
      application_id: s.store_listing.sku.application_id,
      store_title: s.store_listing.sku.name
    }, {
      flush: !0
    }), s
  } catch (t) {
    throw f.default.track(p.AnalyticEvents.GIFT_CODE_RESOLVED, {
      resolved: !1,
      gift_code: e
    }), new o.default(t)
  }
}

function K(e, t) {
  f.default.track(p.AnalyticEvents.GIFT_CODE_COPIED, {
    ...(0, l.default)(t, !1, !1),
    ...e.analyticsData
  })
}

function z(e, t, n, i, s, r, a) {
  return null == n && (i || s || null == e) ? !a || r || i || s ? i && (t.isSubscription || null != e) ? p.GiftCodeModalStates.SUCCESS : p.GiftCodeModalStates.CONFIRM : p.GiftCodeModalStates.OPEN : p.GiftCodeModalStates.ERROR
}

function q(e, t, n) {
  switch (e) {
    case p.GiftCodeModalStates.ERROR:
      return S.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
    case p.GiftCodeModalStates.SUCCESS:
      return t.isSubscription ? S.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
        skuName: n.name
      }) : S.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
    case p.GiftCodeModalStates.CONFIRM:
    default:
      return t.isSubscription ? S.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
        skuName: n.name
      }) : S.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
  }
}

function X(e, t, n) {
  switch (e) {
    case p.GiftCodeModalStates.ERROR:
      return S.default.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
    case p.GiftCodeModalStates.SUCCESS:
      if (__OVERLAY__) return S.default.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
      if (t.isSubscription) return S.default.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
      return S.default.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
    case p.GiftCodeModalStates.OPEN:
      return S.default.Messages.GIFT_OPEN_PROMPT;
    case p.GiftCodeModalStates.CONFIRM:
    default:
      if (null != n && n) return S.default.Messages.GIFT_CODE_AUTH_ACCEPT;
      if (null != t.giftStyle) return t.isClaimed ? S.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : S.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
      return t.isSubscription ? S.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : S.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
  }
}

function Q(e) {
  let {
    step: t,
    sku: n,
    libraryApplication: i,
    error: s,
    accepted: a,
    accepting: o,
    onGoToLibrary: l,
    subscriptionPlan: u = null
  } = e;
  switch (t) {
    case p.GiftCodeModalStates.ERROR:
      return Z(i, s, a, o, l);
    case p.GiftCodeModalStates.SUCCESS:
      if (null != u) {
        var d;
        return d = u, (0, r.match)(d).with({
          interval: v.SubscriptionIntervalTypes.MONTH,
          premiumSubscriptionType: v.PremiumTypes.TIER_2
        }, () => S.default.Messages.PREMIUM_FEATURES_TIER_2.format({
          timeInterval: S.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
        })).with({
          interval: v.SubscriptionIntervalTypes.YEAR,
          premiumSubscriptionType: v.PremiumTypes.TIER_2
        }, () => S.default.Messages.PREMIUM_FEATURES_TIER_2.format({
          timeInterval: S.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
        })).with({
          interval: v.SubscriptionIntervalTypes.MONTH,
          premiumSubscriptionType: v.PremiumTypes.TIER_1
        }, () => S.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({
          intervalCount: d.intervalCount
        })).with({
          interval: v.SubscriptionIntervalTypes.YEAR,
          premiumSubscriptionType: v.PremiumTypes.TIER_1
        }, () => S.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({
          intervalCount: d.intervalCount
        })).otherwise(() => S.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC)
      }
      return S.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
        skuName: n.name
      });
    case p.GiftCodeModalStates.CONFIRM:
    default:
      if (null != u) {
        let e = u.interval === v.SubscriptionIntervalTypes.MONTH ? S.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : S.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM;
        return e.format({
          skuName: n.name,
          intervalCount: u.intervalCount
        })
      }
      return S.default.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
        skuName: n.name
      })
  }
}

function Z(e, t, n, i, s) {
  let r = S.default.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
    onGoToLibrary: s
  });
  if (null != (n || i ? void 0 : e)) return r;
  if (null == t) return null;
  let a = c.default.getCurrentUser();
  return function(e, t) {
    switch (e.code) {
      case p.AbortCodes.INVALID_GIFT_SELF_REDEMPTION:
        return S.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
      case p.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        return S.default.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
      case p.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED:
        return S.default.Messages.GIFT_ERROR_OWNED;
      case p.AbortCodes.UNKNOWN_GIFT_CODE:
        return S.default.Messages.GIFT_CONFIRMATION_BODY_INVALID;
      case p.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
        return S.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
          planName: (0, g.isPremiumExactly)(t, v.PremiumTypes.TIER_2) ? S.default.Messages.PREMIUM_TIER_2 : S.default.Messages.PREMIUM_TIER_1
        });
      case p.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
        return S.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
      case p.AbortCodes.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
        return S.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
      case p.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
        return S.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
      case p.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
        return S.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
      default:
        return S.default.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
    }
  }(t, a)
}

function J(e, t, n) {
  let i = t.applicationId,
    s = e.length > 0 ? e : [i],
    r = s.map(e => n.getLibraryApplication(i, e, !0)).filter(_.isNotNullish);
  return r.length === s.length ? r[0] : null
}

function $(e) {
  let t = e.trim().split("/").pop(),
    n = t.match(M);
  if (null == n) return null;
  let [i, s, r] = n;
  return null == r ? null : r.replace(/-/g, "")
}
let ee = (e, t) => (0, a.useStateFromStores)([d.default], () => {
  if (null == e || !t) return null;
  let n = d.default.getGiftCode(e);
  return null == n || "" === n ? null : n
})
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var a, s, i = n("37983");
n("884691");
var l = n("391679"),
  r = n("77078"),
  o = n("913144"),
  u = n("850068"),
  d = n("697796"),
  c = n("619340"),
  f = n("569272"),
  E = n("970728"),
  _ = n("913645"),
  h = n("393414"),
  C = n("271938"),
  I = n("697218"),
  T = n("599110"),
  S = n("253981"),
  m = n("50885"),
  p = n("861309"),
  A = n("492249"),
  g = n("49111");

function N(e, t) {
  null != e && T.default.track(g.AnalyticEvents.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, l.extractId)(e),
    link_type: t
  })
}(a = s || (s = {})).SETTINGS = "settings", a.CHANGELOG = "changelog", a.LIBRARY = "library", a.STORE = "store", a.INVITE = "invite", a.CHANNEL = "channel", a.GUILD_SETTINGS = "guild_settings";
var R = {
  [g.RPCCommands.INVITE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e, {
        invite: n
      } = await E.default.resolveInvite(t, "Desktop Modal");
      if (null == n) throw new p.default(A.RPCErrors.INVALID_INVITE, "Invalid invite id: ".concat(t));
      return C.default.isAuthenticated() ? o.default.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: n,
        code: t,
        context: g.AppContext.APP
      }) : (0, h.replaceWith)(g.Routes.INVITE(t)), {
        invite: n,
        code: t
      }
    }
  },
  [g.RPCCommands.GUILD_TEMPLATE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      if (null == I.default.getCurrentUser()) return;
      let {
        guildTemplate: a
      } = await _.default.resolveGuildTemplate(t);
      if (null == a) throw new p.default(A.RPCErrors.INVALID_GUILD_TEMPLATE, "Invalid guild template id: ".concat(t));
      return m.default.focus(), (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("843456").then(n.bind(n, "843456"));
        return t => (0, i.jsx)(e, {
          ...t,
          guildTemplate: a
        })
      }), {
        guildTemplate: a,
        code: t
      }
    }
  },
  [g.RPCCommands.GIFT_CODE_BROWSER]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return new Promise((e, a) => {
        o.default.wait(() => {
          f.default.resolveGiftCode(t, !0, !0).then(a => {
            let {
              giftCode: s
            } = a;
            m.default.focus(), T.default.track(g.AnalyticEvents.OPEN_MODAL, {
              type: "gift_accept",
              location: g.DIRECT_ANALYTICS_LOCATION
            }), (0, r.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("669146").then(n.bind(n, "669146"));
              return n => (0, i.jsx)(e, {
                code: t,
                ...n
              })
            }), e({
              giftCode: s
            })
          }).catch(() => a(new p.default(A.RPCErrors.INVALID_GIFT_CODE, "Invalid gift code: ".concat(t))))
        })
      })
    }
  },
  [g.RPCCommands.DEEP_LINK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          type: t,
          params: n
        }
      } = e;
      switch (m.default.focus(), t) {
        case A.RPCDeepLinks.USER_SETTINGS:
          null != n && ((0, h.replaceWith)(g.Routes.SETTINGS(n.section, n.subsection)), N(n.fingerprint, "settings"));
          break;
        case A.RPCDeepLinks.CHANGELOG:
          null != n && ((0, h.replaceWith)(S.default.formatPathWithQuery(g.Routes.CHANGELOGS(n.date), n.query)), N(n.fingerprint, "changelog"));
          break;
        case A.RPCDeepLinks.LIBRARY:
          (0, h.replaceWith)(g.Routes.APPLICATION_LIBRARY), null != n && N(n.fingerprint, "library");
          break;
        case A.RPCDeepLinks.STORE_HOME:
          (0, h.replaceWith)(g.Routes.APPLICATION_STORE), null != n && N(n.fingerprint, "store");
          break;
        case A.RPCDeepLinks.STORE_LISTING:
          null != n && ((0, h.replaceWith)(g.Routes.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), N(n.fingerprint, "store"));
          break;
        case A.RPCDeepLinks.PICK_GUILD_SETTINGS:
          null != n && ((0, h.replaceWith)({
            pathname: g.Routes.PICK_GUILD_SETTINGS(n.section, n.subsection),
            search: n.search
          }), N(n.fingerprint, "guild_settings"));
          break;
        case A.RPCDeepLinks.CHANNEL:
          null != n && ((0, h.replaceWith)({
            pathname: g.Routes.CHANNEL(n.guildId, n.channelId, n.messageId),
            search: n.search
          }), N(n.fingerprint, "channel"))
      }
    }
  },
  [g.RPCCommands.BROWSER_HANDOFF]: {
    scope: A.RPC_PRIVATE_LIMITED_SCOPE,
    handler(e) {
      let {
        args: {
          handoffToken: t,
          fingerprint: n
        }
      } = e;
      m.default.focus(null, !0), (0, d.handoffEnd)(t, n)
    }
  },
  [g.RPCCommands.CONNECTIONS_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          providerType: t,
          code: n,
          openid_params: a,
          state: s
        }
      } = e;
      return c.default.callback(t, {
        code: n,
        openid_params: a,
        state: s
      })
    }
  },
  [g.RPCCommands.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: a
        }
      } = e;
      return (0, u.popupBridgeCallback)({
        paymentSourceType: g.PaymentSourceTypes.PAYPAL,
        state: t,
        path: n,
        query: a
      })
    }
  },
  [g.RPCCommands.BILLING_POPUP_BRIDGE_CALLBACK]: {
    scope: A.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: a,
          payment_source_type: s
        }
      } = e;
      return (0, u.popupBridgeCallback)({
        paymentSourceType: s,
        state: t,
        path: n,
        query: a
      })
    }
  }
}
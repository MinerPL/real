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
  E = n("569272"),
  f = n("970728"),
  _ = n("913645"),
  h = n("393414"),
  C = n("271938"),
  T = n("697218"),
  I = n("599110"),
  S = n("253981"),
  N = n("50885"),
  A = n("861309"),
  p = n("492249"),
  m = n("49111");

function g(e, t) {
  null != e && I.default.track(m.AnalyticEvents.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
    invite_code: null,
    has_auth_token: null,
    is_backgrounded: null,
    fingerprint: (0, l.extractId)(e),
    link_type: t
  })
}(a = s || (s = {})).SETTINGS = "settings", a.CHANGELOG = "changelog", a.LIBRARY = "library", a.STORE = "store", a.INVITE = "invite", a.CHANNEL = "channel", a.GUILD_SETTINGS = "guild_settings";
var R = {
  [m.RPCCommands.INVITE_BROWSER]: {
    scope: p.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e, {
        invite: n
      } = await f.default.resolveInvite(t, "Desktop Modal");
      if (null == n) throw new A.default(p.RPCErrors.INVALID_INVITE, "Invalid invite id: ".concat(t));
      return C.default.isAuthenticated() ? o.default.dispatch({
        type: "INVITE_MODAL_OPEN",
        invite: n,
        code: t,
        context: m.AppContext.APP
      }) : (0, h.replaceWith)(m.Routes.INVITE(t)), {
        invite: n,
        code: t
      }
    }
  },
  [m.RPCCommands.GUILD_TEMPLATE_BROWSER]: {
    scope: p.RPC_PRIVATE_SCOPE,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      if (null == T.default.getCurrentUser()) return;
      let {
        guildTemplate: a
      } = await _.default.resolveGuildTemplate(t);
      if (null == a) throw new A.default(p.RPCErrors.INVALID_GUILD_TEMPLATE, "Invalid guild template id: ".concat(t));
      return N.default.focus(), (0, r.openModalLazy)(async () => {
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
  [m.RPCCommands.GIFT_CODE_BROWSER]: {
    scope: p.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      return new Promise((e, a) => {
        o.default.wait(() => {
          E.default.resolveGiftCode(t, !0, !0).then(a => {
            let {
              giftCode: s
            } = a;
            N.default.focus(), I.default.track(m.AnalyticEvents.OPEN_MODAL, {
              type: "gift_accept",
              location: m.DIRECT_ANALYTICS_LOCATION
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
          }).catch(() => a(new A.default(p.RPCErrors.INVALID_GIFT_CODE, "Invalid gift code: ".concat(t))))
        })
      })
    }
  },
  [m.RPCCommands.DEEP_LINK]: {
    scope: p.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          type: t,
          params: n
        }
      } = e;
      switch (N.default.focus(), t) {
        case p.RPCDeepLinks.USER_SETTINGS:
          null != n && ((0, h.replaceWith)(m.Routes.SETTINGS(n.section, n.subsection)), g(n.fingerprint, "settings"));
          break;
        case p.RPCDeepLinks.CHANGELOG:
          null != n && ((0, h.replaceWith)(S.default.formatPathWithQuery(m.Routes.CHANGELOGS(n.date), n.query)), g(n.fingerprint, "changelog"));
          break;
        case p.RPCDeepLinks.LIBRARY:
          (0, h.replaceWith)(m.Routes.APPLICATION_LIBRARY), null != n && g(n.fingerprint, "library");
          break;
        case p.RPCDeepLinks.STORE_HOME:
          (0, h.replaceWith)(m.Routes.APPLICATION_STORE), null != n && g(n.fingerprint, "store");
          break;
        case p.RPCDeepLinks.STORE_LISTING:
          null != n && ((0, h.replaceWith)(m.Routes.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), g(n.fingerprint, "store"));
          break;
        case p.RPCDeepLinks.PICK_GUILD_SETTINGS:
          null != n && ((0, h.replaceWith)({
            pathname: m.Routes.PICK_GUILD_SETTINGS(n.section, n.subsection),
            search: n.search
          }), g(n.fingerprint, "guild_settings"));
          break;
        case p.RPCDeepLinks.CHANNEL:
          null != n && ((0, h.replaceWith)({
            pathname: m.Routes.CHANNEL(n.guildId, n.channelId, n.messageId),
            search: n.search
          }), g(n.fingerprint, "channel"))
      }
    }
  },
  [m.RPCCommands.BROWSER_HANDOFF]: {
    scope: p.RPC_PRIVATE_LIMITED_SCOPE,
    handler(e) {
      let {
        args: {
          handoffToken: t,
          fingerprint: n
        }
      } = e;
      N.default.focus(null, !0), (0, d.handoffEnd)(t, n)
    }
  },
  [m.RPCCommands.CONNECTIONS_CALLBACK]: {
    scope: p.RPC_PRIVATE_SCOPE,
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
  [m.RPCCommands.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
    scope: p.RPC_PRIVATE_SCOPE,
    handler(e) {
      let {
        args: {
          state: t,
          path: n,
          query: a
        }
      } = e;
      return (0, u.popupBridgeCallback)({
        paymentSourceType: m.PaymentSourceTypes.PAYPAL,
        state: t,
        path: n,
        query: a
      })
    }
  },
  [m.RPCCommands.BILLING_POPUP_BRIDGE_CALLBACK]: {
    scope: p.RPC_PRIVATE_SCOPE,
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
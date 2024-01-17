"use strict";
let a;
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var s = n("37983");
n("884691");
var i = n("77078"),
  l = n("913144"),
  r = n("316272"),
  o = n("19009"),
  u = n("774146"),
  d = n("233322"),
  c = n("894887"),
  f = n("42963"),
  E = n("223170"),
  _ = n("59811"),
  h = n("341542"),
  C = n("305961"),
  I = n("162771"),
  T = n("697218"),
  S = n("449008"),
  m = n("773336"),
  p = n("165926"),
  A = n("527441"),
  g = n("56235"),
  N = n("218971"),
  R = n("49111"),
  O = n("492397"),
  L = n("149806");

function v() {
  null != a && (0, i.closeModal)(a)
}
class M extends r.default {
  _initialize() {
    l.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.subscribe("LOGOUT", v)
  }
  _terminate() {
    l.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.unsubscribe("LOGOUT", v)
  }
  handleConnectionOpen() {
    var e;
    let t, l = A.default.getType();
    if (null == l) return;
    switch (l) {
      case g.NewUserTypes.INVITE_UNCLAIMED:
        f.default.flowStart(L.FlowType.INVITE, L.RegistrationSteps.NUF_STARTED);
        break;
      case g.NewUserTypes.ORGANIC_REGISTERED:
        f.default.flowStart(L.FlowType.ORGANIC, L.RegistrationSteps.NUF_STARTED);
        break;
      case g.NewUserTypes.MARKETING_UNCLAIMED:
        f.default.flowStart(L.FlowType.ORGANIC_MARKETING, L.RegistrationSteps.NUF_STARTED)
    }
    let r = !1,
      v = I.default.getGuildId();
    if (l === g.NewUserTypes.INVITE_UNCLAIMED) {
      let e = C.default.getGuild(v);
      (null == e ? void 0 : e.hasVerificationGate()) && (r = !0, (0, E.fetchWelcomeScreen)(e.id))
    }
    let M = () => 0 === h.default.totalGuilds && !m.isPlatformEmbedded,
      P = o.userNeedsAgeGate();
    e = [{
      key: "Unified NUF Modal",
      open: async function e(e) {
        let t = e => {
          switch (e) {
            case N.NUFSlides.AGE_GATE:
              f.default.flowStep(L.FlowType.ANY, L.RegistrationSteps.AGE_GATE);
              break;
            case N.NUFSlides.CHOOSE_TEMPLATE:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.GUILD_TEMPLATES);
              break;
            case N.NUFSlides.CUSTOMIZE_GUILD:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.GUILD_CREATE);
              break;
            case N.NUFSlides.CHANNEL_PROMPT:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.CHANNEL_PROMPT);
              break;
            case N.NUFSlides.JOIN_GUILD:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.JOIN_GUILD);
              break;
            case N.NUFSlides.CREATION_INTENT:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.CREATION_INTENT);
              break;
            case N.NUFSlides.COMPLETE:
              f.default.flowStep(L.FlowType.ANY, L.CreateGuildSteps.SUCCESS);
              break;
            case null:
              break;
            default:
              S.assertNever(e)
          }
        };
        a = await (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("439431").then(n.bind(n, "439431"));
          return n => (0, s.jsx)(e, {
            ...n,
            onSlideChange: t
          })
        }, {
          onCloseRequest: R.NOOP,
          onCloseCallback: e,
          modalKey: a
        })
      },
      predicate: () => M() && !O.CONFERENCE_MODE_ENABLED
    }, {
      key: "New User Age Gate",
      open: u.openNewUserAgeGateModal,
      predicate: () => P && !M() && !O.CONFERENCE_MODE_ENABLED
    }, {
      key: "Claim Account Modal",
      open: e => u.openClaimAccountModal(m.isPlatformEmbedded, e),
      predicate: () => {
        var e;
        return !r && null != T.default.getCurrentUser() && !(null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !O.CONFERENCE_MODE_ENABLED && !(0, c.isMidjourneyOnboardingFlow)("new_user_manager")
      }
    }, {
      key: "Verification Gate with Claim Account",
      open: e => (0, d.openMemberVerificationModal)(v, null != e ? e : void 0),
      predicate: () => {
        var e;
        return r && !(null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.isClaimed()) && !O.CONFERENCE_MODE_ENABLED
      }
    }, {
      key: "Guild Welcome Modal",
      open: e => (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("900257").then(n.bind(n, "900257"));
        return t => (0, s.jsx)(e, {
          ...t,
          guildId: v
        })
      }, {
        onCloseCallback: e
      }),
      predicate: () => null != v && null != _.default.get(v) && _.default.get(v) !== _.NO_WELCOME_SCREEN
    }], t = () => {
      p.setNewUserFlowCompleted(), f.default.flowStep(L.FlowType.ANY, L.RegistrationSteps.NUF_COMPLETE, !0)
    }, [...e].reverse().forEach(e => {
      let n = t;
      t = () => {
        e.predicate() ? e.open(n) : n()
      }
    }), t()
  }
}
var P = new M
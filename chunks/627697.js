"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("702976");
var a = n("37983");
n("884691");
var s = n("90915"),
  l = n("446674"),
  i = n("769846"),
  r = n("77078"),
  o = n("404118"),
  u = n("997289"),
  d = n("812204"),
  c = n("685665"),
  f = n("442939"),
  m = n("870346"),
  E = n("950104"),
  _ = n("42203"),
  h = n("697218"),
  p = n("155207"),
  I = n("811305"),
  T = n("568734"),
  g = n("449008"),
  C = n("159885"),
  S = n("550766"),
  A = n("191225"),
  N = n("602718"),
  M = n("706508"),
  v = n("986214"),
  x = n("549548"),
  O = n("969380"),
  L = n("141962"),
  R = n("478272"),
  P = n("954016"),
  y = n("49111"),
  D = n("782340"),
  j = n("586449");
let U = (0, C.cssValueToNumber)(i.default.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function b(e) {
  var t, n, i, C;
  let {
    applicationId: b,
    message: G
  } = e, {
    analyticsLocations: B,
    AnalyticsLocationProvider: k
  } = (0, c.default)(d.default.ACTIVITY_BOOKMARK), w = (0, u.useAnalyticsContext)(), H = G.channel_id, F = (0, l.useStateFromStores)([_.default], () => _.default.getChannel(H), [H]), V = null == F ? void 0 : F.guild_id, Y = null != F && (F.isGuildVoice() || F.isPrivate()), W = (0, l.useStateFromStores)([A.default], () => A.default.getSelfEmbeddedActivityForChannel(H)), K = (null == W ? void 0 : W.applicationId) === b, [z, J] = (0, f.default)([b, null !== (n = null == W ? void 0 : W.applicationId) && void 0 !== n ? n : ""]), Z = (0, x.default)(null !== (i = null == z ? void 0 : z.maxParticipants) && void 0 !== i ? i : 0), [X] = (0, l.useStateFromStoresArray)([A.default], () => Y ? A.default.getEmbeddedActivitiesForChannel(H).filter(e => e.applicationId === b) : [], [b, H, Y]), q = Array.from(null !== (C = null == X ? void 0 : X.userIds) && void 0 !== C ? C : []), Q = (0, l.useStateFromStoresArray)([h.default], () => q.map(e => h.default.getUser(e)).filter(g.isNotNullish), [q]), $ = (0, O.default)({
    applicationId: b,
    size: U
  }), ee = m.default.getWindowOpen(y.PopoutWindowKeys.CHANNEL_CALL_POPOUT), et = Q.length > 0 ? D.default.Messages.JOIN : D.default.Messages.START, en = async () => {
    if (Y) {
      let {
        activityConfigs: e,
        applications: t
      } = await (0, S.fetchShelf)({
        guildId: V
      }), n = (0, N.default)({
        applicationId: b,
        activityConfigs: e,
        applications: t
      });
      if (null != X && Q.length > 0) await (0, M.default)({
        applicationId: X.applicationId,
        currentEmbeddedApplication: J,
        activityChannelId: H,
        embeddedActivitiesManager: L.default,
        locationObject: w.location,
        analyticsLocations: B
      });
      else {
        let e = F.isPrivate() && !E.default.isCallActive(H),
          t = () => (0, v.default)({
            activityItem: n,
            currentActivity: J,
            channelId: H,
            guildId: V,
            embeddedActivitiesManager: L.default,
            analyticsLocations: B
          });
        e ? o.default.show({
          title: D.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: D.default.Messages.CANCEL,
          confirmText: D.default.Messages.CONFIRM,
          onConfirm: () => t(),
          body: D.default.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, R.default)({
      guildId: V,
      locationObject: w.location,
      openInPopout: ee,
      initialSelectedApplicationId: b,
      initialSlide: P.ActivityShelfSlides.SELECT_CHANNEL,
      analyticsLocations: B
    })
  };
  return null != z && (0, T.hasFlag)(z.flags, y.ApplicationFlags.EMBEDDED) ? (0, a.jsx)(k, {
    children: (0, a.jsxs)("div", {
      className: j.container,
      children: [(0, a.jsx)("div", {
        className: j.imgContainer,
        children: (0, a.jsx)("img", {
          className: j.img,
          alt: z.name,
          src: $.url
        })
      }), (0, a.jsxs)("div", {
        className: j.content,
        children: [(0, a.jsx)(r.Heading, {
          className: j.heading,
          variant: "heading-xl/semibold",
          children: z.name
        }), (0, a.jsx)(r.Heading, {
          className: j.description,
          variant: "heading-sm/medium",
          children: null === (t = z.description) || void 0 === t ? void 0 : t.trim()
        }), (0, a.jsx)(r.Heading, {
          className: j.learnMore,
          variant: "heading-sm/medium",
          children: (0, a.jsx)(s.Link, {
            to: y.Routes.ACTIVITY_DETAILS(b),
            children: D.default.Messages.LEARN_MORE
          })
        }), (0, a.jsxs)("div", {
          className: j.cta,
          children: [Q.length > 0 ? (0, a.jsx)("div", {
            className: j.avatars,
            children: (0, a.jsx)(I.default, {
              guildId: V,
              users: Q,
              max: 4
            })
          }) : (0, a.jsxs)("div", {
            className: j.maxParticipants,
            children: [(0, a.jsx)(p.default, {
              className: j.peopleIcon
            }), (0, a.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: Z
            })]
          }), (0, a.jsx)("div", {
            className: j.buttonWrapper,
            children: (0, a.jsx)(r.Button, {
              onClick: en,
              className: j.button,
              color: r.ButtonColors.GREEN,
              disabled: K,
              children: et
            })
          })]
        })]
      })]
    })
  }) : null
}
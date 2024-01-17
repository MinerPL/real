"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("702976");
var s = n("37983");
n("884691");
var l = n("90915"),
  a = n("446674"),
  i = n("769846"),
  r = n("77078"),
  o = n("404118"),
  u = n("997289"),
  d = n("812204"),
  c = n("685665"),
  f = n("442939"),
  E = n("870346"),
  _ = n("950104"),
  T = n("42203"),
  I = n("697218"),
  m = n("155207"),
  N = n("811305"),
  p = n("568734"),
  S = n("449008"),
  A = n("159885"),
  C = n("550766"),
  h = n("191225"),
  g = n("602718"),
  M = n("706508"),
  O = n("986214"),
  R = n("549548"),
  L = n("969380"),
  v = n("141962"),
  P = n("478272"),
  D = n("954016"),
  x = n("49111"),
  y = n("782340"),
  U = n("586449");
let j = (0, A.cssValueToNumber)(i.default.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function b(e) {
  var t, n, i, A;
  let {
    applicationId: b,
    message: G
  } = e, {
    analyticsLocations: B,
    AnalyticsLocationProvider: F
  } = (0, c.default)(d.default.ACTIVITY_BOOKMARK), k = (0, u.useAnalyticsContext)(), w = G.channel_id, H = (0, a.useStateFromStores)([T.default], () => T.default.getChannel(w), [w]), V = null == H ? void 0 : H.guild_id, Y = null != H && (H.isGuildVoice() || H.isPrivate()), K = (0, a.useStateFromStores)([h.default], () => h.default.getSelfEmbeddedActivityForChannel(w)), W = (null == K ? void 0 : K.applicationId) === b, [z, Z] = (0, f.default)([b, null !== (n = null == K ? void 0 : K.applicationId) && void 0 !== n ? n : ""]), J = (0, R.default)(null !== (i = null == z ? void 0 : z.maxParticipants) && void 0 !== i ? i : 0), [Q] = (0, a.useStateFromStoresArray)([h.default], () => Y ? h.default.getEmbeddedActivitiesForChannel(w).filter(e => e.applicationId === b) : [], [b, w, Y]), X = Array.from(null !== (A = null == Q ? void 0 : Q.userIds) && void 0 !== A ? A : []), q = (0, a.useStateFromStoresArray)([I.default], () => X.map(e => I.default.getUser(e)).filter(S.isNotNullish), [X]), $ = (0, L.default)({
    applicationId: b,
    size: j
  }), ee = E.default.getWindowOpen(x.PopoutWindowKeys.CHANNEL_CALL_POPOUT), et = q.length > 0 ? y.default.Messages.JOIN : y.default.Messages.START, en = async () => {
    if (Y) {
      let {
        activityConfigs: e,
        applications: t
      } = await (0, C.fetchShelf)({
        guildId: V
      }), n = (0, g.default)({
        applicationId: b,
        activityConfigs: e,
        applications: t
      });
      if (null != Q && q.length > 0) await (0, M.default)({
        applicationId: Q.applicationId,
        currentEmbeddedApplication: Z,
        activityChannelId: w,
        embeddedActivitiesManager: v.default,
        locationObject: k.location,
        analyticsLocations: B
      });
      else {
        let e = H.isPrivate() && !_.default.isCallActive(w),
          t = () => (0, O.default)({
            activityItem: n,
            currentActivity: Z,
            channelId: w,
            guildId: V,
            embeddedActivitiesManager: v.default,
            analyticsLocations: B
          });
        e ? o.default.show({
          title: y.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: y.default.Messages.CANCEL,
          confirmText: y.default.Messages.CONFIRM,
          onConfirm: () => t(),
          body: y.default.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, P.default)({
      guildId: V,
      locationObject: k.location,
      openInPopout: ee,
      initialSelectedApplicationId: b,
      initialSlide: D.ActivityShelfSlides.SELECT_CHANNEL,
      analyticsLocations: B
    })
  };
  return null != z && (0, p.hasFlag)(z.flags, x.ApplicationFlags.EMBEDDED) ? (0, s.jsx)(F, {
    children: (0, s.jsxs)("div", {
      className: U.container,
      children: [(0, s.jsx)("div", {
        className: U.imgContainer,
        children: (0, s.jsx)("img", {
          className: U.img,
          alt: z.name,
          src: $.url
        })
      }), (0, s.jsxs)("div", {
        className: U.content,
        children: [(0, s.jsx)(r.Heading, {
          className: U.heading,
          variant: "heading-xl/semibold",
          children: z.name
        }), (0, s.jsx)(r.Heading, {
          className: U.description,
          variant: "heading-sm/medium",
          children: null === (t = z.description) || void 0 === t ? void 0 : t.trim()
        }), (0, s.jsx)(r.Heading, {
          className: U.learnMore,
          variant: "heading-sm/medium",
          children: (0, s.jsx)(l.Link, {
            to: x.Routes.ACTIVITY_DETAILS(b),
            children: y.default.Messages.LEARN_MORE
          })
        }), (0, s.jsxs)("div", {
          className: U.cta,
          children: [q.length > 0 ? (0, s.jsx)("div", {
            className: U.avatars,
            children: (0, s.jsx)(N.default, {
              guildId: V,
              users: q,
              max: 4
            })
          }) : (0, s.jsxs)("div", {
            className: U.maxParticipants,
            children: [(0, s.jsx)(m.default, {
              className: U.peopleIcon
            }), (0, s.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: J
            })]
          }), (0, s.jsx)("div", {
            className: U.buttonWrapper,
            children: (0, s.jsx)(r.Button, {
              onClick: en,
              className: U.button,
              color: r.ButtonColors.GREEN,
              disabled: W,
              children: et
            })
          })]
        })]
      })]
    })
  }) : null
}
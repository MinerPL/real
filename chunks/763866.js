"use strict";
l.r(t), l.d(t, {
  default: function() {
    return X
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("446674"),
  o = l("77078"),
  u = l("335189"),
  d = l("618017"),
  c = l("980215"),
  f = l("235767"),
  m = l("190045"),
  p = l("419806"),
  T = l("373469"),
  E = l("42203"),
  _ = l("26989"),
  S = l("957255"),
  h = l("102985"),
  I = l("987772"),
  A = l("164424"),
  g = l("387111"),
  v = l("158998"),
  C = l("713135"),
  N = l("765698"),
  y = l("906889"),
  O = l("10532"),
  M = l("648149"),
  x = l("915712"),
  R = l("261523"),
  L = l("369869"),
  P = l("545590"),
  b = l("972595"),
  D = l("316095"),
  j = l("802279"),
  U = l("577172"),
  F = l("465215"),
  w = l("301998"),
  G = l("379657"),
  k = l("853780"),
  B = l("574191"),
  Y = l("491250"),
  V = l("453649"),
  H = l("49111"),
  W = l("782340"),
  z = l("956330"),
  K = l("477691"),
  Z = l("398664");

function X(e) {
  var t, l, s;
  let {
    activity: X,
    customStatusActivity: J,
    user: Q,
    displayProfile: q,
    guild: $,
    guildMember: ee,
    channelId: et,
    onClose: el,
    setNote: en = !1,
    canDM: ea,
    hideNote: es = !1,
    showCopiableUsername: ei = !1
  } = e, er = (0, r.useStateFromStores)([h.default], () => h.default.hidePersonalInformation), eo = (0, r.useStateFromStores)([C.default], () => {
    var e;
    return null === (e = C.default.getUserProfile(Q.id)) || void 0 === e ? void 0 : e.application
  }), eu = (0, r.useStateFromStores)([T.default], () => null != T.default.getAnyStreamForUser(Q.id)), ed = (0, V.useGetVoiceChannelInfoForVoiceActivitySection)(Q.id, null == $ ? void 0 : $.id), ec = !eu && null != ed, {
    showVoiceActivityInProfile: ef
  } = N.VoiceActivityProfileExperiment.useExperiment({
    location: "user popout"
  }, {
    autoTrackExposure: ec
  }), [em, ep] = a.useState(!1), [eT, eE] = a.useState(!1), e_ = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(et)), eS = (0, r.useStateFromStores)([S.default], () => S.default.can(H.Permissions.USE_CLYDE_AI, e_)), {
    profileTheme: eh
  } = (0, y.default)(Q, q), eI = a.useRef(null), [eA, eg] = a.useState(!0), ev = a.useCallback(() => {
    let {
      current: e
    } = eI;
    null != e && eg(0 === e.getScrollerState().scrollTop)
  }, []), eC = (0, d.canEditClydeAIProfile)($), eN = (0, c.canUseCustomClydeProfiles)($), ey = (0, r.useStateFromStores)([_.default], () => _.default.isMember(null == $ ? void 0 : $.id, Q.id));
  if (a.useLayoutEffect(() => {
      var e;
      let {
        current: t
      } = eI;
      null != t && (null === (e = t.getScrollerNode()) || void 0 === e || e.scrollTo({
        top: 0
      }))
    }, []), Q.isSystemUser()) return null;
  if (Q.isNonUserBot() && !Q.isClyde()) return (0, n.jsx)(Y.default, {
    user: Q,
    nickname: null,
    pronouns: null,
    className: z.usernameSection,
    lastSection: !0
  });
  let eO = null !== (t = g.default.getNickname(null == $ ? void 0 : $.id, et, Q)) && void 0 !== t ? t : v.default.getName(Q);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(Y.default, {
      className: z.usernameSection,
      user: Q,
      nickname: eO,
      pronouns: null == q ? void 0 : q.pronouns,
      usernameIcon: Q.hasAvatarForGuild(null == $ ? void 0 : $.id) && (0, n.jsx)(M.default, {
        user: Q,
        nickname: eO
      }),
      shouldCopyOnClick: ei
    }), Q.isClyde() ? (0, n.jsx)("div", {
      className: z.lastEditedByContainer,
      children: (0, n.jsx)(f.default, {
        className: z.lastEditedByTag,
        guildId: null == $ ? void 0 : $.id
      })
    }) : null, (0, n.jsxs)(o.HeadingLevel, {
      children: [(0, n.jsx)(j.default, {
        className: z.customStatusSection,
        customStatusActivity: J
      }), (0, n.jsx)(O.default, {
        className: z.divider
      }), Q.isClyde() && eC && null != $ ? !ey && eN ? eS && !eT ? (0, n.jsx)(o.Button, {
        className: z.editClydeButton,
        innerClassName: z.editClydeButtonInner,
        submitting: em,
        onClick: async () => {
          ep(!0);
          try {
            await (0, u.addClydeGuildMember)($.id), ep(!1)
          } catch (e) {
            ep(!1), eE(!0)
          }
        },
        children: W.default.Messages.CLYDE_ADD_CLYDE
      }) : (0, n.jsxs)(o.Text, {
        className: z.clydeErrorText,
        variant: "text-sm/normal",
        color: "text-danger",
        children: [(0, n.jsx)("img", {
          className: z.sadClyde,
          src: Z,
          alt: W.default.Messages.SAD_CLYDE_ALT_TEXT
        }), " ", W.default.Messages.CANNOT_ADD_CLYDE]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(o.Button, {
          className: z.editClydeButton,
          innerClassName: z.editClydeButtonInner,
          onClick: () => {
            null == el || el(), (0, m.default)($.id)
          },
          children: [(0, n.jsx)(I.default, {
            className: z.pencilIcon
          }), " ", W.default.Messages.EDIT_CLYDE]
        }), eN ? (0, n.jsxs)(o.Button, {
          className: z.editClydeButton,
          innerClassName: z.editClydeButtonInner,
          color: o.ButtonColors.WHITE,
          onClick: () => {
            null == el || el(), (0, p.default)($.id)
          },
          children: [(0, n.jsx)(A.default, {
            className: z.pencilIcon
          }), " ", W.default.Messages.SHARE]
        }) : null]
      }) : null, (0, n.jsxs)(o.AdvancedScroller, {
        className: i(z.scroller, {
          [z.scrollerSeparator]: !eA
        }),
        onScroll: ev,
        ref: eI,
        children: [(0, n.jsx)(P.default, {
          user: Q,
          guildId: null == $ ? void 0 : $.id
        }), (0, n.jsx)(L.default, {
          isUsingGuildBio: null !== (l = null == q ? void 0 : q.isUsingGuildMemberBio()) && void 0 !== l && l,
          bio: null == q ? void 0 : q.bio,
          guild: $,
          hidePersonalInformation: er
        }), Q.isClyde() ? (0, n.jsx)(b.default, {}) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(F.default, {
            userId: Q.id,
            guild: $,
            guildMember: ee
          }), ef && ec && (0, n.jsx)(V.default, {
            voiceChannel: ed.voiceChannel,
            voiceGuild: ed.voiceGuild,
            onClose: el,
            color: K.buttonColor
          }), (0, n.jsx)(x.default, {
            activity: X,
            user: Q,
            guild: $,
            channelId: et,
            onClose: el
          }), (null == eo ? void 0 : eo.popularApplicationCommandIds) != null && null != e_ ? (0, n.jsx)(G.default, {
            applicationId: eo.id,
            commandIds: eo.popularApplicationCommandIds,
            channel: e_,
            guildId: null == $ ? void 0 : $.id,
            onClick: el
          }) : null, (0, n.jsx)(R.default, {
            user: Q,
            guildId: null == $ ? void 0 : $.id
          }), (0, n.jsx)(B.default, {
            user: Q,
            guild: $,
            guildMember: ee,
            showBorder: null !== (s = null == q ? void 0 : q.canEditThemes) && void 0 !== s && s
          }), (0, n.jsx)(D.default, {
            userId: Q.id,
            channelId: et,
            guild: $,
            onClose: el,
            theme: eh
          }), null != eo && void 0 !== et && (0, n.jsx)(k.default, {
            channelId: et,
            applicationId: eo.id
          }), (0, n.jsx)(w.default, {
            user: Q,
            setNote: en,
            autoFocus: !ea,
            lastSection: !ea,
            hideNote: er || es
          })]
        }), (0, n.jsx)(U.default, {
          user: Q,
          setNote: en,
          canDM: ea,
          onClose: el,
          inClydeProfilesExperiment: eN
        })]
      })]
    })]
  })
}
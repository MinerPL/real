"use strict";
n.r(t), n.d(t, {
  dismissCurrentNotice: function() {
    return eI
  },
  default: function() {
    return eN
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("866227"),
  i = n.n(a),
  r = n("90915"),
  o = n("446674"),
  u = n("77078"),
  d = n("404118"),
  c = n("437822"),
  f = n("778323"),
  E = n("54239"),
  _ = n("215082"),
  T = n("950926"),
  I = n("987317"),
  m = n("167359"),
  N = n("55620"),
  p = n("52289"),
  S = n("518888"),
  A = n("70614"),
  C = n("79112"),
  h = n("376556"),
  g = n("812204"),
  M = n("685665"),
  O = n("299285"),
  R = n("774146"),
  L = n("935246"),
  v = n("211470"),
  P = n("789563"),
  D = n("381065"),
  x = n("702873"),
  y = n("840968"),
  U = n("233322"),
  j = n("157186"),
  b = n("747554"),
  G = n("740316"),
  B = n("592407"),
  F = n("977169"),
  k = n("363691"),
  w = n("649844"),
  H = n("538620"),
  V = n("703537"),
  Y = n("55282"),
  K = n("42203"),
  W = n("305961"),
  z = n("42887"),
  Z = n("945956"),
  J = n("162771"),
  Q = n("697218"),
  X = n("552712"),
  q = n("167726"),
  $ = n("600133"),
  ee = n("145131"),
  et = n("216422"),
  en = n("489622"),
  es = n("599110"),
  el = n("701909"),
  ea = n("308757"),
  ei = n("389696"),
  er = n("650044"),
  eo = n("49111"),
  eu = n("646718"),
  ed = n("586269"),
  ec = n("353927"),
  ef = n("782340"),
  eE = n("185401");
let e_ = () => (0, s.jsxs)(en.default, {
    color: en.NoticeColors.DANGER,
    children: [(0, s.jsx)(en.NoticeCloseButton, {
      onClick: () => {
        eI(), (0, er.open)()
      }
    }), ef.default.Messages.NOTICE_NO_INPUT_DETECTED, (0, s.jsx)(en.NoticeButtonAnchor, {
      href: el.default.getArticleURL(eo.HelpdeskArticles.NO_INPUT_DETECTED),
      children: ef.default.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
    })]
  }),
  eT = () => (0, s.jsxs)(en.default, {
    color: en.NoticeColors.DANGER,
    children: [(0, s.jsx)(en.NoticeCloseButton, {
      onClick: () => {
        eI(), (0, er.open)()
      }
    }), ef.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS, (0, s.jsx)(en.NoticeButton, {
      onClick: () => {
        (0, E.pushLayer)(eo.Layers.USER_SETTINGS), C.default.setSection(eo.UserSettingsSections.VOICE)
      },
      children: ef.default.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
    })]
  });

function eI(e) {
  _.default.dismiss(null != e ? {
    untilAtLeast: i(e)
  } : void 0)
}
let em = l.memo(function() {
  var e, t, a;
  let i = (0, o.useStateFromStores)([Q.default], () => Q.default.getCurrentUser()),
    _ = (0, o.useStateFromStores)([J.default], () => J.default.getGuildId()),
    g = (0, o.useStateFromStores)([$.default], () => $.default.getNotice()),
    er = (0, o.useStateFromStores)([W.default], () => W.default.getGuild(_)),
    {
      analyticsLocations: em
    } = (0, M.default)(),
    eN = null == g ? void 0 : g.type,
    ep = (0, j.useShowMemberVerificationGate)(_);
  if (l.useEffect(() => {
      null != eN && ! function(e, t) {
        let n = {
          notice_type: e
        };
        null != t && (n.guild_id = t), es.default.track(eo.AnalyticEvents.APP_NOTICE_VIEWED, n)
      }(eN, _)
    }, [eN, _]), l.useEffect(() => {
      if (null != g && g.type === eo.NoticeTypes.SURVEY && null != g.metadata) {
        let {
          metadata: e
        } = g, t = P.default.getUserExperimentDescriptor(e.id);
        null != t && (0, v.trackExposureToExperiment)(e.id, t)
      }
    }, [g]), null == g) return null;
  let eS = $.typeToDismissibleContent[g.type];
  if (null != eS) return (0, s.jsx)(L.DismissibleContentNotices, {
    dismissibleContent: eS,
    noticeType: g.type
  });
  let eA = null === (e = g.metadata) || void 0 === e ? void 0 : e.premiumType;
  switch (g.type) {
    case eo.NoticeTypes.LURKING_GUILD:
      return (0, s.jsx)(k.default, {});
    case eo.NoticeTypes.PENDING_MEMBER:
      return (0, s.jsx)(b.default, {});
    case eo.NoticeTypes.INVITED_TO_SPEAK:
      return (0, s.jsx)(Y.default, {});
    case eo.NoticeTypes.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eC
      } = g.metadata;
      return (0, s.jsx)(D.default, {
        onDismiss: () => eI(eC)
      });
    case eo.NoticeTypes.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eh
      } = g.metadata;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(eh),
          noticeType: eo.NoticeTypes.WIN32_DEPRECATED_MESSAGE
        }), ef.default.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({
          helpCenterLink: el.default.getArticleURL(eo.HelpdeskArticles.WIN32_DEPRECATE)
        })]
      });
    case eo.NoticeTypes.GENERIC:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.GENERIC
        }), g.message, null != g.buttonText ? (0, s.jsx)(en.PrimaryCTANoticeButton, {
          onClick: g.callback,
          noticeType: eo.NoticeTypes.GENERIC,
          children: g.buttonText
        }) : null]
      });
    case eo.NoticeTypes.LAUNCH_GAME_FAILURE:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.LAUNCH_GAME_FAILURE
        }), g.message, null != g.buttonText ? (0, s.jsx)(en.PrimaryCTANoticeButton, {
          onClick: g.callback,
          noticeType: eo.NoticeTypes.LAUNCH_GAME_FAILURE,
          children: g.buttonText
        }) : null]
      });
    case eo.NoticeTypes.VOICE_DISABLED:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => {
            T.default.clearRemoteDisconnectVoiceChannelId(), eI()
          },
          noticeType: eo.NoticeTypes.VOICE_DISABLED
        }), ef.default.Messages.NOTICE_CONNECTION_CONFLICT, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = Z.default.getRemoteDisconnectVoiceChannelId();
            if (null != e) {
              let t = K.default.getChannel(e);
              null != t && I.default.selectVoiceChannel(e)
            }
          },
          noticeType: eo.NoticeTypes.VOICE_DISABLED,
          children: ef.default.Messages.RECONNECT
        })]
      });
    case eo.NoticeTypes.VOICE_CONNECTED_LAST_SESSION:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => {
            T.default.clearLastSessionVoiceChannelId(), eI()
          },
          noticeType: eo.NoticeTypes.VOICE_CONNECTED_LAST_SESSION
        }), ef.default.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          onClick: () => {
            let e = Z.default.getLastSessionVoiceChannelId();
            if (null != e) {
              let t = K.default.getChannel(e);
              null != t && I.default.selectVoiceChannel(e)
            }
          },
          noticeType: eo.NoticeTypes.VOICE_CONNECTED_LAST_SESSION,
          children: ef.default.Messages.RECONNECT
        })]
      });
    case eo.NoticeTypes.SPOTIFY_AUTO_PAUSED:
      let eg = h.default.get(eo.PlatformTypes.SPOTIFY);
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.SPOTIFY_AUTO_PAUSED
        }), (0, s.jsx)("img", {
          alt: "",
          className: eE.platformIcon,
          src: eg.icon.whiteSVG
        }), ef.default.Messages.NOTICE_SPOTIFY_AUTO_PAUSED, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          onClick: () => C.default.open(eo.UserSettingsSections.VOICE),
          noticeType: eo.NoticeTypes.SPOTIFY_AUTO_PAUSED,
          children: ef.default.Messages.VOICE_SETTINGS
        }), (0, s.jsx)(u.Anchor, {
          className: eE.textLinkSmall,
          href: el.default.getArticleURL(eo.HelpdeskArticles.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: ef.default.Messages.NOTICE_WHATS_THIS
        })]
      });
    case eo.NoticeTypes.UNCLAIMED_ACCOUNT:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [ef.default.Messages.NOTICE_UNCLAIMED_ACCOUNT, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.UNCLAIMED_ACCOUNT,
          onClick: () => ep && null != _ ? (0, U.openMemberVerificationModal)(_) : R.openClaimAccountModal(),
          children: ef.default.Messages.CLAIM_ACCOUNT
        })]
      });
    case eo.NoticeTypes.UNVERIFIED_ACCOUNT:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [ef.default.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.UNVERIFIED_ACCOUNT,
          onClick: () => {
            c.default.verifyResend(), d.default.show({
              title: ef.default.Messages.VERIFICATION_EMAIL_TITLE,
              body: ef.default.Messages.VERIFICATION_EMAIL_BODY.format({
                email: null == i ? void 0 : i.email
              }),
              secondaryConfirmText: ef.default.Messages.CHANGE_EMAIL,
              onConfirmSecondary: R.openClaimAccountModal
            })
          },
          children: ef.default.Messages.RESEND_EMAIL_SHORT
        })]
      });
    case eo.NoticeTypes.SCHEDULED_MAINTENANCE:
      if (null == g.metadata) return null;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => m.default.ackScheduledMaintenance(),
          noticeType: eo.NoticeTypes.SCHEDULED_MAINTENANCE
        }), ef.default.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(g.metadata), (0, s.jsx)(en.NoticeButtonAnchor, {
          href: "".concat(eo.Links.STATUS, "/incidents/").concat(g.metadata.id),
          children: ef.default.Messages.LEARN_MORE
        })]
      });
    case eo.NoticeTypes.NO_INPUT_DETECTED:
      if (!z.default.supports(ec.Features.LOOPBACK)) return (0, s.jsx)(e_, {});
      return (0, s.jsx)(eT, {});
    case eo.NoticeTypes.HARDWARE_MUTE:
      if (null == g.metadata) return null;
      let {
        vendor: eM, model: eO
      } = g.metadata;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [ef.default.Messages.NOTICE_HARDWARE_MUTE.format({
          vendorName: eM.name,
          modelName: eO.name
        }), (0, s.jsx)(en.NoticeButtonAnchor, {
          href: eO.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: ef.default.Messages.SUPPORT
        })]
      });
    case eo.NoticeTypes.STREAMER_MODE:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.STREAMER_MODE,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.STREAMER_MODE
        }), ef.default.Messages.NOTICE_STREAMER_MODE_TEXT, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          onClick: () => p.default.setEnabled(!1),
          noticeType: eo.NoticeTypes.STREAMER_MODE,
          children: ef.default.Messages.DISABLE
        })]
      });
    case eo.NoticeTypes.H264_DISABLED:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => {
            eI()
          }
        }), ef.default.Messages.NOTICE_H264_DISABLED_SETTINGS, (0, s.jsx)(en.NoticeButton, {
          onClick: () => {
            (0, E.pushLayer)(eo.Layers.USER_SETTINGS), C.default.setSection(eo.UserSettingsSections.VOICE)
          },
          children: ef.default.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
        })]
      });
    case eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == g.metadata) return null;
      let {
        skuId: eR, applicationId: eL
      } = g.metadata, ev = X.default.get(eR), eP = O.default.getApplication(eL);
      if (null == ev || null == eP) return null;
      let eD = {
        page: eo.AnalyticsPages.IN_APP
      };
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => f.dismiss(ev.id),
          noticeType: eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, s.jsx)(et.default, {
          className: eE.premiumIcon
        }), ef.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
          applicationName: eP.name,
          skuName: ev.name
        }), (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, ea.openIAPPurchaseModal)({
            applicationId: eP.id,
            skuId: ev.id,
            openPremiumPaymentModal: () => {
              (0, w.default)({
                initialPlanId: null,
                subscriptionTier: eu.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: em,
                analyticsObject: eD
              })
            },
            analyticsLocations: em,
            analyticsLocationObject: eD,
            context: __OVERLAY__ ? eo.AppContext.OVERLAY : eo.AppContext.APP
          }).then(() => f.dismiss(ev.id)),
          children: ef.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
        })]
      });
    case eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == g.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = g.metadata, n = X.default.get(e), l = O.default.getApplication(t);
      if (null == n || null == l) return null;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.PREMIUM_TIER_1,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, s.jsx)(et.default, {
          className: eE.premiumIcon
        }), ef.default.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
          applicationName: l.name,
          skuName: n.name
        }), (0, s.jsx)(en.NoticeButton, {
          children: (0, s.jsx)(r.Link, {
            onClick: () => eI(),
            to: {
              pathname: eo.Routes.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: !1
              }
            },
            children: ef.default.Messages.LEARN_MORE
          })
        })]
      })
    }
    case eo.NoticeTypes.SURVEY: {
      let e = g.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: l,
        url: a
      } = e;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.SURVEY,
          onClick: () => {
            (0, S.surveyHide)(t, !0)
          }
        }), n, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.SURVEY,
          onClick: () => {
            window.open(a, "_blank"), (0, S.surveyHide)(t, !1)
          },
          children: l
        })]
      })
    }
    case eo.NoticeTypes.SERVER_USAGE_SURVEY:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.CUSTOM,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            eI()
          }
        }), ef.default.Messages.SERVER_USAGE_SURVEY_BODY.format({
          guildName: null !== (t = null == er ? void 0 : er.name) && void 0 !== t ? t : "this server"
        }), (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.SERVER_USAGE_SURVEY,
          onClick: () => {
            window.open("https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id=".concat(null == i ? void 0 : i.id, "&guild_id=").concat(null == er ? void 0 : er.id), "_blank"), eI()
          },
          additionalTrackingProps: {
            guild_id: null == er ? void 0 : er.id
          },
          children: ef.default.Messages.SERVER_USAGE_SURVEY_CTA
        })]
      });
    case eo.NoticeTypes.CORRUPT_INSTALLATION:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [ef.default.Messages.NOTICE_CORRUPT_INSTALLATION, (0, s.jsx)(en.NoticeButtonAnchor, {
          href: el.default.getArticleURL(eo.HelpdeskArticles.CORRUPT_INSTALLATION),
          target: "_blank",
          children: ef.default.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
        })]
      });
    case eo.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER
        }), ef.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("649486").then(n.bind(n, "649486"));
              return t => (0, s.jsx)(e, {
                source: "Video unsupported browser",
                ...t
              })
            })
          },
          children: ef.default.Messages.DOWNLOAD
        })]
      });
    case eo.NoticeTypes.DISPATCH_ERROR:
      if (null == g.metadata) return null;
      let {
        error: ex
      } = g.metadata;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.DISPATCH_ERROR
        }), null == ex ? void 0 : ex.displayMessage, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.DISPATCH_ERROR,
          onClick: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("563912").then(n.bind(n, "563912"));
            return t => (0, s.jsx)(e, {
              ...t
            })
          }),
          children: ef.default.Messages.LEARN_MORE
        })]
      });
    case eo.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == g.metadata) return null;
      let {
        progress: ey, total: eU, name: ej
      } = g.metadata;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DEFAULT,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, s.jsxs)(ee.default, {
          justify: ee.default.Justify.CENTER,
          children: [null != ej ? ef.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
            name: "".concat(ej),
            progress: "".concat(ey),
            total: "".concat(eU)
          }) : ef.default.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
            progress: "".concat(ey),
            total: "".concat(eU)
          }), (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: eE.ellipsis
          })]
        })]
      });
    case eo.NoticeTypes.APPLICATION_TEST_MODE:
      if (null == g.metadata) return null;
      if (null != q.default.testModeEmbeddedApplicationId) return (0, s.jsx)(en.default, {
        color: en.NoticeColors.WARNING,
        children: (0, s.jsxs)(ee.default, {
          justify: ee.default.Justify.CENTER,
          align: ee.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: ef.default.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({
              applicationName: g.metadata.applicationName
            })
          }), (0, s.jsx)(en.NoticeCloseButton, {
            onClick: A.reset,
            noticeType: eo.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, s.jsx)(en.default, {
        color: en.NoticeColors.WARNING,
        children: (0, s.jsxs)(ee.default, {
          justify: ee.default.Justify.CENTER,
          align: ee.default.Align.CENTER,
          children: [(0, s.jsx)("div", {
            children: ef.default.Messages.NOTICE_APPLICATION_TEST_MODE.format({
              applicationName: g.metadata.applicationName
            })
          }), (0, s.jsx)(ei.default, {
            dropdownSize: ei.TestModeSKUButtonEnums.DropdownSizes.SMALL,
            className: eE.testModeSKUSelector,
            color: ei.TestModeSKUButtonEnums.Colors.WHITE,
            look: ei.TestModeSKUButtonEnums.Looks.OUTLINED,
            size: ei.TestModeSKUButtonEnums.Sizes.MIN,
            onSKUSelect: e => N.goToSKUStoreListing(e.id, {
              analyticsSource: {
                page: null,
                section: eo.AnalyticsSections.NOTIFICATION_BAR,
                object: eo.AnalyticsObjects.NAVIGATION_LINK
              }
            }),
            applicationId: g.metadata.applicationId,
            children: ef.default.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
          }), (0, s.jsx)(en.NoticeCloseButton, {
            onClick: A.reset,
            noticeType: eo.NoticeTypes.APPLICATION_TEST_MODE
          })]
        })
      });
    case eo.NoticeTypes.OUTBOUND_PROMOTION:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            H.default.dismissOutboundPromotionNotice()
          }
        }), (0, s.jsx)(et.default, {
          className: eE.premiumIcon
        }), ef.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.OUTBOUND_PROMOTION,
          onClick: () => {
            es.default.track(eo.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), C.default.open(eo.UserSettingsSections.INVENTORY), H.default.dismissOutboundPromotionNotice()
          },
          children: ef.default.Messages.TAKE_ME_THERE
        })]
      });
    case eo.NoticeTypes.VIEWING_ROLES:
      return (0, s.jsx)(F.default, {});
    case eo.NoticeTypes.PREMIUM_UNCANCEL:
      return (0, s.jsxs)(en.default, {
        color: eA === eu.PremiumTypes.TIER_1 ? en.NoticeColors.PREMIUM_TIER_1 : eA === eu.PremiumTypes.TIER_0 ? en.NoticeColors.PREMIUM_TIER_0 : en.NoticeColors.PREMIUM_TIER_2,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eI(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), (0, s.jsx)(et.default, {
          className: eE.premiumIcon
        }), eA === eu.PremiumTypes.TIER_1 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : eA === eu.PremiumTypes.TIER_0 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }), (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eI(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("67323").then(n.bind(n, "67323"));
              return t => (0, s.jsx)(e, {
                ...t,
                daysLeft: g.metadata.daysLeft,
                premiumType: eA,
                analyticsSource: "Nag Bar",
                premiumSubscription: g.metadata.premiumSubscription
              })
            })
          },
          children: eA === eu.PremiumTypes.TIER_1 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eA === eu.PremiumTypes.TIER_0 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: eb, dismissUntil: eG
      } = g.metadata;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eN,
          onClick: () => {
            eI(eG)
          }
        }), ef.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({
          daysPastDue: eb
        }), (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eI(eG), C.default.open(eo.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eI(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eI(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(eo.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eI(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eI(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(eo.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: ef.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.PREMIUM_MISSING_PAYMENT:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eI(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd)
          }
        }), eA === eu.PremiumTypes.TIER_1 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : eA === eu.PremiumTypes.TIER_0 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }) : ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({
          daysLeft: g.metadata.daysLeft
        }), (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eI(null === (t = g.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), C.default.open(eo.UserSettingsSections.SUBSCRIPTIONS)
          },
          children: eA === eu.PremiumTypes.TIER_1 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eA === eu.PremiumTypes.TIER_0 ? ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : ef.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
        })]
      });
    case eo.NoticeTypes.BACK_TO_PREVIOUS_SCREEN:
      return (0, s.jsx)(G.BackToPreviousScreenNotice, {
        buttonText: null !== (a = g.buttonText) && void 0 !== a ? a : ef.default.Messages.GO_BACK,
        onGoBack: g.callback,
        onDismiss: () => eI(),
        showCloseButton: !0
      });
    case eo.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: eo.AnalyticsPages.IN_APP
      };
      return (0, s.jsx)(y.default, {
        guildId: _,
        analyticsLocations: em,
        analyticsLocation: e
      })
    }
    case eo.NoticeTypes.QUARANTINED:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.CUSTOM,
        className: eE.quarantineNotice,
        children: [ef.default.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE, (0, s.jsx)(en.NoticeButtonAnchor, {
          href: ed.QUARANTINE_APPEAL_LINK,
          target: "_blank",
          children: ef.default.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
        }), (0, s.jsx)(u.Anchor, {
          href: el.default.getArticleURL(eo.HelpdeskArticles.QUARANTINE),
          target: "_blank",
          className: eE.quarantineLearnMoreLink,
          children: ef.default.Messages.LEARN_MORE
        })]
      });
    case eo.NoticeTypes.BLOCKED_BY_PROXY:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [ef.default.Messages.BLOCKED_BY_PROXY_NOTICE, (0, s.jsx)(en.NoticeButtonAnchor, {
          href: "".concat(eo.Links.STATUS),
          children: ef.default.Messages.LEARN_MORE
        }), (0, s.jsx)(en.NoticeCloseButton, {
          onClick: () => eI(),
          noticeType: eo.NoticeTypes.BLOCKED_BY_PROXY
        })]
      });
    case eo.NoticeTypes.DROPS_PROGRESS_INTERRUPTION:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.DANGER,
        children: [ef.default.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({
          gameTitle: g.metadata.gameTitle
        }), (0, s.jsx)(en.NoticeButton, {
          onClick: g.metadata.reloadCallback,
          children: ef.default.Messages.ERRORS_RESTART_APP
        })]
      });
    case eo.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: eB, decisionId: eF
      } = g.metadata;
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.WARNING,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != _ && (0, x.clearMentionRaidDetected)(_), eI(eB)
          }
        }), ef.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE, (0, s.jsx)(en.NoticeButton, {
          onClick: () => {
            null != _ && (0, x.removeMentionRaidRestrictionWithFeedback)(_, eF, () => {
              eI(eB), (0, x.clearMentionRaidDetected)(_)
            })
          },
          children: ef.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
        }), null != _ ? (0, s.jsx)(en.NoticeButton, {
          onClick: () => B.default.open(_, eo.GuildSettingsSections.GUILD_AUTOMOD, void 0, eo.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM),
          children: ef.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
        }) : null]
      });
    case eo.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.BRAND,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            V.markNoticeDismissed(), eI()
          }
        }), ef.default.Messages.SAFETY_USER_SENTIMENT_NOTICE, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("123592").then(n.bind(n, "123592"));
              return t => (0, s.jsx)(e, {
                ...t
              })
            }), V.markNoticeDismissed(), eI()
          },
          children: ef.default.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
        })]
      });
    case eo.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH:
      return (0, s.jsxs)(en.default, {
        color: en.NoticeColors.BRAND,
        children: [(0, s.jsx)(en.NoticeCloseButton, {
          noticeType: eo.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH,
          onClick: () => eI()
        }), ef.default.Messages.ESLATAM_LANGUAGE_LAUNCH_NOTICE, (0, s.jsx)(en.PrimaryCTANoticeButton, {
          noticeType: eo.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH,
          onClick: () => {
            C.default.open(eo.UserSettingsSections.LOCALE), eI()
          },
          children: ef.default.Messages.ESLATAM_LANGUAGE_LAUNCH_NOTICE_CTA
        })]
      });
    default:
      return null
  }
});

function eN() {
  let {
    AnalyticsLocationProvider: e
  } = (0, M.default)(g.default.NOTICE);
  return (0, s.jsx)(e, {
    children: (0, s.jsx)(em, {})
  })
}
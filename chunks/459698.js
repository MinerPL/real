"use strict";
n.r(t), n.d(t, {
  MessageStandardEmojiPopout: function() {
    return q
  },
  GuildDetails: function() {
    return Q
  },
  MessageCustomEmojiPopout: function() {
    return $
  },
  CustomGuildEmojiPopout: function() {
    return ee
  },
  EmojiPopoutList: function() {
    return et
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("759843"),
  o = n("446674"),
  u = n("130969"),
  d = n("77078"),
  c = n("851387"),
  m = n("430568"),
  f = n("812204"),
  h = n("685665"),
  p = n("428958"),
  g = n("736271"),
  E = n("865453"),
  v = n("298878"),
  C = n("153043"),
  I = n("256941"),
  x = n("270295"),
  _ = n("529932"),
  S = n("557562"),
  N = n("446066"),
  M = n("626301"),
  T = n("635956"),
  A = n("393414"),
  j = n("18494"),
  y = n("162771"),
  R = n("697218"),
  L = n("145131"),
  b = n("791106"),
  O = n("580357"),
  D = n("476263"),
  P = n("98292"),
  w = n("256170"),
  U = n("216422"),
  k = n("587974"),
  V = n("599110"),
  F = n("315102"),
  B = n("794818"),
  H = n("719923"),
  G = n("412745"),
  W = n("933629"),
  z = n("49111"),
  Y = n("724210"),
  Z = n("646718"),
  K = n("782340"),
  X = n("154403");
let J = () => {
    let e = (0, o.useStateFromStores)([y.default], () => y.default.getGuildId());
    return {
      page: null != e ? z.AnalyticsPages.GUILD_CHANNEL : z.AnalyticsPages.DM_CHANNEL,
      section: z.AnalyticsSections.EMOJI_UPSELL_POPOUT
    }
  },
  q = e => {
    let {
      node: t
    } = e;
    return (0, E.useTrackOpenPopout)({
      emojiId: t.emojiId,
      currentGuildId: y.default.getGuildId()
    }), (0, l.jsx)(u.Dialog, {
      children: (0, l.jsx)(W.MessagePopoutContent, {
        children: (0, l.jsxs)(L.default, {
          className: X.emojiSection,
          children: [(0, l.jsx)(m.default, {
            emojiName: t.name,
            className: X.primaryEmoji,
            src: t.src,
            animated: !1,
            size: "jumbo"
          }), (0, l.jsxs)(L.default, {
            direction: L.default.Direction.VERTICAL,
            justify: L.default.Justify.CENTER,
            className: X.truncatingText,
            children: [(0, l.jsx)(d.Text, {
              className: X.emojiName,
              variant: "text-md/semibold",
              children: (0, l.jsx)(P.default, {
                children: t.name
              })
            }), (0, l.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: K.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
            })]
          })]
        })
      })
    })
  },
  Q = e => {
    let {
      expressionSourceGuild: t,
      hasJoinedExpressionSourceGuild: n,
      isDisplayingJoinGuildButtonInPopout: a
    } = e, {
      id: s,
      icon: r,
      name: o
    } = t, u = F.default.getGuildIconURL({
      id: s,
      icon: r,
      size: 32,
      canAnimate: !0
    });
    n = null == n || n;
    let c = n || t.isDiscoverable(),
      m = () => {
        t.isDiscoverable() ? (0, B.startLurking)(s, {}) : n && (0, A.transitionTo)(z.Routes.CHANNEL(s, j.default.getChannelId(s)))
      },
      f = t.isDiscoverable() && null != t.presenceCount,
      h = () => {
        let e = !a && !n;
        return (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: K.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: t.presenceCount
            })
          }), (0, l.jsx)("div", {
            className: X.dotSeparator
          }), e ? (0, l.jsx)(d.Clickable, {
            className: X.joinGuildLink,
            onClick: m,
            children: (0, l.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-link",
              children: K.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
            })
          }) : (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: K.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
          })]
        })
      };
    return (0, l.jsxs)(L.default, {
      align: L.default.Align.CENTER,
      children: [(0, l.jsx)(k.default, {
        mask: k.default.Masks.SQUIRCLE,
        width: 32,
        height: 32,
        className: X.guildIconContainer,
        children: (() => {
          let e = null != u && c;
          return e ? (0, l.jsxs)(d.Clickable, {
            "aria-label": o,
            onClick: m,
            children: [(0, l.jsx)("img", {
              src: u,
              alt: "",
              className: X.guildIcon
            }), " :"]
          }) : (0, l.jsx)(D.default, {
            size: D.default.Sizes.SMALL,
            className: X.guildIconNotClickable,
            guild: t
          })
        })()
      }), (0, l.jsxs)(L.default, {
        direction: L.default.Direction.VERTICAL,
        className: i(X.guildInformation, X.truncatingText),
        children: [(0, l.jsxs)(L.default, {
          align: L.default.Align.CENTER,
          children: [(0, l.jsx)(O.default, {
            guild: t,
            className: X.guildBadge
          }), c ? (0, l.jsx)(d.Clickable, {
            onClick: m,
            className: X.truncatingText,
            children: (0, l.jsx)(d.Heading, {
              className: X.guildName,
              variant: "heading-md/semibold",
              children: (0, l.jsx)(P.default, {
                children: o
              })
            })
          }) : (0, l.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            children: (0, l.jsx)(P.default, {
              children: o
            })
          })]
        }), (0, l.jsx)(L.default, {
          align: L.default.Align.CENTER,
          children: f ? h() : (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: K.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
          })
        })]
      })]
    })
  },
  $ = e => {
    let {
      node: t,
      closePopout: n,
      refreshPositionKey: a,
      nonce: s
    } = e, {
      expressionSourceGuild: i,
      joinedEmojiSourceGuildRecord: r,
      emoji: o,
      isFetching: d
    } = (0, _.useEmojiAndSourceGuild)({
      emojiId: t.emojiId,
      refreshPositionKey: a
    });
    return d ? (0, l.jsx)(W.PopoutLoadingAnimation, {}) : (0, l.jsx)(u.Dialog, {
      "aria-label": t.name,
      children: (0, l.jsx)(ee, {
        node: t,
        guildEmoji: null != o ? o : void 0,
        expressionSourceGuild: i,
        joinedEmojiSourceGuildRecord: r,
        closePopout: n,
        onToggleShowMoreEmojis: a,
        demoMode: !1,
        nonce: s
      })
    })
  },
  ee = e => {
    var t, n, s;
    let {
      node: u,
      expressionSourceGuild: v,
      joinedEmojiSourceGuildRecord: S,
      closePopout: A,
      onToggleShowMoreEmojis: j,
      guildEmoji: b,
      demoMode: O = !1,
      nonce: D
    } = e, U = (0, o.useStateFromStores)([R.default], () => R.default.getCurrentUser()), k = (0, o.useStateFromStores)([y.default], () => y.default.getGuildId()), F = H.default.isPremium(U), B = null != k && (k === (null == v ? void 0 : v.id) || k === (null == S ? void 0 : S.id)), q = null != S, $ = null !== (t = null == v ? void 0 : v.isDiscoverable()) && void 0 !== t && t;
    O && (F = !0, $ = !0, q = !1, B = !1);
    let ee = J(),
      {
        isRoleSubscriptionEmoji: en,
        isUnusableRoleSubscriptionEmoji: el,
        userIsRoleSubscriber: ea
      } = a.useMemo(() => null == b ? {
        isRoleSubscriptionEmoji: !1,
        isUnusableRoleSubscriptionEmoji: !1,
        userIsRoleSubscriber: !1
      } : {
        isRoleSubscriptionEmoji: C.isPurchasableRoleSubscriptionEmoji(b),
        isUnusableRoleSubscriptionEmoji: C.isUnusableRoleSubscriptionEmoji(b, null != k ? k : void 0),
        userIsRoleSubscriber: I.default.getUserSubscriptionRoles(b.guildId).size > 0
      }, [b, k]),
      es = !!el && (0, g.shouldHideGuildPurchaseEntryPoints)(null == b ? void 0 : b.guildId),
      {
        analyticsLocations: ei
      } = (0, h.default)(f.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, p.default)({
      type: r.ImpressionTypes.MODAL,
      name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
      properties: {
        location_stack: ei,
        emoji_guild_id: null !== (n = null == b ? void 0 : b.guildId) && void 0 !== n ? n : null,
        emoji_id: null !== (s = null == b ? void 0 : b.id) && void 0 !== s ? s : null
      }
    }, {
      disableTrack: !en
    });
    let er = y.default.getGuildId(),
      eo = (0, _.usePackCollectionData)({
        expressionSourceGuild: v
      }),
      eu = eo.collectEnabled,
      ed = (0, G.getEmojiPopoutData)({
        isPremium: F,
        hasJoinedEmojiSourceGuild: q,
        isRoleSubscriptionEmoji: en,
        isUnusableRoleSubscriptionEmoji: el,
        userIsRoleSubscriber: ea,
        emojiComesFromCurrentGuild: B,
        isDiscoverable: $,
        shouldHideRoleSubscriptionCTA: es,
        onOpenPremiumSettings: () => {
          A(), V.default.track(z.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
            location_page: ee.page,
            location_section: ee.section
          }), (0, M.navigateToPremiumMarketingPage)()
        },
        packCollectionData: eo
      }),
      ec = q && el && !es && (F && en || !F),
      em = ed.emojiDescription,
      ef = (0, E.useTrackOpenPopout)({
        emojiId: u.emojiId,
        currentGuildId: er,
        popoutData: ed,
        emojiSourceGuildId: null == v ? void 0 : v.id,
        nonce: D,
        demoMode: O
      }),
      eh = ed.type === G.EmojiPopoutType.JOIN_GUILD,
      ep = ed.type === G.EmojiPopoutType.GET_PREMIUM_INVENTORY_DISABLED,
      [eg, eE] = a.useState(eu),
      ev = $ || q && !B || eu && null != v;
    return (0, l.jsxs)(W.MessagePopoutContent, {
      className: X.popoutContent,
      children: [(() => {
        let e = async () => {
          if (O || null == v || q) return;
          A();
          let e = v.id;
          try {
            await c.default.joinGuild(e), c.default.transitionToGuildSync(e)
          } catch {}
        }, t = !q && $;
        return (0, l.jsxs)("div", {
          className: X.emojiSection,
          children: [(0, l.jsxs)(L.default, {
            children: [(0, l.jsx)(m.default, {
              className: X.primaryEmoji,
              emojiId: u.emojiId,
              emojiName: u.name,
              animated: u.animated,
              size: "jumbo"
            }), (0, l.jsxs)(L.default, {
              direction: L.default.Direction.VERTICAL,
              justify: L.default.Justify.CENTER,
              className: X.truncatingText,
              children: [(0, l.jsx)(d.Text, {
                variant: "text-md/semibold",
                children: (0, l.jsx)(P.default, {
                  children: u.name
                })
              }), null != em && (0, l.jsx)(d.Text, {
                variant: "text-sm/normal",
                children: em
              })]
            })]
          }), ep ? (0, l.jsx)(T.default, {
            className: X.ctaButton,
            subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2,
            size: d.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: ed.text,
            onSubscribeModalClose: t => t ? e() : A(),
            postSuccessGuild: t && null != v ? v : void 0,
            premiumModalAnalyticsLocation: ee
          }) : eh ? (0, l.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            className: X.ctaButton,
            color: d.ButtonColors.BRAND,
            fullWidth: !0,
            onClick: e,
            children: ed.text
          }) : void 0, ec && (0, l.jsx)(x.default, {
            className: X.ctaButton,
            size: d.Button.Sizes.SMALL,
            fullWidth: !0,
            onClick: () => {
              A(), (null == S ? void 0 : S.id) != null && c.default.transitionToGuildSync(S.id, void 0, Y.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [f.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
            },
            children: ea ? K.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : K.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
          })]
        })
      })(), ev && (() => {
        let e = q || null != eo.collectedPack,
          t = null != v && !q && ($ || eu),
          n = () => {
            t && (null == j || j(), !eg && !O && V.default.track(z.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ef), eE(!eg))
          };
        return (0, l.jsxs)("div", {
          className: X.guildSection,
          children: [(0, l.jsx)(d.FormTitle, {
            className: X.guildTitle,
            children: e ? K.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : K.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, l.jsx)(Q, {
            expressionSourceGuild: null != v ? v : N.default.createFromGuildRecord(S),
            hasJoinedExpressionSourceGuild: q,
            isDisplayingJoinGuildButtonInPopout: eh
          }), t && (0, l.jsxs)(l.Fragment, {
            children: [!eu && (() => {
              let e = K.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
              return (0, l.jsx)(d.Clickable, {
                onClick: n,
                className: X.showMoreEmojis,
                children: (0, l.jsxs)(L.default, {
                  children: [(0, l.jsx)(d.Text, {
                    className: X.showMoreEmojisLabel,
                    "aria-label": e,
                    variant: "text-xs/normal",
                    color: "none",
                    children: e
                  }), (0, l.jsx)(w.default, {
                    className: i(X.showMoreEmojisArrow, {
                      [X.showMoreEmojisArrowCollapsed]: !eg
                    })
                  })]
                })
              })
            })(), null != u.emojiId && eg && (0, l.jsx)(et, {
              emojiId: u.emojiId,
              expressionSourceGuild: v,
              popoutData: ed,
              packCollectionData: eo,
              onClose: A,
              hasJoinedEmojiSourceGuild: q,
              isDisplayingButtonInTopSection: eh || ep,
              nonce: D
            })]
          })]
        })
      })()]
    })
  },
  et = e => {
    var t;
    let {
      emojiId: n,
      expressionSourceGuild: a,
      hasJoinedEmojiSourceGuild: s,
      popoutData: i,
      packCollectionData: r,
      onClose: o,
      isDisplayingButtonInTopSection: u,
      nonce: c
    } = e, f = r.isPremium, h = (null !== (t = null == a ? void 0 : a.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
      type: p,
      description: g
    } = i;
    return (0, l.jsxs)(L.default, {
      wrap: L.default.Wrap.WRAP,
      align: L.default.Align.CENTER,
      justify: L.default.Justify.CENTER,
      className: X.otherEmojisContainer,
      children: [s ? null : h.map(e => (0, l.jsx)(d.Tooltip, {
        text: e.require_colons ? ":".concat(e.name, ":") : e.name,
        ...W.EXPRESSION_TOOLTIP_PROPS,
        children: t => (0, l.jsx)(m.default, {
          className: X.otherEmoji,
          emojiId: e.id,
          animated: e.animated,
          ...t
        })
      }, e.id)), !u && (() => {
        if (p === G.EmojiPopoutType.ADD_PACK || p === G.EmojiPopoutType.REMOVE_PACK) {
          var e;
          let t = (null !== (e = null == a ? void 0 : a.emojis) && void 0 !== e ? e : []).find(e => e.id === n),
            s = (0, S.getAddOrRemovePackHandler)({
              expressionSourceGuild: a,
              action: p,
              onComplete: o,
              nonce: c,
              expressionName: null == t ? void 0 : t.name
            }),
            u = f && r.showTryPacksModalAndV2Copy;
          return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(v.default, {
              className: X.betaTag,
              color: "white"
            }), (0, l.jsx)(d.Button, {
              size: d.Button.Sizes.SMALL,
              className: X.inventoryCtaButton,
              fullWidth: !0,
              onClick: s,
              color: p === G.EmojiPopoutType.ADD_PACK ? d.Button.Colors.BRAND : d.Button.Colors.PRIMARY,
              children: i.text
            }), null != g && (0, l.jsxs)("div", {
              className: X.ctaDescription,
              children: [u && (0, l.jsx)(U.default, {
                className: X.nitroWheel,
                color: b.GradientCssUrls.PREMIUM_TIER_2
              }), (0, l.jsx)(d.Text, {
                variant: "text-sm/medium",
                "aria-label": g,
                children: g
              })]
            })]
          })
        }
        if (p === G.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED || p === G.EmojiPopoutType.GET_PREMIUM_INVENTORY_DISABLED) return (0, l.jsxs)(l.Fragment, {
          children: [p === G.EmojiPopoutType.GET_PREMIUM_INVENTORY_ENABLED && (0, l.jsx)(v.default, {
            className: X.betaTag,
            color: "white"
          }), (0, l.jsx)(T.default, {
            subscriptionTier: Z.PremiumSubscriptionSKUs.TIER_2,
            buttonText: i.text,
            className: X.ctaButton,
            fullWidth: !0,
            onClick: () => o()
          }), null != g && (0, l.jsx)("div", {
            className: X.ctaDescription,
            children: (0, l.jsx)(d.Text, {
              variant: "text-sm/medium",
              "aria-label": g,
              children: g
            })
          })]
        });
        if (p === G.EmojiPopoutType.JOIN_GUILD) return (0, l.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          className: X.ctaButton,
          color: d.ButtonColors.BRAND,
          fullWidth: !0,
          onClick: () => {
            (0, B.startLurking)(a.id, {})
          },
          children: i.text
        });
        return null
      })()]
    })
  }
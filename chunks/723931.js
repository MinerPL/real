"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eB
  },
  default: function() {
    return eF
  },
  SimpleMessageAccessories: function() {
    return ek
  }
}), n("222007"), n("702976"), n("70102"), n("881410");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("637612"),
  o = n("446674"),
  u = n("713349"),
  d = n("233736"),
  c = n("77078"),
  f = n("819689"),
  E = n("710306"),
  _ = n("501076"),
  T = n("798609"),
  I = n("627697"),
  m = n("527088"),
  N = n("193865"),
  p = n("222650"),
  S = n("576060"),
  A = n("139514"),
  C = n("810044"),
  h = n("447435"),
  g = n("963119"),
  M = n("45476"),
  O = n("925685"),
  R = n("406043"),
  L = n("294519"),
  v = n("477558"),
  P = n("812224"),
  D = n("249393"),
  x = n("383247"),
  y = n("267567"),
  U = n("367376"),
  j = n("467475"),
  b = n("801177"),
  G = n("985883"),
  B = n("311830"),
  F = n("626301"),
  k = n("428786"),
  w = n("705423"),
  H = n("315021"),
  V = n("24373"),
  Y = n("943508"),
  W = n("300322"),
  K = n("415829"),
  z = n("845579"),
  Z = n("271938"),
  J = n("26989"),
  Q = n("88093"),
  X = n("957255"),
  q = n("697218"),
  $ = n("560176"),
  ee = n("952368"),
  et = n("328620"),
  en = n("688622"),
  es = n("124297"),
  el = n("377502"),
  ea = n("323273"),
  ei = n("599110"),
  er = n("718517"),
  eo = n("240873"),
  eu = n("568734"),
  ed = n("449008"),
  ec = n("299039"),
  ef = n("253981"),
  eE = n("605160"),
  e_ = n("865446"),
  eT = n("913491"),
  eI = n("583022"),
  em = n("125247"),
  eN = n("885968"),
  ep = n("476714"),
  eS = n("808440"),
  eA = n("865343"),
  eC = n("5982"),
  eh = n("933629"),
  eg = n("600536"),
  eM = n("592707"),
  eO = n("49111"),
  eR = n("646718"),
  eL = n("782340"),
  ev = n("30554"),
  eP = n("872364");

function eD() {
  return (0, s.jsxs)("div", {
    className: ev.nitroFileSizeUpsell,
    children: [(0, s.jsx)("img", {
      src: eP,
      className: ev.nitroBadgeSvg,
      alt: ""
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: ev.nitroFileSizeUpsellText,
      children: eL.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, F.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let ex = new Set([eO.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, eO.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, eO.MessageEmbedTypes.APPLICATION_NEWS, eO.MessageEmbedTypes.POST_PREVIEW, eO.MessageEmbedTypes.SAFETY_POLICY_NOTICE, eO.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, eO.MessageEmbedTypes.VOICE_CHANNEL]),
  ey = 15 * er.default.Millis.MINUTE,
  eU = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  ej = "web_chat",
  eb = (e, t, n) => () => {
    let l = null != t ? t : n;
    if (null == l) return null;
    let {
      url: a,
      proxyURL: i,
      width: r,
      height: o
    } = l;
    return (0, s.jsx)(ep.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : a,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : a,
      format: null != n ? u.GIFType.VIDEO : u.GIFType.IMAGE,
      className: ev.gifFavoriteButton
    })
  },
  eG = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: l
    } = e;
    return ee.IMAGE_GIF_RE.test(e.filename) && null != n && null != l ? (0, s.jsx)(ep.default, {
      width: n,
      height: l,
      src: t,
      url: t,
      format: u.GIFType.IMAGE,
      className: ev.gifFavoriteButton
    }) : null
  };
class eB extends l.Component {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eU.has(e))
  }
  shouldComponentUpdate(e, t) {
    var n, s;
    let {
      channel: l,
      message: a,
      poll: i
    } = this.props, {
      channel: r,
      message: o,
      poll: u
    } = e;
    return !(0, d.default)(this.state, t) || !(0, d.default)(this.props, e, ["message", "channel"]) || l.type !== r.type || u !== i || o.codedLinks !== a.codedLinks || o.flags !== a.flags || o.giftCodes !== a.giftCodes || o.attachments !== a.attachments || o.embeds !== a.embeds || o.components !== a.components || o.activity !== a.activity || (n = o.reactions, n !== (s = a.reactions) && (n.length !== s.length || !!n.some((e, t) => {
      let {
        emoji: n,
        count: l,
        burst_count: a
      } = e, {
        emoji: i,
        count: r,
        burst_count: o
      } = s[t];
      return a !== o || l !== r || n.id !== i.id || n.name !== i.name
    })))
  }
  renderCtaButton() {
    let {
      shouldRenderCtaButton: e
    } = this.props;
    return e ? (0, s.jsx)("div", {
      className: ev.ctaButtonContainer,
      children: (0, s.jsx)(c.Button, {
        size: c.Button.Sizes.MEDIUM,
        color: c.Button.Colors.PRIMARY,
        children: eL.default.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
      })
    }) : null
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eR.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, e_.shouldShowNitroUpsell)("attachment") && t ? (0, s.jsx)(eD, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: l
      } = t;
      if (n === A.CodedLinkType.INVITE) return this.shouldRenderInvite(l) ? (0, s.jsx)(eS.default, {
        code: l,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, l) : null;
      if (n === A.CodedLinkType.TEMPLATE) return (0, s.jsx)(P.default, {
        code: l
      }, l);
      if (n === A.CodedLinkType.EVENT) return (0, s.jsx)(v.default, {
        code: l
      }, l);
      else if (n === A.CodedLinkType.CHANNEL_LINK) return (0, s.jsx)(em.default, {
        code: l,
        messageData: e
      }, l);
      else if (n === A.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, s.jsx)(m.default, {
        code: l,
        message: e
      }, l);
      else if (n === A.CodedLinkType.CLYDE_PROFILE) return (0, s.jsx)(S.default, {
        code: l
      }, l);
      else if (n === A.CodedLinkType.ACTIVITY_BOOKMARK) return (0, s.jsx)(I.default, {
        applicationId: l,
        message: e
      }, l);
      else if (n === A.CodedLinkType.GUILD_PRODUCT) return (0, s.jsx)(L.default, {
        code: l
      }, l);
      else if (n === A.CodedLinkType.SERVER_SHOP) return (0, s.jsx)(C.default, {
        guildId: l
      }, l);
      else throw Error("Unknown coded link type: ".concat(n))
    })
  }
  renderGiftCodes(e) {
    let {
      giftCodes: t,
      author: n,
      channel_id: l,
      type: a,
      content: i,
      giftInfo: r
    } = e, o = q.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, s.jsx)("div", {
      className: ev.giftCodeContainer,
      children: (0, s.jsx)(E.default, {
        code: e,
        author: n,
        channelId: l,
        currentUser: o,
        type: a,
        content: i,
        giftInfo: r
      })
    }, e)) : null
  }
  renderReferralTrial(e) {
    let {
      referralTrialOfferId: t,
      type: n
    } = e, {
      canRenderReferralEmbed: l
    } = this.props;
    return n !== r.MessageTypes.PREMIUM_REFERRAL || null == t ? null : (0, s.jsx)("div", {
      className: ev.referralContainer,
      children: (0, s.jsx)(k.default, {
        userTrialOfferId: t,
        canRenderReferralEmbed: null != l && l
      })
    }, t)
  }
  renderReactions(e) {
    let {
      disableReactionCreates: t,
      disableReactionReads: n,
      disableReactionUpdates: l,
      isLurking: a,
      isGuest: i,
      isPendingMember: r,
      channel: o,
      forceAddReactions: u
    } = this.props;
    return n ? null : (0, s.jsx)(eM.default, {
      message: e,
      channel: o,
      disableReactionCreates: t,
      disableReactionUpdates: l,
      isLurking: a,
      isGuest: i,
      isPendingMember: r,
      forceAddReactions: u,
      useChatFontScaling: !0
    })
  }
  renderAttachments(e) {
    let {
      attachments: t,
      flags: n
    } = e, {
      channel: l,
      shouldRedactExplicitContent: a
    } = this.props;
    if (0 === t.length || e.isPoll()) return null;
    let i = t.filter(e => null == e.flags || !(0, eu.hasFlag)(e.flags, eO.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onAttachmentContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, f = i.map(e => (0, ea.carouselAssetFromAttachment)(e, c, a)).filter(ed.isNotNullish), E = {
      source: "Media Mosaic",
      guild_id: l.guild_id,
      channel_id: l.id,
      channel_type: l.type
    }, _ = f.length > 1 ? (0, ea.createMediaOnClickOverrides)(f, E) : {}, T = (0, eu.hasFlag)(n, eO.MessageFlags.IS_VOICE_MESSAGE), I = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: ev.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: T ? eh.renderVoiceMessageAudioComponent : eh.renderAudioComponent,
          renderImageComponent: eh.renderImageComponent,
          renderPlaintextFilePreview: eh.renderPlaintextFilePreview,
          renderVideoComponent: eh.renderVideoComponent,
          onPlay: (e, n, s) => {
            ei.default.track(eO.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: l.guild_id,
              channel_id: l.id,
              channel_type: l.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: s
            })
          },
          gifFavoriteButton: eG(t)
        },
        s = (0, en.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return s in _ && (n.onClick = _[s]), n
    });
    return (0, s.jsx)(el.default, {
      attachments: I
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (ex.has(t.type) || (0, eo.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eh.renderImageComponent,
        renderVideoComponent: eh.renderVideoComponent,
        renderLinkComponent: eh.renderMaskedLinkComponent
      };
      if (t.type === eO.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = ef.default.safeParseWithQuery(t.url);
        if (null != l && null != l.pathname) {
          let a = l.pathname.split("/")[3];
          if (null != a) return (0, s.jsx)(_.default, {
            skuId: a,
            renderFallback: () => this.renderEmbed(t, n, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, n, e.id, e.channel_id)
    }) : null
  }
  renderComponentAccessories(e) {
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, s.jsx)(x.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, s.jsx)(eC.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eO.ChannelTypes.GUILD_ANNOUNCEMENT || (0, eu.hasFlag)(e.flags, eO.MessageFlags.EPHEMERAL) ? null : (0, s.jsx)(p.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, eu.hasFlag)(e.flags, eO.MessageFlags.EPHEMERAL) ? (0, s.jsx)(es.default, {
      message: e,
      onDeleteMessage: () => {
        f.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, V.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: l
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, s.jsx)(Y.default, {
      channel: n,
      isInteracting: l,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eO.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, s.jsx)(K.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!e.hasFlag(eO.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) || !this.props.isCurrentUser) return;
    let t = Date.now() - ec.default.extractTimestamp(e.id);
    if (!(t >= ey)) return (0, s.jsx)("div", {
      className: ev.threadRoleMentionFailure,
      children: eL.default.Messages.THREAD_ROLE_MENTION_FAILURE
    })
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, s.jsxs)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eL.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eL.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eL.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showSuppressModal: !1
      }),
      onConfirm: () => {
        f.default.suppressEmbeds(e.id, t.id), this.setState({
          showSuppressModal: !1
        })
      },
      children: [(0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: ev.confirmText,
        children: eL.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eL.default.Messages.SUPPRESS_EMBED_TIP
      })]
    })
  }
  renderRemoveAttachmentConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props, {
      attachmentToDelete: n
    } = this.state;
    if (null == n) {
      this.setState({
        showRemoveAttachmentModal: !1
      });
      return
    }
    return (0, s.jsx)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eL.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eL.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eL.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showRemoveAttachmentModal: !1,
        attachmentToDelete: null
      }),
      onConfirm: () => {
        let s = t.attachments.filter(e => e.id !== n.id);
        f.default.patchMessageAttachments(e.id, t.id, s), this.setState({
          showRemoveAttachmentModal: !1,
          attachmentToDelete: null
        })
      },
      children: (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: ev.confirmText,
        children: eL.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== r.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, s.jsx)(eg.default, {
      applicationId: t,
      guildId: this.props.channel.guild_id
    })
  }
  renderEmbeddedApplicationStart(e) {
    let {
      application: t,
      activityInstance: n,
      interaction: l
    } = e;
    return null == t || null == n || (null == l ? void 0 : l.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, s.jsx)(eN.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eO.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, s.jsx)(b.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eO.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, s.jsx)(w.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eO.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, s.jsx)(H.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eO.MessageEmbedTypes.VOICE_CHANNEL) return (0, s.jsx)(D.VoiceChannelInviteEmbed, {
      message: e,
      channel: t
    })
  }
  renderMediaObscureNotice(e) {
    if (0 === e.attachments.length && 0 === e.embeds.length) return null;
    let {
      obscuredAttachments: t,
      obscuredEmbeds: n
    } = (0, h.getObscuredMediaForMessage)(e);
    return 0 === t.length && 0 === n.length ? null : (0, s.jsx)(O.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, s.jsx)(B.default, {
      message: e,
      poll: t,
      className: ev.pollContainer
    })
  }
  render() {
    let {
      className: e,
      message: t,
      channel: n,
      poll: l
    } = this.props, {
      showSuppressModal: a,
      showRemoveAttachmentModal: r
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderCtaButton(), E = this.renderSocialProofingFileSizeNitroUpsell(t), _ = this.renderEmbeds(t), T = this.renderActivityInvite(t), I = this.renderReactions(t), m = this.renderPublishBump(t), N = this.renderEphemeralAccessories(t), p = this.renderStickersAccessories(t), S = this.renderThreadAccessories(t), A = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), h = this.renderEmbeddedApplicationStart(t), g = this.renderInteractionPremiumUpsell(t), M = this.renderMediaPostEmbeds(t), O = this.renderSafetyPolicyNotice(t), R = this.renderSafetySystemNotification(t), L = this.renderVoiceChannelInvite(t, n), v = this.renderMediaObscureNotice(t), P = this.renderPoll(t, l);
    return null == o && null == c && null == _ && null == T && null == I && null == u && null == d && null == m && null == N && null == p && null == S && null == A && null == h && null == C && null == M && null == O && null != g && null == P && null == L ? null : (0, s.jsxs)("div", {
      id: (0, eA.getMessageAccessoriesId)(t),
      className: i(e, ev.container),
      children: [C, P, o, u, d, M, c, f, _, v, T, p, A, h, g, E, I, m, N, a && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), S, O, R, L]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      showSuppressModal: !1,
      showRemoveAttachmentModal: !1,
      attachmentToDelete: null
    }, this.getAcceptInviteContext = e => {
      let {
        channel: t,
        message: n
      } = this.props;
      return {
        location: e,
        location_guild_id: t.getGuildId(),
        location_channel_id: t.id,
        location_channel_type: t.type,
        location_message_id: n.id
      }
    }, this.renderEmbed = (e, t, n, l) => {
      let {
        gifAutoPlay: a,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u
      } = this.props, d = (0, eE.getObscureReasonForEmbed)(e, l, n, o, u);
      return e.type === eO.MessageEmbedTypes.GIFT ? null : (0, s.jsx)(et.GIFAccessoryContext.Provider, {
        value: eb(e.url, e.image, e.video),
        children: (0, s.jsx)($.default, {
          className: ev.embedWrapper,
          embed: e,
          obscureReason: null != d ? d : void 0,
          autoPlayGif: a,
          hideMedia: !i,
          onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
          renderTitle: this.renderEmbedTitle,
          renderDescription: this.renderEmbedDescription,
          messageId: n,
          channelId: l,
          ...t
        })
      }, e.id)
    }, this.renderEmbedTitle = (e, t) => e.type === eO.MessageEmbedTypes.RICH ? U.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t, this.renderEmbedDescription = (e, t, n) => e.type === eO.MessageEmbedTypes.RICH ? U.default.parse(t, !0, {
      channelId: this.props.channel.id,
      allowLinks: !0,
      allowEmojiLinks: !0,
      allowList: this.props.showListsAndHeaders,
      allowHeading: !n && this.props.showListsAndHeaders,
      previewLinkTarget: this.props.showMaskedLinks
    }) : t, this.handleEmbedSuppressed = e => {
      let {
        channel: t,
        message: n
      } = this.props;
      e.shiftKey ? f.default.suppressEmbeds(t.id, n.id) : this.setState({
        showSuppressModal: !0
      })
    }, this.handleRemoveAttachment = e => {
      this.setState({
        showRemoveAttachmentModal: !0,
        attachmentToDelete: e
      })
    }
  }
}

function eF(e) {
  var t, n, l;
  let {
    channel: a,
    message: i,
    renderSuppressEmbeds: r
  } = e, u = (0, o.useStateFromStores)([Z.default], () => Z.default.getId()), d = z.InlineAttachmentMedia.useSetting(), c = z.InlineEmbedMedia.useSetting(), f = z.RenderEmbeds.useSetting(), E = f && !(0, eT.default)(e.message), _ = z.RenderReactions.useSetting(), T = z.GifAutoPlay.useSetting(), I = (0, o.useStateFromStores)([Q.default], () => null == a.guild_id || Q.default.canChatInGuild(a.guild_id), [a]), m = (0, o.useStateFromStores)([y.default], () => null != a.guild_id && y.default.isLurking(a.guild_id), [a]), p = (0, o.useStateFromStores)([J.default], () => J.default.isCurrentUserGuest(a.guild_id), [a]), S = (0, o.useStateFromStores)([J.default, q.default], () => {
    var e, t;
    let n = q.default.getCurrentUser();
    return null !== (t = null != a.guild_id && null != n ? null === (e = J.default.getMember(a.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: A,
    canManageMessages: C
  } = (0, o.useStateFromStoresObject)([X.default], () => ({
    canAddNewReactions: I && X.default.can(eO.Permissions.ADD_REACTIONS, a),
    canManageMessages: X.default.can(eO.Permissions.MANAGE_MESSAGES, a)
  }), [I, a]), [, h] = (0, R.useCurrentUserCommunicationDisabled)(a.guild_id), O = (0, W.useIsActiveChannelOrUnarchivableThread)(a), L = (u === i.author.id || C) && i.author.id !== eO.LOCAL_BOT_ID && !1 !== r && !(0, eu.hasFlag)(i.flags, eO.MessageFlags.EPHEMERAL) && O, v = u === i.author.id && O, P = i.author.id === u, D = i.isFirstMessageInForumPost(a), x = (0, eI.default)({
    channel: a,
    canChat: I,
    renderReactions: _,
    canAddNewReactions: A,
    isLurking: m,
    isGuest: p,
    communicationDisabled: h,
    isActiveChannelOrUnarchivableThread: O
  }), U = (0, N.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), b = (0, N.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = a.guild_id) && void 0 !== n ? n : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), B = (0, j.default)(null == a ? void 0 : a.id), F = (0, G.default)(i), k = (0, g.useShouldRedactExplicitContent)(a.id, i.author.id), w = (0, M.useShouldRenderReportFalsePositiveButton)(i.id, ej);
  return (0, s.jsx)(eB, {
    canSuppressEmbeds: L,
    canDeleteAttachments: v,
    ...x,
    disableReactionReads: !!D || x.disableReactionReads,
    ...e,
    isLurking: m && I,
    isGuest: p && I,
    isPendingMember: S && I,
    isCurrentUser: P,
    inlineAttachmentMedia: d,
    inlineEmbedMedia: c,
    renderEmbeds: E,
    gifAutoPlay: T,
    canRenderReferralEmbed: a.isDM(),
    poll: F,
    showListsAndHeaders: U.showListsAndHeaders || b.showListsAndHeaders,
    showMaskedLinks: U.showMaskedLinks || b.showMaskedLinks,
    shouldHideMediaOptions: B,
    shouldRedactExplicitContent: k,
    shouldRenderCtaButton: w
  })
}
eB.defaultProps = {
  renderEmbeds: !0,
  compact: !1
};
let ek = e => {
  var t, n, l;
  let {
    message: a,
    channel: i,
    disableReactionReads: r = !1,
    renderComponentAccessory: o = !1,
    renderThreadAccessory: u = !1,
    disableReactionCreates: d = !0,
    disableReactionUpdates: c = !0,
    ...f
  } = e, E = z.InlineAttachmentMedia.useSetting(), _ = z.InlineEmbedMedia.useSetting(), T = z.RenderEmbeds.useSetting() && !a.author.isClyde(), I = z.GifAutoPlay.useSetting(), m = (0, N.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = a.editedTimestamp) && void 0 !== t ? t : a.timestamp).valueOf()), p = (0, N.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = i.guild_id) && void 0 !== n ? n : "", (null !== (l = a.editedTimestamp) && void 0 !== l ? l : a.timestamp).valueOf()), S = (0, j.default)(null == i ? void 0 : i.id), A = (0, g.useShouldRedactExplicitContent)(i.id, a.author.id), C = (0, M.useShouldRenderReportFalsePositiveButton)(a.id, ej);
  return (0, s.jsx)(eB, {
    ...f,
    message: a,
    channel: i,
    disableReactionReads: r,
    disableReactionCreates: d,
    disableReactionUpdates: c,
    canSuppressEmbeds: !1,
    canDeleteAttachments: !1,
    renderComponentAccessory: o,
    renderThreadAccessory: u,
    inlineAttachmentMedia: E,
    inlineEmbedMedia: _,
    renderEmbeds: T,
    gifAutoPlay: I,
    showListsAndHeaders: m.showListsAndHeaders || p.showListsAndHeaders,
    showMaskedLinks: m.showMaskedLinks || p.showMaskedLinks,
    shouldHideMediaOptions: S,
    shouldRedactExplicitContent: A,
    shouldRenderCtaButton: C
  })
}
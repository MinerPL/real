"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return eb
  },
  default: function() {
    return eG
  },
  SimpleMessageAccessories: function() {
    return eB
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
  M = n("925685"),
  O = n("406043"),
  R = n("294519"),
  L = n("477558"),
  v = n("812224"),
  P = n("249393"),
  D = n("383247"),
  x = n("267567"),
  y = n("367376"),
  U = n("467475"),
  j = n("801177"),
  b = n("985883"),
  G = n("311830"),
  B = n("626301"),
  F = n("428786"),
  k = n("705423"),
  w = n("315021"),
  H = n("24373"),
  V = n("943508"),
  Y = n("300322"),
  K = n("415829"),
  W = n("845579"),
  z = n("271938"),
  Z = n("26989"),
  J = n("88093"),
  Q = n("957255"),
  X = n("697218"),
  q = n("560176"),
  $ = n("952368"),
  ee = n("328620"),
  et = n("688622"),
  en = n("124297"),
  es = n("377502"),
  el = n("323273"),
  ea = n("599110"),
  ei = n("718517"),
  er = n("240873"),
  eo = n("568734"),
  eu = n("449008"),
  ed = n("299039"),
  ec = n("253981"),
  ef = n("605160"),
  eE = n("865446"),
  e_ = n("913491"),
  eT = n("583022"),
  eI = n("125247"),
  em = n("885968"),
  eN = n("476714"),
  ep = n("808440"),
  eS = n("865343"),
  eA = n("5982"),
  eC = n("933629"),
  eh = n("600536"),
  eg = n("592707"),
  eM = n("49111"),
  eO = n("646718"),
  eR = n("782340"),
  eL = n("30554"),
  ev = n("872364");

function eP() {
  return (0, s.jsxs)("div", {
    className: eL.nitroFileSizeUpsell,
    children: [(0, s.jsx)("img", {
      src: ev,
      className: eL.nitroBadgeSvg,
      alt: ""
    }), (0, s.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eL.nitroFileSizeUpsellText,
      children: eR.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, B.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let eD = new Set([eM.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, eM.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, eM.MessageEmbedTypes.APPLICATION_NEWS, eM.MessageEmbedTypes.POST_PREVIEW, eM.MessageEmbedTypes.SAFETY_POLICY_NOTICE, eM.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, eM.MessageEmbedTypes.VOICE_CHANNEL]),
  ex = 15 * ei.default.Millis.MINUTE,
  ey = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eU = (e, t, n) => () => {
    let l = null != t ? t : n;
    if (null == l) return null;
    let {
      url: a,
      proxyURL: i,
      width: r,
      height: o
    } = l;
    return (0, s.jsx)(eN.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : a,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : a,
      format: null != n ? u.GIFType.VIDEO : u.GIFType.IMAGE,
      className: eL.gifFavoriteButton
    })
  },
  ej = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: l
    } = e;
    return $.IMAGE_GIF_RE.test(e.filename) && null != n && null != l ? (0, s.jsx)(eN.default, {
      width: n,
      height: l,
      src: t,
      url: t,
      format: u.GIFType.IMAGE,
      className: eL.gifFavoriteButton
    }) : null
  };
class eb extends l.Component {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && ey.has(e))
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
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > eO.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, eE.shouldShowNitroUpsell)("attachment") && t ? (0, s.jsx)(eP, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: l
      } = t;
      if (n === A.CodedLinkType.INVITE) return this.shouldRenderInvite(l) ? (0, s.jsx)(ep.default, {
        code: l,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, l) : null;
      if (n === A.CodedLinkType.TEMPLATE) return (0, s.jsx)(v.default, {
        code: l
      }, l);
      if (n === A.CodedLinkType.EVENT) return (0, s.jsx)(L.default, {
        code: l
      }, l);
      else if (n === A.CodedLinkType.CHANNEL_LINK) return (0, s.jsx)(eI.default, {
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
      else if (n === A.CodedLinkType.GUILD_PRODUCT) return (0, s.jsx)(R.default, {
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
    } = e, o = X.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, s.jsx)("div", {
      className: eL.giftCodeContainer,
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
      className: eL.referralContainer,
      children: (0, s.jsx)(F.default, {
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
    return n ? null : (0, s.jsx)(eg.default, {
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
    let i = t.filter(e => null == e.flags || !(0, eo.hasFlag)(e.flags, eM.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onAttachmentContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, f = i.map(e => (0, el.carouselAssetFromAttachment)(e, c, a)).filter(eu.isNotNullish), E = {
      source: "Media Mosaic",
      guild_id: l.guild_id,
      channel_id: l.id,
      channel_type: l.type
    }, _ = f.length > 1 ? (0, el.createMediaOnClickOverrides)(f, E) : {}, T = (0, eo.hasFlag)(n, eM.MessageFlags.IS_VOICE_MESSAGE), I = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: eL.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: T ? eC.renderVoiceMessageAudioComponent : eC.renderAudioComponent,
          renderImageComponent: eC.renderImageComponent,
          renderPlaintextFilePreview: eC.renderPlaintextFilePreview,
          renderVideoComponent: eC.renderVideoComponent,
          onPlay: (e, n, s) => {
            ea.default.track(eM.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: l.guild_id,
              channel_id: l.id,
              channel_type: l.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: s
            })
          },
          gifFavoriteButton: ej(t)
        },
        s = (0, et.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return s in _ && (n.onClick = _[s]), n
    });
    return (0, s.jsx)(es.default, {
      attachments: I
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (eD.has(t.type) || (0, er.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eC.renderImageComponent,
        renderVideoComponent: eC.renderVideoComponent,
        renderLinkComponent: eC.renderMaskedLinkComponent
      };
      if (t.type === eM.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let l = ec.default.safeParseWithQuery(t.url);
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
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, s.jsx)(D.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, s.jsx)(eA.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eM.ChannelTypes.GUILD_ANNOUNCEMENT || (0, eo.hasFlag)(e.flags, eM.MessageFlags.EPHEMERAL) ? null : (0, s.jsx)(p.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, eo.hasFlag)(e.flags, eM.MessageFlags.EPHEMERAL) ? (0, s.jsx)(en.default, {
      message: e,
      onDeleteMessage: () => {
        f.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, H.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: l
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, s.jsx)(V.default, {
      channel: n,
      isInteracting: l,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eM.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, s.jsx)(K.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!e.hasFlag(eM.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) || !this.props.isCurrentUser) return;
    let t = Date.now() - ed.default.extractTimestamp(e.id);
    if (!(t >= ex)) return (0, s.jsx)("div", {
      className: eL.threadRoleMentionFailure,
      children: eR.default.Messages.THREAD_ROLE_MENTION_FAILURE
    })
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, s.jsxs)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: eR.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: eR.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: eR.default.Messages.CANCEL,
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
        className: eL.confirmText,
        children: eR.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: eR.default.Messages.SUPPRESS_EMBED_TIP
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
      header: eR.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: eR.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: eR.default.Messages.CANCEL,
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
        className: eL.confirmText,
        children: eR.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== r.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, s.jsx)(eh.default, {
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
    return null == t || null == n || (null == l ? void 0 : l.type) !== T.InteractionTypes.APPLICATION_COMMAND ? null : (0, s.jsx)(em.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eM.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, s.jsx)(j.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eM.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, s.jsx)(k.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eM.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, s.jsx)(w.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eM.MessageEmbedTypes.VOICE_CHANNEL) return (0, s.jsx)(P.VoiceChannelInviteEmbed, {
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
    return 0 === t.length && 0 === n.length ? null : (0, s.jsx)(M.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, s.jsx)(G.default, {
      message: e,
      poll: t,
      className: eL.pollContainer
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
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderSocialProofingFileSizeNitroUpsell(t), E = this.renderEmbeds(t), _ = this.renderActivityInvite(t), T = this.renderReactions(t), I = this.renderPublishBump(t), m = this.renderEphemeralAccessories(t), N = this.renderStickersAccessories(t), p = this.renderThreadAccessories(t), S = this.renderComponentAccessories(t), A = this.renderThreadRoleMentionWarning(t), C = this.renderEmbeddedApplicationStart(t), h = this.renderInteractionPremiumUpsell(t), g = this.renderMediaPostEmbeds(t), M = this.renderSafetyPolicyNotice(t), O = this.renderSafetySystemNotification(t), R = this.renderVoiceChannelInvite(t, n), L = this.renderMediaObscureNotice(t), v = this.renderPoll(t, l);
    return null == o && null == c && null == E && null == _ && null == T && null == u && null == d && null == I && null == m && null == N && null == p && null == S && null == C && null == A && null == g && null == M && null != h && null == v && null == R ? null : (0, s.jsxs)("div", {
      id: (0, eS.getMessageAccessoriesId)(t),
      className: i(e, eL.container),
      children: [A, v, o, u, d, g, c, E, L, _, N, S, C, h, f, T, I, m, a && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), p, M, O, R]
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
      } = this.props, d = (0, ef.getObscureReasonForEmbed)(e, l, n, o, u);
      return e.type === eM.MessageEmbedTypes.GIFT ? null : (0, s.jsx)(ee.GIFAccessoryContext.Provider, {
        value: eU(e.url, e.image, e.video),
        children: (0, s.jsx)(q.default, {
          className: eL.embedWrapper,
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
    }, this.renderEmbedTitle = (e, t) => e.type === eM.MessageEmbedTypes.RICH ? y.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t, this.renderEmbedDescription = (e, t, n) => e.type === eM.MessageEmbedTypes.RICH ? y.default.parse(t, !0, {
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

function eG(e) {
  var t, n, l;
  let {
    channel: a,
    message: i,
    renderSuppressEmbeds: r
  } = e, u = (0, o.useStateFromStores)([z.default], () => z.default.getId()), d = W.InlineAttachmentMedia.useSetting(), c = W.InlineEmbedMedia.useSetting(), f = W.RenderEmbeds.useSetting(), E = f && !(0, e_.default)(e.message), _ = W.RenderReactions.useSetting(), T = W.GifAutoPlay.useSetting(), I = (0, o.useStateFromStores)([J.default], () => null == a.guild_id || J.default.canChatInGuild(a.guild_id), [a]), m = (0, o.useStateFromStores)([x.default], () => null != a.guild_id && x.default.isLurking(a.guild_id), [a]), p = (0, o.useStateFromStores)([Z.default], () => Z.default.isCurrentUserGuest(a.guild_id), [a]), S = (0, o.useStateFromStores)([Z.default, X.default], () => {
    var e, t;
    let n = X.default.getCurrentUser();
    return null !== (t = null != a.guild_id && null != n ? null === (e = Z.default.getMember(a.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: A,
    canManageMessages: C
  } = (0, o.useStateFromStoresObject)([Q.default], () => ({
    canAddNewReactions: I && Q.default.can(eM.Permissions.ADD_REACTIONS, a),
    canManageMessages: Q.default.can(eM.Permissions.MANAGE_MESSAGES, a)
  }), [I, a]), [, h] = (0, O.useCurrentUserCommunicationDisabled)(a.guild_id), M = (0, Y.useIsActiveChannelOrUnarchivableThread)(a), R = (u === i.author.id || C) && i.author.id !== eM.LOCAL_BOT_ID && !1 !== r && !(0, eo.hasFlag)(i.flags, eM.MessageFlags.EPHEMERAL) && M, L = u === i.author.id && M, v = i.author.id === u, P = i.isFirstMessageInForumPost(a), D = (0, eT.default)({
    channel: a,
    canChat: I,
    renderReactions: _,
    canAddNewReactions: A,
    isLurking: m,
    isGuest: p,
    communicationDisabled: h,
    isActiveChannelOrUnarchivableThread: M
  }), y = (0, N.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), j = (0, N.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = a.guild_id) && void 0 !== n ? n : "", (null !== (l = i.editedTimestamp) && void 0 !== l ? l : i.timestamp).valueOf()), G = (0, U.default)(null == a ? void 0 : a.id), B = (0, b.default)(i), F = (0, g.useShouldRedactExplicitContent)(a.id, i.author.id);
  return (0, s.jsx)(eb, {
    canSuppressEmbeds: R,
    canDeleteAttachments: L,
    ...D,
    disableReactionReads: !!P || D.disableReactionReads,
    ...e,
    isLurking: m && I,
    isGuest: p && I,
    isPendingMember: S && I,
    isCurrentUser: v,
    inlineAttachmentMedia: d,
    inlineEmbedMedia: c,
    renderEmbeds: E,
    gifAutoPlay: T,
    canRenderReferralEmbed: a.isDM(),
    poll: B,
    showListsAndHeaders: y.showListsAndHeaders || j.showListsAndHeaders,
    showMaskedLinks: y.showMaskedLinks || j.showMaskedLinks,
    shouldHideMediaOptions: G,
    shouldRedactExplicitContent: F
  })
}
eb.defaultProps = {
  renderEmbeds: !0,
  compact: !1
};
let eB = e => {
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
  } = e, E = W.InlineAttachmentMedia.useSetting(), _ = W.InlineEmbedMedia.useSetting(), T = W.RenderEmbeds.useSetting() && !a.author.isClyde(), I = W.GifAutoPlay.useSetting(), m = (0, N.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = a.editedTimestamp) && void 0 !== t ? t : a.timestamp).valueOf()), p = (0, N.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = i.guild_id) && void 0 !== n ? n : "", (null !== (l = a.editedTimestamp) && void 0 !== l ? l : a.timestamp).valueOf()), S = (0, U.default)(null == i ? void 0 : i.id), A = (0, g.useShouldRedactExplicitContent)(i.id, a.author.id);
  return (0, s.jsx)(eb, {
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
    shouldRedactExplicitContent: A
  })
}
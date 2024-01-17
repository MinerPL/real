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
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("637612"),
  o = n("446674"),
  u = n("713349"),
  d = n("233736"),
  c = n("77078"),
  f = n("819689"),
  m = n("710306"),
  E = n("501076"),
  _ = n("798609"),
  h = n("627697"),
  p = n("527088"),
  I = n("193865"),
  T = n("222650"),
  g = n("576060"),
  C = n("139514"),
  S = n("810044"),
  A = n("447435"),
  N = n("963119"),
  M = n("925685"),
  v = n("406043"),
  x = n("294519"),
  O = n("477558"),
  L = n("812224"),
  R = n("249393"),
  P = n("383247"),
  y = n("267567"),
  D = n("367376"),
  j = n("467475"),
  U = n("801177"),
  b = n("985883"),
  G = n("311830"),
  B = n("626301"),
  k = n("428786"),
  w = n("705423"),
  H = n("315021"),
  F = n("24373"),
  V = n("943508"),
  Y = n("300322"),
  W = n("415829"),
  K = n("845579"),
  z = n("271938"),
  J = n("26989"),
  Z = n("88093"),
  X = n("957255"),
  q = n("697218"),
  Q = n("560176"),
  $ = n("952368"),
  ee = n("328620"),
  et = n("688622"),
  en = n("124297"),
  ea = n("377502"),
  es = n("323273"),
  el = n("599110"),
  ei = n("718517"),
  er = n("240873"),
  eo = n("568734"),
  eu = n("449008"),
  ed = n("299039"),
  ec = n("253981"),
  ef = n("605160"),
  em = n("865446"),
  eE = n("913491"),
  e_ = n("583022"),
  eh = n("125247"),
  ep = n("885968"),
  eI = n("476714"),
  eT = n("808440"),
  eg = n("865343"),
  eC = n("5982"),
  eS = n("933629"),
  eA = n("600536"),
  eN = n("592707"),
  eM = n("49111"),
  ev = n("646718"),
  ex = n("782340"),
  eO = n("30554"),
  eL = n("872364");

function eR() {
  return (0, a.jsxs)("div", {
    className: eO.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: eL,
      className: eO.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: eO.nitroFileSizeUpsellText,
      children: ex.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, B.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let eP = new Set([eM.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, eM.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, eM.MessageEmbedTypes.APPLICATION_NEWS, eM.MessageEmbedTypes.POST_PREVIEW, eM.MessageEmbedTypes.SAFETY_POLICY_NOTICE, eM.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, eM.MessageEmbedTypes.VOICE_CHANNEL]),
  ey = 15 * ei.default.Millis.MINUTE,
  eD = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  ej = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(eI.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? u.GIFType.VIDEO : u.GIFType.IMAGE,
      className: eO.gifFavoriteButton
    })
  },
  eU = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: s
    } = e;
    return $.IMAGE_GIF_RE.test(e.filename) && null != n && null != s ? (0, a.jsx)(eI.default, {
      width: n,
      height: s,
      src: t,
      url: t,
      format: u.GIFType.IMAGE,
      className: eO.gifFavoriteButton
    }) : null
  };
class eb extends s.Component {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && eD.has(e))
  }
  shouldComponentUpdate(e, t) {
    var n, a;
    let {
      channel: s,
      message: l,
      poll: i
    } = this.props, {
      channel: r,
      message: o,
      poll: u
    } = e;
    return !(0, d.default)(this.state, t) || !(0, d.default)(this.props, e, ["message", "channel"]) || s.type !== r.type || u !== i || o.codedLinks !== l.codedLinks || o.flags !== l.flags || o.giftCodes !== l.giftCodes || o.attachments !== l.attachments || o.embeds !== l.embeds || o.components !== l.components || o.activity !== l.activity || (n = o.reactions, n !== (a = l.reactions) && (n.length !== a.length || !!n.some((e, t) => {
      let {
        emoji: n,
        count: s,
        burst_count: l
      } = e, {
        emoji: i,
        count: r,
        burst_count: o
      } = a[t];
      return l !== o || s !== r || n.id !== i.id || n.name !== i.name
    })))
  }
  renderSocialProofingFileSizeNitroUpsell(e) {
    let t = e.attachments.some(e => e.size > ev.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, em.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(eR, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === C.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eT.default, {
        code: s,
        author: e.author,
        getAcceptInviteContext: this.getAcceptInviteContext
      }, s) : null;
      if (n === C.CodedLinkType.TEMPLATE) return (0, a.jsx)(L.default, {
        code: s
      }, s);
      if (n === C.CodedLinkType.EVENT) return (0, a.jsx)(O.default, {
        code: s
      }, s);
      else if (n === C.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(eh.default, {
        code: s,
        messageData: e
      }, s);
      else if (n === C.CodedLinkType.APP_DIRECTORY_PROFILE) return (0, a.jsx)(p.default, {
        code: s,
        message: e
      }, s);
      else if (n === C.CodedLinkType.CLYDE_PROFILE) return (0, a.jsx)(g.default, {
        code: s
      }, s);
      else if (n === C.CodedLinkType.ACTIVITY_BOOKMARK) return (0, a.jsx)(h.default, {
        applicationId: s,
        message: e
      }, s);
      else if (n === C.CodedLinkType.GUILD_PRODUCT) return (0, a.jsx)(x.default, {
        code: s
      }, s);
      else if (n === C.CodedLinkType.SERVER_SHOP) return (0, a.jsx)(S.default, {
        guildId: s
      }, s);
      else throw Error("Unknown coded link type: ".concat(n))
    })
  }
  renderGiftCodes(e) {
    let {
      giftCodes: t,
      author: n,
      channel_id: s,
      type: l,
      content: i,
      giftInfo: r
    } = e, o = q.default.getCurrentUser();
    return null != o && t.length > 0 ? t.map(e => (0, a.jsx)("div", {
      className: eO.giftCodeContainer,
      children: (0, a.jsx)(m.default, {
        code: e,
        author: n,
        channelId: s,
        currentUser: o,
        type: l,
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
      canRenderReferralEmbed: s
    } = this.props;
    return n !== r.MessageTypes.PREMIUM_REFERRAL || null == t ? null : (0, a.jsx)("div", {
      className: eO.referralContainer,
      children: (0, a.jsx)(k.default, {
        userTrialOfferId: t,
        canRenderReferralEmbed: null != s && s
      })
    }, t)
  }
  renderReactions(e) {
    let {
      disableReactionCreates: t,
      disableReactionReads: n,
      disableReactionUpdates: s,
      isLurking: l,
      isGuest: i,
      isPendingMember: r,
      channel: o,
      forceAddReactions: u
    } = this.props;
    return n ? null : (0, a.jsx)(eN.default, {
      message: e,
      channel: o,
      disableReactionCreates: t,
      disableReactionUpdates: s,
      isLurking: l,
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
      channel: s,
      shouldRedactExplicitContent: l
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
    } = this.props, f = i.map(e => (0, es.carouselAssetFromAttachment)(e, c, l)).filter(eu.isNotNullish), m = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, E = f.length > 1 ? (0, es.createMediaOnClickOverrides)(f, m) : {}, _ = (0, eo.hasFlag)(n, eM.MessageFlags.IS_VOICE_MESSAGE), h = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: eO.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: _ ? eS.renderVoiceMessageAudioComponent : eS.renderAudioComponent,
          renderImageComponent: eS.renderImageComponent,
          renderPlaintextFilePreview: eS.renderPlaintextFilePreview,
          renderVideoComponent: eS.renderVideoComponent,
          onPlay: (e, n, a) => {
            el.default.track(eM.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: s.guild_id,
              channel_id: s.id,
              channel_type: s.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: a
            })
          },
          gifFavoriteButton: eU(t)
        },
        a = (0, et.getBestEffortSrcUrl)({
          proxyURL: t.proxy_url,
          url: t.url
        });
      return a in E && (n.onClick = E[a]), n
    });
    return (0, a.jsx)(ea.default, {
      attachments: h
    })
  }
  renderEmbeds(e) {
    let {
      renderEmbeds: t
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (eP.has(t.type) || (0, er.isServerShopArticleEmbed)(t)) return null;
      let n = {
        renderImageComponent: eS.renderImageComponent,
        renderVideoComponent: eS.renderVideoComponent,
        renderLinkComponent: eS.renderMaskedLinkComponent
      };
      if (t.type === eM.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let s = ec.default.safeParseWithQuery(t.url);
        if (null != s && null != s.pathname) {
          let l = s.pathname.split("/")[3];
          if (null != l) return (0, a.jsx)(E.default, {
            skuId: l,
            renderFallback: () => this.renderEmbed(t, n, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, n, e.id, e.channel_id)
    }) : null
  }
  renderComponentAccessories(e) {
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, a.jsx)(P.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, a.jsx)(eC.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eM.ChannelTypes.GUILD_ANNOUNCEMENT || (0, eo.hasFlag)(e.flags, eM.MessageFlags.EPHEMERAL) ? null : (0, a.jsx)(T.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, eo.hasFlag)(e.flags, eM.MessageFlags.EPHEMERAL) ? (0, a.jsx)(en.default, {
      message: e,
      onDeleteMessage: () => {
        f.default.dismissAutomatedMessage(e)
      }
    }) : null
  }
  renderStickersAccessories(e) {
    let t = (0, F.getMessageStickers)(e),
      {
        channel: n,
        isInteracting: s
      } = this.props;
    return 0 === t.length ? null : t.map(e => (0, a.jsx)(V.default, {
      channel: n,
      isInteracting: s,
      renderableSticker: e
    }, e.id))
  }
  renderThreadAccessories(e) {
    if (e.hasFlag(eM.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(W.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!e.hasFlag(eM.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) || !this.props.isCurrentUser) return;
    let t = Date.now() - ed.default.extractTimestamp(e.id);
    if (!(t >= ey)) return (0, a.jsx)("div", {
      className: eO.threadRoleMentionFailure,
      children: ex.default.Messages.THREAD_ROLE_MENTION_FAILURE
    })
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, a.jsxs)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ex.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: ex.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: ex.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showSuppressModal: !1
      }),
      onConfirm: () => {
        f.default.suppressEmbeds(e.id, t.id), this.setState({
          showSuppressModal: !1
        })
      },
      children: [(0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eO.confirmText,
        children: ex.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: ex.default.Messages.SUPPRESS_EMBED_TIP
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
    return (0, a.jsx)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ex.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: ex.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: ex.default.Messages.CANCEL,
      onCancel: () => this.setState({
        showRemoveAttachmentModal: !1,
        attachmentToDelete: null
      }),
      onConfirm: () => {
        let a = t.attachments.filter(e => e.id !== n.id);
        f.default.patchMessageAttachments(e.id, t.id, a), this.setState({
          showRemoveAttachmentModal: !1,
          attachmentToDelete: null
        })
      },
      children: (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        className: eO.confirmText,
        children: ex.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== r.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eA.default, {
      applicationId: t,
      guildId: this.props.channel.guild_id
    })
  }
  renderEmbeddedApplicationStart(e) {
    let {
      application: t,
      activityInstance: n,
      interaction: s
    } = e;
    return null == t || null == n || (null == s ? void 0 : s.type) !== _.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(ep.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eM.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(U.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eM.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(w.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eM.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(H.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eM.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(R.VoiceChannelInviteEmbed, {
      message: e,
      channel: t
    })
  }
  renderMediaObscureNotice(e) {
    if (0 === e.attachments.length && 0 === e.embeds.length) return null;
    let {
      obscuredAttachments: t,
      obscuredEmbeds: n
    } = (0, A.getObscuredMediaForMessage)(e);
    return 0 === t.length && 0 === n.length ? null : (0, a.jsx)(M.default, {
      message: e
    })
  }
  renderPoll(e, t) {
    if (null != t) return (0, a.jsx)(G.default, {
      message: e,
      poll: t,
      className: eO.pollContainer
    })
  }
  render() {
    let {
      className: e,
      message: t,
      channel: n,
      poll: s
    } = this.props, {
      showSuppressModal: l,
      showRemoveAttachmentModal: r
    } = this.state, o = this.renderCodedLinks(t), u = this.renderGiftCodes(t), d = this.renderReferralTrial(t), c = this.renderAttachments(t), f = this.renderSocialProofingFileSizeNitroUpsell(t), m = this.renderEmbeds(t), E = this.renderActivityInvite(t), _ = this.renderReactions(t), h = this.renderPublishBump(t), p = this.renderEphemeralAccessories(t), I = this.renderStickersAccessories(t), T = this.renderThreadAccessories(t), g = this.renderComponentAccessories(t), C = this.renderThreadRoleMentionWarning(t), S = this.renderEmbeddedApplicationStart(t), A = this.renderInteractionPremiumUpsell(t), N = this.renderMediaPostEmbeds(t), M = this.renderSafetyPolicyNotice(t), v = this.renderSafetySystemNotification(t), x = this.renderVoiceChannelInvite(t, n), O = this.renderMediaObscureNotice(t), L = this.renderPoll(t, s);
    return null == o && null == c && null == m && null == E && null == _ && null == u && null == d && null == h && null == p && null == I && null == T && null == g && null == S && null == C && null == N && null == M && null != A && null == L && null == x ? null : (0, a.jsxs)("div", {
      id: (0, eg.getMessageAccessoriesId)(t),
      className: i(e, eO.container),
      children: [C, L, o, u, d, N, c, m, O, E, I, g, S, A, f, _, h, p, l && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), T, M, v, x]
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
    }, this.renderEmbed = (e, t, n, s) => {
      let {
        gifAutoPlay: l,
        inlineEmbedMedia: i,
        canSuppressEmbeds: r,
        hasSpoilerEmbeds: o,
        shouldRedactExplicitContent: u
      } = this.props, d = (0, ef.getObscureReasonForEmbed)(e, s, n, o, u);
      return e.type === eM.MessageEmbedTypes.GIFT ? null : (0, a.jsx)(ee.GIFAccessoryContext.Provider, {
        value: ej(e.url, e.image, e.video),
        children: (0, a.jsx)(Q.default, {
          className: eO.embedWrapper,
          embed: e,
          obscureReason: null != d ? d : void 0,
          autoPlayGif: l,
          hideMedia: !i,
          onSuppressEmbed: r ? this.handleEmbedSuppressed : void 0,
          renderTitle: this.renderEmbedTitle,
          renderDescription: this.renderEmbedDescription,
          messageId: n,
          channelId: s,
          ...t
        })
      }, e.id)
    }, this.renderEmbedTitle = (e, t) => e.type === eM.MessageEmbedTypes.RICH ? D.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t, this.renderEmbedDescription = (e, t, n) => e.type === eM.MessageEmbedTypes.RICH ? D.default.parse(t, !0, {
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
  var t, n, s;
  let {
    channel: l,
    message: i,
    renderSuppressEmbeds: r
  } = e, u = (0, o.useStateFromStores)([z.default], () => z.default.getId()), d = K.InlineAttachmentMedia.useSetting(), c = K.InlineEmbedMedia.useSetting(), f = K.RenderEmbeds.useSetting(), m = f && !(0, eE.default)(e.message), E = K.RenderReactions.useSetting(), _ = K.GifAutoPlay.useSetting(), h = (0, o.useStateFromStores)([Z.default], () => null == l.guild_id || Z.default.canChatInGuild(l.guild_id), [l]), p = (0, o.useStateFromStores)([y.default], () => null != l.guild_id && y.default.isLurking(l.guild_id), [l]), T = (0, o.useStateFromStores)([J.default], () => J.default.isCurrentUserGuest(l.guild_id), [l]), g = (0, o.useStateFromStores)([J.default, q.default], () => {
    var e, t;
    let n = q.default.getCurrentUser();
    return null !== (t = null != l.guild_id && null != n ? null === (e = J.default.getMember(l.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: C,
    canManageMessages: S
  } = (0, o.useStateFromStoresObject)([X.default], () => ({
    canAddNewReactions: h && X.default.can(eM.Permissions.ADD_REACTIONS, l),
    canManageMessages: X.default.can(eM.Permissions.MANAGE_MESSAGES, l)
  }), [h, l]), [, A] = (0, v.useCurrentUserCommunicationDisabled)(l.guild_id), M = (0, Y.useIsActiveChannelOrUnarchivableThread)(l), x = (u === i.author.id || S) && i.author.id !== eM.LOCAL_BOT_ID && !1 !== r && !(0, eo.hasFlag)(i.flags, eM.MessageFlags.EPHEMERAL) && M, O = u === i.author.id && M, L = i.author.id === u, R = i.isFirstMessageInForumPost(l), P = (0, e_.default)({
    channel: l,
    canChat: h,
    renderReactions: E,
    canAddNewReactions: C,
    isLurking: p,
    isGuest: T,
    communicationDisabled: A,
    isActiveChannelOrUnarchivableThread: M
  }), D = (0, I.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), U = (0, I.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = l.guild_id) && void 0 !== n ? n : "", (null !== (s = i.editedTimestamp) && void 0 !== s ? s : i.timestamp).valueOf()), G = (0, j.default)(null == l ? void 0 : l.id), B = (0, b.default)(i), k = (0, N.useShouldRedactExplicitContent)(l.id, i.author.id);
  return (0, a.jsx)(eb, {
    canSuppressEmbeds: x,
    canDeleteAttachments: O,
    ...P,
    disableReactionReads: !!R || P.disableReactionReads,
    ...e,
    isLurking: p && h,
    isGuest: T && h,
    isPendingMember: g && h,
    isCurrentUser: L,
    inlineAttachmentMedia: d,
    inlineEmbedMedia: c,
    renderEmbeds: m,
    gifAutoPlay: _,
    canRenderReferralEmbed: l.isDM(),
    poll: B,
    showListsAndHeaders: D.showListsAndHeaders || U.showListsAndHeaders,
    showMaskedLinks: D.showMaskedLinks || U.showMaskedLinks,
    shouldHideMediaOptions: G,
    shouldRedactExplicitContent: k
  })
}
eb.defaultProps = {
  renderEmbeds: !0,
  compact: !1
};
let eB = e => {
  var t, n, s;
  let {
    message: l,
    channel: i,
    disableReactionReads: r = !1,
    renderComponentAccessory: o = !1,
    renderThreadAccessory: u = !1,
    disableReactionCreates: d = !0,
    disableReactionUpdates: c = !0,
    ...f
  } = e, m = K.InlineAttachmentMedia.useSetting(), E = K.InlineEmbedMedia.useSetting(), _ = K.RenderEmbeds.useSetting() && !l.author.isClyde(), h = K.GifAutoPlay.useSetting(), p = (0, I.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = l.editedTimestamp) && void 0 !== t ? t : l.timestamp).valueOf()), T = (0, I.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = i.guild_id) && void 0 !== n ? n : "", (null !== (s = l.editedTimestamp) && void 0 !== s ? s : l.timestamp).valueOf()), g = (0, j.default)(null == i ? void 0 : i.id), C = (0, N.useShouldRedactExplicitContent)(i.id, l.author.id);
  return (0, a.jsx)(eb, {
    ...f,
    message: l,
    channel: i,
    disableReactionReads: r,
    disableReactionCreates: d,
    disableReactionUpdates: c,
    canSuppressEmbeds: !1,
    canDeleteAttachments: !1,
    renderComponentAccessory: o,
    renderThreadAccessory: u,
    inlineAttachmentMedia: m,
    inlineEmbedMedia: E,
    renderEmbeds: _,
    gifAutoPlay: h,
    showListsAndHeaders: p.showListsAndHeaders || T.showListsAndHeaders,
    showMaskedLinks: p.showMaskedLinks || T.showMaskedLinks,
    shouldHideMediaOptions: g,
    shouldRedactExplicitContent: C
  })
}
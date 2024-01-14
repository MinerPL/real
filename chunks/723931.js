"use strict";
n.r(t), n.d(t, {
  MessageAccessories: function() {
    return ej
  },
  default: function() {
    return eU
  },
  SimpleMessageAccessories: function() {
    return eb
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
  y = n("383247"),
  P = n("267567"),
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
  ei = n("240873"),
  er = n("568734"),
  eo = n("449008"),
  eu = n("299039"),
  ed = n("253981"),
  ec = n("605160"),
  ef = n("865446"),
  em = n("913491"),
  eE = n("583022"),
  e_ = n("125247"),
  eh = n("885968"),
  ep = n("476714"),
  eI = n("808440"),
  eT = n("865343"),
  eg = n("5982"),
  eC = n("933629"),
  eS = n("600536"),
  eA = n("592707"),
  eN = n("49111"),
  eM = n("646718"),
  ev = n("782340"),
  ex = n("30554"),
  eO = n("872364");

function eL() {
  return (0, a.jsxs)("div", {
    className: ex.nitroFileSizeUpsell,
    children: [(0, a.jsx)("img", {
      src: eO,
      className: ex.nitroBadgeSvg,
      alt: ""
    }), (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: ex.nitroFileSizeUpsellText,
      children: ev.default.Messages.LARGE_FILE_UPLOAD_POWERED_BY_NITRO.format({
        onClick: () => (0, B.navigateToPremiumMarketingPage)()
      })
    })]
  })
}
let eR = new Set([eN.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, eN.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, eN.MessageEmbedTypes.APPLICATION_NEWS, eN.MessageEmbedTypes.POST_PREVIEW, eN.MessageEmbedTypes.SAFETY_POLICY_NOTICE, eN.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, eN.MessageEmbedTypes.VOICE_CHANNEL]),
  ey = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
  eP = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let {
      url: l,
      proxyURL: i,
      width: r,
      height: o
    } = s;
    return (0, a.jsx)(ep.default, {
      width: r,
      height: o,
      src: null != i && "" !== i ? i : l,
      url: null != e && "" !== e ? e : null != i && "" !== i ? i : l,
      format: null != n ? u.GIFType.VIDEO : u.GIFType.IMAGE,
      className: ex.gifFavoriteButton
    })
  },
  eD = e => () => {
    let {
      proxy_url: t,
      width: n,
      height: s
    } = e;
    return $.IMAGE_GIF_RE.test(e.filename) && null != n && null != s ? (0, a.jsx)(ep.default, {
      width: n,
      height: s,
      src: t,
      url: t,
      format: u.GIFType.IMAGE,
      className: ex.gifFavoriteButton
    }) : null
  };
class ej extends s.Component {
  shouldRenderInvite(e) {
    let {
      channel: t
    } = this.props;
    return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && ey.has(e))
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
    let t = e.attachments.some(e => e.size > eM.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE);
    return (0, ef.shouldShowNitroUpsell)("attachment") && t ? (0, a.jsx)(eL, {}) : null
  }
  renderCodedLinks(e) {
    return 0 === e.codedLinks.length ? null : e.codedLinks.map(t => {
      let {
        type: n,
        code: s
      } = t;
      if (n === C.CodedLinkType.INVITE) return this.shouldRenderInvite(s) ? (0, a.jsx)(eI.default, {
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
      else if (n === C.CodedLinkType.CHANNEL_LINK) return (0, a.jsx)(e_.default, {
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
      className: ex.giftCodeContainer,
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
      className: ex.referralContainer,
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
    return n ? null : (0, a.jsx)(eA.default, {
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
    let i = t.filter(e => null == e.flags || !(0, er.hasFlag)(e.flags, eN.MessageAttachmentFlags.IS_THUMBNAIL));
    if (0 === i.length) return null;
    let {
      gifAutoPlay: r,
      canDeleteAttachments: o,
      inlineAttachmentMedia: u,
      onAttachmentContextMenu: d,
      shouldHideMediaOptions: c
    } = this.props, f = i.map(e => (0, es.carouselAssetFromAttachment)(e, c, l)).filter(eo.isNotNullish), m = {
      source: "Media Mosaic",
      guild_id: s.guild_id,
      channel_id: s.id,
      channel_type: s.type
    }, E = f.length > 1 ? (0, es.createMediaOnClickOverrides)(f, m) : {}, _ = (0, er.hasFlag)(n, eN.MessageFlags.IS_VOICE_MESSAGE), h = i.map(t => {
      let n = {
          message: e,
          attachment: t,
          autoPlayGif: r,
          canRemoveAttachment: o && (i.length > 1 || "" !== e.content),
          className: ex.embedWrapper,
          inlineMedia: u,
          onContextMenu: null != d ? e => {
            e.stopPropagation(), e.preventDefault(), d(e, t)
          } : void 0,
          onRemoveAttachment: this.handleRemoveAttachment,
          renderAudioComponent: _ ? eC.renderVoiceMessageAudioComponent : eC.renderAudioComponent,
          renderImageComponent: eC.renderImageComponent,
          renderPlaintextFilePreview: eC.renderPlaintextFilePreview,
          renderVideoComponent: eC.renderVideoComponent,
          onPlay: (e, n, a) => {
            el.default.track(eN.AnalyticEvents.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
              guild_id: s.guild_id,
              channel_id: s.id,
              channel_type: s.type,
              type: t.content_type,
              flags: t.flags,
              size: t.size,
              duration: a
            })
          },
          gifFavoriteButton: eD(t)
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
      renderEmbeds: t,
      showClydeAiEmbeds: n
    } = this.props;
    return 0 !== e.embeds.length && t ? e.embeds.map(t => {
      if (eR.has(t.type) || !n && (0, ei.isClydeAiThoughtsEmbed)(t) || (0, ei.isServerShopArticleEmbed)(t)) return null;
      let s = {
        renderImageComponent: eC.renderImageComponent,
        renderVideoComponent: eC.renderVideoComponent,
        renderLinkComponent: eC.renderMaskedLinkComponent
      };
      if (t.type === eN.MessageEmbedTypes.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && "Discord" === t.provider.name) {
        let n = ed.default.safeParseWithQuery(t.url);
        if (null != n && null != n.pathname) {
          let l = n.pathname.split("/")[3];
          if (null != l) return (0, a.jsx)(E.default, {
            skuId: l,
            renderFallback: () => this.renderEmbed(t, s, e.id, e.channel_id)
          }, t.id)
        }
      }
      return this.renderEmbed(t, s, e.id, e.channel_id)
    }) : null
  }
  renderComponentAccessories(e) {
    return null == e.components || 0 === e.components.length || !1 === this.props.renderComponentAccessory ? null : (0, a.jsx)(y.default, {
      message: e
    })
  }
  renderActivityInvite(e) {
    if (null == e.activity) return null;
    let {
      channel: t
    } = this.props;
    return (0, a.jsx)(eg.default, {
      channel: t,
      message: e,
      hideParty: !1
    })
  }
  renderPublishBump(e) {
    let {
      channel: t
    } = this.props;
    return t.type !== eN.ChannelTypes.GUILD_ANNOUNCEMENT || (0, er.hasFlag)(e.flags, eN.MessageFlags.EPHEMERAL) ? null : (0, a.jsx)(T.default, {
      channelId: e.channel_id,
      messageId: e.id
    })
  }
  renderEphemeralAccessories(e) {
    return (0, er.hasFlag)(e.flags, eN.MessageFlags.EPHEMERAL) ? (0, a.jsx)(en.default, {
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
    if (e.hasFlag(eN.MessageFlags.HAS_THREAD) && !1 !== this.props.renderThreadAccessory) return (0, a.jsx)(W.default, {
      message: e,
      compact: this.props.compact
    })
  }
  renderThreadRoleMentionWarning(e) {
    if (!e.hasFlag(eN.MessageFlags.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) || !this.props.isCurrentUser) return;
    let t = Date.now() - eu.default.extractTimestamp(e.id);
    if (!(t >= 9e5)) return (0, a.jsx)("div", {
      className: ex.threadRoleMentionFailure,
      children: ev.default.Messages.THREAD_ROLE_MENTION_FAILURE
    })
  }
  renderSuppressConfirmModal() {
    let {
      channel: e,
      message: t
    } = this.props;
    return (0, a.jsxs)(c.DeclarativeConfirmModal, {
      dismissable: !0,
      header: ev.default.Messages.SUPPRESS_EMBED_TITLE,
      confirmText: ev.default.Messages.SUPPRESS_EMBED_CONFIRM,
      cancelText: ev.default.Messages.CANCEL,
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
        className: ex.confirmText,
        children: ev.default.Messages.SUPPRESS_EMBED_BODY
      }), (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: ev.default.Messages.SUPPRESS_EMBED_TIP
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
      header: ev.default.Messages.REMOVE_ATTACHMENT_TITLE,
      confirmText: ev.default.Messages.REMOVE_ATTACHMENT_CONFIRM,
      cancelText: ev.default.Messages.CANCEL,
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
        className: ex.confirmText,
        children: ev.default.Messages.REMOVE_ATTACHMENT_BODY
      })
    })
  }
  renderInteractionPremiumUpsell(e) {
    let t = e.applicationId;
    return e.type !== r.MessageTypes.INTERACTION_PREMIUM_UPSELL || null == t ? null : (0, a.jsx)(eS.default, {
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
    return null == t || null == n || (null == s ? void 0 : s.type) !== _.InteractionTypes.APPLICATION_COMMAND ? null : (0, a.jsx)(eh.default, {
      application: t,
      activityInstance: n,
      channelId: this.props.channel.id,
      guildId: this.props.channel.guild_id
    })
  }
  renderMediaPostEmbeds(e) {
    return e.embeds.flatMap(t => t.type !== eN.MessageEmbedTypes.POST_PREVIEW || null == t.url ? [] : (0, a.jsx)(U.default, {
      embedUrl: t.url,
      message: e,
      channel: this.props.channel
    }, t.id))
  }
  renderSafetyPolicyNotice(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eN.MessageEmbedTypes.SAFETY_POLICY_NOTICE ? (0, a.jsx)(w.SafetyPolicyNotice, {
      message: e
    }) : null
  }
  renderSafetySystemNotification(e) {
    return 1 === e.embeds.length && e.embeds[0].type === eN.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION ? (0, a.jsx)(H.SafetySystemNotification, {
      embed: e.embeds[0]
    }) : null
  }
  renderVoiceChannelInvite(e, t) {
    if (1 === e.embeds.length && e.embeds[0].type === eN.MessageEmbedTypes.VOICE_CHANNEL) return (0, a.jsx)(R.VoiceChannelInviteEmbed, {
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
      className: ex.pollContainer
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
      id: (0, eT.getMessageAccessoriesId)(t),
      className: i(e, ex.container),
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
      } = this.props, d = (0, ec.getObscureReasonForEmbed)(e, s, n, o, u);
      return e.type === eN.MessageEmbedTypes.GIFT ? null : (0, a.jsx)(ee.GIFAccessoryContext.Provider, {
        value: eP(e.url, e.image, e.video),
        children: (0, a.jsx)(Q.default, {
          className: ex.embedWrapper,
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
    }, this.renderEmbedTitle = (e, t) => e.type === eN.MessageEmbedTypes.RICH ? D.default.parseEmbedTitle(t, !0, {
      channelId: this.props.channel.id
    }) : t, this.renderEmbedDescription = (e, t, n) => e.type === eN.MessageEmbedTypes.RICH ? D.default.parse(t, !0, {
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

function eU(e) {
  var t, n, s;
  let {
    channel: l,
    message: i,
    renderSuppressEmbeds: r
  } = e, u = (0, o.useStateFromStores)([z.default], () => z.default.getId()), d = K.InlineAttachmentMedia.useSetting(), c = K.InlineEmbedMedia.useSetting(), f = K.RenderEmbeds.useSetting(), m = f && !(0, em.default)(e.message), E = K.RenderReactions.useSetting(), _ = K.GifAutoPlay.useSetting(), h = (0, o.useStateFromStores)([Z.default], () => null == l.guild_id || Z.default.canChatInGuild(l.guild_id), [l]), p = (0, o.useStateFromStores)([P.default], () => null != l.guild_id && P.default.isLurking(l.guild_id), [l]), T = (0, o.useStateFromStores)([J.default], () => J.default.isCurrentUserGuest(l.guild_id), [l]), g = (0, o.useStateFromStores)([J.default, q.default], () => {
    var e, t;
    let n = q.default.getCurrentUser();
    return null !== (t = null != l.guild_id && null != n ? null === (e = J.default.getMember(l.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
  }), {
    canAddNewReactions: C,
    canManageMessages: S
  } = (0, o.useStateFromStoresObject)([X.default], () => ({
    canAddNewReactions: h && X.default.can(eN.Permissions.ADD_REACTIONS, l),
    canManageMessages: X.default.can(eN.Permissions.MANAGE_MESSAGES, l)
  }), [h, l]), [, A] = (0, v.useCurrentUserCommunicationDisabled)(l.guild_id), M = (0, Y.useIsActiveChannelOrUnarchivableThread)(l), x = (u === i.author.id || S) && i.author.id !== eN.LOCAL_BOT_ID && !i.author.isClyde() && !1 !== r && !(0, er.hasFlag)(i.flags, eN.MessageFlags.EPHEMERAL) && M, O = u === i.author.id && M, L = i.author.id === u, R = i.isFirstMessageInForumPost(l), y = (0, eE.default)({
    channel: l,
    canChat: h,
    renderReactions: E,
    canAddNewReactions: C,
    isLurking: p,
    isGuest: T,
    communicationDisabled: A,
    isActiveChannelOrUnarchivableThread: M
  }), D = (0, I.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()), U = (0, I.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = l.guild_id) && void 0 !== n ? n : "", (null !== (s = i.editedTimestamp) && void 0 !== s ? s : i.timestamp).valueOf()), G = (0, j.default)(null == l ? void 0 : l.id), B = (0, b.default)(i), k = (0, N.useShouldRedactExplicitContent)(l.id, i.author.id);
  return (0, a.jsx)(ej, {
    canSuppressEmbeds: x,
    canDeleteAttachments: O,
    ...y,
    disableReactionReads: !!R || y.disableReactionReads,
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
    showClydeAiEmbeds: !!(0, eo.isNotNullish)(e.showClydeAiEmbeds) && e.showClydeAiEmbeds,
    shouldRedactExplicitContent: k
  })
}
ej.defaultProps = {
  renderEmbeds: !0,
  compact: !1
};
let eb = e => {
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
  return (0, a.jsx)(ej, {
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
    showClydeAiEmbeds: !1,
    shouldRedactExplicitContent: C
  })
}
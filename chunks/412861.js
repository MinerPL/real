"use strict";
l.r(t), l.d(t, {
  showUploadFileSizeExceededError: function() {
    return g
  },
  promptToUpload: function() {
    return L
  }
}), l("424973"), l("222007"), l("70102");
var a = l("255397"),
  n = l("81594"),
  i = l("783480"),
  s = l("336522"),
  r = l("966724"),
  o = l("716241"),
  d = l("191145"),
  u = l("585722"),
  c = l("697218"),
  f = l("599110"),
  p = l("254490"),
  m = l("719923"),
  h = l("834021"),
  E = l("49111"),
  v = l("894488"),
  _ = l("646718"),
  C = l("782340");

function g(e, t) {
  let l = c.default.getCurrentUser(),
    a = e.getGuildId(),
    n = p.maxFileSize(a),
    i = [],
    r = 0,
    d = 0,
    u = 0,
    f = [];
  for (let e of t) u += 1, r += e.size, i.push(e.size), e.size > d && (d = e.size), null != e.type ? f.push(e.type) : f.push("unknown");
  if (d > n) {
    (0, o.trackWithMetadata)(E.AnalyticEvents.FILE_SIZE_LIMIT_EXCEEDED, {
      channel_id: e.id,
      guild_id: a,
      user_individual_file_size_limit: n,
      pre_compression_file_sizes: i,
      pre_compression_aggregate_file_size: r,
      num_attachments: u,
      error_type: v.FileUploadErrorTypes.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
      attachment_mimetypes: f
    }), (0, s.openUploadError)({
      title: C.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
      help: (0, h.getErrorHelp)(l, a),
      showPremiumUpsell: !(0, m.isPremiumExactly)(l, _.PremiumTypes.TIER_2),
      fileSize: d
    });
    return
  }(0, s.openUploadError)({
    title: C.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: C.default.Messages.UPLOAD_AREA_REQUEST_LIMIT_HELP.format({
      maxSize: p.sizeString(p.getMaxRequestSize())
    })
  })
}

function L(e, t, l) {
  let {
    filesMetadata: o,
    requireConfirm: c = !0,
    showLargeMessageDialog: p = !1,
    isThumbnail: m = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (e.length < 1) return;
  if (null != o && o.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
  let v = t.getGuildId();
  if ((0, h.filesExceedUploadLimits)(e, v)) {
    g(t, e);
    return
  }
  if (u.default.getUploadCount(t.id, l) + e.length > E.MAX_UPLOAD_COUNT) {
    (0, s.openUploadError)({
      title: C.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
      help: C.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
        limit: E.MAX_UPLOAD_COUNT
      })
    }), f.default.track(E.AnalyticEvents.UPLOAD_FILE_LIMIT_ERROR, {
      existing_count: u.default.getUploadCount(t.id, l),
      new_count: e.length
    });
    return
  }
  if ((t.type === E.ChannelTypes.GUILD_VOICE || t.type === E.ChannelTypes.GUILD_STAGE_VOICE) && !d.default.getChatOpen(t.id) && a.default.updateChatOpen(t.id, !0), c) {
    let a = Array.from(e).map((e, t) => ({
      file: e,
      platform: r.UploadPlatform.WEB,
      isThumbnail: m,
      ...null == o ? void 0 : o[t]
    }));
    n.default.addFiles({
      files: a,
      channelId: t.id,
      showLargeMessageDialog: p,
      draftType: l
    })
  } else i.default.instantBatchUpload({
    channelId: t.id,
    files: e,
    draftType: l,
    isThumbnail: m,
    filesMetadata: o
  })
}
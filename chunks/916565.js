"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  },
  retryCommandMessage: function() {
    return H
  }
}), n("424973"), n("222007"), n("881410"), n("686130"), n("781738");
var l = n("627445"),
  i = n.n(l),
  o = n("913144"),
  a = n("819689"),
  u = n("81594"),
  r = n("798609"),
  d = n("979911"),
  c = n("981112"),
  p = n("716241"),
  m = n("118851"),
  s = n("385976"),
  f = n("274800"),
  g = n("752598"),
  A = n("815297"),
  y = n("263024"),
  C = n("915639"),
  T = n("305961"),
  v = n("585722"),
  I = n("697218"),
  _ = n("254490"),
  h = n("449008"),
  E = n("980134"),
  O = n("507217"),
  M = n("246598"),
  N = n("118200"),
  x = n("240249"),
  S = n("524768"),
  L = n("389153"),
  b = n("317041"),
  U = n("49111"),
  P = n("894488"),
  R = n("782340");
let D = (e, t) => {
    var n;
    return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
  },
  k = function(e, t, n) {
    var l, i;
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
      a = e.name === (null === (l = n.autocomplete) || void 0 === l ? void 0 : l.name);
    if (a) return n.autocomplete.query;
    if ("" === t) return null;
    let u = M.default.getAutocompleteLastChoices(n.channel.id, e.name);
    return null != u ? null !== (i = D(u, t)) && void 0 !== i ? i : o(t) : o(t)
  },
  w = e => {
    let t = e.toLowerCase() === b.TRUE_OPTION_NAME.toLowerCase(),
      n = e.toLowerCase() === b.FALSE_OPTION_NAME.toLowerCase();
    return t || n ? t : null
  };
async function j(e) {
  var t, n, l, a, d, c, s, f, g, A, T, I, _, h, E;
  let {
    command: M,
    optionValues: x,
    context: b,
    commandTargetId: P,
    maxSizeCallback: R,
    commandOrigin: j = S.CommandOrigin.CHAT
  } = e;
  null == b.autocomplete && o.default.dispatch({
    type: "APPLICATION_COMMAND_USED",
    context: b,
    command: M
  }), await y.default.unarchiveThreadIfNecessary(b.channel.id);
  let H = [],
    z = [],
    B = (0, L.getCommandAttachmentDraftType)(j);
  if (null != M.options)
    for (let e of M.options) {
      if (e.type === r.ApplicationCommandOptionType.SUB_COMMAND || e.type === r.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in x)) continue;
      let t = (null === (l = b.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0,
        n = null;
      if (e.type === r.ApplicationCommandOptionType.STRING) {
        let l = null !== (d = null === (a = N.getOptionalString(x, e.name)) || void 0 === a ? void 0 : a.trim()) && void 0 !== d ? d : "";
        n = null != e.choices ? D(e.choices, l) : e.autocomplete ? k(e, l, b) : l, i(null != b.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && H.push({
          type: e.type,
          name: e.name,
          value: n,
          focused: t
        });
        continue
      }
      if (e.type === r.ApplicationCommandOptionType.ATTACHMENT) {
        if (null != b.autocomplete) continue;
        let l = v.default.getUpload(b.channel.id, e.name, B);
        if (null == l) continue;
        let i = v.default.getUploads(b.channel.id, B).findIndex(e => l.id === e.id);
        z.push(l), n = i, H.push({
          type: e.type,
          name: e.name,
          value: n,
          focused: t
        });
        continue
      }
      let o = N.filterEmpty(x[e.name]);
      if (i(null != b.autocomplete || 1 === o.length, 'Option "'.concat(e.name, '" expects a single option type')), null == o[0] && !t) continue;
      let u = null !== (c = o[0]) && void 0 !== c ? c : {
        type: "text",
        text: ""
      };
      switch (e.type) {
        case r.ApplicationCommandOptionType.CHANNEL:
          if ("channelMention" === u.type) n = u.channelId;
          else if ("text" === u.type) {
            if ((0, L.isSnowflake)(u.text)) n = u.text.trim();
            else {
              let e = (0, m.resolveApplicationCommandOption)(u.text, null === (s = b.guild) || void 0 === s ? void 0 : s.id, b.channel.id);
              i((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(u.text)), n = e.channelId
            }
          }
          break;
        case r.ApplicationCommandOptionType.ROLE:
          if ("roleMention" === u.type) n = u.roleId;
          else if ("text" === u.type) {
            if ((0, L.isSnowflake)(u.text)) n = u.text.trim();
            else {
              let e = (0, m.resolveApplicationCommandOption)(u.text, null === (f = b.guild) || void 0 === f ? void 0 : f.id, b.channel.id, {
                allowUsers: !1
              });
              i((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(u.text)), n = e.roleId
            }
          } else "textMention" === u.type && "@everyone" === u.text && (n = null === (g = b.guild) || void 0 === g ? void 0 : g.id);
          break;
        case r.ApplicationCommandOptionType.USER:
          if ("userMention" === u.type) n = u.userId;
          else if ("text" === u.type) {
            if ((0, L.isSnowflake)(u.text)) n = u.text.trim();
            else {
              let e = (0, m.resolveApplicationCommandOption)(u.text, null === (A = b.guild) || void 0 === A ? void 0 : A.id, b.channel.id, {
                allowRoles: !1
              });
              i((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(u.text)), n = e.userId
            }
          }
          break;
        case r.ApplicationCommandOptionType.MENTIONABLE:
          if ("userMention" === u.type) n = u.userId;
          else if ("roleMention" === u.type) n = u.roleId;
          else if ("textMention" === u.type && "@everyone" === u.text) n = null === (T = b.guild) || void 0 === T ? void 0 : T.id;
          else if ("text" === u.type) {
            if ((0, L.isSnowflake)(u.text)) n = u.text.trim();
            else {
              let e = (0, m.resolveApplicationCommandOption)(u.text, null === (I = b.guild) || void 0 === I ? void 0 : I.id, b.channel.id);
              (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (_ = b.guild) || void 0 === _ ? void 0 : _.id : i(!1, "Failed to resolve ".concat(u.text))
            }
          }
          break;
        case r.ApplicationCommandOptionType.BOOLEAN:
          "text" === u.type && (n = w(u.text.trim()));
          break;
        case r.ApplicationCommandOptionType.INTEGER:
          if ("text" === u.type) {
            let t = u.text.trim();
            n = null != e.choices ? Number(D(e.choices, t)) : e.autocomplete ? k(e, t, b, Number) : Number(N.normalizeNumericString(C.default.locale, t))
          }
          break;
        case r.ApplicationCommandOptionType.NUMBER:
          if ("text" === u.type) {
            let t = u.text.trim();
            n = null != e.choices ? Number(D(e.choices, t)) : e.autocomplete ? k(e, t, b, Number) : Number(N.normalizeNumericString(C.default.locale, t))
          }
          break;
        default:
          i(!1, "Unsupported option type: ".concat(e.type));
          continue
      }
      i(null != b.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && H.push({
        type: e.type,
        name: e.name,
        value: n,
        focused: t
      })
    }
  if (null != M.subCommandPath)
    for (let e = M.subCommandPath.length - 1; e >= 0; e -= 1) {
      let {
        name: t,
        type: n
      } = M.subCommandPath[e];
      H = [{
        type: n,
        name: t,
        options: H
      }]
    }
  if (null != M.execute) return p.default.trackWithMetadata(U.AnalyticEvents.APPLICATION_COMMAND_USED, {
    command_id: M.id,
    application_id: M.applicationId,
    command_type: M.type,
    location: j === S.CommandOrigin.APPLICATION_LAUNCHER ? S.ApplicationCommandTriggerLocations.APP_LAUNCHER : S.ApplicationCommandTriggerLocations.SLASH_UI
  }), M.execute(H, b);
  if (M.inputType === S.ApplicationCommandInputType.BUILT_IN || M.inputType === S.ApplicationCommandInputType.BUILT_IN_TEXT || M.inputType === S.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
  let Y = {
    version: M.version,
    id: null !== (h = null === (t = M.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== h ? h : M.id,
    guild_id: M.guildId,
    name: null !== (E = null === (n = M.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== E ? E : M.name,
    type: M.type,
    options: H,
    application_command: M.rootCommand
  };
  null != P && (Y.target_id = P), null != b.autocomplete ? (0, O.performAutocomplete)(M, b, Y) : (u.default.clearAll(b.channel.id, B), G({
    applicationId: M.applicationId,
    data: Y,
    context: b,
    attachments: z,
    maxSizeCallback: R,
    onMessageSuccess: () => {
      F(x)
    },
    commandDisplayName: M.displayName,
    analytics_location: j === S.CommandOrigin.APPLICATION_LAUNCHER ? S.ApplicationCommandTriggerLocations.APP_LAUNCHER : S.ApplicationCommandTriggerLocations.SLASH_UI
  }))
}
let F = e => {
    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
      name: e.name.replaceAll(":", "")
    } : "customEmoji" === e.type ? s.default.getCustomEmojiById(e.emojiId) : null).filter(h.isNotNullish));
    t.length > 0 && o.default.dispatch({
      type: "EMOJI_TRACK_USAGE",
      emojiUsed: t
    })
  },
  H = (e, t, n) => {
    if (e.isCommandType()) {
      let l = t.guild_id;
      null != e.interactionData && G({
        applicationId: n,
        data: e.interactionData,
        context: {
          channel: t,
          guild: null != l ? T.default.getGuild(l) : null
        }
      })
    }
  },
  G = e => {
    let {
      applicationId: t,
      data: n,
      context: l,
      attachments: i,
      maxSizeCallback: u,
      onMessageSuccess: d,
      commandDisplayName: c,
      analytics_location: p
    } = e, {
      channel: m,
      guild: s
    } = l, g = m.id, y = null == s ? void 0 : s.id, [C, T] = function(e, t, n) {
      let l = x.getCachedApplicationSection(e.channel, n, t);
      if (null != l) {
        var i, a, u;
        let e = null !== (a = null === (i = l.application) || void 0 === i ? void 0 : i.bot) && void 0 !== a ? a : {
          id: l.id,
          username: l.name,
          discriminator: "0000",
          avatar: null,
          bot: !0
        };
        return o.default.dispatch({
          type: "STORE_APPLICATION_INTERACTION_FAKE_USER",
          user: e
        }), [e, null !== (u = l.application) && void 0 !== u ? u : null]
      }
      return [null, null]
    }(l, t, n.type), v = n.type === r.ApplicationCommandType.CHAT ? U.MessageTypes.CHAT_INPUT_COMMAND : U.MessageTypes.CONTEXT_MENU_COMMAND, _ = (0, A.default)({
      channelId: g,
      content: "",
      tts: !1,
      type: v,
      messageReference: void 0,
      allowedMentions: void 0,
      author: null != C ? C : void 0
    });
    _.application = null != T ? T : void 0, _.interaction = {
      id: n.id,
      name: n.name,
      name_localized: c,
      type: r.InteractionTypes.APPLICATION_COMMAND,
      user: (0, A.userRecordToServer)(I.default.getCurrentUser())
    }, _.interaction_data = n;
    let h = {
        applicationId: t,
        channelId: g,
        guildId: y,
        data: n,
        nonce: _.id,
        attachments: i,
        maxSizeCallback: u,
        analytics_location: p
      },
      E = (e, t) => {
        null == t && null != e && a.default.sendClydeError(g, e), o.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: _.id,
          channelId: g,
          reason: t
        })
      };
    a.default.receiveMessage(g, _, !0, {
      applicationId: t
    }), f.addQueued(h.nonce, {
      messageId: _.id,
      onCreate: e => {
        null != _.interaction && (_.interaction.id = e)
      },
      onFailure: (e, t) => E(e, t),
      data: {
        interactionType: r.InteractionTypes.APPLICATION_COMMAND,
        channelId: g
      }
    }), null != i ? Y(i, h.nonce, y, u).then(e => {
      e && z(h, d)
    }) : z(h, d)
  };

function z(e, t) {
  d.default.enqueue({
    type: d.MessageDataType.COMMAND,
    message: e
  }, n => {
    var l;
    (0, g.handleInteractionResponse)(e.nonce, e.channelId, null !== (l = e.guildId) && void 0 !== l ? l : null, n), n.ok && null != t && t()
  })
}
async function B(e, t) {
  let n = 0,
    l = 0;
  for (let o of e) {
    var i;
    let e = t ? null !== (i = o.currentSize) && void 0 !== i ? i : 0 : await o.getSize();
    e > l && (l = e), n += e
  }
  return {
    totalSize: n,
    largestUploadedFileSize: l
  }
}
async function Y(e, t, n, l) {
  let i = (0, _.maxFileSize)(n),
    o = e => {
      null == l || l(i, e), f.setFailed(t, U.AbortCodes.ENTITY_TOO_LARGE, R.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
        maxSize: (0, _.sizeString)(i)
      }))
    },
    {
      totalSize: a,
      largestUploadedFileSize: u
    } = await B(e, !1);
  if (u > Math.max(i, P.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || a > E.MAX_TOTAL_ATTACHMENT_SIZE) return o(u), !1;
  try {
    await (0, c.stageAttachmentFiles)(e)
  } catch {
    f.setFailed(t, void 0, R.default.Messages.UPLOADING_FILES_FAILED.format({
      count: e.length
    }))
  }({
    totalSize: a,
    largestUploadedFileSize: u
  } = await B(e, !0));
  let r = e.some(e => e.error === U.AbortCodes.ENTITY_TOO_LARGE);
  return !r && !(a > E.MAX_TOTAL_ATTACHMENT_SIZE) || (o(u), !1)
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  unsetCommand: function() {
    return A
  }
}), n("222007"), n("424973"), n("781738"), n("843762");
var l = n("798609"),
  i = n("507217"),
  r = n("118200"),
  o = n("240249"),
  s = n("383018"),
  a = n("524768"),
  u = n("389153"),
  d = n("343952"),
  c = n("355263"),
  f = n("511104"),
  p = n("42203"),
  m = n("305961"),
  h = n("697218"),
  E = n("640830"),
  S = n("83800"),
  g = n("970153"),
  C = n("939563"),
  T = n("385887"),
  v = n("566819"),
  y = n("406291");
let x = new Set(["applicationCommandOption"]),
  I = new Set([l.ApplicationCommandOptionType.ATTACHMENT]),
  N = new Set(["line", "applicationCommand"]);

function _(e, t, n, d) {
  let {
    insertData: p,
    isInline: m,
    isVoid: h,
    onChange: _,
    deleteBackward: P,
    deleteForward: L,
    deleteFragment: U
  } = e;
  e.insertData = n => {
    if (null != t && T.EditorUtils.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
      let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
        {
          commandKey: d,
          interactionOptions: c
        } = (0, u.extractInteractionDataProps)(e),
        {
          application: f,
          command: p
        } = o.getCachedCommand(t, d);
      if (null != p) {
        var l, s;
        let e = null != f ? {
          type: a.ApplicationCommandSectionType.APPLICATION,
          id: f.id,
          icon: f.icon,
          name: null !== (s = null === (l = f.bot) || void 0 === l ? void 0 : l.username) && void 0 !== s ? s : f.name,
          application: f
        } : null;
        return i.setActiveCommand({
          channelId: t.id,
          command: p,
          section: e,
          location: a.ApplicationCommandTriggerLocations.PASTE,
          initialValues: (0, r.getInitialValuesFromInteractionOptions)(p, null != c ? c : [])
        }), null
      }
    }
    return p(n)
  }, e.isInline = e => !!x.has(e.type) || m(e), e.isVoid = e => !!("applicationCommandOption" === e.type && I.has(e.optionType)) || h(e), e.deleteBackward = t => {
    k(e, () => P(t))
  }, e.deleteForward = t => {
    k(e, () => L(t))
  }, e.deleteFragment = t => {
    k(e, () => U(t))
  };
  let j = null,
    D = null,
    w = null,
    B = null,
    H = null;
  return e.onChange = () => {
    if (null != t) {
      var r;
      let u = s.default.getState(t.id),
        p = T.EditorUtils.getFirstText(e),
        m = (0, c.getCommandQuery)(t, null !== (r = null == p ? void 0 : p.text) && void 0 !== r ? r : ""),
        h = o.getChangeKeys(t, l.ApplicationCommandType.CHAT, m.text);
      if (T.EditorUtils.richValue(e) !== j || !T.SelectionUtils.equals(e.selection, D) || u.activeCommand !== w || null == H || h.some((e, t) => H[t] !== e)) {
        let r = S.HistoryUtils.withMergedEntry(e, () => {
          var r;
          return function(e) {
            let {
              editor: t,
              storeCommandState: n,
              channel: r,
              canUseCommands: s,
              canOnlyUseTextCommands: u,
              commandChanged: d,
              previousOptionValues: p
            } = e, {
              command: m,
              commandText: h
            } = M(t), S = n.activeCommand;
            if (!s || u && (null == S ? void 0 : S.inputType) !== a.ApplicationCommandInputType.BUILT_IN_TEXT && (null == S ? void 0 : S.inputType) !== a.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return null != m && A(t, r.id, S, !0), null;
            if (null != m) {
              if (T.EditorUtils.isEditorEmpty(t) || null == S) return A(t, r.id, S, !1), null;
              let e = "".concat(y.COMMAND_SENTINEL).concat(m.displayName);
              if (null == h || !h.startsWith(e) || 0 === E.getOptionNames(t).length && (h.length < e.length + 1 || " " !== h[e.length])) return A(t, r.id, S, !0), null
            } else {
              if (null != S && d) {
                let e = function(e, t, n) {
                    var l, i, r, o, s;
                    let a;
                    let {
                      initialValues: u,
                      activeCommand: d
                    } = n;
                    if (null == d) return null;
                    let c = (null !== (r = null === (l = d.options) || void 0 === l ? void 0 : l.length) && void 0 !== r ? r : 0) > 0 ? E.findTextOptions(e, d) : null,
                      p = (0, g.toTextValue)(T.EditorUtils.richValue(e), {
                        mode: "raw",
                        range: {
                          anchor: T.EditorUtils.start(e, []),
                          focus: null !== (o = null == c ? void 0 : null === (i = c[0]) || void 0 === i ? void 0 : i.keyRange.anchor) && void 0 !== o ? o : T.EditorUtils.end(e, [])
                        }
                      }),
                      m = "",
                      h = p.toLocaleLowerCase(),
                      S = f.PREFIX_COMMAND_REGEX.exec(h);
                    null != S && (h = y.COMMAND_SENTINEL + h.substring(S.length));
                    let x = "".concat(y.COMMAND_SENTINEL).concat(d.displayName).toLocaleLowerCase(),
                      N = "".concat(y.COMMAND_SENTINEL).concat(d.name).toLocaleLowerCase();
                    h.startsWith(x) && h.length > x.length ? m = p.substring(x.length).trim() : h.startsWith(N) && h.length > N.length && (m = p.substring(N.length).trim());
                    let _ = [],
                      A = null,
                      O = null;
                    if (null != d.options) {
                      let e = new Set;
                      if (null != c)
                        for (let l of c) {
                          e.add(l.name);
                          let i = null !== (s = b(n, t, l.name)) && void 0 !== s ? s : l.text,
                            r = {
                              type: "applicationCommandOption",
                              optionName: l.name,
                              optionDisplayName: l.displayName,
                              optionType: l.type,
                              children: [{
                                text: i
                              }]
                            };
                          _.push(r), 0 === l.text.length && null == A && (A = r)
                        }
                      for (let l of d.options)
                        if (!e.has(l.name) && (l.required || null != u[l.name])) {
                          let e, i;
                          m.length > 0 && !I.has(l.type) ? (e = m, m = "") : e = null != (i = b(n, t, l.name)) ? i : "";
                          let r = {
                            type: "applicationCommandOption",
                            optionName: l.name,
                            optionDisplayName: l.displayName,
                            optionType: l.type,
                            children: [{
                              text: e
                            }]
                          };
                          _.push(r), 0 === e.length && null == A && (A = r), null == i && (O = r)
                        }
                    }
                    a = m.length > 0 ? "".concat(y.COMMAND_SENTINEL).concat(d.displayName, " ").concat(m.replace(/\r|\n/g, " ")) : 0 === _.length ? "".concat(y.COMMAND_SENTINEL).concat(d.displayName, " ") : "".concat(y.COMMAND_SENTINEL).concat(d.displayName), _.unshift({
                      text: a
                    });
                    let M = {
                      type: "applicationCommand",
                      children: _,
                      command: {
                        id: d.id,
                        name: d.name,
                        displayName: d.displayName
                      }
                    };
                    T.EditorUtils.withoutNormalizing(e, () => {
                      for (let [, t] of(C.SlateTransforms.insertNodes(e, [M], {
                          at: v.FIRST_BLOCK_PATH
                        }), T.EditorUtils.blocks(e).reverse())) T.PathUtils.isAfter(t, v.FIRST_BLOCK_PATH) && C.SlateTransforms.removeNodes(e, {
                        at: t,
                        voids: !0
                      })
                    });
                    let k = null;
                    return null != A ? (C.SlateTransforms.selectCommandOption(e, A.optionName), k = A.optionName) : null != O ? (C.SlateTransforms.selectCommandOption(e, O.optionName, !1), k = O.optionName) : C.SlateTransforms.resetSelectionToEnd(e), null == O && R(e, d), k
                  }(t, r, n),
                  l = E.getOptionValues(t, S);
                return O({
                  guildId: r.guild_id,
                  channelId: r.id,
                  command: S,
                  activeOption: e,
                  currentOptionValues: l,
                  previousOptionValues: null,
                  validateAll: !0,
                  allowEmpty: !0
                }), {
                  commandId: S.id,
                  optionValues: l
                }
              }
              if (null != S && !d) return i.setActiveCommand({
                channelId: r.id,
                command: null,
                section: null
              }), null;
              let e = T.EditorUtils.richValue(t),
                s = e[0],
                u = s.children[0];
              if (N.has(s.type) && T.TextUtils.isText(u)) {
                let e = function(e, t) {
                  if (!e.startsWith("/")) return null;
                  let n = (0, c.getCommandQuery)(t, e.substring(1));
                  if (!n.hasSpaceTerminator) return null;
                  let {
                    commands: i,
                    sections: r
                  } = o.getCachedResults(t, l.ApplicationCommandType.CHAT, n.text);
                  if (0 === i.length) return null;
                  let s = n.text.trim(),
                    u = s + " ",
                    d = i.filter(e => e.inputType !== a.ApplicationCommandInputType.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(u)));
                  if (1 === d.length && d[0].displayName === s) {
                    let e = d[0],
                      t = r.find(t => {
                        var n;
                        return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId
                      });
                    return {
                      command: e,
                      section: t
                    }
                  }
                  return null
                }(u.text, r);
                if (null != e) return i.setActiveCommand({
                  channelId: r.id,
                  command: e.command,
                  section: e.section
                }), null
              }
            }
            if (null != S && null != m) {
              var x;
              ! function(e, t) {
                if (null == t.options || 0 === t.options.length) return !1;
                let n = E.findTextOptions(e, t);
                return 0 !== n.length && (T.EditorUtils.withoutNormalizing(e, () => {
                  for (let t = n.length - 1; t >= 0; t--) {
                    let l = n[t];
                    C.SlateTransforms.textToInline(e, {
                      type: "applicationCommandOption",
                      optionName: l.name,
                      optionDisplayName: l.displayName,
                      optionType: l.type,
                      children: [{
                        text: l.text
                      }]
                    }, {
                      anchor: l.keyRange.anchor,
                      focus: l.valueRange.focus
                    })
                  }
                  let t = T.EditorUtils.getFirstText(e);
                  if (null == t) return !1;
                  let l = t.text.trim();
                  t.text !== l && C.SlateTransforms.textToText(e, l, {
                    anchor: {
                      path: v.FIRST_TEXT_PATH,
                      offset: 0
                    },
                    focus: {
                      path: v.FIRST_TEXT_PATH,
                      offset: t.text.length
                    }
                  })
                }), !0)
              }(t, S) && R(t, S);
              let e = E.getOptionValues(t, S),
                n = T.EditorUtils.above(t, {
                  match: e => T.EditorUtils.isInline(t, e) && "applicationCommandOption" === e.type,
                  mode: "lowest"
                }),
                l = null !== (x = null == n ? void 0 : n[0].optionName) && void 0 !== x ? x : null;
              return O({
                guildId: r.guild_id,
                channelId: r.id,
                command: S,
                activeOption: l,
                currentOptionValues: e,
                previousOptionValues: p,
                validateAll: !1,
                allowEmpty: !1
              }), {
                commandId: m.id,
                optionValues: e
              }
            }
            return null
          }({
            editor: e,
            storeCommandState: u,
            channel: t,
            canUseCommands: n,
            canOnlyUseTextCommands: d,
            commandChanged: (null === (r = u.activeCommand) || void 0 === r ? void 0 : r.id) !== (null == w ? void 0 : w.id),
            previousOptionValues: B
          })
        });
        if (null != r) {
          let t = S.HistoryUtils.currentEntry(e);
          null != t && (t.commandId = r.commandId), B = r.optionValues
        } else B = null;
        j = T.EditorUtils.richValue(e), D = e.selection, w = u.activeCommand, H = h
      }
    }
    _()
  }, e
}

function A(e, t, n, l) {
  let [r] = T.EditorUtils.blocks(e)[0], o = l ? (0, g.serializeDescendant)(r, {
    mode: "plain"
  }).trimEnd() : "", s = o.split("\n").map(e => ({
    type: "line",
    children: [{
      text: e
    }]
  })), a = [s.length - 1];
  for (let [, t] of(C.SlateTransforms.insertNodes(e, s, {
      at: v.FIRST_BLOCK_PATH
    }), T.EditorUtils.blocks(e).reverse())) T.PathUtils.isAfter(t, a) && C.SlateTransforms.removeNodes(e, {
    at: t,
    voids: !0
  });
  null != n && i.setActiveCommand({
    channelId: t,
    command: null,
    section: null
  })
}

function R(e, t) {
  if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || I.has(t.options[0].type) || E.getOptionNames(e).length > 0) return !1;
  let n = E.getCommandBlock(e);
  if (null == n) return !1;
  let l = T.EditorUtils.getFirstText(e);
  if (null == l) return !1;
  let i = t.options[0],
    r = {
      path: v.FIRST_TEXT_PATH,
      offset: t.displayName.length + 2
    },
    o = {
      path: v.FIRST_TEXT_PATH,
      offset: l.text.length
    };
  return !(!l.text.startsWith("".concat(y.COMMAND_SENTINEL).concat(t.displayName, " ").toLocaleLowerCase()) || T.PointUtils.equals(r, o)) && (C.SlateTransforms.textToInline(e, {
    type: "applicationCommandOption",
    optionName: i.name,
    optionDisplayName: i.displayName,
    optionType: i.type,
    children: [{
      text: l.text.substring(t.displayName.length + 2)
    }]
  }, {
    anchor: r,
    focus: o
  }), !0)
}

function O(e) {
  let {
    guildId: t,
    channelId: n,
    command: l,
    activeOption: r,
    currentOptionValues: o,
    previousOptionValues: a,
    validateAll: u,
    allowEmpty: c
  } = e;
  if (null == l.options) return !1;
  let f = u ? null : s.default.getActiveOptionName(n),
    p = {},
    m = s.default.getOptionStates(n),
    h = !1;
  for (let e of l.options) {
    var E, S, g;
    let l = m[e.name],
      i = u || e.name === f && f !== r || (null == l ? void 0 : null === (E = l.lastValidationResult) || void 0 === E ? void 0 : E.success) === !1 && (null == o ? void 0 : o[e.name]) !== (null == a ? void 0 : a[e.name]),
      s = {
        hasValue: null != o && e.name in o,
        isActive: e.name === r,
        lastValidationResult: i ? (0, d.validateOptionContent)({
          option: e,
          content: null !== (g = null == o ? void 0 : o[e.name]) && void 0 !== g ? g : null,
          guildId: t,
          channelId: n,
          allowEmptyValues: c
        }) : null == l ? void 0 : l.lastValidationResult
      };
    (null == l || l.hasValue !== s.hasValue || l.isActive !== s.isActive || i && (null === (S = l.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (p[e.name] = s, h = !0)
  }
  h && i.updateOptionStates(n, p)
}

function M(e) {
  let t = E.getCommandBlock(e);
  if (null == t) return {
    command: null,
    commandText: null
  };
  let [n] = t, l = n.children[0];
  return T.TextUtils.isText(l) ? {
    command: n.command,
    commandText: l.text
  } : {
    command: n.command,
    commandText: null
  }
}

function k(e, t) {
  let n = E.getOptionNames(e)[0];
  t();
  let l = T.RangeUtils.toPoint(e.selection);
  if (null == l || n === E.getOptionNames(e)[0]) return;
  let {
    command: i,
    commandText: r
  } = M(e);
  !(null == i || null == r || r.endsWith(" ")) && T.PointUtils.equals(l, {
    path: v.FIRST_TEXT_PATH,
    offset: i.displayName.length + 1
  }) && C.SlateTransforms.insertText(e, " ")
}

function b(e, t, n) {
  var i, r, o, s, a;
  let u = null === (r = e.activeCommand) || void 0 === r ? void 0 : null === (i = r.options) || void 0 === i ? void 0 : i.find(e => e.name === n),
    d = e.initialValues[n];
  if (null == u || null == d) return null;
  if (null != u.choices) return null === (a = u.choices.find(e => e.value === d.value)) || void 0 === a ? void 0 : a.displayName;
  let c = null === (o = d.value) || void 0 === o ? void 0 : o.toString();
  return u.type === l.ApplicationCommandOptionType.CHANNEL || u.type === l.ApplicationCommandOptionType.MENTIONABLE && null != p.default.getChannel(c) ? "<#".concat(c, ">	") : u.type === l.ApplicationCommandOptionType.USER || u.type === l.ApplicationCommandOptionType.MENTIONABLE && null != h.default.getUser(c) ? "<@".concat(c, ">") : u.type === l.ApplicationCommandOptionType.ROLE || u.type === l.ApplicationCommandOptionType.MENTIONABLE && (null === (s = m.default.getGuild(t.guild_id)) || void 0 === s ? void 0 : s.getRole(null != c ? c : "")) != null ? "<@&".concat(c, ">") : c
}
"use strict";
s.r(t), s.d(t, {
  ForumPostComposerStoreProvider: function() {
    return h
  },
  useForumPostComposerStore: function() {
    return f
  },
  useForumPostComposerStoreApi: function() {
    return m
  },
  createForumPostComposerStore: function() {
    return g
  }
}), s("222007");
var n = s("308503"),
  a = s("949041"),
  l = s("295426"),
  i = s("149022"),
  r = s("42203"),
  o = s("474643"),
  u = s("404607"),
  d = s("867965");
class c {
  constructor(e, t, s) {
    var n, a, c;
    this.channelId = e, this.set = t, this.get = s, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = !1, this.guidelinesOpen = !1, this.previewing = !1, this.onboardingExpanded = !1, this.submitting = !1, this.formOpen = !1, this.name = "", this.textAreaState = (0, i.createState)(""), this.hasClickedForm = !1, this.titleFocused = !1, this.bodyFocused = !1, this.setEditorHeight = e => {
      this.set({
        editorHeight: e
      })
    }, this.setEditorAdditionRowHeight = e => {
      this.set({
        editorAdditionRowHeight: e
      })
    }, this.setCardHeight = (e, t) => {
      let {
        listViewCardHeights: s,
        cardHeightVersion: n
      } = this.get();
      s[e] !== t && (s[e] = t, this.set({
        cardHeightVersion: n + 1
      }))
    }, this.setNameError = e => {
      this.set({
        nameError: e
      })
    }, this.setMessageError = e => {
      this.set({
        messageError: e
      })
    }, this.toggleAppliedTag = e => {
      let {
        appliedTags: t
      } = this.get();
      (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({
        appliedTags: t
      }), l.default.changeThreadSettings(this.channelId, {
        appliedTags: t
      })
    }, this.setPopoutOpen = e => {
      this.set({
        popoutOpen: e
      })
    }, this.setGuidelinesOpen = e => {
      this.set({
        guidelinesOpen: e
      })
    }, this.setPreviewing = e => {
      this.set({
        previewing: e
      })
    }, this.setSubmitting = e => {
      this.set({
        submitting: e
      })
    }, this.setFormOpen = e => {
      this.set({
        formOpen: e
      }), u.default.clearForumSearch(this.channelId)
    }, this.setOnboardingExpanded = e => {
      this.set({
        onboardingExpanded: e
      })
    }, this.setTitleFocused = e => {
      this.set({
        titleFocused: e
      })
    }, this.setBodyFocused = e => {
      this.set({
        bodyFocused: e
      })
    }, this.setName = e => {
      this.set({
        name: e
      }), l.default.changeThreadSettings(this.channelId, {
        name: e
      })
    }, this.setTextAreaState = e => {
      this.set({
        textAreaState: e
      }), l.default.saveDraft(this.channelId, e.textValue, o.DraftType.FirstThreadMessage)
    }, this.setHasClickedForm = e => {
      this.set({
        hasClickedForm: e
      })
    }, this.resetFormState = () => {
      let e = r.default.getChannel(this.channelId),
        t = null == e ? "" : null == e.template ? "" : e.template.trim();
      this.set({
        name: "",
        textAreaState: (0, i.createState)(t),
        appliedTags: new Set,
        hasClickedForm: !1
      }), u.default.clearForumSearch(this.channelId)
    }, this.setFormOpenFromUserAction = () => {
      if (this.hasClickedForm) return;
      let e = r.default.getChannel(this.channelId);
      null != e && (0, d.trackForumCreateNewPostStarted)({
        guildId: e.guild_id,
        channelId: this.channelId
      }), this.set({
        hasClickedForm: !0,
        formOpen: !0
      }), u.default.clearForumSearch(this.channelId)
    };
    let h = r.default.getChannel(e);
    if (null == h) return;
    let f = null !== (n = o.default.getThreadSettings(h.id)) && void 0 !== n ? n : {},
      m = null == h.template ? "" : h.template.trim(),
      g = o.default.getDraft(h.id, o.DraftType.FirstThreadMessage),
      S = (0, i.createState)(null != g && "" !== g.trim() ? g : m);
    this.name = null !== (a = f.name) && void 0 !== a ? a : "", c = new Set(f.appliedTags), this.appliedTags = void 0 !== c ? c : new Set, this.formOpen = this.name.length > 0, this.textAreaState = S
  }
}
let {
  Provider: h,
  useStore: f,
  useStoreApi: m
} = (0, a.default)();

function g(e) {
  return (0, n.default)((t, s) => new c(e.id, t, s))
}
"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007"), n("70102");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("31745"),
  u = n("77078"),
  d = n("371642"),
  c = n("84339"),
  f = n("244201"),
  h = n("871388"),
  C = n("389153"),
  p = n("56947"),
  m = n("386045"),
  E = n("734217"),
  g = n("139321"),
  S = n("562228"),
  _ = n("140596"),
  A = n("300322"),
  T = n("845579"),
  M = n("982108"),
  I = n("778588"),
  N = n("957255"),
  L = n("101125"),
  v = n("351825"),
  x = n("738602"),
  R = n("430025"),
  y = n("659500"),
  O = n("773336"),
  D = n("412861"),
  j = n("79254"),
  P = n("64096"),
  b = n("49111"),
  U = n("80028"),
  F = n("782340"),
  H = n("381769"),
  k = a.memo(function(e) {
    var t, l;
    let k, {
        className: G,
        channel: w,
        draftType: B,
        editorTextContent: V,
        setValue: W,
        canOnlyUseTextCommands: Z
      } = e,
      z = (0, f.useAppContext)(),
      K = a.useRef(null),
      Y = (0, r.useStateFromStores)([L.default], () => L.default.getActivities()),
      q = (0, r.useStateFromStores)([m.default], () => m.default.getSettings().clipsEnabled),
      X = (0, r.useStateFromStores)([m.default], () => m.default.getLastClipsSession()),
      J = (0, r.useStateFromStoresArray)([m.default], () => m.default.getNewClipIds()),
      Q = (0, r.useStateFromStores)([M.default], () => null == M.default.getCurrentSidebarChannelId(w.id)),
      {
        showClipsHeaderEntrypoint: $
      } = p.ClipsExperiment.useExperiment({
        location: "ChannelAttachButton"
      }, {
        autoTrackExposure: !1
      }),
      ee = (0, r.useStateFromStores)([g.HotspotStore], () => g.HotspotStore.hasHotspot(g.HotspotLocations.CLIPS_CHANNEL_ATTACH_REMINDER)),
      et = (0, u.useModalsStore)(e => (0, u.hasModalOpenSelector)(e, U.CLIPS_GALLERY_MODAL_KEY)),
      en = (0, r.useStateFromStores)([I.default], () => I.default.hasLayers()),
      es = (0, r.useStateFromStores)([m.default], () => m.default.hasClips()),
      [ea, el] = a.useState(null),
      ei = (0, p.useEnableClips)() && (q || es),
      er = w.isPrivate(),
      eo = (0, r.useStateFromStores)([N.default], () => er || N.default.can(b.Permissions.ATTACH_FILES, w) && N.default.can(b.Permissions.SEND_MESSAGES, w)),
      eu = (0, c.default)(X);
    (null == eu ? void 0 : eu.newClipIds.length) !== (null == X ? void 0 : X.newClipIds.length) && (null !== (t = null == X ? void 0 : X.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ea && ee && Q && !et && !$ && !en && el("recentClips");
    let ed = (e, t, n) => {
      null != t && "ETOOLARGE" === t.code ? (0, D.showUploadFileSizeExceededError)(w, []) : (0, D.promptToUpload)(e, w, B, {
        requireConfirm: !0,
        showLargeMessageDialog: n
      }), y.ComponentDispatch.dispatchToLastSubscribed(b.ComponentActions.TEXTAREA_FOCUS)
    };

    function ec() {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("167573").then(n.bind(n, "167573"));
        return t => (0, s.jsx)(e, {
          ...t,
          channelId: w.id
        })
      }, {
        modalKey: U.CLIPS_GALLERY_MODAL_KEY
      }), el(null)
    }
    a.useEffect(() => {
      let e = () => {
        var e;
        return null === (e = K.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
      };
      return y.ComponentDispatch.subscribe(b.ComponentActions.UPLOAD_FILE, e), () => {
        y.ComponentDispatch.unsubscribe(b.ComponentActions.UPLOAD_FILE, e)
      }
    });
    let ef = (0, A.useCanStartPublicThread)(w),
      eh = (0, A.useCanStartPrivateThread)(w),
      eC = !T.UseLegacyChatInput.useSetting() && !(0, O.isAndroidWeb)() && null != window.ResizeObserver,
      ep = (0, r.useStateFromStores)([N.default, _.default], () => (0, C.canUseApplicationCommands)(N.default, _.default, Z, w)),
      em = (0, S.useCanPostPollsInChannel)(null != w ? w : void 0),
      eE = (0, u.useRedesignIconContext)().enabled,
      eg = null !== (l = null == J ? void 0 : J.length) && void 0 !== l ? l : 0,
      eS = (0, P.default)({
        canAttachFiles: eo,
        canStartThreads: ef || eh,
        useSlate: eC,
        hasClips: ei,
        canUseApplicationCommands: ep,
        channel: w,
        activities: Y,
        newClipsCount: eg,
        canPostPolls: em,
        appContext: z
      });
    if (0 === eS.length) return null;
    let e_ = Y.some(e => (0, h.default)(e, b.ActivityFlags.SYNC)),
      eA = Y.some(e => (0, h.default)(e, b.ActivityFlags.JOIN) && !(0, h.default)(e, b.ActivityFlags.EMBEDDED)) || e_;
    k = eE ? (0, s.jsx)(o.CirclePlusIcon, {
      className: H.attachButtonIcon,
      colorClass: H.attachButtonPlus
    }) : eA ? (0, s.jsx)(R.default, {
      className: H.attachButtonIcon,
      foreground: H.attachButtonPlay,
      background: H.attachButtonPlus,
      width: 24,
      height: 24
    }) : eg > 0 ? (0, s.jsx)(x.default, {
      className: H.attachButtonIcon,
      foreground: H.attachButtonClip,
      background: H.attachButtonPlus,
      width: 24,
      height: 24
    }) : (0, s.jsx)(v.default, {
      className: H.attachButtonIcon,
      foreground: H.attachButtonPlus,
      width: 24,
      height: 24
    });
    let eT = (0, s.jsx)(u.Popout, {
      shouldShow: null != ea,
      animation: u.Popout.Animation.NONE,
      align: "recentClips" === ea ? "center" : "left",
      position: "top",
      positionKey: null != ea ? ea : "null",
      onRequestOpen: () => el("attachMenu"),
      onRequestClose: () => {
        !(0, u.hasAnyModalOpen)() && el(null)
      },
      renderPopout: e => {
        switch (ea) {
          case "recentClips":
            return (0, s.jsx)(E.default, {
              ...e,
              onOpenClips: ec,
              lastClipsSession: X
            });
          case "attachMenu":
            return (0, s.jsx)(j.default, {
              ...e,
              onClose: () => el(null),
              options: eS,
              channel: w,
              onFileUpload: () => {
                var e;
                return null === (e = K.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
              },
              draftType: B,
              editorTextContent: V,
              setValue: W,
              openClips: ec
            });
          default:
            throw Error("Invalid popout type provided")
        }
      },
      children: e => (0, s.jsx)(u.Button, {
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        className: i(H.attachButton, G),
        innerClassName: H.attachButtonInner,
        "aria-label": F.default.Messages.CHAT_ATTACH_UPLOAD_OR_INVITE,
        onDoubleClick: eo ? () => {
          var e;
          return null === (e = K.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
        } : void 0,
        ...e,
        children: k
      })
    });
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: H.uploadInput,
        children: (0, s.jsx)(d.default, {
          ref: K,
          onChange: e => {
            ed(e.currentTarget.files, e.currentTarget.err), e.currentTarget.value = ""
          },
          multiple: w.rateLimitPerUser <= 0,
          tabIndex: -1,
          "aria-hidden": !0
        })
      }), (0, s.jsx)("div", {
        className: H.attachWrapper,
        children: eT
      })]
    })
  })
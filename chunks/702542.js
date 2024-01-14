"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  r = a("414456"),
  l = a.n(r),
  o = a("446674"),
  d = a("77078"),
  c = a("206230"),
  i = a("10641"),
  u = a("933629"),
  _ = a("560176"),
  m = a("633667"),
  E = a("476765"),
  N = a("956089"),
  f = a("58608"),
  g = a("599110"),
  h = a("215429"),
  A = a("49111"),
  O = a("994428"),
  C = a("727505");
let p = e => {
    let {
      tagText: t,
      className: a
    } = e;
    return (0, s.jsx)(N.TextBadge, {
      className: l(C.tag, a),
      text: t
    })
  },
  M = e => {
    let {
      header: t,
      subHeader: a,
      imageSrc: n,
      tagText: r,
      wideStyle: o
    } = e;
    return (0, s.jsxs)("div", {
      className: l(C.featureCard, {
        [C.wideStyle]: o
      }),
      children: [null != r ? (0, s.jsx)(p, {
        tagText: r,
        className: C.featureCardTag
      }) : null, (0, s.jsx)("img", {
        alt: "",
        className: l(C.featureCardImg, {
          [C.wideStyle]: o
        }),
        src: n
      }), (0, s.jsxs)("div", {
        className: C.featureCardTextGroup,
        children: [(0, s.jsx)(d.Heading, {
          variant: "heading-lg/extrabold",
          className: C.featureCardTextHeader,
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: a
        })]
      })]
    })
  };

function D(e) {
  let {
    className: t,
    renderModalProps: a,
    heroArt: r,
    heroArtClassName: N,
    modalDismissibleContent: p,
    modalTopExtra: D,
    header: T,
    headerClassName: b,
    subHeader: x,
    subHeaderExtra: y,
    featureCards: R,
    changeLogId: S,
    button: v
  } = e, {
    onClose: L,
    transitionState: G
  } = a, j = (0, E.useUID)(), B = R.length % 2 == 0, H = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [U, I] = n.useState(Date.now()), [w, k] = n.useState(0), [P, V] = n.useState(0), [F, Y] = n.useState(!1), [z, K] = n.useState(!0), W = n.useRef(U), X = n.useRef(w), q = n.useRef(P), Z = n.useRef(F), J = n.useRef(z);

  function Q() {
    let e = Date.now(),
      t = e - W.current,
      a = X.current,
      s = q.current;
    return Z.current && (k(a += t), !J.current && V(s += t)), I(e), [a, s]
  }
  return n.useEffect(() => {
    W.current = U, X.current = w, q.current = P, Z.current = F, J.current = z
  }, [U, w, P, F, z]), n.useEffect(() => () => {
    let [e, t] = Q();
    g.default.track(A.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
      change_log_id: S,
      seconds_played: Math.round(e / 1e3)
    }), g.default.track(A.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
      change_log_id: S,
      seconds_unmuted: Math.round(t / 1e3)
    })
  }, [S]), n.useEffect(() => {
    null != p && (0, i.requestMarkDismissibleContentAsShown)(p);
    let e = Date.now();
    return g.default.track(A.AnalyticEvents.CHANGE_LOG_OPENED, {
      change_log_id: S
    }), () => {
      g.default.track(A.AnalyticEvents.CHANGE_LOG_CLOSED, {
        change_log_id: S,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != p && (0, i.markDismissibleContentAsDismissed)(p, {
        dismissAction: O.ContentDismissActionType.DISMISS
      })
    }
  }, [p, S]), (0, s.jsxs)(d.ModalRoot, {
    className: l(C.root, t),
    transitionState: G,
    "aria-labelledby": j,
    children: [(0, s.jsx)(d.ModalCloseButton, {
      className: C.closeButton,
      onClick: L
    }), (0, s.jsx)(h.default, {
      className: C.splash
    }), null == D ? void 0 : D(), (0, s.jsxs)(d.ModalContent, {
      className: C.content,
      children: [(0, s.jsx)(d.Heading, {
        variant: "display-md",
        className: l(C.headerText, b),
        children: T
      }), "video" === r.type ? (0, s.jsx)(f.default, {
        className: l(C.video, N),
        autoPlay: !H,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: r.src,
        poster: r.poster,
        onPlay: e => {
          g.default.track(A.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: S
          }), I(Date.now()), Y(!0), K(e.currentTarget.muted)
        },
        onEnded: e => {
          Q(), K(e.currentTarget.muted), Y(!1)
        },
        onVolumeChange: e => {
          Q(), K(e.currentTarget.muted)
        },
        onPause: e => {
          Q(), K(e.currentTarget.muted), Y(!1)
        },
        disablePictureInPicture: !0
      }) : "embed" === r.type ? (0, s.jsx)(_.EmbedVideo, {
        className: l(C.video, N),
        allowFullScreen: !1,
        href: r.href,
        thumbnail: r.thumbnail,
        video: r.embed,
        provider: m.SupportedEmbedIFrame.YOUTUBE,
        maxWidth: r.embed.width,
        maxHeight: r.embed.height,
        renderVideoComponent: u.renderVideoComponent,
        renderImageComponent: u.renderImageComponent,
        renderLinkComponent: u.renderMaskedLinkComponent,
        onPlay: () => {
          g.default.track(A.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: S
          })
        }
      }) : "image" === r.type ? (0, s.jsx)("img", {
        alt: "",
        className: l(C.video, N),
        src: r.src
      }) : null, (0, s.jsx)(d.Heading, {
        variant: "heading-lg/extrabold",
        className: C.bodyText,
        children: x
      }), null == y ? void 0 : y(), (0, s.jsx)("div", {
        className: l(C.featureCardGroup, {
          [C.wideStyle]: B
        }),
        children: R.map((e, t) => (0, s.jsx)(M, {
          ...e,
          wideStyle: B
        }, "".concat(e.header, "_").concat(t)))
      }), v()]
    })]
  })
}
"use strict";
s.r(t), s.d(t, {
  default: function() {
    return z
  }
}), s("222007");
var l, n, i = s("37983"),
  r = s("884691"),
  a = s("414456"),
  u = s.n(a),
  d = s("446674"),
  o = s("77078"),
  c = s("437822"),
  I = s("152584"),
  m = s("206230"),
  E = s("385976"),
  f = s("813006"),
  M = s("525065"),
  R = s("26989"),
  _ = s("305961"),
  F = s("697218"),
  N = s("145131"),
  h = s("476263"),
  x = s("491605"),
  C = s("599110"),
  T = s("315102"),
  g = s("50926"),
  v = s("526253"),
  A = s("520141"),
  O = s("567054"),
  j = s("409464"),
  S = s("347977"),
  V = s("179487"),
  p = s("394294"),
  L = s("49111"),
  B = s("782340"),
  b = s("120825"),
  P = s("500643"),
  y = s("284434"),
  U = s("315956"),
  w = s("250084");
(n = l || (l = {}))[n.CLAIM_ACCOUNT = 0] = "CLAIM_ACCOUNT", n[n.EMAIL_CONFIRMATION = 1] = "EMAIL_CONFIRMATION", n[n.VERIFICATION_FORM = 2] = "VERIFICATION_FORM";
let D = e => {
    let {
      headerId: t,
      email: s,
      password: l,
      setEmail: n,
      setPassword: r,
      emailError: a,
      passwordError: u
    } = e;
    return (0, i.jsxs)("div", {
      className: b.content,
      children: [(0, i.jsx)("div", {
        className: b.applicationIconContainer,
        children: (0, i.jsx)("img", {
          alt: B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,
          src: P,
          className: b.applicationIcon
        })
      }), (0, i.jsx)(o.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: b.header,
        children: B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE
      }), (0, i.jsx)("hr", {
        className: b.divider
      }), (0, i.jsx)(o.FormItem, {
        title: B.default.Messages.FORM_LABEL_EMAIL,
        className: b.formItem,
        children: (0, i.jsx)(o.TextInput, {
          value: s,
          error: a,
          onChange: n,
          autoFocus: !0
        })
      }), (0, i.jsx)(o.FormItem, {
        title: B.default.Messages.FORM_LABEL_PASSWORD,
        className: b.formItem,
        children: (0, i.jsx)(o.TextInput, {
          type: "password",
          value: l,
          error: u,
          onChange: r
        })
      })]
    })
  },
  H = e => {
    let {
      headerId: t,
      email: s
    } = e;
    return (0, i.jsxs)("div", {
      className: b.content,
      children: [(0, i.jsx)("img", {
        alt: B.default.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,
        src: w,
        className: b.applicationIcon
      }), (0, i.jsx)(o.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: b.header,
        children: B.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({
          email: s
        })
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: B.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE
      }), (0, i.jsx)(o.Button, {
        className: b.resendButton,
        size: o.Button.Sizes.NONE,
        look: o.Button.Looks.LINK,
        onClick: () => c.default.verifyResend(),
        children: B.default.Messages.MEMBER_VERIFICATION_EMAIL_RESEND
      })]
    })
  },
  q = e => {
    var t;
    let {
      guildId: s,
      formState: l,
      updateFormState: n,
      isPreview: r = !1
    } = e, a = (0, d.useStateFromStores)([v.default], () => v.default.get(s));
    if (null == a) return null;
    let u = null !== (t = null != l ? l : null == a ? void 0 : a.formFields) && void 0 !== t ? t : [],
      o = r ? V.PreviewFormRenderer : V.ApplicantFormRenderer;
    return (0, i.jsx)(o, {
      guildId: s,
      formFields: u,
      updateFormFields: n
    })
  },
  k = () => s.el("170206").then(s.t.bind(s, "170206", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  Y = e => {
    let {
      headerId: t,
      guildId: s,
      formState: l,
      updateFormState: n,
      useReducedMotion: r,
      isPreview: a = !1
    } = e;
    return (0, i.jsxs)("div", {
      className: b.content,
      children: [(0, i.jsxs)("div", {
        className: b.animationAndSparklesContainer,
        children: [(0, i.jsx)("img", {
          alt: B.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: U,
          className: u(b.sparkleIcon, b.sparkleBottom)
        }), (0, i.jsx)(x.default, {
          importData: k,
          shouldAnimate: !r,
          className: b.animation
        }), (0, i.jsx)("img", {
          alt: B.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
          src: y,
          className: u(b.sparkleIcon, b.sparkleTop)
        })]
      }), (0, i.jsx)(o.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: b.header,
        children: B.default.Messages.MEMBER_VERIFICATION_MODAL_TITLE
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: b.subheader,
        children: B.default.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE
      }), (0, i.jsx)("hr", {
        className: b.divider
      }), (0, i.jsx)(q, {
        guildId: s,
        formState: l,
        updateFormState: n,
        isPreview: a
      })]
    })
  };
var z = e => {
  var t;
  let {
    headerId: s,
    guildId: l,
    onClose: n,
    onComplete: a,
    inviteCode: c,
    isPreview: x = !1
  } = e, V = (0, S.useMemberVerificationFormNoticeStore)(e => e.hasUnsubmittedChanges), P = (0, d.useStateFromStores)([_.default], () => _.default.getGuild(l)), y = (0, d.useStateFromStores)([v.default], () => v.default.get(l)), U = (0, d.useStateFromStores)([F.default], () => F.default.getCurrentUser()), w = !(null == U ? void 0 : U.isClaimed()), q = null == U ? void 0 : U.verified, k = null == U ? void 0 : U.isPhoneVerified(), z = (0, d.useStateFromStores)([E.default], () => E.default.getGuildEmoji(l)), {
    storeMemberCount: G,
    storeOnlineCount: W
  } = (0, d.useStateFromStoresObject)([M.default], () => ({
    storeMemberCount: M.default.getMemberCount(l),
    storeOnlineCount: M.default.getOnlineCount(l)
  })), [K, J] = r.useState(null !== (t = null == y ? void 0 : y.formFields) && void 0 !== t ? t : []), [X, Q] = r.useState(!1), [Z, $] = r.useState(null), [ee, et] = r.useState(w ? 0 : 2), [es, el] = r.useState(""), [en, ei] = r.useState(""), [er, ea] = r.useState(null), [eu, ed] = r.useState(null), eo = (0, A.useIsMemberVerificationManualApproval)(l), ec = null == y ? void 0 : y.guild, eI = r.useMemo(() => null != P ? P : null != ec ? new f.default(ec) : null, [P, ec]), {
    emojisToRender: em,
    remainingEmojis: eE,
    numGuildEmoji: ef
  } = r.useMemo(() => {
    var e;
    let t = null !== (e = 0 === z.length ? null == ec ? void 0 : ec.emojis : z) && void 0 !== e ? e : [],
      s = [...t].reverse(),
      l = 0,
      n = s.length;
    return n > 12 && null != s && (l = Math.min(n - (s = s.slice(0, 11)).length, 99)), {
      emojisToRender: s,
      remainingEmojis: l,
      numGuildEmoji: n
    }
  }, [ec, z]), eM = null != G ? G : null == ec ? void 0 : ec.approximate_member_count, eR = null != W ? W : null == ec ? void 0 : ec.approximate_presence_count;
  r.useEffect(() => ((0, S.setHasUnsubmittedChanges)(!1), () => {
    (0, S.setHasUnsubmittedChanges)(!1)
  }), []), r.useEffect(() => {
    g.default.fetchVerificationForm(l, c)
  }, [l, c]), r.useEffect(() => {
    null != y && J(y.formFields)
  }, [y]), r.useEffect(() => {
    null != U && U.isClaimed() && et(2)
  }, [U]), r.useEffect(() => {
    1 === ee && q && et(2)
  }, [ee, q]), r.useEffect(() => {
    null != l && C.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: p.MEMBER_VERIFICATION_TYPE,
      guild_id: l
    })
  }, [l]), r.useEffect(() => {
    let e = K.some(e => e.field_type !== O.VerificationFormFieldTypes.TERMS && (0, j.isValidFormResponse)(e));
    e && !V ? (0, S.setHasUnsubmittedChanges)(!0) : !e && V && (0, S.setHasUnsubmittedChanges)(!1)
  }, [K, V]);
  let e_ = r.useMemo(() => {
      let e = ((null == eI ? void 0 : eI.verificationLevel) !== L.VerificationLevels.VERY_HIGH || (null == U ? void 0 : U.isStaff())) && q || k;
      return !e || K.some(e => !(0, j.isValidFormResponse)(e))
    }, [K, eI, k, q, U]),
    eF = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion);
  if (null == eI) return null;
  let eN = async () => {
    Q(!0), ea(null), ed(null);
    try {
      await (0, I.saveAccountRequest)({
        email: es,
        password: en
      }), Q(!1), et(1)
    } catch (s) {
      var e, t;
      ea(null == s ? void 0 : null === (e = s.body) || void 0 === e ? void 0 : e.email), ed(null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.password)
    } finally {
      Q(!1)
    }
  }, eh = async () => {
    Q(!0), $(null);
    let e = null != U ? R.default.getMember(l, U.id) : null;
    if (null != e && !e.isPending) {
      null == n || n(!0);
      return
    }
    try {
      await (null == a ? void 0 : a({
        ...null != y ? y : v.NO_MEMBER_VERIFICATION_FORM,
        formFields: K
      })), null == n || n(!0)
    } catch (l) {
      var t, s;
      let e = null == l ? void 0 : l.body;
      (null == e ? void 0 : null === (t = e.errors) || void 0 === t ? void 0 : t.version) != null || (null == e ? void 0 : null === (s = e.errors) || void 0 === s ? void 0 : s.form_fields) != null ? $(B.default.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR) : $(null == e ? void 0 : e.message), Q(!1)
    }
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(N.default, {
      direction: N.default.Direction.VERTICAL,
      justify: N.default.Justify.BETWEEN,
      className: b.guildSidebar,
      shrink: 0,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(h.default, {
          guild: eI,
          active: !0,
          className: u(b.guildIcon, {
            [b.guildIconNoIcon]: null == eI.icon
          })
        }), (0, i.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          className: b.guildName,
          children: null == eI ? void 0 : eI.name
        }), (0, i.jsx)(o.Text, {
          className: b.guildDescription,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: null == y ? void 0 : y.description
        }), null != em && em.length > 0 ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("hr", {
            className: b.divider
          }), (0, i.jsx)(o.FormTitle, {
            children: B.default.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({
              emojis: ef
            })
          }), (0, i.jsxs)("div", {
            className: b.emojisContainer,
            children: [em.map(e => {
              let t = T.default.getEmojiURL({
                id: e.id,
                animated: !1,
                size: 24
              });
              return (0, i.jsx)(o.Tooltip, {
                text: ":".concat(e.name, ":"),
                children: e => (0, i.jsx)("img", {
                  ...e,
                  width: 24,
                  height: 24,
                  src: t,
                  className: b.emoji,
                  alt: ""
                })
              }, e.id)
            }), null != eE && eE > 0 ? (0, i.jsx)(o.Heading, {
              variant: "heading-deprecated-12/semibold",
              className: b.emoji,
              color: "header-secondary",
              children: "+".concat(eE)
            }) : null]
          })]
        }) : null]
      }), (0, i.jsxs)("div", {
        children: [null != eR && (0, i.jsxs)(N.default, {
          align: N.default.Align.CENTER,
          className: b.onlineCount,
          children: [(0, i.jsx)("div", {
            className: b.dotOnline
          }), (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: B.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
              membersOnline: eR
            })
          })]
        }), null != eM && (0, i.jsxs)(N.default, {
          align: N.default.Align.CENTER,
          children: [(0, i.jsx)("div", {
            className: b.dotMembers
          }), (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: B.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
              members: eM
            })
          })]
        })]
      })]
    }), (0, i.jsxs)("div", {
      className: b.modal,
      children: [(0, i.jsx)(o.ModalContent, {
        className: b.modalContent,
        children: (0, i.jsx)(o.Sequencer, {
          className: u(b.sequencer, {
            [b.centerContent]: 2 !== ee
          }),
          steps: [0, 1, 2],
          step: ee,
          children: (() => {
            switch (ee) {
              case 0:
                return (0, i.jsx)(D, {
                  headerId: s,
                  email: es,
                  password: en,
                  setEmail: el,
                  setPassword: ei,
                  emailError: er,
                  passwordError: eu
                });
              case 1:
                return (0, i.jsx)(H, {
                  headerId: s,
                  email: es
                });
              case 2:
                return (0, i.jsx)(Y, {
                  headerId: s,
                  guildId: l,
                  formState: K,
                  updateFormState: J,
                  isPreview: x,
                  useReducedMotion: eF
                })
            }
          })()
        })
      }), (() => {
        switch (ee) {
          case 0:
            return (0, i.jsxs)(o.ModalFooter, {
              className: b.footer,
              children: [(0, i.jsx)(o.Button, {
                className: b.submitButton,
                type: "submit",
                submitting: X,
                onClick: eN,
                disabled: 0 === es.length || 0 === en.length,
                children: B.default.Messages.NEXT
              }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO
              })]
            });
          case 1:
            return null;
          case 2:
            return (0, i.jsxs)(o.ModalFooter, {
              className: b.footer,
              children: [(0, i.jsx)(o.Button, {
                className: b.submitButton,
                type: "submit",
                submitting: X,
                onClick: eh,
                color: o.Button.Colors.GREEN,
                disabled: null == a || e_,
                children: B.default.Messages.SUBMIT
              }), null != Z && (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-danger",
                children: Z
              }), null == Z && eo && (0, i.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: B.default.Messages.MEMBER_VERIFICATION_WARNING
              })]
            })
        }
      })()]
    })]
  })
}
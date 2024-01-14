"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("759843"),
  s = n("627929"),
  l = n("913144"),
  i = n("840707"),
  r = n("49111"),
  o = {
    signup: (e, t) => i.default.post({
      url: r.Endpoints.HUB_WAITLIST_SIGNUP,
      body: {
        email: e,
        school: t
      },
      trackedActionData: {
        event: a.NetworkActionNames.HUB_WAITLIST_SIGNUP,
        properties: e => {
          var t;
          let n = !1,
            a = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.email_domain;
          if (null != a) {
            let e = a.split(".");
            n = -1 !== e.indexOf("edu")
          }
          return (0, s.exact)({
            is_edu_email: n
          })
        }
      }
    }),
    async sendVerificationEmail(e, t, n) {
      let l = await i.default.post({
        url: r.Endpoints.HUB_EMAIL_VERIFY_SEND,
        body: {
          email: e,
          guild_id: n,
          allow_multiple_guilds: t,
          use_verification_code: !0
        },
        trackedActionData: {
          event: a.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
          properties: e => {
            var t;
            let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.has_matching_guild;
            return (0, s.exact)({
              has_matching_guild: n
            })
          }
        }
      });
      return l.body
    },
    async verify(e) {
      if (null != e) try {
        var t;
        let n = await i.default.post({
            url: r.Endpoints.HUB_EMAIL_VERIFY,
            body: {
              token: e
            },
            trackedActionData: {
              event: a.NetworkActionNames.HUB_EMAIL_VERIFY
            }
          }),
          s = null === (t = n.body.guild) || void 0 === t ? void 0 : t.id;
        l.default.dispatch({
          type: "HUB_VERIFY_EMAIL_SUCCESS",
          guildId: s
        })
      } catch (e) {
        l.default.dispatch({
          type: "HUB_VERIFY_EMAIL_FAILURE",
          errors: e.body
        })
      }
    },
    async verifyCode(e, t, n) {
      if (null != e) try {
        var s;
        let o = await i.default.post({
            url: r.Endpoints.HUB_EMAIL_VERIFY_CODE,
            body: {
              code: e,
              guild_id: t,
              email: n
            },
            trackedActionData: {
              event: a.NetworkActionNames.HUB_EMAIL_VERIFY
            }
          }),
          c = null === (s = o.body.guild) || void 0 === s ? void 0 : s.id;
        return l.default.dispatch({
          type: "HUB_VERIFY_EMAIL_SUCCESS",
          guildId: c
        }), o.body
      } catch (e) {
        throw l.default.dispatch({
          type: "HUB_VERIFY_EMAIL_FAILURE",
          errors: e.body
        }), e
      }
    }
  }
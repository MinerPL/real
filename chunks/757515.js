"use strict";
n.r(t), n.d(t, {
  ROLE_FIELD_NAME: function() {
    return l
  },
  describeUploadProgressError: function() {
    return o
  },
  describeProductChangeValidation: function() {
    return s
  },
  computeProductChanges: function() {
    return a
  },
  getGuildProductListingUrl: function() {
    return d
  }
});
var r = n("448993");
n("957255");
var i = n("49111"),
  u = n("782340");
let l = "_role";

function o(e) {
  if (!(e >= 0)) switch (-e) {
    case i.AbortCodes.ENTITY_TOO_LARGE:
      return u.default.Messages.UPLOAD_ERROR_TOO_LARGE;
    case i.AbortCodes.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
      return u.default.Messages.GUILD_PRODUCT_ERROR_NO_ARCHIVES;
    case 1:
      return u.default.Messages.ERROR_GENERIC_TITLE;
    default:
      return u.default.Messages.GUILD_PRODUCT_ERROR_OTHER_CODE.format({
        code: -e
      })
  }
}

function s(e) {
  let {
    newRoleParams: t
  } = e;
  if (null != t && "" === t.name.trim()) {
    var n, i;
    return n = l, i = u.default.Messages.GUILD_PRODUCT_ERROR_EMPTY_ROLE_NAME, new r.APIError({
      status: 400,
      body: {
        message: "Invalid form body",
        errors: {
          [n]: {
            _errors: [{
              code: "",
              message: i
            }]
          }
        }
      }
    })
  }
}

function a(e) {
  var t;
  let {
    guildProductListing: n,
    name: r,
    priceTier: i,
    description: u,
    image: l,
    imageName: o,
    isImageChanged: s,
    newRoleParams: a,
    hasUnsavedAttachmentChanges: d
  } = e, c = {};
  (null == n ? void 0 : n.name) !== r && "" !== r.trim() && (c.name = r), (null !== (t = null == n ? void 0 : n.description) && void 0 !== t ? t : "") !== u && (c.description = u), (null == n ? void 0 : n.price_tier) !== i && null != i && (c.priceTier = i), null != a && "" !== a.name.trim() ? c.createNewRole = !0 : null === a && (c.unlinkRole = !0), l.startsWith("data:") && (s || null == n && (Object.keys(c).length > 0 || d)) && (c.image = l, c.imageName = o);
  let f = Object.keys(c).length > 0 || d;
  return {
    changes: c,
    hasUnsavedChanges: f,
    canSaveForDraft: f,
    canSaveForPublished: f,
    canPublishOrUnpublish: !(null == n || f)
  }
}

function d(e, t) {
  return "".concat(location.protocol, "//").concat(location.host).concat(i.Routes.GUILD_PRODUCT(e, t))
}
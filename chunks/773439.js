"use strict";
a.r(r), a.d(r, {
  default: function() {
    return t
  }
});
var t = {
  payButton: "支払う",
  "payButton.redirecting": "リダイレクトしています...",
  "payButton.with": "%{value}を%{maskedData}で支払う",
  close: "終了",
  storeDetails: "次回のお支払いのため詳細を保存",
  "creditCard.holderName": "カード上の名前",
  "creditCard.holderName.placeholder": "Taro Yamada",
  "creditCard.holderName.invalid": "カードに記載されている名前を入力してください",
  "creditCard.numberField.title": "カード番号",
  "creditCard.numberField.placeholder": "1234 5678 9012 3456",
  "creditCard.expiryDateField.title": "有効期限",
  "creditCard.expiryDateField.placeholder": "MM/YY",
  "creditCard.expiryDateField.month": "月",
  "creditCard.expiryDateField.month.placeholder": "MM",
  "creditCard.expiryDateField.year.placeholder": "YY",
  "creditCard.expiryDateField.year": "年",
  "creditCard.cvcField.title": "セキュリティコード",
  "creditCard.cvcField.placeholder": "123",
  "creditCard.storeDetailsButton": "次回のために保存します",
  "creditCard.cvcField.placeholder.4digits": "4桁",
  "creditCard.cvcField.placeholder.3digits": "3桁",
  "creditCard.taxNumber.placeholder": "年月日（YYMMDD）/ 0123456789",
  installments: "分割回数",
  installmentOption: "%{times}x %{partialValue}",
  installmentOptionMonths: "%{times}か月",
  "installments.oneTime": "一括払い",
  "installments.installments": "分割払い",
  "installments.revolving": "リボ払い",
  "sepaDirectDebit.ibanField.invalid": "口座番号の入力間違い",
  "sepaDirectDebit.nameField.placeholder": "J. Smith",
  "sepa.ownerName": "名義",
  "sepa.ibanNumber": "口座番号 (IBAN)",
  "error.title": "エラー",
  "error.subtitle.redirect": "画面の切り替え失敗にしました",
  "error.subtitle.payment": "支払できませんでした",
  "error.subtitle.refused": "カード会社で取引が承認されませんでした。",
  "error.message.unknown": "不明なエラーが発生しました",
  "errorPanel.title": "既存のエラー",
  "idealIssuer.selectField.title": "銀行",
  "idealIssuer.selectField.placeholder": "銀行を選択してください",
  "creditCard.success": "認証が成功しました",
  loading: "読み込んでいます...",
  continue: "続ける",
  continueTo: "次へ進む：",
  "wechatpay.timetopay": "%@をお支払い下さい。",
  "sr.wechatpay.timetopay": "支払いまで残り%#分%# %#秒%#",
  "wechatpay.scanqrcode": "QR コードをスキャンする",
  personalDetails: "個人情報",
  companyDetails: "会社情報",
  "companyDetails.name": "会社名",
  "companyDetails.registrationNumber": "登録番号",
  socialSecurityNumber: "ソーシャルセキュリティー番号",
  firstName: "名",
  "firstName.invalid": "名を入力してください",
  infix: "敬称",
  lastName: "姓",
  "lastName.invalid": "姓を入力してください",
  mobileNumber: "携帯番号",
  "mobileNumber.invalid": "無効な携帯電話番号",
  city: "市区",
  postalCode: "郵便番号",
  "postalCode.optional": "郵便番号 (任意)",
  countryCode: "国コード",
  telephoneNumber: "電話番号",
  dateOfBirth: "生年月日",
  shopperEmail: "Eメールアドレス",
  gender: "性別",
  "gender.notselected": "性別を選択してください",
  male: "男性",
  female: "女性",
  billingAddress: "ご請求住所",
  street: "番地",
  stateOrProvince: "都道府県",
  country: "国",
  houseNumberOrName: "部屋番号",
  separateDeliveryAddress: "別の配送先住所を指定してください",
  deliveryAddress: "配送先住所",
  zipCode: "郵便番号",
  apartmentSuite: "アパート名/部屋名",
  provinceOrTerritory: "州または準州",
  cityTown: "市区町村",
  address: "住所",
  "address.placeholder": "住所を検索してください",
  "address.errors.incomplete": "続行するには、住所を入力してください",
  "address.enterManually": "住所を手動で入力してください",
  state: "都道府県",
  "field.title.optional": "（任意）",
  "creditCard.cvcField.title.optional": "セキュリティコード（任意）",
  "issuerList.wallet.placeholder": "ウォレットを選択してください",
  privacyPolicy: "プライバシーポリシー",
  "afterPay.agreement": "AfterPayの%@で同意",
  paymentConditions: "支払条件",
  openApp: "アプリを開く",
  "voucher.readInstructions": "手順を参照してください",
  "voucher.introduction": "お買い上げありがとうございます。以下のクーポンを使用して、お支払いを完了してください。",
  "voucher.expirationDate": "有効期限",
  "voucher.alternativeReference": "別の参照",
  "dragonpay.voucher.non.bank.selectField.placeholder": "プロバイダーを選択してください",
  "dragonpay.voucher.bank.selectField.placeholder": "銀行を選択してください",
  "voucher.paymentReferenceLabel": "支払いの参照",
  "voucher.surcharge": "%@ の追加料金を含む",
  "voucher.introduction.doku": "お買い上げありがとうございます。以下の情報を使用して、お支払いを完了してください。",
  "voucher.shopperName": "購入者氏名",
  "voucher.merchantName": "業者",
  "voucher.introduction.econtext": "お買い上げありがとうございます。以下の情報を使用して、お支払いを完了してください。",
  "voucher.telephoneNumber": "電話番号",
  "voucher.shopperReference": "購入者向け参考情報",
  "voucher.collectionInstitutionNumber": "収納機関番号",
  "voucher.econtext.telephoneNumber.invalid": "電話番号は10桁または11桁にしてください",
  "boletobancario.btnLabel": "Boletoを生成する",
  "boleto.sendCopyToEmail": "自分のメールアドレスにコピーを送信する",
  "button.copy": "コピー",
  "button.download": "ダウンロード",
  "boleto.socialSecurityNumber.invalid": "フィールドが無効です",
  "creditCard.storedCard.description.ariaLabel": "保存されたカードは％@に終了します",
  "voucher.entity": "エンティティ",
  donateButton: "寄付する",
  notNowButton: "今はしない",
  thanksForYourSupport: "ご支援いただきありがとうございます。",
  preauthorizeWith: "次で事前認証する：",
  confirmPreauthorization: "事前承認を確認する",
  confirmPurchase: "購入を確認する",
  applyGiftcard: "利用する",
  giftcardBalance: "ギフトカードの残高",
  deductedBalance: "差し引き後残高",
  "creditCard.pin.title": "PIN",
  "creditCard.encryptedPassword.label": "カードのパスワードの最初の2桁",
  "creditCard.encryptedPassword.placeholder": "12",
  "creditCard.encryptedPassword.invalid": "パスワードが無効です",
  "creditCard.taxNumber": "カード所有者の生年月日または法人登録番号",
  "creditCard.taxNumber.label": "カード所有者の生年月日（YYMMDD）または法人登録番号（10桁）",
  "creditCard.taxNumber.labelAlt": "法人登録番号（10桁）",
  "creditCard.taxNumber.invalid": "カード所有者の生年月日または法人登録番号が無効です",
  "storedPaymentMethod.disable.button": "削除",
  "storedPaymentMethod.disable.confirmation": "保存されている支払方法を削除する",
  "storedPaymentMethod.disable.confirmButton": "はい、削除します",
  "storedPaymentMethod.disable.cancelButton": "キャンセル",
  "ach.bankAccount": "銀行口座",
  "ach.accountHolderNameField.title": "口座名義",
  "ach.accountHolderNameField.placeholder": "Taro Yamada",
  "ach.accountHolderNameField.invalid": "無効な口座名義",
  "ach.accountNumberField.title": "口座番号",
  "ach.accountNumberField.invalid": "口座番号の入力間違い",
  "ach.accountLocationField.title": "ABAナンバー",
  "ach.accountLocationField.invalid": "無効なABAナンバー",
  "ach.savedBankAccount": "保存済みの銀行口座",
  "select.state": "都道府県を選択してください",
  "select.stateOrProvince": "都道府県を選択してください",
  "select.provinceOrTerritory": "州または準州を選択してください",
  "select.country": "国を選択してください",
  "select.noOptionsFound": "オプションが見つかりませんでした",
  "select.filter.placeholder": "検索...",
  "telephoneNumber.invalid": "無効な電話番号",
  qrCodeOrApp: "または",
  "paypal.processingPayment": "支払いを処理しています...",
  generateQRCode: "QRコードを生成する",
  "await.waitForConfirmation": "確認を待っています",
  "mbway.confirmPayment": "MB WAYアプリで支払を確認する",
  "shopperEmail.invalid": "Eメールアドレスが無効です",
  "dateOfBirth.format": "DD/MM/YYYY",
  "dateOfBirth.invalid": "18歳以上の方のみご利用いただけます",
  "blik.confirmPayment": "バンキングアプリを開いて、支払を確認してください。",
  "blik.invalid": "6つの数字を入力してください",
  "blik.code": "6桁のコード",
  "blik.help": "バンキングアプリからコードを取得してください。",
  "swish.pendingMessage": "スキャン後、ステータスは最大10分間保留状態になります。この間に再度お支払いいただこうとすると、複数の請求が発生する場合があります。",
  "field.valid": "フィールドが有効です",
  "field.invalid": "フィールドが無効です",
  "error.va.gen.01": "不完全なフィールド",
  "error.va.gen.02": "フィールドが無効です",
  "error.va.sf-cc-num.01": "有効なカード番号を入力してください",
  "error.va.sf-cc-num.02": "カード番号を入力してください",
  "error.va.sf-cc-num.03": "サポートされているカードブランドを入力してください",
  "error.va.sf-cc-num.04": "完全なカード番号を入力してください",
  "error.va.sf-cc-dat.01": "有効な有効期限を入力してください",
  "error.va.sf-cc-dat.02": "有効な有効期限を入力してください",
  "error.va.sf-cc-dat.03": "クレジットカードの有効期限が近づいています",
  "error.va.sf-cc-dat.04": "有効期限を入力してください",
  "error.va.sf-cc-dat.05": "完全な有効期限を入力してください",
  "error.va.sf-cc-mth.01": "有効期限月を入力してください",
  "error.va.sf-cc-yr.01": "有効期限年を入力してください",
  "error.va.sf-cc-yr.02": "完全な有効期限年を入力してください",
  "error.va.sf-cc-cvc.01": "セキュリティコードを入力してください",
  "error.va.sf-cc-cvc.02": "完全なセキュリティコードを入力してください",
  "error.va.sf-ach-num.01": "銀行口座番号フィールドが空です",
  "error.va.sf-ach-num.02": "銀行口座番号の長さが不正です",
  "error.va.sf-ach-loc.01": "銀行支店番号フィールドが空です",
  "error.va.sf-ach-loc.02": "銀行支店番号の長さが不正です",
  "error.va.sf-kcp-pwd.01": "パスワードフィールドが空です",
  "error.va.sf-kcp-pwd.02": "パスワードの長さが不正です",
  "error.giftcard.no-balance": "このギフトカードの残高はゼロです",
  "error.giftcard.card-error": "記録では、この番号のギフトカードはありません",
  "error.giftcard.currency-error": "ギフトカードは、発行された通貨でのみ有効です。",
  "amazonpay.signout": "Amazonからサインアウトする",
  "amazonpay.changePaymentDetails": "支払明細を変更する",
  "partialPayment.warning": "残金を支払う別の支払方法を選択してください",
  "partialPayment.remainingBalance": "残りの残高は%{amount}になります",
  "bankTransfer.beneficiary": "受益者",
  "bankTransfer.iban": "IBAN",
  "bankTransfer.bic": "BIC",
  "bankTransfer.reference": "参照",
  "bankTransfer.introduction": "新しい銀行振込によるお支払の作成を続行します。次の画面の詳細を使用して、このお支払いを確定できます。",
  "bankTransfer.instructions": "お買い上げありがとうございます。以下の情報を使用して、お支払いを完了してください。",
  "bacs.accountHolderName": "銀行口座名義",
  "bacs.accountHolderName.invalid": "銀行口座名義が無効です",
  "bacs.accountNumber": "銀行口座番号",
  "bacs.accountNumber.invalid": "銀行口座番号が無効です",
  "bacs.bankLocationId": "ソートコード",
  "bacs.bankLocationId.invalid": "ソートコードが無効です",
  "bacs.consent.amount": "上記の金額が私の銀行口座から引き落とされることに同意します。",
  "bacs.consent.account": "口座が私の名義であることを確認し、この口座からの自動引き落としを承認するために必要な唯一の署名者であることを確認します。",
  edit: "編集",
  "bacs.confirm": "確認して支払う",
  "bacs.result.introduction": "自動引き落としの説明 (DDI/委任状) をダウンロードする",
  "download.pdf": "PDFをダウンロード",
  "creditCard.encryptedCardNumber.aria.iframeTitle": "カード番号のiframe",
  "creditCard.encryptedCardNumber.aria.label": "カード番号",
  "creditCard.encryptedExpiryDate.aria.iframeTitle": "有効期限のiframe",
  "creditCard.encryptedExpiryDate.aria.label": "有効期限",
  "creditCard.encryptedExpiryMonth.aria.iframeTitle": "有効期限月のiframe",
  "creditCard.encryptedExpiryMonth.aria.label": "有効期限月",
  "creditCard.encryptedExpiryYear.aria.iframeTitle": "有効期限年のiframe",
  "creditCard.encryptedExpiryYear.aria.label": "有効期限年",
  "creditCard.encryptedSecurityCode.aria.iframeTitle": "セキュリティコードのiframe",
  "creditCard.encryptedSecurityCode.aria.label": "セキュリティコード",
  "creditCard.encryptedPassword.aria.iframeTitle": "パスワードのiframe",
  "creditCard.encryptedPassword.aria.label": "カードのパスワードの最初の2桁",
  "giftcard.encryptedCardNumber.aria.iframeTitle": "カード番号のiframe",
  "giftcard.encryptedCardNumber.aria.label": "カード番号",
  "giftcard.encryptedSecurityCode.aria.iframeTitle": "PINのiframe",
  "giftcard.encryptedSecurityCode.aria.label": "PIN",
  giftcardTransactionLimit: "このギフトカードでの取引ごとに許可される最大%{amount}",
  "ach.encryptedBankAccountNumber.aria.iframeTitle": "銀行口座番号のiframe",
  "ach.encryptedBankAccountNumber.aria.label": "口座番号",
  "ach.encryptedBankLocationId.aria.iframeTitle": "銀行支店番号のiframe",
  "ach.encryptedBankLocationId.aria.label": "ABAナンバー",
  "twint.saved": "を保存しました",
  orPayWith: "または次の方法で支払う",
  invalidFormatExpects: "無効な形式です。期待される形式： %{format}",
  "upi.qrCodeWaitingMessage": "お好みのUPIアプリを使用してQRコードをスキャンし、支払を完了してください",
  "upi.vpaWaitingMessage": "UPIアプリを開いて、支払を確認してください",
  "upi.modeSelection": "UPIの使用方法を選択します。",
  "onlineBanking.termsAndConditions": "続行すると、%#利用規約%#に同意したことになります",
  "onlineBankingPL.termsAndConditions": "続行すると、Przelewy24の%#規制%#と%#情報提供義務%#に同意したことになります",
  "ctp.loading.poweredByCtp": "Click to Pay提供",
  "ctp.loading.intro": "Click to Payにカードが保存されているかどうかを確認しています...",
  "ctp.login.title": "Click to Payに進む",
  "ctp.login.subtitle": "続行するには、Click to Payに連携されているメールアドレスを入力してください。",
  "ctp.login.inputLabel": "メールアドレス",
  "ctp.logout.notYou": "ご自分ではありませんか？",
  "ctp.logout.notYourCards": "ご自分のカードではありませんか？",
  "ctp.logout.notYourCard": "ご自分のカードではありませんか？",
  "ctp.logout.notYourProfile": "ご自分のプロフィールではありませんか？",
  "ctp.otp.fieldLabel": "ワンタイムコード",
  "ctp.otp.resendCode": "コードを再送信する",
  "ctp.otp.codeResent": "コードが再送信されました",
  "ctp.otp.title": "Click to Payカードにアクセスする",
  "ctp.otp.subtitle": "%@から%@に送信されたコードを入力して、ご本人であることを確認してください。",
  "ctp.emptyProfile.message": "このClick to Payプロフィールに登録されているカードはありません。",
  "ctp.separatorText": "または以下を使用",
  "ctp.cards.title": "Click to Payで支払いを完了する",
  "ctp.cards.subtitle": "使用するカードを選択してください。",
  "ctp.cards.expiredCard": "期限切れ",
  "ctp.manualCardEntry": "手動カード入力",
  "ctp.aria.infoModalButton": "Click to Payとは",
  "ctp.infoPopup.title": "Click to Payはオンラインで非接触型カードの使いやすさを実現します",
  "ctp.infoPopup.subtitle": "Mastercard、Visa、その他の支払カードでサポートされている高速で安全な支払方法。",
  "ctp.infoPopup.benefit1": "Click to Payは暗号化を使用して情報を安全に保護します",
  "ctp.infoPopup.benefit2": "世界中の業者で使用できます",
  "ctp.infoPopup.benefit3": "一度設定するだけで、今後の支払いが簡単になります",
  "ctp.errors.AUTH_INVALID": "認証が無効です",
  "ctp.errors.NOT_FOUND": "アカウントが見つかりません。有効なメールアドレスを入力するか、カード情報を手動で入力してください",
  "ctp.errors.ID_FORMAT_UNSUPPORTED": "サポートされてない形式です",
  "ctp.errors.FRAUD": "ユーザーアカウントがロックされているか無効になっています",
  "ctp.errors.CONSUMER_ID_MISSING": "リクエストにコンシューマーIDがありません",
  "ctp.errors.ACCT_INACCESSIBLE": "ロックされているなどの理由により、このアカウントは現在利用できません。",
  "ctp.errors.CODE_INVALID": "確認コードが正しくありません",
  "ctp.errors.CODE_EXPIRED": "このコードの有効期限が切れています",
  "ctp.errors.RETRIES_EXCEEDED": "ワンタイムパスワード生成のリトライ回数が上限を超えました",
  "ctp.errors.OTP_SEND_FAILED": "ワンタイムパスワードを受信者に送信できませんでした",
  "ctp.errors.REQUEST_TIMEOUT": "問題が発生しました。再度お試しいただくか、カード情報を手動で入力してください。",
  "ctp.errors.UNKNOWN_ERROR": "問題が発生しました。再度お試しいただくか、カード情報を手動で入力してください。",
  "ctp.errors.SERVICE_ERROR": "問題が発生しました。再度お試しいただくか、カード情報を手動で入力してください。",
  "ctp.errors.SERVER_ERROR": "問題が発生しました。再度お試しいただくか、カード情報を手動で入力してください。",
  "ctp.errors.INVALID_PARAMETER": "問題が発生しました。再度お試しいただくか、カード情報を手動で入力してください。",
  "ctp.errors.AUTH_ERROR": "問題が発生しました。再度お試しいただくか、カード情報を手動で入力してください。",
  "paymentMethodsList.aria.label": "お支払い方法を選択してください",
  "companyDetails.name.invalid": "会社名を入力してください",
  "companyDetails.registrationNumber.invalid": "登録番号を入力してください",
  "consent.checkbox.invalid": "利用規約に同意する必要があります",
  "form.instruction": "特に明記されていない限り、すべてのフィールドは必須です。",
  "trustly.descriptor": "即時銀行支払",
  "trustly.description1": "ご利用の銀行口座から直接お支払い可能（銀行レベルのセキュリティで保護されています）",
  "trustly.description2": "カードなし、アプリのダウンロードなし、登録なし"
}

// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"336",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-clp-course-id\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"clp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector('div[data-purpose\\x3d\"introduction-video\"]')){var a=document.querySelector(\".current-price\");return a?a.textContent.replace(\"$\",\"\").trim():\"\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-course-labels-experiment-hotjar\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=document.body.getAttribute(\"data-hotjar-channel-type\");hotjarPage=document.body.getAttribute(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-hotjar-channel-type\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"peclp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",20],8,16],"||\"ja-JP\"==",["escape",["macro",20],8,16],"||\"jp-JP\"==",["escape",["macro",20],8,16],"||\"jp_JP\"==",["escape",["macro",20],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_language"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_avg_rating"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_instructor_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_length_minutes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_num_enrollments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_subcategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"has_made_paid_purchase"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchases"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_first_paid_purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_uid"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor.id"
    }],
  "tags":[{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\"),fbq(\"init\",\"1457291081167286\"),fbq(\"init\",\"399727027340013\"),fbq(\"track\",\"PageView\"));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(a,e,f,g,b,c,d){a[b]=a[b]||function(){(a[b].a=a[b].a||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/mc.yandex.ru\/metrika\/tag.js\",\"ym\");ym(53931514,\"init\",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/53931514\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":217
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(window.Image?new Image:document.createElement(\"img\")).src=\"https:\/\/vk.com\/rtrg?p\\x3dVK-RTRG-375520-3ntRi\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":221
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":38
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=a1ed898d-f7f9-4815-ba08-19fe053ee591\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "tag_id":78
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=6af875c0-59a1-49cd-9618-5df0d111948d\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "vtp_randomNumber":["macro",8],
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"userID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"excluded",
      "vtp_dimension":["list",["map","index","16","dimension",["macro",2]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",10],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",10]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"course",
      "vtp_eventLabel":"transaction_purchase",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",6],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__img",
      "metadata":["map"],
      "setup_tags":["list",["tag",74,1]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=Purchase",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":149
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"21002562",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":205
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"HsE0CKDW8pABEJPXtNAD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":206
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":207
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":208
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":209
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"mqA6CMD-5ZIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":210
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"E_BECNaa5pIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":211
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"775273485",
      "vtp_conversionLabel":"ynKkCLW08pIBEI341vEC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":212
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":213
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=2542116;type=gwg;cat=udemy000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",8],
      "tag_id":216
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"Bc8dCNaqmagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":228
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"OR8bCLmumagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":229
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":376
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"GiYPCISDssMBEOSX7KMD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":377
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":378
    },{
      "function":"__cl",
      "tag_id":384
    },{
      "function":"__cl",
      "tag_id":385
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":386
    },{
      "function":"__cl",
      "tag_id":387
    },{
      "function":"__cl",
      "tag_id":388
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_344_340","164179_344_46"],
      "vtp_uniqueTriggerId":"164179_344",
      "tag_id":389
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_340",
      "tag_id":390
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_46",
      "tag_id":392
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cl.qualaroo.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",25],8,16],",course_category:",["escape",["macro",26],8,16],",course_instructor_name:",["escape",["macro",27],8,16],",course_language:",["escape",["macro",23],8,16],",course_length_minutes:",["escape",["macro",28],8,16],",course_locale:",["escape",["macro",29],8,16],",course_num_enrollments:",["escape",["macro",30],8,16],",course_subcategory:",["escape",["macro",31],8,16],",course_topic:",["escape",["macro",32],8,16],",user_language:",["escape",["macro",22],8,16],",\nuser_locale:",["escape",["macro",33],8,16],",user_location:",["escape",["macro",34],8,16],",has_made_paid_purchase:",["escape",["macro",35],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});fbq(\"trackCustom\",\"isMember\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var b=document.body.getAttribute(\"data-clp-course-id\")||\"NA\",a=document.querySelector(\".price-text__current\");a=a?a.textContent.replace(\"$\",\"\").trim().match(\/\\d+\/):null;void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",b),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",a),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",b,a,{nonInteraction:1}));fbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:b,content_type:\"product\"})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=",["escape",["macro",37],8,16],".map(function(a){return a.buyableId}),c=",["escape",["macro",37],8,16],".map(function(a){course=a.courseAnalytics;return{id:a.buyableId,quantity:1,course_avg_rating:course.course_avg_rating,course_category:course.course_category,course_instructor_name:course.course_instructor_name,course_language:course.course_language,course_length_minutes:course.course_length_minutes,course_locale:course.course_locale,course_num_enrollments:course.course_num_enrollments,course_subcategory:course.course_subcategory,\ncourse_topic:course.course_topic}});fbq(\"track\",\"Purchase\",{content_ids:b,content_type:\"product\",contents:c,order_id:",["escape",["macro",38],8,16],",value:",["escape",["macro",6],8,16],",currency:\"USD\",user_language:",["escape",["macro",22],8,16],",user_locale:",["escape",["macro",33],8,16],",user_location:",["escape",["macro",34],8,16],",has_made_paid_purchase:",["escape",["macro",35],8,16],",is_first_paid_purchase:",["escape",["macro",39],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"Conversion\",revenue:",["escape",["macro",6],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":124
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"SignupSuccess\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Efbq(\"trackCustom\",\"NewUserPurchase\",{value:",["escape",["macro",6],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"LinkshareSignupClick\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);ire(\"identify\",{customerId:",["escape",["macro",41],8,16],",customerEmail:",["escape",["macro",42],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",0,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Efbq(\"trackCustom\",\"BecomeAnInstructor\");window.sendPageEvent\u0026\u0026window.sendPageEvent(\"track\",\"teach_funnel\",{action:\"create-course\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":180
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"aff\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"paid_acq\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1049902\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"add_to_cart\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=add_to_cart\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"complete_registration\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=complete_registration\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":201
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,g,e,a,f,b){c.ktag||(a=function(){a.sendEvent?a.sendEvent(arguments):a.ktq.push(arguments)},a.ktq=[],c.ktag=a,f=d.getElementsByTagName(e)[0],b=d.createElement(e),b.async=!0,b.src=g,f.parentNode.appendChild(b))}(window,document,\"\/\/resources.xg4ken.com\/js\/v2\/ktag.js?tid\\x3dKT-N3AE7-3EC\",\"script\");ktag(\"setup\",\"KT-N3AE7-3EC\",\"\\x3cUSER_ID\\x3e\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"https:\/\/events.xg4ken.com\/pixel\/v2?tid=KT-N3AE7-3EC\u0026amp;noscript=1\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/javascript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.2\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/111655.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":203
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var Q={affiliateConfig:{ranMID:\"39197\",discountType:\"item\",includeStatus:\"false\",tagType:\"mop\",allowCommission:(\"linkshare\"===",["escape",["macro",49],8,16],").toString()},displayConfig:{rdMID:\"8712\"},orderid:",["escape",["macro",40],8,16],",currency:\"USD\",customerStatus:\"CUSTOMER_STATUS\",conversionType:\"Sale\",customerID:",["escape",["macro",41],8,16],",discountCode:",["escape",["macro",43],8,16],",taxAmount:0,optionalData:{},lineitems:[{quantity:1,unitPrice:",["escape",["macro",44],8,16],"\/100,unitPriceLessTax:",["escape",["macro",44],8,16],"\/100,SKU:",["escape",["macro",51],8,16],",\nproductName:",["escape",["macro",51],8,16],"}]};!function(e,m,y){var f=e.rakutenDataLayerName||\"DataLayer\";e[f]=e[f]||{};e[f].events=e[f].events||{};e[f].events.SPIVersion=\"3.4.1\";e[f].Sale=e[f].Sale||{};e[f].Sale.Basket=e[f].Sale.Basket||{};y.Ready=e[f].Sale.Basket.Ready\u0026\u0026e[f].Sale.Basket.Ready+1||1;e[f].Sale.Basket=y;var J=function(a){for(var b=a+\"\\x3d\",c=m.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(a=c[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\ny=function(a){var b=a||\"\",c={};if(a||(b=J(\"rmStore\")),b){for(;b!==decodeURIComponent(b);)b=decodeURIComponent(b);a=b.split(\"|\");for(b=0;b\u003Ca.length;b++)c[a[b].split(\":\")[0]]=a[b].split(\":\")[1]}return c};var I={};I=y();var g=function(a,b,c,d){c=c||\"\";d=d||{};a=I[a||\"\"];b=d[b||\"\"];c=(a=(d=d.ignoreCookie||!1)?0:a)||b||c;return c=(\"string\"!=typeof c||\"false\"!==c.toLowerCase())\u0026\u0026c,c},K=function(a,b,c,d,e){var f=m.createElement(a),g=-1\u003Cm.location.protocol.indexOf(\"s\")?\"https:\":\"http:\",q;for(q in b=b.replace(\"https:\",\ng),f.src=b,d=d||{},\"script\"==a?d.type=d.type||\"text\/javascript\":(d.style=\"display:none;\",\"img\"==a\u0026\u0026(d.alt=\"\",d.height=\"1\",d.width=\"1\")),d)d.hasOwnProperty(q)\u0026\u0026f.setAttribute(q,d[q]);a=m.getElementsByTagName(c);a=a.length?a[0]:m.getElementsByTagName(\"script\")[0].parentElement;e\u0026\u0026(f.onload=e,f.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||e()});a.appendChild(f)},L=function(a){var b=new Date;b=b.getUTCFullYear()+(\"0\"+(b.getUTCMonth()+1)).slice(-2)+(\"0\"+b.getUTCDate()).slice(-2)+\n(\"0\"+b.getUTCHours()).slice(-2)+(\"0\"+b.getUTCMinutes()).slice(-2);return\"NoOID_\"+(a?a+\"_\":\"\")+Math.round(1E5*Math.random())+\"_\"+b},N=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=b||a.affiliateConfig||{},c=g(\"amid\",\"ranMID\",\"\",b)||a.ranMID;if(!c)return!1;var d=\"undefined\"==typeof b.allowCommission||\"false\"!==b.allowCommission;if(!d||!(a.orderid||a.lineitems\u0026\u0026a.lineitems.length))return!1;var R=g(\"adn\",\"domain\",\"track.linksynergy.com\",b),n=g(\"atm\",\"tagType\",\"pixel\",b);d=g(\"adr\",\n\"discountType\",\"order\",b);var k=g(\"acs\",\"includeStatus\",\"false\",b),q=g(\"arto\",\"removeOrderTax\",\"false\",b),A=g(\"artp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"artd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"atr\",\"taxRate\",a.taxRate||0,b),z=g(\"ald\",\"land\",!1,{})||(b.land\u0026\u0026!0===b.land?J(\"ranLandDateTime\"):b.land)||!1,M=g(\"atrv\",\"tr\",!1,{})||(b.tr\u0026\u0026!0===b.tr?J(\"ranSiteID\"):b.tr)||!1,G=g(\"acv\",\"centValues\",\"true\",b),v=g(\"ancc\",\"nonCentCurrencies\",\"JPY\",b);p=Math.abs(+p);var r=(100+p)\/100;b=a.orderid||L(c);\nb=encodeURIComponent(b);var w=a.currency||\"\";w=encodeURIComponent(w.toUpperCase());var B=!1;if(w\u0026\u0026v){v=(v+\"\").split(\",\");for(var l=0;l\u003Cv.length;l++)v[l]==w\u0026\u0026(B=!0)}var m=function(a){return B\u0026\u0026(a=Math.round(a)),G\u0026\u0026\"false\"!==G?(a*=100,a=Math.round(a)):a=Math.round(100*a)\/100,a+\"\"};v=a.taxAmount?Math.abs(+a.taxAmount):0;var C=a.discountAmount?Math.abs(+a.discountAmount):0;l=a.discountAmountLessTax?Math.abs(+a.discountAmountLessTax):0;!l\u0026\u0026C\u0026\u0026u\u0026\u0026p\u0026\u0026(l=C\/r);l=l||C;u=\"ep\";\"mop\"===n\u0026\u0026(u=\"eventnvppixel\");\nC=(a.customerStatus||\"\")+\"\";n=\"\";C\u0026\u0026(k\u0026\u0026\"EXISTING\"==C.toUpperCase()||k\u0026\u0026\"RETURNING\"==C.toUpperCase())\u0026\u0026(n=\"R_\");k=[];for(var E=C=0;E\u003C(a.lineitems?a.lineitems.length:0);E++)if(a.lineitems[E]){var F=!1,h=e.JSON?JSON.parse(JSON.stringify(a.lineitems[E])):a.lineitems[E],y=+h.quantity||0,D=+h.unitPrice||0,t=+h.unitPriceLessTax;D=t||D||0;A\u0026\u0026p\u0026\u0026!t\u0026\u0026(D\/=r);D*=y;for(var H=0;H\u003Ck.length;H++)t=k[H],t.SKU===h.SKU\u0026\u0026(F=!0,t.quantity+=y,t.totalValue+=D);F||(h.quantity=y,h.totalValue=D,k.push(h));C+=D}F=r=p=A=\"\";\nt={};for(E=0;E\u003Ck.length;E++){h=k[E];D=encodeURIComponent(h.SKU);H=h.totalValue;y=h.quantity;var I=encodeURIComponent(h.productName)||\"\";\"item\"===d.toLowerCase()\u0026\u0026l\u0026\u0026(H-=l*H\/C);h=h.optionalData;for(var x in h)h.hasOwnProperty(x)\u0026\u0026(t[x]=t[x]||\"\",t[x]+=encodeURIComponent(h[x])+\"|\");A+=n+D+\"|\";p+=y+\"|\";r+=m(H)+\"|\";F+=n+I+\"|\"}A=A.slice(0,-1);p=p.slice(0,-1);r=r.slice(0,-1);F=F.slice(0,-1);l\u0026\u0026(l=m(l));v\u0026\u0026(v=m(v));l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(A+=\"|\"+n+\"DISCOUNT\",F+=\"|\"+n+\"DISCOUNT\",p+=\"|0\",r+=\"|-\"+l);\nq\u0026\u0026v\u0026\u0026(A+=\"|\"+n+\"ORDERTAX\",p+=\"|0\",r+=\"|-\"+v,F+=\"|\"+n+\"ORDERTAX\");c=\"https:\/\/\"+R+\"\/\"+u+\"?mid\\x3d\"+c;c+=\"\\x26ord\\x3d\"+b;c+=z?\"\\x26land\\x3d\"+z:\"\";c+=M?\"\\x26tr\\x3d\"+M:\"\";c+=\"\\x26cur\\x3d\"+w;c+=\"\\x26skulist\\x3d\"+A;c+=\"\\x26qlist\\x3d\"+p;c+=\"\\x26amtlist\\x3d\"+r;c+=\"\\x26img\\x3d1\";c+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;l\u0026\u0026\"item\"===d.toLowerCase()\u0026\u0026(c+=\"\\x26discount\\x3d\"+l);h=a.optionalData||{};for(x in a.discountCode\u0026\u0026(h.coupon=a.discountCode),a.customerStatus\u0026\u0026(h.custstatus=a.customerStatus),a.customerID\u0026\u0026\n(h.custid=a.customerID),l\u0026\u0026(h.disamt=l),h)h.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"\\x3d\"+encodeURIComponent(h[x]));for(x in t)t.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"list\\x3d\"+t[x].slice(0,-1),l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(c+=\"|\"),v\u0026\u0026q\u0026\u0026(c+=\"|\"));c+=\"\\x26namelist\\x3d\"+F;if(8E3\u003Cc.length){for(a=8E3;0\u003Ca;)if(\"\\x26\"==c.charAt(a)){c=c.slice(0,a);break}else a--;c+=\"\\x26trunc\\x3dtrue\"}K(\"img\",c,\"body\")},O=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},\nb=b||a.displayConfig||{},c=g(\"dmid\",\"rdMID\",\"\",b);if(!c||!a.orderid\u0026\u0026!a.conversionType)return!1;var d=g(\"dtm\",\"tagType\",\"js\",b),y=g(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",b),n=g(\"dis\",\"includeStatus\",\"false\",b),k=g(\"dcomm\",\"allowCommission\",\"notset\",b),q=g(\"duup\",\"useUnitPrice\",\"false\",b),A=g(\"drtp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"drtd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"dtr\",\"taxRate\",a.taxRate||0,b);b=\"\";\"true\"===k||!0===k||\"1\"===k||1===k?b=\"1\":(\"false\"===k||!1===k||\"0\"===k||0===\nk)\u0026\u0026(b=\"0\");d=\"js\"===d||\"if\"===d||\"img\"===d?d:\"js\";k=\"script\";\"if\"===d?k=\"iframe\":\"img\"===d\u0026\u0026(k=\"img\");\"true\"!==q\u0026\u0026!0!==q\u0026\u0026\"1\"!==q\u0026\u00261!==q||(q=!0);var z=(a.customerStatus||\"\")+\"\",m=\"\";z\u0026\u0026n\u0026\u0026(\"EXISTING\"==z.toUpperCase()||\"RETURNING\"==z.toUpperCase())\u0026\u0026(m=\"R_\");(n=a.orderid)||(n=L((a.conversionType+\"\").toLowerCase()+\"_\"+c));n=encodeURIComponent(m+n);m=encodeURIComponent(a.currency||\"\");z=0;var G=\"\";p=Math.abs(+p);var v=(100+p)\/100,r=a.discountAmount?Math.abs(+a.discountAmount):0,w=a.discountAmountLessTax?\nMath.abs(+a.discountAmountLessTax):0;!w\u0026\u0026r\u0026\u0026u\u0026\u0026p\u0026\u0026(w=r\/v);w=w||r;w=isNaN(w)?0:w;for(u=0;u\u003C(a.lineitems?a.lineitems.length:0);u++)if(a.lineitems[u]){r=+a.lineitems[u].quantity;var B=+a.lineitems[u].unitPriceLessTax*r;(!B||q)\u0026\u0026(A\u0026\u0026p?B=+a.lineitems[u].unitPrice\/v*r:B=+a.lineitems[u].unitPrice*r);B=isNaN(B)?0:B;z+=B;G+=encodeURIComponent(a.lineitems[u].SKU)+\",\"}z=Math.round(100*(z-w))\/100;G=G.slice(0,-1);a=\"https:\/\/\"+y+\"\/\"+d+\"\/\"+c;a+=\"\/?pt\\x3dconv\";a+=\"\\x26orderNumber\\x3d\"+n;a+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;\nz\u0026\u0026(a+=\"\\x26price\\x3d\"+z);m\u0026\u0026(a+=\"\\x26cur\\x3d\"+m);b\u0026\u0026(a+=\"\\x26tvalid\\x3d\"+b);G\u0026\u0026(a+=\"\\x26prodID\\x3d\"+G);K(k,a,\"body\")},P=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=a.searchConfig||{},c=1024,d=encodeURIComponent(\"...TRUNCATED\"),m=g(\"smid\",\"rsMID\",\"\",b);if(!m)return!1;var n=g(\"said\",\"accountID\",\"113\",b),k=g(\"sclid\",\"clickID\",\"\",b),q=encodeURIComponent(g(\"sct\",\"conversionType\",a.conversionType\u0026\u0026\"sale\"!==(a.conversionType+\"\").toLowerCase()?a.conversionType:\"conv\",b));K(\"script\",\n\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+m,\"body\",null,function(){var b={};if(b.conversionType=q,b.revenue=0,b.currency=encodeURIComponent(a.currency||\"USD\"),b.orderId=encodeURIComponent(a.orderid||L(q)),b.promoCode=encodeURIComponent(a.discountCode||\"\"),k\u0026\u0026(b.ken_gclid=encodeURIComponent(k)),b.discountAmount=+(a.discountAmount||0),b.discountAmount=isNaN(b.discountAmount)?0:Math.abs(b.discountAmount),b.customerStatus=encodeURIComponent(a.customerStatus||\"\"),b.productIDList=\"\",b.productNameList=\n\"\",a.lineitems\u0026\u0026a.lineitems.length){for(var e=0;e\u003Ca.lineitems.length;e++)a.lineitems[e]\u0026\u0026(b.revenue+=+(a.lineitems[e].unitPrice||0)*+a.lineitems[e].quantity,b.productIDList+=(a.lineitems[e].SKU||\"NA\")+\",\",b.productNameList+=(a.lineitems[e].productName||\"NA\")+\",\");b.revenue=Math.round(100*(b.revenue-b.discountAmount))\/100;b.productIDList=encodeURIComponent(b.productIDList.slice(0,-1));b.productNameList=encodeURIComponent(b.productNameList.slice(0,-1));b.productIDList.length\u003Ec\u0026\u0026(b.productIDList=b.productIDList.substring(0,\nc-d.length)+d);b.productNameList.length\u003Ec\u0026\u0026(b.productNameList=b.productNameList.substring(0,c-d.length)+d)}kenshoo.trackConversion(n,m,b)})};e[f].SPI={readRMCookie:J,processRMStoreCookie:y,readRMStoreValue:g,sRAN:N,sDisplay:O,sSearch:P,addElement:K,rmStore:I};N();O();P()}(window,document,Q)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2612518570079\");pintrk(\"page\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2612518570079\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "setup_tags":["list",["tag",66,1]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"checkout\",{value:",["escape",["macro",6],8,16],",order_quantity:1,currency:\"USD\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2612518570079\u0026amp;event=checkout\u0026amp;ed[value]=",["escape",["macro",6],12],"\u0026amp;ed[order_quantity]=1\u0026amp;ed[currency]=USD\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    },{
      "function":"__html",
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"SIGNUP\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":218
    },{
      "function":"__html",
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"ADD_TO_CART\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":219
    },{
      "function":"__html",
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ym(53931514,\"reachGoal\",\"PURCHASE\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(window.Image?new Image:document.createElement(\"img\")).src=\"https:\/\/vk.com\/rtrg?p\\x3dVK-RTRG-375520-3ntRi\\x26event\\x3dregistrationComplete\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":222
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(window.Image?new Image:document.createElement(\"img\")).src=\"https:\/\/vk.com\/rtrg?p\\x3dVK-RTRG-375520-3ntRi\\x26event\\x3daddToCart\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":223
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(window.Image?new Image:document.createElement(\"img\")).src=\"https:\/\/vk.com\/rtrg?p\\x3dVK-RTRG-375520-3ntRi\\x26event\\x3dorderComplete\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":224
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1fab027e63e94ad4b34e2e8d70e972d9\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar adb_head=document.getElementsByTagName(\"head\")[0],adb_tag=document.createElement(\"script\");adb_tag.src=\"https:\/\/udemy.benesse.co.jp\/js_udemy\/AppMeasurement_js.js\";adb_tag.defer=!0;adb_head.appendChild(adb_tag);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"0eae3c8c-4d76-4bed-ba44-6b29e627c570\"});_lt(\"send\",\"pv\",[\"0eae3c8c-4d76-4bed-ba44-6b29e627c570\"]);\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/tr.line.me\/tag.gif?c_t=lap\u0026amp;t_id=0eae3c8c-4d76-4bed-ba44-6b29e627c570\u0026amp;e=pv\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":374
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){a._ltq=a._ltq||[];a._lt=a._lt||function(){a._ltq.push(arguments)};var e=\"https:\"===location.protocol?\"https:\/\/d.line-scdn.net\":\"http:\/\/d.line-cdn.net\",c=b.createElement(\"script\");c.async=1;c.src=d||e+\"\/n\/line_tag\/public\/release\/v1\/lt.js\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)})(window,document);_lt(\"init\",{customerType:\"lap\",tagId:\"0eae3c8c-4d76-4bed-ba44-6b29e627c570\"});_lt(\"send\",\"pv\",[\"0eae3c8c-4d76-4bed-ba44-6b29e627c570\"]);\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/tr.line.me\/tag.gif?c_t=lap\u0026amp;t_id=0eae3c8c-4d76-4bed-ba44-6b29e627c570\u0026amp;e=pv\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E_lt(\"send\",\"cv\",{type:\"Conversion\"},[\"0eae3c8c-4d76-4bed-ba44-6b29e627c570\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":375
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({t:(new Date).getTime(),event:\"snippetRun\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"paypalDDL\"!==a?\"\\x26m\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.paypal.com\/tagmanager\/pptm.js?t\\x3dxo\\x26id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"paypalDDL\",\"udemy.com\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",78,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.paypalDDL=window.paypalDDL||[];paypalDDL.push({event:\"txnSuccess\",txn_id:",["escape",["macro",38],8,16],",tpv:",["escape",["macro",6],8,16],",curr:\"USD\",prcd:",["escape",["macro",43],8,16],",srce:\"other\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\"});ytag({type:\"yjad_retargeting\",config:{yahoo_retargeting_id:\"L7W82OXY21\",yahoo_retargeting_label:\"\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",80,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"N7oaCJGWlccBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"VJAD6LZA35U102W9UT6686135\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",80,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"BCAiCKantscBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"A1D9GUOZCCX1QBPLQ7K686506\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/tapen\/"
    },{
      "function":"_gt",
      "arg0":["macro",4],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"transaction_purchase"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"udemy\\.com\\\/cart\\\/success"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"submit-id-submit"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"btn btn-primary btn btn-success"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/courses\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/collection\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/home\/teaching\/topics\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/manage\/feedback\/test\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/home\/teaching\/insights\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/affiliate\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\/.+\/learn\/v4\/.+\/reviews\/|\/home\/my-courses\/.+\/.+\/reviews\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/teaching\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/topic"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/gift\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/gift\/redeem\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/gift\/share\/"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/affiliate\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/mobile\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"instructor_analytics"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"signupsuccess=1"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2307940\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306314\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306248\/"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"udemy.com"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"course-data-ready"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/apps\/admin"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"(^$|((^|,)164179_344($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"add-to-cart"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"localhost"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_cn",
      "arg0":["macro",50],
      "arg1":"signup"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",3,14]],
    [["if",5,6],["add",4,11,12,16,18,19,23,26,28,32,47,58,59,66,67,70,2,73,74,77,79,82]],
    [["if",3,7],["add",5,6]],
    [["if",3,4],["add",7],["block",3,9,30,41,0,46,52,55,60,64,1,75,76,78,80]],
    [["if",3],["add",7,46,60,63,33,34,36,37,38]],
    [["if",3,9],["unless",8],["add",8,14,17]],
    [["if",10,11],["add",9]],
    [["if",12,13,14],["add",10]],
    [["if",3,15],["add",13,50]],
    [["if",3,16],["add",14,17]],
    [["if",3,17],["add",14]],
    [["if",3,18],["add",14]],
    [["if",3,19],["add",14,17],["block",52]],
    [["if",3,20],["add",14],["block",52]],
    [["if",3,21],["add",14]],
    [["if",3,22],["add",14]],
    [["if",3],["unless",23],["add",14]],
    [["if",3,24],["add",14]],
    [["if",3,25],["add",14]],
    [["if",3,26],["add",14]],
    [["if",3,27],["add",14]],
    [["if",3,28],["add",14,14,20]],
    [["if",3,29],["add",14]],
    [["if",3,16,30],["add",14,17]],
    [["if",3,31],["add",14,17]],
    [["if",3,32],["add",14,17]],
    [["if",3,33],["add",14,17]],
    [["if",3,34],["add",14,17]],
    [["if",0,2,3],["unless",1],["add",14]],
    [["if",3,35],["unless",36,37],["add",14]],
    [["if",3,38],["add",14]],
    [["if",14,39,40],["add",15,51]],
    [["if",3,41],["add",17]],
    [["if",3,42],["add",17]],
    [["if",43],["add",21]],
    [["if",3,44],["add",22,25,56]],
    [["if",3,45],["add",24,29,31,48,68,2,71,77,81]],
    [["if",3,46],["add",27]],
    [["if",3,47],["add",27]],
    [["if",3,48],["add",27]],
    [["if",0,3,49],["add",30,55,75,76,80]],
    [["if",3,50],["add",35]],
    [["if",53],["unless",51,52],["add",39]],
    [["if",54],["add",40]],
    [["if",3,55],["add",41],["block",52,60,65,79]],
    [["if",3,56],["unless",57],["add",41]],
    [["if",58,59],["add",41]],
    [["if",3,62],["add",0]],
    [["if",64,65],["add",42]],
    [["if",54,66],["add",43]],
    [["if",14,67],["add",44,61,69,2,72]],
    [["if",68,69],["add",45]],
    [["if",5,70],["add",49]],
    [["if",0,3],["unless",1,60],["add",52,64,1,78]],
    [["if",5,6,49],["add",53,54]],
    [["if",75,76,77,78],["add",57]],
    [["if",14,79],["add",62]],
    [["if",76,78],["add",65]],
    [["if",3,60],["block",41,0]],
    [["if",3,61],["block",41]],
    [["if",3,63],["block",0]],
    [["if",3,71],["block",52,60,65,79]],
    [["if",3,72],["block",52,60,65,79]],
    [["if",3,73],["block",52,60,65,79]],
    [["if",3,74],["block",52]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ia={Gf:!0},ja={};try{ja.__proto__=ia;fa=ja.Gf;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=da,la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,na=null;var oa=function(){},pa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},qa=function(a){return"number"==typeof a&&!isNaN(a)},ra=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},p=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&ra(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ta=function(a,b){if(!qa(a)||
!qa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},wa=function(a,b){for(var c=new va,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},xa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},za=function(a){return Math.round(Number(a))||0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(ra(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ea=function(){return(new Date).getTime()},va=function(){this.prefix="gtm.";this.values={}};va.prototype.set=function(a,b){this.values[this.prefix+a]=b};va.prototype.get=function(a){return this.values[this.prefix+a]};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];xa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Oa=function(a){if(null==a)return String(a);var b=Na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Qa=function(a){if(!a||"object"!=Oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Pa(a,"constructor")&&!Pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Pa(a,b)},C=function(a,b){var c=b||("array"==Oa(a)?[]:{}),d;for(d in a)if(Pa(a,d)){var e=a[d];"array"==Oa(e)?("array"!=Oa(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Qa(e)?(Qa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Ra=[],Sa={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ta=function(a){return Sa[a]},Ua=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ya=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Za={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},$a=function(a){return Za[a]};
Ra[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ya,$a)+"'"}};var hb=/['()]/g,ib=function(a){return"%"+a.charCodeAt(0).toString(16)};Ra[12]=function(a){var b=
encodeURIComponent(String(a));hb.lastIndex=0;return hb.test(b)?b.replace(hb,ib):b};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},lb=function(a){return kb[a]};Ra[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],ub={},vb,wb,xb,yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ub[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ub[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ra(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=pb[f];if(!h||b.Uc(h))return;c[f]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);xb&&(d=xb.fg(d,k))}catch(y){b.Ee&&b.Ee(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=Bb(a[n],b,c);wb&&(m=m||r===wb.Gb);d.push(r)}return wb&&m?wb.ig(d):d.join("");case "escape":d=Bb(a[1],b,c);if(wb&&ra(a[1])&&"macro"===a[1][0]&&wb.Ig(a))return wb.$g(d);d=String(d);for(var u=2;u<a.length;u++)Ra[a[u]]&&(d=Ra[a[u]](d));return d;case "tag":var q=a[1];if(!sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={qe:a[2],
index:q};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Eb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return vb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{yd:a("convert_case_to"),zd:a("convert_false_to"),Ad:a("convert_null_to"),Bd:a("convert_true_to"),Cd:a("convert_undefined_to"),Ih:a("debug_mode_metadata"),wa:a("function"),ff:a("instance_name"),lf:a("live_only"),pf:a("malware_disabled"),qf:a("metadata"),Jh:a("original_vendor_template_id"),uf:a("once_per_event"),Kd:a("once_per_load"),Sd:a("setup_tags"),Ud:a("tag_id"),Vd:a("teardown_tags")}}();var Gb=null,Jb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var f=qb[e],h=Ib(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ib=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Gb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Uf&&(l["fix_"+m]=!0),l.te=l.te||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var t=k.slice(q.length);if(t.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,P:q.P,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var t={};q[2].replace(e,function(v,w,y,x,A){var B=y||x||A||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=B;t[w]=z.textContent||z.innerText||B});return{tagName:q[1],P:t,zb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},u=function(){for(var q in n)if(n[q].test(k)){var t=r[q]();return t?(t.type=t.type||q,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.te&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Ce=function(){return this[this.length-1]};v.Wc=function(z){var F=this.Ce();return F&&F.tagName&&F.tagName.toUpperCase()===z.toUpperCase()};v.eg=
function(z){for(var F=0,H;H=this[F];F++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.zb=q.test(z.tagName)||z.zb);return z},y=u,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(z){var F=z.tagName;"TR"===F.toUpperCase()&&v.Wc("TABLE")?(k="<TBODY>"+k,B()):l.Sh&&t.test(F)&&v.eg(F)?v.Wc(F)?x():(k="</"+z.tagName+">"+k,B()):z.zb||v.push(z)},endTag:function(z){v.Ce()?l.rg&&!v.Wc(z.tagName)?x():v.pop():l.rg&&(y(),B())}},B=function(){var z=k,F=w(y());k=z;if(F&&
A[F.type])A[F.type](F)};u=function(){B();return w(y())}}();return{append:function(q){k+=q},ih:u,Zh:function(q){for(var t;(t=u())&&(!q[t.type]||!1!==q[t.type](t)););},clear:function(){var q=k;k="";return q},$h:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.di="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ci=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.H=b;a.J=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.P){var u=m.P[r];n+=
" "+r+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.zb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.o=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;dc=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,u,q){var t,v=r&&r.length||0;for(t=0;t<v;t++)u.call(q,r[t],t)}function d(r,u,q){for(var t in r)r.hasOwnProperty(t)&&u.call(q,t,r[t])}function e(r,
u){d(u,function(q,t){r[q]=t});return r}function f(r,u){r=r||{};d(u,function(q,t){b(r[q])||(r[q]=t)});return r}function h(r){try{return m.call(r)}catch(q){var u=[];c(r,function(t){u.push(t)});return u}}var k={Kf:a,Lf:a,Mf:a,Nf:a,Vf:a,Wf:function(r){return r},done:a,error:function(r){throw r;},lh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(q,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function u(q,t){var v=q.ownerDocument;e(this,{root:q,options:t,Ab:v.defaultView||v.parentWindow,Pa:v,fc:dc("",{Uf:!0}),Ic:[q],fd:"",gd:v.createElement(q.nodeName),wb:[],Fa:[]});r(this.gd,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.Fa,arguments);for(var q;!this.Sb&&this.Fa.length;)q=this.Fa.shift(),"function"===typeof q?this.ag(q):this.rd(q)};u.prototype.ag=function(q){var t={type:"function",value:q.name||q.toString()};this.bd(t);q.call(this.Ab,this.Pa);this.Je(t)};
u.prototype.rd=function(q){this.fc.append(q);for(var t,v=[],w,y;(t=this.fc.ih())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.Dh(v);w&&this.Ag(t);y&&this.Bg(t)};u.prototype.Dh=function(q){var t=this.Yf(q);t.fe&&(t.Sc=this.fd+t.fe,this.fd+=t.eh,this.gd.innerHTML=t.Sc,this.Ah())};u.prototype.Yf=function(q){var t=this.Ic.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.P){if(!/^noscript$/i.test(x.tagName)){var A=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.P.id&&"ps-style"!==x.P.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.zb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{ei:q,raw:v.join(""),fe:w.join(""),eh:y.join("")}};u.prototype.Ah=function(){for(var q,t=[this.gd];b(q=t.shift());){var v=1===q.nodeType;if(!v||!r(q,"proxyof")){v&&(this.Ic[r(q,"id")]=q,r(q,"id",null));var w=q.parentNode&&r(q.parentNode,"proxyof");
w&&this.Ic[w].appendChild(q)}t.unshift.apply(t,h(q.childNodes))}};u.prototype.Ag=function(q){var t=this.fc.clear();t&&this.Fa.unshift(t);q.src=q.P.src||q.P.Kh;q.src&&this.wb.length?this.Sb=q:this.bd(q);var v=this;this.Ch(q,function(){v.Je(q)})};u.prototype.Bg=function(q){var t=this.fc.clear();t&&this.Fa.unshift(t);q.type=q.P.type||q.P.TYPE||"text/css";this.Eh(q);t&&this.write()};u.prototype.Eh=function(q){var t=this.$f(q);this.Fg(t);q.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=q.content:
t.appendChild(this.Pa.createTextNode(q.content)))};u.prototype.$f=function(q){var t=this.Pa.createElement(q.tagName);t.setAttribute("type",q.type);d(q.P,function(v,w){t.setAttribute(v,w)});return t};u.prototype.Fg=function(q){this.rd('<span id="ps-style"/>');var t=this.Pa.getElementById("ps-style");t.parentNode.replaceChild(q,t)};u.prototype.bd=function(q){q.Wg=this.Fa;this.Fa=[];this.wb.unshift(q)};u.prototype.Je=function(q){q!==this.wb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.wb.shift(),this.write.apply(this,q.Wg),!this.wb.length&&this.Sb&&(this.bd(this.Sb),this.Sb=null))};u.prototype.Ch=function(q,t){var v=this.Zf(q),w=this.rh(v),y=this.options.Kf;q.src&&(v.src=q.src,this.ph(v,w?y:function(){t();y()}));try{this.Eg(v),q.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Zf=function(q){var t=this.Pa.createElement(q.tagName);d(q.P,function(v,w){t.setAttribute(v,w)});q.content&&(t.text=q.content);return t};u.prototype.Eg=function(q){this.rd('<span id="ps-script"/>');
var t=this.Pa.getElementById("ps-script");t.parentNode.replaceChild(q,t)};u.prototype.ph=function(q,t){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);t()}})};u.prototype.rh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.lh&&q.src&&q.hasAttribute("async"))};
return u}();l.postscribe=function(){function r(){var w=t.shift(),y;w&&(y=w[w.length-1],y.Lf(),w.stream=u.apply(null,w),y.Mf())}function u(w,y,x){function A(H){H=x.Wf(H);v.write(H);x.Nf(H)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var B=w.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var F=v.Ab.onerror||a;v.Ab.onerror=function(H,L,Q){x.error({Wh:H+
" - "+L+":"+Q});F.apply(v.Ab,arguments)};v.write(y,function(){e(B,z);v.Ab.onerror=F;x.done();v=null;r()});return v}var q=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Uh?w[0]:w;var A=[w,y,x];w.Zg={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.Vf(A);t.push(A);v||r();return w.Zg},{streams:{},Yh:t,Nh:n})}();ec=l.postscribe}})();var D=window,E=document,fc=navigator,gc=E.currentScript&&E.currentScript.src,hc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=E.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=la.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=E.getElementsByTagName("script")[0]||E.body||E.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=E.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=E.body&&E.body.lastChild||
E.body||E.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},pc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},qc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},rc=function(a){var b=E.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},sc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},tc=function(a){fc.sendBeacon&&fc.sendBeacon(a)||mc(a)},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?E.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!E.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(E.querySelectorAll)try{var zc=E.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==E.documentElement&&(yc=!0)}catch(a){}var vc=yc;var Pc={},Qc=null,Rc=Math.random();Pc.s="GTM-7BF3X";Pc.Kb="4t0";Pc.Jd="";var Sc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Tc="www.googletagmanager.com/gtm.js";
var Uc=Tc,Vc=null,Wc=null,Xc=null,Yc="//www.googletagmanager.com/a?id="+Pc.s+"&cv=336",Zc={},$c={},ad=function(){var a=Qc.sequence||0;Qc.sequence=a+1;return a};var bd={},I=function(a,b){bd[a]=bd[a]||[];bd[a][b]=!0},cd=function(a){for(var b=[],c=bd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var dd=function(){return"&tc="+sb.filter(function(a){return a}).length},gd=function(){ed||(ed=D.setTimeout(fd,500))},fd=function(){ed&&(D.clearTimeout(ed),ed=void 0);void 0===hd||id[hd]&&!kd&&!ld||(md[hd]||nd.Kg()||0>=od--?(I("GTM",1),md[hd]=!0):(nd.jh(),mc(pd()),id[hd]=!0,qd=rd=ld=kd=""))},pd=function(){var a=hd;if(void 0===a)return"";var b=cd("GTM"),c=cd("TAGGING");return[sd,id[a]?"":"&es=1",td[a],b?"&u="+b:"",c?"&ut="+c:"",dd(),kd,ld,rd,qd,"&z=0"].join("")},ud=function(){return[Yc,"&v=3&t=t","&pid="+
ta(),"&rv="+Pc.Kb].join("")},vd="0.005000">Math.random(),sd=ud(),wd=function(){sd=ud()},id={},kd="",ld="",qd="",rd="",hd=void 0,td={},md={},ed=void 0,nd=function(a,b){var c=0,d=0;return{Kg:function(){if(c<a)return!1;Ea()-d>=b&&(c=0);return c>=a},jh:function(){Ea()-d>=b&&(c=0);c++;d=Ea()}}}(2,1E3),od=1E3,xd=function(a,b){if(vd&&!md[a]&&hd!==a){fd();hd=a;qd=kd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";td[a]="&e="+c+"&eid="+a;gd()}},yd=function(a,b,c){if(vd&&!md[a]&&
b){a!==hd&&(fd(),hd=a);var d,e=String(b[Fb.wa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;kd=kd?kd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(ub[h]?"1":"2")+d;qd=qd?qd+"."+k:"&ti="+k;gd();2022<=pd().length&&fd()}},zd=function(a,b,c){if(vd&&!md[a]){a!==hd&&(fd(),hd=a);var d=c+b;ld=ld?ld+
"."+d:"&epr="+d;gd();2022<=pd().length&&fd()}};var Ad={},Bd=new va,Cd={},Dd={},Gd={name:"dataLayer",set:function(a,b){C(La(a,b),Cd);Ed()},get:function(a){return Fd(a,2)},reset:function(){Bd=new va;Cd={};Ed()}},Fd=function(a,b){if(2!=b){var c=Bd.get(a);if(vd){var d=Hd(a);c!==d&&I("GTM",5)}return c}return Hd(a)},Hd=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Id(b)},Id=function(a){for(var b=Cd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Jd=function(a,b){Dd.hasOwnProperty(a)||(Bd.set(a,b),C(La(a,b),Cd),Ed())},Ed=function(a){xa(Dd,function(b,c){Bd.set(b,c);C(La(b,void 0),Cd);C(La(b,c),Cd);a&&delete Dd[b]})},Kd=function(a,b,c){Ad[a]=Ad[a]||{};var d=1!==c?Hd(b):Bd.get(b);"array"===Oa(d)||"object"===Oa(d)?Ad[a][b]=C(d):Ad[a][b]=d},Ld=function(a,b){if(Ad[a])return Ad[a][b]},Md=function(a,b){Ad[a]&&delete Ad[a][b]};var J={sa:"_ee",Lh:"_uci",yc:"event_callback",Fb:"event_timeout",D:"gtag.config",ba:"allow_ad_personalization_signals",zc:"restricted_data_processing",Za:"allow_google_signals",ca:"cookie_expires",Eb:"cookie_update",$a:"session_duration",ja:"user_properties",ra:"transport_url"};J.ze=[J.ba,J.Za,J.Eb];J.Be=[J.ca,J.Fb,J.$a];var Pd=/[A-Z]+/,Qd=/\s/,Rd=function(a){if(g(a)&&(a=Ca(a),!Qd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],w:d}}}}},Td=function(a){for(var b={},c=0;c<a.length;++c){var d=Rd(a[c]);d&&(b[d.id]=d)}Sd(b);var e=[];xa(b,function(f,h){e.push(h)});return e};
function Sd(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.w[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ud=function(){var a=!1;return a};var P=function(a,b,c,d){return(2===Vd()||d||"http:"!=D.location.protocol?a:b)+c},Vd=function(){var a=kc(),b;if(1===a)a:{var c=Uc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=E.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var ie=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),je={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ke={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},le="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ne=function(a){var b=Fd("gtm.whitelist");b&&I("GTM",9);var c=b&&Ka(Ba(b),je),d=Fd("gtm.blacklist");d||(d=Fd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];me()&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=p(Ba(d),"google")&&I("GTM",2);var e=d&&Ka(Ba(d),ke),f={};return function(h){var k=h&&h[Fb.wa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=$c[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>p(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>p(c,l[r])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var q=0<=p(e,k);if(q)u=q;else{var t=wa(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=p(l,"sandboxedScripts"))||c&&-1!==p(c,"sandboxedScripts")||(v=wa(e,le));return f[k]=v}},me=function(){return ie.test(D.location&&D.location.hostname)};var oe={fg:function(a,b){b[Fb.yd]&&"string"===typeof a&&(a=1==b[Fb.yd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.Ad)&&null===a&&(a=b[Fb.Ad]);b.hasOwnProperty(Fb.Cd)&&void 0===a&&(a=b[Fb.Cd]);b.hasOwnProperty(Fb.Bd)&&!0===a&&(a=b[Fb.Bd]);b.hasOwnProperty(Fb.zd)&&!1===a&&(a=b[Fb.zd]);return a}};var pe={active:!0,isWhitelisted:function(){return!0}},qe=function(a){var b=Qc.zones;!b&&a&&(b=Qc.zones=a());return b};var re=function(){};var se=!1,te=0,ue=[];function ve(a){if(!se){var b=E.createEventObject,c="complete"==E.readyState,d="interactive"==E.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){se=!0;for(var e=0;e<ue.length;e++)G(ue[e])}ue.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function we(){if(!se&&140>te){te++;try{E.documentElement.doScroll("left"),ve()}catch(a){D.setTimeout(we,50)}}}var xe=function(a){se?a():ue.push(a)};var ye={},ze={},Ae=function(a,b,c,d){if(!ze[a]||Sc[b]||"__zone"===b)return-1;var e={};Qa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return ze[a].tags.push(e)-1},Be=function(a,b,c,d){if(ze[a]){var e=ze[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ce(a){for(var b=ye[a]||[],c=0;c<b.length;c++)b[c]();ye[a]={push:function(d){d(Pc.s,ze[a])}}}
var Fe=function(a,b,c){ze[a]={tags:[]};pa(b)&&De(a,b);c&&D.setTimeout(function(){return Ce(a)},Number(c));return Ee(a)},De=function(a,b){ye[a]=ye[a]||[];ye[a].push(Ha(function(){return G(function(){b(Pc.s,ze[a])})}))};function Ee(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&Ce(a)})},Sf:function(){d=!0;b>=c&&Ce(a)}}};var Ge=function(){function a(d){return!qa(d)||0>d?0:d}if(!Qc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=qa(Gd.get("gtm.start"))?Gd.get("gtm.start"):0;Qc._li={cst:a(c-b),cbt:a(Wc-b)}}};var Ke={},Le=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Me=!1;
var Ne=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Ge();return D[b]},Oe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Le();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Qe=function(a){},Pe=function(){return D.GoogleAnalyticsObject||"ga"};var Se=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Te=/:[0-9]+$/,Ue=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Xe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ve(a.protocol)||Ve(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Te,"").toLowerCase());return We(a,b,c,d,e)},We=function(a,b,c,d,e){var f,h=Ve(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ye(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Te,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);
f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=p(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ue(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ve=function(a){return a?a.replace(":","").toLowerCase():""},Ye=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},Ze=function(a){var b=E.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Te,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function df(a,b,c,d){var e=sb[a],f=ef(a,b,c,d);if(!f)return null;var h=Bb(e[Fb.Sd],c,[]);if(h&&h.length){var k=h[0];f=df(k.index,{C:f,B:1===k.qe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ef(a,b,c,d){function e(){if(f[Fb.pf])k();else{var w=Cb(f,c,[]),y=Ae(c.id,String(f[Fb.wa]),Number(f[Fb.Ud]),w[Fb.qf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ea()-B;yd(c.id,sb[a],"5");Be(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ea()-B;yd(c.id,sb[a],"6");Be(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;yd(c.id,f,"1");var A=function(){var z=Ea()-B;yd(c.id,f,"7");Be(c.id,y,"exception",z);x||(x=!0,k())};var B=Ea();try{Ab(w,c)}catch(z){A(z)}}}var f=sb[a],h=b.C,k=b.B,l=b.terminate;if(c.Uc(f))return null;var m=Bb(f[Fb.Vd],c,[]);if(m&&m.length){var n=m[0],r=df(n.index,{C:h,B:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.qe?l:r}if(f[Fb.Kd]||f[Fb.uf]){var u=f[Fb.Kd]?tb:c.sh,q=h,t=k;if(!u[a]){e=Ha(e);var v=ff(a,u,e);h=v.C;k=v.B}return function(){u[a](q,t)}}return e}
function ff(a,b,c){var d=[],e=[];b[a]=gf(d,e,c);return{C:function(){b[a]=hf;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=jf;for(var f=0;f<e.length;f++)e[f]()}}}function gf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hf(a){a()}function jf(a,b){b()};var mf=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.ub[d]){var e=sb[d];var f=b.add();try{var h=df(d,{C:f,B:f,terminate:f},a,d);h?c.push({Te:d,Oe:Db(e),qg:h}):(kf(d,a),f())}catch(l){f()}}b.Sf();c.sort(lf);for(var k=0;k<c.length;k++)c[k].qg();return 0<c.length};function lf(a,b){var c,d=b.Oe,e=a.Oe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Te,k=b.Te;f=h>k?1:h<k?-1:0}return f}
function kf(a,b){if(!vd)return;var c=function(d){var e=b.Uc(sb[d])?"3":"4",f=Bb(sb[d][Fb.Sd],b,[]);f&&f.length&&c(f[0].index);yd(b.id,sb[d],e);var h=Bb(sb[d][Fb.Vd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var nf=!1,of=function(a,b,c,d,e){if("gtm.js"==b){if(nf)return!1;nf=!0}xd(a,b);var f=Fe(a,d,e);Kd(a,"event",1);Kd(a,"ecommerce",1);Kd(a,"gtm");var h={id:a,name:b,Uc:ne(c),ub:[],sh:[],Ee:function(){I("GTM",6)}};h.ub=Jb(h);var k=mf(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Qe(Pc.s);if(!k)return k;for(var l=0;l<h.ub.length;l++)if(h.ub[l]){var m=sb[l];if(m&&!Sc[String(m[Fb.wa])])return!0}return!1};var pf=[];function qf(){var a=hc("google_tag_data",{});a.ics||(a.ics={entries:{},set:rf,update:sf,addListener:tf,notifyListeners:uf,active:!1});return a.ics}
function rf(a,b,c,d,e,f){var h=qf();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,n=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),u={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=u;r&&D.setTimeout(function(){k[a]===u&&u.quiet&&(u.quiet=!1,vf(a),uf(),I("TAGGING",2))},f)}}}
function sf(a,b){var c=qf();c.active=!0;if(void 0!=b){var d=wf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=wf(a);f.quiet?(f.quiet=!1,vf(a)):h!==d&&vf(a)}}function tf(a,b){pf.push({ke:a,sg:b})}function vf(a){for(var b=0;b<pf.length;++b){var c=pf[b];ra(c.ke)&&-1!==c.ke.indexOf(a)&&(c.Ne=!0)}}function uf(){for(var a=0;a<pf.length;++a){var b=pf[a];if(b.Ne){b.Ne=!1;try{b.sg.call()}catch(c){}}}}
var wf=function(a){var b=qf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},xf=function(){return qf().active},yf=function(a,b){qf().addListener(a,b)},zf=function(a){function b(){for(var e=qf().entries,f=0;f<c.length;f++)if((e[c[f]]||{}).quiet)return!0;return!1}var c=[J.o];if(b()){var d=!1;yf(c,function(){d||b()||(d=!0,a())})}else a()},Af=function(a,b){if(!1===wf(b)){var c=!1;yf([b],function(){!c&&wf(b)&&(a(),c=!0)})}};var Bf=[J.o,J.J],Cf=function(a){var b=a.region;b&&I("GTM",40);for(var c=ra(b)?b:[b],d=0;d<c.length;++d)for(var e=0;e<Bf.length;e++){var f=Bf[e],h=a[Bf[e]],k=c[d];qf().set(f,h,k,"GB","GB-ENG",void 0)}},Df=function(a){for(var b=0;b<Bf.length;b++){var c=Bf[b],d=a[Bf[b]];qf().update(c,d)}qf().notifyListeners()},Ef=function(a){var b=wf(a);return void 0!=b?b:!0},Ff=function(){for(var a=[],b=0;b<Bf.length;b++){var c=wf(Bf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")};function Hf(a,b){}function If(a,b){return Jf()?Hf(a,b):void 0}function Jf(){var a=!1;return a};var Kf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.C=function(){};this.B=function(){};this.je=void 0},Lf=function(a){var b=new Kf;b.eventModel=a;return b},Mf=function(a,b){a.targetConfig=b;return a},Nf=function(a,b){a.containerConfig=b;return a},Of=function(a,b){a.h=b;return a},Pf=function(a,b){a.globalConfig=b;return a},Qf=function(a,b){a.C=b;return a},Rf=function(a,b){a.B=b;return a};
Kf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Sf=function(a){function b(e){xa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];xa(c,function(e){d.push(e)});return d};function Tf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Uf={},Vf=function(a){return void 0==Uf[a]?!1:Uf[a]};var Xf=function(a,b,c,d){return Wf(d)?Tf(a,String(b||document.cookie),c):[]},$f=function(a,b,c,d,e){if(Wf(e)){var f=Yf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Zf(f,function(h){return h.Tb},b);if(1===f.length)return f[0].id;f=Zf(f,function(h){return h.vb},c);return f[0]?f[0].id:void 0}}};function ag(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Xf(b,f,!1,d).indexOf(c)}
var eg=function(a,b,c){function d(q,t,v){if(null==v)return delete h[t],q;h[t]=v;return q+"; "+t+"="+v}function e(q,t){if(null==t)return delete h[t],q;h[t]=!0;return q+"; "+t}if(!Wf(c.Ca))return!1;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=bg(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Vh);f=d(f,"samesite",
c.ai);c.bi&&(f=e(f,"secure"));f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=cg(),n=0;n<m.length;++n){var r="none"!==m[n]?m[n]:void 0,u=d(f,"domain",r);if(!dg(r,c.path)&&ag(u,a,b,c.Ca))return!0}return!1}l&&"none"!==l&&(f=d(f,"domain",l));return dg(l,c.path)?!1:ag(f,a,b,c.Ca)},fg=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return eg(a,b,c)};
function Zf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Yf(a,b,c){for(var d=[],e=Xf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Tb:1*l[0]||1,vb:1*l[1]||1}))}}return d}
var bg=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},gg=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,hg=/(^|\.)doubleclick\.net$/i,dg=function(a,b){return hg.test(document.location.hostname)||"/"===b&&gg.test(a)},cg=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;hg.test(e)||gg.test(e)||a.push("none");
return a},Wf=function(a){if(!Vf("gtag_cs_api")||!a||!xf())return!0;var b=wf(a);return null==b?!0:!!b};var ig=function(){for(var a=fc.userAgent+(E.cookie||"")+(E.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ea()/1E3)].join(".")},lg=function(a,b,c,d,e){var f=jg(b);return $f(a,f,kg(c),d,e)},mg=function(a,b,c,d){var e=""+jg(c),f=kg(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},jg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},kg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function ng(a,b,c){var d,e=a.tb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ea())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};function og(){for(var a=pg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var pg,rg;function sg(a){pg=pg||qg();rg=rg||og();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(pg[l],pg[m],pg[n],pg[r])}return b.join("")}
function ug(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=rg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}pg=pg||qg();rg=rg||og();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var vg;var zg=function(){var a=wg,b=xg,c=yg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(E,"mousedown",d);nc(E,"keyup",d);nc(E,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ag=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};yg().decorators.push(f)},Bg=function(a,b,c){for(var d=yg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==E.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ia(e,h.callback())}}return e},yg=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Cg=/(.*?)\*(.*?)\*(.*)/,Dg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Eg=/^(?:www\.|m\.|amp\.)+/,Fg=/([^?#]+)(\?[^#]*)?(#.*)?/;function Gg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Ig=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sg(String(d))))}var e=b.join("*");return["1",Hg(e),e].join("*")},Hg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=vg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}vg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^vg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Kg=function(){return function(a){var b=Ze(D.location.href),c=b.search.replace("?",""),d=Ue(c,"_gl",!0)||"";a.query=Jg(d)||{};var e=Xe(b,"fragment").match(Gg("_gl"));a.fragment=Jg(e&&e[3]||"")||{}}},Lg=function(){var a=Kg(),b=yg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},Jg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Cg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Hg(k,n)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],q=0;q<u.length;q+=2)r[u[q]]=ug(u[q+1]);return r}}}}catch(t){}};
function Mg(a,b,c,d){function e(n){var r=n,u=Gg(a).exec(r),q=r;if(u){var t=u[2],v=u[4];q=u[1];v&&(q=q+t+v)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Fg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Ng(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Bg(b,1,c),e=Bg(b,2,c),f=Bg(b,3,c);if(Ja(d)){var h=Ig(d);c?Og("_gl",h,a):Pg("_gl",h,a,!1)}if(!c&&Ja(e)){var k=Ig(e);Pg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Pg(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Og(m,n,r);break a}}"string"==typeof r&&Mg(m,n,r,void 0)}}
function Pg(a,b,c,d){if(c.href){var e=Mg(a,b,c.href,void 0===d?!1:d);Se.test(e)&&(c.href=e)}}
function Og(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=E.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Mg(a,b,c.action);Se.test(m)&&(c.action=m)}}}
var wg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Ng(e,e.hostname)}}catch(h){}},xg=function(a){try{if(a.action){var b=Xe(Ze(a.action),"host");Ng(a,b)}}catch(c){}},Qg=function(a,b,c,d){zg();Ag(a,b,"fragment"===c?2:1,!!d,!1)},Rg=function(a,b){zg();Ag(a,[We(D.location,"host",!0)],b,!0,!0)},Sg=function(){var a=E.location.hostname,b=Dg.exec(E.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Eg,""),l=e.replace(Eg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Tg=function(a,b){return!1===a?!1:a||b||Sg()};var Ug=/^\w+$/,Vg=/^[\w-]+$/,Wg=/^~?[\w-]+$/,Xg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Yg=function(){if(!Vf("gtag_cs_api")||!xf())return!0;var a=wf("ad_storage");return null==a?!0:!!a},Zg=function(a){Yg()?a():Af(a,"ad_storage")};function $g(a){return a&&"string"==typeof a&&a.match(Ug)?a:"_gcl"}
var bh=function(){var a=Ze(D.location.href),b=Xe(a,"query",!1,void 0,"gclid"),c=Xe(a,"query",!1,void 0,"gclsrc"),d=Xe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ue(e,"gclid",void 0);c=c||Ue(e,"gclsrc",void 0)}return ah(b,c,d)},ah=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Vg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Vf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},dh=function(a){var b=bh();Zg(function(){return ch(b,a)})};
function ch(a,b,c){function d(m,n){var r=eh(m,e);r&&(fg(r,n,f),h=!0)}b=b||{};var e=$g(b.prefix);c=c||Ea();var f=ng(b,c,!0);f.Ca="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.fi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var gh=function(a,b){var c=Lg();Zg(function(){for(var d=$g(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Xg[f]){var h=eh(f,d),k=c[h];if(k){var l=Math.min(fh(k),Ea()),m;b:{for(var n=l,r=Xf(h,E.cookie,void 0,"ad_storage"),u=0;u<r.length;++u)if(fh(r[u])>n){m=!0;break b}m=!1}if(!m){var q=ng(b,l,!0);q.Ca="ad_storage";fg(h,k,q)}}}}ch(ah(c.gclid,c.gclsrc),b)})},eh=function(a,b){var c=Xg[a];if(void 0!==c)return b+c},fh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function hh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ih=function(a,b,c,d,e){if(ra(b)){var f=$g(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=eh(a[l],f);if(m){var n=Xf(m,E.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};Zg(function(){Qg(h,b,c,d)})}},jh=function(a){return a.filter(function(b){return Wg.test(b)})},kh=function(a,b){for(var c=$g(b.prefix),d={},e=0;e<a.length;e++)Xg[a[e]]&&(d[a[e]]=Xg[a[e]]);Zg(function(){xa(d,function(f,h){var k=Xf(c+h,E.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=fh(l),
n={};n[f]=[hh(l)];ch(n,b,m)}})})};function lh(a){for(var b=["aw","dc"],c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var mh=function(){function a(d,e,f){f&&(d[e]=f)}var b=bh();if(lh(b)){var c={};a(c,"gclid",b.gclid);a(c,"dclid",b.dclid);a(c,"gclsrc",b.gclsrc);Rg(function(){return c},3);Rg(function(){var d={};return d._up="1",d},1)}},nh=function(){var a;if(Yg()){for(var b=[],c=E.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({md:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&
(h[b[k].md]||(h[b[k].md]=[]),h[b[k].md].push({timestamp:l[1],vg:l[2]}))}a=h}else a={};return a};function oh(){var a=!1;return a}
function ph(a){function b(l){var m;Qc.reported_gclid||(Qc.reported_gclid={});m=Qc.reported_gclid;var n=d+(l?"gcu":"gcs");if(!m[n]){m[n]=!0;var r=[],u=function(v,w){w&&r.push(v+"="+encodeURIComponent(w))},q=d;u("gclid",q);u("gclsrc",e);var t="https://www.google.com/pagead/landing?"+r.join("&");tc(t)}}var c=bh(),d=c.gclid||"",e=c.gclsrc,
f=!a&&(!d||e&&"aw.ds"!==e?!1:!0),h=oh();if(f||h){var k=""+ig();h?zf(function(){b();Ef(J.o)||Af(function(){return b(!0)},J.o)}):b()}};var qh;if(3===Pc.Kb.length)qh="g";else{var rh="G";qh=rh}
var sh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:qh,OPT:"o"},th=function(a){var b=Pc.s.split("-"),c=b[0].toUpperCase(),d=sh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Pc.Kb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Pc.Kb+e};var Dh=["1"],Eh={},Ih=function(a){var b=Fh(a.prefix);Eh[b]||Gh(b,a.path,a.domain)||(Hh(b,ig(),a),Gh(b,a.path,a.domain))};function Hh(a,b,c){var d=mg(b,"1",c.domain,c.path),e=ng(c);e.Ca="ad_storage";fg(a,d,e)}function Gh(a,b,c){var d=lg(a,b,c,Dh,"ad_storage");d&&(Eh[a]=d);return d}function Fh(a){return(a||"_gcl")+"_au"};var Jh=/^\d+\.fls\.doubleclick\.net$/;function Kh(a){Ef("ad_storage")?a():Af(a,"ad_storage")}function Lh(a){var b=Ze(D.location.href),c=Xe(b,"host",!1);if(c&&c.match(Jh)){var d=Xe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Mh(a,b){if("aw"==a||"dc"==a){var c=Lh("gcl"+a);if(c)return c.split(".")}var d=$g(b);if(Ef("ad_storage")&&"_gcl"==d){var e;e=bh()[a]||[];if(0<e.length)return e}var f=eh(a,d),h;if(f){var k=[];if(E.cookie){var l=Xf(f,E.cookie,void 0,"ad_storage");if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=hh(l[m]);n&&-1===p(k,n)&&k.push(n)}h=jh(k)}else h=k}else h=k}else h=[];return h}
var Nh=function(){var a=Lh("gac");if(a)return decodeURIComponent(a);var b=nh(),c=[];xa(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].vg);f=jh(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Oh=function(a,b){var c=bh().dc||[];Kh(function(){Ih(b);var d=Eh[Fh(b.prefix)],e=!1;if(d&&0<c.length){var f=Qc.joined_au=Qc.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;tc(l);e=f[h]=!0}}null==a&&
(a=e);if(a&&d){var m=Fh(b.prefix),n=Eh[m];n&&Hh(m,n,b)}})};var Ii={},Ji=["G","GP"];Ii.Ve="";var Ki=Ii.Ve.split(",");function Li(){var a=Qc;return a.gcq=a.gcq||new Mi}
var Ni=function(a,b,c){Li().register(a,b,c)},Oi=function(a,b,c,d){Li().push("event",[b,a],c,d)},Pi=function(a,b){Li().push("config",[a],b)},Qi={},Ri=function(a){return!0},Si=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Ti=function(a,b,c,d,e){this.type=a;this.m=b;this.Z=c||"";
this.h=d;this.i=e},Mi=function(){this.m={};this.i={};this.h=[]},Ui=function(a,b){var c=Rd(b);return a.m[c.containerId]=a.m[c.containerId]||new Si},Vi=function(a,b,c){if(b){var d=Rd(b);if(d&&1===Ui(a,b).status&&Ri(d.prefix)){Ui(a,b).status=2;var e={};vd&&(e.timeoutId=D.setTimeout(function(){I("GTM",38);gd()},3E3));a.push("require",[e],d.containerId);Qi[d.containerId]=Ea();if(Ud()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=D.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=If(c,h)||k;jc(l)}}}},Wi=function(a,b,c,d){if(d.Z){var e=Ui(a,d.Z),
f=e.m;if(f){var h=C(c),k=C(e.targetConfig[d.Z]),l=C(e.containerConfig),m=C(e.i),n=C(a.i),r=Fd("gtm.uniqueEventId"),u=Rd(d.Z).prefix,q=Rf(Qf(Pf(Of(Nf(Mf(Lf(h),k),l),m),n),function(){zd(r,u,"2");}),function(){zd(r,u,"3");});try{zd(r,u,"1");f(d.Z,b,d.m,q)}catch(t){
zd(r,u,"4");}}}};
Mi.prototype.register=function(a,b,c){if(3!==Ui(this,a).status){Ui(this,a).m=b;Ui(this,a).status=3;c&&(Ui(this,a).i=c);var d=Rd(a),e=Qi[d.containerId];if(void 0!==e){var f=Qc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Qc[d.containerId]._spx&&(h=h.toLowerCase());var k=Fd("gtm.uniqueEventId"),l=h,m=Ea()-f;if(vd&&!md[k]){k!==hd&&(fd(),hd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);rd=rd?rd+","+n:"&cl="+n}delete Qi[d.containerId]}this.flush()}};
Mi.prototype.push=function(a,b,c,d){var e=Math.floor(Ea()/1E3);Vi(this,c,b[0][J.ra]||this.i[J.ra]);this.h.push(new Ti(a,e,c,b,d));d||this.flush()};
Mi.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Ui(this,c.Z).status&&!a)return;vd&&D.clearTimeout(c.h[0].timeoutId);break;case "set":xa(c.h[0],function(l,m){C(La(l,m),b.i)});break;case "config":var d=c.h[0],e=!!d[J.bc];delete d[J.bc];var f=Ui(this,c.Z),h=Rd(c.Z),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.Z]={});f.h&&e||Wi(this,J.D,d,c);f.h=!0;delete d[J.sa];k?C(d,f.containerConfig):
C(d,f.targetConfig[c.Z]);break;case "event":Wi(this,c.h[1],c.h[0],c)}this.h.shift()}};var Xi=["GP","G"],Yi="G".split(/,/);Yi.push("GF");Yi.push("HA");var Zi=!1;Zi=!0;var $i=null,aj={},bj={},cj;function dj(a,b){var c={event:a};b&&(c.eventModel=C(b),b[J.yc]&&(c.eventCallback=b[J.yc]),b[J.Fb]&&(c.eventTimeout=b[J.Fb]));return c}
var ij={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Qa(a[2])&&void 0!=a[2])return;c=a[2]}var d=dj(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Qa(a[1])?b=C(a[1]):3==a.length&&g(a[1])&&(b={},Qa(a[2])||ra(a[2])?b[a[1]]=C(a[2]):
b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var jj={policy:!0};var kj=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},mj=function(a){var b=lj(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var nj=!1,oj=[];function pj(){if(!nj){nj=!0;for(var a=0;a<oj.length;a++)G(oj[a])}}var qj=function(a){nj?G(a):oj.push(a)};var Ij=function(a){if(Hj(a))return a;this.h=a};Ij.prototype.zg=function(){return this.h};var Hj=function(a){return!a||"object"!==Oa(a)||Qa(a)?!1:"getUntrustedUpdateValue"in a};Ij.prototype.getUntrustedUpdateValue=Ij.prototype.zg;var Jj=[],Kj=!1,Lj=function(a){return D["dataLayer"].push(a)},Mj=function(a){var b=Qc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Nj(a){var b=a._clear;xa(a,function(f,h){"_clear"!==f&&(b&&Jd(f,void 0),Jd(f,h))});Vc||(Vc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=ad(),a["gtm.uniqueEventId"]=d,Jd("gtm.uniqueEventId",d));Xc=c;var e=Oj(a);Xc=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function Oj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Qc.zones;d=e?e.checkState(Pc.s,c):pe;return d.active?of(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Pj(){for(var a=!1;!Kj&&0<Jj.length;){Kj=!0;delete Cd.eventModel;Ed();var b=Jj.shift();if(null!=b){var c=Hj(b);if(c){var d=b;b=Hj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Fd(h,1);if(ra(k)||Qa(k))k=C(k);Dd[h]=k}}try{if(pa(b))try{b.call(Gd)}catch(v){}else if(ra(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),u=Fd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,r)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&g(b[0])){var t=ij[b[0]];if(t&&(!c||!jj[b[0]])){b=t(b);break a}}b=void 0}if(!b){Kj=!1;continue}}a=Nj(b)||a}}finally{c&&Ed(!0)}}Kj=!1}
return!a}function Qj(){var a=Pj();try{kj(D["dataLayer"],Pc.s)}catch(b){}return a}
var Sj=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};xe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});qj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Qc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ij(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Jj.push.apply(Jj,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Pj()&&h};Jj.push.apply(Jj,a.slice(0));Rj()&&G(Qj)},Rj=function(){var a=!0;return a};var Tj={};Tj.Gb=new String("undefined");
var Uj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Tj.Gb?b:a[d]);return c.join("")}};Uj.prototype.toString=function(){return this.h("undefined")};Uj.prototype.valueOf=Uj.prototype.toString;Tj.Df=Uj;Tj.Gc={};Tj.ig=function(a){return new Uj(a)};var Vj={};Tj.kh=function(a,b){var c=ad();Vj[c]=[a,b];return c};Tj.me=function(a){var b=a?0:1;return function(c){var d=Vj[c];if(d&&"function"===typeof d[b])d[b]();Vj[c]=void 0}};Tj.Ig=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Tj.$g=function(a){if(a===Tj.Gb)return a;var b=ad();Tj.Gc[b]=a;return'google_tag_manager["'+Pc.s+'"].macro('+b+")"};Tj.Sg=function(a,b,c){a instanceof Tj.Df&&(a=a.h(Tj.kh(b,c)),b=oa);return{Sc:a,C:b}};var Wj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||pc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Xj=function(a){Qc.hasOwnProperty("autoEventsSettings")||(Qc.autoEventsSettings={});var b=Qc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Yj=function(a,b,c){Xj(a)[b]=c},Zj=function(a,b,c,d){var e=Xj(a),f=Fa(e,b,d);e[b]=c(f)},ak=function(a,b,c){var d=Xj(a);return Fa(d,b,c)};var bk=["input","select","textarea"],ck=["button","hidden","image","reset","submit"],dk=function(a){var b=a.tagName.toLowerCase();return!sa(bk,function(c){return c===b})||"input"===b&&sa(ck,function(c){return c===a.type.toLowerCase()})?!1:!0},ek=function(a){return a.form?a.form.tagName?a.form:E.getElementById(a.form):sc(a,["form"],100)},fk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(dk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var gk=!!D.MutationObserver,hk=void 0,ik=function(a){if(!hk){var b=function(){var c=E.body;if(c)if(gk)(new MutationObserver(function(){for(var e=0;e<hk.length;e++)G(hk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<hk.length;e++)G(hk[e])}))})}};hk=[];E.body?b():G(b)}hk.push(a)};var Dk=D.clearTimeout,Ek=D.setTimeout,R=function(a,b,c){if(Ud()){b&&G(b)}else return jc(a,b,c)},Fk=function(){return D.location.href},Gk=function(a){return Xe(Ze(a),"fragment")},Hk=function(a){return Ye(Ze(a))},U=function(a,b){return Fd(a,b||2)},Ik=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Lj(a)):d=Lj(a);return d},Jk=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Kk=function(a,b,c){return Xf(a,b,void 0===c?!0:!!c)},Lk=function(a,b){if(Ud()){b&&G(b)}else lc(a,b)},Mk=function(a){return!!ak(a,"init",!1)},Nk=function(a){Yj(a,"init",!0)},Ok=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Uc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(P("https://","http://",c))},Pk=function(a,b){var c=a[b];return c};
var Qk=Tj.Sg;var ml=new va;function nl(a,b){function c(h){var k=Ze(h),l=Xe(k,"protocol"),m=Xe(k,"host",!0),n=Xe(k,"port"),r=Xe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ol(a){return pl(a)?1:0}
function pl(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ra(c)){for(var d=0;d<c.length;d++)if(ol({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=p(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var q=String(c)+u,t=ml.get(q);t||(t=new RegExp(c,u),ml.set(q,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return nl(b,
c)}return!1};var ql=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var rl={},sl=encodeURI,Y=encodeURIComponent,tl=mc;var ul=function(a,b){if(!a)return!1;var c=Xe(Ze(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var vl=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};rl.Jg=function(){var a=!1;return a};var Jm=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||ta();return a.hid};var Um=window,Vm=document,Wm=function(a){var b=Um._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Um["ga-disable-"+a])return!0;try{var c=Um.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Tf("AMP_TOKEN",String(Vm.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Vm.getElementById("__gaOptOutExtension")?!0:!1};
var Zm=function(a){xa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ja]||{};xa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var cn=function(a,b,c){Oi(b,c,a)},dn=function(a,b,c){Oi(b,c,a,!0)},fn=function(a,b){};
function en(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;Ge();R(b,function(){var d=X("google_trackConversion");if(pa(d)){var e=
{};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=vl(a.vtp_customParams,"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,
google_gtm:th()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=a.vtp_userId);d(h)||c()}else c()},c)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ld(a.vtp_gtmEventId,"event"))})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Wj(c,"gtm.click");Ik(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Mk("cl")){var c=X("document");nc(c,"click",a,!0);Nk("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return ta(a.vtp_min,a.vtp_max)})}();
Z.a.tg=["google"],function(){function a(k){h.push(k);1<h.length||G(function(){var l=h.join(",");h=[];Ik({event:"gtm.triggerGroup","gtm.triggers":l})})}function b(k,l){var m=d[l],n=m.indexOf(k);-1!==n&&(m.splice(n,1),m.length||a(l))}function c(k){G(k.vtp_gtmOnSuccess);var l=k.vtp_uniqueTriggerId,m=k.vtp_triggerIds,n=k.vtp_firingId;if(k.vtp_isListeningTag){var r=e[n];r?b(n,r):f.push(n)}else{d[l]=m;for(var u=0,q;q=m[u];u++)e[q]=l;for(var t=0;t<f.length;t++)b(f[t],l)}}var d={},e={},f=[],h=[];Z.__tg=c;Z.__tg.b="tg";Z.__tg.g=!0;Z.__tg.priorityOverride=0}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||Fk();var d=b[a("vtp_component")];if(!d||"URL"==d)return Hk(String(c));var e=Ze(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ra(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Xe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Xe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Xc&&b.Zc>=b.Xc)b.Tc&&X("self").clearInterval(b.Tc);else{b.Zc++;var c=(new Date).getTime();Ik({event:b.da,"gtm.timerId":b.Tc,"gtm.timerEventNumber":b.Zc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Xc,"gtm.timerStartTime":b.Se,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Se,"gtm.triggers":b.wh})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){G(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{da:b.vtp_eventName,Zc:0,interval:Number(b.vtp_interval),Xc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),wh:String(b.vtp_uniqueTriggerId||"0"),Se:(new Date).getTime()};c.Tc=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={};if(d.vtp_gaSettings){var m=d.vtp_gaSettings;C(vl(m.vtp_fieldsToSet,"fieldName","value"),f);C(vl(m.vtp_contentGroup,"index","group"),h);C(vl(m.vtp_dimension,"index","dimension"),k);C(vl(m.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=C(m);d=C(d,n)}C(vl(d.vtp_fieldsToSet,"fieldName","value"),f);C(vl(d.vtp_contentGroup,
"index","group"),h);C(vl(d.vtp_dimension,"index","dimension"),k);C(vl(d.vtp_metric,"index","metric"),l);var r=Ne(d.vtp_functionName);if(pa(r)){var u="",q="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(q=d.vtp_trackerName,u=q+"."):(q="gtm"+ad(),u=q+".");var t={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},
w=function(O){var M=[].slice.call(arguments,0);M[0]=u+M[0];r.apply(window,M)},y=function(O,M){return void 0===M?M:O(M)},x=function(O,M){if(M)for(var Ga in M)M.hasOwnProperty(Ga)&&w("set",O+Ga,M[Ga])},A=function(){},B=function(O,M,Ga){var Pb=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(Ga&&t[Da]||!Ga&&void 0===t[Da])){var bb=v[Da]?Aa(O[Da]):O[Da];
"anonymizeIp"!=Da||bb||(bb=void 0);M[Da]=bb;Pb++}return Pb},z={name:q};B(f,z,!0);r("create",d.vtp_trackingId||e.trackingId,z);w("set","&gtm",th(!0));d.vtp_enableRecaptcha&&
w("require","recaptcha","recaptcha.js");(function(O,M){void 0!==d[M]&&w("set",O,d[M])})("nonInteraction","vtp_nonInteraction");x("contentGroup",h);x("dimension",k);x("metric",l);var F={};B(f,F,!1)&&w("set",F);var H;d.vtp_enableLinkId&&w("require","linkid","linkid.js");w("set","hitCallback",function(){var O=f&&f.hitCallback;pa(O)&&
O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(w("require","ec","ec.js"),A());var L={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(za,d.vtp_eventValue||e.value)};B(H,L,!1);w("send",L);}else if("TRACK_SOCIAL"==
d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(w("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var ca="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require",
"displayfeatures",void 0,{cookieName:ca})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var V="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:V})}H?w("send","pageview",H):w("send","pageview");d.vtp_autoLinkDomains&&Oe(u,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var ua=
d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var ya=If(f._x_19,"/analytics.js"),Qb=P("https:","http:","//www.google-analytics.com/"+ua,f&&f.forceSSL);R("analytics.js"===ua&&ya?ya:Qb,function(){var O=Le();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();






Z.a.aev=["google"],function(){function a(q,t){var v=Ld(q,"gtm");if(v)return v[t]}function b(q,t,v,w){w||(w="element");var y=q+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,r.push(y),35<r.length)){var B=r.shift();delete n[B]}}return x}function c(q,t,v){var w=a(q,u[t]);return void 0!==w?w:v}function d(q,t){if(!q)return!1;var v=e(Fk());ra(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(q))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!ul(q,w)}function e(q){m.test(q)||(q="http://"+q);return Xe(Ze(q),"HOST",!0)}function f(q,t,v){switch(q){case "SUBMIT_TEXT":return b(t,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return pc(q,"value");case "button":return qc(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var t=0,v=0;v<q.elements.length;v++)dk(q.elements[v])&&t++;return t}}function l(q,t,v){var w=a(q,"interactedFormField");return w&&pc(w,t)||v}var m=/^https?:\/\//i,n={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var t=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,qc)||v;case "URL":var x;a:{var A=String(a(t,"elementUrl")||v||""),B=Ze(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=Xe(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var F;if(void 0===q.vtp_attribute)F=c(t,w,v);else{var H=q.vtp_attribute,L=a(t,"element");F=L&&pc(L,H)||v||""}return F;case "MD":var Q=q.vtp_mdValue,T=b(t,"MD",pk);return Q&&T?sk(T,Q)||
v:T||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();


Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Ge();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:th()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?U(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var r=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},u=function(v){return function(w,y,x,A){var B="DATA_LAYER"==v?U(x):k[y];A(B)&&r(w,B)}};var q=If(k.vtp_transportUrl,"/pagead/conversion_async.js");q||(q=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");
k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=
!0;t&&b.push(l);a||(a=!0,R(q,f(),e(q)))};
Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){D._linkedin_data_partner_id=a.vtp_id;R("https://snap.licdn.com/li.lms-analytics/insight.min.js",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=X(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},h=function(k,l){void 0!==c[k]&&(f[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{R("//bat.bing.com/bat.js",
function(){var k=ql(X("UET"),{ti:c.vtp_tagId,q:e});D[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){G(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0}();





Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=E.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,ic(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){G(h)}}}var b=function(d,e,f){xe(function(){var h,k=Qc;k.postscribe||(k.postscribe=ec);h=k.postscribe;var l={done:e},m=E.createElement("div");m.style.display="none";m.style.visibility="hidden";E.body.appendChild(m);try{h(m,d,l)}catch(n){G(f)}})};var c=function(d){if(E.body){var e=
d.vtp_gtmOnFailure,f=Qk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Sc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(E.body,rc(h),k,e)()}else Ek(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();




Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=rc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}tl(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var gn={};gn.macro=function(a){if(Tj.Gc.hasOwnProperty(a))return Tj.Gc[a]},gn.onHtmlSuccess=Tj.me(!0),gn.onHtmlFailure=Tj.me(!1);gn.dataLayer=Gd;gn.callback=function(a){Zc.hasOwnProperty(a)&&pa(Zc[a])&&Zc[a]();delete Zc[a]};function hn(){Qc[Pc.s]=gn;Ia($c,Z.a);wb=wb||Tj;xb=oe}
function jn(){Uf.gtm_3pds=!0;Qc=D.google_tag_manager=D.google_tag_manager||{};if(Qc[Pc.s]){var a=Qc.zones;a&&a.unregisterChild(Pc.s);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)sb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},u=0;u<n.length;u++)r[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(r)}ub=Z;vb=ol;hn();Sj();se=!1;te=0;if("interactive"==E.readyState&&!E.createEventObject||"complete"==E.readyState)ve();
else{nc(E,"DOMContentLoaded",ve);nc(E,"readystatechange",ve);if(E.createEventObject&&E.documentElement.doScroll){var q=!0;try{q=!D.frameElement}catch(y){}q&&we()}nc(D,"load",ve)}nj=!1;"complete"===E.readyState?pj():nc(D,"load",pj);a:{if(!vd)break a;D.setInterval(wd,
864E5);}Wc=(new Date).getTime();}}
(function(a){
a()})(jn);

})()

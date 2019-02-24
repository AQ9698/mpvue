var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"carousel1":{"type":"carousel","style":"height:375rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":{"action":"to-franchisee","franchisee-id":"b33boyUE8P","franchisee-name":"美味餐厅"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591558e0042bb.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":0,"eventParams":"{\"franchisee_id\":\"b33boyUE8P\"}","eventHandler":"tapToFranchiseeHandler"},{"customFeature":{"action":"to-franchisee","franchisee-id":"1H9fN1Fe49","franchisee-name":"食客"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5919646682231.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":1,"eventParams":"{\"franchisee_id\":\"1H9fN1Fe49\"}","eventHandler":"tapToFranchiseeHandler"}],"customFeature":{"autoplay":true,"interval":2},"animations":[],"page_form":"","compId":"carousel1"},"picture2":{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:58.59375rpx;width:656.25rpx;margin-left:auto;margin-right:auto;margin-top:-492.1875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5909ad933aa80.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10005"},"animations":[],"page_form":"","compId":"picture2","parentCompid":"picture2","itemType":"picture","itemParentType":null,"itemIndex":"picture2","eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10005\\\/page10005\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel3":{"type":"free-vessel","style":"width:750rpx;height:220.3125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:295.3125rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:93.75rpx;width:93.75rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:75rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c13f84f999.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:93.75rpx;width:93.75rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:243.75rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c13f845519.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10016"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10016\\\/page10016\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:93.75rpx;width:93.75rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:412.5rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c13f8d0b45.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10022"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10022\\\/page10022\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:93.75rpx;width:93.75rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:581.25rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c13f8576d3.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10021"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:65.625rpx;top:150rpx;margin-right:0;","content":"时尚购物","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:234.375rpx;top:150rpx;margin-right:0;","content":"美味餐饮","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10016"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10016\\\/page10016\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:403.125rpx;top:150rpx;margin-right:0;","content":"养生美容","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10022"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":6,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10022\\\/page10022\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:576.5625rpx;top:150rpx;margin-right:0;","content":"休闲娱乐","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10021"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel3","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":7,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10021\\\/page10021\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel3"},"free_vessel4":{"type":"free-vessel","style":"width:750rpx;height:82.03125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:32.8125rpx;width:154.6875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c14624b082.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:234.375rpx;top:21.09375rpx;margin-right:0;","content":"这些高逼格的ins美食照片是怎么...","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10013"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10013\\\/page10013\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel4"},"free_vessel5":{"type":"free-vessel","style":"width:750rpx;height:215.625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:145.3125rpx;width:321.09375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5910190097952.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"get-coupon","inner-page-link":"prePage","coupon-id":"555"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel5","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"coupon_id\":\"555\"}","eventHandler":"tapGetCouponHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:145.3125rpx;width:321.09375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:391.40625rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59101900e6cbc.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"get-coupon","coupon-id":"556"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel5","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"coupon_id\":\"556\"}","eventHandler":"tapGetCouponHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel5"},"free_vessel6":{"type":"free-vessel","style":"width:750rpx;height:328.125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:328.125rpx;width:375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c15b3bd8ac.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10024"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10024\\\/page10024\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:164.0625rpx;width:375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c15b3a790c.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10002"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:164.0625rpx;width:375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:375rpx;top:164.0625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c15b39531c.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10015"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10015\\\/page10015\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:93.75rpx;top:23.4375rpx;margin-right:0;","content":"商  场  导  视","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10024"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10024\\\/page10024\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:234.375rpx;width:335.15625rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:82.03125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1676e0557.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10024"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10024\\\/page10024\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:67.96875rpx;width:72.65625rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:628.125rpx;top:46.875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c16d7b516c.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10002"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:447.65625rpx;top:35.15625rpx;margin-right:0;","content":"商场快报","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10002"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":6,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:23.4375rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:438.28125rpx;top:82.03125rpx;margin-right:0;","content":"有吃还能看","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10002"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":7,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10002\\\/page10002\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:70.3125rpx;width:70.3125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:632.8125rpx;top:201.5625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c17a0d9502.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10015"},"animations":[],"compId":"data.content[8]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":8,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10015\\\/page10015\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:457.03125rpx;top:199.21875rpx;margin-right:0;","content":"优惠活动","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10015"},"animations":[],"compId":"data.content[9]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":9,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10015\\\/page10015\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:393.75rpx;top:250.78125rpx;margin-right:0;","content":"让你掌握第一手活动","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10015"},"animations":[],"compId":"data.content[10]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":10,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10015\\\/page10015\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel6"},"free_vessel7":{"type":"free-vessel","style":"width:750rpx;height:82.03125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:335.15625rpx;top:18.75rpx;margin-right:0;right:auto;","content":"人气商家","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel7","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:37.5rpx;width:37.5rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:283.59375rpx;top:21.09375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c186391bc2.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel7"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel7"},"free_vessel8":{"type":"free-vessel","style":"width:750rpx;height:391.40625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:321.09375rpx;width:234.375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c18e436cac.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"1H9fN1Fe49","franchisee-name":"食客"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"franchisee_id\":\"1H9fN1Fe49\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:154.6875rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:281.25rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c19cb74c03.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"8Y3q1F0yyG","franchisee-name":"美容塑形"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"franchisee_id\":\"8Y3q1F0yyG\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:46.875rpx;width:234.375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:311.71875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1940938be.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"1H9fN1Fe49","franchisee-name":"食客"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"franchisee_id\":\"1H9fN1Fe49\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:114.84375rpx;top:314.0625rpx;margin-right:0;","content":"汉堡王","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"to-franchisee","franchisee-id":"1H9fN1Fe49","franchisee-name":"食客"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel8","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"franchisee_id\":\"1H9fN1Fe49\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:46.875rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:281.25rpx;top:142.96875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1940938be.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"8Y3q1F0yyG","franchisee-name":"美容塑形"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"franchisee_id\":\"8Y3q1F0yyG\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:337.5rpx;top:145.3125rpx;margin-right:0;","content":"由美美甲","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"to-franchisee","franchisee-id":"8Y3q1F0yyG","franchisee-name":"美容塑形"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel8","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"franchisee_id\":\"8Y3q1F0yyG\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:154.6875rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:281.25rpx;top:203.90625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1a45535da.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"7GBGhEEfL1","franchisee-name":"新鲜果铺"},"animations":[],"compId":"data.content[6]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":6,"eventParams":"{\"franchisee_id\":\"7GBGhEEfL1\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:46.875rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:281.25rpx;top:311.71875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1940938be.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"7GBGhEEfL1","franchisee-name":"新鲜果铺"},"animations":[],"compId":"data.content[7]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":7,"eventParams":"{\"franchisee_id\":\"7GBGhEEfL1\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:335.15625rpx;top:314.0625rpx;margin-right:0;","content":"首尔炸鸡","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"to-franchisee","franchisee-id":"7GBGhEEfL1","franchisee-name":"新鲜果铺"},"animations":[],"compId":"data.content[8]","parentCompid":"free_vessel8","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":8,"eventParams":"{\"franchisee_id\":\"7GBGhEEfL1\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:154.6875rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:503.90625rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1a6642c87.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"QUIfS6f9qR","franchisee-name":"喜茶"},"animations":[],"compId":"data.content[9]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":9,"eventParams":"{\"franchisee_id\":\"QUIfS6f9qR\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:46.875rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:503.90625rpx;top:142.96875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1940938be.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"QUIfS6f9qR","franchisee-name":"喜茶"},"animations":[],"compId":"data.content[10]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":10,"eventParams":"{\"franchisee_id\":\"QUIfS6f9qR\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:583.59375rpx;top:145.3125rpx;margin-right:0;","content":"喜茶","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"to-franchisee","franchisee-id":"QUIfS6f9qR","franchisee-name":"喜茶"},"animations":[],"compId":"data.content[11]","parentCompid":"free_vessel8","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":11,"eventParams":"{\"franchisee_id\":\"QUIfS6f9qR\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:154.6875rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:503.90625rpx;top:203.90625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1a662bfa9.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"M318fe3K4y","franchisee-name":"麦当劳"},"animations":[],"compId":"data.content[12]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":12,"eventParams":"{\"franchisee_id\":\"M318fe3K4y\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:46.875rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:503.90625rpx;top:311.71875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1940938be.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"M318fe3K4y","franchisee-name":"麦当劳"},"animations":[],"compId":"data.content[13]","parentCompid":"free_vessel8","itemType":"picture","itemParentType":"free-vessel","itemIndex":13,"eventParams":"{\"franchisee_id\":\"M318fe3K4y\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:25.78125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:574.21875rpx;top:314.0625rpx;margin-right:0;","content":"麦当劳","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"to-franchisee","franchisee-id":"M318fe3K4y","franchisee-name":"麦当劳"},"animations":[],"compId":"data.content[14]","parentCompid":"free_vessel8","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":14,"eventParams":"{\"franchisee_id\":\"M318fe3K4y\"}","eventHandler":"tapToFranchiseeHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel8"},"free_vessel9":{"type":"free-vessel","style":"width:750rpx;height:82.03125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:295.3125rpx;top:18.75rpx;margin-right:0;right:auto;","content":"优秀商家排行榜","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel9","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:39.84375rpx;width:39.84375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:246.09375rpx;top:18.75rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1b45489e0.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel9"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel9"},"free_vessel10":{"type":"free-vessel","style":"width:750rpx;height:351.5625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:234.375rpx;width:217.96875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:35.15625rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1bd3beb5e.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"EGZgc2GZ66","franchisee-name":"钻石客"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel10","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"franchisee_id\":\"EGZgc2GZ66\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:234.375rpx;width:217.96875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:267.1875rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1c647d201.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"W341OeCwew","franchisee-name":"missluna婚纱"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel10","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"franchisee_id\":\"W341OeCwew\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:98.4375rpx;top:283.59375rpx;margin-right:0;","content":"珠宝客","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"to-franchisee","franchisee-id":"EGZgc2GZ66","franchisee-name":"钻石客"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel10","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"franchisee_id\":\"EGZgc2GZ66\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:325.78125rpx;top:283.59375rpx;margin-right:0;","content":"missluna","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"to-franchisee","franchisee-id":"W341OeCwew","franchisee-name":"missluna婚纱"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel10","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"franchisee_id\":\"W341OeCwew\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:234.375rpx;width:210.9375rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:499.21875rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1c770cfb3.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"to-franchisee","franchisee-id":"6hl4Lgx3qj","franchisee-name":"ktv"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel10","itemType":"picture","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"franchisee_id\":\"6hl4Lgx3qj\"}","eventHandler":"tapToFranchiseeHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(51, 51, 51);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:567.1875rpx;top:283.59375rpx;margin-right:0;","content":"靓歌坊","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"to-franchisee","franchisee-id":"6hl4Lgx3qj","franchisee-name":"ktv"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel10","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"franchisee_id\":\"6hl4Lgx3qj\"}","eventHandler":"tapToFranchiseeHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel10"},"carousel11":{"type":"carousel","style":"height:234.375rpx;margin-left:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;","content":[{"customFeature":{"action":"to-franchisee","franchisee-id":"W341OeCwew","franchisee-name":"missluna婚纱"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1b04b5ef4.png","content":"","parentCompid":"carousel11","style":"","itemType":null,"itemParentType":"carousel","itemIndex":0,"eventParams":"{\"franchisee_id\":\"W341OeCwew\"}","eventHandler":"tapToFranchiseeHandler"},{"customFeature":{"action":"to-franchisee","franchisee-id":"7GBGhEEfL1","franchisee-name":"新鲜果铺"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_591c1b04c7ea6.png","content":"","parentCompid":"carousel11","style":"","itemType":null,"itemParentType":"carousel","itemIndex":1,"eventParams":"{\"franchisee_id\":\"7GBGhEEfL1\"}","eventHandler":"tapToFranchiseeHandler"}],"customFeature":{"autoplay":true,"interval":2},"animations":[],"page_form":"","compId":"carousel11"},"franchisee_list12":{"type":"franchisee-list","style":"background-color:rgb(238, 238, 238);margin-top:11.71875rpx;opacity:1;color:rgb(51, 51, 51);font-size:32.8125rpx;height:auto;margin-left:auto;","content":"","customFeature":{"lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","margin":1,"lineHeight":"100","imgWidth":"75","imgHeight":"75","vesselAutoheight":1,"height":"1000px","form":"app_shop","mode":0,"name":"首页商家列表","id":"list-425846242321","source":"none"},"animations":[],"page_form":"","compId":"franchisee_list12","parentCompid":"franchisee_list12","list_style":"margin-bottom:2.34375rpx;background-color:rgb(255, 255, 255);height:234.375rpx;margin-left:auto;","img_style":"width:175.78125rpx;height:175.78125rpx;margin-left:auto;","title_width":{"width":"550.78125rpx"},"param":"{\"id\":\"list-425846242321\",\"form\":\"app_shop\",\"page\":1,\"app_id\":\"T404OMKoT3\",\"sort_key\":\"distance\",\"sort_direction\":1}"},"suspension13":{"type":"suspension","style":"opacity:1;color:#fff;font-size:46.875rpx;margin-left:auto;","content":[{"customFeature":{"action":"call","width":"20px","height":"20px","phone-num":"0755-88888888"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59004b1823d01.png","title":"客服","content":"","parentCompid":"suspension13","style":"","itemType":null,"itemParentType":"suspension","itemIndex":0,"eventParams":"{\"phone_num\":\"0755-88888888\"}","eventHandler":"tapPhoneCallHandler"}],"customFeature":{"margin":1,"lineBackgroundColor":"rgba(0,0,0,0.5)","appendComponent":{"service":false,"myOrder":false,"shoppingCart":false,"top":false}},"animations":[],"page_form":"","compId":"suspension13","list_style":"margin-bottom:2.34375rpx;background-color:rgba(0,0,0,0.5);margin-left:auto;","suspension_bottom":70},"has_tabbar":1},
    need_login: false,
    page_router: 'page10000',
    page_form: 'none',
      list_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [{"compid":"franchisee_list12","param":{"id":"list-425846242321","form":"app_shop","page":1,"app_id":"T404OMKoT3","sort_key":"distance","sort_direction":1}}],
      cityLocationComps: [],
      onLoad: function (e) {
    this.setData({
      addShoppingCartShow: false,
      addTostoreShoppingCartShow:false
    });
    appInstance.setPageUserInfo();
    if(e.detail){
      this.dataId = e.detail;
    }
    appInstance.checkLogin();

    this.suspensionBottom();
    this.getCartList();
    appInstance.globalData.urlLocationId = e.location_id;

  },
  dataInitial: function(){
    appInstance.dataInitial();
  },
  onShareAppMessage: function(){
    var pageRouter = this.page_router,
        pagePath = '/pages/'+pageRouter+'/'+pageRouter;

    // 统计用户分享APP
    appInstance.countUserShareApp();

    pagePath += this.dataId ? '?detail='+this.dataId : '';
    return {
      title: appInstance.getAppTitle() || '即速应用',
      desc: appInstance.getAppDescription() || '即速应用，拖拽生成app，无需编辑代码，一键打包微信小程序',
      path: pagePath
    }
  },
  onShow: function(){
    var that = this;
    setTimeout(function(){
      appInstance.setPageUserInfo();
    });

    //用于判断当前页面是否需要验证手机号
    if (this.need_login && !appInstance.getUserInfo().phone) {
      appInstance.turnToPage('/pages/bindCellphone/bindCellphone', true);
    }
  },
  onReachBottom : function() {
    for(let i in this.data){
      if(/^bbs[\d]+$/.test(i)){
        appInstance.bbsScrollFuc(i);
      }
    }
  },
  tapPrevewPictureHandler:function(e){
    appInstance.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function(){
    for (let i in this.data) {
      if(/suspension/.test(i)){
        let suspension = this.data[i],
            newdata = {};

        if(this.data.has_tabbar == 1){
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom - 56)*2.34;
        }else{
          newdata[i + '.suspension_bottom'] = (+suspension.suspension_bottom)*2.34;
        }
        this.setData(newdata);
      }
    }
  },
  pageScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
      if (this.prevPage !== curpage) {
          this.prevPage = curpage;
          appInstance.pageScrollFunc(compid, curpage);
      }
  },
  goodsScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    if (this.prevPage !== curpage) {
        this.prevPage = curpage;
        appInstance.goodsScrollFunc(compid, curpage);
    }
  },
  franchiseeScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    appInstance.franchiseeScrollFunc(compid, curpage);
  },
  changeCount: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.changeCount(dataset);
  },
  inputChange: function (e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.inputChange(dataset, value);
  },
  bindDateChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value   = e.detail.value;
    appInstance.bindDateChange(dataset, value);
  },
  bindTimeChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value   = e.detail.value;
    appInstance.bindTimeChange(dataset, value);
  },
  bindSelectChange: function(e) {
    let dataset = e.currentTarget.dataset;
    let value = e.detail.value;
    appInstance.bindSelectChange(dataset, value);
  },
  bindScoreChange: function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.bindScoreChange(dataset);
  },
  submitForm: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.submitForm(dataset);
  },
  udpateVideoSrc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.udpateVideoSrc(dataset);
  },
  tapMapDetail: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.tapMapDetail(dataset);
  },
  uploadFormImg: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.uploadFormImg(dataset);
  },
  deleteUploadImg:function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.deleteUploadImg(dataset);
  },
  listVesselTurnToPage: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.listVesselTurnToPage(dataset);
  },
  UserCenterTurnToPage: function (e) {
    let router = e.currentTarget.dataset.router;
    let openVerifyPhone = e.currentTarget.dataset.openVerifyPhone; // 是否开启短信验证
    if(openVerifyPhone){
      if(!appInstance.getUserInfo().phone) {
        appInstance.turnToPage('/pages/bindCellphone/bindCellphone', true);
      } else {
        appInstance.turnToPage('/pages/' + router + '/' + router +'?from=userCenterEle');
      }
    } else {
      appInstance.turnToPage('/pages/' + router + '/' + router +'?from=userCenterEle');
    }
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    let contact = e.currentTarget.dataset.contact;
    let goodsType = e.currentTarget.dataset.goodsType;
    switch(+goodsType){
      case 0:
      case 1: appInstance.turnToPage('/pages/goodsDetail/goodsDetail?detail=' + id +'&contact=' + contact);
        break;
      case 3: appInstance.turnToPage('/pages/toStoreDetail/toStoreDetail?detail=' + id);
        break;
    }
  },
  turnToFranchiseeDetail: function(e){
    let dataset = e.currentTarget.dataset,
        id = dataset.id;
    appInstance.turnToPage('/pages/franchiseeDetail/franchiseeDetail?detail=' + id);
  },
  sortListFunc: function (e) {
    let dataset = e.currentTarget.dataset;
    appInstance.sortListFunc(dataset);
  },
  bbsInputComment: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputComment(dataset, comment);
  },
  bbsInputReply: function(e){
    var dataset = e.target.dataset,
        comment = e.detail.value;
    appInstance.bbsInputReply(dataset, comment);
  },
  uploadBbsCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsCommentImage(dataset);
  },
  uploadBbsReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.uploadBbsReplyImage(dataset);
  },
  deleteCommentImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteCommentImage(dataset);
  },
  deleteReplyImage: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.deleteReplyImage(dataset);
  },
  bbsPublishComment: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishComment(dataset);
  },
  clickBbsReplyBtn: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.clickBbsReplyBtn(dataset);
  },
  bbsPublishReply: function(e){
    var dataset = e.currentTarget.dataset;
    appInstance.bbsPublishReply(dataset);
  },
  keywordList:{},
  bindSearchTextChange : function(e){
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  searchList:function(e){
    let dataset = e.currentTarget.dataset;
    appInstance.searchList(dataset);
  },
  selectLocal:function(e){
    var that = this;
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    newdata[id].hidden = typeof(this.data[id].hidden) == undefined ? false : !this.data[id].hidden;
    newdata[id].provinces = ['请选择'];  newdata[id].citys =['请选择']; newdata[id].districts = ['请选择']
    newdata[id].provinces_ids =[null]; newdata[id].city_ids =[null]; newdata[id].district_ids = [null];
    for(var i in newdata[id].areaList){
      newdata[id].provinces.push(newdata[id].areaList[i].name);
      newdata[id].provinces_ids.push(newdata[id].areaList[i].region_id);
    }
    newdata[id].newlocal = '';
    this.setData(newdata);
  },
  cancelCity:function(e){
    var that = this;
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    newdata[id].hidden = !this.data[id].hidden;
    newdata[id].province = '';
    newdata[id].city = '';
    newdata[id].district = '';
    this.setData(newdata);
  },
  bindCityChange:function(e){
    const val = e.detail.value;
    let id = e.currentTarget.dataset.id,
        newdata = this.data,
        cityList = newdata[id].areaList;
        if(!newdata[id].newlocal){
          if(newdata[id].value[0] == val[0]){
            newdata[id].province = this.data[id].provinces[val[0]] == '请选择' ? '' : this.data[id].provinces[val[0]];
            newdata[id].citys = newdata[id].province == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities);
            newdata[id].city_ids = newdata[id].province == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities, 1);
            newdata[id].city = newdata[id].province == '' ? '' : newdata[id].citys[val[1]];
            newdata[id].districts = newdata[id].city == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities[val[1]].towns);
            newdata[id].district_ids = newdata[id].city == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities[val[1]].towns, 1);
            newdata[id].region_id = newdata[id].district_ids[val[2]];
            newdata[id].district = newdata[id].city == '' ? '' : newdata[id].districts[val[2]];
            newdata[id].value = val;
          }else{
            newdata[id].province = this.data[id].provinces[val[0]] == '请选择' ? '' : this.data[id].provinces[val[0]];
            newdata[id].citys = newdata[id].province == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities);
            newdata[id].city_ids = newdata[id].province == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities, 1);
            newdata[id].city = newdata[id].province == '' ? '' : newdata[id].citys[0];
            newdata[id].districts = newdata[id].city == '' ? ['请选择'] : this.getCityList(cityList[val[0] - 1].cities[0].towns);
            newdata[id].district_ids = newdata[id].city == '' ? [null] : this.getCityList(cityList[val[0] - 1].cities[0].towns, 1);
            newdata[id].region_id = newdata[id].district_ids[val[2]];
            newdata[id].district = newdata[id].city == '' ? '' : newdata[id].districts[val[2]];
            newdata[id].value = val;
          }          
          // newdata[id].district = newdata[id].district == '请选择'? '' :newdata[id].district
          this.setData(newdata)
    }
  },
  submitCity:function(e){
    let id = e.currentTarget.dataset.id,
        newdata = this.data;
    if(!newdata[id].districts){
      appInstance.showModal({content: '您未选择城市!'});
      newdata[id].province = '';
      newdata[id].city = '';
      newdata[id].district = '';
    }else{
      newdata[id].hidden = !this.data[id].hidden;
      newdata[id].newlocal = newdata[id].province + ' ' + newdata[id].city + ' ' +      newdata[id].district;
      newdata[id].value = [0,0,0];
      appInstance.citylocationList(e.currentTarget.dataset, newdata[id].region_id);
    }
    this.setData(newdata);
  },
  getCityList:function (province, id){
    let cityList = [], cityList_id = [];
    for(let i in province){
      if(typeof(province[i]) == 'object'){
        cityList.push(province[i].name)
        cityList_id.push(province[i].region_id);
      }else{
        cityList[1] = province.name;
        cityList_id[1]=province.region_id;
      }
    }
    if(id){
      return cityList_id;
    }else{
      return cityList;
    }

  },
  

  
  
  tapGoodsTradeHandler: function(event) {
    appInstance.tapGoodsTradeHandler(event);
  },
  tapInnerLinkHandler: function(event) {
    appInstance.tapInnerLinkHandler(event);
  },
  tapPhoneCallHandler: function(event) {
    appInstance.tapPhoneCallHandler(event);
  },
  tapRefreshListHandler: function(event) {
    var _this = this;
    appInstance.tapRefreshListHandler(event, _this);
  },
  tapGetCouponHandler: function(event) {
    appInstance.tapGetCouponHandler(event);
  },
  tapCommunityHandler: function(event) {
    appInstance.tapCommunityHandler(event);
  },
  turnToCommunityPage: function(event){
    let id = event.currentTarget.dataset.id;
    appInstance.turnToPage('/pages/communityPage/communityPage?detail=' + id);
  },
  tapToFranchiseeHandler: function(event){
    appInstance.tapToFranchiseeHandler(event);
  },
  tapToTransferPageHandler: function(event){
    appInstance.tapToTransferPageHandler(event);
  },
  tapFranchiseeLocation: function(event){
    appInstance.tapFranchiseeLocation(event);
  },
  showAddShoppingcart: function(event) {
    var that = this,
        goods_id = event.currentTarget.dataset.id;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/getGoods',
      data: {
        data_id: goods_id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          var goods = res.data[0].form_data,
              defaultSelect = goods.model_items[0],
              goodsModel = [],
              selectModels = [],
              goodprice = 0,
              goodstock = 0,
              goodid ;
          if(goods.model_items.length){
            goodprice = defaultSelect.price;
            goodstock = defaultSelect.stock;
            goodid = defaultSelect.id;
          }else{
            goodprice = goods.price;
            goodstock = goods.stock;
          }
          for(let key in goods.model){
            if(key){
              let model = goods.model[key];
              goodsModel.push(model);
              selectModels.push(model.subModelId[0]);
            }
          }
          goods.model = goodsModel;
          if (goods.goods_type == 3){
            var businesssTimeString = '';
            if (goods.business_time && goods.business_time.business_time) {
              var goodBusinesssTime = goods.business_time.business_time;
              for (var i = 0; i < goodBusinesssTime.length; i++) {
                businesssTimeString += goodBusinesssTime[i].start_time.substring(0, 2) + ':' + goodBusinesssTime[i].start_time.substring(2, 4) + '-' + goodBusinesssTime[i].end_time.substring(0, 2) + ':' + goodBusinesssTime[i].end_time.substring(2, 4) + '/';
              }
              businesssTimeString = '出售时间：' + businesssTimeString.substring(0, businesssTimeString.length - 1);
              that.setData({
                
              })
            }
	  	      that.getCartList();
            that.setData({
              'addTostoreShoppingCartShow': true,
              businesssTimeString: businesssTimeString
            })
          }else{
            that.setData({
              'addShoppingCartShow': true
            })
          }
          that.setData({
            goodsInfo: goods ,
            'selectGoodsModelInfo.price': goodprice,
            'selectGoodsModelInfo.stock': goodstock,
            'selectGoodsModelInfo.buyCount': 1,
            'selectGoodsModelInfo.buyTostoreCount': 0,
            'selectGoodsModelInfo.cart_id':'',
            'selectGoodsModelInfo.models': selectModels,
            'selectGoodsModelInfo.modelId': goodid
          });
        }
      }
    });
  },
  hiddeAddShoppingcart: function(){
    this.setData({
      addShoppingCartShow: false,
      addTostoreShoppingCartShow:false
    });
  },
  selectGoodsSubModel: function(e){
    let dataset = e.target.dataset,
        modelIndex = dataset.modelIndex,
        submodelIndex = dataset.submodelIndex,
        data = {};

    data['selectGoodsModelInfo.models['+modelIndex+']'] = this.data.goodsInfo.model[modelIndex].subModelId[submodelIndex];
    this.setData(data);
    this.resetSelectCountPrice();
  },
  resetSelectCountPrice: function(){
    let selectModelIds = this.data.selectGoodsModelInfo.models.join(','),
        modelItems = this.data.goodsInfo.model_items,
        data = {};
    data['selectGoodsModelInfo.buyCount'] = 1;
    data['selectGoodsModelInfo.buyTostoreCount'] = 0;
    for (let i = modelItems.length - 1; i >= 0; i--) {
      if(modelItems[i].model == selectModelIds){
        data['selectGoodsModelInfo.stock'] = modelItems[i].stock;
        data['selectGoodsModelInfo.price'] = modelItems[i].price;
        data['selectGoodsModelInfo.modelId'] = modelItems[i].id;
        break;
      }
    }
    this.setData(data);
  },
  // 电商
  clickGoodsMinusButton: function(e){
    var that = this;
    let count = this.data.selectGoodsModelInfo.buyCount;
    if(count <= 1){
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyCount': count - 1
    });
  },
  clickGoodsPlusButton: function(e){
    let selectGoodsModelInfo = this.data.selectGoodsModelInfo,
        count = selectGoodsModelInfo.buyCount,
        stock = selectGoodsModelInfo.stock;

    if(count >= stock) {
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyCount': count + 1
    });
  },
  sureAddToShoppingCart: function(){
    var that = this,
        param = {
          goods_id: this.data.goodsInfo.id,
          model_id: this.data.selectGoodsModelInfo.modelId || '',
          num: this.data.selectGoodsModelInfo.buyCount,
          sub_shop_app_id : ''
        };

    appInstance.sendRequest({
      url: '/index.php?r=AppShop/addCart',
      data: param,
      success: function(res){
        appInstance.showToast({
          title:'添加成功',
          icon:'success'
        })
        that.hiddeAddShoppingcart();
      }
    })
  },

  // 到店

  clickTostoreMinusButton: function (e) {
    var that = this;
    let count = this.data.selectGoodsModelInfo.buyTostoreCount;
    if (count <= 0) {
      return;
    }
    if (count <= 1) {
      appInstance.sendRequest({
        hideLoading: true,
        url: '/index.php?r=AppShop/deleteCart',
        method: 'post',
        data: {
          cart_id_arr: [that.data.selectGoodsModelInfo.cart_id],
          sub_shop_app_id: that.franchiseeId || ''
        },
        fail: function (res) {
          that.setData({
            addToShoppingCartCount: currentGoodsNum,
            cartGoodsNum: currentCartNum,
            cartGoodsTotalPrice: currentTotalPrice
          });
        }
      });
      this.setData({
        'selectGoodsModelInfo.buyTostoreCount': count - 1
      });
      this.getCartList();
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyTostoreCount': count
    });
    this.sureAddTostoreShoppingCart('mins');
  },
  clickTostorePlusButton: function (e) {
    let selectGoodsModelInfo = this.data.selectGoodsModelInfo,
      count = selectGoodsModelInfo.buyTostoreCount,
      stock = selectGoodsModelInfo.stock;

    if (count >= stock) {
      appInstance.showModal({
        content: '库存不足'
      });
      return;
    }
    this.setData({
      'selectGoodsModelInfo.buyTostoreCount': count
    });
    this.sureAddTostoreShoppingCart('plus');
  },
  sureAddTostoreShoppingCart: function (type) {
    var that = this,
        goodsNum = this.data.selectGoodsModelInfo.buyTostoreCount;
    if(type == 'plus'){
      goodsNum = goodsNum + 1;
    }else{
      goodsNum = goodsNum - 1;
    }
     var param = {
        _app_id: appInstance.getAppId(),
        app_id: appInstance.getAppId(),
        session_key: appInstance.getSessionKey(),
        goods_id: this.data.goodsInfo.id,
        model_id: this.data.selectGoodsModelInfo.modelId || '',
        num: goodsNum,
        sub_shop_app_id: ''
      };

    // appInstance.sendRequest({
    //   url: '/index.php?r=AppShop/addCart',
    //   data: param,
    //   success: function (res) {
    //     var data = res.data;
    //     that.setData({
    //       'selectGoodsModelInfo.cart_id': data
    //     })
    //     that.getCartList();
    //   }
    // })
    wx.request({
      url: appInstance.getSiteBaseUrl() + '/index.php?r=AppShop/addCart',
      data: param,
      success: function (res) {
        if (res.data.status == 0) {
          var data = res.data.data;
          that.setData({
            'selectGoodsModelInfo.cart_id': data,
            'selectGoodsModelInfo.buyTostoreCount': goodsNum
          })
          that.getCartList();
        } else {
          if (res.data.status == 401 || res.data.status == 2) {
              // 未登录
              app.login();
              return;
            }
          that.setData({
            'selectGoodsModelInfo.buyTostoreCount': 0
          });
          appInstance.showModal({
            content: res.data.data
          })
        }
      }
    })
  },
  readyToPay: function () {
    if (this.data.cartGoodsNum <= 0) return;
    var franchiseeId = this.franchiseeId,
      pagePath = '/pages/previewOrderDetail/previewOrderDetail' + (franchiseeId ? '?franchisee=' + franchiseeId : '');
    appInstance.turnToPage(pagePath);
    this.hiddeAddShoppingcart();
  },
  getValidateTostore: function(){
    var that = this;
    wx.request({
      url: appInstance.getSiteBaseUrl() + '/index.php?r=AppShop/precheckShoppingCart',
      data: {
        _app_id: appInstance.getAppId(),
        app_id: appInstance.getAppId(),
        session_key: appInstance.getSessionKey(),
        sub_shop_app_id: that.franchiseeId || ''
      },
      success: function (res) {
        if (res.data.status == 0){
          that.readyToPay();
        } else if (res.data.status == 401 || res.data.status == 2) {
            // 未登录
            appInstance.login();
            return;
        } else if (res.data.status == 1){
            appInstance.showModal({
              content: res.data.data,
              confirm: function () {
                that.goToShoppingCart();
              }
            })
        }else{
          appInstance.showModal({
            content: res.data.data
          })
        }    
      }
    })
  },
  goToShoppingCart: function () {
    var franchiseeId = this.franchiseeId,
      pagePath = '/pages/shoppingCart/shoppingCart' + (franchiseeId ? '?franchisee=' + franchiseeId : '');
    appInstance.turnToPage(pagePath);
    this.hiddeAddShoppingcart();
  },
  getCartList: function () {
    var that = this;
    appInstance.sendRequest({
      url: '/index.php?r=AppShop/cartList',
      data: {
        page: 1,
        page_size: 100,
        sub_shop_app_id: this.franchiseeId || '' 
      },
      success: function (res) {
        var price = 0,
          num = 0,
          addToShoppingCartCount = 0;

        for (var i = res.data.length - 1; i >= 0; i--) {
          var data = res.data[i];
          price += +data.num * +data.price;
          num += +data.num;
          if (that.goodsId == data.goods_id) {
            addToShoppingCartCount = data.num;
            that.cart_id = data.id;
          }
        }
        that.setData({
          cartGoodsNum: num,
          cartGoodsTotalPrice: price.toFixed(2),
          addToShoppingCartCount: addToShoppingCartCount,

        });
      }
    })
  },
  stopPropagation: function(){},
  turnToSearchPage:function(e){
    if (e.target.dataset.param) {
      appInstance.turnToPage('/pages/advanceSearch/advanceSearch?param=' + e.target.dataset.param);
    }else{
      appInstance.turnToPage('/pages/advanceSearch/advanceSearch');
    }
  }
};
Page(pageData);

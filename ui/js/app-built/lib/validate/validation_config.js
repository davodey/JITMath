define(["jquery","validate/jquery.validate"],function(e){"use strict";e.validator.addMethod("nospace",function(e){return e.indexOf(" ")<0},"Value may not include the space character"),e.validator.addMethod("placeholder",function(t,n){return t!=e(n).attr("placeholder")},jQuery.validator.messages.required),jQuery.validator.addMethod("requiredSelect",function(e){return e!=-1},jQuery.validator.messages.required),jQuery.validator.addMethod("maskedCreditcard",function(e,t){return e.indexOf("*")===0||jQuery.validator.methods.creditcard.call(this,e,t)},jQuery.validator.messages.creditcard),jQuery.validator.addMethod("maskedPhone",function(e){return e.replace(/[^0-9]+/g,"").length===10},jQuery.validator.messages.phoneUS),jQuery.validator.addMethod("basicChar",function(e){var t=/^[a-zA-Z0-9 \!#\&\*\+,\._\-\:'"\?~@\$\(\)]+$/g;return t.test(e)},jQuery.validator.messages.basicChar),jQuery.validator.setDefaults({onfocusout:function(e){this.element(e)}})});
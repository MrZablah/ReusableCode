"use strict";var pager=function(e){var n={},t=1;return{init:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return null==r?"You send categoryName: ".concat(r,", and is REQUIERED to run"):null==a?"You send totalPages: ".concat(a,", and is REQUIERED to run"):function(r,a,i,o,l){var u=e.read("pagerCObj"),g=e.read("pagerReset");return null!=u&&(n=JSON.parse(u)),null!=n[r]&&(t=n[r]),"true"==g&&i&&(e.delete("pagerCObj"),t=1),null==o&&(o="»"),null==l&&(l="«"),$(".pager-container .pager-item").hide(),$(".pager-item#page"+t).fadeIn("slow"),$("#pager-pagination").bootpag({total:a,page:t,maxVisible:5,next:o,prev:l}).on("page",function(t,a){$(".pager-item").hide(),$(".pager-item#page"+a).fadeIn("slow"),n[r]=a,e.create("pagerCObj",JSON.stringify(n))}),"pager runing"}(r,a,i,o,l)},restart:function(){return e.delete("pagerCObj")},restarOnMz:function(){return function(){var n=window.location.pathname;if("/mz"==n||"/memberzone"==n)return e.create("pagerReset",!0),"On Mz/Index";setTimeout(function(){return e.create("pagerReset",!1),"Not on Mz/index"},500)}()}}}(cookie);pager.restarOnMz();
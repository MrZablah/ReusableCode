"use strict";var videoInitPlug=function(){try{videojs("video_res",{nativeControlsForTouch:!1,autoHeight:!0}).videoJsResolutionSwitcher();var e=videojs("video_res");$("#playVideo2").on("click",function(){e.requestFullscreen(),e.play()})}catch(e){}try{var i=function(){var e,i=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0),i};!function(e,o){var a=o("videojs-panorama-player",{controls:!0,plugins:{videoJsResolutionSwitcher:{default:"low",dynamicLabel:!1}}},function(){var i=this,o=document.querySelector(".player_wrapper"),a=o.offsetWidth,t=o.offsetHeight;i.width(a),i.height(t),e.addEventListener("resize",function(){var e=i.getChild("Canvas"),a=o.offsetWidth,t=o.offsetHeight;i.width(a),i.height(t),e&&e.handleResize()}),i.on("resolutionchange",function(){i.play();var e=i.currentResolution().label,o=document.createElement("span");o.innerHTML="<span class='vjs-icon-hd'></span>","1080 HD"==e?(hd=!0,document.getElementsByClassName("player_container")[0].appendChild(o)):(hd=!1,$(".vjs-icon-hd").remove())}),e.innerHeight<e.innerWidth&&i.requestFullscreen()});a.panorama({autoMobileOrientation:!0,clickAndDrag:!0,clickToToggle:!i(),initFov:100,NoticeMessage:i()?"por favor mueva su dispositivo":"utilice el cursor para arrastrar y soltar el video",callback:function(){i()||a.play()}})}(window,window.videojs);var o=videojs("videojs-panorama-player");$("#playVideo").on("click",function(){o.requestFullscreen(),o.play()})}catch(e){}};function videoP(e,i,o,a,t){var s=a.split("sites/").pop().split("/")[0];if("playVid"==i){$("#video_res").length&&videojs("video_res").dispose(),$(".tembVideoCat").remove(),$(".imgItem").show();for(var n=o.split("^-^"),d=0;d<n.length;d++)if(n[d].indexOf("1080")>-1)var r=$("<source />",{src:"/sites/".concat(s,"/Categories/").concat(t,"/Content/").concat(n[d],".mp4"),label:"1080 HD",res:"1080",type:"video/mp4"});else if(n[d].indexOf("720")>-1)var l=$("<source />",{src:"/sites/".concat(s,"/Categories/").concat(t,"/Content/").concat(n[d],".mp4"),label:"720p",res:"720",type:"video/mp4"});else var c=$("<source />",{src:"/sites/".concat(s,"/Categories/").concat(t,"/Content/").concat(n[d],".mp4"),label:"480p",res:"480",type:"video/mp4"});var p=$("<video />",{id:"video_res",addClass:"video-js vjs-default-skin videoCatego",controls:"","data-setup":"{}",poster:a,crossorigin:"anonymous",append:[r,l,c]}),m=$("<div />",{addClass:"player_container",append:[p]}),v=$("<div />",{addClass:"player_wrapper",append:[m]}),g=$("<i />",{addClass:"fa fa-times-circle","aria-hidden":"true"}),u=$("<div />",{onclick:"closePlayer();",addClass:"closePlayer",append:[g]});$("<div />",{addClass:"single_blog_post_img tembVideoCat",append:[v,u],appendTo:"#vidItem-"+e});$(".imgItem."+e).hide(),videoInitPlug()}else if("playSong"==i){$("#video_res").length&&videojs("video_res").dispose(),$(".tembVideoCat").remove(),$(".imgItem").show();var h=$("<source />",{src:"/sites/".concat(s,"/Categories/").concat(t,"/Content/").concat(e,".mp3"),type:"audio/mp3"}),b=$("<video />",{id:"video_res",addClass:"video-js vjs-default-skin videoCatego",controls:"","data-setup":"{}",poster:a,crossorigin:"anonymous",append:[h]}),w=$("<div />",{addClass:"player_container",append:[b]}),y=$("<div />",{addClass:"player_wrapper",append:[w]}),f=$("<i />",{addClass:"fa fa-times-circle","aria-hidden":"true"}),k=$("<div />",{onclick:"closePlayer();",addClass:"closePlayer",append:[f]});$("<div />",{addClass:"single_blog_post_img tembVideoCat",append:[y,k],appendTo:"#vidItem-"+e});$(".imgItem."+e).hide(),videoInitPlug()}else console.log("not mp3 or mp4")}function closePlayer(){$("#video_res").length&&videojs("video_res").dispose(),$(".tembVideoCat").remove(),$(".imgItem").show()}videoInitPlug();
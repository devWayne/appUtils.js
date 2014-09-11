  function openScheme(dianpingUrl, downloadUrl, callback) {
      var userAgent = window.navigator.userAgent;
      var redirect_url = "";
      if (userAgent.match("Android") || userAgent.match("iPhone") || userAgent.match("iPad")) {
          startTime = Date.now();
          div = document.createElement('div');
          div.style.visibility = 'hidden';
          // alert('start ifrmae');
          div.innerHTML = '<iframe id="schema" src="' + dianpingUrl + '" scrolling="no" width="1" height="1"></iframe>';
          document.body.appendChild(div);

          var delta = Date.now() - startTime;
          // alert(delta);
          if (delta < 50) {
              redirect_url = downloadUrl;
          }
          // alert(delta);
      } else {
          redirect_url = downloadUrl;
      }
      if (redirect_url) {
          // _hip.push(['mv', {module:'dpapp_pay_share_download',action:'click'}]);
          if (redirect_url !== 'callback') {
              setTimeout(function() {
                  window.location = redirect_url;
              }, 500);
          } else if (callback) {
              callback();
          }
      }
  }

   //openDPScheme(
   //           "dianping2://recommendshop?url=http%3A%2F%2Fhd.t.dianping.com%2Fqiang%2Fm%2Fdeal%2F6075607%3Fversion%3D*%26agent%3D*%26cityid%3D*%26token%3D*", 
   //            "http://m.api.dianping.com/downloadlink?redirect=3222"
   //        );
  
  function checkAgent(redirectUrl){
         var ua = navigator.userAgent;
            var isAndroid = ua.match(/(android)\s+([\d.]+)/i);

            var isIos = ua.match(/(ipad|iphone|ipod).*os\s([\d_]+)/i);

            var isIPad = ua.match(/(ipad).*os\s([\d_]+)/i);

            if (!isAndroid && !isIos && !isIPad) {
                location.href = redirectUrl;
                return;
            }
  }

   
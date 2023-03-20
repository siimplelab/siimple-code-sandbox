// get a url of a page and redirect to another page if the url has a certain string
function getUrlAndRedirect() {
  var currentUrl = window.location.href;
  const keywordToFind = "hyungsub08.tistory.com";
  const keywordToReplace = "uxdev.org"
  const keywordForMobile = "/m";

  if (currentUrl.indexOf(keywordToFind + keywordForMobile) > -1) {
    var newUrl = currentUrl.replace(keywordToFind + keywordForMobile, keywordToReplace);
    window.location.href = newUrl;
  } else {
    if (currentUrl.indexOf(keywordToFind) > -1) {
      var newUrl = currentUrl.replace(keywordToFind, keywordToReplace);
      window.location.href = newUrl;
    }
  }
}

getUrlAndRedirect();
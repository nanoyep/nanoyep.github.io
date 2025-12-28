var posts=["2025/12/27/你好/","2025/12/28/雨下一整晚/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
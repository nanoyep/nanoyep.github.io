var posts=["2025/12/25/hello-world/","2025/12/25/hello/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
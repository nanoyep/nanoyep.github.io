var posts=["2026/01/02/git从入门到入土/","2025/12/28/雨下一整晚/","2025/12/31/联合国粮食计划署报告2/","2025/12/27/你好/","2025/12/30/联合国粮食计划署报告(1)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
// app タグを定義
<app>
  <h1 class="white-text grey darken-3">{title}</h1>
  
  <ul class="collection with-header" each='{rss}'>
    <li class="collection-header teal lighten-3">{siteName}</li>
    <li each='{feedList}'>
      <a href='{url}' class="collection-item" target="_blank"> {title} </a>
    </li>
  </ul>

  // style
  <style>
    h1 {
      margin-top: 0%;
    }
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      margin-bottom: 4px;
    }
  </style>
  
  // logic
  <script>
    this.rss = [];
    this.title = opts.title;
    $.get('http://www14078uc.sakura.ne.jp:3333/harvest').done(function(res) {
      this.rss = res;
      this.update();
    }.bind(this));
  </script>
</app>
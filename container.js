<html>
  <body>

    <div id="twitch-embed"></div>


    <script src="https://embed.twitch.tv/embed/v1.js"></script>

    <script type="text/javascript">
      new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: "Proto_Peach",
        // Only needed if this page is going to be embedded on other websites
        parent: ["embed.example.com", "othersite.example.com"]
      });
    </script>
<iframe
    src="https://player.twitch.tv/?Proto_Peach&parent=streamernews.example.com"
    height="<height>"
    width="<width>"
    allowfullscreen="<allowfullscreen>">
</iframe>


  </body>
</html>
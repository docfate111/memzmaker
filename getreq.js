const request = require('request')
request.get('https://api.imgflip.com/get_memes', {
  json: {
    boxes: [
    {
        "text": "One does not simply",
        "x": 10,
        "y": 10,
        "width": 548,
        "height": 100,
        "color": "#ffffff",
        "outline_color": "#000000"
    },
    {
        "text": "Make custom memes on the web via imgflip API",
        "x": 10,
        "y": 225,
        "width": 548,
        "height": 100,
        "color": "#ffffff",
        "outline_color": "#000000"
    }
]
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`);
  ans=[];
  for(var i=body.data.memes.length-1; i>=0; i--){
    var meme=body.data.memes[i];
    //console.log("<img src=\""+meme.url+"\" id=\""+meme.id+"\" height=\"200\" width=\"150\" onclick=\"doWith(this.id)\">");
    //console.log(body.data.memes[i].url);
    ans.push(meme.id+'');
  }
  console.log(ans);
})

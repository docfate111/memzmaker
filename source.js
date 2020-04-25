//var idl;
function doWith(image){
  ids=['164335977', '195389',    '184801100', '61516',     '21604248',
  '109765',    '1367068',   '28034788',  '100947',    '259680',
  '61581',     '27920',     '61580',     '1509839',   '9440985',
  '405658',    '53764',     '89655',     '40945639',  '1202623',
  '170715647', '61582',     '6531067',   '29617627',  '56225174',
  '163573',    '157978092', '285870',    '4173692',   '61544',
  '99683372',  '54401824',  '61546',     '71428573',  '444501',
  '180190441', '61533',     '55311130',  '3218037',   '460541',
  '101910402', '101511',    '61527',     '922147',    '235589',
  '16464531',  '563423',    '14230520',  '61532',     '84341851',
  '61585',     '132769734', '5496396',   '14371066',  '61539',
  '101287',    '61556',     '8072285',   '175540452', '161865971',
  '135678846', '101288',    '6235864',   '28251713',  '61520',
  '226297822', '196652226', '21735',     '101470',    '134797956',
  '124055727', '135256802', '61579',     '123999232', '91545132',
  '27813981',  '155067746', '91538330',  '100777631', '114585149',
  '97984',     '178591752', '80707627',  '119139145', '4087833',
  '89370399',  '1035805',   '148909805', '93895088',  '222403160',
  '217743513', '188390779', '438680',    '131087935', '124822590',
  '102156234', '129242436', '87743020',  '112126428', '181913649'];
  ids=ids.filter(function(id){
    return id!==image.id;
  });
  for(var i = 0; i < ids.length; i++){
    document.getElementById(ids[i]).remove();
  }
  idl=image.id;
  var element = document.getElementById(image.id);
  var newElement = '<form><label for="one">First text:</label><br><input type="text" id="one" name="one" style="font-size : 20px; width: 20%; height: 100px;" value="Making memes with photoshop"><br><label for="two">Second text:</label><br><input type="text" style="font-size : 20px; width: 20%; height: 100px;" size="200" id="two" name="two" value="Making memes on this site"><br><br><button id="b" style="font-size : 20px; width: 20%; height: 100px;" onClick="makeMeme(); return false;">Make meme</button><button type="submit" style="font-size : 20px; width: 20%; height: 100px;">Return</button><p style="font-size : 20px">Right click to download</p></form>';
  element.insertAdjacentHTML('afterend', newElement);
};
function makeMeme(){
  var first=document.getElementById("one");
  var second=document.getElementById("two");
  const params = {
    template_id: idl,
    text0: first.value,
    text1: second.value,
    username: "xzk03017",
    password: "xzk03017@cndps.com"
  }
  var element = document.getElementById("b");
  $.post("https://api.imgflip.com/caption_image", params, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    $("#my_image").attr("src", data.data.url);
    $("#clickhere").attr("href", data.data.url);
  //  var newElement='<img src=\"'+data.data.url+'\">';
    //console.log("Data: " + data + "\nStatus: " + status);
    //console.log(data.data.url, data.data.page_url);
    //element.insertAdjacentHTML('afterend', newElement);
  }, "json");
  //alert("meme made");
};

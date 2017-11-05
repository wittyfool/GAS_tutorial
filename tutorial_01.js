function myFunction() {
  
}

function getDouble(x){
  return x*2;
}

function setData(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();  
  var sheet = ss.getActiveSheet();
  var range = sheet.getRange("A1");
  range.setValue(12345);
  
  sheet.appendRow([123,'文字列','aaa']);
}

function getData(){
  var sheet = SpreadsheetApp.getActiveSheet();

  var url = "https://www.asahi.com/";
  var res = UrlFetchApp.fetch(url);  
  var myRegexp = /<a href=\"([\s\S]*?)<\/a>/gi;
  var elems    = res.getContentText().match(myRegexp);
 
  var date = new Date();
  sheet.appendRow([date]);
  for(var i in elems) {
    var title = elems[i];
    if(title.indexOf("comtop_8")>=0){
      title     = title.replace(/(^\s+)|(\s+$)/g, "");
      title     = title.replace(/<\/?[^>]+>/gi, "");
      sheet.appendRow(["", title]);
    }    
  }
}

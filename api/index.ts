var express = require("express");
var app = express();

app.get("/stock", function (req: any, res: any) {
  const { serviceKey, numOfRows, pageNo, resultType, basDt, beginBasDt, endBasDt, likeBasDt, likeSrtnCd, isinCd, likeIsinCd, itmsNm, likeItmsNm, mrktCls, beginVs, endVs, beginFltRt, endFltRt, beginTrqu, endTrqu, beginTrPrc, endTrPrc, beginLstgStCnt, endLstgStCnt, beginMrktTotAmt, endMrktTotAmt } =
    req.query;

  var api_url =
    "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { serviceKey, numOfRows, pageNo, resultType, basDt, beginBasDt, endBasDt, likeBasDt, likeSrtnCd, isinCd, likeIsinCd, itmsNm, likeItmsNm, mrktCls, beginVs, endVs, beginFltRt, endFltRt, beginTrqu, endTrqu, beginTrPrc, endTrPrc, beginLstgStCnt, endLstgStCnt, beginMrktTotAmt, endMrktTotAmt },
  };

  request.get(options, function (error: any, response: any, body: any) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "application/xml;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/stock?serviceKey=lK%2BhnNs%2FMami8cbgEPOFG2k0HcbX%2BYl470oH8%2BbR1O4FE0QH7outXR2PBzHHqHpS%2FiLQTbsGAYm%2FbEuxD8jOzA%3D%3D&numOfRows=10&pageNo=1&base_date=20241028&base_time=0600&nx=61&ny=125 app listening on port 3000!"
  );
});
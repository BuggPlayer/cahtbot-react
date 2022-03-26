import axios from "axios";

class chatRepo {
  static headers1 = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VpZCI6IjZiZDRlZDAyNzM0ZTlhMGYiLCJkZXZpY2V0eXBlIjoiQU5EUk9JRCIsInRva2VuVHlwZSI6IlVTRVJfQVVUSCIsImlkIjoiNjIxNWNhYTljYzhkMGMzYWJhNzlmYjMyIiwiaXNHdWVzdCI6MCwibWFzdGVySWQiOiIiLCJjb3VudHJ5IjoiVUFFIiwiYXBpdmVyc2lvbiI6IjUuMTkuMSIsImlhdCI6MTY0NTc5Nzc1N30.kNLdugz_i903R5q2fR36hNscWLecLygoziC8K-Z4EQk",
    deviceid: "6bd4ed02734e9a0f",
    language: "En",
    brand: "KFC",
    country: "UAE",

    "Content-Type": "application/x-www-form-urlencoded",
    // language: "En",
    appversion: "5.19.1",
    devicemodel: "OPPO CPH2001",
    devicetype: "ANDROID",
    osversion: "30",
    timezone: "Asia/Kolkata",
    channel: "kfcapp",
    appbundle: "com.kfc.me",
    truecountry: "UAE",
    retrycount: 1,
  };

  static headers2 = {
    retrycount: 1,
    Authorization:
      "  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VpZCI6Ijg5NWRlMDU2MzIxMGMxZTYiLCJkZXZpY2V0eXBlIjoiQU5EUk9JRCIsInRva2VuVHlwZSI6IlVTRVJfQVVUSCIsImlkIjoiNjIxNzNjMmUzNzllOTA0ZjA2ZWNiMDk1IiwiaXNHdWVzdCI6MCwibWFzdGVySWQiOiIiLCJjb3VudHJ5IjoiVUFFIiwiYXBpdmVyc2lvbiI6IjUuMTkuMSIsImlhdCI6MTY0NjY1NzM4MH0.oGM9rHF7WxwQdYSd0QYFccBnpTFciv6xfPtp_GWdd9Y",
    "Content-Type": "application/x-www-form-urlencoded",
    // language: "En",
    appversion: "5.19.1",
    devicemodel: "Xiaomi Mi A2",
    devicetype: "ANDROID",
    osversion: "29",
    country: "UAE",
    deviceid: "895de0563210c1e6",
    brand: "KFC",
    timezone: "Asia/Kolkata",
    channel: "kfcapp",
    appbundle: "com.kfc.me",
    truecountry: "UAE",
  };

  static headers3 = {
    retrycount: 1,
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VpZCI6IjhmMmMwMzEwNGI2ZjhiMWMiLCJkZXZpY2V0eXBlIjoiQU5EUk9JRCIsInRva2VuVHlwZSI6IlVTRVJfQVVUSCIsImlkIjoiNjIxODVlMTQyMjVjOTk1ZjZkMDg3MGI5IiwiaXNHdWVzdCI6MCwibWFzdGVySWQiOiIiLCJjb3VudHJ5IjoiVUFFIiwiYXBpdmVyc2lvbiI6IjUuMTkuMSIsImlhdCI6MTY0NjgxNzM3MX0.np7kpTn4OEGEm-GZDmZuP9pQ3MJxB6VfRUCtkiiQ5ZM",
    "Content-Type": "application/x-www-form-urlencoded",
    // language: "En",
    appversion: "5.19.1",
    devicemodel: "Xiaomi POCO M2 Pro",
    devicetype: "ANDROID",
    osversion: "29",
    country: "UAE",
    deviceid: "8f2c03104b6f8b1c",
    brand: "KFC",
    timezone: "Asia/Kolkata",
    channel: "kfcapp",
    appbundle: "com.kfc.me",
    truecountry: "UAE",
  };

  static async getresponse(seq, language, header) {
    // console.log("header", header);
    // console.log("language", language);

    const res = await axios({
      method: "get",
      url: "https://americananode.appskeeper.com/chat-service/v3/kfcare/",
      params: {
        q: seq,
      },
      headers: {
        ...header,
        language: language,
      },
    });

    return res;
  }

  static async getFirstData(language, header) {
    const res = await axios({
      method: "get",
      url: "https://americananode.appskeeper.com/chat-service/v3/kfcare/",
      params: {
        q: 0,
      },
      headers: {
        ...header,
        // ...chatRepo.headers1,
        language: language,
      },
    });

    return res;
  }

  static async getTrack(seq, language, header) {
    console.log("seq", seq);
    const res = await axios({
      method: "get",
      url: "https://americananode.appskeeper.com/chat-service/v3/kfcare/",
      params: {
        q: seq,
      },
      headers: {
        ...header,
        language: language,
      },
    });

    return res;
  }

  static async getPromo(seq, language, header) {
    const res = await axios({
      method: "get",
      url: "https://americananode.appskeeper.com/chat-service/v3/kfcare/",
      params: {
        q: seq,
      },
      headers: {
        ...header,
        language: language,
      },
    });

    return res;
  }

  ////////////////////////
  static async getcancalmyOrder(seq, language, header) {
    const res = await axios({
      method: "get",
      url: "https://americananode.appskeeper.com/chat-service/v3/kfcare/",
      params: {
        q: seq,
      },
      headers: {
        ...header,
        language: language,
      },
    });

    return res;
  }

  static async getRefundStatus(seq, language, header, status, noonpayOrderid) {
    console.log("seq", seq);
    console.log("language", language);
    console.log("header", header);
    console.log("status", status);
    console.log("noonpayOrderid", noonpayOrderid);

    const res = await axios({
      method: "get",
      url: "https://americananode.appskeeper.com/chat-service/v3/kfcare/getRefundStatus",
      params: {
        status: "status",
        noonpayOrderId: "noonpayOrderId",
        q: seq,
      },
      headers: {
        ...header,
        language: language,
      },
    });

    return res;
  }
}

export default chatRepo;

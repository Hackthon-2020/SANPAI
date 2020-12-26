import React from 'react'

export default function setOmikuji() {
    const ra = Math.round(Math.floor(Math.random() * 100));
    var msg = "";
    //console.log(ra);
    switch (ra % 5) {
        case 0:
            //console.log("大吉");
            msg = "大吉"
            return([ra, msg]);
            //const linkPath = './daiKichi'
        case 1:
            //console.log("中吉");
            msg = "中吉"
            return([ra, msg]);
        case 2:
            //console.log("小吉");
            msg = "小吉"
            return([ra, msg]);
        case 3:
            //console.log("吉");
            msg = "吉"
            return([ra, msg]);
        case 4:
            //console.log("凶");
            msg = "凶"
            return([ra, msg]);
        default:
            msg = "err"
            //console.log("err");
            return([ra, msg]);
    }
}

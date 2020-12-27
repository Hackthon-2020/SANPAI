// import React from 'react'

export default function setOmikuji() {
    const res = Math.round(Math.floor(Math.random() * 100));
    var msg = "";
    switch (res % 5) {
        case 0:
            msg = "大吉"
            return([res, msg]);
            //const linkPath = './daiKichi'
        case 1:
            msg = "中吉"
            return([res, msg]);
        case 2:
            msg = "小吉"
            return([res, msg]);
        case 3:
            msg = "吉"
            return([res, msg]);
        case 4:
            msg = "凶"
            return([res, msg]);
        default:
            msg = "err"
            return([res, msg]);
    }
}

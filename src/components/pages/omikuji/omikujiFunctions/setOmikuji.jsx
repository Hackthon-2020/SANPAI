// import React from 'react'

export default function setOmikuji() {
    const res = Math.round(Math.floor(Math.random() * 100));
    var title = "";
    var messages = [];
    //console.log(ra);
    switch (res % 7) {
        case 0:
            //console.log("大吉");
            title = "小吉"
            messages = [
                "心を正しく、欲望に流されず、人を慈しみ、神様に感謝の気持ちを持ち続ければ、幸いはますますあなたに添うでしょう。",
                "願い事：叶う。しかし、欲望が強すぎると一転して凶になる。",
                "待ち人：連絡もなく、来る人がいます。",
                "失し物：物の間から、ひょっと出てくる。",
                "旅行：あまりはしゃがなければ吉",
                "ビジネス：売る方のビジネスに吉",
                "学問：もうちょっと勉強したほうが良い。",
                "恋愛：信頼に足る人でしょう。あとは、あなた自身がどうか。",
                "病気：あなたたとあなたの病気に相応しい石を選びましょう。",
            ]
            return([title, messages]);
            //const linkPath = './daiKichi'
        case 1:
            title = "小吉"
            messages = [
                "あなたの心を平和にして、他人のためにつくせば吉。そうすれば、周りにどんな波風がたっても、あなたとあなたの周囲には春風がふく。",
                "願い事：他人のため、という気持ちがあればかなう。",
                "待ち人：遅れるが、来る。",
                "失し物：男性に聞きましょう。",
                "旅行：早い旅立ちがよい。",
                "ビジネス：よい。",
                "学問：もうちょっと勉強したほうがよい。",
                "恋愛：再出発もよいかもしれない。",
                "病気：いい医師に出会うように努力しましょう。",
            ]
            return([title, messages]);
        case 2:
            title = "中吉"
            messages = [
                "今はよくないかもしれない。静かにあなた自身を慎んでいれば、いろいろな問題は消滅していく。",
                "願い事：心配が多く、しかしその割には得るものが少ないでしょう。",
                "待ち人：来る。",
                "失し物：出てくるが、もう遅い。",
                 "旅行：盗難に注意。",
                 "ビジネス：あまり利益は期待できないが、損はしない。",
                 "学問：さぼれば危険。",
                "恋愛：今の恋愛は待ったほうが良いかも。",
                "病気：あなたたとあなたの病気に相応しい石を選びましょう。",
            ]
            return([title, messages]);
        case 3:
            title = "大吉"
            messages = [
                "することすべてが幸いの種となる。しかし、わがままになったり、酒や色に溺れると運気を追い出す。",
                "願い事：かなう。他人の言葉に流されてはいけない。",
                "待ち人：連絡もせずに、急に訪れる人に幸運のチャンスあり。",
                "失し物：出てくる。しかし、ちょっと手間取る。",
                "旅行：よいでしょう。ただし、連れがいる人には、その人との関係に注意。",
                "ビジネス：進んでよい。すこし強気くらいでよい。",
                "学問：そのまま努力を続けましょう。",
                "恋愛：その人こそがあなたにとって素晴らしい人。",
                "病気：快方に向かっている。",
            ]
            return([title, messages]);
        case 4:
            title = "吉"
            messages = [
                "時が大切。時とは時間であり、チャンスであり、正しい時間。心正しく、行いをすなおにしましょう。",
                "願い事：かなう。しかし、そこに色恋の影がある場合には妨害が起こり、かなわかいかも。",
                "待ち人：期待できない。",
                "失し物：なかなかででこない",
                "旅行：連れの人に左右される。",
                "ビジネス：変化はない。",
                "学問：日頃の努力が反映される。",
                "恋愛：他人にやさしく、素直な人であれば吉。",
                "病気：安心してください。",
            ]
            return([title, messages]);
        case 5:
            title = "吉"
            messages = [
                "迷わず一筋の道を貫けば思いがけぬ幸せが舞い込む。",
                "願い事：時がくればかなう。",
                "待ち人：来るかもしれないが、遅れる。",
                "失し物：低いところを探しましょう。",
                "旅行：いまはあまりよくない。",
                "ビジネス：周囲の影響で安定ない。",
                "学問：あなたの努力の分の結果が出る。",
                "恋愛：自分の目移り、心変わりに注意。",
                "病気：気持ちをゆったりもって静養しましょう。",
            ]
            return([title, messages]);
        case 6:
            title = "大吉"
            messages = [
                "今まで周囲にあったいろいろな災いがうそのように消えて、喜びの光がさす。しかし、傲慢になり、酒や異性に溺れれば、この幸運は消滅する。",
                "願い事：かなう。しかし、油断は禁物。",
                "待ち人：くる。",
                "失し物：時間がかかるが、でてくる。",
                "旅行：旅行中に利益に結びつくものと出会える。",
                "ビジネス：何かを買うほうが良い。",
                "学問：安心して勉強しよう。",
                "恋愛：積極的に出れば吉。",
                "病気：あまり軽くみてはいけない。自分の体の中の声に耳を傾け、病気であることにも感謝しましょう。",
            ]
            return([title, messages]);
        default:
            title = "ERR"
            messages = "error is ."
            //console.log("err");
            return([title, messages]);
    }
}

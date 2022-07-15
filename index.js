//BT quản lý tuyển sinh
// function score(a, b, c, area, human) {
//     totalscore = a + b + c + area + human
//     if (a * b * c == 0) { console.log("thí sinh có điểm liệt") }
//     if (totalscore > 35) { console.log("đậu") } else { console.log("rớt") }
//     console.log(totalscore);
// }
// score(7, 8, 1, 1, 1);
function calcareagrade(area) {
    if (area === "A") { return 2 } else if (area === "B") { return 1 } else if (area === "c") { return 0.5 } else if (area === "X") { return 0 }
}

function calcstudenttypegrade(studenttype) {
    if (studenttype === "1") { return 2.5 } else if (studenttype === "2") { return 1.5 } else if (studenttype === "3") { return 0.5 } else if (studenttype === "0") { return 0 }

}

function score() {
    var standardgrade = 23;
    var sub1 = 8;
    var sub2 = 5;
    var sub3 = 4;
    var area = "A";
    var studenttype = "1";
    var areagrade = calcareagrade(area);
    var studenttypegrade = calcstudenttypegrade(studenttype);
    total = sub1 + sub2 + sub3 + areagrade + studenttypegrade;
    if (sub1 * sub2 * sub3 === 0) { console.log("có điểm liệt", total) };
    if (total > standardgrade) { console.log("đậu", total) } else { console.log("rớt", total) }
}
score()

//BT tính tiền điện
function pay(a, kw) {
    if (kw < 50) { total = 500 * kw } else if (kw > 50 && kw <= 100) { total = 500 * 50 + (kw - 50) * 650 } else if (kw > 100 && kw <= 200) { 500 * 50 + 650 * 50 + (kw - 100) * 850 } else if (kw > 200 && kw <= 350) { total = 500 * 50 + 650 * 50 + 850 * 100 + (kw - 200) * 1100 } else if (kw > 350) { total = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (kw - 350) * 1300 };
    console.log(a, total);
}
pay("nghia", 550);

//BT Tính Thuế Thu nhập cá nhân
function taxes() {
    var name = "Tuấn Nghĩa";
    var totalyear = 600;
    var people = 4;
    tax = totalyear - 4 - (people * 1.6);
    console.log(name)
    if (tax <= 60) {
        tax *= 0.05
        console.log(tax)
    } else if (tax > 60 && tax <= 120) {
        tax *= 0.1
        console.log(tax)
    } else if (tax > 120 && tax <= 210) {
        tax *= 0.15
        console.log(tax)
    } else if (tax > 210 && tax <= 384) {
        tax *= 0.2
        console.log(tax)
    } else if (tax > 384 && tax <= 642) {
        tax *= 0.25
        console.log(tax)
    } else if (tax > 642 && tax <= 960) {
        tax *= 0.3
        console.log(tax)
    } else if (tax > 960) {
        tax *= 0.35
        console.log(tax)
    }
}
taxes()

//BT tính tiền cáp
function cap() {
    var customercode = 789123456;
    var customertype = "Ca nhan";
    var servicesbasic = 5;
    var servicepremium = 1;
    var basic = 0;
    var pre = 0;
    var bill = 0;
    var total = 0;
    if (customertype === "Ca nhan") {
        bill = 4.5;
        basic = 20.5;
        pre = 7.5 * servicepremium;
        total = bill + basic + pre;
    } else if (customertype === "Doanh nghiep") {
        bill = 15;
        basic = 75 + 5 * servicesbasic;
        pre = 50 * servicepremium;
        total = bill + basic + pre;
    }
    console.log("phi dich vu cua ban la :", total, "$")
}
cap()

let year = parseInt(prompt("nhập năm", ""));
let isleapyear = false;

if (year % 4 ==0) {
    if (year % 100==0) {
        if (year % 400 ==0) {
            isleapyear = true;
        }
    } else {
        isleapyear = true;
    }
}
console.log(isleapyear);
if (isleapyear) {
    console.log(isleapyear)
    alert(year + "là năm nhuận");
} else {
    alert(year + "không là năm nhuận");
}


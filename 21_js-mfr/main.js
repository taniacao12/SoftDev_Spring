var sum = function (a,b) {
    return a+b
}

var less501011 = function (gen) {
    var temp = master_data.filter(function(n) {return n["schoolyear"] == 20102011})
    temp = temp.filter(function(n) {return n[gen] < 50});
    temp = temp.map(function(n) {return 1})
    return temp.reduce(sum)
}

var avgper = function (gen) {
    var temp = master_data.filter(function(n) {return n["schoolyear"] == 20102011})
    var count = temp.map(function(n) {return 1}).reduce(sum)
    console.log(count);
    temp = temp.map(function(n){return parseInt(n[gen])})
    var tot = temp.reduce(sum)
    console.log(tot);
    return tot/count
}

var se400 = function() {
    var temp = master_data.filter(function(n) {return n["schoolyear"] == 20102011})
    temp = temp.filter(function(n){return n["total_enrollment"] > 400})
    var count = temp.map(function(n) {return 1}).reduce(sum)
    console.log(count);
    temp = temp.map(function(n){return parseInt(n["asian_per"])})
    var tot = temp.reduce(sum)
    console.log(tot);
    return tot/count
}

document.getElementById("fem").innerHTML= less501011("female_per");
document.getElementById("malavg").innerHTML= avgper("male_per");
document.getElementById("se400").innerHTML= se400();

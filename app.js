
let x;
let y =12;
x = y -2;
name = 'Toi la Dat nha';
let person = {name:'Dat', age:21}
let fruits = ["Tao","Mit","Chuoi"]
let so ;
so = Math.random();
//so = Math.PI
//so = Math.pow(so,2)
function text(chuoi){
    //document.getElementById("demo").innerHTML = "Hello JavaScript!";
    alert(chuoi);
    console.log(chuoi);
    console.log('x = ' +x);
    console.log('y = ' +y);
    console.log(name);
    console.log("ten person la: " + person.name + ",tuoi la: "+person.age)
    fruits.push("xoai")
    //document.getElementById("bien1").innerHTML = so;
    // let dieukien = true;
    // if (dieukien && (so > 0.5)) {
    //     document.getElementById("bien1").innerHTML = "Dieu kien dung roi: " + so;
    // } else{
    //     document.getElementById("bien1").innerHTML = "Dieu kien sai roi: " + so;

    // }
    // switch (so){
    //     case so > 0.2:
    //         document.getElementById("bien1").innerHTML = "So lon hon 0.2: " + so;
    //     case so > 0.4:
    //         document.getElementById("bien1").innerHTML = "So lon hon 0.4: " + so;
    //     case so > 0.6:
    //         document.getElementById("bien1").innerHTML = "So lon hon 0.6: " + so;
    //     case so > 0.8:
    //         document.getElementById("bien1").innerHTML = "So lon hon 0.8: " + so;
    //     default:
    //         document.getElementById("bien1").innerHTML = "So khac con lai: " + so;

    //     }
    if (so >= 0.2 && so <0.4) {
        document.getElementById("bien1").innerHTML = "So lon hon 0.2: " + so;
    } else if (so >= 0.4 && so <0.6){
        document.getElementById("bien1").innerHTML = "So lon hon 0.4: " + so;
    } else if (so >= 0.6 && so <0.8) {
        document.getElementById("bien1").innerHTML = "So lon hon 0.6: " + so;
    } else if (so >= 0.8 && so <1) {
        document.getElementById("bien1").innerHTML = "So lon hon 0.8: " + so;
    } else {
        document.getElementById("bien1").innerHTML = "So mac dinh la: " + so;
    }

    

    
}
function chao(ten,tuoi){
    alert('hi '+ ten +' tuoi '+tuoi);
    console.log('hi '+ ten +' tuoi '+tuoi)
    // for (i = 0; i < fruits.length; i++) {
    //     document.write("Trai cay = " + fruits[i] + "<br />");
    // }
    // for (let fruit of fruits){
    //     document.write("Trai cay cach 2: " + fruit + "<br />");
    // }
    // fruits.forEach(fruit =>{
    //     document.write("Trai cay cach pho bien: " + fruit + "<br />");
    // })
    // let sogido = 0
    // while (true){
    //     sogido++
    //     if (sogido <=5){
    //         continue;
    //     }
    //     document.write("Trai cay cach pho bien: " + sogido + "<br />");
    //     if (sogido >10) {
    //         break;
    //     }
    // }
    let person = new cat ("Meongao2",20);
    // document.getElementById("C4").innerHTML = "Ten la: " + person.getName() + " Tuoi la: " + person.getAge();
    // $("#C4").html(person.getName() + ":" + person.getAge());
    let myJQuery = new MyJQuery("C4");
    myJQuery.thayDoiHTML("MyJQuery la: " + person.getName() + ":" + person.getAge());

}
function conchuot(){
    console.log('Ban da dua chuot vao')
}
function botui(){
    console.log('Tai sao sd may tinh bo tui');
}


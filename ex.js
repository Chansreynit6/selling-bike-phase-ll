let productarray =[];

let road = [
       {
        id: 0,
        name:"Roadbike - Polygon",
        img:"./components/image/9f9bb1a63cf86fbecb69632baad80209.png",
        price: 1450,
       },
       {
        id:1 ,
        name:"Roadbike - United",
        img:"./components/image/119fa2e39e1bf7b7c5bd6acdd1db858c.png",
        price: 1250 ,
       },
       {
        id: 2,
        name:"Roadbike - Twitter",
        img:"./components/image/345ec81186e0a150bd58687ee728e7d6.png",
        price: 1600,
       },
       
]
let gravel =[
    {
    img: "../components/image/f8db6994435e2b5f27ab0a5660ece648.png",
    name: "Gravel - Polygon",
    new:"",
    brand: "Tambora G4",
    discountprice: "$1,000",
    price: 650,
    },
    {
    img: "../components/image/f7e8b9639a23d028d30ef0ea0afd72c0.png",
    name: "Gravel - Element",
    new1:"",
    brand1: "FRC38",
    discountprice1: "$800",
    price: 400,
    },
    
    {
    img: "../components/image/119fa2e39e1bf7b7c5bd6acdd1db858c.png",
    name: "Roadbike - Twitter",
    new2:"",
    brand2: "Aurora-Disc",
    discountprice2: "$2,000",
    price: 1799,
    },
]
let mountain = [
    { 
    img: "../components/image/e74d241d03cbc8f0c556931ca353a8ee.png",
    name: "MTB - United",
    new:"",
    brand: "Epsilon T6",
    discountprice: "$3,500",
    price: 3000,
    },
    {
    img: "../components/image/d2a172549fd82bfe4b4e88dbd5d3080b.png",
    name: "MTB - Twitter",
    new:"",
    brand: "SX-12",
    discountprice1: "$1,300",
    price: 1000,
    },
    
    {
    img: "../components/image/345ec81186e0a150bd58687ee728e7d6.png",
    name: "MTB - Pacific",
    new:"",
    brand: "Skeleton 3.0",
    discountprice2: "$2,500",
    price: 2250,
    },
]
let folding =[
    {
        id:0 ,
        name:"Gravel - Polygon",
        img:"./components/image/9f9bb1a63cf86fbecb69632baad80209.png",
        price: 1170,
       },
       {
        id:1,
        name:"Gravel - Element",
        img:"./components/image/b9fd31ec3a6ccda768df8210de9ed1b1.png",
        price: 800 ,
       },
       {
        id: 2,
        name:"MTB - United",
        img:"./components/image/b4289fd9011d3c36544184814d7eb7c6.png",
        price: 750 ,
       },
]

showgallery(road);

function showgallery(curray){
    console.log("ddd", curray);
    // document.getElementById('card').innerText ="";
    document.getElementById('card').innerText ="";
    for (var i=0;i<curray.length;i++){
        document.getElementById('card').innerHTML += `
        <div class=card-bar>
        <div class="card-list">
        <h4>${curray[i].name}</h4>
        <img src="${curray[i].img}"/>
        <p>$ ${curray[i].price}.00</p>
        </div>
        </div>`
    }
}

showgallerysecond(gravel);

function showgallerysecond(curray){
    console.log("ddd", curray);
    // document.getElementById('card').innerText ="";
    document.getElementById('card2').innerText ="";
    for (var i=0;i<curray.length;i++){
        document.getElementById('card2').innerHTML += `
        <div class=card-bar>
        <div class="card-list">
        <h4>${curray[i].name}</h4>
        <img src="${curray[i].img}"/>
        <p>$ ${curray[i].price}.00</p>
        </div>
        </div>`
    }
}

showgalleryfirst(mountain);

function showgalleryfirst(curray){
    console.log("ddd", curray);
    // document.getElementById('card').innerText ="";
    document.getElementById('card1').innerText ="";
    for (var i=0;i<curray.length;i++){
        document.getElementById('card1').innerHTML += `
        <div class=card-bar>
        <div class="card-list">
        <h4>${curray[i].name}</h4>
        <img src="${curray[i].img}"/>
        <p>$ ${curray[i].price}.00</p>
        </div>
        </div>`
    }
}


showgallerythird(folding);

function showgallerythird(curray){
    console.log("ddd", curray);
    // document.getElementById('card').innerText ="";
    document.getElementById('card3').innerText ="";
    for (var i=0;i<curray.length;i++){
        document.getElementById('card3').innerHTML += `
        <div class=card-bar>
        <div class="card-list">
        <h4>${curray[i].name}</h4>
        <img src="${curray[i].img}"/>
        <p>$ ${curray[i].price}.00</p>
        </div>
        </div>`
    }
}

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    productarray = road.filter(function(a){
        if(a.name.includes(text)){
            return a;
        }
        if(a.price == (text)){
            return a;
        }
    });

    console.log(productarray);

    if (this.value==""){
        showgallery(road);
    }
    else{
        if (productarray == ""){
            document.getElementById('para').style.display='block';
            document.getElementById('card').innerHTML ="";
        }
        else{
            showgallery(productarray);
            document.getElementById('para').style.display ='none';
        }
    }
})


document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    productarray = mountain.filter(function(a){
        if(a.name.includes(text)){
            return a;
        }
        if(a.price == (text)){
            return a;
        }
    });

    console.log(productarray);

    if (this.value==""){
        showgalleryfirst(mountain);
    }
    else{
        if (productarray == ""){
            document.getElementById('para1').style.display='block';
            document.getElementById('card1').innerHTML ="";
        }
        else{
            showgalleryfirst(productarray);
            document.getElementById('para1').style.display ='none';
        }
    }
})


document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    productarray = gravel.filter(function(a){
        if(a.name.includes(text)){
            return a;
        }
        if(a.price == (text)){
            return a;
        }
    });

    console.log(productarray);

    if (this.value==""){
        showgallerysecond(gravel);
    }
    else{
        if (productarray == ""){
            document.getElementById('para2').style.display='block';
            document.getElementById('card2').innerHTML ="";
        }
        else{
            showgallerysecond(productarray);
            document.getElementById('para2').style.display ='none';
        }
    }
})


document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    productarray = folding.filter(function(a){
        if(a.name.includes(text)){
            return a;
        }
        if(a.price == (text)){
            return a;
        }
    });

    console.log(productarray);

    if (this.value==""){
        showgallerythird(folding);
    }
    else{
        if (productarray == ""){
            document.getElementById('para3').style.display='block';
            document.getElementById('card3').innerHTML ="";
        }
        else{
            showgallerythird(productarray);
            document.getElementById('para3').style.display ='none';
        }
    }
})









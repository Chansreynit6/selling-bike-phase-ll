let productarray = [];

let productlist = [
  {
    id: 0,
    type: "Road",
    inform:
      "A type of bicycle specifically designed for road use. They are ideal for long-distance cycling, bike racing, or everyday use on the road.",
    
    
    img: "../components/image/fcfe6ba6c0b17935eeca426d2bd86041.png",
    name: "Roadbike - Polygon",
    new:"New",
    brand: "Strattos S7D",
    discountprice: "$2,000",
    newprice: "$1,450.00",


    img1: "../components/image/f6513c3b4416bb72362dbe0a68c7c996.png",
    name1: "Roadbike - United",
    new1:"New",
    brand1: "Strattos S7D",
    discountprice1: "$2,000",
    newprice1: "$1,450.00",


    img2: "../components/image/119fa2e39e1bf7b7c5bd6acdd1db858c.png",
    name2: "Roadbike - Twitter",
    new2:"Used",
    brand2: "Strattos S7D",
    discountprice2: "$2,000",
    newprice2: "$1,450.00",
  },
  {
    id: 1,
    type: "Gravel",
    inform:
      "A versatile type of bike designed to tackle a variety of terrains, including asphalt roads, gravel, dirt, and trails. These bikes are ideal for adventure and exploring diverse terrains.",
    
    
    img: "../components/image/f8db6994435e2b5f27ab0a5660ece648.png",
    name: "Gravel - Polygon",
    new:"",
    brand: "Tambora G4",
    discountprice: "$1,000",
    newprice: "$650.00",

    img1: "../components/image/f7e8b9639a23d028d30ef0ea0afd72c0.png",
    name1: "Gravel - Element",
    new1:"",
    brand1: "FRC38",
    discountprice1: "$800",
    newprice1: "$400.00",
    

    img2: "../components/image/119fa2e39e1bf7b7c5bd6acdd1db858c.png",
    name2: "Roadbike - Twitter",
    new2:"",
    brand2: "Aurora-Disc",
    discountprice2: "$2,000",
    newprice2: "$1,799.99",
  },
  {
    id: 2,
    type: "Mountain",
    inform:
      "A type of bike specifically designed for use on rough terrain, such as mountains, dirt tracks, forests, and rocky terrain. They are suitable for outdoor adventures, mountain trails, and exploration on off-road trails.",
    
    
    
    img: "../components/image/e74d241d03cbc8f0c556931ca353a8ee.png",
    name: "MTB - United",
    new:"",
    brand: "Epsilon T6",
    discountprice: "$3,500",
    newprice: "$3,000.00",

    img1: "../components/image/d2a172549fd82bfe4b4e88dbd5d3080b.png",
    name1: "MTB - Twitter",
    new1:"",
    brand1: "SX-12",
    discountprice1: "$1,300",
    newprice1: "$1,000.00",
    

    img2: "../components/image/345ec81186e0a150bd58687ee728e7d6.png",
    name2: "MTB - Pacific",
    new2:"",
    brand2: "Skeleton 3.0",
    discountprice2: "$2,500",
    newprice2: "$2,250.00",
  },
  {
    id: 3,
    type: "Folding",
    inform:
      "A type of bike that can be folded into a smaller, portable size for easy storage and transportation. Despite their smaller size, most folding bikes can still provide decent performance for daily use in the city.",
    
    
    
    img: "../components/image/9f9bb1a63cf86fbecb69632baad80209.png",
    name: "Folding Bike - Polygon",
    new:"",
    brand: "Urbano 3 2021",
    discountprice: "$350",
    newprice: "$250.00",

    img1: "../components/image/b9fd31ec3a6ccda768df8210de9ed1b1.png",
    name1: "Folding Bike - Tern",
    new1:"",
    brand1: "Verge X11",
    discountprice1: "$1,800",
    newprice1: "$1,500.00",
    

    img2: "../components/image/b4289fd9011d3c36544184814d7eb7c6.png",
    name2: "Folding Bike - Element",
    new2:"",
    brand2: "Vermont 16",
    discountprice2: "$800",
    newprice2: "$750.00",

  },
];
let txt = "";
for (let y in productlist) {
  txt += `
  <div class="box-bar">
  <div class="txt">
      <h2>${productlist[y].type}</h2>
      <a href="">View more</a>
      <p>${productlist[y].inform}</p>
  </div>
  <div class="card-bar">
  <div class="card">
      <div class="img">
          <img src="${productlist[y].img}" alt="">
      </div>
      <div class="txt-card">
          <p>${productlist[y].name}</p>
          <h3>${productlist[y].brand}</h3>
          <h3>${productlist[y].new}</h3>
          <div class="price">
              <p>${productlist[y].discountprice}</p>
              <p>${productlist[y].newprice}</p>
          </div>
      </div>
  </div>

  <div class="card first">
      <div class="img">
          <img src="${productlist[y].img1}" alt="">
      </div>
      <div class="txt-card">
          <p>${productlist[y].name1}</p>
          <h3>${productlist[y].brand1}</h3>
          <h3>${productlist[y].new1}</h3>
          <div class="price">
              <p>${productlist[y].discountprice1}</p>
              <p>${productlist[y].newprice1}</p>
          </div>
      </div>
  </div>

  <div class="card second">
      <div class="img">
          <img src="${productlist[y].img2}" alt="">
      </div>
      <div class="txt-card">
          <p>${productlist[y].name2}</p>
          <h3>${productlist[y].brand2}</h3>
          <h3>${productlist[y].new2}</h3>
          <div class="price">
              <p>${productlist[y].discountprice2}</p>
              <p>${productlist[y].newprice2}</p>
          </div>
      </div>
  </div>
  </div>
</div>
  `;
}
console.log(document.getElementById("product-list"));
document.getElementById("product-list").innerHTML = txt;
console.log(txt);

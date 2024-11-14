let a=[1,2,3,4,5];
let b=a.every(x=>x>6);
console.log(b)
let a=[1,2,3,4,5];
let b=a.every(x=>x<6);
console.log(b)
let a=[1,2,3,4,5];
let b=a.every(x=>x<=6);
console.log(b)
let cart=[{name:'laptop',instock:true},
    {name:'laptop',instock:true}
]
let b=cart.every(x=>x.instock);
console.log(b)
let cart=[{name:'laptop',instock:true},
    {name:'laptop',instock:true},
    {name:'laptop',instock:true}

]
let b=cart.every(x=>x.instock === true);
console.log(b)

let a=[1,2,3,4,5,"vamsi","surya"];
let b=a.fill("vamsi");
console.log(b)
let a=[1,2,3,4,5,"vamsi","surya"];
let b=a.fill("vamsi",6);
console.log(b)
let a=[1,2,3,4,5,];
let b=a.filter(x=>x>3);
console.log(b)
let a=[1,2,3,4,5,];
let b=a.filter(x=>x%2===0);
console.log(b)
let a=[1,2,3,4,5,];
let b=a.filter(x=>x%3===0);
console.log(b)
let fruits=["apple","mango","pine","kiwi","dragon"];
let b=fruits.filter(x=>x.length>5);
console.log(b)
const a=[{name:"surya",id:10,job:"python"},
    {name:"surya",id:10,job:"developer"},
    {name:"raju",id:10,job:"python"},
    {name:"surya",id:10,job:"developer"},
    {name:"surya",id:10,job:"python"}
]
let b=a.filter(x=>x.job==="python");
console.log(b)
const a=[{name:"surya",id:10,job:"python"},
        {name:"surya",id:10,job:"developer"},
        {name:"raju",id:10,job:"python"},
        {name:"surya",id:10,job:"developer"},
        {name:"surya",id:10,job:"python"}
    ]
    let b=a.filter(x=>x.job);
    console.log(b)
let a=[1,2,3,4,5];
let b=a.find(x=>x>3);
console.log(b)
let fruits=["banana","mango","apple"];
let b=fruits.find(x=>x ==="apple");
console.log(b)
let a=[1,2,3,4,5];
let b=a.flat();
console.log(b)
const a=[["surya",["vamsi","ravi"],["true"]]];
const b=a.flat().flat();
console.log(b)
let a=[1,2,3];
let b=a.find(x=>x>2);
console.log(b)
let fruits=["mango","bannana","apple"];
let b=fruits.find(x=>x==="bannana");
console.log(b)
let a=[1,
    2,
    ["vamsi","ravi",["bye","hi"]],
    ["true"]
]
console.log(a.flat(Infinity));
let a=[1,2,3,4,5];
let b=a.map(x=>x+2);
console.log(b)
let a=[1,2,3,4,5];
let b=a.map(x=>x*2);
console.log(b)
let a=[1,2,3,4,5];
let b=a.map(x=>x/2);
console.log(b)
let a=[1,2,3,4,5];
let b=a.map(x=>x%2);
console.log(b)
let fruits=["mango","bannana","apple"];
let b=fruits.includes("bannana");
console.log(b)
let fruits=["mango","bannana","apple"];
let b=fruits.includes("kiwi");
console.log(b)
let a=[1,2,3,4,5];
let b=a.reduce((x,y)=>x+y,0);
console.log(b)
let a=[1,2,3,4,5];
let b=a.reduce((x,y)=>x*y,1);
console.log(b)
let a=[1,2,3,4,5];
let b=a.reduce((x,y)=>x/y,1);
console.log(b)
let a=[2,5,7,8,9,222,444,56,78,900,234,56789,];
let b=a.sort();
console.log(b)
let a=[2,5,7,8,9,222,444,56,78,900,234,56789,];
let b=[4,5,78,98,90,23,45,678,900,6555,890,234,];
let c=a.b.sort(a-b);
console.log(c);
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello",1);
console.log(text)
let b="suryasinga";
console.log(b.startsWith("singa"));
let b="suryasinga";
console.log(b.startsWith("surya"));
let a="resume.pdf";
console.log(a.endsWith(".pdf"));
let b="inerior.mp4";
console.log(b.endsWith(".pdf"))
let a="sanjeevaraju";
console.log(a.repeat(10))
let a="sanjeevaraju ";
console.log(a.repeat(10))
let a="sanjeevaraju \n";
console.log(a.repeat(10))
let a="raju ravi";
let b=a.replace("raju","surya");
console.log(b)
let a="raju is the software developer in tcs he got high paid salary";
console.log(a.lastIndexOf("tcs"));
let orderedid="123";
let b=orderedid.padStart(5,"0");
console.log(b)
let orderedid="123";
let b=orderedid.padEnd(5,"0");
console.log(b)
let a="hello world this is surya";
let b=a.slice(19,25);
console.log(b)
let a="hello world this is surya";
let b=a.slice(-6,-2);
console.log(b)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)
let a=[1,2,3,4,5,6,7];
let b=a.splice([3,0,surya,raju]);
console.log(b)
let a="hello world javascript";
let b=a.substring(3,8);
console.log(b)
let a="hello world javascript";
let b=a.substring(8);
console.log(b)
let a="hello world javascript";
// let b=a.charAt(0).toUpperCase()+a.substring(1,-1)+a.at(-1).toUpperCase()
let b=a.charAt(0).toUpperCase()+a.slice(1,-1)+a.at(-1).toUpperCase()
console.log(b)
let text = "Hello world!";
let result = text.substr(4, 4);
console.log(result)
let num ="86788889";
let b =num.toString( );
console.log(b)
let a=["vamsi","surya","raju"];
let b=a.toString();
console.log(b);
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ain");
console.log(result);
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("/ain/g");
console.log(result);
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match(/ain/gi);
console.log(result)
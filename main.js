var arr = [
    {
        name: 'nfv01',
        infor1:'1vCPU x86',
        infor2:'1TB HDD',
        infor3:'1vCPU x86',
        infor4: '01',
    },
    {
        name: 'nfv02',
        infor1:'2vCPU x86',
        infor2:'2TB HDD',
        infor3:'2vCPU x86',
        infor4: '02',
        
    },
    {
        name: 'nfv03',
        infor1:'3vCPU x86',
        infor2:'3TB HDD',
        infor3:'3vCPU x86',
        infor4: '03',
        
    },
    {
        name: 'nfv04',
        infor1:'4vCPU x86',
        infor2:'4TB HDD',
        infor3:'4vCPU x86',
        infor4: '04',
        
    },
    {
        name: 'nfv05',
        infor1:'5vCPU x86',
        infor2:'5TB HDD',
        infor3:'5vCPU x86',
        infor4: '05',
        
    },
    {
        name: 'nfv06',
        infor1:'6vCPU x86',
        infor2:'6TB HDD',
        infor3:'6vCPU x86',
        infor4: '06',
        
    }
]
function add_child(items){

    var divGroup1158 = document.createElement('div');
    divGroup1158.setAttribute("class", "group1158")
    document.getElementById('myId').appendChild(divGroup1158);
// **** 1 card
    var divGroup1158Top = document.createElement("div");
    divGroup1158Top.setAttribute("class","group1158-top");

    var divGroup1158Mid = document.createElement("div");
    divGroup1158Mid.setAttribute("class","group1158-mid");

    var divGroup1158Bot = document.createElement("div");
    divGroup1158Bot.setAttribute("class","group1158-bot");

    // var divGroup1158 = document.querySelector('.group1158');
    divGroup1158.appendChild(divGroup1158Top);
    divGroup1158.appendChild(divGroup1158Mid);
    divGroup1158.appendChild(divGroup1158Bot);


// **********************************************************
    var divRibbon = document.createElement("div");
    divRibbon.setAttribute("class","ribbon");
    // var divGroup1158Top = document.querySelector('.group1158-top');
    divGroup1158Top.appendChild(divRibbon);

    var divTriangleRight = document.createElement("div");
    divTriangleRight.setAttribute("class","triangle-right");
    // var divGroup1158Top = document.querySelector('.group1158-top');
    divGroup1158Top.appendChild(divTriangleRight);

// ************************************************************
    var divCptChip1 = document.createElement("div");
    divCptChip1.setAttribute("class","cpt-chip1");
    // var divGroup1158Mid = document.querySelector('.group1158-mid');
    divGroup1158Mid.appendChild(divCptChip1);

    var divI1vcpu1 = document.createElement("div");
    divI1vcpu1.setAttribute("class","i1vcpu1");
    divGroup1158Mid.appendChild(divI1vcpu1);

    var btn1 = document.createElement('img');
    btn1.setAttribute("src","./asset/img/2.png");
    // var divImg1 = document.querySelector('.cpt-chip1');
    divCptChip1.appendChild(btn1);


// ************************************************************
    var divCptHd = document.createElement("div");
    divCptHd.setAttribute("class","cpt-hd");
    divGroup1158Mid.appendChild(divCptHd);

    var divI1tbhdd = document.createElement("div");
    divI1tbhdd.setAttribute("class","i1tbhdd");
    divGroup1158Mid.appendChild(divI1tbhdd);

    
    var btn2 = document.createElement('img');
    btn2.setAttribute("src","./asset/img/4.png");
    // var divImg2 = document.querySelector('.cpt-hd');
    divCptHd.appendChild(btn2);

    
// ************************************************************
    var divCptRam1 = document.createElement("div");
    divCptRam1.setAttribute("class","cpt-ram1");
    // var divGroup1158Bot = document.querySelector('.group1158-bot');
    divGroup1158Bot.appendChild(divCptRam1);

    var divI1vcpu2 = document.createElement("div");
    divI1vcpu2.setAttribute("class","i1vcpu2");
    divGroup1158Bot.appendChild(divI1vcpu2);

    

    var btn3 = document.createElement('img');
    btn3.setAttribute("src","./asset/img/1.png");
    // var divImg3 = document.querySelector('.cpt-ram1');
    divCptRam1.appendChild(btn3);

// ************************************************************
    var divCptMonitor = document.createElement("div");
    divCptMonitor.setAttribute("class","cpt-monitor");
    divGroup1158Bot.appendChild(divCptMonitor);

    var divI04 = document.createElement("div");
    divI04.setAttribute("class","i04");
    divGroup1158Bot.appendChild(divI04);

    

    var btn4 = document.createElement('img');
    btn4.setAttribute("src","./asset/img/3.png");
    // var divImg4 = document.querySelector('.cpt-monitor');
    divCptMonitor.appendChild(btn4);

    // ************************************************************
    var para = document.createElement("p");
    var x = document.createTextNode(`${items.name}`)
    para.appendChild(x);
    para.style.margin = "0";
    // var div = document.querySelector(".ribbon");
    divRibbon.appendChild(para);

    var para1 = document.createElement("p");
    var x1 = document.createTextNode(`${items.infor1}`);
    para1.appendChild(x1);
    para1.style.color = "white";
    // var div1 = document.querySelector(".i1vcpu1");
    divI1vcpu1.appendChild(para1);

    var para2 = document.createElement("p");
    var x2 =document.createTextNode(`${items.infor2}`)
    para2.appendChild(x2);
    para2.style.color = "white";
    // var div2 = document.querySelector(".i1tbhdd");
    divI1tbhdd.appendChild(para2);

    var para3 = document.createElement("p");
    var x3 = document.createTextNode(`${items.infor3}`);
    para3.appendChild(x3);
    para3.style.color = "white";
    // var div3 = document.querySelector(".i1vcpu2");
    divI1vcpu2.appendChild(para3);
    
    var para4 = document.createElement("p");
    var x4 =document.createTextNode(`${items.infor4}`)
    para4.appendChild(x4);
    para4.style.color = "white";
    // var div4 = document.querySelector(".i04");
    divI04.appendChild(para4);

}
function some(){
    for (let i = 0; i <arr.length;i++){
        add_child(arr[i]);
    }
}
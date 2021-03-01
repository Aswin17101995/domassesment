var req= new XMLHttpRequest();
req.open("GET",'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
req.send();
var contatiner=document.createElement("div");
contatiner.setAttribute("class","flex-container");
contatiner.setAttribute("id","bigme");
document.body.append(contatiner);
var mmm=[]
req.onload=function(){
    var data=JSON.parse(this.response);
    for(var i in data)
    {
        mmm.push(data[i]);
    }

    
}
console.log(mmm);
function createrow(eclass,datas)
{
    var c=document.createElement("div");
    c.setAttribute("class","eclass");
    var ins=document.createElement("div");
    ins.setAttribute("class","card-body");
    var h=document.createElement("h5");
    h.innerHTML="ID:"+datas.id;
    var ps=document.createElement("div");
    ps.innerHTML="Name --"+datas.name;
    var pq=document.createElement("div");
    pq.innerHTML="Email--"+datas.email;
    ins.append(h,ps,pq);
    c.append(ins);
    return c;
}



function showdata(value)
{
    var ori=parseInt(value);
    console.log(ori);
    document.getElementById("bigme").innerHTML="";
    var prepage=ori*10;
    var currentpage=prepage-10;
    for(var i=currentpage;i<prepage;i++)
    {
        var exele=createrow("card",mmm[i]);
        var kutty=document.createElement("div");
        kutty.setAttribute("class","card w-50");
        kutty.append(exele);
        document.getElementById("bigme").append(kutty); 
    }

}
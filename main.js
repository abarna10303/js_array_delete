var datas=[1,2,3,4,5,6,7,8,9,10];
var a=[];
var b=0;
var dindex=prompt("Enter the index");
for(i=0;i<datas.length;i++)
{
     if(datas[i]!=datas[dindex])
     {
          a[b]=datas[i];
          b++;
     }
}
document.write(datas);
document.write("<br>");
document.write(a);

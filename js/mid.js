var ctx=document.getElementById("mid"),mid=new Chart(ctx,{type:"bar",data:{labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"Donated by staff",data:[7.5,6,4,5],backgroundColor:"rgb(87 , 84, 158)"},{label:"KWM matched",data:[10,8,4,5],backgroundColor:"rgb(105, 201, 247)"}]},options:{legend:{labels:{boxWidth:20}},scales:{xAxes:[{stacked:!0,gridLines:{display:!1}}],yAxes:[{stacked:!0,ticks:{beginAtZero:!0,fixedStepSize:5,callback:function(e){return"$"+e+"k"}},gridLines:{drawTicks:!1}}]}}});

// 点击三个li时中的一个时我们：
//1.让当前点击的li和div有active选中样式
//2.让其余的li和div移除选中样式


// 想要操作那些元素，就要获取那些元素
var tabBox = document.querySelector('.tabBox');
var tabList = tabBox.querySelectorAll('.tab>li');
var contentList = tabBox.querySelectorAll('.content');
// //连续定义多个变量，可以用逗号分隔，这样写一个var即可
// var a = 1,
//     b = 2,
//     c = 3;
// //以上完全等同于以下
// var a = 1;
// var b = 1;
// var c = 1;


//一个函数实现一个功能有些东西是创建函数时无法知道的，只有执行的时候告诉我才可以，设定一个形参，执行时传递实参
//封装叶卡切换方法，但是我们此时不知道用户点击的是哪一个li，
//只有执行的时候我们才知道：所以此时我们应该设定一个形参用
//来接收以后传递给我的是哪个”li“(此时我们应该这样规划：形参值叫index，
//用来存储点击时的这个li的索引,以后执行方法只需要把点击li的索引传递进来即可)
function changeTab(index){
//1.让当前点击的li和div有active选中样式
tabList[index].classList.add('active');
contentList[index].classList.add('active');

//2.让其余的li和div移除选中样式
for (var i = 0; i< tabList.length; i++){
//I当前循环这个li的索引 index当前点击li的索引
if(i != index){
    //除点击项之外其余的li
    tabList[i].classList.remove('active');
    contentList[i].classList.remove('active');
}

}
}

//以后只要用到切换页签直接调用这个函数即可
//实现点击动作，点击每个li的时候才去执行changeTab
tabList[0].onclick = function (){
changeTab(0);
}
tabList[1].onclick = function (){
changeTab(1);
}
tabList[2].onclick = function (){
changeTab(2);
}
tabList[3].onclick = function (){
changeTab(3);
}

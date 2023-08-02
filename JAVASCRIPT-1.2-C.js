////////
咳咳咳咳，就不多介绍了
这个也是最新网站版本的js代码部分

就这样了，嗯哼
////////////





//////////////初始页面部分
function time() {
    var timer = new Date();
    var hour = timer.getHours();
    var min = timer.getMinutes();
    if (hour < 10) {
        hour = "0" + hour + ":";
    } else {
        hour = hour + ":";
    }
    if (min < 10) {
        min = "0" + min + "";
    } else {
        min = min + "";
    }
    document.querySelector(".time").innerHTML = hour + '' + min;
    setTimeout(time, 1000);
}
function helloFloat() {
    // 获得元素
    var hello = document.getElementById('hello')
    var image = document.getElementById('image')
    // 获得时间对象
    var gettime = new Date();
    var hours = gettime.getHours();
    var str1 = "Good morning! 尊敬的用户！"
    var str2 = "Good afternoon! 尊敬的用户！"
    var str3 = "Good night! 尊敬的用户！"
    // 判断
    if (hours > 6 && hours <= 11) {
        hello.innerHTML = str1;
        image.src = "images/day.png"
        switchBtn.className = 'fa fa-sun-o'
    } else if (hours > 11 && hours <= 20) {
        hello.innerHTML = str2
        if (hours >= 17) {
            image.src = "images/afternoon.png"
        } else {
            image.src = "images/day.png"
        }
        switchBtn.className = 'fa fa-sun-o'
    } else {
        hello.innerHTML = str3
        image.src = "images/night.png"
        switchBtn.className = 'fa fa-moon-o'
        switchBtn.style.color = 'rgba(32,33,36,.25)'
    }
}

// // 上传文件功能
// var fileInput = document.getElementById('file-input');
// fileInput.addEventListener('change', handleFileUpload);

// function handleFileUpload(event) {
//   var file = event.target.files[0];
//   // 处理上传文件的逻辑
//   // 这里可以根据需要自定义处理方式，例如上传文件到服务器等
// }

// 输入框
let search = document.getElementById('search')
let bg = document.getElementById('bg')
let value = document.getElementById('search').value
let poem = document.getElementById('poem')
// value = "Search"
search.onfocus = function () {
    if (search.value == 'Search') {
        search.value = ''
        // 背景高斯模糊
        bg.style.WebkitFilter = "blur(6px)";
        // 背景放大
        bg.style.transform = "scale(1.05)";
        // 修改诗歌的类名
        poem.className = 'poem'
    }
}
search.onblur = function () {
    if (search.value == '') {
        search.value = 'Search'
        bg.style.WebkitFilter = "blur(0px)";
        bg.style.transform = "scale(1)";
        poem.className = 'hide'
    }
}
//输入框 结束
// 页面开关灯
let switchBtn = document.getElementById('switchBtn');
let timer = new Date();
let hours = timer.getHours();
let flag = true;//默认是 true白天点击黑夜
if (hours > 6 && hours <= 20) {
    flag = false;
}
switchBtn.onclick = function () {
    flag = !flag;
    if (flag) {
        image.src = "images/night.png"
        switchBtn.className = 'fa fa-moon-o'
        switchBtn.style.color = 'rgba(32,33,36,.25)'
    } else {
        if (hours > 6 && hours <= 11) {
            image.src = "images/day.png"
        } else {
            if (hours >= 17) {
                image.src = "images/afternoon.png"
            } else {
                image.src = "images/day.png"
            }
        }
        switchBtn.className = 'fa fa-sun-o'
        switchBtn.style.color = 'rgba(255,207,72,.75)'
    }
}
// 页面开关灯 结束

// document.addEventListener("DOMContentLoaded", function() {
//     const searchBtn = document.getElementById("searchBtn");
//     const uploadBtn = document.getElementById("uploadBtn");
  
//     searchBtn.addEventListener("click", function() {
//       const searchInput = document.getElementById("search").value;
//       const selectedKeywords = Array.from(document.querySelectorAll("#keywords option:checked")).map(option => option.value);
  
//       const searchResult = document.createElement("div");
//       searchResult.classList.add("search-result");
  
//       const searchResultText = document.createElement("div");
//       searchResultText.classList.add("search-result-text");
//       searchResultText.textContent = `关键字: ${searchInput}, 选中的关键词: ${selectedKeywords.join(", ")}`;
  
//       const deleteBtn = document.createElement("button");
//       deleteBtn.classList.add("delete-btn");
//       deleteBtn.textContent = "删除";
//       deleteBtn.addEventListener("click", function() {
//         searchResult.remove();
//       });
  
//       const editBtn = document.createElement("button");
//       editBtn.classList.add("edit-btn");
//       editBtn.textContent = "编辑";
//       editBtn.addEventListener("click", function() {
//         const editTextarea = document.createElement("textarea");
//         editTextarea.value = searchResultText.textContent;
//         searchResultText.textContent = "";
//         searchResultText.appendChild(editTextarea);
  
//         const saveBtn = document.createElement("button");
//         saveBtn.textContent = "保存";
//         saveBtn.addEventListener("click", function() {
//           searchResultText.textContent = editTextarea.value;
//           editTextarea.remove();
//           saveBtn.remove();
//         });
  
//         searchResultText.appendChild(saveBtn);
//       });
  
//       searchResult.appendChild(searchResultText);
//       searchResult.appendChild(deleteBtn);
//       searchResult.appendChild(editBtn);
  
//       document.getElementById("searchResults").appendChild(searchResult);
//     });
  
//     uploadBtn.addEventListener("click", function() {
//       const fileInput = document.getElementById("file");
//       const fileKeywordsInput = document.getElementById("fileKeywords");
  
//       const fileResult = document.createElement("div");
//       fileResult.textContent = `文件名: ${fileInput.files[0].name}, 关键词: ${fileKeywordsInput.value}`;
  
//       const deleteBtn = document.createElement("button");
//       deleteBtn.textContent = "删除";
//       deleteBtn.addEventListener("click", function() {
//         fileResult.remove();
//       });
  
//       fileResult.appendChild(deleteBtn);
  
//       document.getElementById("uploadResults").appendChild(fileResult);
//     });
//   });














////////////////////////登录页面部分

// 获取要操作的元素
let login_title = document.querySelector('.login-title');
let register_title = document.querySelector('.register-title');
let login_box = document.querySelector('.login-box');
let register_box = document.querySelector('.register-box');

// 绑定标题点击事件
login_title.addEventListener('click', () => {
    // 判断是否收起，收起才可以点击
    if (login_box.classList.contains('slide-up')) {
        register_box.classList.add('slide-up');
        login_box.classList.remove('slide-up');
    }
})
register_title.addEventListener('click', () => {
    if (register_box.classList.contains('slide-up')) {
        login_box.classList.add('slide-up');
        register_box.classList.remove('slide-up');
    }
})


// 输入的密码框
let input = document.getElementById('input')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

var flag = false;

eyes.onclick = function () {
    flag = !flag
    if (flag) {
        input.type = 'text';
        eyes.className = 'fa fa-eye fa1'
    } else{
        input.type = 'password';
        eyes.className = 'fa fa-eye-slash fa1'
    }
}
eyes1.onclick = function () {
    console.log("aaaaa");
    flag = !flag
    if (flag) {
        input1.type = 'text';
        eyes1.className = 'fa fa-eye fa2'
    } else{
        input1.type = 'password';
        eyes1.className = 'fa fa-eye-slash fa2'
    }
}
eyes2.onclick = function () {
    console.log("aaaaa");
    flag = !flag
    if (flag) {
        input2.type = 'text';
        eyes2.className = 'fa fa-eye fa3'
    } else{
        input2.type = 'password';
        eyes2.className = 'fa fa-eye-slash fa3'
    }
}

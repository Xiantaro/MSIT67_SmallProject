//------------------------------------------------------------------------------------------------------------------------------------------------------
// BMI計算器開始
let input_height_bmi = document.getElementById("bmi_input_height"); //實體化輸入的身高
let input_weight_bmi = document.getElementById("bmi_input_weight"); //實體化輸入的體重
let input_calculate_bmi = document.getElementById("buttom_calculate_bmi"); //實體化計算按鈕
let input_clean_bmi = document.getElementById("buttom_clean_bmi"); //實體化清除按鈕
let input_result_bmi = document.getElementById("bmi_result"); //實體化計算結果
let input_reset_bmi = document.getElementById("bmi_reset"); //實體化重新計算按鈕
input_calculate_bmi.addEventListener("click", bmiCalculate); //計算結果****
input_clean_bmi.addEventListener("click", bmi_clean); //清除身高體重****
input_reset_bmi.addEventListener("click", bmi_reset); //重新計算****
// BMI計算程式
function bmiCalculate() {
  let height = parseFloat(input_height_bmi.value);
  let weight = parseFloat(input_weight_bmi.value);
  if (height >= 272)
    return window.alert(
      "身高超越Robert Pershing Wadlow!,你成為歷史上最高的人。"
    );
  if (weight >= 635)
    return window.alert(
      "體重超越Jon Brower Minnoch!,你成為歷史上最重(胖)的人。"
    );
  // BMI = 體重(公斤) / 身高**2(公尺**)
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("請輸入有效的身高體重數值....");
    return;
  }

  //   舊的let bmi = input_weight_bmi / (input_height_bmi / 100) ** 2;
  let bmi = weight / Math.pow(height / 100, 2);
  bmi = bmi.toFixed(2);
  let resultText = "";
  if (bmi >= 27) {
    alert("肥胖");
  } else if (bmi >= 24) {
    alert("體重過重");
  } else if (bmi >= 18.5) {
    alert("健康體重!!");
  } else if (bmi < 18.5) {
    alert("體重過輕..");
  }
  input_result_bmi.textContent = `${bmi}`;
}
// BMI清除按鈕
function bmi_clean() {
  input_height_bmi.value = "";
  input_weight_bmi.value = "";
}
// BMI重新計算
function bmi_reset() {
  input_height_bmi.value = "";
  input_weight_bmi.value = "";
  input_result_bmi.textContent = " ";
}
// 點擊愛心收藏
document.getElementById("my_love").addEventListener("click", function () {
  if (this.style.color === "red") {
    this.style.color = "black";
  } else {
    this.style.color = "red";
  }
});
// 選單
// 點選時會出現選單,下拉選單會隱藏。
document.getElementById("Top_ListBlock").addEventListener("click", function () {
  document.getElementById("menu_list").style.display = "block";
  if (document.getElementById("menu_list").style.display === "block") {
    this.style.display = "none";
  }
});
// 點選選單的X時會關閉視窗,並顯示下拉選單
document
  .getElementById("menu_list_cancle")
  .addEventListener("click", function () {
    document.getElementById("menu_list").style.display = "none";
    document.getElementById("Top_ListBlock").style.display = "block";
  });
// 搜尋放大鏡區塊顯示
document.getElementById("memu_list_title_search").addEventListener("click", function() {
  let block = document.getElementById("menu_list_searchBlock");
  let style = window.getComputedStyle(block);
  if (style.display === "none") block.style.display = "block";
  else block.style.display = "none";});
// 顯示BMI
// document.getElementById("menu_bmi").addEventListener("click", function() {
//   let twoBlock = document.getElementById("Two_block_calculate_result");
//   let style = window.getComputedStyle(twoBlock);
//   if (style.display === "none") twoBlock.style.display = "flex";
//   else twoBlock.style.display = "none"
// })

// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------
// -----------------------我是分隔線------------------------------------------------------------ ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------
// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------

// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------
// -----------------------我是分隔線------------------------------------------------------------ ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------
// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------

//
// BMR計算器開始
//實體化
const bmr_gender = gender_Selcter;
const bmr_age = document.getElementById("bmr_age");
const bmr_height = document.getElementById("bmr_height");
const bmr_weight = document.getElementById("bmr_weight");
const bmr_waist = document.getElementById("bmr_waist")
const bmr_calculate_button = document.getElementById("bmr_calculate");
const bmr_clean_button = document.getElementById("bmr_clean");
const bmr_result = document.getElementById("bmr_result");
const bmr_reset_button = document.getElementById("bmr_reset");
//按鈕觸發
bmr_calculate_button.addEventListener("click", bmrCalculate);
bmr_clean_button.addEventListener("click", bmrClean);
bmr_reset_button.addEventListener("click", bmrReset);
// BMR_性別判斷
function gender_Selcter() {
  const gendedRadios = document.querySelectorAll('input[name="bmr_gender"]');
  let selectedGender;
  for (let gender of gendedRadios) {
    if (gender.checked) {
      selectedGender = gender.value;
      break;
    }
  }
  return selectedGender;
}
/* BMR計算器 */
function bmrCalculate() {
  let age = parseInt(bmr_age.value);
  let height = parseInt(bmr_height.value);
  let weight = parseInt(bmr_weight.value);
  let waist = parseInt(bmr_waist.value);
  if (
    isNaN(age) ||
    isNaN(height) ||
    isNaN(weight) ||
    isNaN(waist) ||
    age <= 0 ||
    weight <= 0 ||
    height <= 0 ||
    waist <= 0
  ) {
    alert("請輸入正確的年紀身高體重...");
    return;
  }
  // ABSI 計算
  let bmi = weight / Math.pow(height / 100, 2);
  bmi = bmi.toFixed(2);
  let absi = waist / ((Math.pow(bmi, (2/3))) * Math.pow(height*100, 0.5));
  absi = absi.toFixed(5);
//   let bmr_result_text = document.getElementById("bmr_result")
  let bmr_result_style = window.getComputedStyle(bmr_result)
  if (  bmr_result_style.display === "none")
    bmr_result.style.display = "block"
  bmr_result.textContent = `ABSI:${absi}`;
  bmr_reset_button.style.display = "block"
}





//bmr清除
function bmrClean() {
  bmr_age.value    = "";
  bmr_height.value = "";
  bmr_weight.value = "";
  bmr_waist.value  = "";
}

//bmr重新計算
function bmrReset() {
    bmrClean();
    bmr_result.textContent = "結果 ";
    bmr_reset_button.style.display = "none";
    bmr_result.style.display ="none";
}
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// TDEE的計算
function tdeeCalculate(bmr) {
  //無活動: TDEE = 1.2 * BMR
  let teDD_zeor = bmrCalculate(bmr) * 1.2;

  // 輕量活動: TDEE = 1.375 * BMR
  let teDD_light = bmrCalculate(bmr) * 1.375;

  // 中度活動量: TDEE = 1.55 * BMR
  let teDD_mid = bmrCalculate(bmr) * 1.55;

  // 高度活動量: TDEE = 1.725 * BMR
  let teDD_hight = bmrCalculate(bmr) * 1.725;

  // 非常高度活動量: TDEE = 1.9 * BMR
  let teDD_awfully_hight = bmrCalculate(bmr) * 1.9;
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
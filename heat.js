// 熱量計算器開始
const dailyheat_lightwork = document.getElementById("dailyheat_lightwork"); //實體化 輕度工作
const dailyheat_midwork = document.getElementById("dailyheat_midwork"); //實體化 中度工作
const dailyheat_heavywork = document.getElementById("dailyheat_heavywork"); //實體化 重度工作
const dailyheat_genderMale = document.getElementById("dailyheat_genderMale"); //實體化 男性
const dailyheat_genderFemale = document.getElementById(
  "dailyheat_genderFemale"
); //實體化女性
const dailyheat_age = document.getElementById("dailyheat_age"); //實體化 年齡
const dailyheat_height = document.getElementById("dailyheat_height"); //實體化 身高
const dailyheat_weight = document.getElementById("dailyheat_weight"); //實體化 重量
 //實體化 計算按鈕
 const dailyheat_calculate_button = document.getElementById( "dailyheat_calculate");// 實體化 計算按鈕
const dailyheat_clean_button = document.getElementById("dailyheat_clean"); //實體化 清除按鈕
const dailyheat_result_button = document.getElementById("dailyheat_result"); //實體化 結果顯示
const dailyheat_reset_button = document.getElementById("dailyheat_reset"); //實體化 重新計算按鈕

//事件綁定
dailyheat_calculate_button.addEventListener("click", dailyheatCalculate);
dailyheat_clean_button.addEventListener("click", dailyheatClean);
dailyheat_reset_button.addEventListener("click", dailyheatReset);

// 熱量計算器_工作量判斷
function job_selecter() {
  const jobRadios = document.querySelectorAll('input[name="job"]');
  let selectedJob;
  for (let job of jobRadios) {
    if (job.checked) {
      selectedJob = job.value;
      break;
    }
  }
  return selectedJob;
}
// 熱量計算機_性別判斷
function gender_selecter() {
  const genderRadios = document.querySelectorAll('input[name="gender"]');
  let selectedGender;
  for (let gender of genderRadios) {
    if (gender.checked) {
      selectedGender = gender.value;
      break;
    }
  }
  return selectedGender;
}
/* 每日熱量計算器 */
function dailyheatCalculate() {
  let work = job_selecter();
  let gender = gender_selecter();
  let age = parseInt(dailyheat_age.value);
  let height = parseInt(dailyheat_height.value);
  let weight = parseInt(dailyheat_weight.value);
  let bmi = weight / Math.pow(height / 100, 2);
  let result_dailyhet;
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    alert("請輸入有效的身高體重數值....");
    return;
  }
  if (bmi < 18.5) {
    //BMI過輕
    if (work === "light") {
      result_dailyhet = 35 * weight;
    } else if (work === "mid") {
      result_dailyhet = 40 * weight;
    } else if (work === "heavy") {
      result_dailyhet = 45 * weight;
    }
  } else if (bmi <= 24) {
    //體重正常
    if (work === "light") {
      result_dailyhet = 30 * weight;
    } else if (work === "mid") {
      result_dailyhet = 35 * weight;
    } else if (work === "heavy") {
      result_dailyhet = 40 * weight;
    }
  } else {
    //體重過重
    if (work === "light") {
      result_dailyhet = 20 * weight;
    } else if (work === "mid") {
      result_dailyhet = 30 * weight;
    } else if (work === "heavy") {
      result_dailyhet = 35 * weight;
    }
  }
  dailyheat_result_button.style.display = "block"
  dailyheat_reset_button.style.display = "block"
  dailyheat_result_button.textContent = `結果: 您一天需要${Math.round(
    result_dailyhet
  )}大卡`;
}

// 熱量計算器輸入清除
function dailyheatClean() {
  dailyheat_age.value = "";
  dailyheat_height.value = "";
  dailyheat_weight.value = "";
}
// 熱量計算器結果輸入重製
function dailyheatReset() {
  dailyheatClean();
  dailyheat_result_button.textContent = "結果: ";
  dailyheat_reset_button.style.display = "none"
  dailyheat_result_button.style.display = "none"
}



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
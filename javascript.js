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
    resultText = "肥胖..";
  } else if (bmi >= 24) {
    resultText = "體重過重";
  } else if (bmi >= 18.5) {
    resultText = "健康體重!!";
  } else if (bmi < 18.5) {
    resultText = "體重過輕..";
  }
  input_result_bmi.textContent = `${bmi},${resultText}。`;
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
  input_result_bmi.textContent = "你的BMI是: ";
}
// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------
// -----------------------我是分隔線------------------------------------------------------------ ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------
// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------
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
const dailyheat_calculate_button = document.getElementById(
  "dailyheat_calculate"
); //實體化 計算按鈕
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
}

// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------
// -----------------------我是分隔線------------------------------------------------------------ ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------
// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------
//
// BMR計算器開始
//實體化
const bmr_gender = gender_Selcter;
const bmr_age = document.getElementById("bmr_age");
const bmr_height = document.getElementById("bmr_height");
const bmr_weight = document.getElementById("bmr_weight");
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
  let gender = gender_Selcter();
  let age = parseInt(bmr_age.value);
  let height = parseInt(bmr_height.value);
  let weight = parseInt(bmr_weight.value);
  let bmr_result_end = 0;
  if (
    isNaN(age) ||
    isNaN(height) ||
    isNaN(weight) ||
    age <= 0 ||
    weight <= 0 ||
    height <= 0
  ) {
    alert("請輸入正確的年紀身高體重...");
    return;
  }
  if (gender === "male") {
    bmr_result_end = 13.7 * weight + 5 * height - 6.8 * age + 66; //男性Bmr公式
  } else {
    bmr_result_end = 9.6 * weight + 1.8 * height - 4.7 * age + 655; //女性Bmr公式
  }
  bmr_result.textContent = `結果: ${bmr_result_end.toFixed(2)}`;
}
//bmr清除
function bmrClean() {
  bmr_age.value = "";
  bmr_height.value = "";
  bmr_weight.value = "";
}
//bmr重新計算
function bmrReset() {
  bmrClean();
  bmr_result.textContent = "結果 ";
}
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

// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------
// -----------------------我是分隔線------------------------------------------------------------ ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------
// ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------- -------------------------------------------------------

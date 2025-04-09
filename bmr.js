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

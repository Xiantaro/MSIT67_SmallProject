//首頁設計

//浮動顯示文字

const blocks = document.querySelectorAll('.Mid_Content_block');
const nameLabel = document.querySelector("#Mid_introduce_text_Name label");
const wordLabel = document.querySelector("#Mid_introduce_text_word label");

console.log(blocks);
const defaultName = nameLabel.textContent;
const defaultWord = wordLabel.textContent;

blocks.forEach(block => {
  block.addEventListener("mouseenter", () => {
    const name = block.getAttribute("data-name");
    const word = block.getAttribute("data-word");
    nameLabel.textContent = name;
    wordLabel.textContent = word;
  });
  block.addEventListener("mouseleave", () => {
    nameLabel.textContent = defaultName;
    wordLabel.textContent = defaultWord;
  });
});

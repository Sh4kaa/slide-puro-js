const slides_container = document.querySelector(".slides-items");
const btn_next = document.querySelector("#next");
const btn_prev = document.querySelector("#prev");

let count = 0;
function slideNext() {
  btn_prev.disabled = false;
  const slide_items = slides_container.querySelectorAll(".slides-items > *");
  const qtd_items = slide_items.length
  const width_item_slide = slides_container.offsetWidth / qtd_items;

  if (count < qtd_items - 1) {
    slides_container.style.transform += `translateX(${-width_item_slide}px)`;
    count++;
  }
  if (count === qtd_items - 1) {
    btn_next.disabled = true;
  }
}

function slidePrev() {
  btn_next.disabled = false;
  const slide_items = slides_container.querySelectorAll(".slides-items > *");
  const qtd_items = slide_items.length
  const width_item_slide = slides_container.offsetWidth / qtd_items;

  if (count > 0) {
    slides_container.style.transform += `translateX(${width_item_slide}px)`;
    count--;
  }

  if (count === 0) {
    btn_prev.disabled = true;
  }
}

btn_next.addEventListener("click", slideNext);
btn_prev.addEventListener("click", slidePrev);

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const colors = ["#fce4e1", "#fde8d8", "#fff1e0", "#fff8ed"];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createDot() {
    const dot = document.createElement("div");

    dot.classList.add("dot");

    dot.style.top = `0px`;
    dot.style.left = `${random(0, window.innerWidth - 30)}px`;
    dot.style.background = colors[Math.floor(random(0, colors.length))];

    dot.style.animationDuration = `${random(5, 10)}s`;
    dot.style.animationDelay = `0s`;

    body.appendChild(dot);

    dot.addEventListener("animationend", () => {
      dot.remove();
    });
  }

  const dotInterval = setInterval(createDot, 100);

  const img = document.querySelector("img");

  img.addEventListener("click", () => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = img.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    ripple.style.left = `${x - 25}px`;
    ripple.style.top = `${y - 25}px`;
    ripple.style.width = "50px";
    ripple.style.height = "50px";

    document.body.appendChild(ripple);

    // Hủy dot rain
    clearInterval(dotInterval);
    img.remove();

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    // Bật sao băng
    const temp = document.getElementById("temp");

    function removeTemp() {
      temp.style.opacity = "0";
      temp.addEventListener(
        "transitionend",
        () => {
          temp.remove();
        },
        { once: true }
      );
    }

    removeTemp();

    // Thêm message
    const box = document.createElement("div");
    box.classList.add("message-box");

    // Thêm nội dung title + paragraph
    box.innerHTML = `
<h2 class="msg-title">GỬI NGÂN HUỲNH</h2>
<p class="msg-paragraph">
  Tuy Bảo ko thân thiết j với Ngân Huỳnh, nhưng mà sau khi nghe tin Ngân Huỳnh
  bị bệnh, thấy rất sốc và đau lòng.
</p>
<p class="msg-paragraph">
  Do thời gian biểu của Bảo lộn xộn nên chưa thể đến gặp gỡ Ngân
  Huỳnh ngay được, bất đắc dĩ gửi tặng thư này.
</p>
<p class="msg-paragraph">
  Bảo ít ra ngoài, thiếu kinh nghiệm sống, không biết nói j cho hay, ko bt
  Ngân Huỳnh yêu thích j, cũng ko bt bệnh tình Ngân Huỳnh ntn, trong
  lòng muốn nói Ngân Huỳnh bình an nghỉ ngơi, từ từ hồi phục. Chúc Ngân Huỳnh
  gặp nhiều may mắn.
</p>
<p class="msg-paragraph">-Bảo-</p>
`;

    document.body.appendChild(box);
  });
});

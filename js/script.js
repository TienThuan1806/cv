// Hiển thị chat popup
const chatPopup = document.getElementById("chatPopup");
const openBtn = document.querySelector(".contact_section span:last-child");
const closeBtn = document.querySelector(".close-chat");

openBtn.addEventListener("click", () => {
  chatPopup.style.display = "flex";
  gsap.fromTo(
    ".chat-box",
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
  );
});

closeBtn.addEventListener("click", () => {
  gsap.to(".chat-box", {
    scale: 0.8,
    opacity: 0,
    duration: 0.3,
    ease: "power3.in",
    onComplete: () => (chatPopup.style.display = "none"),
  });
});

// Gửi form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Your message has been sent successfully!");
  chatPopup.style.display = "none";
});

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
//instead of selecting them one by one, we select them all and loop through them with forEach

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.classList); //spits out all classes of a button we just clicked
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    if (count < 0) {
      value.style.color = "red";
    }

    value.textContent = count;
  });
});

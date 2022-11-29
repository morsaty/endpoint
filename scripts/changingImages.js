paragraph = document.querySelector("#replace-me");
      const div = document.querySelector("#div");
      const div2 = document.querySelector("#js-a-wwh1");
      const div3 = document.querySelector("#js-a-wwh2");
      const div4 = document.querySelector("#js-a-wwh3");
      const div5 = document.querySelector("#js-a-wwh4");
      const image = document.querySelector(".wwh-image");

      function changeText1() {
        paragraph.innerText = "End every transaction on a high note.";
        div.style = "border-left: 4px solid #1694c2; color: black";
        image.src = "/images/RealEstateProfessionals.webp";
        div2.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div3.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div4.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div5.style = "border-left: 4px solid #8194a346; color: #8194a3";
      }

      function changeText2() {
        paragraph.innerText = "Simplify the last step of your transaction.";
        div2.style = "border-left: 4px solid #1694c2; color: black";
        image.src = "/images/BuyersSellers.webp";
        div.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div3.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div4.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div5.style = "border-left: 4px solid #8194a346; color: #8194a3";
      }

      function changeText3() {
        paragraph.innerText = "Scale your closing operation seamlessly.";
        div3.style = "border-left: 4px solid #1694c2; color: black";
        image.src = "/images/Proptech.webp";
        div.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div2.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div4.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div5.style = "border-left: 4px solid #8194a346; color: #8194a3";
      }

      function changeText4() {
        paragraph.innerText = "Increase efficiency with custom integrations.";
        div4.style = "border-left: 4px solid #1694c2; color: black";
        image.src = "/images/Lenders.webp";
        div.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div2.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div3.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div5.style = "border-left: 4px solid #8194a346; color: #8194a3";
      }

      function changeText5() {
        paragraph.innerText = "Realize your investment strategy at scale.";
        div5.style = "border-left: 4px solid #1694c2; color: black";
        image.src = "/images/Investors.webp";
        div.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div2.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div3.style = "border-left: 4px solid #8194a346; color: #8194a3";
        div4.style = "border-left: 4px solid #8194a346; color: #8194a3";
      }

      div.addEventListener("click", changeText1);
      div2.addEventListener("click", changeText2);
      div3.addEventListener("click", changeText3);
      div4.addEventListener("click", changeText4);
      div5.addEventListener("click", changeText5);
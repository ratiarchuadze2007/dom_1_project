
function main_box(width, height, backcroundColor) {
    const main = document.getElementById("main");
    const mainContainer = document.createElement("div") ;
    main.appendChild(mainContainer);
  
    mainContainer.style.width = width;
    mainContainer.style.height = height;
    mainContainer.style.backgroundColor = backcroundColor;

    const topCard = document.createElement("div");
    mainContainer.appendChild(topCard)
    topCard.style.display = "flex";
    topCard.style.flexDirection = "column";
    topCard.style.justifyContent = "center"
    topCard.style.paddingTop = "104px";
    topCard.style.paddingLeft = "197px";
    topCard.style.paddingRight = "197px";

    const headderContainer = document.createElement("div")
    topCard.appendChild(headderContainer)
    headderContainer.style.paddingTop = "84px";
    headderContainer.style.display = "flex";
    headderContainer.style.justifyContent = "center"
    headderContainer.style.alignItems = "center";
    headderContainer.style.flexDirection = "column";
    headderContainer.style.textAlign = "center";

    const top_welcome = document.createElement("h5");
    headderContainer.appendChild(top_welcome);
    top_welcome.innerHTML = 'Welcome';
    top_welcome.style.color = "#23A6F0";
    top_welcome.style.display = "flex";
    top_welcome.style.justifyContent = "center"

    const top_H1 = document.createElement("h1");
    headderContainer.appendChild(top_H1);
    top_H1.innerHTML = "Selling on the internet like a pro";
    top_H1.style.display = "flex";
    top_H1.style.justifyContent = "center"
    top_H1.style.color = "#fff"
    top_H1.style.fontSize = "58px"
    top_H1.style.width = "500px"

    const top_p = document.createElement("p");
    headderContainer.appendChild(top_p);
    top_p.innerHTML = "We know how large objects will act, but things on a small scale just do not act that way."
    top_p.style.color = "#fff";
    top_p.style.fontSize = "25px";
    top_p.style.width = "600px";

    const twobutton = document.createElement("div");
    headderContainer.appendChild(twobutton);
    twobutton.style.display = "flex";
    twobutton.style.gap = "30px";
    twobutton.style.paddingBottom = "30px";
    const button1 = document.createElement("button");
    twobutton.appendChild(button1);
    button1.style.width = "200px";
    button1.style.height = "50px";
    button1.innerHTML = "Get Quote Now";
    button1.style.color = "#fff"
    button1.style.backgroundColor = "#23A6F0";
    button1.style.fontWeight = "700";
    button1.style.borderRadius = "10px";
    button1.style.border = "none";

    const button2 = document.createElement("button");
    twobutton.appendChild(button2);
    button2.style.width = "200px";
    button2.style.height = "50px";
    button2.innerHTML = "Learn More";
    button2.style.color = "#23A6F0";
    button2.style.backgroundColor = "#252B42";
    button2.style.fontWeight = "700";
    button2.style.borderRadius = "10px";
    
    button2.style.borderColor = "#23A6F0";




    const middle_container = document.createElement("div");
    mainContainer.appendChild(middle_container);
    middle_container.style.display = "flex";
    middle_container.style.justifyContent = "space-Between";
    middle_container.style.gap = "20px";
    middle_container.style.paddingRight = "150px";
    middle_container.style.paddingLeft = "150px";
    middle_container.style.paddingTop = "70px";
    middle_container.style.paddingBottom = "80px";




    const middleDiv1 = document.createElement("div");
    middle_container.appendChild(middleDiv1);
    middleDiv1.style.width = "248px";
    middleDiv1.style.height = "292px";
    middleDiv1.style.backgroundColor = "#FFF";
    middleDiv1.style.paddingLeft = "40px";
    middleDiv1.style.paddingRight = "40px";

    const middleDiv1_img = document.getElementById("first_image");
    middleDiv1.appendChild(middleDiv1_img);
    middleDiv1_img.style.display = "block";
    middleDiv1_img.style.paddingTop = "35px";

   const middleDiv1_h1 = document.createElement("h1");
   middleDiv1.appendChild(middleDiv1_h1)
   middleDiv1_h1.innerHTML = "training Courses";
   middleDiv1_h1.style.fontSize = "18px";
   

   const middleDiv1_line = document.createElement("div");
   middleDiv1.appendChild(middleDiv1_line);
   middleDiv1_line.style.height = "2px";
   middleDiv1_line.style.width = "50px";
   middleDiv1_line.style.backgroundColor = "#E74040";
    
   const middleDiv1_p = document.createElement("P");
   middleDiv1.appendChild(middleDiv1_p);
   middleDiv1_p.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour...";
   middleDiv1_p.style.color ="#737373";



    const middleDiv2 = document.createElement("div");
    middle_container.appendChild(middleDiv2);
    middleDiv2.style.width = "248px";
    middleDiv2.style.height = "292px";
    middleDiv2.style.backgroundColor = "#FFF";
    middleDiv2.style.paddingLeft = "40px";
    middleDiv2.style.paddingRight = "40px";

   //sdfghjkfghjklsdfghjkl;sdfghjklsdfghjkldf
    
       const middleDiv2_img = document.getElementById("first_image2");
   middleDiv2.appendChild(middleDiv2_img);
   middleDiv2_img.style.display = "block";
   middleDiv2_img.style.paddingTop = "35px";

  const middleDiv2_h1 = document.createElement("h1");
  middleDiv2.appendChild(middleDiv2_h1)
  middleDiv2_h1.innerHTML = "2,769 online courses ";
  middleDiv2_h1.style.fontSize = "18px";
  

  const middleDiv2_line = document.createElement("div");
  middleDiv2.appendChild(middleDiv2_line);
  middleDiv2_line.style.height = "2px";
  middleDiv2_line.style.width = "50px";
  middleDiv2_line.style.backgroundColor = "#E74040";
   
  const middleDiv2_p = document.createElement("P");
  middleDiv2.appendChild(middleDiv2_p);
  middleDiv2_p.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour...";
  middleDiv2_p.style.color ="#737373";

    //dfghjkjhgdfghjkjhgfdfghjkjhgfdfghjkjhgfdsdfg
    const middleDiv3 = document.createElement("div");
    middle_container.appendChild(middleDiv3);
    middleDiv3.style.width = "248px";
    middleDiv3.style.height = "292px";
    middleDiv3.style.backgroundColor = "#23A6F0";
    middleDiv3.style.paddingLeft = "40px";
    middleDiv3.style.paddingRight = "40px";
//11111111111111111111111111111111
const middleDiv3_img = document.getElementById("first_image3");
   middleDiv3.appendChild(middleDiv3_img);
   middleDiv3_img.style.display = "block";
   middleDiv3_img.style.paddingTop = "35px";

  const middleDiv3_h1 = document.createElement("h1");
  middleDiv3.appendChild(middleDiv3_h1)
  middleDiv3_h1.innerHTML = "training Courses ";
  middleDiv3_h1.style.fontSize = "18px";
  middleDiv3_h1.style.color = "#FFF";
  

  const middleDiv3_line = document.createElement("div");
  middleDiv3.appendChild(middleDiv3_line);
  middleDiv3_line.style.height = "2px";
  middleDiv3_line.style.width = "50px";
  middleDiv3_line.style.backgroundColor = "#fff";
   
  const middleDiv3_p = document.createElement("P");
  middleDiv3.appendChild(middleDiv3_p);
  middleDiv3_p.innerHTML = "The gradual accumulation of information about atomic and small-scale behaviour...";
  middleDiv3_p.style.color ="#FFF";




  const futter_container = document.createElement("div");
  main.appendChild(futter_container);
  futter_container.style.justifyContent = "center";
  futter_container.style.display = "flex";
  futter_container.style.flexDirection = "column"
  futter_container.style.alignItems = "center";

  futter_container.style.paddingTop = "50px";

  const futterH5 = document.createElement("h5");
  futter_container.appendChild(futterH5)
  futterH5.innerHTML = 'Practice Advice';
    futterH5.style.color = "#23A6F0";
    futterH5.style.display = "flex";
    futterH5.style.justifyContent = "center"
    futterH5.style.paddingTop = "100px";
    

  const futterH1 = document.createElement("h1");
  futter_container.appendChild(futterH1)
  futterH1.innerHTML = "Featured Products";
  futterH1.style.display = "flex";
    futterH1.style.justifyContent = "center"
    futterH1.style.fontSize = "40px";
    futterH1.style.fontWeight = "700";

    const futterP = document.createElement("p");
    futter_container.appendChild(futterP)
    futterP.innerHTML = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
    futterP.style.display = "flex";
    futterP.style.justifyContent = "center";
    futterP.style.color = "#737373";
    futterP.style.fontSize = "20px";
    futterP.style.width = "500px";
    futterP.style.textAlign = "center";
    
      const enter_email = document.createElement("div")
      futter_container.appendChild(enter_email)
      enter_email.style.paddingTop = "100px";

    const futter_input = document.createElement("input");
    const futter_button = document.createElement("button")
    enter_email.appendChild(futter_input)
    enter_email.appendChild(futter_button)


    futter_input.style.height = "53px";
    futter_input.style.width = "590px";

    
   
    futter_button.style.width = "117px";
    futter_button.style.height = "58px";
    futter_button.style.backgroundColor = "#23A6F0";
    futter_button.innerHTML = "Subscribe";
    futter_button.style.color = "#FFF"
    futter_button.style.border = "none";
    futter_button.style.borderTopRightRadius = "15px";
    futter_button.style.borderBottomRightRadius = "15px";
}

main_box("100%", "", "#252B42");



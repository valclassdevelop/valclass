let propertiesComponent = [
   'v-btn',
   'v-table-hovered',
   'v-table-striped',
   'v-table-head-dark',
   'v-navbar',
   'v-navbar-fixed',
   'v-alert-info',
   'v-alert-danger',
   'v-alert-warning',
   'v-alert-primary',
   'v-alert-secondary',
   'v-alert-dark',
   'v-alert-light',
   'v-alert-smooth',
   'v-alert-green'
]

let valueComponent = [
   `.v-btn {
        position: relative;
        top: 0;
        width: auto;
        height: auto;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: grey;
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn:hover {
        filter: brightness(85%)
    }`,
   `table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }

     .v-table-hovered {
        border-collapse: collapse;
        table-layout: auto;
        font-size: 15px;
     }
     
     .v-table-hovered th, 
     .v-table-hovered td {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 7px 17px;
     }

     caption {
        caption-side: top;
        margin-bottom: 10px;
     }

     .v-table-hovered thead {
        color: black;
        border-color: #6ea1cc !important;
     }
     
     .v-table-hovered tbody td {
        color: #353535;
     }
     
     .v-table-hovered tbody tr:hover th,
     .v-table-hovered tbody tr:hover td {
        background-color: rgb(236, 236, 236);
        opacity: 0.9;
        transition: all .2s;
     }`,
   `
     table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }

     .v-table-striped {
        border-collapse: collapse;
        table-layout: auto;
        font-size: 15px;
     }
     
     .v-table-striped th, 
     .v-table-striped td {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 7px 17px;
     }

     caption {
        caption-side: top;
        margin-bottom: 10px;
     }
     
     .v-table-striped thead {
        color: black;
        border-color: #6ea1cc !important;
     }
     
     .v-table-striped tbody tr:nth-child(odd) td {
        background-color: #eeeeee;
     }
   
     .v-table-striped tbody td {
        color: #353535;
     }`,
   `
     table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }

     .v-table-head-dark {
        border-collapse: collapse;
        table-layout: auto;
        font-size: 15px;
     }
     
     thead, th {
        background-color: black;
        color: white;
        padding: 9px 17px;
     }
     
     .v-table-head-dark td {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 7px 17px;
     }

     caption {
        caption-side: top;
        margin-bottom: 10px;
     }
     
     .v-table-head-dark thead {
        color: black;
        border-color: #6ea1cc !important;
     }
    
     .v-table-head-dark tbody td {
        color: #353535;
     }`,
      `
     .v-navbar {
      z-index: 999;
      display: flex;
      font-family:sans-serif;
      background-color: rgb(107, 107, 103);
      justify-content: space-around;
      height: 64px;
      align-items: center;
      color: rgb(255, 255, 255);
   }
   
   .v-navbar h3 {
      align-items: center;
   }
   
   .v-navbar ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      width: 40%;
   }
   
   .v-navbar ul li a:hover {
      filter: brightness(90%);
   }
   
   .v-navbar ul li a {
      color: rgb(255, 255, 255);
      text-decoration: none;
   }
   
   .v-btn-toggle {
      position: relative;
      display: flex;
      z-index: 2;
      flex-direction: column;
      cursor: pointer;
      height: 23px;
      justify-content: space-between;
      transition: 0.5s;
      display: none;
   }
   
   .v-btn-toggle:hover {
      transition: 0.5s;
      transform: scale(0.97);
   }
   
   .v-btn-toggle span {
      width: 30px;
      height: 3px;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
   }
   
   .v-btn-toggle input {
      margin-top: 0px;
      margin-left: 0px;
      opacity: 0;
      width: 30px;
      height: 24px;
      position: absolute;
      z-index: 4;
   }
   
   .v-navbar ul.show {
      transform: translateX(0%);
      right: 0;
      opacity: 1;
      transition: 0.4s ease;
   }
   
   .v-navbar input:checked ~ span:nth-child(2) {
      transform-origin: 0 0;
      transform: rotate(45deg) translate(1px, -2px);
   }
   
   .v-navbar input:checked ~ span:nth-child(3) {
      transform: scale(0);
   }
   
   .v-navbar input:checked ~ span:nth-child(4) {
      transform-origin: 0 0;
      transform: rotate(-45deg);
   }
   
   
   /* tablet */
   @media screen and (max-width: 768px) {
      .v-navbar ul {
         width: 50%;
      }
   }
   
   /* mobile */
   @media screen and (max-width: 576px) {
      .v-btn-toggle {
         display: flex;
      }
      
      .v-navbar ul {
         position: absolute;
         flex-direction: column;
         background-color: rgb(107, 107, 103);
         z-index: 1;
         right: 0;
         transform: translateX(100%);
         align-items: center;
         opacity: 0;
         top: 30px;
         height: 100vh;
         justify-content: space-evenly;
         transition: 0.4s ease;
      }

   }`,
   `
     .v-navbar-fixed {
      position: fixed;
      width: 100vw;
      z-index: 999;
      display: flex;
      font-family:sans-serif;
      background-color: rgb(107, 107, 103);
      justify-content: space-around;
      height: 64px;
      overflow: hidden;
      align-items: center;
      color: rgb(255, 255, 255);
   }
   
   .v-navbar-fixed h3 {
      align-items: center;
   }
   
   .v-navbar-fixed ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      width: 40%;
   }
   
   .v-navbar-fixed ul li a:hover {
      filter: brightness(90%);
   }
   
   .v-navbar-fixed ul li a {
      color: rgb(255, 255, 255);
      text-decoration: none;
      margin: 10px 0;
   }
   
   .v-btn-toggle {
      position: relative;
      display: flex;
      z-index: 2;
      flex-direction: column;
      cursor: pointer;
      height: 23px;
      justify-content: space-between;
      transition: 0.5s;
      display: none;
   }
   
   .v-btn-toggle:hover {
      transition: 0.5s;
      transform: scale(0.97);
   }
   
   .v-btn-toggle span {
      width: 30px;
      height: 3px;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
   }
   
   .v-btn-toggle input {
      margin-top: 0px;
      margin-left: 0px;
      opacity: 0;
      width: 30px;
      height: 24px;
      position: absolute;
      z-index: 4;
   }
   
   .v-navbar-fixed ul.show {
      transform: translateX(0%);
      opacity: 1;
      right: 0;
      transition: 0.4s ease;
   }
   
   .v-navbar-fixed input:checked ~ span:nth-child(2) {
      transform-origin: 0 0;
      transform: rotate(45deg) translate(1px, -2px);
   }
   
   .v-navbar-fixed input:checked ~ span:nth-child(3) {
      transform: scale(0);
   }
   
   .v-navbar-fixed input:checked ~ span:nth-child(4) {
      transform-origin: 0 0;
      transform: rotate(-45deg);
   }
   
   /* tablet */
   @media screen and (max-width: 768px) {
      .v-navbar-fixed ul {
         width: 50%;
      }
   }
   
   /* mobile */
   @media screen and (max-width: 576px) {
      .v-btn-toggle {
         display: flex;
      }
   
      .v-navbar-fixed ul {
         position: fixed;
         flex-direction: column;
         background-color: rgb(107, 107, 103);
         z-index: -1;
         right: 0;
         transform: translateX(100%);
         align-items: center;
         opacity: 0;
         top: 47px;
         height: 100vh;
         justify-content: space-evenly;
         transition: 0.4s ease;
      }
   }`,
     `.v-alert-info {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(202, 234, 255);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(113, 196, 252);
   }`,
     `.v-alert-danger {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(255, 202, 202);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(252, 113, 113);
   }`,
     `.v-alert-warning {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(255, 249, 230);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(252, 230, 104);
   }`,
     `.v-alert-info {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(202, 213, 250);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(2, 168, 245);
   }`,
     `.v-alert-primary {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(202, 213, 250);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(104, 151, 252);
   }`,
     `.v-alert-secondary {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(224, 224, 224);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(128, 128, 128);
   }`,
     `.v-alert-dark {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(224, 224, 224);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(61, 61, 61);
   }`,
     `.v-alert-light {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(255, 255, 255);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(231, 231, 231);
   }`,
     `.v-alert-smooth {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(165, 165, 165);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(255, 236, 236);
   }`,
     `.v-alert-green {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      color: rgb(212, 255, 246);
      display: flex;
      height: 50px;
      padding-left: 20px;
      align-items: center;
      z-index: 999;
      background-color: rgb(14, 253, 201);
   }`
]

// pengkondisian

setTimeout(() => {

   if (document.querySelector('nav')) {
      for (var i = 0; i < propertiesComponent.length; i++) {
         for (var a = 0; a < document.querySelectorAll('nav').length; a++) {
            if (document.querySelectorAll('nav')[a].classList.contains(propertiesComponent[i]) && !document.querySelector('style').innerText.includes(propertiesComponent[i])) {

               let styles = valueComponent[i]

               document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
         }
      }
   }

   if (document.querySelector('div')) {
      for (var i = 0; i < propertiesComponent.length; i++) {
         for (var a = 0; a < document.querySelectorAll('div').length; a++) {
            if (document.querySelectorAll('div')[a].classList.contains(propertiesComponent[i]) && !document.querySelector('style').innerText.includes(propertiesComponent[i])) {

               let styles = valueComponent[i]

               document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
         }
      }
   }

   if (document.querySelector('button')) {
      for (var i = 0; i < propertiesComponent.length; i++) {
         for (var a = 0; a < document.querySelectorAll('button').length; a++) {
            if (document.querySelectorAll('button')[a].classList.contains(propertiesComponent[i]) && !document.querySelector('style').innerText.includes(propertiesComponent[i])) {

               let styles = valueComponent[0]

               document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
         }
      }
   }

   if (document.querySelector('table')) {
      for (var i = 0; i < propertiesComponent.length; i++) {
         for (var a = 0; a < document.querySelectorAll('table').length; a++) {
            if (document.querySelectorAll('table')[a].classList.contains(propertiesComponent[i]) && !document.querySelector('style').innerText.includes(propertiesComponent[i])) {

               let styles = valueComponent[i]

               document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
         }
      }
   }

}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda
let propertiesPerspective=["v-perspective--1","v-perspective--2","v-perspective--3","v-perspective--4","v-perspective-none","v-perspective-1","v-perspective-2","v-perspective-3","v-perspective-4","v-perspective-top","v-perspective-bottom","v-perspective-left","v-perspective-right","v-perspective-center"],valuesPerspective=["perspective: -20px;","perspective: -40px;","perspective: -60px;","perspective: -80px;","perspective: none;","perspective: 20px;","perspective: 40px;","perspective: 60px;","perspective: 80px;","perspective-origin: top;","perspective-origin: bottom;","perspective-origin: left;","perspective-origin: right;","perspective-origin: center;"];for(var i=0;i<propertiesPerspective.length;i++)if(document.querySelector("body").classList.contains(propertiesPerspective[i])&&!document.querySelector("style").innerText.includes(propertiesPerspective[i])){let e=` \n    .${propertiesPerspective[i]} { \n        ${valuesPerspective[i]}\n    }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}setTimeout(()=>{if(document.querySelector("div"))for(var e=0;e<propertiesPerspective.length;e++)for(var t=0;t<document.querySelectorAll("div").length;t++)if(document.querySelectorAll("div")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h1"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("h1").length;t++)if(document.querySelectorAll("h1")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n                .${propertiesPerspective[e]} { \n                    ${valuesPerspective[e]}\n                }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h2"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("h2").length;t++)if(document.querySelectorAll("h2")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h3"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("h3").length;t++)if(document.querySelectorAll("h3")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h4"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("h4").length;t++)if(document.querySelectorAll("h4")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h5"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("h5").length;t++)if(document.querySelectorAll("h5")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h6"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("h6").length;t++)if(document.querySelectorAll("h6")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("span"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("span").length;t++)if(document.querySelectorAll("span")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("p"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("p").length;t++)if(document.querySelectorAll("p")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("small"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("small").length;t++)if(document.querySelectorAll("small")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("input"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("input").length;t++)if(document.querySelectorAll("input")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("textarea"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("textarea").length;t++)if(document.querySelectorAll("textarea")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("select"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("select").length;t++)if(document.querySelectorAll("select")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("button"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("button").length;t++)if(document.querySelectorAll("button")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("sup"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("sup").length;t++)if(document.querySelectorAll("sup")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("sub"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("sub").length;t++)if(document.querySelectorAll("sub")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("mark"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("mark").length;t++)if(document.querySelectorAll("mark")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("code"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("code").length;t++)if(document.querySelectorAll("code")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("pre"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("pre").length;t++)if(document.querySelectorAll("pre")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("blockquote"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("blockquote").length;t++)if(document.querySelectorAll("blockquote")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("a"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("a").length;t++)if(document.querySelectorAll("a")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("ul"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("ul").length;t++)if(document.querySelectorAll("ul")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("li"))for(e=0;e<propertiesPerspective.length;e++)for(t=0;t<document.querySelectorAll("li").length;t++)if(document.querySelectorAll("li")[t].classList.contains(propertiesPerspective[e])&&!document.querySelector("style").innerText.includes(propertiesPerspective[e])){let t=` \n            .${propertiesPerspective[e]} { \n                ${valuesPerspective[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}},300);
let propertiesTextColors=["v-text-dark","v-text-light","v-text-danger","v-text-info","v-text-primary","v-text-smooth","v-text-transparent","v-text-secondary","v-text-warning","v-text-green"],valuesTextColors=["color: rgb(70, 70, 70);","color: rgb(238, 238, 238);","color: rgb(255, 76, 44);","color: rgb(2, 168, 245);","color: rgb(42, 131, 248);","color: rgb(255, 242, 242);","color: transparent;","color: rgb(141, 141, 141);","color: rgb(253, 207, 0);","color: rgb(14, 253, 201);"];for(var i=0;i<propertiesTextColors.length;i++)if(document.querySelector("body").classList.contains(propertiesTextColors[i])&&!document.querySelector("style").innerText.includes(propertiesTextColors[i])){let e=` \n    .${propertiesTextColors[i]} { \n        ${valuesTextColors[i]}\n    }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}setTimeout(()=>{if(document.querySelector("div"))for(var e=0;e<propertiesTextColors.length;e++)for(var t=0;t<document.querySelectorAll("div").length;t++)if(document.querySelectorAll("div")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h1"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("h1").length;t++)if(document.querySelectorAll("h1")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n                .${propertiesTextColors[e]} { \n                    ${valuesTextColors[e]}\n                }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h2"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("h2").length;t++)if(document.querySelectorAll("h2")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h3"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("h3").length;t++)if(document.querySelectorAll("h3")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h4"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("h4").length;t++)if(document.querySelectorAll("h4")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h5"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("h5").length;t++)if(document.querySelectorAll("h5")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h6"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("h6").length;t++)if(document.querySelectorAll("h6")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("span"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("span").length;t++)if(document.querySelectorAll("span")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("p"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("p").length;t++)if(document.querySelectorAll("p")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("small"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("small").length;t++)if(document.querySelectorAll("small")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("input"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("input").length;t++)if(document.querySelectorAll("input")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("textarea"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("textarea").length;t++)if(document.querySelectorAll("textarea")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("select"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("select").length;t++)if(document.querySelectorAll("select")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("button"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("button").length;t++)if(document.querySelectorAll("button")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("sup"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("sup").length;t++)if(document.querySelectorAll("sup")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("sub"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("sub").length;t++)if(document.querySelectorAll("sub")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("mark"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("mark").length;t++)if(document.querySelectorAll("mark")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("code"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("code").length;t++)if(document.querySelectorAll("code")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("pre"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("pre").length;t++)if(document.querySelectorAll("pre")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("blockquote"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("blockquote").length;t++)if(document.querySelectorAll("blockquote")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("a"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("a").length;t++)if(document.querySelectorAll("a")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("ul"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("ul").length;t++)if(document.querySelectorAll("ul")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("li"))for(e=0;e<propertiesTextColors.length;e++)for(t=0;t<document.querySelectorAll("li").length;t++)if(document.querySelectorAll("li")[t].classList.contains(propertiesTextColors[e])&&!document.querySelector("style").innerText.includes(propertiesTextColors[e])){let t=` \n            .${propertiesTextColors[e]} { \n                ${valuesTextColors[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}},300);
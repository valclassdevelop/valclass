let propertiesMargins=["v-m-auto","v-m-0","v-m-1","v-m-2","v-m-3","v-m-4","v-mt-auto","v-mt-0","v-mt-1","v-mt-2","v-mt-3","v-mt-4","v-ml-auto","v-ml-0","v-ml-1","v-ml-2","v-ml-3","v-ml-4","v-mr-auto","v-mr-0","v-mr-1","v-mr-2","v-mr-3","v-mr-4","v-mb-auto","v-mb-0","v-mb-1","v-mb-2","v-mb-3","v-mb-4"],valuesMargins=["margin: auto;","margin: 0px;","margin: 10px;","margin: 20px;","margin: 30px;","margin: 40px;","margin-top: auto;","margin-top: 0px;","margin-top: 10px;","margin-top: 20px;","margin-top: 30px;","margin-top: 40px;","margin-left: auto;","margin-left: 0px;","margin-left: 10px;","margin-left: 20px;","margin-left: 30px;","margin-left: 40px;","margin-right: auto;","margin-right: 0px;","margin-right: 10px;","margin-right: 20px;","margin-right: 30px;","margin-right: 40px;","margin-bottom: auto;","margin-bottom: 0px;","margin-bottom: 10px;","margin-bottom: 20px;","margin-bottom: 30px;","margin-bottom: 40px;"];for(var i=0;i<propertiesMargins.length;i++)if(document.querySelector("body").classList.contains(propertiesMargins[i])&&!document.querySelector("style").innerText.includes(propertiesMargins[i])){let e=` \n    .${propertiesMargins[i]} { \n        ${valuesMargins[i]}\n    }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}setTimeout(()=>{if(document.querySelector("div"))for(var e=0;e<propertiesMargins.length;e++)for(var t=0;t<document.querySelectorAll("div").length;t++)if(document.querySelectorAll("div")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h1"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("h1").length;t++)if(document.querySelectorAll("h1")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n                .${propertiesMargins[e]} { \n                    ${valuesMargins[e]}\n                }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h2"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("h2").length;t++)if(document.querySelectorAll("h2")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h3"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("h3").length;t++)if(document.querySelectorAll("h3")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h4"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("h4").length;t++)if(document.querySelectorAll("h4")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h5"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("h5").length;t++)if(document.querySelectorAll("h5")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("h6"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("h6").length;t++)if(document.querySelectorAll("h6")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("span"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("span").length;t++)if(document.querySelectorAll("span")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("p"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("p").length;t++)if(document.querySelectorAll("p")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("small"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("small").length;t++)if(document.querySelectorAll("small")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("input"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("input").length;t++)if(document.querySelectorAll("input")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("textarea"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("textarea").length;t++)if(document.querySelectorAll("textarea")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("select"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("select").length;t++)if(document.querySelectorAll("select")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("button"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("button").length;t++)if(document.querySelectorAll("button")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("sup"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("sup").length;t++)if(document.querySelectorAll("sup")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("sub"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("sub").length;t++)if(document.querySelectorAll("sub")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("mark"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("mark").length;t++)if(document.querySelectorAll("mark")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("code"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("code").length;t++)if(document.querySelectorAll("code")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("pre"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("pre").length;t++)if(document.querySelectorAll("pre")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("blockquote"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("blockquote").length;t++)if(document.querySelectorAll("blockquote")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("a"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("a").length;t++)if(document.querySelectorAll("a")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("ul"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("ul").length;t++)if(document.querySelectorAll("ul")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}if(document.querySelector("li"))for(e=0;e<propertiesMargins.length;e++)for(t=0;t<document.querySelectorAll("li").length;t++)if(document.querySelectorAll("li")[t].classList.contains(propertiesMargins[e])&&!document.querySelector("style").innerText.includes(propertiesMargins[e])){let t=` \n            .${propertiesMargins[e]} { \n                ${valuesMargins[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(t))}},300);
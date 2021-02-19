let propertiesTransform=["v-rotate-0","v-rotate-30","v-rotate-45","v-rotate-90","v-rotate-120","v-rotate-180","v-rotate-360","v-scale--1","v-scale--2","v-scale--3","v-scale--4","v-scale--5","v-scale--6","v-scale--7","v-scale--8","v-scale--9","v-scale-1","v-scale-2","v-scale-3","v-scale-4","v-skew-1","v-skew-2","v-skew-3","v-skew-4","-v-skew-1","-v-skew-2","-v-skew-3","-v-skew-4","v-translate-1","v-translate-2","v-translate-3","v-translate-4","v-translate-middle","-v-translate-1","-v-translate-2","-v-translate-3","-v-translate-4","-v-translate-middle","v-translateX-1","v-translateX-2","v-translateX-3","v-translateX-4","v-translateX-middle","-v-translateX-1","-v-translateX-2","-v-translateX-3","-v-translateX-4","-v-translateX-middle","v-translateY-1","v-translateY-2","v-translateY-3","v-translateY-4","v-translateY-middle","-v-translateY-1","-v-translateY-2","-v-translateY-3","-v-translateY-4","-v-translateY-middle","v-translateZ-1","v-translateZ-2","v-translateZ-3","v-translateZ-4","v-translateZ-middle","-v-translateZ-1","-v-translateZ-2","-v-translateZ-3","-v-translateZ-4","-v-translateZ-middle"],valuesTransform=["transform: rotate(0deg)","transform: rotate(30deg)","transform: rotate(45deg)","transform: rotate(90deg)","transform: rotate(120deg)","transform: rotate(180deg)","transform: rotate(360deg)","transform: scale(0.1)","transform: scale(0.2)","transform: scale(0.3)","transform: scale(0.4)","transform: scale(0.5)","transform: scale(0.6)","transform: scale(0.7)","transform: scale(0.8)","transform: scale(0.9)","transform: scale(1)","transform: scale(2)","transform: scale(3)","transform: scale(4)","transform: skew(5deg)","transform: skew(10deg)","transform: skew(15deg)","transform: skew(20deg)","transform: skew(-5deg)","transform: skew(-10deg)","transform: skew(-15deg)","transform: skew(-20deg)","transform: translate(10%)","transform: translate(20%)","transform: translate(30%)","transform: translate(40%)","transform: translate(50%)","transform: translate(-10%)","transform: translate(-20%)","transform: translate(-30%)","transform: translate(-40%)","transform: translate(-50%)","transform: translateX(10%)","transform: translateX(20%)","transform: translateX(30%)","transform: translateX(40%)","transform: translateX(50%)","transform: translateX(-10%)","transform: translateX(-20%)","transform: translateX(-30%)","transform: translateX(-40%)","transform: translateX(-50%)","transform: translateY(10%)","transform: translateY(20%)","transform: translateY(30%)","transform: translateY(40%)","transform: translateY(50%)","transform: translateY(-10%)","transform: translateY(-20%)","transform: translateY(-30%)","transform: translateY(-40%)","transform: translateY(-50%)","transform: translateZ(10%)","transform: translateZ(20%)","transform: translateZ(30%)","transform: translateZ(40%)","transform: translateZ(50%)","transform: translateZ(-10%)","transform: translateZ(-20%)","transform: translateZ(-30%)","transform: translateZ(-40%)","transform: translateZ(-50%)"];for(var i=0;i<propertiesTransform.length;i++)if(document.querySelector("body").classList.contains(propertiesTransform[i])&&!document.querySelector("style").innerText.includes(propertiesTransform[i])){let e=` \n    .${propertiesTransform[i]} { \n        ${valuesTransform[i]}\n    }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(e))}setTimeout(()=>{if(document.querySelector("div"))for(var e=0;e<propertiesTransform.length;e++)for(var r=0;r<document.querySelectorAll("div").length;r++)if(document.querySelectorAll("div")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("h1"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("h1").length;r++)if(document.querySelectorAll("h1")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n                .${propertiesTransform[e]} { \n                    ${valuesTransform[e]}\n                }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("h2"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("h2").length;r++)if(document.querySelectorAll("h2")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("h3"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("h3").length;r++)if(document.querySelectorAll("h3")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("h4"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("h4").length;r++)if(document.querySelectorAll("h4")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("h5"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("h5").length;r++)if(document.querySelectorAll("h5")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("h6"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("h6").length;r++)if(document.querySelectorAll("h6")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("span"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("span").length;r++)if(document.querySelectorAll("span")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("p"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("p").length;r++)if(document.querySelectorAll("p")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("small"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("small").length;r++)if(document.querySelectorAll("small")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("input"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("input").length;r++)if(document.querySelectorAll("input")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("textarea"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("textarea").length;r++)if(document.querySelectorAll("textarea")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("select"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("select").length;r++)if(document.querySelectorAll("select")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("button"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("button").length;r++)if(document.querySelectorAll("button")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("sup"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("sup").length;r++)if(document.querySelectorAll("sup")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("sub"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("sub").length;r++)if(document.querySelectorAll("sub")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("mark"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("mark").length;r++)if(document.querySelectorAll("mark")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("code"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("code").length;r++)if(document.querySelectorAll("code")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("pre"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("pre").length;r++)if(document.querySelectorAll("pre")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("blockquote"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("blockquote").length;r++)if(document.querySelectorAll("blockquote")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("a"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("a").length;r++)if(document.querySelectorAll("a")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("ul"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("ul").length;r++)if(document.querySelectorAll("ul")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}if(document.querySelector("li"))for(e=0;e<propertiesTransform.length;e++)for(r=0;r<document.querySelectorAll("li").length;r++)if(document.querySelectorAll("li")[r].classList.contains(propertiesTransform[e])&&!document.querySelector("style").innerText.includes(propertiesTransform[e])){let r=` \n            .${propertiesTransform[e]} { \n                ${valuesTransform[e]}\n            }`;document.getElementsByTagName("style")[0].appendChild(document.createTextNode(r))}},300);
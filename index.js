import"./assets/styles-BgSJf0tJ.js";import{i as l}from"./assets/vendor-BK8-1dZR.js";const t={form:document.querySelector(".login-form"),inputEmail:document.querySelector("[name='email']"),inputPass:document.querySelector("[name='password']"),btn:document.querySelector("[name='button']")};function d(e,n){localStorage.setItem(e,JSON.stringify(n))}function g(e){return JSON.parse(localStorage.getItem(e))||null}function p(e){localStorage.removeItem(e)}const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",u=document.querySelector(".date span");u.textContent=new Date().toLocaleString();setInterval(()=>{u.textContent=new Date().toLocaleString()},1e3);function r(e){const n=new Date(e),o=new Date;let i=o.getFullYear()-n.getFullYear();const s=o.getMonth()-n.getMonth(),m=o.getDate()-n.getDate();return(s<0||s===0&&m<0)&&i--,i}console.log(r("2000-03-01"));console.log(r("2000-03-10"));console.log(r("2000-04-10"));const c={email:"user@mail.com",password:"secret"},a="user-data";t.form.addEventListener("submit",v);function v(e){e.preventDefault();const n=t.inputEmail.value.trim(),o=t.inputPass.value.trim();if(t.btn.textContent==="Logout"){t.form.reset(),p(a),t.inputEmail.removeAttribute("readonly"),t.inputPass.removeAttribute("readonly"),t.btn.textContent="Login";return}if(n===""||o===""){l.warning({message:"Заповніть усі поля!"});return}if(n!==c.email||o!==c.password){l.error({message:"Данні не коректні",iconUrl:f});return}d(a,{email:n,password:o}),t.btn.textContent="Logout",t.inputEmail.setAttribute("readonly",!0),t.inputPass.setAttribute("readonly",!0)}document.addEventListener("DOMContentLoaded",()=>{const e=g(a);e&&(t.inputEmail.value=e.email??"",t.inputPass.value=e.password??"",t.btn.textContent="Logout",t.inputEmail.setAttribute("readonly",!0),t.inputPass.setAttribute("readonly",!0))});
//# sourceMappingURL=index.js.map

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const o={form:document.querySelector(".login-form"),inputEmail:document.querySelector("[name='email']"),inputPass:document.querySelector("[name='password']"),btn:document.querySelector("[name='button']")};function l(s,r){localStorage.setItem(s,JSON.stringify(r))}const a={email:"user@mail.com",password:"secret"},c="user-data";o.form.addEventListener("submit",m);function m(s){s.preventDefault();const r=o.inputEmail.value.trim(),n=o.inputPass.value.trim();if(r===""||n===""){alert("Заповніть усі поля!");return}if(r!==a.email||n!==a.password){alert("Данні не коректні");return}l(c,{email:r,password:n}),o.btn.textContent="Logout",o.inputEmail.setAttribute("readonly",!0),o.inputPass.setAttribute("readonly",!0)}
//# sourceMappingURL=index.js.map

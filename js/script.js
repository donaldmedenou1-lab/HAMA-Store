const menu=document.querySelector(".menu"), nav=document.querySelector("nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="76px";nav.style.left="0";nav.style.right="0";nav.style.background="#fff";nav.style.padding="20px";nav.style.flexDirection="column";});
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;document.querySelectorAll(".product").forEach(p=>p.style.display=(f==="all"||p.dataset.category===f)?"block":"none")}));
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("whatsappBtn").addEventListener("click",()=>{
  const n=document.getElementById("name").value.trim();
  const p=document.getElementById("phone").value.trim();
  const pr=document.getElementById("product").value.trim();
  const email=document.getElementById("email").value.trim();
  const m=document.getElementById("message").value.trim();
  if(!n || !p){alert("Veuillez remplir votre nom et votre téléphone.");return;}
  const text=`Bonjour HAMA Store,

Je suis ${n}.
Téléphone : ${p}
Produit recherché : ${pr||"Non précisé"}

${m||"Je voudrais connaître le prix et la disponibilité."}`;
  window.open(`https://wa.me/22997005744?text=${encodeURIComponent(text)}`,"_blank");
});

(function(){
  "use strict";
  var doc = document, win = window;
  var reduced = win.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = win.matchMedia("(hover:hover) and (pointer:fine)").matches;
  var isTouch = ("ontouchstart" in win) || navigator.maxTouchPoints > 0;
  var lerp = function(a,b,n){ return (1-n)*a + n*b; };
  var clamp = function(v,min,max){ return Math.min(Math.max(v,min),max); };

  doc.getElementById("year").textContent = new Date().getFullYear();

  /* ============================================================
     1. LOADER
     ============================================================ */
  var loader = doc.getElementById("loader");
  var curtain = doc.getElementById("curtain");
  var countEl = doc.getElementById("loadCount");
  var barEl = doc.getElementById("loadBar");
  var progress = 0, loadDone = false;

  function tickLoad(){
    if(loadDone) return;
    progress += Math.random()*11 + 6.5;
    if(progress >= 100){ progress = 100; }
    countEl.textContent = progress < 10 ? "0"+Math.floor(progress) : Math.floor(progress);
    barEl.style.transform = "scaleX("+(progress/100)+")";
    barEl.style.transition = "transform .45s cubic-bezier(.16,1,.3,1)";
    if(progress < 100){ setTimeout(tickLoad, 62 + Math.random()*88); }
    else { setTimeout(finishLoad, 240); }
  }

  function finishLoad(){
    if(loadDone) return;
    loadDone = true;
    doc.body.classList.add("loaded");
    var panels = curtain.querySelectorAll("i");
    setTimeout(function(){
      for(var i=0;i<panels.length;i++){
        (function(p, idx){
          p.style.transition = "transform .95s cubic-bezier(.76,0,.24,1) "+(idx*0.06)+"s";
          requestAnimationFrame(function(){ p.style.transform = "translateY(-101%)"; });
        })(panels[i], i);
      }
    }, 360);
    setTimeout(function(){
      if(curtain && curtain.parentNode) curtain.parentNode.removeChild(curtain);
      if(loader && loader.parentNode) loader.parentNode.removeChild(loader);
      doc.body.classList.add("ready");
      kickIntro();
    }, 1720);
  }

  if(reduced){ setTimeout(finishLoad, 200); } else { setTimeout(tickLoad, 260); }
  setTimeout(finishLoad, 4200); /* rede de segurança */

  /* ============================================================
     2. SPLIT DE TEXTO
     ============================================================ */
  function splitWords(el, extra){
    var out = "", nodes = Array.prototype.slice.call(el.childNodes), i = 0;
    nodes.forEach(function(n){
      var cls = "", text = "";
      if(n.nodeType === 3){ text = n.textContent; }
      else if(n.nodeType === 1){ text = n.textContent; cls = " " + (n.getAttribute("class")||"") + (extra||""); }
      else { return; }
      text.split(/(\s+)/).forEach(function(t){
        if(t === "") return;
        if(/^\s+$/.test(t)){ out += " "; return; }
        out += '<span class="w'+cls+'" style="--i:'+(i++)+'">'+t.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</span>";
      });
    });
    el.innerHTML = out;
  }
  Array.prototype.forEach.call(doc.querySelectorAll("[data-split]"), function(el){ splitWords(el); });

  var manifesto = doc.getElementById("manifesto");
  if(manifesto) splitWords(manifesto, " it-src");
  var manifestoWords = manifesto ? manifesto.querySelectorAll(".w") : [];

  /* ============================================================
     3. REVEAL
     ============================================================ */
  var io = null;
  if("IntersectionObserver" in win){
    io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(doc.querySelectorAll("[data-reveal],[data-split],.img-mask"), function(el){ io.observe(el); });
  } else {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-reveal],[data-split],.img-mask"), function(el){ el.classList.add("in"); });
  }

  function kickIntro(){
    Array.prototype.forEach.call(doc.querySelectorAll(".hero [data-reveal], .hero [data-split]"), function(el){ el.classList.add("in"); });
    var rail = doc.getElementById("railing");
    if(rail) setTimeout(function(){ rail.classList.add("on"); }, 700);
  }

  /* ============================================================
     4. SMOOTH SCROLL (lerp sobre o scroll nativo)
     ============================================================ */
  var smooth = !reduced && !isTouch && fine;
  var target = win.scrollY || 0, currentY = target, lastSet = target;

  function maxScroll(){ return Math.max(0, doc.documentElement.scrollHeight - win.innerHeight); }

  if(smooth){
    win.addEventListener("wheel", function(e){
      if(doc.body.classList.contains("menu-open")) return;
      if(e.ctrlKey) return;
      e.preventDefault();
      var d = e.deltaY;
      if(e.deltaMode === 1) d *= 22; else if(e.deltaMode === 2) d *= win.innerHeight;
      target = clamp(target + d, 0, maxScroll());
    }, { passive:false });

    win.addEventListener("scroll", function(){
      if(Math.abs(win.scrollY - lastSet) > 3){ target = currentY = win.scrollY; }
    }, { passive:true });

    win.addEventListener("keydown", function(e){
      var k = e.key;
      if(["PageDown","PageUp","Home","End"," ","ArrowDown","ArrowUp"].indexOf(k) === -1) return;
      var t = e.target && e.target.tagName;
      if(t === "INPUT" || t === "TEXTAREA") return;
      e.preventDefault();
      var vh = win.innerHeight;
      if(k === "PageDown" || k === " ") target += vh*0.85;
      else if(k === "PageUp") target -= vh*0.85;
      else if(k === "ArrowDown") target += 140;
      else if(k === "ArrowUp") target -= 140;
      else if(k === "Home") target = 0;
      else if(k === "End") target = maxScroll();
      target = clamp(target, 0, maxScroll());
    });
  }

  function scrollToY(y){
    y = clamp(y, 0, maxScroll());
    if(smooth){ target = y; }
    else { win.scrollTo({ top:y, behavior: reduced ? "auto" : "smooth" }); }
  }

  Array.prototype.forEach.call(doc.querySelectorAll('a[href^="#"]'), function(a){
    a.addEventListener("click", function(e){
      var id = a.getAttribute("href");
      if(!id || id === "#") return;
      var el = doc.querySelector(id);
      if(!el) return;
      e.preventDefault();
      closeMenu();
      var y = el.getBoundingClientRect().top + (smooth ? currentY : win.scrollY);
      scrollToY(y - 10);
    });
  });

  /* ============================================================
     5. MENU
     ============================================================ */
  var burger = doc.getElementById("burger");
  var menu = doc.getElementById("menu");
  function closeMenu(){
    doc.body.classList.remove("menu-open");
    if(burger) burger.setAttribute("aria-expanded","false");
    if(menu) menu.setAttribute("aria-hidden","true");
  }
  if(burger){
    burger.addEventListener("click", function(){
      var open = doc.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("aria-hidden", open ? "false" : "true");
    });
  }
  doc.addEventListener("keydown", function(e){ if(e.key === "Escape") closeMenu(); });

  /* ============================================================
     6. HERO — sequência cinematográfica
     ============================================================ */
  var slides = doc.querySelectorAll(".hero__slide");
  var heroCount = doc.getElementById("heroCount");
  var slideIdx = 0;
  if(slides.length > 1 && !reduced){
    setInterval(function(){
      slides[slideIdx].classList.remove("active");
      slideIdx = (slideIdx + 1) % slides.length;
      slides[slideIdx].classList.add("active");
      if(heroCount) heroCount.textContent = "0"+(slideIdx+1)+" / 0"+slides.length;
    }, 5200);
  }

  /* ============================================================
     7. SERVIÇOS — troca de mídia
     ============================================================ */
  var stages = doc.querySelectorAll("#svcStage .fig");
  var svcNum = doc.getElementById("svcNum");
  var svcBlocks = doc.querySelectorAll(".svc");
  if(stages.length && "IntersectionObserver" in win){
    var svcIO = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting) return;
        var i = parseInt(e.target.getAttribute("data-svc"), 10);
        for(var s=0;s<stages.length;s++){ stages[s].classList.toggle("active", s === i); }
        if(svcNum) svcNum.textContent = "0"+(i+1);
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    Array.prototype.forEach.call(svcBlocks, function(b){ svcIO.observe(b); });
  }

  /* ============================================================
     8. CURSOR + magnetismo
     ============================================================ */
  var cursor = doc.getElementById("cursor");
  var cursorTxt = doc.getElementById("cursorTxt");
  var cx = win.innerWidth/2, cy = win.innerHeight/2, tx = cx, ty = cy;
  if(fine && cursor && !reduced){
    win.addEventListener("mousemove", function(e){
      tx = e.clientX; ty = e.clientY;
      cursor.classList.add("on");
    }, { passive:true });
    var hoverables = doc.querySelectorAll("a, button, .svc__items li, .gal__item");
    Array.prototype.forEach.call(hoverables, function(el){
      el.addEventListener("mouseenter", function(){
        var t = el.getAttribute("data-cursor");
        if(t){ cursorTxt.textContent = t; cursor.classList.add("grow"); }
        else { cursor.classList.add("on"); cursor.style.width = "26px"; cursor.style.height = "26px"; }
      });
      el.addEventListener("mouseleave", function(){
        cursor.classList.remove("grow");
        cursor.style.width = ""; cursor.style.height = "";
      });
    });
    var magnets = doc.querySelectorAll(".btn, .wa");
    Array.prototype.forEach.call(magnets, function(m){
      m.addEventListener("mousemove", function(e){
        var r = m.getBoundingClientRect();
        var mx = (e.clientX - r.left - r.width/2) * 0.22;
        var my = (e.clientY - r.top - r.height/2) * 0.28;
        m.style.transform = (m.classList.contains("wa") && win.innerWidth > 760 ? "translateY(-50%) " : "") + "translate("+mx+"px,"+my+"px)";
      });
      m.addEventListener("mouseleave", function(){
        m.style.transform = (m.classList.contains("wa") && win.innerWidth > 760 ? "translateY(-50%)" : "");
      });
    });
  }

  /* ============================================================
     9. LOOP PRINCIPAL — parallax, nav, galeria, railing
     ============================================================ */
  var nav = doc.getElementById("nav");
  var railFill = doc.getElementById("railFill");
  var railNum = doc.getElementById("railNum");
  var railName = doc.getElementById("railName");
  var galSection = doc.querySelector(".gal");
  var galTrack = doc.getElementById("galTrack");
  var galProg = doc.getElementById("galProg");
  var parallax = doc.querySelectorAll("[data-speed]");
  var sections = doc.querySelectorAll("[data-section]");
  var lastScroll = 0, ticking = false;

  function frame(){
    /* smooth scroll */
    if(smooth){
      currentY = lerp(currentY, target, 0.088);
      if(Math.abs(target - currentY) < 0.18) currentY = target;
      if(Math.abs(currentY - lastSet) > 0.05){
        lastSet = currentY;
        win.scrollTo(0, currentY);
      }
    } else {
      currentY = win.scrollY;
    }
    var y = currentY, vh = win.innerHeight;

    /* nav */
    if(nav){
      nav.classList.toggle("scrolled", y > 60);
      if(y > 420 && y > lastScroll + 4){ nav.classList.add("hidden"); }
      else if(y < lastScroll - 4 || y < 200){ nav.classList.remove("hidden"); }
    }
    lastScroll = y;

    /* parallax */
    if(!reduced){
      for(var i=0;i<parallax.length;i++){
        var el = parallax[i];
        var r = el.getBoundingClientRect();
        if(r.bottom < -300 || r.top > vh + 300) continue;
        var sp = parseFloat(el.getAttribute("data-speed")) || 0;
        var center = r.top + r.height/2 - vh/2;
        el.style.transform = "translate3d(0,"+(-center*sp).toFixed(2)+"px,0)";
      }
    }

    /* galeria horizontal */
    if(galSection && galTrack && win.innerWidth > 820 && !reduced){
      var gr = galSection.getBoundingClientRect();
      var total = galSection.offsetHeight - vh;
      var p = clamp((-gr.top) / (total || 1), 0, 1);
      var dist = galTrack.scrollWidth - win.innerWidth + 40;
      galTrack.style.transform = "translate3d("+(-dist*p).toFixed(2)+"px,0,0)";
      if(galProg) galProg.style.transform = "scaleX("+p.toFixed(4)+")";
    }

    /* manifesto — palavras acendendo */
    if(manifestoWords.length){
      var mr = manifesto.getBoundingClientRect();
      var mp = clamp((vh*0.82 - mr.top) / (mr.height + vh*0.32), 0, 1);
      var lit = Math.floor(mp * manifestoWords.length * 1.22);
      for(var w=0; w<manifestoWords.length; w++){
        manifestoWords[w].classList.toggle("lit", w < lit);
      }
    }

    /* railing */
    if(railFill){
      var maxS = maxScroll() || 1;
      railFill.style.transform = "scaleY("+clamp(y/maxS,0,1).toFixed(4)+")";
      for(var s=sections.length-1; s>=0; s--){
        var sr = sections[s].getBoundingClientRect();
        if(sr.top <= vh*0.42){
          railNum.textContent = sections[s].getAttribute("data-idx");
          railName.textContent = sections[s].getAttribute("data-section");
          break;
        }
      }
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  win.addEventListener("resize", function(){
    if(smooth){ target = currentY = win.scrollY; }
  }, { passive:true });

  /* ============================================================
     10. Imagens: fade-in suave + fallback elegante
     ============================================================ */
  Array.prototype.forEach.call(doc.images, function(img){
    img.addEventListener("error", function(){
      var p = img.parentElement;
      if(p) p.classList.add("img-failed");
      img.style.opacity = "0";
    });
  });
})();

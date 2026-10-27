(function(){
 const cfg=window.AGENTFUSE_SITE||{};
 const author=document.getElementById('author-line');
 if(author&&cfg.authors){author.textContent=cfg.authors;author.hidden=false;}
 for(const [id,url] of [['paper-link',cfg.paperUrl],['code-link',cfg.codeUrl]]){
   const el=document.getElementById(id);if(el&&url){el.href=url;el.hidden=false;el.target='_blank';el.rel='noopener noreferrer';}
 }
 if(cfg.bibtex)document.getElementById('bibtex').textContent=cfg.bibtex;
 const dlg=document.getElementById('figure-dialog');
 for(const id of ['open-figure','open-figure-bottom'])document.getElementById(id)?.addEventListener('click',()=>dlg.showModal());
 document.getElementById('close-figure')?.addEventListener('click',()=>dlg.close());
 dlg?.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
 document.getElementById('copy-citation')?.addEventListener('click',async()=>{
   const text=document.getElementById('bibtex').textContent;
   try{await navigator.clipboard.writeText(text);document.getElementById('copy-status').textContent='BibTeX copied.'}
   catch{document.getElementById('copy-status').textContent='Please select the text and copy it manually.'}
 });
})();

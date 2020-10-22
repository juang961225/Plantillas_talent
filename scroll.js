//scroll for height windo
//infinity pagination comparacion de tamaños
(function() {
    var out = {}
    
    if (typeof pass_it == "undefined") pass_it = {};

    if (typeof msg == "undefined") msg = console.log;

    if (!pass_it["siteHeight"]) {
        out["pass_it"] = {
          "siteHeight": 0,
        };
    } else {
        out["pass_it"] = pass_it;
      }
	
  	out.pic = true	
  
    if (out['pass_it']['siteHeight'] == document.querySelector('html').scrollHeight) {
        out['has_next_page'] = false
    } else {
        document.querySelector('html').scrollBy(0,document.querySelector('html').scrollHeight);
        out['has_next_page'] = true
    }
	
  	out.pic = true
    out.wait = true
  	pass_it.siteHeight = document.querySelector('html').scrollHeight
    out['pass_it'] = pass_it;
    return out;


})();
//____________________________________________________________________________
//extract simple
(function() {
	var out = {};
     var html_jobs = document.querySelectorAll("div.oracletaleocwsv2-accordion-head-info");
  	var jobs = [];for(var x in html_jobs){
    	if(typeof html_jobs[x] =="function") continue;
      	if(typeof html_jobs[x] =="number") continue;
    	var job = {};
    	var elem = html_jobs[x];
    	job.title = elem.querySelector("h4.oracletaleocwsv2-head-title > a").textContent.trim();
    	job.url = elem.querySelector("h4.oracletaleocwsv2-head-title > a").href.trim();
    	job.location = elem.querySelector("div.oracletaleocwsv2-accordion-head-info >div").textContent.trim();
        //job.dateposted_raw = elem.querySelector("").textContent.trim();
        //job.logo = elem.querySelector("").getAttribute("src").trim();
		//job.source_apply_email = elem.querySelector("").textContent.trim();
		//job.source_empname = elem.querySelector("").textContent.trim();
		//job.source_jobtype = elem.querySelector("").textContent.trim();
		//job.source_salary = elem.querySelector("").textContent.trim();
       	job.temp = 1;
    	jobs.push(job);
  	} 
  
	out["jobs"]= jobs;
  	return out;
})();
//finist

//http://boo1.neuvoo.com/boo3-web/spider/add-step.php?style=dark&id=194777 <----- spider

//pagination con before pagination
//extract simple
(function() {
	var out = {};
     var html_jobs = document.querySelectorAll("tbody.jobsbody tr");
  	var jobs = [];for(var x in html_jobs){
    	if(typeof html_jobs[x] =="function") continue;
      	if(typeof html_jobs[x] =="number") continue;
    	var job = {};
    	var elem = html_jobs[x];
    	job.title = elem.querySelector("th span a").textContent.trim();
    	job.url = elem.querySelector("th span a").href.trim();
    	job.location = elem.querySelector("td:nth-child(3)").textContent.trim();
        job.dateposted_raw = elem.querySelector("td:nth-child(3)").textContent.trim();
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
//___________________________________________________________________________________________
//before pagination
(function() {
	var out = {};
  	out.waitFor = 'a#next[aria-disabled="false"]'
    return out;
})();
//___________________________________________________________________________________________
//pagination
(function() {
    var out = {};
  var next_page_selector = 'a#next[aria-disabled="false"]'; //selector to identify the next button
  //var last_page_selector = ""; //selector to identify the last page
   
  var clickable_elem = document.querySelector(next_page_selector);

    //stop condition
    if (!document.querySelector(next_page_selector)) {
        //last page
      out["has_next_page"] = false;
  } else if(clickable_elem){
        //go to next page
      clickable_elem.click();
        out["has_next_page"] = true;
  } else {
        //try again
      out["has_next_page"] = true;
  }

    out.waitFor = "";
    return out;
})();
//_______________________________________________________________________________________________
//jobDescription
(function() {
    var out = {};
    var job = {};
    var selector = "div.editablesection";
    var remove_selectors = [];
    //var job = pass_it["job"];
    var full_html = document.querySelector(selector);
    // remove something from the jobdatata
    if (remove_selectors.length > 0) remove_selectors.forEach(remove_selector => {if(full_html.querySelector(remove_selector)) full_html.querySelector(remove_selector).remove();});
    if (typeof cleanHTML == "undefined") cleanHTML = function(x){return x};
    if (typeof msg == "undefined") msg = console.log;
  
    job.html      = full_html.innerHTML.trim();    
    //job.html = removeTextBefore(job.html, 'Summary of Job Duties', false);
    job.html = removeTextAfter(job.html, 'Primary Location', true);
    job.html      = cleanHTML(job.html);
    var tmp       = document.createElement('div');
    tmp.innerHTML = job.html;
    job.jobdesc   = tmp.textContent.trim();
    job.jobdesc   = cleanHTML(job.jobdesc);
    out["job"] = job;
    return out;
  
  })();
  function removeTextBefore(html, text, flag) {
    var newHtml = html;
    if (newHtml.indexOf(text) > -1) {
      newHtml = newHtml.split(text).pop();
      if (!flag) {
        newHtml = "<h3>" + text + "</h3>" + newHtml;
      }       
    }
    return newHtml;
  }
  function removeTextAfter(html, text, flag) {
    var newHtml = html;
    if (newHtml.indexOf(text) > -1) {
      newHtml = newHtml.split(text).shift();
      if (!flag) {
        newHtml = newHtml + "<p>" + text + "</p>";
      }       
    }
    return newHtml;
  }
  //finish
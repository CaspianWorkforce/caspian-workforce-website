"use client";
import {useState} from "react";

function openMail(subject:string, body:string){
  window.location.href=`mailto:info@caspianworkforcegroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForms(){
 const [type,setType]=useState<'employer'|'jobseeker'>('employer');
 function submit(e:React.FormEvent<HTMLFormElement>){
   e.preventDefault();
   const f=new FormData(e.currentTarget);
   const lines:Array<string>=[];
   f.forEach((v,k)=>lines.push(`${k}: ${String(v)}`));
   openMail(type==='employer'?'Employer inquiry — Caspian Workforce Group':'Job seeker profile — Caspian Workforce Group',lines.join('\n'));
 }
 return <div className="form-shell">
  <div className="form-tabs"><button type="button" className={type==='employer'?'active':''} onClick={()=>setType('employer')}>Employer Inquiry</button><button type="button" className={type==='jobseeker'?'active':''} onClick={()=>setType('jobseeker')}>Job Seeker Application</button></div>
  {type==='employer'?<form className="form-grid" onSubmit={submit}>
   <input name="Contact person" required placeholder="Contact Person"/><input name="Company" required placeholder="Company Name"/>
   <input name="Country" placeholder="Country"/><input name="Business email" required type="email" placeholder="Business Email"/>
   <input name="Phone" placeholder="Phone Number"/><input name="Industry" placeholder="Industry"/>
   <input name="Workforce required" placeholder="Workforce Required (optional)"/><textarea name="Requirements" placeholder="Tell us about your workforce requirements"/>
   <button className="button button-gold form-submit">Submit Inquiry</button>
  </form>:<form className="form-grid" onSubmit={submit}>
   <input name="Full name" required placeholder="Full Name"/><input name="Email" required type="email" placeholder="Email Address"/>
   <input name="Phone" required placeholder="Phone Number"/><input name="Country of residence" placeholder="Country of Residence"/>
   <input name="Nationality" placeholder="Nationality"/><input name="Preferred country" placeholder="Preferred Country"/>
   <input name="Preferred position" placeholder="Preferred Position"/><input name="Experience" placeholder="Years of Experience"/>
   <textarea name="Additional information" placeholder="Additional Information"/><button className="button button-gold form-submit">Submit Your Profile</button>
  </form>}
  <p className="form-note">Submitting the form opens a prepared email in your mail application.</p>
 </div>
}

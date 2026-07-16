export default function Section({eyebrow,title,intro,children,muted=false}:{eyebrow?:string;title?:string;intro?:string;children:React.ReactNode;muted?:boolean}){
 return <section className={muted?"section section-muted":"section"}><div className="container">
  {(eyebrow||title||intro)&&<div className="section-heading">{eyebrow&&<div className="eyebrow">{eyebrow}</div>}{title&&<h2>{title}</h2>}{intro&&<p>{intro}</p>}</div>}
  {children}
 </div></section>
}

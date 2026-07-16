import type {MetadataRoute} from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://caspianworkforcegroup.com";return ["","/employers","/job-seekers","/about","/contact","/privacy","/terms","/cookies"].map(p=>({url:base+p,lastModified:new Date()}))}

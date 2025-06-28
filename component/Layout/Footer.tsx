"use client";

import LİNK from "next/link";
import {toast} from "react-hot-toast";
import { SiNextdotjs } from "react-icons/si";
import {BiLogoTypescript, BiLogoTailwindCss} from "react-icons/bi";

interface IContact {
    label : string;
    target: string;

}

export const Footer = () => {
    const shortcuts = [
        {href: "https://www.instagram.com/hamdi.gull/", label: "İnstagram"}
    ];

    const stack = [
        {name: "Next.js", logo:<SiNextdotjs className="text-white w-8 h-8"/>},
        {name: "TypeScript", logo:<BiLogoTypescript className="text-white w-8 h-8"/>},
        {name: "Tailwind CSS", logo:<BiLogoTailwindCss className="text-white w-8 h-8"/>},
    ];

    const constacts =[
        {label: "Email", target: "hamdi.gull95@gmail.com"},
    ];

    const onHandlyCopy = (contact: IContact) => {
        navigator.clipboard.writeText(contact.target);
        toast.success(`${contact.label} kopyalandı!`, { style:{border:"1px solid #3e3e3e", background: "#111", color: "#fff"}});
    };

    const cv_file_url = "pdf/hamdi_gull_cv.pdf";

    const downloadFile = (url: string) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName ?? "CV");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  
}

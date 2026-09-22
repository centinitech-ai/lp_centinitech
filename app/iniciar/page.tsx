import type { Metadata } from "next";
import { ProjectBrief } from "@/components/project-brief";

export const metadata: Metadata = { title: "Iniciar projeto — Centini Tech", description: "Conte para a Centini Tech o que você quer construir." };

export default function StartPage() { return <ProjectBrief />; }


import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileSpreadsheet,
  GraduationCap,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Rows3,
  Scale,
  SearchCheck,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const whatsappUrl =
  "https://wa.me/5551993682413?text=Ol%C3%A1%2C%20Julia.%20Vi%20seu%20portf%C3%B3lio%20profissional%20e%20gostaria%20de%20conversar%20sobre%20atua%C3%A7%C3%A3o%20PJ%20na%20%C3%A1rea%20fiscal.";
const linkedinUrl = "https://www.linkedin.com/in/juliacardoso-fiscal";

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.065 } },
};

const valueCards = [
  {
    title: "Conformidade fiscal",
    text: "Atuo para manter rotinas alinhadas às obrigações fiscais e às mudanças de legislação.",
    icon: ShieldCheck,
  },
  {
    title: "Precisão na escrituração",
    text: "Cuido dos detalhes que sustentam apurações, lançamentos e entregas com mais segurança.",
    icon: FileCheck2,
  },
  {
    title: "Apoio técnico para empresas do RS",
    text: "Trabalho com visão prática das demandas fiscais de operações no Rio Grande do Sul.",
    icon: MapPin,
  },
  {
    title: "Reforma Tributária IBS/CBS",
    text: "Acompanho os impactos da transição para apoiar revisões e adequações de rotinas fiscais.",
    icon: Scale,
  },
];

const specialties = [
  ["Escrituração Fiscal", FileSpreadsheet],
  ["ICMS/ICMS-ST", Calculator],
  ["PIS/COFINS", Rows3],
  ["SPED Fiscal/SPED Contribuições", ClipboardCheck],
  ["Obrigações Acessórias", FileCheck2],
  ["NCM/CST", BadgeCheck],
  ["Pesquisas Tributárias", SearchCheck],
  ["Legislação Tributária", Landmark],
  ["Reforma Tributária IBS/CBS", Scale],
  ["Rotinas Fiscais", BriefcaseBusiness],
] as const;

const differentials = [
  "Atuação PJ com responsabilidade",
  "Comunicação clara com áreas internas",
  "Organização em períodos de alta demanda",
  "Base técnica em legislação estadual e federal",
  "Foco em prevenção de riscos fiscais",
];

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={reveal}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
      <span className="h-px w-8 bg-primary/70" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-3xl font-semibold leading-[1.05] text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>}
    </Reveal>
  );
}

function DevPreviewToggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/12 bg-[#07111A]/88 p-1 shadow-2xl shadow-black/35 backdrop-blur">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={cn(
          "inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-muted-foreground transition",
          enabled && "bg-primary text-primary-foreground",
        )}
      >
        <Smartphone className="h-4 w-4" />
        Preview Mobile
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        className={cn(
          "inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-muted-foreground transition",
          !enabled && "bg-primary text-primary-foreground",
        )}
      >
        <Monitor className="h-4 w-4" />
        Preview Desktop
      </button>
    </div>
  );
}

function Header() {
  const navItems = [
    ["Proposta", "#proposta"],
    ["Especialidades", "#especialidades"],
    ["Reforma", "#reforma"],
    ["Trajetória", "#trajetoria"],
    ["Contato", "#contato"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111A]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/35 bg-primary/10 font-serif text-lg font-semibold text-primary">
            JC
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-white">Julia Cardoso</span>
            <span className="block text-xs text-muted-foreground">Fiscal PJ | RS</span>
          </span>
        </a>
        <nav className="desktop-nav hidden rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-muted-foreground lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-3 py-1.5 transition hover:bg-white/[0.06] hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <Button asChild className="desktop-cta hidden h-11 rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90 md:inline-flex">
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 blueprint-grid opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#07111A_0%,rgba(8,24,31,0.95)_48%,rgba(14,65,69,0.7)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

      <div className="hero-grid relative mx-auto grid max-w-7xl gap-10 px-5 py-14 md:py-16 lg:min-h-[calc(100vh-70px)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={reveal}>
            <Eyebrow>Rio Grande do Sul | Fiscal PJ</Eyebrow>
          </motion.div>
          <motion.h1
            variants={reveal}
            className="hero-title max-w-4xl font-serif text-[3rem] font-semibold leading-[0.98] text-white md:text-[4.75rem]"
          >
            Analista Fiscal PJ especializada em rotinas fiscais, SPED e Reforma Tributária no RS
          </motion.h1>
          <motion.p variants={reveal} className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Ajudo empresas do Rio Grande do Sul a manterem suas rotinas fiscais mais seguras, organizadas e em
            conformidade, com atuação técnica em ICMS, PIS/COFINS, SPED e adequação à Reforma Tributária.
          </motion.p>

          <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar comigo no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-white/15 bg-white/[0.04] px-6 text-white hover:bg-white/[0.08] hover:text-white"
            >
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
                Ver meu LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          className="hero-media relative"
        >
          <div className="absolute -right-4 top-8 hidden h-[86%] w-[70%] border border-primary/25 lg:block" />
          <div className="absolute -left-6 bottom-10 hidden h-36 w-36 border-l border-t border-white/18 lg:block" />

          <div className="relative">
            <div className="relative overflow-hidden rounded-md border border-white/12 bg-[#101A1E] shadow-2xl shadow-black/35">
              <img
                src="/assets/fiscal-hero-abstract.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-28"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,26,0.08),rgba(7,17,26,0.92))]" />
              <div className="relative p-4 md:p-5">
                <div className="overflow-hidden rounded-sm border border-primary/20">
                  <img
                    src="/assets/julia-cardoso-photo.jpg"
                    alt="Foto profissional de Julia Cardoso, Analista Fiscal PJ"
                    className="aspect-[4/4.25] w-full object-cover object-center saturate-[0.98]"
                  />
                </div>
                <div className="mt-4 grid gap-4 rounded-sm border border-white/10 bg-[#07111A]/72 p-4 backdrop-blur md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Portfolio Fiscal PJ</p>
                    <p className="mt-2 font-serif text-3xl font-semibold text-white">Julia Cardoso</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Mais de 7 anos de experiência em rotinas fiscais reais, com foco em escrituração, apuração,
                      obrigações acessórias e legislação tributária.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/12 px-4 py-2 text-xs font-semibold text-muted-foreground">
                    Fiscal PJ | RS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section id="proposta" className="section-band py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            eyebrow="Proposta de valor"
            title="Apoio fiscal técnico, organizado e próximo para decisões mais seguras"
            description="Minha atuação combina domínio de rotina fiscal, leitura técnica de legislação e comunicação objetiva com times que precisam de clareza para avançar."
          />

          <motion.div
            className="preview-grid grid gap-3 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {valueCards.map(({ title, text, icon: Icon }, index) => (
              <motion.div key={title} variants={reveal} className={cn(index === 0 && "md:row-span-2")}>
                <Card className="group h-full overflow-hidden border-white/10 bg-white/[0.045] shadow-none transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-white/[0.07]">
                  <CardHeader className={cn("p-5", index === 0 && "md:p-7")}>
                    <div className="mb-6 flex items-center justify-between">
                      <Icon className="h-7 w-7 text-primary" />
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                    </div>
                    <CardTitle className={cn("text-xl leading-6 text-white", index === 0 && "md:text-3xl md:leading-8")}>
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={cn("p-5 pt-0", index === 0 && "md:p-7 md:pt-0")}>
                    <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Especialidades técnicas"
          title="Uma matriz fiscal objetiva para rotinas que pedem precisão"
          description="Atuo em frentes que exigem consistência no dia a dia e atenção às interpretações tributárias que impactam a entrega fiscal."
          align="center"
        />
        <motion.div
          className="preview-grid grid overflow-hidden rounded-md border border-white/10 bg-[#0B171D] md:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {specialties.map(([title, Icon], index) => (
            <motion.div key={title} variants={reveal}>
              <div className="group min-h-36 border-b border-r border-white/10 p-5 transition duration-300 hover:bg-primary hover:text-primary-foreground">
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-6 w-6 text-primary transition group-hover:text-primary-foreground" />
                  <span className="font-mono text-xs text-muted-foreground transition group-hover:text-primary-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-8 text-sm font-semibold leading-5 text-white transition group-hover:text-primary-foreground">
                  {title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ReformSection() {
  return (
    <section id="reforma" className="relative overflow-hidden border-y border-white/10 bg-[#E8E4D8] py-20 text-[#101820] md:py-24">
      <div className="absolute inset-0 light-grid opacity-70" />
      <div className="preview-grid relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6D2D]">Reforma Tributária IBS/CBS</p>
          <h2 className="font-serif text-4xl font-semibold leading-[1.02] text-[#101820] md:text-6xl">
            Transição fiscal com método, prudência e leitura atualizada.
          </h2>
        </Reveal>
        <Reveal>
          <div className="rounded-md border border-[#101820]/15 bg-white/60 p-6 shadow-xl shadow-[#101820]/5 backdrop-blur md:p-8">
            <p className="text-lg leading-8 text-[#2F3D43]">
              Minha atuação considera os impactos do IBS/CBS nas rotinas fiscais, com atenção à revisão de
              classificações fiscais, interpretação de mudanças e apoio à adequação dos processos que sustentam a
              conformidade.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {["Revisão de classificações", "Interpretação das mudanças", "Adequação de rotinas"].map((item) => (
                <div key={item} className="rounded-md border border-[#101820]/12 bg-[#101820] p-4 text-white">
                  <CheckCircle2 className="mb-4 h-5 w-5 text-primary" />
                  <p className="text-sm font-semibold leading-5">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrajectorySection() {
  return (
    <section id="trajetoria" className="section-band py-20 md:py-24">
      <div className="preview-grid mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência construída dentro de rotinas fiscais reais"
          description="Minha trajetória foi construída dentro de rotinas fiscais reais, em escritórios contábeis e operações com diferentes demandas tributárias. Essa vivência me trouxe visão prática, atenção aos detalhes e segurança para apoiar empresas que precisam de consistência fiscal."
        />

        <Reveal>
          <div className="relative space-y-4 border-l border-primary/35 pl-6">
            {[
              "Mais de 7 anos de experiência na área fiscal no Rio Grande do Sul.",
              "Atuação com escrituração, apuração, obrigações acessórias e pesquisas tributárias.",
              "Leitura técnica voltada à prevenção de riscos e à organização de rotinas fiscais.",
            ].map((item) => (
              <div key={item} className="relative rounded-md border border-white/10 bg-white/[0.045] p-5">
                <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border border-primary bg-background" />
                <p className="leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CredentialsSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Formação e credibilidade"
          title="Base contábil e atualização específica em Reforma Tributária"
          align="center"
        />
        <div className="preview-grid grid gap-4 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-white/10 bg-[#0B171D] shadow-none">
              <CardHeader className="p-7">
                <BookOpenCheck className="mb-6 h-8 w-8 text-primary" />
                <CardTitle className="text-2xl leading-8 text-white">
                  Pós-graduação em Reforma Tributária e Práticas Fiscais
                </CardTitle>
              </CardHeader>
              <CardContent className="p-7 pt-0">
                <p className="text-muted-foreground">Contabilidade Facilitada</p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal>
            <Card className="h-full border-white/10 bg-[#0B171D] shadow-none">
              <CardHeader className="p-7">
                <GraduationCap className="mb-6 h-8 w-8 text-primary" />
                <CardTitle className="text-2xl leading-8 text-white">Bacharelado em Ciências Contábeis</CardTitle>
              </CardHeader>
              <CardContent className="p-7 pt-0">
                <p className="text-muted-foreground">UniRitter</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DifferentialsSection() {
  return (
    <section className="section-band py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="preview-grid grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            eyebrow="Diferenciais profissionais"
            title="Técnica fiscal com responsabilidade, clareza e rotina organizada"
          />
          <motion.div className="grid gap-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {differentials.map((item) => (
              <motion.div
                key={item}
                variants={reveal}
                className="flex items-center gap-4 border-b border-white/10 bg-white/[0.025] px-4 py-4"
              >
                <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                <p className="font-semibold leading-6 text-white">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-white/10 py-20 md:py-24">
      <div className="absolute inset-0 blueprint-grid opacity-45" />
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal className="rounded-md border border-white/10 bg-[#0B171D] p-6 shadow-2xl shadow-black/25 md:p-10">
          <div className="preview-grid grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <Eyebrow>Contato</Eyebrow>
              <h2 className="font-serif text-3xl font-semibold leading-[1.06] text-white md:text-5xl">
                Se sua empresa precisa de uma profissional fiscal PJ com domínio técnico, visão prática e foco em
                conformidade no Rio Grande do Sul, vamos conversar.
              </h2>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="h-12 w-full rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Falar comigo no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 w-full rounded-full border-white/15 bg-white/[0.04] px-6 text-white hover:bg-white/[0.08] hover:text-white"
              >
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <a
                href="mailto:juliasouza2203@gmail.com"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-muted-foreground transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" />
                juliasouza2203@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const [mobilePreview, setMobilePreview] = useState(false);

  return (
    <>
      <div
        className={cn(
          "min-h-screen bg-background",
          mobilePreview && "mobile-preview mx-auto max-w-[390px] overflow-hidden border-x border-white/10 shadow-2xl shadow-black",
        )}
      >
        <Header />
        <main>
          <Hero />
          <ValueSection />
          <SpecialtiesSection />
          <ReformSection />
          <TrajectorySection />
          <CredentialsSection />
          <DifferentialsSection />
          <ContactSection />
        </main>
        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-muted-foreground">
          <p>Julia Cardoso | Analista Fiscal PJ | Rio Grande do Sul</p>
        </footer>
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Julia Cardoso no WhatsApp"
        className={cn(
          "fixed bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-primary text-primary-foreground shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:bg-primary/90",
          mobilePreview ? "right-[calc(50%-180px)]" : "right-5",
        )}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <DevPreviewToggle enabled={mobilePreview} onChange={setMobilePreview} />
    </>
  );
}

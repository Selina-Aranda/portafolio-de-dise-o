import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Diseño publicitario",
    type: "Identidad de marca",
    year: "2026",
    image: [
      "https://i.ibb.co/VcLRfPy2/muestra1.png",
      "https://i.ibb.co/BKdqpQp0/muestra6.png",
      "https://i.ibb.co/YTpddJ7S/muestra7.png",
    ],
    tone: "bg-[#7868ff]",
  },
  {
    number: "02",
    title: "Branding",
    type: "Diseño con esencia",
    year: "2026",
    image: [
      "https://i.ibb.co/wh8mNJSR/muestra5.png",
      "https://i.ibb.co/zh2MfB9T/muestra4.png",
    ],
    tone: "bg-[#7868ff]",
  },
  {
    number: "03",
    title: "Diseño digital",
    type: "Haz que tu marca destaque",
    year: "2026",
    image: [
      "https://i.ibb.co/8DL8Q8RY/muestra2.png",
      "https://i.ibb.co/Ng6rXDBP/muestra3.png",
    ],
    tone: "bg-[#7868ff]",
  },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}



function ProjectCarousel({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((index) =>
      index === 0 ? project.image.length - 1 : index - 1
    );
  };

  const next = () => {
    setCurrent((index) =>
      index === project.image.length - 1 ? 0 : index + 1
    );
  };

  return (
    <div className="visual relative overflow-hidden bg-[#e2dfd7]">
      <div
        className={`absolute left-4 top-4 z-10 rounded-full ${project.tone} px-4 py-2 text-xs font-black text-white`}
      >
        {project.number}
      </div>

      <div className="flex h-[300px] items-center justify-center sm:h-[400px] md:h-[460px] lg:h-[520px]">
        <img
          key={project.image[current]}
          src={project.image[current]}
          alt={`${project.title} - imagen ${current + 1}`}
          className="h-full w-full object-contain"
          onError={(event) => {
            console.error(
              "No se pudo cargar la imagen:",
              event.currentTarget.src
            );
          }}
        />
      </div>

      {project.image.length > 1 && (
        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Imagen anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#7868ff] hover:text-white"
            >
              <Arrow className="h-5 w-5 rotate-180" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Imagen siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#7868ff] hover:text-white"
            >
              <Arrow className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



export default function App() {
  return (
    <main className="overflow-hidden bg-[#f2f0e9] text-[#171714]">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-6 md:px-10 lg:px-16">
        <a href="#inicio" className="text-xl font-black uppercase tracking-[-0.06em]">
        SHEYLA YATACO<span className="text-[#731F12]">.</span>
        </a>
        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] md:flex">
          <a className="transition-opacity hover:opacity-50" href="#proyectos">Proyectos</a>
          <a className="transition-opacity hover:opacity-50" href="#sobre-mi">Sobre mí</a>
          <a className="transition-opacity hover:opacity-50" href="#contacto">Contacto</a>
        </div>
        <a
          href="mailto:hola@liamoreno.studio"
          className="group flex items-center gap-2 border-b border-black pb-1 text-xs font-bold uppercase tracking-[0.12em]"
        >
          CONTÁCTAME
          <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </nav>

     <section
        id="inicio"
        className="mx-auto max-w-[1500px] px-5 pb-12 pt-8 md:px-10 md:pt-12 lg:px-16"
      >
        <div className="mb-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] md:text-[11px]">
          <span>Diseñadora gráfica · Lima</span>
          <span className="hidden md:block">Disponible para proyectos</span>
        </div>

        <h1 className="max-w-[1150px] text-[clamp(3.2rem,9.5vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
          Tu visión
          <span className="flex items-center gap-[0.08em]">
            <span className="inline-block h-[0.65em] w-[0.65em] shrink-0 rounded-full bg-[#4F1273]" />
          </span>
          <span className="text-[#731F12]">mi creatividad.</span>
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
          <p className="max-w-md text-base leading-snug md:col-span-5 md:col-start-7 md:text-xl">
            Diseño personalizado para emprendedores y marcas que quieren diferenciarse.
          </p>

          <a
            href="#proyectos"
            className="group flex h-20 w-20 items-center justify-center rounded-full bg-[#171714] text-[#f2f0e9] transition-transform hover:rotate-6 md:col-span-2 md:h-24 md:w-24 md:justify-self-end"
            aria-label="Ver proyectos"
          >
            <Arrow className="h-7 w-7 rotate-90" />
          </a>
        </div>
      </section>

      <div className="marquee border-y border-black bg-[#7e5d91] py-4">
        <div className="marquee-track flex w-max gap-8 text-lg font-black uppercase tracking-[-0.03em]">
          {[1, 2].map((copy) => (
            <div key={copy} className="flex gap-8" aria-hidden={copy === 2}>
              <span>Branding</span><span>✦</span><span>✦</span>
              <span>Diseño editorial</span><span>✦</span><span>Diseño publicitario</span><span>✦</span>
              <span>Diseño digital</span><span>✦</span>
            </div>
          ))}
        </div>
      </div>

      <section id="proyectos" className="mx-auto max-w-[1500px] px-5 py-24 md:px-10 lg:px-16 lg:py-36">
        <div className="mb-14 flex items-end justify-between border-b border-black pb-5">
          <div>
            <h2 className="text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">Proyectos</h2>
          </div>
        </div>


      <div className="space-y-20">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group grid gap-6 md:grid-cols-12 md:items-end ${
              index % 2 ? "md:[&_.visual]:order-2" : ""
            }`}
          >
            <div className="md:col-span-8">
              <ProjectCarousel project={project} />
            </div>

            <div className="border-t border-black pt-5 md:col-span-4">
              <div className="mb-8 flex justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em]">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>

              <h3 className="text-4xl font-black uppercase tracking-[-0.06em] sm:text-5xl md:text-6xl">
                {project.title}
              </h3>

            </div>
          </article>
        ))}
      </div>

      </section>

      <section className="bg-[#171714] px-5 py-24 text-[#f2f0e9] md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1370px] gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#933b2e]">Lo que hago</span>
            <h2 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-[-0.065em] md:text-8xl">
              Del concepto al impacto.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            {["Identidad visual", "Publicidad", "Ilustración", "Diseño digital"].map((service, index) => (
              <div key={service} className="group flex items-center justify-between border-b border-white/25 py-7">
                <div className="flex items-center gap-6">
                  <span className="text-xs text-[#933b2e]">0{index + 1}</span>
                  <h3 className="text-2xl font-bold md:text-3xl">{service}</h3>
                </div>
                <Arrow className="h-6 w-6 -rotate-45 transition-transform group-hover:rotate-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="mx-auto grid max-w-[1500px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-12 lg:px-16 lg:py-36">
        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1728281144091-b743062a9bf0?auto=format&fit=crop&w=1000&q=85"
              alt="Sheyla trabajando en su estudio creativo"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
        <div className="pt-12 lg:col-span-6 lg:col-start-7 lg:pt-0">
          <span className="text-xs font-bold uppercase tracking-[0.18em]">Sobre mí</span>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] md:text-7xl">
            Diseñar es hacer visible una idea.
          </h2>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-black/70">
          Soy Sheyla, diseñadora gráfica, apasionada por la creatividad y la comunicación visual. Cuento con experiencia en la creación, edición y rediseño de piezas gráficas, así como en el desarrollo y redibujado de diseños para empaques, buscando siempre que cada propuesta sea atractiva, funcional y coherente con la identidad de cada marca.          </p>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-black/70">
          Me enfoco en transformar ideas en diseños visuales atractivos, cuidando cada detalle y respetando la esencia de cada proyecto. Me caracterizo por mi responsabilidad, compromiso y dedicación, buscando siempre entregar trabajos de calidad y seguir creciendo creativamente.          </p>

        </div>
      </section>

      <footer id="contacto" className="bg-[#6b3f84] px-5 pb-10 pt-24 md:px-10 lg:px-16 lg:pt-32">
        <div className="mx-auto max-w-[1370px]">
          <span className="text-xs font-bold uppercase tracking-[0.18em]">¿Tienes un proyecto en mente?</span>
          <a
            href="mailto:sheylanoemiy@gmail.com"
            className="group mt-8 flex items-end justify-between border-b-2 border-black pb-6"
          >
            <h2 className="max-w-5xl text-[clamp(3.4rem,9.5vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              Hagamos algo increíble
            </h2>
            <Arrow className="mb-3 hidden h-20 w-20 -rotate-45 transition-transform group-hover:rotate-0 md:block" />
          </a>
          <div className="mt-12 grid gap-8 text-sm font-bold md:grid-cols-3 md:items-end">
            <div>
              <span className="mb-2 block text-xs uppercase tracking-[0.14em]">Escríbeme</span>
              <a className="underline underline-offset-4" href="mailto:sheylanoemiy@gmail.com">sheylanoemiy@gmail.com</a>
            </div>
            <div>
              <span className="mb-2 block text-xs uppercase tracking-[0.14em]">Número de contacto</span>
              <div className="flex gap-5">
                <a href="tel:+51917695258">+51 917 695 258</a>
              </div>
            </div>
            <p className="md:text-right">Lima, PE · © 2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

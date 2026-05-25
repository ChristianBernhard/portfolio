import logoCancom from '@/images/logos/cancom.png'
import logoAInleuchtend from '@/images/logos/ainleuchtend.png'
import logoBMW from '@/images/logos/bmw.png'
import logoAqarios from '@/images/logos/aqarios.png'
import logoAdesso from '@/images/logos/adesso.png'
import logoT4G from '@/images/logos/t4g.png'
import logoNvidia from '@/images/logos/nvidia.jpg'
import logoMeta from '@/images/logos/meta.png'

// PNGs in /public — width/height must match the actual file dimensions.
const ainleuchtendSiteImage = { src: '/ainleuchtend-site.png', width: 1024, height: 562 }
const lunaSolveImage = { src: '/luna-solve.png', width: 1024, height: 574 }
const wryteAppStoreImage = { src: '/wryte-app-store.png', width: 1024, height: 650 }
const digitalVoiceAgentImage = { src: '/digital-voice-agent.png', width: 1024, height: 556 }
const demohubImage = { src: '/demohub.png', width: 1024, height: 661 }
const discoveryWorkshopImage = { src: '/discovery-workshop.png', width: 1024, height: 510 }

// Tech badge helper. Pass a logo only when we have a real one; the chip
// renders cleanly without one otherwise.
const tech = (name, logo = null) => ({ name, logo })

export const experience = [
  {
    id: 'cancom',
    company: 'CANCOM',
    title: 'Team Leader AI',
    period: 'May 2025 — Present',
    location: 'Munich, Germany',
    logo: logoCancom,
    tech: [
      tech('NVIDIA AI Enterprise', logoNvidia),
      tech('NIMs', logoNvidia),
      tech('TensorRT-LLM', logoNvidia),
      tech('DGX Spark', logoNvidia),
      tech('DGX H200', logoNvidia),
      tech('Nemotron'),
      tech('vLLM'),
      tech('Azure AI Foundry'),
      tech('Azure OpenAI Realtime'),
      tech('LangGraph'),
      tech('LiveKit'),
      tech('watsonx Orchestrate'),
    ],
    tabs: [
      {
        id: 'mandate',
        label: 'Role & Mandate',
        title: 'From first AI hire to Team Leader in a year',
        body:
          'First AI hire of a brand-new business unit — started as Forward Deployed Engineer, promoted to Team Leader to scale the whole thing. I joined CANCOM as the first dedicated AI employee with a mandate to help build the new Digital Solutions & AI Business Unit from scratch: designing the AI customer journey, the portfolio and the operating model alongside leadership. Started fully operational and engineering-heavy, then promoted to Team Leader to scale the team, projects and revenue — 20+ AI workshops delivered DACH-wide with C-level audiences, a team of 5+ Forward Deployed Engineers, and a growing on-prem AI portfolio on the NVIDIA stack. The following chapters walk through the concrete projects and artefacts.',
      },
      {
        id: 'discovery',
        label: 'AI Discovery Workshop',
        title:
          'Designed CANCOM\u2019s flagship two-day AI Discovery Workshop',
        body:
          'A structured 2-day journey that takes organisations from "we should do something with AI" to a concrete, prioritised PoC plan. I designed the concept, the content, the deliverables and the brand — and have personally delivered it 20+ times across DACH, mostly with C-Suite audiences.',
        media: {
          kind: 'browser',
          url: 'demo.cancom-ds.de/discovery-workshop',
          href: 'https://demo.cancom-ds.de/discovery-workshop',
          title: 'AI Discovery Workshop',
          subtitle:
            'Two structured days that move organisations from idea to executable AI roadmap.',
          imageSrc: discoveryWorkshopImage.src,
          imageWidth: discoveryWorkshopImage.width,
          imageHeight: discoveryWorkshopImage.height,
        },
      },
      {
        id: 'demohub',
        label: 'AI Demo Hub',
        title:
          'Architected and built the public AI Demo Hub of the business unit',
        body:
          'The single destination that makes our three pillars (AI · IoT · Platform) tangible. I designed, implemented and now maintain the entire website end-to-end — a dozen interactive demos spanning VLM document extraction, computer-vision pipelines, multi-agent flows, RAG playgrounds and on-prem inference comparisons. It is the central digital touchpoint of the business unit for customer briefings, sales enablement and external showcasing, used company-wide by prospects, customers and internal teams.',
        media: {
          kind: 'browser',
          url: 'demo.cancom-ds.de',
          href: 'https://demo.cancom-ds.de/',
          title: 'CANCOM AI Demo Hub',
          subtitle:
            'AI · IoT · Platform — live demos, webinars and customer-ready PoCs.',
          imageSrc: demohubImage.src,
          imageWidth: demohubImage.width,
          imageHeight: demohubImage.height,
        },
      },
      {
        id: 'asys',
        label: 'ASYS Customer Story',
        title:
          'ASYS Group — from Discovery Workshop to productive PoC in under 4 weeks',
        body:
          'A textbook example of the full CANCOM AI journey end-to-end. ASYS came in with a manual fertigungsdokumentation pain point — manually renaming and filing roughly 100 machine documentations per week. We ran the AI Discovery Workshop, then designed and shipped a mobile web-app + Vision-Language Model that automated the workflow in less than four weeks.',
        links: [
          {
            label: 'CANCOM newsroom reference ↗',
            href: 'https://newsroom.cancom.de/referenz/intelligente-fertigungsdokumentation-asys-startet-seine-ai-journey-mit-cancom/',
          },
        ],
        media: {
          kind: 'video',
          src: 'https://www.youtube.com/embed/KVwdUCgrfEU?start=74&rel=0&modestbranding=1',
          title: 'ASYS × CANCOM — AI Journey Customer Story',
        },
      },
      {
        id: 'dva',
        label: 'Digital Voice Agent',
        title:
          'Built a productised voice-first AI assistant — from scratch to live deployment',
        body:
          'A CANCOM product I self-initiated by creating a first running demo and then designed and built together with my team. The Digital Voice Agent (DVA) is a voice-first AI assistant built among others on LiveKit and Azure OpenAI Realtime for physical touchpoints. Use cases range from reception, lobby, clinic, campus and trade show. Visitors talk to it naturally; it answers in multiple languages, uses the customer\u2019s knowledge, and takes real actions instead of just chatting.',
        media: {
          kind: 'browser',
          url: 'dva.cancom-ds.de',
          href: 'https://dva.cancom-ds.de/',
          title: 'Digital Voice Agent',
          subtitle:
            'Voice-first AI assistant for reception, lobby and trade-show touchpoints — multilingual, action-capable, tenant-sovereign.',
          imageSrc: digitalVoiceAgentImage.src,
          imageWidth: digitalVoiceAgentImage.width,
          imageHeight: digitalVoiceAgentImage.height,
        },
      },
      {
        id: 'sovereign',
        label: 'Sovereign AI Stack',
        title: 'Sovereign AI from DGX Spark prototypes to scaled production',
        body:
          'I concept the company-wide AI strategy and portfolio for the on-prem market — and translate it into a customer journey that starts with the DGX Spark for rapid prototyping, all the way to DGX H200 clusters for scaled production. Hands-on inference optimisation on the NVIDIA AI Enterprise stack, plus webinars and developer briefings to enable customers along the way.',
        media: {
          kind: 'video',
          src: 'https://player.vimeo.com/video/1188051694?h=c0a5436c6d&badge=0&autopause=0&player_id=0&app_id=58479',
          title: 'DGX Spark — technical demo I scripted and built',
        },
      },
    ],
  },

  {
    id: 'ainleuchtend',
    company: 'AInleuchtend',
    title: 'Founder',
    period: 'Sep 2023 — Present',
    location: 'Munich, Germany',
    logo: logoAInleuchtend,
    headline:
      'My own consultancy — advising, training and building AI for the people who decide.',
    summary:
      'AInleuchtend is the company I founded to make AI accessible, actionable and impactful. I advise organisations and executives on AI strategy, build custom AI software, and run 100+ workshops, talks and trainings across Germany — from city halls and Volkshochschule classrooms to global enterprises and the office of a former Federal President.',
    tabs: [
      {
        id: 'overview',
        bullets: [
          'Executive advisory: two-day programme for former German President Christian Wulff and his office.',
          'Works-council advisory at Expedia on AI adoption and the impact on the workforce.',
          'Upskilling programme for KVB\u2019s ~200-person IT team.',
          '100+ Volkshochschule courses across Bavaria — bringing modern AI to the general public.',
        ],
        media: {
          kind: 'browser',
          url: 'ainleuchtend.de',
          href: 'https://www.ainleuchtend.de/',
          title: 'AInleuchtend',
          subtitle:
            'My consultancy — AI consulting, custom software and trainings across Germany.',
          imageSrc: ainleuchtendSiteImage.src,
          imageWidth: ainleuchtendSiteImage.width,
          imageHeight: ainleuchtendSiteImage.height,
        },
      },
    ],
  },

  {
    id: 'bmw',
    company: 'BMW',
    title: 'AI Researcher',
    period: 'Oct 2024 — May 2025',
    location: 'Munich, Germany',
    logo: logoBMW,
    headline:
      'Master\u2019s research on Retrieval-Augmented Generation — fine-tuning retrievers and generators on H100s.',
    summary:
      'My Master\u2019s thesis at BMW (1.4 grade) investigated how far fine-tuning of both retriever AND generator can push end-to-end RAG quality across very different domains. The goal: understand exactly where fine-tuning effort pays off — and where it doesn\u2019t. All training and inference ran on a 2× NVIDIA H100 DGX cluster with TensorRT-LLM, with a reusable evaluation pipeline that combined classical metrics with LLM-as-a-Judge. Alongside the research I published a series of short technical explainers — the same instinct that drives my workshops and pre-sales work today.',
    tabs: [
      {
        id: 'thesis',
        bullets: [
          'LoRA fine-tuning on LLaMA-3.1-8B and LLaMA-3.3-70B.',
          'Fine-tuned embedding models to lift retrieval quality measurably.',
          'Cross-domain study: how do retriever / generator gains transfer between domains?',
          'End-to-end evaluation pipeline with classical metrics + LLM-as-a-Judge.',
        ],
        media: {
          kind: 'articleGrid',
          eyebrow: 'Published explainers',
          caption:
            'Short, sharp technical explainers I published on LinkedIn alongside the research.',
          items: [
            {
              title: 'Context Engineering in 2 Minutes',
              label: 'Explainer',
              href: '/articles/context-engineering',
              image: { src: '/context_engineering.png' },
            },
            {
              title: 'Boost Your RAG Pipeline with Fine-Tuning',
              label: 'Tutorial',
              href: '/articles/rag-embedding-finetuning',
              image: { src: '/boost_rag.png' },
            },
            {
              title: 'Memory Requirements for Finetuning LLMs',
              label: 'Explainer',
              href: '/articles/linkedin-ai-video',
              image: { src: '/memory_requirements_llms.png' },
            },
          ],
        },
      },
    ],
  },

  {
    id: 'aqarios',
    company: 'Aqarios',
    title: 'Head of Operations',
    period: 'Apr 2023 — Apr 2025',
    location: 'Munich, Germany',
    logo: logoAqarios,
    headline:
      'Joined as backend developer, grew into Head of Operations leading 10+ engineers on the Luna Platform.',
    summary:
      'I started as a backend engineer shipping Python microservices, then grew into engineering leadership for Luna — Aqarios\u2019 production-grade quantum optimisation platform — leading a 10+ engineer team and owning the 2024 go-to-market end-to-end. Luna lets enterprises and researchers run optimisation problems on diverse quantum and classical backends through a single, consistent interface; my work spanned engineering, marketing and HR, with technical demos for SAP, BASF, Siemens and BMW.',
    tabs: [
      {
        id: 'overview',
        body:
          'Luna abstracts the hardware complexity behind one API. LunaSolve orchestrates classical and quantum solvers across QUBO, BQM, CQM and LP formats; LunaModel provides a full modelling toolset; LunaBench benchmarks algorithm/backend combinations end-to-end.',
        bullets: [
          'Owned engineering delivery across a 10+ engineer team — tech interviews, hiring, sprint cadence.',
          'Algorithms: QAOA, Fire Opal, FlexQAOA, VQE, simulated / quantum / population annealing, QAGA, SAGA, Tabu Search, SCIP.',
          'Backends: D-Wave, IBM Quantum (via Q-CTRL), IonQ, IQM, Rigetti + AWS/IBM/Aqarios simulators and classical solvers.',
          'Convention presence and technical demos for SAP, BASF, Siemens and BMW.',
        ],
        links: [
          { label: 'Luna documentation ↗', href: 'https://docs.aqarios.com/home/intro/' },
        ],
        media: {
          kind: 'browser',
          url: 'docs.aqarios.com/home/intro',
          href: 'https://docs.aqarios.com/home/intro/',
          title: 'Luna Platform',
          subtitle:
            'Integrated quantum optimisation — LunaSolve, LunaModel and LunaBench behind one API.',
          imageSrc: lunaSolveImage.src,
          imageWidth: lunaSolveImage.width,
          imageHeight: lunaSolveImage.height,
        },
      },
    ],
  },

  {
    id: 't4g',
    company: 'Tech4Germany',
    title: 'Engineering Fellow',
    period: 'Aug 2022 — Nov 2022',
    location: 'Berlin, Germany',
    logo: logoT4G,
    headline:
      '12-week Berlin fellowship building digital products inside the federal administration.',
    summary:
      'Tech4Germany is one of Germany\u2019s most selective tech fellowships — only 32 fellows are placed across federal ministries each year. I was the engineering fellow for the Federal Ministry of Finance, embedded in a cross-disciplinary squad that shipped a working investment-management dashboard prototype in 12 weeks.',
    tabs: [
      {
        id: 'overview',
        bullets: [
          'Embedded inside the Federal Ministry of Finance (BMF) for the full fellowship.',
          'Cross-disciplinary squad: product, design and engineering.',
          'Digitised parts of the federal investment-management workflow.',
          'Shipped a working prototype that handed off cleanly to the ministry team.',
        ],
        links: [
          {
            label: 'Tech4Germany fellowship ↗',
            href: 'https://digitalservice.bund.de/fellowships/tech4germany',
          },
        ],
      },
    ],
  },

  {
    id: 'adesso',
    company: 'Adesso SE',
    title: 'Software Engineer',
    period: 'Sep 2020 — Mar 2023',
    location: 'Munich, Germany',
    logo: logoAdesso,
    headline:
      'Software engineer & team leader — shipped a top-ranked iPadOS app and led an international team.',
    summary:
      'Two and a half years as a full-stack software engineer, including building and launching the iPadOS notetaking app "wryte" — from 0 → 1 alongside the founders through to App Store launch and post-launch iteration. The app temporarily ranked #1 in the App Store Education category, crossed 100k+ downloads and was featured on the German version of Shark Tank. In parallel I worked on a production deep-learning project for an Adesso client — my first taste of taking ML out of notebooks and into something a customer could rely on.',
    tabs: [
      {
        id: 'overview',
        bullets: [
          'Developed wryte from scratch with the founding team (Swift / SwiftUI) before the project scaled up through Adesso.',
          'Team leader for an international engineering team — owned App Store launch, releases and post-launch iteration.',
          '100k+ downloads, #1 App Store Education (DE) and a TV appearance on the German Shark Tank.',
          'Parallel production deep-learning project for an Adesso client — first ML work outside of notebooks.',
        ],
        media: {
          kind: 'browser',
          url: 'apps.apple.com/de/app/wryte-notizen',
          href: 'https://www.wryte.io/',
          title: 'wryte — Notizen in Schule schreiben',
          subtitle:
            'iPadOS notetaking app I built and launched while at Adesso — featured on the German Shark Tank.',
          imageSrc: wryteAppStoreImage.src,
          imageWidth: wryteAppStoreImage.width,
          imageHeight: wryteAppStoreImage.height,
        },
      },
    ],
  },
]

export const skills = [
  {
    category: 'GenAI & LLMs',
    items: [
      tech('Azure OpenAI'),
      tech('Azure OpenAI Realtime'),
      tech('OpenAI API'),
      tech('LLaMA-3.x', logoMeta),
      tech('Qwen'),
      tech('Nemotron', logoNvidia),
      tech('Fine-tuning (LoRA / QLoRA)'),
      tech('Embedding fine-tuning'),
    ],
  },
  {
    category: 'AI Engineering',
    items: [
      tech('LangChain'),
      tech('LangGraph'),
      tech('watsonx Orchestrate'),
      tech('Retrieval-Augmented Generation'),
      tech('Agentic workflows'),
      tech('Context engineering'),
      tech('Evaluation (RAGAS, DeepEval, LLM-as-a-Judge)'),
      tech('Langfuse'),
      tech('MCP'),
    ],
  },
  {
    category: 'Inference & Infrastructure',
    items: [
      tech('NVIDIA AI Enterprise', logoNvidia),
      tech('NIMs', logoNvidia),
      tech('TensorRT-LLM', logoNvidia),
      tech('vLLM'),
      tech('DGX Spark · H100 · H200', logoNvidia),
      tech('CUDA', logoNvidia),
      tech('LiveKit'),
      tech('Azure AI Foundry'),
      tech('Azure AI Search'),
      tech('Docker · Kubernetes'),
    ],
  },
  {
    category: 'Software Engineering',
    items: [
      tech('Python'),
      tech('TypeScript'),
      tech('FastAPI'),
      tech('Next.js · React'),
      tech('Swift / SwiftUI'),
      tech('PyTorch'),
      tech('HuggingFace'),
      tech('GitLab CI/CD'),
    ],
  },
]

export const heroKpis = [
  { value: '5+', label: 'Years in software & AI' },
  { value: '100+', label: 'Workshops, talks & trainings delivered' },
  { value: '20+', label: 'AI certifications (NVIDIA DLI, DeepLearning.AI, Coursera)' },
  { value: 'M.Sc.', label: 'Computer Science, LMU Munich' },
]

export const education = [
  {
    school: 'Ludwig-Maximilians-Universität München',
    degree: 'M.Sc. Computer Science',
    period: '2022 — 2024',
    note: 'Thesis at BMW: "Fine-Tuning Retriever and Generator Components in RAG — a Cross-Domain Study" (1.4).',
  },
  {
    school: 'University of Applied Sciences Munich',
    degree: 'B.Sc. Business Informatics',
    period: '2018 — 2022',
    note: 'Bachelor thesis: "Natural Language Processing — Effort Estimation in Agile Projects" (1.8).',
  },
]

export const certifications = [
  '20+ AI certifications across NVIDIA Deep Learning Institute, DeepLearning.AI and Coursera',
  'Covering LLMs, RAG, Agents, Evaluation, LangChain, LangGraph and MCP',
  'HackaTUM 2023 (TU Munich) · Kaggle: HuBMAP — Hacking the Human Vasculature',
  'LLaMA-2 implemented from scratch in PyTorch for research',
]

export const languages = [
  { name: 'German', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Spanish', level: 'Beginner' },
  { name: 'Mandarin', level: 'Beginner' },
]

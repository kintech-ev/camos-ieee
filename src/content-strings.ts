export const conference = {
  shortName: 'CAMoS 2027',
  name: 'International Conference on Connectivity, Automation and Mobile Systems',
  dates: '2–6 August 2027',
  startDate: '2027-08-02',
  endDate: '2027-08-06',
  city: 'Split',
  country: 'Croatia',
  format: 'Hybrid conference',
  organizer: 'KINTECH',
  submissionUrl: 'https://easychair.org/cfp/camos2027',
  tagline: 'Connecting physical and digital worlds through connectivity, automation and mobile systems.',
  summary:
    'CAMoS 2027 brings together research, engineering and practice across connectivity, automation and mobile systems, with a deliberate focus on how physical and digital systems increasingly interact.',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Call for Papers', href: '/call-for-papers' },
  { label: 'Themes', href: '/#themes' },
  { label: 'Organization', href: '/organization' },
  { label: 'Venue & Registration', href: '/venue-registration' },
];

export const quickLinks = [
  { label: 'Call for Papers', href: '/call-for-papers' },
  { label: 'Scientific Themes', href: '/#themes' },
  { label: 'Organization', href: '/organization' },
  { label: 'Venue & Registration', href: '/venue-registration' },
];

export const importantUpdates = [
  {
    date: 'September 2026',
    title: 'CAMoS 2027 planning',
    body: 'The conference is being structured for 2–6 August 2027 in Split, Croatia, with hybrid participation planned.',
  },
  {
    date: 'Planning phase',
    title: 'Rolling review and notification',
    body: 'Submissions are planned to be evaluated continuously, with decisions communicated as reviews are completed.',
  },
  {
    date: 'Available',
    title: 'Paper submission CFP available',
    body: 'The EasyChair CFP link is available. Conference registration remains separate; final dates, rates and venue details are still to be announced.',
  },
];

export const themes = [
  {
    slug: 'connectivity',
    label: 'Connectivity',
    accent: 'connectivity',
    chair: 'Prof. Dr.-Ing. João Paulo Javidi da Costa',
    lead: 'The foundation connecting physical and digital ecosystems.',
    description:
      'In the physical domain, connectivity links sensors, actuators, machines, robots, vehicles, infrastructure and people. In the digital domain, it links software systems, services, digital twins, virtual environments, data spaces and intelligent or autonomous agents.',
    bridge:
      'Physical–digital connectivity bridges both domains, allowing connected sensing to update digital representations and digital decisions to influence physical processes through actuators and control systems.',
  },
  {
    slug: 'automation',
    label: 'Automation',
    accent: 'automation',
    chair: 'Prof. Dr. Edison Pignaton de Freitas',
    lead: 'From physical systems to autonomous digital processes.',
    description:
      'Automation spans physical systems such as robots, production machinery, autonomous vehicles and building systems, as well as virtual automation through software agents, automated workflows, simulations and autonomous digital entities.',
    bridge:
      'Cyber-physical automation connects both domains: decisions in digital environments influence physical processes, while physical systems continuously update their digital counterparts.',
  },
  {
    slug: 'mobile-systems',
    label: 'Mobile Systems',
    accent: 'mobile-systems',
    chair: 'Dr.-Ing. habil. (Interim Prof.) Tai Fei',
    lead: 'Connected systems operating across physical and virtual environments.',
    description:
      'Mobile systems include connected vehicles, robots and devices operating in physical space, as well as software agents and representations moving through digital twins, immersive environments and telepresence systems.',
    bridge:
      'CAMoS examines how mobile systems depend on intelligent, connected and interoperable infrastructure.',
  },
];

export const scopeGroups = [
  {
    title: 'Automation, Control and Robotics',
    items: [
      'Control theory, estimation, optimization and decision systems',
      'Industrial automation, process control and smart manufacturing',
      'Robotics, cobots, human–robot interaction and multi-agent systems',
      'Autonomous systems, embedded control and real-time computing',
      'Digital twins, cyber-physical systems and simulation',
      'Sensing, machine vision, instrumentation and metrology',
      'Functional safety, verification, resilience and certification',
    ],
  },
  {
    title: 'Mobile Systems, Vehicles and Transportation',
    items: [
      'Electric, autonomous, connected and cooperative vehicles',
      'Intelligent transport, traffic management and smart logistics',
      'Road, rail, maritime, aviation, drones and micromobility',
      'Mobility-as-a-Service, public transport and fleet operations',
      'Perception, localization, mapping, planning and decision-making',
      'Vehicle dynamics, control, testing, simulation and digital twins',
      'Virtual mobility, telepresence and navigation in immersive environments',
    ],
  },
  {
    title: 'Connectivity, Communications and Networks',
    items: [
      '5G/6G, beyond-5G, future Internet and ubiquitous connectivity',
      'V2X, C-V2X and cooperative communications',
      'IoT/IIoT, sensor networks, LPWAN and satellite connectivity',
      'Edge, fog and cloud computing; distributed intelligence',
      'Software-defined networking, network slicing and Open RAN',
      'QoS/QoE, reliability, spectrum and network management',
      'Cybersecurity, privacy, trust, identity and secure protocols',
    ],
  },
  {
    title: 'AI, Data and Intelligent Systems',
    items: [
      'Machine learning, deep learning and reinforcement learning',
      'Generative, foundation and multimodal models; edge AI',
      'Data fusion, knowledge graphs, reasoning and decision support',
      'Explainable, trustworthy, safe and responsible AI',
      'Federated, continual and privacy-preserving learning',
      'Synthetic data, datasets, benchmarks and reproducible research',
      'Autonomous agents and digital entities',
    ],
  },
  {
    title: 'Energy, Infrastructure and Sustainability',
    items: [
      'Smart grids, microgrids, renewables and power electronics',
      'Electrification, storage, hydrogen and charging infrastructure',
      'Smart cities, buildings, factories, ports, airports and campuses',
      'Energy-aware automation, communications and mobility',
      'Resilient infrastructure, climate adaptation and disaster response',
      'Green communications, carbon-aware computing and sustainable AI',
    ],
  },
  {
    title: 'Applications, Standards and Emerging Topics',
    items: [
      'Connected autonomous systems and cooperative perception',
      'Industrial, service, agricultural and construction robotics',
      'Aerospace, maritime, space and remote autonomous platforms',
      'Testbeds, living labs, open-source tools and engineering education',
      'Standards, interoperability, regulation, economics and policy',
      'Ethics, inclusion, societal impact and human-centered engineering',
    ],
  },
];

export const submissionCategories = [
  {
    title: 'Full Research Papers',
    description: 'Mature original research and validated systems.',
  },
  {
    title: 'Short / Work-in-Progress Papers',
    description: 'Novel ideas, preliminary results and emerging work.',
  },
  {
    title: 'Industry & Application Papers',
    description: 'Deployments, case studies, lessons learned and technology transfer.',
  },
  {
    title: 'Data, Benchmark & Systems Papers',
    description: 'Reusable datasets, testbeds, tools, platforms and evaluation methods.',
  },
  {
    title: 'Demos, Posters & Doctoral Forum',
    description: 'Demonstrations, posters and doctoral research presentations.',
  },
  {
    title: 'Special Sessions, Workshops & Tutorials',
    description: 'Focused proposals for emerging or interdisciplinary areas.',
  },
];

export const registrationTiers = [
  {
    name: 'Super Early Bird',
    status: 'Rate to be announced',
    note: 'Planned first registration tier. Final fee depends on the approved conference cost model.',
  },
  {
    name: 'Early Bird',
    status: 'Rate to be announced',
    note: 'Planned reduced-rate period after Super Early Bird registration.',
  },
  {
    name: 'Regular Registration',
    status: 'Rate to be announced',
    note: 'Standard registration tier. Final dates and fees will be published before registration opens.',
  },
];

export const statusFacts = {
  submissionPortal: 'EasyChair CFP available',
  venue: 'Final venue under local verification',
  review: 'Rolling review / notification planned',
  publication:
    'Accepted conference papers are planned for preparation toward IEEE Xplore submission, subject to the required approvals, agreements and publication requirements.',
  awards: 'Best Paper Awards are planned across thematic areas.',
  support:
    'Registration-fee reductions of up to 50% may be granted to objectively justified and demonstrably under-represented groups. Eligibility, scope and evidence requirements will be documented and published transparently before registration opens. Discounts will not be cumulative.',
  journal:
    'Selected CAMoS papers of particularly high scientific quality may be invited to submit a substantially extended version to the separate KINTECH Journal initiative. Any associated registration-fee waiver or reimbursement will be governed by the final published rules.',
};

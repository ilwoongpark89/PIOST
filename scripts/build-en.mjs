#!/usr/bin/env node
/* ==========================================================================
   build-en.mjs — generates en/index.html from index.html (Korean SoT).

   Usage: node scripts/build-en.mjs
   Run after ANY content change to index.html, commit both files.

   The EN dictionary below mirrors every data-i18n / data-i18n-html /
   data-i18n-aria key in index.html. The build fails loudly if the two
   ever drift (missing or orphan keys), so parity is checked at build
   time rather than discovered in production.
   ========================================================================== */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/* ------------------------------------------------------------ dictionary */

const EN = {
    'nav-about': 'About',
    'nav-challenge': 'The Challenge',
    'nav-market': 'Market',
    'nav-solutions': 'Solutions',
    'nav-roadmap': 'Roadmap',
    'nav-team': 'Team',
    'nav-contact': 'Contact',

    'hero-eyebrow': 'Thermal Energy Storage & Utilization',
    'hero-desc': 'PIOST develops thermal energy storage (TES) and Carnot Battery systems that store surplus renewable energy as heat and convert it back to electricity when needed—bridging the gap between intermittent renewables and reliable grid power.',
    'hero-cta1': 'Learn More',
    'hero-cta2': 'Get in Touch',
    'hero-m1l': 'High-Temp Storage',
    'hero-m1v': '1,000°C+',
    'hero-m2l': 'Patent Applications',
    'hero-m2v': '12+',
    'hero-m3l': 'System Lifetime',
    'hero-m3v': '30yr+',

    'about-eyebrow': 'About Us',
    'about-title': 'Thermal Energy for Carbon Neutrality',
    'about-lead': 'PIOST Inc. is a deep-tech startup founded in 2025, dedicated to accelerating carbon neutrality through thermal energy storage and utilization. We develop technologies that store surplus renewable energy as high-temperature heat and convert it back to usable energy when needed.',
    'about-body': 'The global transition to renewable energy faces a critical challenge: solar and wind power are intermittent, but energy demand is constant. PIOST addresses this gap with cost-effective thermal energy storage using abundant materials like rock and sand. Our Carnot Battery technology enables long-duration storage at a fraction of the cost of lithium-ion batteries—paving the way for reliable, 24/7 clean energy.',

    'ch-eyebrow': 'The Challenge',
    'ch-title': 'Why Thermal Energy Must Be Stored',
    'tes-q1': 'What is Thermal Energy Storage (TES)?',
    'tes-a1': 'Thermal Energy Storage (TES) is a technology that stores energy in the form of heat for later use. Unlike batteries that store electricity chemically, TES systems capture and retain thermal energy in materials like rock, sand, or molten salt at high temperatures. When energy is needed, this stored heat can be released for heating applications or converted back to electricity through steam turbines.',
    'tes-q2': 'Why TES Matters for the Energy Transition',
    'tes-a2a': "The global shift to renewable energy faces a fundamental challenge: the sun doesn't always shine, and the wind doesn't always blow. This intermittency creates a mismatch between when energy is produced and when it is consumed. Without effective storage, excess renewable energy is curtailed, and fossil fuel plants must fill the gaps.",
    'tes-a2b': "TES offers a compelling solution. Heat can be stored for extended periods with minimal loss, making it ideal for long-duration storage measured in hours or days. The materials—rock and sand—are abundant, inexpensive, and environmentally benign. Unlike lithium-ion batteries, TES systems don't rely on critical minerals or present fire hazards.",
    'tes-card-t': 'The TES Advantage',
    'tes-card-p1': 'TES technology has already been proven at scale in concentrated solar power (CSP) plants worldwide, with over 6.5 GW of installed capacity. The materials—rock, sand, and steel—are abundant, low-cost, and free from supply chain risks associated with lithium and rare earth elements.',
    'tes-card-p2': 'With system lifetimes exceeding 30 years and minimal degradation, TES offers a compelling total cost of ownership for long-duration storage applications ranging from residential heating to grid-scale energy management.',

    'carnot-title': 'Why Carnot Battery?',
    'ca-q1': 'What is a Carnot Battery?',
    'ca-a1a': 'A Carnot Battery is an advanced energy storage system that converts electricity to heat for storage, then converts that heat back to electricity when needed. Named after the French physicist Sadi Carnot who established the theoretical limits of heat engine efficiency, this technology represents the cutting edge of thermal energy storage.',
    'ca-a1b': 'The process works in three stages: First, excess electricity (typically from renewable sources) powers electric heaters to raise the temperature of a thermal storage medium to very high temperatures—in our case, exceeding 1,000°C. Second, this thermal energy is retained in insulated storage tanks with minimal loss. Third, when electricity is needed, the stored heat generates steam that drives a turbine to produce power.',
    'ca-q2': 'Advantages Over Alternatives',
    'ca-a2a': 'Lithium-ion batteries dominate short-duration storage (2–4 hours) but become prohibitively expensive for longer durations. Pumped hydro offers long duration but requires specific geography. Carnot Batteries fill this gap: cost-effective storage for 8–24+ hours using widely available materials and proven industrial components.',
    'ca-a2b': 'The economics are compelling. Thermal storage costs 10–20x less per kWh than batteries at high temperatures. Modern Carnot Battery systems achieve 50–70% round-trip efficiency—competitive with other technologies when considering total system costs and lifespan.',
    'drv-title': 'Why Long-Duration Storage Matters',
    'drv1-t': 'Net-Zero Infrastructure',
    'drv1-d': 'The IEA projects that achieving net-zero by 2050 will require over 2,000 GW of long-duration energy storage capacity globally.',
    'drv2-t': 'Lithium-Ion Cost Barrier',
    'drv2-d': 'Beyond 8 hours of storage, lithium-ion battery costs per kWh increase sharply. Thermal storage becomes more economical as duration extends.',
    'drv3-t': 'Global Policy Support',
    'drv3-d': 'Major economies including the EU, US, and Korea are expanding R&D funding and subsidies for long-duration storage technologies.',

    'mk-eyebrow': 'Market Opportunity',
    'mk-title': 'The Growing Demand for Energy Storage',
    'mk-desc': 'Global energy storage capacity must increase dramatically to meet net-zero targets. Thermal storage offers the lowest-cost solution for long-duration applications.',

    /* The EN stat-card set intentionally differs from KR (inherited from the
       original site): EN keeps the Europe PV stat for global investors,
       KR keeps the NREL cost-saving stat. Each card swaps as a whole. */
    'st1-num': '10', 'st1-unit': 'x', 'st1-label': 'Market Growth',
    'st1-desc': 'Global TES market projected to grow more than tenfold by 2035', 'st1-src': 'McKinsey',
    'st2-num': '670', 'st2-unit': 'GW', 'st2-label': 'PV Capacity in Europe',
    'st2-desc': 'Photovoltaic capacity projected to reach 670GW by 2028', 'st2-src': 'European Environment Agency',
    'st3-num': '49', 'st3-unit': '%', 'st3-label': 'Energy for Heating',
    'st3-desc': 'Heat accounts for nearly half of global energy demand', 'st3-src': 'International Energy Agency',
    'st4-num': '1,500', 'st4-unit': 'GW', 'st4-label': 'Storage Target 2030',
    'st4-desc': 'Global energy storage capacity target to achieve 6x growth by 2030', 'st4-src': 'COP28 Global Stocktake',
    'st5-num': '11.7', 'st5-unit': '%', 'st5-label': 'TES CAGR',
    'st5-desc': 'TES market expected to reach $10.9B by 2030', 'st5-src': 'Grand View Research',
    'st6-num': '6.5', 'st6-unit': 'GW', 'st6-label': 'Global CSP Capacity',
    'st6-desc': 'Total installed concentrated solar power capacity in 2022', 'st6-src': 'IRENA',

    'mn-title': 'Why Start in Mongolia?',
    'mn1-t': 'Extreme Heating Demand',
    'mn1-d': 'Average winter temperature of -25°C, 8 months of heating required. The most heating-dependent market in the world.',
    'mn2-t': 'Abundant Renewables',
    'mn2-d': '2,200GW solar and 1,100GW wind potential. Ideal for low-cost renewable-powered thermal storage.',
    'mn3-t': 'Government Support',
    'mn3-d': '30% renewable energy target by 2030. Strong policy push for clean heating solutions.',

    'cmp-title': 'Technology Comparison',
    'cmp-desc': 'How PIOST compares to other thermal energy storage providers',
    'cmp-h0': 'Category', 'cmp-h1': 'Company A', 'cmp-h2': 'Company B', 'cmp-h3': 'Company C', 'cmp-h4': 'PIOST Inc.',
    'cmp-r1c0': 'Max Temperature', 'cmp-r1c1': '750°C', 'cmp-r1c2': '450°C', 'cmp-r1c3': '600-800°C', 'cmp-r1c4': '1,000°C+',
    'cmp-r2c0': 'Storage Material', 'cmp-r2c1': 'Crushed rocks', 'cmp-r2c2': 'Concrete (HEATCRETE)', 'cmp-r2c3': 'Volcanic rocks', 'cmp-r2c4': 'Composite rock & sand',
    'cmp-r3c0': 'Heat Transfer', 'cmp-r3c1': 'Resistive heating', 'cmp-r3c2': 'Tube heat exchanger', 'cmp-r3c3': 'Hot air circulation', 'cmp-r3c4': 'Direct quenching & tube-in-tube',
    'cmp-r4c0': 'System Type', 'cmp-r4c1': 'Modular', 'cmp-r4c2': 'Modular', 'cmp-r4c3': 'Plant-scale', 'cmp-r4c4': 'Modular',

    'app-title': 'Applications',
    'app-desc': 'Where our technology creates impact',
    'app1-t': 'District Heating', 'app1-r': 'Cold Climate Regions',
    'app1-d': '24/7 clean heating for residential and commercial buildings using stored renewable energy',
    'app2-t': 'Industrial Heat', 'app2-r': 'Hard-to-Abate Sectors',
    'app2-d': 'High-temperature process heat (500–1,000°C) for steel, cement, and chemical manufacturing',
    'app3-t': 'Renewable Firming', 'app3-r': 'Solar & Wind Integration',
    'app3-d': 'Capture excess generation and dispatch during peak demand to maximize renewable utilization',
    'app4-t': 'Grid Storage', 'app4-r': 'Long-Duration (8–24h+)',
    'app4-d': 'Utility-scale energy storage to balance supply and demand, replacing fossil fuel peaker plants',

    'sol-eyebrow': 'Our Approach',
    'sol-title': 'From Home to Grid',
    'sol-desc': 'Modular TES systems designed for deployment at multiple scales.',
    'sol1-type': 'Scale 1', 'sol1-t': 'Single Household',
    'sol1-d': 'Compact TES units for individual homes. Ideal for off-grid heating in remote areas with rooftop solar or small wind turbines.',
    'sol1-f1': 'Independent heating system', 'sol1-f2': 'Off-grid capability', 'sol1-f3': 'Renewable energy integration',
    'sol2-type': 'Scale 2', 'sol2-t': 'Small Building',
    'sol2-d': 'TES systems for multi-unit residential buildings and small commercial facilities. Shared infrastructure reduces per-unit costs.',
    'sol2-f1': 'Multi-unit building support', 'sol2-f2': 'Shared heating network', 'sol2-f3': 'Economies of scale',
    'sol3-type': 'Scale 3', 'sol3-t': 'Regional District',
    'sol3-d': 'Large-scale TES for district heating networks and Carnot Battery applications. Grid-connected systems for utility-scale energy storage.',
    'sol3-f1': 'District heating network', 'sol3-f2': 'Carnot Battery integration', 'sol3-f3': 'Grid-scale storage capacity',

    'str-title': 'Our Strategy & Technology',
    'str-desc': "PIOST's integrated approach combines proven thermal storage with advanced heat exchange technology.",
    'pl1-t': 'Multi-Scale TES Development',
    'pl1-d': 'Designing thermal energy storage systems for deployment across multiple scales—from single households to buildings and district heating networks.',
    'pl1t1-t': 'High-Temperature Heating System',
    'pl1t1-d': 'Direct condensation heat exchange technology enabling efficient charging to 1,000°C+ using steam as the heat transfer medium.',
    'pl1t1-tag': 'Heating Method',
    'pl1t2-t': 'Advanced Thermal Insulation',
    'pl1t2-d': 'Multi-layer insulation engineering with rock & sand composite medium, minimizing heat loss during long-duration storage.',
    'pl1t2-tag': 'Heat Loss Reduction',
    'pl2-t': 'Charge & Discharge Optimization',
    'pl2-d': 'Developing optimal operation strategies for diverse TES configurations, charging methods, and discharge patterns.',
    'pl2t1-t': 'Charge/Discharge Simulation',
    'pl2t1-d': 'Computational modeling for diverse operating scenarios, optimizing charging methods, duration, and discharge patterns.',
    'pl2t1-tag': 'Simulation',
    'pl2t2-t': 'Technical Limit Prediction',
    'pl2t2-d': 'Physics-based and data-driven models to predict performance boundaries under various operating conditions.',
    'pl2t2-tag': 'Limit Prediction',
    'pl3-t': 'Stable Steam Generation',
    'pl3-d': 'Ensuring consistent, high-quality steam output essential for efficient power generation in Carnot Battery systems.',
    'pl3t1-t': 'Hybrid Steam Generation',
    'pl3t1-d': 'Once-through and quenching hybrid system for stable steam quality control under varying temperature conditions.',
    'pl3t1-tag': 'Steam Methodology',
    'pl3t2-t': 'AI-based Operation Control',
    'pl3t2-d': 'Reinforcement learning-based digital twin for real-time optimal control, ensuring consistent steam quality.',
    'pl3t2-tag': 'AI Control',

    'fnd-title': 'Built on Strong Foundations',
    'ms1-t': 'Deep Research Expertise',
    'ms1-d': 'Extensive research experience in steam generation, two-phase flow, and high-temperature thermal systems',
    'ms2-t': '12+ Patent Applications',
    'ms2-d': 'Filed patents covering core TES and heat exchange technologies',
    'ms3-t': 'Global Partnership',
    'ms3-d': 'MOU signed with YN E Tulga for testbed partnership to validate TES under extreme cold-climate conditions',
    'ms4-t': 'University Lab Spinoff',
    'ms4-d': "Founded from Inha University's MFTEL (Multiphase Flow & Thermal Engineering Lab), bringing academic research into commercial reality.",
    'visit-lab': 'Visit MFTEL Lab',

    'rm-eyebrow': 'Roadmap',
    'rm-title': 'Our Journey to Market',
    'rm-desc': 'From prototype validation to global commercialization.',
    'ph1-badge': 'Now',
    'ph1-t': 'Technology Validation & Seed Stage',
    'ph1-i1': 'Complete TES prototype development and lab-scale demonstration',
    'ph1-i2': 'Validate core technologies: 1,000°C+ storage, hybrid steam generation',
    'ph1-i3': 'Launch Mongolia pilot project for cold-climate validation',
    'ph1-i4': 'Secure seed funding and accelerator program participation',
    'ph1-i5': 'File PCT patents for international IP protection',
    'ph2-t': 'Pilot Deployment & Series A',
    'ph2-i1': 'Deploy commercial-scale pilot systems in Mongolia and Europe',
    'ph2-i2': 'Obtain CE marking and international product certifications',
    'ph2-i3': 'Apply to Horizon Europe, EIC Accelerator, and KOICA programs',
    'ph2-i4': 'Establish strategic partnerships with European energy companies',
    'ph2-i5': 'Raise Series A funding for manufacturing scale-up',
    'ph3-t': 'Commercial Scale & Expansion',
    'ph3-i1': 'Launch Heating-as-a-Service (HaaS) subscription model',
    'ph3-i2': 'Establish local manufacturing in Mongolia',
    'ph3-i3': 'Expand exports to Central Asia',
    'ph3-i4': 'Participate in Korean public sector projects',
    'ph3-i5': 'Target break-even and path to profitability',
    'ph4-t': 'Market Expansion',
    'ph4-i1': 'Deploy systems in large Korean residential complexes',
    'ph4-i2': 'Expand to Kazakhstan, Kyrgyzstan, and broader Central Asia',
    'ph4-i3': 'Deploy grid-scale Carnot Battery systems',
    'ph4-i4': 'Build energy independence ecosystem',

    'tr-title': 'Track Record',
    'trc1': 'Business Development',
    'pg1-n': 'Company Founded', 'pg1-d': 'PIOST Inc. established',
    'pg2-n': 'IR Activities', 'pg2-d': 'Regular investor relations',
    'pg3-n': 'Pitch Competition', 'pg3-d': 'Finals selection',
    'trc2': 'Support Programs',
    'pg4-n': 'Lab Startup Program', 'pg4-d': 'University research commercialization',
    'pg5-n': 'Startup Success Package', 'pg5-d': 'Youth Startup Academy',
    'pg6-n': 'Youth Startup Incubation', 'pg6-d': 'Incheon Startup Park',
    'trc3': 'Global Expansion',
    'pg7-n': 'Gladiator Program', 'pg7-d': 'MOU signed with YN E Tulga',
    'pg8-n': 'PickPack Partnership', 'pg8-d': 'Global R&D Creator collaboration',
    'pg9-n': 'KOMIR Partnership', 'pg9-d': 'Strategic international partnership',
    'tb1-l': 'Founded',
    'tb2-l': 'Startup Programs',
    'tb3-l': 'Mentoring Sessions',
    'tb4-l': 'International Partners',
    'tb5-l': 'Patent Applications',

    'tm-eyebrow': 'Leadership',
    'tm-title': 'Team',
    'tm-desc': 'Combining business expertise with deep technical knowledge in thermal engineering.',
    'ceo-n': 'Junbeom Song', 'ceo-t': 'CEO & Co-Founder', 'ceo-r': 'Market analysis and business strategy',
    'cto-n': 'Il Woong Park', 'cto-t': 'CTO & Co-Founder', 'cto-r': 'R&D planning and technology development',
    'mi-title': 'Why We Do This',
    'mi-desc': 'We believe clean energy should be available 24/7—not just when the sun shines or the wind blows. Our team is dedicated to building the infrastructure for a fully renewable grid, making decarbonization practical and affordable for everyone.',
    'g1-v': '2050', 'g1-l': 'Net-Zero Target',
    'g2-v': '24/7', 'g2-l': 'Clean Energy',
    'g3-v': '100%', 'g3-l': 'Renewable Grid',
    'join-t': 'Join Us',
    'join-d': 'Help us build the future of clean energy.',
    'job1-type': 'Engineering', 'job1-t': 'Thermal Systems Engineer',
    'job1-d': 'Design and optimize high-temperature thermal storage systems. Experience with heat transfer and CFD preferred.',
    'job2-type': 'Engineering', 'job2-t': 'Controls & Simulation Engineer',
    'job2-d': 'Develop digital twins and AI-based control systems for TES operation optimization.',
    'job3-type': 'Business', 'job3-t': 'Business Development',
    'job3-d': 'Drive partnerships and market expansion in Europe and Asia. Energy sector experience valued.',
    'apply': 'Apply Now',

    'ct-eyebrow': 'For Investors',
    'ct-title': 'Partner With Us',
    'ct-desc': "Interested in investing or exploring partnership opportunities? We'd love to hear from you.",
    'inv-t': 'Investment & Partnership Inquiries',
    'inv-d': 'PIOST is currently seeking seed funding to accelerate prototype development and pilot deployments. We welcome conversations with investors, strategic partners, and energy companies interested in thermal storage solutions.',
    'hl1-l': 'Stage', 'hl1-v': 'Pre-Seed / Seed',
    'hl2-l': 'Focus', 'hl2-v': 'Tech Validation & Product',
    'hl3-l': 'Market', 'hl3-v': 'Global Cold Regions',
    'contact-us': 'Contact Us',
    'loc': 'Incheon, South Korea',

    'ft-tag': 'Advancing Sustainable Thermal Energy Storage Technology',
    'copyright': '© 2025 PIOST Inc. All rights reserved.',

    'skip': 'Skip to content'
};

/* keys whose values are raw HTML, applied via innerHTML-equivalent */
const EN_HTML = {
    'hero-title': 'Accelerating <em>Carbon Neutrality</em><br>Through Heat'
};

/* aria-label strings */
const EN_ARIA = {
    'aria-home': 'PIOST home',
    'aria-main-nav': 'Main menu',
    'aria-lang': 'Language',
    'aria-menu': 'Menu',
    'aria-footer-nav': 'Footer menu'
};

/* head metadata for the EN page */
const EN_META = {
    title: 'PIOST Inc. — Thermal Energy Storage &amp; Carnot Battery',
    desc: 'PIOST develops thermal energy storage (TES) and Carnot Battery systems that store surplus renewable energy as heat for heating and power. Safe, long-lasting, economical long-duration storage.',
    ogDesc: 'We store renewable electricity as heat and deliver heating and power on demand. Warm winters without fossil fuels — built by PIOST.',
};

/* --------------------------------------------------------------- build */

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let html = readFileSync(join(ROOT, 'index.html'), 'utf8');

/* parity gate: file keys vs dictionary keys */
const fileTextKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
const fileHtmlKeys = [...html.matchAll(/data-i18n-html="([^"]+)"/g)].map(m => m[1]);
const fileAriaKeys = [...html.matchAll(/data-i18n-aria="([^"]+)"/g)].map(m => m[1]);

const missing = [
    ...fileTextKeys.filter(k => !(k in EN)),
    ...fileHtmlKeys.filter(k => !(k in EN_HTML)),
    ...fileAriaKeys.filter(k => !(k in EN_ARIA)),
];
const orphans = [
    ...Object.keys(EN).filter(k => !fileTextKeys.includes(k)),
    ...Object.keys(EN_HTML).filter(k => !fileHtmlKeys.includes(k)),
    ...Object.keys(EN_ARIA).filter(k => !fileAriaKeys.includes(k)),
];
if (missing.length || orphans.length) {
    if (missing.length) console.error('✗ dictionary missing keys:', missing.join(', '));
    if (orphans.length) console.error('✗ orphan dictionary keys (not in index.html):', orphans.join(', '));
    process.exit(1);
}

/* element text replacement */
let replaced = 0;
for (const [key, val] of Object.entries(EN)) {
    const re = new RegExp(`(<([a-zA-Z0-9]+)\\b[^>]*?data-i18n="${key}"[^>]*>)[\\s\\S]*?(</\\2>)`, 'g');
    html = html.replace(re, (_, open, _tag, close) => { replaced++; return open + escapeHtml(val) + close; });
}
for (const [key, val] of Object.entries(EN_HTML)) {
    const re = new RegExp(`(<([a-zA-Z0-9]+)\\b[^>]*?data-i18n-html="${key}"[^>]*>)[\\s\\S]*?(</\\2>)`, 'g');
    html = html.replace(re, (_, open, _tag, close) => { replaced++; return open + val + close; });
}
for (const [key, val] of Object.entries(EN_ARIA)) {
    const re = new RegExp(`aria-label="[^"]*"([^>]*?data-i18n-aria="${key}")`, 'g');
    html = html.replace(re, (_, rest) => { replaced++; return `aria-label="${val}"${rest}`; });
}

/* every key present in the file must have been rewritten at least once */
const expected = new Set([...fileTextKeys, ...fileHtmlKeys, ...fileAriaKeys]).size;
if (replaced < expected) {
    console.error(`✗ replaced ${replaced} elements but file has ${expected} distinct keys — regex missed some`);
    process.exit(1);
}

/* head + language metadata */
html = html
    .replace('<html lang="ko">', '<html lang="en">')
    .replace(/<title>[^<]*<\/title>/, `<title>${EN_META.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${EN_META.desc}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${EN_META.title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${EN_META.ogDesc}$2`)
    .replace('<meta property="og:url" content="https://piost.kr/">', '<meta property="og:url" content="https://piost.kr/en/">')
    .replace('<meta property="og:locale" content="ko_KR">', '<meta property="og:locale" content="en_US">')
    .replace('<meta property="og:locale:alternate" content="en_US">', '<meta property="og:locale:alternate" content="ko_KR">')
    .replace('<meta property="og:image:alt" content="PIOST 로고">', '<meta property="og:image:alt" content="PIOST logo">')
    .replace('<link rel="canonical" href="https://piost.kr/">', '<link rel="canonical" href="https://piost.kr/en/">');

/* language toggle: EN becomes the active page */
html = html
    .replace('<a href="/en/" class="lang-btn" lang="en" hreflang="en">EN</a>',
        '<a href="/en/" class="lang-btn is-active" lang="en" hreflang="en" aria-current="true">EN</a>')
    .replace('<a href="/" class="lang-btn is-active" lang="ko" hreflang="ko" aria-current="true">KR</a>',
        '<a href="/" class="lang-btn" lang="ko" hreflang="ko">KR</a>');

/* provenance marker */
html = html.replace('<head>', '<head>\n    <!-- GENERATED FILE — do not edit. Source: /index.html + scripts/build-en.mjs -->');

mkdirSync(join(ROOT, 'en'), { recursive: true });
writeFileSync(join(ROOT, 'en', 'index.html'), html);
console.log(`✓ en/index.html generated (${replaced} elements translated, ${expected} keys verified)`);

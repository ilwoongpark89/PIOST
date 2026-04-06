// PIOST Inc. - Premium Interactive Website
// Clean, sophisticated animations for investor-ready presentation

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // Language Toggle (EN/KR)
    // ============================================
    const translations = {
        en: {
            // Hero
            heroLabel: "Thermal Energy Storage & Utilization",
            heroLine1: "Accelerating",
            heroLine2: "Carbon Neutrality",
            heroLine3: "Through Heat",
            heroDesc: "PIOST develops thermal energy storage (TES) and Carnot Battery systems that store surplus renewable energy as heat and convert it back to electricity when needed—bridging the gap between intermittent renewables and reliable grid power.",
            heroBtn1: "Learn More",
            heroBtn2: "Get in Touch",

            // About
            aboutLabel: "About Us",
            aboutTitle: "Thermal Energy for Carbon Neutrality",
            aboutDesc: "PIOST Inc. is a deep-tech startup founded in 2025, dedicated to accelerating carbon neutrality through thermal energy storage and utilization. We develop technologies that store surplus renewable energy as high-temperature heat and convert it back to usable energy when needed.",
            aboutExtended: "The global transition to renewable energy faces a critical challenge: solar and wind power are intermittent, but energy demand is constant. PIOST addresses this gap with cost-effective thermal energy storage using abundant materials like rock and sand. Our Carnot Battery technology enables long-duration storage at a fraction of the cost of lithium-ion batteries—paving the way for reliable, 24/7 clean energy.",

            // Why TES
            challengeLabel: "The Challenge",
            whyTesTitle: "Why Thermal Energy Must Be Stored",
            whatIsTes: "What is Thermal Energy Storage (TES)?",
            whatIsTesDesc: "Thermal Energy Storage (TES) is a technology that stores energy in the form of heat for later use. Unlike batteries that store electricity chemically, TES systems capture and retain thermal energy in materials like rock, sand, or molten salt at high temperatures. When energy is needed, this stored heat can be released for heating applications or converted back to electricity through steam turbines.",
            whyTesMatters: "Why TES Matters for the Energy Transition",
            whyTesMattersDesc1: "The global shift to renewable energy faces a fundamental challenge: the sun doesn't always shine, and the wind doesn't always blow. This intermittency creates a mismatch between when energy is produced and when it is consumed. Without effective storage, excess renewable energy is curtailed, and fossil fuel plants must fill the gaps.",
            whyTesMattersDesc2: "TES offers a compelling solution. Heat can be stored for extended periods with minimal loss, making it ideal for long-duration storage measured in hours or days. The materials—rock and sand—are abundant, inexpensive, and environmentally benign. Unlike lithium-ion batteries, TES systems don't rely on critical minerals or present fire hazards.",
            tesAdvantage: "The TES Advantage",
            tesAdvantageDesc1: "TES technology has already been proven at scale in concentrated solar power (CSP) plants worldwide, with over 6.5 GW of installed capacity. The materials—rock, sand, and steel—are abundant, low-cost, and free from supply chain risks associated with lithium and rare earth elements.",
            tesAdvantageDesc2: "With system lifetimes exceeding 30 years and minimal degradation, TES offers a compelling total cost of ownership for long-duration storage applications ranging from residential heating to grid-scale energy management.",

            // Why Carnot
            whyCarnotTitle: "Why Carnot Battery?",
            carnotWhat: "What is a Carnot Battery?",
            carnotWhatDesc1: "A Carnot Battery is an advanced energy storage system that converts electricity to heat for storage, then converts that heat back to electricity when needed. Named after the French physicist Sadi Carnot who established the theoretical limits of heat engine efficiency, this technology represents the cutting edge of thermal energy storage.",
            carnotWhatDesc2: "The process works in three stages: First, excess electricity (typically from renewable sources) powers electric heaters to raise the temperature of a thermal storage medium to very high temperatures—in our case, exceeding 1,000°C. Second, this thermal energy is retained in insulated storage tanks with minimal loss. Third, when electricity is needed, the stored heat generates steam that drives a turbine to produce power.",
            carnotAdvantage: "Advantages Over Alternatives",
            carnotAdvantageDesc1: "Lithium-ion batteries dominate short-duration storage (2–4 hours) but become prohibitively expensive for longer durations. Pumped hydro offers long duration but requires specific geography. Carnot Batteries fill this gap: cost-effective storage for 8–24+ hours using widely available materials and proven industrial components.",
            carnotAdvantageDesc2: "The economics are compelling. Thermal storage costs 10–20x less per kWh than batteries at high temperatures. Modern Carnot Battery systems achieve 50–70% round-trip efficiency—competitive with other technologies when considering total system costs and lifespan.",

            // Market
            marketLabel: "Market Opportunity",
            marketTitle: "The Growing Demand for Energy Storage",
            marketDesc: "Global energy storage capacity must increase dramatically to meet net-zero targets. Thermal storage offers the lowest-cost solution for long-duration applications.",
            driversTitle: "Why Long-Duration Storage Matters",
            driver1Title: "Net-Zero Infrastructure",
            driver1Desc: "The IEA projects that achieving net-zero by 2050 will require over 2,000 GW of long-duration energy storage capacity globally.",
            driver2Title: "Lithium-Ion Cost Barrier",
            driver2Desc: "Beyond 8 hours of storage, lithium-ion battery costs per kWh increase sharply. Thermal storage becomes more economical as duration extends.",
            driver3Title: "Global Policy Support",
            driver3Desc: "Major economies including the EU, US, and Korea are expanding R&D funding and subsidies for long-duration storage technologies.",

            // Why Mongolia
            whyMongoliaTitle: "Why Start in Mongolia?",
            whyMongolia1Title: "Extreme Heating Demand",
            whyMongolia1Desc: "Average winter temperature of -25°C, 8 months of heating required. The most heating-dependent market in the world.",
            whyMongolia2Title: "Abundant Renewables",
            whyMongolia2Desc: "2,200GW solar and 1,100GW wind potential. Ideal for low-cost renewable-powered thermal storage.",
            whyMongolia3Title: "Government Support",
            whyMongolia3Desc: "30% renewable energy target by 2030. Strong policy push for clean heating solutions.",

            // Technology Comparison
            comparisonTitle: "Technology Comparison",
            comparisonDesc: "How PIOST compares to other thermal energy storage providers",

            // Applications
            applicationsTitle: "Applications",
            applicationsDesc: "Where our technology creates impact",
            app1Title: "District Heating",
            app1Region: "Cold Climate Regions",
            app1Desc: "24/7 clean heating for residential and commercial buildings using stored renewable energy",
            app2Title: "Industrial Heat",
            app2Region: "Hard-to-Abate Sectors",
            app2Desc: "High-temperature process heat (500–1,000°C) for steel, cement, and chemical manufacturing",
            app3Title: "Renewable Firming",
            app3Region: "Solar & Wind Integration",
            app3Desc: "Capture excess generation and dispatch during peak demand to maximize renewable utilization",
            app4Title: "Grid Storage",
            app4Region: "Long-Duration (8–24h+)",
            app4Desc: "Utility-scale energy storage to balance supply and demand, replacing fossil fuel peaker plants",

            // Solutions
            solutionsLabel: "Our Approach",
            strategyTitle: "Our Strategy & Technology",
            strategyDesc: "PIOST's integrated approach combines proven thermal storage with advanced heat exchange technology.",

            // Milestones
            milestonesTitle: "Built on Strong Foundations",
            milestone1Title: "Deep Research Expertise",
            milestone1Desc: "Extensive research experience in steam generation, two-phase flow, and high-temperature thermal systems",
            milestone2Title: "12+ Patent Applications",
            milestone2Desc: "Filed patents covering core TES and heat exchange technologies",
            milestone3Title: "Global Partnership",
            milestone3Desc: "MOU signed with YN E Tulga for testbed partnership to validate TES under extreme cold-climate conditions",
            milestone4Title: "University Lab Spinoff",
            milestone4Desc: "Founded from Inha University's MFTEL (Multiphase Flow & Thermal Engineering Lab), bringing academic research into commercial reality.",
            visitLab: "Visit MFTEL Lab",

            // Roadmap
            roadmapLabel: "Roadmap",
            roadmapTitle: "Our Journey to Market",
            roadmapDesc: "From prototype validation to global commercialization.",
            year2026: "2026",
            now: "Now",
            phase1Title: "Technology Validation & Seed Stage",
            phase1Items: ["Complete TES prototype development and lab-scale demonstration", "Validate core technologies: 1,000°C+ storage, hybrid steam generation", "Launch Mongolia pilot project for cold-climate validation", "Secure seed funding and accelerator program participation", "File PCT patents for international IP protection"],
            year2027: "2027-28",
            phase2Title: "Pilot Deployment & Series A",
            phase2Items: ["Deploy commercial-scale pilot systems in Mongolia and Europe", "Obtain CE marking and international product certifications", "Apply to Horizon Europe, EIC Accelerator, and KOICA programs", "Establish strategic partnerships with European energy companies", "Raise Series A funding for manufacturing scale-up"],
            year2029: "2029-30",
            phase3Title: "Commercial Scale & Expansion",
            phase3Items: ["Launch Heating-as-a-Service (HaaS) subscription model", "Establish local manufacturing in Mongolia", "Expand exports to Central Asia", "Participate in Korean public sector projects", "Target break-even and path to profitability"],
            year2031: "2031+",
            phase4Title: "Market Expansion",
            phase4Items: ["Deploy systems in large Korean residential complexes", "Expand to Kazakhstan, Kyrgyzstan, and broader Central Asia", "Deploy grid-scale Carnot Battery systems", "Build energy independence ecosystem"],

            // Track Record
            trackRecordTitle: "Track Record",
            bizDev: "Business Development",
            program1Name: "Company Founded",
            program1Desc: "PIOST Inc. established",
            program2Name: "IR Activities",
            program2Desc: "Regular investor relations",
            program3Name: "Pitch Competition",
            program3Desc: "Finals selection",
            supportPrograms: "Support Programs",
            program4Name: "Lab Startup Program",
            program4Desc: "University research commercialization",
            program5Name: "Startup Success Package",
            program5Desc: "Youth Startup Academy",
            program6Name: "Youth Startup Incubation",
            program6Desc: "Incheon Startup Park",
            globalExpansion: "Global Expansion",
            program7Name: "Gladiator Program",
            program7Desc: "MOU signed with YN E Tulga",
            program8Name: "PickPack Partnership",
            program8Desc: "Global R&D Creator collaboration",
            program9Name: "KOMIR Partnership",
            program9Desc: "Strategic international partnership",
            founded: "Founded",
            startupPrograms: "Startup Programs",
            mentoringSessions: "Mentoring Sessions",
            intlPartners: "International Partners",
            patentApps: "Patent Applications",

            // Team
            teamLabel: "Leadership",
            teamTitle: "Team",
            teamDesc: "Combining business expertise with deep technical knowledge in thermal engineering.",
            ceoName: "Junbeom Song",
            ceoTitle: "CEO & Co-Founder",
            ceoRole: "Market analysis and business strategy",
            ctoName: "Il Woong Park",
            ctoTitle: "CTO & Co-Founder",
            ctoRole: "R&D planning and technology development",
            missionTitle: "Why We Do This",
            missionDesc: "We believe clean energy should be available 24/7—not just when the sun shines or the wind blows. Our team is dedicated to building the infrastructure for a fully renewable grid, making decarbonization practical and affordable for everyone.",
            goal1Value: "2050",
            goal1Label: "Net-Zero Target",
            goal2Value: "24/7",
            goal2Label: "Clean Energy",
            goal3Value: "100%",
            goal3Label: "Renewable Grid",
            joinUsTitle: "Join Us",
            joinUsDesc: "Help us build the future of clean energy.",
            job1Type: "Engineering",
            job1Title: "Thermal Systems Engineer",
            job1Desc: "Design and optimize high-temperature thermal storage systems. Experience with heat transfer and CFD preferred.",
            job2Type: "Engineering",
            job2Title: "Controls & Simulation Engineer",
            job2Desc: "Develop digital twins and AI-based control systems for TES operation optimization.",
            job3Type: "Business",
            job3Title: "Business Development",
            job3Desc: "Drive partnerships and market expansion in Europe and Asia. Energy sector experience valued.",
            applyNow: "Apply Now",

            // Contact
            contactLabel: "For Investors",
            contactTitle: "Partner With Us",
            contactDesc: "Interested in investing or exploring partnership opportunities? We'd love to hear from you.",
            investorTitle: "Investment & Partnership Inquiries",
            investorDesc: "PIOST is currently seeking seed funding to accelerate prototype development and pilot deployments. We welcome conversations with investors, strategic partners, and energy companies interested in thermal storage solutions.",
            stageLabel: "Stage",
            stageValue: "Pre-Seed / Seed",
            focusLabel: "Focus",
            focusValue: "Tech Validation & Product",
            marketLabel2: "Market",
            marketValue: "Global Cold Regions",
            contactUs: "Contact Us",
            location: "Incheon, South Korea",

            // Footer
            footerTagline: "Advancing Sustainable Thermal Energy Storage Technology",
            copyright: "© 2025 PIOST Inc. All rights reserved."
        },
        kr: {
            // Hero
            heroLabel: "열에너지 저장 스타트업",
            heroLine1: "화석연료 없이도 따뜻한 겨울,",
            heroLine2: "이제 현실이 됩니다",
            heroLine3: "",
            heroDesc: "재생전력을 열로 저장하고, 필요할 때 난방과 전기로 공급합니다. 안전하고, 오래가고, 경제적인 에너지 저장—PIOST가 만들어갑니다.",
            heroBtn1: "기술 알아보기",
            heroBtn2: "투자 문의",

            // About
            aboutLabel: "회사소개",
            aboutTitle: "열로 저장하고, 열로 공급합니다",
            aboutDesc: "PIOST는 화석연료 보일러를 재생에너지 기반 열저장 시스템으로 대체합니다. 1,000°C 이상 고온 저장, 암석·모래 복합 축열재, 직접 응축 열교환—핵심 기술 모두 자체 특허로 보유하고 있습니다.",
            aboutExtended: "전 세계 에너지 소비의 절반은 난방입니다. 하지만 대부분은 아직도 석탄과 가스에 의존하죠. PIOST는 어디서나 구할 수 있는 암석과 모래에 열을 저장해 이 문제를 해결합니다. 리튬이온 배터리보다 저렴하고, 30년 넘게 쓸 수 있으며, 화재 위험도 없습니다.",

            // Why TES
            challengeLabel: "문제인식",
            whyTesTitle: "난방, 왜 아직도 화석연료인가요?",
            whatIsTes: "열에너지 저장이란?",
            whatIsTesDesc: "재생전력을 고온의 열로 바꿔 암석, 모래 같은 축열재에 저장합니다. 저장된 열은 난방에 사용하거나, 터빈을 돌려 전기로 변환할 수 있습니다. 리튬이온과 달리 희소 광물이 필요 없고, 화재 위험도 없습니다.",
            whyTesMatters: "난방이 바뀌어야 진짜 에너지 전환입니다",
            whyTesMattersDesc1: "전 세계 에너지 소비의 약 50%가 난방입니다. 그런데 대부분의 건물과 공장은 아직도 석탄, 가스 보일러를 사용합니다. 태양광·풍력이 아무리 늘어나도, 난방이 바뀌지 않으면 진정한 탈탄소화는 불가능합니다.",
            whyTesMattersDesc2: "PIOST는 재생전력을 열로 바꿔 저장합니다. 해가 지고 바람이 멎어도 따뜻한 난방을 공급하고, 필요하면 전기까지 생산할 수 있습니다.",
            tesAdvantage: "PIOST만의 차별점",
            tesAdvantageDesc1: "암석·모래 복합 축열재, 직접 응축 열교환 방식, 모듈형 설계—모두 자체 특허 기술입니다. 1,000°C 이상 고온 저장과 높은 열효율을 동시에 달성했습니다.",
            tesAdvantageDesc2: "30년 이상 수명, 리튬이온의 1/10 비용, 화재 위험 제로. 더 안전하고, 더 오래가고, 더 경제적인 에너지 저장의 새로운 기준입니다.",

            // Why Carnot
            whyCarnotTitle: "카르노 배터리가 뭔가요?",
            carnotWhat: "카르노 배터리란?",
            carnotWhatDesc1: "카르노 배터리는 전기를 열로 바꿔 저장했다가, 다시 전기로 되돌리는 에너지 저장 시스템입니다. 열기관 효율의 이론적 한계를 정립한 프랑스 물리학자 사디 카르노의 이름을 따왔습니다.",
            carnotWhatDesc2: "작동 원리는 3단계입니다. ① 잉여 재생전력으로 축열재를 1,000°C 이상 고온으로 가열 ② 단열 처리된 저장조에 열 보관 ③ 필요할 때 저장된 열로 증기를 만들어 터빈을 돌려 전기 생산.",
            carnotAdvantage: "왜 리튬이온 대신 카르노 배터리인가요?",
            carnotAdvantageDesc1: "리튬이온 배터리는 2~4시간 단주기 저장에는 강하지만, 그 이상은 비용이 급격히 올라갑니다. 양수발전은 장주기 저장이 가능하지만 지형 제약이 큽니다. 카르노 배터리는 이 빈틈을 채웁니다—8~24시간 이상 저장이 가능하면서, 어디서나 구할 수 있는 소재와 검증된 산업 부품을 사용합니다.",
            carnotAdvantageDesc2: "경제성은 압도적입니다. 고온 열저장 비용은 리튬이온 배터리 대비 kWh당 10~20배 저렴합니다. 최신 카르노 배터리 시스템의 왕복 효율은 50~70%로, 전체 시스템 비용과 수명을 고려하면 다른 기술과 충분히 경쟁할 수 있습니다.",

            // Market
            marketLabel: "시장 기회",
            marketTitle: "2030년, 1조 달러 시장이 열립니다",
            marketDesc: "에너지 저장 시장은 폭발적으로 성장 중입니다. 그중에서도 난방 탈탄소화가 가장 큰 기회입니다.",
            driversTitle: "장주기 저장이 필요한 이유",
            driver1Title: "넷제로 필수 인프라",
            driver1Desc: "IEA는 2050년 탄소중립 달성에 2,000GW 이상의 장주기 저장 설비가 필요하다고 전망합니다.",
            driver2Title: "리튬이온의 경제성 한계",
            driver2Desc: "8시간 이상 저장에서는 리튬이온 배터리의 kWh당 비용이 급등합니다. 열저장은 저장 시간이 길어질수록 경제성이 높아집니다.",
            driver3Title: "글로벌 정책 지원",
            driver3Desc: "EU, 미국, 한국 등 주요국이 장주기 저장 기술에 대한 R&D 투자와 보조금 정책을 확대하고 있습니다.",

            // Target Market (Mongolia)
            whyMongoliaTitle: "왜 몽골에서 시작하나요?",
            whyMongolia1Title: "극한의 난방 수요",
            whyMongolia1Desc: "겨울 평균 -25°C, 연간 8개월 난방 필수. 전 세계에서 가장 난방이 절실한 시장입니다.",
            whyMongolia2Title: "풍부한 재생에너지",
            whyMongolia2Desc: "태양광 2,200GW, 풍력 1,100GW 잠재량. 저렴한 재생전력 기반 열저장의 최적지입니다.",
            whyMongolia3Title: "정부 정책 지원",
            whyMongolia3Desc: "2030년까지 재생에너지 비중 30% 목표. 청정 난방 솔루션에 대한 강력한 정책 지원이 있습니다.",

            // Technology Comparison
            comparisonTitle: "경쟁사 대비 기술 비교",
            comparisonDesc: "PIOST는 어떻게 다른가요?",

            // Applications
            applicationsTitle: "어디에 쓰이나요?",
            applicationsDesc: "화석연료를 대체하는 다양한 적용처",
            app1Title: "주거·상업 난방",
            app1Region: "석탄·가스 보일러 대체",
            app1Desc: "단독주택부터 고층 빌딩까지. 재생전력으로 24시간 따뜻한 난방을 공급합니다.",
            app2Title: "산업 공정열",
            app2Region: "500~1,000°C 고온 공정",
            app2Desc: "철강, 시멘트, 화학 산업의 탈탄소화를 지원합니다.",
            app3Title: "재생에너지 안정화",
            app3Region: "태양광·풍력 연계",
            app3Desc: "남는 전기를 저장하고, 필요할 때 꺼내 씁니다. 재생에너지 이용률을 극대화합니다.",
            app4Title: "전력 생산",
            app4Region: "카르노 배터리",
            app4Desc: "저장된 열로 터빈을 돌려 전기를 만듭니다. 피크 수요 대응에 최적입니다.",

            // Solutions
            solutionsLabel: "솔루션",
            strategyTitle: "PIOST의 기술 전략",
            strategyDesc: "검증된 열 저장 원리에 독자적인 고효율 열교환 기술을 더했습니다.",

            // Milestones
            milestonesTitle: "기술력의 근거",
            milestone1Title: "핵심 기술 전부 특허 보유",
            milestone1Desc: "암석·모래 복합 축열재, 직접 응축 열교환, 모듈형 설계—모두 자체 특허입니다.",
            milestone2Title: "12건 이상 특허 포트폴리오",
            milestone2Desc: "열저장, 열교환, 시스템 설계 전 영역에 걸쳐 국내외 IP를 확보했습니다.",
            milestone3Title: "글로벌 파트너십 확보",
            milestone3Desc: "YN E Tulga사와 MOU 체결. -25°C 극한 환경에서 기술을 검증할 예정입니다.",
            milestone4Title: "10년 연구 성과 기반 창업",
            milestone4Desc: "인하대학교 MFTEL(다상유동·열공학연구실)에서 스핀오프했습니다.",
            visitLab: "연구실 둘러보기",

            // Roadmap
            roadmapLabel: "로드맵",
            roadmapTitle: "기술 검증에서 글로벌 확장까지",
            roadmapDesc: "기술 실증부터 글로벌 상용화까지, 단계별 성장 전략입니다.",
            year2026: "2026",
            now: "지금",
            phase1Title: "기술 실증 단계",
            phase1Items: ["몽골 게르 난방 실증 착수", "-25°C 극한 환경에서 기술 검증", "제품 인증 및 수출 인허가 취득", "시드 투자 유치", "PCT 국제특허 출원"],
            year2027: "2027-28",
            phase2Title: "매출 발생 단계",
            phase2Items: ["모듈형 제품 판매 시작", "유지보수(O&M) 서비스 런칭", "몽골 정부 대상 B2G 진입", "KOICA, Horizon Europe 펀딩 확보", "시리즈 A 투자 유치"],
            year2029: "2029-30",
            phase3Title: "스케일업 단계",
            phase3Items: ["월 구독형 HaaS 모델 출시", "몽골 현지 생산라인 구축", "중앙아시아 수출 확대", "국내 공공 프로젝트 참여", "손익분기점 달성"],
            year2031: "2031+",
            phase4Title: "시장 확장",
            phase4Items: ["국내 대단지 거주지역 시스템 적용", "카자흐스탄·키르기스스탄 등 중앙아시아 본격 진출", "전력망급 카르노 배터리 공급", "에너지 자립 생태계 구축"],

            // Track Record
            trackRecordTitle: "지금까지 이만큼 해왔습니다",
            bizDev: "사업화",
            program1Name: "법인 설립",
            program1Desc: "㈜피오스트 설립 완료",
            program2Name: "IR 활동",
            program2Desc: "투자자 대상 정기 IR",
            program3Name: "피칭 경진대회",
            program3Desc: "본선 진출",
            supportPrograms: "지원사업",
            program4Name: "실험실특화형창업선도대학",
            program4Desc: "대학 연구 성과 사업화",
            program5Name: "창업성공패키지",
            program5Desc: "청년창업사관학교",
            program6Name: "청년 스타트업 인큐베이션",
            program6Desc: "인천스타트업파크",
            globalExpansion: "글로벌",
            program7Name: "글래디에이터",
            program7Desc: "YN E Tulga MOU 체결",
            program8Name: "픽팩 파트너십",
            program8Desc: "글로벌 R&D 크리에이터",
            program9Name: "KOMIR 협력",
            program9Desc: "해외 전략 파트너십",
            founded: "법인 설립",
            startupPrograms: "창업 프로그램",
            mentoringSessions: "멘토링",
            intlPartners: "해외 파트너",
            patentApps: "특허 출원",

            // Team
            teamLabel: "팀",
            teamTitle: "함께 만드는 사람들",
            teamDesc: "사업 전략과 열공학 기술, 두 축의 전문성을 갖춘 창업팀입니다.",
            ceoName: "송준범",
            ceoTitle: "대표이사",
            ceoRole: "시장 분석 · 사업 전략",
            ctoName: "박일웅",
            ctoTitle: "기술이사",
            ctoRole: "R&D 총괄 · 기술 개발",
            missionTitle: "왜 이 일을 하나요?",
            missionDesc: "전 세계 에너지 소비의 50%는 난방입니다. 하지만 대부분 아직 화석연료에 의존하죠. 재생에너지를 저장하고 필요할 때 공급하는 기술—이게 진짜 에너지 전환입니다.",
            goal1Value: "2050",
            goal1Label: "넷제로",
            goal2Value: "24/7",
            goal2Label: "청정에너지",
            goal3Value: "100%",
            goal3Label: "재생에너지",
            joinUsTitle: "함께할 분을 찾습니다",
            joinUsDesc: "화석연료 없는 따뜻한 세상, 같이 만들어갈 동료를 기다립니다.",
            job1Type: "엔지니어링",
            job1Title: "열시스템 엔지니어",
            job1Desc: "고온 열저장 시스템 설계. 열전달·CFD 경험자 우대",
            job2Type: "엔지니어링",
            job2Title: "제어·시뮬레이션",
            job2Desc: "디지털 트윈 및 AI 기반 운영 최적화",
            job3Type: "사업개발",
            job3Title: "비즈니스 개발",
            job3Desc: "글로벌 시장 개척 및 파트너십 구축",
            applyNow: "지원하기",

            // Contact
            contactLabel: "투자 문의",
            contactTitle: "함께 성장할 파트너를 찾습니다",
            contactDesc: "2030년 1조 달러 열저장 시장, PIOST와 함께 선점하세요.",
            investorTitle: "투자 및 파트너십",
            investorDesc: "프로토타입 개발과 기술 검증을 위한 시드 투자를 유치하고 있습니다. 장주기 에너지 저장과 청정 난방 기술에 관심 있는 투자자, 파트너의 연락을 환영합니다.",
            stageLabel: "단계",
            stageValue: "프리시드 / 시드",
            focusLabel: "집중",
            focusValue: "기술 검증 · 제품화",
            marketLabel2: "시장",
            marketValue: "글로벌 한랭 지역",
            contactUs: "연락하기",
            location: "인천, 대한민국",

            // Footer
            footerTagline: "안전하고, 오래가고, 경제적인 에너지 저장의 미래",
            copyright: "© 2025 ㈜피오스트. All rights reserved."
        }
    };

    let currentLang = 'kr';

    // Language switching function
    function setLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];

        // Update nav menu links
        document.querySelectorAll('.nav-menu a[data-en]').forEach(el => {
            el.textContent = el.dataset[lang];
        });

        // Helper functions
        const updateText = (selector, key) => {
            const el = document.querySelector(selector);
            if (el && t[key]) el.textContent = t[key];
        };

        const updateAll = (selector, texts) => {
            document.querySelectorAll(selector).forEach((el, i) => {
                if (texts[i]) el.textContent = texts[i];
            });
        };

        // ===== HERO =====
        updateText('.hero-label', 'heroLabel');
        const heroLinesEl = document.querySelectorAll('.hero-line');
        const heroTexts = [t.heroLine1, t.heroLine2, t.heroLine3];

        heroLinesEl.forEach((line, lineIndex) => {
            const text = heroTexts[lineIndex] || '';
            const isHighlight = line.classList.contains('highlight');
            line.innerHTML = '';
            line.style.opacity = '1';
            // Override transparent text fill for highlighted lines
            if (isHighlight) {
                line.style.webkitTextFillColor = 'unset';
                line.style.background = 'none';
            }

            if (text) {
                [...text].forEach((char, charIndex) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.display = 'inline-block';
                    span.style.opacity = '0.15';
                    span.style.filter = 'blur(8px)';
                    span.style.transform = 'translateY(15px) translateX(8px)';
                    span.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                    // Apply gradient to each span for highlight effect
                    if (isHighlight) {
                        span.style.background = 'linear-gradient(135deg, #ff4d6d 0%, #f472b6 100%)';
                        span.style.webkitBackgroundClip = 'text';
                        span.style.webkitTextFillColor = 'transparent';
                        span.style.backgroundClip = 'text';
                    }
                    line.appendChild(span);

                    setTimeout(() => {
                        span.style.opacity = '1';
                        span.style.filter = 'blur(0px)';
                        span.style.transform = 'translateY(0) translateX(0)';
                    }, 100 + (lineIndex * 300) + (charIndex * 35));
                });
            }
        });

        updateText('.hero-description', 'heroDesc');
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        if (heroButtons[0]) heroButtons[0].textContent = t.heroBtn1;
        if (heroButtons[1]) heroButtons[1].textContent = t.heroBtn2;

        // ===== ABOUT =====
        updateText('#about .section-label', 'aboutLabel');
        updateText('#about .section-title', 'aboutTitle');
        updateText('#about .section-description', 'aboutDesc');
        updateText('.about-content-extended p', 'aboutExtended');

        // ===== WHY TES =====
        updateText('#why-tes .section-label', 'challengeLabel');
        const whyTesSubtitles = document.querySelectorAll('#why-tes .subsection-title');
        if (whyTesSubtitles[0]) whyTesSubtitles[0].textContent = t.whyTesTitle;
        if (whyTesSubtitles[1]) whyTesSubtitles[1].textContent = t.whyCarnotTitle;

        const whyContents = document.querySelectorAll('#why-tes .why-content');
        // First why-content (TES)
        if (whyContents[0]) {
            const h3s = whyContents[0].querySelectorAll('.why-explanation h3');
            const ps = whyContents[0].querySelectorAll('.why-explanation p');
            if (h3s[0]) h3s[0].textContent = t.whatIsTes;
            if (ps[0]) ps[0].textContent = t.whatIsTesDesc;
            if (h3s[1]) h3s[1].textContent = t.whyTesMatters;
            if (ps[1]) ps[1].textContent = t.whyTesMattersDesc1;
            if (ps[2]) ps[2].textContent = t.whyTesMattersDesc2;
            const hope = whyContents[0].querySelector('.hope-card');
            if (hope) {
                const h4 = hope.querySelector('h4');
                const hopePs = hope.querySelectorAll('p');
                if (h4) h4.textContent = t.tesAdvantage;
                if (hopePs[0]) hopePs[0].textContent = t.tesAdvantageDesc1;
                if (hopePs[1]) hopePs[1].textContent = t.tesAdvantageDesc2;
            }
        }
        // Second why-content (Carnot)
        if (whyContents[1]) {
            const h3s = whyContents[1].querySelectorAll('.why-explanation h3');
            const ps = whyContents[1].querySelectorAll('.why-explanation p');
            if (h3s[0]) h3s[0].textContent = t.carnotWhat;
            if (ps[0]) ps[0].textContent = t.carnotWhatDesc1;
            if (ps[1]) ps[1].textContent = t.carnotWhatDesc2;
            if (h3s[1]) h3s[1].textContent = t.carnotAdvantage;
            if (ps[2]) ps[2].textContent = t.carnotAdvantageDesc1;
            if (ps[3]) ps[3].textContent = t.carnotAdvantageDesc2;
            const hope = whyContents[1].querySelector('.hope-card');
            if (hope) {
                const h4 = hope.querySelector('h4');
                const hopePs = hope.querySelectorAll('p');
                if (h4) h4.textContent = t.driversTitle;
                if (hopePs[0]) hopePs[0].textContent = t.driver1Title + ': ' + t.driver1Desc;
                if (hopePs[1]) hopePs[1].textContent = t.driver2Title + ': ' + t.driver2Desc;
            }
        }

        // ===== MARKET =====
        updateText('#market .section-label', 'marketLabel');
        updateText('#market .section-title', 'marketTitle');
        updateText('#market .section-description', 'marketDesc');

        // Market stats - update all 6 stat cards
        const statCards = document.querySelectorAll('#market .stat-card');
        const statData = lang === 'kr' ? [
            { num: '10', unit: '배', label: '시장 성장률', desc: '2035년까지 글로벌 TES 시장 10배 이상 성장 전망', src: '맥킨지' },
            { num: '49', unit: '%', label: '난방 에너지 비중', desc: '전 세계 에너지 수요의 절반이 난방용', src: '국제에너지기구(IEA)' },
            { num: '1,500', unit: 'GW', label: '저장 용량 목표', desc: '2030년까지 글로벌 에너지 저장 용량 6배 확대 목표', src: 'COP28' },
            { num: '11.7', unit: '%', label: 'TES 연평균 성장률', desc: '2030년까지 TES 시장 109억 달러 규모 전망', src: 'Grand View Research' },
            { num: '6.5', unit: 'GW', label: '글로벌 CSP 용량', desc: '2022년 기준 전 세계 집광형 태양열 발전 설비', src: 'IRENA' },
            { num: '70', unit: '%', label: '비용 절감 가능', desc: '8시간 이상 저장 시 리튬이온 대비 LCOS 절감', src: 'NREL' }
        ] : [
            { num: '10', unit: 'x', label: 'Market Growth', desc: 'Global TES market projected to grow more than tenfold by 2035', src: 'McKinsey' },
            { num: '670', unit: 'GW', label: 'PV Capacity in Europe', desc: 'Photovoltaic capacity projected to reach 670GW by 2028', src: 'European Environment Agency' },
            { num: '49', unit: '%', label: 'Energy for Heating', desc: 'Heat accounts for nearly half of global energy demand', src: 'International Energy Agency' },
            { num: '1,500', unit: 'GW', label: 'Storage Target 2030', desc: 'Global energy storage capacity target to achieve 6x growth by 2030', src: 'COP28 Global Stocktake' },
            { num: '11.7', unit: '%', label: 'TES CAGR', desc: 'TES market expected to reach $10.9B by 2030', src: 'Grand View Research' },
            { num: '6.5', unit: 'GW', label: 'Global CSP Capacity', desc: 'Total installed concentrated solar power capacity in 2022', src: 'IRENA' }
        ];
        statCards.forEach((card, i) => {
            if (statData[i]) {
                const numEl = card.querySelector('.stat-number');
                const labelEl = card.querySelector('.stat-label');
                const descEl = card.querySelector('p');
                const srcEl = card.querySelector('.stat-source');
                if (numEl) numEl.innerHTML = statData[i].num + '<span class="stat-unit">' + statData[i].unit + '</span>';
                if (labelEl) labelEl.textContent = statData[i].label;
                if (descEl) descEl.textContent = statData[i].desc;
                if (srcEl) srcEl.textContent = statData[i].src;
            }
        });

        // Technology Comparison Table
        const compTable = document.querySelector('.comparison-table');
        if (compTable) {
            const ths = compTable.querySelectorAll('thead th');
            const thData = lang === 'kr' ? ['구분', '경쟁사 A', '경쟁사 B', '경쟁사 C', 'PIOST'] : ['Category', 'Company A', 'Company B', 'Company C', 'PIOST Inc.'];
            ths.forEach((th, i) => { if (thData[i]) th.textContent = thData[i]; });

            const rows = compTable.querySelectorAll('tbody tr');
            const rowData = lang === 'kr' ? [
                ['최고 온도', '750°C', '450°C', '600-800°C', '1,000°C+'],
                ['축열재', '파쇄 암석', '콘크리트', '화산암', '암석·모래 복합'],
                ['열교환 방식', '저항 가열', '튜브 열교환기', '열풍 순환', '직접 응축 & 이중관'],
                ['시스템 유형', '모듈형', '모듈형', '플랜트형', '모듈형']
            ] : [
                ['Max Temperature', '750°C', '450°C', '600-800°C', '1,000°C+'],
                ['Storage Material', 'Crushed rocks', 'Concrete (HEATCRETE)', 'Volcanic rocks', 'Composite rock & sand'],
                ['Heat Transfer', 'Resistive heating', 'Tube heat exchanger', 'Hot air circulation', 'Direct quenching & tube-in-tube'],
                ['System Type', 'Modular', 'Modular', 'Plant-scale', 'Modular']
            ];
            rows.forEach((row, i) => {
                if (rowData[i]) {
                    const tds = row.querySelectorAll('td');
                    tds.forEach((td, j) => {
                        if (rowData[i][j]) {
                            if (j === 0 || j === 4) {
                                td.innerHTML = '<strong>' + rowData[i][j] + '</strong>';
                            } else {
                                td.textContent = rowData[i][j];
                            }
                        }
                    });
                }
            });
        }

        // Why Mongolia Section
        const whyMongoliaTitle = document.querySelector('.target-market-title');
        if (whyMongoliaTitle) whyMongoliaTitle.textContent = t.whyMongoliaTitle;

        const whyMongoliaCards = document.querySelectorAll('.target-market-card');
        const whyMongoliaData = [
            { title: t.whyMongolia1Title, desc: t.whyMongolia1Desc },
            { title: t.whyMongolia2Title, desc: t.whyMongolia2Desc },
            { title: t.whyMongolia3Title, desc: t.whyMongolia3Desc }
        ];
        whyMongoliaCards.forEach((card, i) => {
            if (whyMongoliaData[i]) {
                const h4 = card.querySelector('.target-market-card-title');
                const p = card.querySelector('.target-market-card-desc');
                if (h4) h4.textContent = whyMongoliaData[i].title;
                if (p) p.textContent = whyMongoliaData[i].desc;
            }
        });

        // Technology Comparison
        const compTitle = document.querySelectorAll('#market .subsection-title')[1];
        const compDesc = document.querySelectorAll('#market .section-description')[1];
        if (compTitle) compTitle.textContent = t.comparisonTitle;
        if (compDesc) compDesc.textContent = t.comparisonDesc;

        // Applications
        const appTitle = document.querySelectorAll('#market .subsection-title')[2];
        const appDesc = document.querySelectorAll('#market .section-description')[2];
        if (appTitle) appTitle.textContent = t.applicationsTitle;
        if (appDesc) appDesc.textContent = t.applicationsDesc;

        const useCaseCards = document.querySelectorAll('.use-case-card');
        const appData = [
            { title: t.app1Title, region: t.app1Region, desc: t.app1Desc },
            { title: t.app2Title, region: t.app2Region, desc: t.app2Desc },
            { title: t.app3Title, region: t.app3Region, desc: t.app3Desc },
            { title: t.app4Title, region: t.app4Region, desc: t.app4Desc }
        ];
        useCaseCards.forEach((card, i) => {
            if (appData[i]) {
                const h4 = card.querySelector('h4');
                const p = card.querySelector('p');
                const desc = card.querySelector('.use-case-desc');
                if (h4) h4.textContent = appData[i].title;
                if (p) p.textContent = appData[i].region;
                if (desc) desc.textContent = appData[i].desc;
            }
        });

        // ===== SOLUTIONS =====
        updateText('#solutions .section-label', 'solutionsLabel');
        const solTitle = document.querySelector('#solutions .section-title');
        const solDesc = document.querySelector('#solutions .section-header .section-description');
        if (solTitle) solTitle.textContent = lang === 'kr' ? '가정에서 지역난방까지' : 'From Home to Grid';
        if (solDesc) solDesc.textContent = lang === 'kr' ? '다양한 규모에 맞춘 모듈형 열저장 시스템입니다.' : 'Modular TES systems designed for deployment at multiple scales.';

        const solutionCards = document.querySelectorAll('.solutions-grid .solution-card');
        const solData = lang === 'kr' ? [
            { type: '규모 1', title: '단독 주택', desc: '개별 가정용 소형 열저장 장치. 태양광·소형 풍력과 연계해 오프그리드 난방에 최적입니다.', features: ['독립형 난방 시스템', '오프그리드 가능', '재생에너지 연계'] },
            { type: '규모 2', title: '소형 건물', desc: '다세대 주택, 소규모 상업시설용 열저장 시스템. 공유 인프라로 세대당 비용을 절감합니다.', features: ['다세대 건물 지원', '공유 난방 네트워크', '규모의 경제'] },
            { type: '규모 3', title: '지역 난방', desc: '지역난방망 및 카르노 배터리용 대규모 열저장. 전력망 연계 유틸리티급 에너지 저장.', features: ['지역난방 네트워크', '카르노 배터리 연계', '전력망급 저장 용량'] }
        ] : [
            { type: 'Scale 1', title: 'Single Household', desc: 'Compact TES units for individual homes. Ideal for off-grid heating in remote areas with rooftop solar or small wind turbines.', features: ['Independent heating system', 'Off-grid capability', 'Renewable energy integration'] },
            { type: 'Scale 2', title: 'Small Building', desc: 'TES systems for multi-unit residential buildings and small commercial facilities. Shared infrastructure reduces per-unit costs.', features: ['Multi-unit building support', 'Shared heating network', 'Economies of scale'] },
            { type: 'Scale 3', title: 'Regional District', desc: 'Large-scale TES for district heating networks and Carnot Battery applications. Grid-connected systems for utility-scale energy storage.', features: ['District heating network', 'Carnot Battery integration', 'Grid-scale storage capacity'] }
        ];
        solutionCards.forEach((card, i) => {
            if (solData[i]) {
                const type = card.querySelector('.solution-type');
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                const lis = card.querySelectorAll('.solution-features li');
                if (type) type.textContent = solData[i].type;
                if (h3) h3.textContent = solData[i].title;
                if (p) p.textContent = solData[i].desc;
                lis.forEach((li, j) => {
                    if (solData[i].features[j]) li.textContent = solData[i].features[j];
                });
            }
        });

        // Strategy & Technology
        const stratTitle = document.querySelectorAll('#solutions .subsection-title')[0];
        const stratDesc = document.querySelectorAll('#solutions .section-description')[1];
        if (stratTitle) stratTitle.textContent = t.strategyTitle;
        if (stratDesc) stratDesc.textContent = t.strategyDesc;

        // Pillars
        const pillarData = lang === 'kr' ? [
            { title: '다중 규모 열저장 개발', desc: '단독 주택부터 건물, 지역난방까지 다양한 규모에 맞는 열저장 시스템 설계', techs: [{ title: '고온 가열 시스템', desc: '증기를 열매체로 활용한 직접 응축 열교환 기술. 1,000°C 이상 고효율 충전 가능', tag: '가열 방식' }, { title: '첨단 단열 기술', desc: '암석·모래 복합 매체와 다층 단열 설계로 장시간 저장 시 열손실 최소화', tag: '열손실 저감' }] },
            { title: '충·방전 최적화', desc: '다양한 열저장 구성, 충전 방식, 방전 패턴에 대한 최적 운영 전략 개발', techs: [{ title: '충·방전 시뮬레이션', desc: '다양한 운영 시나리오에 대한 전산 모델링으로 충전 방식, 시간, 방전 패턴 최적화', tag: '시뮬레이션' }, { title: '기술적 한계 예측', desc: '물리 기반 및 데이터 기반 모델로 다양한 운영 조건에서의 성능 한계 예측', tag: '한계 예측' }] },
            { title: '안정적 증기 생성', desc: '카르노 배터리의 효율적 발전을 위한 일정하고 고품질의 증기 출력 확보', techs: [{ title: '하이브리드 증기 생성', desc: '관류식과 급랭식 하이브리드 시스템으로 온도 변화에도 안정적인 증기 품질 제어', tag: '증기 방식' }, { title: 'AI 기반 운영 제어', desc: '강화학습 기반 디지털 트윈으로 실시간 최적 제어, 일관된 증기 품질 확보', tag: 'AI 제어' }] }
        ] : [
            { title: 'Multi-Scale TES Development', desc: 'Designing thermal energy storage systems for deployment across multiple scales—from single households to buildings and district heating networks.', techs: [{ title: 'High-Temperature Heating System', desc: 'Direct condensation heat exchange technology enabling efficient charging to 1,000°C+ using steam as the heat transfer medium.', tag: 'Heating Method' }, { title: 'Advanced Thermal Insulation', desc: 'Multi-layer insulation engineering with rock & sand composite medium, minimizing heat loss during long-duration storage.', tag: 'Heat Loss Reduction' }] },
            { title: 'Charge & Discharge Optimization', desc: 'Developing optimal operation strategies for diverse TES configurations, charging methods, and discharge patterns.', techs: [{ title: 'Charge/Discharge Simulation', desc: 'Computational modeling for diverse operating scenarios, optimizing charging methods, duration, and discharge patterns.', tag: 'Simulation' }, { title: 'Technical Limit Prediction', desc: 'Physics-based and data-driven models to predict performance boundaries under various operating conditions.', tag: 'Limit Prediction' }] },
            { title: 'Stable Steam Generation', desc: 'Ensuring consistent, high-quality steam output essential for efficient power generation in Carnot Battery systems.', techs: [{ title: 'Hybrid Steam Generation', desc: 'Once-through and quenching hybrid system for stable steam quality control under varying temperature conditions.', tag: 'Steam Methodology' }, { title: 'AI-based Operation Control', desc: 'Reinforcement learning-based digital twin for real-time optimal control, ensuring consistent steam quality.', tag: 'AI Control' }] }
        ];
        const pillarCols = document.querySelectorAll('.pillar-column');
        pillarCols.forEach((col, i) => {
            if (pillarData[i]) {
                const pillarCard = col.querySelector('.pillar-card');
                if (pillarCard) {
                    const h3 = pillarCard.querySelector('h3');
                    const p = pillarCard.querySelector('p');
                    if (h3) h3.textContent = pillarData[i].title;
                    if (p) p.textContent = pillarData[i].desc;
                }
                const techCards = col.querySelectorAll('.tech-card');
                techCards.forEach((tc, j) => {
                    if (pillarData[i].techs[j]) {
                        const h4 = tc.querySelector('h4');
                        const p = tc.querySelector('p');
                        const tag = tc.querySelector('.tech-tag');
                        if (h4) h4.textContent = pillarData[i].techs[j].title;
                        if (p) p.textContent = pillarData[i].techs[j].desc;
                        if (tag) tag.textContent = pillarData[i].techs[j].tag;
                    }
                });
            }
        });

        // Milestones
        const milestoneTitle = document.querySelectorAll('#solutions .subsection-title')[1];
        if (milestoneTitle) milestoneTitle.textContent = t.milestonesTitle;

        const milestoneCards = document.querySelectorAll('.milestones-grid .milestone-card');
        const mileData = [
            { title: t.milestone1Title, desc: t.milestone1Desc },
            { title: t.milestone2Title, desc: t.milestone2Desc },
            { title: t.milestone3Title, desc: t.milestone3Desc },
            { title: t.milestone4Title, desc: t.milestone4Desc }
        ];
        milestoneCards.forEach((card, i) => {
            if (mileData[i]) {
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                if (h3) h3.textContent = mileData[i].title;
                if (p) p.textContent = mileData[i].desc;
            }
            const labLink = card.querySelector('.lab-link');
            if (labLink) labLink.textContent = t.visitLab;
        });

        // ===== ROADMAP =====
        updateText('#roadmap .section-label', 'roadmapLabel');
        updateText('#roadmap .section-title', 'roadmapTitle');
        updateText('#roadmap .section-description', 'roadmapDesc');

        const timelineItems = document.querySelectorAll('.timeline-item');
        const roadmapData = [
            { year: t.year2026, badge: t.now, title: t.phase1Title, items: t.phase1Items },
            { year: t.year2027, title: t.phase2Title, items: t.phase2Items },
            { year: t.year2029, title: t.phase3Title, items: t.phase3Items },
            { year: t.year2031, title: t.phase4Title, items: t.phase4Items }
        ];
        timelineItems.forEach((item, i) => {
            if (roadmapData[i]) {
                const year = item.querySelector('.timeline-year');
                const badge = item.querySelector('.timeline-badge');
                const h3 = item.querySelector('.timeline-content h3');
                const lis = item.querySelectorAll('.timeline-content li');
                if (year) year.textContent = roadmapData[i].year;
                if (badge) badge.textContent = roadmapData[i].badge || '';
                if (h3) h3.textContent = roadmapData[i].title;
                lis.forEach((li, j) => {
                    if (roadmapData[i].items[j]) li.textContent = roadmapData[i].items[j];
                });
            }
        });

        // Track Record
        const trackTitle = document.querySelectorAll('#roadmap .subsection-title')[0];
        if (trackTitle) trackTitle.textContent = t.trackRecordTitle;

        const progCats = document.querySelectorAll('.program-category');
        const progData = [
            { title: t.bizDev, programs: [[t.program1Name, t.program1Desc], [t.program2Name, t.program2Desc], [t.program3Name, t.program3Desc]] },
            { title: t.supportPrograms, programs: [[t.program4Name, t.program4Desc], [t.program5Name, t.program5Desc], [t.program6Name, t.program6Desc]] },
            { title: t.globalExpansion, programs: [[t.program7Name, t.program7Desc], [t.program8Name, t.program8Desc], [t.program9Name, t.program9Desc]] }
        ];
        progCats.forEach((cat, i) => {
            if (progData[i]) {
                const h3 = cat.querySelector('h3');
                if (h3) h3.textContent = progData[i].title;
                const lis = cat.querySelectorAll('.program-list li');
                lis.forEach((li, j) => {
                    if (progData[i].programs[j]) {
                        const name = li.querySelector('.program-name');
                        const desc = li.querySelector('.program-desc');
                        if (name) name.textContent = progData[i].programs[j][0];
                        if (desc) desc.textContent = progData[i].programs[j][1];
                    }
                });
            }
        });

        // Program stats
        const statBoxes = document.querySelectorAll('.programs-stats .stat-box');
        const statBoxData = [
            { value: '2025.12', desc: t.founded },
            { value: '15+', desc: t.startupPrograms },
            { value: '10+', desc: t.mentoringSessions },
            { value: '3', desc: t.intlPartners },
            { value: '12+', desc: t.patentApps }
        ];
        statBoxes.forEach((box, i) => {
            if (statBoxData[i]) {
                const val = box.querySelector('.stat-value');
                const desc = box.querySelector('.stat-desc');
                if (desc) desc.textContent = statBoxData[i].desc;
            }
        });

        // ===== TEAM =====
        updateText('#team .section-label', 'teamLabel');
        updateText('#team .section-title', 'teamTitle');
        updateText('#team .section-description', 'teamDesc');

        const teamMembers = document.querySelectorAll('.team-member');
        const teamData = [
            { name: t.ceoName, title: t.ceoTitle, role: t.ceoRole },
            { name: t.ctoName, title: t.ctoTitle, role: t.ctoRole }
        ];
        teamMembers.forEach((member, i) => {
            if (teamData[i]) {
                const h3 = member.querySelector('h3');
                const title = member.querySelector('.member-title');
                const role = member.querySelector('.member-role');
                if (h3) h3.textContent = teamData[i].name;
                if (title) title.textContent = teamData[i].title;
                if (role) role.textContent = teamData[i].role;
            }
        });

        // Mission
        updateText('.mission-content h3', 'missionTitle');
        updateText('.mission-content > p', 'missionDesc');
        const goals = document.querySelectorAll('.mission-goal');
        const goalData = [
            { value: t.goal1Value, label: t.goal1Label },
            { value: t.goal2Value, label: t.goal2Label },
            { value: t.goal3Value, label: t.goal3Label }
        ];
        goals.forEach((goal, i) => {
            if (goalData[i]) {
                const val = goal.querySelector('.goal-value');
                const label = goal.querySelector('.goal-label');
                if (val) val.textContent = goalData[i].value;
                if (label) label.textContent = goalData[i].label;
            }
        });

        // Join Us
        const joinTitle = document.querySelectorAll('#team .subsection-title')[0];
        const joinDesc = document.querySelectorAll('#team .section-description')[1];
        if (joinTitle) joinTitle.textContent = t.joinUsTitle;
        if (joinDesc) joinDesc.textContent = t.joinUsDesc;

        const jobCards = document.querySelectorAll('.job-card');
        const jobData = [
            { type: t.job1Type, title: t.job1Title, desc: t.job1Desc },
            { type: t.job2Type, title: t.job2Title, desc: t.job2Desc },
            { type: t.job3Type, title: t.job3Title, desc: t.job3Desc }
        ];
        jobCards.forEach((card, i) => {
            if (jobData[i]) {
                const type = card.querySelector('.job-type');
                const h4 = card.querySelector('h4');
                const p = card.querySelector('p');
                const btn = card.querySelector('.job-apply');
                if (type) type.textContent = jobData[i].type;
                if (h4) h4.textContent = jobData[i].title;
                if (p) p.textContent = jobData[i].desc;
                if (btn && !btn.classList.contains('showing-email')) btn.textContent = t.applyNow;
            }
        });

        // ===== CONTACT =====
        updateText('#contact .section-label', 'contactLabel');
        updateText('#contact .section-title', 'contactTitle');
        updateText('#contact .section-description', 'contactDesc');
        updateText('.investor-content h3', 'investorTitle');
        updateText('.investor-content > p', 'investorDesc');

        const highlights = document.querySelectorAll('.highlight-item');
        const highlightData = [
            { label: t.stageLabel, value: t.stageValue },
            { label: t.focusLabel, value: t.focusValue },
            { label: t.marketLabel2, value: t.marketValue }
        ];
        highlights.forEach((item, i) => {
            if (highlightData[i]) {
                const label = item.querySelector('.highlight-label');
                const value = item.querySelector('.highlight-value');
                if (label) label.textContent = highlightData[i].label;
                if (value) value.textContent = highlightData[i].value;
            }
        });

        const contactBtn = document.querySelector('.investor-btn');
        if (contactBtn && !contactBtn.classList.contains('showing-email')) {
            contactBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> ' + t.contactUs;
        }
        updateText('.contact-location-inner span', 'location');

        // ===== FOOTER =====
        updateText('.footer-brand p', 'footerTagline');
        updateText('.footer-bottom p', 'copyright');

        // Footer links
        const footerLinks = document.querySelectorAll('.footer-links a');
        const footerLinkData = lang === 'kr' ? ['회사소개', '문제인식', '시장', '솔루션', '로드맵', '팀', '문의'] : ['About', 'The Challenge', 'Market', 'Solutions', 'Roadmap', 'Team', 'Contact'];
        footerLinks.forEach((link, i) => {
            if (footerLinkData[i]) link.textContent = footerLinkData[i];
        });

        // Update language toggle buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Store preference
        localStorage.setItem('piost-lang', lang);
    }

    // Initialize language toggle
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Check stored preference, default to Korean
    const storedLang = localStorage.getItem('piost-lang');
    if (storedLang && (storedLang === 'en' || storedLang === 'kr')) {
        setLanguage(storedLang);
    } else {
        setLanguage('kr');
    }
    // ============================================
    // Smooth Page Load
    // ============================================
    document.body.classList.add('loaded');

    // ============================================
    // Scroll Progress Indicator
    // ============================================
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // ============================================
    // Navbar Effects
    // ============================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    let ticking = false;

    function handleScroll() {
        const currentScroll = window.scrollY;

        // Navbar background
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (currentScroll / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';

        lastScroll = currentScroll;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });

    // ============================================
    // Smooth Scroll
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Mobile Menu
    // ============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // ============================================
    // Hero Animated Gradient Orbs
    // ============================================
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        for (let i = 1; i <= 3; i++) {
            const orb = document.createElement('div');
            orb.className = `gradient-orb gradient-orb-${i}`;
            heroBg.appendChild(orb);
        }
    }

    // ============================================
    // Snow Particles
    // ============================================
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        const sizes = ['small', 'medium', 'large'];
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            const size = sizes[Math.floor(Math.random() * 3)];
            particle.className = `floating-particle ${size}`;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = -10 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (8 + Math.random() * 12) + 's';
            heroParticles.appendChild(particle);
        }
    }

    // ============================================
    // Hero Lines Character-by-Character Animation
    // ============================================
    const heroLines = document.querySelectorAll('.hero-line');

    heroLines.forEach((line, lineIndex) => {
        const text = line.textContent;
        const isHighlight = line.classList.contains('highlight');
        line.textContent = '';
        line.style.opacity = '1';
        // Override transparent text fill for highlighted lines
        if (isHighlight) {
            line.style.webkitTextFillColor = 'unset';
            line.style.background = 'none';
        }

        // Split into characters and wrap each
        [...text].forEach((char, charIndex) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0.15';
            span.style.filter = 'blur(8px)';
            span.style.transform = 'translateY(15px) translateX(8px)';
            span.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            // Apply gradient to each span for highlight effect
            if (isHighlight) {
                span.style.background = 'linear-gradient(135deg, #ff4d6d 0%, #f472b6 100%)';
                span.style.webkitBackgroundClip = 'text';
                span.style.webkitTextFillColor = 'transparent';
                span.style.backgroundClip = 'text';
            }
            line.appendChild(span);

            // Staggered animation - blur to clear, bottom-right to original position
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.filter = 'blur(0px)';
                span.style.transform = 'translateY(0) translateX(0)';
            }, 400 + (lineIndex * 500) + (charIndex * 40));
        });
    });

    // Hero description fade in
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        heroDesc.style.opacity = '0';
        heroDesc.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroDesc.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            heroDesc.style.opacity = '1';
            heroDesc.style.transform = 'translateY(0)';
        }, 700);
    }

    // Hero buttons fade in
    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroButtons.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 900);
    }

    // ============================================
    // Intersection Observer for Reveals
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Section headers
    document.querySelectorAll('.section-header').forEach((el, i) => {
        el.classList.add('reveal-fade-up');
        revealObserver.observe(el);
    });

    // Vision box, about content
    document.querySelectorAll('.about-content-extended, .vision-box').forEach(el => {
        el.classList.add('reveal-fade-up');
        el.dataset.delay = 100;
        revealObserver.observe(el);
    });

    // Cards with stagger
    const cardSelectors = [
        '.stat-card', '.solution-card', '.milestone-card',
        '.use-case-card', '.job-card', '.program-category',
        '.pillar-column', '.team-member', '.challenge-block',
        '.foundation-card', '.target-market-card'
    ];

    document.querySelectorAll(cardSelectors.join(', ')).forEach((card, index) => {
        card.classList.add('reveal-scale');
        card.dataset.delay = (index % 4) * 80;
        revealObserver.observe(card);
    });

    // Why content sections
    document.querySelectorAll('.why-explanation, .why-hope').forEach((el, i) => {
        el.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right');
        revealObserver.observe(el);
    });

    // Timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.classList.add('reveal-timeline');
        item.dataset.delay = index * 150;
        revealObserver.observe(item);
    });

    // Timeline line animation
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-line');
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        timelineObserver.observe(timeline);
    }

    // Investor card
    document.querySelectorAll('.investor-card').forEach(el => {
        el.classList.add('reveal-scale');
        revealObserver.observe(el);
    });

    // Mission goals staggered reveal
    const missionGoals = document.querySelectorAll('.mission-goal');
    const missionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const goals = entry.target.querySelectorAll('.mission-goal');
                goals.forEach((goal, i) => {
                    setTimeout(() => {
                        goal.classList.add('revealed');
                    }, i * 200);
                });
                missionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const missionGoalsContainer = document.querySelector('.mission-goals');
    if (missionGoalsContainer) {
        missionObserver.observe(missionGoalsContainer);
    }

    // Highlight items staggered reveal
    const highlightsContainer = document.querySelector('.investor-highlights');
    if (highlightsContainer) {
        const highlightObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.highlight-item');
                    items.forEach((item, i) => {
                        setTimeout(() => {
                            item.classList.add('revealed');
                        }, i * 150);
                    });
                    highlightObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        highlightObserver.observe(highlightsContainer);
    }

    // ============================================
    // Subtle Parallax on Hero
    // ============================================
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 800);
        }
    }, { passive: true });

    // ============================================
    // Elegant Card Hover Effects
    // ============================================
    const hoverCards = document.querySelectorAll('.stat-card, .solution-card, .team-member, .use-case-card, .job-card, .milestone-card');

    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // ============================================
    // Counter Animation
    // ============================================
    function animateCounter(element, target, duration = 2000, suffix = '') {
        const start = performance.now();
        element.classList.add('counting');

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeProgress * target);

            const unitEl = element.querySelector('.stat-unit');
            if (unitEl) {
                element.innerHTML = current.toLocaleString() + unitEl.outerHTML;
            } else {
                element.textContent = current.toLocaleString() + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                setTimeout(() => element.classList.remove('counting'), 300);
            }
        }

        requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent.trim();
                // Skip year.month format (e.g. "2025.12")
                if (/^\d{4}\.\d{1,2}$/.test(text)) {
                    counterObserver.unobserve(entry.target);
                    return;
                }
                const num = parseFloat(text.replace(/[,+x]/g, ''));

                if (!isNaN(num)) {
                    let suffix = '';
                    if (text.includes('+')) suffix = '+';
                    else if (text.includes('x')) suffix = 'x';

                    animateCounter(entry.target, num, 2000, suffix);
                }
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number, .stat-value').forEach(el => {
        counterObserver.observe(el);
    });

    // ============================================
    // Button Ripple Effect
    // ============================================
    document.querySelectorAll('.btn, .contact-btn').forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';

        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'btn-ripple';
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ============================================
    // Email Reveal & Copy
    // ============================================
    document.querySelectorAll('.email-reveal-btn').forEach(button => {
        const email = button.dataset.email;
        const originalText = button.innerHTML;
        let isShowing = false;

        button.addEventListener('click', async function() {
            if (!isShowing) {
                // Show email
                isShowing = true;
                this.classList.add('showing-email');
                this.innerHTML = `${email} <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
            } else {
                // Copy email
                try {
                    await navigator.clipboard.writeText(email);
                    this.classList.add('copied');
                    this.innerHTML = `Copied! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

                    setTimeout(() => {
                        this.classList.remove('copied', 'showing-email');
                        this.innerHTML = originalText;
                        isShowing = false;
                    }, 2000);
                } catch (err) {
                    // Fallback
                    const textArea = document.createElement('textarea');
                    textArea.value = email;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);

                    this.classList.add('copied');
                    this.innerHTML = `Copied!`;

                    setTimeout(() => {
                        this.classList.remove('copied', 'showing-email');
                        this.innerHTML = originalText;
                        isShowing = false;
                    }, 2000);
                }
            }
        });
    });

    // ============================================
    // Dynamic Styles
    // ============================================
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        /* Page load */
        body {
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        body.loaded {
            opacity: 1;
        }

        /* Scroll Progress */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), #fb7185, var(--primary));
            background-size: 200% 100%;
            z-index: 9999;
            transition: width 0.15s ease;
            animation: progressGradient 3s linear infinite;
        }

        @keyframes progressGradient {
            0% { background-position: 0% 0%; }
            100% { background-position: 200% 0%; }
        }

        /* Stat number glow on count */
        .stat-number.counting {
            color: var(--primary);
            text-shadow: 0 0 20px rgba(225, 29, 72, 0.3);
        }

        /* Reveal Animations */
        .reveal-fade-up {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-fade-up.revealed {
            opacity: 1;
            transform: translateY(0);
        }

        .reveal-scale {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
            transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-scale.revealed {
            opacity: 1;
            transform: scale(1) translateY(0);
        }

        .reveal-left {
            opacity: 0;
            transform: translateX(-40px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-left.revealed {
            opacity: 1;
            transform: translateX(0);
        }

        .reveal-right {
            opacity: 0;
            transform: translateX(40px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-right.revealed {
            opacity: 1;
            transform: translateX(0);
        }

        .reveal-timeline {
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-timeline.revealed {
            opacity: 1;
            transform: translateX(0);
        }

        /* Navbar */
        .navbar {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Mobile menu */
        .nav-menu.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            padding: 1.5rem;
            gap: 1rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            animation: menuSlideDown 0.3s ease;
        }

        @keyframes menuSlideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .nav-menu.active a {
            color: var(--text-primary) !important;
        }

        .mobile-menu-btn span {
            transition: all 0.3s ease;
        }

        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Button Ripple */
        .btn-ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        /* Card transitions */
        .stat-card, .solution-card, .team-member,
        .use-case-card, .job-card, .milestone-card {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
    `;
    document.head.appendChild(dynamicStyles);
});

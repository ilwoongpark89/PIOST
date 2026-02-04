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
            carnotExplain: "From Heat Storage to Power Generation",
            carnotExplainDesc: "A Carnot Battery is a thermal energy storage system that can convert stored heat back into electricity. It works in three stages: (1) Charge—convert excess electricity into high-temperature heat using resistance heaters or heat pumps; (2) Store—retain the thermal energy in solid media like rock at temperatures up to 1,000°C; (3) Discharge—generate electricity through a steam turbine or other heat engine when needed.",
            carnotAdvantage: "Advantages Over Alternatives",
            carnotAdvantageDesc: "Carnot Batteries offer a unique combination of long duration (8–24+ hours), low cost ($50–150/kWh vs. $200–400 for lithium-ion), scalability to GWh levels, and the ability to provide both electricity and heat. They're ideal for replacing fossil fuel peaker plants and enabling 100% renewable grids.",

            // Market
            marketLabel: "Market Opportunity",
            marketTitle: "The Growing Demand for Energy Storage",
            marketDesc: "Global energy storage capacity must increase dramatically to meet net-zero targets. Thermal storage offers the lowest-cost solution for long-duration applications.",
            stat1Value: "500",
            stat1Label: "TES Market by 2030",
            stat1Desc: "Global thermal energy storage market projected to reach $500B+ annually",
            stat1Source: "Source: IEA World Energy Outlook 2024",
            stat2Value: "3",
            stat2Label: "Annual Growth Rate",
            stat2Desc: "Energy storage deployment growing 3x faster than renewable generation",
            stat2Source: "Source: BloombergNEF 2024",
            stat3Value: "70",
            stat3Label: "Cost Reduction Potential",
            stat3Desc: "TES can achieve 70% lower LCOS than lithium-ion for 8+ hour storage",
            stat3Source: "Source: NREL Cost Projections 2024",
            driversTitle: "Key Market Drivers",
            driver1Title: "Net-Zero Commitments",
            driver1Desc: "150+ countries committed to carbon neutrality by 2050, requiring massive energy storage deployment",
            driver2Title: "Renewable Curtailment",
            driver2Desc: "Growing solar/wind overcapacity creates economic incentive for long-duration storage",
            driver3Title: "Grid Modernization",
            driver3Desc: "Aging infrastructure and increasing electrification demand flexible storage solutions",

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
            milestone3Title: "Global Testbed",
            milestone3Desc: "MOU signed for Mongolia testbed partnership to validate TES under extreme cold-climate conditions",
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
            phase3Items: ["Establish manufacturing facility for volume production", "Launch Heating-as-a-Service (HaaS) subscription model", "Expand to Northern and Central European markets", "Develop utility-scale Carnot Battery systems for grid storage", "Target break-even and path to profitability"],
            year2031: "2031+",
            phase4Title: "Global Leadership",
            phase4Items: ["Become a leading Carnot Battery solution provider globally", "Expand to Asia-Pacific and North American markets", "Develop next-generation ultra-high-temperature systems", "Contribute to global net-zero energy transition goals"],

            // Track Record
            trackRecordTitle: "Track Record",
            bizDev: "Business Development",
            program1Name: "Youth Startup Academy",
            program1Desc: "Business plan development and legal entity formation",
            program2Name: "Lab-driven Startup Program",
            program2Desc: "Innovation Lab commercialization support",
            program3Name: "IP R&D Strategy Consulting",
            program3Desc: "Intellectual property portfolio development",
            investFunding: "Investment & Funding",
            program4Name: "TIPS Program",
            program4Desc: "Government-backed VC mentoring program",
            program5Name: "TIPS Challenge",
            program5Desc: "Investor pitch competition finalist",
            program6Name: "IR Sessions",
            program6Desc: "Regular investor relations activities",
            globalExpansion: "Global Expansion",
            program7Name: "Gladiator Program - Mongolia",
            program7Desc: "MOU signing with YN E Tulga",
            program8Name: "PickPack Partnership",
            program8Desc: "2025 Global R&D Creator collaboration",
            program9Name: "KOMIR Partnership",
            program9Desc: "Strategic partnership in Mongolia",
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
            focusValue: "Prototype & Pilot",
            marketLabel2: "Market",
            marketValue: "Korea & Asia",
            contactUs: "Contact Us",
            location: "Incheon, South Korea",

            // Footer
            footerTagline: "Advancing Sustainable Thermal Energy Storage Technology",
            copyright: "© 2025 PIOST Inc. All rights reserved."
        },
        kr: {
            // Hero
            heroLabel: "열에너지 저장 및 활용 기술",
            heroLine1: "열로 여는",
            heroLine2: "탄소중립 시대",
            heroLine3: "",
            heroDesc: "PIOST는 잉여 재생에너지를 고온의 열로 저장했다가 필요할 때 전기로 되돌리는 열에너지 저장(TES) 시스템과 카르노 배터리를 개발합니다. 변동성 높은 재생에너지와 안정적인 전력 공급 사이의 간극을 메워, 24시간 끊김 없는 청정에너지 시대를 앞당깁니다.",
            heroBtn1: "더 알아보기",
            heroBtn2: "문의하기",

            // About
            aboutLabel: "회사 소개",
            aboutTitle: "탄소중립을 앞당기는 열에너지 기술",
            aboutDesc: "PIOST는 2025년 설립된 딥테크 스타트업입니다. 열에너지 저장 및 활용 기술을 통해 탄소중립 실현에 기여하고자 합니다. 남는 재생에너지를 1,000°C 이상의 고온 열로 저장하고, 필요할 때 전기나 열로 다시 꺼내 쓰는 핵심 기술을 개발하고 있습니다.",
            aboutExtended: "전 세계는 재생에너지 전환이라는 거대한 흐름 속에 있지만, 태양광과 풍력은 본질적으로 간헐적입니다. 해가 지고 바람이 멎으면 전력 공급이 불안정해지고, 결국 화석연료 발전소가 그 빈자리를 메워야 합니다. PIOST는 암석, 모래 등 어디서나 구할 수 있는 저렴한 소재로 열을 저장해 이 문제를 해결합니다. 리튬이온 배터리 대비 훨씬 낮은 비용으로 장시간 에너지를 저장할 수 있는 카르노 배터리 기술로, 24시간 안정적인 청정에너지 공급의 길을 열어갑니다.",

            // Why TES
            challengeLabel: "우리가 푸는 문제",
            whyTesTitle: "왜 열에너지 저장인가",
            whatIsTes: "열에너지 저장(TES)이란?",
            whatIsTesDesc: "열에너지 저장(TES)은 에너지를 '열'의 형태로 담아두었다가 필요할 때 꺼내 쓰는 기술입니다. 전기를 화학반응으로 저장하는 리튬이온 배터리와 달리, TES는 암석, 모래, 용융염 같은 물질에 수백~수천 도의 열을 축적합니다. 저장된 열은 난방에 직접 활용하거나, 증기터빈을 돌려 전기로 변환할 수 있습니다.",
            whyTesMatters: "에너지 전환 시대, TES가 답인 이유",
            whyTesMattersDesc1: "재생에너지 확대의 가장 큰 걸림돌은 '간헐성'입니다. 햇빛이 없는 밤, 바람이 잦아든 순간에는 태양광·풍력 발전량이 급감합니다. 발전량과 수요의 시간대가 어긋나면 남는 전기는 버려지고, 부족할 땐 화석연료 발전소가 가동되어야 합니다.",
            whyTesMattersDesc2: "TES는 이 간극을 메우는 가장 현실적인 해법입니다. 열은 최소한의 손실로 수 시간에서 며칠까지 저장할 수 있고, 저장 매체인 암석과 모래는 전 세계 어디서나 저렴하게 구할 수 있습니다. 리튬이나 코발트 같은 희소 광물이 필요 없고, 화재나 폭발 위험도 없어 안전합니다.",
            tesAdvantage: "TES의 경쟁력",
            tesAdvantageDesc1: "TES 기술은 이미 전 세계 집광형 태양열발전소(CSP)에서 6.5GW 이상 상용화되어 검증된 기술입니다. 핵심 소재인 암석, 모래, 강철은 공급망 리스크 없이 안정적으로 확보할 수 있습니다.",
            tesAdvantageDesc2: "시스템 수명 30년 이상, 성능 저하 거의 없음. 주거용 난방부터 대규모 전력망 관리까지 다양한 분야에서 리튬이온 배터리 대비 압도적인 총소유비용(TCO) 경쟁력을 갖춥니다.",

            // Why Carnot
            whyCarnotTitle: "왜 카르노 배터리인가",
            carnotExplain: "저장한 열을 다시 전기로",
            carnotExplainDesc: "카르노 배터리는 열 저장과 발전을 결합한 시스템입니다. ① 충전: 잉여 전기를 저항히터나 히트펌프로 고온의 열로 변환 ② 저장: 암석 등 고체 매체에 최대 1,000°C 이상의 열을 보관 ③ 방전: 필요할 때 증기터빈을 돌려 전기를 생산. 열과 전기, 두 가지 형태로 에너지를 공급할 수 있어 활용도가 높습니다.",
            carnotAdvantage: "기존 기술 대비 장점",
            carnotAdvantageDesc: "카르노 배터리는 8~24시간 이상의 장주기 저장이 가능하면서도, kWh당 $50~150 수준의 낮은 비용을 실현합니다(리튬이온 $200~400 대비). GWh급 대용량 확장이 용이하고, 전기와 열을 동시에 공급할 수 있어 화석연료 피크발전소 대체와 100% 재생에너지 전력망 구현에 최적입니다.",

            // Market
            marketLabel: "시장 기회",
            marketTitle: "급성장하는 에너지 저장 시장",
            marketDesc: "2050 탄소중립 달성을 위해 전 세계 에너지 저장 용량은 지금의 수십 배로 늘어나야 합니다. 장주기 저장 분야에서 열에너지 저장은 가장 경제적인 솔루션으로 주목받고 있습니다.",
            stat1Value: "500",
            stat1Label: "2030년 시장 규모",
            stat1Desc: "글로벌 열에너지 저장 시장, 연간 5,000억 달러 이상 전망",
            stat1Source: "출처: IEA 세계에너지전망 2024",
            stat2Value: "3",
            stat2Label: "배 성장률",
            stat2Desc: "에너지 저장 시장, 재생에너지 발전 대비 3배 빠른 성장세",
            stat2Source: "출처: BloombergNEF 2024",
            stat3Value: "70",
            stat3Label: "% 비용 절감",
            stat3Desc: "8시간 이상 저장 시 TES는 리튬이온 대비 균등화저장비용(LCOS) 70% 절감 가능",
            stat3Source: "출처: NREL 비용 전망 2024",
            driversTitle: "시장을 움직이는 힘",
            driver1Title: "글로벌 탄소중립 선언",
            driver1Desc: "전 세계 150개국 이상이 2050년 넷제로를 약속. 대규모 에너지 저장 인프라 확충 필수",
            driver2Title: "재생에너지 잉여 전력 급증",
            driver2Desc: "태양광·풍력 설비 과잉으로 버려지는 전력 증가. 장주기 저장 수요 폭발적 성장",
            driver3Title: "전력망 고도화 요구",
            driver3Desc: "노후 인프라 교체, 전기차·데이터센터 등 전력 수요 급증으로 유연한 저장 솔루션 필요",

            // Technology Comparison
            comparisonTitle: "기술 비교",
            comparisonDesc: "주요 열에너지 저장 기업과 PIOST의 기술 비교",

            // Applications
            applicationsTitle: "적용 분야",
            applicationsDesc: "PIOST 기술이 만드는 변화",
            app1Title: "지역난방",
            app1Region: "한랭 기후 지역",
            app1Desc: "재생에너지로 저장한 열을 활용해 주거·상업 건물에 24시간 청정 난방 공급",
            app2Title: "산업 공정열",
            app2Region: "탈탄소 난제 업종",
            app2Desc: "철강, 시멘트, 화학 등 고온(500~1,000°C) 공정열이 필요한 산업의 탈탄소화 지원",
            app3Title: "재생에너지 출력 안정화",
            app3Region: "태양광·풍력 연계",
            app3Desc: "남는 발전량을 저장했다가 피크 시간대에 방전. 재생에너지 이용률 극대화",
            app4Title: "전력망 장주기 저장",
            app4Region: "8~24시간 이상",
            app4Desc: "대규모 에너지 저장으로 전력 수급 균형. 화석연료 피크발전소 대체",

            // Solutions
            solutionsLabel: "우리의 접근법",
            strategyTitle: "기술 전략",
            strategyDesc: "PIOST는 검증된 열 저장 원리에 독자적인 고효율 열교환 기술을 접목합니다.",

            // Milestones
            milestonesTitle: "탄탄한 기술적 기반",
            milestone1Title: "깊이 있는 연구 역량",
            milestone1Desc: "증기 생성, 이상(二相) 유동, 고온 열시스템 분야에서 축적된 연구 경험",
            milestone2Title: "12건 이상 특허 출원",
            milestone2Desc: "핵심 열에너지 저장 및 열교환 기술 관련 국내외 특허 포트폴리오 구축",
            milestone3Title: "글로벌 실증 파트너십",
            milestone3Desc: "극한 한랭 기후에서 기술을 검증할 몽골 현지 테스트베드 MOU 체결",
            milestone4Title: "대학 연구실 스핀오프",
            milestone4Desc: "인하대학교 MFTEL(다상유동·열공학연구실)의 10년 이상 연구 성과를 기반으로 창업",
            visitLab: "MFTEL 연구실 보기",

            // Roadmap
            roadmapLabel: "로드맵",
            roadmapTitle: "시장 진출 로드맵",
            roadmapDesc: "기술 검증부터 글로벌 상용화까지, 단계별 성장 전략",
            year2026: "2026",
            now: "현재",
            phase1Title: "기술 검증 및 시드 투자 유치",
            phase1Items: ["TES 프로토타입 개발 및 실험실 규모 실증 완료", "핵심 기술(1,000°C급 저장, 하이브리드 증기 생성) 성능 검증", "몽골 한랭 기후 실증 프로젝트 착수", "시드 투자 유치 및 액셀러레이터 프로그램 참여", "PCT 국제특허 출원으로 글로벌 IP 확보"],
            year2027: "2027-28",
            phase2Title: "파일럿 구축 및 시리즈 A",
            phase2Items: ["몽골, 유럽 등에 상용 규모 파일럿 시스템 설치·운영", "CE 인증 등 국제 제품 인증 획득", "Horizon Europe, EIC Accelerator, KOICA 등 글로벌 프로그램 참여", "유럽 에너지 기업과 전략적 파트너십 체결", "시리즈 A 투자 유치로 양산 체제 준비"],
            year2029: "2029-30",
            phase3Title: "본격 상용화 및 시장 확대",
            phase3Items: ["양산 설비 구축 및 제조 원가 절감", "Heating-as-a-Service(HaaS) 구독형 비즈니스 모델 출시", "북유럽, 중앙유럽 시장 본격 진출", "전력망급 대용량 카르노 배터리 시스템 개발", "손익분기점 달성 및 흑자 전환"],
            year2031: "2031+",
            phase4Title: "글로벌 리더로 도약",
            phase4Items: ["카르노 배터리 분야 글로벌 선도 기업으로 자리매김", "아시아태평양, 북미 시장 진출", "차세대 초고온 저장 시스템 개발", "전 세계 탄소중립 달성에 실질적 기여"],

            // Track Record
            trackRecordTitle: "지금까지의 발자취",
            bizDev: "사업화 지원",
            program1Name: "청년창업사관학교",
            program1Desc: "사업계획 수립 및 법인 설립 완료",
            program2Name: "연구실 창업 지원 사업",
            program2Desc: "대학 연구 성과 사업화 프로그램 선정",
            program3Name: "IP R&D 전략 컨설팅",
            program3Desc: "특허 포트폴리오 전략 수립",
            investFunding: "투자·펀딩",
            program4Name: "TIPS 프로그램",
            program4Desc: "민간 VC 연계 정부 R&D 지원 프로그램",
            program5Name: "TIPS 챌린지",
            program5Desc: "투자 피칭 경진대회 본선 진출",
            program6Name: "IR 활동",
            program6Desc: "국내외 투자자 대상 정기 IR 진행",
            globalExpansion: "글로벌 협력",
            program7Name: "글래디에이터 - 몽골",
            program7Desc: "YN E Tulga사와 현지 사업 협력 MOU",
            program8Name: "픽팩 파트너십",
            program8Desc: "2025 글로벌 R&D 크리에이터 선정",
            program9Name: "KOMIR 협력",
            program9Desc: "몽골 에너지 분야 전략적 파트너십",
            founded: "법인 설립",
            startupPrograms: "창업 프로그램",
            mentoringSessions: "멘토링 세션",
            intlPartners: "해외 파트너",
            patentApps: "특허 출원",

            // Team
            teamLabel: "팀 소개",
            teamTitle: "함께 만드는 사람들",
            teamDesc: "사업 전략과 열공학 기술, 두 축의 전문성을 결합한 창업팀",
            ceoName: "송준범",
            ceoTitle: "CEO & 공동창업자",
            ceoRole: "시장 분석, 사업 전략 수립",
            ctoName: "박일웅",
            ctoTitle: "CTO & 공동창업자",
            ctoRole: "R&D 총괄, 핵심 기술 개발",
            missionTitle: "우리가 이 일을 하는 이유",
            missionDesc: "해가 질 때도, 바람이 멎을 때도 청정에너지가 끊기지 않는 세상. 우리는 그 세상을 만들기 위해 모였습니다. 재생에너지 100% 전력망을 현실로 만들어, 탈탄소화가 누구에게나 가능한 선택이 되도록 하겠습니다.",
            goal1Value: "2050",
            goal1Label: "넷제로 실현",
            goal2Value: "24/7",
            goal2Label: "무중단 청정에너지",
            goal3Value: "100%",
            goal3Label: "재생에너지 전력망",
            joinUsTitle: "함께할 동료를 찾습니다",
            joinUsDesc: "탄소중립 시대를 여는 여정에 함께하세요",
            job1Type: "엔지니어링",
            job1Title: "열시스템 엔지니어",
            job1Desc: "고온 열저장 시스템 설계 및 최적화. 열전달, 전산유체역학(CFD) 경험자 우대",
            job2Type: "엔지니어링",
            job2Title: "제어·시뮬레이션 엔지니어",
            job2Desc: "디지털 트윈, AI 기반 운영 최적화 시스템 개발",
            job3Type: "사업개발",
            job3Title: "비즈니스 개발 담당",
            job3Desc: "유럽·아시아 시장 개척 및 파트너십 구축. 에너지 업계 경험자 우대",
            applyNow: "지원하기",

            // Contact
            contactLabel: "투자자 여러분께",
            contactTitle: "함께 성장할 파트너를 찾습니다",
            contactDesc: "PIOST와 함께 탄소중립 시대를 열어갈 투자자, 파트너사의 연락을 기다립니다.",
            investorTitle: "투자 및 파트너십 문의",
            investorDesc: "PIOST는 프로토타입 고도화와 해외 파일럿 구축을 위한 시드 투자를 유치하고 있습니다. 열에너지 저장 시장의 성장 가능성에 관심 있는 투자자, 전략적 파트너, 에너지 기업의 연락을 환영합니다.",
            stageLabel: "투자 단계",
            stageValue: "프리시드 / 시드",
            focusLabel: "현재 집중",
            focusValue: "프로토타입 · 파일럿",
            marketLabel2: "목표 시장",
            marketValue: "한국 · 아시아",
            contactUs: "연락하기",
            location: "인천광역시, 대한민국",

            // Footer
            footerTagline: "열에너지 저장 기술로 지속가능한 미래를 만듭니다",
            copyright: "© 2025 PIOST Inc. All rights reserved."
        }
    };

    let currentLang = 'en';

    // Language switching function
    function setLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];

        // Update nav menu links
        document.querySelectorAll('.nav-menu a[data-en]').forEach(el => {
            el.textContent = el.dataset[lang];
        });

        // Update all translatable elements
        const updateText = (selector, key) => {
            const el = document.querySelector(selector);
            if (el && t[key]) el.textContent = t[key];
        };

        const updateHTML = (selector, key) => {
            const el = document.querySelector(selector);
            if (el && t[key]) el.innerHTML = t[key];
        };

        // Hero
        updateText('.hero-label', 'heroLabel');
        const heroLines = document.querySelectorAll('.hero-line');
        if (heroLines[0]) heroLines[0].textContent = t.heroLine1;
        if (heroLines[1]) heroLines[1].textContent = t.heroLine2;
        if (heroLines[2]) heroLines[2].textContent = t.heroLine3;
        updateText('.hero-description', 'heroDesc');
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        if (heroButtons[0]) heroButtons[0].textContent = t.heroBtn1;
        if (heroButtons[1]) heroButtons[1].textContent = t.heroBtn2;

        // About
        updateText('#about .section-label', 'aboutLabel');
        updateText('#about .section-title', 'aboutTitle');
        updateText('#about .section-description', 'aboutDesc');
        updateText('.about-content-extended p', 'aboutExtended');

        // Why TES
        updateText('#why-tes .section-label', 'challengeLabel');
        updateText('#why-tes .subsection-title', 'whyTesTitle');
        const whyExplanation = document.querySelectorAll('.why-explanation h3');
        const whyExplanationP = document.querySelectorAll('.why-explanation p');
        if (whyExplanation[0]) whyExplanation[0].textContent = t.whatIsTes;
        if (whyExplanationP[0]) whyExplanationP[0].textContent = t.whatIsTesDesc;
        if (whyExplanation[1]) whyExplanation[1].textContent = t.whyTesMatters;
        if (whyExplanationP[1]) whyExplanationP[1].textContent = t.whyTesMattersDesc1;
        if (whyExplanationP[2]) whyExplanationP[2].textContent = t.whyTesMattersDesc2;
        updateText('.hope-card h4', 'tesAdvantage');
        const hopeP = document.querySelectorAll('.hope-card p');
        if (hopeP[0]) hopeP[0].textContent = t.tesAdvantageDesc1;
        if (hopeP[1]) hopeP[1].textContent = t.tesAdvantageDesc2;

        // Market
        updateText('#market .section-label', 'marketLabel');
        updateText('#market .section-title', 'marketTitle');
        updateText('#market .section-description', 'marketDesc');

        // Applications
        const appSection = document.querySelector('#market');
        if (appSection) {
            const appTitle = appSection.querySelectorAll('.subsection-title')[1];
            if (appTitle) appTitle.textContent = t.applicationsTitle;
        }

        // Team Mission
        updateText('.mission-content h3', 'missionTitle');
        updateText('.mission-content > p', 'missionDesc');

        // Join Us
        const joinUsTitle = document.querySelectorAll('#team .subsection-title')[0];
        if (joinUsTitle) joinUsTitle.textContent = t.joinUsTitle;

        // Contact
        updateText('#contact .section-label', 'contactLabel');
        updateText('#contact .section-title', 'contactTitle');
        updateText('#contact .section-description', 'contactDesc');
        updateText('.investor-content h3', 'investorTitle');
        updateText('.investor-content > p', 'investorDesc');
        updateText('.contact-location-inner span', 'location');

        // Footer
        updateText('.footer-brand p', 'footerTagline');
        updateText('.footer-bottom p', 'copyright');

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

    // Check stored preference
    const storedLang = localStorage.getItem('piost-lang');
    if (storedLang && (storedLang === 'en' || storedLang === 'kr')) {
        setLanguage(storedLang);
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
    // Hero Lines Reveal Animation
    // ============================================
    const heroLines = document.querySelectorAll('.hero-line');
    heroLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(30px)';

        setTimeout(() => {
            line.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
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
        '.foundation-card'
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

    // Investor card
    document.querySelectorAll('.investor-card').forEach(el => {
        el.classList.add('reveal-scale');
        revealObserver.observe(el);
    });

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
            }
        }

        requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent.trim();
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
            height: 2px;
            background: linear-gradient(90deg, var(--primary), #fb7185);
            z-index: 9999;
            transition: width 0.1s ease;
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
            transform: scale(0.95);
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-scale.revealed {
            opacity: 1;
            transform: scale(1);
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

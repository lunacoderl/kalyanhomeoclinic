export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  alt: string;
  isHomeFeatured?: boolean;
  overview: string;
  rootCauses: string[];
  commonConcerns: string[];
  consultationInvolves: string[];
  homeopathicApproach: string[];
  dietAndLifestyle: string[];
  whenToSeekAdvice: string;
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "pcod-pcos",
    slug: "pcod-pcos",
    title: "PCOD / PCOS",
    shortDescription: "Hormonal balance and women's health consultation with individualized constitutional care.",
    image: "/services/service-01.webp",
    alt: "PCOD and PCOS health consultation at Kalyan Homeo Care",
    isHomeFeatured: true,
    overview: "Polycystic Ovarian Disease (PCOD) and Polycystic Ovary Syndrome (PCOS) are prevalent endocrine-metabolic conditions affecting women of reproductive age. In PCOD, the ovaries produce immature or partially matured eggs, developing into multiple follicular cysts accompanied by hormonal fluctuations. Homeopathic consultation at Kalyan Homeo Care addresses the deeper neuro-endocrine dysregulation, insulin sensitivity, and constitutional traits unique to each patient rather than relying solely on hormonal suppression.",
    rootCauses: [
      "Insulin resistance leading to elevated circulating androgen levels",
      "Chronic low-grade systemic inflammation and oxidative stress",
      "Genetic predisposition and familial history of metabolic disorders",
      "Prolonged emotional stress disrupting hypothalamic-pituitary-ovarian (HPO) axis",
      "Sedentary lifestyle and dietary patterns high in refined carbohydrates"
    ],
    commonConcerns: [
      "Irregular, delayed, scanty, or prolonged menstrual cycles (oligomenorrhea)",
      "Unexplained weight gain, central adiposity, and difficulty losing weight",
      "Persistent adult acne, facial hirsutism, and hormonal pigmentation (acanthosis nigricans)",
      "Hormonal hair thinning and male-pattern alopecia along the crown",
      "Mood swings, anxiety, chronic fatigue, and sleep cycle disruptions",
      "Anovulation and subfertility challenges"
    ],
    consultationInvolves: [
      "In-depth analysis of menstrual chronology from menarche to current cycle patterns",
      "Evaluation of emotional temperament, stress responses, and dietary cravings",
      "Comprehensive review of pelvic ultrasound (USG) and hormone profiles (LH, FSH, AMH, TSH, fasting insulin)",
      "Personalized constitutional homeopathic remedy selection to restore natural ovarian rhythm",
      "Regular periodic monitoring to observe cycle normalization and symptom improvement"
    ],
    homeopathicApproach: [
      "Constitutional medicines such as Pulsatilla, Sepia, Natrum Muriaticum, and Calcarea Carbonica selected according to individual physical and emotional traits",
      "Natural regulation of the pituitary-ovarian feedback loop without artificial hormones",
      "Supportive improvement of insulin receptor sensitivity and metabolic processing",
      "Non-habit-forming, gentle, and free from synthetic hormonal side effects"
    ],
    dietAndLifestyle: [
      "Prioritize low-glycemic, anti-inflammatory whole foods (millets, leafy greens, seeds)",
      "Maintain a 15-minute daily brisk walking or yoga routine for insulin sensitization",
      "Ensure 7 to 8 hours of restorative sleep to balance cortisol and melatonin rhythms",
      "Minimize processed sugars, trans-fats, and environmental endocrine disruptors"
    ],
    whenToSeekAdvice: "Consult if you experience sudden menstrual absence exceeding 45-60 days, severe debilitating pelvic pain, or rapid metabolic weight gain.",
    faqs: [
      {
        question: "How does homeopathic treatment help in PCOD/PCOS?",
        answer: "Homeopathic care aims to gently stimulate natural ovarian function and balance the pituitary-ovarian axis through individual constitutional analysis, restoring natural ovulation and cycle regularity without artificial hormones."
      },
      {
        question: "How long does it take to see results in PCOD?",
        answer: "Most patients observe noticeable improvements in cycle regularity, skin clarity, and energy within 3 to 6 months of disciplined constitutional homeopathic care and lifestyle alignment."
      },
      {
        question: "Can homeopathy help in conceiving with PCOS?",
        answer: "Yes, by restoring regular spontaneous ovulation and improving uterine endometrium health, constitutional homeopathy significantly enhances natural fertility potential."
      },
      {
        question: "What medical reports should I bring for consultation?",
        answer: "Please bring recent pelvic ultrasound reports (USG pelvis), thyroid profiles (TSH, FT3, FT4), fasting blood glucose, and hormone panels (FSH, LH, Prolactin, AMH)."
      }
    ],
    seoTitle: "PCOD & PCOS Homeopathy Consultation in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Personalized homeopathic care for PCOD/PCOS with Dr. Ch. Ravi Kumar, M.D. in Visakhapatnam. Gentle constitutional support for hormonal wellness.",
    keywords: ["PCOD homeopathy Visakhapatnam", "PCOS doctor Vizag", "women hormone homeopathy consultation", "Kalyan Homeo Care PCOD"]
  },
  {
    id: "thyroid-problems",
    slug: "thyroid-problems",
    title: "Thyroid Problems",
    shortDescription: "Comprehensive consultation and supportive care for hypothyroidism and hyperthyroidism.",
    image: "/services/service-02.webp",
    alt: "Thyroid-related health consultation at Kalyan Homeo Care Visakhapatnam",
    isHomeFeatured: true,
    overview: "Thyroid dysfunctions, encompassing primary hypothyroidism, Hashimoto's autoimmune thyroiditis, goiter, and hyperthyroid states, represent complex systemic metabolic imbalances. In homeopathy, the thyroid gland is viewed not in isolation, but as part of the neuro-endocrine matrix influenced by chronic stress, emotional suppression, and inherited miasmatic susceptibilities.",
    rootCauses: [
      "Autoimmune attack against thyroid tissue (Hashimoto's or Graves' disease)",
      "Prolonged psychological strain affecting pituitary TSH feedback regulation",
      "Nutritional deficiencies (iodine, selenium, zinc, and vitamin D3)",
      "Familial endocrine tendencies and post-pregnancy hormonal transitions"
    ],
    commonConcerns: [
      "Chronic unremitting fatigue, brain fog, and daytime lethargy",
      "Stubborn weight gain despite reduced appetite and regular routine",
      "Marked intolerance to cold temperatures, dry scaly skin, and brittle nails",
      "Diffuse hair loss, eyebrow thinning (lateral third), and facial puffiness",
      "Depression, emotional apathy, memory lapses, and constipation",
      "Irregular, heavy, or delayed menstrual bleeding"
    ],
    consultationInvolves: [
      "Detailed chronological evaluation of TSH, Free T3, Free T4, and Anti-TPO antibodies",
      "Thermal assessment (sensitivity to drafts, heat, or seasonal variations)",
      "Evaluation of digestion, metabolic rate, emotional disposition, and sleep patterns",
      "Formulation of non-toxic constitutional remedies to stimulate natural glandular harmony",
      "Sequential lab monitoring to evaluate glandular stabilization over time"
    ],
    homeopathicApproach: [
      "Constitutional remedies like Thyroidinum, Iodum, Calcarea Carbonica, Sepia, and Natrum Muriaticum tailored to personal symptom totality",
      "Strengthens immune surveillance to modulate autoimmune antibody titers",
      "Completely compatible with current conventional thyroid hormone therapy without sudden disruption",
      "Alleviates associated secondary complaints such as joint stiffness and mental fatigue"
    ],
    dietAndLifestyle: [
      "Incorporate selenium and zinc-rich foods (brazil nuts, pumpkin seeds, whole lentils)",
      "Avoid raw goitrogenic vegetables in excess (lightly steam cabbage, cauliflower, broccoli)",
      "Practice diaphragmatic breathing and gentle yoga (Sarvangasana, Ujjayi pranayama)",
      "Maintain consistent morning sunlight exposure to support circadian thyroid rhythms"
    ],
    whenToSeekAdvice: "Consult promptly if you experience visible anterior neck swelling (goiter), cardiac palpitations, extreme tremors, or severe mood fluctuations.",
    faqs: [
      {
        question: "Can I take homeopathic medicine along with my thyroxine tablets?",
        answer: "Yes. Homeopathic remedies do not chemically interact with synthetic thyroxine (Eltroxin/Thyronorm). You can safely take both, maintaining a 30-minute interval. As thyroid function improves, dosages can be reviewed based on lab reports."
      },
      {
        question: "Can hypothyroidism be cured permanently with homeopathy?",
        answer: "Homeopathy aims to stimulate natural thyroid glandular activity and modulate autoimmune activity. In subclinical or recent cases, significant recovery is frequently attained."
      },
      {
        question: "How does homeopathy address autoimmune Hashimoto's thyroiditis?",
        answer: "By modulating the hyperactive immune response and reducing inflammatory anti-TPO antibodies through deep-acting constitutional remedies."
      }
    ],
    seoTitle: "Thyroid Homeopathy Consultation in Visakhapatnam | Dr. Ravi Kumar",
    seoDescription: "Consult Dr. Ch. Ravi Kumar, M.D. at Kalyan Homeo Care for personalized thyroid care in Visakhapatnam (Dwaraka Nagar, Gajuwaka, Steel Plant).",
    keywords: ["thyroid homeopathy Vizag", "hypothyroidism consultation Visakhapatnam", "Kalyan Homeo Care thyroid"]
  },
  {
    id: "diabetes-management",
    slug: "diabetes-management",
    title: "Diabetes Management",
    shortDescription: "Supportive homeopathic care for glycemic balance and metabolic health.",
    image: "/services/service-03.webp",
    alt: "Diabetes management consultation at Kalyan Homeo Care",
    isHomeFeatured: true,
    overview: "Type-2 Diabetes Mellitus is characterized by peripheral insulin resistance and progressive pancreatic beta-cell fatigue. While diet and lifestyle form the primary foundation of metabolic health, homeopathy offers profound supportive care. Constitutional consultation with Dr. Ch. Ravi Kumar focuses on enhancing cellular glucose utilization, preventing micro- and macro-vascular complications, and mitigating diabetic neuropathy.",
    rootCauses: [
      "Peripheral insulin receptor desensitization linked to visceral adiposity",
      "Hepatic glucose overproduction and impaired glycogen synthesis",
      "Chronic sympathetic overdrive, stress cortisol elevation, and sleep fragmentation",
      "Genetic inheritance and familial metabolic syndrome profiles"
    ],
    commonConcerns: [
      "Frequent nighttime urination (polyuria) and unquenchable thirst (polydipsia)",
      "Postprandial energy crashes, constant fatigue, and ravenous sugar cravings",
      "Slow-healing cuts, recurrent skin boils, and fungal infections",
      "Tingling, burning sensations, or loss of protective sensation in feet (peripheral neuropathy)",
      "Fluctuating morning fasting blood sugars and elevated HbA1c"
    ],
    consultationInvolves: [
      "Thorough review of continuous glucose logs, fasting insulin, HbA1c, and lipid panels",
      "Assessment of organ vitality including renal markers (microalbuminuria, serum creatinine)",
      "Identification of specific constitutional remedy to optimize digestive and pancreatic metabolism",
      "Structured counseling on glycemic index, meal sequencing, and physical exercise"
    ],
    homeopathicApproach: [
      "Prescription of constitutional remedies such as Syzygium Jambolanum, Gymnema Sylvestre, Uranium Nitricum, and Cephalandra Indica",
      "Natural support for pancreatic beta-cell vitality and peripheral glucose absorption",
      "Preventive action against diabetic neuropathy, retinopathy, and nephropathy",
      "Non-habit forming, gentle on kidneys and liver"
    ],
    dietAndLifestyle: [
      "Follow a fiber-rich, low-glycemic dietary regimen with balanced proteins and healthy fats",
      "Engage in 30 minutes of moderate post-meal physical activity or resistance exercise daily",
      "Perform daily self-examination of feet to ensure early detection of minor abrasions",
      "Maintain adequate hydration with infused herbal water and avoid sugary beverages"
    ],
    whenToSeekAdvice: "Consult urgently for unmanageable spikes exceeding 300 mg/dL, sudden hypoglycemic shivering, confusion, or non-healing foot ulcers.",
    faqs: [
      {
        question: "Can homeopathy replace insulin or oral diabetic medication?",
        answer: "No, homeopathy serves as a safe and effective supportive therapy alongside your ongoing medical plan. As metabolic markers improve, any medication modification must be clinically verified through doctor guidance and HbA1c tests."
      },
      {
        question: "How does homeopathy prevent diabetic complications?",
        answer: "By improving micro-circulation, reducing oxidative vascular stress, and strengthening cellular resilience against glucose toxicity."
      }
    ],
    seoTitle: "Diabetes Supportive Homeopathy in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Gentle homeopathic supportive care for diabetes management and metabolic vitality with Dr. Ch. Ravi Kumar, M.D. in Vizag.",
    keywords: ["diabetes homeopathy Visakhapatnam", "sugar supportive care Vizag", "Kalyan Homeo Care diabetes"]
  },
  {
    id: "kidney-problems",
    slug: "kidney-problems",
    title: "Kidney Problems",
    shortDescription: "Consultation for kidney-related concerns, renal stones, and urinary health.",
    image: "/services/service-04.webp",
    alt: "Kidney health and renal consultation illustration",
    isHomeFeatured: true,
    overview: "Renal health is pivotal for filtration, electrolyte homeostasis, and acid-base equilibrium. Kalyan Homeo Care provides specialized, empathetic consultations for recurrent nephrolithiasis (kidney stones), ureteric colic, recurrent urinary tract infections (UTIs), and supportive management for compromised renal profiles under Dr. Ch. Ravi Kumar, M.D.",
    rootCauses: [
      "Supersaturation of urine with calcium oxalate, uric acid, or phosphate crystals",
      "Inadequate daily fluid intake leading to concentrated lithogenic urine",
      "Metabolic hypercalciuria, hyperuricemia, and chronic gastrointestinal malabsorption",
      "Recurrent bacterial colonization of the urinary bladder and ureters"
    ],
    commonConcerns: [
      "Severe spasmodic flank pain radiating downward to the groin (renal colic)",
      "Burning, cutting, or scalding pain during urination (dysuria)",
      "Hematuria (blood in urine) or gravel-like sediment passed during micturition",
      "Frequent urgent desire to urinate with scanty output",
      "Nausea, vomiting, and cold perspiration accompanying acute colic episodes"
    ],
    consultationInvolves: [
      "Detailed analysis of ultrasound KUB reports, stone size, location, and density",
      "Review of Renal Function Tests (RFT): serum creatinine, blood urea, and uric acid",
      "Evaluation of metabolic calculus-forming tendencies and urinary pH",
      "Targeted homeopathic remedy selection to relax ureteric smooth muscles and promote natural expulsion",
      "Customized fluid and nutritional plan to prevent recurrent stone formation"
    ],
    homeopathicApproach: [
      "Renowned homeopathic remedies like Berberis Vulgaris, Lycopodium, Cantharis, Sarsaparilla, and Hydrangea selected on precise symptom presentation",
      "Relieves acute ureteric spasm and localized mucosal inflammation naturally",
      "Assists in breaking down and flushing out small-to-medium stones (up to 7-8 mm)",
      "Reduces recurrence rate by altering urinary lithogenic diathesis"
    ],
    dietAndLifestyle: [
      "Consume 2.5 to 3 liters of clean water distributed evenly throughout the day",
      "Moderate intake of high-oxalate items (spinach, beetroot, cocoa, nuts) for oxalate stones",
      "Include barley water, coconut water, and citrus lemonades to alkalize urine naturally",
      "Avoid excess dietary sodium and processed animal proteins"
    ],
    whenToSeekAdvice: "Immediate emergency hospital care is required if there is total urinary retention (anuria), unrelenting high-grade fever with chills, or intractable severe pain.",
    faqs: [
      {
        question: "Can kidney stones pass without surgery with homeopathy?",
        answer: "Yes, stones measuring up to 7 to 8 mm frequently pass smoothly with homeopathic remedies that relax the ureteric tract, reduce edema, and stimulate gentle urinary expulsion."
      },
      {
        question: "Does homeopathy prevent kidney stones from coming back?",
        answer: "Yes. The primary strength of constitutional homeopathy lies in correcting the metabolic tendency toward crystal precipitation, significantly reducing recurrence."
      }
    ],
    seoTitle: "Kidney Stone & Renal Care Homeopathy in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Consultation for kidney stones and renal concerns in Visakhapatnam with Dr. Ch. Ravi Kumar, M.D. Dwaraka Nagar, Gajuwaka, Steel Plant.",
    keywords: ["kidney stone homeopathy Visakhapatnam", "renal consultation Vizag", "Kalyan Homeo Care kidney stones"]
  },
  {
    id: "allergic-problems",
    slug: "allergic-problems",
    title: "Allergic Problems",
    shortDescription: "Consultation for allergic conditions, respiratory sensitivities, and chronic rhinitis.",
    image: "/services/service-05.webp",
    alt: "Allergy and respiratory health consultation illustration",
    isHomeFeatured: true,
    overview: "Allergies signify an exaggerated immune reaction to harmless environmental substances such as house dust mites, pollen, fungal spores, and temperature fluctuations. While conventional antihistamines offer temporary symptom relief by blocking histamine receptors, constitutional homeopathy works deeply on the immune regulatory system to diminish hypersensitivity at its core.",
    rootCauses: [
      "Immune dysregulation characterized by elevated IgE antibodies and mast cell hyperactivity",
      "Genetic atopic diathesis with family history of asthma, eczema, or allergic rhinitis",
      "Compromised nasal and bronchial mucosal barrier integrity",
      "Environmental pollution, air conditioning drafts, and damp housing exposure"
    ],
    commonConcerns: [
      "Paroxysmal bouts of 15-20 sneezes upon waking or exposure to cold morning air",
      "Profuse watery nasal discharge, nasal blockage, and itching of palate and throat",
      "Watery, burning, red eyes with conjunctival itching",
      "Chronic sinus headaches, frontal facial pressure, and post-nasal drip",
      "Allergic bronchitis with dry spasmodic cough triggered by dust, smoke, or cold drinks"
    ],
    consultationInvolves: [
      "Mapping of specific environmental triggers, diurnal variations, and weather sensitivities",
      "Exploration of family atopic history and past suppressed skin conditions",
      "Constitutional case assessment to identify the deep-acting simillimum remedy",
      "Guidance on indoor allergen avoidance and mucosal health optimization"
    ],
    homeopathicApproach: [
      "Constitutional remedies including Arsenicum Album, Allium Cepa, Sabadilla, Natrum Muriaticum, and Tuberculinum",
      "Desensitizes the immune response without producing drowsiness or mental fog",
      "Reduces dependency on nasal decongestant sprays and chronic oral antihistamines",
      "Strengthens upper respiratory immunity against recurring seasonal relapses"
    ],
    dietAndLifestyle: [
      "Use allergen-proof mattress encasings and wash bedding in warm water weekly",
      "Avoid ice-cold beverages, artificially preserved foods, and direct exposure to air conditioner blasts",
      "Practice gentle warm saline steam inhalations during acute allergen exposure",
      "Consume fresh ginger, turmeric, and warm herbal teas to soothe mucosal linings"
    ],
    whenToSeekAdvice: "Seek emergency care if you experience acute stridor, wheezing with cyanosis, facial swelling (angioedema), or breathing distress.",
    faqs: [
      {
        question: "Do homeopathic allergy medicines cause drowsiness?",
        answer: "No. Homeopathic remedies are completely non-sedative and non-drowsy. They do not impair cognitive clarity, driving ability, or work performance."
      },
      {
        question: "How long before allergic sneezing stops?",
        answer: "Acute symptomatic relief usually starts within days, while progressive desensitization of deep-rooted allergic susceptibility takes 3 to 6 months of steady care."
      }
    ],
    seoTitle: "Allergy & Rhinitis Homeopathy in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Natural allergy and allergic rhinitis treatment in Visakhapatnam with Dr. Ch. Ravi Kumar, M.D. Gentle, non-drowsy constitutional care.",
    keywords: ["allergy homeopathy Visakhapatnam", "allergic rhinitis doctor Vizag", "asthma homeopathy consultation"]
  },
  {
    id: "arthritis-joint-pain",
    slug: "arthritis-joint-pain",
    title: "Arthritis & Joint Pain",
    shortDescription: "Consultation for joint stiffness, osteoarthritis, and mobility enhancement.",
    image: "/services/service-06.webp",
    alt: "Arthritis and joint pain consultation illustration",
    isHomeFeatured: true,
    overview: "Arthritic conditions—including degenerative osteoarthritis, autoimmune rheumatoid arthritis, cervical and lumbar spondylosis, and gouty arthritis—severely compromise functional mobility and quality of life. Constitutional homeopathy under Dr. Ch. Ravi Kumar, M.D. works to reduce peri-articular inflammation, ease morning stiffness, halt progressive joint degeneration, and restore comfortable daily movement without reliance on gastro-toxic pain relievers.",
    rootCauses: [
      "Age-related loss of articular cartilage and synovial fluid attrition (Osteoarthritis)",
      "Autoimmune inflammatory synovitis and elevated citrullinated peptides (Rheumatoid arthritis)",
      "High serum uric acid levels precipitating sharp urate crystals in small joints (Gout)",
      "Degenerative disc dehydration and osteophyte formation in spine (Spondylosis)"
    ],
    commonConcerns: [
      "Severe morning joint stiffness requiring 30-60 minutes to loosen up",
      "Grating, grinding sounds (crepitus) and swelling in knee joints upon climbing stairs",
      "Pain aggravated by damp, cold weather transitions or sudden changes in barometric pressure",
      "Radiating pain, numbness, and tingling down arms or legs from spinal compression",
      "Swollen, warm, tender finger joints with diminished grip strength"
    ],
    consultationInvolves: [
      "Comprehensive mobility assessment and joint range-of-motion examination",
      "Review of X-rays, MRI scans, ESR, C-reactive protein (CRP), and RA factor titers",
      "Evaluation of pain modalities: what aggravates or relieves discomfort (movement, rest, warmth)",
      "Constitutional prescription formulated to nourish joint tissues and soothe nerve roots"
    ],
    homeopathicApproach: [
      "Remedies like Rhus Toxicodendron, Bryonia Alba, Causticum, Ledum Palustre, and Guaiacum prescribed on exact modality matching",
      "Reduces chronic synovial inflammation and joint effusion naturally",
      "Protects gastrointestinal lining compared to long-term NSAID pain medications",
      "Improves functional flexibility, allowing patients to walk comfortably"
    ],
    dietAndLifestyle: [
      "Engage in non-weight-bearing physical activity like gentle swimming or cycling",
      "Apply gentle dry warmth or sesame oil massages to ease stiffness",
      "Consume anti-inflammatory spices (turmeric with black pepper, ginger, garlic)",
      "Maintain optimal body weight to reduce mechanical load on weight-bearing knee joints"
    ],
    whenToSeekAdvice: "Consult immediately if a joint becomes acutely red, hot, exquisitely swollen with fever, or if there is sudden loss of bladder/bowel control in spine pain.",
    faqs: [
      {
        question: "Can homeopathy cure severe knee osteoarthritis?",
        answer: "While lost cartilage in advanced stage-4 arthritis cannot be fully regenerated, homeopathy effectively eliminates surrounding synovial inflammation, relieves pain, and preserves remaining functional mobility."
      },
      {
        question: "Is homeopathy effective for Rheumatoid Arthritis?",
        answer: "Yes, by modulating the systemic autoimmune process, constitutional remedies help lower inflammatory markers (ESR, CRP) and prevent joint deformities."
      }
    ],
    seoTitle: "Arthritis & Joint Pain Homeopathy in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Personalized homeopathic care for arthritis, knee pain, and cervical spondylosis with Dr. Ch. Ravi Kumar, M.D. in Vizag.",
    keywords: ["arthritis homeopathy Visakhapatnam", "joint pain doctor Vizag", "knee pain homeopathy consultation"]
  },
  {
    id: "skin-diseases",
    slug: "skin-diseases",
    title: "Skin Diseases",
    shortDescription: "Consultation for various skin concerns including eczema, psoriasis, and dermatitis.",
    image: "/services/service-07.webp",
    alt: "Skin diseases and dermatology homeopathic care",
    isHomeFeatured: false,
    overview: "The skin is the body's largest organ and directly mirrors internal metabolic, digestive, and immune vitality. In classical homeopathy, dermatological manifestations like psoriasis, atopic eczema, chronic urticaria, and lichen planus are understood as external expressions of internal disharmony. Dr. Ch. Ravi Kumar utilizes deep-acting constitutional prescribing that addresses root immune aberrations, avoiding suppressive steroid creams that often drive conditions into deeper organs.",
    rootCauses: [
      "Accelerated keratinocyte epidermal turnover in autoimmune psoriasis",
      "Defective filaggrin skin barrier proteins leading to atopic eczema dryness",
      "Systemic histamine release triggered by emotional distress or gut dysbiosis",
      "Suppression of earlier skin eruptions with strong topical corticosteroids"
    ],
    commonConcerns: [
      "Thick, red, scaly plaques with silvery scales on elbows, knees, and scalp (Psoriasis)",
      "Intolerable itching, oozing, and lichenification in skin folds (Eczema)",
      "Transient raised, red, burning wheals appearing across the body (Urticaria/Hives)",
      "Stubborn adult cystic acne on face, chest, and back leaving pigmented scars",
      "Depigmented macules with clear borders (Vitiligo/Leucoderma support)"
    ],
    consultationInvolves: [
      "Visual assessment of morphology, location, color, and crusting of skin lesions",
      "Investigation into past medical history, steroid usage, and emotional stress triggers",
      "Holistic analysis of sweat patterns, thermal preferences, and digestive health",
      "Selection of classical constitutional remedies to cleanse and normalize skin biology"
    ],
    homeopathicApproach: [
      "Key constitutional remedies such as Sulphur, Graphites, Arsenicum Album, Psorinum, and Mezereum selected on individual symptom totality",
      "Stimulates internal detoxification and regulates epidermal turnover rate",
      "Heals skin from inside-out without causing topical dependency or skin thinning",
      "Significantly reduces itching intensity and frequency of seasonal flare-ups"
    ],
    dietAndLifestyle: [
      "Keep skin regularly moisturized with pure virgin coconut oil or unperfumed emollient",
      "Wear loose, breathable cotton garments to avoid friction and sweat retention",
      "Avoid common dietary triggers like artificial food colors, excess spice, and seafood in sensitive patients",
      "Practice stress-reduction techniques to diminish neuro-dermatitis flare-ups"
    ],
    whenToSeekAdvice: "Consult urgently if skin lesions develop secondary bacterial infection with yellow pus, rapid bullae, or are accompanied by systemic high fever.",
    faqs: [
      {
        question: "Why should we avoid steroid creams for skin diseases?",
        answer: "Steroid creams temporarily suppress skin inflammation on the surface, but frequently result in rebound flare-ups or deeper systemic issues like asthma once stopped. Homeopathy heals the skin from within."
      },
      {
        question: "How long does psoriasis treatment take?",
        answer: "Psoriasis requires sustained constitutional treatment. Noticeable reduction in itching and plaque thickness is usually achieved within 2 to 4 months of consistent care."
      }
    ],
    seoTitle: "Skin Diseases Homeopathy in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Holistic care for eczema, psoriasis, and chronic skin conditions with Dr. Ch. Ravi Kumar, M.D. in Visakhapatnam.",
    keywords: ["skin diseases homeopathy Visakhapatnam", "psoriasis doctor Vizag", "eczema homeopathic care"]
  },
  {
    id: "children-problems",
    slug: "children-problems",
    title: "Children's Health",
    shortDescription: "Gentle consultation for pediatric health, immunity, appetite, and growth concerns.",
    image: "/services/service-08.webp",
    alt: "Children's health and pediatric homeopathy consultation",
    isHomeFeatured: false,
    overview: "Children have dynamic, responsive vital energy and show rapid, joyful responses to gentle homeopathic medicine. At Kalyan Homeo Care, pediatric consultations focus on strengthening natural immune defense, improving digestive assimilation, and supporting healthy developmental milestones. The pleasant, sweet-tasting sugar globules ensure zero tears during medicine administration.",
    rootCauses: [
      "Immature immune system adapting to day-care and school environmental pathogens",
      "Poor gastrointestinal nutrient absorption, intestinal worm infestations, and food sensitivities",
      "Recurrent antibiotic or antipyretic overuse causing weakened innate mucosal resistance",
      "Emotional sensitivities, sibling rivalry, school anxiety, or dentition stress"
    ],
    commonConcerns: [
      "Recurrent episodes of cold, cough, bronchitis, and enlarged adenoids/tonsils",
      "Loss of appetite, fussy eating habits, and underweight growth percentiles",
      "Infantile colic, chronic constipation, or recurrent diarrhea with teething",
      "Childhood bronchial asthma and allergic skin eczema",
      "Bedwetting (nocturnal enuresis), night terrors, and behavioral restlessness"
    ],
    consultationInvolves: [
      "Detailed review of birth history, developmental milestones, and vaccination chronology",
      "Observation of the child's natural temperament, sleep postures, and food preferences",
      "Gentle, playful clinical atmosphere putting child and parents at total ease",
      "Prescription of ultra-safe, non-toxic micro-dilutions easy for children to take"
    ],
    homeopathicApproach: [
      "Pediatric remedies like Chamomilla, Calcarea Phosphorica, Baryta Carbonica, Silicea, and Belladonna",
      "Strengthens innate respiratory mucosal barrier, dramatically reducing frequency of colds",
      "Averts unnecessary surgical removal of moderately enlarged tonsils and adenoids",
      "Safe, free from chemical toxins, drowsy antihistamines, or gastric irritation"
    ],
    dietAndLifestyle: [
      "Provide wholesome, freshly prepared warm meals rich in calcium and natural proteins",
      "Limit packaged sugary snacks, cold sodas, and artificial confectionery",
      "Encourage outdoor active play for bone strength and natural vitamin D synthesis",
      "Ensure a peaceful, consistent bedtime routine away from digital screens"
    ],
    whenToSeekAdvice: "Immediate medical emergency care is required for high persistent fever unresponsive to care, breathing stridor with blue lips, or extreme dehydration.",
    faqs: [
      {
        question: "Are homeopathic medicines safe for newborn babies?",
        answer: "Yes, homeopathic medicines are extremely safe, non-toxic, and gentle for infants from birth when administered under qualified doctor supervision."
      },
      {
        question: "Can homeopathy avoid tonsil surgery in children?",
        answer: "In a majority of children with recurrent tonsillitis and hypertrophied adenoids, constitutional homeopathy reduces gland swelling and prevents surgical intervention."
      }
    ],
    seoTitle: "Pediatric & Children's Homeopathy in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Gentle pediatric homeopathy for recurrent infections, immunity, and growth with Dr. Ch. Ravi Kumar, M.D. in Visakhapatnam.",
    keywords: ["pediatric homeopathy Visakhapatnam", "child homeopathy doctor Vizag", "immunity care for kids"]
  },
  {
    id: "piles-fissure-fistula",
    slug: "piles-fissure-fistula",
    title: "Piles, Fissure & Fistula",
    shortDescription: "Consultation for hemorrhoids, anal fissures, fistula discomfort, and bowel regularity.",
    image: "/services/service-09.webp",
    alt: "Piles, fissure and fistula homeopathic consultation",
    isHomeFeatured: false,
    overview: "Anorectal conditions cause acute suffering, severe pain during defecation, bleeding, and significant embarrassment. At Kalyan Homeo Care, Dr. Ch. Ravi Kumar, M.D. provides discrete, respectful, and highly effective constitutional care for hemorrhoids (piles), acute and chronic anal fissures, and perianal fistula. By relieving portal venous congestion, softening bowel movements, and accelerating mucosal healing, surgery can frequently be avoided in early to moderate stages.",
    rootCauses: [
      "Chronic habitual constipation with prolonged straining at stool",
      "Elevated portal venous pressure and vascular wall weakness in rectal veins",
      "Low-fiber dietary patterns combined with sedentary prolonged sitting occupations",
      "Pregnancy-induced pelvic vascular pressure and hormonal relaxation of vascular smooth muscle"
    ],
    commonConcerns: [
      "Bright red painless or painful bleeding during or following bowel movement",
      "Excruciating, sharp, knife-like burning pain during and hours after passing stool (Anal Fissure)",
      "Prolapsed, swollen hemorrhoidal lumps at the anal verge requiring manual reduction",
      "Persistent foul or sero-purulent discharge from perianal opening (Anal Fistula)",
      "Intense anal itching (pruritus ani), soreness, and fear of evacuation"
    ],
    consultationInvolves: [
      "Confidential, compassionate assessment of symptoms, bleeding color, and pain duration",
      "Evaluation of chronic gastrointestinal motility, fiber intake, and hepatic metabolism",
      "Prescription of specific venous tonics and tissue-healing constitutional remedies",
      "Personalized bowel habit protocol to eliminate straining entirely"
    ],
    homeopathicApproach: [
      "Proven remedies such as Aesculus Hippocastanum, Nitric Acid, Hamamelis Virginica, Ratanhia, and Nux Vomica",
      "Rapidly alleviates burning and sharp pain within days of starting treatment",
      "Strengthens rectal venous tone, shrinking swollen hemorrhoidal cushions",
      "Promotes tissue granulation and closure of fissure ulcers and fistula tracts"
    ],
    dietAndLifestyle: [
      "Drink warm water upon waking and consume 2.5 to 3 liters of fluids daily",
      "Incorporate high-fiber foods (oats, psyllium husk, papaya, figs, leafy greens)",
      "Take warm sitz baths for 10-15 minutes twice daily to relax the anal sphincter",
      "Avoid holding back natural bowel urges and refrain from prolonged toilet sitting"
    ],
    whenToSeekAdvice: "Consult urgently for heavy, continuous rectal hemorrhage causing dizziness or extreme throbbing perianal swelling with fever (perianal abscess).",
    faqs: [
      {
        question: "Can anal fissures and piles be treated without surgery?",
        answer: "Yes, the vast majority of Grade 1 and Grade 2 piles as well as acute and chronic fissures resolve completely with constitutional homeopathy and bowel habit correction without surgery."
      },
      {
        question: "How quickly does the severe burning pain of a fissure subside?",
        answer: "With targeted homeopathic remedies like Nitric Acid or Ratanhia, sharp cutting pain often decreases significantly within 48 to 72 hours."
      }
    ],
    seoTitle: "Piles, Fissure & Fistula Homeopathy in Visakhapatnam | Dr. Ravi Kumar",
    seoDescription: "Effective homeopathic consultation for piles and fissures in Visakhapatnam with Dr. Ch. Ravi Kumar, M.D. at Kalyan Homeo Care.",
    keywords: ["piles homeopathy Visakhapatnam", "fissure treatment Vizag", "Kalyan Homeo Care piles"]
  },
  {
    id: "womens-health",
    slug: "womens-health",
    title: "Women's Health",
    shortDescription: "Compassionate consultation for women across all stages: puberty, maternity, and menopause.",
    image: "/services/service-10.webp",
    alt: "Women's holistic health and wellness consultation",
    isHomeFeatured: false,
    overview: "Women experience profound hormonal, physiological, and emotional transitions across life stages—from the onset of menarche, through childbearing years, to perimenopause and post-menopause. Constitutional homeopathy honors this delicate hormonal rhythm, offering gentle, non-hormonal, empathetic care for conditions like uterine fibroids, endometriosis, dysmenorrhea, leucorrhea, and menopausal distress.",
    rootCauses: [
      "Estrogen dominance and progesterone deficiency in reproductive tissues",
      "Chronic pelvic congestion and pelvic inflammatory disease (PID)",
      "Fluctuating hypothalamic-pituitary-adrenal-ovarian regulatory axis",
      "Nutritional depletion (iron-deficiency anemia, low bone density)"
    ],
    commonConcerns: [
      "Severe premenstrual syndrome (PMS) with breast tenderness, bloating, and irritability",
      "Debilitating menstrual cramps (dysmenorrhea) interfering with school or work",
      "Perimenopausal hot flashes, night drenching sweats, and sleep disturbances",
      "Uterine fibroids causing menorrhagia (excessive prolonged bleeding)",
      "Chronic fatigue, post-delivery weakness, and hormonal mood swings"
    ],
    consultationInvolves: [
      "Empathetic, confidential consultation in a comfortable clinic environment",
      "Review of hormonal history, pregnancies, deliveries, and emotional milestones",
      "Careful evaluation of pelvic imaging, pap smear, and hematological panels",
      "Constitutional prescription restoring natural endocrine harmony"
    ],
    homeopathicApproach: [
      "Remedies including Sepia, Lachesis, Folliculinum, Fraxinus Americana, and Sabina",
      "Relieves hot flashes and menopausal mood distress naturally without HRT risks",
      "Controls excessive menstrual bleeding and relieves chronic pelvic pain",
      "Supports emotional resilience, bone health, and maternal vitality"
    ],
    dietAndLifestyle: [
      "Consume phytoestrogen-rich whole foods (flaxseeds, sesame seeds, cooked legumes)",
      "Maintain adequate dietary calcium, magnesium, and vitamin D3 intake",
      "Practice calming mindfulness exercises to regulate the adrenal-hormonal axis",
      "Maintain regular medical screenings appropriate to your age"
    ],
    whenToSeekAdvice: "Consult urgently for unexpected post-menopausal bleeding, severe acute pelvic pain, or extreme bleeding causing weakness.",
    faqs: [
      {
        question: "How does homeopathy help with menopausal hot flashes?",
        answer: "Homeopathic remedies like Lachesis and Sepia gently regulate the vasomotor center in the brain, reducing the frequency and severity of hot flashes naturally."
      },
      {
        question: "Can uterine fibroids shrink with homeopathic treatment?",
        answer: "Homeopathy effectively manages symptoms such as heavy bleeding and pelvic pressure, and frequently arrests or reduces the size of small to moderate fibroids."
      }
    ],
    seoTitle: "Women's Health Homeopathy in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Thoughtful homeopathic care for menopause, menstrual health, and women's wellness with Dr. Ch. Ravi Kumar, M.D. in Vizag.",
    keywords: ["womens health homeopathy Visakhapatnam", "menopause homeopathy Vizag", "Kalyan Homeo Care women"]
  },
  {
    id: "cancer-support",
    slug: "cancer-support",
    title: "Cancer Support",
    shortDescription: "Gentle supportive care during and after conventional cancer treatments to enhance quality of life.",
    image: "/services/service-11.webp",
    alt: "Cancer supportive care and vitality consultation",
    isHomeFeatured: false,
    overview: "Undergoing oncological treatments such as chemotherapy, radiation therapy, and surgical interventions places an immense physical and emotional burden on patients. Integrative supportive homeopathy at Kalyan Homeo Care is designed to work in synergy with conventional oncology. Dr. Ch. Ravi Kumar, M.D. provides individualized supportive protocols to mitigate treatment side effects, alleviate fatigue, preserve appetite, and sustain emotional courage.",
    rootCauses: [
      "Chemotherapeutic toxicity affecting rapid-turnover cells in gut mucosa and bone marrow",
      "Radiation-induced tissue inflammation, mucosal burning, and skin radiodermatitis",
      "Profound post-treatment immune suppression and physical debility",
      "Deep existential anxiety, depressive despair, and sleep disturbances"
    ],
    commonConcerns: [
      "Severe post-chemo nausea, vomiting, metallic taste, and intractable loss of appetite",
      "Profound cancer-related fatigue (asthenia) that rest does not relieve",
      "Radiation burns, oral mucositis, dry mouth (xerostomia), and difficult swallowing",
      "Chemotherapy-induced peripheral neuropathy (burning or numbness in fingers and toes)",
      "Immune vulnerability, emotional exhaustion, and compromised vitality"
    ],
    consultationInvolves: [
      "Comprehensive review of ongoing oncological protocols, blood counts, and imaging",
      "Coordination to ensure supportive remedies complement ongoing therapies safely",
      "Careful selection of homeopathic supportive remedies to alleviate specific side effects",
      "Compassionate psychological and nutritional counseling for patient and family"
    ],
    homeopathicApproach: [
      "Supportive remedies like Cadmium Sulphuricum, Radium Bromatum, Ipecac, Arsenicum Album, and Carbo Vegetabilis",
      "Relieves post-chemotherapy nausea and restores oral appetite naturally",
      "Soothes radiation-induced mucosal inflammation and burning pain",
      "Does not interfere with the antitumor efficacy of conventional chemotherapy or radiation"
    ],
    dietAndLifestyle: [
      "Consume small, frequent, nutrient-dense meals easy on compromised digestion",
      "Stay hydrated with coconut water, fresh broths, and tender fruit smoothies",
      "Prioritize gentle rest and short periods of peaceful sunlight exposure",
      "Engage in supportive family conversations and deep relaxation practices"
    ],
    whenToSeekAdvice: "Always maintain direct contact with your primary oncologist for acute emergencies like neutropenic fever, sudden shortness of breath, or bleeding.",
    faqs: [
      {
        question: "Does supportive homeopathy interfere with chemotherapy?",
        answer: "No. Homeopathic remedies act on dynamic energetic and supportive levels and do not biochemically block or interfere with cytotoxic chemotherapeutic agents."
      },
      {
        question: "Can homeopathy improve appetite and energy during cancer care?",
        answer: "Yes, many patients report noticeable improvement in appetite, reduced nausea, and enhanced vitality during their treatment cycles with supportive homeopathic care."
      }
    ],
    seoTitle: "Supportive Cancer Care Homeopathy in Visakhapatnam | Dr. Ravi Kumar",
    seoDescription: "Compassionate supportive care alongside conventional cancer treatments with Dr. Ch. Ravi Kumar, M.D. at Kalyan Homeo Care, Vizag.",
    keywords: ["cancer supportive care homeopathy Visakhapatnam", "oncology supportive homeopathy Vizag"]
  },
  {
    id: "general-health",
    slug: "general-health",
    title: "General Health Issues",
    shortDescription: "Constitutional consultation for chronic fatigue, digestive issues, and overall family vitality.",
    image: "/services/service-12.webp",
    alt: "General health and family homeopathy consultation",
    isHomeFeatured: false,
    overview: "Everyday chronic complaints—such as persistent acidity, gastroesophageal reflux (GERD), chronic migraines, insomnia, low immunity, and convalescent fatigue—frequently signify underlying constitutional imbalances. Rather than treating isolated symptoms, classical homeopathy at Kalyan Homeo Care considers the totality of mental, emotional, and physical characteristics to restore vibrant health for the whole family.",
    rootCauses: [
      "Chronic emotional stress, work burnout, and irregular meal schedules",
      "Impaired digestive enzyme secretion, sluggish liver function, and gut dysbiosis",
      "Sedentary desk lifestyles leading to muscular tension and postural headaches",
      "Recurrent viral infections leaving prolonged convalescent weakness"
    ],
    commonConcerns: [
      "Chronic acidity, heartburn, bloating, flatulence, and sluggish bowel motility",
      "Throbbing one-sided migraines triggered by sunlight, stress, or missed meals",
      "Difficulty falling or staying asleep (insomnia) with racing thoughts",
      "Unexplained chronic lethargy, morning exhaustion, and low stamina",
      "Frequent colds, low resistance, and recurring seasonal sickness"
    ],
    consultationInvolves: [
      "Comprehensive case analysis assessing lifestyle, sleep quality, and stress responses",
      "Evaluation of dietary habits, hydration, and past suppressed medical conditions",
      "Prescription of a deep-acting constitutional homeopathic remedy",
      "Holistic guidance on sleep hygiene, balanced nutrition, and wellness routines"
    ],
    homeopathicApproach: [
      "Constitutional remedies such as Nux Vomica, Lycopodium, Natrum Muriaticum, Belladonna, and Phosphoric Acid",
      "Normalizes gastric acid secretion and enhances hepatic metabolism naturally",
      "Significantly reduces migraine frequency, intensity, and duration",
      "Restores natural sleep architecture and daytime mental vigor without sedatives"
    ],
    dietAndLifestyle: [
      "Eat freshly prepared meals at regular timings and avoid late-night heavy dinners",
      "Stay well-hydrated throughout the day and limit excessive caffeine intake",
      "Engage in daily walking or physical activity to stimulate natural digestive peristalsis",
      "Disconnect from digital devices at least 45 minutes prior to bedtime"
    ],
    whenToSeekAdvice: "Consult promptly for sudden unexplained weight loss, persistent continuous vomiting, sudden severe neurological deficits, or high fever.",
    faqs: [
      {
        question: "Can family members of all ages consult for general health?",
        answer: "Yes, Kalyan Homeo Care provides dedicated, compassionate care for infants, children, adults, and seniors across all branches in Visakhapatnam."
      },
      {
        question: "Are homeopathic medicines safe for long-term use?",
        answer: "Yes, because homeopathic remedies are non-addictive, highly diluted, and tailored to the individual, they are exceptionally safe for prolonged wellness support under medical guidance."
      }
    ],
    seoTitle: "Family Homeopathy & General Health in Visakhapatnam | Kalyan Homeo Care",
    seoDescription: "Comprehensive family homeopathic consultations with Dr. Ch. Ravi Kumar, M.D. in Dwaraka Nagar, Gajuwaka, and Steel Plant, Visakhapatnam.",
    keywords: ["general health homeopathy Visakhapatnam", "family homeopathy clinic Vizag", "digestive homeopathy consultation"]
  }
];

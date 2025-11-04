"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const boardMembers = [
  {
    name: "Dr. Ermias Tilahun",
    position: "President",
    image: "/ermias.jpg",
    bio: "Ermias Tilahun, MPH, PhD., brings over 15 years of experience in epidemiology, clinical research, and public health, academia, clinical healthcare, the pharmaceutical industry, non-profit organizations, and regulatory settings. Currently serving as an Epidemiologist at the FDA, he specializes in research methodology, clinical research management, data analysis, and public health education. With a Ph.D. in Pharmacoepidemiology, a Master's in Public Health (MPH), a B.Sc. in Physician Assistant Studies, and a Diploma in Crisis Management and Post-Conflict Rehabilitation, Dr. Ermias combines a strong academic foundation with hands-on expertise in drug safety, surveillance, and health outcomes research.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Raniya Al-Matari",
    position: "Vice-President",
    image: "/raniya-1.jpg",
    bio: "Raniya Ali Al-Matari was born in the United States to a Yemini father and Ethiopian mother and raised in the Middle East capital of Saudi Arabia, Riyadh. She is fluent in five different languages: English, Arabic, Amharic, Tigrinya, and Urdu. She completed her pharmacy degree at Jordan University of Science and Technology in 2008 and pursued a Ph.D. in Pharmacy Administration at Howard University. Her dissertation focused on developing and validating an Amharic version Simplified Medication Adherence Questionnaire. She is a Board-Certified Pharmacist in Saudi Arabia and Board-Certified Pharmacy Technician in the US. Currently teaching at Howard University as a Biostatistics instructor, her research interests include pharmacoepidemiology, health outcome research, and secondary data analysis.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Prof. Bisrat Hailemeskel",
    position: "Board Member",
    image: "/pro.bisrat.jpg",
    bio: "Dr. Bisrat Hailemeskel is a Full Professor & Co-Director of International Grant in the College of Pharmacy, Howard University. He received his Bachelor of Pharmacy and Master of Science Degrees from Addis Ababa University, Ethiopia and Doctor of Pharmacy Degree from the University of Toledo, Ohio. He was the recipient of the 2007-2008 Fulbright Scholarship as a teacher/research fellow. As a Principal Investigator, he received over a million dollars grant for the 'Howard-Addis Ababa University Twinning Partnership' project through PEPFAR. He has over 50 research papers published in peer-reviewed journals and over 100 presentations at major scientific conferences. He was the founder and past president of the Ethiopian Pharmacists Association in North America (EPANA).",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Mr. Gabriel Daniel",
    position: "Board Member",
    image: "/Gabriel-e1657114665624.jpg",
    bio: "Gabriel Daniel (aka: Aklile G. Giorgis) is a development/pharmaceutical management systems and services specialist with over 40 years of global experience residing in the USA. His technical areas of expertise include pharmaceutical management, primary health care, HIV/AIDS, neglected tropical diseases (NTDs), micro-enterprise development, and post-Ebola pharmaceutical systems recovery. He worked for over fifteen years as Principal Technical Advisor/Country Strategic Lead for pharmaceutical projects at Management Sciences for Health (MSH). He established the Sierra Leone and Ghana Africare country offices and the Ethiopia MSH operations which implemented USAID funded PEPFAR HIV/AIDS and PMI malaria programs.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Alemayehu Akalu",
    position: "Board Member",
    image: "/dr.alex.png",
    bio: "Dr. Alex Akalu is a pharmacist-scientist with over 15 years of experience blending science, regulation, and technology. With a foundation in physics, he specializes in regulatory science, pediatric oncology, and applied artificial intelligence (AI) in healthcare. He currently serves as a Senior Oncology Staff Fellow at the U.S. Food and Drug Administration (FDA), leading data analysis, clinical research, and AI integration for the Division of Pediatric Oncology. Dr. Akalu was instrumental in developing the Pediatric Molecular Target List, a globally utilized resource guiding pediatric cancer drug development. His peer-reviewed research has been published in JAMA Oncology, Pediatric Blood & Cancer, and The Journal of Clinical Oncology.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Fekadu Fullas",
    position: "Board Member",
    image: "/dr.fekadu.jpg",
    bio: "Dr. Fekadu graduated from Addis Ababa University with a Bachelor of Pharmacy degree and studied Natural Products Chemistry at the University of Illinois at Chicago (UIC) College of Pharmacy where he obtained a Ph.D. degree. He joined the Research Triangle Institute (RTI) in North Carolina as a post-doctoral chemist, eventually becoming a clinical pharmacist at St. Luke's Hospital in Sioux City, Iowa for 23 years. He is an Associate Fellow of the Ethiopian Academy of Sciences. In the course of his long career, he has produced over 175 publications and is the author of eight books. He retired in 2020 but stays active in academic research, writing books and volunteering in pharmacy-related initiatives.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Prof. Tesfaye Biftu",
    position: "Board Member",
    image: "/Dr. Tesfaye Biftu.jpg",
    bio: "Dr. Tesfaye Biftu received his PhD from Brandeis University in chemistry and MBA from Rutgers University in management. He served at Merck and Co. as a Distinguished Senior Investigator and Director of Discovery Chemistry. Dr. Biftu has published over 70 manuscripts and is an inventor of over 65 US and international patents in various areas of drug discovery. He was the program lead in the discovery of Marizev™, the Once Weekly DPP-4 Inhibitor anti-diabetic agent, and key player in the Januvia™ project which has total sales over 70 billion since 2006. Currently, he serves as a Professor and Director of the Institute of Therapeutic Science at Adama University and teaches at Addis Ababa University, Ethiopia.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Pawlose Ketema",
    position: "Board Member",
    image: "/dr.pawlos.jpg",
    bio: "Dr. Pawlose Ketema is an Antimicrobial Stewardship pharmacist at the Washington DC VA Medical Center. He earned his Doctor of Pharmacy degree from Howard University College of Pharmacy, completed a PGY-1 Pharmacy residency at the Washington DC VA Medical Center followed by a PGY-2 residency in Infectious Diseases at Boston Medical Center. Dr. Ketema is a Board-Certified Pharmacotherapy Specialist (BCPS), Board Certified Infectious Diseases Pharmacist (BCIDP), and an American Academy of HIV Pharmacist (AAHIVP). He has authored and presented his research at regional and national conferences including ASHP, ACCP, and IDWeek. He serves on the EPPAD board as an advisory member and co-leads EPPAD's Educational Group.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Eyob Hailu",
    position: "Board Member",
    image: "/dr.eyob.jpg",
    bio: "Dr. Eyob is a versatile Clinical Pharmacist with broad experience across academia, retail, hospital and research settings. He earned Bachelor of Pharmacy and Master of Science degree in Experimental Pharmacology at Addis Ababa University, Ethiopia and Doctor of Pharmacy Degree from Howard University, Washington, DC. He worked in the chemo-informatics and drug design laboratory as a research fellow and has been involved in the publication of four articles in reputable pharmaceutical science journals. He worked as Clinical Pharmacist in HIV Specialty Clinic and Behavioral health centers in the Washington metropolitan area. He is an active member of International Brain Research Organization (IBRO), Society of Neuroscientist (SONA), and American Pharmacist Association (APhA).",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Samuel Worku",
    position: "Treasury",
    image: "/Samuel-Worku.png",
    bio: "Samuel Worku was born and raised in Addis Ababa, Ethiopia. He graduated from Unity University College of Business Administration in 2008 and later attended George Mason University in Fairfax, VA, receiving his bachelor's degree double majored in Finance and Accounting. While at George Mason, he was a member of the Investment Club and The National Society of Collegiate Scholars. Currently, he works for Robert Half International as a financial consultant where he provides help to multiple companies in areas of budget analysis and forecasting, financial reporting, tax filing, audit, A/P and A/R process.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Helen HaileSelassie",
    position: "Board Member",
    image: "/Helen1.jpg",
    bio: "Dr. Helen HaileSelassie, PharmD, is a residency-trained and board-certified pharmacist with over 10 years of experience working in the healthcare and pharmaceutical industry. In her current role as a clinical manager, she oversees the development of formulary submission documents for managed care decision makers and participates in health economics and outcomes research. She has expertise in clinical pharmacy practice, pharmacy leadership, and developing clinical protocols using evidence-based medicine. She graduated from Virginia Commonwealth University with a Doctor of Pharmacy degree and completed her PGY-1 pharmacy practice residency training. She is a member of the Academy of Managed Care Pharmacy and the Industry Pharmacists Organization.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Eyerusalem Befkadu",
    position: "Board Member",
    image: "/eyerusalem.jpg",
    bio: "Dr. Eyerusalem Befkadu, PharmD, BCPS is an emergency medicine clinical specialist at Medstar Georgetown University Hospital. She practices as a pharmacist clinician providing safe and effective care of patients, primarily in the emergency department. She participates in quality improvement initiatives through the development of institutional clinical guidelines and protocols. She successfully implemented a naloxone dispensing program in the emergency department as part of an initiative to improve safe access to life-saving medications. She received her Doctor of Pharmacy degree from Touro College of Pharmacy and completed her PGY-1 pharmacy practice residency training at Howard University Hospital.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Sarem Hailemariam",
    position: "Board Member",
    image: "/sarem3.jpg",
    bio: "Dr. Sarem Hailemariam is a dedicated board member of EPPAD, contributing expertise in pharmaceutical sciences and healthcare to advance the organization's mission of promoting public health and professional development among Ethiopian pharmacists and pharmaceutical scientists in the diaspora.",
    linkedin: "#",
    twitter: "#",
  },
]

export function BoardMembersSection() {
  const [selectedMember, setSelectedMember] = useState<(typeof boardMembers)[0] | null>(null)

  return (
    <>
      <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="h-1 w-16 bg-gradient-to-r from-gold to-primary mx-auto mb-6 rounded-full" />
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Executive Board Members of EPPAD</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedMember(member)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-sm text-white/95 line-clamp-4 leading-relaxed">{member.bio}</p>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <span className="text-xs text-white font-semibold bg-primary/80 px-3 py-1 rounded-full">
                          Click to read more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-5 bg-gradient-to-br from-card to-muted/30">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground font-medium">{member.position}</p>

                  <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-border/50">
                    <a
                      href={member.linkedin}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center w-9 h-9 rounded-lg hover:scale-110 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LI-In-Bug-vMLRlIfP7M21YTrROAR2065kk5pBvb.png"
                        alt="LinkedIn"
                        className="w-7 h-7"
                      />
                    </a>
                    <a
                      href={member.twitter}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center w-9 h-9 rounded-lg hover:scale-110 transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-black-LYp4E6R54Z82uYZyMMUvdl6uAx4EKK.png"
                        alt="Twitter/X"
                        className="w-5 h-5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border-2 border-primary/20 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
          {selectedMember && (
            <>
              <DialogHeader className="space-y-3">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <img
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      className="w-32 h-32 object-cover rounded-2xl shadow-lg ring-4 ring-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-lg shadow-lg">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LI-In-Bug-vMLRlIfP7M21YTrROAR2065kk5pBvb.png"
                        alt="LinkedIn"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-3xl font-display font-bold text-foreground">
                      {selectedMember.name}
                    </DialogTitle>
                    <p className="text-base text-primary font-semibold mt-2">{selectedMember.position}</p>
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <a
                        href={selectedMember.linkedin}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LI-In-Bug-vMLRlIfP7M21YTrROAR2065kk5pBvb.png"
                          alt="LinkedIn"
                          className="w-5 h-5"
                        />
                        <span className="text-foreground">LinkedIn</span>
                      </a>
                      <a
                        href={selectedMember.twitter}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
                      >
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-black-LYp4E6R54Z82uYZyMMUvdl6uAx4EKK.png"
                          alt="Twitter/X"
                          className="w-4 h-4"
                        />
                        <span className="text-foreground">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                <div className="h-1 w-full bg-gradient-to-r from-primary via-gold to-primary rounded-full" />
                <div className="prose prose-sm max-w-none">
                  <p className="text-base leading-relaxed text-foreground/90">{selectedMember.bio}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

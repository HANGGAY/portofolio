import type { LocalizedText, ResearchEntry } from "@/types";

export const researchStatusPlaceholder: LocalizedText = {
  id: "Status: belum dikonfirmasi",
  en: "Status: to be confirmed",
};

export const research: ResearchEntry[] = [
  {
    title: {
      id: "Robustness Evaluation of Explanation-Based Intrusion Detectors Against Domain-Constrained Adaptive Attacks",
      en: "Robustness Evaluation of Explanation-Based Intrusion Detectors Against Domain-Constrained Adaptive Attacks",
    },
    role: {
      id: "Co-author (ke-2 dari 4), Program Magister Teknologi Informasi, Universitas Bina Sarana Informatika",
      en: "Co-author (2nd of 4), Master of IT Program, Universitas Bina Sarana Informatika",
    },
    status: researchStatusPlaceholder,
    bullets: [
      {
        id: "Menguji apakah detector IDS berbasis Integrated Gradients tahan terhadap penyerang yang dibatasi pada traffic yang dapat direalisasikan, pada NSL-KDD dan UNSW-NB15 selama 10 seeds.",
        en: "Tested whether Integrated Gradients-based IDS detectors withstand attackers restricted to realizable traffic, on NSL-KDD and UNSW-NB15 over 10 seeds.",
      },
      {
        id: "Serangan adaptif menaikkan full evasion dari 15.7% menjadi 76.1% (NSL-KDD) dan dari 2.8% menjadi 30.6% (UNSW-NB15) pada ε = 0.3; serangan yang dibangkitkan ulang masih mencapai 77.9% dan 21.7% setelah detector dilatih ulang.",
        en: "The adaptive attack raised full evasion at ε = 0.3 from 15.7% to 76.1% (NSL-KDD) and from 2.8% to 30.6% (UNSW-NB15); regenerated attacks still reached 77.9% and 21.7% after detector retraining.",
      },
    ],
    tags: [
      "Adversarial ML",
      "Explainable AI",
      "Integrated Gradients",
      "Intrusion Detection",
      "NSL-KDD",
      "UNSW-NB15",
    ],
  },
];

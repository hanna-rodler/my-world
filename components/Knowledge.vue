<template>
  <div class="container my-5 flex-col" id="knowledge">
    <h2 class="text-3xl mb-10 font-semibold">Lebensweg & Wissen</h2>
    <div>
      <!-- Component: Alternative changelog feed with images -->
      <h3>Berufserfahrung</h3>
      <Feed :feed="workExperience" class="mb-10" />
      <h3>Ausbildung</h3>
      <Feed :feed="educationExperience" :smaller="true" class="mb-10" />
      <!-- End Alternative changelog feed with images -->
      <h3>Kenntnisse & Fähigkeiten</h3>
      <h3>Sprachen</h3>
    </div>
    <h3>Ausbildung</h3>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from "~/types/experience.type";
const workExperience: Experience[] = [
  {
    title: "Web Developer, Werkstudentin",
    company: "Netural GmbH",
    date: "seit Feb. 2023",
    description: [
      "Entwicklung und Wartung von Webanwendungen unter Verwendung moderner Technologien wie Symfony, Vue.js, Nuxt.js, TailwindCSS und TypeScript.",
      "Eigenständige Leitung und Organisation eines Kundenprojektes, einschließlich wöchentlicher Abstimmungen mit Kunden zur Priorisierung von Aufgaben und Klärung von Ticket-Scopes sowie Definition von Acceptance Criteria. Verwendung von Jira.",
      "Überwachung von AWS-Umgebungen, einschließlich der Kontrolle von CloudWatch-Logs, Einleitung von Maßnahmen bei Environment Health Issues wie zum Beispiel AWS WAF & Shield Einstellungen. Verwendung von S3.",
      "Konzeption und Umsetzung gezielter SEO-Maßnahmen zur Verbesserung der Sichtbarkeit und Performance von Webprojekten.",
    ],
    highlight: true,
  },
  {
    title: "Web Developer, Praktikum",
    company: "Netural GmbH",
    date: "Aug. 2022 - Jan. 2023",
    description: [
      "Entwicklung und Wartung von Webanwendungen unter Verwendung von Symfony, Vue.js, TailwindCSS und TypeScript",
    ],
    highlight: true,
  },
  {
    title: "Tutorium Einführung in Web und Hypermedia",
    company: "FH Hagenberg",
    date: "Okt. 2021 - Feb. 2022",
    description: [
      "Korrektur der Hausübungen und Hilfestellungen - CSS3, HTML5 und Grundlagen der Web Accessibility",
    ],
    highlight: true,
  },
  {
    title: "Lerndesigner, Praktikum",
    company: "clickandlearn GmbH",
    date: "Juli 2021 - Aug. 2022",
    description: [
      "Abteilung Media Engineering, Umsetzung des firmeneigenen Onboardings mittels Autorentools Articulate Storyline und Rise",
    ],
    highlight: true,
  },
  {
    title: "Verkäuferin im Einzelhandel, Teilzeit",
    company: "BIPA Parfumerien Gesellschaft m.b.H.",
    date: "März 2019 - Sep. 2019",
    description: ["Verkauf, Kundenberatung, Lager"],
  },
  {
    title: "Praktikum im Bereich Schulung/Ausbildung",
    company: "TRUMPF Maschinen Austria",
    date: "Juli 2015",
    description: [
      "Kennzahlen/Auswertungen von div. Schulungen Übersetzung von Texten, Mails und Präsentationen (englisch <-> deutsch) Erstellen von lnformationsbroschüren, Fragebögen zur Bewertung der Schulungseffektivität usw.",
    ],
  },
];

const educationExperience: Experience[] = [
  {
    title: "Master: Interactive Media",
    company: "FH Hagenberg",
    date: "Okt. 2023 - Sept. 2025",
    description: ["Schwerpunkt Webentwicklung"],
    highlight: true,
  },
  {
    title: "Bachelor: Kommunikation, Wissen, Median",
    company: "FH Hagenberg",
    date: "Okt. 2020 - Juli 2023",
    description: [
      "mit ausgezeichnetem Erfolg bestanden",
      "Schwerpunkt Webentwicklung",
      "Jahrgangsvertreterin - Kommunikation zwischen Studiengangsleiter, Professor*innen und dem Jahrgang",
    ],
    highlight: true,
  },
  {
    title: "Technische Mathematik",
    company: "Johannes Kepler Universität",
    date: "Okt. 2019 - Juni 2020",
    description: ["Wechsel aufgrund großem Interesse für Web Development"],
  },
  {
    title: "Abendgymnasium Linz",
    date: "Sept. 2017 - Juli 2019",
  },
  {
    title: "Reha & Krankrenhaus",
    date: "Februar 2016 - Sept. 2017",
  },
  {
    title: "BRG Hamerlingstraße",
    date: "Juli 2021 - Aug. 2022",
    description: ["Schwerpunkt Musisch Kreative Klasse"],
  },
];
</script>

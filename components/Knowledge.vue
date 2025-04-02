<template>
  <div class="section flex-col" id="knowledge">
    <AtomsHeadline level="h2">Lebensweg & Wissen</AtomsHeadline>
    <AtomsParagraph class="mb-14">
      Von Full-Stack Web Development über UI/UX Design, Projektmanagement und
      Kommunikationswissenschaften - mein Studium an der FH Hagenberg bietet mir
      eine breite interdisziplinäre Basis. Mein Top-Favorit ist das Web
      Development, weshalb ich auch seit 2022 in dem Bereich arbeite. Am
      liebsten arbiete ich interdisziplinär und im Team.
    </AtomsParagraph>
    <div>
      <!-- Component: Alternative changelog feed with images -->
      <AtomsHeadline level="h3">Berufserfahrung</AtomsHeadline>
      <Feed :feed="workExperience" class="mb-14" />
      <AtomsHeadline level="h3">Ausbildung</AtomsHeadline>
      <Feed :feed="educationExperience" class="mb-14" />
      <!-- End Alternative changelog feed with images -->

      <div>
        <AtomsHeadline level="h3">Kenntnisse & Fähigkeiten</AtomsHeadline>
        <div class="mt-5 mb-7 md:mt-10 md:mb-14">
          Am meisten habe ich bis jetzt mit Symfony, TailwindCSS, Vue.js,
          Nuxt.js, TypeScript und dem Headless CMS Storyblok gearbeitet. Aber
          auch mit anderen Programmiersprachen und Frameworks wie z.B. Laravel
          habe ich bereits Projekte umgesetzt. Einen Überblick über die von mir
          verwendeten Technologien findest du hier (
          <span class="border-b-2 border-orange"> Frontend </span>,
          <span class="border-b-2 border-red">Backend</span>,
          <span class="border-b-2 border-pink">CMS</span>,
          <span class="border-b-2 border-purple-light"
            >Cloud Platforms & OS </span
          >, <span class="border-b-2 border-purple-dark">AI / KI</span> und
          <span class="border-b-2 border-blue">weitere</span>).
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 md:gap-8">
          <div class="md:col-span-2 lg:col-span-1">
            <!-- flex flex-col justify-between -->
            <!-- TODO: Satz dazu schreiben. -->
            <div class="w-[95%]">
              <!-- Component: Progress bar 50% with inside label -->
              <AtomsProgressBar
                v-for="(skill, index) in codingSkills"
                :key="index"
                :skill="skill"
              ></AtomsProgressBar>
            </div>
            <div class="mt-20 hidden md:block">
              <span class="font-bold">Sprachen:</span> Deutsch (Muttersprache),
              Englisch (C1), Spanisch (B1), Tschechisch (A1)
            </div>
            <!-- <AtomsLanguages class="hidden md:block mt-10"> </AtomsLanguages> -->
          </div>
          <div
            class="md:col-span-3 lg:col-span-2 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 mt-10 md:mt-0"
          >
            <AtomsTag
              v-for="(tag, index) in frontendSkills"
              :key="index"
              color="orange"
              class="border-orange"
            >
              {{ tag }}
            </AtomsTag>
            <AtomsTag
              v-for="(tag, index) in backendSkills"
              :key="index"
              class="border-[#f6673c]"
            >
              {{ tag }}
            </AtomsTag>
            <AtomsTag
              v-for="(tag, index) in cmsSkills"
              :key="index"
              class="border-pink"
            >
              {{ tag }}
            </AtomsTag>
            <AtomsTag
              v-for="(tag, index) in cloudPlattformSkills"
              :key="index"
              class="border-purple-light"
            >
              {{ tag }}
            </AtomsTag>
            <AtomsTag
              v-for="(tag, index) in aiSkills"
              :key="index"
              class="border-purple-dark"
            >
              {{ tag }}
            </AtomsTag>
            <AtomsTag
              v-for="(tag, index) in other"
              :key="index"
              class="border-blue"
            >
              {{ tag }}
            </AtomsTag>
          </div>
        </div>
      </div>
      <!-- <AtomsLanguages class="mt-10"> </AtomsLanguages> -->
      <div class="mt-10 md:hidden">
        <span class="font-bold">Sprachen:</span> Deutsch (Muttersprache),
        Englisch (C1), Spanisch (B1), Tschechisch (A1)
      </div>
      <div class="flex w-full justify-center items-center mt-14 md:mt-40">
        <div
          class="max-w-md space-y-8 flex flex-col items-center justify-center"
        >
          <div class="w-full rounded-full h-0.5 bg-gradient-main"></div>
          <div class="text-2xl flex font-light text-center">
            "To be curious is to ask; to earn knowledge is to seek, struggle,
            and grow beyond the answers."
          </div>
          <div
            class="w-full rounded-full h-0.5 bg-gradient-main item-center"
          ></div>
        </div>
      </div>
    </div>
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
      "Kennzahlen/Auswertungen von div. Schulungen Übersetzung von Texten, Mails und Präsentationen (englisch <-> deutsch) Erstellen von Informationsbroschüren, Fragebögen zur Bewertung der Schulungseffektivität usw.",
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
    title: "Bachelor: Kommunikation, Wissen, Medien",
    company: "FH Hagenberg",
    date: "Okt. 2020 - Juli 2023",
    description: [
      "mit ausgezeichnetem Erfolg bestanden",
      "Schwerpunkt Webentwicklung",
      "Jahrgangsvertreterin - Kommunikation zwischen Studiengangsleiter, Professor*innen und dem Jahrgang",
    ],
    highlight: true,
  },
];

const codingSkills = [
  { name: "HTML", value: "100" },
  { name: "CSS / SCSS", value: "95" },
  { name: "JavaScript", value: "95" },
  { name: "PHP", value: "85" },
];

const frontendSkills = [
  "TailwindCSS",
  "TypeScript",
  "Vue.js",
  "Nuxt.js",
  "jQuery",
  "Angular.js",
  "React",
];

const backendSkills = [
  "Symfony",
  "PHP",
  "XML/XSLT",
  "Java",
  "Laravel",
  "REST",
  "SOAP",
  "SQL",
  "NoSQL",
];

const cmsSkills = ["Storyblock", "Wordpress", "Typo3"];

const cloudPlattformSkills = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Gitlab",
  "Github",
  "Linux",
];

const aiSkills = ["LLMs", "Prompt Engineering"];

const other = [
  "Web Accessibility",
  "SEO",
  "Projektmanagement",
  "Kundenbetreuung",
  "UI/UX Design",
  "Figma",
  "Scrum",
  "Jira",
  "VSCode",
  "IntelliJ",
];
</script>

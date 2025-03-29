<template>
  <Introduction />
  <div class="container">
    <div class="border-gradient-main bg-white p-6">
      <p>This element has a gradient border!</p>
    </div>

    <div
      class="border-gradient-left bg-white p-6 shadow-md rounded-lg w-20 right-0"
    >
      <p>This div has a gradient left border!</p>
    </div>

    <div class="border-gradient-left bg-white p-6 rounded-lg shadow-lg">
      <p>This div has a gradient border on the left!</p>
    </div>
  </div>
  <div class="container my-5">
    <!-- <h2>Lebensweg & Wissen</h2> -->
    <div>
      <!-- Component: Alternative changelog feed with images -->
      <ul
        aria-label="Alternative changelog feed with images"
        role="feed"
        class="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:left-6 before:top-0 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-orange after:absolute after:bottom-6 after:left-6 after:top-6 after:-translate-x-1/2 after:border after:border-orange lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem] text-black"
      >
        <li
          role="article"
          class="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-blue before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
        >
          <h4
            class="hidden text-lg font-medium leading-7 text-slate-500 lg:block lg:w-32 lg:text-right bg-gradient"
          >
            seit Feb. 2023
          </h4>
          <div class="flex flex-col flex-1 gap-4">
            <h3 class="text-lg font-medium leading-7 text-emerald-500">
              <span>Web Developer, Werkstudentin</span
              ><span> - Netural GmbH</span>
              <span class="font-normal text-slate-500 lg:hidden">
                | seit Feb. 2023</span
              >
            </h3>
            <ul class="pl-5 list-disc marker:text-emerald-500">
              <li>
                Entwicklung und Wartung von Webanwendungen unter Verwendung
                moderner Technologien wie Symfony, Vue.js, Nuxt.js, TailwindCSS
                und TypeScript.
              </li>
              <li>
                Eigenständige Leitung und Organisation eines Kundenprojektes,
                einschließlich wöchentlicher Abstimmungen mit Kunden zur
                Priorisierung von Aufgaben und Klärung von Ticket-Scopes sowie
                Definition von Acceptance Criteria. Verwendung von Jira.
              </li>
              <li>
                Überwachung von AWS-Umgebungen, einschließlich der Kontrolle von
                CloudWatch-Logs, Einleitung von Maßnahmen bei Environment Health
                Issues wie zum Beispiel AWS WAF & Shield Einstellungen.
                Verwendung von S3.
              </li>
              <li>
                Konzeption und Umsetzung gezielter SEO-Maßnahmen zur
                Verbesserung der Sichtbarkeit und Performance von Webprojekten.
              </li>
            </ul>
          </div>
        </li>
        <li
          role="article"
          class="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-blue before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
        >
          <h4
            class="hidden text-lg font-medium leading-7 text-slate-500 lg:block lg:w-32 lg:text-right"
          >
            Aug. 2022 - Jan. 2023
          </h4>
          <div class="flex flex-col flex-1 gap-4">
            <h3 class="text-lg font-medium leading-7 text-emerald-500">
              <span>Web Developer, Praktikum</span><span> - Netural GmbH</span>
              <span class="font-normal text-slate-500 lg:hidden">
                | Aug. 2022 - Jan. 2023</span
              >
            </h3>
            <p class="">
              Entwicklung und Wartung von Webanwendungen unter Verwendung von
              Symfony, Vue.js, TailwindCSS und TypeScript
            </p>
          </div>
        </li>
        <li
          role="article"
          class="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-blue before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
        >
          <h4
            class="hidden text-lg font-medium leading-7 text-slate-500 lg:block lg:w-32 lg:text-right"
          >
            Okt. 2021 - Feb. 2022
          </h4>
          <div class="flex flex-col flex-1 gap-4">
            <h3 class="text-lg font-medium leading-7 text-emerald-500">
              <span>Tutorium Einführung in Web und Hypermedia</span
              ><span> - FH Hagenberg</span>
              <span class="font-normal text-slate-500 lg:hidden">
                | Okt. 2021 - Feb. 2022</span
              >
            </h3>
            <p class="">
              Korrektur der Hausübungen und Hilfestellungen - CSS3, HTML5 und
              Grundlagen der Web Accessibility
            </p>
          </div>
        </li>
        <li
          role="article"
          class="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-blue before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
        >
          <h4
            class="hidden text-lg font-medium leading-7 text-slate-500 lg:block lg:w-32 lg:text-right"
          >
            <div class="flex flex-col">
              <span>Juli 2021 -</span><span>Aug. 2022</span>
            </div>
          </h4>
          <div class="flex flex-col flex-1 gap-4">
            <h3 class="text-lg font-medium leading-7 text-emerald-500">
              <span>Lerndesigner, Praktikum</span
              ><span> - clickandlearn GmbH</span>
              <span class="font-normal text-slate-500 lg:hidden">
                | Jul. 2021 - Aug. 2022</span
              >
            </h3>
            <p class="">
              Abteilung Media Engineering, Umsetzung des firmeneigenen
              Onboardings mittels Autorentools Articulate Storyline und Rise
            </p>
          </div>
        </li>
        <li
          role="article"
          class="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-blue before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
        >
          <h4
            class="hidden text-lg font-medium leading-7 text-slate-500 lg:block lg:w-32 lg:text-right"
          >
            <div class="flex flex-col">
              <span>März 2019 -</span><span>Sep. 2019</span>
            </div>
          </h4>
          <div class="flex flex-col flex-1 gap-4">
            <h3 class="text-lg font-medium leading-7 text-emerald-500">
              <span>Verkäuferin im Einzelhandel, Teilzeit</span
              ><span> - BIPA Parfumerien Gesellschaft m.b.H.</span>
              <span class="font-normal text-slate-500 lg:hidden">
                | Mär. 2019 - Sep. 2019</span
              >
            </h3>
            <p class="">Verkauf, Kundenberatung, Lager</p>
          </div>
        </li>
        <li
          role="article"
          class="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-blue before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
        >
          <h4
            class="hidden text-lg font-medium leading-7 text-slate-500 lg:block lg:w-32 lg:text-right"
          >
            Juli 2015
          </h4>
          <div class="flex flex-col flex-1 gap-4">
            <h3 class="text-lg font-medium leading-7 text-emerald-500">
              <span>Praktikum im Bereich Schulung/Ausbildung</span
              ><span> - TRUMPF Maschinen Austria</span>
              <span class="font-normal text-slate-500 lg:hidden">
                | Juli 2015</span
              >
            </h3>
            <p class="">
              Kennzahlen/Auswertungen von div. Schulungen Übersetzung von
              Texten, Mails und Präsentationen (englisch <-> deutsch) Erstellen
              von lnformationsbroschüren, Fragebögen zur Bewertung der
              Schulungseffektivität usw.
            </p>
          </div>
        </li>
      </ul>
      <!-- End Alternative changelog feed with images -->
    </div>
  </div>
</template>

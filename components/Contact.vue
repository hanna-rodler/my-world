<template>
  <div id="contact" class="section">
    <AtomsHeadline level="h2">Kontaktiere mich!</AtomsHeadline>
    <AtomsParagraph>
      Hast du Fragen, Anregungen oder möchtest einfach nur Hallo sagen?<br />
      Schreib mir gerne eine Nachricht!
    </AtomsParagraph>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-8 w-full mb-10 md:my-10">
      <a href="mailto:contact@hannajuliarodler.com" class="card">
        <Icon
          name="heroicons:envelope"
          size="28"
          class="bg-gradient-main"
          alt="E-Mail"
        />
        <span>contact[at]hannajuliarodler.com</span>
      </a>
      <div class="card">
        <Icon
          name="heroicons:map-pin"
          size="28"
          class="bg-gradient-main"
          alt="Standort"
        />
        <span>Linz - Österreich</span>
      </div>
      <a
        class="link card"
        href="https://www.linkedin.com/in/hanna-julia-rodler/"
        target="_blank"
      >
        <NuxtImg
          src="/images/icons/linkedin.svg"
          width="36"
          height="36"
          alt="LinkedIn Logo"
        ></NuxtImg>
        <div class="flex items-center space-x-1">
          <span>LinkedIn</span>
          <Icon
            class="w-4 h-4"
            name="heroicons:arrow-up-right-solid"
            size="10"
          />
        </div>
      </a>
      <a
        class="link card"
        href="https://github.com/hanna-rodler"
        target="_blank"
      >
        <NuxtImg
          src="/images/icons/github-mark.svg"
          width="36"
          height="36"
          alt="Github Logo"
        ></NuxtImg>
        <div class="flex items-center space-x-1">
          <span>Github</span>
          <Icon
            class="w-4 h-4"
            name="heroicons:arrow-up-right-solid"
            size="10"
          />
        </div>
      </a>
    </div>
  </div>
</template>

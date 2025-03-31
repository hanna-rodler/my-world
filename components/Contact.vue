<template>
  <div id="contact" class="section flex flex-col">
    <AtomsHeadline level="h2">Kontaktiere mich!</AtomsHeadline>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-8 w-full mb-10 md:my-10">
      <div class="card">
        <Icon name="heroicons:envelope" size="28" class="bg-gradient-main" />
        <a href="mailto:haj.rodler@gmail.com">haj.rodler[at]gmail.com</a>
      </div>
      <div class="card">
        <Icon name="heroicons:map-pin" size="28" class="bg-gradient-main" />
        <span>Linz - Österreich</span>
      </div>
      <div class="card">
        <!-- TODO: alt -->
        <NuxtImg
          src="/images/icons/linkedin.svg"
          width="36"
          height="36"
          alt="LinkedIn"
        ></NuxtImg>
        <a class="link" href="www.linkedin.com/in/hanna-julia-rodler"
          >LinkedIn</a
        >
      </div>
    </div>
  </div>
</template>

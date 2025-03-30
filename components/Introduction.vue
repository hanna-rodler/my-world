<template>
  <div class="container my-5">
    <div class="md:min-h-svh">
      <div
        class="flex md:space-x-8 space-y-4 md:space-y-0 w-full flex-col md:flex-row md:min-h-[75vh] md:items-center"
      >
        <div class="md:hidden">
          <AtomsHeadline level="h1" levelStyle="gradient">
            Hanna Julia
          </AtomsHeadline>
          <AtomsHeadline level="h2" class="font-light"
            >Web Developer</AtomsHeadline
          >
        </div>
        <div class="w-full md:w-1/2 flex items-center justify-center">
          <div class="md:mr-5">
            <div class="relative w-60 h-90 md:w-80 md:h-120 group">
              <div
                class="absolute w-full h-full bg-gradient-main rounded-3xl translate-x-5 translate-y-5 group-hover:translate-x-7 group-hover:translate-y-7 transition-transform duration-300"
              ></div>
              <NuxtImg
                class="rounded-3xl absolute w-full h-full group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
                src="/images/me.webp"
                alt="Hanna Julia"
                width="320"
                height="480"
                aspect-ratio="1.5"
              >
                <!-- // TODO: webp default jpg -->
              </NuxtImg>
            </div>
          </div>
        </div>
        <div class="mt-16 md:mt-0 md:flex md:flex-col w-full md:w-1/2">
          <div class="hidden md:block">
            <AtomsHeadline level="h1" levelStyle="gradient">
              Hanna Julia
            </AtomsHeadline>
            <AtomsHeadline level="h2" class="font-light"
              >Web Developer</AtomsHeadline
            >
          </div>
          <div class="mt-10 md:mt-12">
            Ob in meiner Masterarbeit, meiner Arbeit oder bei Hobby Projekten -
            für mich geht es bei Technik um den Menschen. Ich entwickle
            leidenschaftlich Lösungen bei denen der User an erster Stelle steht.
            Technik soll für den Menschen und mit den Menschen geschaffen
            werden, sie soll den Menschen neues ermöglichen, altes vereinfachen
            und ......
          </div>
        </div>
      </div>
      <div class="md:h-1/5 mt-5">
        <a href="#about" class="cursor-pointer flex flex-col items-center">
          <div class="text-lg">Lerne mich kennen</div>
          <div>
            <Icon
              name="heroicons:chevron-double-down"
              size="42"
              class="bg-gradient-main shiny-text"
            />
            <!-- TODO: scroll smooth with offset -->
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

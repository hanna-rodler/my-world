<template>
  <div class="container my-5">
    <div class="md:min-h-svh">
      <div
        class="flex md:space-x-8 space-y-4 md:space-y-0 w-full flex-col md:flex-row md:min-h-[75vh] md:items-center"
      >
        <div class="w-full md:w-1/2 flex items-center justify-center">
          <div class="md:mr-5">
            <div class="relative w-80 h-120">
              <div
                class="absolute w-full h-full bg-gradient-main rounded-3xl translate-x-5 translate-y-5"
              ></div>
              <NuxtImg
                class="rounded-3xl absolute w-full h-full"
                src="/images/me.jpg"
                alt="Hanna Julia"
                width="320"
                height="480"
                aspect-ratio="1.5"
              >
              </NuxtImg>
            </div>
          </div>
        </div>
        <div class="md:flex md:flex-col w-full md:w-1/2">
          <div>
            <h1 class="text-6xl text-gradient-main inline-block">
              Hanna Julia
            </h1>
            <h2 class="text-3xl mt-2 source-sans-light">Web Developer</h2>
          </div>
          <div class="md:mt-12">
            Ob in meiner Masterarbeit, meiner Arbeit oder bei Hobby Projekten -
            für mich geht es bei Technik um den Menschen. Ich entwickle
            leidenschaftlich Lösungen bei denen der User an erster Stelle steht.
            Technik soll für den Menschen und mit den Menschen geschaffen
            werden, sie soll den Menschen neues ermöglichen, altes vereinfachen
            und ......
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center md:h-1/5 mt-5">
        <div>Lerne mich kennen</div>
        <div>
          <Icon
            name="heroicons:chevron-double-down"
            size="28"
            class="bg-gradient-main"
          />
        </div>
      </div>
    </div>
  </div>
</template>

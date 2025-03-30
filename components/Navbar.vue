<template>
  <header
    class="z-20 w-full border-b border-slate-50 shadow-lg after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 md:border-slate-100 md:backdrop-blur-sm md:after:hidden md:flex md:justify-center text-black sticky top-0 bg-white"
  >
    <div class="relative max-w-full md:w-5xl mx-auto px-4 lg:px-0">
      <nav
        aria-label="main navigation"
        class="flex h-20 items-stretch justify-between font-medium text-slate-800"
        role="navigation"
      >
        <a
          id="HJR"
          aria-label="HJR logo"
          aria-current="page"
          class="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none md:flex-1"
          href="./"
        >
          <NuxtImg
            src="/images/Logo.svg"
            width="200"
            height="200"
            class="h-9 w-9"
          ></NuxtImg>
        </a>
        <button
          class="relative order-10 block h-10 w-10 self-center md:hidden"
          :class="{
            'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0':
              isToggleOpen,
          }"
          @click="toggleMenu"
          :aria-expanded="isToggleOpen ? 'true' : 'false'"
          aria-label="Toggle navigation"
        >
          <div
            class="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform"
          >
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
            ></span>
          </div>
        </button>
        <ul
          role="menubar"
          aria-label="Select page"
          class="absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/95 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 md:visible md:relative md:top-0 md:z-0 md:flex md:h-full md:w-auto md:items-stretch md:overflow-visible md:bg-white/0 md:px-0 md:py-0 md:pt-0 md:opacity-100"
          :class="{
            'visible opacity-100 backdrop-blur-sm': isToggleOpen,
            'invisible opacity-0': !isToggleOpen,
          }"
        >
          <li role="none" class="navitem">
            <a
              role="menuitem"
              aria-haspopup="false"
              class="focus:text-blue focus:outline-none focus-visible:outline-none"
              href="./#about"
            >
              <span class="">Über mich</span>
              <!-- <div
                class="absolute bottom-0 left-0 w-20 h-2 bg-gradient-to-r from-orange via-pink to-blue rounded-tl-xl rounded-br-xl"
              ></div> -->
            </a>
          </li>
          <li role="none" class="navitem">
            <a
              role="menuitem"
              aria-current="page"
              aria-haspopup="false"
              class="focus:text-blue focus:outline-none focus-visible:outline-none"
              href="./#knowledge"
            >
              <span>Lebensweg & Wissen</span>
            </a>
          </li>
          <li role="none" class="navitem">
            <a
              role="menuitem"
              aria-haspopup="false"
              class="focus:text-blue focus:outline-none focus-visible:outline-none"
              href="./#contact"
            >
              <span>Kontakt</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isToggleOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isToggleOpen = !this.isToggleOpen;
    },
  },
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>

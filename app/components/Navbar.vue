<template>
  <header class="sticky top-4 z-50 px-4">
    <div
      class="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white/90 shadow-lg backdrop-blur"
    >
      <div class="flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-lg font-bold tracking-tight text-slate-900">
            Base Stack
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 md:hidden"
          >
            Contact
          </NuxtLink>
        </div>
        <nav class="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
          <NuxtLink class="hover:text-slate-900" to="/services">Services</NuxtLink>
          <NuxtLink class="hover:text-slate-900" to="/process">Process</NuxtLink>
          <NuxtLink class="hover:text-slate-900" to="/pricing">Packages</NuxtLink>
          <NuxtLink class="hover:text-slate-900" to="/about">About</NuxtLink>
          <NuxtLink class="hover:text-slate-900" to="/contact">Contact</NuxtLink>
        </nav>
        <div class="hidden items-center gap-3 md:flex">
          <NuxtLink class="text-sm font-medium text-slate-600 hover:text-slate-900" to="/contact">
            Book a consult
          </NuxtLink>
          <NuxtLink
            class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            to="/pricing"
          >
            See packages
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

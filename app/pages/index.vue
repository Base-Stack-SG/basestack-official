<script setup>
useSeoMeta({
  title: 'Singapore Website Development for SMEs',
  description:
    'Base Stack builds fast, SEO-ready websites for Singapore SMEs. Web design, development, and maintenance for local businesses.'
});
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pb-16 pt-16 md:pt-24">
    <section class="grid items-center gap-12 md:grid-cols-2">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Singapore SME websites
        </p>
        <h1 class="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Build a fast, credible website that wins Singapore customers.
        </h1>
        <p class="mt-4 text-lg text-slate-600">
          We design and build high‑performing websites for SMEs in Singapore—mobile‑first,
          SEO‑ready, and easy to manage.
        </p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            class="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            to="/contact"
          >
            Book a free consult
          </NuxtLink>
          <NuxtLink
            class="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            to="/pricing"
          >
            See packages
          </NuxtLink>
        </div>
        <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <span class="inline-flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            Local support
          </span>
          <span class="inline-flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-amber-500"></span>
            2–4 week launch
          </span>
          <span class="inline-flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-sky-500"></span>
            You own the site
          </span>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-200/60 blur-2xl"
        ></div>
        <div
          class="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-amber-200/60 blur-2xl"
        ></div>
        <div class="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            What you get
          </p>
          <div class="mt-6 space-y-4 text-sm text-slate-600">
            <div class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
              <p>Modern, trust‑building design that fits your brand.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
              <p>SEO‑ready structure to rank for local searches.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
              <p>Fast load times and mobile‑first performance.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
              <p>Clear calls‑to‑action that turn visits into leads.</p>
            </div>
          </div>
          <div class="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Starter bonus
            </p>
            <p class="mt-2 text-sm text-slate-700">
              Free homepage copywriting template for new clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

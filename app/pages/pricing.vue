<script setup>
useSeoMeta({
  title: 'Website Packages & Pricing Singapore SMEs',
  description:
    'Simple website packages for Singapore SMEs. Get a tailored quote for your business goals.'
});
</script>

<template>
  <main class="mx-auto max-w-6xl px-4 pb-16 pt-16 md:pt-24">
    <section class="max-w-2xl">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
        Packages
      </p>
      <h1 class="mt-4 text-4xl font-bold tracking-tight text-slate-900">
        Packages for every stage
      </h1>
      <p class="mt-4 text-lg text-slate-600">
        Transparent scopes. We’ll tailor the final quote to your needs.
      </p>
    </section>

    <section class="mt-10 grid gap-6 md:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-lg font-semibold text-slate-900">Starter</h2>
        <p class="mt-2 text-sm text-slate-600">Best for new SMEs.</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-600">
          <li>1–5 pages</li>
          <li>Basic SEO setup</li>
          <li>1 revision round</li>
        </ul>
        <NuxtLink
          class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          to="/contact"
        >
          Get a quote
        </NuxtLink>
      </div>
      <div class="rounded-2xl border border-slate-900 bg-slate-900 p-6 text-white shadow-lg">
        <h2 class="text-lg font-semibold">Growth</h2>
        <p class="mt-2 text-sm text-slate-200">For scaling teams.</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-200">
          <li>Up to 10 pages</li>
          <li>Advanced SEO</li>
          <li>Copywriting support</li>
        </ul>
        <NuxtLink
          class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          to="/contact"
        >
          Get a quote
        </NuxtLink>
      </div>
    </section>
    <section class="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
      <p class="font-semibold text-slate-900">Not sure which package fits?</p>
      <p class="mt-2">
        Tell us your goals and we’ll recommend the simplest option that gets you
        results—no upsell.
      </p>
    </section>
  </main>
</template>

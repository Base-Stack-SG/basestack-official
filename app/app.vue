<script setup>
const siteTitle = 'Base Stack';
const siteDescription =
  'Base Stack builds fast, SEO-ready websites for Singapore SMEs. Website design, development, and maintenance for local businesses in Singapore.';

useSeoMeta({
  title: siteTitle,
  titleTemplate: `%s · Singapore Website Development`,
  description: siteDescription,
  ogTitle: `${siteTitle} · Singapore Website Development`,
  ogDescription: siteDescription,
  ogType: 'website',
  ogLocale: 'en_SG',
  twitterCard: 'summary_large_image',
  twitterTitle: `${siteTitle} · Singapore Website Development`,
  twitterDescription: siteDescription
});

useHead({
  htmlAttrs: {
    lang: 'en-SG'
  }
});
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <Navbar />
    <NuxtPage />
    <footer class="border-t border-slate-200 py-8">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Base Stack. Singapore.</span>
        <span>Websites for SMEs · Fast · SEO-ready · Mobile-first</span>
      </div>
    </footer>
  </div>
</template>

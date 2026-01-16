<template>
  <main class="mx-auto max-w-6xl px-4 pb-16 pt-16 md:pt-24">
    <section class="grid gap-10 md:grid-cols-2">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Contact
        </p>
        <h1 class="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Ready to build your website?
        </h1>
        <p class="mt-4 text-lg text-slate-600">
          Tell us about your business and we’ll reply within 1 business day.
        </p>
        <div class="mt-6 space-y-3 text-sm text-slate-600">
          <p>Email: basestack.sg@gmail.com</p>
          <p>WhatsApp: +65 9116 4558</p>
        </div>
      </div>
      <form class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" @submit.prevent="submitForm">
        <div class="grid gap-4">
          <label class="text-sm font-medium text-slate-700">
            Name
            <input
              v-model="form.name"
              class="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
              type="text"
              placeholder="Your name"
            />
          </label>
          <label class="text-sm font-medium text-slate-700">
            Business
            <input
              v-model="form.business"
              class="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
              type="text"
              placeholder="Company name"
            />
          </label>
          <label class="text-sm font-medium text-slate-700">
            Email
            <input
              v-model="form.email"
              class="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
              type="email"
              placeholder="you@example.com"
            />
          </label>
          <label class="text-sm font-medium text-slate-700">
            Phone/WhatsApp
            <input
              v-model="form.phone"
              class="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
              type="tel"
              placeholder="+65"
            />
          </label>
          <label class="text-sm font-medium text-slate-700">
            Project goals
            <textarea
              v-model="form.message"
              class="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none"
              rows="4"
              placeholder="Tell us about your business and timeline"
            ></textarea>
          </label>
          <button
            class="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            type="submit"
            :disabled="status === 'loading'"
          >
            {{ status === "loading" ? "Sending..." : "Send inquiry" }}
          </button>
          <p v-if="status === 'success'" class="text-sm text-emerald-600">
            Thanks! We received your inquiry and will reply within 1 business day.
          </p>
          <p v-if="status === 'error'" class="text-sm text-red-600">
            Something went wrong. Please email us directly.
          </p>
          <p class="text-xs text-slate-500">
            We’ll never share your details. This is just to start the conversation.
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
const form = reactive({
  name: '',
  business: '',
  email: '',
  phone: '',
  message: ''
});

const status = ref('idle');

const submitForm = async () => {
  status.value = 'loading';
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    });
    status.value = 'success';
    form.name = '';
    form.business = '';
    form.email = '';
    form.phone = '';
    form.message = '';
  } catch (error) {
    status.value = 'error';
  }
};
</script>

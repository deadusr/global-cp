<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
}

const closeModal = () => {
  showModal.value = false;
}

</script>


<template>

  <div
    class="from-[#666FCC] to-[#202342] bg-gradient-to-b font-sans has-[.modal]:h-screen sans has-[.modal]:overflow-hidden">
    <modal v-if="showModal" @close=closeModal />
    <header class="container mx-auto">
      <div class="mx-auto flex items-center justify-between py-4">
        <span class="font-bold text-white text-base md:text-lg xl:text-xl justify-between font-mono">
          Global Construction<br />
          Platform Corp
        </span>
        <button @click="openModal"
          class="px-4 py-2 font-bold text-sm md:text-base md:w-[200px] text-white rounded-full bg-gradient-to-br from-[#C77ACC] to-[#CCBE7A]">Get
          in
          touch</button>
      </div>
    </header>


    <section class="relative overflow-hidden">
      <div class="container mx-auto ">
        <div class="flex flex-col gap-5 py-12 md:py-20 md:gap-20 md:max-w-[750px] lg:mb-[100px] relative z-10">
          <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-mono">
            Unlock the Power of <span class="text-slate-900 font-bold">GPU Computing</span> Today
          </h1>
          <p class="text-base md:text-lg md:w-[450px] text-white">
            Experience unparalleled performance with our GPU computing servers tailored for digital actives computing,
            AI training, and rendering. Join us to elevate your projects with cutting-edge technology and exceptional
            support.
          </p>
          <button @click="openModal"
            class="w-[200px] px-6 py-3 font-bold text-base text-white rounded-full bg-gradient-to-br from-[#C77ACC] to-[#CCBE7A]">
            Learn More
          </button>
        </div>
        <img
          class="object-cover hidden md:block md:w-[600px] lg:w-[700px] lg:left-[50%] xl:w-[990px] xl:left-[50%] xl:top-1 absolute left-[60%] bottom-10 z-0"
          src="/bg-1.png" />
      </div>
    </section>

    <section class=" bg-white/5">
      <div
        class="container text-slate-900 mx-auto flex flex-col gap-12 items-center py-16 md:py-20 md:gap-16 lg:gap-20 lg:py-28">
        <h2 class="text-3xl md:text-4xl text-center font-mono md:max-w-[750px]">
          Unlock the Power of GPU Computing for Your Needs
        </h2>

        <div class="flex flex-col gap-12 md:flex-row md:gap-4 lg:justify-between lg:w-full">
          <div class="flex flex-col items-center gap-6 md:gap-8 xl:w-[400px]">
            <icon class=" fill-slate-900" />
            <h4 class="font-mono text-xl lg:text-2xl text-center">Maximize Your Profits with Cloud Digital Actives
              Solutions</h4>
            <p class="text-base text-center">Leverage our high-performance GPU servers to compute digital actives
              efficiently.
              efficiently.</p>
          </div>

          <div class="flex flex-col items-center gap-6 md:gap-8 xl:w-[400px]">
            <icon class="fill-slate-900" />
            <h4 class="font-mono text-xl lg:text-2xl text-center">Accelerate AI Development with Our GPU Computing
              Services</h4>
            <p class="text-base text-center">Train your AI models faster and more effectively with our powerful GPUs.
            </p>
          </div>

          <div class="flex flex-col items-center gap-6 md:gap-8 xl:w-[400px]">
            <icon class=" fill-slate-900" />
            <h4 class="font-mono text-xl lg:text-2xl text-center">Transform Your Creative Projects with GPU Rendering
              Power</h4>
            <p class="text-base text-center">Render stunning graphics and videos with our state-of-the-art GPU
              technology.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="">
      <div class="container mx-auto  text-slate-900 flex flex-col gap-12 py-16 lg:gap-20 lg:py-28">

        <div class="flex flex-col items-center gap-5 md:gap-16 lg:flex-row lg:justify-between">
          <div class="flex flex-col gap-3">
            <span class="text-white text-base ">Power</span>
            <h2 class="font-mono text-4xl md:text-5xl lg:w-[500px]">Unleash Your Potential with GPU Servers</h2>
          </div>
          <p class="text-base md:text-lg">
            Our GPU computing servers are designed to meet your needs, whether you're computing digital actives,
            training AI models, or rendering high-quality graphics. With cutting-edge technology and scalable solutions,
            we empower you to achieve your goals efficiently. Experience unparalleled performance and reliability with
            our dedicated services.
          </p>
        </div>


        <div class="flex flex-col gap-12 md:flex-row md:gap-4 w-full lg:justify-between">
          <div class="flex flex-col gap-5 md:gap-6 xl:w-[400px]">
            <icon class="fill-slate-900" />
            <h3 class="font-mono text-2xl ">Digital Actives Computing Made Easy and Profitable</h3>
            <p class="text-base">Maximize your digital actives computing efficiency with our powerful servers.</p>
          </div>

          <div class="flex flex-col gap-5 md:gap-6 xl:w-[400px]">
            <icon class="fill-slate-900" />
            <h3 class="font-mono text-2xl ">AI Training Solutions for Every Business Size</h3>
            <p class="text-base">Accelerate your AI projects with our robust infrastructure.</p>
          </div>

          <div class="flex flex-col gap-5 md:gap-6 xl:w-[400px]">
            <icon class="fill-slate-900" />
            <h3 class="font-mono text-2xl ">High-Quality Rendering for Stunning Visuals</h3>
            <p class="text-base">Create breathtaking graphics with our rendering services.</p>
          </div>
        </div>

        <button @click="openModal"
          class="min-w-[200px] w-fit px-6 py-3 font-bold text-base text-slate-900 rounded-full bg-white">
          Learn More
        </button>
      </div>
    </section>


    <section class="bg-white/10">
      <div class="container mx-auto">
        <div class="text-slate-900 flex flex-col  items-center lg:flex-row gap-12 py-16 lg:gap-20 lg:py-28">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3 ">
              <span class="text-white text-base ">Empower</span>
              <h2 class="font-mono text-4xl">Unlock the Power of GPU Computing</h2>
              <p class="text-base">
                Experience unparalleled performance and flexibility with our GPU computing servers. Perfect for digital
                actives computing, AI training, and rendering tasks.
              </p>
            </div>

            <div class="flex flex-col gap-12 md:flex-row">
              <div class="flex flex-col gap-5 md:gap-4 xl:max-w-[300px]">
                <icon class="fill-slate-900" />
                <h5 class="font-mono text-lg md:text-xl">Cost-Effective</h5>
                <p class="text-base">Reduce operational costs while maximizing your computing power with our affordable
                  solutions.</p>
              </div>

              <div class="flex flex-col gap-5 md:gap-4 xl:max-w-[300px]">
                <icon class="fill-slate-900" />
                <h5 class="font-mono text-lg md:text-xl">Scalable Solutions</h5>
                <p class="text-base">
                  Easily scale your resources to meet growing demands without compromising performance.
                </p>
              </div>

            </div>

            <button @click="openModal"
              class="min-w-[200px] w-fit px-6 py-3 font-bold text-base text-slate-900 rounded-full bg-white">
              Learn More
            </button>
          </div>

          <img class="object-cover w-full rounded-[40px] md:max-w-[600px] lg:w-[500px] xl:w-[600px]"
            src="/image-server.jpg" />
        </div>
      </div>

    </section>


    <section class=" ">
      <div class="container mx-auto flex flex-col text-white gap-12 py-16 lg:gap-20 lg:py-28 ">
        <div class="flex flex-col gap-6 md:flex-row">
          <div class="flex flex-col gap-3 ">
            <span class="text-white text-base ">Performance</span>
            <h2 class="font-mono text-4xl md:text-5xl">Unleash the Power of GPU Computing</h2>
          </div>

          <div class="flex flex-col gap-6 lg:gap-8">
            <p class="text-base md:text-lg">
              Our GPU servers deliver unmatched speed and reliability for digital actives computing, AI training, and
              rendering tasks. Experience seamless performance that scales with your needs.
            </p>

            <div class="flex flex-col gap-6 md:flex-row lg:justify-between">
              <div class="flex flex-col gap-2 lg:w-[50%]">
                <span class="font-mono text-4xl md:text-5xl">99.9%</span>
                <p class="text-base md:text-lg">Uptime you can count on, always.</p>
              </div>

              <div class="flex flex-col gap-2 lg:w-[50%]">
                <span class="font-mono text-4xl md:text-5xl">3X</span>
                <p class="text-base md:text-lg">Faster processing speeds than traditional servers.</p>
              </div>
            </div>

            <button @click="openModal"
              class="min-w-[200px] w-fit px-6 py-3 font-bold text-base text-white rounded-full border border-white">
              Learn More
            </button>
          </div>

        </div>
      </div>

    </section>

    <section
      class="container mx-auto text-white flex flex-col gap-12 py-16 lg:gap-20 lg:py-28 md:flex-row xl:justify-between">
      <div class="flex flex-col gap-6 md:gap-8 xl:max-w-[600px]">
        <h2 class="font-mono text-4xl md:text-5xl">Unlock Your Computing Potential</h2>
        <p class="text-base md:text-lg">Contact us today to explore how our GPU servers can elevate your projects and
          profits.</p>

        <button @click="openModal"
          class="min-w-[200px] w-fit px-6 py-3 font-bold text-base text-slate-900 rounded-full bg-white">
          Learn More
        </button>
      </div>

      <img class="object-cover w-full rounded-[40px] md:w-[350px] lg:w-[500px] xl:w-[600px] max-w-[600px]"
        src="/image-2.png" />
    </section>

    <footer class="container mx-auto text-white flex flex-col gap-12 py-16">

      <div class="flex flex-col gap-6 md:flex-row md:justify-between">
        <div>
          <h5 class="text-lg font-bold">Subscribe to updates</h5>
          <p class="text-base">Stay informed about our latest offerings and updates.</p>
        </div>

        <div class="flex flex-col gap-3 md:w-[400px]">
          <div class="flex flex-col gap-3  lg:flex-row lg:items-center">
            <input type="email"
              class="border w-full border-white rounded-xl text-base px-3 py-2 bg-transparent outline-none"
              placeholder="Your email here" />

            <button
              class="min-w-[200px] lg:min-w-[120px] lg:w-[120px] w-full px-6 py-3 font-bold text-base text-white rounded-full border border-white">
              Subscribe
            </button>
          </div>
          <p class="text-xs">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </div>

      <span class="w-full h-[2px] bg-white" />

      <div class="flex flex-col gap-12 md:flex-row md:justify-between md:gap-6">
        <div class="flex flex-col md:flex-row md:gap-4 md:order-2 ">
          <NuxtLink to="/terms-of-service" class="text-sm py-2">Terms of Service</NuxtLink>
          <NuxtLink to="/private-policy" class="text-sm py-2">Privacy Policy</NuxtLink>
          <NuxtLink to="/contact-us" class="text-sm py-2">Contact Us</NuxtLink>
        </div>

        <span class="font-mono text-xl font-bold md:order-1">
          Global Construction <br />
          Platform Corp
        </span>

        <p class="md:order-3 md:w-[30%]">© 2025 Global Construction Platform Corp. All rights reserved.</p>
      </div>


    </footer>
  </div>
</template>


<style scoped>
/* body {
  font-family: Azeret Mono, sans-serif;
  font-family: "Exo 2", sans-serif;
} */
</style>
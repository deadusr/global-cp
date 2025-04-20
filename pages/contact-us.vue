<template>
  <div class="from-[#666FCC] to-[#202342] bg-gradient-to-b font-sans min-h-screen">
    <header class="container flex items-center justify-between py-4">
      <span class="font-bold text-white text-base justify-between font-mono">
        Global Construction<br />
        Platform Corp
      </span>
      <button
        class="px-4 py-2 font-bold text-sm text-white rounded-full bg-gradient-to-br from-[#C77ACC] to-[#CCBE7A]">Get in
        touch</button>
    </header>

    <section class="container mx-auto text-white flex flex-col items-center gap-9">
      <div class="flex flex-col gap-5 py-12 max-w-[700px] w-full mx-auto">
        <h2 class="text-white text-3xl md:text-4xl lg:text-5xl font-mono text-center ">
          Contact Us
        </h2>

        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <mailIcon class="w-8 h-8 fill-slate-900" />
            <h3 class="text-2xl md:text-3xl font-mono">Contact info</h3>
          </div>

          <p class="text-base">
            <strong>Email</strong> <br />
            <a class="underline" href="mailto:globalcp23@gmail.com">globalcp23@gmail.com</a> <br />
            <strong>Phone</strong> <br />
            1 (302) 608-0759 <br />
            <br />
            <strong>Director</strong> <br />
            Alexey Migunov Katerina Migunova
          </p>
        </div>
      </div>

      <div class="max-w-[700px] w-full mx-auto flex flex-col gap-5 py-12">
        <h2 class="text-white text-2xl md:text-3xl font-mono">
          Office Address
        </h2>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <locationIcon class="w-8 h-8 fill-slate-900" />
            <h3 class="text-2xl font-mono">Contact info</h3>
          </div>

          <p class="text-base">8The Green, STE A , City Dover, County Kent , State Delaware, 19901 USA
          </p>
        </div>

      </div>
    </section>

  </div>
</template>
<script setup>

const emit = defineEmits(['close']);
const close = () => {
    emit('close');
}
</script>

<template>
    <div class="modal fixed left-0 top-0 w-screen h-screen bg-slate-900/30 touch-none pointer-events-none z-20">
        <div class="container mx-auto absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%]">
            <div
                class="px-4 py-6 md:px-10 md:py-16 bg-gradient-to-b from-[#666FCC] to-[#5A61B3] font-sans text-white flex flex-col gap-9 rounded-[24px] touch-auto pointer-events-auto max-w-[650px] mx-auto md:gap-16">
                <h4 class="text-xl md:text-3xl font-mono font-medium">
                    Please leave your email and our team will get in touch with you
                </h4>


                <form class="flex flex-col gap-6 md:flex-row">
                    <input type="email" class="w-full border border-white rounded-xl text-base px-3 py-2 bg-transparent outline-none invalid:border-red-600 "
                        placeholder="Your email here" />
                    <button type="submit" @click=close
                        class="min-w-[200px] px-6 py-3 font-bold text-base text-white rounded-full bg-gradient-to-br from-[#C77ACC] to-[#CCBE7A]">
                        Send
                    </button>
                </form>

                <button @click=close
                    class="mx-auto min-w-[200px] w-fit px-6 py-3 font-bold text-base text-white rounded-full border border-white">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>
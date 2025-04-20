import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: colors.green
            },
            fontFamily: {
                sans: ['"Exo 2"', 'sans-serif'],
                mono: ['Azeret Mono', 'sans-serif']
              },
          
        },
        container: {
            padding: "1rem",
        }
    }
}

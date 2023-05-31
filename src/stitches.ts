import { createStitches } from '@stitches/core'

export const { css } = createStitches({
    theme: {
        '@font-face': {
            fontFamily: "KouzanMouhituFont",
            src: `url("./assets/KouzanMouhituFont.woff2") format("woff2")`
        },
        fontFamily: {
            font: 'KouzanMouhituFont'
        }
    }
})
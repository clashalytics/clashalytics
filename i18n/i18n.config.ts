import deDE from "./de"
import enGB from "./en"

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en:enGB,
        de:deDE
    }
}))
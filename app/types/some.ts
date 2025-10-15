export type LocaleDataOption = {
    immediate: boolean
}

export type ImportStep = {
    state: 'loading' | 'success' | 'error',
    message: 'step-fetch' | 'step-fetch-error' | 'step-parse' | 'step-parse-error' | 'step-import' | 'step-import-error' | 'step-import-success'
}
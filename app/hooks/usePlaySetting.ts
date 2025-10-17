
type PlaySetting = {
    bg?: boolean
    ringtone?: boolean
    count?: boolean
}

export default () => {
    const playSetting = useLocalStorage<PlaySetting>('play-setting', { bg: true, ringtone: true, count: true })

    return {
        playSetting
    }
}
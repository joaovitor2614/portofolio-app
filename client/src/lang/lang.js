

const getLang = (locale, English, Portuguese) => {

    let lang;
    switch (locale) {
        case 'en-EN':
        case 'en-US':
        case 'en':
            lang = English;
            break;
        case 'pt-PT':
        case 'pt':
        case 'pt-BR':
        case 'pt-br':
            lang = Portuguese
            break


        default:
            break;
    }
    return { lang }
}

export default getLang
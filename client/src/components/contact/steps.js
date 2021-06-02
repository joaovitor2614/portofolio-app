const steps = [
    {
        id: 'NAME',
        title: 'Fill with your name'
    },
    {
        id: 'EMAIL',
        title: 'Fill with your email address'
    },
    {
        id: 'MSG',
        title: 'Fill with your message'
    },

]
export const isDisabled = (currentStep, formData) => {
    // check step by step validation
    if (currentStep == 0 && formData.name === '') {
        return true
    } else if (currentStep == 1 && formData.email === '') {
        return true
    } else if (currentStep == 2) {
        return true
    } else {
        return false
    }
}

export const handleReset = (setFormData, formData, setCurrentStep, setDisplayData) => {
    // reset form
    const { name, email, message } = formData
    setFormData({ name: '', email: '', message: '' });
    setCurrentStep(0);
    setDisplayData({
        name: '',
        email: '',
        message: ''
    })
}
export const handleNextStep = (setCurrentStep, currentStep, setDisplayData='', data, value, displayData) => {
    setCurrentStep(++currentStep);
    if (setDisplayData !== '') {
        setDisplayData({ ...displayData, [data]: value })
    }
   
}

export const getPlaceholder = (locale) => {
    if (locale === 'pt-PT' || 'pt' || 'pt-BR') {
        return true
    } else {
        return false
    }
}
export default steps
export const downloadPdf = (language = 'en') => {
    const pdfPath = language === 'es' 
        ? '/LucianoCamposKriegl_CV_ES.pdf'
        : '/LucianoCamposKriegl_CV_EN.pdf';

    const fileName = language === 'es' 
        ? 'LucianoCamposKriegl_CV_ES.pdf'
        : 'LucianoCamposKriegl_CV_EN.pdf';

    // Create a hidden anchor element
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = fileName;

    // Add element to body
    if (document.body) {
        document.body.appendChild(a);
        a.click();
        
        // Safely remove the element with error handling
        try {
            if (document.body && document.body.contains(a)) {
                document.body.removeChild(a);
            }
        } catch (error) {
            console.warn('Error removing download element:', error);
        }
    }
}
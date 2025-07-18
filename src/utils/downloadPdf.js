export const downloadPdf = () => {
    const pdfPath = '/LucianoCamposKriegl_CV.pdf';

    // Create a hidden anchor element
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'LucianoCamposKriegl_CV.pdf';

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
export const downloadPdf = () => {
    const pdfPath = '/LucianoCamposKriegl_CV.pdf';

    // Create a hidden anchor element
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'LucianoCamposKriegl_CV.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
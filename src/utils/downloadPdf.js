export const downloadPdf = () => {
    const pdfPath = '/blank.pdf';

    // Create a hidden anchor element
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'cv.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
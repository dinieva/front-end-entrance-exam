import html2PDF from 'jspdf-html2canvas';

export async function generatePdf() {
    let printLink = document.getElementById("print");
    let htmlElement = document.getElementById('content');
    printLink.addEventListener("click", function() {
       html2PDF(htmlElement, {
            jsPDF: {
              format: 'a4',
            },
            imageType: 'image/jpeg',
            output: 'CV.pdf'
           
          });
    })
}

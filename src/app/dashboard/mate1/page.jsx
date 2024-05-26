// Ejemplo de uso en otra parte de tu aplicación

import PDFViewer from '../../../components/pdfview';
import Link from 'next/link';
const MyPage = () => {
  return (
    <div>
      
      <div className="flex justify-center mb-4 mt-4">
        <button class="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <Link className="" href="./mate1/examenes">Realizar examen</Link>
        </button>
      </div>
      
      
      <PDFViewer url="/pdf/mate1/calculointegralydiferencial.pdf" />
    </div>
  );
};

export default MyPage;

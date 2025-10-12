import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';



function DeleteConfirmationModal({ recipe, onConfirm, onCancel }) {

    // tarif yoksa menüyü gösterme
    if (!recipe) return null;

    return (
        // Arka plan karartması ve menü ortalama
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full transform transition-all duration-300">

                {/* Header - Kırmızı Uyarı Alanı */}
                <div className="p-4 sm:p-6 border-b border-red-100 bg-red-50 rounded-t-xl flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon 
                            icon={faTriangleExclamation} 
                            className="text-3xl text-red-600 flex-shrink-0" 
                        />
                        <h3 className="text-xl font-bold text-red-800">Silme Onayı</h3>
                    </div>
                    <button
                        onClick={onCancel}
                        className="text-gray-400 hover:text-gray-600 transition"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-xl" />
                    </button>
                </div>

                {/* İçerik */}
                <div className="p-6 sm:p-8">
                    <p className="text-gray-700 mb-4">
                        
                        '{recipe.title}' adlı tarifi kalıcı olarak silmek istediğinizden emin misiniz?
                    </p>
                    <p className="text-sm text-red-500 font-medium">
                        Bu işlem geri alınamaz.
                    </p>
                </div>

                {/* Aksiyon Butonları */}
                <div className="p-4 bg-gray-50 rounded-b-xl flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="px-5 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-medium"
                    >
                        Vazgeç
                    </button>
                    <button
                        onClick={() => onConfirm(recipe.id)}
                        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium flex items-center gap-2"
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                        Evet, Sil
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirmationModal;

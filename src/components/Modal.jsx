import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, title, fileUrl }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h3 className="text-sm font-bold text-[#1a1a2e] truncate pr-4">{title}</h3>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 flex items-center justify-center transition-colors group"
            >
              <svg className="w-4 h-4 text-gray-400 group-hover:text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-auto p-4">
            <iframe
              src={fileUrl}
              className="w-full h-[70vh] rounded-xl border border-gray-200"
              title={title}
            />
          </div>

          <div className="flex items-center justify-between px-6 py-3 border-t border-gray-100 bg-gray-50">
            <span className="text-xs text-gray-400">Tekan ESC atau klik luar untuk menutup</span>
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#2a2a4e] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Buka di Tab Baru
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

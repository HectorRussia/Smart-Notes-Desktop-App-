import { MoreHorizontal, Trash2 } from 'lucide-react';
import { useState } from 'react';

export interface NoteItem {
    id: number;
    title: string;
    content: string;
    tags: string[];
    date: string;
}

export interface NotesProps {
    notes: NoteItem[];
    onDeleteNote: (id: number) => void;
}

const Notes = ({notes, onDeleteNote}: NotesProps) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [deleteModal, setDeleteModal] = useState<number | null>(null);

  const handleDelete = (noteId: number) => {
    onDeleteNote(noteId);
    setDeleteModal(null);
    setOpenDropdown(null);
  };

  return (
    <>
        <div className="flex flex-col h-screen mt-2 overflow-y-auto">
            {notes.map((note) => (
            <div key={note.id} className={`group relative p-5 mt-2 mx-2 cursor-pointer rounded-lg transition-colors duration-200 ${
              note.title === "โน้ตใหม่" 
                ? "bg-gray-500 hover:bg-gray-400"
                : "bg-gray-600 hover:bg-[#746f5a] hover:text-black"
            }`}>
                <div className="flex items-center justify-between">

                    <div>{note.title}</div>

                    {/* Dropdown Menu - เปลี่ยนเป็น hover */}
                    <div className="relative group/dropdown ">
                        <button
                            className="opacity-0 group-hover:opacity-100 text-white hover:text-yellow-400 p-2 rounded-full hover:bg-gray-700 transition-all duration-200 " 
                        >
                            <MoreHorizontal size={18} className='cursor-pointer'/>
                        </button>

                        {/* Dropdown Content - แสดงเมื่อ hover */}
                        <div className="absolute right-0 mt-1 w-32 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-600 opacity-0 group-hover/dropdown:opacity-100 invisible group-hover/dropdown:visible transition-all duration-200">
                            <button
                                className="w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-gray-700 hover:text-red-300 rounded-md transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDeleteModal(note.id);
                                }}
                            >
                                <Trash2 size={16} />
                                <span>ลบ</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-gray-300">{note.content}</div>
                <div className="flex items-center gap-2 mt-2">
                    {note.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-500 text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
                <div className="mt-2">{note.date}</div>
            </div>
            ))}
        </div>


        {/* Delete Confirmation Modal */}
        {deleteModal && (
            <dialog id={`delete_modal_${deleteModal}`} className="modal modal-open">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">ยืนยันการลบ</h3>
                    <p className="py-4">คุณแน่ใจหรือไม่ว่าต้องการลบโน้ตนี้? การกระทำนี้ไม่สามารถยกเลิกได้</p>
                    <div className="modal-action">
                        <button 
                            className="btn btn-error"
                            onClick={() => handleDelete(deleteModal)}
                        >
                            ลบ
                        </button>
                        <button 
                            className="btn btn-ghost"
                            onClick={() => setDeleteModal(null)}
                        >
                            ยกเลิก
                        </button>
                    </div>
                </div>
                {/* Click outside to close */}
                <div 
                    className="modal-backdrop" 
                    onClick={() => setDeleteModal(null)}
                ></div>
            </dialog>
        )}

        {/* Click outside dropdown to close */}
        {openDropdown && (
            <div 
                className="fixed inset-0 z-0" 
                onClick={() => setOpenDropdown(null)}
            />
        )}
    </>
  )
}

export default Notes
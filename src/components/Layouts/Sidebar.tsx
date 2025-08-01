import { FolderClosed, NotepadText,Plus, Search } from 'lucide-react';
import Notes from '../Notes/Notes';
const Sidebar = () => {
  
    const Topics = [
        { id: 1, name: 'All Notes' ,color: 'bg-pink-500'},
        { id: 2, name: 'Getting Started',color: 'bg-blue-500'},
        { id: 3, name: 'Reference',color: 'bg-orange-500' },
        { id: 4, name: 'Personal',color: 'bg-green-500' },
        { id: 5, name: 'Work' ,color: 'bg-red-500'},
    ];

  return (
    <>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5 h-screen">
            <div className='flex flex-col justify-between w-full h-40  gap-5 pt-8'>
                <div className='flex justify-between items-center px-5'>
                    <div className='flex justify-center items-center gap-5 '>
                        <div className="font-bold"><NotepadText color='#ebcc05'/></div>
                        <div className="font-bold">Smart Notes</div>
                    </div>

                    <div className="font-bold cursor-pointer">
                        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#ebcc05] hover:bg-yellow-200 transition-transform duration-100 active:scale-90"
                        >
                            <Plus color='black'/>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center h-10 px-5">
                    <label className="flex items-center gap-2 w-full px-5  py-2 rounded-md border border-gray-500 focus-within:ring-2 focus-within:ring-[#ebcc05] transition-colors duration-200">
                        <Search size={20} className="text-gray-500" />
                        <input
                            type="search"
                            required
                            placeholder="ค้นหาโน๊ต"
                            className=" py-2 outline-none border-none focus:ring-0 focus:outline-none text-sm placeholder-gray-400"
                        />
                    </label>
                </div>
            </div>
            <div className='flex flex-col h-auto pb-2 mt-7 border-t border-b border-gray-500'>
                <div className='flex items-center gap-2 p-5'>
                    <FolderClosed />
                    <span className='ml-2 text-[18px]'>Folders</span>
                </div>
                <div className='flex flex-col p-10 pt-0 pb-0'>
                    {Topics.map((topic) => (
                    <div
                        key={topic.id}
                        className="flex items-center mb-2 px-2 py-1 rounded-lg cursor-pointer font-bold transition-all duration-150 hover:text-black hover:bg-yellow-100 hover:shadow hover:scale-[1.03]"
                    >
                        <span className={`w-3 h-3 rounded-full mr-2 ${topic.color}`}></span>
                        <span>{topic.name} (จำนวน)</span>
                    </div>
                    ))}
                </div>
            </div>
            <Notes/>
        </div>
    </>
  )
}

export default Sidebar
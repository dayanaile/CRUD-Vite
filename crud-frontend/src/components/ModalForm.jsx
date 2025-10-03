import { useState } from "react"

export default function ModalForm({isOpen, onClose, mode, onSubmit}){
    const [rate, setRate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState('');

    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return(
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
            <div className="modal-box">
                <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Mode' : 'Details Mode'}</h3>
                <form method="dialog" onSubmit={handleSubmit}>

                <label className="input input-bordered my-4 flex intems-center gap-2">
                    Name
                    <input 
                        type="text" 
                        className="grow" 
                        value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Daisy" 
                    />
                </label>
                <label className="input input-bordered my-4 flex intems-center gap-2">
                    Email
                    <input 
                        type="text" 
                        className="grow" 
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="mail@site.com" 
                    />
                </label>
                <label className="input input-bordered my-4 flex intems-center gap-2">
                    Job
                    <input 
                        type="text" 
                        className="grow" 
                        value={job} onChange={(e) => setJob(e.target.value)}
                        placeholder="Developer"
                    />
                </label>

                <div className="flex mb-4 my-4 justify-between">
                    <label className="input input-bordered my-4 flex intems-center gap-2">
                        Rate
                        <input 
                            type="number" 
                            className="grow" 
                            value={rate} onChange={(e) => setRate(e.target.value)}
                            placeholder="Developer" 
                        />
                    </label>
                    <select 
                        value={status ? 'Active' : 'Inactive'} 
                        onChange={handleStatusChange}
                        className="select select-bordered w-full max-w-xs my-4">
                            <option>Inactive</option>
                            <option>Active</option>
                    </select>
                </div>

                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                
                <button className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add'}</button>
                </form>
            </div>
            </dialog>
        </>
    )
}
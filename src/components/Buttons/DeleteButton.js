'use client'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { baseURL } from '../utils/getBaseURL';

const DeleteButton = ({ id }) => {

    const handleDelete = async (id) => {
        const res = await fetch(`${baseURL}/remove-notification/${id}`, {})
        return res.json();
    }

    return (
        <button onClick={() => handleDelete(id)} className="btn btn-ghost btn-lg">
            <DeleteOutlineIcon className="text-red-500"></DeleteOutlineIcon>
        </button>
    );
};

export default DeleteButton;
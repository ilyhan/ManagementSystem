import useGetUsers from "@/common/hooks/useGetUsers";
import Checkbox from "@/common/ui/checkbox/Checkbox";
import Modal from "@/common/ui/modal/Modal"

interface IAddUserModalProps {
    open: boolean;
    onClose: () => void;
}

const AddUserModal = ({ open, onClose }: IAddUserModalProps) => {
    const { data } = useGetUsers();

    return (
        <Modal isOpen={open} onClose={onClose}>
            <form>
                {data && data.map((user) => (
                    <li>
                        <Checkbox label={user.fullName} name={String(user.id)} />
                    </li>
                ))}
                <button>Добавить</button>
            </form>
        </Modal>
    )
}

export default AddUserModal;
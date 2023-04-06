import { useDraggable } from "@dnd-kit/core"
import { useSortable } from "@dnd-kit/sortable"

type User = {
  firstName: string
  sex: string
  lastName: string
  email: string
  avatar: React.ReactNode
  id: string
}

export const Draggable = ({ user, setUsers }:
  {
    user: User,
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
  }) => {
  


  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: user.id })
  


  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className='w-52 transition duration-150 hover:scale-110'
    >
      <div >
        {user.avatar}
  
        <p>{user.firstName + user.lastName}</p>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

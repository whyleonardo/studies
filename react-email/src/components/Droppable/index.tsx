import { useDroppable } from '@dnd-kit/core'

export const Droppable = ({ children }: { children: React.ReactNode }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const style = {
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style} className='w-full border h-screen text-white'>
      {children}
    </div>
  )
}
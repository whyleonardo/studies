import { faker } from '@faker-js/faker'
import { useState, Suspense } from 'react'
import { BigHead } from '@bigheads/core'
import { Droppable } from './components/Droppable'
import { Draggable } from './components/Draggable'
import { DndContext, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, sortableKeyboardCoordinates, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'

type User = {
  firstName: string
  sex: string
  lastName: string
  email: string
  avatar: React.ReactNode
  id: string
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isDropped, setIsDropped] = useState(false)

  function createRandomUser() {

    const sex = faker.name.sexType()
    const firstName = faker.name.firstName(sex)
    const lastName = faker.name.lastName(sex)
    const email = faker.internet.email(firstName, lastName)

    const randomUser = {
      firstName,
      lastName,
      sex,
      email,
      avatar: <Example sex={sex} />,
      id: faker.datatype.uuid()
    }
    setUsers((prevState) => ([...prevState, randomUser]))
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setUsers((users) => {
        const oldIndex = users.indexOf(active.id);
        const newIndex = users.indexOf(over.id);

        return arrayMove(users, oldIndex, newIndex);
      });
    }
  }

  function deleteUser(id: string) {
    setUsers((prevState) => prevState.filter(user => user.id !== id))
    console.log('ol=a')
  }

  return (
    <div className='flex w-full bg-slate-950 h-screen text-white overflow-hidden'>
      <button onClick={createRandomUser}>
        Generate random user
      </button>

      <DndContext
        onDragEnd={handleDragEnd}
        sensors={sensors}
        collisionDetection={closestCenter}
      >
     
        <SortableContext
        items={users}
          strategy={horizontalListSortingStrategy}
        >
          {users.map(user => (
            <button
              className='relative z-index-[1000]'
              onClick={() => deleteUser(user.id)} key={user.email}
            >
            <Draggable user={user} setUsers={setUsers} key={user.id} />
            </button>
          ))}
        </SortableContext>
        

    
      </DndContext>
    </div>
  )
}

const Example = ({ sex }: { sex: string }) => {
  const isFemale = sex == 'female'
  return (

    <BigHead
      accessory="none"
      body={isFemale ? 'breasts' : 'chest'}
      clothing={isFemale ? 'dress' : 'shirt'}
      clothingColor={isFemale ? 'red' : 'black'}
      eyebrows={isFemale ? 'raised' : 'concerned'}
      eyes="normal"
      facialHair='none'
      graphic="redwood"
      hair={isFemale ? 'long' : 'short'}
      hairColor="black"
      hat="none"
      hatColor="green"
      lipColor="purple"
      mouth="grin"
      skinTone="light"
    />
  )
}
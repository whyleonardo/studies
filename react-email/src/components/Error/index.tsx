import { WarningCircle } from '@phosphor-icons/react'

 const ErrorComponent = ({ error }: { error: Error }) => {
  return (
    <div className='flex items-center justify-center h-screen bg-slate-900 '>

      <div className='flex flex-col items-center'>
        <WarningCircle size={64} className='text-slate-100/10' />
      <p className="text-slate-100">
        {error.message}
      </p>
      </div>
    </div>
  )
}

export default ErrorComponent
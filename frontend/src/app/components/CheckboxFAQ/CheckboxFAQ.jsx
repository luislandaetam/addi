export function CheckboxFAQ() {
  return (
    <label className='block relative cursor-pointer text-xl select-none w-4 h-7 rounded bg-white my-4'>
      <input type='checkbox' className='cursor-pointer w-0 h-0 opacity-0' />
      <div className='w-full h-0.5 bg-[#0566FE] absolute top-1/2 -translate-y-1/2 duration-700 ease-[cubic-bezier(0,1,.33,1.2)]' />
      <div className='w-full h-0.5 bg-[#0566FE] absolute top-1/2 -translate-y-1/2 duration-700 ease-[cubic-bezier(0,1,.33,1.2)] -translate-y-1/2 rotate-90' />
    </label>
  )
}

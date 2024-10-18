function App() {
  
  return (
    <>
      <div className='flex flex-col gap-3 items-center bg-sky-600 w-full'>
        <h1 className='text-2xl text-center font-bold p-5 text-white font-arial'>Tecnova Chatbot</h1>
        <form className='flex gap-3 p-2'>
          <input type="text" placeholder='Escribe tu duda' className='bg-sky-900 rounded-lg text-white p-3 w-72' />
          <button className='bg-sky-900 rounded-lg text-white p-3'>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App

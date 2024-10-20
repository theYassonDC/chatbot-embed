import { FormEvent, useEffect, useState } from "react"
import ChatBot from "./components/Chat"
import { setLocalStorageItem } from "./utils/localStorage"
import { getIA } from "./services/gemini"
interface Ichat {
  client: boolean,
  content: string
}
function App() {
  const [promp, setPromp] = useState('')
  const [history, setHistory] = useState<Ichat[]>([])
  async function getPresentation() {
    const resIa = await getIA('Haz una presentación como si fueras un chatbot de una empresa de mantenimiento de redes y hardware llamado tecnova')
    if (resIa) {
      setHistory(prevList => [...prevList, { client: false, content: resIa }])
    }
  }
  useEffect(() => {
    getPresentation()
  }, [])
  useEffect(() => {
    setLocalStorageItem('chat', JSON.stringify(history))
  }, [history])
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setPromp('')
    if (!promp) return
    setHistory(prevList => [...prevList, { client: true, content: promp }])
    const res = await getIA(promp)
    if (res) {
      setHistory(prevList => [...prevList, { client: false, content: res }])
    }
  }
  return (
    <>
      <div className='flex flex-col gap-3 items-center bg-sky-600 w-full h-auto'>
        <h1 className='text-2xl text-center font-bold p-5 text-white font-arial'>Tecnova Chatbot</h1>
        <ChatBot history={history}/>
        <form className='flex gap-3 p-2'>
          <input type="text" placeholder='Escribe tu duda' className='bg-sky-900 rounded-lg text-white p-3 w-96' value={promp} onChange={(e) => setPromp(e.target.value)} />
          <button className='bg-sky-900 rounded-lg text-white p-3' onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App

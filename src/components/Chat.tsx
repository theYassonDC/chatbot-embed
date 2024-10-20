import BourbleClient from "./BorbleClient"
import BourbleComponent from "./Bourble"
interface Storage {
  client: boolean,
  content: string
}
function ChatBot({ history }: { history: Storage[] }) {

  return (
    <>
      <div className='flex flex-col gap-2 p-4 overflow-y-auto 
      [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-sky-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-sky-300
  dark:[&::-webkit-scrollbar-track]:bg-sky-700
  dark:[&::-webkit-scrollbar-thumb]:bg-sky-500
      max-h-96'>
        {
          history ?
          history.map((v: Storage, i: number) => (
              <>
                {v.client ?
                  <BourbleClient content={v.content} key={i}/> :
                  <BourbleComponent content={v.content} icon='https://res.cloudinary.com/iegdc-storage/image/upload/v1729389344/pnkepi87vbaxp4lfw0re.png' name="Support bot tecnova" key={i} />
                }
              </>
            ))
            : null
        }
      </div>
    </>
  )
}

export default ChatBot

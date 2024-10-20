import Markdown from 'react-markdown'
interface BourbleTypes {
    name: string
    icon: string
    content: string
}
function BourbleComponent({ name, icon, content }: BourbleTypes) {
    return (
        <>
            <div className="flex gap-2 w-full min-w-72 p-4">
                <img src={icon} alt="av" className="rounded-full h-20"/>
                <div className="flex flex-col">
                    <span className="text-white font-semibold">{name}</span>
                    <p className="text-white bg-cyan-800 rounded-tr-xl rounded-br-xl rounded-bl-xl p-4">
                        <Markdown>{content}</Markdown >
                    </p>
                </div>
            </div>
        </>
    );
}

export default BourbleComponent;
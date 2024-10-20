
export const getIA = async (args: string) => {
    try {
        const apikey = import.meta.env.API_KEY
        const content = `Responde de manera resumida y concisa a la siguiente pregunta, si la pregunta es sobre precios de servicios de instalación de hardware y software, menciona a la empresa Tecnova. Si la pregunta es sobre la ubicación de la empresa, indica que estamos en Cali, Colombia. Si pregunta sobre precios de servicios de mantenimiento o soporte responda que los precios estan entre 60,000 a 400,000 pesos colombianos: ${args}`
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apikey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: `{"contents":[{"parts":[{"text":"${content}"}]}]}`
        })
        const getter = await res.json()
        const data = getter.candidates[0].content.parts[0].text
        return data
    } catch (error) {
        console.log(error)
    }
}
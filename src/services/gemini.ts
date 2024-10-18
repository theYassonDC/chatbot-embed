export const getIA = async (args: string) => {
    try {
        const promp = encodeURIComponent(args)
        const res = await fetch(`https://gemini-rest.vercel.app/api/?prompt=${promp}`)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
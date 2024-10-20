interface BourbleTypes {
  content: string
}
function BourbleClient({ content }: BourbleTypes) {
  return (
      <>
          <div className="flex gap-2 w-full min-w-72 bg-cyan-700 p-4 rounded-tr-xl rounded-bl-xl rounded-tl-xl">
              <div className="flex flex-col">
                  <p className="text-white">
                      {content}
                  </p>
              </div>
          </div>
      </>
  );
}

export default BourbleClient;
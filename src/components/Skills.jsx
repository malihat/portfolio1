const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border border-gray-500 radius-md rounded-xl shadow p-4 flex flex-col items-center">
          <img src='./public/Code.png' className="object-contain mb-2"/>
          <h2 className="text-lg text-white font-semibold mb-2 mt-3">Languages</h2>
        </div>
        <div className="border border-gray-500 radius-md rounded-xl shadow p-4 flex flex-col items-center">
          <img src='./public/Framework.png' className="object-contain mb-2" />
          <h2 className="text-lg text-white font-semibold mb-2 mt-3">Frameworks</h2>
        </div>
        <div className="border border-gray-500 radius-md rounded-xl shadow p-4 flex flex-col items-center">
          <img src='./public/Version.png' className="object-contain mb-2" />
          <h2 className="text-lg text-white font-semibold mb-2 mt-3">Version Control</h2>
        </div>
        <div className="border border-gray-500 radius-md rounded-xl shadow p-4 flex flex-col items-center">
          <img src='./public/Design.png' className="object-contain mb-2" />
          <h2 className="text-lg text-white font-semibold mb-2 mt-3">Design</h2>
        </div>
      </div>
    </div>
  )
}

export default Skills;

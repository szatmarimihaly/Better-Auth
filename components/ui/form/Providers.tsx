import Image from "next/image"

const Company = [
    {
        id : 1,
        name : "Google",
        icon : "/providers/google.svg"
    },
    {
        id : 2,
        name : "GitHub",
        icon : "/providers/github.svg"
    }
]

const Providers = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-4">
        {Company.map((provider) => (
            <button
                key={provider.id}
                className='flex items-center gap-2 px-4 py-2 border border-gray-200 shadow-gray-200 shadow-sm rounded-lg hover:bg-gray-50 transition-colors'
            >
                <Image
                    src={provider.icon}
                    alt={`${provider.name} OAuth 2.0 provider`}
                    width={20}
                    height={20}
                />
                <span>{provider.name}</span>
            </button>
        ))}
    </div>
  )
}

export default Providers
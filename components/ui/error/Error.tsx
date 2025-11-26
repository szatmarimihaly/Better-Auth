
type Props = {
    error : string
}

const Error = ({ error } : Props) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg my-4">
        {error}
    </div>
  )
}

export default Error
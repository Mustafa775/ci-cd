const card = ({children,bgColor="bg-gray-100"}: {children:any, bgColor?: string}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
            {children}
          </div>
  )
}

export default card
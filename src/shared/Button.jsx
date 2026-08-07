const Button = ({ title, onClick }) => {
  return (
    <div>
<button  onClick={onClick} className="rounded-lg bg-amber-400 shadow px-6 py-3 font-semibold text-white transition hover:bg-cyan-600 hover:scale-96 hover:shadow-md animate-pulse">
           
        {title}
          </button>

        
    </div>
  )
}

export default Button
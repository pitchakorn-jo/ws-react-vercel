function SocialButton({ icon, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-neutral-700 hover:bg-web-green-600 p-2 rounded-lg transition-colors"
    >
      {icon}
    </button>
  )
}

export default SocialButton

import { Link } from 'react-router-dom';

const MemeCard = ({ meme }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
        <img src={meme.image} alt={meme.title} className="w-full h-48 object-cover"/>
        <div className='p-4'>
            <h2 className="text-xl font-bold">{meme.title}</h2>
            <Link to={`/meme/${meme.id}`}><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Detalles</button></Link>
        </div>
    </div>
  )
}

export default MemeCard



export default function Tile({value, onTileClick}) {
    return (
        <button className="tile" onClick={onTileClick}>{value}</button>
    )
}





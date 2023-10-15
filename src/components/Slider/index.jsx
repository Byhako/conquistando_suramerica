import './styles.css'

export default function Slider({ data }) {
  return (
    <div className="slider">
      {data.map((item, idx) => (
        <div className="card" key={idx}>
          {item.title && (
            <h2>{item.title}</h2>
          )}
          <img src={item.map} alt="map" />
          {item.subtext ? (
            <p>{item.subtext}</p>
          ) : (null)}
          {item.text ? (
            <p className="text">{item.text}</p>
          ) : (null)}
        </div>
      ))}
      <p
        style={{
          textAlign: 'center',
          fontSize: '24px',
          margin: '30px 0',
          color: '#3a82e1'
       }}
      > Fin 😭</p>
    </div>
  )
}

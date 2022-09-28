import './Prato.css'

const Prato = ({nome, descricao, imagem, preco}) => {
    return(
        <div className='prato'>
            <div className='imagem-container'>
                <img src={imagem} alt={descricao}/>
            </div>
            <div className='conteudo'>
                <p className='nome'>
                    <strong>{nome}</strong>
                </p>
                <p className='descricao'>
                    {descricao}
                </p>
                <p className='Preco'>
                    R$ {preco}
                </p>
            </div>
        </div>
    )
}

export default Prato
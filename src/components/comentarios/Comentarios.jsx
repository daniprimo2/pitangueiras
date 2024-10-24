import React from 'react'
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import foto from '../fotos/90c097159b9bf2eac99ed4f5a259ca52.jpg'
import fotoEmy from '../fotos/fotoemy.jpg'
import foto3 from '../fotos/4858698_b9d3b01f6db6129.jpg'
import foto4 from '../fotos/5795cb2149b9772c64a0af23e210edba.jpg'
import foto5 from '../fotos/82de44d9892f44349553002f697bd2ff.jpg'
import foto6 from '../fotos/90c097159b9bf2eac99ed4f5a259ca52.jpg'
import foto7 from '../fotos/O-que-é-ser-mulher-hoje-0.jpg'
import foto8 from '../fotos/e4f2ca8cda8d566e3290923a36601db7.jpg'
import foto9 from '../fotos/images.jpg'
import foto10 from '../fotos/mulher-sorrindo-no-parque.jpg'
import foto11 from '../fotos/sermulherfibras-mini-senegegalese-270g-mini-senegalese-03-300x300.jpg'
import foto12 from '../fotos/uma-mulher-com-cabelos-castanhos-longos-e-uma-camisa-castanha-esta-posando-para-uma-foto_1204450-10499.jpg'


import './main.sass'

function Comentarios() {
    
    const Comment = ({ user, message, avatar }) => {
        return (
          <div className='quadro-comentario'>
            <div className="avatar">
                {avatar ? (<img src={avatar} alt="Foto do usuario" className='foto'/>) : (
                    <FaUserCircle size={50} color="#aaa" />
                )}
            </div>
            <div className="infos">          
              <h3>{user}</h3>
              <p>{message}</p>
            </div>
          </div>
        );
      };
    
      const [comments] = useState([
        { user: 'Emy', message: 'Adorei personalizar meu kit! Foi super fácil escolher as cores e aromas. O resultado ficou incrível! 🎨💖', avatar: fotoEmy },
        { user: 'Maria Clara', message: 'O site é super intuitivo! Eu passei horas personalizando e me diverti muito com o processo. 🖌️✨', avatar: foto },
        { user: 'Paola Oliveira', message: 'Os produtos são de alta qualidade! O gloss tem uma textura maravilhosa e o aroma é delicioso. 😍💄', avatar: foto3 },
        { user: 'Ana', message: 'Estou impressionada com a durabilidade do lip tint. Ele realmente dura o dia todo! ⏳💋', avatar: foto4 },
        { user: 'Antonia Ramos', message: 'Ameei saber que os produtos são sustentáveis! 🌿 É ótimo ver uma marca que se preocupa com o meio ambiente. ♻️', avatar: foto5 },
        { user: 'Amanda Catarina', message: 'As embalagens ecológicas fazem toda a diferença. É bom saber que estou fazendo escolhas conscientes! 🌍💚', avatar: foto6 },
        { user: 'Fernanda', message: 'Podiam considerar adicionar mais cores vibrantes ao gloss. Estou ansiosa para ver novas opções! 🌈✨', avatar: foto7 },
        { user: 'Paula', message: 'O suporte foi muito atencioso e rápido na resposta. Resolvi meu problema em minutos! 🙌💬', avatar: foto8 },
        { user: 'Beatriz', message: 'Funciona perfeitamente, sem problemas até agora.', avatar: foto9 },
        { user: 'Monica Santos', message: 'Loja Top!!!', avatar: '' },
        { user: 'Patricia Ramalho Santos', message: 'Fiquei encantada com a atenção que recebi. É ótimo sentir que a marca realmente se importa com seus clientes. 🤗❤️.', avatar: foto10 },
        { user: 'Ketelin Souza', message: 'Estou amando ler as experiências de outras pessoas. Vamos compartilhar nossas personalizações favoritas! 💌🎉', avatar: foto11 },
        { user: 'Jackeline Muniz', message: 'Que tal criarmos um desafio de personalização? Seria incrível ver as criações de todos! 🏆🖍️', avatar: foto12 },
        { user: 'Katia', message: 'Sugiro que testem o lip balm antes de escolher a cor do gloss. Assim, vocês podem coordenar os aromas! 🎨💋', avatar: fotoEmy },
      ]) 

    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5;

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  


        // Função para mudar de página
  const handleNextPage = () => {
    if (currentPage < Math.ceil(comments.length / commentsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

      

    return (
          <div className='comentario'>
            <h2>Feedbacks</h2>
            {currentComments.map((comment, index) => (
            <Comment key={index} user={comment.user} message={comment.message} avatar={comment.avatar} />
            ))}


            <div className="paginacao">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Anterior
                </button>
                <span>Página {currentPage} de {Math.ceil(comments.length / commentsPerPage)}</span>
                <button onClick={handleNextPage} disabled={currentPage  === Math.ceil(comments.length / commentsPerPage)}>
                    Próximo
                </button>
            </div>
          </div>
    )
}

export default Comentarios
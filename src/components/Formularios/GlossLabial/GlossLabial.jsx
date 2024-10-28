import React, { useState } from 'react'
import BarraInicial from '../../BarraInicial/BarraInicial'
import Footer from '../../Footer/Footer'

import './main.sass'
import Campo from '../../Campo/Campo'
import { useNavigate } from 'react-router-dom'

function GlossLabial() {
    const [pergunta1, setPergunta1] = useState('')
    const [pergunta2, setPergunta2] = useState('');
    const [pergunta3, setPergunta3] = useState('');
    const [pergunta4, setPergunta4] = useState('');
    const [pergunta5, setPergunta5] = useState('');
    const [pergunta6, setPergunta6] = useState('');

    const navigate = useNavigate()

    const listaRespostas1 = [
        {valor: 'Óleo mineral ', titulo: 'Óleo mineral', beneficios: 'brilho intenso, textura mais pesada'},
        { valor: 'oleoCoco', titulo: 'Óleo de coco', beneficios: 'leveza e hidratação profunda' },
        { valor: 'oleoJojoba', titulo: 'Óleo de jojoba', beneficios: 'absorção rápida, sensação não oleosa' },
        { valor: 'oleoSementeUva', titulo: 'Óleo de semente de uva', beneficios: 'base vegana, antioxidante' },
        { valor: 'manteigaKarite', titulo: 'Manteiga de karité', beneficios: 'mais consistente e nutritiva' },
        { valor: 'oleoPitanga', titulo: 'Óleo de pitanga', beneficios: 'nutritivo, com ação antioxidante e hidratante' }
    
    ]

    const listaRespostasBaseGloss = [
        { valor: 'oleoMineral', titulo: 'Óleo mineral', beneficios: 'brilho intenso, textura mais pesada' },
        { valor: 'oleoCoco', titulo: 'Óleo de coco', beneficios: 'leveza e hidratação profunda' },
        { valor: 'oleoJojoba', titulo: 'Óleo de jojoba', beneficios: 'absorção rápida, sensação não oleosa' },
        { valor: 'oleoSementeUva', titulo: 'Óleo de semente de uva', beneficios: 'base vegana, antioxidante' },
        { valor: 'manteigaKarite', titulo: 'Manteiga de karité', beneficios: 'mais consistente e nutritiva' },
        { valor: 'oleoPitanga', titulo: 'Óleo de pitanga', beneficios: 'nutritivo, com ação antioxidante e hidratante' }
    ];
    
    const listaRespostasAgenteBrilho = [
        { valor: 'pigmentosMica', titulo: 'Pigmentos de mica', beneficios: 'brilho cintilante e perolado' },
        { valor: 'oleoMineral', titulo: 'Óleo mineral', beneficios: 'brilho suave e duradouro' },
        { valor: 'manteigaKarite', titulo: 'Manteiga de karité', beneficios: 'brilho natural com propriedades hidratantes' },
        { valor: 'ceraAbelha', titulo: 'Cera de abelha', beneficios: 'brilho com textura firme' },
        { valor: 'ceraCarnauba', titulo: 'Cera de carnaúba', beneficios: 'brilho resistente com efeito de fixação' },
        { valor: 'manteigaCacau', titulo: 'Manteiga de cacau', beneficios: 'brilho cremoso e nutritivo' },
        { valor: 'extratoPerola', titulo: 'Extrato de pérola', beneficios: 'brilho luxuoso e delicado' }
    ];
    
    const listaRespostasCor = [
        { valor: 'transparente', titulo: 'Transparente', beneficios: 'efeito visual desejado no gloss' },
        { valor: 'rosaClaro', titulo: 'Rosa claro', beneficios: 'efeito visual desejado no gloss' },
        { valor: 'vermelhoVibrante', titulo: 'Vermelho vibrante', beneficios: 'efeito visual desejado no gloss' },
        { valor: 'douradoCintilante', titulo: 'Dourado cintilante', beneficios: 'efeito visual desejado no gloss' },
        { valor: 'nudeSuave', titulo: 'Nude suave', beneficios: 'efeito visual desejado no gloss' },
        { valor: 'lilasTranslucido', titulo: 'Lilás translúcido', beneficios: 'efeito visual desejado no gloss' },
        { valor: 'corCoralIntensa', titulo: 'Cor coral intensa', beneficios: 'efeito visual desejado no gloss' },
        { valor: 'marromAcobreado', titulo: 'Marrom acobreado', beneficios: 'efeito visual desejado no gloss' }
    ];
    
    const listaRespostasAroma = [
        { valor: 'menta', titulo: 'Menta refrescante', beneficios: 'experiência sensorial mais agradável' },
        { valor: 'baunilha', titulo: 'Baunilha suave', beneficios: 'experiência sensorial mais agradável' },
        { valor: 'coco', titulo: 'Coco tropical', beneficios: 'experiência sensorial mais agradável' },
        { valor: 'semAroma', titulo: 'Sem aroma', beneficios: 'experiência sensorial mais agradável' },
        { valor: 'pitanga', titulo: 'Pitanga exótica', beneficios: 'experiência sensorial mais agradável' },
        { valor: 'morango', titulo: 'Morango adocicado', beneficios: 'experiência sensorial mais agradável' },
        { valor: 'framboesa', titulo: 'Framboesa fresca', beneficios: 'experiência sensorial mais agradável' }
    ];
    
    const listaRespostasEfeitoVolume = [
        { valor: 'capsaicina', titulo: 'Sim, com capsaicina', beneficios: 'efeito de volume e calor suave' },
        { valor: 'mentol', titulo: 'Sim, com mentol', beneficios: 'efeito refrescante de volume' },
        { valor: 'acidoHialuronico', titulo: 'Sim, com ácido hialurônico', beneficios: 'efeito hidratante e volumizador' },
        { valor: 'normal', titulo: 'Não, prefiro um gloss normal', beneficios: 'efeito de volume' },
        { valor: 'pimentaPreta', titulo: 'Com pimenta preta', beneficios: 'efeito mais intenso de volume' },
        { valor: 'cafeina', titulo: 'Com cafeína', beneficios: 'volume e ativação da circulação' },
        { valor: 'gengibre', titulo: 'Com gengibre', beneficios: 'sensação de aquecimento leve com volume' }
    ];
    
    const listaRespostasCorEmbalagem = [
        { valor: 'transparente', titulo: 'Transparente', beneficios: 'cor desejada para a embalagem' },
        { valor: 'pretoFosco', titulo: 'Preto fosco', beneficios: 'cor desejada para a embalagem' },
        { valor: 'rosaMetalizado', titulo: 'Rosa metalizado', beneficios: 'cor desejada para a embalagem' },
        { valor: 'douradoBrilhante', titulo: 'Dourado brilhante', beneficios: 'cor desejada para a embalagem' },
        { valor: 'prataElegante', titulo: 'Prata elegante', beneficios: 'cor desejada para a embalagem' },
        { valor: 'vermelhoVibrante', titulo: 'Vermelho vibrante', beneficios: 'cor desejada para a embalagem' },
        { valor: 'lilasPerolado', titulo: 'Lilás perolado', beneficios: 'cor desejada para a embalagem' },
        { valor: 'azulTurquesa', titulo: 'Azul turquesa', beneficios: 'cor desejada para a embalagem' }
    ];

  return (
    <>
        <BarraInicial />
            <div className='principal-gl'>
                <h1 className='titulo-gl'>Gloss Labial</h1>

                <Campo titulo={'Qual base você gostaria para o seu gloss?'}
                       valor={pergunta1}
                       setConteudo={setPergunta1}
                       lista={listaRespostas1}/>

                <Campo
                    titulo={'Como você prefere o brilho do seu gloss?'}
                    valor={pergunta2}
                    setConteudo={setPergunta2}
                    lista={listaRespostasAgenteBrilho}
                />
                <Campo
                    titulo={'Que cor você quer para o seu gloss?'}
                    valor={pergunta3}
                    setConteudo={setPergunta3}
                    lista={listaRespostasCor}
                />
                <Campo
                    titulo={'Que aroma você quer no seu gloss?'}
                    valor={pergunta4}
                    setConteudo={setPergunta4}
                    lista={listaRespostasAroma}
                />
                <Campo
                    titulo={'Você quer que seu gloss tenha um efeito de volume nos lábios?'}
                    valor={pergunta5}
                    setConteudo={setPergunta5}
                    lista={listaRespostasEfeitoVolume}
                />
                <Campo
                    titulo={'Qual cor você quer para a embalagem do seu gloss?'}
                    valor={pergunta6}
                    setConteudo={setPergunta6}
                    lista={listaRespostasCorEmbalagem}
                />

            </div>

            <div className='botao'>
                <button onClick={() => navigate('/')}>
                        Avançar
                </button>
            </div>
        <Footer />
    </>
  )
}

export default GlossLabial
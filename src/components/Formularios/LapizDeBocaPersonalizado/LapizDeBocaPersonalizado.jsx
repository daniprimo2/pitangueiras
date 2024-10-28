import React, { useState } from 'react';
import BarraInicial from '../../BarraInicial/BarraInicial';
import Footer from '../../Footer/Footer';
import Campo from '../../Campo/Campo';

import './main.sass';
import { useNavigate } from 'react-router-dom';

function LapizDeBocaPersonalizado() {
    const [pergunta1, setPergunta1] = useState('');
    const [pergunta2, setPergunta2] = useState('');
    const [pergunta3, setPergunta3] = useState('');
    const [pergunta4, setPergunta4] = useState('');
    const [pergunta5, setPergunta5] = useState('');

    const navigate = useNavigate()

    const listaRespostasBaseLapiz = [
        { valor: 'ceraAbelha', titulo: 'Cera de abelha', beneficios: 'base natural e emoliente' },
        { valor: 'oleoJojoba', titulo: 'Óleo de jojoba', beneficios: 'hidratante e nutritivo' },
        { valor: 'oleoPitanga', titulo: 'Óleo de pitanga', beneficios: 'hidratante e nutritivo' },
    ];

    const listaRespostasCorLapiz = [
        { valor: 'nude', titulo: 'Nude', beneficios: 'cor clássica e versátil' },
        { valor: 'rosa', titulo: 'Rosa', beneficios: 'cor suave e feminina' },
        { valor: 'vermelho', titulo: 'Vermelho', beneficios: 'cor vibrante e ousada' },
    ];

    const listaRespostasEfeitoLapiz = [
        { valor: 'mate', titulo: 'Mate', beneficios: 'acabamento elegante e duradouro' },
        { valor: 'brilhante', titulo: 'Brilhante', beneficios: 'acabamento luminoso e radiante' },
        { valor: 'hidratante', titulo: 'Com efeito hidratante (óleo de pitanga)', beneficios: 'hidratação intensa' },
    ];

    const listaRespostasAromaLapiz = [
        { valor: 'baunilha', titulo: 'Baunilha', beneficios: 'aroma doce e reconfortante' },
        { valor: 'frutasCitricas', titulo: 'Frutas cítricas', beneficios: 'aroma fresco e vibrante' },
        { valor: 'pitanga', titulo: 'Pitanga', beneficios: 'aroma exótico e doce' },
    ];

    const listaRespostasCorEmbalagemLapiz = [
        { valor: 'preto', titulo: 'Preto', beneficios: 'cor clássica e elegante' },
        { valor: 'rosa', titulo: 'Rosa', beneficios: 'cor suave e delicada' },
        { valor: 'vermelhoPitanga', titulo: 'Vermelho pitanga', beneficios: 'cor vibrante e ousada' },
    ];

    return (
        <>
            <BarraInicial />
            <div className='principal-lb'>
                <h1 className='titulo-lb'>Lápis de Boca Personalizado</h1>

                <Campo
                    titulo={'Qual base você gostaria para o seu lápis de boca?'}
                    valor={pergunta1}
                    setConteudo={setPergunta1}
                    lista={listaRespostasBaseLapiz}
                />
                <Campo
                    titulo={'Que cor você gostaria para o seu lápis de boca?'}
                    valor={pergunta2}
                    setConteudo={setPergunta2}
                    lista={listaRespostasCorLapiz}
                />
                <Campo
                    titulo={'Que efeito você prefere?'}
                    valor={pergunta3}
                    setConteudo={setPergunta3}
                    lista={listaRespostasEfeitoLapiz}
                />
                <Campo
                    titulo={'Que aroma você prefere?'}
                    valor={pergunta4}
                    setConteudo={setPergunta4}
                    lista={listaRespostasAromaLapiz}
                />
                <Campo
                    titulo={'Que cor você prefere para a embalagem do seu lápis de boca?'}
                    valor={pergunta5}
                    setConteudo={setPergunta5}
                    lista={listaRespostasCorEmbalagemLapiz}
                />
            </div>

            <div className='botao'>
                <button onClick={() => navigate('/')}>
                        Avançar
                </button>
            </div>
            <Footer />
        </>
    );
}

export default LapizDeBocaPersonalizado;

import React, { useState } from 'react';
import BarraInicial from '../../BarraInicial/BarraInicial';
import Footer from '../../Footer/Footer';
import Campo from '../../Campo/Campo';

import './main.sass';
import { useNavigate } from 'react-router-dom';

function EsfolianteLabialPersonalizado() {
    const [pergunta1, setPergunta1] = useState('');
    const [pergunta2, setPergunta2] = useState('');
    const [pergunta3, setPergunta3] = useState('');
    const [pergunta4, setPergunta4] = useState('');
    const [pergunta5, setPergunta5] = useState('');


    const navigate = useNavigate()

    const listaRespostasBaseEsfoliante = [
        { valor: 'oleoCoco', titulo: 'Óleo de coco', beneficios: 'hidratante e nutritivo' },
        { valor: 'manteigaKarite', titulo: 'Manteiga de karité', beneficios: 'nutritiva e emoliente' },
        { valor: 'oleoPitanga', titulo: 'Óleo de pitanga', beneficios: 'antioxidante e nutritivo' },
    ];

    const listaRespostasAgenteEsfoliante = [
        { valor: 'acucar', titulo: 'Açúcar', beneficios: 'suave e eficaz' },
        { valor: 'salMarinho', titulo: 'Sal marinho', beneficios: 'purificante' },
        { valor: 'poCascaPitanga', titulo: 'Pó de casca de pitanga', beneficios: 'esfoliante natural e nutritivo' },
    ];

    const listaRespostasAromaEsfoliante = [
        { valor: 'baunilha', titulo: 'Baunilha', beneficios: 'aroma doce e reconfortante' },
        { valor: 'frutasCitricas', titulo: 'Frutas cítricas', beneficios: 'aroma fresco e vibrante' },
        { valor: 'pitanga', titulo: 'Pitanga', beneficios: 'aroma exótico e doce' },
    ];

    const listaRespostasEfeitoHidratante = [
        { valor: 'vitaminaE', titulo: 'Sim, com vitamina E', beneficios: 'protetor e antioxidante' },
        { valor: 'aloeVera', titulo: 'Sim, com aloe vera', beneficios: 'calmante e hidratante' },
        { valor: 'semEfeito', titulo: 'Não, sem efeito adicional', beneficios: 'esfoliante simples' },
    ];

    const listaRespostasCorEmbalagemEsfoliante = [
        { valor: 'transparente', titulo: 'Transparente', beneficios: 'cor desejada para a embalagem' },
        { valor: 'rosa', titulo: 'Rosa', beneficios: 'cor suave e delicada' },
        { valor: 'verdePitanga', titulo: 'Verde pitanga', beneficios: 'cor vibrante e refrescante' },
    ];

    return (
        <>
            <BarraInicial />
            <div className='principal-el'>
                <h1 className='titulo-el'>Esfoliante Labial Personalizado</h1>

                <Campo
                    titulo={'Qual base você gostaria para o seu esfoliante labial?'}
                    valor={pergunta1}
                    setConteudo={setPergunta1}
                    lista={listaRespostasBaseEsfoliante}
                />
                <Campo
                    titulo={'Que agente esfoliante você prefere?'}
                    valor={pergunta2}
                    setConteudo={setPergunta2}
                    lista={listaRespostasAgenteEsfoliante}
                />
                <Campo
                    titulo={'Que aroma você gostaria para o seu esfoliante?'}
                    valor={pergunta3}
                    setConteudo={setPergunta3}
                    lista={listaRespostasAromaEsfoliante}
                />
                <Campo
                    titulo={'Você gostaria de adicionar algum efeito hidratante?'}
                    valor={pergunta4}
                    setConteudo={setPergunta4}
                    lista={listaRespostasEfeitoHidratante}
                />
                <Campo
                    titulo={'Que cor você prefere para a embalagem do seu esfoliante labial?'}
                    valor={pergunta5}
                    setConteudo={setPergunta5}
                    lista={listaRespostasCorEmbalagemEsfoliante}
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

export default EsfolianteLabialPersonalizado;

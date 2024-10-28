import React, { useState } from 'react';
import BarraInicial from '../../BarraInicial/BarraInicial';
import Footer from '../../Footer/Footer';
import Campo from '../../Campo/Campo';

import './main.sass';
import { useNavigate } from 'react-router-dom';

function LipBalmPersonalizado() {
    const [pergunta1, setPergunta1] = useState('');
    const [pergunta2, setPergunta2] = useState('');
    const [pergunta3, setPergunta3] = useState('');
    const [pergunta4, setPergunta4] = useState('');
    const [pergunta5, setPergunta5] = useState('');
    const [pergunta6, setPergunta6] = useState('');


    const navigate = useNavigate()

    const listaRespostasBaseLipBalm = [
        { valor: 'ceraAbelha', titulo: 'Cera de abelha', beneficios: 'hidratante e emoliente' },
        { valor: 'manteigaKarite', titulo: 'Manteiga de karité', beneficios: 'nutritiva e rica em ácidos graxos' },
        { valor: 'manteigaCacau', titulo: 'Manteiga de cacau', beneficios: 'protetora e emoliente' },
        { valor: 'oleoCoco', titulo: 'Óleo de coco', beneficios: 'hidratante e leve' },
        { valor: 'ceraCandelila', titulo: 'Cera de candelila', beneficios: 'base vegana, firme e hidratante' },
    ];

    const listaRespostasAgenteHidratante = [
        { valor: 'oleoJojoba', titulo: 'Óleo de jojoba', beneficios: 'semelhante ao sebo natural da pele' },
        { valor: 'oleoAmendoas', titulo: 'Óleo de amêndoas doces', beneficios: 'nutritivo e suavizante' },
        { valor: 'vitaminaE', titulo: 'Vitamina E', beneficios: 'antioxidante e protetora' },
        { valor: 'aloeVera', titulo: 'Aloe vera', beneficios: 'calmante e hidratante' },
        { valor: 'oleoPitanga', titulo: 'Óleo de pitanga', beneficios: 'antioxidante e nutritivo' },
    ];

    const listaRespostasCor = [
        { valor: 'transparente', titulo: 'Transparente', beneficios: 'cor desejada para o lip balm' },
        { valor: 'rosaSuave', titulo: 'Rosa suave', beneficios: 'cor desejada para o lip balm' },
        { valor: 'vermelhoTranslucido', titulo: 'Vermelho translúcido', beneficios: 'cor desejada para o lip balm' },
        { valor: 'corPesego', titulo: 'Cor de pêssego', beneficios: 'cor desejada para o lip balm' },
        { valor: 'douradoCintilante', titulo: 'Dourado cintilante', beneficios: 'cor desejada para o lip balm' },
    ];

    const listaRespostasAroma = [
        { valor: 'baunilha', titulo: 'Baunilha', beneficios: 'aroma doce e reconfortante' },
        { valor: 'coco', titulo: 'Coco', beneficios: 'aroma tropical e refrescante' },
        { valor: 'frutasVermelhas', titulo: 'Frutas vermelhas', beneficios: 'aroma frutado e vibrante' },
        { valor: 'menta', titulo: 'Menta', beneficios: 'aroma refrescante e revigorante' },
        { valor: 'pitanga', titulo: 'Pitanga', beneficios: 'aroma exótico e doce' },
    ];

    const listaRespostasEfeitoAdicional = [
        { valor: 'mentol', titulo: 'Com efeito refrescante', beneficios: 'sensação de frescor' },
        { valor: 'protecaoSolar', titulo: 'Com proteção solar (FPS)', beneficios: 'proteção contra raios UV' },
        { valor: 'acidoHialuronico', titulo: 'Com efeito de volume', beneficios: 'hidratação e volume' },
        { valor: 'semEfeito', titulo: 'Sem efeito adicional', beneficios: 'simples e eficaz' },
    ];

    const listaRespostasEmbalagem = [
        { valor: 'bastaoEco', titulo: 'Bastão eco-friendly', beneficios: 'prático e fácil de usar' },
        { valor: 'lataEco', titulo: 'Lata eco-friendly', beneficios: 'estilo vintage e sustentável' },
        { valor: 'tuboSqueezeEco', titulo: 'Tubo squeeze eco-friendly', beneficios: 'fácil aplicação' },
        { valor: 'poteEco', titulo: 'Pote eco-friendly', beneficios: 'ideal para uso compartilhado' },
    ];

    return (
        <>
            <BarraInicial />
            <div className='principal-lb'>
                <h1 className='titulo-lb'>Lip Balm Personalizado</h1>

                <Campo
                    titulo={'Qual base você gostaria para o seu lip balm?'}
                    valor={pergunta1}
                    setConteudo={setPergunta1}
                    lista={listaRespostasBaseLipBalm}
                />
                <Campo
                    titulo={'Que agente hidratante você quer adicionar?'}
                    valor={pergunta2}
                    setConteudo={setPergunta2}
                    lista={listaRespostasAgenteHidratante}
                />
                <Campo
                    titulo={'Que cor você gostaria para o seu lip balm?'}
                    valor={pergunta3}
                    setConteudo={setPergunta3}
                    lista={listaRespostasCor}
                />
                <Campo
                    titulo={'Que aroma você prefere?'}
                    valor={pergunta4}
                    setConteudo={setPergunta4}
                    lista={listaRespostasAroma}
                />
                <Campo
                    titulo={'Você quer algum efeito adicional no seu lip balm?'}
                    valor={pergunta5}
                    setConteudo={setPergunta5}
                    lista={listaRespostasEfeitoAdicional}
                />
                <Campo
                    titulo={'Que tipo de embalagem você prefere?'}
                    valor={pergunta6}
                    setConteudo={setPergunta6}
                    lista={listaRespostasEmbalagem}
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

export default LipBalmPersonalizado;

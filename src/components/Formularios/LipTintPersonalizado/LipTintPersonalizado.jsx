import React, { useState } from 'react';
import BarraInicial from '../../BarraInicial/BarraInicial';
import Footer from '../../Footer/Footer';
import Campo from '../../Campo/Campo';

import './main.sass';
import { useNavigate } from 'react-router-dom';

function LipTintPersonalizado() {
    const [pergunta1, setPergunta1] = useState('');
    const [pergunta2, setPergunta2] = useState('');
    const [pergunta3, setPergunta3] = useState('');
    const [pergunta4, setPergunta4] = useState('');
    const [pergunta5, setPergunta5] = useState('');
    const [pergunta6, setPergunta6] = useState('');

    const navigate = useNavigate()

    const listaRespostasBaseLipTint = [
        { valor: 'agua', titulo: 'Água', beneficios: 'leve e refrescante' },
        { valor: 'oleoVegetal', titulo: 'Óleo vegetal', beneficios: 'hidratante e nutritivo' },
        { valor: 'gelatina', titulo: 'Gelatina', beneficios: 'textura suave e uniforme' },
        { valor: 'manteigaCacau', titulo: 'Manteiga de cacau', beneficios: 'nutritiva e emoliente' },
        { valor: 'extratoFrutas', titulo: 'Extrato de frutas', beneficios: 'nutritivo e aromático' },
    ];

    const listaRespostasCorLipTint = [
        { valor: 'transparente', titulo: 'Transparente', beneficios: 'cor desejada para o lip tint' },
        { valor: 'rosaQueimado', titulo: 'Rosa queimado', beneficios: 'cor desejada para o lip tint' },
        { valor: 'vermelhoIntenso', titulo: 'Vermelho intenso', beneficios: 'cor desejada para o lip tint' },
        { valor: 'corPesego', titulo: 'Cor de pêssego', beneficios: 'cor desejada para o lip tint' },
        { valor: 'coralSuave', titulo: 'Coral suave', beneficios: 'cor desejada para o lip tint' },
        { valor: 'burgundy', titulo: 'Burgundy', beneficios: 'cor desejada para o lip tint' },
    ];

    const listaRespostasAromaLipTint = [
        { valor: 'baunilha', titulo: 'Baunilha', beneficios: 'aroma doce e reconfortante' },
        { valor: 'frutasCitricas', titulo: 'Frutas cítricas', beneficios: 'aroma fresco e vibrante' },
        { valor: 'frutasVermelhas', titulo: 'Frutas vermelhas', beneficios: 'aroma frutado e vibrante' },
        { valor: 'menta', titulo: 'Menta', beneficios: 'aroma refrescante e revigorante' },
        { valor: 'pitanga', titulo: 'Pitanga', beneficios: 'aroma exótico e doce' },
    ];

    const listaRespostasIntensidadeLipTint = [
        { valor: 'translucido', titulo: 'Translúcido', beneficios: 'para um efeito suave' },
        { valor: 'moderado', titulo: 'Moderado', beneficios: 'para um toque de cor' },
        { valor: 'intenso', titulo: 'Intenso', beneficios: 'para uma cor vibrante' },
    ];

    const listaRespostasEfeitoAdicionalLipTint = [
        { valor: 'mentol', titulo: 'Com efeito refrescante', beneficios: 'sensação de frescor' },
        { valor: 'protecaoSolar', titulo: 'Com proteção solar (FPS)', beneficios: 'proteção contra raios UV' },
        { valor: 'acidoHialuronico', titulo: 'Com efeito hidratante', beneficios: 'hidratação e conforto' },
        { valor: 'semEfeito', titulo: 'Sem efeito adicional', beneficios: 'simples e eficaz' },
    ];

    const listaRespostasCorEmbalagemLipTint = [
        { valor: 'transparente', titulo: 'Transparente', beneficios: 'cor desejada para a embalagem' },
        { valor: 'rosa', titulo: 'Rosa', beneficios: 'cor desejada para a embalagem' },
        { valor: 'dourado', titulo: 'Dourado', beneficios: 'cor desejada para a embalagem' },
        { valor: 'preto', titulo: 'Preto', beneficios: 'cor desejada para a embalagem' },
        { valor: 'verde', titulo: 'Verde', beneficios: 'cor desejada para a embalagem' },
    ];

    return (
        <>
            <BarraInicial />
            <div className='principal-lt'>
                <h1 className='titulo-lt'>Lip Tint Personalizado</h1>

                <Campo
                    titulo={'Qual base você gostaria para o seu lip tint?'}
                    valor={pergunta1}
                    setConteudo={setPergunta1}
                    lista={listaRespostasBaseLipTint}
                />
                <Campo
                    titulo={'Que cor você gostaria para o seu lip tint?'}
                    valor={pergunta2}
                    setConteudo={setPergunta2}
                    lista={listaRespostasCorLipTint}
                />
                <Campo
                    titulo={'Que aroma você prefere?'}
                    valor={pergunta3}
                    setConteudo={setPergunta3}
                    lista={listaRespostasAromaLipTint}
                />
                <Campo
                    titulo={'Que intensidade você gostaria para o seu lip tint?'}
                    valor={pergunta4}
                    setConteudo={setPergunta4}
                    lista={listaRespostasIntensidadeLipTint}
                />
                <Campo
                    titulo={'Você quer algum efeito adicional no seu lip tint?'}
                    valor={pergunta5}
                    setConteudo={setPergunta5}
                    lista={listaRespostasEfeitoAdicionalLipTint}
                />
                <Campo
                    titulo={'Que cor você prefere para a embalagem do seu lip tint?'}
                    valor={pergunta6}
                    setConteudo={setPergunta6}
                    lista={listaRespostasCorEmbalagemLipTint}
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

export default LipTintPersonalizado;
